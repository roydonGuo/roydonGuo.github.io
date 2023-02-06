var showtime = function () {
  var nowtime = new Date()
  console.log(nowtime);
  var tipdate = "距离胡桃复刻还剩："
  var endtime = new Date("2023/2/7 18:00:00"); //结束时间
  var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
    leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
    lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
    leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
    lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
  return tipdate + leftd + "天" + lefth + "时" + leftm + "分" + lefts + "秒"; //返回倒计时的字符串
}
var div = document.querySelector("#repro-time");
setInterval(function () {
  div.innerHTML = showtime();
}, 1000)

