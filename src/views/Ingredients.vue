<template>
    <div>
        <h1 class="font-bold text-3xl mb-2">ingredients</h1>
        <input  type="text" class="rounded-lg my-3 block border-2 border-gray-200 w-full" placeholder="search for ingredients"
            v-model="keyWord" />
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ing.strIngredient } }"
            class="bg-white rounded block p-3 mb-3 shadow-md" v-for="ing of computedIngredientsFilter" :key="ing.idIngredient">
            <h3 class="font-bold text-2xl">{{ ing.strIngredient }}</h3>
            <p>{{ ing.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import axiosClient from '../axiosClient';
import { onMounted, ref,computed } from 'vue'
const ingredients = ref([])
const keyWord = ref('')
const computedIngredientsFilter = computed(() => {
    return ingredients.value.filter(i => {  
        return i.strDescription?.toLowerCase().includes(keyWord.value?.toLowerCase()) || i.strIngredient?.toLowerCase().includes(keyWord.value.toLowerCase())
    })
})

onMounted(async () => {
    const response = await axiosClient.get('list.php?i=list')
    ingredients.value = response.data.meals
})
</script>