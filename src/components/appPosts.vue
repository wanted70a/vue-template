<template lang="html">
    <div class="b-posts">
        <div class='b-posts__post' v-for='post in posts'>
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
import api from '../api/api.services'

export default {
    created(){
       this.$store.dispatch('fetchPosts')
    },
    methods:{
      fetchPosts(){
          return this.$store.dispatch('fetchPosts')
      }
    },
    computed:{
        posts(){
          return this.$store.state.posts;
        }
    }
}
</script>

<style lang="css">
</style>
