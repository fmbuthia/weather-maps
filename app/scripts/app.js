'use strict';

/**
 * @ngdoc overview
 * @name weatherViewApp
 * @description
 * # weatherViewApp
 *
 * Main module of the application.
 */
angular
  .module('weatherViewApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('weatherViewInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
