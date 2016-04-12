var board = angular.module('board', ['ui.router','ui.bootstrap','duParallax','ui.navbar']);

board.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "partials/dashboard.html",
    })
    .state('post',{
      url:'/post',
      templateUrl: 'partials/post.html',
    })

});
