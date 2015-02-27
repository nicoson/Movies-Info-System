angular.module("movieMgr", [])
.controller("movieCtr", ["$scope","$http",function($scope, $http){
	$http.get("movies.json").success(function(data){
		$scope.films = data;
	});
	$scope.navCtr = true;
}])

.directive("myDir", function(){
	return{
		restrict: "AE",
		link: function(scope, ele, attr){
			var searchBarHeight = ele.offset().top;
			$(window).on("scroll",function(){				
				console.log($(this).scrollTop()+":"+searchBarHeight+":"+scope.navCtr);
				if($(this).scrollTop() > searchBarHeight){
					scope.navCtr = false;
				}else{
					scope.navCtr = true;
				}

				scope.$apply();
			});
		}
	}
});