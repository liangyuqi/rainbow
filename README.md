## rainbow

一个基于 WebGL 的简易渲染库

#### 本地开发

运行

```
npm install
npm run dev
```

打包发布

```
npm run build && npm publish // 打包rainbow库
npm run build:page // 打包demo spa
```

```
|-- github
    |-- .DS_Store
    |-- .gitignore
    |-- README.md
    |-- directoryList.md
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- tsconfig.prod.json
    |-- tslint.json
    |-- webpack-build-library.config.js
    |-- webpack-build-page.config.js
    |-- webpack-dev.config.js
    |-- assets
    |-- examples-webgl
    |   |-- .DS_Store
    |   |-- index.html
    |   |-- index.ts
    |   |-- vue-shims.d.ts
    |   |-- enum
    |   |   |-- image.ts
    |   |-- indexedDB
    |   |   |-- indexedDB.ts
    |   |-- live2d
    |   |   |-- textures
    |   |       |-- default-costume.png
    |   |-- mock
    |   |   |-- mock copy.json
    |   |   |-- mock-multiple.json
    |   |   |-- mock.json
    |   |   |-- monitor-ws-data.ts
    |   |-- utils
    |   |   |-- resource.ts
    |   |   |-- utils.ts
    |   |   |-- webgl.ts
    |   |-- vue
    |   |   |-- module
    |   |       |-- app
    |   |           |-- app.scss
    |   |           |-- app.ts
    |   |           |-- app.vue
    |   |           |-- router.ts
    |   |           |-- charts
    |   |           |   |-- README.md
    |   |           |   |-- rainbowCharts.ts
    |   |           |   |-- bar
    |   |           |-- components
    |   |           |   |-- README.md
    |   |           |   |-- mesh
    |   |           |-- webgl
    |   |               |-- README.md
    |   |               |-- arrow
    |   |               |-- cube
    |   |               |-- multipoint
    |   |               |-- point
    |   |               |-- quick-start
    |   |               |-- triangles
    |   |-- webgl
    |       |-- createProgram.ts
    |       |-- initShaders.ts
    |       |-- loadShader.ts
    |-- lib
    |-- src
    |   |-- index.ts
    |   |-- constant
    |   |   |-- index.ts
    |   |-- enum
    |   |   |-- unit.ts
    |   |-- events
    |   |   |-- index.ts
    |   |-- graph
    |   |   |-- mesh.ts
    |   |-- interface
    |   |   |-- generator.ts
    |   |   |-- unit.ts
    |   |-- rainbow
    |   |   |-- index.ts
    |   |   |-- program.ts
    |   |   |-- shader.ts
    |   |   |-- source
    |   |       |-- fsSource.ts
    |   |       |-- vsSource.ts
    |   |-- render
    |   |   |-- generator.ts
    |   |   |-- packer.ts
    |   |   |-- render-object.ts
    |   |   |-- render-unit.ts
    |   |   |-- textfield.ts
    |   |   |-- texture.ts
    |   |-- search
    |   |   |-- searchable-object.ts
    |   |   |-- searcher.ts
    |   |-- utils
    |   |   |-- index.ts
    |   |   |-- jsonView.ts
    |   |   |-- log.ts
    |   |   |-- userAgent.ts
    |   |   |-- uuid.ts
    |   |-- viewport
    |       |-- index.ts
    |-- types

```
