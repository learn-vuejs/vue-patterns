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
    "revision": "3689c761bb16afb0254bcaa61645bac1"
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
    "url": "assets/js/10.fd27ef2c.js",
    "revision": "85bef50a64fad8cefab1cc3634e6ad7f"
  },
  {
    "url": "assets/js/11.f64abe10.js",
    "revision": "358b5d12b14c64dcb88a9b0da9ba319f"
  },
  {
    "url": "assets/js/12.8bb062ed.js",
    "revision": "e482aeaf15c778b7ffcea4367466c52d"
  },
  {
    "url": "assets/js/13.ea4eb0bc.js",
    "revision": "7c879e891f9b58b7da3701a20c5065a5"
  },
  {
    "url": "assets/js/14.f1ba944a.js",
    "revision": "2c3d2a40e107b4245236d03a5e9bd6e4"
  },
  {
    "url": "assets/js/15.f605a839.js",
    "revision": "da13c45a7d940af0ea0a3c5810d53696"
  },
  {
    "url": "assets/js/16.2ccf79bd.js",
    "revision": "1833fd634a808676bcf39231a99cb348"
  },
  {
    "url": "assets/js/17.8d143751.js",
    "revision": "81375c298d26bcdc2535afb2c5fe4f6b"
  },
  {
    "url": "assets/js/18.d81f59e8.js",
    "revision": "5de60028f9385e34f6ff25c33169816a"
  },
  {
    "url": "assets/js/19.5781fa80.js",
    "revision": "a07fcdfa5163815908334bd925b15b3a"
  },
  {
    "url": "assets/js/2.36339b81.js",
    "revision": "9532d49c63b95e6990e42b55f0d4b069"
  },
  {
    "url": "assets/js/20.9f2d9ede.js",
    "revision": "231938b9d38e01ccc43d137af69a87af"
  },
  {
    "url": "assets/js/21.6d20527b.js",
    "revision": "8faf7f1b6fa87b943dc5d27e7ac0155e"
  },
  {
    "url": "assets/js/22.7aa70d79.js",
    "revision": "b6dbf6891e07d1053ef0d1a6133cb87c"
  },
  {
    "url": "assets/js/23.6d836cdc.js",
    "revision": "71412bfc4a7a5532c42f7863a1b20d30"
  },
  {
    "url": "assets/js/24.a901ffb0.js",
    "revision": "8e24d84231b0047999de039069073c54"
  },
  {
    "url": "assets/js/25.70e248da.js",
    "revision": "9619751d0aac14c58cfdb7cb37c10453"
  },
  {
    "url": "assets/js/26.7e2b72b3.js",
    "revision": "30c5ebbe3e642dbd52f63a3d98691785"
  },
  {
    "url": "assets/js/27.0a761616.js",
    "revision": "2acfb772b6b75e79d7de68a8eeab88c9"
  },
  {
    "url": "assets/js/28.37ead664.js",
    "revision": "f800addd09a7d70c0eb56d56763f62a2"
  },
  {
    "url": "assets/js/29.f18b2ea7.js",
    "revision": "c5d1ad3499a831305c95e4179c7ff873"
  },
  {
    "url": "assets/js/3.5211be82.js",
    "revision": "45af6f477a31c2708001ad8a5cfc0dea"
  },
  {
    "url": "assets/js/30.8e3ba276.js",
    "revision": "6d7db6c06f7b20b9e06ffc789425f2cf"
  },
  {
    "url": "assets/js/4.5b0ea423.js",
    "revision": "1e10b7b5a3d139f2919f4ac506c615be"
  },
  {
    "url": "assets/js/5.8968eec0.js",
    "revision": "3a72f88fe97ed2727ea15e14e1f6b362"
  },
  {
    "url": "assets/js/6.d07d2b35.js",
    "revision": "f14d78a55fbfb13fe70eda17597d89be"
  },
  {
    "url": "assets/js/7.c9fb1eec.js",
    "revision": "af784ec10613a5126cc99d1b153cec27"
  },
  {
    "url": "assets/js/8.9a6eb1ba.js",
    "revision": "0ed2b54e9ba7aa8dcb72ca986060fb28"
  },
  {
    "url": "assets/js/9.3189182c.js",
    "revision": "b8e0ff140317aa55a274f82729c1532a"
  },
  {
    "url": "assets/js/app.2bcb723f.js",
    "revision": "495734c94b1b53a1cca5d5a0970f7463"
  },
  {
    "url": "es/index.html",
    "revision": "3efc36af621128116b23f077d2537822"
  },
  {
    "url": "es/patterns/index.html",
    "revision": "2e87ad9cadd80d53a4b0b5e0c697611c"
  },
  {
    "url": "es/sponsors/index.html",
    "revision": "b22ee3ab5d43a26ab5f6ebca829e4f8a"
  },
  {
    "url": "es/translations/index.html",
    "revision": "6234dc74b21865c62c6c98a924f71a70"
  },
  {
    "url": "es/useful-links/index.html",
    "revision": "95fe780257900c3ba833e8c011aceb58"
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
    "revision": "5240f553bbdbbe0142cafff6019a5408"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "4a8d572a4e6286b30b581eda6bb75490"
  },
  {
    "url": "ru/index.html",
    "revision": "8c1be0d664f97874bfbf9e3e16173b05"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "065b6c14cc98eca7094ff008b13eb4ab"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "313bfaf458acb6acf0b4f5ff166ac56c"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "b4aeff8347ab2f245db7a2d8ad4a00ec"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "6bbbeb8be0fe84992c955c2ae7223cb1"
  },
  {
    "url": "sponsors/index.html",
    "revision": "bbd1013aeb55cde37498771a764945f3"
  },
  {
    "url": "translations/index.html",
    "revision": "e4939496228344a7a065a2a80f07c2db"
  },
  {
    "url": "useful-links/index.html",
    "revision": "d24cac51887a5e6da6dbdb53dca14bd0"
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
