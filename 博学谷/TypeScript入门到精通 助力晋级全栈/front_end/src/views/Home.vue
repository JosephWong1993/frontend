<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="22">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
          >
            <el-menu-item index="item">商品列表</el-menu-item>
            <el-menu-item index="cart">购物车</el-menu-item>
            <el-menu-item index="order">订单</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="2">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
          >
            <el-menu-item index="logout"
            >【{{ this.$store.state.user.username }}】 退出登录
            </el-menu-item
            >
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin: auto; width: 80%">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  activeIndex = "item";

  created() {
    if (this.$route.name != null) {
      this.activeIndex = this.$route.name;
    }
  }

  handleSelect(key: string): void {
    if (key === "item") {
      this.$router.push({name: "item"});
    } else if (key === "order") {
      this.$router.push({name: "order"});
    } else if (key === "cart") {
      this.$router.push({name: "cart"});
    } else if (key === "logout") {
      this.$store.commit("clearUser");
      this.$router.push({name: "login"});
    }
    return;
  }
}
</script>