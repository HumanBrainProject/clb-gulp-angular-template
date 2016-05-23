(function() {
  'use strict';

  angular
    .module('visualisationUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    
    $log.debug('runBlock end');
  }

})();
