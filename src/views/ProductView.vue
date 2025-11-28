<template>
  <div class="flex justify-center p-4">
    <div class="min-lg:w-[1200px] w-full h-full bg-white p-5 flex flex-col gap-10 rounded-md border border-slate-200">
      
      <div v-if="loading['product.index']" class="flex w-full justify-center items-center col-span-3">
        <VueSpinnerPie size="70" color="orange" />
      </div>
      <div class="flex flex-col gap-2 w-full md:flex-row" v-else>
        <div :style="{ backgroundImage: `url(${apiUrl}/${product?.image?.replace(/\\/g, '/')})` }" class=" rounded-t-md min-w-20 h-100 md:min-w-120 md:h-150 bg-cover bg-center">
        </div>
        <div class="w-full rounded-md rounded-tr-full flex flex-col justify-center bg-gradient-to-r from-rose-100 via-indigo-100 to-orange-100 animate-gradient-spin ">
            <div class=" w-full flex flex-col gap-4 px-10 py-6">
              <div class="flex gap-2 items-center">
                <span class="text-xl">Origin :</span>
                <span class="font-bold">Timloukine, Azilal, Maroc</span>
              </div>
              <div class="flex gap-2 items-center">
                <span class="text-xl">Construction</span>:
                <span class="font-bold">Fait main</span>
              </div>
              <div class="flex gap-2 items-center">
                <span class="text-xl">Categorie</span>:
                <span class="font-bold">{{ product.category }}</span>
              </div>
              <div class="flex gap-2 items-center">
                <span class="text-xl">Dimension</span>:
                <span class="font-bold">{{ product.width }}*{{ product.height }}</span>
              </div>
              <div class="flex gap-2 items-center">
                <span class="text-xl">Prix</span>:
                <span class="font-bold">{{ product.price }} (DH)</span>
              </div>
            </div>
            <div class="px-10 py-6 flex flex-col gap-6">
              <div class="flex gap-2 items-center">
                <label>Quantité</label>
                <input type="text" class="w-20 rounded-bl-md" v-model="qte"/>
                <div class="flex flex-col">
                    <button type="button" class="bg-green-200 w-10 rounded-tl-md rounded-tr-md cursor-pointer" @click="increment">+</button>
                    <button type="button" class="bg-red-200 rounded-bl-md rounded-br-md cursor-pointer" @click="disincrement">-</button>
                  </div>
              </div>
              <button type="submit" class="cursor-pointer w-1/2" @click="addProduct">Ajouter au panier</button>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cartService from '@/services/cart/cart.service'
import {VueSpinnerPie} from 'vue3-spinners'
import productsService from '@/services/products/products.service'
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { useLoadingStore } from "@/stores/loading.js"
import { storeToRefs } from "pinia"

const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)

const route = useRoute()

const props = defineProps({
  id: [String, Number]
})

const product = ref({})
const apiUrl = "http://localhost:3000"
const qte = ref(1)

onMounted(async()=>{
  await getProductById()
})

async function getProductById(){

  const {data} = await productsService.getById(route.params.id)

  product.value = data
}
function increment(){
  qte.value  = ++ qte.value
}
function disincrement(){
  if(qte.value > 1){
    qte.value  = -- qte.value
  }
  
}
async function addProduct(){
  try{
    const response = await cartService.addProduct({id_product:product.value.id , quantite:qte.value })
     flash(response?.data?.message)
  }catch(error){
    const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
    flash(message, 'error')
  }
}

</script>

<style scoped>
@keyframes gradient-spin {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-gradient-spin {
  background-size: 200% 200%;
  animation: gradient-spin 3s linear infinite;
}



</style>