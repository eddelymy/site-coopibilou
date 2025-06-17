import axios from '../axios'
import routes from './routes'
import { useLoadingStore } from "@/stores/loading.js"

const loadingStore = useLoadingStore()

export default {
  async paginated(params) {
    try {
      loadingStore.setLoading('products.index', true)

      return await axios.get(routes.paginated.url, {
        params,
        paramsSerializer: (params) => {
          let result = ''
          Object.keys(params).forEach((key) => {
            result += `${key}=${encodeURIComponent(params[key])}&`
          })
          return result.substring(0, result.length - 1)
        }
      })
    } catch (error) {
      console.log(error)
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    } finally {
      loadingStore.setLoading('products.index', false)
    }
  },
  async getById(id) {
    try {
      return await http.get(routes.getById.url(id))
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    }
  },
  async getAll() {
    try {
      loadingStore.setLoading('products', true)

      return await http.get(routes.get.url)
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    } finally {
      loadingStore.setLoading('products', false)
    }
  },
  async addProduct(product) {
    try {
      loadingStore.setLoading('products.add', true)

      return await http.post(routes.post.url, product)
    } catch (error) {
      const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
      flash(message, 'error')
    } finally {
      loadingStore.setLoading('products.add', false)
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