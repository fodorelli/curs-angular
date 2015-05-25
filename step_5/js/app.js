var app = angular.module("MyApp", ["ui", "ui.directives"])

    .controller("User", function($scope) {
        $scope.user = {};
        $scope.wasSubmitted = false;
        $scope.submit = function() {
            $scope.wasSubmitted = true;
        };
        $scope.error = function(name) {
            var s = $scope.form[name];
            return s.$invalid && s.$dirty ? "error" : "";
        };
        $scope.blacklist = ['idiot', 'loser'];
        $scope.notBlackListed = function(value) {
            return $scope.blacklist.indexOf(value) === -1;
        };
    });