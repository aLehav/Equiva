shopApp.config(['$routeProvider',function($routeProvider){
    $routeProvider

    .when('/home',{
        templateUrl: 'mission.html', controller: 'shopCtrl'
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
    .otherwise({
        redirectTo: '/home'
    })

}]);