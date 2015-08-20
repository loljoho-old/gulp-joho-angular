(function() {
  'use strict';

  angular
    .module('joho.core')
    .factory('dataService', dataServiceFactory);

  /** @ngInject */
  function dataServiceFactory($resource) {

    // Default Parameterised URL
    // ------------------------------
    var url = './assets/data/:prefix/:resource.json';

    // Default Parameters
    // ------------------------------
    var paramDefaults = {
      prefix    : '@prefix',
      resource  : '@resource'
    };

    // Custom Actions
    // ------------------------------
    var actions = {

    };

    return $resource(url, paramDefaults, actions);



    //$log.log('Write a log message');
    //$log.info('Write an information message');
    //$log.warn('Write a warn message');
    //$log.error('Write an error message');
    //$log.debug('Write a debug message');
  }

})();
