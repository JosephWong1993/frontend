<script lang="ts" setup>
import {ref} from 'vue';
import SonCom from './son-com.vue';

const count = ref(100);
setTimeout(() => {
    count.value = 200;
}, 3000);
</script>
<template>
    <div class="father">
        <h2>父组件App</h2>
        <!-- 1. 绑定属性 -->
        <SonCom :count="count" message="father message"></SonCom>
    </div>
</template>