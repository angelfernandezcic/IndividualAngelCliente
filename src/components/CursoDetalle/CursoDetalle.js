var _ = require('lodash');
export default {
  name: 'Detail',
  data() {
    return { 
      cursoFiltrado: {}, 
      cursoFiltradoBackUp: {}, 
      isEditable: false, 
      ramas: null,
      itemsRamas: [
        { text: 'Ciencias' }, 
        { text: 'Letras' }
      ],
      itemsCarrerasLetras: [
        { text: 'Filologia inglesa' }, 
        { text: 'Magisterio' },
        { text: 'Derecho' },
        { text: 'Periodismo' }
      ],
      itemsCarrerasCiencias: [
        { text: 'Medicina' }, 
        { text: 'Biologia' },
        { text: 'Caminos' },
        { text: 'Industriales' },
        { text: 'Informatica' },
        { text: 'Matematicas' }
      ]
    }
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
        "Rama",
        "Carrera",
        "Anyo",
        "Creditos",
        "Alumnos"
      ];
      var disable = true;
      for (var i = 0; i < propiedades.length; i++) {
        if (this.cursoFiltrado[propiedades[i]] != this.cursoFiltradoBackUp[propiedades[i]]) {
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
      if (!this.cursoFiltrado.Alumnos || this.cursoFiltrado.Alumnos.length <= 0 || this.cursoFiltrado.Formato.length > 200) {
        mensaje += "&#9888; Formato tiene que tener entre 1 y 200 caracteres.<br>";
      }

      return mensaje;
    },
    cancelarEdicion() {
      this.cursoFiltrado = JSON.parse(JSON.stringify(this.cursoFiltradoBackUp))
    },
    activarEdicion () {
      if (this.isEditable) {
        this.cancelarEdicion()
      }
    },
    getID() {
      const _self = this
      this.idCurso = this.$route.params.id
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:50745/api/Cursos/' + this.idCurso,
          success: function (response) {
            _self.cursoFiltrado = JSON.parse(JSON.stringify(response))
            _self.cursoFiltradoBackUp = JSON.parse(JSON.stringify(response))
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
        url: 'http://localhost:50745/api/Cursos/',
        data: _this.cursoFiltrado,
        success: (response) => {
          _this.cursoFiltrado = {};
          _this.$router.push('/TareaMaestro');
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
              url: 'http://localhost:50745/api/Cursos/' + _this.cursoFiltrado.Id,
              data: _this.cursoFiltrado,
              success: (response) => {
                _this.cursoFiltrado = {};
                bootbox.alert({
                  message: "¡Actualización realizada con éxito!",
                  size: 'small',
                  callback: function () {
                    _this.$router.push('/CursoMaestro');
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
