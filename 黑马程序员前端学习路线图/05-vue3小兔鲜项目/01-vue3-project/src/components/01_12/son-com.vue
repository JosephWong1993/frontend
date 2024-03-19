<script lang="ts" setup>
// 通过 defineEmits()->emit(this.$emit)
const emit = defineEmits(['get-message']);

const sendMsg = () => {
    //TODO: 触发自定义事件，传数据给父组件
    emit('get-message', 'this is son message');
};
</script>
<template>
    <div class="son">
        <h3>子组件Son</h3>
        <button @click="sendMsg">触发自定义事件</button>
    </div>
</template>