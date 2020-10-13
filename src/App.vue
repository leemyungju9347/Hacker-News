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
import listMixins from './mixins/listMixins'


export default {
    data(){
        return{
            loadingStatus:false
        }
    },
    created(){
        bus.$on('start:spinner',this.startSpinner);
        bus.$on('end:spinner',this.endSpinner);

        this.$store.dispatch('FETCH_LIST','news');
        if(this.$route.name !== 'new') {
            this.$router.push('/news')
        }else return
        

    },
    mixins:[listMixins],
    beforeDestroy(){
        bus.$off('start:spinner');
        bus.$off('end:spinner');
    },
    mounted(){
        bus.$emit('start:spinner');
        
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