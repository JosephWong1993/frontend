<template>
    <div class="number-container d-flex justify-content-center align-items-center">
        <!-- 减 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
        <!-- 购买的数量 -->
        <span class="number-box">{{ num }}</span>
        <!-- 加 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        // 要展示的商品的数量
        num: {
            type: Number,
            default: 1
        }
    },
    methods: {
        add() {
            // 通过自定义事件的方法，把最新的数量值，发给父组件
            this.$emit('num-change', this.num + 1)
        },
        sub() {
            if (this.num - 1 === 0) return;
            this.$emit('num-change', this.num - 1)
        }
    }
});
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
