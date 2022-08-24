// 确保其他页面（如第二页）第一篇文章不添加
if (location.pathname == '/') newPost();

// 最新文章函数
function newPost() {
    // 获取所有文章信息
    let ls = document.querySelectorAll('.recent-post-info')
    // 先让时间和索引值都等于第第一篇文章的
    let time = new Date(ls[0].querySelector('.post-meta-date-created').getAttribute('datetime')).getTime();
    let index = 0
    // 遍历数组，如果有时间比time大（更新的文章）则替换
    ls.forEach((i, num) => {
        let t = new Date(i.querySelector('.post-meta-date-created').getAttribute('datetime')).getTime()
        if (t > time) {
            time = t;
            index = num
        }
    })
    // 单数在右，双数在左
    let className = index % 2 == 0 ? 'newPost-right' : 'newPost-left'
    ls[index].innerHTML += '<span class="' + className + '">最 新</span>';
    // 如果你不想让其一左一右，可以注释上面的启用下面的，默认左，left改成right就是右
    // ls[index].innerHTML += '<span class="newPost-left">最 新</span>';
}

function dark() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var n, e, i, h, t = .05,
        s = document.getElementById("universe"),
        o = !0,
        a = "180,184,240",
        r = "226,225,142",
        d = "226,225,224",
        c = [];

    function f() {
        n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
    }

    function u() {
        h.clearRect(0, 0, n, e);
        for (var t = c.length, i = 0; i < t; i++) {
            var s = c[i];
            s.move(), s.fadeIn(), s.fadeOut(), s.draw()
        }
    }

    function y() {
        this.reset = function () {
            this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
        }, this.fadeIn = function () {
            this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
        }, this.fadeOut = function () {
            this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
        }, this.draw = function () {
            if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
            else if (this.comet) {
                h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
                for (var t = 0; t < 30; t++) h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
            } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
            h.closePath(), h.fill()
        }, this.move = function () {
            this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
        }, setTimeout(function () {
            o = !1
        }, 50)
    }

    function m(t) {
        return Math.floor(1e3 * Math.random()) + 1 < 10 * t
    }

    function l(t, i) {
        return Math.random() * (i - t) + t
    }
    f(), window.addEventListener("resize", f, !1),
        function () {
            h = s.getContext("2d");
            for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
            u()
        }(),
        function t() {
            document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
        }()
};
dark()

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
// function changeBg(s, flag) {
//     let bg = document.querySelector('web_bg')
//     if (s.charAt(0) == '#') {
//         bg.style.backgroundColor = s
//         bg.style.backgroundImage = 'none'
//     } else bg.style.backgroundImage = s
//     if (!flag) {
//         saveData('blogbg', s)
//     }
// }
// let time = ''
// let imgbox = document.querySelector('.fj-gallery')
// imgbox.addEventListener('contextmenu', e => e.preventDefault())
// imgbox.addEventListener('click', e => {
//     changeBg('url(' + e.target.src + ')');
// })
// console.log(e.target.src);
// imgbox.addEventListener('touchstart', e => {
//     time = setTimeout(() => {
//         changeBg('url(' + e.target.src + ')');
//     }, 500);
// })
// imgbox.addEventListener('touchend', () => {
//     clearTimeout(time)
// })

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
imgbox.addEventListener('click', e => {
    if (!e.target.src.charAt(0)==='h') return changeBg(nowBgImgUrl)
    nowBgImgUrl = 'url(' + e.target.src + ')'
    changeBg(nowBgImgUrl);
})

