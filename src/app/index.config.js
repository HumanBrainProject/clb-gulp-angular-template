(function() {
  'use strict';

  // Global environment config to connect to main HBP services
  /* eslint angular/window-service:0 */
  window.bbpConfig = {
    "api": {
      "collab": {
        "v0": "https://services.humanbrainproject.eu/collab/v0"
      },
      "document": {
        "v0": "https://services.humanbrainproject.eu/document/v0/api"
      },
      "mimetype": {
        "v0": "https://services.humanbrainproject.eu/mimetype/v0"
      },
      "stream": {
        "v0": "https://services.humanbrainproject.eu/stream/v0/api"
      },
      "user": {
        "v1": "https://services.humanbrainproject.eu/idm/v1/api"
      }
    },
    "auth": {
      "clientId": "9538e663-d4a3-491f-a45e-103dbcb3d3f5",
      "url": "https://services.humanbrainproject.eu/oidc"
    },
    "collab": {
      "features": {
        "identity": {
          "userApiV1": true
        }
      }
    },
    "hbpFileStore": {
      "maxFileUploadSize": 1048576000
    }
  };

  angular
    .module('visualisationUi')
    .config(config);

  /** @ngInject */
  function config($logProvider, bbpOidcSessionProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Authentication
    // Set to true if you want to check for the existance of
    // a token while loading.
    bbpOidcSessionProvider.ensureToken(true);
  }

})();
