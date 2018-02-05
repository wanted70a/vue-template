import Vue from 'vue'
import Vuex from 'vuex'


import api from '../api/api.services'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count: 0,
      posts:[],
    },
    mutations: {
      increase (state, n ) {
        state.count += n
      },
      fetchPosts(state, data){
          state.posts = data;
          console.log('stae '+state.posts)
      }
  },

  actions:{
      increase(context){
          context.commit('increase')
      },
      fetchPosts(context){
          api.get('/posts')
          .then((response)=>{ context.commit('fetchPosts', response.data) })
      }
  }
})
