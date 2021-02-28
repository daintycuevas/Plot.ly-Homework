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
    console.log(sampleData);
  })
}

function plotData(id) {

  d3.json("static/js/samples.json").then(sampleData => {
    console.log(sampleData)

      //filter sample values by id
      var samples = sampleData.samples.filter(s => s.id.toString() === id)[0];

      //values for the bar chart
      var sample_values = samples.sample_values.slice(0, 10);

      var id_values = samples.otu_ids.slice(0, 10);

      //labels for the bar chart
      var otu_ids = id_values.map(d => "OTU" + d);

      //hovertext for the chart
      var labels = samples.otu_labels;

      console.log(`OTU id: ${otu_ids}`);
      console.log(`Sample values: ${sample_values}`);
      console.log(`ID values: ${id_values}`);


      //========= 
      //  PLOT
      //=========

      //create trace for bar chart
      var traceBar = {
        x: sample_values,
        y: otu_ids,
        text: labels,
        type: "bar",
        orientation: "h"
      };

      //create data 
      var data = [traceBar];

      //create layout for bar chart
      var layout = {
        title: "Top 10 OTU",
        yaxis:{
          tickmode:"linear"
        },
        margin: {
          l: 100, 
          r: 100, 
          t: 30, 
          b: 20
        }
      };

      Plotly.newPlot("bar", data, layout);

      //create trace for the bubble chart
      var traceBubble = {
        x: samples.otu_ids, 
        y: samples.sample_values,
        mode: "markers", 
        marker: {
          size: samples.sample_values, 
          color: samples.otu_ids
        }, 
        text: samples.otu_labels
      };

      //create data
      var data1 = [traceBubble];

      //set layout for the bubble plot
      var layout1 = {
        title: "OTU ID", 
        height: 500, 
        width: 1300
      };

      Plotly.newPlot("bubble", data1, layout1);

      //create gauge chart
      var traceGauge = {
        // labels: otu_ids, 
        value: sample_values, 
        type: "indicator",
        mode: "gauge+number"
      }

      //create data
      var data2 = [traceGauge];

      var layout2 = {
        width: 500, 
        height: 500, 
        margin: {
          t: 0, 
          b: 0
        }
      };

      Plotly.newPlot("gauge", data2, layout2);
  });
}

//create funtion to get the data
function getData(id) {

  d3.json("static/js/samples.json").then(sampleData => {
    
    var metadata = sampleData.metadata;

    console.log(metadata)

    //filter metadata
    var result = metadata.filter(meta => meta.id.toString() === id)[0];

    var sampleInfo = d3.select("#sample-metadata");

    sampleInfo.html("");

    Object.entries(result).forEach(value => {
      sampleInfo.append("h5").text(value[0].toUpperCase() + ": " + value[1] + "\n");
    });
  });
}


function optionChanged(id) {
  plotData(id);
  getData(id);
}

function init() {

  var dropdown = d3.select("#selDataset");

  d3.json("static/js/samples.json").then(sampleData => {
    console.log(sampleData)

    sampleData.names.forEach(function(name) {
      dropdown.append("option").text(name).property("value");
    });

    plotData(sampleData.names[0]);
    getData(sampleData.names[0]);
  });
}

init();

