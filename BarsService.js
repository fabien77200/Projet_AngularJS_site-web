angular.module("realtea").factory("BarsService",['$http',function($http){
	var service = this;

	service.getAll = function(params){
		return $http.get('/bars',{params : params}).then(function(response){
			return  response.data;
		});
	};

	service.get = function(id){
		return $http.get('/bars/' + id).then(function(response){
			return  response.data;
		});
	};

	return service;
}]);