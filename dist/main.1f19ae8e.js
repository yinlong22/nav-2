// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
//获取站点数据对象
var siteData = JSON.parse(localStorage.getItem('siteData')) || [{
  href: 'https://github.com',
  favicon: 'https://api.faviconkit.com/github.com/144',
  logo: 'g',
  text: 'github.com'
}, {
  href: 'https://developer.mozilla.org',
  favicon: 'https://api.faviconkit.com/developer.mozilla.org/144',
  logo: 'd',
  text: 'developer.mozilla.org'
}, {
  href: 'https://bilibili.com',
  favicon: 'https://api.faviconkit.com//bilibili.com/144',
  logo: 'b',
  text: 'bilibili.com'
}, {
  href: 'https://google.com',
  favicon: 'https://api.faviconkit.com/store.google.com/144',
  logo: 's',
  text: 'google.com'
}, {
  href: 'https://zh.wikipedia.org',
  favicon: 'https://api.faviconkit.com/wikipedia.org/144',
  logo: 'w',
  text: 'wikipedia.org'
}, {
  href: 'https://www.facebook.com',
  favicon: 'https://api.faviconkit.com/facebook.com/144',
  logo: 'f',
  text: 'facebook.com'
}, {
  href: 'https://twitter.com',
  favicon: 'https://api.faviconkit.com/twitter.com/144',
  logo: 't',
  text: 'twitter.com'
}, {
  href: 'https://juejin.im',
  favicon: 'https://api.faviconkit.com/juejin.im/144',
  logo: 'i',
  text: 'juejin.im'
}, {
  href: 'https://youtube.com',
  favicon: 'https://api.faviconkit.com/youtube.com/144',
  logo: 'y',
  text: 'youtube.com'
}];

if (siteData.length <= 0) {
  siteData = [{
    href: 'https://github.com',
    favicon: 'https://api.faviconkit.com/github.com/144',
    logo: 'g',
    text: 'github.com'
  }, {
    href: 'https://developer.mozilla.org',
    favicon: 'https://api.faviconkit.com/developer.mozilla.org/144',
    logo: 'd',
    text: 'developer.mozilla.org'
  }, {
    href: 'https://bilibili.com',
    favicon: 'https://api.faviconkit.com//bilibili.com/144',
    logo: 'b',
    text: 'bilibili.com'
  }, {
    href: 'https://google.com',
    favicon: 'https://api.faviconkit.com/store.google.com/144',
    logo: 's',
    text: 'google.com'
  }, {
    href: 'https://zh.wikipedia.org',
    favicon: 'https://api.faviconkit.com/wikipedia.org/144',
    logo: 'w',
    text: 'wikipedia.org'
  }, {
    href: 'https://www.facebook.com',
    favicon: 'https://api.faviconkit.com/facebook.com/144',
    logo: 'f',
    text: 'facebook.com'
  }, {
    href: 'https://twitter.com',
    favicon: 'https://api.faviconkit.com/twitter.com/144',
    logo: 't',
    text: 'twitter.com'
  }, {
    href: 'https://juejin.im',
    favicon: 'https://api.faviconkit.com/juejin.im/144',
    logo: 'i',
    text: 'juejin.im'
  }, {
    href: 'https://youtube.com',
    favicon: 'https://api.faviconkit.com/youtube.com/144',
    logo: 'y',
    text: 'youtube.com'
  }];
}

var init = function init() {
  //请求背景图
  backImage(); //渲染初始列表

  render(); //设置监听

  $(document).keydown(keyOpen);
  $('.siteLast').bind('click', addCard);
  $('#search').blur(function () {
    $(document).keydown(keyOpen);
  });
};

var render = function render() {
  //清空
  $('.siteMain li[name!="addCard"]').remove(); //重新渲染

  $.each(siteData, function (index, node) {
    var $li = $("\n    <li>\n      <a href=".concat(node.href, " >\n        <div class=\"siteContainer\">\n          <div class=\"logo\">\n              <svg class=\"icon\">\n                <use xlink:href=\"#icon-loading\"></use>\n                <animateTransform\n                      attributeName=\"transform\"\n                      attributeType=\"XML\"\n                      type=\"rotate\"\n                      from=\"0\"\n                      to=\"360\"\n                      dur=\"3\"\n                      repeatCount=\"indefinite\" />\n              </svg>\n          </div>\n          <div class=\"close\">\n        <svg class=\"icon\">\n        <use xlink:href=\"#icon-close\"></use>\n        </svg>\n        </div>\n          <div class=\"text\">").concat(node.text, "</div>\n        </div>\n      </a>\n    </li>\n    ")); //加载图片

    loadImage($li, node); //渲染到新增Card前面

    $('.siteLast').parent().before($li); //绑定删除事件

    $li.on('click', function (e) {
      e.stopPropagation(); // 阻止冒泡

      e.preventDefault(); //阻止默认

      siteData.splice(index, 1);
      render();
    });
  });
};

var close2 = function close2() {
  console.log('hi');
};

var addCard = function addCard() {
  var url = prompt('请输入要添加的网址', 'https://');
  var pattern = /(http|https):\/\/(www.)?(\w+(\.)?)+/;
  var realUrl = url.match(pattern)[0];
  var text = realUrl.replace(/(http|https):\/\/(www.)?/, '');
  var favicon = "https://api.faviconkit.com/".concat(text, "/144"); //检测图片

  var card = {
    href: realUrl,
    favicon: favicon,
    logo: text[0],
    text: text
  };
  siteData.unshift(card);
  render();
};

var keyOpen = function keyOpen(e) {
  var key = e.key;
  $.each(siteData, function (index, node) {
    if (node.text[0].toLowerCase() === key) {
      window.open(node.href);
      return false;
    }
  });
}; //Image


var loadImage = function loadImage($li, node) {
  var $sitebox = $li.children().children();
  var $logo = $($sitebox.children().get(0));
  var $text = $($sitebox.children().get(1));
  var img = new Image();

  img.onload = function () {
    var $img = $(img);
    $logo.remove();
    $text.before($img.addClass('logo'));
  };

  img.src = node.favicon;
};

var backImage = function backImage() {
  var width = Math.ceil($('body').width());
  var height = Math.ceil($('body').height());
  var random = Math.ceil(Math.random() * 10);
  var ImgUrl = "https://picsum.photos/".concat(width, "/").concat(height, "/?blur=").concat(random);

  if (width > 500) {
    $('body').css('background-image', "url(".concat(ImgUrl, ")"));
  }
}; //离开保存;


onbeforeunload = function onbeforeunload() {
  var data = JSON.stringify(siteData);
  localStorage.setItem('siteData', data);
}; //初始化


init();
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61776" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map