(function(angular) {
  'use strict';

  var moduleName = 'tanfolyamApp';

  angular
    .module(moduleName)
    .provider('$resourceActionConfig', function () {
      var actionConfigs = {$global: {}};

      this.addActionConfig = function (resourceName, actionName, config) {
        if (arguments.length === 1) {
          actionConfigs.$global = resourceName; // resourceName === config
          return this;
        } else if (arguments.length === 2) {
          config = actionName;
          actionName = '$global';
        }

        actionConfigs[resourceName] = actionConfigs[resourceName] || {};
        actionConfigs[resourceName][actionName] = config;
        return this;
      };

      this.$get = function () {
        return function (resourceName, actionName) {
          return actionConfigs[resourceName]
            ? (actionConfigs[resourceName][actionName] || actionConfigs[resourceName].$global)
            : actionConfigs.$global;
        };
      };
    })
    .provider('UserRS', function() {
      this.$get = ['$resource', 'apiUrl', '$resourceActionConfig', function($resource, apiUrl, $resourceActionConfig) {
        return $resource(null, null, {
          'registration': angular.extend({
            method: 'POST',
            url: apiUrl + '/registration',
          }, $resourceActionConfig('User', 'registration')),
          'getUser': angular.extend({
            method: 'GET',
            url: apiUrl + '/user/:id',
            params: {
              'id': '@id',
            },
          }, $resourceActionConfig('User', 'getUser')),
          'getUsers': angular.extend({
            method: 'GET',
            url: apiUrl + '/users',
            isArray: true,
          }, $resourceActionConfig('User', 'getUsers')),
        });
      }];
    })
    ;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = moduleName;
        }
        exports = moduleName;
    }
}(angular));
