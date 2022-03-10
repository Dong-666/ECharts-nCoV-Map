import nameMap from './countryMap.js'; //引用地图中文名映射
// 中间地图模块
let option = {
  title: {
    text: '全球各国确诊情况',
    // subtext: '现有确诊人数',
    left: 'center',
    textStyle: {
      color: 'white',
    },
    top: 'top',
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      let value = params.value + '';
      return params.seriesName + '<br/>' + params.name + ' : ' + value + '人';
    },
  },
  visualMap: {
    min: 0,
    max: 500000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: false,
    textStyle: {
      color: 'white',
    },
    color: [
      '#4a148c',
      '#6a1b9a',
      '#7b1fa2',
      '#8e24aa',
      '#9c27b0',
      '#ab47bc',
      '#ba68c8',
      '#ce93d8',
      '#e1bee7',
      '#f3e5f5',
    ],
  },
  series: [
    {
      name: '现有确诊人数',
      type: 'map',
      mapType: 'world',
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#fce8d5',
          borderColor: 'rgb(0,108,255)',
        },
        emphasis: {
          label: {
            show: true,
            color: 'black',
          },
          areaColor: '#fce8d5',
        },
      },
      nameMap: nameMap,
      // data: virus,
    },
  ],
};

function initCenterMapData(virus) {
  option.series[0]['data'] = virus;
  return option;
}

export { initCenterMapData as default };
