new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://zebra.be",
    htmlLink: `<a href="http://zebra.be">Zebra</a>`
  },
  methods: {
    sayHello() {
      this.title = "Welcome and pay a visit to ";
      return this.title;
    }
  }
});
