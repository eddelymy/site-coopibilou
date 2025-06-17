<template>
  <div class="py-2 px-8 min-w-[300px]">
    <div class="p-5 flex flex-col gap-5">
      <div class="flex justify-between gap-4 items-center">
        <span class=" font-extrabold text-[14px]">Categorie</span>
        <button type="button" @click="addFilter('category')">
          <ChevronDownIcon
            class="w-4 cursor-pointer"
            :class="{' rotate-180':!filterLabel.includes('category')}" />
        </button> 
      </div>
      
      <div v-show="!filterLabel.includes('category')" class="flex flex-col gap-2 justify-center pl-4 font-mono">
        <label>
          <input type="radio" id="tapis" value="tapis" v-model="category" @change="filterByCategory"/> Tapis Berbère
        </label>
        <label>
          <input type="radio" id="coussin" value="coussin" v-model="category" @change="filterByCategory"/> Coussin Berbère
        </label>
        <label>
          <input type="radio" id="handir" value="handir" v-model="category" @change="filterByCategory"/> Handir
        </label>
      </div>
    </div>
    <hr />
    <div class="p-5 flex flex-col gap-5">
      <div class="flex justify-between gap-4 items-center">
        <span class="font-extrabold text-[14px]">Base</span>
        <button type="button" @click="addFilter('base')">
          <ChevronDownIcon
            class="w-4 cursor-pointer"
            :class="{' rotate-180':!filterLabel.includes('base')}" />
        </button> 
      </div>
      <div v-show="!filterLabel.includes('base')" class="pl-4 flex flex-col gap-2 justify-center font-mono">
        <label>
          <input type="radio" id="clair" value="clair" v-model="base" @change="filterByBase"/> Clair
        </label>
        <label>
          <input type="radio" id="colore" value="colore" v-model="base" @change="filterByBase" /> Coloré 
        </label>
      </div>
    </div>
    <hr />
    <div class="p-5 flex flex-col gap-5">
      <div class="flex justify-between gap-4 items-center">
        <span class="font-extrabold text-[14px]">Couleur</span>
        <button type="button" @click="addFilter('color')">
          <ChevronDownIcon
            class="w-4 cursor-pointer"
            :class="{' rotate-180':!filterLabel.includes('color')}" />
        </button> 
      </div>
      <div v-show="!filterLabel.includes('color')" class="pl-4 flex flex-col gap-2 justify-center font-mono">
        <label>
          <input type="radio" id="vert" value="vert" v-model="color" @change="filterByColor"/> Vert
        </label>
        <label>
          <input type="radio" id="orange" value="orange" v-model="color" @change="filterByColor"/> Orange 
        </label>
        <label>
          <input type="radio" id="jaune" value="jaune" v-model="color" @change="filterByColor"/> Jaune 
        </label>
        <label>
          <input type="radio" id="rouge" value="rouge" v-model="color" @change="filterByColor"/> Rouge 
        </label>
        <label>
          <input type="radio" id="rose" value="rose" v-model="color" @change="filterByColor"/> Rose 
        </label>
        <label>
          <input type="radio" id="violet" value="violet" v-model="color" @change="filterByColor"/> Violet 
        </label>
        <label>
          <input type="radio" id="gris" value="gris" v-model="color" @change="filterByColor"/> Gris 
        </label>
        <label>
          <input type="radio" id="bleu" value="bleu" v-model="color" @change="filterByColor"/> Bleu 
        </label>
        <label>
          <input type="radio" id="bleu_clair" value="bleu_clair" v-model="color" @change="filterByColor"/> Bleu clair 
        </label>
        <label>
          <input type="radio" id="marron" value="marron" v-model="color" @change="filterByColor"/> Marron 
        </label>
        <label>
          <input type="radio" id="multicolore" value="multicolore" v-model="color" @change="filterByColor"/> Multicolore 
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ChevronDownIcon} from '@heroicons/vue/24/outline'
import {ChevronUpIcon} from '@heroicons/vue/24/outline'
import {ref} from 'vue'

const emit = defineEmits(['filter','cancel'])

const filterLabel = ref([])
const category = ref([])
const base = ref([])
const color = ref([])


function addFilter(value){
  filterLabel.value.filter((item)=>item === value).length === 0 ? 
  filterLabel.value.push(value) : filterLabel.value = [...filterLabel.value.filter((item)=>item !== value)] 
}

function filterByCategory(evnt){
  if(category.value.includes(evnt.target.value)){
    emit('filter',{
      key: 'category',
      operator: 'EQUAL',
      field_type: 'STRING',
      value: evnt.target.value
    })
    
    return
  }
  emit('cancel',{
      key: 'category',
      operator: 'EQUAL',
      field_type: 'STRING',
      value: evnt.target.value
    })
  
}
function filterByBase(evnt){
  if(base.value.includes(evnt.target.value)){
    emit('filter',{
      key: 'base',
      operator: 'EQUAL',
      field_type: 'STRING',
      value: evnt.target.value
    })
    
    return
  }
  emit('cancel',{
      key: 'base',
      operator: 'EQUAL',
      field_type: 'STRING',
      value: evnt.target.value
    })
  
}
function filterByColor(evnt){
  if(color.value.includes(evnt.target.value)){
    emit('filter',{
      key: 'color',
      operator: 'OVERLAP',
      field_type: 'ARRAY',
      value: [evnt.target.value]
    })
    
    return
  }
  emit('cancel',{
      key: 'color',
      operator: 'OVERLAP',
      field_type: 'ARRAY',
      value: [evnt.target.value]
    })
  
}

</script>