var app = angular.module("MyApp", [])

  .config(function($routeProvider) {
    $routeProvider
      .when("/home", {templateUrl: "home.html"})
      .when("/page", {templateUrl: "page.html"})
      .otherwise({redirectTo: "/home"});
  })


  .factory("flash", function($rootScope) {
    var queue = [];
    var currentMessage = "";
    $rootScope.$on("$routeChangeSuccess", function() {
      currentMessage = queue.shift() || "";
      console.log(currentMessage);
    });

    return {
      setMessage: function(message) {
        queue.push(message);
      },
      getMessage: function() {
        return currentMessage;
      }
    };
  })


  .controller("MyCtrl", function($scope, $location, flash) {
    $scope.flash = flash;
    $scope.message = "Yello0o world!";
    $scope.submit = function(message) {
      flash.setMessage(message);
      $location.path("/page");
    }
  })