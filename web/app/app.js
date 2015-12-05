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
                templateUrl: 'app/views/add.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:key', {
                controller: 'ShowController',
                templateUrl: 'app/views/show.html'
            })
            .when('/movies/:key/edit', {
                controller: 'EditController',
                templateUrl: 'app/views/edit.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/login', {
                controller: 'UserController',
                templateUrl: 'app/views/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

MovieApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }]);

MovieApp.run(function (AuthenticationService, $rootScope) {
    $rootScope.logOut = function () {
        AuthenticationService.logUserOut();
        location.reload();
    };

    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});
