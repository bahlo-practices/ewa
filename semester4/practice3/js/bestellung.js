'use strict';

// Wait until DOM content is ready
window.addEventListener('load', function() {
  var cart, priceTag, sum, updateSum, addPizza, id, name, price, option,
      pizzaElements, i, resetPizzas;

  // Define variables
  cart = document.querySelector('#orders');
  priceTag = document.querySelector('#sum');
  sum = 0;

  /**
   * Updates the sum and it's element with the new value
   * @param  {integer} newSum The new sum
   */
  updateSum = function(newSum) {
    sum = newSum;
    priceTag.innerHTML = sum.toFixed(2);
  }

  /**
   * Adds pizzas to the cart
   */
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
    updateSum(sum + price / 100);
  };

  // Get all pizza-elements and add click event listener for each
  for (i = 0,
       pizzaElements = document.querySelectorAll('.add-pizza');
       i < pizzaElements.length;
       ++i) {
    pizzaElements[i].addEventListener('click', addPizza);
  }

  /**
   * Resets the selected pizzas
   */
  resetPizzas = function() {
    cart.innerHTML = '';
    updateSum(0);
  }

  // Reset button
  document.querySelector('#delete-all').addEventListener('click', resetPizzas);
});
