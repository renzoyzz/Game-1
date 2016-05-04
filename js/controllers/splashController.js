app.controller('SplashController', ['$scope', '$location', function ($scope, $location) {
	$scope.enterGame = function () {
		$location.path('/menu');
	}
}]);