var app = angular.module('app', ['ngRoute', 'ngSanitize', 'slick']);

//Config the route
app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: myLocalized.views + 'main.html',
			controller: 'mainController'
		})
		.when('/blog/:id/:slug', {
			templateUrl: myLocalized.views + 'content.html',
			controller: 'contentController'
		})
		.when('/category/:slug/', {
			templateUrl: myLocalized.views + 'main.html',
			controller: 'categoryController'
		})
		.when('/tag/:slug/', {
			templateUrl: myLocalized.views + 'main.html',
			controller: 'tagController'
		})
		.when('/category/:slug/page/:page', {
			templateUrl: myLocalized.views + 'main.html',
			controller: 'categoryController'
		})
		.when('/page/:page', {
			templateUrl: myLocalized.views + 'main.html',
			controller: 'pageController'
		})
		.otherwise({
			templateUrl: myLocalized.views + '404.html',
			controller: '404'
		});

	$httpProvider.interceptors.push([function() {
		return {
			'request': function(config) {
				config.headers = config.headers || {};
				//add nonce to avoid CSRF issues
				config.headers['X-WP-Nonce'] = myLocalized.nonce;

				return config;
			}
		};
	}]);

}]);
app.run(['$rootScope','$location', function($rootScope, $location){

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
  	$rootScope.homepage = false;
  	if ($location.url() === '/'){
		$rootScope.homepage = true;
  	}
    
  });
}]);










