<template>
  <div class="comment_wrap">
      <p>
        <b>{{ comments.user }}</b>
        <span> - {{ comments.time_ago }}</span>
      </p>
      <h3>{{ comments.title }}</h3>
      <!-- <span v-html="comments.content" class="askContent"></span> -->
      <ol class="comment_list">
          <li v-for="item in comments_contents" :key="item.id">
              <span v-html="item.content"></span>
              <b class="user" v-if="item.user">by {{ item.user }}</b>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
    computed:{ //댓글 감싸고 있느 상위 부분
        comments(){
            return this.$store.state.commentList
        },
        comments_contents(){ //댓글들
            return this.$store.state.commentList.comments
        }
    },
    created(){
        const commentId = this.$route.params.id;
        this.$store.dispatch('FETCH_COMMENT', commentId);
       
        
    }

}
</script>

<style>

</style>