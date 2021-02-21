// Select tbody for samples.json
var tbody = d3.select("#sample-metadata");

// 
d3.json("static/js/samples.json").then((sampleData) => {
  console.log("Checking Sample Data")
  
  var subjectID = d3.nest()
    .key(function(d) {
      return d.names;
    })



// var dropDown = d3.select("#selDataset");

// var options = dropDown.selectAll("option")
//   .data(data)
//   .enter()
//   .append("option");
// options.text(function(d) {
//   return d.values;
// });

// var svgWidth = 400;
// var svgHeight = 600;
// var chartMargin = {
//   top: 10,
//   right: 10,
//   bottom: 10,
//   left: 10
// };
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// var barData = d3.select("#bar")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// var gaugeData = d3.select("#gauge");

// var bubbleData = d3.select("#bubble");

// d3.json("static/js/samples.json").then(data => {
//   // console.log(data)
//   tbody.append("tr")
//   Object.entries(data).forEach(function(d) {
//     d3.select("tbody")
//     .selectAll("tr")
//     .data(data)
//     .enter()
//     .append("tr")
//     .text(function(d) {
//       return `<td>${d.id}</td><td>${d.ethnicity}</td><td>${d.gender}</td><td>${d.age}</td>
//       <td>${d.location}</td><td>${d.bbtype}</td><td>${d.wfreq}</td>`;
//     });
//   });
// })



// var selectData = d3.select("#selDataset");

// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updateData() {
//   var dropdownMenu = d3.select("#selDataset");
//   var subjectID = dropdownMenu.property("value");

//   d3.json("static/js/samples.json").then(data => {
//     console.log(data)
//     select.append("ul")
//     Object.entries(data).forEach(function(d) {
//       d3.select("selectData")
//       .selectAll("li")
//       .data(data)
//       .enter()
//       .append("li")
//       .text(function(d) {
//         return `<li>${d.names}</li>`;
   

