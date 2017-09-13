<template>
    <div id="CursoDetalle">
        <div class="container-fluid">
			<div class="row">
	          	<div class="col-xs-12">  
					<div class="col-xs-6">
						<button @click="$router.push('/CursoMaestro')" class="btn btn-default">
							<i class="fa fa-mail-reply"></i>&nbsp;Volver
						</button>
					</div>
					<div v-if="Object.keys(cursoFiltradoBackUp).length" class="col-xs-6">
						<button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default"><i class="fa fa-pencil"></i>&nbsp;Editar</button>
					</div>
					<div class="col-xs-12">
						<h2>{{!Object.keys(cursoFiltradoBackUp).length?"Inserte curso nuevo":"Detalle del curso"}}</h2>
					</div>
				</div>
        	</div>
		</div>
			<form>
			    <v-layout row wrap>
						<v-flex xs6>
							<v-subheader class="grey--text text--lighten-1" v-text="'Rama'"></v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select v-bind:disabled="!isEditable" required v-bind:items="itemsRamas" v-model="cursoFiltrado.Rama" label="Seleccione la rama" dark item-value="text"></v-select>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs6>
							<v-subheader class="grey--text text--lighten-1" v-text="'Carrera'"></v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select v-bind:disabled="!isEditable" v-if="cursoFiltrado.Rama === 'Letras'" v-bind:items="itemsCarrerasLetras" v-model="cursoFiltrado.Carrera" label="Seleccione la carrera" dark item-value="text" required=true></v-select>
							<v-select v-bind:disabled="!isEditable" v-if="cursoFiltrado.Rama === 'Ciencias'" v-bind:items="itemsCarrerasCiencias" v-model="cursoFiltrado.Carrera" label="Seleccione la carrera" dark item-value="text" required=true></v-select>
						</v-flex>
					</v-layout>
					<v-layout row>
          <v-flex xs4>
            <v-subheader class="grey--text text--lighten-1">Años de carrera</v-subheader>
          </v-flex>
          <v-flex xs8>
          	<v-text-field v-bind:disabled="!isEditable" v-model="cursoFiltrado.Anyo" name="anyoscarrera" label="Años de carrera" type="number" dark required></v-text-field>
          </v-flex>
        </v-layout>
                <v-layout row>
          <v-flex xs4>
            <v-subheader class="grey--text text--lighten-1">Creditos</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field v-bind:disabled="!isEditable" v-model="cursoFiltrado.Creditos" name="creditos" label="Creditos" type="number" dark required></v-text-field>
          </v-flex>
        </v-layout>
        		<v-layout row>
          <v-flex xs4>
            <v-subheader class="grey--text text--lighten-1">Alumnos</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field v-bind:disabled="!isEditable" v-model="cursoFiltrado.Alumnos" name="alumnos" label="Alumnos" type="number" dark required></v-text-field>
          </v-flex>
        </v-layout>
				<div class="row">
						<v-btn @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">
							<i class="fa fa-times"></i>&nbsp;Cancelar
						</v-btn>

						<v-btn v-if="!Object.keys(cursoFiltradoBackUp).length" @click="guardarDatos()" id="boton_guardar" class="btn btn-default">
							<i class="fa fa-floppy-o"></i>&nbsp;Guardar
						</v-btn>


						<v-btn v-if="Object.keys(cursoFiltradoBackUp).length" :disabled="disableUpdate" @click="actualizarDatos()" id="boton_actualizar" class="btn btn-default">
							<i class="fa fa-undo"></i>&nbsp;Actualizar
						</v-btn>
				</div>
		</form>
    </div>
</template>

<script src="./CursoDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./CursoDetalle.css" type="text/css" media="screen"></style>