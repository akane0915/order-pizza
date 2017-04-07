//BUSINESS LOGIC
//Objects
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}



//Prototypes


//UI LOGIC
$(document).ready(function(){
  $("form.order-form").submit(function(event){
    event.preventDefault();
    var nameInput = $("#customer-name-input").val();
    var sizeInput = $("#pizza-size-input").val();
    var toppingsInput = [];
    $("#pizza-toppings input:checkbox[name=topping]:checked").each(function(){
      toppingsInput.push($(this).val());
    });

    $(".output").text(nameInput + sizeInput + toppingsInput);
    console.log(toppingsInput);

  }); //Order form submit close
}); //Doc ready close
