(function(){
	var app = angular.module('movie', []);

	app.controller('MovieCtrl', function($scope, $http) {
		$scope.movieName;

		$scope.update = function(searchName) {
			$scope.movieName = angular.copy(searchName);
		}

		$http.get('http://www.omdbapi.com/?t=iron man&y=&plot=short&r=json')
			.success(function(data) {
				$scope.data = data;

				$scope.name = data.Title;
				$scope.release = data.Released;
				$scope.length = data.Runtime;
				$scope.description = data.Plot;
				$scope.rating = data.imdbRating;

			});

	});
})();