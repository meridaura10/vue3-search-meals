export function setSearchMeals(state, meals) {
  state.searchMeals.data = meals || [];
  state.searchMeals.loading = false;
  state.searchMeals.error = null;
}
export function setMealsByLetter(state, meals) {
  state.mealsByLetter.data = meals || [];
  state.mealsByLetter.loading = false;
  state.mealsByLetter.error = null;
}
export function setMealsByIngredients(state, meals) {
  state.mealsByIngredient.data = meals || [];
  state.mealsByIngredient.loading = false;
  state.mealsByIngredient.error = null;
}

export function setSearchMealsLoading(state, isLoading) {
  state.searchMeals.loading = isLoading;
}
export function setMealsByLetterLoading(state, isLoading) {
  state.mealsByLetter.loading = isLoading;
}
export function setMealsByIngredientsLoading(state, isLoading) {
  state.mealsByIngredient.loading = isLoading;
}

export function setSearchMealsError(state, error) {
  state.searchMeals.error = error;
}
export function setMealsByLetterError(state, error) {
  state.mealsByLetter.error = error;
}
export function setMealsByIngredientsError(state, error) {
  state.mealsByIngredient.error = error;
}
