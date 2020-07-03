<template>
  <div class="hello">
    <hr>
    <h1>{{ msg }}</h1>
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <h1>{{ fullName }}</h1>
    <hr>
    <h4>{{ count}}</h4>
    <button @click="incrementCounter()">Press Me</button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private firstName: string = 'Grant';
  private lastName: string = 'TF';
  private count: number = 0;

  get fullName() {
    return this.firstName + ' '  + this.lastName;
  }

  protected incrementCounter() {
    this.count++;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
