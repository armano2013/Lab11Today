var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

});



var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm"
    })
    .when("/view1", {
        templateUrl : "view1.htm"
    })
    .when("/view2", {
        templateUrl : "view2.htm"
    })
    .otherwise(, {
        
    });
});