<template>
    <div class="home">
        <common-header :title="title" />
        <div class="content">
            <van-search v-model="keyword" placeholder="请输入搜索关键词" />
            <div v-if="active === 0" />
            <folders v-else-if="active === 1" />
            <user-info v-else-if="active === 3" />
        </div>
        <van-tabbar v-model="active" @change="changeTab">
            <van-tabbar-item icon="description">最新</van-tabbar-item>
            <van-tabbar-item icon="other-pay">文件夹</van-tabbar-item>
            <van-tabbar-item icon="plus">新增</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { Tabbar, TabbarItem, Search } from 'vant'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
import 'vant/lib/search/style'

import { getLocal } from '@/utils/common'
import { LOCALSTORAGE } from '@/constant'

import UserInfo from '@/views/UserInfo/index.vue'
import Folders from '@/views/Folders/index.vue'
import CommonHeader from '@/components/CommonHeader/index.vue'

interface State {
    active: number
    keyword: string
}

export default {
    setup() {
        const router = useRouter()
        const store = useStore()

        const state: State = reactive({ active: 0, keyword: '' })

        onMounted(function () {
            const { token } = JSON.parse(getLocal(LOCALSTORAGE.USERINFO) || '{}')
            if (!token) {
                router.replace({ path: `/login` })
            } else {
                console.log(store.state)
            }
        })

        const changeTab = (key: number) => {
            if (key === 0) {
                router.push({ path: `/newest-files` })
            } else if (key === 1) {
                router.push({ path: `/folders/2` })
            } else if (key === 2) {
                router.push({ path: `/newest-files` })
            } else {
                router.push({ path: `/newest-files` })
            }
        }

        const title = computed(() => {
            return state.active === 0 ? '最新' : state.active === 1 ? '文件夹' : state.active === 3 ? '我的' : ''
        })

        return { title, ...toRefs(state), changeTab }
    },
    components: {
        'van-tabbar': Tabbar,
        'van-tabbar-item': TabbarItem,
        'user-info': UserInfo,
        folders: Folders,
        'van-search': Search,
        'common-header': CommonHeader,
    },
}
</script>

<style lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100vw;
        margin-bottom: 50px;
        overflow: auto;
    }
}
</style>
