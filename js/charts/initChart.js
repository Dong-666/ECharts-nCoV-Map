function initChart(domEle, option) {
  let myChart = echarts.init(document.querySelector(domEle));

  // 把配置和数据给实例对象
  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });

  return myChart;
}

export { initChart as default };
