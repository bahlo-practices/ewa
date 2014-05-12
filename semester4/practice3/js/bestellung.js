'use strict';

// Wait until DOM content is ready
window.addEventListener('load', function() {
  var cart, priceTag, sum, updateSum, addPizza, pizzaElements, i, removePizzas,
      removeSelectedPizzas;

  // Initialize variables
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
    var id, name, price, option;

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

  /**
   * Resets the selected pizzas
   */
  removePizzas = function() {
    cart.innerHTML = '';
    updateSum(0);
  }

  /**
   * Removes the selected pizzas
   */
  removeSelectedPizzas = function() {
    var i, option, price;

    for (i = 0; i < cart.options.length; ++i) {
      option = cart.options[i];

      if (option.selected) {
        // Remove it
        price = parseInt(option.getAttribute('data-price'), 10);
        cart.options.remove(i);
        updateSum(sum - price / 100)
      }
    }
  }

  // Get all pizza-elements and add click event listener for each
  for (i = 0,
       pizzaElements = document.querySelectorAll('.add-pizza');
       i < pizzaElements.length;
       ++i) {
    pizzaElements[i].addEventListener('click', addPizza);
  }

  // Delete all button
  document.querySelector('#delete-all')
    .addEventListener('click', removePizzas);

  // Delete selected button
  document.querySelector('#delete-selected')
    .addEventListener('click', removeSelectedPizzas);

  document.querySelector('form').addEventListener('submit', function(e) {
    var addressField, i;

    addressField = document.querySelector('#address');

    if (addressField.value.length < 1) {
      // Prevent submission of form
      e.preventDefault();

      // Focus address field
      addressField.focus();
    } else {
      // Select all items
      for (i = 0; i < cart.options.length; ++i) {
        cart.options[i].selected = true;
      }
    }
  });
});
