<template>
  <ol class="title-list">
    <li v-for="item in list" :key="item.id">
      <a :href="item.url" target="_blank" class="title">{{ item.title }}</a>
      <router-link :to="`/item/${item.id}`" class="comment">
        <span>({{ item.comments_count }})</span>
      </router-link>
      <br>
      <b>{{ item.time_ago }}</b>
      <span class="user_area" v-if="item.user">
        by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </span>
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
      console.log(this.$router);
      console.log(this.$router.name);
      this.$store.dispatch('FETCH_LIST',this.$route.name);
      localStorage.setItem('nav',this.$route.name);
    }

}
</script>

<style>
</style>