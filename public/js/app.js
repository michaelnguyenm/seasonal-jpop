
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });

});
