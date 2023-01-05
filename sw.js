/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0c3f7f203284a9bfa3a793cb36d2d2a9"],["/Gallery/genshin/index.html","6eeecca5d68c9ce1a67974e2430309f7"],["/Gallery/index.html","ded70bcbc9d9fcdb1d375a717e8902ed"],["/Gallery/minecraft/index.html","0490ffdf7723829468e03468162b09c3"],["/Gallery/phone/index.html","672f551af996a607d8b547a15fe4ebe5"],["/Gallery/scenery/index.html","b51cdea2f868fba5329b4aa9dcc93a2c"],["/Gallery/twospace/index.html","abb526abf169d477fb54427c6628f560"],["/Gallery/wallpaper/index.html","58941d9ffb0e0d15506a2fba649b6c76"],["/about/index.html","d78a3081892340fd33ad2814364f248e"],["/archives/2022/08/index.html","c55ca2a0a47c99a6985089237a7a5449"],["/archives/2022/08/page/2/index.html","e50fffafab31c7c2b3ba3aba8e917ad1"],["/archives/2022/08/page/3/index.html","073321e099c77d71e4dfc7006996cef4"],["/archives/2022/09/index.html","21b23a890df3c51b580eff25d6f57297"],["/archives/2022/10/index.html","a07d4f4e3b40d741a21aedbe56c9572f"],["/archives/2022/11/index.html","613c5ef7c21471adec692e8536b70096"],["/archives/2022/12/index.html","781a8a2513a975d8784a26d088f150e5"],["/archives/2022/index.html","95417947d9a2d1bc42ed6a7580ed7ecb"],["/archives/2022/page/2/index.html","0c82e03512b3ebb34815544643f819b7"],["/archives/2022/page/3/index.html","e33eb0f484bf333cbde3193347fb4775"],["/archives/2022/page/4/index.html","8da0874bd78d08bf4c96b84f2c0f4edd"],["/archives/index.html","11979239a6c7a590cf88e588b1cd81b2"],["/archives/page/2/index.html","560363fedec593e0cd3a3b643f7fb643"],["/archives/page/3/index.html","59e4bb91bb22a5d3fdb5ae3518966e07"],["/archives/page/4/index.html","ff81090d6aac7c88f695b9ce809ac71a"],["/atom.xml","5e38792286d4bc58549171d8edff3d9d"],["/baidusitemap.xml","39be87ce10fce9d00628db1c3b2317ad"],["/bangumis/index.html","b4cb7573ec01244b229339d96bf64efc"],["/categories/Android/index.html","ef6a8ba65315c2bb61f6ca271af4e9bc"],["/categories/DSA/index.html","40289f68d87497f3f3b739d64e6ac94e"],["/categories/HUAWEI/index.html","cd473e50fe768d50521444b372c4a6d4"],["/categories/Java/index.html","71f743e906347326e82ba990d37b5ea0"],["/categories/LeetCode/index.html","89a40e2f4422b20e342e995dc8e1df37"],["/categories/Minecraft/index.html","f9c3959009ec480e1c31c93bd5883a9c"],["/categories/Python/index.html","16698d5b78d7d04001a2a8e5f89e31eb"],["/categories/index.html","77a88a241894036561cf10678f63abae"],["/categories/前端/index.html","6db69c48c89df03b509285526caaf08e"],["/categories/计算机网络/index.html","1ce6788569f5bfb8ea30422291b7e170"],["/categories/面试/index.html","27f544b36a12a06dab20048ca54f0955"],["/changebg/index.html","b329aefeb72a7348324b1c2fdf968bd2"],["/comments/index.html","b31db77078425e952618f2961e08ec50"],["/css/about.css","0b1be4a6d6c1b8522025a37c9d58397a"],["/css/ali_font.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/aplayer.css","a5798381e3f58d9a12f2a4cc489e59d8"],["/css/category_tag.css","730a2d7c633ce09da75ec3cd89c5264c"],["/css/circle.css","1243487094ba0ead738a6395d812e86a"],["/css/commentBarrage.css","22dac03a321167fdae56de5a605af9de"],["/css/custom.css","72d8d8e5de867cf7febe87c6d93cc7f3"],["/css/custom/twikoo_beautify.css","2f0074658e7f4d56b73c1988177e6146"],["/css/flink.css","b635339475d9858fcb469ec7ecf88813"],["/css/index.css","12b5bc6639dc6cdfdc8f1d3e0d2b92bb"],["/css/kslink.css","dbe421ee0df2422eb1583d0b6ab96216"],["/css/live2d.css","18b5b497181ec373432a2a6dd6b57727"],["/css/loaded_style.css","27f3dd0a96d2245c97a508e3cc1affb9"],["/css/nav.css","cfc2cca80a1c8288bf107402263978e4"],["/css/opacity.css","1686db0fbc96aa86f4406823382ea9db"],["/css/people.css","5c6e6e54a5c2449ff283cb84083dede1"],["/css/postPage.css","e7443f61d7b75dac288cf570677d3e0c"],["/css/test.css","b87d44c720316eed8f57546f0811ebe0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/winbox.css","8238c7ebefde01f150c9384ed300266b"],["/essay/index.html","235fb3e27faaa69d84539c8265dbbc6d"],["/fcircle/index.html","2651902b7b32dfc78d8da54029b9890d"],["/images/info.png","191038002b82da336aa5a6fb29791c38"],["/images/music.png","3fd25d7615d5ddd0b2856f5e26ce2d46"],["/images/pasue.png","28b986a45cc62cfe007496119e675290"],["/images/quite.png","3a46dc20ebfea4850f18bac4fc088fa1"],["/images/talk.png","9231194c45026dd17eef4d469210101a"],["/images/youdu.png","014002586c13bcca69452fc3258aad2d"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","601f49c027cab71fad85d0c1e6ebff3a"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/ender_dragon.jpg","bcce813b87f29324e54e38704f6d7dae"],["/img/favicon.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/friend_404.gif","4d9f9288214a67bf2c6d4a5057d9e0d1"],["/img/hutao.jpg","91b69e40858f29a5e595aced1cbfa90f"],["/img/hutao_hai.gif","13e3110820b7cbb038aecedea1bd8723"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","c0e13590f8d06e6ab6fd94a9e66ffa61"],["/img/siteicon/144.png","4d55ddcde772cc6ac2a5a9a4071a83fd"],["/img/siteicon/16.png","f6c27531224d07889455dfea03dfd4e8"],["/img/siteicon/32.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/siteicon/48.png","88080d2b324b85359e137c80e688d139"],["/img/siteicon/512.png","a87fbe7a4bd77c3a554d8f67f41c8502"],["/img/siteicon/64.png","26eec7a5e09d4ca2f4f9393f53384294"],["/img/wechat.png","47d22416f8142ab8961ab98e21f6bf94"],["/index.html","55bd6a13eada76ec34645ac31ba7bd96"],["/js/cat.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/catalog_list.js","aa61822c78ae461b56c585ee06bf9967"],["/js/changebg.js","8b409ab5417f99363e8efee955faacb5"],["/js/circle-module.js","e1213db73b42116010858608224c7210"],["/js/circle.js","251726f71cb74e0892ebde7df920b2da"],["/js/commentBarrage.js","0caedcadb0ecaf42b4797720d501c99d"],["/js/console.js","5235f5cd47b5b3ade60d3be4e8462c05"],["/js/countup.js","8fc8d6d35e2eb589b42206d85b29d675"],["/js/custom.js","e8d5ab270403da84c0d6b62ff127f5e8"],["/js/dark.js","b3f91c7f466ad269b55cef78e5a4cf53"],["/js/fcircle.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/kslink.js","bdb9758ac7d0ef847a32c06f5e206b9c"],["/js/live2d.js","6052d1f743e4d0362fb5b1b816d47ed4"],["/js/main.js","c42699ceb9599c8c50bc93101efc8cfa"],["/js/message.js","f12a869fbec7c80535a739b418cd3a17"],["/js/people.js","d19ca5d79be7b73ceb0d4c4d069d3c10"],["/js/player.js","6e9077c21f2069b4e6a353ccc93cfe83"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/specifypage.js","20d7a60f86ea98d71f30ae60cf94b8c7"],["/js/test.js","a3e48f2d6702edfe01a207cf37d67ef5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utill.js","013dc33bb58a1ae9c45a89b8abc2740b"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wallhaven.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/waterfall.js","9fab366ed6c76ca162d56a256c96a2c1"],["/js/winbox.js","61081bd87e42c8d6d8d26ef3f12741bd"],["/leimu.html","849bb27231974a464744d2d9cd483008"],["/link/index.html","6be88dd6d375221327fe76bed543a1c5"],["/live2d-widget/README.html","6ae6f27d2375c49ae1a68b89b04b5f57"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","24f9ef78790aad32820470a4597fe4a7"],["/live2d-widget/demo/demo.html","c3739fe6dc739932b79f9bb2dabf1c02"],["/live2d-widget/demo/login.html","a3786e750803a5e2d2b583c6f74e048c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","93a9d7348151878beb55616e1882521f"],["/live2d-widget/waifu.css","262a05693acd2d7bb0a69ce4ebcea2ea"],["/live2d/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d/model/rem/remu2048/texture_00.png","28e5e7d70b20a30a2ce1dd48e88e960e"],["/movies/index.html","be472ac9a85b6237219332c4f7264a93"],["/music/index.html","8989e408f0351d9d62de097603e90ca7"],["/page/2/index.html","9c2a51ed70001c32010547fcc6c0a7b7"],["/people.html","5eb645acf40779cd79bf529a9a3f6695"],["/posts/001.html","600f482c9033e550056741f2cf3934fc"],["/posts/002.html","f3463438c7aeb929e986730e472da70b"],["/posts/003.html","fc448008193134f91d45c527a7ec2621"],["/posts/004.html","944d7ea539a68fab7a2d793ce07645ef"],["/posts/1b88f555.html","53291328a82019176a0539d360690afa"],["/posts/1e2b9fda.html","60265fd1a69d39782bb111eebc0a6df1"],["/posts/2f323f.html","e41d674281cb15242ebcfacd3ccdd09d"],["/posts/306dd2fe.html","477d54162b066b704288c19417c429bc"],["/posts/321rrew.html","3b882d2704ebc7dd3ba71fc342e3a498"],["/posts/32fwef.html","60f0c10a2c3b2e232502e3f7339cf6c0"],["/posts/34abbf19.html","49642deca328b92746b7fcee72605f8d"],["/posts/48c18324.html","faa93659ad983ae489bbab3040ca7bd2"],["/posts/4b0178e0.html","ada6c5144e3e0226127c511727b03c19"],["/posts/5753d50.html","c5a9344f47f28fad6fa9064c9db6e43c"],["/posts/6f615cb.html","4c1fdd321327244a96060c9af2dbc925"],["/posts/7165c5d8.html","eb14b4577ae877e61d8b2ea782b283ef"],["/posts/7d2eec83.html","42403ea55efbd6f57b6ff4a9f100237d"],["/posts/87a073f0.html","7f001a9b3f9ccafeb2499c5faf40ac44"],["/posts/CSS3.html","8c1d85f452d7abffe169a954be646d2d"],["/posts/HTML5.html","9fc412c7721411d2feab652f588241fa"],["/posts/Hello.html","fa8aafad51df18403c431d2712f37051"],["/posts/JavaScript.html","fed1ab946228ab7d07e84d8d4b296b7a"],["/posts/LeetCode.html","f50dda6fb53b91354d4e2054d5ab50c1"],["/posts/Mybatis-Plus.html","310c0a8402dd7f3f53fed923e1710436"],["/posts/ajax.html","c9102923d8fc7f0d99d774714ecd8eca"],["/posts/b0faee08.html","c6b76a62d2a66aad78972802012f12dd"],["/posts/d9ef328.html","ad5ff3259c861b5a280111196cbde480"],["/posts/harmony2.0.html","2d01a140fcccdaef62048dc2b9c2bfef"],["/posts/jQuery.html","c03045be69c7dbc49d20c5133dc9e386"],["/posts/mc-dev-1.html","b6cf232563cca0dfc0c6f67667d5a909"],["/posts/mc-dev-2.html","269b1955002a6fe2c235a1e89c1f6da7"],["/posts/mc-dev-3.html","734e09bb823f9419a85dd11b04d85be2"],["/posts/node.js.html","c4e3bca7c271058d2027339e2af58b59"],["/posts/videoDemo.html","9ab63995046e1d35dd7c96195bf4604d"],["/posts/zhizi.html","037ab2e7f91aeab637b1fdbb1b0170ad"],["/roydon/random.js","e0ed55c905a30547ddb874228081e110"],["/search.xml","9f5c66aa1cd645c537a290caf76181ec"],["/sitemap.xml","b79b69a22189e72fe47b8671bcf93fc4"],["/sw-register.js","09ea1849fd9b1b3425692ae12ea63a8d"],["/tags/APP/index.html","793f63df158347327fa3fe6f18d2a028"],["/tags/Ajax/index.html","b876ca4b7a7e63490dc56d091b7c3b19"],["/tags/Android/index.html","2817367739f0379de200103fa0d6b7e8"],["/tags/CSS/index.html","9fc7b137d0325a24e0b9e1301cdcc426"],["/tags/Forge/index.html","707c8f6a38ce72a1929761e0d004d91e"],["/tags/HTML/index.html","28c4dbefee1813d6bf67c99f37b880de"],["/tags/Harmony2-0/index.html","58bee70daad9fc848cb387eb68d4b42a"],["/tags/Hexo/index.html","854bf2bac954510071146d63473e3dde"],["/tags/JQuery/index.html","0bead8dc6768f4f60ed40859348a57c4"],["/tags/JWT/index.html","81d2941ea25baf1a93265fb8f58116ed"],["/tags/Java/index.html","46fd060f3ec3f20e7c52fd38c0069a0a"],["/tags/JavaScirpt/index.html","7a240ddeb3d0d0e89779c38a25596768"],["/tags/JavaScript/index.html","32ee6d83f9a40d9eb94009dd1710604b"],["/tags/LeetCode/index.html","f2e3ae6c9fac0f50a80eb9b818a23035"],["/tags/Linux/index.html","82b41695d0ed7aa52890f3414e026fff"],["/tags/Mybatis-Plus/index.html","f5310ea12c18b7781896d740bd4c9a7a"],["/tags/Mybatis/index.html","153bd9ac34be34a17df35db164c1777f"],["/tags/Node-js/index.html","a0a616c4f4750107c66d54b75f607c1a"],["/tags/Python/index.html","3628690535f694c7b90702ff1037441f"],["/tags/Redis/index.html","90a9b2eb36fb990265ee2175139ea1ed"],["/tags/SpringBoot/index.html","f016b81388f92f843893be64813d0751"],["/tags/SpringSecurity/index.html","ced251ca5466692b19fbd693e301bee4"],["/tags/Vue/index.html","95a84de97fd883790e4a447084339cc5"],["/tags/index.html","e558e4ea856c646a66af01488b692194"],["/tags/算法/index.html","ff778b8be0a93116070c6b1e6928d85a"],["/tags/计算机网络/index.html","9809fba51962e47c6f2fe8517dd7d840"],["/tools/index.html","1d0b5318f62392de49f037be5de27cf3"]];
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
