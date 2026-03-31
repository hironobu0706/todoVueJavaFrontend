<script>
import { useStore } from '../../store';
import { useRouter } from "vue-router";
import breadcrumbs from '../parts/breadcrumbs.vue'

export default {
  name: 'init',
  setup() {
    // 各画面共通で必要なもの
    const store = useStore();
    const router = useRouter();

    // 各画面固有の関数等
    store.$reset();
    const toInit = () => {
      router.push("/init")
    };
    return {
      toInit,
    }
  },
  components: {
    breadcrumbs
  }
}
</script>

<template>
  <div class="content-area">
    <h1>顧客情報登録完了画面</h1>
    <div class="breadcrumbsWrapper">
      <breadcrumbs nowPage="4" />
    </div>
    <div>
      お客様情報のご登録が完了しました。<br />
      ログインを行い、マイページをご確認ください。
    </div>
    <div class="button-container">
      <button type="button" class="btn btn-primary next-button" @click="toInit">
        トップページ画面へ
      </button>
    </div>
  </div>
</template>
<style></style>