// TestInit.js
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "libs/jquery",

      "underscore": "libs/lodash",

      "backbone": "libs/backbone",

      "jasmine": "libs/jasmine",

      "jasmine-html": "libs/jasmine-html",

      // Plugins
      // -------
      "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "text": "libs/plugins/text",

      "jasminejquery": "libs/plugins/jasmine-jquery",

      // Application Folders
      // -------------------
      "collections": "app/collections",

      "models": "app/models",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"],

      // Backbone
      "backbone": {

          // Lists jQuery and Underscore as dependencies
          "deps": ["underscore", "jquery"],

          // Exports the global 'window.Backbone' object
          "exports": "Backbone"

      },

      // Backbone.validateAll depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine Unit Testing
      "jasmine": {

        // Exports the global 'window.jasmine' object
        "exports": "jasmine"

      },

      // Jasmine Unit Testing helper
      "jasmine-html": {

        "deps": ["jasmine"],

        "exports": "jasmine"

      }

  }

});

// Include JavaScript files here (or inside of your router)
require(["jquery", "backbone", "jasmine-html", "backbone.validateAll"],

  function($, Backbone, jasmine) {

    specs = [];
 
    specs.push('test/specs/spec');
 
 
    $(function() {
    
      require(specs, function() {

        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());

        jasmine.getEnv().execute();

    
      });

    });

  }

);