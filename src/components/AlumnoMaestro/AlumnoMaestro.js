export default {
  name: 'AlumnoMaestro',
  data () {
    return {
      items: [],
      isOpen: false,
      itemInsercion: {}
    }
  },
  methods: {
    getTodos () {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:50745/api/Alumnos',   
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: (error) => {
          alert('Problemas al cargar el listado')
          debugger
        }
      })
    },
    eliminarObjeto (id) {
      let _this = this
      bootbox.confirm({
        message: "¿Eliminar de forma permanente?",
        buttons: {
            confirm: {
                label: 'Si',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if(result){
              $.ajax({
                type: 'DELETE',
                url: 'http://localhost:50745/api/Alumnos/' + id,
                success: function (response) {
                },
                error: function(error){
                  debugger
                },
                complete: function(){
                  _this.getTodos()
                }
              })
            }
        }
      });
    }
  },
  created: function () {
    this.getTodos()
  }
}