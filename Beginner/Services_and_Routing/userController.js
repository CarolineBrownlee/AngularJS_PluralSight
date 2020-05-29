var gitHubApp = angular.module("gitHubApp", []);

gitHubApp.controller("gitHubCtrl", function($scope, $interval, $location) {

    var gitHubResponse = function(data){
        $scope.user = data;
        github.getRepos($scope.user)
            .then(onRepos, errorResponse);
    };
    
    var onRepos = function(data) {
        $scope.repos = data;
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
        github.getUser(username)
        .then(gitHubResponse, errorResponse)
        console.log(username)
    };

        $scope.message = "GitHub Viewer Application";
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countdown = 5;
        startCountdown();
});
