// const xhr = new XMLHttpRequest();
// const url = "http://robdunnlab.com/projects/belly-button-biodiversity/";

// xhr.open('GET', url);
// xhr.onreadystatechange = someHandler;
// xhr.send();


// var thead = d3.select("#sample-metadata");
// var tbody = d3.select("#sample-metadata");

// function someHandler() {
//     d3.json(url).then(metadata => {
//         // var head_row = thead.append("tr");
//         // head_row.append("th").text(value);
//         var row = tbody.append("tr");
//         metadata.forEach(value => {
//             row.append("td").text(value);
//         })
//     })
// }

d3.json("static/js/samples.json").then(data => {
  console.log(data)
});