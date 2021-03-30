<template>
    <van-icon :class="classname" :style="{ color: color }" />
</template>

<script lang="ts">
import { Icon } from 'vant'

export default {
    props: {
        color: {
            type: String,
            default: 'black',
        },
        name: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        return {
            classname: props.name + ' iconfont',
        }
    },
    components: {
        'van-icon': Icon,
    },
}
</script>
