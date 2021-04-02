// from data.js
var tableData = data;

// YOUR CODE HERE!

// Step 1:  code to link user click on button to fire our 
// function (which will populate our dynamic table)

// Here we're using what we learned from activites 3-1 and 3-2.  
d3.selectAll("#filter-btn").on("click", handleClick);

