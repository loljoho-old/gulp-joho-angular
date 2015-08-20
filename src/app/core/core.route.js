(function() {
  'use strict';

  angular
    .module('joho.core')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider, $locationProvider) {

    // Configure Common Route Provider
    // ------------------------------
    $routeProvider
      .when('/', {
        templateUrl   : 'app/main/main.html',
        controller    : 'MainController',
        controllerAs  : 'main',
        resolve: {
          // Causes 1s Delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            return delay.promise;
          }
        }
      })
      .when('/demo', {
        templateUrl   : 'app/demo/demo.html',
        controller    : 'DemoController',
        controllerAs  : 'main',
      });
  }

  /*
  $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }
  */

})();
