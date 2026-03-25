<script>
// import { ref } from 'vue'
// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'
// import axios from 'axios'
import { useStore } from '../../store';

export default {
  name: 'init',
  setup() {
    const store = useStore();
    return { store };
  },
  created() {
    console.log('** App Created!! **') // createの確認用
  },
  mounted() {
    console.log('-- App Mounted!! --') // mountedの確認用
    console.log(this.store.customer)
    this.customer = this.store.customer
  },
  data() {
    return {
      title: 'Router',
      customer: {
        name: "",
        nameKana: "",
        jushoPref: "",
        jusho1: "",
        jusho2: "",
        gender: "",
      }
    }
  },
  methods: {
    toCustomerInput: function () {
      this.$router.push("/customerInput")
    },
    toCustomerRegistor: function () {
      this.$router.push("/customerRegistor")
    },
  },
}
</script>

<template>
  <h1>顧客情報確認画面</h1>
  <div>store:{{ store.count }}</div>
  <div>data: {{ this.customer.name }}</div>
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
          <td>
          <td>{{ store.customer.gender }}</td>
          </td>
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