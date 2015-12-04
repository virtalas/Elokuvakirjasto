MovieApp.controller('ShowController', function ($scope, FirebaseService, $routeParams) {
    $scope.movies = FirebaseService.getMovies();

    FirebaseService.getMovie($routeParams.key, function (movie) {
        $scope.movie = movie;
    });
});