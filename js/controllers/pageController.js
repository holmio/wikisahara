//Paged controller
app.controller('pageController', ['$scope', '$routeParams', 'WPService', function($scope, $routeParams, WPService) {
	WPService.getPages($routeParams.id);
	$scope.data = WPService;
	if($scope.data.page.length !== 0){
		$scope.is404 = true;
		document.querySelector('title').innerHTML = 'Página no encontrada | Biblioteca Sahara';
	}
	console.log($scope.data);
}]);