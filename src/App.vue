<template>
  <div class="">
    <h1>{{count}}</h1>
    <button type="button" v-on:click='increase'>Add 20</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
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
