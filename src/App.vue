<template>
    <div id="app">
        <Tool-Bar></Tool-Bar>
        <router-view></router-view>
        <Spinner :loading="loadStatus"></Spinner>
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
@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
</style>