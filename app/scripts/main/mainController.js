app.controller('mainController', MainController);

MainController.$inject = ['$translate', '$scope', '$timeout'];


function MainController($translate, $scope, $timeout) {
  var vm = this;

  vm.langOptions = [];

  vm.menuItems = [
    {
      title: 'MENU.HOME',
      id: 1,
      state: 'list'
    },
    {
      title: 'MENU.REGISTRATION',
      id: 2,
      state: 'registration'
    },
    {
      title: 'MENU.LIST',
      id: 3,
      state: 'list'
    }
  ];

  switchLang();

  function switchLang() {
    $translate('LANG.HU').then(function () {
      vm.langOptions = [
        {
          text: $translate.instant('LANG.HU'),
          value: 'hu'
        },
        {
          text: $translate.instant('LANG.EN'),
          value: 'en'
        }
      ];
    });
  }

  vm.lang = 'hu';

  $scope.$on('$select.select', function (event, value, index, elem) {
    $translate.use(value).then(function () {
      switchLang();
    });

  });

  //
  // $timeout(() => {
  //   vm.menuItems.push({
  //     title: 'Registration',
  //     id: 4
  //   });
  // }, 3000);

}
