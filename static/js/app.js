// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log("data");
console.log(data);

var submit = d3.select("#filter-btn");
submit.on("click", function() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear out previous results
    tbody.selectAll("*").remove();

    //Select the input element and the the raw HTML node
    var inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    // append tbody with table data within filter selection
    console.log("inputValue");
    console.log(inputValue);
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    console.log("filteredData");
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        console.log("sighting");
        console.log(sighting);
        var row = tbody.append("tr");
        var cell = tbody.append("td");
        cell.text(sighting.datetime);
        var cell = tbody.append("td");
        cell.text(sighting.city);
        var cell = tbody.append("td");
        cell.text(sighting.state);
        var cell = tbody.append("td");
        cell.text(sighting.country);
        var cell = tbody.append("td");
        cell.text(sighting.shape);
        var cell = tbody.append("td");
        cell.text(sighting.durationMinutes);
        var cell = tbody.append("td");
        cell.text(sighting.comments);
    });
});
