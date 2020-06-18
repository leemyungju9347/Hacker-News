<template>
  <div class="comment_wrap">
      <b>{{ comments.user }}</b>
      <span> - {{ comments.time_ago }}</span>
      <h1>{{ comments.title }}</h1>
      <span v-html="comments.content" class="askContent"></span>
      <ol class="list">
          <li v-for="item in comments_contents" :key="item.id">
              <b>by{{ item.user }}</b>
              <span v-html="item.content"></span>
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
.commentBox{ padding-top:50px; background-color:rgb(250, 241, 223);  }
.commentBox > b{ margin-left:50px; color:#353434; }
.commentBox > span{ color:#353434; }
.commentBox > h1{ margin-left:50px; color:#353434; }
.commentBox > .askContent > p{ padding:0 40px;  }

.commentBox > ol{ margin:0 50px; color:#353434; }
</style>