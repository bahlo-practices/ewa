'use strict';

// Wait until DOM content is ready
window.addEventListener('load', function() {
  var cart = document.querySelector('#orders');

  // Function to add pizzas to the cart
  var addPizza = function() {
    var id = this.getAttribute('data-id'),
        name = this.getAttribute('data-name'),
        price = this.getAttribute('data-price');

    console.log(id, name, price);
    cart[cart.length] = new Option(name, id);
  };

  // Get all pizza-elements and add click event listener for each
  var pizzaElements = document.querySelectorAll('.add-pizza');
  for (var i = 0;i < pizzaElements.length;++i) {
    pizzaElements[i].addEventListener('click', addPizza);
  }
});
