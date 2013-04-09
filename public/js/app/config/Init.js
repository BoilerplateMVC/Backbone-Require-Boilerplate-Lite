//
// Init.js
// --------------
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

      // Plugins
      // -------
      "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "text": "libs/plugins/text",

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

      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"]

  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/Router", "backbone.validateAll"],

  function($, Backbone, Router) {

    // Instantiates a new Desktop Router instance
    new Router();

  }

);