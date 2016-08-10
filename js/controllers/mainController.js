//Main controller
app.controller('mainController', ['$scope', 'WPService', '$routeParams', function($scope, WPService, $routeParams) {
	WPService.getAllCategories();
	WPService.getAllTags();
	WPService.getPosts(1);
	$scope.data = WPService;
	//console.log($scope.data);
	
}]);