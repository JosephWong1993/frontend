<script lang="ts" setup>
import {inject} from 'vue';
// 接收数据
const roomData = inject('data-key');
// 接收响应式数据
const countData = inject('count-key');
// 接收方法
const setCount = inject('setCount-key');
</script>
<template>
    <div class="comment">
        底层组件
        <div>
            来自顶层组件中的数据为：{{ roomData }}
        </div>
        <div>
            来自顶层组件的响应式数据：{{ countData }}
        </div>
        <div>
            <button @click="setCount">修改顶层组件的数据</button>
        </div>
    </div>
</template>