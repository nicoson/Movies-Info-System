angular.module("movieMgr", [])
.controller("movieCtr", ["$scope","$http",function($scope, $http){
	$http.get("movies.json").success(function(data){
		$scope.films = data;
	});
}]);