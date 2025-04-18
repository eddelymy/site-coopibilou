<template>
  <div class="w-full h-screen flex flex-col">
    <HeaderComponent/>
    <div class="h-full w-full max-h-screen overflow-y-auto bg-amber-100">
      <RouterView />
    </div>   
  </div>
</template>

<script setup >
import HeaderComponent from './HeaderComponent.vue';
</script>