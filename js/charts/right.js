// 全球疫情确诊图模块
let option = {
  dataset: {
    // source: virus, //设置数据的位置
  },
  calculable: true,
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{c} ({d}%)',
  },
  series: [
    {
      name: '确诊人数',
      type: 'pie',
      clockWise: false,
      radius: [30, 460],
      center: ['73%', '80%'],
      roseType: 'area',
      encode: {
        itemName: 'Country',
        value: 'Confirmed',
      },
      itemStyle: {
        normal: {
          color: function (params) {
            let colorList = [
              '#a71a4f',
              '#c71b1b',
              '#d93824',
              '#e7741b',
              '#dc9e31',
              '#d2b130',
              '#8cc13f',
              '#53b440',
              '#48af54',
              '#479c7f',
              '#48a698',
              '#57868c',
            ];
            return colorList[params.dataIndex];
          },
          label: {
            position: 'inside',
            textStyle: {
              fontWeight: 'bold',
              fontFamily: 'Microsoft YaHei',
              color: '#FAFAFA',
              fontSize: 10,
            },
            //formatter:'{b} \n{@Confirmed}例 \n死亡{@Dead}',//注意这里大小写敏感哦
            formatter: function (params) {
              // console.log('参数列表', params)
              if (params.data[1] > 9000) {
                return params.data[0];
              } else {
                return '';
              }
            },
          },
        },
      },
    },
    {
      name: '透明圆圈',
      type: 'pie',
      radius: [8, 20],
      center: ['73%', '80%'],
      itemStyle: {
        color: 'rgba(250, 250, 250, 0.3)',
      },
      data: [{ value: 5, name: '' }],
    },
    {
      name: '透明圆圈',
      type: 'pie',
      radius: [8, 28],
      center: ['73%', '80%'],
      itemStyle: {
        color: 'rgba(250, 250, 250, 0.3)',
      },
      data: [{ value: 5, name: '' }],
    },
  ],
};

function initRightData(virus) {
  option['dataset']['source'] = virus;
  return option;
}

export { initRightData as default };
