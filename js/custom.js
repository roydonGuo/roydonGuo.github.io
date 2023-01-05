// 霓虹灯效果
// 颜色数组
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
// 颜色索引
var idx = 0;

// 切换颜色
function changeColor() {
  // 仅夜间模式才启用
  if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
    if (document.getElementById("site-name"))
      document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 15px";
    if (document.getElementById("site-title"))
      document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 15px";
    if (document.getElementById("site-subtitle"))
      document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 10px";
    if (document.getElementById("post-info"))
      document.getElementById("post-info").style.textShadow = arr[idx] + " 0 0 5px";
    try {
      document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 12px";
      document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 12px";
    } catch {

    }
    idx++;
    if (idx == 8) {
      idx = 0;
    }
  } else {
    // 白天模式恢复默认
    if (document.getElementById("site-name"))
      document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
    if (document.getElementById("site-title"))
      document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
    if (document.getElementById("site-subtitle"))
      document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
    if (document.getElementById("post-info"))
      document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px";
    try {
      document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
      document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
    } catch {

    }
  }
}

// 开启计时器
window.onload = setInterval(changeColor, 1200);


function catalogActive() {
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
}
catalogActive()

var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}

function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var anzhiyu = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 200);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
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
};

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();

function removeRandomBanner() {
  var randomBar = document.querySelector('#random')
  if (randomBar) {
    randomBar.style.display = 'none'
  }
}

if (location.pathname.substring(0, 5) === '/page') removeRandomBanner()

//重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function (responseText, request, href, options) {
  Object.defineProperty(request, 'responseURL', {
    value: href
  });
  pjax.site_handleResponse(responseText, request, href, options);
}
