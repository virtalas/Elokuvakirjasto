MovieApp.controller('ListController', function($scope, FirebaseService, $location){
    $scope.movies = FirebaseService.getMovies();
    
    $scope.removeMovie = function (index) {
        FirebaseService.removeMovie($scope.movies[index]);
    }
});