<template>
    <div class="header-container" :style="{ backgroundColor: bgcolor, color: color, fontSize: fsize + 'px' }">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'EsHeader',
    props: {
        // 标题内容
        title: {
            type: String,
            default: 'es-header',
        },
        // 背景颜色
        bgcolor: {
            type: String,
            default: '#007BFF',
        },
        // 文字颜色
        color: {
            type: String,
            default: '#ffffff',
        },
        // 文字大小
        fsize: {
            type: Number,
            default: 12,
        },
    },
}
</script>

<style lang="less" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  z-index: 999;
}
</style>
