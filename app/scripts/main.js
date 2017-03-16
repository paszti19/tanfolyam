// console.log('\'Allo \'Allo!');

// var arr = [];
// for(let i = 0; i < 5; i++){
//   arr.push(function () {
//     console.log(i);
//   });
// }
//
// arr[3]();

// let tomb = [1,2,3];
//
//
// let t2 = tomb.map(function(x){
//   return 2*x;
// });
//
// let t3 = tomb.map(x => 2*x);
//
// console.log(t2);
// console.log(t3);

// class Person{
//   constructor(firstName, lastName = 'Gábor'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   getName(){
//     var multilinestring = `sbhfishdgb sdf
// fds fds
//
// sdf sdf
//
// dsf`;
//
//
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// class Programmer extends Person{
//   constructor(firstName, lastName, favoriteLang){
//     super(firstName, lastName);
//     this.favoriteLang = favoriteLang;
//   }
//
//   getName(){
//     return `${super.getName()} who likes ${this.favoriteLang}`;
//   }
// }
//
//
//
// var gabor = new Programmer('Gabor', 'Hajdu', 'C#');
//
// console.log(gabor.getName());


/*$('select').selectpicker({
  size: 4
});*/


/*$("#custom").spectrum({
  color: "#f00",
  move: color => {
    $('body').css('background-color', color.toHexString());
  }
});

window.setTimeout(() =>{
  $("#custom").spectrum('destroy').spectrum({
    color: "#EEEEEE",
    move: color => {
      $('body').css('background-color', color.toHexString());
    }
  });
}, 5000);

$('.phonecaller-wrapper').phonecaller({
  defaultCountryCode: '36',
  change: function (num) {
    console.log(num);
  }
});*/


var app = angular.module('tanfolyamApp', ['ngMessages', 'ngResource', 'ui.router', 'ui.grid', 'pascalprecht.translate', 'mgcrea.ngStrap', 'ngSanitize', 'LocalStorageModule']);

app.config(function (registrationRS3Provider) {
  registrationRS3Provider.setBaseUrl('http://localhost:10010');
});

app.config(function ($httpProvider) {
  var counter = 0;

  var interceptor = function () {
    function toggleLayer(){
      if(counter > 0){
        $('#layer').show();
      } else {
        $('#layer').hide();
      }
    }

    return {
      request: function (config) {
        counter++;
        toggleLayer();
        return config;
      },

      response: function (response) {
        counter--;
        toggleLayer();
        return response;
      },

      responseError: function (rejection) {
        counter--;
        toggleLayer();
        return rejection;
      }
    };
  };

  $httpProvider.interceptors.push(interceptor);
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/list');
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state({
      name: 'registration',
      url: '/registration',
      templateUrl: 'templates/registration.html'
    })
    .state({
      name: 'edit',
      url: '/edit/{userId}',
      templateUrl: 'templates/edit.html',
      controller: 'editController',
      controllerAs: 'vm',
      resolve: {
        user: function (userRS, $stateParams) {
          return userRS.get({ id: $stateParams.userId });
        }
      }
    })
    .state({
      name: 'password',
      url: '/password',
      templateUrl: 'templates/password.html',
      controller: 'passwordController',
      controllerAs: 'vm'
    })
    .state({
      name: 'list',
      url: '/list',
      templateUrl: 'templates/list.html',
      controller: 'listController',
      controllerAs: 'vm'
    })
    .state({
      name: '404',
      url: '/404',
      template: '<p>Nem létező oldal</p>'
    });
});

app.config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/locale-',
    suffix: '.json'
  });

  var defaultLang = 'hu';
  if(localStorage.getItem('tanfolyam-.lang')){
    defaultLang = JSON.parse(localStorage['tanfolyam-.lang']);
  }

  $translateProvider.preferredLanguage(defaultLang);
  $translateProvider.fallbackLanguage(defaultLang);
});

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('tanfolyam-');
});


