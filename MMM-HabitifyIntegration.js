
Module.register( "WWW-HabitifyIntegration" , {

  defaults: {
    text: "Hello Carlos",
  }, 

  loaded: function(callback) {
    this.finishLoading();
    Log.log(this.name + ' is loaded!');
    callback();
  },

  start: function() {
    Log.log(this.name + ' is started!');

    var self = this;
    setInterval(function() {
      self.updateDom(); // no speed defined, so it updates instantly.
    }, 1000); //perform every 1000 milliseconds.

  },

  getScripts: function() {
    return [
    ]
  },

  getStyles: function() {
    return [ 
      "MMM-HabitifyIntegration.css"
    ]
  },

  getTranslations: function() {
    return {
    }
  },

  notificationReceived: function(notification, payload, sender) {
    if (sender) {
      Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
    } else {
      Log.log(this.name + " received a system notification: " + notification);
    }
  },

  socketNotificationReceived: function(notification, payload) {
    Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
  },

  getDom: function () {

    var wrapper = document.createElement("div");

    if (!this.loaded)
    {
      wrapper.innerHTML = "Loading...";
      return wrapper;
    }

    wrapper.innerHTML = this.config.text; 
    return wrapper;
  }


});

