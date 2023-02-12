<template>
 <header class="bg-white shadow-md h-16 flex justify-between items-stretch px-5">
      <router-link class="inline-flex items-center" to="/">
        home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link to="/by-name" class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors ">
          search Meals
        </router-link>
        <router-link to="/by-letter" class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors ">
          meals by letter
        </router-link>
        <router-link to="/ingredients" class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors ">
          meals by ingredients
        </router-link>
      </div>
    </header>
</template>