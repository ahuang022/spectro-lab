var graphDiv = document.getElementById('tester')

var data = [{
  x: ["blue",
"cyan",
"green",
"yellow",
"orange",
"red",
"deep red",
"ir1",
"ir2",
"ir3",
"ir4"],
  y: [25,
57,
48,
35,
31,
36,
53,
60,
92,
112,
118],
  type: 'scatter'
}];

var layout = {
  title: 'Spectrometer Data',
  xaxis: {
    title: 'Color',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
};
Plotly.newPlot(graphDiv, data, layout);