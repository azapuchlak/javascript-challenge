//ensure that console is working
console.log("app.js loaded")

// from data.js
var tableData = data;

//Connect body, date, and search button by DOM
var $tbody = document.querySelector("tbody");
var $searchButton = document.querySelector("#filter-btn");
var $dateInput = document.querySelector("#datetime");

//When the search button is clicked, run the search button action
//This requires adding in an event listener - adding click makes clicking the button actionable...
//and will execute the search button action
$searchButton.addEventListener("click", searchButtonAction);

//set the above searchButtonAction as a function to perform the search
//function searchButtonAction (TBD)

//this will render all the table data 
//prob use for loop

//connect data into table

//Call to the table to render