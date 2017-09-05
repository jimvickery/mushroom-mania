"use strict";
console.log('Mushroom Factory');


app.factory("MushroomFactory", function( $q, $http) {    
    
    console.log('Testing factory Mushroom');
    
        //get  mushrooms
        const getMushrooms = () => {
            let mushroomsArray = [];
            return $q((resolve, reject) => {
                // let newObj = JSON.stringify(selected);
                //get info from Firebase
                $http.get(`https://awesome-data-68de5.firebaseio.com/mushrooms.json`)
                // $http.get('./mushrooms.json')  
                .then((itemObject) => {
                    let mushroomCollection = itemObject.data;
                    console.log('Test Get Mushrooms', mushroomCollection);
                    
                    Object.keys(mushroomCollection).forEach((key) => {
                        console.log('mushroomCollection', mushroomCollection);
                        
                        mushroomCollection[key].id = key;
                        mushroomsArray.push(mushroomCollection[key]);
                        console.log('mushroomsArray', mushroomsArray);
                        
                    });
                    resolve(mushroomsArray);
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