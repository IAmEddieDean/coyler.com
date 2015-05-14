'use strict';

angular.module('coyler')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'HomeCtrl'})
  // .state('blog', {url: '/blog', templateUrl: '/views/blog/blog.html', abstract: true})
  // .state('blog', {url: '/blog', templateUrl: '/views/blog/blog-show.html', controller: 'BlogCtrl'})
  // .state('blog', {url: '/blog-new', templateUrl: '/views/blog/blog-new.html', controller: 'BlogCtrl'})
  // .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  // .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
