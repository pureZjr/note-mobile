<template>
    <div class="container" @click="$emit('getnext')">
        <customer-icon color="#7da4fb" name="iconwenjianjia" />
        <div class="right">
            <div class="title">
                {{ item.title }}
            </div>
            <div class="time">
                {{ item.updateTime }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

import { Folder } from '@/services/model/folderModel'
import CustomerIcon from '@/components/CustomerIcon.vue'

export default {
    props: {
        item: {
            type: Object as PropType<Folder>,
            default: {},
        },
    },
    components: {
        'customer-icon': CustomerIcon,
    },
    emits: ['getnext'],
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 6px 12px;
    border-radius: 4px;
    box-shadow: 0 0 8px 0 $shadow;
}

.right {
    margin-left: 12px;
}

.title {
    font-size: 16px;
    font-weight: 500;
    color: $black;
    text-align: left;
}

.time {
    margin-top: 6px;
    font-size: 12px;
    color: $text-gary;
    text-align: left;
}
</style>
