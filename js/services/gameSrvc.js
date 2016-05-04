app.service('GameSrvc', [function () {
	var service = {
		stage: {},
		init: function () {
			service.stage = new createjs.Stage("gameCanvas");
			service.stage.getBounds();
			//Create a Shape DisplayObject.
			circle = new createjs.Shape();
			circle.graphics.beginFill("red").drawCircle(0, 0, 40);
			//Set position of Shape instance.
			circle.x = 50;
			circle.y = 50;
			//Add Shape instance to stage display list.
			service.stage.addChild(circle);
			service.stage.canvas.width = 1920;
			service.stage.canvas.height = 1080;
			console.log(service.stage.canvas);
			//Update stage will render next frame
			service.stage.update();
			console.log(service.stage);
		}
	};
	return service;

}]);
