angular.module('RestaurantRating')
.service('RestaurantRatingService', function(){
    this.restaurant = [{
        name:'XiaoTan DouHua',
        description:'It’s mixed with hot Sichuan chilly oil, douhua, deep fried bean with meat topping, goes so well with all these mixed together',
        imageURL:"https://media-cdn.tripadvisor.com/media/photo-s/11/9e/a5/fd/photo0jpg.jpg",
        rating: 3,
    },
    {
        name:'Shu JiuXiang Hotpot Restaurant',
        description:'Nice and clean environment. Fresh and good quality food. Good service, reasonable price. So far the best hot pot we have tried in Chengdu',
        imageURL:"https://media-cdn.tripadvisor.com/media/photo-s/12/3a/aa/12/20180303-203449-largejpg.jpg",
        rating: 3,
    },
    {
        name:'Chen Mapo tofu',
        description:'Best and most authentic restaurant we found in Chengdu, and it is very very spicy',
        imageURL:"https://media-cdn.tripadvisor.com/media/photo-s/12/d8/b7/36/caption.jpg",
        rating: 3,
    },
    {
        name:'The Bookworm',
        description:'The Bookworm is a combination book store, library, restaurant, bar, meeting place and live music venue. There are some drinks and live music',
        imageURL:"https://media-cdn.tripadvisor.com/media/photo-s/06/d4/b0/33/inside.jpg",
        rating: 3,
    }]
})