<template>
  <comment></comment>
</template>

<script>
import comment from '../components/comment.vue';
import listMixins from '../mixins/listMixins'
export default {
    components:{comment},
    mixins : [listMixins]
}
</script>
