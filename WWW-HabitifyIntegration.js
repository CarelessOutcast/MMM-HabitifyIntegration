

Module.register( "WWW-HabitifyIntegration" , {

  defaults: {
    text: "Hello World",
  }, 

  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text; 
    return wrapper;
  },

  loaded: function(callback) {
    this.finishLoading();
    Log.log(this.name + ' is loaded!');
    callback();
  },

  start: function() {
    // runs on startup!
    this.mySpecialProperty = "So much wow!";
    Log.log(this.name + ' is started!');
    Log.log(this.mySpecialProperty + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ');

    // update self!
    var self = this;
    setInterval(function(){
      self.updateDom(2000);
    }, 60000)

    // talk to other modules
    // this.sendNotification("HABITIFYINTEGRATION_READY_FOR_ACTION", { foo: bar });

    // talk to node_helper
    // this.sendSocketNotification("SET_CONFIG", this.config); 
  },

  getScripts: function() {
    // to load other scripts, define here
    return [
      // 'script.js', // will try to load it from the vendor folder, otherwise it will load is from the module folder.
      // 'moment.js', // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
      // this.file('anotherfile.js'), // this file will be loaded straight from the module folder.
      // 'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
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


});

