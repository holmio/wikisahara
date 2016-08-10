//Tag controller
app.controller('tagController', ['$scope', '$routeParams', '$http', 'WPService', function($scope, $routeParams, $http, WPService) {

	WPService.searchElement('wp-json/wp/v2/tags/?search=' + $routeParams.slug).success(function(res) {
		//console.log(res);
		if (!res) {
			document.querySelector('title').innerHTML = 'Tag no encontrado | Biblioteca Sahara';
			$scope.data.pageTitle = 'Tag no encontrada';
		} else {
			$scope.current_tag_id = res[0].id;
			WPService.getPostsInTag(res[0], $routeParams.page)
		}
	});

	$scope.data = WPService;
	//console.log($scope.data);
}]);