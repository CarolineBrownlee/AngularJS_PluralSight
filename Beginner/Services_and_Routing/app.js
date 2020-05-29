(function() {
    
    var gitHubApp = angular.module("gitHubApp", ["ngRoute"]);

    gitHubApp.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "gitHubCtrl"
            })
            .otherwise({redirectTo:"/main"})
    });

}());

