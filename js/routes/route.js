var webVB = angular.module('navegacion', ['ngRoute']);

webVB.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'plantillas/slide.html',
		controller: 'inicio'
	})
	.when('/about', {
		templateUrl: 'plantillas/about.html',
		controller: 'about'
	})
	.when('/slide', {
		templateUrl: 'plantillas/slide.html',
		controller: 'slide'
	})
	.when('/entrevistas', {
		templateUrl: 'plantillas/entrevistas.html',
		controller: 'entrevistas'
	})
	.when('/blog', {
		templateUrl: 'plantillas/blog.html',
		controller: 'blog'
	})
	.when('/contact', {
		templateUrl: 'plantillas/contact.html',
		controller: 'contact'
	})
	.when('/404', {
		templateUrl: 'plantillas/404.html',
		controller: 'fail'
	})
	.otherwise({
			redirectTo:'/'
	})
}]);