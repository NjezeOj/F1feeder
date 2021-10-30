'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

  .controller('View1Ctrl', ['$scope', '$http', 'ergastAPIservice', function ($scope, $http, ergastAPIservice) {
  /* $scope.driversList = [
    {
      Driver: {
        givenName: 'Sebastian',
        familyName: 'Vettel'
      },
      points: 322,
      nationality: "German",
      Constructors: [
        { name: "Red Bull" }
      ]
    },
    {
      Driver: {
        givenName: 'Fernando',
        familyName: 'Alonso'
      },
      points: 207,
      nationality: "Spanish",
      Constructors: [
        { name: "Ferrari" }
      ]
    }
  ]; */

    $scope.nameFilter = null;
    $scope.searchFilter = function (driver) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter /* this returns true when $scope.nameFilter="", which 
      makes view1.html to render the list of drivers from the api */|| keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };
    /* $http.get('http://ergast.com/api/f1/2020/driverStandings.json')
      .then(response => {
        $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        //console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      }) */

    ergastAPIservice.getDrivers()
      .then(response => {
        $scope.driversList = response
      })

}]);