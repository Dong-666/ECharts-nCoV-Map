//指定配置项和数据
let option = {
  title: {
    show: false,
    text: '南丁格尔玫瑰图',
    x: 'center',
  },
  color: ['#37a2da', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#8378ea', '#00d887'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  calculable: true,
  series: [
    {
      name: '各州累计确诊',
      type: 'pie',
      radius: [20, 70],
      center: ['50%', '50%'],
      roseType: 'radius',
      // data: count, //数据赋值位置
    },
  ],
};

function initTopLeftData(count) {
  option['series'][0]['data'] = count;
  return option;
}

export { initTopLeftData as default };
