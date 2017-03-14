app.filter('unaccent', function () {
  return function (input) {
    if(input && input.map){
      var output = [];
      input.forEach((item) => {
        output.push({
          text: filterString(item.text),
          value: item.value
        });
      });
      return output;
    } else if(typeof input == 'string'){
      return filterString(input);
    } else {
      return input;
    }

    function filterString(s) {
      return s
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ö/g, 'o')
        .replace(/ő/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ü/g, 'u')
        .replace(/ű/g, 'u')
        .replace(/Á/g, 'A')
        .replace(/É/g, 'E')
        .replace(/Í/g, 'I')
        .replace(/Ó/g, 'O')
        .replace(/Ö/g, 'O')
        .replace(/Ő/g, 'O')
        .replace(/Ú/g, 'U')
        .replace(/Ü/g, 'U')
        .replace(/Ű/g, 'U');
    }
  }
});
