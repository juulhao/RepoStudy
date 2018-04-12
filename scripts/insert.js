var app = new Vue({
  el: '#app',
  data: {
    endpoint: 'http://localhost:3000/posts',
    titulo: '',
    descricao: '',
    link: '',
    errors:[]
  },
  methods: {
    checkForm (e) {
      if(this.titulo && this.descricao && this.link) return true;
      this.errors = [];
      if(!this.titulo) this.errors.push("Título está vazio.");
      if(!this.descricao) this.errors.push("Descrição está vazia.");
      if(!this.link) this.errors.push("O Link está vazio.");
      e.preventDefault();
    },
    getValues (e) {
      axios.post(this.endpoint, { 
        Titulo: this.titulo,
        Descricao: this.descricao,
        Link: this.link
      })
      .then((response) => {
        console.log(response);
        alert('dados inseridos!');
        window.location = "/"
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
      e.preventDefault()
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