MovieApp.service('OMDbService', function ($http) {
    this.findMovie = function (title, year) {
        if (title != "" && year != "") {
            return $http.get('http://www.omdbapi.com/', {params: {s: title, y: year}});
        }
        if (title != "" && year == "") {
            return $http.get('http://www.omdbapi.com/', {params: {s: title}});
        }
        if (title == "" && year != "") {
            return $http.get('http://www.omdbapi.com/', {params: {y: year}});
        }
    }
});