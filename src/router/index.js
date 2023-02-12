import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import Layout from "../components/Layout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    children: [],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
