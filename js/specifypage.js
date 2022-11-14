if (location.pathname == '/') newPost()
// if (location.pathname.substring(0, 8) === '/Gallery' && location.pathname.length <= 9) removeBgToDefault()

// 最新文章函数
function newPost() {
    // 获取所有文章信息
    let ls = document.querySelectorAll('.recent-post-info')
    // 先让时间和索引值都等于第第一篇文章的
    let time = new Date(ls[0].querySelector('.post-meta-date-created').getAttribute('datetime')).getTime()
    let index = 0
    // 遍历数组，如果有时间比time大（更新的文章）则替换
    ls.forEach((i, num) => {
        let t = new Date(i.querySelector('.post-meta-date-created').getAttribute('datetime')).getTime()
        if (t > time) {
            time = t
            index = num
        }
    })
    // 单数在右，双数在左
    let className = index % 2 == 0 ? 'newPost-right' : 'newPost-left'
    ls[index].innerHTML += '<span class="' + className + '">new</span>'
    // 如果你不想让其一左一右，可以注释上面的启用下面的，默认左，left改成right就是右
    // ls[index].innerHTML += '<span class="newPost-left">最 新</span>';
}


// function removeBgToDefault() {
//     var removeBg = document.querySelector('.to-default-bg')
//     removeBg.addEventListener('click', function () {
//         localStorage.removeItem('blogbg');
//     })
// }
