<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="$store.commit('add')">+</button>
    {{$store.state.num}}
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
  },
  methods: {
    async getList () {
      let res = await this.API.get('/json/home.json')
      console.log(res)
    }
  },
  mounted () {
  }
}
</script>
