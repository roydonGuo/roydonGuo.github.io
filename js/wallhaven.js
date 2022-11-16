// $(function () {
//     $.ajax({
//         type: 'GET', // 请求的方式 GET 或 POST
//         url: 'https://wallhaven.cc/search?q=id%3A1&categories=110&purity=100&sorting=favorites&order=desc&pag=1&page=10', // 请求的URL
//         data: {}, // 请求要携带的数据
//         dataType: 'jsonp',
//         success: function (res) {
//             console.log(res);
//             alert(res)
//         } // 请求成功之后的回调函数
//     })
// })
// if (location.pathname.substring(0, 9) === '/Gallery/' && location.pathname.length > 11) imgDetails()
// function imgDetails() {
//     var head = document.querySelector('.not-home-page')
//     head.style.display = 'none'
//     var content = document.querySelector('#page')
//     content.style.width = '100%'
//     content.style.background = 'none'
//     var layout = document.querySelector("main")
//     layout.classList.remove('layout')
// }