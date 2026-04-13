<script setup>
const text = defineModel()
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>