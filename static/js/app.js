// * index 0 - names
// * index 1 - metadata
// * index 2 - samples

  
d3.json("static/js/samples.json").then(sampleData => {
  console.log(sampleData)

  var names = Object.values(sampleData)[0];
  console.log(names);

  var metadata = Object.values(sampleData)[1];
  console.log(metadata);

  var samples = Object.values(sampleData)[2];
  console.log(samples);
  });

  function plotData(id) {
    d3.json("static/js/samples.json").then(sampleData => {
      console.log(sampleData)

      var wfreq = sampleData.metadata.map(d => d.wfreq)
      console.log(wfreq)

      //values for the bar chart
      var sample_values = sampleData.samples.filter(s => s.id)

      //labels for the bar chart
      var otu_ids = 

      //hovertext for the chart
      var otu_labels =



// var sampleData = data.data;


// var dropdownMenu = d3.select("#selDataset");

// var dataset = dropdownMenu.property("value");