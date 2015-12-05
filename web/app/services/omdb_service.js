MovieApp.service('OMDbService', function ($http) {
    this.findMovies = function (title, year) {
        return $http.get('http://www.omdbapi.com/', {params: {s: title, y: year}});
    }
});