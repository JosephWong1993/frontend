<template>
    <div>
        <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
        <h4 class="text-center">用户详情 --- {{ id }}</h4>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: 'MyUserDetail',
    props: ['id']
});
</script>

<style lang="less" scoped></style>
