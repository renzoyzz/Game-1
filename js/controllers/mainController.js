app.controller('MainController', ['$scope', '$location', function ($scope, $location) {
	$scope.newGame = function () {
		$location.path('/game');
	}
}]);