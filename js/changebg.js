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
    getAnime()
    if (flag) {
        setInterval(function () {
            //获取背景图片总数，生成随机数
            var bgindex = Math.floor(Math.random() * backimg.length)
            //重设背景图片
            document.querySelector("#web_bg").style.backgroundImage = 'url(' + backimg[bgindex] + ')'
            // console.log(document.querySelector("#web_bg").style.background);
        }, 10000)

        //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
        // var bannerimg = [
        //     "url(/img/bg1.JPG)",
        //     "url(/img/bg2.jpg)",
        //     "url(/img/bg3.jpg)",
        //     "url(/img/bg4.jpg)"
        // ];
        // https://w.wallhaven.cc/full/g7/wallhaven-g7zzkl.jpg
        // //获取banner图片总数，生成随机数
        // var bannerindex = Math.floor(Math.random() * bannerimg.length);
        // //重设banner图片
        // document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
    }
}

var jieliuFlag = true
var timerFa

function randomBg() {
    getAnime()
    if (jieliuFlag) {
        jieliuFlag = false
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
        }, 10000)

    }
    // timerFa = setTimeout(function () {
    //     jieliuFlag = true;
    //   }, 10000)
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
var nowBgImgUrl = 'url(/img/hutao.jpeg)'
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
//         if(e) changeBg('url(/img/hutao.jpeg)')
//     })
// }



/* 调节视频播放速度 */
// var video= document.getElementById('video-bg');
// video.playbackRate = 0.5;