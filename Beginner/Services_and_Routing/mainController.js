// (function() {

    var gitHubApp = angular.module("gitHubApp");

    var MainController = function ($scope, $interval, $location) {

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
    // Create a search attribute on $scope and have that equal to a function that takes a username parameter and then send off the request
        $scope.search = function(username) {
            if(countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        

        $scope.username = "angular";
        $scope.countdown = 5;
        startCountdown();
    };

    gitHubApp.controller("MainController", MainController);
    
// }());