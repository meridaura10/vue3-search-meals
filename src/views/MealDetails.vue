<template>
    <div class="max-w-[800px] py-4 w-full mx-auto">
        <h1 class="text-5xl text-center font-bold mb-5">{{ meal.strMeal }}</h1>
        <img class="object-cover sb w-full" :src="meal.strMealThumb" :alt="meal.strMeal" />
        <div class="grid grid-cols-1 px-2 sm:grid-cols-3 sm:text-center text-lg py-2">
            <div>
                <strong class="font-bold">category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">tags:</strong> {{ meal.strTags }}
            </div>
        </div>
        <div class="text-center">
            {{ meal.strInstructions }}
        </div>
        <div class="grid px-2 mt-3 sm:text-center grid-cols-1 sm:grid-cols-2">
        <div>
            <h2 class="text-2xl font-semibold mb-3">ingredients</h2>
            <ul>
                <template v-for="(el, ind) of new Array(40)">
                    <li v-if="meal[`strIngredient${ind + 1}`]?.replace(/\s+/g, ' ').trim()">
                        {{ ind + 1}}) {{ meal[`strIngredient${ind + 1}`] }}
                    </li>
                </template>
            </ul>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-3">measures</h2>
            <ul>
                <template v-for="(el, ind) of new Array(40)">
                    <li v-if="meal[`strMeasure${ind + 1}`]?.replace(/\s+/g, ' ').trim()">
                        {{ ind + 1}}) {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                </template>
            </ul>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>

