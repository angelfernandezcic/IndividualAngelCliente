<template>
    <div id="CursoDetalle">
        <div class="container-fluid">
			<div class="row">
          		<div class="col-xs-12">
					<div class="col-xs-6">
						<button @click="$router.push('/AlumnoMaestro')" class="btn btn-default">
							<i class="fa fa-mail-reply"></i>&nbsp;Volver
						</button>
					</div>
					<div v-if="Object.keys(alumnoFiltradoBackUp).length" class="col-xs-6">
						<button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default"><i class="fa fa-pencil"></i>&nbsp;Editar</button>
					</div>
					<div class="col-xs-12">
						<h2>{{!Object.keys(alumnoFiltradoBackUp).length?"Inserte un alumno nuevo":"Detalle de alumno"}}</h2>
					</div>
				</div>
        	</div>
		</div>
		<form v-on:submit.prevent="">
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Nombre</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Nombre" name="nombre" label="Nombre" type="text" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Apellidos</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Apellidos" name="apellidos" label="Apellidos" type="text" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">DNI</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.DNI" name="DNI" label="DNI" type="text" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Direccion</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Direccion" name="direccion" label="Direccion" type="text" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Localidad</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Localidad" name="localidad" label="Localidad" type="text" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Fecha de Nacimiento</v-subheader>
				</v-flex>
      			<v-flex xs8>
        			<v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-left="40" max-width="290px">
          				<v-text-field v-bind:disabled="!isEditable" slot="activator" label="Fecha de nacimiento" v-model="alumnoFiltrado.Fecha" readonly>
          				</v-text-field>
          				<v-date-picker v-model="alumnoFiltrado.Fecha" no-title scrollable actions>
				            <template scope="{ save, cancel }">
				              <v-card-actions>
				                <v-btn flat primary @click.native="cancel()">Cancelar</v-btn>
				                <v-btn flat primary @click.native="save()">Guardar</v-btn>
				              </v-card-actions>
				            </template>
				        </v-date-picker>
				    </v-menu>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Creditos</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-text-field v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Creditos" name="creditos" label="Creditos" type="number" dark required></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout row>
				<v-flex xs4>
					<v-subheader class="grey--text text--lighten-1">Beca</v-subheader>
				</v-flex>
				<v-flex xs8>
					<v-switch v-bind:disabled="!isEditable" v-model="alumnoFiltrado.Beca" dark></v-switch>
				</v-flex>
			</v-layout>
            <v-layout row>
				<v-btn @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">
					<i class="fa fa-times"></i>&nbsp;Cancelar
				</v-btn>
				<v-btn v-if="!Object.keys(alumnoFiltradoBackUp).length" @click="guardarDatos()" id="boton_guardar" class="btn btn-default">
					<i class="fa fa-floppy-o"></i>&nbsp;Guardar
				</v-btn>
				<v-btn v-if="Object.keys(alumnoFiltradoBackUp).length" :disabled="disableUpdate" @click="actualizarDatos()" id="boton_actualizar" class="btn btn-default">
					<i class="fa fa-undo"></i>&nbsp;Actualizar
				</v-btn>
			</v-layout>
		</form>
	</div>
</template>

<script src="./AlumnoDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./AlumnoDetalle.css" type="text/css" media="screen"></style>