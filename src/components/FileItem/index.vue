<template>
    <div class="file-item">
        <div class="title">
            <customer-icon color="#7da4fb" name="iconwenjian" />
            {{ item.title }}
        </div>
        <div class="time">{{ item.updateTime }}</div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

import { File } from '@/services/model/fileModel'
import CustomerIcon from '@/components/CustomerIcon.vue'

export default {
    props: {
        item: {
            type: Object as PropType<File>,
            default: {},
        },
    },
    components: {
        'customer-icon': CustomerIcon,
    },
}
</script>

<style lang="scss" scoped>
.file-item {
    width: 100%;
    height: 100%;
    padding: 6px 12px;
    border-radius: 4px;
    box-shadow: 0 0 8px 0 $shadow;

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
}
</style>
