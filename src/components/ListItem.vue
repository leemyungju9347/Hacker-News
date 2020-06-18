<template>
  <ol class="list">
    <li v-for="item in list" :key="item.id">
      <b>{{ item.time_ago }}</b>
      <span class="user_area">by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span><br>
      <a :href="item.url">{{ item.title }}</a>
      <router-link :to="`/item/${item.id}`"><i>({{ item.comments_count }})</i></router-link>
    </li>
  </ol>
</template>

<script>
export default {
    computed:{
        list(){
            return this.$store.state.list
        }
    },
    created(){
        this.$store.dispatch('FETCH_LIST',this.$route.name)
        localStorage.setItem('nav',this.$route.name)
        console.log(this.list);
        
    }

}
</script>

<style>
.list {padding:30px}
.list li {padding-left:10px; list-style-type: none}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px;}
.list li > b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
.user_area{padding: 10px;}
</style>