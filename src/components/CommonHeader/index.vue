<template>
  <header class="common-header">
    <van-icon name="arrow-left" @click="goBack" />
    <div class="header-name">{{ name }}</div>
    <van-icon name="ellipsis" />
  </header>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "vant";
import "vant/lib/icon/style";

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    back: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const router = useRouter();
    function goBack() {
      if (!props.back) {
        router.go(-1);
      } else {
        router.push({ path: props.back });
      }
    }

    function onSubmit() {}

    return { goBack, onSubmit };
  },
  components: {
    "van-icon": Icon,
  },
};
</script>

<style scoped lang="scss">
.common-header {
  padding: 0 10px;
  background: #fff;
  border-bottom: 1px solid $border;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;

  .header-name {
    font-size: 14px;
  }
}
</style>
