bestRestaurant.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
                              type: $scope.restaurantType,
                              location: $scope.restaurantLocation,
                              description: $scope.restaurantDescription,
                              price: $scope.restaurantPrice });
   $scope.restaurantName = null;
   $scope.restaurantType = null;
   $scope.restaurantLocation = null;
   $scope.restaurantDescription = null;
   $scope.restaurantPrice = null;
 };

 $scope.deleteRestaurant = function(restaurant) {
   var index = $scope.restaurants.indexOf(restaurant);
   $scope.restaurants.splice(index, 1);
 };
});
