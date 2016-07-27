//searchForm Directive
app.directive('searchForm', function() {
	return {
		restrict: 'EA',
		template: 'Search Keyword: <input type="text" name="s" ng-model="filter.s" ng-change="search()">',
		controller: ['$scope', 'WPService', function($scope, WPService) {
			$scope.filter = {
				s: ''
			};
			$scope.search = function() {
				WPService.getSearchResults($scope.filter.s);
			};
		}]
	};
});

//postsNavLink Directive
app.directive('postsNavLink', function() {
	return {
		restrict: 'EA',
		templateUrl: myLocalized.views + 'posts-nav-link.html',
		controller: ['$scope', '$element', '$routeParams', function($scope, $element, $routeParams) {
			var currentPage = (!$routeParams.page) ? 1 : parseInt($routeParams.page),
				linkPrefix = (!$routeParams.slug) ? 'page/' : 'category/' + $routeParams.slug + '/page/';

			$scope.postsNavLink = {
				prevLink: linkPrefix + (currentPage - 1),
				nextLink: linkPrefix + (currentPage + 1),
				sep: (!$element.attr('sep')) ? '|' : $element.attr('sep'),
				prevLabel: (!$element.attr('prev-label')) ? 'Previous Page' : $element.attr('prev-label'),
				nextLabel: (!$element.attr('next-label')) ? 'Next Page' : $element.attr('next-label')
			};
		}]
	};
});

//sayHello Directive
app.directive('sayHello', function(){
	return {
		restrict: 'EA',
		templateUrl: myLocalized.views + 'say-hello.html',
		controller: ['WPService', function(WPService) {
			WPService.getCurrentUser();
		}]
	};
});

app.directive('menu-responsive',  function(){
	return {
		restrict: 'EA',
		controller: function() {
			var btn_movil = $('#nav-mobile'),
			    menu = $('#menu').find('ul');
			 
			    // Al dar click agregar/quitar clases que permiten el despliegue del menú
			    btn_movil.on('click', function (e) {
			        e.preventDefault();
			 
			        var el = $(this);
			 
			        el.toggleClass('nav-active');
			        menu.toggleClass('open-menu');
			    });
		}
	};
});