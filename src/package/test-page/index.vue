<!--
 * @Author: liuxiaoni
 * @Date: 2022-07-05 10:43:11
 * @LastEditors: liuxiaoni
 * @LastEditTime: 2022-07-06 10:19:27
 * @Description: 
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
        default() {
          return 'Welcome to Your Vue.js App'
        }
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: red;
}

</style>
