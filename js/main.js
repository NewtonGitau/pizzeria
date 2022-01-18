let totalEl = document.getElementById("total-el");
let locationMessage = document.getElementById("location-message");
let locationEl = document.getElementById("location")

let pizzaCrustPrice = 500;
let extraToppingsPrice = 300;
let deliveryCost = 500;

let classicPizzaSmallPrice = 500;
let classicPizzaMediumPrice = 750;
let classicPizzaLargePrice = 950;

let supremePizzaSmallPrice = 600;
let supremePizzaMediumPrice = 850;
let supremePizzaLargePrice = 1100;

let deluxePizzaSmallPrice = 550;
let deluxePizzaMediumPrice = 850;
let deluxePizzaLargePrice = 1000;

let pizzaSize = 0;
let pizzaSum = 0;

let pizzaDelivery = document.getElementById("delivery");
let extraToppings = document.getElementById("extraToppings");

let pizzaSizeMedium = document.getElementById("medium");
let pizzaSizeLarge = document.getElementById("large");

let deluxePizza = document.getElementById("deluxe");
let classicPizza = document.getElementById("classic");
let supremePizza = document.getElementById("supreme");


function size() {
  if (deluxePizza.ariaChecked == true || supremePizza.ariaChecked === true || classicPizza.ariaChecked == true && pizzaSizeLarge.ariaChecked == true) {
    pizzaSize = deluxePizzaLargePrice;
    return pizzaSize;
  } else if (deluxePizza.ariaChecked == true || supremePizza.ariaChecked === true || classicPizza.ariaChecked == true && pizzaSizeMedium.ariaChecked == true) {
    pizzaSize = deluxePizzaMediumPrice;
    return pizzaSize;
  } else {
    pizzaSize = deluxePizzaSmallPrice;
    return pizzaSize;
  }
}

function extra() {
  if (extraToppings.ariaChecked == true && pizzaDelivery.ariaChecked == true) {
    extraCost = extraToppingsPrice + deliveryCost;
    locationMessage.innerHTML = "Delivery Location: " + locationEl
    return extraCost;
  } else if (
    extraToppings.ariaChecked == true &&
    pizzaDelivery.ariaChecked == false
  ) {
    extraCost = extraToppingsPrice;
    return extraCost;
  } else if (
    extraToppings.ariaChecked == false &&
    pizzaDelivery.ariaChecked == true
  ) {
    extraCost = deliveryCost;
    return extraCost;
  } else {
    extraCost = 0;
    return extraCost;
  }
}






