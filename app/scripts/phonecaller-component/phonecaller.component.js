angular.module('tanfolyamApp')
  .component('phoneCaller', {
    templateUrl: 'templates/phonecaller.component.html',
    bindings: {
      name: '@',
      cc: '=',
      number: '='
    },
    controller: function () {
      this.getNumber = function () {
        return `+${this.cc} ${this.number}`;
      };

      this.callerModel = [
        {
          text: '1'
        },
        {
          text: '2'
        },
        {
          text: '3'
        },
        {
          text: '4'
        },
        {
          text: '5'
        },
        {
          text: '6'
        },
        {
          text: '7'
        },
        {
          text: '8'
        },
        {
          text: '9'
        },
        {
          text: null
        },
        {
          text: '0'
        },
        {
          text: '<'
        }
      ];

      this.concatToNumber = function (str) {
        if($.isNumeric(str)){
          this.number += str;
        } else {
          this.number = this.number.slice(0, -1);
        }
      };
    }
  });
