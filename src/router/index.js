import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Videointro from '../views/Videointro.vue'

Vue.use(VueRouter)

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/',
    name: 'Videointro',
    component: Videointro
  },
  {
    path: '/accueil',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
