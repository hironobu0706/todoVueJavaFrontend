<script>

export default {
  name: 'app',
  created() {
    console.log('** App Created!! **') // createの確認用
    this.$router.push("/init")
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
  	toSample1: function() {
      this.$router.push("/sample1")
    }
  },
}
</script>
<template>
  <div id="app">
    <!-- <div>
      <router-link to="/sample1" class="btn btn-warning">
        Go to sample1
      </router-link>
      <br/>
      <router-link to="/sample2" class="btn btn-warning">
        Go to sample2
      </router-link>
      <br/>
      <router-link to="/hello" class="btn btn-warning">
        Go to hello
      </router-link>
      <br/>
      <button @click="toSample1">smaple1</button>
    </div> -->
    <h1>ここはapp.vue</h1>
    
    <router-view></router-view>
  </div>
</template>
