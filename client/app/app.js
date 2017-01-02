var app = angular.module('app', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

app.run(function($rootScope, $state) {
    'use strict';

    $rootScope.appName = 'app';
    $rootScope.$state = $state;
});
