<template>
    <header class="common-header">
        <van-icon name="arrow-left" @click="goBack" />
        <div class="header-name">{{ title }}</div>
        <van-icon name="ellipsis" />
    </header>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { Icon } from 'vant'
import 'vant/lib/icon/style'

export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        back: {
            type: String,
            default: '',
        },
        onHandleBack: {
            type: Function,
            default: () => {},
        },
    },
    setup(props) {
        const router = useRouter()
        function goBack() {
            if (props.onHandleBack) {
                return props.onHandleBack()
            }
            if (!props.back) {
                router.back()
            } else {
                router.push({ path: props.back })
            }
        }

        function onSubmit() {}

        return { goBack, onSubmit }
    },
    components: {
        'van-icon': Icon,
    },
}
</script>

<style lang="scss" scoped>
.common-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 10px;
    background: #fff;
    border-bottom: 1px solid $border;

    .header-name {
        font-size: 14px;
    }
}
</style>
