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



          