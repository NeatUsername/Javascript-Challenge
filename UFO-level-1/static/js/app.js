// from data.js
var tableData = data;

// YOUR CODE HERE!

// Step 1:  Code to link user click on button to fire our 
// function (which will populate our dynamic table)

// Here we're using what we learned from activites 3-1 and 3-2.  

d3.selectAll("#filter-btn").on("click", handleClick);

// Step 2:  Create the function that will be called by our primary handleClick
// function to generate the dynamic table.

// We're using insights from activities 3-3

function generateTable(ufo_data) {
    var tbody = d3.select("tbody");

    // this resets tbody element to null
    tbody.html("");

    ufo_data.


}