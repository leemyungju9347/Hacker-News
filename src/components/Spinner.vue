<template>
  <div class="loading_bar">
      <div></div>
      <div></div>
      <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.loading_bar {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
}
.loading_bar div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #42b883;
  animation: loading_bar 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading_bar div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.loading_bar div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.loading_bar div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes loading_bar {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}
</style>