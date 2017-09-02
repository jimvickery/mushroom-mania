"use strict";
console.log('Mushroom Factory');


app.factory("MushroomFactory", function( $q, $http) {    
    
    console.log('Testing factory Mushroom');
    
        //get  mushrooms
        const getMushrooms = () => {
            let mushrooms = [];
            return $q((resolve, reject) => {
                // let newObj = JSON.stringify(selected);
                $http.get('./mushrooms.json')
                .then((itemObject) => {
                    let mushroomCollection = itemObject.data;
                    console.log('Test Get Mushrooms', mushroomCollection);
                    
                    resolve(mushroomCollection.mushrooms);
                })
                .catch((error) => {
                    reject(error);
                });
            });
        };
    
    let getOneMushroom = () => {
        console.log('getOnMushroom');
        
    } ;   


return {getMushrooms, getOneMushroom};


});