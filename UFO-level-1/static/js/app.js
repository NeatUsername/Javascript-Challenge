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
  
  tbody.html("");

  tableData.forEach(row => {
      //console.log(row);
      var tr = tbody.append("tr");

      Object.values(row).forEach(cell => {
         var sight = tr.append("td");
         sight.text(cell);
       });

  });
}


// Step 3:  Create the function that calls my generateTable Function
// when the button is clicked, (i.e., I'm defining the handleClick function 
// on line 11).

// Using insights from activity 3-8

function handleClick() {

  var date = d3.select("#datetime").property("value");

  // Creating a new data object so we don't have to reset the original tableData object at end of code
  var sightDate = tableData;

  // Conditional, triggers filter action only if date is not null
  if (date) {
      sightDate = sightDate.filter( ufo => ufo.datetime === date);
  };

  generateTable(sightDate)
};

// Calling my table generation function in case no date is entered upon click
generateTable(tableData);