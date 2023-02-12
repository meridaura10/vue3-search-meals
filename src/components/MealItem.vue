<template>
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="bg-white shadow-sm hover:scale-105 transition-all rounded-xl">
            <img class="rounded-t-xl" :src="meal.strMealThumb"  :alt="meal.strMeal">
           <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="font-semibold"> 
                <a @click.stop class="py-2 px-3 border-2 border-red-600 bg-red-500 text-white transition-all rounded-lg mb-0.5 inline-block" :href="meal.strYoutube" target="_blank">Youtube</a>
                <!-- <router-link class="py-2 px-3 border-2 border-purple-600 bg-purple-500 text-white transition-all rounded" :to="'/'" >view</router-link> -->
            </div>
           </div>
        </router-link >
</template>

<script setup>
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object,
    }
})
</script>
