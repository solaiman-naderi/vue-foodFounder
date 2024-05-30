<template>
  <div class="p-8">
    <input
      type="text"
      placeholder="Search of meals"
      class="rounded border-2 focus:outline-blue-400 py-2.5 px-4 border-gray-200 w-full"
      @change="searchMeals"
      v-model="keyword"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12 p-8">
    <div
      v-for="meal of mealsBySearched"
      :key="meal.idMeal"
      class="bg-white shadow-lg h-max drop-shadow-lg rounded-t-full overflow-hidden"
    >
      <img
        class="rounded-t-full w-full object-cover h-52 hover:scale-[1.001] transition-all duration-300"
        :src="meal.strMealThumb"
        alt="meal.strMeal"
      />
      <h3 class="py-3 px-4 font-semibold text-xl">{{ meal.strMeal }}</h3>
      <div class="py-3 px-4">
        <a :href="meal.strYoutube" target="_blank" class="bg-orange-400 px-6 py-2 mb-2 rounded-lg"
          >Youtube</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFetchApi } from '@/hooks/useFetchApi'
import store from '@/stores'
import { useRoute } from 'vue-router'

const keyword = ref('')

const route = useRoute()

const { items, refresh } = useFetchApi()

const mealsBySearched = computed(() => store.state.searchedMeals)

const searchMeals = async () => {
  console.log(keyword.value)
  await refresh(`search.php?s=${keyword.value}`)
  console.log(items.value)
  store.dispatch('searchMealsAction', items.value)
}

console.log(route.params.name)
onMounted(() => {
  keyword.value = route.params.name
})
</script>
