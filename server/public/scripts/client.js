//This should include an app called FoodApp and a controller called FoodController.
// Create an array of foods (strings) in that controller, and show each of those items in a list on the DOM.
// After that, make an input field, and a button that allows a user to add a new food to the list.
console.log('client has loaded!');


angular.module('FoodApp', []);

// We only make one app per application
let foodApp = angular.module('FoodApp', []);


// We make many controllers to effect that app
foodApp.controller('FoodController', function($scope, $log) {
    let self = this;

    self.menu = [
        'Burrito',
        'Taco',
        'Enchilada',
    ];

    self.addFood = function (){
        console.log('in addFood');
        self.menu.push(self.input);
    }
    
    self.input = '';
    

})



























// STRETCH
// Move these files into a public folder and use node and express to serve them on localhost:5000.
// Add a deliciousness rating property (1-100) as an additional field for each food. A user should be able to add a new 
// food with a deliciousness rating. Your app should check to make sure it is a number between 1 and 100 and reject the new 
// food if the rating is not between those numbers.