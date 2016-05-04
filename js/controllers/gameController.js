app.controller('GameController', ['$scope', '$location', '$timeout', 'GameSrvc', function ($scope, $location, $timeout, GameSrvc) {
	$scope.currentHealth = 100;
	$scope.showDialogue = false;
	$timeout(function () {
		$scope.showDialogue = true;
		GameSrvc.init();
	}, 3000);
}]);
