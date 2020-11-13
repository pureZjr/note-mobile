<template>
  <div class="home">
    <div class="content">
      <newest-files v-if="active == '0'" />
      <folders v-else-if="active == '1'" />
      <user-info v-else-if="active == '3'" />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="description">最新</van-tabbar-item>
      <van-tabbar-item icon="other-pay">文件夹</van-tabbar-item>
      <van-tabbar-item icon="plus">新增</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { Tabbar, TabbarItem } from "vant";
import "vant/lib/tabbar/style";
import "vant/lib/tabbar-item/style";

import { getLocal } from "@/utils/common";
import { LOCALSTORAGE } from "@/constant";

import NewestFiles from "@/views/NewestFiles/index.vue";
import UserInfo from "@/views/UserInfo/index.vue";
import Folders from "@/views/Folders/index.vue";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({ active: 0 });

    onMounted(function () {
      const { token } = JSON.parse(getLocal(LOCALSTORAGE.USERINFO) || "{}");
      if (!token) {
        router.replace({ path: `/login` });
      } else {
        console.log(store.state);
      }
    });

    return {
      ...toRefs(state),
    };
  },
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "newest-files": NewestFiles,
    "user-info": UserInfo,
    folders: Folders,
  },
};
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
    width: 100vw;
    flex: 1;
    margin-bottom: 50px;
  }
}
</style>
