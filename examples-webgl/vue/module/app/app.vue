<template>
  <div id="app" v-cloak>
    <div id="left-bar">
      <img
        src="../../../../assets/images/logo.png"
        height="150"
        style="marginBottom:20"
      />
      <div id="tools">
        <ul id="panel">
          <!-- <li class="text" v-text="version"></li> -->
          <!-- <li class="divide">Rainbow</li> -->
          <!-- <li id="robot"> 矩形 </li><input v-model="robotTotals"> -->
          <!-- <li id="btn-start">创建 </li>
          <li id="btn-move">移动 </li>-->
          <li v-for="route in routes" v-bind:key="route.path">
            <div v-if="route.meta.level === 0">
              <h4 class="route-title">{{ route.meta.desc }}</h4>
              <li v-for="child in route.children" v-bind:key="child.path">
                <router-link :to="{path: route.path + '/' + child.path}" exact>
                  {{ child.meta.desc }}
                </router-link>
              </li>
            </div>
            <div v-else></div>
          </li>
        </ul>
      </div>

      <div id="json">
        <p>json - view</p>
        <pre v-html="jsonView"></pre>
      </div>
    </div>
    <div id="right-bar">
      <p @click="addLive2d" v-show="!hasLive2d">不要点此o。o</p>
      <p @click="deleteLive2d" v-show="hasLive2d">
        影响性能，删除 (暴力删除，其实并没有删干净o。o)
      </p>
      <!-- <canvas id="mini-canvas" width="100" height="100">
      </canvas>-->
    </div>

    <div id="main-canvas">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import App from './app.ts';
export default App;
</script>

<style lang="scss" src="./app.scss"></style>
