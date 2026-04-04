<script>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import breadcrumbs from '../parts/breadcrumbs.vue'

export default {
  name: 'init',
  setup() {
    // 各画面共通で必要なもの
    const router = useRouter();

    // 各画面固有の関数等
    onMounted(() => {
      console.log("環境変数：", import.meta.env.VITE_API_URL)
    });
    const toCustomerInput = () => {
      router.push("/customerInput")
    };
    return {
      toCustomerInput,
    };
  },
  components: {
    breadcrumbs
  }
}
</script>

<template>
  <div class="content-area">
    <h1>トップページ画面</h1>
    <div class="breadcrumbsWrapper">
      <breadcrumbs nowPage="1" />
    </div>
    <div>ここに説明等を記載</div>
    <div class="button-container">
      <button type="button" class="btn btn-primary next-button" @click="toCustomerInput">
        個人情報登録ページへ
      </button>
    </div>
  </div>
</template>
