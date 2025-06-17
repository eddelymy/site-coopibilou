<template>
  <div class="flex justify-center">
  <div class="min-lg:w-fit w-full h-full min-lg:grid min-lg:grid-cols-[auto_1fr] p-4">
    <FilterComponent @filter="onFilter" @cancel="onCancelFilter"/>
    <div class="bg-white p-5 flex flex-col gap-8 rounded-md border border-slate-200">
      <div class="flex justify-between w-full pb-4 border-b border-b-slate-300">
        <SizeData :size="limit" :total-items="totalItems" @size-selected="onSelectSize" />
        <HeaderPage @sort="sorted"/>
      </div>
      
      <div  class="mt-9 grid content-center h-full  md:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">
        <div v-if="loading['products.index']" class="flex w-full justify-center items-center col-span-3">
          <VueSpinnerPie size="70" color="orange" />
        </div>
        <div v-else v-for="(item,index) in items" :key="index" class="flex flex-col w-80 rounded-md bg-white hover:bg-amber-50 shadow border border-slate-300 hover:scale-105 ">
          <div :style="{ backgroundImage: `url(${apiUrl}/${item.image.replace(/\\/g, '/')})` }" class=" rounded-t-md w-80 h-80 bg-cover bg-center">
          </div>
          <div class="flex flex-col items-center gap-7 p-6">
            <span class="text-amber-700 font-mono text-[17px]">
              {{ item.price }} MAD
            </span>
            <div class="flex justify-between w-full">
              <div class="border w-[150px] justify-center border-slate-400 rounded-md flex items-center">
                {{ item.width }} x {{ item.height }}
              </div>
              <button type="button" class="btn px-4">Voir le produit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center pt-4 border-t border-t-slate-300">
        <PaginationComopent
          :current-page="page -1"
          :total-pages="totalPages"
          :total-items="totalItems"
          @page-changed="onPageChanged"/>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import SizeData from '@/components/common/SizeData.vue';
import {
  VueSpinnerPie, VueSpinnerBars
} from 'vue3-spinners'
import productsService from '@/services/products/products.service';
import HeaderPage from '@/components/pages/Products/HeaderPage.vue';
import FilterComponent from '@/components/pages/Products/FilterComponent.vue';
import PaginationComopent from '@/components/pages/Products/PaginationComopent.vue';
import { useLoadingStore } from "@/stores/loading.js"
import { storeToRefs } from "pinia"
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)

const items = ref([])
const page = ref(1)
const limit = ref(3)
const sortBy = ref('createdAt')
const order = ref('asc')
const currentPage = ref(1)
const totalPages = ref(0)
const totalItems = ref(0)
const filter = ref([])
const filters = ref([])
const apiUrl = ref("http://localhost:3000")

onMounted(()=>{
  fetchData()
  setRoute()
})

async function fetchData(){

    const { data } = await productsService.paginated({
    page: page.value,
    limit: limit.value,
    filter: JSON.stringify(filter.value),
    sortBy: sortBy.value,
    order:order.value
  })

  items.value = data?.products
  page.value = data?.currentPage
  totalPages.value = data?.totalPages
  totalItems.value = data?.totalItems

}
async function onSelectSize(selectedSize) {
  page.value = 0
  limit.value = selectedSize
  setRoute()
  await fetchData()
}
function setRoute() {
  router.push({
    path: route.path,
    query: {
      page: page.value,
      size: limit.value,
      filters:JSON.stringify(filter.value),
      sort:`${sortBy.value}-${order.value}`
    }
  })
}
async function onPageChanged(selectedPage) {
  page.value = selectedPage + 1
  setRoute()
  await fetchData()
}
async function sorted(sortValue,sortOrder){
  sortBy.value = sortValue
  order.value = sortOrder
  setRoute()
  await fetchData()

}
function onFilter(newFilter) {
  filters.value = filters.value.filter(item => item.key !== newFilter.key && item.value !== newFilter.value)
  filters.value.push(newFilter)
  
  
  filter.value = {filters:filters.value}
  page.value = 0
  setRoute()
  fetchData()
}
function onCancelFilter(newFilter){
  const result = filters.value.filter( item => item.key !== newFilter.key && item.value !== newFilter.value)
  filters.value = [...result]
  filter.value = {filters:filters.value}
  page.value = 0
  setRoute()
  fetchData()
}
</script>