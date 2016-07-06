var sizes = {
small : 10,
meduim : 15,
large : 20
};


function pizza(size, specialty, quantity) {
  this.size = size;
  this.speciality = specialty;
  this.quantity = quantity;
}

var arrayOfPizzas = [];

function AddPizzaToCart(size, specialty,quantity){
  var pizzaToAddToCart = new pizza(sizes[size],specialty, quantity);
  arrayOfPizzas.push(pizzaToAddToCart);
}

$(document).ready(function() {
 $("#submitButton").click(function(event){
   event.preventDefault();
   var $size =  $("#price option:selected").val();
   var $type =  $("#speciality option:selected").val();
   var $quantity =  $("#quantity option:selected").val();
   AddPizzaToCart($size, $type, $quantity);
   $("#results").text("Total Price:$:" + arrayOfPizzas[0].size*arrayOfPizzas[0].quantity);
 });
});
