//BUSINESS LOGIC
//Objects
function Customer(name){
  this.name = name;
  this.order = []; //Array of pizza(s)
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

//Prototypes


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
    console.log(customerOne);

    //Display output
    $(".output").text(nameInput + sizeInput + toppingsInput);

  }); //Order form submit close
}); //Doc ready close
