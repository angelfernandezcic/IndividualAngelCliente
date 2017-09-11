import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CursoMaestro from '../components/CursoMaestro'
import CursoDetalle from '../components/CursoDetalle'
import AlumnoMaestro from '../components/AlumnoMaestro'
import AlumnoDetalle from '../components/AlumnoDetalle'

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
    },
    {
      path: '/CursoDetalle',
      name: 'CursoDetalle',
      component: CursoDetalle,
      meta: {title: 'Detalle de Curso'}
    },
    {
      path: '/CursoDetalle/:id',
      name: 'CursoDetalleId',
      component: CursoDetalle,
      meta: {title: 'Detalle de Curso'}
    },
    {
      path: '/AlumnoMaestro',
      name: 'AlumnoMaestro',
      component: AlumnoMaestro,
      meta: {title: 'Alumno'}
    },
    {
      path: '/AlumnoDetalle',
      name: 'AlumnoDetalle',
      component: AlumnoDetalle,
      meta: {title: 'Detalle de Alumno'}
    },
    {
      path: '/AlumnoDetalle/:id',
      name: 'AlumnoDetalleId',
      component: AlumnoDetalle,
      meta: {title: 'Detalle de Alumno'}
    }
  ]
})
