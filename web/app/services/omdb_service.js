MovieApp.service('OMDbService', function ($http) {
    this.findMovies = function (title, year) {
//        if (title != "" && year != "") {
//            return $http.get('http://www.omdbapi.com/', {params: {s: title, y: year}});
//        }
//        if (title != "" && year == "") {
//            return $http.get('http://www.omdbapi.com/', {params: {s: title}});
//        }
//        if (title == "" && year != "") {
//            return $http.get('http://www.omdbapi.com/', {params: {y: year}});
//        }
        return $http.get('http://www.omdbapi.com?', {params: {s: title, y: year, plot:'short', r:'json'}});
    }
});