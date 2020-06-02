(function() {
    
    var gitHubApp = angular.module("gitHubApp", ["ngRoute"]);

    gitHubApp.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "userdetails.html",
                controller: "UserController"
            })
            .when("/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"})
    });

}());