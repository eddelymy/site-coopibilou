<template>
  <div class="w-full h-screen flex flex-col">
    <HeaderComponent/>
    <div class="h-full w-full overflow-auto">
      <RouterView />
    </div>
    
  </div>

</template>

<script setup >
import HeaderComponent from './HeaderComponent.vue';
</script>