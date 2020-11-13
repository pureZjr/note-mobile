<template>
  <div class="container"></div>
</template>

<script>
import { getNewestFiles } from "@/services/files";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(async function () {
      const res = await getNewestFiles();
      console.log();
    });
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
