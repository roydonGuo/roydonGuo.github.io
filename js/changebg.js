if (location.pathname.substring(0, 6) === '/posts') randomChangeBg(true);

var wallhaven = 'https://wallhaven.cc/w/'
var backimg = []

function getAnime() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://anime-1313439510.cos.ap-shanghai.myqcloud.com/anime/anime.json')
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            backimg = (xhr.responseText).split(',')
            // console.log('getAnime success' + backimg);
        }
    }
}

//  [
//     "url(https://w.wallhaven.cc/full/3z/wallhaven-3zppld.jpg)",
//     "url(http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202206/96add8f773bcefc346d1c6fe028da943--1508333962.jpg)",
//     "url(http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202201/aa6954709fb2b1f2ef25ff73fae3d1e7--4186920932.jpg)",
//     "url(http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202201/aa6954709fb2b1f2ef25ff73fae3d1e7--4186920932.jpg)",
//     "url(https://w.wallhaven.cc/full/l3/wallhaven-l3xq62.png)",
//     "url(https://w.wallhaven.cc/full/e7/wallhaven-e7pwdw.jpg)",
//     "url(https://w.wallhaven.cc/full/yj/wallhaven-yjk6ml.jpg)",
//     "url(https://w.wallhaven.cc/full/mp/wallhaven-mprye8.jpg)",
//     "url(https://w.wallhaven.cc/full/q2/wallhaven-q28x3l.jpg)",
//     "url(https://w.wallhaven.cc/full/y8/wallhaven-y8wozk.jpg)",
//     "url(https://w.wallhaven.cc/full/1k/wallhaven-1kzdg1.png)",
//     "url(https://w.wallhaven.cc/full/wy/wallhaven-wyzxvr.jpg)",
//     "url(https://w.wallhaven.cc/full/rd/wallhaven-rdolrq.jpg)",
//     "url(https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg)",
//     "url(https://w.wallhaven.cc/full/ym/wallhaven-ymz61d.jpg)",
//     "url(https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png)",
//     "url(https://w.wallhaven.cc/full/z8/wallhaven-z8dp1v.jpg)",
//     "url(https://w.wallhaven.cc/full/v9/wallhaven-v96m6p.jpg)",
//     "url(https://w.wallhaven.cc/full/z8/wallhaven-z8e8qy.jpg)",
//     "url(https://w.wallhaven.cc/full/x8/wallhaven-x8gkpo.jpg)",
//     "url(https://w.wallhaven.cc/full/k7/wallhaven-k7wor1.jpg)",
//     "url(https://w.wallhaven.cc/full/2e/wallhaven-2eroxm.jpg)",
//     "url(https://w.wallhaven.cc/full/e7/wallhaven-e7g71w.jpg)",
//     "url(https://w.wallhaven.cc/full/83/wallhaven-8396gk.jpg)"

// ];
// 随机背景图片
function randomChangeBg(flag) {
    if (flag) {
        getAnime()
        setInterval(function () {
            var bgindex = Math.floor(Math.random() * backimg.length)
            document.querySelector("#web_bg").style.backgroundImage = 'url(' + backimg[bgindex] + ')'
        }, 20000)
    }
}

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
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) {
    localStorage.removeItem('blogbg');
}

// // 切换背景函数
// // 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// // 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.

function changeBg(s, flag) {
    var bg = document.querySelector('#web_bg')
    if (s.charAt(0) === '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'

    } else bg.style.backgroundImage = s
    if (!flag) {
        saveData('blogbg', s)
    }
}
var nowBgImgUrl = 'url(/img/hutao.jpg)'
var imgbox = document.querySelector('.fj-gallery')
if (imgbox) {
    imgbox.addEventListener('click', e => {
        if (e) nowBgImgUrl = 'url(' + e.target.src + ')'
        changeBg(nowBgImgUrl)
    })
}
// var toHutao = document.querySelector('.to-hutao')
// if (toHutao) {
//     toHutao.addEventListener('click', e => {
//         if(e) changeBg('url(/img/hutao.jpg)')
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
        getAnime()
        var bgindex = Math.floor(Math.random() * backimg.length)
        //重设背景图片
        document.querySelector("#web_bg").style.backgroundImage = 'url(' + backimg[bgindex] + ')'
        // console.log(document.querySelector("#web_bg").style.background);
        setInterval(function () {
            //获取背景图片总数，生成随机数
            var bgindex = Math.floor(Math.random() * backimg.length)
            //重设背景图片
            document.querySelector("#web_bg").style.backgroundImage = 'url(' + backimg[bgindex] + ')'
            // console.log(document.querySelector("#web_bg").style.background);
        }, 20000)
    } else {
        localStorage.removeItem('randomBgOrNot')
    }
}

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

/* 调节视频播放速度 */
// var video= document.getElementById('video-bg');
// video.playbackRate = 0.5;

/* winbox */
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
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) {
    localStorage.removeItem('blogbg');
}

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) {
        saveData('blogbg', s)
    }
}

// 以下为2.0新增内容


// 创建窗口
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
    <p class="btn-on" onclick=""><span class="btn-on-circle"></span><span class="btn-on-text">ON</span></p>

    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/l3/wallhaven-l3xq62.png)" class="imgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/l3/wallhaven-l3xq62.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/e7/wallhaven-e7pwdw.jpg)" class="imgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/e7/wallhaven-e7pwdw.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/yj/wallhaven-yjk6ml.jpg)" class="imgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/yj/wallhaven-yjk6ml.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/mp/wallhaven-mprye8.jpg)" class="imgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/mp/wallhaven-mprye8.jpg)')"></a>
    </div>

    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/7p/wallhaven-7p66we.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/7p/wallhaven-7p6619.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/7p/wallhaven-7p6619.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/jx/wallhaven-jx88k5.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)" class="pimgbox" onclick="changeBg('url(https\://w.wallhaven.cc/full/gp/wallhaven-gpjj97.jpg)')"></a>
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
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fff" onclick="changeBg('#fff')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000" onclick="changeBg('#000')"></a>  
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

// function btn_on_off(type) {
//     var btn = document.getElementsByClassName("btn-on")[0];
//     var circle = document.getElementsByClassName("btn-on-circle")[0];
//     var text = document.getElementsByClassName("btn-on-text")[0];
//     // let randomBgOrNot = loadData('randomBgOrNot', 1440)
//     // if (randomBgOrNot) 
//     if (!type) {
//         btn.style = "background-color: #ccc;"
//         circle.style = "left: 36px;background-color: #888;box-shadow: 0 0 10px #888;";
//         text.style = "right: 26px;color: #888;";
//         text.innerText = "OFF";
//         // randomBgOrNot = false
//         btn.setAttribute("onclick", "btn_on_off(" + type + ")"); // 修改状态
//     } else {
//         btn.style = ""
//         circle.style = "";
//         text.style = "";
//         text.innerText = "ON";
//         // randomBgOrNot = true
//         randomBg()
//         btn.setAttribute("onclick", "btn_on_off(" + !type + ")"); // 修改状态
//     }

// }
// btn_on_off(false) // 关闭按钮
// try {
//     let data = loadData('randomBgOrNot', 1440)
//     if (data) {
//         // console.log("data" + data);
//         randomBg()
//         // btn_on_off(true)
//         console.log("btn_on_off(true)");
//     } else {
//         // btn_on_off(false)
//         console.log("btn_on_off(false)");
//         localStorage.removeItem('randomBgOrNot')
//     }
// } catch (error) {
//     // btn_on_off(false)
//     localStorage.removeItem('randomBgOrNot');
// }

