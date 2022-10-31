'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProductionLike = EmberApp.env() === 'production' || EmberApp.env() === 'staging';

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    newVersion: {
      enabled: true,
      useAppVersion: true,
    },
    'ember-test-selectors': {
      strip: false,
    },
    sassOptions: { implementation: require('node-sass') },

    // Add options here
    fingerprint: {
      enabled: isProductionLike,
      exclude: ['n2-trans.png', 'n2-trans-sm', 'n2-green-144.png', 'n2-green-192.png', 'n2-green-512.png'],
    },

    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },
    'ember-cli-terser': {
      enabled: isProductionLike,
    },
    // minifyCSS: {
    //   enabled: true
    // },
    // minifyJS: {
    //   enabled: true
    // }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('vendor/ie11-polyfill.js');
  // app.import('vendor/font-awesome/font-awesome.css');
  // app.import('vendor/font-awesome/fontawesome-webfont.eot', { destDir: 'assets/fonts' });
  // app.import('vendor/font-awesome/fontawesome-webfont.svg', { destDir: 'assets/fonts' });
  // app.import('vendor/font-awesome/fontawesome-webfont.ttf', { destDir: 'assets/fonts' });
  // app.import('vendor/font-awesome/fontawesome-webfont.woff', { destDir: 'assets/fonts' });
  // app.import('vendor/font-awesome/fontawesome-webfont.woff2', { destDir: 'assets/fonts' });
  // app.import('vendor/font-awesome/FontAwesome.otf', { destDir: 'assets/fonts' });
  // app.import('vendor/bootstrap/bootstrap.css');
  // app.import('vendor/bootstrap/bootstrap.js');
  // app.import('vendor/detail-admin/bootstrap-overrides.css');
  // app.import('vendor/detail-admin/layout.css');
  // app.import('vendor/detail-admin/elements.css');
  // app.import('vendor/bootstrap-typeahead/bootstrap3-typeahead.js');
  // app.import('vendor/big/big.js');
  // app.import('vendor/jquery-nugget-extras/jquery-nugget-extras.js');
  // app.import('vendor/jquery-visible/jquery-visible.js');
  // app.import('vendor/jquery-xhr-blob/jquery-xhr-blob.js');
  // app.import('vendor/filesaver/FileSaver.js');
  app.import('node_modules/pace-progress/pace.js');
  app.import('node_modules/pace-progress/themes/blue/pace-theme-flash.css');
  app.import('node_modules/d3/d3.js');
  app.import('node_modules/c3/c3.js');
  app.import('node_modules/c3/c3.css');
  app.import('node_modules/mousetrap/mousetrap.js');
  app.import('node_modules/mousetrap/plugins/pause/mousetrap-pause.js');
  // app.import('vendor/checkbox-range-selection/checkbox-range-selection.js');
  // app.import('vendor/jquery-next-in-dom/jquery-next-in-dom.js');
  app.import('node_modules/html2canvas/dist/html2canvas.min.js');

  app.import('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css');
  app.import('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js');
  // Polyfills for IE

  if (app.env === 'development' || app.env === 'dev-visual-studio') {
    app.options.minifyCSS.enabled = false;
    app.options.minifyJS.enabled = false;
  }

  return app.toTree();
};
