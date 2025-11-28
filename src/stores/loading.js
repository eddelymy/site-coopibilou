import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref({
    products: false,
    'product.index':false,
    'products.index': false,
    'products.add': false,
    'products.edit': false,
    'products.delete': false,
    cartProducts:false,
    'cartProducts.index': false,
    'cartProducts.add': false,
    'cartProducts.delete': false,
  })

  function setLoading(key, value) {
    loading.value[key] = value
  }

  return { loading, setLoading }
})
