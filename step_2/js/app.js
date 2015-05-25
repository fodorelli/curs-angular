var app = angular.module("MyApp", [])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when("/persons", {templateUrl: "partials/person_list.html", controller: "IndexCtrl"})
            .when("/persons/:idk", {templateUrl: "partials/person_details.html", controller: "ShowCtrl"})
                .otherwise({redirectTo: "/persons"});
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
    });