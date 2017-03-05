/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get("/api/v1/meetings.json").then(function(response) {
        $scope.meetings = response.data;
      });

      $scope.orderAttribute = 'name';
    };

    $scope.sortBy = function(attribute) {
      if (attribute !== $scope.orderAttribute) {
        $scope.descending = false;
      } else {
        $scope.descending = !$scope.descending;
      }

      $scope.orderAttribute = attribute;
    };
    $scope.addMeeting = function(newName, newAddress) {
      var meetingParams = {name: newName, address: newAddress};
      $http.post("/api/v1/meetings.json", meetingParams).then(function(response) {
        $scope.meetings.push(response.data);
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
    };
  });
}());