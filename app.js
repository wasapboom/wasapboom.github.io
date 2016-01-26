var app = angular.module('cart', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'login.html',
            controller: 'loginController'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        });
});


// !!! working code - to detect ur changes
//app.run(function ($rootScope, $route, $location) {
//    //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
//    //bind in induvidual controllers.
//
//    $rootScope.$on('$locationChangeSuccess', function () {
//        $rootScope.actualLocation = $location.path();
//    });
//
//    $rootScope.$watch(function () {
//        return $location.path()
//    }, function (newLocation, oldLocation) {
//        if ($rootScope.actualLocation === newLocation) {
//            alert('Why did you use history back?');
//        }
//    });
//});
