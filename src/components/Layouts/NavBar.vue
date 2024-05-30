<template>
  <header class="w-full h-16 shadow-md bg-white flex items-center justify-between px-8">
    <router-link
      :to="{ name: 'home' }"
      class="hover:bg-orange-100 text-black hover:text-gray-700 p-2 rounded-lg"
      >Home</router-link
    >
    <div class="[&>*]:ml-5">
      <router-link
        :to="{ name: 'byName' }"
        class="hover:bg-orange-100 text-black hover:text-gray-700 p-2 rounded-lg"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="hover:bg-orange-100 text-black hover:text-gray-700 p-2 rounded-lg"
        >Meals by letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="hover:bg-orange-100 text-black hover:text-gray-700 p-2 rounded-lg"
        >Meals by ingredient</router-link
      >
    </div>
  </header>
</template>
