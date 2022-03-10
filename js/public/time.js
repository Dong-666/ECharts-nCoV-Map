let formaDate = function () {
  let d = new Date();
  let year = d.getFullYear(), //多变量赋值
    month = d.getMonth() + 1, //month：从0开始
    date = d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds();

  year = year < 10 ? '0' + year : year; //三元操作符
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  let a = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
  $('.showTime').html('<p>' + a + '</p>');
  window.addEventListener('resize', () => {
    let w = document.documentElement.clientWidth;
    let ST = document.getElementById('ST');
    if (w < 720) {
      ST.style.display = 'none';
    } else {
      ST.style.display = 'block';
    }
  });
};
setInterval(formaDate, 1000); //设定定时器，循环运行;
