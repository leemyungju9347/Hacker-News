import Vue from 'vue'
import Vuex from 'vuex'
import {fetchListItem,fetchCommentItem,fetchUserInfo} from '../api/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    commentList:[],
    user:'',
  },
  mutations: {
    SET_LIST(state,list){
      state.list = list
    },
    SET_COMMENT(state,commentList){
      state.commentList = commentList
    },
    SET_USER(state,user){
      state.user = user
    }

  },
  actions: {
    FETCH_LIST(context,pageName){
      return fetchListItem(pageName).then(res=>{
          context.commit('SET_LIST',res.data)

          return res;
      })
      .catch(err=>{
        console.log(err);
        
      })
    },
    FETCH_COMMENT(context,commentId){
      return fetchCommentItem(commentId)
      .then( res =>{
          context.commit('SET_COMMENT',res.data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    FETCH_USER(context,userName){
      return fetchUserInfo(userName).then(res=>{
          context.commit('SET_USER',res.data)

          return res;
      })
      .catch(err=>{
        console.log(err);
        
      })
    },
    
  },
  modules: {
  }
})
