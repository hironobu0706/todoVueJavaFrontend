<script>
export default {
  name: 'init',
  created() {
    console.log('** App Created!! **') // createの確認用
  },
  mounted() {
    console.log('-- App Mounted!! --') // mountedの確認用
  },
  data() {
    return {
      title: 'Router'
    }
  },
  methods: {
    toCustomerInput: function () {
      this.$router.push("/customerInput")
    }
  },
}
</script>

<template>
  <h1>トップページ画面</h1>
  <div>ここに説明等を記載</div>
  <div class="button-container">
    <button type="button" class="btn btn-primary next-button" @click="toCustomerInput">
      個人情報登録ページへ
    </button>
  </div>
</template>
