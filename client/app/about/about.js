var app = angular.module('app');

app.config(function($stateProvider) {
    'use strict';

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html'
        });
});
