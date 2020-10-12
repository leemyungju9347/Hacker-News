<template>
  <div class="loading_bar" v-if="loading">
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
  </div>
</template>

<script>
export default {
  props:['loading']
}
</script>

<style>
.loading_bar {
  position: absolute;
  top: 350px;
  left:50%;
  transform: translateX(-50%);
}
.loading_bar > .obj {
    width: 18px;
    height: 18px;
    background-color:#EA5334;
    float: left;
    margin-top: 15px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    -webkit-animation: object 1s infinite;
    animation: object 1s infinite;
    background-color: salmon;
}

.loading_bar > .obj + .obj { 
  margin-left: 15px;
}

.loading_bar > .obj:nth-child(1) {

}
.loading_bar > .obj:nth-child(2) {
  animation-delay: 0.2s;
}
.loading_bar > .obj:nth-child(3) {
  animation-delay: 0.4s;
}
.loading_bar > .obj:nth-child(4) {
  animation-delay: 0.6s;
}
.loading_bar > .obj:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes object {
  50% {transform: translate(0,-50px);}
}


/* .loading_bar {
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
  background:  #EA5334;
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
} */
</style>