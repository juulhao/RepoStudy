var app = new Vue({
    el: '#app',
    data: {
      endpoint: 'http://localhost:3000/posts',
      posts: []
    },
    created() {
      axios.get(this.endpoint)
        .then(function (response) {
          this.posts = response.data
          console.log('teste', this.posts)
        })
        .catch(function (error) {
          console.log(error)
      });
    }
  })