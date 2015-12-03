MovieApp.controller('AddController', function ($scope, FirebaseService, $location) {
    $scope.movies = FirebaseService.getMovies();

    $scope.addMovie = function () {
        var movie = {
            title: $scope.title,
            director: $scope.director,
            year: $scope.year,
            description: $scope.description
        };

        if (movie.title != "" && movie.director != "" && movie.year != "" && movie.description != "") {
            FirebaseService.addMovie(movie);
            $location.path('/movies');
        }
    }
});