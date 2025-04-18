<template>
  <div class="h-18 shadow-2xl shadow-amber-500 border-b border-b-slate-200 flex items-center justify-between px-10 bg-white text-black w-full">
    <a href="/" class="flex items-center">
      <img width="40" src="@/assets/images/logo.png" class=" -rotate-10" />
      <div class="flex" style="font-family: EduAUVICWANTArrows;font-size: 23px;">
        <span >Coop</span> 
        <span class=" text-amber-600">Ibilou</span>
      </div>
    </a>
    <div 
      style="font-family: Oswald-Regular;font-size: 18px;" 
      class="flex gap-10"
      >
      <div v-for="menu in menus">
        <RouterLink 
          class="flex hover:text-amber-600" 
          activeClass="text-amber-600"
          exactActiveClass="text-amber-600" :to="menu.url">
          <span>{{ menu.label }}</span>
        </RouterLink>
      </div>
    </div>
    
  </div>
  
</template>

<script setup >
import { RouterLink } from 'vue-router'
import {ref} from 'vue'

const menus = ref([
  {label:'Accueil',url:'/'},
  {label:'Nos produits',url:'/produits'},
  {label:'A propos de CoopIbilou',url:'/coop-ibilou'},
  {label:'Notre savoir faire',url:'/fabrication'},
  {label:'Contact',url:'/contact'},
  {label:'FAQ',url:'/f-a-q'},
  {label:'Panier',url:'/panier'},
])
</script>