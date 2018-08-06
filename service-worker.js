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
    "revision": "25b5f186e0501c9a03fde742db47753a"
  },
  {
    "url": "assets/css/0.styles.a3e46cac.css",
    "revision": "9ef0b64d28ee499977311b72130ba5b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.189cf64c.js",
    "revision": "6094fa20afb192b234940529cb3e9a9c"
  },
  {
    "url": "assets/js/11.15c9e816.js",
    "revision": "726072ce70cf4db8650c7295e8770575"
  },
  {
    "url": "assets/js/12.880a5c6d.js",
    "revision": "4ecfc09403b91e2f6ffc4c2c358baae0"
  },
  {
    "url": "assets/js/13.a2383139.js",
    "revision": "47fd5c83e696b4c264032822e87d6cd3"
  },
  {
    "url": "assets/js/14.847f2e54.js",
    "revision": "5e870545b88a69a53c4b20bdbd84b9c7"
  },
  {
    "url": "assets/js/15.7f2bb7c8.js",
    "revision": "8ddbaf62ad1ebf646412c413a6a3ce41"
  },
  {
    "url": "assets/js/16.99bbffd8.js",
    "revision": "3ca0423cab3972e089e126b06f89a050"
  },
  {
    "url": "assets/js/17.ec48268f.js",
    "revision": "a74323bababf23fc43edfd67b83e88e9"
  },
  {
    "url": "assets/js/2.178aa6c2.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/3.c64c98b2.js",
    "revision": "8ccb5207046e60dbef9db471cd978924"
  },
  {
    "url": "assets/js/4.80b2d0ce.js",
    "revision": "a178b20c78277ae93e2da151bd14a9a3"
  },
  {
    "url": "assets/js/5.0e8fc0c2.js",
    "revision": "1832c215430ee8cf030c22afad160aaa"
  },
  {
    "url": "assets/js/6.5a2ad519.js",
    "revision": "8e8d761b74670862784186e756a6a370"
  },
  {
    "url": "assets/js/7.88ebafa4.js",
    "revision": "118574825d28d0bafc3109e266500e0b"
  },
  {
    "url": "assets/js/8.e0db172f.js",
    "revision": "5594f14e1abb81cdbd3b9fb8afa4b779"
  },
  {
    "url": "assets/js/9.192e00d8.js",
    "revision": "f28a38c977363cf35e4c20e652db9997"
  },
  {
    "url": "assets/js/app.8ed7df3c.js",
    "revision": "cfab3dbcd299dcd18e7437a6870205e4"
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
    "revision": "86e7d5cd797c221357cd5089c5d63324"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "f26bd8df4dcf970d3089ae8a6bcc834a"
  },
  {
    "url": "sponsors/index.html",
    "revision": "21ebf4125cc5c72feeac7a62cb72621a"
  },
  {
    "url": "translations/index.html",
    "revision": "db90b473a012c5a31273d4f6bd04be6e"
  },
  {
    "url": "useful-links/index.html",
    "revision": "63056a300308bc827cdfce95a2da5aee"
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
