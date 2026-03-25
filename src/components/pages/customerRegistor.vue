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
    toInit: function () {
      this.$router.push("/init")
    },
  },
}
</script>

<template>
  <h1>顧客情報登録完了画面</h1>
  <div>
    お客様情報のご登録が完了しました。
  </div>
  <div class="button-container">
    <button type="button" class="btn btn-primary next-button" @click="toInit">
      トップページ画面へ
    </button>
  </div>
</template>
<style>
.custommer-table {
  width: 60%;
  margin: auto;
}
</style>