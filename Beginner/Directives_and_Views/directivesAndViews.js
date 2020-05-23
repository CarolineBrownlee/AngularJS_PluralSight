var gitHubApp = angular.module("gitHubApp", []);

gitHubApp.controller("gitHubCtrl", function($scope, $http) {

    var gitHubResponse = function(response){
        $scope.user = response.data;
    };

    var errorResponse = function(reason) {
        $scope.error = "Sorry, I can't get that information for you at the moment."
    }

    // Create a search attribute on $scope and have that equal to a function that takes a username parameter and then send off the request
    $scope.search = function(username) {
        $http.get("http://api.github.com/users/" + username)
            .then(gitHubResponse, errorResponse)
    };

        $scope.message = "GitHub Viewer Application";
        $scope.username = "";
});