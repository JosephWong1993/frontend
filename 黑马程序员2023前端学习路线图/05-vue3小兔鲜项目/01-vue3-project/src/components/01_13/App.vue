<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import TestCom from './test-com.vue';

// 调用ref函数 -> ref对象
const h1Ref = ref(null);
const comRef = ref(null);
// 组件挂载完毕之后才能获取
onMounted(() => {
    console.log(h1Ref.value);
    console.log(comRef.value);
});
</script>
<template>
    <h1 ref="h1Ref">我是dom标签h1</h1>
    <TestCom ref="comRef"/>
</template>