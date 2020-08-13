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
    "revision": "31148f6f5d36d1b5c903658503874a00"
  },
  {
    "url": "assets/css/0.styles.892735e7.css",
    "revision": "1659e05224843eb9fac8c08d26b098e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d607fd2.js",
    "revision": "250f8d02a87ebe1dc83343a0211b7649"
  },
  {
    "url": "assets/js/11.be0eceb3.js",
    "revision": "ff4aa9a0c9a1eca12cb35c84d7f8d02e"
  },
  {
    "url": "assets/js/12.f7a6530c.js",
    "revision": "48e9052bfbfd2ab383ecd424e4fc3e96"
  },
  {
    "url": "assets/js/13.b9bd5b4b.js",
    "revision": "4426556218a1d284cd3caf4e55d24284"
  },
  {
    "url": "assets/js/14.eb767c00.js",
    "revision": "836a9f5af57831be928cbc477b6592c8"
  },
  {
    "url": "assets/js/15.1eaaacd7.js",
    "revision": "fb249caa5e63a81d6e90f5009c26c3ef"
  },
  {
    "url": "assets/js/16.a586578e.js",
    "revision": "c7bf11ba012df445b43bd723e263ffce"
  },
  {
    "url": "assets/js/17.21e56983.js",
    "revision": "4f858501d18362976fd5b83908cb98f5"
  },
  {
    "url": "assets/js/18.b5e3fc68.js",
    "revision": "652e713100613db79ecc25a8dafae63c"
  },
  {
    "url": "assets/js/19.6f990af1.js",
    "revision": "4a9cbcc855a9a327531acbf4aae63609"
  },
  {
    "url": "assets/js/2.bf1931f0.js",
    "revision": "689af3d3e164c52a2c38a34827b9c0ea"
  },
  {
    "url": "assets/js/20.4e9fdfab.js",
    "revision": "222189425fe189c0355f9d48c9b8a733"
  },
  {
    "url": "assets/js/21.1d81e6f7.js",
    "revision": "abd53427e55ed45e7296f18d383c05f7"
  },
  {
    "url": "assets/js/22.5b49c547.js",
    "revision": "c45d2f19ba889fd6ae879a444c0bef47"
  },
  {
    "url": "assets/js/23.9d548ed6.js",
    "revision": "a313b47ba91eed2e66d360934ebb320c"
  },
  {
    "url": "assets/js/24.3d30e8a6.js",
    "revision": "895f0e574cec601fc0417556ad65440e"
  },
  {
    "url": "assets/js/25.6b3f159a.js",
    "revision": "542f26dac1ade30be85644776efd6e31"
  },
  {
    "url": "assets/js/26.ae277b3f.js",
    "revision": "d702eb3f3d85998638798f6389d8f869"
  },
  {
    "url": "assets/js/27.a24c8ca5.js",
    "revision": "164b79c4ba119da8a7e0ff05cf86ab83"
  },
  {
    "url": "assets/js/28.59d6be8c.js",
    "revision": "c3a7cf9af5a312ed628a09842c1e2886"
  },
  {
    "url": "assets/js/29.eae704c3.js",
    "revision": "75de7327bfbe4ca30773e7f3776c8a50"
  },
  {
    "url": "assets/js/3.b988f6d8.js",
    "revision": "c0d1c8fb0bbbcc243c553ade60476f03"
  },
  {
    "url": "assets/js/30.0de13503.js",
    "revision": "87d9cb8ebbfdd6dd89956bd64b58be8b"
  },
  {
    "url": "assets/js/31.41ac6a09.js",
    "revision": "a213abb82724322b2c2b315f0b0d993f"
  },
  {
    "url": "assets/js/4.33f1fdef.js",
    "revision": "4ceda42c671570f79bc62234e286bd38"
  },
  {
    "url": "assets/js/5.fe88a6ad.js",
    "revision": "306a26c6b492fd9f42cb2f77beeeab73"
  },
  {
    "url": "assets/js/6.816f1983.js",
    "revision": "fd35eb8ac67b85c8be756580da7aaef4"
  },
  {
    "url": "assets/js/7.3e7e4fb1.js",
    "revision": "f6018cf29c87d2ef8ace7ec3ed22b35f"
  },
  {
    "url": "assets/js/8.cdb38aff.js",
    "revision": "ad3412781f3e8cc3dabaef0dc9aee5e2"
  },
  {
    "url": "assets/js/9.6899f2e1.js",
    "revision": "3c5e1e9c2db4f4c9494a977bf63d2421"
  },
  {
    "url": "assets/js/app.f14850e2.js",
    "revision": "fce73b3090ea5649c363d02dd6210285"
  },
  {
    "url": "es/index.html",
    "revision": "4076f46778ac36350cf6eaedcc62ae06"
  },
  {
    "url": "es/patterns/index.html",
    "revision": "c72c15248c73bfd81bfcaf727ed6531a"
  },
  {
    "url": "es/sponsors/index.html",
    "revision": "4efdd0021d2ca034daa279c198294c70"
  },
  {
    "url": "es/translations/index.html",
    "revision": "a887142ef57a5f32ae85b84711ab9722"
  },
  {
    "url": "es/useful-links/index.html",
    "revision": "ba08a06349b87c5a8d5548fdd532b3e0"
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
    "revision": "4fefc8670ba71974f1bccfdf5138d9d0"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "3ba57c838048112a0883535adc86a042"
  },
  {
    "url": "ru/index.html",
    "revision": "c5a7a0488d67ed61a314c67aba787f4b"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "67e39c6232104bfb271b738196845f3e"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "27c2b45b6bc034e17b8a9bd8adb43d1b"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "d83dee7c215a6af07f1e68f4ede16546"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "dccfb9d6f2d3178d6c50eff255192c39"
  },
  {
    "url": "sponsors/index.html",
    "revision": "fb270cab26260e1491b574e814441fa6"
  },
  {
    "url": "translations/index.html",
    "revision": "2b8fb994bed9bb3a7d3da9134e28d636"
  },
  {
    "url": "useful-links/index.html",
    "revision": "71c808ef57d722965b78204e99a81478"
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
