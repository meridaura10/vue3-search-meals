<template>
  <div class="bg-gray-100 min-h-[101vh]">
    <Navbar />
    <main class="p-3.5">  
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';

 
</script>

