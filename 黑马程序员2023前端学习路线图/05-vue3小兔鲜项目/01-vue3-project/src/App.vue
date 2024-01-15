<script lang="ts" setup>
// 生命周期函数的使用
// 1. 引入函数
import {onMounted} from 'vue';

// 2. 执行函数 传入回调
onMounted(() => {
    console.log('组件挂载完毕mounted执行了1');
});

onMounted(() => {
    console.log('组件挂载完毕mounted执行了3');
});

onMounted(() => {
    console.log('组件挂载完毕mounted执行了2');
});
</script>
<template>
    <div></div>
</template>

<!--<script lang="ts" setup>
import {ref, watch} from 'vue';

const state = ref({
    name: 'chaichai',
    age: 18
});
const changeName = () => {
    // 修改name
    state.value.name = 'chaichai-teacher';
};
const changeAge = () => {
    // 修改age
    state.value.age = 20;
};
// TODO：精确侦听某个具体属性
watch(() => state.value.age, () => {
    console.log('age变化了');
});
</script>
<template>
    <div>当前name &#45;&#45; {{ state.name }}</div>
    <div>当前age &#45;&#45; {{ state.age }}</div>
    <div>
        <button @click="changeName">修改name</button>
        <button @click="changeAge">修改age</button>
    </div>
</template>-->

<!--<script setup>
import {ref, watch} from 'vue'

const state = ref({count: 0})
const changeStateByCount = () => {
    // 直接修改count
    state.value.count++
}
// TODO：watch深度侦听
watch(state, () => {
    console.log('数据变化了')
}, {
    deep: true
});
</script>
<template>
    <div>
        {{ state.count }}
        <button @click="changeStateByCount">通过count修改</button>
    </div>
</template>-->

<!--<script lang="ts" setup>
// 立即执行immediate
import {ref, watch} from "vue";

const count = ref(0);

// watch立即执行
watch(count, () => {
    console.log('count变化了');
}, {
    immediate: true
})

const setCount = () => {
    count.value++;
}
</script>
<template>
    <div>
        <button @click="setCount">+{{ count }}</button>
    </div>
</template>-->

<!--<script lang="ts" setup>
// 侦听多个数据变化
import {ref} from 'vue';
import {watch} from 'vue';

const count = ref(0);
const changeCount = () => {
    count.value++;
};

const name = ref('cp');
const changeName = () => {
    name.value = 'pc';
};

watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
    console.log('count或者name变化了', [newCount, newName], [oldCount, oldName]);
});
</script>
<template>
    <div>
        <button @click="changeCount">修改count&#45;&#45;{{ count }}</button>
    </div>
    <div>
        <button @click="changeName">修改name&#45;&#45;{{ name }}</button>
    </div>
</template>-->

<!--<script lang="ts" setup>
import {ref} from 'vue';
import {watch} from 'vue';

const count = ref(0);
const setCount = () => {
    count.value++;
};
// ref对象不需要加.value
watch(count, (newVal, oldVal) => {
    console.log('count变化了', newVal, oldVal);
});
</script>
<template>
    <div>
        <button @click="setCount">{{ count }}</button>
    </div>
</template>-->

<!--
<script lang="ts" setup>
//#region reactive函数
// // 1. 导入函数
// import {reactive} from 'vue';
// // 2. 执行函数 传入一个对象类型的参数 变量接收
// const state = reactive({
//     count: 0,
// });
// // const state = {
// //     count: 0,
// // };
// const setCount = () => {
//     state.count++;
// };
//#endregion

//#region ref函数
// 1. 导入ref函数
// import {ref} from 'vue';
// // 2. 执行函数 传入参数[简单类型 + 对象类型] 变量接收
// const count = ref(0);
// console.log(count);
// const setCount = () => {
//     // 脚本区域修改ref产生的响应式对象数据 必须通过.value属性
//     count.value++;
// };
//#endregion

//#region 计算属性
// 原始响应式数据
import {ref} from 'vue';
// 1. 导入computed
import {computed} from 'vue';

const list = ref([1, 2, 3, 4, 5, 6, 7, 8]);

// 2. 执行函数 return 计算之后的值 变量接收
const computedList = computed(() => {
    // 做计算 根据一个数据计算得到一个新的数据
    return list.value.filter(item => item > 2);
});

setTimeout(() => {
    list.value.push(9, 10);
}, 3000);
//#endregion
</script>

<template>
    <div>
        原始响应式数据 - {{ list }}
    </div>
    <div>
        计算属性数组 - {{ computedList }}
    </div>
</template>-->
