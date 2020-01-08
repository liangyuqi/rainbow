<template>
  <div id="app" v-cloak>
    <div id = 'left-bar'>
    <div id="tools">
      <ul id="panel">
        <li class="text" v-text='version'></li>
        <li class="divide">控制台</li>
        <ul>
          <li id="robot">机器人数量 : </li><input v-model="robotTotals">
          <li id="btn-start">创建 </li>
          <li id="btn-move">移动 </li>
        </ul>
      </ul>
    </div>

    <div id="json" >
      <p>json - view</p>
      <pre v-html='jsonView'></pre>

    </div>

  </div>
  <div id="right-bar">
      <p @click="addLive2d" v-show="!hasLive2d">不要点此o。o</p>
    <p  @click="deleteLive2d" v-show="hasLive2d">影响性能，删除 (暴力删除，其实并没有删干净o。o)</p>
      <!-- <canvas id="mini-canvas" width="100" height="100">
        </canvas> -->
   </div>
  
    <div id="main-canvas">
        <router-view></router-view>
    </div>
  </div>
</template>


<script lang="ts">
  // @ts-ignore
  import App from "./app.ts";
  export default App;
</script>


<style lang='scss' src = './app.scss'></style>
