<script>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";

export default {
  name: 'app',
  setup() {
    // 各画面共通で必要なもの
    const router = useRouter();

    // 各画面固有の関数等
    const toInit = () => {
      router.push("/init")
    };
    onMounted(() => {
      router.push("/login")
    });
    return {
      toInit,
    }
  },
}
</script>
<template>
  <div id="app">
    <h4 @click="toInit" class="app-area">申し込みシステム（ポートフォリオ）</h4>

    <router-view></router-view>
  </div>
</template>
<style>
.app-area {
  cursor:pointer;
  margin-bottom: 20px;
}
</style>
