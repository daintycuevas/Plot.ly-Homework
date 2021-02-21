// Select tbody for samples.json
var tbody = d3.select("#sample-metadata");


d3.json("static/js/samples.json").then(sampleData => {
  console.log(sampleData)

  Object.entries(sampleData).forEach(names => {
    console.log(names);
  })

  // var subjectID = d3.nest()
  //   .values(function(d) {
  //     return d.names;
  //   })
   
  
  // var idNames = JSON.stringify(subjectID)
  // console.log(idNames);
  
  
})
