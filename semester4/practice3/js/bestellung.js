'use strict';

// Wait until DOM content is ready
window.addEventListener('load', function() {
  var cart, priceTag, sum, addPizza, id, name, price, option, pizzaElements, i;

  //
  // Add pizzas
  //
  cart = document.querySelector('#orders');
  priceTag = document.querySelector('#sum');
  sum = 0;

  // Function to add pizzas to the cart
  addPizza = function() {
    // Get attributes from HTML
    id = this.getAttribute('data-id');
    name = this.getAttribute('data-name');
    price = parseInt(this.getAttribute('data-price'), 10);

    // Add to cart
    option = new Option(name, id);
    option.setAttribute('data-price', price);
    cart[cart.length] = option;

    // Add new price
    sum += price / 100;
    priceTag.innerHTML = sum.toFixed(2);
  };

  // Get all pizza-elements and add click event listener for each
  pizzaElements = document.querySelectorAll('.add-pizza');
  for (i = 0;i < pizzaElements.length;++i) {
    pizzaElements[i].addEventListener('click', addPizza);
  }
});
