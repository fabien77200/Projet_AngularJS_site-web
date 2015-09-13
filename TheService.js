angular.module("realtea").factory("TheService",['$http',function($http){
	var service = this;

	service.getAll = function(params){
		return $http.get('/thes',{params : params}).then(function(response){
			return  response.data;
		});
	};

	service.get = function(id){
		return $http.get('/thes/' + id).then(function(response){
			return  response.data;
		});
	};

	return service;
}]);