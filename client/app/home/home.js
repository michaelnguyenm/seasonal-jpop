var app = angular.module('app');

app.config(function($stateProvider) {
    'use strict';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        });
});
