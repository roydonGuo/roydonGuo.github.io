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

function paimeng() {
  var announcementDetail = document.querySelector('.announcement-detail')
  // announcementDetail.innerHTML = "⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠒⠛⠲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⡀⠀⢀⠀⢻⡄⣠⠶⣆⠀⣸⣀⣀⠀⠀⡀⠀⢀⠀⢀⠀⠀  \n⠀⠀⠀⠁⠀⠀⢀⡠⠬⠛⢓⣏⠉⣾⣉⣀⠉⢹⡀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠐⠀⢀⡖⠋⣠⠴⠛⠙⢹⠞⢳⢀⣨⡵⠚⠀⠀⠀⠐⠀⠀⠂⠀ \n⠀⠀⠀⣰⠋⡠⠎⠁⣀⠤⠒⠚⠛⠙⠒⠳⠤⣄⡀⠀⠠⠀⠀⠄⠀⠠ \n⠀⠀⠀⠘⠐⢼⠖⠋⠀⠀⢀⠀⠀⠀⠀⠀⠀⠘⣌⡒⠲⢹⠀⠀⠀⠀ \n⠀⠀⠈⠀⡸⠁⠀⠀⠀⠀⡆⠀⠀⠐⠀⠢⣄⠀⡽⡙⡲⠑⠒⠒⡒⠁ \n⢀⡠⠴⠚⠀⠀⠀⠀⠀⣕⠝⣄⡀⢀⠀⠀⡇⠵⢍⠚⢾⡀⢠⠖⠁⠀ \n⠈⠦⣄⣀⠀⡔⠀⠀⢁⡞⠀⠉⠲⣄⡀⢲⢼⠀⢀⠳⡄⠁⠀⢣⠀⠀ \n⠀⠀⣠⠃⢐⠄⠀⠀⠴⠅⠠⡊⡢⠀⠉⠉⠁⠀⢆⠕⠹⡀⠀⠈⡆⠀ \n⠀⠠⡇⠀⡸⠀⠀⠀⠨⡅⠀⠒⠈⠀⢄⠠⠠⠔⠀⠀⠀⢻⠀⠀⢣⠀ \n⠀⢸⠅⠀⡕⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⡏⠀⠀⢸⠀ \n⠀⠈⡇⠀⣣⠀⠀⠈⠀⠸⡦⠴⠲⢚⢚⠙⠝⠙⠍⠝⣱⠏⢠⠀⢸⠅ \n⠀⠀⠙⣆⠘⣄⠀⠠⣄⠀⠹⣌⠌⠀⠂⠐⢈⠄⡁⢌⠳⣺⠏⢀⡞⠀ \n⠀⠀⠀⠀⠙⠺⠛⣲⠜⠟⡓⡚⣏⣔⡀⡌⣀⢂⣔⠴⠋⢏⠒⠁⠀⠀ "

}
paimeng()
/* 设置body缩放比例 */


// /* 右上角切换主题按钮 */
// /* icon-taiyang | icon-yueliang */
// function darkToLight() {
//     var themeCoin = document.querySelector('#dark-theme-coin')
//     /* var htmlTheme = document.documentElement.getAttribute('data-theme')
//     if (htmlTheme === 'dark') {
//         themeCoin.className = 'iconfont icon-taiyang fa-fw'
//         $('html').attr('data-theme', 'light')
//     } else {
//         themeCoin.className = 'iconfont icon-yueliang fa-fw'
//         $('html').attr('data-theme', 'dark')
//     } */
//     var date = +new Date();
//     if ($('html').attr('data-theme') === 'light') {
//         themeCoin.className = 'iconfont icon-yueliang fa-fw'
//         var themeData = {
//             theme: 'dark',
//             expiry: date
//         }
//         localStorage.setItem('theme', JSON.stringify(themeData))
//         // localStorage.setItem('theme',theme);

//         $('html').attr('data-theme', 'dark')
//     } else {
//         themeCoin.className = 'iconfont icon-taiyang fa-fw'
//         var themeData = {
//             theme: 'light',
//             expiry: date
//         }
//         localStorage.setItem('theme', JSON.stringify(themeData))
//         $('html').attr('data-theme', 'light')
//     }
// }

// var flag = true
// var timer
// document.addEventListener('keyup', function (e) {
//     clearTimeout(timer)
//     if (e.keyCode === 9 && flag === true) {
//         flag = false
//         e.preventDefault()
//         darkToLight()
//     }
//     timer = setTimeout(function () {
//         flag = true
//     }, 1e3)
// })

// $.ajax({
//   type: 'GET',
//   url: ' ',
//   data: {},
//   dataType: 'JSON',
//   async: false, //请求是否异步，默认为异步
//   headers: {
//     'Authorization': localStorage.getItem('token')
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   error: function (e) {
//     console.log(e);
//   }
// })

// $.ajax({
//   type: 'POST',
//   url: '',
//   data: {},
//   dataType: "json",
//   contentType: "application/json",
//   headers: {
//     // Accept: "application/json; charset=utf-8",
//     token: localStorage.getItem('token')
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   error: function (e) {
//     console.log(e);
//   }
// })