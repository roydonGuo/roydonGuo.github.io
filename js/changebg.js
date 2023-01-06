
// 点击一次，节流
// var jieliuFlag = true
// var randomBgOrNot = false

// function randomBg() {
//     var randomBgOrNot = !randomBgOrNot
//     saveData('randomBgOrNot', randomBgOrNot)
//     if (randomBgOrNot && jieliuFlag) {
//         jieliuFlag = false
//         getCDNSiteBg()
//         var bgindex = Math.floor(Math.random() * cdnSiteBg.length)
//         //重设背景图片
//         document.querySelector("#web_bg").style.backgroundImage = 'url(' + cdnSiteBg[bgindex] + ')'
//         // console.log(document.querySelector("#web_bg").style.background);
//         setInterval(function () {
//             //获取背景图片总数，生成随机数
//             var bgindex = Math.floor(Math.random() * cdnSiteBg.length)
//             //重设背景图片
//             document.querySelector("#web_bg").style.backgroundImage = 'url(' + cdnSiteBg[bgindex] + ')'
//             // console.log(document.querySelector("#web_bg").style.background);
//         }, 60000)
//     } else {
//         localStorage.removeItem('randomBgOrNot')
//     }
// }

// function loadRandomBg() {
//     try {
//         let data = loadData('randomBgOrNot', 1440)
//         if (data) {
//             randomBg()
//         } else {
//             localStorage.removeItem('randomBgOrNot')
//         }
//     } catch (error) {
//         localStorage.removeItem('randomBgOrNot');
//     }
// }
// loadRandomBg()

