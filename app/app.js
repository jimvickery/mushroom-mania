"use strict";

var app = angular.module("MushroomApp", ["ngRoute"]);


app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
        templateUrl: 'partials/greetings.html'
    }).
    when('/showall', {
        templateUrl: 'partials/mushrooms.html',
        controller: "MushroomCtrl"
    }).
    otherwise('/');
});



