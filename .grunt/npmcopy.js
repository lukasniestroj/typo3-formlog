module.exports = {
  css: {
    options: {
      destPrefix: '<%= paths.resources.public %>/Css',
    },
    files: {
      'knockout-daterangepicker/daterangepicker.css': 'knockout-daterangepicker/dist/daterangepicker.min.css',
    },
  },
  js: {
    options: {
      destPrefix: '<%= paths.resources.public %>/JavaScript',
    },
    files: {
      'knockout/knockout.js': 'knockout/build/output/knockout-latest.js',
      'knockout-daterangepicker/daterangepicker.js': 'knockout-daterangepicker/dist/daterangepicker.min.js',
    },
  }
};
