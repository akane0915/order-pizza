//BUSINESS LOGIC
//Objects
function Customer(name){
  this.name = name;
  this.order = []; //Array of pizza(s)
  this.orderCost; //Sum of pizza cost(s)
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.numberOfToppings;
  this.cost;
}

//Prototypes
Pizza.prototype.countToppings = function () {
  this.numberOfToppings = this.toppings.length;
}

Pizza.prototype.singlePieCost = function () {
  if (this.size === "small"){
    this.cost = 12 + this.numberOfToppings;
  } else if (this.size === "medium"){
    this.cost = 15 + this.numberOfToppings;
  } else {
    this.cost = 18 + this.numberOfToppings;
  }
}

//UI LOGIC
$(document).ready(function(){
  $("form.order-form").submit(function(event){
    event.preventDefault();
    //Collect User Input
    var nameInput = $("#customer-name-input").val();
    var sizeInput = $("#pizza-size-input").val();
    var toppingsInput = [];
    $("#pizza-toppings input:checkbox[name=topping]:checked").each(function(){
      toppingsInput.push($(this).val());
    });

    //Create object variables
    var pizzaOne = new Pizza(sizeInput, toppingsInput);
    var customerOne = new Customer(nameInput);
    customerOne.order.push(pizzaOne);

    //Call prototypes to calculate cost of pizzaOne
    pizzaOne.countToppings();
    pizzaOne.singlePieCost();

    //Display output
    $(".output").text(customerOne.name + ", your Order Total is $" + pizzaOne.cost);

  }); //Order form submit close
}); //Doc ready close
