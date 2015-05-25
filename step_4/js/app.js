var app = angular.module("MyApp", [])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when("/home", { templateUrl: "partials/index.html" }).
            when("/home/:idk", { templateUrl: "partials/show.html", controller: "ShowCtrl" }).
            when("/login", { templateUrl: "partials/login.html", controller: "LoginCtrl" }).
            when("/help", { templateUrl: "partials/help.html" }).
            otherwise( { redirectTo: "/home" });
    })


    .factory("Person", function(){
        var persons = [
            {name: "Peter", age: 20, idk: 1},
            {name: "Pann", age: 24, idk: 2},
            {name: "Anton", age: 36, idk: 3}
        ];

        return {
            all: function() {
                return persons;
            },
            get: function(id) {
                var result = null;
                angular.forEach(persons, function(p){
                    if (p.idk == id) {
                        result = p;
                    };
                });
                return result;
            }
        };
    })

    .controller("IndexCtrl", function($scope, Person) {
        $scope.persons = Person.all();
    })

    .controller("ShowCtrl", function($scope, $routeParams, Person) {
        $scope.person = Person.get($routeParams.idk);
    })

    .controller("MainCtrl", function($scope, $location) {
        // console.log($location.path().substring(3));
        $scope.menuClass = function(page) {
            var current = $location.path().substring(1);
            return page === current ? "active" : "";
        };
    })


    /* Listening on Route Changes to Implement a Login Mechanism */
    .run(function($rootScope, $location) {
        console.log($rootScope);
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            // console.log($routeChangeStart);
            if ($rootScope.loggedInUser == null) {
                // no logged user, redirect to /login
                if ( next.templateUrl === "partials/login.html") {
                    //nothing happens
                } else {
                    $location.path("/login");
                }
            }
        });
    })

    .controller("LoginCtrl", function($scope, $location, $rootScope) {
         $scope.login = function() {
             $rootScope.loggedInUser = $scope.username;
             $location.path("/home");
         };
     });