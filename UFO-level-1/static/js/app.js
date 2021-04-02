// from data.js
var tableData = data;

// YOUR CODE HERE!

// Step 1:  Code to link user click on button to fire our 
// function (which will populate our dynamic table)

// Here we're using what we learned from activites 3-1 and 3-2.  

d3.selectAll("#filter-btn").on("click", handleClick);

// Step 2:  Create the function that will be called by our primary handleClick
// function to generate the dynamic table.

// We're using insights from activities 3-3 here.

function generateTable(tableData) {

    var tbody = d3.select("tbody");

    // this resets tbody element to null
    tbody.html("");

    tableData.forEach(function(aliens) {
        console.log(aliens);
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

// Step 3:  Create the function that calls my generateTable Function
// when the button is clicked, (i.e., I'm defining the handleClick function 
// on line 11).

// Using insights from activity 3-8

function handleClick() {

    d3.event.preventDefault();

    var sight_date = d3.select("#datetime").property("value");
    console.log(sight_date);

    if (sight_date 


}

