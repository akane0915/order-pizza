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
  this.cost;
}

//Prototypes
Pizza.prototype.singlePieCost = function () {
  if (this.size === "small"){
    this.cost = 12;
  } else if (this.size === "medium"){
    this.cost = 15;
  } else {
    this.cost = 18;
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

    //Call prototype to calculate cost of pizzaOne
    pizzaOne.singlePieCost();


    //Display output
    $(".output").text("Cost = $" + pizzaOne.cost);

  }); //Order form submit close
}); //Doc ready close
