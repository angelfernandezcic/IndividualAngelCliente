<template>
    <div id="AlumnoMaestro">
      <div class="container-fluid">
        <div id="barra_botones" class="row">
          <v-flex xs4>
            <v-btn id="insertar" @click="$router.push('/AlumnoDetalle')" class="btn btn-default">
              <i class="fa fa-plus"></i>&nbsp;Insertar Alumno
            </v-btn>
          </v-flex>
        </div>
        <div v-if="items.length < 1">
          <h3>No existen alumnos insertados</h3>
        </div>
        <div v-else>
        <v-container fluid style="min-height: 0;" grid-list-lg v-for="item in items" :key="item.Id">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card class="light-green accent-4 white--text">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs9>
                      <router-link @click.native.stop="" :to="{ name: 'AlumnoDetalle', params: { id: item.Id }}">
                        <div>
                          <div class="headline">{{item.Nombre}}</div>
                          <div>{{item.Apellidos}}</div>
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

<script src="./AlumnoMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./AlumnoMaestro.css" type="text/css" media="screen"></style>