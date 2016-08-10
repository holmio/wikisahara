//Category controller
app.controller('categoryController', ['$scope', '$routeParams', '$http', 'WPService', function($scope, $routeParams, $http, WPService) {
	WPService.getAllCategories();
	WPService.searchElement('wp-json/wp/v2/categories/?search=' + $routeParams.slug).success(function(res) {
		if (!res) {
			document.querySelector('title').innerHTML = 'Categoria no encontrada | Biblioteca Sahara';
			$scope.data.pageTitle = 'Categoria no encontrada';
		} else {
			$scope.current_category_id = res[0].id;
			WPService.getPostsInCategory(res[0], $routeParams.page);
		}
	});

	$scope.data = WPService;
}]);