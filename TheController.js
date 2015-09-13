angular.module("realtea").controller("TheController",['$routeParams', '$location','TheService',function($routeParams, $location, TheService){
	var thes = this;

	thes.categorie = $routeParams.categorie;

	TheService.getAll({categorie : $routeParams.categorie }).then(function(data){
		thes.articles = data;
	});


	return thes;
}]);

