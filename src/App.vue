<template>
  <div class="">
    <h1>{{count}} {{name}} {{age}}</h1>
    <button type="button" v-on:click='increase'>Add 20</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed:{
      ...mapState([
          'count',
          'name',
          'age'
      ])
  },
  methods:{
    increase(){
        return this.$store.commit('increase',10)
    }
  }
}
</script>

<style lang="scss">

</style> 
