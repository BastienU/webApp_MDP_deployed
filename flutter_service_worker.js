'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27eef97d55e818f0c7db7fa40a28b298",
".git/config": "8f0a01ebedfa2de97f0c7c57f9e8a664",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "f7ff1445f0f5229df23a18bcb35dc820",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b7e3c11c20f5521f6ae1b41ca3efbd2",
".git/logs/refs/heads/main": "1b7e3c11c20f5521f6ae1b41ca3efbd2",
".git/logs/refs/remotes/origin/main": "253822c3dc1079cb34b00a41707519f1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/19e3b90d95152ae6dc97caf0eb2f957b6b96a3": "92bc67ca2e1b01d8f0c207ebb1376360",
".git/objects/05/8295979cbde393b5444632cb0de21f2160cadf": "018cad8f883f69635b161ed9671862cb",
".git/objects/06/2605568a0ab9b61783a657ef777bd7901ecd1e": "182369549ac32ad47ea9a345aa447227",
".git/objects/08/020a9a7e05d7da12e651d541f3094dc33fceef": "c473cef37408b91a497c0d2a358ae466",
".git/objects/09/5920b21350ef83c7f8405cb7728a689d3b3e53": "46faaa43d689187999bfde8534470dfb",
".git/objects/14/825dbd5d9726ff09ad3e5a51f14622eb86f745": "82ad1946b0c47b3b9b48d273d7a31a3f",
".git/objects/18/c68ee880cd9ef429d732e5438ec73e7150bef1": "71c137d8d6fc3d9f5a701d34215632b7",
".git/objects/1b/5c31ab9fc7ad2aa99dbcabb57a1383765d9e50": "6653aad449349ede0834149b587b2881",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/a9448e4dc6b4e5c60aa6acc6b587cbef0d72c6": "4fb6edfb5c2cac45c97649d8f5bcf2c4",
".git/objects/25/36201ab65cf2738f7e29fe2ced25bdb468701b": "3e01ca674b9ccdae3c9ac80ed01ff09a",
".git/objects/26/1d4947718348b1144369a7a2424c36b2d74b40": "2b487051e5f719c346fbda80f049e3b6",
".git/objects/27/e552345feee9a9cdd495f021dd08a93eda1617": "7b32ea29f3aa892d7c9532b6fea96f5a",
".git/objects/29/3fd2d83ad32f9ef61c6eaca2f161ab64aabaa2": "d9fe627baf82af80936d7d51138386df",
".git/objects/29/891eee914f4b5c09cc147094b36e6de8f1ad24": "10c38b8a17b8eedf0b622107a548ff64",
".git/objects/29/942f8344adc68935218cb871f5eb7da513a4ae": "0b717fb39524da7a64ba0d44286b72a4",
".git/objects/29/c721817e1e5e84ffb7bf6b640d26cb4edaa965": "8c0ff33eea7fdd1822eaecc2ca1965f9",
".git/objects/2a/35c511fa20898628de4b944c47175d0142c069": "9c667cea1004c66c1264c05f2c5dd158",
".git/objects/2b/5947d1f97460c4b9e1007edbac61ff32c157d7": "69f7e0a89c4b93c09007d48ed772707b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/04cd649440af84154cc4ee06169bc3170d95c6": "3454d9a67b79e711db6ffb5d46a83859",
".git/objects/36/7cd431fec1fda087e820941836a37354dab43c": "6d2fb0067f35ff131f934f269a33f233",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3c/ed52d1ca62b4fa29f366f61f90aad1fc511681": "919593483fc9c8825ad60ddc046edfc4",
".git/objects/3f/ab136c77bbd4239e59ff2b22fd7f40c62b7a2e": "200bdf2e816ef4878fabfa0a3555ebd2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/97a60937d13fb4fca65b19656a86df001d12d0": "f3d303338041c1d16ab9951c9d855552",
".git/objects/43/9c376f460a22b163d63eb9763db86f4b4de6bb": "5584bd0f62837822d184e32ea20784f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/a42792e21cb0527a68af7c3067abae405af0ae": "0b6070d414b5f0d4c6814a9cc8381e24",
".git/objects/4d/1abbab7140a4993e343564f335947c5e88edb2": "0727429a510d5ad40466721de6ae1adb",
".git/objects/4d/68f6efdad2ce91df8b9623261571a5cbd5e307": "319561fc16f6b4b17e4028c29d374695",
".git/objects/51/65005c380a542f0de7927c0795d592d2fbe512": "9639b2dc3457aaac4e9eeab3d3382132",
".git/objects/52/c58f9cb62711ded2b6375cba9060fcea72d72b": "8c16f00fec69c109c2b09dc06d918d5d",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/00a2df82fc213116e2c25a0ae5d0c9bba0b92c": "b1afa7cf390ea925232bc85bfaada3c6",
".git/objects/58/cf27f5cae3cfefa6f75751adf838163e5b8efb": "c171b500af116c85ae2371157e722da4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/a3be14e0755b642e43edbe31faa3567228ba14": "72b4dfc7cc8e83529aa31f197eadf1c1",
".git/objects/69/7ad7481428834f04c26e56e3b7ed45e4e8620d": "40928ad9d6499a5f1ce6a459bc7ce1fb",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/c82de3c7b674460627e46074b48dea4ccdc727": "a2feefc5dc982e1f16e94458210f9a93",
".git/objects/6f/886430206964407ad7ea7476edba6344dc1cac": "e41b764a46027d79395c9911e028048f",
".git/objects/70/85e1e56b82dc4076d36e02e72ff13bdfc55da7": "119090e74b62b30231cb65d45d80b6f2",
".git/objects/71/222c9adb1284ea761e02854e5382894146e3b4": "fddb20deeef4acaa03c4bbc5c9e5b3d2",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/dfad2bc52902dee5652b088b76a1cb33334dab": "02ad3175b1e33cc516011449eb568bca",
".git/objects/75/f4b4c055ec5f1c9b667d6e58bcd9775ad24977": "edb22868b45bccb4dcd1ee1a9dab763c",
".git/objects/76/5b484e6c4acf4ca714973ffe2cba6db1b0aaae": "0660b8fa8beb2ff68947a155c260316f",
".git/objects/76/ffb66a085a063499437b951d49bbde01596d85": "8f1fce0ef1d5e7ce375c9aac1f2e4d41",
".git/objects/77/7cdd8d50914fc6b3ade63502eb5df2ff06deb9": "10202756acb319799c9c1262fd0b6d72",
".git/objects/7f/041d37ec95e27b37a3cca5e8333b28582505b1": "502b64ef2b8bf1b4247c22bacc9d815d",
".git/objects/80/4bca19332fd21ce6a45d3ce9fd8980477caba1": "944a50a3b511dcae7ff2db06db2a3d0d",
".git/objects/82/c63da757485d8546f6ca47349528fa5eaf330a": "88f6c5908a9408a9483f137b17a28afa",
".git/objects/84/8734f03c5c0abdb6e973c32114fd43dbd696da": "1a9718625a06492ba95544d6736983df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1c595943eb5dceac5985b5c6ef7675e326b8da": "0b787cfd0c430e08b0c32544581f6d13",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/445c21f68c14205c98de1ee969dbefadb05109": "3cd9d734576123038fb880c581229c6a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5fa84591cd143e2bd836e924ca1b5d7e4c4a01": "c26f7b9d6c61005f47394b5eecdfd4ce",
".git/objects/91/9ab9d681ca62e17f98cabd43493b6f350fd3b7": "e7b0c8d83f01106fe1bf0112f6efae7b",
".git/objects/97/79de317d4c63388a8a204a15536eb157fef44c": "35a3375bbfb48408ffce058c568a0620",
".git/objects/98/c14ec6d555e9224a1e0611ec48144537f8f529": "43d7278c1313b1e090681c58b0888d31",
".git/objects/9a/1347194bf2bd00a709820495ad6c16dcb2cd69": "5b91bbdf0ed44f5fd68053236eb1c353",
".git/objects/9f/038251cf27aa7894788f8081cc0cb52c23cbf5": "f52be373411818d444def98f5bedfc2b",
".git/objects/a2/5dcb46dfd3d9f4917bc4a623736fe5d4ac4560": "3cc5cb0d08201c75acafb1c7bd3e253d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/575e8c85590f592b4c225e73cdc67a9e55fe24": "b5861f03d586cc6fa98e5073585c90b0",
".git/objects/ad/63eb2e18f2f07f847aee82a3dbf3dd97052478": "b6d06679f856e1779827ea24eebcecce",
".git/objects/b0/3e6ad8cd129a229cfa0811f5891fdedbf24bb1": "d4a84fcf9ae85b308d2245c63a7c8c7e",
".git/objects/b5/07ce97820af332be04f3b6cd592287e6f296e4": "f94b6e00e6de787f628acd13d998588b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/689a33daeadb08de6eeea06bcdabb014e00579": "7472ffdf11b1c47579bfc71302c50fe2",
".git/objects/bd/46367444042804cd80f21e8e56b9e2751ed686": "f045b7d49987bf52ce603f18b741a0cb",
".git/objects/bd/62d1e2f0adc4b4a76851dfc19e0a4ce133c707": "d47c6d0fc3a40dcf63d962a5d50310d1",
".git/objects/bf/e4231f220a9aa9f07457b4f8ef9c37172d7ac5": "b76fb8a5e198684586e5a1251e01e83c",
".git/objects/c1/8a5ae78ff975b97a3a128b220cad458698d535": "371a2527e18a1be80bb12f9375931669",
".git/objects/c4/22cff6657c02a4a2d5025d0330eb08be1ba121": "95c208889bf5c31b5af2180c227b0083",
".git/objects/c8/113d8d7c55fb0918056fdcb3179847e66af385": "77cef6fda09154345c7593ece6bdef6a",
".git/objects/c9/d78b311f9dc86979592864936e774a569c8cee": "ad848e1d7e98dee682ad87eee80da57d",
".git/objects/cd/3a35d051486bdedce458aa31f414bdd075e4ab": "8bb846aceef78cdb3b7b653502756430",
".git/objects/d0/4d66fd0bb6d5be10b45b6896f5a8bba92c3145": "f3dbd32678bb8c15f19eb2c7dfc981c4",
".git/objects/d3/8c6cc3c7a711241255fadef2aa143028039f1f": "2faf925c724c246d8aec3a1e13c2545d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/97d6bd4153406e073d0153015b6d5009127881": "7c10e654bc8d60e68d66258fdeba6a69",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/9069c80b5574ecb990e24f1d452ebbc4f1def4": "c20db9940906fe69f1258a0f27eaa7b2",
".git/objects/de/dda42a12aeaa91d8764971f079dc62a7637fe9": "aa99d92cf7f2d286a8a107f124bded3f",
".git/objects/df/49c789ec5a697b6e412ececaf7cf79ef5de72b": "816360e86e64682fee45ccac38f304a8",
".git/objects/e0/c4987f365a7de01292d43423bacd9c725bc64c": "5ce66fe5ff87540bd8e1d17a87e4826b",
".git/objects/e1/5ac2aad560bfbd2063c17d3a563db9d4f7fa68": "cbf393fbdd47807cd2f04a050b6fbad9",
".git/objects/e9/8a3a4147ea664050223dcb3b8972b8f1e23c8c": "a770ce022c43cfa62e0cda3bedf89b21",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a1c84e27b9ba7dc69363f8e528cf8588e63ea9": "b384527f0fc1e16f7e1f560a114d4b4e",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1a41eda18613b21fb3d69a16ddf66305efe035": "0cc3392b504d6ca13a4b1ae9ea00f3e3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/4a43eb0bf66b29a89149fefaf8632175b46517": "5d35cd938e9ecf02f7c7a9b2b42fb400",
".git/objects/f9/6e6b722ee999b768ba1fdb31563093a9577838": "f644cb0a8852d3bab8db3106bb19d12e",
".git/objects/fa/b1edffb9b782551a69d58aa5fdfa3519300eba": "24d947c09daaace5cb7826515a52ea34",
".git/objects/fc/e73c3484a1f2a28bf59923ba44f0cc02ed88b0": "713ca76d92c615f0c13fc2a9c6697a88",
".git/refs/heads/main": "efe2f5107bf4870a37bc1038c48dfe41",
".git/refs/remotes/origin/main": "efe2f5107bf4870a37bc1038c48dfe41",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/CaviarDreams.ttf": "fd2d0a4d699ed411275cb14ef35dec7d",
"assets/fonts/CaviarDreams_BoldItalic.ttf": "b2e51669a1c906b13af71f3eca401444",
"assets/fonts/CaviarDreams_Italic.ttf": "b0ee942b1bcb053fb13f4173d76c8fc3",
"assets/fonts/Caviar_Dreams_Bold.ttf": "c32e6db748bed398b70c105d50b52ec7",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/fonts/Nymphont%20License.txt": "08e271f15ebaf4640e43e9f7f91777ad",
"assets/images/download_AppStore.png": "81ff693f69e69b3b46e67fb831cfe537",
"assets/images/download_GooglePlay.png": "d741357bf94bf2d0201e61faf77617a4",
"assets/images/inspiration1.png": "a181827170bfae83c27803aca5d61cee",
"assets/images/inspiration2.png": "5c8782493f8100b9f4b16899e682dd07",
"assets/images/inspiration3.png": "1572819543a01a5781e445b40e5aa091",
"assets/images/inspiration4.png": "77db405a69b6b72d9b1d8f03445013e4",
"assets/images/logo_insta_white.png": "00a6bc0f8fc304d4464b8e85f29fc68a",
"assets/images/logo_ohmytag.png": "ffebcafef60746c9a660d27fb86b1ac5",
"assets/images/logo_ohMyTag_footer.png": "1f660f3b0251162bec1b4577f2dd2ef0",
"assets/images/logo_ohMyTag_white.png": "9e76cd60c2c4bc83ca9ad97d0163f7c8",
"assets/images/main.png": "8c543cb2ba0cb943f1e80009b3dab88c",
"assets/images/promo.png": "7ca52c313a4dc62fbd5f79abe14ab952",
"assets/NOTICES": "7bf2f25beaa2ddffb5b42c2d98dbd452",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ae5ba39ba5f546b0d4636523aaa85131",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c766173d8757ef15c24e550d4c528730",
"/": "c766173d8757ef15c24e550d4c528730",
"main.dart.js": "38dfda176312d17842caf303f00ae1b1",
"manifest.json": "3f9f46d43b9a25da68f5dd4800d5ed6d",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
