(function(){
	var app = angular.module('movie', []);

	app.controller('MovieCtrl', function($scope, $http) {

		$http.get('http://www.omdbapi.com/?t=iron man&y=&plot=short&r=json')
			.success(function(data) {
				$scope.data = data;

				$scope.name = data.Title;
				$scope.release = data.Released;
				$scope.length = data.Runtime;
				$
			});

	});
})();