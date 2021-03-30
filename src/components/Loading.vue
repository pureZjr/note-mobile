<template>
    <van-loading class="loading" type="spinner" color="#1989fa" />
</template>

<script lang="ts">
import { Loading } from 'vant'

export default {
    components: {
        'van-loading': Loading,
    },
}
</script>

<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
