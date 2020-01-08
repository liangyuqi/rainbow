
export function Loadjscssfile(filename: string, filetype: string) {
  return new Promise((resolve, reject) => {
    let fileref
    if (filetype === "js") {
      fileref = document.createElement('script')
      fileref.setAttribute("type", "text/javascript")
      fileref.setAttribute("src", filename)
      fileref.setAttribute("live2dTag", "live2d")
    } else if (filetype === "css") {
      fileref = document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)
      fileref.setAttribute("live2dTag", "live2d")
    }

    if (typeof fileref !== "undefined") {
      document.getElementsByTagName("body")[0].appendChild(fileref)
      fileref.onload = () => {
        resolve()
      }
    }
  })
}


export function Removejscssfile(attribute: string, value: string, filetype: string) {
  let targetelement = (filetype === "js") ? "script" : (filetype === "css") ? "link" : "none"
  // let targetattr = (filetype === "js") ? "src" : (filetype === "css") ? "href" : "none"
  let targetattr = value
  let allsuspects = document.getElementsByTagName(targetelement)
  for (let i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i]!.getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr)!.indexOf(attribute) !== -1) {
      allsuspects[i].remove()
    }
  }
}


export function HttpService(method: string, url: string) {
  return new Promise((resolve, reject) => {
    // 创建一个HTTP请求对象
    let request = new XMLHttpRequest();
    // 使用open（）打开一个新请求
    request.open(method, url,true);
    request.responseType = 'text';
    request.send()
    request.onload = function () {
      let rawData = request.responseText;
      let data = JSON.parse(rawData);
      resolve(data)
    };
  })

}
