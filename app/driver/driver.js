'use strict';

angular.module('myApp.driver', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/driver/:id', {
            templateUrl: 'driver/driver.html',
            controller: 'DriverCtrl'
        });
    }])

    .controller('DriverCtrl', ['$scope', '$routeParams' ,'ergastAPIservice', function ($scope, $routeParams, ergastAPIservice) {
        
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;


        ergastAPIservice.getDriverDetails($scope.id)
            .then(response => {
                $scope.driver = response
                console.log(response)
            })

        ergastAPIservice.getDriverRaces($scope.id)
            .then(response => {
                $scope.races = response
            })

    }]);