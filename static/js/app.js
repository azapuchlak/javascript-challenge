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

//create function that calls the table data
//first loading the data and then inserting each line as a new row  
function displayTableInfo(){
    $tbody.innerHTML = "";
    
    for (var i = 0; i < tableData.length; i++) {
        //Retrieve the data
        var data = tableData[i];
        var fields = Object.keys(data);
        
        //Will add a new row to table
        var $row = $tbody.insertRow(i);
        for (var x = 0; x < fields.length; x++) {
            var field = fields[x];
            var $cell = $row.insertCell(x);
            $cell.innerText = data[field]; 
        }
    }
}


//set the above searchButtonAction as a function to perform the search
function searchButtonAction(event) {
    event.preventDefault();

    var filterField = $dateInput.value.trim();
    //if the filter field is *not* (!) null then return results
    //this is how data populates
    if (filterField !="") {
        tableData = data.filter(function (data) {
            var dateField = data.datetime;
            return dateField === filterField;
        });
    };
    displayTableInfo();
}


//Call to the table to render
displayTableInfo();
console.log(displayTableInfo)