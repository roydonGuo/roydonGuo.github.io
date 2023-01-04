if (location.pathname.substring(0, 6) === '/posts') randomChangeBg(true);

// 主页视频背景随机 -----------------------------------------------------------------
function randomIndexVideo() {
    const videoCDN = ["https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/hutao.mp4",
        "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/hutao2.mp4",
        "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/nahida.mp4",
        "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/ganyu_heimao.mp4"
    ]
    window.onload = function () {
        var indexVideo = document.querySelector("#index-video");
        if (indexVideo) {
            var videoIndex = Math.floor(Math.random() * videoCDN.length)
            indexVideo.src = videoCDN[videoIndex]
        }
    }
}
// randomIndexVideo()
//----------------------------------------------------------------
// 首页随机mc背景图片-------------------------------------------------------------------
function randoMcBgGif() {
    var mcBgGif = [
        "https://bu.dusays.com/2022/11/24/637f50838e27c.gif",
        "https://bu.dusays.com/2022/11/24/637f50815b2b3.gif",
        "https://bu.dusays.com/2022/11/24/637f50813ef9c.gif",
        "https://bu.dusays.com/2022/11/24/637f50869b81d.gif",
        "https://bu.dusays.com/2022/11/24/637f5086361fa.gif",
        "https://bu.dusays.com/2022/11/24/637f50860c8c2.gif",
        "https://bu.dusays.com/2022/11/24/637f5084dc583.gif",
        "https://bu.dusays.com/2022/11/24/637f507ff3d86.gif",
        "https://bu.dusays.com/2022/11/24/637f507fd3bc7.gif",
        "https://bu.dusays.com/2022/11/24/637f507be15b0.gif"
    ]
    var mctime
    clearInterval(mctime)
    var randombar = document.querySelector("#random");
    if (randombar) {
        mctime = setInterval(function () {
            var bgindex = Math.floor(Math.random() * mcBgGif.length)
            randombar.style.backgroundImage = 'url(' + mcBgGif[bgindex] + ')'
        }, 5000)
    }
}
randoMcBgGif()
//---------------------------------------------------------------------------------------
let cdnSiteBg = []

function getCDNSiteBg() {
    $.ajax({
        type: 'GET',
        url: 'https://gcore.jsdelivr.net/gh/roydonGuo/CDN@1.1.7/bgJSON.txt',
        success: function (res) {
            cdnSiteBg = res.split(',')
            // console.log(cdnSiteBg);
        }
    })
}

// 文章页随机背景图片------------------------------------------------------------
function randomChangeBg(flag) {
    if (flag) {
        getCDNSiteBg()
        setInterval(function () {
            var bgindex = Math.floor(Math.random() * cdnSiteBg.length)
            document.querySelector("#web_bg").style.backgroundImage = 'url(' + cdnSiteBg[bgindex] + ')'
        }, 30 * 1000)
    }
}
//----------------------------------------------------------------

// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({
        'time': Date.now(),
        'data': data
    }))
}
// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let data = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0
    let t = 0
    if (data != null) t = Date.now() - data.time
    if (t < time * 60 * 1000 && t > 0) return data.data;
    // 没过期返回数据
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
function loadbg() {
    try {
        let data = loadData('blogbg', 1440)
        if (data) changeBg(data, 1)
        else localStorage.removeItem('blogbg');
    } catch (error) {
        localStorage.removeItem('blogbg');
    }
}
loadbg()
// // 切换背景函数
// // 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// // 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.

function changeBg(s, flag) {
    var bg = document.querySelector('#web_bg')
    if (s.charAt(0) === '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else {
        bg.style.backgroundImage = s
        // new Vue({
        //     data: function () {
        //         this.$notify({
        //             title: "切换背景成功😜",
        //             message: "您可以继续操作：)",
        //             position: 'top-left',
        //             offset: 50,
        //             showClose: true,
        //             type: "success", //success/warning/info/error
        //             duration: 3000
        //         });
        //     }
        // })
    }
    if (!flag) {
        saveData('blogbg', s)
    }
}

// var nowBgImgUrl = 'url(/img/hutao.jpg)'
// var imgbox = document.querySelector('.fj-gallery')
// if (imgbox) {
//     imgbox.addEventListener('click', e => {
//         if (e) nowBgImgUrl = 'url(' + e.target.src + ')'
//         changeBg(nowBgImgUrl)
//     })
// }

// 点击一次，节流
var jieliuFlag = true
var randomBgOrNot = false

function randomBg() {
    var randomBgOrNot = !randomBgOrNot
    saveData('randomBgOrNot', randomBgOrNot)
    if (randomBgOrNot && jieliuFlag) {
        jieliuFlag = false
        getCDNSiteBg()
        var bgindex = Math.floor(Math.random() * cdnSiteBg.length)
        //重设背景图片
        document.querySelector("#web_bg").style.backgroundImage = 'url(' + cdnSiteBg[bgindex] + ')'
        // console.log(document.querySelector("#web_bg").style.background);
        setInterval(function () {
            //获取背景图片总数，生成随机数
            var bgindex = Math.floor(Math.random() * cdnSiteBg.length)
            //重设背景图片
            document.querySelector("#web_bg").style.backgroundImage = 'url(' + cdnSiteBg[bgindex] + ')'
            // console.log(document.querySelector("#web_bg").style.background);
        }, 60000)
    } else {
        localStorage.removeItem('randomBgOrNot')
    }
}

function loadRandomBg() {
    try {
        let data = loadData('randomBgOrNot', 1440)
        if (data) {
            randomBg()
        } else {
            localStorage.removeItem('randomBgOrNot')
        }
    } catch (error) {
        localStorage.removeItem('randomBgOrNot');
    }
}
loadRandomBg()

/* winbox */
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'pink',
        onmaximize: () => {
            div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>`
        },
        onrestore: () => {
            div.innerHTML = ''
        }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:pink;display:block;width:100%;padding: 10px 0;border-radius:10px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <p><button onclick="randomBg()" style="background: #ff3456;display:block;width:100%;padding: 10px 0;border-radius:10px;color:white;"><i class="fa-solid iconfont icon-a-tupianyihuifu-14"></i> 开启背景图片随机轮播</button></p>

    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/11/17/637615a3af26b.png)" class="imgbox" onclick="changeBg('url(https:\//bu.dusays.com/2022/11/17/637615a3af26b.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/11/17/637617ff5177f.jpg)" class="imgbox" onclick="changeBg('url(https:\//bu.dusays.com/2022/11/17/637617ff5177f.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/11/17/637617ffa49de.png)" class="imgbox" onclick="changeBg('url(https:\//bu.dusays.com/2022/11/17/637617ffa49de.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/11/18/63765daee75d6.png)" class="imgbox" onclick="changeBg('url(https:\//bu.dusays.com/2022/11/18/63765daee75d6.png)')"></a>
    </div>

    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/57/wallhaven-57x9l9.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/57/wallhaven-57x9l9.jpg)')"></a>
    </div>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, pink, #ff3456)" onclick="changeBg('linear-gradient(to right, pink, #ff3456)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #eecda3" onclick="changeBg('#eecda3')"></a>  
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ff3456" onclick="changeBg('#ff3456')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ff3456" onclick="changeBg('#ff3456')"></a>   
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}