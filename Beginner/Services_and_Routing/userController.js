var gitHubApp = angular.module("gitHubApp");

var UserController = function ($scope, github, $routeParams) {

    var gitHubResponse = function(data){
        $scope.user = data;
        github.getRepos($scope.user)
            .then(onRepos, errorResponse);
    };
    
    var onRepos = function(data) {
        $scope.repos = data;
    };

    var errorResponse = function(reason) {
        $scope.error = "Sorry, I can't get that information for you at the moment."
    };


        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
        github.getUser($scope.username).then(gitHubResponse, errorResponse);
    
};

gitHubApp.controller("UserController", UserController);
