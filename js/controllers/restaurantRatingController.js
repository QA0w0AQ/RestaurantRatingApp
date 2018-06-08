angular.module('RestaurantRating',[])
.controller('RestaurantRatingController', ['RestaurantRatingService', function(r){
    this.items = r.restaurant
    
    this.increment = function(item){
        if(item.rating<5){
            item.rating += 1
        }
    }

    this.decrement = function(item){
        if( item.rating>0){
            item.rating -= 1
        }
    }
}])