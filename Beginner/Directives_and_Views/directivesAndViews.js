var gitHubApp = angular.module("gitHubApp", []);

gitHubApp.controller("gitHubCtrl", function($scope, $http) {

    var gitHubResponse = function(response){
        $scope.user = response.data;
    };

    var errorResponse = function(reason) {
        $scope.error = "Sorry, I can't get that information for you at the moment."
    }

    $http.get("http://api.github.com/users/CarolineBrownlee")
        .then(gitHubResponse, errorResponse);
});