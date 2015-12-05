MovieApp.controller('ListController', function ($scope, FirebaseService, OMDbService, $location) {
    $scope.movies = FirebaseService.getMovies();

    $scope.removeMovie = function (index) {
        FirebaseService.removeMovie($scope.movies[index]);
    }

    $scope.$watch('searchTitle', function (newValue, oldValue) {
        find();
    });
    
    $scope.$watch('searchYear', function (newValue, oldValue) {
        find();
    });
    
    var find = function () {
        OMDbService.findMovies($scope.searchTitle, $scope.searchYear).success(function (movies) {
            $scope.omdbMovies = movies.Search;
        });
    }
});