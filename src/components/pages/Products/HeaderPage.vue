<template>  
    <div class="flex items-center gap-1 ">
      <span class="rounded-full text-nowrap border border-pink-100 py-1 px-3 bg-pink-100 text-black">
        Trier par
      </span>
      <VueMultiselect
        v-model="sort"
        :options="sortList"
        :multiple="false"
        :close-on-select="true"
        :searchable="true"
        label="label"
        track-by="id"
        select-label="selectionner"
        deselect-label="rejeter valeur"
        placeholder=""
        @update:modelValue="sorted"
        
      >
        <template #noOptions>
          <span>La liste est vide.</span>
        </template>
      </VueMultiselect>
    </div>
</template>
<script setup>
import VueMultiselect from "vue-multiselect"
import {ref} from 'vue'

const emit = defineEmits(['sort'])

const sortList = ref([
  {id:1,label:'Prix : faible à élevé',order:'asc',orderBy:'price'},
  {id:2,label:'Prix : élevé à faible',order:'desc',orderBy:'price'},
  {id:3,label:'Date: de la plus ancienne à la plus récente',order:'asc',orderBy:'createdAt'},
  {id:4,label:'Date: de la plus récente à la plus ancienne',order:'desc',orderBy:'createdAt'}
  ])
  const sort = ref(
      {id:3,label:'Date: de la plus ancienne à la plus récente',order:'asc',orderBy:'createdAt'}
  )

function sorted(){
  emit('sort',sort.value.orderBy,sort.value.order)
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>