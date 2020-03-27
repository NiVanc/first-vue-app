new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://zebra.be",
    htmlLink: `<a href="http://zebra.be">Zebra</a>`,
    counter: 0,
    x: 0,
    y: 0,
    name: "Nico"
  },
  methods: {
    sayHello() {
      this.title = "Welcome and pay a visit to ";
      return this.title;
    },
    increaseCounter(step, event) {
      this.counter += step;
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe() {
      alert("Watch out, you pressed enter.");
    }
  }
});
