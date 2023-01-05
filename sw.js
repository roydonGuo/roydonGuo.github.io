/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","558a26210c2f1496c7a8f3ee14bbb033"],["/Gallery/genshin/index.html","83afeaee8950ebcaccdf55519423822f"],["/Gallery/index.html","ceac0e4d6ba4fd416c9c7ecb143dff10"],["/Gallery/minecraft/index.html","9c4e71a0783c448a72a91f8a0faf6a6d"],["/Gallery/phone/index.html","ca2e763b2f46b8742bc1f1c5a6182487"],["/Gallery/scenery/index.html","41217bc232c9505245d74e41ef72b907"],["/Gallery/twospace/index.html","bc5bda0d63423d900be6a6e1466c7917"],["/Gallery/wallpaper/index.html","5e249e56efadea321419f8032f52146c"],["/about/index.html","a967c30b567cb7314567aaf17e205e19"],["/archives/2022/08/index.html","13f7189afcfb59e7ecd610039b44399f"],["/archives/2022/08/page/2/index.html","0315906abe0960057e2754cd3e20c9cb"],["/archives/2022/08/page/3/index.html","27c98b0c5fd7fb08f704106c2a342b96"],["/archives/2022/09/index.html","fa85c00d8a29d77bfc79fc6992d77d4e"],["/archives/2022/10/index.html","b0d1b87334d3a15459515d1439187680"],["/archives/2022/11/index.html","1ff2d2d94ad607ddee1386ccbb9edc6f"],["/archives/2022/12/index.html","3ca0482f96d6251d6b84184eb8d017ce"],["/archives/2022/index.html","e9af70222523adce36d37c13243697f4"],["/archives/2022/page/2/index.html","c2034662885c242e29888cb170d24004"],["/archives/2022/page/3/index.html","d8d2b0ed43a20fb2fe869bc5393c5951"],["/archives/2022/page/4/index.html","96c0a031f605b6046be3b14a86e1193f"],["/archives/index.html","f88859c4d3783cdc1a089ea6e701457b"],["/archives/page/2/index.html","6d5909da1b1569ced68b6a379f8810eb"],["/archives/page/3/index.html","eafbecc663238588a90c5fc03bffd653"],["/archives/page/4/index.html","ad613f44834257c102d07c20db6cf54c"],["/atom.xml","c516c77680a8e0a600c262ca2941cf72"],["/baidusitemap.xml","9cd731f00e47bde125ca0443994f356a"],["/bangumis/index.html","e69cfaf1b5c855200b2e68aa7f8f6c9c"],["/categories/Android/index.html","5965b0f37af4e6847d751963e501afde"],["/categories/DSA/index.html","199044fb05a45bcecdef01aaf3745026"],["/categories/HUAWEI/index.html","b19c50de456d9afa2aca975dae30f159"],["/categories/Java/index.html","2d3cf68d358d30605bca7535f64f94e4"],["/categories/LeetCode/index.html","bc82635ebfab317e91b09f966e8c23e4"],["/categories/Minecraft/index.html","040fbc7c8cc81f4b1f2a251f6d35b1d6"],["/categories/Python/index.html","3401bef3ca5f04b37a303471f38f56fa"],["/categories/index.html","65f963bcc7e61b1c02dbd24de29e8c83"],["/categories/前端/index.html","0992a2c606b005fe298089c7513d68f2"],["/categories/计算机网络/index.html","5807dc840e88b83dbcbf8bc330c94366"],["/categories/面试/index.html","0c4e4ac1e1dd687cde47636f0ac44777"],["/changebg/index.html","f042e6e693a20f5ee8a84b79598a8129"],["/comments/index.html","f4821e3973360118d256f67d8d4cfd11"],["/css/about.css","3bc25d95e475ca2b87c409919a51d4aa"],["/css/aplayer.css","a5798381e3f58d9a12f2a4cc489e59d8"],["/css/category_tag.css","730a2d7c633ce09da75ec3cd89c5264c"],["/css/circle.css","1243487094ba0ead738a6395d812e86a"],["/css/commentBarrage.css","95b0dd6e32743313423fcf595d46456e"],["/css/custom.css","5b65880d254e40b63b42b2714d940835"],["/css/flink.css","50f4de0c3218d3e07d34abd0dd40184a"],["/css/index.css","fb2799fae9b2846b4ee95dec37c86d93"],["/css/kslink.css","dbe421ee0df2422eb1583d0b6ab96216"],["/css/live2d.css","18b5b497181ec373432a2a6dd6b57727"],["/css/loaded_style.css","27f3dd0a96d2245c97a508e3cc1affb9"],["/css/nav.css","cfc2cca80a1c8288bf107402263978e4"],["/css/opacity.css","1686db0fbc96aa86f4406823382ea9db"],["/css/people.css","5c6e6e54a5c2449ff283cb84083dede1"],["/css/postPage.css","e7443f61d7b75dac288cf570677d3e0c"],["/css/roydon.css","4bf0ee6362772376cbb697ba65faac22"],["/css/sweetalert.css","a8cdf97fa59a006c6742088b37f02549"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/winbox.css","8238c7ebefde01f150c9384ed300266b"],["/essay/index.html","1ca2f182d5d44e478333ad35f7a57bdc"],["/fcircle/index.html","3cc03e662d22769d93a678dc493b15c0"],["/images/info.png","191038002b82da336aa5a6fb29791c38"],["/images/music.png","3fd25d7615d5ddd0b2856f5e26ce2d46"],["/images/pasue.png","28b986a45cc62cfe007496119e675290"],["/images/quite.png","3a46dc20ebfea4850f18bac4fc088fa1"],["/images/talk.png","9231194c45026dd17eef4d469210101a"],["/images/youdu.png","014002586c13bcca69452fc3258aad2d"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","601f49c027cab71fad85d0c1e6ebff3a"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/ender_dragon.jpg","bcce813b87f29324e54e38704f6d7dae"],["/img/favicon.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/friend_404.gif","4d9f9288214a67bf2c6d4a5057d9e0d1"],["/img/hutao.jpg","91b69e40858f29a5e595aced1cbfa90f"],["/img/hutao_hai.gif","13e3110820b7cbb038aecedea1bd8723"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","c0e13590f8d06e6ab6fd94a9e66ffa61"],["/img/siteicon/144.png","4d55ddcde772cc6ac2a5a9a4071a83fd"],["/img/siteicon/16.png","f6c27531224d07889455dfea03dfd4e8"],["/img/siteicon/32.png","689a17dde13ee7eaacd1f36936cb4cf0"],["/img/siteicon/48.png","88080d2b324b85359e137c80e688d139"],["/img/siteicon/512.png","a87fbe7a4bd77c3a554d8f67f41c8502"],["/img/siteicon/64.png","26eec7a5e09d4ca2f4f9393f53384294"],["/img/wechat.png","47d22416f8142ab8961ab98e21f6bf94"],["/index.html","d2f8a07c7aee118d58ad05c759f126bd"],["/js/catalog_list.js","aa61822c78ae461b56c585ee06bf9967"],["/js/changebg.js","8b409ab5417f99363e8efee955faacb5"],["/js/circle-module.js","e1213db73b42116010858608224c7210"],["/js/circle.js","251726f71cb74e0892ebde7df920b2da"],["/js/commentBarrage.js","7fd1e23ce03c7d82dcfb478ee21cae84"],["/js/console.js","be8b514881251d770a6375159839ce43"],["/js/countup.js","8fc8d6d35e2eb589b42206d85b29d675"],["/js/custom.js","8e762f85a1cc6c42b7d8e98a141661d5"],["/js/dark.js","b3f91c7f466ad269b55cef78e5a4cf53"],["/js/emoji.js","b290058c74630d00985b726031001649"],["/js/fcircle.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/kslink.js","bdb9758ac7d0ef847a32c06f5e206b9c"],["/js/live2d.js","6052d1f743e4d0362fb5b1b816d47ed4"],["/js/main.js","c42699ceb9599c8c50bc93101efc8cfa"],["/js/message.js","f12a869fbec7c80535a739b418cd3a17"],["/js/people.js","d19ca5d79be7b73ceb0d4c4d069d3c10"],["/js/player.js","6e9077c21f2069b4e6a353ccc93cfe83"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/specifypage.js","20d7a60f86ea98d71f30ae60cf94b8c7"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/test.js","a3e48f2d6702edfe01a207cf37d67ef5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utill.js","013dc33bb58a1ae9c45a89b8abc2740b"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wallhaven.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/waterfall.js","9fab366ed6c76ca162d56a256c96a2c1"],["/js/winbox.js","61081bd87e42c8d6d8d26ef3f12741bd"],["/leimu.html","849bb27231974a464744d2d9cd483008"],["/link/index.html","a6a133cf25789c70845c71a4095292f3"],["/live2d-widget/README.html","6ae6f27d2375c49ae1a68b89b04b5f57"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","24f9ef78790aad32820470a4597fe4a7"],["/live2d-widget/demo/demo.html","c3739fe6dc739932b79f9bb2dabf1c02"],["/live2d-widget/demo/login.html","a3786e750803a5e2d2b583c6f74e048c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","93a9d7348151878beb55616e1882521f"],["/live2d-widget/waifu.css","262a05693acd2d7bb0a69ce4ebcea2ea"],["/live2d/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d/model/rem/remu2048/texture_00.png","28e5e7d70b20a30a2ce1dd48e88e960e"],["/movies/index.html","693f54950613882e01fe77eaf3c2ad46"],["/music/index.html","f15c36c4df5b05887fbfcb994d6f20ae"],["/page/2/index.html","eae9dce0b401b7c487ceeb5598711235"],["/people.html","5eb645acf40779cd79bf529a9a3f6695"],["/posts/001.html","32c11e954341641de017bb5e4f2adece"],["/posts/002.html","ddc35c04b4b5abfdc341a5fcc1bba029"],["/posts/003.html","be3094bba1d7167af982df8b6a00a0ed"],["/posts/004.html","4f0d8a111fa5f22046e2da64765d6d8c"],["/posts/1b88f555.html","21e0c1f281fe07d80f803e5c8a2a4a9d"],["/posts/1e2b9fda.html","8220a3840068d9fb88c06b5883654195"],["/posts/2f323f.html","4e73af8da8385560cf8aed668e02ba60"],["/posts/306dd2fe.html","0d6a7b17934c8a380d0b13c92bcce38a"],["/posts/321rrew.html","c8735e22d58e0950575b9e1f38b8cddf"],["/posts/32fwef.html","9d31d21e4f83b4cb692030c795298b83"],["/posts/34abbf19.html","8d6f72cad9bb393f63737f06cd6d2b6f"],["/posts/48c18324.html","e16e1e449cfcda7f21f1eae836f92c7e"],["/posts/4b0178e0.html","9b6a8d292c0d37f5a04826f94ff0e201"],["/posts/5753d50.html","3778a394b05dd9deb22be27f06dc47b2"],["/posts/6f615cb.html","f26739026c21b4ed0a46b66fbef12c87"],["/posts/7165c5d8.html","ef6620b2fa815b2d35d7aeb59605cb4f"],["/posts/7d2eec83.html","cfec5bdd0ed7eec32a05c85b3f19c0c9"],["/posts/87a073f0.html","1fe984e51767910bc2812086f11dbd3e"],["/posts/CSS3.html","aa4c577f8a6cf3f125d1c4ee4198aa46"],["/posts/HTML5.html","a7125dead59dc47e17907bdf77853627"],["/posts/Hello.html","5eb9c2554f3a2c52e94543913af9a68f"],["/posts/JavaScript.html","6253f857e3c85cc4e06ecf3ecfca6c9a"],["/posts/LeetCode.html","600c6393206bf6f641ad91189527011e"],["/posts/Mybatis-Plus.html","c84b5127e009d89d1dc993734cebcc51"],["/posts/ajax.html","030afe04aefb6403eafb21033077c229"],["/posts/b0faee08.html","32078d48e56eacb716cd203de1da13f4"],["/posts/d9ef328.html","8169944b8e6d540c216014c942699b93"],["/posts/harmony2.0.html","a9a2be2efefbecfcfdef6e4edd47d5c2"],["/posts/jQuery.html","70e949712f33cefe4328d18eab3cbc05"],["/posts/mc-dev-1.html","ac1e587318306f1a62c8aa7f86b32d85"],["/posts/mc-dev-2.html","334929711fc599db3203694412e5bfeb"],["/posts/mc-dev-3.html","1d98b425eaae8d0fa793ad421d051829"],["/posts/node.js.html","044b8d13672796dd755ae8c389a9ddfb"],["/posts/videoDemo.html","747675ded0dd986b743884275e2d7acd"],["/posts/zhizi.html","64931cfed3256cceadcf978495ba4056"],["/roydon/random.js","4af841a6cd5d8e34c79bb4a999e803f6"],["/search.xml","4e8d8372251a5791ca04c30ee4e0d541"],["/sitemap.xml","21e64b396fcddba076f2967475b6b278"],["/sw-register.js","7d27e2c32f4c8e008b7d52b2774f9cab"],["/tags/APP/index.html","c372dc6fc24e32c96ef82be9b1f15625"],["/tags/Ajax/index.html","0ba22d54b62d8bfceb936002e6873891"],["/tags/Android/index.html","471d7cb7253518528037be338ddca7f9"],["/tags/CSS/index.html","4476405d583b9bafb9d8825aac3aced3"],["/tags/Forge/index.html","b386d73cf1cc0d4213016629db8a3038"],["/tags/HTML/index.html","e634a633c828d26c0c44b41b1c3cc0c0"],["/tags/Harmony2-0/index.html","4d750ff7dd2f0e1caf7acb8183ba0664"],["/tags/Hexo/index.html","0d0f19a267ff4648d3448dbef19bdbee"],["/tags/JQuery/index.html","675b7403201e69c4c085edd517277893"],["/tags/JWT/index.html","d9be250ce54e9bf6b7a149d78a21b4c7"],["/tags/Java/index.html","348c02946e34e12c3b04085e6f425bef"],["/tags/JavaScirpt/index.html","3a5a1c60547a9cbee8c8885cc398b875"],["/tags/JavaScript/index.html","1591a0e866df916131671bfea0605eb9"],["/tags/LeetCode/index.html","0e2ae7765ef0b9d61bbab9ff93272adf"],["/tags/Linux/index.html","5f5be5e5a6c31302b4fc40c7b1c3e5b0"],["/tags/Mybatis-Plus/index.html","0743bb7be64587527ffeea326fffbaa9"],["/tags/Mybatis/index.html","cde3c3c3c7a3956ce8edf8f82717d84b"],["/tags/Node-js/index.html","3da5d001b599495859dff96713c79f34"],["/tags/Python/index.html","9557ee7793446e0d511feb5a7b29fc35"],["/tags/Redis/index.html","766c669dc7b2988ffaca09c8643ea444"],["/tags/SpringBoot/index.html","1e4e9391541d584f3137985daa8a591c"],["/tags/SpringSecurity/index.html","35f8ad40584843b22a74a2c4c7274f9b"],["/tags/Vue/index.html","de5b6dd3919759eb1270d8f6111c1e05"],["/tags/index.html","4f649529e63cd5243c702cf8dfcd6d99"],["/tags/算法/index.html","ee2d8894082d02f019f4e2970ad72cb1"],["/tags/计算机网络/index.html","da8bf0474cd9279f354721616cbdfd45"],["/tools/index.html","8c0b1f0e3aa37ca66f6134b03b385e4b"]];
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
