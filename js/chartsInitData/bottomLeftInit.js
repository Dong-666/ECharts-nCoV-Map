import { ChinaTrend } from '../public/netSource.js';
import initChart from '../charts/initChart.js';
import initBottomLeftOptionData from '../charts/bottomLeft.js';

let count = [],
  count1 = [],
  date1 = [],
  bottomLeftOption = null,
  bottomLeftChart = null;

ChinaTrend.then(data => {
  //确诊趋势模块
  // 数据初始化
  let qushi = data.data.chinaDayAddList;
  for (let i = 0; i < qushi.length; i++) {
    if (qushi[i].y == new Date().getFullYear()) {
      count.push(qushi[i].confirm);
      count1.push(qushi[i].dead);
      date1.push(qushi[i].date);
    }
  }

  bottomLeftOption = initBottomLeftOptionData(date1, count, count1);
  bottomLeftChart = initChart('.line .chart', bottomLeftOption);
});

export { bottomLeftChart, bottomLeftOption, count, count1, date1 };
