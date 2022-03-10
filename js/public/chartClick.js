function addClick(chart, fun) {
  chart.on('click', fun.bind(this));
}

export { addClick as default };
