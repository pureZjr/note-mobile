<template>
  <div class="login">
    <common-header name="登录" back="'/home'" />
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱"
        :rules="[{ required: true, message: '请输入邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          class="button"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { Form, Field, Button } from "vant";
import "vant/lib/form/style";
import "vant/lib/field/style";
import "vant/lib/button/style";

import CommonHeader from "@/components/CommonHeader/index.vue";
import { login } from "@/services/user";
import { setLocal } from "@/utils/common";
import { LOCALSTORAGE } from "@/constant";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      email: "",
      password: "",
    });

    async function onSubmit() {
      try {
        const res = await login({
          email: state.email,
          password: state.password,
        });
        setLocal(LOCALSTORAGE.USERINFO, JSON.stringify(res));
        store.dispatch("setUserInfo", res);
        router.replace({ path: `/` });
      } catch (err) {
        console.log(err);
      }
    }

    return {
      ...toRefs(state),
      onSubmit,
    };
  },
  components: {
    "common-header": CommonHeader,
    "van-form": Form,
    "van-field": Field,
    "van-button": Button,
  },
};
</script>

<style lang="scss" >
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .form {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 12px;
  }

  .button {
    width: 60vw;
  }
}
</style>
