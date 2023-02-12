<template>
    <div>
        <div class="flex flex-wrap px-2 justify-center mb-5 gap-2 mt-4">
            <router-link class="mt-2 transition-all p-1 rounded-md" :to="`/by-letter/${letter}`" v-for="letter of letters" :class="$route.params.letter === letter && 'bg-gray-300'" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <Meals v-if="$route.params.letter" :meals-data="mealsData" />
        <div class="text-center font-bold text-2xl " v-else>
            select a letter
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { store } from '../store';
import { computed, onMounted,watch } from 'vue'
import MealItem from '../components/MealItem.vue';
import Meals from './Meals.vue';
const letters = 'ABSDEFGHIJKLMNOPQRTUVWXYZ'.split("")
const route = useRoute()
const mealsData = computed(() => store.state.mealsByLetter)
const getMeals = () =>{ 
    store.dispatch('searchMealsByLetter', route.params.letter)
}
watch(route,() => {
    getMeals()
})

onMounted(() => {
    getMeals()
})

</script>

