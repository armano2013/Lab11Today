var app = angular.module("APP", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
        controller:"myController"
    })
    .when("/view1", {
        templateUrl : "view1.html",
        controller:"myController"
    })
    .when("/view2", {
        templateUrl : "view2.html",
        controller:"myController"

    })
    .when("/view3", {
        templateUrl : "view3.html",
        controller:"myController"
    })
    .when("/view4", {
        templateUrl : "view4.html",
        controller:"myController"
    })
    .otherwise({
        redirectTo:'/'
    });
    $locationProvider.hashPrefix("");
});
app.controller("myController", function(scope){
	$scope.files = {
		view1: cat.png,
		view2: dog.png,
		view3: walrus.png, 
		view4: ferret.png
	};
});



