<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import store from '@/stores'
import { computed } from 'vue'

const meals = computed(() => store.state.meals)
</script>

<style scoped>
/* Your scoped styles go here */
</style>
