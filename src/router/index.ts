import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import MealsByName from '@/views/MealsByName.vue'
import MealsByLetter from '@/views/MealsByLetter.vue'
import MealsByIngredients from '@/views/MealsByIngredients.vue'
import MainLayout from '@/components/Layouts/MainLayout/index.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-letter:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/by-ingredients:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredients
      },
      {
        path: '/by-name:name?',
        name: 'byName',
        component: MealsByName
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
