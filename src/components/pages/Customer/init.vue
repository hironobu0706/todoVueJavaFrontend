<script setup>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import breadcrumbs from '../../parts/breadcrumbs.vue'

// 各画面共通で必要なもの
const router = useRouter();

// 各画面固有の関数等
onMounted(() => {
  console.log("環境変数：", import.meta.env.VITE_API_URL)
});
const toCustomerInput = () => {
  router.push("/customerInput")
};
const toLogin = () => {
  router.push("/login")
};
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
      <button type="button" class="btn btn-primary next-button" @click="toLogin">
        ログインページへ
      </button>
    </div>
  </div>
</template>
