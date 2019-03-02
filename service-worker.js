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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d0131c99e3b90de1bc59d8793665254"
  },
  {
    "url": "assets/css/0.styles.55dc9c98.css",
    "revision": "a9223c7da876d12e7a6a6cedf077a4c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5c9fdc8e.js",
    "revision": "7335dd79cea4654e85316d881dd738e1"
  },
  {
    "url": "assets/js/11.15c9e816.js",
    "revision": "726072ce70cf4db8650c7295e8770575"
  },
  {
    "url": "assets/js/12.e95a0cb7.js",
    "revision": "b7c873ee325bb8f76791621718a92cc9"
  },
  {
    "url": "assets/js/13.e4424433.js",
    "revision": "3343ee29c31bbfe8ad6f7d47361e9689"
  },
  {
    "url": "assets/js/14.3e2827b2.js",
    "revision": "7fc28f70b9af540d047d50c0f6c87047"
  },
  {
    "url": "assets/js/15.08b6950d.js",
    "revision": "0e2d229b346611901d7300ffc460454f"
  },
  {
    "url": "assets/js/16.8ada5f5c.js",
    "revision": "89a28fdb63412a085b10ad4070915d5a"
  },
  {
    "url": "assets/js/17.4078497b.js",
    "revision": "31fc6f397409e51b19ca18f91fb83c54"
  },
  {
    "url": "assets/js/18.61743a08.js",
    "revision": "8c882873ba270b52587079bd867a12c2"
  },
  {
    "url": "assets/js/19.b7376697.js",
    "revision": "ee5d8e1133b6f218ad6435d5ed9f6bfa"
  },
  {
    "url": "assets/js/2.178aa6c2.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.c3755eab.js",
    "revision": "bc000c529d4955793e16ef4dea41e5eb"
  },
  {
    "url": "assets/js/21.20a125cf.js",
    "revision": "b238aaf84478ce4733e2a1b40493f5c4"
  },
  {
    "url": "assets/js/22.afe7e00a.js",
    "revision": "b082763c893379de5ddcf24366e19372"
  },
  {
    "url": "assets/js/3.733b4fc2.js",
    "revision": "3e2946e5d44e5d93f2cb5a8bf8510bae"
  },
  {
    "url": "assets/js/4.98d3bb88.js",
    "revision": "566a3f4576cbda10a33b041d1f80a79f"
  },
  {
    "url": "assets/js/5.8c27a8c0.js",
    "revision": "52f587d3083b65bea6d3187fd1929a66"
  },
  {
    "url": "assets/js/6.359d7ddc.js",
    "revision": "1e07b267f2b90e68ceceba1dd50569d1"
  },
  {
    "url": "assets/js/7.83d4111c.js",
    "revision": "118574825d28d0bafc3109e266500e0b"
  },
  {
    "url": "assets/js/8.6059f8fb.js",
    "revision": "5594f14e1abb81cdbd3b9fb8afa4b779"
  },
  {
    "url": "assets/js/9.723a401b.js",
    "revision": "b20ea851a91da325b77b2e2660719d9c"
  },
  {
    "url": "assets/js/app.f382bb24.js",
    "revision": "58248c5d4ad852ed021969fe0b704258"
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
    "revision": "562500125945e03f7c7c278f9b3fdf77"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "99a1ce975ecf600f6f6c6bf4333eb259"
  },
  {
    "url": "ru/index.html",
    "revision": "4d6edf2a849042d26d8b62d8dcd8267d"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "4cd812e74262482a01982f79aeb92aea"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "2e1f27125f0d89bc6299000693f2d284"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "5423bba1e0333cd36ae0979104f5a406"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "c09894ad3936b735667dbac3bfb088f3"
  },
  {
    "url": "sponsors/index.html",
    "revision": "a7b43d998f7205531325422aacdca27c"
  },
  {
    "url": "translations/index.html",
    "revision": "979e3bdafe75a9363f477c4776b73a2f"
  },
  {
    "url": "useful-links/index.html",
    "revision": "480c956d6a9a71373f9b393fcf92652b"
  },
  {
    "url": "vue-patterns-hero.png",
    "revision": "2a63731bd05e1fad9cbd8a0834b46858"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
