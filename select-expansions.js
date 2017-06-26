$('#check-all-expansions').click(function() {
   $(':checkbox').checked();
})


$('#select-expansions').click(function() {
    console.log(getCheckedExtensions());
    console.log(getNumToPlayWith());

    var selectedExpansions = getUnique(getNumToPlayWith(), getCheckedExtensions());
    console.log(selectedExpansions);
    $('#selected-expansions').empty();
    $.each(selectedExpansions, (key, value) => {
      $('#selected-expansions').append('<li>' + value + '</li>');
    });
});

function getCheckedExtensions() {
     var checkedExtensions = [];
     $('input:checked').each(function() {
       checkedExtensions.push($(this).val());
     });
     return checkedExtensions;
}

function getNumToPlayWith() {
  var numToPlayWith = $(':input[type="number"]').val();
  return numToPlayWith;
}



function getUnique(count, array) {
  // Make a copy of the array
  var tmp = array.slice(array);
  var result = [];

  for (var i = 0; i < count; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 1);
    // Since we are only removing one element
    result.push(removed[0]);
  }
  return result;
}
