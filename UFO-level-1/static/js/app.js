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

    data.forEach(function(aliens) {
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

    // Prevent webpage refresh from breaking filter action
    d3.event.preventDefault();

    var sightDate = d3.select("#datetime").property("value");
    console.log(sightDate);

    // Conditional, triggers filter action only if date is not null
    if (sightDate != "") {

    // Creating a new data object so we don't have to reset the original tableData object at end of code
      var tableData2 = tableData;

    // function that qualifies the subset of data to build

      tableData2 = data.filter(function (data){

        var alien_date = data.datetime;
        return alien_date === sightDate;

      });
    };
// function call, take the qualified data parameters and executed the table generation function set prior
generateTable();
}


