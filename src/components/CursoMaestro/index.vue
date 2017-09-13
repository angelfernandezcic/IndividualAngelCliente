<template>
    <div id="CursoMaestro">
      <div class="container-fluid">
        <div id="barra_botones" class="row">
          <v-flex xs12>
            <v-btn id="insertar" @click="$router.push('/CursoDetalle')" class="btn btn-default">
              <i class="fa fa-plus"></i>&nbsp;Insertar
            </v-btn>
          </v-flex>
        </div>
        <div v-if="items.length < 1">
          <h3>No existen cursos insertadas</h3>
        </div>
        <div v-else>
        <v-container fluid style="min-height: 0;" grid-list-lg v-for="item in items" :key="item.Id">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card class="light-green accent-4 white--text">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs9>
                      <router-link @click.native.stop="" :to="{ name: 'CursoDetalle', params: { id: item.Id }}">
                        <div>
                          <div class="headline">{{item.Rama}}</div>
                          <div>{{item.Carrera}}</div>
                        </div>
                      </router-link>
                    </v-flex>
                    <v-flex xs3>
                      <v-btn block flat dark @click="eliminarObjeto(item.Id)" id="botonEliminar"><i class="fa fa-trash"></i>&nbsp;Eliminar</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        </div>
      </div>
    </div>
</template>

<script src="./CursoMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./CursoMaestro.css" type="text/css" media="screen"></style>