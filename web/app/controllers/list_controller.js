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
        OMDbService.findMovie($scope.searchTitle, $scope.searchYear).success(function (movies) {
            $scope.omdbMovies = movies.Search;
            
            if (!$scope.omdbMovies) {
                $scope.searchResults = "Haulla ei löytynyt elokuvia."
            } else if ($scope.omdbMovies.length === 1) {
                $scope.searchResults = "Haulla löytyi 1 elokuva."
            } else {
                $scope.searchResults = "Haulla löytyi " + $scope.omdbMovies.length + " elokuvaa.";
            }
        });
    }
});