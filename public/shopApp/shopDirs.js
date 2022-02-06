shopApp.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider

    .when('/home',{
        templateUrl: 'mission.html'
    })
    .when('/businesses',{
        templateUrl: 'businesses.html', controller: 'bsnsCtrl'
    })
    .when('/charities',{
        templateUrl: 'charities.html', controller: 'charityCtrl'
    })
    .when('/futureSteps',{
        templateUrl: 'future.html', controller: 'futureCtrl'
    })
    .when('/search',{
        templateUrl: 'search.html', controller: 'searchCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    })

}]);