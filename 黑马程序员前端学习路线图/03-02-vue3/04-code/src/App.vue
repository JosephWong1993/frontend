<template>
    <h1>这是<i>App.vue</i>根组件</h1>
    <hr/>
    <!--    <h3>abc -&#45;&#45; {{ username }}</h3>
        <hr>
        <p>count值是：{{ count }}</p>
        <button @click="addCount">+1</button>-->
    <MySwiper></MySwiper>
    <MyTest></MyTest>
    <hr/>
    <my-search></my-search>
</template>

<script>
import Search from "./components/02-privateReg/Search.vue";

export default {
    name: 'MyApp',
    data() {
        return {
            username: 'zs',
            count: 0,
        }
    },
    methods: {
        addCount() {
            this.count++;
        }
    },
    components: {
        'my-search': Search
    }
}
</script>

<style lang="less">
h1 {
  color: red;

  i {
    color: blue;
  }
}
</style>
