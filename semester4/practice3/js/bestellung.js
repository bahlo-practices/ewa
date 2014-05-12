'use strict';

// Wait until DOM content is ready
window.addEventListener('load', function() {
  var cart = document.querySelector('#orders'),
      priceTag = document.querySelector('#sum'),
      sum = 0;

  // Function to add pizzas to the cart
  var addPizza = function() {
    // Get attributes from HTML
    var id = this.getAttribute('data-id'),
        name = this.getAttribute('data-name'),
        price = parseInt(this.getAttribute('data-price'), 10) / 100;

    // Add to cart
    cart[cart.length] = new Option(name, id);

    // Add new price
    sum += price;
    priceTag.innerHTML = sum.toFixed(2);
  };

  // Get all pizza-elements and add click event listener for each
  var pizzaElements = document.querySelectorAll('.add-pizza');
  for (var i = 0;i < pizzaElements.length;++i) {
    pizzaElements[i].addEventListener('click', addPizza);
  }
});
