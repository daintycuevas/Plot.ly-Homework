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


function getSubject(id) {
  d3.json("static/js/samples.json").then(sampleData => {
    console.log(sampleData)
}

function plotData(sample) {

  d3.json("static/js/samples.json").then(sampleData => {
    console.log(sampleData)

  var wfreq = sampleData.metadata.map(d => d.wfreq)
    console.log(wfreq)

  var samples = sampleData.samples.filter(s => s.id.toString() === id)[0];
    console.log(samples)

  //filtered id values for the bar chart
  var sampleValues = samples.sample_values.slice(0, 10)

  //labels for the bar chart
  var otuID = samples.otu_ids.slice(0, 10);

  //hovertext for the chart
  var otuLabel = sampleData.otu_labels.slice(0, 10);


  //========= 
  //  PLOT
  //=========

  //create trace 
  var trace = {
    x: sampleValues
    y: otuID
    text: otuLabel
    type: "bar"
    orientation: "h"
  }

  //create data 
  var data = [trace]

  //create layout for bar chart
  var layout = {
    xaxis: "Top 10 OTU"
    }
  };

  Plotly.newPlot("bar", data, layout);
