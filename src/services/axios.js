import apiClient from "@/services/instance.js"
import router from "@/router/index.js"

const instance = apiClient.getInstance()

instance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('tkn_dt')

    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token
    // }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    // if (error.response?.status === 403) {
    //   const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
    //   flash(message, 'error')
    //   localStorage.removeItem('user_dt')
    //   localStorage.removeItem('menu_dt')
    //   localStorage.removeItem('tkn_dt')
    //   await router.push('/')
    // }

    return Promise.reject(error)
  }
)

export default instance