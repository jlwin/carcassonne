

$(document).ready(function() {
  $.getJSON('./expansions.json', (data) => {
    var expansionsJSON = data;
    $.each(expansionsJSON.expansions, (key, value) => {
      $('#expansions-list').append(
        '<input type="checkbox" value="' + value.eng + '"> ' + value.eng + '<br>'
      );
    })
  });


});
