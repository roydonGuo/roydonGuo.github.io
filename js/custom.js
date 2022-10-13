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