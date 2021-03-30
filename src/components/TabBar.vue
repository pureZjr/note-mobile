<template>
    <van-tabbar :active="active" :change="changeTab">
        <van-tabbar-item icon="description">最新</van-tabbar-item>
        <van-tabbar-item icon="other-pay">文件夹</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { useRouter } from 'vue-router'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
import 'vant/lib/search/style'

export default {
    props: {
        active: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        const router = useRouter()

        const changeTab = (key: number) => {
            console.log(typeof key, key)
            if (key === 0) {
                router.push({ path: `/newest-files` })
            } else if (key === 1) {
                router.push({ path: `/folders/2` })
            } else {
                router.push({ path: `/userinfo` })
            }
        }
        return { changeTab }
    },
    components: {
        'van-tabbar': Tabbar,
        'van-tabbar-item': TabbarItem,
    },
}
</script>
