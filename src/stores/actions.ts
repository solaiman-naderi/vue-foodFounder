export function searchMealsAction({ commit }, meals) {
  commit('setSearchedMeals', meals)
}
