<template>
  <div class="wrapper">
    <img alt="Vue logo" src="../assets/logo-cc.png">
    <Login/>
  </div>
</template>

<style scoped lang="scss">
  img {
    width: 100%;
  }
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Login from '@/components/Login.vue' // @ is an alias to /src

@Options({
  components: {
    Login
  }
})
export default class HomeView extends Vue {}
</script>
