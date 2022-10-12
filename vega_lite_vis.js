var vg_1 = "choropleth_graticules.vega";
var vg_scatter = "scatterplot.vega";
var vg_bar = "barchart.vega";
var vg_stream = "streamgraph.vega";
var vg_line = "linechart.vega";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#scatterplot", vg_scatter).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#barchart", vg_bar).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#streamgraph", vg_stream).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#linechart", vg_line).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);