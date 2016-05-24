app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'modules/home/html/home.html',
        controller: 'homeController'
    })
}]);

app.controller('homeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    console.log("Home Controller loaded.");
}]);