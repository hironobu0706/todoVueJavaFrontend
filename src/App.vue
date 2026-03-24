<template>
  <div id="app">
    <div>
      <router-link to="/sample1" class="btn btn-warning">
        Go to sample1
      </router-link>
      <br/>
      <router-link to="/sample2" class="btn btn-warning">
        Go to sample2
      </router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
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
  }
}
</script>