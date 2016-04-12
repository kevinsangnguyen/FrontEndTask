board.factory('FlickrFactory', function($http) {
		var factory = {};
		var data = [];
		factory.index = function(callback){
			$http.get('/api').success(function(res){
				data = res;
				callback(data);
			})
		}


		return factory;
	});
