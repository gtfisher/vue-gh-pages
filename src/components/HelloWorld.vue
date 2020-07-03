<template>
  <div class="hello">
    <hr>

    <h1>Vue Dummy APP</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <h1>{{ fullName }}</h1>
    <hr>
    <h4>{{ count}}</h4>
    <button @click="incrementCounter()">Increment</button>
    <button @click="decrementCounter()">Decrement</button>

    <h4>analytics V0.2 (added created)</h4>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  public created() {
    console.log("Hello created");
    this.$ga.page(this.$router)

  }


  @Prop() private msg!: string;
  private firstName: string = 'Grant';
  private lastName: string = 'TF';
  private count: number = 0;

  get fullName() {
    return this.firstName + ' '  + this.lastName;
  }

  protected incrementCounter() {
    this.$ga.event({
      eventCategory: 'click',
      eventAction: 'increment',
      eventLabel: 'add one',
      eventValue: 1
    })
    this.count++;
  }

   protected decrementCounter() {
    this.count--;
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
