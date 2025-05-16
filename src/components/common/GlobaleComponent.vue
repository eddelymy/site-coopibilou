<template>
  <div class=" w-full h-screen relative flex flex-col overflow-hidden">
    <div class="w-full">
      <HeaderComponent/>
    </div>
    
    <div class="h-full w-full max-h-screen overflow-y-auto bg-amber-50">
      <RouterView />
    </div> 
    <div class="absolute bottom-14 right-4">
      <FlashMessage />
    </div>  
  </div>

</template>

<script setup >
import HeaderComponent from './HeaderComponent.vue';
import FlashMessage from "./FlashMessage.vue"

</script>