'use strict';

const path = require('path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
let cssModulesAddon = require.resolve('css-modules');

let cssModulesAddonPath = path.join(cssModulesAddon, '..', 'app', 'styles');
console.log('cssModulesAddonPath', cssModulesAddonPath);

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // postcssOptions: {
    //   compile: {
    //     enabled: true, // defaults to true
    //     browsers: ['last 3 versions'], // this will override config found in config/targets.js
    //     // plugins: [
    //     //   {
    //     //     module: <module>,
    //     //     options: {
    //     //       ...
    //     //     }
    //     //   }
    //     // ]
    //   },
    //   filter: {
    //     enabled: true, // defaults to false
    //     map: false, // defaults to inline, false in production
    //     browsers: ['last 3 versions'], // this will override config found in config/targets.js
    //     include: [
    //       'styles/*.css',
    //       cssModulesAddonPath
    //     ],
    //     // exclude: ['vendor/bootstrap/**/*'],
    //     // plugins: [
    //     //   {
    //     //     module: <module>,
    //     //     options: {
    //     //       ...
    //     //     }
    //     //   }
    //     // ]
    //   }
    // },

    cssModules: {
      // Emit a combined SCSS file for ember-cli-sass to compile
      intermediateOutputPath: 'app/styles/app.scss',

      // Use .scss as the extension for CSS modules instead of the default .css
      extension: 'scss',

      // Pass a custom parser/stringifyer through to PostCSS for processing modules
      postcssOptions: {
        syntax: require('postcss-scss'),
        filter: {
          enabled: true, // defaults to false
          map: false, // defaults to inline, false in production
          browsers: ['last 3 versions'], // this will override config found in config/targets.js
          include: [
            'styles/*.css',
            cssModulesAddonPath
          ],
          // exclude: ['vendor/bootstrap/**/*'],
          // plugins: [
          //   {
          //     module: <module>,
          //     options: {
          //       ...
          //     }
          //   }
          // ]
        }
      }
    },

    sassOptions: {
      extension: "scss",
      includePaths: [
        cssModulesAddonPath
      ]
    },
  });

  return app.toTree();
};
