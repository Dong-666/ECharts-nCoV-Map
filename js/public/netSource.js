// 全球疫情
let WorldData = $.ajax({
  url: 'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard',
  type: 'get',
  dataType: 'json',
});

// 国内疫情
let ChinaData = $.ajax({
  url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
  type: 'get',
  dataType: 'jsonp',
});

// 国内疫情趋势
let ChinaTrend = $.ajax({
  url: 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,nowConfirmStatis,provinceCompare',
  type: 'get',
  dataType: 'json',
});

export { WorldData, ChinaData, ChinaTrend };
