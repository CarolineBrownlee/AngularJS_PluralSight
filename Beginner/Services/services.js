var gitHubApp = angular.module("gitHubApp", []);

gitHubApp.controller("gitHubCtrl", function($scope, $http, $interval, $log, $anchorScroll, $location) {

    var gitHubResponse = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, errorResponse)  
        console.log($scope)
    };
    
    var onRepos = function(response) {
        $scope.repos = response.data;
        $location.hash("userDetails");
        $anchorScroll();
    }

    var errorResponse = function(reason) {
        $scope.error = "Sorry, I can't get that information for you at the moment."
    }

    var decrementCountdown = function() {
        $scope.countdown -= 1;
        if($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    }

    var startCountdown = function(){
        $interval(decrementCountdown, 1000, $scope.countdown)
    }
    // Create a search attribute on $scope and have that equal to a function that takes a username parameter and then send off the request
    $scope.search = function(username) {
        $log.info("Searching for " + username)
        $http.get("http://api.github.com/users/" + username)
        .then(gitHubResponse, errorResponse)
        console.log(username)
    };

        $scope.message = "GitHub Viewer Application";
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countdown = 5;
        startCountdown();
});