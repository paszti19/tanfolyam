angular.module('tanfolyamApp')
  .component('phoneCaller', {
    templateUrl: 'templates/phonecaller.component.html',
    bindings: {
      name: '@',
      model: '='
    },
    controller: function ($timeout) {
      $timeout(() => {
        this.model += '2';
      }, 200);
    }
  });
