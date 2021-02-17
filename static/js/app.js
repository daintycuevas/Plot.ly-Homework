url = "http://robdunnlab.com/projects/belly-button-biodiversity/"

var thead = d3.select("#sample-metadata");
var tbody = d3.select("#sample-metadata");

d3.json(url).then(metadata => {
    var head_row = thead.append("tr")
    head_row.append("th").text(value)
    var row = tbody.append("tr");
    metadata.forEach(value => {
        row.append("td").text(value)
    })
})