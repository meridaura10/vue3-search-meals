<template>
    <transition-group v-show="meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-5" name="list" tag="p">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </transition-group>
</template>

<script setup>
import { defineProps } from 'vue';
import MealItem from './MealItem.vue';
 const props = defineProps({
    meals: {
        type: Array,
        required: true,
    }
 });
</script>

<style lang="css" scoped>
.list-item {
  display: inline-block;
}
.list-enter-active,
.list-leave-active {
  transition: .3s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>