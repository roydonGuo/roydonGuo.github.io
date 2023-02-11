function whenDOMReady() {
  roydon.loadbg()
  // if (location.pathname == '/essay/') {
  //   roydon.essayInit()
  // }
  if (location.pathname.substring(0, 6) == '/tags/' || '/categories/' == location.pathname.substring(0, 12)) {
    roydon.catalogActive()
  }
  roydon.danmu()
  roydon.swiperInit()
  roydon.hideIndexTop()
  roydon.shenheSpine() //侧边栏申鹤spine
  // roydon.essay()
}

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// roydon.randoMcBgGif()//随机mcgif
roydon.randomIndexVideo() //首页视频背景随机
roydon.initIndexEssay() //初始化首页即可短文banner
roydon.changeMusicBg(false);


var cdnSiteBg = new Array
// 1. 创建 XHR 对象
function getCDNSiteBg() { //获取cdn图片资源
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN@1.2.3/siteBgZIP.txt')
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cdnSiteBg = xhr.responseText.replace(/\s*/g, "").split(',')
      // console.log(cdnSiteBg);
    }
  }
}


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

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

var siteBgZIP = 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBgZIP/'
var siteBgPhoneZIP = 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBgPhoneZIP/'

//切换一组图片,s表示手机或电脑
function getNewCDNBg(s) {
  if (s == 'pc') {
    getCDNSiteBg()
    cdnSiteBg.sort(function () {
      return 0.5 - Math.random();
    })
    var new6bgs = [] //随机选出六条数据
    for (let index = 0; index < 6; index++) {
      var temp = Math.floor(Math.random() * cdnSiteBg.length)
      new6bgs.push(temp)
    }
    // console.log(new6bgs);
    // console.log(cdnSiteBg[new6bgs[0]]);
    var pcbgc = document.querySelector("#pc-bg")
    if (pcbgc) {
      pcbgc.innerHTML = `
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[0]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[0]]})')" href="javascript:;"></a>
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[1]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[1]]})')" href="javascript:;"></a>
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[2]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[2]]})')" href="javascript:;"></a>
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[3]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[3]]})')" href="javascript:;"></a>
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[4]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[4]]})')" href="javascript:;"></a>
      <a style="background-image:url(${siteBgZIP}${cdnSiteBg[new6bgs[5]]})" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}${cdnSiteBg[new6bgs[5]]})')" href="javascript:;"></a>
      `
    }

  }
}

/* winbox */
var winbox = ''

function createWinbox() {
  // sm("点击图片切换背景", "您可以选择操作：)")
  getCDNSiteBg()
  // btf.snackbarShow('点击图片切换背景：)')

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
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:pink;display:block;width:100%;margin: 0 auto 10px;padding: 10px 0;border-radius:10px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

    <div class="bgbox">
    <button onclick="javascript:loadScript('https://cdn.jsdelivr.net/gh/yremp/yremp-js@1.5/sakura.js');" style="background:#fc8cff;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"> 樱花飘落</button>
    <button onclick="javascript:loadScript('/js/snow.js');" style="background:#3cf4ff;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"> 雪花飘落</button>
    <button onclick="javascript:loadScript('/js/leaves.js');" style="background:#ff6224;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"> 秋叶飘落</button>
    </div>

    <h2 id="电脑壁纸"><a href="#电脑壁纸" class="headerlink" title="电脑壁纸"></a>电脑壁纸</h2>
    <details class="folding-tag" cyan><summary> 查看电脑壁纸 </summary>
              <div class='content'>
              <p><div class="bgbox" id="pc-bg"><a href="javascript:;" style="background-image:url(${siteBgZIP}dplo2m.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}dplo2m.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}e7g71w.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}e7g71w.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}72dvlv.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}72dvlv.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}1k2kp9.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}1k2kp9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}5gdw85.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}5gdw85.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgZIP}577mx5.webp)" class="imgbox" onclick="roydon.changeBg('url(${siteBgZIP}577mx5.webp)')"></a></div></p><button onclick="getNewCDNBg('pc')" style="background:#F69;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;margin: 0 auto;"> 切换一批图片</button>
              </div>
            </details>

    <h2 id="手机壁纸"><a href="#手机壁纸" class="headerlink" title="手机壁纸"></a>手机壁纸</h2>
    <details class="folding-tag" cyan><summary> 查看手机壁纸 </summary>
              <div class='content'>
              <div class="bgbox" id="pg-bg"><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}7p66we.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}7p66we.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}jx88k5.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}jx88k5.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}gpjj97.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}gpjj97.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57x9l9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57x9l9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}57od15.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}57od15.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}rdkd3q.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}rdkd3q.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}5glvk5.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}5glvk5.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}mp8zp8.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}mp8zp8.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}1kd8p9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}1kd8p9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}3z1dg9.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}3z1dg9.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}6oek9w.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}6oek9w.webp)')"></a><a href="javascript:;" style="background-image:url(${siteBgPhoneZIP}m3ppwy.webp)" class="pimgbox" onclick="roydon.changeBg('url(${siteBgPhoneZIP}m3ppwy.webp)')"></a></div>
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

var errorMSG = document.querySelector("#message")
if (errorMSG) {
  errorMSG.style.display = 'none'
}