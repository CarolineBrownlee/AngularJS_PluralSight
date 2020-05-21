var myApp = angular.module('myApp', []);

// created a person object
var person = {
    firstName: "Caroline",
    lastName: "Brownlee",
    imageSrc: "https://carolinemadisondotcom.files.wordpress.com/2020/04/caroline-and-joseph.jpg?w=434&h=434"
};

myApp.controller('myCtrl', function($scope){
    $scope.message='Hello Angular!';
    // attaching person object to scope
    $scope.person = person;
});

// $http Service
// Encapsulates HTTP communication:  GET, POST, PUT, DELETE
// Can "ask" for $http inside a controller by passing as a parameter
// Sample Code:
var PersonController = function($scope, $http) {

    var promise = $http.get("/users/1783")
    promise.then(function(response) {
        $scope.user = response.data;
    });
    // THIS CODE RETURNS A PROMISE: a promise to deliver a value in the future
    // refactored code above stores returned data into a variable and then puts the data into scope
    // $scope.user = $http.get("/users/1783");
}
