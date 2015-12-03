MovieApp.controller('ListController', function($scope, FirebaseService, $location){
    $scope.movies = FirebaseService.getMovies();
    
    
});