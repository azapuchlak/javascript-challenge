//ensure that console is working
console.log("app.js loaded")

// from data.js
var tableData = data;

//Connect body, date, and search button by DOM
var $tbody = document.querySelector("tbody");
var $searchButton = document.querySelector("#filter-btn");
var $dateInput = document.querySelector("#datetime");