angular
    .module('app')
    .config(appConfig);


function appConfig ($stateProvider) {
    'use strict';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        });
}
