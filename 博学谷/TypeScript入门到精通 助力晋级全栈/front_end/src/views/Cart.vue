<template>
  <div class="about">
    <h1>购物车商品列表</h1>
    <ul>
      <li v-for="(item,i) in itemList" :key="i" style="width: 320px;padding: 5px">
        <el-card :body-style="{ padding: '0px',height:'350px' }">
          <img :src="item.pic" class="image" style="padding-top: 30px;" alt="">
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.unit_price + '元/' + item.unit }}</time>
              数量：{{ item.quantity }}{{ item.unit }}
              <el-button type="text" class="button" @click="removeFromCart(i)">移除</el-button>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  itemList = [
    {
      name: "美味的汉堡",
      unit: "个",
      unit_price: 1000,
      pic: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      quantity: 10
    },
    {
      name: "美味的汉堡",
      unit: "个",
      unit_price: 1000,
      pic: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      quantity: 10
    },
    {
      name: "美味的汉堡",
      unit: "个",
      unit_price: 1000,
      pic: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      quantity: 10
    },
    {
      name: "美味的汉堡",
      unit: "个",
      unit_price: 1000,
      pic: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      quantity: 10
    },
    {
      name: "美味的汉堡",
      unit: "个",
      unit_price: 1000,
      pic: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      quantity: 10
    }
  ]

  removeFromCart(index: number): void {
    console.log(index);
    //TODO：从购物车中删除商品
  }
}
</script>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  display: block;
}
</style>