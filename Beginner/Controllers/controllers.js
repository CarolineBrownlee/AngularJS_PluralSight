var myApp = angular.module('myApp', []);

// created a person object
// var person = {
//     firstName: "Caroline",
//     lastName: "Brownlee",
//     imageSrc: "https://carolinemadisondotcom.files.wordpress.com/2020/04/caroline-and-joseph.jpg?w=434&h=434"
// };

myApp.controller('myCtrl', function($scope, $http){
    $scope.message='Hello Angular!';
    // attaching person object to scope
    // $scope.person = person;
    // process the data(result) by writing an function that we will use below 
    var onUserComplete = function(response){
        // pick out the data portion of the response and sends it back in JSON format, Angular with automatically deserialize that data into a JavaScript object and we can put that into scope,
        // $scope.user has properties from the response
        $scope.user = response.data;
    };
    
    // get the data 
    $http.get("http://api.github.com/users/robconery")
        // the function to call when get request is called is onUserComplete, so we pass that to our .then
        .then(onUserComplete);
    });

// ========== $http SERVICE =========
// ========== SEE ABOVE CODE ========== //
// Encapsulates HTTP communication:  GET, POST, PUT, DELETE
// Can "ask" for $http inside a controller by passing as a parameter
// Sample Code:
// var PersonController = function($scope, $http) {

//     var promise = $http.get("/users/1783")
//     promise.then(function(response) {
//         $scope.user = response.data;
//     });
    // THIS CODE RETURNS A PROMISE: a promise to deliver a value in the future
    // refactored code above stores returned data into a variable and then puts the data into scope
    // $scope.user = $http.get("/users/1783");
// }
