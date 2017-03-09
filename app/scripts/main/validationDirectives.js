(function () {
  'use strict';

  angular
    .module('tanfolyamApp')
    .directive('validatePassword', function() {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {
          ngModel.$validators.pw = function() {
            //ngModel.$setValidity('pw', true);
          }
        }
      }
    });

})();

