/* winbox */
var winbox = ''
var CDN = 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN/siteBg/'

function createWinbox() {
  sm("点击图片切换背景", "您可以选择操作：)")
  let div = document.createElement('div')
  document.body.appendChild(div)
  winbox = WinBox({
    id: 'changeBgBox',
    index: 999,
    icon: "img/favicon.png",
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
    <p><button onclick="randomBg()" style="background: #ff3456;display:block;width:100%;padding: 10px 0;border-radius:10px;color:white;"><i class="fa-solid iconfont icon-xiangce"></i> 开启背景图片随机轮播</button></p>

    <h2 id="电脑壁纸"><a href="#电脑壁纸" class="headerlink" title="电脑壁纸"></a>电脑壁纸</h2>
    <div class="bgbox">
    <a href="javascript:;" style="background-image:url(${CDN}dplo2m.jpg)" class="imgbox" onclick="changeBg('url(${CDN}dplo2m.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}wq215x.jpg)" class="imgbox" onclick="changeBg('url(${CDN}wq215x.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}e7g71w.jpg)" class="imgbox" onclick="changeBg('url(${CDN}e7g71w.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}72dvlv.jpg)" class="imgbox" onclick="changeBg('url(${CDN}72dvlv.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}k7wor1.jpg)" class="imgbox" onclick="changeBg('url(${CDN}k7wor1.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}1k2kp9.jpg)" class="imgbox" onclick="changeBg('url(${CDN}1k2kp9.jpg)')"></a>
    </div>

    <h2 id="手机壁纸"><a href="#手机壁纸" class="headerlink" title="手机壁纸"></a>手机壁纸</h2>
    <div class="bgbox">
    <a href="javascript:;" style="background-image:url(https://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(https://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(https://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(https://w.wallhaven.cc/full/57/wallhaven-57x9l9.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/57/wallhaven-57x9l9.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}57od15.jpg)" class="pimgbox" onclick="changeBg('url(${CDN}57od15.jpg)')"></a>
    <a href="javascript:;" style="background-image:url(${CDN}mp8zp8.jpg)" class="pimgbox" onclick="changeBg('url(${CDN}mp8zp8.jpg)')"></a>
    </div>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;"  class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;"  class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;"  class="box" style="background: #eecda3" onclick="changeBg('#eecda3')"></a>  
    <a href="javascript:;"  class="box" style="background: #ff3456" onclick="changeBg('#ff3456')"></a>
    <a href="javascript:;"  class="box" style="background: #ff3456" onclick="changeBg('#ff3456')"></a>   
    
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

// onload是等所有的资源文件加载完毕以后再绑定事件
// window.onload = function () {
//   // 获取图片列表，即img标签列表
//   var imgs = document.querySelectorAll('img');
//   // 获取浏览器顶部的距离
//   function getTop(e) {
//     return e.offsetTop;
//   }

//   // 懒加载实现
//   function lazyload(imgs) {
//     // 可视区域高度
//     var h = window.innerHeight;
//     //滚动区域高度
//     var s = document.documentElement.scrollTop || document.body.scrollTop;
//     for (var i = 0; i < imgs.length; i++) {
//       //图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
//       if ((h + s) > getTop(imgs[i])) {
//         // 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
//         (function (i) {
//           setTimeout(function () {
//             // 不加立即执行函数i会等于9
//             // 隐形加载图片或其他资源，
//             //创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
//             var temp = new Image();
//             temp.src = imgs[i].getAttribute('data-lazy-src'); //只会请求一次
//             // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
//             temp.onload = function () {
//               // 获取自定义属性data-src，用真图片替换假图片
//               imgs[i].src = imgs[i].getAttribute('data-lazy-src')
//             }
//           }, 2000)
//         })(i)
//       }
//     }
//   }
//   lazyload(imgs);
//   // 滚屏函数
//   window.onscroll = function () {
//     lazyload(imgs);
//   }
// }