const commentBarrageConfig = {
  //同时最多显示弹幕数
  maxBarrage: 1,
  //弹幕显示间隔时间ms
  barrageTime: 3000,
  //twikoo部署地址腾讯云的为环境ID
  twikooUrl: "https://guo.yicheng.plus",
  //token获取见上方
  accessToken: "04fdc390db1b4efd9ed7de5954e0e968",
  pageUrl: window.location.pathname,
  barrageTimer: [],
  barrageList: [],
  barrageIndex: 0,
  dom: document.querySelector('.comment-barrage'),
}

var timer;

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
      commentBarrageConfig.dom.innerHTML = '';
    }
  });
  xhr.open("POST", commentBarrageConfig.twikooUrl);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
  clearInterval(timer)
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
  // let ran = Math.floor(Math.random() * commentBarrageConfig.colors.length)
  // barrage.style.background = commentBarrageConfig.colors[ran][0];
  // barrage.style.color = commentBarrageConfig.colors[ran][1];
  // console.log(data);
  barrage.innerHTML = `
		<div class="barrageHead">
			<div class="barrageNick">${data.nick}</div>
			<img class="barrageAvatar" src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="https://cravatar.cn/avatar/${data.mailMd5}"/>
		</div>
		<div class="barrageContent">${data.comment}</div>
	`
  commentBarrageConfig.barrageTimer.push(barrage);
  commentBarrageConfig.dom.append(barrage);
}

function removeCommentBarrage(barrage) {
  barrage.className = 'comment-barrage-item out';
  setTimeout(() => {
    commentBarrageConfig.dom.removeChild(barrage);
  }, 3000)
}

initCommentBarrage()

function switchCommentBarrage() {
  let commentBarrage = document.querySelector('.comment-barrage');
  if (commentBarrage) {
    $(commentBarrage).slideToggle("normal", "linear")

  }
}