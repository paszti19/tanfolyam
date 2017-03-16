angular.module('tanfolyamApp').service('registrationRS2', RegistrationRS2);
angular.module('tanfolyamApp').factory('registrationRS', RegistrationRS);
angular.module('tanfolyamApp').provider('registrationRS3', RegistrationRS3);
angular.module('tanfolyamApp').factory('userRS', UserRS);

RegistrationRS2.$inject = ['$http'];
RegistrationRS.$inject = ['$resource'];
UserRS.$inject = ['$resource'];

function RegistrationRS2($http) {
  var base_url = 'http://localhost:10010';

  this.register = function (data, cb) {
    $http.post(
      `${base_url}/registration`,
      data
    ).then(function (response) {
      console.log(response);
      cb(response.data);
    }, function (error) {
      console.log(error);
    });
  }
}
function RegistrationRS($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/registration', {},
    {
      'register': { method: 'POST' }
    });
}
function RegistrationRS3() {
  this.baseUrl = '';

  RegRS3.$inject = ['$http'];
  this.$get = RegRS3;

  this.setBaseUrl = function (_baseUrl) {
    this.baseUrl = _baseUrl;
  };

  function RegRS3($http) {
    var baseUrl = this.baseUrl;
    return {
      register: function (data, cb) {
        $http.post(
          `${baseUrl}/registration`,
          data
        ).then(function (response) {
          console.log(response);
          cb(response.data);
        }, function (error) {
          console.log(error);
        });
      }
    };
  }

}
function UserRS($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/user/:id', {id: '@id'},
    {
      'get': { method: 'get' },
      'put': { method: 'put' }
    });
}
