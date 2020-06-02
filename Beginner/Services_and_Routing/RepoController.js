(function() {

    var gitHubApp = angular.module("gitHubApp");

    var RepoController = function ($scope, $routeParams, github) {

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };
        
        // what searching for to get details of repository and need to match how described routing params to routing engine
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails($scope.username, $scope.reponame).then(onRepo, onError);
        
    }


    gitHubApp.controller("RepoController", RepoController);


}());