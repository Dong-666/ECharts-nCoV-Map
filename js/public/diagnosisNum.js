import { WorldData, ChinaData } from './netSource.js';

ChinaData.then(data => {
  let sum, cureSum;

  // 获取中国疫情数据
  sum = JSON.parse(data.data).chinaTotal.confirm;
  cureSum = JSON.parse(data.data).chinaTotal.heal;

  WorldData.then(data1 => {
    // 获取世界疫情数据同时加上中国疫情数据
    sum = data1.data.WomWorld.confirm + sum;
    cureSum = data1.data.WomWorld.heal + cureSum;

    $('.no-hd li:first').text(sum);
    $('.no-hd li:nth-child(2)').text(cureSum);
  });
});
