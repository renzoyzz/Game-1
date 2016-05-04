var app = angular.module('Game', ['ngAnimate', 'ngRoute']).config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/views/splash.html',
		controller: 'SplashController'
	})
	.when('/menu', {
		templateUrl: '/views/main.html',
		controller: 'MainController'
	})
	.when('/game', {
		templateUrl: '/views/game.html',
		controller: 'GameController'
	})
	.otherwise('/');

	$locationProvider.html5Mode(true);

}]);