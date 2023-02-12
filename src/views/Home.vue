<template>
    <div>
        <div class="flex mb-5 justify-between items-center">
            <h2 class="font-bold text-3xl">
                random meals
            </h2>
            <button :disabled="mealsData.data.length < 9 || mealsData.loading" @click="getRandomMeals"
                class="text-white disabled:bg-orange-300 disabled:cursor-default     bg-orange-400 font-semibold hover:bg-orange-500 transition-all border-none p-3 rounded-xl">
                new random
            </button>
        </div>
        <Meals :meals-data="mealsData" />
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import axiosClient from '../axiosClient'
import Meals from './Meals.vue';
const mealsData = reactive({
    data: [],
    loading: false,
    error: null,
})
const getRandomMeals = async () => {
    mealsData.loading = true
    mealsData.data = []
    let step = 0
    try {
        for (step = 0; step < 9; step++) {
            const response = await axiosClient.get('random.php')
            mealsData.data.push(response.data.meals[0])
            mealsData.loading = false
        }
    } catch (error) {
        mealsData.error = error.message
    }


}

onMounted(async () => {
    getRandomMeals()
})

</script>

