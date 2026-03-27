<script>
// import { ref } from 'vue'
// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'
// import axios from 'axios'
import { useStore } from '../../store';
import { useRouter } from "vue-router";
import { onMounted } from 'vue'

export default {
  name: 'customerConfirm',
  setup() {
    const store = useStore();
    const router = useRouter();
    const toCustomerInput = () => {
      router.push("/customerInput")
    };
    const toCustomerRegistor = () => {
      store.customerRegistor();
      router.push("/customerRegistor")
    };
    const customerRegistor = ()  => {

    }
    onMounted(() => {
      console.log('-- App Mounted!! --') // mountedの確認用
    });
    return { 
      store,
      toCustomerInput,
      toCustomerRegistor
    };
  },
}
</script>

<template>
  <h1>顧客情報確認画面</h1>
  <div>store:{{ store.count }}</div>
  <div>
    <table class="table table-bordered border custommer-table">
      <tbody>
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
</template>
<style>
.custommer-table {
  width: 60%;
  margin: auto;
}
</style>