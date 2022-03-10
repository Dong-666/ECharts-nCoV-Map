import {
  centerMap,
  centerMapOption,
  worldVirus,
  chinaVirus,
} from '../chartsInitData/centerMapInit.js';

let btn = document.querySelector('#switchMapType');
let mapType = 'world';

btn.addEventListener('click', () => {
  if (mapType == 'world') {
    mapType = 'china';
    resetMapOption(centerMap, centerMapOption, chinaVirus, mapType);
  } else if (mapType == 'china') {
    mapType = 'world';
    resetMapOption(centerMap, centerMapOption, worldVirus, mapType);
  }
});

function resetMapOption(chart, option, data, type) {
  data.length == 0 && alert('数据加载失败');
  option['series'][0]['mapType'] = type;
  option['visualMap']['max'] = type == 'china' ? 2000 : 500000;
  option['title']['text'] = type == 'china' ? '国内确诊情况' : '全球各国确诊情况';
  option['series'][0]['data'] = data;
  chart.clear();
  chart.setOption(centerMapOption);
}

export { btn, mapType };
