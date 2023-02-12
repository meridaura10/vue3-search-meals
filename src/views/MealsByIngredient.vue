<template>
    <h1 class="font-bold text-3xl mb-4">
        meals of ingredient: {{ $route.params.ingredient }}
    </h1>
    <Meals :meals-data="mealsData" />
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { store } from '../store';
import { useRoute } from 'vue-router';
import Meals from './Meals.vue';
const route = useRoute()
const mealsData = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})

</script>
