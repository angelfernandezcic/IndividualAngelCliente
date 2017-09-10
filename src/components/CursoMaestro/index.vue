<template>
    <v-stepper v-model="pantallaCurso" vertical>
        <v-stepper-step step="1" v-bind:complete="pantallaCurso > 1">
          Datos personales
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card class="grey lighten-1 mb-5" height="200px">
              <v-flex xs12 md6>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="nombre" label="Intoduzca su nombre" id="nombre" ></v-text-field>
                  </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md6>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="apellidos" label="Intoduzca sus apellidos" id="apellidos" ></v-text-field>
                  </v-flex>
                </v-layout>
            </v-flex>
          </v-card>
          <v-btn primary @click.native="pantallaCurso = 2">Continue</v-btn>
          <v-btn flat>Cancelar</v-btn>
        </v-stepper-content>
        <v-stepper-step step="2" v-bind:complete="pantallaCurso > 2">Configure analytics for this app</v-stepper-step>
        <v-stepper-content step="2">
          <v-card class="grey lighten-1 mb-5" height="200px"></v-card>
          <v-btn primary @click.native="pantallaCurso = 3">Continue</v-btn>
          <v-btn primary @click.native="pantallaCurso = 1">Volver atras</v-btn>
        </v-stepper-content>
        <v-stepper-step step="3" v-bind:complete="pantallaCurso > 3">Select an ad format and name ad unit</v-stepper-step>
        <v-stepper-content step="3">
          <v-card class="grey lighten-1 mb-5" height="200px">
              <v-flex xs12 md6>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="nombre" label="Intoduzca su nombre" id="nombre" ></v-text-field>
                  </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md6>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="apellidos" label="Intoduzca sus apellidos" id="apellidos" ></v-text-field>
                  </v-flex>
                </v-layout>
            </v-flex>
          </v-card>
          <v-btn primary @click.native="pantallaCurso = 4">Continue</v-btn>
          <v-btn primary @click.native="pantallaCurso = 2">Volver atras</v-btn>
        </v-stepper-content>
        <v-stepper-step step="4">View setup instructions</v-stepper-step>
        <v-stepper-content step="4">
          <v-card class="grey lighten-1 mb-5" height="200px"></v-card>
          <v-btn primary @click.native="enviarCurso()">Enviar datos</v-btn>
          <v-btn primary @click.native="pantallaCurso = 3">Volver atras</v-btn>
        </v-stepper-content>
  </v-stepper>
</template>

<script src="./CursoMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./CursoMaestro.css" type="text/css" media="screen"></style>