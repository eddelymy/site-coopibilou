<template>
  <div class="p-2">
    <div class="p-5 flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <span class=" font-extrabold text-[14px]">Categorie</span>
        <button type="button" @click="addFilter('category')">
          <ChevronDownIcon
            class="w-4"
            :class="{' rotate-180':!filterLabel.includes('category')}" />
        </button> 
      </div>
      
      <div v-show="!filterLabel.includes('category')" class="mt-6 flex flex-col gap-2 justify-center pl-4 font-mono">
        <label>
          <input type="checkbox"/> Tapis Berbère
        </label>
        <label>
          <input type="checkbox"/> Coussin Berbère
        </label>
        <label>
          <input type="checkbox"/> Handir
        </label>
      </div>
    </div>
    <hr />
    <div class="p-5 flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <span class="font-extrabold text-[14px]">Base</span>
        <button type="button" @click="addFilter('base')">
          <ChevronDownIcon
            class="w-4"
            :class="{' rotate-180':!filterLabel.includes('base')}" />
        </button> 
      </div>
      <div v-show="!filterLabel.includes('base')" class="mt-6 pl-4 flex flex-col gap-2 justify-center font-mono">
        <label>
          <input type="checkbox"/> Clair
        </label>
        <label>
          <input type="checkbox"/> Coloré 
        </label>
      </div>
    </div>
    <hr />
    <div class="p-5 flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <span class="font-extrabold text-[14px]">Mesure</span>
        <button type="button" @click="addFilter('mesure')">
          <ChevronDownIcon
            class="w-4"
            :class="{' rotate-180':!filterLabel.includes('mesure')}" />
        </button> 
      </div>
      <div v-show="!filterLabel.includes('mesure')" class="mt-6 pl-4 flex flex-col gap-2 justify-center font-mono">
        <label>
          <input type="checkbox"/> Couloir
        </label>
        <label>
          <input type="checkbox"/> Moyen - de 1,7x1,2 à 2,6x1,6 m
        </label>
        <label>
          <input type="checkbox"/> Petit
        </label>
        <label>
          <input type="checkbox"/> Grand - jusqu'à 3x2 m
        </label>
      </div>
    </div>
    <hr />
    <div class="p-5 flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <span class="font-extrabold text-[14px]">Couleur</span>
        <button type="button" @click="addFilter('color')">
          <ChevronDownIcon
            class="w-4"
            :class="{' rotate-180':!filterLabel.includes('color')}" />
        </button> 
      </div>
      <div v-show="!filterLabel.includes('color')" class="mt-6 pl-4 flex flex-col gap-2 justify-center font-mono">
        <label>
          <input type="checkbox"/> Vert
        </label>
        <label>
          <input type="checkbox"/> Orange 
        </label>
        <label>
          <input type="checkbox"/> Jaune 
        </label>
        <label>
          <input type="checkbox"/> Rouge 
        </label>
        <label>
          <input type="checkbox"/> Rose 
        </label>
        <label>
          <input type="checkbox"/> Violet 
        </label>
        <label>
          <input type="checkbox"/> Gris 
        </label>
        <label>
          <input type="checkbox"/> Bleu/Bleu clair 
        </label>
        <label>
          <input type="checkbox"/> Multicolore 
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ChevronDownIcon} from '@heroicons/vue/24/outline'
import {ChevronUpIcon} from '@heroicons/vue/24/outline'
import {ref} from 'vue'

const filterLabel = ref([])

function addFilter(value){
  filterLabel.value.filter((item)=>item === value).length === 0 ? 
  filterLabel.value.push(value) : filterLabel.value = [...filterLabel.value.filter((item)=>item !== value)] 
}

</script>