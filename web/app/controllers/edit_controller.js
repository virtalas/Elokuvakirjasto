MovieApp.controller('EditController', function ($scope, FirebaseService, $location, $routeParams, AuthenticationService) {
    if (!AuthenticationService.getUserLoggedIn()) {
        $location.path('/login');
    }

    FirebaseService.getMovie($routeParams.key, function (movie) {
        $scope.movie = movie;

        $scope.title = $scope.movie.title;
        $scope.director = $scope.movie.director;
        $scope.year = $scope.movie.year;
        $scope.description = $scope.movie.description;

    });

    $scope.editMovie = function () {
        if ($scope.title !== "" && $scope.director !== "" && $scope.year !== "" && $scope.description !== "") {
            $scope.movie.title = $scope.title;
            $scope.movie.director = $scope.director;
            $scope.movie.year = $scope.year;
            $scope.movie.description = $scope.description;

            FirebaseService.editMovie($scope.movie);
            $location.path('/movies');
        }
    }
});