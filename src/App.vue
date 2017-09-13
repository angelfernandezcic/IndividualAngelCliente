<template>
  <v-app dark>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
        <router-link v-for="(item, i) in items" :key="i" tag="div" :to="item.to" class="white--text">
          <v-list-tile value="true" >
            <v-icon v-html="item.icon"></v-icon>&nbsp;{{item.title}}
          </v-list-tile>
        </router-link>
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
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

#fila_final {
  padding-bottom: 50px;
}

.router-link-exact-active {
  background-color: #64dd17 !important;
}

.list__tile {
  color: #fff !important;
}
</style>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'group', title: 'Alumnos', to: '/AlumnoMaestro' },
          { icon: 'school', title: 'Cursos', to: '/CursoMaestro' }
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
