app.controller('mainController', MainController);

MainController.$inject = ['$timeout'];


function MainController($timeout) {
  var vm = this;

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
  //
  // $timeout(() => {
  //   vm.menuItems.push({
  //     title: 'Registration',
  //     id: 4
  //   });
  // }, 3000);

}
