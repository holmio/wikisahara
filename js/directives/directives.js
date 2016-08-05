//searchForm Directive
app.directive('searchForm', function() {
	return {
		restrict: 'EA',
		template: '<span class="icon"><i class="fa fa-search"></i></span><input type="text" name="s" placeholder="Buscar..." ng-model="filter.s" ng-change="search()" ng-focus="focused()" ng-blur="blurred()">',
		controller: ['$scope', 'WPService', function($scope, WPService) {
			$scope.filter = {
				s: ''
			};
			$scope.search = function() {
				WPService.getSearchResults($scope.filter.s);
			};
			
			$scope.focused = function() {
			   $scope.noShow = "ocultar";
			}
			$scope.blurred = function() {
			   $scope.noShow = "";
			}
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

app.directive('menuResponsive',  function(){
	return {
		restrict: 'EA',
		templateUrl: myLocalized.views + 'menu.html',
		controller: ['$scope', '$element', function($scope, $element){
			$scope.miMenu = function(){
				var x = document.getElementById("myTopnav");
			    if (x.className === "topnav") {
			        x.className += " responsive";
			        $scope.class = "close-icon";
			    } else {
			        x.className = "topnav";
			        $scope.class = "";
			    }
			}
		}]
	};
});