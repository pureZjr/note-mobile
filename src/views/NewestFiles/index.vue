<template>
    <div class="newest-files">
        <div class="content">
            <van-list v-model="loading" finished-text="没有更多了">
                <file-item v-for="item in list" :key="item.id" :item="item" />
            </van-list>
        </div>
        <tab-bar :active="0" />
        <loading v-if="loading" />
    </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import dayjs from 'dayjs'
import { List } from 'vant'
import 'vant/lib/list/style'

import Loading from '@/components/Loading.vue'
import { getNewestFiles } from '@/services/files'
import { File } from '@/services/model/fileModel'
import FileItem from '@/components/FileItem/index.vue'
import TabBar from '@/components/TabBar.vue'

interface State {
    list: File[]
    loading: boolean
}

export default {
    setup() {
        const state: State = reactive({
            list: [],
            loading: false,
        })

        const getFiles = async function () {
            try {
                state.loading = true
                const res = await getNewestFiles({})
                state.list = res.map((v) => ({
                    ...v,
                    updateTime: dayjs(v.updateTime).format('YYYY.MM.DD'),
                }))
            } catch {}
            state.loading = false
        }

        onMounted(function () {
            getFiles()
        })

        return { ...toRefs(state) }
    },
    components: {
        'van-list': List,
        'file-item': FileItem,
        loading: Loading,
        'tab-bar': TabBar,
    },
}
</script>

<style lang="scss">
.newest-files {
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
