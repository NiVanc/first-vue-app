new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://zebra.be",
    htmlLink: `<a href="http://zebra.be">Zebra</a>`,
    counter: 0,
    counterOther: 0,
    x: 0,
    y: 0,
    name: "Nico",
    attachRed: false
  },
  computed: {
    resultComponent() {
      console.log("Computed");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  },
  watch: {
    counter() {
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    }
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
    },
    result() {
      console.log("Method");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  }
});

// Computed for sync code
// Watch for async code
