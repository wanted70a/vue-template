<template>
  <div class="">
    <h1>{{count}}</h1>
    <button type="button" @click='increase(20)'>Add 20</button>
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
    increase(x){
      this.$store.commit({ type:'increase', amount:x})
    }
  }
}
</script>

<style lang="scss">

</style>
