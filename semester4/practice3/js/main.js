'use strict';

window.addEventListener('load', function() {
  // DOM content ready
  var $pizzas = document.querySelectorAll('.add-pizza');
  var addPizza = function() {
    var id = this.getAttribute('data-id'),
        name = this.getAttribute('data-name'),
        price = this.getAttribute('data-price');

    console.log(id, name, price);
  };

  for (var i = 0;i < $pizzas.length;++i) {
    $pizzas[i].addEventListener('click', addPizza);
  }
});
