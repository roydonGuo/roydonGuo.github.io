function whenDOMReady() {
  roydon.loadbg()
  if (location.pathname == '/essay/') {
    roydon.countUp()
    roydon.essay()
  }
  if (location.pathname.substring(0, 6) == '/tags/' || '/categories/' == location.pathname.substring(0, 12)) {
    roydon.catalogActive()
  }
  roydon.danmu()
  roydon.essay()
}

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

roydon.randoMcBgGif()


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
    <div class="bgbox">
    <a href="javascript:;" style="background-image:url(${siteBgZIP}dplo2m.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}dplo2m.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgZIP}3zppld.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}3zppld.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgZIP}e7g71w.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}e7g71w.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgZIP}72dvlv.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}72dvlv.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgZIP}k7wor1.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}k7wor1.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgZIP}1k2kp9.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}1k2kp9.webp)')"></a>
    </div>

    <h2 id="手机壁纸"><a href="#手机壁纸" class="headerlink" title="手机壁纸"></a>手机壁纸</h2>
    <div class="bgbox">
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}7p66we.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}7p66we.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}jx88k5.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}jx88k5.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}gpjj97.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}gpjj97.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57x9l9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57x9l9.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57od15.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57od15.webp)')"></a>
    <a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}mp8zp8.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}mp8zp8.webp)')"></a>
    </div>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="roydon.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="roydon.changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="roydon.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="roydon.changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;"  class="box" style="background: #7D9D9C" onclick="roydon.changeBg('#7D9D9C')"></a>
    <a href="javascript:;"  class="box" style="background: #eecda3" onclick="roydon.changeBg('#eecda3')"></a>  
    <a href="javascript:;"  class="box" style="background: #ff3456" onclick="roydon.changeBg('#ff3456')"></a>
    <a href="javascript:;"  class="box" style="background: #ff3456" onclick="roydon.changeBg('#ff3456')"></a>   
    
    </div>
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