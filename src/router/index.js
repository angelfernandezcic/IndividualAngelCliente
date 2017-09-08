import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CursoMaestro from '../components/CursoMaestro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: '/CursoMaestro',
      name: 'CursoMaestro',
      component: CursoMaestro,
      meta: {title: 'Curso'}
    }
  ]
})
