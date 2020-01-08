export class DB {

  public db!: IDBDatabase
  constructor(public indexedDBData: { dataBaseName: string, objectStore: string, keyPath: string, indexKeys: Array<string>, version?: number }) {
    this._init()
  }

  /**
   * 初始化
   */
  _init() {
    let request = this._open()
    request.onerror = (err) => {
      console.error(err)
    }
    request.onupgradeneeded = (event) => {
      this.db = request.result; // == event.target.result
      if (!this.db.objectStoreNames.contains(this.indexedDBData.objectStore)) {
        let objectStore = this.db.createObjectStore(this.indexedDBData.objectStore, { keyPath: this.indexedDBData.keyPath });
        this.indexedDBData.indexKeys.forEach((key) => {
          objectStore.createIndex(key, key, { unique: true });
        })
        this._close()
      }
    }
  }

  /**
   * 增（添加数据）
   * @param payload
   */
  add(payload: IFileData) {
    return new Promise((resolve, reject) => {
      let request = this._open()

      request.onerror = (err) => {
        reject(err) // 重复添加会失败
      }
      request.onsuccess = () => {
        this.db = request.result;
        let req = this.db.transaction([this.indexedDBData.objectStore], 'readwrite')
          .objectStore(this.indexedDBData.objectStore)
          .add(payload);
        this._close()
        req.onsuccess = () => {
          resolve()
        };
        req.onerror = (err) => {
          reject(err);
        };
      }
    })
  }

  /**
   * 删（根据主键添加数据）
   * @param payload
   */
  delete(key: string) {
    return new Promise((resolve, reject) => {
      let request = this._open()

      request.onerror = (err) => {
        reject(err) // 重复添加会失败
      }
      request.onsuccess = () => {
        this.db = request.result;
        let req = this.db.transaction([this.indexedDBData.objectStore], 'readwrite')
          .objectStore(this.indexedDBData.objectStore)
          .delete(key);
        this._close()
        req.onsuccess = () => {
          resolve()
        };
        req.onerror = (err) => {
          reject(err);
        };
      }
    })
  }

  /**
   * 改（更新数据）
   * @param payload
   */
  put(payload: IFileData) {
    return new Promise((resolve, reject) => {
      let request = this._open()

      request.onerror = (err) => {
        reject(err) // 重复添加会失败
      }
      request.onsuccess = () => {
        this.db = request.result;
        let req = this.db.transaction([this.indexedDBData.objectStore], 'readwrite')
          .objectStore(this.indexedDBData.objectStore)
          .put(payload);
        this._close()
        req.onsuccess = () => {
          resolve()
        };
        req.onerror = (err) => {
          reject(err);
        };
      }
    })
  }


  /**
   * 查(根据主键读取数据)
   * todo:目前没有根据索引查的需求
   * @param key
   */
  get(key: string) {
    return new Promise((resolve, reject) => {
      let request = this._open()
      request.onerror = (err) => {
        reject(err)
      }
      request.onsuccess = () => {
        this.db = request.result;
        let req = this.db.transaction([this.indexedDBData.objectStore], 'readonly')
          .objectStore(this.indexedDBData.objectStore)
          .get(key);
        this._close()
        req.onsuccess = () => {
          resolve(req.result);
        };
        req.onerror = (err) => {
          reject(err);
        };
      }
    })
  }

  /**
   * 获取全部主键集合
   */
  keys() {
    return new Promise((resolve, reject) => {
      let request = this._open()
      request.onerror = (err) => {
        reject(err)
      }
      request.onsuccess = () => {
        this.db = request.result;
        let objectStore = this.db.transaction([this.indexedDBData.objectStore], 'readonly').objectStore(this.indexedDBData.objectStore);
        let req = objectStore.openCursor()
        let keys: Array<any> = []
        req.onsuccess = () => {
          // 每次遍历都会进来
          let cursor = req.result;
          if (cursor) {
            keys.push(cursor.key)
            cursor.continue();
          } else {
            this._close()
            resolve(keys);
          }
        };
      }
    })
  }


  destroy() {
    window.indexedDB.deleteDatabase(this.indexedDBData.dataBaseName)
  }

  _open() {
    return window.indexedDB.open(this.indexedDBData.dataBaseName, this.indexedDBData.version)
  }

  _close() {
    this.db.close()
  }
}



export interface IFileData {
  fileName: string,
  content: string
}


