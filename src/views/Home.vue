<template>
  <div class="flex w-full flex-col p-8 items-center justify-center">
    <input
      type="text"
      placeholder="Search of meals"
      class="rounded border-2 focus:outline-blue-400 py-2.5 px-4 border-gray-200 w-full"
    />
    <div class="flex gap-2 mt-3">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import store from '@/stores'
import { computed } from 'vue'
import { letters } from '@/constants'

const meals = computed(() => store.state.meals)
</script>

<style scoped>
/* Your scoped styles go here */
</style>
