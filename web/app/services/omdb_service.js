MovieApp.service('OMDbService', function ($http) {
    this.findMovies = function (title, year) {
        return $http.get('//www.omdbapi.com/', {params: {s: title, y: year}});
    }
});