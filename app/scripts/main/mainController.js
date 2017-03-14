app.controller('mainController', MainController);

MainController.$inject = ['$timeout'];


function MainController($timeout) {
  var vm = this;

  vm.menuItems = [
    {
      title: 'Home',
      id: 1
    },
    {
      title: 'About',
      id: 2
    },
    {
      title: 'Contact',
      id: 3
    }
  ];

  $timeout(() => {
    vm.menuItems.push({
      title: 'Registration',
      id: 4
    });
  }, 3000);

}
