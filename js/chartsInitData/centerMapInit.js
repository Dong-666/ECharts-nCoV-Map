import { WorldData, ChinaData } from '../public/netSource.js';
import initChart from '../charts/initChart.js';
import initCenterMapData from '../charts/centerMap.js';

let centerMap = null;
let centerMapOption = null;
let worldVirus = [];
let chinaVirus = [];

// 数据渲染
WorldData.then(data => {
  let num = data.data.WomAboard;
  for (let i = 0; i < num.length; i++) {
    worldVirus.push({ name: num[i].name, value: num[i].nowConfirm });
  }

  ChinaData.then(chinaData => {
    let resByChina = JSON.parse(chinaData.data).areaTree[0].children;
    let resByWorld = JSON.parse(chinaData.data).chinaTotal.nowConfirm;
    worldVirus.push({ name: '中国', value: resByWorld });

    //国内疫情数据
    for (const item of resByChina) {
      chinaVirus.push({ name: item.name, value: item.total.nowConfirm });
    }
    // 初始化
    centerMapOption = initCenterMapData(worldVirus);
    centerMap = initChart('.map .chart', centerMapOption);
  });
});

export { centerMap, centerMapOption, worldVirus, chinaVirus };
