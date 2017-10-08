var app = angular.module("edh", ['ngTouch', 'ngSwippy']);

app.controller("MainController", function($scope) {
	$scope.message = "Hello!";
	$scope.size = {
		'width': 500,
		'height': 700
	};
	$scope.itemsCollection = [
		{
			'thumbnail': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83546&type=card',
			'title': 'Teysa',
			'subtitle': 'First commander'
		},
		{
			'thumbnail': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420667&type=card',
			'title': 'Yidris',
			'subtitle': 'Shaky leg commander'
		}
	];
});