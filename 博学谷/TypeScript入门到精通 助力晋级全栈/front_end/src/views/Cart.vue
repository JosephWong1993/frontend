<template>
  <div class="about">
    <h1>购物车商品列表</h1>
    <ul>
      <li v-for="(item,i) in itemList" :key="i" style="width: 320px;padding: 5px">
        <el-card :body-style="{ padding: '0px',height:'350px' }">
          <img :src="host+item.pic" class="image" style="padding-top: 30px;" alt="">
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ (item.unit_price / 100).toFixed(2) + '元/' + item.unit }}</time>
              数量：{{ item.quantity }}{{ item.unit }}
              <el-button type="text" class="button" @click="removeFromCart(item._id)">移除</el-button>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
    <el-button type="primary" v-if="itemList.length>0" @click="submitOrder">提交订单</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import API from '../lib/api';

@Component
export default class App extends Vue {
  itemList: any[] = []
  host = API.HOST;

  created() {
    this.itemList = Array.from(this.$store.state.cart.values());
  }

  removeFromCart(id: string): void {
    console.log(id);
    this.$store.commit('removeFormCart', id);
    this.itemList = Array.from(this.$store.state.cart.values());
  }

  async submitOrder() {
    let _self = this;
    this.$alert("确认提交当前订单吗？", "创建订单", {
      confirmButtonText: "确定",
      callback: async action => {
        console.log(action);
        if (action === 'confirm') {
          let order: {
            user: any,
            items: any[]
          } = {
            user: _self.$store.state.user._id,
            items: []
          };
          _self.itemList.forEach(i => {
            order.items.push({
              item: i._id,
              unit_price: i.unit_price,
              quantity: i.quantity
            });
          });
          let result = await API.createOrder(order);
          console.log(result);
          if (result && result.data.code === 0) {
            _self.$message({
              type: "success",
              message: "订单提交已成功"
            });
            _self.$store.commit('clearCart');
            this.itemList = Array.from(_self.$store.state.cart.values);
          }
        }
      }
    })
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