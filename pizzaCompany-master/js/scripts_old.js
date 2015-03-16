  var NewOrder = { topping: inputtedTopping, pizzaSize: [] };

    var inputtedSize = parseInt($("input#pizza-pizza").val());
    var newSize = { pizzaSize: inputtedSize }
    var newSize = [" "];
    var inputtedTopping = $("input#pizza-topping").val();


    if (inputtedSize > 8) {

      newSize = "small"

    } else if (inputtedSize < 8 && inputtedSize > 12) {

      newSize = "medium"

    } else if (inputtedSize < 12 && inputtedSize > 20) {

        newSize = "large"
      }

      NewOrder.pizzaSize.push(newSize)
      console.log(NewOrder)

    $(document).ready(function() {

      $("form#new-size").submit(function(event) {
        event.preventDefault();

    $("input#pizza-topping").val("");

    $("ul#orders").append("<li><span class='pizza-order'>" + NewOrder.topping + NewOrder.pizzaSize + "</span></li>");

    $(".pizza-order").last().click(function() {

      $("#show-orders").show();
      $("#show-orders h4").text(NewOrder.topping);

    });
