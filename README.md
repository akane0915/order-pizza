# _Asia's New York Style Pizza_

#### _A web application for a Asia's NY Style Pizza that allows a user to order one or more pizzas and view the total order cost after specifying pizza toppings and size. April 7, 2017_

#### By _**Asia Kane**_

## Description

This is a web application for a pizza company where a user can choose to order a pizza with one or more individual toppings and specify the pizza size.  The user can choose to order more than one pizza by clicking the "Add Another Pizza" button.  The application displays the total order cost when the user clicks submit.  The app:

* Includes a pizza object constructor with properties for toppings, size, number of toppings, and cost.
* Includes a customer object constructor with properties name, order (array of pizzas), and order cost.
* Includes a pizza prototype method to calculate cost of a pizza depending on the selections chosen.

## Specifications
| Behavior |  Input   |  Output  |
|----------|:--------:|:--------:|
|The program provides a form for the user to enter his/her name, and select a pizza size and desired toppings.  Only one pizza size can be selected from a drop down menu.  Any number of toppings can be selected by checking checkboxes | Name = Asia, Size = Large, Toppings = Bell peppers, Mushrooms, Pesto, Feta cheese | N/A |
|The program stores the user input as variables (toppings are stored in an array) | N/A | N/A |
|The program calculates the base cost of the pizza based on the size selected.  Small = $12, Medium = $15, Large = $18 | Size = Large | Not displayed(Cost = $18)|
|The program updates the cost of the pizza based on the number of toppings selected.  Each topping is $1 added to the base cost. | Size = Large, Toppings = Bell peppers, Mushrooms, Pesto, Feta cheese | Not displayed(Cost = $22)|
|The program displays the final cost of the pizza | Name = Asia, Size = Large, Toppings = Bell peppers, Mushrooms, Pesto, Feta cheese | "Order confirmation for Asia: Total Cost = $22" |
|The program allows the customer to order multiple pizzas| Name = Asia, Number of Pizzas = 2, PizzaOne Size = Large, PizzaOne Toppings = Pepperoni, PizzaTwo Size = Medium, PizzaTwo Toppings = Mushrooms, Bell Peppers, Artichokes| "Order confirmation for Asia: Total Cost = $37"|

## Setup/Installation Requirements

* _View the project at akane0915.github.io/order-pizza_
* _Clone this repository_
* _Open files in text editor of your choice_
* _Make changes as desired_
* _Make frequent commits with detailed comments_
* _Submit changes as pull request to Asia at akane0915 on Github_

## Known Bugs
_N/A_

## Support and contact details
_I encourage you to update/make suggestions/refactor this code as you see fit. I am always open to improvement! Please contact Asia Kane at asialkane@gmail.com with questions._

## Technologies Used
_HTML, CSS, Bootstrap, JavaScript (including objects and prototypes), jQuery, BDD_

### License
*This software is licensed under the MIT license*
Copyright (c) 2017 **Asia Kane**
