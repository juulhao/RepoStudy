var app = new Vue({
  el: '#app',
  data: {
    endpoint: 'http://localhost:3000/posts',
    titulo: '',
    descricao: '',
    link: ''
  },
  methods: {
    /* validadeInputs() {
      
    }, */
    getValues (event) {
      event.preventDefault()
      axios.post(this.endpoint, { 
        Titulo: this.titulo,
        Descricao: this.descricao,
        Link: this.link
      })
      .then(function (response) {
        console.log(response);
        alert('dados inseridos!');
        window.location = "/"
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });
    },
    resetValues (event) {
      event.preventDefault()
      this.titulo = '',
      this.descricao = '',
      this.link = ''
      console.log('resetado')
    }
  }
})