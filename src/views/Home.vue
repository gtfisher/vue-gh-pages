<template>
  <div class="home">
    <router-link to="/about">About</router-link>
    <router-link to="/more">More</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue (Vue.js) Dummy App on GH-PAGES  App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
