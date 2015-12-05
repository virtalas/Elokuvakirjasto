MovieApp.service('AuthenticationService', function ($firebaseAuth, $location) {
    var firebaseRef = new Firebase('https://sweltering-inferno-2687.firebaseIO.com');
    var firebaseAuth = $firebaseAuth(firebaseRef);

    this.logUserIn = function (email, password) {
        return firebaseAuth.$authWithPassword({
            email: email,
            password: password
        });
    }

    this.logUserOut = function () {
        firebaseAuth.$unauth();
        $location.path("/");
    };

    this.createUser = function (email, password) {
        return firebaseAuth.$createUser({
            email: email,
            password: password
        });
    }

    this.checkLoggedIn = function () {
        return firebaseAuth.$waitForAuth();
    }

    this.getUserLoggedIn = function () {
        return firebaseAuth.$getAuth();
    }
});
