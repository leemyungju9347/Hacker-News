<template>
  <div class="user_info">
      <strong>user name: {{ userInfo.id }} </strong><br>
      <b>write: {{ userInfo.created }} </b><br>
      <b>Karma: {{ userInfo.karma }} </b>
  </div>
</template>

<script>
export default {
    computed:{
        userInfo(){
            return this.$store.state.user
        }
    },
    created(){
        this.$store.dispatch('FETCH_USER',this.$route.params.id)
    }
}
</script>

<style>
.user_info{padding: 20px;}
</style>