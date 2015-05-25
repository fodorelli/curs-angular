var app = angular.module("MyApp", [])

    .controller("MyCtrl", function($scope) {
        $scope.friends = [
            { name: 'Peter', age: 20 },
            { name: 'Pan',   age: 24 },
            { name: 'Anton', age: 28 },
            { name: 'Pann',  age: 27 },
            { name: 'Marta', age: 19 },
            { name: 'Linda', age: 20 }
        ];

        $scope.filterFunction = function(element) {
            return element.name.match(/^Pan/) ? true : false;
        };
    });