describe('Edit movie', function () {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MovieApp');

        FirebaseServiceMock = (function () {
            var movies = [{
                title: 'Joku leffa',
                director: 'Kalle Ilves',
                year: 2015,
                description: 'Mahtava leffa!',
                key: 'abc123'
            }];
            
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                addMovie: function (movie) {
                    movies.push(movie);
                },
                getMovies: function () {
                    return movies;
                },
                editMovie: function (movie) {
                },
                removeMovie: function (movie) {
                },
                getMovie: function (key, done) {
                    if (key == movies[0].id) {
                        done(movies[0]);
                    } else {
                        done(null);
                    }
                }
            }
        })();

        RouteParamsMock = (function () {
            return {
                // Toteuta mockattu $routeParams-muuttuja tähän
                key: 'abc123'
            }
        });

        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('EditController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routeParams: RouteParamsMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should fill the edit form with the current information about the movie', function () {
        expect(scope.movie.title).toBe("Joku leffa");
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
    })

    /* 
     * Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.g
     */
    it('should be able to edit a movie by its name, director, release date and description', function () {
        scope.title = "Uusi title";
        scope.director = "Uusi director";
        scope.year = "1234";
        scope.description = "Uusi description";
        
        scope.editMovie();
        
        expect(scope.movies[0].title).toBe("Uusi title");
    });

    /*
     * Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
     * käyttämällä not.toBeCalled-oletusta.
     */
    it('should not be able to edit a movie if its name, director, release date or description is empty', function () {
        scope.title = "";
        scope.director = "";
        scope.year = "";
        scope.description = "";
        
        scope.editMovie();
        
        expect(scope.movies[0].title).toBe("Joku leffa");
    });
});