<template>
  <v-app dark>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-icon v-html="item.icon"></v-icon><router-link tag="li" :to="item.to" class="white--text">&nbsp;{{item.title}}</router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="light-green accent-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-title v-text="$route.meta.title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; University Course Manager 2017</span>
    </v-footer>
  </v-app>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'group', title: 'Alumno', to: '/AlumnoMaestro' },
          { icon: 'school', title: 'Curso', to: '/CursoMaestro' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
