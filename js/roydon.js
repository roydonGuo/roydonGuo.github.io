function whenDOMReady() {
  roydon.loadbg()
  // if (location.pathname == '/essay/') {
  //   roydon.countUp()
  //   roydon.essay()
  // }
  if (location.pathname.substring(0, 6) == '/tags/' || '/categories/' == location.pathname.substring(0, 12)) {
    roydon.catalogActive()
  }
  roydon.danmu()
  roydon.swiperInit()
  roydon.hideIndexTop()

  // roydon.essay()
}

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// roydon.randoMcBgGif()//随机mcgif
roydon.randomIndexVideo() //首页视频背景随机
roydon.initIndexEssay() //初始化首页即可短文banner

// console.log(roydon.getCDNSiteBg());
var cdnSiteBg = []
// 1. 创建 XHR 对象
var xhr = new XMLHttpRequest()
// 2. 调用 open 函数
xhr.open('GET', 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBgZIP.txt')
// 3. 调用 send 函数，发起 Ajax 请求
xhr.send()
// 4. 监听 onreadystatechange 事件
xhr.onreadystatechange = function () {
  //监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 获取服务器响应的数据xhr.responseText(json格式的字符串)
    console.log(xhr.responseText)
  }
}

var ss = '"z8e8qy.webp","weog1q.webp","rr3y61.webp","zygv6v.webp","9mpkkd.webp","y89xrl.webp","o3kl69.webp","9mv66d.webp","wqwj5r.webp","pk5y8j.webp","1kzdg1.webp","l3rqzr.webp","l8qylr.webp","x6527v.webp","jx9req.webp","qzdgo5.webp","1p82g1.webp","qz93rr.webp","pkgj13.webp","dplo2m.webp","572k81.webp","o3zzj7.webp","m958z9.webp","e7g71w.webp","8ovykj.webp","x89v9z.webp","wqklx6.webp","q28x3l.webp","e7d6kr.webp","pkrpkm.webp","4xjgzz.webp","vqx88l.webp","8old52.webp","jx8ey5.webp","6ovy9w.webp","2879mg.webp","72dvlv.webp","1p8rk3.webp","zyge7y.webp","m96o1m.webp","571je1.webp","5gdw85.webp","vqx6yp.webp","g7gx87.webp","85xq92.webp","zyxw9g.webp","6dkk2w.webp","9d5wmx.webp","0pwd2e.webp","4g16yl.webp","2ewe36.webp","3zppld.webp","l3d2yq.webp","9mk6j1.webp","m9o1v8.webp","725qz3.webp","9mw29d.webp","2858ey.webp","g7kwk3.webp","mder79.webp","577mx5.webp","vqxjzp.webp","m9ey79.webp","j37y3w.webp","y8r5rd.webp","8op8oj.webp","z8kjmj.webp","rdz5ym.webp","m9j7om.webp","9mlz98.webp","z87eqv.webp","y8d1lg.webp","vgkp28.webp","l3x26q.webp","rdqlej.webp","x828yd.webp","q6z9qr.webp","8okm6j.webp","72mr69.webp","lmy5my.webp","z8ryog.webp","pkx9y3.webp","k7wor1.webp","dpd8qo.webp","z8dljv.webp","kwxod1.webp","dpmk9j.webp","o3eye9.webp","pkqj3p.webp","3lzm99.webp","1k2kp9.webp","gp8ewd.webp","9dmkmd.webp","qz2ozr.webp","kxwey6.webp","gp78ll.webp","g7ex8q.webp","y8oxpx.webp","jx3q8y.webp","v98wrp.webp","jx5pm5.webp","y8w15l.webp","wqp6q6.webp","j3o78m.webp","rr26v7.webp","zym92v.webp","z8vjrw.webp","l3ze3y.webp","dp2q8j.webp","q23w67.webp","28rr8m.webp","v95lq3.webp"'.split(',')
// console.log(ss);
// document.onkeydown = function (e) {
//   if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
// };

// roydon.sm("欢迎来到本站","目前存在pjax的bug：)")

var now1 = new Date()

function createtime1() {
  var grt = new Date("08/28/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);

  var ascll = [
    `欢迎来到本站`,
    `请遵守本站协议`,
    `
        
██████   ██████  ███    ███ ███████   ██████  ███     ██
██   ██ ██    ██  ███  ███  ██    ██ ██    ██ ████    ██
██████  ██    ██    ████    ██    ██ ██    ██ ██  ██  ██
██   ██ ██    ██     ██     ██    ██ ██    ██ ██    ████
██   ██  ██████      ██     ███████   ██████  ██     ███
                                              
`,
    "小站已经苟活",
    dnum,
    "天啦!",
    "©2022 by roydon",
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      "color:#39c5bb",
      "",
      "color:pink",
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      ""
    )
  );
}

createtime1();

function createtime2() {
  var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
      "color:white; background-color:#10bcc0",
      "",
      "",
      'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
    )
  );

  setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by roydon %c 你正在访问",
      "color:white; background-color:#f0ad4e",
      ""
    )
  );

  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
  );
}
// createtime2();

