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
    "revision": "e29e0cc04fcec0a5494cfdc5a899fead"
  },
  {
    "url": "assets/css/0.styles.0e517e83.css",
    "revision": "335dcdb0ea7608911c6b23ec8e8e35ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3d8c1a11.js",
    "revision": "cb4716e6959eab177ca826c4db198436"
  },
  {
    "url": "assets/js/11.9649824a.js",
    "revision": "e0571b7388cf2f54bf8b5ca0e177cac7"
  },
  {
    "url": "assets/js/12.7005e1a9.js",
    "revision": "6322fad0ff2b2dbf33e56895116a1d49"
  },
  {
    "url": "assets/js/13.c79acc99.js",
    "revision": "fdc4dfe42e8a0752bbe683630c77571f"
  },
  {
    "url": "assets/js/14.369883c1.js",
    "revision": "e74e8e6d0c8aa60214207c666fe9d60a"
  },
  {
    "url": "assets/js/15.2a8a1bdb.js",
    "revision": "cb0374c4f794ee39d910379bde6d0f20"
  },
  {
    "url": "assets/js/16.0ca563b4.js",
    "revision": "16d007cade855b87434934decd3541f7"
  },
  {
    "url": "assets/js/17.dbb0f0a4.js",
    "revision": "0484f6efde4206793032704824529e03"
  },
  {
    "url": "assets/js/18.8e6e46ff.js",
    "revision": "8ff343ab5a29371b77d9bca4c41fd0a2"
  },
  {
    "url": "assets/js/19.d142fe1d.js",
    "revision": "9f5a498098442706bcacc52e867b452d"
  },
  {
    "url": "assets/js/2.1fa876cd.js",
    "revision": "2a3ab34c9882df7b5f33514a035c5972"
  },
  {
    "url": "assets/js/20.6cabed5f.js",
    "revision": "a1a10d11abd7e72aca9911bcc2aefec6"
  },
  {
    "url": "assets/js/21.3f355ebd.js",
    "revision": "ec41f50cd5f8e89b449412774c113ad8"
  },
  {
    "url": "assets/js/22.811561ad.js",
    "revision": "ecd12260c2797bed6bce32980b3140d5"
  },
  {
    "url": "assets/js/23.e8b851b8.js",
    "revision": "77676e3c56973469b95dad1f98598982"
  },
  {
    "url": "assets/js/24.61154ddb.js",
    "revision": "26ba37b728af225585157fa3e0b03282"
  },
  {
    "url": "assets/js/25.77264192.js",
    "revision": "ba28089a6d99cc695f7bda28c910ab65"
  },
  {
    "url": "assets/js/26.f2adf790.js",
    "revision": "a0ccb0fa69276f80016b997e2e11992d"
  },
  {
    "url": "assets/js/27.4ac9b183.js",
    "revision": "87454bd240a2e5ed4497a8a2c422359e"
  },
  {
    "url": "assets/js/28.40e6411f.js",
    "revision": "14a5848fceafe36ec535f8b6174597ab"
  },
  {
    "url": "assets/js/29.0e3f736b.js",
    "revision": "2745847bcc9fcd6af4b0184274448c3a"
  },
  {
    "url": "assets/js/3.c59698a7.js",
    "revision": "69a45f16aeab521ee3f123930eb5ce64"
  },
  {
    "url": "assets/js/30.54e8e3f3.js",
    "revision": "6dac42d60b5b296ba385b4c87e04d22c"
  },
  {
    "url": "assets/js/4.ec722621.js",
    "revision": "0d3d99448f915b0c378de44f53a290bf"
  },
  {
    "url": "assets/js/5.19cc6cd7.js",
    "revision": "7a4faea3693bbac8335d25ecfc0968df"
  },
  {
    "url": "assets/js/6.a7cc27b3.js",
    "revision": "3edd837e41254b80aab0b112367885bc"
  },
  {
    "url": "assets/js/7.b2376c9a.js",
    "revision": "f2f906a86e57d018c9bd6f75cf288e31"
  },
  {
    "url": "assets/js/8.8b119f96.js",
    "revision": "45942bd58d3b002098c6406c395de016"
  },
  {
    "url": "assets/js/9.c577e3dc.js",
    "revision": "3dc65255d6b697276afbb2462bd106e0"
  },
  {
    "url": "assets/js/app.3312a7c6.js",
    "revision": "6c119382d331072fe68dbc4b788d28bb"
  },
  {
    "url": "es/index.html",
    "revision": "bc1aee2240b12027c89e74e0fca15573"
  },
  {
    "url": "es/patterns/index.html",
    "revision": "6c1434c07deaa6e3ba546d67a8ff4d68"
  },
  {
    "url": "es/sponsors/index.html",
    "revision": "08cf78d24a58f3dbd7456f4ac9885a5a"
  },
  {
    "url": "es/translations/index.html",
    "revision": "d986d13d5f4d61b647e7f56ac6f26fc7"
  },
  {
    "url": "es/useful-links/index.html",
    "revision": "a10176b302b5a45b3a31b491f23516e5"
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
    "revision": "8c5ce51fd0bb8efa7970cae83485ba63"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "5e14eca588ce75b7b5dae15956adc0ec"
  },
  {
    "url": "ru/index.html",
    "revision": "9776bb655d3c1f3a224389f9fc5740cc"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "793cd7a99154896a2ecefdeba870904b"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "d9bb6785a010be88c479636f0c668724"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "8634834cc8c75c85f268a7df3cabf082"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "82eba2926b4f297854b63226b90ac2e7"
  },
  {
    "url": "sponsors/index.html",
    "revision": "f0822eb07549b82a1d83410a702e2d51"
  },
  {
    "url": "translations/index.html",
    "revision": "1fe01be54127bed47e8f86dc7b29805e"
  },
  {
    "url": "useful-links/index.html",
    "revision": "b1b678b84180b0fefb907b16362f6e08"
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
