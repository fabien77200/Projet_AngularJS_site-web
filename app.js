angular.module("realtea", ["ngRoute"])
.config(function ($routeProvider) {
	"use strict";

  $routeProvider
    .when("/", {
      templateUrl: "views/accueil.html",
      controller: "TheController",
      controllerAs: "thesCtl"
    })
    .when("/categories", {
      templateUrl: "views/categories.html",
      controller: "TheController",
      controllerAs: "thesCtl"
    })
    .when("/categorie/:categorie", {
      templateUrl: "views/the-by-categorie.html",
      controller: "TheController",
      controllerAs: "thesCtl"
    })
    .when("/the/:id", {
      templateUrl: "views/tea.html",
      controller: "TeaController",
      controllerAs: "teaCtl"
    })
    .when("/bars", {
      templateUrl: "views/bars.html",
      controller: "BarsController",
      controllerAs: "barsCtl"
    })
    .when("/bar/:id", {
      templateUrl: "views/bar.html",
      controller: "BarController",
      controllerAs: "barCtl"
    })
    ;
});
