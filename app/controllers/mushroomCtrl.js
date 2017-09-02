"use strict";

app.controller("MushroomCtrl", function($scope, $routeParams, MushroomFactory) {

    MushroomFactory.getMushrooms()
    .then(function(mushroomCollection) {
        $scope.mushrooms = mushroomCollection;
        console.log('mushrooms', $scope.mushroom);
        
    });

    
});