/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6101930fe7ddc41dd7d6464dafa68b81"
  },
  {
    "url": "assets/css/0.styles.edbe0008.css",
    "revision": "335dcdb0ea7608911c6b23ec8e8e35ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0fe18507.js",
    "revision": "cc2c93ecce317c5a48af10300513d4b8"
  },
  {
    "url": "assets/js/11.d0711797.js",
    "revision": "c3165db714ff4dea1a6b94510fee2ae6"
  },
  {
    "url": "assets/js/12.23f283a1.js",
    "revision": "1faefb13f64f01dbec04645c2f72bece"
  },
  {
    "url": "assets/js/13.2765f86d.js",
    "revision": "d8a3ff687e346b7b6ad251725df0a51a"
  },
  {
    "url": "assets/js/14.7948271b.js",
    "revision": "291c88f817135fa35fd7331d5fdd3db5"
  },
  {
    "url": "assets/js/15.569e04e2.js",
    "revision": "a011de76fdbbb66332cc0a9186607084"
  },
  {
    "url": "assets/js/16.a52b1eb3.js",
    "revision": "b6ac2c667dab3b90d1939520bd458a86"
  },
  {
    "url": "assets/js/17.be7a2158.js",
    "revision": "16cb91bbc5c53b0c4ee10808acb59d09"
  },
  {
    "url": "assets/js/18.4608f69c.js",
    "revision": "64dfa910933bb9a015ee65eddd1416e2"
  },
  {
    "url": "assets/js/19.67509648.js",
    "revision": "1901ade7503075165a10925c91ae3794"
  },
  {
    "url": "assets/js/2.a3a03652.js",
    "revision": "b5b5a6760c0cfbadba35b74f383a45ca"
  },
  {
    "url": "assets/js/20.b4bb80c0.js",
    "revision": "c419be8f4e14ef8e12eca4f279270f3d"
  },
  {
    "url": "assets/js/21.64718197.js",
    "revision": "509818da67a0e18fa4d1d78eb1539b8c"
  },
  {
    "url": "assets/js/22.158ac2a6.js",
    "revision": "387c79fa6f1f1c5db1ad2dd6fd79742f"
  },
  {
    "url": "assets/js/23.6f1104bc.js",
    "revision": "5773f2ba3db44050b1dc35156061344c"
  },
  {
    "url": "assets/js/24.c894c63c.js",
    "revision": "8a7ff9cba7c04a554f73da1ea07845f9"
  },
  {
    "url": "assets/js/25.245a157c.js",
    "revision": "02e50b3e5629af02e71bc989cea4aca2"
  },
  {
    "url": "assets/js/26.0f75e9da.js",
    "revision": "921050279f27d26bc0f19f5c3d3cfd62"
  },
  {
    "url": "assets/js/27.2ab2c784.js",
    "revision": "9d8077f42bb5d34c51c3379f4747d741"
  },
  {
    "url": "assets/js/28.69f6cc79.js",
    "revision": "748e4688ae6a9dc86f81fbdcb4eec664"
  },
  {
    "url": "assets/js/29.0e3f736b.js",
    "revision": "2745847bcc9fcd6af4b0184274448c3a"
  },
  {
    "url": "assets/js/3.8f27ae1b.js",
    "revision": "72ed6cee9e60445b7cd479bfcd62d735"
  },
  {
    "url": "assets/js/30.eddcbc32.js",
    "revision": "5530950359ec48bfbc673cd5e35bda1d"
  },
  {
    "url": "assets/js/4.10273172.js",
    "revision": "31e4ca1058ef3ae706ba7aebea2d669f"
  },
  {
    "url": "assets/js/5.98804a80.js",
    "revision": "9a4cef3c3cce3d16ea3d420f864c25dd"
  },
  {
    "url": "assets/js/6.60257467.js",
    "revision": "f89e1a1d4dac20e0c825a659a2809049"
  },
  {
    "url": "assets/js/7.2818e8e6.js",
    "revision": "2a871ae4f82dae8a5f2953196a5832cd"
  },
  {
    "url": "assets/js/8.e796dd35.js",
    "revision": "19272d8eeaccf6c6caaef1d10f5d2c11"
  },
  {
    "url": "assets/js/9.ceb00e87.js",
    "revision": "b2d36fc562a86bf6174a991603ba1529"
  },
  {
    "url": "assets/js/app.910ead7d.js",
    "revision": "3159a63f62ce1a736fab13acad4ecd11"
  },
  {
    "url": "es/index.html",
    "revision": "7b3540611c345aa1c057c4d4ac21aaae"
  },
  {
    "url": "es/patterns/index.html",
    "revision": "17104d715cfff2794be574ed909ff0d8"
  },
  {
    "url": "es/sponsors/index.html",
    "revision": "1afc06973907623c604bd9612679e67e"
  },
  {
    "url": "es/translations/index.html",
    "revision": "9947ba03a0c35019abd47104e14ad4f7"
  },
  {
    "url": "es/useful-links/index.html",
    "revision": "3e6833b7b83464b9150d6504bf3cc930"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "b0d517030a965c4b7f98f24e2b5415ce"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ce1f6fc73c4beff021d4ceccb94671f6"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "6041d37258923a0f5bed736ccd885a5f"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "a15689d1a60d96f81a9ff1194930975c"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "f20d4422b750fcdd2c96046da813e701"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "cbda5626bfcf66615f90e6a9ff78333c"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "eb7c5ef78c76740395c665dfb54f99f4"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "670df00471999c0ee43995c91a6f31b9"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "e04ebe51d4c68d86dcb2fe96abd7548e"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "6a134cf3a30a5abc95756e40533aee9d"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d960221622ef741e94d94594a2002ff7"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "97262e1be19354f0db0c013c1823d674"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "ce5742fa510bdd5d9875b4cc5953d235"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5cec2130d8b4b2524d356f08b663e0ec"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "0e920f4e15ee53318b93ae959a6e4989"
  },
  {
    "url": "index.html",
    "revision": "9f5af3927126b6f260c657b4f1d09acc"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "548aa2189fb33a3e4d1ef81dd61fc8d2"
  },
  {
    "url": "ru/index.html",
    "revision": "54ca9a8ff658bff3b0ab0b409643077a"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "57294ef2e3c465834441865dd841d830"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "fe124e21464cf94caf24aa7c884f01d8"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "1016f22e54022f95b54a2a33e0d5b605"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "1f548cf370ad2fb07f2af003740244ae"
  },
  {
    "url": "sponsors/index.html",
    "revision": "5d6abfcf6e3b7c1fc18a9a9390eda69d"
  },
  {
    "url": "translations/index.html",
    "revision": "7f27280e38e26887ee56608687b6eb65"
  },
  {
    "url": "useful-links/index.html",
    "revision": "4ad2ba937a190f188dd304bb7f2a1c1c"
  },
  {
    "url": "vue-patterns-hero.png",
    "revision": "2a63731bd05e1fad9cbd8a0834b46858"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
