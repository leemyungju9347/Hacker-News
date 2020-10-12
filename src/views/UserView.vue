<template>
  <userInfo></userInfo>
</template>

<script>
import userInfo from '../components/userInfo'
import listMixins from '../mixins/listMixins'

export default {
    components : {userInfo},
    mixins:[listMixins]
}
</script>

<style>
</style>