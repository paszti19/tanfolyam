angular.module('tanfolyamApp').directive('validatePassword', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$validators.pw = function (value) {
        if(value){
          if(value != value.toLowerCase() && value != value.toUpperCase()){
            return true;
          }
        }
        return false;
      };
    },
  };
});

