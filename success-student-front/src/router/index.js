import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/cabecalho/LoginView.vue'
import AjudaView from '../views/cabecalho/AjudaView.vue'
import ContaView from '../views/cabecalho/ContaView.vue'
import CadastroView from '../views/cabecalho/CadastroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/conta',
      name: 'conta',
      component: ContaView
    },
    {
      path: '/ajuda',
      name: 'ajuda',
      component: AjudaView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('../views/Hist/HistoriaView.vue')
    },
    {
      path: '/antiguidade',
      name: 'antiguidade',
      component: () => import('../views/Hist/HistoriaView.vue')
    },
    {
      path: '/geografia',
      name: 'geografia',
      component: () => import('../views/Geo/GeografiaView.vue')
    },
    {
      path: '/problemas-ambientais',
      name: 'problemas-ambientais',
      component: () => import('../views/Geo/Problemas-ambientaisView.vue')
    },
    {
      path: '/matematica',
      name: 'matematica',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Mate/MatematicaView.vue')
    },
    {
      path: '/adicao',
      name: 'adicao',
      component: () => import('../views/Mate/AdicaoView.vue')
    },
    {
      path: '/subtracao',
      name: 'subtracao',
      component: () => import('../views/Mate/SubtracaoView.vue')
    },
  ]
})

export default router
