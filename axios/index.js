Vue.createApp({
  data: function () {
    return {
      data: []
    }
  },
  methods: {

  },
  mounted: function () {
    axios.get("https://randomuser.me/api/?results=50")
      .then((res) => {
        console.log(res);
        this.data = res.data.results
      })
  }
}).mount("#app")