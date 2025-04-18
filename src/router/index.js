import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/produits',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/coop-ibilou',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/fabrication',
      name: 'production',
      component: () => import('../views/ProductionView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/f-a-q',
      name: 'f-a-q',
      component: () => import('../views/FAQView.vue'),
    },
    {
      path: '/panier',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    }
  ],
})

export default router
