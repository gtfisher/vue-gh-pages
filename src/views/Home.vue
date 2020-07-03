<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <router-link to="/about">About</router-link>
    &nbsp;
    <router-link to="/more">More</router-link>

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
