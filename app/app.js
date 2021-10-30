'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.driver',
  'myApp.services',
  'myApp.version'
  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  /* $routeProvider.when("/view1", { templateUrl: "view1/view1.html", controller: "View1Ctrl" });
  $routeProvider.when("/#!/driver/:id", { templateUrl: "driver/driver.html", controller: "DriverCtrl" }); */
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
