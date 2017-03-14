app.service('registrationRS2', function ($http) {
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
});

app.factory('registrationRS', function ($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/registration', {},
    {
      "register": { method: 'POST' }
    });
});

app.provider('registrationRS3', function () {
  this.baseUrl = '';

  this.$get = function ($http) {
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
  };

  this.setBaseUrl = function (_baseUrl) {
    this.baseUrl = _baseUrl;
  };

});



app.factory('userRS', function ($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/user/:id', {id: '@id'},
    {
      "get": { method: 'get' },
      "put": { method: 'put' }
    });
});
