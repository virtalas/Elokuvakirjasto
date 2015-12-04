var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/movies/new', {
                controller: 'AddController',
                templateUrl: 'app/views/add.html'
            })
            .when('/movies/:key', {
                controller: 'ShowController',
                templateUrl: 'app/views/show.html'
            })
            .when('/movies/:key/edit', {
                controller: 'EditController',
                templateUrl: 'app/views/edit.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});
