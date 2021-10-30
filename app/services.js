'use strict';

angular.module('myApp.services', [])
    .factory('ergastAPIservice', ['$http', function ($http) {
        var ergastAPI = {};

        ergastAPI.getDrivers = function(){
            return $http.get('http://ergast.com/api/f1/2020/driverStandings.json')
                .then(response => {
                    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    //console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
                })
        }

        ergastAPI.getDriverDetails = function (id) {
            return $http.get('http://ergast.com/api/f1/2020/drivers/' + id +'/driverStandings.json')
                .then(response => {
                    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
                    
                })
        }

        ergastAPI.getDriverRaces = function (id) {
            return $http.get('http://ergast.com/api/f1/2020/drivers/' + id +'/results.json')
                .then(response => {
                    return response.data.MRData.RaceTable.Races;
                   
                })
        }



        return ergastAPI;

        
    }]);