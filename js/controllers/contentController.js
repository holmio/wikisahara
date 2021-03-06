//Content controller
app.controller('contentController', ['$scope', '$routeParams', '$http', 'WPService', function($scope, $routeParams, $http, WPService) {
	WPService.getAllCategories();
	WPService.getAllTags();
	$scope.data = WPService;
	//console.log($scope.tags);
	$http.get('wp-json/wp/v2/posts/' + $routeParams.id).success(function(res) {
		$scope.post = res;
		//console.log($scope.post);
		document.querySelector('title').innerHTML = res.title.rendered + ' | Biblioteca Sahara';
	}).error(function(res, status) {
		if (status === 404) {
			$scope.is404 = true;
			document.querySelector('title').innerHTML = 'Página no encontrada | Biblioteca Sahara';
			$scope.errorMessage = 'Error: ' + res[0].message;
		}
	});

	$http.get('wp-json/wp/v2/media?filter[post_parent]=' + $routeParams.ID + '&filter[posts_per_page]=-1').success(function(res) {
		if (res.length > 1) {
			$scope.media = res;
		}
	});
}]);