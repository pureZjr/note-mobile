<template>
    <div class="folders">
        <common-header :title="title" :on-handle-back="back" />
        <van-list>
            <folder-item
                v-for="item in list"
                :key="item.id"
                :item="item"
                @getnext="changeRouter(item.key, item.title)"
            />
        </van-list>
        <van-list>
            <file-item v-for="item in files" :key="item.id" :item="item" />
        </van-list>
        <loading v-if="loading" />
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, watchEffect, computed } from 'vue'
import { List } from 'vant'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

import Loading from '@/components/Loading.vue'
import FolderItem from '@/components/FolderItem/index.vue'
import { getFolder } from '@/services/folder'
import { getFileInFolder } from '@/services/files'
import { Folder } from '@/services/model/folderModel'
import { File } from '@/services/model/fileModel'
import FileItem from '@/components/FileItem/index.vue'
import CommonHeader from '@/components/CommonHeader/index.vue'

interface State {
    list: Folder[]
    files: File[]
    loading: boolean
    titles: string[]
}

export default {
    setup() {
        const router = useRouter()
        const state: State = reactive({
            list: [],
            files: [],
            loading: false,
            titles: ['文件夹'],
        })

        const getFolders = async (parentKey?: string) => {
            const data = {
                parentKey,
            }
            try {
                const res = await getFolder(data)
                return res
            } catch {
                return []
            }
        }
        const getFile = async (parentKey: string) => {
            try {
                const data = {
                    parentKey,
                }
                const res = await getFileInFolder(data)
                return res
            } catch {
                return []
            }
        }

        const changeRouter = (parentKey: string, title: string) => {
            router.push({ path: `${parentKey}` })
            state.titles.unshift(title)
        }

        const getAll = (parentKey?: string) => {
            state.loading = true
            parentKey = parentKey || '2'
            Promise.all([getFolders(parentKey), getFile(parentKey)])
                .then(([res1, res2]) => {
                    state.list = res1.map((v) => ({
                        ...v,
                        updateTime: dayjs(v.updateTime).format('YYYY.MM.DD'),
                    }))
                    state.files = res2.map((v) => ({
                        ...v,
                        updateTime: dayjs(v.updateTime).format('YYYY.MM.DD'),
                    }))
                    state.loading = false
                })
                .catch(() => {})
        }

        const back = () => {
            state.titles.shift()
            router.go(-1)
        }

        const title = computed(() => state.titles[0])

        watchEffect(function () {
            const parentKey = router.currentRoute.value.path.slice(9)
            getAll(parentKey)
        })

        return { ...toRefs(state), changeRouter, title, back }
    },
    components: {
        'van-list': List,
        'folder-item': FolderItem,
        loading: Loading,
        'file-item': FileItem,
        'common-header': CommonHeader,
    },
}
</script>

<style lang="scss" scoped>
.folders {
    width: 100%;
    height: 100%;
}
</style>
