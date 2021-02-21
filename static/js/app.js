// Select tbody for samples.json
var tbody = d3.select("#sample-metadata");

d3.json("static/js/samples.json").then(sampleData => {
  console.log(sampleData)

  var names = Object.values(sampleData)[0];
  console.log(names);

  var metadata = Object.values(sampleData)[1];
  console.log(metadata);

  var samples = Object.values(sampleData)[2];
  console.log(samples);

    
    // var idNames = data.forEach(names => console.log(`${names.data}`));

    // var metaData = data.map(metadata => metadata.data);
    // sampleMetadata.push(metaData);

    // var sampleData = data.map(samples => samples.data);
    // dataSamples.push(sampleData);
  
})


    // item += data;
    // sampleNames.push(names.data[1]);
    // sampleMetadata.push(metadata.data);
    // dataSamples.push(samples.data);
    

  // var dataDropdown = d3.select("#selDataset")
  //   .append("option")
  //   .data()
  // })

  // var names = 

  // var dataDropdown = d3.select("#selDataset")
  //   .append("option")
  //   .data()

