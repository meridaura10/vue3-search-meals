<template>
    <div>
        <input type="text" class="rounded-lg mb-5 border-2 border-gray-200 w-full" placeholder="search for meals"
            v-model="keyWord" />
    </div>
    <Meals :meals-data="mealsData" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router'
import { store } from '../store';
import MealItem from '../components/MealItem.vue';
import Meals from './Meals.vue';
import MealList from '../components/MealList.vue';
const keyWord = ref('')
const route = useRoute()
const mealsData = computed(() => store.state.searchMeals)
const searchMeals = () => {
    if (keyWord.value) {
        store.dispatch('searchMeals', keyWord.value)
    } else {
        store.commit('setSearchMeals', [])
    }
}






watch(keyWord, () => {
    searchMeals()
})
onMounted(() => {
    keyWord.value = route.params.name
    searchMeals()
})

</script>
