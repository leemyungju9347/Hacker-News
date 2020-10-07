<template>
  <header>
    <h1>
      Hacker news
      <!-- <router-link to="/">Hacker news</router-link> -->
    </h1>
    <div class="router-link">
      <router-link 
        to="/news"
        :class="{active:isNav.isNews}"
        v-on:click.native="setNav()"
      >news</router-link>
      <router-link 
        to="/ask"
        :class="{active:isNav.isAsk}"
        v-on:click.native="setNav()"
      >ask</router-link>
      <router-link 
        to="/jobs"
        :class="{active:isNav.isJobs}"
        v-on:click.native="setNav()"
      >jobs</router-link>
    </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
           isNav:{
              isNews:true,
              isAsk:false,
              isJobs:false
           }
        }
    },
    methods:{
        setNav(){
          let curName = localStorage.getItem('nav')
          let uppCrrName = curName.charAt(0).toUpperCase() + curName.slice(1);
          console.log(curName);

          for(let item in this.isNav ){
            if( item === `is${uppCrrName}`){
              this.isNav[item] = true
            }else{
              this.isNav[item] = false
            }
          }
        }
    }
}
</script>

<style>
</style>