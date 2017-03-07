/**
 * Created by AngularJS on 2017.03.07..
 */

$.fn.phonecaller = function() {
  let countryCode = '';
  let number = '';

  let refresh = () => {
    $(this).find('input').val(`${countryCode} ${number}`);
  }

  $.get('lib/phonecaller/phonecaller.html', null, responseText => {
    $(this).html(responseText);
    $(this).find('select').selectpicker().change(function() {
      countryCode = $(this).val();
      refresh();
    });

    $(this).find('button').click(function (e) {
      e.preventDefault();

      let pushedNumber = $(this).text();

      if ($.isNumeric(pushedNumber)) {
        number += pushedNumber;
      } else {
        number = number.slice(0, -1);
      }

      refresh();
    });
  });

}
