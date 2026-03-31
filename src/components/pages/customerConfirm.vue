<script>
import { useRouter } from "vue-router";
import { onMounted } from 'vue'
import { useStore } from '../../store';
import breadcrumbs from '../parts/breadcrumbs.vue'

export default {
  name: 'customerConfirm',
  setup() {
    // 各画面共通で必要なもの
    const store = useStore();
    const router = useRouter();

    // 各画面固有の関数等
    const toCustomerInput = () => {
      router.push("/customerInput")
    };
    const toCustomerRegistor = () => {
      store.customerRegistor();
      router.push("/customerRegistor")
    };
    onMounted(() => {
    });
    return {
      store,
      toCustomerInput,
      toCustomerRegistor
    };
  },
  components: {
    breadcrumbs
  }
}
</script>

<template>
  <div class="content-area">
    <h1>顧客情報確認画面</h1>
    <div class="breadcrumbsWrapper">
      <breadcrumbs nowPage="3" />
    </div>
    <div>store:{{ store.count }}</div>
    <div>
      <table class="table table-bordered border">
        <tbody>
          <tr>
            <td>メールアドレス</td>
            <td>{{ store.customer.mailAddress }}</td>
          </tr>
          <tr>
            <td>パスワード</td>
            <td>{{ store.customer.password }}</td>
          </tr>
          <tr>
            <td>氏名</td>
            <td>{{ store.customer.name }}</td>
          </tr>
          <tr>
            <td>カナ</td>
            <td>{{ store.customer.nameKana }}</td>
          </tr>
          <tr>
            <td>住所(都道府県)</td>
            <td>{{ store.customer.jushoPref }}</td>
          </tr>
          <tr>
            <td>住所1</td>
            <td>{{ store.customer.jusho1 }}</td>
          </tr>
          <tr>
            <td>住所2</td>
            <td>{{ store.customer.jusho2 }}</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>{{ store.customer.gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="button-container">
      <button type="button" class="btn back-button" @click="toCustomerInput">
        戻る
      </button>
      <button type="button" class="btn btn-primary next-button" @click="toCustomerRegistor">
        登録する
      </button>
    </div>
  </div>
</template>
<style></style>