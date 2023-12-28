
Module.register("WWW-HabitifyIntegration", {
  defaults: {
    text: "Hello World",
  }, 
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text; 
    return wrapper;
  },
});

