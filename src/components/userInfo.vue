<template>
  <ul class="user_info">
    <li>
        <span>user name:</span> {{ userInfo.id }}
    </li>
    <li>
          <span>write:</span> {{ userInfo.created }}
    </li>
    <li>
        <span>Karma:</span> {{ userInfo.karma }}
    </li>
  </ul>
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

</style>