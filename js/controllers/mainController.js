//Main controller
app.controller('mainController', ['$scope', 'WPService', function($scope, WPService) {
	WPService.getAllCategories();
	WPService.getPosts(1);
	$scope.data = WPService;
}]);