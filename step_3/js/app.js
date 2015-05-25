var app = angular.module("MyApp", [])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when("/home", {templateUrl: "partials/home.html", controller: "MainCtrl"})
            .when("/help", {templateUrl: "partials/help.html", controller: "MainCtrl"})
                .otherwise({redirectTo: "/home"});
    })

    .controller("MainCtrl", function($scope, $location) {
        // console.log($location.path().substring(3));
        $scope.menuClass = function(page) {
            var current = $location.path().substring(1);
            return page === current ? "active" : "";
        };
    })