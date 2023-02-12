<template>
    <div>
        <div class="mb-4" @click="setSelectedSort('strMeal')" v-if="mealsData.data.length">
            <button class="bg-orange-400 text-white font-semibold px-2.5 py-1.5 rounded-xl">sort to name</button>
        </div>
        <div class="text-center text-lg font-semibold mt-5" v-if="mealsData.error">
            {{ mealsData.error }}
        </div>
        <div class="text-center font-bold text-2xl mb-2" v-else-if="mealsData.loading">
            loding...
        </div>
        <MealList v-else-if="mealsData.data.length" :meals="mealsSort" />
        <div v-else class="text-center text-2xl text-gray-600 font-semibold">
            this food was not found
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import MealList from '../components/MealList.vue';
const selectedSort = ref('')
const multiply = ref(-1)
const { mealsData } = defineProps({
    mealsData: {
        type: Object,
        required: true,
    }
})
const setSelectedSort = (sort) => {
    multiply.value === 1 ? multiply.value = -1 : multiply.value = 1
    selectedSort.value = sort
}
const mealsSort = computed(() => {
    if (selectedSort.value) {
        return [...mealsData.data].sort((a, b) => {
            return (a[selectedSort.value].localeCompare(b[selectedSort.value])) * multiply.value
        })
    } else {
        return mealsData.data
    }
})
</script>
