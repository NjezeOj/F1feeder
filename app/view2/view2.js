'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$http', '$scope', function($http, $scope) {
  
  $http.get('http://ergast.com/api/f1/2013/driverStandings.json')
    .then(response => {
      $scope.driversList = response.data.MRData.series;
      console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    })
  


}]);