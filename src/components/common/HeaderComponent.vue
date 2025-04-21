<template>
  <div class="h-18 relative shadow shadow-amber-300 border-b border-b-slate-200 flex items-center justify-between px-10 bg-white text-black w-full">
    <a href="/" class="flex items-center">
      <img width="40" src="@/assets/images/logo.png" class=" -rotate-10" />
      <div class="flex" style="font-family: EduAUVICWANTArrows;font-size: 23px;">
        <span >Coop</span> 
        <span class=" text-amber-600">Ibilou</span>
      </div>
    </a>
    <div 
      style="font-family: Oswald-Regular;font-size: 18px;" 
      class="flex gap-10 max-lg:hidden"
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
    <div class="min-lg:hidden">
      <button type="button" class="text-black hover:text-amber-600" @click="openMenu">
        <Bars4Icon class="w-5"/>
      </button>
    </div>
    <Transition>
      <div 
        v-show="open" 
        style="font-family: Oswald-Regular;font-size: 18px;"
        class="min-lg:hidden rounded-md bg-white z-50 p-5 absolute right-4 top-20 w-[300px]">
        <div class="flex justify-end mb-5">
          <button type="button" class="text-black hover:text-amber-600" @click="closeMenu">
            <XMarkIcon class="w-5"/>
          </button>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="menu in menus">
            <RouterLink 
              class="flex hover:text-amber-600" 
              activeClass="text-amber-600"
              exactActiveClass="text-amber-600" :to="menu.url"
              @click="closeMenu">
              <span>{{ menu.label }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>
  
</template>

<script setup >
// import { BeakerIcon } from '@heroicons/vue/24/solid'
import {Bars4Icon} from '@heroicons/vue/24/outline'
import {XMarkIcon} from '@heroicons/vue/24/outline'
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

const open = ref(false)

function openMenu(){
  open.value = true
}
function closeMenu(){
  open.value = false
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>