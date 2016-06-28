(function() {
  'use strict';

  angular
    .module('clbAppTemplate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    
    $log.debug('runBlock end');
  }

})();
