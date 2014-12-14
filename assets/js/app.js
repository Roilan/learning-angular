(function(){
	var app = angular.module('movie', []);

	app.controller('MovieCtrl', function($scope, $http) {
		
		$scope.search = function(searchMovie) {
			$scope.api = 'http://www.omdbapi.com/?t=' + $scope.searchMovie + '&y=&plot=short&r=json';

			$http.get($scope.api)
				.success(function(data) {
					$scope.name = data.Title;
					$scope.release = data.Released;
					$scope.length = data.Runtime;
					$scope.description = data.Plot;
					$scope.rating = data.imdbRating;
				});
		}

	});
})();