function WPService($http) {

	var WPService = {
		categories: [],
		tags: [],
		posts: [],
		page: [],
		pageTitle: 'Últimos Trabajos:',
		currentPage: 1,
		totalPages: 1,
		currentUser: {}
	};

	function _updateTitle(documentTitle, pageTitle) {
		document.querySelector('title').innerHTML = documentTitle + ' | Biblioteca Sahara';
		WPService.pageTitle = pageTitle;
	}

	function _setArchivePage(posts, page, headers) {
		WPService.posts = posts;
		WPService.currentPage = page;
		WPService.totalPages = headers('X-WP-TotalPages');
	}

	WPService.searchElement = function(url){
		return $http.get(url).success(function(res){
			//console.log(res);
		});
	}
	WPService.getAllTags = function() {
		if (WPService.categories.length) {
			return;
		}

		return $http.get('wp-json/wp/v2/tags').success(function(res){
			WPService.tags = res;
		});
	};
	WPService.getAllCategories = function() {
		if (WPService.categories.length) {
			return;
		}

		return $http.get('wp-json/wp/v2/categories').success(function(res){
			WPService.categories = res;
		});
	};

	WPService.getPages = function(page) {
		return $http.get('wp-json/wp/v2/pages/'+page).success(function(res, status, headers){
			WPService.page  = res;
		});
	}

	WPService.getPosts = function(page) {
		return $http.get('wp-json/wp/v2/posts/?page=' + page + '&filter[posts_per_page]=10').success(function(res, status, headers){
			page = parseInt(page);

			if ( isNaN(page) || page > headers('X-WP-TotalPages') ) {
				_updateTitle('Página no encontrada', 'Página no encontrada');
			} else {
				if (page>1) {
					_updateTitle('Trabajos en Página' + page, 'Trabajos en Página' + page + ':');
				} else {
					_updateTitle('Home', 'Últimos Trabajos');
				}

				_setArchivePage(res,page,headers);
			}
		});
	};

	WPService.getSearchResults = function(s) {
		return $http.get('wp-json/wp/v2/posts/?filter[s]=' + s + '&filter[posts_per_page]=-1').success(function(res, status, headers){
			_updateTitle('Resultado buscado por ' + s, 'Resultado de Busqueda:');

			_setArchivePage(res,1,headers);
		});
	};

	WPService.getPostsInCategory = function(category, page) {
		page = ( ! page ) ? 1 : parseInt( page );
		_updateTitle('Category: ' + category.name, 'Trabajos en ' + category.name + ' Página ' + page + ':');

		var request = 'wp-json/wp/v2/posts/?filter[category_name]=' + category.name + '&filter[posts_per_page]=10';
		if ( page ) {
			request += '&page=' + page;
		}

		return $http.get(request).success(function(res, status, headers){
			_setArchivePage(res, page, headers);
		});
	};

	WPService.getPostsInTag = function(tag, page) {
		page = ( ! page ) ? 1 : parseInt( page );
		_updateTitle('Tag: ' + tag.name, 'Trabajos en' + tag.name + ' Página ' + page + ':');

		var request = 'wp-json/wp/v2/posts/?filter[tag]=' + tag.name + '&filter[posts_per_page]=10';
		if ( page ) {
			request += '&page=' + page;
		}

		return $http.get(request).success(function(res, status, headers){
			//console.log(res);
			_setArchivePage(res, page, headers);
		});
	};

	WPService.getCurrentUser = function() {
		return $http.get('wp-json/wp/v2/users/me').success(function(res){
			WPService.currentUser = res;
		});
	};

	return WPService;
}

app.factory('WPService', ['$http', WPService]);