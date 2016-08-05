//Main controller
app.controller('mainController', ['$scope', 'WPService', '$routeParams', function($scope, WPService, $routeParams) {
	WPService.getAllCategories();
	WPService.getPosts(1);
	$scope.data = WPService;
	console.log($scope.data);
}]);