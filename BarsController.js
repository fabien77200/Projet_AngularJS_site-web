angular.module("realtea").controller("BarsController",['$routeParams','BarsService',function($routeParams, BarsService){
	var bars= this;

	bars.name = $routeParams.name;

	BarsService.getAll({name : $routeParams.name }).then(function(data){
		bars.locals = data;
	});

	return bars;
}]);
