<template>
    <div id="app">
        <Tool-Bar></Tool-Bar>
        <router-view></router-view>
        <Spinner :loading="loadingStatus"></Spinner>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import bus from './utils/bus'

export default {
    data(){
        return{
            loadingStatus:false
        }
    },
    created(){
        const currentRouter = this.$route.name;
        if( currentRouter !== 'news' ){

            this.$router.push('/news')
            // setTimeout(()=>{
            //     this.$router.push('/news').catch(err=>{console.log('위치는 app 라우터 에러',err)})
            // },2000)
            bus.$emit('start:spinner');

        }else return;

        bus.$on('start:spinner',this.startSpinner);
        bus.$on('end:spinner',this.endSpinner);

    },
    beforeDestroy(){
        bus.$off('start:spinner');
        bus.$off('end:spinner');
    },
    components:{
        ToolBar,
        Spinner
    },
    computed:{
        itemList() {
            return this.$store.state.list
        }
    },
    methods:{
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false
        }
    },

    
}
</script>
<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
</style>