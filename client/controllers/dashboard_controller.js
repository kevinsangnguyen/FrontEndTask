board.controller('DashboardController', function($scope,$location,$http, parallaxHelper,FlickrFactory,$timeout,$state,$window) {

	FlickrFactory.index(function(res){
		$scope.data = res;
		console.log($scope.data);
	});

	$scope.details = function(post){
		$scope.post = post;
		$state.go('post');
	};



});
