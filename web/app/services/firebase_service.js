MovieApp.service('FirebaseService', function ($firebaseArray) {
    var firebaseRef = new Firebase('https://sweltering-inferno-2687.firebaseIO.com/movies');
    var movies = $firebaseArray(firebaseRef);

    this.getMovies = function () {
        return movies;
    }

    this.addMovie = function (movie) {
        movies.$add(movie);
    }
});