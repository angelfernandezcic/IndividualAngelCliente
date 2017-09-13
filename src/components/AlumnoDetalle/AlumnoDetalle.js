export default {
  name: 'Detail',
  data() {
    
    return { alumnoFiltrado: {Nombre: "", Apellidos: "", DNI: "", Direccion: "", Localidad: "", Creditos: "", Fecha: "", Beca: false}, alumnoFiltradoBackUp: {}, isEditable: false,  modal: false }
  },
  created (){
  	this.getID()
  },
  watch: {
    '$route': 'getID'
  },
  computed: {
    disableUpdate: function () {
      var propiedades = [
        "Nombre",
        "Apellidos",
        "DNI",
        "Direccion",
        "Localidad",
        "Fecha",
        "Creditos",
        "Beca"
      ];
      var disable = true;
      for (var i = 0; i < propiedades.length; i++) {
        if (this.alumnoFiltrado[propiedades[i]] != this.alumnoFiltradoBackUp[propiedades[i]]) {
          disable = false;
          break;
        }
      }
      return (disable || !this.isEditable);
    }
  },
  methods: {
    notValid: function () {
      var mensaje = "";
      if (!this.alumnoFiltrado.Nombre || this.alumnoFiltrado.Nombre.length <= 0 || this.alumnoFiltrado.Nombre.length > 40) {
        mensaje += "&#9888; Nombre tiene que tener entre 1 y 40 caracteres.<br>";
      }
      if (!this.alumnoFiltrado.Apellidos || this.alumnoFiltrado.Apellidos.length <= 0 || this.alumnoFiltrado.Apellidos.length > 80) {
        mensaje += "&#9888; Apellidos tiene que tener entre 1 y 80 caracteres.<br>";
      }
      if (!this.alumnoFiltrado.Direccion || this.alumnoFiltrado.Direccion.length <= 0 || this.alumnoFiltrado.Direccion.length > 100) {
        mensaje += "&#9888; Direccion tiene que tener entre 1 y 100 caracteres.<br>";
      }
      if (!this.alumnoFiltrado.Localidad || this.alumnoFiltrado.Localidad.length <= 0 || this.alumnoFiltrado.Localidad.length > 40) {
        mensaje += "&#9888; Localidad tiene que tener entre 1 y 40 caracteres.<br>";
      }
      if (!this.alumnoFiltrado.Creditos || this.alumnoFiltrado.Creditos <= 0 || this.alumnoFiltrado.Creditos > 60) {
        mensaje += "&#9888; Debe escoger entre 1 y 60 creditos maximo.<br>";
      }

      return mensaje;
    },
    cancelarEdicion() {
      this.alumnoFiltrado = JSON.parse(JSON.stringify(this.alumnoFiltradoBackUp))
    },
    activarEdicion () {
      if (this.isEditable) {
        this.cancelarEdicion()
      }
    },
    getID() {
      const _self = this
      this.idAlumno = this.$route.params.id
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:50745/api/Alumnos/' + this.idAlumno,
          success: function (response) {
            _self.alumnoFiltrado = JSON.parse(JSON.stringify(response))
            _self.alumnoFiltradoBackUp = JSON.parse(JSON.stringify(response))
            _self.isEditable=false;
          },
          error: (error) => {
            alert('Problemas al cargar el listado')
            debugger
          }
        })
      }else{
        this.isEditable = true;
      }
    },
    guardarDatos () {
      let _this = this
      var mensaje = this.notValid()
      if (mensaje) {
        bootbox.alert({message: mensaje, size: 'small'})
      } else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:50745/api/Alumnos/',
        data: _this.alumnoFiltrado,
        success: (response) => {
          _this.alumnoFiltrado = {};
          _this.$router.push('/AlumnoMaestro');
        },
        error: (error) => {
          debugger
        }
      
    })
  }
    },
    actualizarDatos () {
      let _this = this
      if (this.notValid()) {
        bootbox.alert({
          message: this.notValid(),
          size: 'small'
        })
      } else {
      bootbox.confirm({
        message: "¿Seguro que desea actualizar?",
        buttons: {
            confirm: {label: 'Si',className: 'btn-success'},
            cancel: {label: 'No',className: 'btn-danger'}
        },
        callback: function (result) {
          if (result) {
            $.ajax({
              type: 'PUT',
              url: 'http://localhost:50745/api/Alumnos/' + _this.alumnoFiltrado.Id,
              data: _this.alumnoFiltrado,
              success: (response) => {
                _this.alumnoFiltrado = {};
                bootbox.alert({
                  message: "¡Actualización realizada con éxito!",
                  size: 'small',
                  callback: function () {
                    _this.$router.push('/AlumnoMaestro');
                  }
                })
              },
              error: _this.error
            })
          }
        }
    });
    }
  }
  },
  components: {

  }
}
