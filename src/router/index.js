import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AjudaView from '../views/AjudaView.vue'
import ContaView from '../views/ContaView.vue'
import CadastroView from '../views/CadastroView.vue'

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
      component: () => import('../views/HistoriaView.vue')
    },
    {
      path: '/antiguidade',
      name: 'antiguidade',
      component: () => import('../views/HistoriaView.vue')
    },
    {
      path: '/geografia',
      name: 'geografia',
      component: () => import('../views/GeografiaView.vue')
    },
    {
      path: '/problemas-ambientais',
      name: 'problemas-ambientais',
      component: () => import('../views/Problemas-ambientaisView.vue')
    },
    {
      path: '/matematica',
      name: 'matematica',
      component: () => import('../views/MatematicaView.vue')
    },
    {
      path: '/adicao',
      name: 'adicao',
      component: () => import('../views/AdicaoView.vue')
    },
    {
      path: '/subtracao',
      name: 'subtracao',
      component: () => import('../views/SubtracaoView.vue')
    },
    {
      
    }
  ]
})

export default router
