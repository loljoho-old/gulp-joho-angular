(function() {
  'use strict';

  angular
    .module('joho.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
