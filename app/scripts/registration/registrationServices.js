app.factory('registrationRS', function($resource) {
  var baseUrl = 'http://localhost:10010';

  return $resource(
    baseUrl + '/registration',
    {},
    {
      "register": { method: 'post' }
    }
  );


  /*return {
    register: function (data, cb) {
      $http.post(
        `${baseUrl}/registration`,
        data
      ).then(
        function(response) {
          console.log(response);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }*/
});

app.service('registrationRS2', function($http) {
  var baseUrl = 'http://localhost:10010';

  this.register = function (data, cb) {
    $http.post(
      `${baseUrl}/registration`,
      data
    ).then(
      function(response) {
        console.log(response);
        cb(response.data);
      },
      function(error) {
        console.log(error);
      }
    );
  }
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
        ).then(
          function(response) {
            console.log(response);
            cb(response.data);
          },
          function(error) {
            console.log(error);
          }
        );
      }
    }
  }

  this.setBaseUrl = function(_baseUrl) {
    this.baseUrl = _baseUrl;
  }
});
