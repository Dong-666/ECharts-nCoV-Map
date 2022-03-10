import { WorldData } from '../public/netSource.js';
import initTopLeftData from '../charts/topLeft.js';
import initChart from '../charts/initChart.js';

let count, topLeftChart, topLeftChartOption;

WorldData.then(data => {
  //各州累计确诊分布模块
  // 初始化数据
  count = [
    { value: 0, name: '亚洲' },
    { value: 0, name: '非洲' },
    { value: 0, name: '欧洲' },
    { value: 0, name: '北美洲' },
    { value: 0, name: '南美洲' },
    { value: 0, name: '大洋洲' },
  ];
  let data1 = data.data.WomAboard;
  data1.forEach(item => {
    item['continent'] === '亚洲' && (count[0]['value'] += item['confirm']);
    item['continent'] === '非洲' && (count[1]['value'] += item['confirm']);
    item['continent'] === '欧洲' && (count[2]['value'] += item['confirm']);
    item['continent'] === '北美洲' && (count[3]['value'] += item['confirm']);
    item['continent'] === '南美洲' && (count[4]['value'] += item['confirm']);
    item['continent'] === '大洋洲' && (count[5]['value'] += item['confirm']);
  });

  topLeftChartOption = initTopLeftData(count);
  topLeftChart = initChart('.bar .chart', topLeftChartOption);
});

export { topLeftChart, topLeftChartOption, count };
