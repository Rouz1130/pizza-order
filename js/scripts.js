var sizes = {
small : 10,
meduim : 15,
large : 20
};


function pizza(size, specialty, quantity) {
  this.size =size;
  this.specialty = specialty;
  this.quantity = quantity;
}

var arrayOfPizzas = [];

function AddPizzaToCart(size, specialty,quantity){
  var pizzaToAddToCart = new pizza(sizes[size],specialty, quantity);
  arrayOfPizzas.push(pizzaToAddToCart);

}

$(document).ready(function() {
 $("form#user-form").submit(function(event){
 event.preventDefault();
 AddPizzaToCart();


}};
