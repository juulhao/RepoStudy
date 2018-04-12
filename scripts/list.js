var app = new Vue({
    el: '#app',
    data: {
      endpoint: 'http://localhost:3000/posts',
      posts: []
    },
    created() {
      axios.get(this.endpoint)
        .then((response) =>{
          this.posts = response.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
      });
    }
  })