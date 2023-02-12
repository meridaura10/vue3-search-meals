import axiosClient from '../axiosClient'
export const searchMeals = ({ commit }, keyWord) => {
    commit('setSearchMealsLoading',true)
    axiosClient.get(`search.php?s=${keyWord}`)
    .then(({data}) => {
        commit('setSearchMeals',data.meals)
    })
};
export const searchMealsByLetter = ({ commit }, letter) => {
    commit('setMealsByLetterLoading', true)
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter',data.meals)
    })
};
export const searchMealsByIngredients = ({ commit }, ing) => {
    commit('setMealsByIngredientsLoading', true)
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data}) => {
        commit('setMealsByIngredients',data.meals)
    })
};
