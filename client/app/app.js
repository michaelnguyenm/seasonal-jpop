angular
    .module('app', [
        'ui.router'
    ])
    .config(appConfig)
    .run(appRun);

function appConfig ($urlRouterProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function appRun ($rootScope, $state) {
    'use strict';

    $rootScope.appName = 'app';
    $rootScope.$state = $state;
}
