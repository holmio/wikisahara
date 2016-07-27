//Paged controller
app.controller('pageController', ['$scope', '$routeParams', 'WPService', function($scope, $routeParams, WPService) {
	WPService.getAllCategories();
	WPService.getPosts($routeParams.page);
	$scope.data = WPService;
}]);