app.controller('mainController', function ($timeout) {
  var vm = this;

  vm.menuItems = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'About'
    },
    {
      id: 3,
      title: 'Contact'
    }
  ];

  $timeout(() => {
    vm.menuItems.push({
      id: 4,
      title: 'Registration'
    });
  }, 3000);
});
