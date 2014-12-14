(function(){
	var app = angular.module('movie', []);

	app.controller('MovieCtrl', function($scope, $http) {
		$scope.movieName;

		$scope.search = function(searchMovie) {
			$scope.movieName = angular.copy(searchMovie);

			$http.get('http://www.omdbapi.com/?t=' + $scope.movieName + '&y=&plot=short&r=json')
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