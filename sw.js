/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b14f18a4eaffbbb937f73c4192c54e7e"],["/Gallery/genshin/index.html","0c02fdbdb55eb44d9fc4ae7b3626e248"],["/Gallery/index.html","bf46e05c2689cdaac61be034fd5b1122"],["/Gallery/minecraft/index.html","c145aa6b56d29e67a46b9f637cda404a"],["/Gallery/phone/index.html","f30ee900f1de6f7cd0047940a192da03"],["/Gallery/scenery/index.html","ddaa7eb930ee5cf809e26df3a80cf53f"],["/Gallery/twospace/index.html","f841897d765679e3400b63877caab3c5"],["/Gallery/wallpaper/index.html","e05cd14d6fb1122611812ffe00609f7f"],["/about/index.html","60f3986b31453841106a31b03439df3c"],["/archives/2022/08/index.html","6a26e51a3f23675807bd52adaac60f8c"],["/archives/2022/08/page/2/index.html","0642b8871d5ca26bd8f4d00b79667f5b"],["/archives/2022/08/page/3/index.html","b8f9ebd29d29a73172e42729a22defa6"],["/archives/2022/09/index.html","04f5427ada5a9418d42009be1bebfdf8"],["/archives/2022/10/index.html","59fb03b2dd6f03a3ebeb226c914885c8"],["/archives/2022/11/index.html","73454beee8094fa7bef239b50fe87669"],["/archives/2022/12/index.html","61e2694b69474d704bf3b13953a1ebe8"],["/archives/2022/index.html","3e22c187c622c00830a2e9c3b6cf80bd"],["/archives/2022/page/2/index.html","d1fcb80ebfcb57ffda51c0830375d7a2"],["/archives/2022/page/3/index.html","e2aa87e31a47b1bfc1c053853135f3ab"],["/archives/2022/page/4/index.html","c3a2e4bc5c83756247931305e05f26e8"],["/archives/index.html","e168667ad0f585a3f640e475b8e232a8"],["/archives/page/2/index.html","7dab42213b0b6a3295cfe5438eda0d77"],["/archives/page/3/index.html","b1c428c42eefce412a766854ded1c85d"],["/archives/page/4/index.html","bd6ede48af975d94bb4aeebe6dcdbc3f"],["/atom.xml","6577f6d7467697515e844336ceebce1b"],["/baidusitemap.xml","39be87ce10fce9d00628db1c3b2317ad"],["/bangumis/index.html","a0b732f918fe3e0a0e084f4e9a1c0e01"],["/categories/Android/index.html","7f78cda7fd2bed2384a0316adfa75eb0"],["/categories/DSA/index.html","4d13d393d5cc1d6bf6b4a323703c6430"],["/categories/HUAWEI/index.html","2903d8a263da7c1aa6b8ec6c3ad99c2d"],["/categories/Java/index.html","4e87d5f93ff2ba2f2b3f469e42ad70a5"],["/categories/LeetCode/index.html","81a301c0cf1b9befd643903efeef50c5"],["/categories/Minecraft/index.html","4636ce82b9c7c155aba2cb8f19deab5f"],["/categories/Python/index.html","d1f3c6b17d7ae0d8cdc9aa798a49e77e"],["/categories/index.html","f3ba2807d948464a5e827e0106699725"],["/categories/前端/index.html","a7bb752ec69c5d32801d71dbc2f86552"],["/categories/计算机网络/index.html","9154a20e19a347863c3597291754ae47"],["/categories/面试/index.html","d846207bd070e02c68bb9cb3185d3950"],["/changebg/index.html","12a65843b6b3ab169cddc5533724519d"],["/comments/index.html","d418025e17d8d3313de0974b66b8292d"],["/css/about.css","3bc25d95e475ca2b87c409919a51d4aa"],["/css/aplayer.css","a5798381e3f58d9a12f2a4cc489e59d8"],["/css/category_tag.css","730a2d7c633ce09da75ec3cd89c5264c"],["/css/circle.css","1243487094ba0ead738a6395d812e86a"],["/css/commentBarrage.css","95b0dd6e32743313423fcf595d46456e"],["/css/custom.css","b81a69855a9f0e442848bdd22ff67b27"],["/css/flink.css","2261cbf3f64c8590656a9d549d25f28b"],["/css/index.css","596094c75fd128573853898e06f4d71b"],["/css/kslink.css","dbe421ee0df2422eb1583d0b6ab96216"],["/css/live2d.css","18b5b497181ec373432a2a6dd6b57727"],["/css/loaded_style.css","27f3dd0a96d2245c97a508e3cc1affb9"],["/css/nav.css","cfc2cca80a1c8288bf107402263978e4"],["/css/opacity.css","1686db0fbc96aa86f4406823382ea9db"],["/css/people.css","5c6e6e54a5c2449ff283cb84083dede1"],["/css/postPage.css","e7443f61d7b75dac288cf570677d3e0c"],["/css/roydon.css","4bf0ee6362772376cbb697ba65faac22"],["/css/sweetalert.css","a531fdbea15c980484044a3c21980cc0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/winbox.css","8238c7ebefde01f150c9384ed300266b"],["/essay/index.html","59d4ecaa8407916c05b19fe0d2d3d0e4"],["/fcircle/index.html","adb1b9b794f8e465f111670ce3fa7fe7"],["/images/info.png","191038002b82da336aa5a6fb29791c38"],["/images/music.png","3fd25d7615d5ddd0b2856f5e26ce2d46"],["/images/pasue.png","28b986a45cc62cfe007496119e675290"],["/images/quite.png","3a46dc20ebfea4850f18bac4fc088fa1"],["/images/talk.png","9231194c45026dd17eef4d469210101a"],["/images/youdu.png","014002586c13bcca69452fc3258aad2d"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","601f49c027cab71fad85d0c1e6ebff3a"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/ender_dragon.jpg","bcce813b87f29324e54e38704f6d7dae"],["/img/favicon.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/friend_404.gif","4d9f9288214a67bf2c6d4a5057d9e0d1"],["/img/hutao.jpg","91b69e40858f29a5e595aced1cbfa90f"],["/img/hutao_hai.gif","13e3110820b7cbb038aecedea1bd8723"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","c0e13590f8d06e6ab6fd94a9e66ffa61"],["/img/siteicon/144.png","4d55ddcde772cc6ac2a5a9a4071a83fd"],["/img/siteicon/16.png","f6c27531224d07889455dfea03dfd4e8"],["/img/siteicon/32.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/siteicon/48.png","88080d2b324b85359e137c80e688d139"],["/img/siteicon/512.png","a87fbe7a4bd77c3a554d8f67f41c8502"],["/img/siteicon/64.png","26eec7a5e09d4ca2f4f9393f53384294"],["/img/wechat.png","47d22416f8142ab8961ab98e21f6bf94"],["/index.html","f49d431e84ee18ebc46e66e084615f7d"],["/js/catalog_list.js","aa61822c78ae461b56c585ee06bf9967"],["/js/changebg.js","8b409ab5417f99363e8efee955faacb5"],["/js/circle-module.js","e1213db73b42116010858608224c7210"],["/js/circle.js","251726f71cb74e0892ebde7df920b2da"],["/js/commentBarrage.js","eea2cc04aa02c3347f1c20151e7be3d1"],["/js/console.js","246a8d4a96f6538522f4de66e5259fe0"],["/js/countup.js","8fc8d6d35e2eb589b42206d85b29d675"],["/js/custom.js","8e762f85a1cc6c42b7d8e98a141661d5"],["/js/dark.js","b3f91c7f466ad269b55cef78e5a4cf53"],["/js/emoji.js","ca3989637cb6a8af6d1dd76225cb38f1"],["/js/fcircle.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/kslink.js","c16be4a6ce76103bcde2c91930626cdc"],["/js/live2d.js","6052d1f743e4d0362fb5b1b816d47ed4"],["/js/main.js","c42699ceb9599c8c50bc93101efc8cfa"],["/js/message.js","f12a869fbec7c80535a739b418cd3a17"],["/js/people.js","d19ca5d79be7b73ceb0d4c4d069d3c10"],["/js/player.js","6e9077c21f2069b4e6a353ccc93cfe83"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/specifypage.js","20d7a60f86ea98d71f30ae60cf94b8c7"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/test.js","a3e48f2d6702edfe01a207cf37d67ef5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utill.js","013dc33bb58a1ae9c45a89b8abc2740b"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wallhaven.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/waterfall.js","9fab366ed6c76ca162d56a256c96a2c1"],["/js/winbox.js","760e11ab3a0f918959debc423389c5bb"],["/leimu.html","849bb27231974a464744d2d9cd483008"],["/link/index.html","75bd22c319a3a3aa72ad7a28e9282364"],["/live2d-widget/README.html","6ae6f27d2375c49ae1a68b89b04b5f57"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","24f9ef78790aad32820470a4597fe4a7"],["/live2d-widget/demo/demo.html","c3739fe6dc739932b79f9bb2dabf1c02"],["/live2d-widget/demo/login.html","a3786e750803a5e2d2b583c6f74e048c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","93a9d7348151878beb55616e1882521f"],["/live2d-widget/waifu.css","262a05693acd2d7bb0a69ce4ebcea2ea"],["/live2d/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d/model/rem/remu2048/texture_00.png","28e5e7d70b20a30a2ce1dd48e88e960e"],["/movies/index.html","8d69a04500f3e4d532e81e8ceec708ba"],["/music/index.html","1056fa21d071391eb2b51b73ff378b18"],["/page/2/index.html","4742f59f1f78ff56ddd25ec147fd169c"],["/people.html","5eb645acf40779cd79bf529a9a3f6695"],["/posts/001.html","4b87e2842eadc33dc513a17b317866d4"],["/posts/002.html","b8b9b7f8431805da80e9d3b20909693e"],["/posts/003.html","855da91c9ce4d8d4e5e71fbd1c36ce5a"],["/posts/004.html","e5190c9b7373a8037bca5e2978755124"],["/posts/1b88f555.html","f958bcc2f02cd33d859082e99d2606b1"],["/posts/1e2b9fda.html","bdabfa7ffca6ca22a677c8f42f741e6f"],["/posts/2f323f.html","b5b6f93a2edb2ff5541ec8d0506ee551"],["/posts/306dd2fe.html","41a612d3ec3c9f3dea41ece34135579a"],["/posts/321rrew.html","a1a71ab898847323b98fa1cb9db7710a"],["/posts/32fwef.html","f911cfc85cc44c1fb672373761b4c747"],["/posts/34abbf19.html","f4286afd5b0178fed1f1e5c2a0946b79"],["/posts/48c18324.html","6763cdcd142ec480afa96084720f56a2"],["/posts/4b0178e0.html","767a3557b5654aed31407a7e426fd746"],["/posts/5753d50.html","6a39fb90852298f4e41803edfef1fbfd"],["/posts/6f615cb.html","45dc7f30d308c5454dcebdef66ac86f1"],["/posts/7165c5d8.html","5bbb091c086f404f8737a955301f86c3"],["/posts/7d2eec83.html","78b0ace3600254210236ab8359d2061c"],["/posts/87a073f0.html","5f197954d61e1997fe260ce6fce3149d"],["/posts/CSS3.html","5b4f61417562168dc51130d12d1259f2"],["/posts/HTML5.html","c3646d08daff68c940df3080e8956506"],["/posts/Hello.html","3bbc3282b0c2f2d379d61684757b5c7b"],["/posts/JavaScript.html","9790b3354bde61ffad062b0a2043bd16"],["/posts/LeetCode.html","a3cbaa520666c333f9808d057f710302"],["/posts/Mybatis-Plus.html","12fb3d3b4dbf979ac1793d51c0b2cc88"],["/posts/ajax.html","61b16b24f0756a7e7f7a9ee277205ff9"],["/posts/b0faee08.html","4c086d635659c69cdf596441300ff53b"],["/posts/d9ef328.html","9f08477154f2732641a8436f71541abc"],["/posts/harmony2.0.html","b48ec11de28a61115b9b4c2d4050cba9"],["/posts/jQuery.html","7f11073f5b8c7fb554e8bdba8d855471"],["/posts/mc-dev-1.html","24f7eb9915fdacec260bdb9d1db198ea"],["/posts/mc-dev-2.html","c8b665c1e47a33b978b275ed4a625b70"],["/posts/mc-dev-3.html","917154293e58b40b8b1f8ba46d78afe3"],["/posts/node.js.html","05aaa746f44a68e8cdb6889647d88b6b"],["/posts/videoDemo.html","89c8f6a8a01e14960ce8a672f96f223d"],["/posts/zhizi.html","cf3aa58c27a18aaa9189ad0539a040a6"],["/roydon/random.js","f5e941b54ea026288c0f04d18e123438"],["/search.xml","d2a55609cee9d03001042ce6cc4f3ee1"],["/sitemap.xml","660130c4c39470b0dc9391dae71e3b83"],["/sw-register.js","db8b47e4543285b931d8f7b0e89deeec"],["/tags/APP/index.html","5678d30d9eca71e9014706df6afe2a04"],["/tags/Ajax/index.html","1dd38ab9761bffca38f4c7542b2dce78"],["/tags/Android/index.html","1db1c4dd6a45c9b8692c90478e26a013"],["/tags/CSS/index.html","5d646c238ea27c0c81dec1434c2c8d7f"],["/tags/Forge/index.html","484579e1c9aa2e46e8ebc2bf663462e5"],["/tags/HTML/index.html","bdfcd908931214fa1e7304a00f89d1b7"],["/tags/Harmony2-0/index.html","a1970d9faf881996c70dffffc44555e0"],["/tags/Hexo/index.html","7f8c8c9e3ed15c11c7a60f622cb125ae"],["/tags/JQuery/index.html","38a9c1e365dc6481e305c5b0a5aae4db"],["/tags/JWT/index.html","cdc1b48fcd4ee7de4e91fdea2d38791b"],["/tags/Java/index.html","8719a95c5801e10eaaa52f7f30c188ec"],["/tags/JavaScirpt/index.html","06004928eebb3912ae1d16af2c130c54"],["/tags/JavaScript/index.html","416cebee81db494c22a69c2899549c9c"],["/tags/LeetCode/index.html","b04fa4eb6b70b52e5a1ce4964dd74a71"],["/tags/Linux/index.html","3967b6427f440b045811b0b89385b953"],["/tags/Mybatis-Plus/index.html","0a53a0c143672ee3012443283c9bca46"],["/tags/Mybatis/index.html","2ce6038986b44c58ea80354fba93927b"],["/tags/Node-js/index.html","49f7270900b723c1ef46a32aa3cde909"],["/tags/Python/index.html","b50d3ba0984958c19553db27aa4006f8"],["/tags/Redis/index.html","89368c289cdbeb1e878e233388d6aa3e"],["/tags/SpringBoot/index.html","a040d9faf84efd824b0f88dc21755689"],["/tags/SpringSecurity/index.html","2e1f57d0f8209ea3ec3edacb111d9bfc"],["/tags/Vue/index.html","25adcccfdb0c7ada9048e62d40c8d12b"],["/tags/index.html","76a3127b07a68833ea2be4aa7ec101da"],["/tags/算法/index.html","dec69fa4f8a5821b1523cb891710eaa1"],["/tags/计算机网络/index.html","907ea0de163fd57bd3af0059a7081bf2"],["/tools/index.html","451096d2c6557db1e93631cca6a972cd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
