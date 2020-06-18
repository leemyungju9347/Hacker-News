<template>
    <div id="app">
        <Tool-Bar></Tool-Bar>
        <router-view></router-view>
        <Spinner></Spinner>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'

export default {
    data(){
        return{
            loadStatus:false
        }
    },
    components:{
        ToolBar,
        Spinner
    },
    methods:{
        startSpinner(){
            this.loadStatus = true
        },
        endSpinner(){
            this.loadStatus = false
        }
    },

    
}
</script>
<style>
  body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
  a {color: black;}
  * {margin:0; padding:0}
  li {list-style-type: none;}
  p + p {margin-top:20px}
  #app {padding:0 20px}
  .content {padding:30px 20px}
</style>