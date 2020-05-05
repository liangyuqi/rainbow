<template>
  <canvas id="canvas" height="400" width="400" @click="addPoint">
    你的浏览器不支持WebGL，请更换新的浏览器
  </canvas>
</template>

<script lang="ts">
// @ts-ignore
import App from './multipoint.ts';
export default App;
</script>

<style lang="scss" scoped src="./multipoint.scss"></style>
