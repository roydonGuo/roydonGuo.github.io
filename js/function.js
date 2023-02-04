'use strict';

var roydon = {
  randomIndexVideo() { // 主页视频背景随机 
    const videoCDN = ["https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/hutao.mp4",
      "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/hutao2.mp4",
      "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/nahida.mp4",
      "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/ganyu_heimao.mp4",
      "https://gcore.jsdelivr.net/gh/roydonGuo/CDN/videos/ganyu4.mp4"
    ]
    var indexVideo = document.querySelector("#index-video")
    if (indexVideo) {
      var videoIndex = Math.floor(Math.random() * videoCDN.length)
      indexVideo.src = videoCDN[videoIndex]
    }
  },
  randoMcBgGif() { // 首页随机mc背景图片
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
  },
  sm(title, msg) { //vue弹窗
    new Vue({
      data: function () {
        this.$notify({
          title: title,
          message: msg,
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success", //success/warning/info/error
          duration: 3000
        });
      }
    })
  },

  saveData(name, data) { // 存数据
    localStorage.setItem(name, JSON.stringify({
      'time': Date.now(),
      'data': data
    }))
  },
  loadData(name, time) { // 取数据
    let data = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0
    if (data) {
      let t = Date.now() - data.time
      if (t < time * 60 * 1000 && t > 0) return data.data
    }
    return 0;
  },
  dark() { //暗色背景xx**
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
  },
  switchNightMode() { //模式切换
    var themeCoin = document.querySelector('#dark-theme-coin')
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
      themeCoin.className = 'iconfont icon-yueliang'
      activateDarkMode()
      saveToLocal.set('theme', 'dark', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
      document.getElementById('dark-theme-coin').setAttribute('xlink:href', '#icon-sun')
    } else {
      themeCoin.className = 'iconfont icon-taiyang'
      activateLightMode()
      saveToLocal.set('theme', 'light', 2)
      document.querySelector('body').classList.add('DarkMode')
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
      document.getElementById('dark-theme-coin').setAttribute('xlink:href', '#icon-moon')
    }
  },
  // // 切换背景函数
  changeBg(s, flag) {
    var bg = document.querySelector('#web_bg')
    if (s.charAt(0) === '#') {
      bg.style.backgroundColor = s
      bg.style.backgroundImage = 'none'
    } else {
      bg.style.backgroundImage = s
    }
    if (!flag) {
      roydon.saveData('blogbg', s)
    }
  },
  // 读取背景
  loadbg() {
    try {
      let data = roydon.loadData('blogbg', 1440)
      if (data) roydon.changeBg(data, 1)
      else localStorage.removeItem('blogbg');
    } catch (error) {
      localStorage.removeItem('blogbg');
    }
  },
  // waterfall(a) { //bibi页瀑布流
  //   function b(a, b) {
  //     var c = window.getComputedStyle(b);
  //     return parseFloat(c["margin" + a]) || 0
  //   }

  //   function c(a) {
  //     return a + "px"
  //   }

  //   function d(a) {
  //     return parseFloat(a.style.top)
  //   }

  //   function e(a) {
  //     return parseFloat(a.style.left)
  //   }

  //   function f(a) {
  //     return a.clientWidth
  //   }

  //   function g(a) {
  //     return a.clientHeight
  //   }

  //   function h(a) {
  //     return d(a) + g(a) + b("Bottom", a)
  //   }

  //   function i(a) {
  //     return e(a) + f(a) + b("Right", a)
  //   }

  //   function j(a) {
  //     a = a.sort(function (a, b) {
  //       return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a)
  //     })
  //   }

  //   function k(b) {
  //     f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), roydon.waterfall(a))
  //   }
  //   "string" == typeof a && (a = document.querySelector(a));
  //   var l = [].map.call(a.children, function (a) {
  //     return a.style.position = "absolute", a
  //   });
  //   a.style.position = "relative";
  //   var m = [];
  //   l.length && (l[0].style.top = "0px", l[0].style.left = c(b("Left", l[0])), m.push(l[0]));
  //   for (var n = 1; n < l.length; n++) {
  //     var o = l[n - 1],
  //       p = l[n],
  //       q = i(o) + f(p) <= f(a);
  //     if (!q) break;
  //     p.style.top = o.style.top, p.style.left = c(i(o) + b("Left", p)), m.push(p)
  //   }
  //   for (; n < l.length; n++) {
  //     j(m);
  //     var p = l[n],
  //       r = m.pop();
  //     p.style.top = c(h(r) + b("Top", p)), p.style.left = c(e(r)), m.push(p)
  //   }
  //   j(m);
  //   var s = m[0];
  //   a.style.height = c(h(s) + b("Bottom", s));
  //   var t = f(a);
  //   window.addEventListener ? window.addEventListener("resize", k) : document.body.onresize = k
  // },

  // essay() {
  //   var percentFlag = false; // 节流阀
  //   function essayScroll() {
  //     let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  //     const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  //     result <= 99 || (result = 99);

  //     if (
  //       !percentFlag &&
  //       waterfallResult + 100 >= document.documentElement.clientHeight &&
  //       document.querySelector("#waterfall")
  //     ) {
  //       // console.info(waterfallResult, document.documentElement.clientHeight);
  //       setTimeout(() => {
  //         roydon.waterfall("#waterfall");
  //       }, 500);
  //     } else {
  //       setTimeout(() => {
  //         document.querySelector("#waterfall") && roydon.waterfall("#waterfall");
  //       }, 500);
  //     }

  //     const r = window.scrollY + document.documentElement.clientHeight;

  //     let p = document.getElementById("post-comment") || document.getElementById("footer");

  //     (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
  //   }

  //   var anzhiyu = {
  //     diffDate: function (d, more = false) {
  //       const dateNow = new Date();
  //       const datePost = new Date(d);
  //       const dateDiff = dateNow.getTime() - datePost.getTime();
  //       const minute = 1000 * 60;
  //       const hour = minute * 60;
  //       const day = hour * 24;
  //       const month = day * 30;

  //       let result;
  //       if (more) {
  //         const monthCount = dateDiff / month;
  //         const dayCount = dateDiff / day;
  //         const hourCount = dateDiff / hour;
  //         const minuteCount = dateDiff / minute;

  //         if (monthCount >= 1) {
  //           result = datePost.toLocaleDateString().replace(/\//g, "-");
  //         } else if (dayCount >= 1) {
  //           result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
  //         } else if (hourCount >= 1) {
  //           result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
  //         } else if (minuteCount >= 1) {
  //           result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
  //         } else {
  //           result = GLOBAL_CONFIG.date_suffix.just;
  //         }
  //       } else {
  //         result = parseInt(dateDiff / day);
  //       }
  //       return result;
  //     },
  //     changeTimeInEssay: function () {
  //       document.querySelector("#bber") &&
  //         document.querySelectorAll("#bber time").forEach(function (e) {
  //           var t = e,
  //             datetime = t.getAttribute("datetime");
  //           (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
  //         });
  //     },
  //     reflashEssayWaterFall: function () {
  //       document.querySelector("#waterfall") &&
  //         setTimeout(function () {
  //           roydon.waterfall("#waterfall");
  //           document.getElementById("waterfall").classList.add("show");
  //         }, 200);
  //     },

  //     initIndexEssay: function () {
  //       setTimeout(() => {
  //         let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
  //           passiveListeners: true,
  //           direction: "vertical",
  //           loop: true,
  //           autoplay: {
  //             disableOnInteraction: true,
  //             delay: 3000,
  //           },
  //           mousewheel: true,
  //         });

  //         let essay_bar_comtainer = document.getElementById("bbtalk");
  //         if (essay_bar_comtainer !== null) {
  //           essay_bar_comtainer.onmouseenter = function () {
  //             essay_bar_swiper.autoplay.stop();
  //           };
  //           essay_bar_comtainer.onmouseleave = function () {
  //             essay_bar_swiper.autoplay.start();
  //           };
  //         }
  //       }, 100);
  //     },
  //   };

  //   anzhiyu.initIndexEssay();
  //   anzhiyu.changeTimeInEssay();
  //   anzhiyu.reflashEssayWaterFall();

  // },
  replaceAll(e, n, t) {
    return e.split(n).join(t);
  },
  initIndexEssay: function () {
    setTimeout(() => {
      let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000,
        },
        mousewheel: true,
      });

      let essay_bar_comtainer = document.getElementById("bbtalk");
      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };
        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  },
  commentText(e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = roydon.replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
  danmu() { //评论弹幕
    const commentBarrageConfig = {
      maxBarrage: 1,
      barrageTime: 5000,
      twikooUrl: "https://guo.yicheng.plus",
      accessToken: "04fdc390db1b4efd9ed7de5954e0e968",
      pageUrl: window.location.pathname,
      barrageTimer: [],
      barrageList: [],
      barrageIndex: 0,
      // 没有设置过头像时返回的默认头像，见cravatar文档 https://cravatar.cn/developers/api，可以不改以免出错
      noAvatarType: "retro",
      dom: document.querySelector('.comment-barrage'),
      //是否默认显示留言弹幕
      displayBarrage: true,
      //头像cdn，默认cravatar
      avatarCDN: "cravatar.cn",
    }

    function isInViewPortOfOne(el) {
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const offsetTop = el.offsetTop
      const scrollTop = document.documentElement.scrollTop
      const top = offsetTop - scrollTop
      return top <= viewPortHeight
    }

    document.onscroll = function () {
      if (commentBarrageConfig.displayBarrage) {
        if (document.getElementById("post-comment")) {
          if (isInViewPortOfOne(document.getElementById("post-comment"))) {
            document.getElementsByClassName("comment-barrage")[0].setAttribute("style", `display:none;`)
          } else {
            document.getElementsByClassName("comment-barrage")[0].setAttribute("style", "")
          }
        }
      }
    }

    function initCommentBarrage() {
      var data = JSON.stringify({
        "event": "COMMENT_GET",
        "commentBarrageConfig.accessToken": commentBarrageConfig.accessToken,
        "url": commentBarrageConfig.pageUrl
      });
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          commentBarrageConfig.barrageList = commentLinkFilter(JSON.parse(this.responseText).data);
          if (commentBarrageConfig.dom) {
            commentBarrageConfig.dom.innerHTML = '';
          }
        }
      });
      xhr.open("POST", commentBarrageConfig.twikooUrl);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
      setInterval(() => {
        if (commentBarrageConfig.barrageList.length) {
          popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
          commentBarrageConfig.barrageIndex += 1;
          commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
        }
        if (commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage ? commentBarrageConfig.maxBarrage : commentBarrageConfig.barrageList.length)) {
          removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
        }
      }, commentBarrageConfig.barrageTime)

    }

    function commentLinkFilter(data) {
      data.sort((a, b) => {
        return a.created - b.created;
      })
      let newData = [];
      data.forEach(item => {
        newData.push(...getCommentReplies(item));
      });
      return newData;
    }

    function getCommentReplies(item) {
      if (item.replies) {
        let replies = [item];
        item.replies.forEach(item => {
          replies.push(...getCommentReplies(item));
        })
        return replies;
      } else {
        return [];
      }
    }

    function popCommentBarrage(data) {
      let barrage = document.createElement('div');
      let width = commentBarrageConfig.dom.clientWidth;
      let height = commentBarrageConfig.dom.clientHeight;
      barrage.className = 'comment-barrage-item'
      // let ran = Math.floor(Math.random() * commentBarrageConfig.lightColors.length)
      // document.getElementById("barragesColor").innerHTML = `[data-theme='light'] .comment-barrage-item { background-color:${commentBarrageConfig.lightColors[ran][0]};color:${commentBarrageConfig.lightColors[ran][1]}}[data-theme='dark'] .comment-barrage-item{ background-color:${commentBarrageConfig.darkColors[ran][0]};color:${commentBarrageConfig.darkColors[ran][1]}}`;

      barrage.innerHTML = `
			<div class="barrageHead">
					<img class="barrageAvatar" src="https://${commentBarrageConfig.avatarCDN}/avatar/${data.mailMd5}?d=${commentBarrageConfig.noAvatarType}"/>
					<div class="barrageNick">${data.nick}</div>
					<a href="javascript:switchCommentBarrage()" style="font-size:20px">×</a>
			</div>
			<div class="barrageContent">${data.comment}</div>
	`
      commentBarrageConfig.barrageTimer.push(barrage);
      commentBarrageConfig.dom.append(barrage);
    }

    function removeCommentBarrage(barrage) {
      barrage.className = 'comment-barrage-item out';

      if (commentBarrageConfig.maxBarrage != 1) {
        setTimeout(() => {
          commentBarrageConfig.dom.removeChild(barrage);
        }, 1000)
      } else {
        commentBarrageConfig.dom.removeChild(barrage);
      }
    }

    function switchCommentBarrage() {
      localStorage.setItem("isBarrageToggle", Number(!Number(localStorage.getItem("isBarrageToggle"))))
      if (document.getElementById("post-comment")) {
        if (!isInViewPortOfOne(document.getElementById("post-comment"))) {
          commentBarrageConfig.displayBarrage = !(commentBarrageConfig.displayBarrage);
          let commentBarrage = document.querySelector('.comment-barrage');
          if (commentBarrage) {
            $(commentBarrage).fadeToggle()
          }
        }
      }
    }
    var timer
    $(".comment-barrage").hover(function () {
      clearInterval(timer);
    }, function () {
      timer = setInterval(() => {
        if (commentBarrageConfig.barrageList.length) {
          popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
          commentBarrageConfig.barrageIndex += 1;
          commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
        }
        if (commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage ? commentBarrageConfig.maxBarrage : commentBarrageConfig.barrageList.length)) {
          removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
        }
      }, commentBarrageConfig.barrageTime)
    })
    if (localStorage.getItem("isBarrageToggle") == undefined) {
      localStorage.setItem("isBarrageToggle", "0");
    } else if (localStorage.getItem("isBarrageToggle") == "1") {
      localStorage.setItem("isBarrageToggle", "0");
      switchCommentBarrage()
    }
    initCommentBarrage()
  },
  linkCom: e => { //快速友链
    var t = document.querySelector(".el-textarea__inner");
    "bf" == e ? (t.value = "```yml\n", t.value += "- name: \n  link: \n  avatar: \n  descr: \n  siteshot: ", t.value += "\n```", t.setSelectionRange(15, 15)) : (t.value = "站点名称：\n站点地址：\n头像链接：\n站点描述：\n站点截图：", t.setSelectionRange(5, 5)), t.focus()
  },
  catalogActive() { //分类页分类滚动
    let $list = document.getElementById('catalog-list')
    if ($list) {
      // 鼠标滚轮滚动
      $list.addEventListener('mousewheel', function (e) {
        // 计算鼠标滚轮滚动的距离
        $list.scrollLeft -= e.wheelDelta / 2
        // 阻止浏览器默认方法
        e.preventDefault()
      }, false)
      // 高亮当前页面对应的分类或标签
      let $catalog = document.getElementById(decodeURIComponent(window.location.pathname))
      $catalog.classList.add('selected')
      // 滚动当前页面对应的分类或标签到中部
      $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
    }
  },
  removeRandomBanner() {
    var randomBar = document.querySelector('#random')
    if (randomBar) {
      randomBar.style.display = 'none'
    }
  },
  swiperInit() {
    var mySwiper = new Swiper('.swiperPost', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      //自动轮播
      autoplay: {
        delay: 3000, //时间 毫秒
        disableOnInteraction: false, //用户操作之后是否停止自动轮播默认true 
      },
      mousewheel: true,
    })
  },
  isIndex() {
    return location.pathname == '/' ? true : false
  },
  hideIndexTop() { //index-top只在首页一个页面展示
    if (!roydon.isIndex()) {
      var indexTop = document.querySelector(".index-top-container")
      if (indexTop) {
        indexTop.style.display = "none"
      }
    }
  },
  //侧边栏申鹤spine
  shenheSpine() {
    var shenhe = "shenhe"
    var pc1 = document.querySelector("#player-container")
    if (pc1) {
      new spine.SpinePlayer("player-container", {
        jsonUrl: "/" + shenhe + "/" + shenhe + ".json",
        atlasUrl: "/" + shenhe + "/" + shenhe + ".atlas",
        premultipliedAlpha: false,
        showControls: false,
        alpha: true,
        backgroundColor: "#00000000",
        animation: "animation",
        viewport: {
          x: 0,
          y: -550,
          width: 1012.2 / 2,
          height: 2046.31 / 2,
          padLeft: "0%",
          padRight: "0%",
          padTop: "0%",
          padBottom: "0%"
        }
      });
    }
    var pc2 = document.querySelector("#player-container2")
    if (pc2) {
      new spine.SpinePlayer("player-container2", {
        jsonUrl: "/" + shenhe + "/shenhelh.json",
        atlasUrl: "/" + shenhe + "/shenhelh.atlas",
        premultipliedAlpha: false,
        showControls: false,
        alpha: true,
        backgroundColor: "#00000000",
        animation: "animation",
        viewport: {
          x: 0,
          y: -550,
          width: 1012.2 / 2,
          height: 2046.31 / 2,
          padLeft: "0%",
          padRight: "0%",
          padTop: "0%",
          padBottom: "0%"
        }
      });
    }
  }



}