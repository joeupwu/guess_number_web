'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "259ca08b98ac3bf6f50c21def2224ebe",
".git/config": "c38544a6ae00860dc0ca20c7e874b3a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b41cf909f9fa6e3b81876bcd44a35a57",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1789072d62ce4f4d7b57ec67d6bb8888",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34c5c7bfa566a02bd434b2aa093ac980",
".git/logs/refs/heads/main": "0c2fcdd7557d04250ebbb57e366b9847",
".git/logs/refs/remotes/origin/main": "7799764e7ca84ed5f7a2d97aa65de5e3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/22d25c21211ecb56f8891726f9101e9ec135b1": "835ef3a7204ca5c2a74d105a5cc132b8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/30/41abf8b2c9c5624e3cf21fc1d1b95c290089e9": "198b9187aad603522658b16bb018c980",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/62d93d45f239c03451f1352a36faa87defb8e4": "3acdeae1e06d55c9ea89080721a00724",
".git/objects/39/d8576f09c315ab38f07a8515f9dea4b2305edb": "c3f54ee83a8610160c4ae72a062167ef",
".git/objects/3c/3f82911c1535c780983f1fc6b7c5e50b515d83": "6accc8f7f590e2e0aba27b26f6911e01",
".git/objects/43/87f4e9c039ca59197a51aed4ccb90621341752": "8d187a976c152d4676058cbd3642582e",
".git/objects/44/308b8bed2ffdb1e93206e1e40fb68a515c775e": "878c1c9790a905db3a6fc2978be96e92",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c376f7ba7894d6f13a781987ca5cbc37174548": "4edf169d14b518cacbe6b0c971edb226",
".git/objects/52/f04ae55f98d25c7e71d537cab12d6ca769a3a2": "3b6ffd835c739913f4352d06865021eb",
".git/objects/60/a8e08be58105fe36efa0adcfc2f3d61b692162": "0a8466ff7cfa972290763aac90436f9b",
".git/objects/67/d728f06691fc7dc45c03a00f3c33b46f0fa99a": "da50ff950f64280329f8688097710185",
".git/objects/72/8f6491eb13d86b9cdaeab9e984c086389a796f": "4e0ab7a5a64802d22784e9b461876cb1",
".git/objects/76/e15488e97128c0df09b922b79fa652cbd9faf8": "471b1581ac988ccc65dda839894a833c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/c49f3b210d95837d114f32abc232662e12df40": "46708196990f4b60fa1427649426c6df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/25d20f5d22640c0e37a4db22cf28fa2e29d3b9": "4d5c3bcf135c174d17e98f805fb50ed2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/635a4c564d3df8ecc6847b471b53f32b9b8a6b": "690e8f72492f20d3aaf94894d21bf430",
".git/objects/95/fbf0f9097c0dcbef14b6b0c6f7ad3d842d2e5c": "d7b4f692fe21be335e5724de216243f0",
".git/objects/97/e29a6643d689acbd84945e55f5af71a2bc1561": "2b6683dddc5e0edcaf0ef9e1f5f895d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d509aa5e1f426c302e1307932ca8a6b9b9ad64": "527d9d3c17da712b2089b5c5d64b74ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/f600505e14eeaf590807b2d70844e9c1dbb745": "028c4bfe4cefeabc47ec98ab9ab7f235",
".git/objects/c1/b4dde3a40da87d8f81ea4589122615da67d94b": "ee5bd146e4758820181850ea1c40e0d3",
".git/objects/c6/7b356e7db35f631ee84285df3122b33c2d6082": "719554910bfe55ec2bce28ee9e76c67d",
".git/objects/c9/fb1c30c1db66f81f95a817f829d71583f4cfd1": "8446092a79610a92cfcc533a01c99f88",
".git/objects/d3/285d0ebdbc95c4b9732906d5df31808f7ab119": "817d169ee694c80a18e006546026fa00",
".git/objects/db/da4353064bf5fd66d7efa4838f17fa07fa425b": "826e842121c184027be12571c2d5d4d0",
".git/objects/e3/b566ec82ac947ae811e7642bba8b20620cb717": "b156741e6a312820962ee671d14cb4d9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/472503b0476e3b4949efaf2d42cf31143f7a00": "076003d93354c8eaa3dac6f1d6b11f36",
".git/objects/ff/86e717800fbf4a99f318ff276e0aff16bad493": "e12a8e5970c14e204de141ae2a797d2c",
".git/ORIG_HEAD": "41f624509259ae336b82d1061b77fbf6",
".git/refs/heads/main": "aaf0e7d7530d22d22c9827e32a7de086",
".git/refs/remotes/origin/main": "aaf0e7d7530d22d22c9827e32a7de086",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dbcf03139b93c7edcc9072e2b9eab114",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c8d280e969b0f96f1b16df1f978dfd67",
"/": "c8d280e969b0f96f1b16df1f978dfd67",
"main.dart.js": "d879d23142a72b9cf89b88ffdf168f71",
"main.dart.js.gz": "d460a5f222223162486174d0380aec4e",
"manifest.json": "368f0a72fdf5b16612701a1588155d1d",
"version.json": "46637545a0f168e6c4e98c659ab065cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