// 重写console方法
console.log = function () {};
console.error = function () {};
console.warn = function () {};

/* winbox */
var winbox = ''

function createWinbox() {
  // sm("点击图片切换背景", "您可以选择操作：)")

  // btf.snackbarShow('点击图片切换背景：)')
  var siteBgZIP = 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBgZIP/'
  var siteBgPhoneZIP = 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBgPhoneZIP/'
  let div = document.createElement('div')
  document.body.appendChild(div)
  winbox = WinBox({
    id: 'changeBgBox',
    index: 999,
    icon: "/img/favicon.png",
    title: "控制面板",
    width: "80%",
    height: "80%",
    background: "pink",
    x: "center",
    y: "center",
    onmaximize: () => {
      div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100%;}</style>`
    },
    onrestore: () => {
      div.innerHTML = ''
    }
  });
  winResize();
  window.addEventListener('resize', winResize)

  winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:pink;display:block;width:100%;padding: 10px 0;border-radius:10px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

    <h2 id="电脑壁纸"><a href="#电脑壁纸" class="headerlink" title="电脑壁纸"></a>电脑壁纸</h2>
    <details class="folding-tag" cyan><summary> 查看电脑壁纸 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" style="background-image:url(${siteBgZIP}dplo2m.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}dplo2m.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}3zppld.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}3zppld.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}e7g71w.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}e7g71w.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}72dvlv.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}72dvlv.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}k7wor1.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}k7wor1.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}1k2kp9.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}1k2kp9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}1p8rk3.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}1p8rk3.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}5gdw85.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}5gdw85.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}28rr8m.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}28rr8m.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}577mx5.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}577mx5.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}gp78ll.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}gp78ll.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}x828yd.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}x828yd.webp)')"></a></div>
              </div>
            </details>

    <h2 id="手机壁纸"><a href="#手机壁纸" class="headerlink" title="手机壁纸"></a>手机壁纸</h2>
    <details class="folding-tag" cyan><summary> 查看手机壁纸 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}7p66we.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}7p66we.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}jx88k5.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}jx88k5.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}gpjj97.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}gpjj97.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57x9l9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57x9l9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57od15.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57od15.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}rdkd3q.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}rdkd3q.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}5glvk5.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}5glvk5.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}mp8zp8.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}mp8zp8.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}1kd8p9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}1kd8p9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}3z1dg9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}3z1dg9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}6oek9w.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}6oek9w.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}m3ppwy.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}m3ppwy.webp)')"></a></div>
              </div>
            </details>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <details class="folding-tag" cyan><summary> 查看渐变色 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="roydon.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #efa0ae, #ff3456)" onclick="roydon.changeBg('linear-gradient(to right, #efa0ae, #ff3456)')"></a><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #ede437, #e4f023)" onclick="roydon.changeBg('linear-gradient(to right, #ede437, #e4f023)')"></a><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #e8fd2b, #f59510)" onclick="roydon.changeBg('linear-gradient(to right, #e8fd2b, #f59510)')"></a><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #3cfbff, #1e78f2)" onclick="roydon.changeBg('linear-gradient(to right, #3cfbff, #1e78f2)')"></a><a href="javascript:;"  class="box" style="background: linear-gradient(to right, #d718ff, #488cea)" onclick="roydon.changeBg('linear-gradient(to right, #d718ff, #488cea)')"></a></div>
              </div>
            </details>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <details class="folding-tag" cyan><summary> 查看纯色 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;"  class="box" style="background: #000000" onclick="roydon.changeBg('#000000')"></a><a href="javascript:;"  class="box" style="background: #ffffff" onclick="roydon.changeBg('#ffffff')"></a>  <a href="javascript:;"  class="box" style="background: #ff2700" onclick="roydon.changeBg('#ff2700')"></a><a href="javascript:;"  class="box" style="background: #ff9300" onclick="roydon.changeBg('#ff9300')"></a>   <a href="javascript:;"  class="box" style="background: #fffb0d" onclick="roydon.changeBg('#fffb0d')"></a>   <a href="javascript:;"  class="box" style="background: #00f91a" onclick="roydon.changeBg('#00f91a')"></a>   </div>
              </div>
            </details>
`;
}

// 适应窗口大小
function winResize() {
  var offsetWid = document.documentElement.clientWidth;
  if (offsetWid <= 768) {
    winbox.resize(offsetWid * 0.9 + "px", "90%").move("center", "center");
  } else {
    winbox.resize(offsetWid * 0.8 + "px", "80%").move("center", "center");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
  else createWinbox();
}





//重定向浏览器地址
// pjax.site_handleResponse = pjax.handleResponse;
// pjax.handleResponse = function(responseText, request, href, options){
//   Object.defineProperty(request,'responseURL',{
//     value: href
//   });
//   pjax.site_handleResponse(responseText,request,href,options);
// }