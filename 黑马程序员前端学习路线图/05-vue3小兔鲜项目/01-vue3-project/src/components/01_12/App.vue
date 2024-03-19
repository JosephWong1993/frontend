<script lang="ts" setup>
import SonCom from './son-com.vue';

const getMessage = (msg) => {
    console.log(msg);
};
</script>
<template>
    <div class="father">
        <h2>父组件App</h2>
        <SonCom @get-message="getMessage"></SonCom>
    </div>
</template>