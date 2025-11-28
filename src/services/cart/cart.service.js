import axios from '../axios'
import routes from './routes'
import { useLoadingStore } from "@/stores/loading.js"

const loadingStore = useLoadingStore()

export default {

  async getAll() {
    try {
      loadingStore.setLoading('cartProducts.index', true)

      return await axios.get(routes.get.url)
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    } finally {
      loadingStore.setLoading('cartProducts.index', false)
    }
  },
  async addProduct(cartProduct) {
    try {
      loadingStore.setLoading('cartProducts.add', true)

      return await axios.post(routes.post.url, cartProduct)
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    } finally {
      loadingStore.setLoading('cartProducts.add', false)
    }
  },
  async deleteProduct(id) {
    try {
      return await http.delete(routes.delete.url(id))
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    }
  }
}