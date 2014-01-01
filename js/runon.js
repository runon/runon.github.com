angular.module('runon', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function ($routeProvider) {
		var home = {
			controller: 'MainCtrl',
			templateUrl: './pages/home.html'
		};
		var page = {
			controller: 'MainCtrl',
			templateUrl: './pages/'
		};
		$routeProvider
			.when('/', home)
			.when('/:name', page)
			.otherwise({
				redirectTo: '/'
			});
	}])
	.controller('AppCtrl', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {
	}])
	.controller('MainCtrl', ['$scope', '$route', '$routeParams', '$compile', '$rootScope', function ($scope, $route, $routeParams, $compile, $rootScope) {
		var p = $routeParams.name;
		if (p === undefined) {
			p = 'home';
		}
		$rootScope.page = p;
		$rootScope.title = p;
//		$scope.$on('$viewContentLoaded', function(){});
		$route.current.templateUrl = 'pages/' + p + ".html";
		$.get($route.current.templateUrl, function (data) {
			$scope.$apply(function () {
				$('#view').html($compile(data)($scope));
			});
		});
	}]);

