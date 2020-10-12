<template>
  <header>
    <h1 @click.prevent="logoClick">
      <router-link to="/">Hacker news</router-link>
    </h1>
    <ul class="router-link">
      <li 
      v-for="(list,index) in routerList" 
      :key="index" 
      :class="{active:list.active === 'on'}"
      @click.prevent="routerMove($event,index)">
        <a href="">{{ list.name }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
    data(){
        return{
          routerList:[
            {value:'news',name:'News',active:'on'},
            {value:'ask', name:'Ask',active:'off'},
            {value:'jobs',name:'Jobs',active:'off'},
          ],
        }
    },
    methods:{
      routerMove(event,index) {
        const routeName = this.routerList[index].value;
        const currentRoute = this.$route.name;

        this.listOff();
        this.routerList[index].active = 'on'

        if( currentRoute !== routeName ){
          this.$router.push(`/${routeName}`)
        }else return
      },
      logoClick() {
        console.log('클릭');
        this.listOff();
        this.routerList[0].active = 'on'
      },
      listOff(){
        this.routerList.forEach(item=> item.active = 'off')
      },
    }
}
</script>

<style>
</style>