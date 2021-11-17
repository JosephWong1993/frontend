<template>
  <div class="root">
    <h1>订单管理系统 - 新用户注册</h1>
    <el-form status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input type="text" v-model="username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
        <p />
        <el-link type="primary" href="/login">登录</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import API from "../lib/api";

@Component
export default class App extends Vue {
  username = "";
  password = "";

  async submitForm() {
    if (!this.username.trim()) {
      console.log("请输入用户名");
      this.$message({
        message: "请输入用户名",
        type: "error",
      });
      return;
    }
    if (!this.password.trim()) {
      console.log("请输入登录密码");
      this.$message({
        message: "请输入登录密码",
        type: "error",
      });
      return;
    }

    let result = await API.register(this.username, this.password);
    console.log(result);
    if (0 === result.data.code) {
      this.$message({
        message: "恭喜您，注册成功！请前往登录页",
        type: "success",
      });
    } else {
      this.$message({
        message: "注册失败，请检查",
        type: "error",
      });
    }
  }
}
</script>

<style scoped>
h2 {
  padding-left: 50px;
}

.root {
  width: auto;
  max-width: 620px;
  margin: auto;
  padding-top: 200px;
}
</style>