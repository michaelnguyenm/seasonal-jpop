// Karma configuration
// Generated on Mon Jan 02 2017 01:31:11 GMT-0600 (STD)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
      'https://code.angularjs.org/1.6.0/angular.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      'client/app/app.js',
      'client/app/home/home.js',
      'client/app/about/about.js',
      'client/app/**/*.html',
      'test/client/app/app.test.js',
      'test/client/app/home/home.test.js',
      'test/client/app/about/about.test.js'

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.html': ['ng-html2js'],
      'client/app/**/*.js' : ['coverage']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
});
};
