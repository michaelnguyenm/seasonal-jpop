angular
    .module('app')
    .config(appConfig);


function appConfig ($stateProvider) {
    'use strict';

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html'
        });
}
