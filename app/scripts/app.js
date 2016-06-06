

  var _innoApp = angular.module("innoApp", ["ui.router"]);

_innoApp.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "views/login.html",
    controller: "loginStateCtrl"
  });
  
  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "views/home.html",
    controller: "homeStateCtrl"
  });
  
  $stateProvider.state('home.page-home', {
    url: "/page-home",
    templateUrl: "views/page-home.html",

  });
  
  /* $stateProvider.state("home.page-home", {
    url: "/news",
    templateUrl: "view/page-home.html"
  }); */
  $stateProvider.state("home.news", {
    url: "/news",
    templateUrl: "views/news.html",
  });
  
  $stateProvider.state("home.blog", {
    url: "/blog",
    templateUrl: "views/blog.html"
  });
  
  $stateProvider.state("home.faqs", {
    url: "/faqs",
    templateUrl: "views/faqs.html",
    controller: "loginStateCtrl"
  });
  
  $stateProvider.state("home.contact", {
    url: "/contact",
    templateUrl: "views/contact.html"
  });

 

  
  
});

_innoApp.controller("homeStateCtrl", ["$scope", "$location", "$state", "authentication", function($scope, $location, $state, authentication){
  //$location.url("home.intro");
  $scope.user = authentication.user;
//  $state.go('.state.current');
  
}]);













