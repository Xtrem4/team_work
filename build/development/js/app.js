var webApp = angular.module("webApp", []);

appModule.controller("Controller1", ["$scope", ($scope)
    => new Application.Controllers.Controller1($scope)]);

appModule.factory("Service1", ["$http", "$location", ($http, $location)
    => new Application.Services.Service1($http, $scope)]);

appModule.directive("Directive1", ()
    => new Application.Directives.Directive1());