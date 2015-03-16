var Pizza = {
  topping: '',
  diameter: 0
}

function numberOfSlices(diameter, sliceWidth) {
  var numSlices = Math.floor(diameter/sliceWidth);
  return numSlices;
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size = $("input#pizza-size").val();
    var topping = $("input#pizza-topping").val();

    var pizza = Object.create(Pizza);
    pizza.diameter = size;
    pizza.topping = topping;

    var sliceWidth = 4;

    var pizzaSlices = numberOfSlices(pizza.diameter, sliceWidth);

    $("#order").prepend("<p>" + pizza.diameter + pizza.topping + pizzaSlices) + "</p>";

  });
});
