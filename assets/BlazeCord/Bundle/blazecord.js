"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: ((k) => from[k]).bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shims/asyncIteratorSymbol.js
  var asyncIteratorSymbol;
  var init_asyncIteratorSymbol = __esm({
    "shims/asyncIteratorSymbol.js"() {
      "use strict";
      asyncIteratorSymbol = Symbol("Symbol.asyncIterator");
    }
  });

  // shims/promiseAllSettled.js
  var allSettledFulfill, allSettledReject, mapAllSettled, allSettled;
  var init_promiseAllSettled = __esm({
    "shims/promiseAllSettled.js"() {
      "use strict";
      allSettledFulfill = (value) => ({
        status: "fulfilled",
        value
      });
      allSettledReject = (reason) => ({
        status: "rejected",
        reason
      });
      mapAllSettled = (item) => Promise.resolve(item).then(allSettledFulfill, allSettledReject);
      allSettled = Promise.allSettled ??= (iterator) => {
        return Promise.all(Array.from(iterator).map(mapAllSettled));
      };
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done)
      resolve(value);
    else
      Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, {
            get: all[name],
            enumerable: true
          });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          var _loop2 = function(key2) {
            if (!__hasOwnProp2.call(to, key2) && key2 !== except)
              __defProp2(to, key2, {
                get: () => from[key2],
                enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable
              });
          };
          for (var key of __getOwnPropNames2(from))
            _loop2(key);
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        after: () => after2,
        before: () => before3,
        instead: () => instead4,
        unpatchAll: () => unpatchAll
      });
      module.exports = __toCommonJS2(src_exports2);
      var patchTypes = [
        "a",
        "b",
        "i"
      ];
      var patchedObjects = /* @__PURE__ */ new Map();
      function hook_default(funcName, funcParent, funcArgs, ctxt, isConstruct) {
        var patch = patchedObjects.get(funcParent)?.[funcName];
        if (!patch)
          return isConstruct ? Reflect.construct(funcParent[funcName], funcArgs, ctxt) : funcParent[funcName].apply(ctxt, funcArgs);
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctxt, funcArgs);
          if (Array.isArray(maybefuncArgs))
            funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current) => (...args) => current.call(ctxt, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(patch.o, args, ctxt) : patch.o.apply(ctxt, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values())
          workingRetVal = hook1.call(ctxt, funcArgs, workingRetVal) ?? workingRetVal;
        return workingRetVal;
      }
      function unpatch(funcParent, funcName, hookId, type) {
        var patchedObject = patchedObjects.get(funcParent);
        var patch = patchedObject?.[funcName];
        if (!patch?.[type].has(hookId))
          return false;
        patch[type].delete(hookId);
        if (patchTypes.every((t) => patch[t].size === 0)) {
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: patch.o,
            writable: true,
            configurable: true
          });
          if (!success)
            funcParent[funcName] = patch.o;
          delete patchedObject[funcName];
        }
        if (Object.keys(patchedObject).length == 0)
          patchedObjects.delete(funcParent);
        return true;
      }
      function unpatchAll() {
        for (var [parentObject, patchedObject] of patchedObjects.entries())
          for (var funcName in patchedObject)
            for (var hookType of patchTypes)
              for (var hookId of patchedObject[funcName]?.[hookType].keys() ?? [])
                unpatch(parentObject, funcName, hookId, hookType);
      }
      var getPatchFunc_default = (patchType) => (funcName, funcParent, callback, oneTime = false) => {
        if (typeof funcParent[funcName] !== "function")
          throw new Error(`${funcName} is not a function in ${funcParent.constructor.name}`);
        if (!patchedObjects.has(funcParent))
          patchedObjects.set(funcParent, /* @__PURE__ */ Object.create(null));
        var parentInjections = patchedObjects.get(funcParent);
        if (!parentInjections[funcName]) {
          var origFunc = funcParent[funcName];
          parentInjections[funcName] = {
            o: origFunc,
            b: /* @__PURE__ */ new Map(),
            i: /* @__PURE__ */ new Map(),
            a: /* @__PURE__ */ new Map()
          };
          var runHook = (ctxt, args, construct) => {
            var ret = hook_default(funcName, funcParent, args, ctxt, construct);
            if (oneTime)
              unpatchThisPatch();
            return ret;
          };
          var replaceProxy = new Proxy(origFunc, {
            apply: (_2, ctxt, args) => runHook(ctxt, args, false),
            construct: (_2, args) => runHook(origFunc, args, true),
            get: (target, prop, receiver) => prop == "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver)
          });
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: replaceProxy,
            configurable: true,
            writable: true
          });
          if (!success)
            funcParent[funcName] = replaceProxy;
        }
        var hookId = Symbol();
        var unpatchThisPatch = () => unpatch(funcParent, funcName, hookId, patchType);
        parentInjections[funcName][patchType].set(hookId, callback);
        return unpatchThisPatch;
      };
      var before3 = getPatchFunc_default("b");
      var instead4 = getPatchFunc_default("i");
      var after2 = getPatchFunc_default("a");
    }
  });

  // src/lib/api/native/modules/index.ts
  var modules_exports = {};
  __export(modules_exports, {
    BundleUpdaterManager: () => BundleUpdaterManager,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    NativeThemeModule: () => NativeThemeModule
  });
  var nmp, NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, NativeThemeModule, BundleUpdaterManager;
  var init_modules = __esm({
    "src/lib/api/native/modules/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      nmp = window.nativeModuleProxy;
      NativeCacheModule = nmp.NativeCacheModule ?? nmp.MMKVManager;
      NativeFileModule = nmp.NativeFileModule ?? nmp.RTNFileManager ?? nmp.DCDFileManager;
      NativeClientInfoModule = nmp.NativeClientInfoModule ?? nmp.RTNClientInfoManager ?? nmp.InfoDictionaryManager;
      NativeDeviceModule = nmp.NativeDeviceModule ?? nmp.RTNDeviceManager ?? nmp.DCDDeviceManager;
      NativeThemeModule = nmp.NativeThemeModule ?? nmp.RTNThemeManager ?? nmp.DCDTheme;
      ({ BundleUpdaterManager } = nmp);
    }
  });

  // src/lib/api/native/fs.ts
  var fs_exports = {};
  __export(fs_exports, {
    clearFolder: () => clearFolder,
    downloadFile: () => downloadFile,
    fileExists: () => fileExists,
    readFile: () => readFile,
    removeCacheFile: () => removeCacheFile,
    removeFile: () => removeFile,
    writeFile: () => writeFile
  });
  function clearFolder(path) {
    return _clearFolder.apply(this, arguments);
  }
  function _clearFolder() {
    _clearFolder = _async_to_generator(function* (path, { prefix = "blazecord/" } = {}) {
      if (typeof NativeFileModule.clearFolder !== "function")
        throw new Error("'fs.clearFolder' is not supported");
      return void (yield NativeFileModule.clearFolder("documents", `${prefix}${path}`));
    });
    return _clearFolder.apply(this, arguments);
  }
  function removeFile(path) {
    return _removeFile.apply(this, arguments);
  }
  function _removeFile() {
    _removeFile = _async_to_generator(function* (path, { prefix = "blazecord/" } = {}) {
      if (typeof NativeFileModule.removeFile !== "function")
        throw new Error("'fs.removeFile' is not supported");
      return void (yield NativeFileModule.removeFile("documents", `${prefix}${path}`));
    });
    return _removeFile.apply(this, arguments);
  }
  function removeCacheFile(path) {
    return _removeCacheFile.apply(this, arguments);
  }
  function _removeCacheFile() {
    _removeCacheFile = _async_to_generator(function* (path, prefix = "blazecord/") {
      if (typeof NativeFileModule.removeFile !== "function")
        throw new Error("'fs.removeFile' is not supported");
      return void (yield NativeFileModule.removeFile("cache", `${prefix}${path}`));
    });
    return _removeCacheFile.apply(this, arguments);
  }
  function fileExists(path) {
    return _fileExists.apply(this, arguments);
  }
  function _fileExists() {
    _fileExists = _async_to_generator(function* (path, { prefix = "blazecord/" } = {}) {
      return yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`);
    });
    return _fileExists.apply(this, arguments);
  }
  function writeFile(path, data) {
    return _writeFile.apply(this, arguments);
  }
  function _writeFile() {
    _writeFile = _async_to_generator(function* (path, data, { prefix = "blazecord/" } = {}) {
      if (typeof data !== "string")
        throw new Error("Argument 'data' must be a string");
      return void (yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "utf8"));
    });
    return _writeFile.apply(this, arguments);
  }
  function readFile(path) {
    return _readFile.apply(this, arguments);
  }
  function _readFile() {
    _readFile = _async_to_generator(function* (path, { prefix = "blazecord/" } = {}) {
      try {
        return yield NativeFileModule.readFile(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`, "utf8");
      } catch (err) {
        throw new Error(`An error occured while writing to '${path}'`, {
          cause: err
        });
      }
    });
    return _readFile.apply(this, arguments);
  }
  function downloadFile(url2, path) {
    return _downloadFile.apply(this, arguments);
  }
  function _downloadFile() {
    _downloadFile = _async_to_generator(function* (url2, path, { prefix = "blazecord/" } = {}) {
      var response = yield fetch(url2);
      if (!response.ok) {
        throw new Error(`Failed to download file from ${url2}: ${response.status}`);
      }
      var arrayBuffer = yield response.arrayBuffer();
      var data = Buffer.from(arrayBuffer).toString("base64");
      yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "base64");
    });
    return _downloadFile.apply(this, arguments);
  }
  var init_fs = __esm({
    "src/lib/api/native/fs.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_modules();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _get_prototype_of(o);
  }
  var init_get_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_2) {
    }
    return (_is_native_reflect_construct = function _is_native_reflect_construct2() {
      return !!result;
    })();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self) {
    if (self === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function"))
      return call;
    return _assert_this_initialized(self);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assert_this_initialized();
      init_type_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor))
      throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _set_prototype_of(o, p);
  }
  var init_set_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct())
      _construct = Reflect.construct;
    else {
      _construct = function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _set_prototype_of(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_is_native_reflect_construct();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache2 = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2))
        return Class2;
      if (typeof Class2 !== "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache2 !== "undefined") {
        if (_cache2.has(Class2))
          return _cache2.get(Class2);
        _cache2.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    };
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs
  function debounce(func, debounceMs, { signal, edges } = {}) {
    var pendingThis = void 0;
    var pendingArgs = null;
    var leading = edges != null && edges.includes("leading");
    var trailing = edges == null || edges.includes("trailing");
    var invoke = () => {
      if (pendingArgs !== null) {
        func.apply(pendingThis, pendingArgs);
        pendingThis = void 0;
        pendingArgs = null;
      }
    };
    var onTimerEnd = () => {
      if (trailing) {
        invoke();
      }
      cancel();
    };
    var timeoutId = null;
    var schedule = () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        onTimerEnd();
      }, debounceMs);
    };
    var cancelTimer = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
    var cancel = () => {
      cancelTimer();
      pendingThis = void 0;
      pendingArgs = null;
    };
    var flush = () => {
      cancelTimer();
      invoke();
    };
    var debounced = function debounced2(...args) {
      if (signal?.aborted) {
        return;
      }
      pendingThis = this;
      pendingArgs = args;
      var isFirstCall = timeoutId == null;
      schedule();
      if (leading && isFirstCall) {
        invoke();
      }
    };
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener("abort", cancel, {
      once: true
    });
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs
  function omit(obj, keys) {
    var result = {
      ...obj
    };
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      delete result[key];
    }
    return result;
  }
  var init_omit = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs
  function isNotNil(x2) {
    return x2 != null;
  }
  var init_isNotNil = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs
  var init_dist = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_debounce();
      init_omit();
      init_isNotNil();
    }
  });

  // src/metro/internals/enums.ts
  var ModuleFlags, ModulesMapInternal;
  var init_enums = __esm({
    "src/metro/internals/enums.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ModuleFlags2) {
        ModuleFlags2[ModuleFlags2["EXISTS"] = 1] = "EXISTS";
        ModuleFlags2[ModuleFlags2["BLACKLISTED"] = 2] = "BLACKLISTED";
        ModuleFlags2[ModuleFlags2["ASSET"] = 4] = "ASSET";
      })(ModuleFlags || (ModuleFlags = {}));
      (function(ModulesMapInternal2) {
        ModulesMapInternal2[ModulesMapInternal2["FULL_LOOKUP"] = 0] = "FULL_LOOKUP";
        ModulesMapInternal2[ModulesMapInternal2["NOT_FOUND"] = 1] = "NOT_FOUND";
      })(ModulesMapInternal || (ModulesMapInternal = {}));
    }
  });

  // src/lib/api/patcher.ts
  var patcher_exports = {};
  __export(patcher_exports, {
    _patcherDelaySymbol: () => _patcherDelaySymbol,
    after: () => after,
    before: () => before,
    default: () => patcher_default,
    instead: () => instead
  });
  function create(fn) {
    function patchFn(...args) {
      if (_patcherDelaySymbol in args[1]) {
        var delayCallback = args[1][_patcherDelaySymbol];
        var cancel = false;
        var unpatch = () => cancel = true;
        delayCallback((target) => {
          if (cancel)
            return;
          args[1] = target;
          unpatch = fn.apply(this, args);
        });
        return () => unpatch();
      }
      return fn.apply(this, args);
    }
    function promisePatchFn(...args) {
      var thenable = args[1];
      if (!thenable || !("then" in thenable))
        throw new Error("target is not a then-able object");
      var cancel = false;
      var unpatch = () => cancel = true;
      thenable.then((target) => {
        if (cancel)
          return;
        args[1] = target;
        unpatch = patchFn.apply(this, args);
      });
      return () => unpatch();
    }
    return Object.assign(patchFn, {
      await: promisePatchFn
    });
  }
  var _after, _before, _instead, _patcherDelaySymbol, after, before, instead, patcher_default;
  var init_patcher = __esm({
    "src/lib/api/patcher.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      ({ after: _after, before: _before, instead: _instead } = require_cjs());
      _patcherDelaySymbol = Symbol.for("blaze.api.patcher.delay");
      after = create(_after);
      before = create(_before);
      instead = create(_instead);
      patcher_default = {
        after,
        before,
        instead
      };
    }
  });

  // src/lib/api/assets/patches.ts
  var patches_exports = {};
  __export(patches_exports, {
    assetsModule: () => assetsModule,
    patchAssets: () => patchAssets
  });
  function patchAssets(module) {
    if (assetsModule)
      return;
    assetsModule = module;
    var unpatch = after("registerAsset", assetsModule, () => {
      var moduleId = getImportingModuleId();
      if (moduleId !== -1)
        indexAssetModuleFlag(moduleId);
    });
    return unpatch;
  }
  var assetsModule;
  var init_patches = __esm({
    "src/lib/api/assets/patches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_caches();
      init_modules2();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else
      obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/core/relapse/Emitter.ts
  var Events, Emitter;
  var init_Emitter = __esm({
    "src/core/relapse/Emitter.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_create_class();
      init_define_property();
      (function(Events2) {
        Events2["GET"] = "GET";
        Events2["SET"] = "SET";
        Events2["DEL"] = "DEL";
      })(Events || (Events = {}));
      Emitter = /* @__PURE__ */ function() {
        "use strict";
        function Emitter2() {
          _class_call_check(this, Emitter2);
          _define_property(this, "listeners", Object.values(Events).reduce((acc, val) => (acc[val] = /* @__PURE__ */ new Set(), acc), {}));
        }
        _create_class(Emitter2, [
          {
            key: "on",
            value: function on(event, listener) {
              if (!this.listeners[event].has(listener))
                this.listeners[event].add(listener);
            }
          },
          {
            key: "off",
            value: function off(event, listener) {
              this.listeners[event].delete(listener);
            }
          },
          {
            key: "once",
            value: function once(event, listener) {
              var once2 = (event2, data) => {
                this.off(event2, once2);
                listener(event2, data);
              };
              this.on(event, once2);
            }
          },
          {
            key: "emit",
            value: function emit(event, data) {
              for (var listener of this.listeners[event])
                listener(event, data);
            }
          }
        ]);
        return Emitter2;
      }();
    }
  });

  // src/metro/factories.ts
  var factories_exports = {};
  __export(factories_exports, {
    createFilterDefinition: () => createFilterDefinition,
    createSimpleFilter: () => createSimpleFilter
  });
  function createFilterDefinition(fn, uniqMaker) {
    function createHolder(func, args, raw) {
      return Object.assign(func, {
        filter: fn,
        raw,
        uniq: [
          raw && "raw::",
          uniqMaker(args)
        ].filter(Boolean).join("")
      });
    }
    var curry = (raw) => (...args) => {
      return createHolder((m2, id, defaultCheck) => {
        return fn(args, m2, id, defaultCheck);
      }, args, raw);
    };
    return Object.assign(curry(false), {
      byRaw: curry(true),
      uniqMaker
    });
  }
  function createSimpleFilter(filter, uniq) {
    return createFilterDefinition((_2, m2) => filter(m2), () => `dynamic::${uniq}`)();
  }
  var init_factories = __esm({
    "src/metro/factories.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/metro/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    byDisplayName: () => byDisplayName,
    byFilePath: () => byFilePath,
    byMutableProp: () => byMutableProp,
    byName: () => byName,
    byProps: () => byProps,
    byStoreName: () => byStoreName,
    byTypeName: () => byTypeName
  });
  var byProps, byName, byDisplayName, byTypeName, byStoreName, byFilePath, byMutableProp;
  var init_filters = __esm({
    "src/metro/filters.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_factories();
      init_modules2();
      byProps = createFilterDefinition((props, m2) => props.length === 0 ? m2[props[0]] : props.every((p) => m2[p]), (props) => `blaze.metro.byProps(${props.join(",")})`);
      byName = createFilterDefinition(([name], m2) => m2.name === name, (name) => `blaze.metro.byName(${name})`);
      byDisplayName = createFilterDefinition(([displayName], m2) => m2.displayName === displayName, (name) => `blaze.metro.byDisplayName(${name})`);
      byTypeName = createFilterDefinition(([typeName], m2) => m2.type?.name === typeName, (name) => `blaze.metro.byTypeName(${name})`);
      byStoreName = createFilterDefinition(([name], m2) => m2.getName?.length === 0 && m2.getName() === name, (name) => `blaze.metro.byStoreName(${name})`);
      byFilePath = createFilterDefinition(
        // module return depends on defaultCheck. if true, it'll return module.default, otherwise the whole module
        // unlike filters like byName, defaultCheck doesn't affect the return since we don't rely on exports, but only its ID
        // one could say that this is technically a hack, since defaultCheck is meant for filtering exports
        ([path, exportDefault], _2, id, defaultCheck) => exportDefault === defaultCheck && metroModules[id]?.__filePath === path,
        ([path, exportDefault]) => `blaze.metro.byFilePath(${path},${exportDefault})`
      );
      byMutableProp = createFilterDefinition(([prop], m2) => m2?.[prop] && !Object.getOwnPropertyDescriptor(m2, prop)?.get, (prop) => `blaze.metro.byMutableProp(${prop})`);
    }
  });

  // src/metro/finders.ts
  function filterExports(moduleExports, moduleId, filter) {
    if (moduleExports.default && moduleExports.__esModule && filter(moduleExports.default, moduleId, true)) {
      return {
        exports: filter.raw ? moduleExports : moduleExports.default,
        defaultExport: !filter.raw
      };
    }
    if (!filter.raw && filter(moduleExports, moduleId, false)) {
      return {
        exports: moduleExports,
        defaultExport: false
      };
    }
    return {};
  }
  function findModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, false);
    for (var [id, moduleExports] of getModules(filter.uniq, false)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0) {
        cacheId(id, testedExports);
        return {
          id,
          defaultExport
        };
      }
    }
    finish(true);
    return {};
  }
  function findModuleId(filter) {
    return findModule(filter)?.id;
  }
  function findExports(filter) {
    var { id, defaultExport } = findModule(filter);
    if (id == null)
      return;
    return defaultExport ? requireModule(id).default : requireModule(id);
  }
  function findAllModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, true);
    var foundExports = [];
    for (var [id, moduleExports] of getModules(filter.uniq, true)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0 && typeof defaultExport === "boolean") {
        foundExports.push({
          id,
          defaultExport
        });
        cacheId(id, testedExports);
      }
    }
    finish(foundExports.length === 0);
    return foundExports;
  }
  function findAllModuleId(filter) {
    return findAllModule(filter).map((e) => e.id);
  }
  function findAllExports(filter) {
    return findAllModule(filter).map((ret) => {
      if (!ret.id)
        return;
      var { id, defaultExport } = ret;
      return defaultExport ? requireModule(id).default : requireModule(id);
    });
  }
  var init_finders = __esm({
    "src/metro/finders.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_modules2();
    }
  });

  // src/lib/utils/lazy.ts
  var lazy_exports = {};
  __export(lazy_exports, {
    getProxyFactory: () => getProxyFactory,
    lazyDestructure: () => lazyDestructure,
    proxyLazy: () => proxyLazy
  });
  function proxyLazy(factory, opts = {}) {
    var cache;
    var dummy = opts.hint !== "object" ? function dummy2() {
    } : {};
    var proxyFactory = () => cache ??= factory();
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = proxyLazy(factory);
    return new Proxy({}, {
      get(_2, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: (_3, p) => proxyLazy(() => proxiedObject[p], opts)
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return proxyLazy(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  var unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "src/lib/utils/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = (key) => typeof key === "string" && unconfigurable.has(key);
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved)
                throw new Error(`Trying to Reflect.${fnName} of ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p in isolatedEntries)
              return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.has of ${typeof resolved}`);
          return Reflect.has(resolved, p);
        },
        get(target, p, receiver) {
          if (p === "__IS_BLAZE_LAZY_PROXY__")
            return true;
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries?.[p])
              return isolatedEntries[p];
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.get of ${typeof resolved}`);
          return Reflect.get(resolved, p, receiver);
        },
        ownKeys: (target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.ownKeys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          unconfigurable.forEach((key) => !cacheKeys.includes(key) && cacheKeys.push(key));
          return cacheKeys;
        },
        getOwnPropertyDescriptor: (target, p) => {
          if (isUnconfigurable(p))
            return Reflect.getOwnPropertyDescriptor(target, p);
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to getOwnPropertyDescriptor of ${typeof resolved}`);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p);
          if (descriptor)
            Object.defineProperty(target, p, descriptor);
          return descriptor;
        }
      };
    }
  });

  // src/metro/lazy.ts
  var lazy_exports2 = {};
  __export(lazy_exports2, {
    _lazyContextSymbol: () => _lazyContextSymbol,
    createLazyModule: () => createLazyModule,
    getLazyContext: () => getLazyContext
  });
  function getIndexedFind(filter) {
    var modulesMap = getMetroCache().findIndex[filter.uniq];
    if (!modulesMap)
      return void 0;
    for (var k in modulesMap)
      if (k[0] !== "_")
        return Number(k);
  }
  function subscribeLazyModule(proxy, callback) {
    var info = getLazyContext(proxy);
    if (!info)
      throw new Error("Subscribing a module for non-proxy-find");
    if (!info.indexed)
      throw new Error("Attempting to subscribe to a non-indexed find");
    return subscribeModule(info.moduleId, () => {
      callback(findExports(info.filter));
    });
  }
  function getLazyContext(proxy) {
    return _lazyContexts.get(proxy);
  }
  function createLazyModule(filter) {
    var cache = void 0;
    var moduleId = getIndexedFind(filter);
    var context = {
      filter,
      indexed: !!moduleId,
      moduleId,
      getExports(cb) {
        if (!moduleId || metroModules[moduleId]?.isInitialized) {
          cb(this.forceLoad());
          return () => void 0;
        }
        return this.subscribe(cb);
      },
      subscribe(cb) {
        return subscribeLazyModule(proxy, cb);
      },
      get cache() {
        return cache;
      },
      forceLoad() {
        cache ??= findExports(filter);
        if (!cache)
          throw new Error(`${filter.uniq} is ${typeof cache}! (id ${context.moduleId ?? "unknown"})`);
        return cache;
      }
    };
    var proxy = proxyLazy(() => context.forceLoad(), {
      exemptedEntries: {
        [_lazyContextSymbol]: context,
        [_patcherDelaySymbol]: (cb) => context.getExports(cb)
      }
    });
    _lazyContexts.set(proxy, context);
    return proxy;
  }
  var _lazyContextSymbol, _lazyContexts;
  var init_lazy2 = __esm({
    "src/metro/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_lazy();
      init_finders();
      init_caches();
      init_modules2();
      _lazyContextSymbol = Symbol.for("blaze.metro.lazyContext");
      _lazyContexts = /* @__PURE__ */ new WeakMap();
    }
  });

  // src/metro/wrappers.ts
  var findByProps, findByPropsLazy, findByPropsAll, findByName, findByNameLazy, findByNameAll, findByDisplayName, findByDisplayNameLazy, findByDisplayNameAll, findByTypeName, findByTypeNameLazy, findByTypeNameAll, findByStoreName, findByStoreNameLazy, findByFilePath, findByFilePathLazy;
  var init_wrappers = __esm({
    "src/metro/wrappers.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_filters();
      init_finders();
      init_lazy2();
      findByProps = (...props) => findExports(byProps(...props));
      findByPropsLazy = (...props) => createLazyModule(byProps(...props));
      findByPropsAll = (...props) => findAllExports(byProps(...props));
      findByName = (name, expDefault = true) => findExports(expDefault ? byName(name) : byName.byRaw(name));
      findByNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byName(name) : byName.byRaw(name));
      findByNameAll = (name, expDefault = true) => findAllExports(expDefault ? byName(name) : byName.byRaw(name));
      findByDisplayName = (name, expDefault = true) => findExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameAll = (name, expDefault = true) => findAllExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByTypeName = (name, expDefault = true) => findExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameAll = (name, expDefault = true) => findAllExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByStoreName = (name) => findExports(byStoreName(name));
      findByStoreNameLazy = (name) => createLazyModule(byStoreName(name));
      findByFilePath = (path, expDefault = false) => findExports(byFilePath(path, expDefault));
      findByFilePathLazy = (path, expDefault = false) => createLazyModule(byFilePath(path, expDefault));
    }
  });

  // shims/depsModule.ts
  var require_depsModule = __commonJS({
    "shims/depsModule.ts"(exports, module) {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      module.exports = {
        "react": findByPropsLazy("createElement"),
        "react-native": findByPropsLazy("AppRegistry"),
        "util": findByPropsLazy("inspect", "isNullOrUndefined"),
        "moment": findByPropsLazy("isMoment"),
        "chroma-js": findByPropsLazy("brewer"),
        "lodash": findByPropsLazy("forEachRight"),
        "@shopify/react-native-skia": findByPropsLazy("useFont")
      };
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react-native"];
    }
  });

  // src/core/relapse/storage.ts
  function createProxy(target = {}) {
    var emitter = new Emitter();
    var childrens = /* @__PURE__ */ new WeakMap();
    var proxiedChildrenSet = /* @__PURE__ */ new WeakSet();
    function createProxy1(target2, path) {
      return new Proxy(target2, {
        get(target3, prop) {
          if (prop === emitterSymbol)
            return emitter;
          var newPath = [
            ...path,
            prop
          ];
          var value = target3[prop];
          if (value !== void 0 && value !== null) {
            emitter.emit("GET", {
              path: newPath,
              value
            });
            if (typeof value === "object") {
              if (proxiedChildrenSet.has(value))
                return value;
              if (childrens.has(value))
                return childrens.get(value);
              var childrenProxy = createProxy1(value, newPath);
              childrens.set(value, childrenProxy);
              return childrenProxy;
            }
            return value;
          }
          return value;
        },
        set(target3, prop, value) {
          if (typeof value === "object") {
            if (childrens.has(value)) {
              target3[prop] = childrens.get(value);
            } else {
              var childrenProxy = createProxy1(value, [
                ...path,
                prop
              ]);
              childrens.set(value, childrenProxy);
              proxiedChildrenSet.add(value);
              target3[prop] = childrenProxy;
            }
          } else {
            target3[prop] = value;
          }
          emitter.emit("SET", {
            path: [
              ...path,
              prop
            ],
            value: target3[prop]
          });
          return true;
        },
        deleteProperty(target3, prop) {
          var value = typeof target3[prop] === "object" ? childrens.get(target3[prop]) : target3[prop];
          var success = delete target3[prop];
          if (success)
            emitter.emit("DEL", {
              value,
              path: [
                ...path,
                prop
              ]
            });
          return success;
        }
      });
    }
    return {
      proxy: createProxy1(target, []),
      emitter
    };
  }
  function useProxy(storage) {
    var emitter = storage?.[emitterSymbol];
    if (!emitter)
      throw new Error("storage?.[emitterSymbol] is undefined");
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = (event, data) => {
        if (event === "DEL" && data.value === storage)
          return;
        forceUpdate();
      };
      emitter.on("SET", listener);
      emitter.on("DEL", listener);
      return () => {
        emitter.off("SET", listener);
        emitter.off("DEL", listener);
      };
    }, []);
    return storage;
  }
  function createStorage(backend) {
    return _createStorage.apply(this, arguments);
  }
  function _createStorage() {
    _createStorage = _async_to_generator(function* (backend) {
      var data = yield backend.get();
      var { proxy, emitter } = createProxy(data);
      var handler = () => backend.set(proxy);
      emitter.on("SET", handler);
      emitter.on("DEL", handler);
      return proxy;
    });
    return _createStorage.apply(this, arguments);
  }
  function wrapSync(store) {
    var awaited = void 0;
    var awaitQueue = [];
    var awaitInit = (cb) => awaited ? cb() : awaitQueue.push(cb);
    store.then((v2) => {
      awaited = v2;
      awaitQueue.forEach((cb) => cb());
    });
    return new Proxy({}, {
      ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
        k,
        (t, ...a) => Reflect[k](awaited ?? t, ...a)
      ])),
      get(target, prop, recv) {
        if (prop === syncAwaitSymbol)
          return awaitInit;
        return Reflect.get(awaited ?? target, prop, recv);
      }
    });
  }
  function awaitStorage(...stores) {
    return Promise.all(stores.map((store) => new Promise((res) => store[syncAwaitSymbol](res))));
  }
  var import_react_native, emitterSymbol, syncAwaitSymbol, ILLEGAL_CHARS_REGEX, filePathFixer, getMMKVPath, purgeStorage, createMMKVBackend, createFileBackend;
  var init_storage = __esm({
    "src/core/relapse/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_modules();
      import_react_native = __toESM(require_react_native());
      emitterSymbol = Symbol.for("relapse.storage.emitter");
      syncAwaitSymbol = Symbol.for("relapse.storage.accessor");
      ILLEGAL_CHARS_REGEX = /[<>:"/\\|?*]/g;
      filePathFixer = (file) => import_react_native.Platform.select({
        default: file,
        ios: NativeFileModule.saveFileToGallery ? file : `Documents/${file}`
      });
      getMMKVPath = (name) => {
        if (ILLEGAL_CHARS_REGEX.test(name)) {
          name = name.replace(ILLEGAL_CHARS_REGEX, "-").replace(/-+/g, "-");
        }
        return `vd_mmkv/${name}`;
      };
      purgeStorage = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (store) {
          if (yield NativeCacheModule.getItem(store)) {
            NativeCacheModule.removeItem(store);
          }
          var mmkvPath = getMMKVPath(store);
          if (yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`)) {
            yield NativeFileModule.removeFile?.("documents", mmkvPath);
          }
        });
        return function purgeStorage3(store) {
          return _ref.apply(this, arguments);
        };
      }();
      createMMKVBackend = (store, defaultData = {}) => {
        var mmkvPath = getMMKVPath(store);
        var defaultStr = JSON.stringify(defaultData);
        return createFileBackend(mmkvPath, defaultData, _async_to_generator(function* () {
          var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`;
          if (yield NativeFileModule.fileExists(path))
            return;
          var oldData = (yield NativeCacheModule.getItem(store)) ?? defaultStr;
          if (oldData === "!!LARGE_VALUE!!") {
            var cachePath = `${NativeFileModule.getConstants().CacheDirPath}/mmkv/${store}`;
            if (yield NativeFileModule.fileExists(cachePath)) {
              oldData = yield NativeFileModule.readFile(cachePath, "utf8");
            } else {
              console.log(`${store}: Experienced data loss :(`);
              oldData = defaultStr;
            }
          }
          try {
            JSON.parse(oldData);
          } catch (e) {
            console.error(`${store} had an unparseable data while migrating`);
            oldData = defaultStr;
          }
          yield NativeFileModule.writeFile("documents", filePathFixer(mmkvPath), oldData, "utf8");
          if ((yield NativeCacheModule.getItem(store)) !== null) {
            NativeCacheModule.removeItem(store);
            console.log(`Successfully migrated ${store} store from MMKV storage to fs`);
          }
        })());
      };
      createFileBackend = (file, defaultData = {}, migratePromise) => {
        return {
          get: /* @__PURE__ */ _async_to_generator(function* () {
            yield migratePromise;
            var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${file}`;
            if (yield NativeFileModule.fileExists(path)) {
              var content = yield NativeFileModule.readFile(path, "utf8");
              try {
                return JSON.parse(content);
              } catch (e) {
              }
            }
            yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(defaultData), "utf8");
            return JSON.parse(yield NativeFileModule.readFile(path, "utf8"));
          }),
          set: /* @__PURE__ */ function() {
            var _ref = _async_to_generator(function* (data) {
              yield migratePromise;
              yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(data), "utf8");
            });
            return function(data) {
              return _ref.apply(this, arguments);
            };
          }()
        };
      };
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
  function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get)
      return descriptor.get.call(receiver);
    return descriptor.value;
  }
  var init_class_apply_descriptor_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
  function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver))
      throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
  }
  var init_class_extract_field_descriptor = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_get.js
  function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
  }
  var init_class_private_field_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_get();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
  function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  var init_check_private_redeclaration = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_check_private_redeclaration.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_init.js
  function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  var init_class_private_field_init = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_init.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_check_private_redeclaration();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
  function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set)
      descriptor.set.call(receiver, value);
    else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  var init_class_apply_descriptor_set = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_set.js
  function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
  }
  var init_class_private_field_set = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_set.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_set();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js
  var m, x, E, T, K, c, $, N, Y, I, B, D, R, z, y, g, q, H, G, J, F, P, L, C, Q, X, Z, _, b, S, V, U, W, v;
  var init_object_observer_min = __esm({
    "node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      m = "insert";
      x = "update";
      E = "delete";
      T = "reverse";
      K = "shuffle";
      c = Symbol.for("object-observer-meta-key-0");
      $ = {
        async: 1
      };
      N = (o) => {
        if (!o || typeof o != "object")
          return null;
        var t = {}, e = [];
        for (var [r, n] of Object.entries(o))
          if (r === "path") {
            if (typeof n != "string" || n === "")
              throw new Error('"path" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else if (r === "pathsOf") {
            if (o.path)
              throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');
            if (typeof n != "string")
              throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');
            t[r] = o.pathsOf.split(".").filter(Boolean);
          } else if (r === "pathsFrom") {
            if (o.path || o.pathsOf)
              throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');
            if (typeof n != "string" || n === "")
              throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else
            e.push(r);
        if (e.length)
          throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);
        return t;
      };
      Y = (o, t, e) => {
        var r = {};
        r[c] = t;
        for (var n in o)
          r[n] = g(o[n], n, t, e);
        return r;
      };
      I = (o, t, e) => {
        var r = o.length;
        var n = new Array(r);
        n[c] = t;
        for (var i = 0; i < r; i++)
          n[i] = g(o[i], i, t, e);
        return n;
      };
      B = (o, t) => (o[c] = t, o);
      D = (o, t) => {
        if (o === null)
          return t;
        var e = t;
        if (o.path) {
          var r = o.path;
          e = t.filter((n2) => n2.path.join(".") === r);
        } else if (o.pathsOf) {
          var r1 = o.pathsOf, n = r1.join(".");
          e = t.filter((i) => (i.path.length === r1.length + 1 || i.path.length === r1.length && (i.type === T || i.type === K)) && i.path.join(".").startsWith(n));
        } else if (o.pathsFrom) {
          var r2 = o.pathsFrom;
          e = t.filter((n2) => n2.path.join(".").startsWith(r2));
        }
        return e;
      };
      R = (o, t) => {
        try {
          o(t);
        } catch (e) {
          console.error(`failed to notify listener ${o} with ${t}`, e);
        }
      };
      z = function z2() {
        var t = this.batches;
        this.batches = [];
        for (var [e, r] of t)
          R(e, r);
      };
      y = (o, t) => {
        var e = o, r, n, i, l, h, s;
        var u = t.length;
        do {
          for (r = e.options.async, n = e.observers, s = n.length; s--; )
            if ([i, l] = n[s], h = D(l, t), h.length)
              if (r) {
                e.batches.length === 0 && queueMicrotask(z.bind(e));
                var a = void 0;
                for (var p of e.batches)
                  if (p[0] === i) {
                    a = p;
                    break;
                  }
                a || (a = [
                  i,
                  []
                ], e.batches.push(a)), Array.prototype.push.apply(a[1], h);
              } else
                R(i, h);
          var f = e.parent;
          if (f) {
            for (var a1 = 0; a1 < u; a1++) {
              var p1 = t[a1];
              t[a1] = new b(p1.type, [
                e.ownKey,
                ...p1.path
              ], p1.value, p1.oldValue, p1.object);
            }
            e = f;
          } else
            e = null;
        } while (e);
      };
      g = (o, t, e, r) => r !== void 0 && r.has(o) ? null : typeof o != "object" || o === null ? o : Array.isArray(o) ? new U({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy : ArrayBuffer.isView(o) ? new W({
        target: o,
        ownKey: t,
        parent: e
      }).proxy : o instanceof Date ? o : new V({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy;
      q = function q2() {
        var t = this[c], e = t.target, r = e.length - 1;
        var n = e.pop();
        if (n && typeof n == "object") {
          var l = n[c];
          l && (n = l.detach());
        }
        var i = [
          new b(E, [
            r
          ], void 0, n, this)
        ];
        return y(t, i), n;
      };
      H = function H2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], i + s, t);
        var l = Reflect.apply(e.push, e, n), h = [];
        for (var s1 = i, u = e.length; s1 < u; s1++)
          h[s1 - i] = new b(m, [
            s1
          ], e[s1], void 0, this);
        return y(t, h), l;
      };
      G = function G2() {
        var t = this[c], e = t.target;
        var r, n, i, l, h;
        for (r = e.shift(), r && typeof r == "object" && (h = r[c], h && (r = h.detach())), n = 0, i = e.length; n < i; n++)
          l = e[n], l && typeof l == "object" && (h = l[c], h && (h.ownKey = n));
        var s = [
          new b(E, [
            0
          ], void 0, r, this)
        ];
        return y(t, s), r;
      };
      J = function J2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r);
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], s, t);
        var i = Reflect.apply(e.unshift, e, n);
        for (var s1 = 0, u = e.length, f; s1 < u; s1++)
          if (f = e[s1], f && typeof f == "object") {
            var a = f[c];
            a && (a.ownKey = s1);
          }
        var l = n.length, h = new Array(l);
        for (var s2 = 0; s2 < l; s2++)
          h[s2] = new b(m, [
            s2
          ], e[s2], void 0, this);
        return y(t, h), i;
      };
      F = function F2() {
        var t = this[c], e = t.target;
        var r, n, i;
        for (e.reverse(), r = 0, n = e.length; r < n; r++)
          if (i = e[r], i && typeof i == "object") {
            var h = i[c];
            h && (h.ownKey = r);
          }
        var l = [
          new b(T, [], void 0, void 0, this)
        ];
        return y(t, l), this;
      };
      P = function P2(t) {
        var e = this[c], r = e.target;
        var n, i, l;
        for (r.sort(t), n = 0, i = r.length; n < i; n++)
          if (l = r[n], l && typeof l == "object") {
            var s = l[c];
            s && (s.ownKey = n);
          }
        var h = [
          new b(K, [], void 0, void 0, this)
        ];
        return y(e, h), this;
      };
      L = function L2(t, e, r) {
        var n = this[c], i = n.target, l = [], h = i.length, s = i.slice(0);
        if (e = e === void 0 ? 0 : e < 0 ? Math.max(h + e, 0) : Math.min(e, h), r = r === void 0 ? h : r < 0 ? Math.max(h + r, 0) : Math.min(r, h), e < h && r > e) {
          i.fill(t, e, r);
          var u;
          for (var f = e, a, p; f < r; f++)
            a = i[f], i[f] = g(a, f, n), f in s ? (p = s[f], p && typeof p == "object" && (u = p[c], u && (p = u.detach())), l.push(new b(x, [
              f
            ], i[f], p, this))) : l.push(new b(m, [
              f
            ], i[f], void 0, this));
          y(n, l);
        }
        return this;
      };
      C = function C2(t, e, r) {
        var n = this[c], i = n.target, l = i.length;
        t = t < 0 ? Math.max(l + t, 0) : t, e = e === void 0 ? 0 : e < 0 ? Math.max(l + e, 0) : Math.min(e, l), r = r === void 0 ? l : r < 0 ? Math.max(l + r, 0) : Math.min(r, l);
        var h = Math.min(r - e, l - t);
        if (t < l && t !== e && h > 0) {
          var s = i.slice(0), u = [];
          i.copyWithin(t, e, r);
          for (var f = t, a, p, O; f < t + h; f++)
            a = i[f], a && typeof a == "object" && (a = g(a, f, n), i[f] = a), p = s[f], p && typeof p == "object" && (O = p[c], O && (p = O.detach())), !(typeof a != "object" && a === p) && u.push(new b(x, [
              f
            ], a, p, this));
          y(n, u);
        }
        return this;
      };
      Q = function Q2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var w = 0; w < r; w++)
          n[w] = g(arguments[w], w, t);
        var l = r === 0 ? 0 : n[0] < 0 ? i + n[0] : n[0], h = r < 2 ? i - l : n[1], s = Math.max(r - 2, 0), u = Reflect.apply(e.splice, e, n), f = e.length;
        var a;
        for (var w1 = 0, A; w1 < f; w1++)
          A = e[w1], A && typeof A == "object" && (a = A[c], a && (a.ownKey = w1));
        var p, O, j;
        for (p = 0, O = u.length; p < O; p++)
          j = u[p], j && typeof j == "object" && (a = j[c], a && (u[p] = a.detach()));
        var M = [];
        var d;
        for (d = 0; d < h; d++)
          d < s ? M.push(new b(x, [
            l + d
          ], e[l + d], u[d], this)) : M.push(new b(E, [
            l + d
          ], void 0, u[d], this));
        for (; d < s; d++)
          M.push(new b(m, [
            l + d
          ], e[l + d], void 0, this));
        return y(t, M), u;
      };
      X = function X2(t, e) {
        var r = this[c], n = r.target, i = t.length, l = n.slice(0);
        e = e || 0, n.set(t, e);
        var h = new Array(i);
        for (var s = e; s < i + e; s++)
          h[s - e] = new b(x, [
            s
          ], n[s], l[s], this);
        y(r, h);
      };
      Z = {
        pop: q,
        push: H,
        shift: G,
        unshift: J,
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        splice: Q
      };
      _ = {
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        set: X
      };
      b = function b2(t, e, r, n, i) {
        "use strict";
        _class_call_check(this, b2);
        this.type = t, this.path = e, this.value = r, this.oldValue = n, this.object = i;
      };
      S = /* @__PURE__ */ function() {
        "use strict";
        function S2(t, e) {
          _class_call_check(this, S2);
          var { target: r, parent: n, ownKey: i, visited: l = /* @__PURE__ */ new Set() } = t;
          n && i !== void 0 ? (this.parent = n, this.ownKey = i) : (this.parent = null, this.ownKey = null), l.add(r);
          var h = e(r, this, l);
          l.delete(r), this.observers = [], this.revocable = Proxy.revocable(h, this), this.proxy = this.revocable.proxy, this.target = h, this.options = this.processOptions(t.options), this.options.async && (this.batches = []);
        }
        _create_class(S2, [
          {
            key: "processOptions",
            value: function processOptions(t) {
              if (t) {
                if (typeof t != "object")
                  throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);
                var e = Object.keys(t).filter((r) => !(r in $));
                if (e.length)
                  throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);
                return Object.assign({}, t);
              } else
                return {};
            }
          },
          {
            key: "detach",
            value: function detach() {
              return this.parent = null, this.target;
            }
          },
          {
            key: "set",
            value: function set(t, e, r) {
              var n = t[e];
              if (r !== n) {
                var i = g(r, e, this);
                if (t[e] = i, n && typeof n == "object") {
                  var h = n[c];
                  h && (n = h.detach());
                }
                var l = n === void 0 ? [
                  new b(m, [
                    e
                  ], i, void 0, this.proxy)
                ] : [
                  new b(x, [
                    e
                  ], i, n, this.proxy)
                ];
                y(this, l);
              }
              return true;
            }
          },
          {
            key: "deleteProperty",
            value: function deleteProperty(t, e) {
              var r = t[e];
              if (delete t[e], r && typeof r == "object") {
                var i = r[c];
                i && (r = i.detach());
              }
              var n = [
                new b(E, [
                  e
                ], void 0, r, this.proxy)
              ];
              return y(this, n), true;
            }
          }
        ]);
        return S2;
      }();
      V = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(V2, S2);
        function V2(t) {
          _class_call_check(this, V2);
          return _call_super(this, V2, [
            t,
            Y
          ]);
        }
        return V2;
      }(S);
      U = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(U2, S2);
        function U2(t) {
          _class_call_check(this, U2);
          return _call_super(this, U2, [
            t,
            I
          ]);
        }
        _create_class(U2, [
          {
            key: "get",
            value: function get(t, e) {
              return Z[e] || t[e];
            }
          }
        ]);
        return U2;
      }(S);
      W = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(W2, S2);
        function W2(t) {
          _class_call_check(this, W2);
          return _call_super(this, W2, [
            t,
            B
          ]);
        }
        _create_class(W2, [
          {
            key: "get",
            value: function get(t, e) {
              return _[e] || t[e];
            }
          }
        ]);
        return W2;
      }(S);
      v = Object.freeze({
        from: (o, t) => {
          if (!o || typeof o != "object")
            throw new Error("observable MAY ONLY be created from a non-null object");
          if (o[c])
            return o;
          if (Array.isArray(o))
            return new U({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (ArrayBuffer.isView(o))
            return new W({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (o instanceof Date)
            throw new Error(`${o} found to be one of a non-observable types`);
          return new V({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
        },
        isObservable: (o) => !!(o && o[c]),
        observe: (o, t, e) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          if (typeof t != "function")
            throw new Error(`observer MUST be a function, got '${t}'`);
          var r = o[c].observers;
          r.some((n) => n[0] === t) ? console.warn("observer may be bound to an observable only once; will NOT rebind") : r.push([
            t,
            N(e)
          ]);
        },
        unobserve: (o, ...t) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          var e = o[c].observers;
          var r = e.length;
          if (r) {
            if (!t.length) {
              e.splice(0);
              return;
            }
            for (; r; )
              t.indexOf(e[--r][0]) >= 0 && e.splice(r, 1);
          }
        }
      });
    }
  });

  // src/lib/api/storage/index.ts
  var storage_exports = {};
  __export(storage_exports, {
    awaitStorage: () => awaitStorage2,
    createStorage: () => createStorage2,
    createStorageAndCallback: () => createStorageAndCallback,
    createStorageAsync: () => createStorageAsync,
    getPreloadedStorage: () => getPreloadedStorage,
    preloadStorageIfExists: () => preloadStorageIfExists,
    purgeStorage: () => purgeStorage2,
    updateStorage: () => updateStorage,
    useObservable: () => useObservable
  });
  function createFileBackend2(filePath) {
    var write = debounce((data) => {
      writeFile(filePath, JSON.stringify(data));
    }, 500);
    return {
      get: /* @__PURE__ */ _async_to_generator(function* () {
        try {
          return JSON.parse(yield readFile(filePath));
        } catch (e) {
          throw new Error(`Failed to parse storage from '${filePath}'`, {
            cause: e
          });
        }
      }),
      set: /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (data) {
          if (!data || typeof data !== "object") {
            throw new Error("data needs to be an object");
          }
          write(data);
        });
        return function(data) {
          return _ref.apply(this, arguments);
        };
      }(),
      exists: /* @__PURE__ */ _async_to_generator(function* () {
        return yield fileExists(filePath);
      })
    };
  }
  function useObservable(observables, opts) {
    if (observables.some((o) => o?.[storageInitErrorSymbol]))
      throw new Error("An error occured while initializing the storage");
    if (observables.some((o) => !v.isObservable(o))) {
      throw new Error("Argument passed isn't an Observable");
    }
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = () => forceUpdate();
      observables.forEach((o) => v.observe(o, listener, opts));
      return () => {
        observables.forEach((o) => v.unobserve(o, listener));
      };
    }, []);
  }
  function updateStorage(path, value) {
    return _updateStorage.apply(this, arguments);
  }
  function _updateStorage() {
    _updateStorage = _async_to_generator(function* (path, value) {
      _loadedStorage[path] = value;
      createFileBackend2(path).set(value);
    });
    return _updateStorage.apply(this, arguments);
  }
  function createStorageAndCallback(path, cb, { dflt = {}, nullIfEmpty = false } = {}) {
    var emitter;
    var callback = (data) => {
      var proxy = new Proxy(v.from(data), {
        get(target, prop, receiver) {
          if (prop === Symbol.for("relapse.storage.emitter")) {
            if (emitter)
              return emitter;
            emitter = new Emitter();
            v.observe(target, (changes) => {
              for (var change of changes) {
                emitter.emit(change.type !== "delete" ? "SET" : "DEL", {
                  path: change.path,
                  value: change.value
                });
              }
            });
            return emitter;
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      var handler = () => backend.set(proxy);
      v.observe(proxy, handler);
      cb(proxy);
    };
    var backend = createFileBackend2(path);
    if (_loadedStorage[path]) {
      callback(_loadedStorage[path]);
    } else {
      backend.exists().then(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (exists) {
          if (!exists) {
            if (nullIfEmpty) {
              callback(_loadedStorage[path] = null);
            } else {
              _loadedStorage[path] = dflt;
              yield backend.set(dflt);
              callback(dflt);
            }
          } else {
            callback(_loadedStorage[path] = yield backend.get());
          }
        });
        return function(exists) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  function createStorageAsync(path) {
    return _createStorageAsync.apply(this, arguments);
  }
  function _createStorageAsync() {
    _createStorageAsync = _async_to_generator(function* (path, opts = {}) {
      return new Promise((r) => createStorageAndCallback(path, r, opts));
    });
    return _createStorageAsync.apply(this, arguments);
  }
  function preloadStorageIfExists(path) {
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function _preloadStorageIfExists() {
    _preloadStorageIfExists = _async_to_generator(function* (path) {
      if (_loadedStorage[path])
        return true;
      var backend = createFileBackend2(path);
      if (yield backend.exists()) {
        _loadedStorage[path] = yield backend.get();
        return true;
      }
      return false;
    });
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function purgeStorage2(path) {
    return _purgeStorage.apply(this, arguments);
  }
  function _purgeStorage() {
    _purgeStorage = _async_to_generator(function* (path) {
      yield removeFile(path);
      delete _loadedStorage[path];
    });
    return _purgeStorage.apply(this, arguments);
  }
  function awaitStorage2(...proxies) {
    return Promise.all(proxies.map((proxy) => proxy[storagePromiseSymbol]));
  }
  function getPreloadedStorage(path) {
    return _loadedStorage[path];
  }
  var storageInitErrorSymbol, storagePromiseSymbol, _loadedStorage, createStorage2;
  var init_storage2 = __esm({
    "src/lib/api/storage/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_object_observer_min();
      init_fs();
      init_dist();
      storageInitErrorSymbol = Symbol.for("blaze.storage.initError");
      storagePromiseSymbol = Symbol.for("blaze.storage.promise");
      _loadedStorage = {};
      createStorage2 = (path, opts = {}) => {
        var promise = new Promise((r) => resolvePromise = r);
        var awaited, resolved, error, resolvePromise;
        createStorageAndCallback(path, (proxy) => {
          awaited = proxy;
          resolved = true;
          resolvePromise();
        }, opts);
        var check = () => {
          if (resolved)
            return true;
          throw new Error(`Attempted to access storage without initializing: ${path}`);
        };
        return new Proxy({}, {
          ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
            k,
            (t, ...a) => {
              return check() && Reflect[k](awaited, ...a);
            }
          ])),
          get(target, prop, recv) {
            if (prop === storageInitErrorSymbol)
              return error;
            if (prop === storagePromiseSymbol)
              return promise;
            return check() && Reflect.get(awaited ?? target, prop, recv);
          }
        });
      };
    }
  });

  // src/lib/utils/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    BLAZED_PROXY: () => BLAZED_PROXY,
    DISCORD_SERVER: () => DISCORD_SERVER,
    GITHUB: () => GITHUB,
    HTTP_REGEX: () => HTTP_REGEX,
    HTTP_REGEX_MULTI: () => HTTP_REGEX_MULTI,
    OFFICIAL_PLUGINS_REPO_URL: () => OFFICIAL_PLUGINS_REPO_URL,
    RELAPSED_PROXY: () => RELAPSED_PROXY,
    RE_DISCORD_SERVER_ID: () => RE_DISCORD_SERVER_ID,
    RE_PLUGINS_CHANNEL_ID: () => RE_PLUGINS_CHANNEL_ID,
    RE_THEMES_CHANNEL_ID: () => RE_THEMES_CHANNEL_ID
  });
  var DISCORD_SERVER, GITHUB, HTTP_REGEX, HTTP_REGEX_MULTI, BLAZED_PROXY, OFFICIAL_PLUGINS_REPO_URL, RELAPSED_PROXY, RE_DISCORD_SERVER_ID, RE_PLUGINS_CHANNEL_ID, RE_THEMES_CHANNEL_ID;
  var init_constants = __esm({
    "src/lib/utils/constants.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      DISCORD_SERVER = "https://discord.gg/rUg5AvhwdQ";
      GITHUB = "https://github.com/BlazeK1ng420/BlazeCord";
      HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
      HTTP_REGEX_MULTI = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
      BLAZED_PROXY = "https://bn-plugins.github.io/vd-proxy";
      OFFICIAL_PLUGINS_REPO_URL = "https://bn-plugins.github.io/dist/repo.json";
      RELAPSED_PROXY = "https://vd-plugins.github.io/proxy";
      RE_DISCORD_SERVER_ID = "1386286261920202834";
      RE_PLUGINS_CHANNEL_ID = "1386297331984502875";
      RE_THEMES_CHANNEL_ID = "1386286911148265503";
    }
  });

  // src/lib/utils/cyrb64.ts
  function cyrb64(str, seed = 0) {
    var h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return [
      h2 >>> 0,
      h1 >>> 0
    ];
  }
  function cyrb64Hash(str, seed = 0) {
    var [h2, h1] = cyrb64(str, seed);
    return h2.toString(36).padStart(7, "0") + h1.toString(36).padStart(7, "0");
  }
  var init_cyrb64 = __esm({
    "src/lib/utils/cyrb64.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/findInReactTree.ts
  function findInReactTree(tree, filter) {
    return findInTree(tree, filter, {
      walkable: [
        "props",
        "children",
        "child",
        "sibling"
      ]
    });
  }
  var init_findInReactTree = __esm({
    "src/lib/utils/findInReactTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_utils();
    }
  });

  // src/lib/utils/findInTree.ts
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth)
      return;
    if (!tree)
      return;
    try {
      if (filter(tree))
        return tree;
    } catch (e) {
    }
    if (Array.isArray(tree)) {
      for (var item of tree) {
        if (typeof item !== "object" || item === null)
          continue;
        try {
          var found = treeSearch(item, filter, opts, depth + 1);
          if (found)
            return found;
        } catch (e) {
        }
      }
    } else if (typeof tree === "object") {
      for (var key of Object.keys(tree)) {
        if (typeof tree[key] !== "object" || tree[key] === null)
          continue;
        if (opts.walkable.length && !opts.walkable.includes(key))
          continue;
        if (opts.ignore.includes(key))
          continue;
        try {
          var found1 = treeSearch(tree[key], filter, opts, depth + 1);
          if (found1)
            return found1;
        } catch (e) {
        }
      }
    }
  }
  function findInTree(tree, filter, { walkable = [], ignore = [], maxDepth = 100 } = {}) {
    return treeSearch(tree, filter, {
      walkable,
      ignore,
      maxDepth
    }, 0);
  }
  var init_findInTree = __esm({
    "src/lib/utils/findInTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/hookDefineProperty.ts
  function hookDefineProperty(target, property, cb) {
    var targetAsAny = target;
    if (property in target) {
      return void cb(targetAsAny[property]);
    }
    var value;
    Object.defineProperty(targetAsAny, property, {
      get: () => value,
      set(v2) {
        value = cb(v2) ?? v2;
      },
      configurable: true,
      enumerable: false
    });
    return () => {
      delete targetAsAny[property];
      targetAsAny[property] = value;
    };
  }
  var init_hookDefineProperty = __esm({
    "src/lib/utils/hookDefineProperty.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/invariant.ts
  function invariant(condition, message) {
    if (condition)
      return;
    var resolvedMessage = typeof message === "function" ? message() : message;
    var prefix = "[Invariant Violation]";
    var value = resolvedMessage ? `${prefix}: ${resolvedMessage}` : prefix;
    throw new Error(value);
  }
  var init_invariant = __esm({
    "src/lib/utils/invariant.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/logger.ts
  var logger_exports = {};
  __export(logger_exports, {
    LoggerClass: () => LoggerClass,
    logger: () => logger
  });
  var LoggerClass, logger;
  var init_logger = __esm({
    "src/lib/utils/logger.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      LoggerClass = findByNameLazy("Logger");
      logger = new LoggerClass("BlazeCord");
    }
  });

  // src/lib/utils/safeFetch.ts
  function safeFetch(input, options) {
    return _safeFetch.apply(this, arguments);
  }
  function _safeFetch() {
    _safeFetch = _async_to_generator(function* (input, options, timeout = 1e4) {
      var req = yield fetch(input, {
        signal: timeoutSignal(timeout),
        ...options
      });
      if (!req.ok)
        throw new Error(`Request returned non-ok: ${req.status} ${req.statusText}`);
      return req;
    });
    return _safeFetch.apply(this, arguments);
  }
  function timeoutSignal(ms) {
    var controller = new AbortController();
    setTimeout(() => controller.abort(`Timed out after ${ms}ms`), ms);
    return controller.signal;
  }
  var init_safeFetch = __esm({
    "src/lib/utils/safeFetch.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
    }
  });

  // src/lib/utils/index.ts
  var utils_exports = {};
  __export(utils_exports, {
    constants: () => constants_exports,
    cyrb64: () => cyrb64,
    findInReactTree: () => findInReactTree,
    findInTree: () => findInTree,
    hookDefineProperty: () => hookDefineProperty,
    invariant: () => invariant,
    lazy: () => lazy_exports,
    logger: () => logger_exports,
    safeFetch: () => safeFetch
  });
  var init_utils = __esm({
    "src/lib/utils/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_constants();
      init_cyrb64();
      init_findInReactTree();
      init_findInTree();
      init_hookDefineProperty();
      init_invariant();
      init_lazy();
      init_logger();
      init_safeFetch();
    }
  });

  // shims/jsxRuntime.ts
  var jsxRuntime_exports = {};
  __export(jsxRuntime_exports, {
    Fragment: () => Fragment,
    jsx: () => jsx,
    jsxs: () => jsxs
  });
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory)
      args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_jsxRuntime = __esm({
    "shims/jsxRuntime.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      jsxRuntime = findByPropsLazy("jsx", "jsxs", "Fragment");
      Fragment = Symbol.for("react.fragment");
      jsx = (...args) => jsxRuntime.jsx(...unproxyFirstArg(args));
      jsxs = (...args) => jsxRuntime.jsxs(...unproxyFirstArg(args));
    }
  });

  // src/lib/addons/themes/colors/preferences.ts
  var colorsPref;
  var init_preferences = __esm({
    "src/lib/addons/themes/colors/preferences.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage2();
      colorsPref = createStorage2("themes/colors/preferences.json", {
        dflt: {
          selected: null,
          customBackground: null
        }
      });
    }
  });

  // src/metro/common/components.ts
  var components_exports = {};
  __export(components_exports, {
    ActionSheet: () => ActionSheet,
    ActionSheetRow: () => ActionSheetRow,
    AlertActionButton: () => AlertActionButton,
    AlertActions: () => AlertActions,
    AlertModal: () => AlertModal,
    Avatar: () => Avatar,
    AvatarPile: () => AvatarPile,
    BottomSheetTitleHeader: () => BottomSheetTitleHeader,
    Button: () => Button,
    Card: () => Card,
    CompatButton: () => CompatButton,
    CompatSegmentedControl: () => CompatSegmentedControl,
    ContextMenu: () => ContextMenu,
    FlashList: () => FlashList,
    FloatingActionButton: () => FloatingActionButton,
    FormCheckbox: () => FormCheckbox,
    FormRadio: () => FormRadio,
    FormSwitch: () => FormSwitch,
    Forms: () => Forms,
    HelpMessage: () => HelpMessage,
    IconButton: () => IconButton,
    LegacyAlert: () => LegacyAlert,
    LegacyForm: () => LegacyForm,
    LegacyFormArrow: () => LegacyFormArrow,
    LegacyFormCTA: () => LegacyFormCTA,
    LegacyFormCTAButton: () => LegacyFormCTAButton,
    LegacyFormCardSection: () => LegacyFormCardSection,
    LegacyFormCheckbox: () => LegacyFormCheckbox,
    LegacyFormCheckboxRow: () => LegacyFormCheckboxRow,
    LegacyFormCheckmark: () => LegacyFormCheckmark,
    LegacyFormDivider: () => LegacyFormDivider,
    LegacyFormHint: () => LegacyFormHint,
    LegacyFormIcon: () => LegacyFormIcon,
    LegacyFormInput: () => LegacyFormInput,
    LegacyFormLabel: () => LegacyFormLabel,
    LegacyFormRadio: () => LegacyFormRadio,
    LegacyFormRadioGroup: () => LegacyFormRadioGroup,
    LegacyFormRadioRow: () => LegacyFormRadioRow,
    LegacyFormRow: () => LegacyFormRow,
    LegacyFormSection: () => LegacyFormSection,
    LegacyFormSelect: () => LegacyFormSelect,
    LegacyFormSliderRow: () => LegacyFormSliderRow,
    LegacyFormSubLabel: () => LegacyFormSubLabel,
    LegacyFormSwitch: () => LegacyFormSwitch,
    LegacyFormSwitchRow: () => LegacyFormSwitchRow,
    LegacyFormTernaryCheckBox: () => LegacyFormTernaryCheckBox,
    LegacyFormText: () => LegacyFormText,
    LegacyFormTitle: () => LegacyFormTitle,
    PressableScale: () => PressableScale,
    RedesignCompat: () => RedesignCompat,
    RowButton: () => RowButton,
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    SegmentedControl: () => SegmentedControl,
    SegmentedControlPages: () => SegmentedControlPages,
    Stack: () => Stack,
    TableCheckbox: () => TableCheckbox,
    TableCheckboxRow: () => TableCheckboxRow,
    TableRadio: () => TableRadio,
    TableRadioGroup: () => TableRadioGroup,
    TableRadioRow: () => TableRadioRow,
    TableRow: () => TableRow,
    TableRowGroup: () => TableRowGroup,
    TableRowIcon: () => TableRowIcon,
    TableRowTrailingText: () => TableRowTrailingText,
    TableSwitch: () => TableSwitch,
    TableSwitchRow: () => TableSwitchRow,
    Text: () => Text,
    TextArea: () => TextArea,
    TextInput: () => TextInput,
    TwinButtons: () => TwinButtons,
    useSafeAreaInsets: () => useSafeAreaInsets,
    useSegmentedControlState: () => useSegmentedControlState
  });
  var bySingularProp, findSingular, findProp, LegacyAlert, CompatButton, HelpMessage, SafeAreaView, SafeAreaProvider, useSafeAreaInsets, ActionSheetRow, Button, TwinButtons, IconButton, RowButton, PressableScale, TableRow, TableRowIcon, TableRowTrailingText, TableRowGroup, TableRadioGroup, TableRadioRow, TableSwitchRow, TableCheckboxRow, TableSwitch, TableRadio, TableCheckbox, FormSwitch, FormRadio, FormCheckbox, Card, RedesignCompat, AlertModal, AlertActionButton, AlertActions, AvatarPile, ContextMenu, Stack, Avatar, TextInput, TextArea, SegmentedControl, SegmentedControlPages, useSegmentedControlState, CompatSegmentedControl, FloatingActionButton, ActionSheet, BottomSheetTitleHeader, textsModule, Text, Forms, LegacyForm, LegacyFormArrow, LegacyFormCTA, LegacyFormCTAButton, LegacyFormCardSection, LegacyFormCheckbox, LegacyFormCheckboxRow, LegacyFormCheckmark, LegacyFormDivider, LegacyFormHint, LegacyFormIcon, LegacyFormInput, LegacyFormLabel, LegacyFormRadio, LegacyFormRadioGroup, LegacyFormRadioRow, LegacyFormRow, LegacyFormSection, LegacyFormSelect, LegacyFormSliderRow, LegacyFormSubLabel, LegacyFormSwitch, LegacyFormSwitchRow, LegacyFormTernaryCheckBox, LegacyFormText, LegacyFormTitle, FlashList;
  var init_components = __esm({
    "src/metro/common/components.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_factories();
      init_finders();
      init_wrappers();
      bySingularProp = createFilterDefinition(([prop], m2) => m2[prop] && Object.keys(m2).length === 1, (prop) => `blaze.metro.common.components.bySingularProp(${prop})`);
      findSingular = (prop) => proxyLazy(() => findExports(bySingularProp(prop))?.[prop]);
      findProp = (...props) => proxyLazy(() => findByProps(...props)[props[0]]);
      LegacyAlert = findByDisplayNameLazy("FluxContainer(Alert)");
      CompatButton = findByPropsLazy("Looks", "Colors", "Sizes");
      HelpMessage = findByNameLazy("HelpMessage");
      ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = lazyDestructure(() => findByProps("useSafeAreaInsets")));
      ActionSheetRow = findProp("ActionSheetRow");
      Button = findSingular("Button");
      TwinButtons = findProp("TwinButtons");
      IconButton = findSingular("IconButton");
      RowButton = findProp("RowButton");
      PressableScale = findProp("PressableScale");
      TableRow = findProp("TableRow");
      TableRowIcon = findProp("TableRowIcon");
      TableRowTrailingText = findProp("TableRowTrailingText");
      TableRowGroup = findProp("TableRowGroup");
      TableRadioGroup = findProp("TableRadioGroup");
      TableRadioRow = findProp("TableRadioRow");
      TableSwitchRow = findProp("TableSwitchRow");
      TableCheckboxRow = findProp("TableCheckboxRow");
      TableSwitch = findSingular("FormSwitch");
      TableRadio = findSingular("FormRadio");
      TableCheckbox = findSingular("FormCheckbox");
      FormSwitch = findSingular("FormSwitch");
      FormRadio = findSingular("FormRadio");
      FormCheckbox = findSingular("FormCheckbox");
      Card = findProp("Card");
      RedesignCompat = proxyLazy(() => findByProps("RedesignCompat").RedesignCompat);
      AlertModal = findProp("AlertModal");
      AlertActionButton = findProp("AlertActionButton");
      AlertActions = findProp("AlertActions");
      AvatarPile = findSingular("AvatarPile");
      ContextMenu = findProp("ContextMenu");
      Stack = findProp("Stack");
      Avatar = findProp("default", "AvatarSizes", "getStatusSize");
      TextInput = findSingular("TextInput");
      TextArea = findSingular("TextArea");
      SegmentedControl = findProp("SegmentedControl");
      SegmentedControlPages = findProp("SegmentedControlPages");
      useSegmentedControlState = findSingular("useSegmentedControlState");
      CompatSegmentedControl = findProp("CompatSegmentedControl");
      FloatingActionButton = findProp("FloatingActionButton");
      ActionSheet = findProp("ActionSheet");
      BottomSheetTitleHeader = findProp("BottomSheetTitleHeader");
      textsModule = findByPropsLazy("Text", "LegacyText");
      Text = proxyLazy(() => textsModule.Text);
      Forms = findByPropsLazy("Form", "FormSection");
      ({ Form: LegacyForm, FormArrow: LegacyFormArrow, FormCTA: LegacyFormCTA, FormCTAButton: LegacyFormCTAButton, FormCardSection: LegacyFormCardSection, FormCheckbox: LegacyFormCheckbox, FormCheckboxRow: LegacyFormCheckboxRow, FormCheckmark: LegacyFormCheckmark, FormDivider: LegacyFormDivider, FormHint: LegacyFormHint, FormIcon: LegacyFormIcon, FormInput: LegacyFormInput, FormLabel: LegacyFormLabel, FormRadio: LegacyFormRadio, FormRadioGroup: LegacyFormRadioGroup, FormRadioRow: LegacyFormRadioRow, FormRow: LegacyFormRow, FormSection: LegacyFormSection, FormSelect: LegacyFormSelect, FormSliderRow: LegacyFormSliderRow, FormSubLabel: LegacyFormSubLabel, FormSwitch: LegacyFormSwitch, FormSwitchRow: LegacyFormSwitchRow, FormTernaryCheckBox: LegacyFormTernaryCheckBox, FormText: LegacyFormText, FormTitle: LegacyFormTitle } = lazyDestructure(() => Forms));
      FlashList = findProp("FlashList");
    }
  });

  // src/metro/common/index.ts
  var common_exports = {};
  __export(common_exports, {
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils,
    NavigationNative: () => NavigationNative,
    React: () => React2,
    ReactNative: () => ReactNative,
    assets: () => assets,
    channels: () => channels,
    clipboard: () => clipboard,
    commands: () => commands,
    components: () => components_exports,
    constants: () => constants,
    i18n: () => i18n,
    invites: () => invites,
    messageUtil: () => messageUtil,
    navigation: () => navigation,
    navigationStack: () => navigationStack,
    semver: () => semver,
    toasts: () => toasts,
    tokens: () => tokens,
    url: () => url,
    useToken: () => useToken
  });
  var import_react_native2, constants, channels, i18n, openURL, url, clipboard, assets, invites, commands, navigation, toasts, messageUtil, navigationStack, NavigationNative, semver, tokens, useToken, Flux, FluxDispatcher, FluxUtils, React2, ReactNative;
  var init_common = __esm({
    "src/metro/common/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      import_react_native2 = __toESM(require_react_native());
      init_components();
      constants = findByPropsLazy("Fonts", "Permissions");
      channels = findByPropsLazy("getVoiceChannelId");
      i18n = findByPropsLazy("Messages");
      openURL = (url2) => import_react_native2.Linking.openURL(url2);
      url = nativeModuleProxy.NativeLinkingModule || nativeModuleProxy.DCDLinkingManager ? {
        openURL,
        openDeeplink: openURL,
        handleSupportedURL: openURL,
        isDiscordConnectOauth2Deeplink: () => {
          console.warn("url.isDiscordConnectOauth2Deeplink is not implemented and will always return false");
          return false;
        },
        showLongPressUrlActionSheet: () => console.warn("url.showLongPressUrlActionSheet is not implemented"),
        handleMessageLinking: findByFilePathLazy("modules/links/native/handleContentLinking.tsx", true)
      } : findByPropsLazy("openURL", "openDeeplink");
      clipboard = findByPropsLazy("setString", "getString", "hasString");
      assets = findByPropsLazy("registerAsset");
      invites = findByPropsLazy("acceptInviteAndTransitionToInviteChannel");
      commands = findByPropsLazy("getBuiltInCommands");
      navigation = findByPropsLazy("pushLazy");
      toasts = findByFilePathLazy("modules/toast/native/ToastActionCreators.tsx", true);
      messageUtil = findByPropsLazy("sendBotMessage");
      navigationStack = findByPropsLazy("createStackNavigator");
      NavigationNative = findByPropsLazy("NavigationContainer");
      semver = findByPropsLazy("parse", "clean");
      tokens = findByPropsLazy("unsafe_rawColors", "colors");
      ({ useToken } = lazyDestructure(() => findByProps("useToken")));
      Flux = findByPropsLazy("connectStores");
      FluxDispatcher = findByProps("_interceptors");
      FluxUtils = findByProps("useStateFromStores");
      React2 = window.React = findByPropsLazy("createElement");
      ReactNative = window.ReactNative = findByPropsLazy("AppRegistry");
    }
  });

  // src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    common: () => common_exports,
    factories: () => factories_exports,
    filters: () => filters_exports,
    findAllExports: () => findAllExports,
    findAllModule: () => findAllModule,
    findAllModuleId: () => findAllModuleId,
    findByDisplayName: () => findByDisplayName,
    findByDisplayNameAll: () => findByDisplayNameAll,
    findByDisplayNameLazy: () => findByDisplayNameLazy,
    findByFilePath: () => findByFilePath,
    findByFilePathLazy: () => findByFilePathLazy,
    findByName: () => findByName,
    findByNameAll: () => findByNameAll,
    findByNameLazy: () => findByNameLazy,
    findByProps: () => findByProps,
    findByPropsAll: () => findByPropsAll,
    findByPropsLazy: () => findByPropsLazy,
    findByStoreName: () => findByStoreName,
    findByStoreNameLazy: () => findByStoreNameLazy,
    findByTypeName: () => findByTypeName,
    findByTypeNameAll: () => findByTypeNameAll,
    findByTypeNameLazy: () => findByTypeNameLazy,
    findExports: () => findExports,
    findModule: () => findModule,
    findModuleId: () => findModuleId,
    lazy: () => lazy_exports2
  });
  var init_metro = __esm({
    "src/metro/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_factories();
      init_filters();
      init_finders();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:chroma-js
  var require_chroma_js = __commonJS({
    "globals:chroma-js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["chroma-js"];
    }
  });

  // src/lib/addons/themes/colors/parser.ts
  function parseColorManifest(manifest) {
    var resolveType = (type2 = "dark") => (colorsPref.type ?? type2) === "dark" ? "darker" : "light";
    if (manifest.spec === 3) {
      var semanticColorDefinitions = {};
      for (var [semanticColorKey, semanticColorValue] of Object.entries(manifest.main.semantic ?? {})) {
        if (typeof semanticColorValue === "object") {
          var { type, value, opacity: semanticColorOpacity } = semanticColorValue;
          if (type === "raw") {
            semanticColorDefinitions[semanticColorKey] = {
              value,
              opacity: semanticColorOpacity ?? 1
            };
          } else {
            var rawColorValue = tokenRef.RawColor[value];
            semanticColorDefinitions[semanticColorKey] = {
              value: rawColorValue,
              opacity: semanticColorOpacity ?? 1
            };
          }
        } else if (typeof semanticColorValue === "string") {
          if (semanticColorValue.startsWith("#")) {
            semanticColorDefinitions[semanticColorKey] = {
              value: import_chroma_js.default.hex(semanticColorValue).hex(),
              opacity: 1
            };
          } else {
            semanticColorDefinitions[semanticColorKey] = {
              value: tokenRef.RawColor[semanticColorValue],
              opacity: 1
            };
          }
        } else {
          throw new Error(`Invalid semantic definitions: ${semanticColorValue}`);
        }
      }
      if (import_react_native3.Platform.OS === "android")
        applyAndroidAlphaKeys(manifest.main.raw);
      return {
        spec: 3,
        reference: resolveType(manifest.type),
        semantic: semanticColorDefinitions,
        raw: manifest.main.raw ?? {},
        background: manifest.main.background
      };
    }
    if (manifest.spec === 2) {
      var semanticDefinitions = {};
      var background = manifest.background ? {
        ...omit(manifest.background, [
          "alpha"
        ]),
        opacity: manifest.background.alpha
      } : void 0;
      if (manifest.semanticColors) {
        for (var key in manifest.semanticColors) {
          var values = manifest.semanticColors[key].map((c2) => c2 || void 0).slice(0, 2);
          if (!values[0])
            continue;
          semanticDefinitions[key] = {
            value: normalizeToHex(values[resolveType() === "light" ? 1 : 0]),
            opacity: 1
          };
        }
      }
      if (manifest.rawColors) {
        var draft = {};
        for (var key1 in manifest.rawColors) {
          var value1 = manifest.rawColors[key1];
          if (!value1)
            continue;
          draft[key1] = normalizeToHex(value1);
        }
        if (import_react_native3.Platform.OS === "android")
          applyAndroidAlphaKeys(draft);
        manifest.rawColors = draft;
      }
      return {
        spec: 2,
        reference: resolveType(),
        semantic: semanticDefinitions,
        raw: manifest.rawColors ?? {},
        background
      };
    }
    throw new Error("Invalid theme spec");
  }
  function applyAndroidAlphaKeys(rawColors2) {
    if (!rawColors2)
      return;
    var alphaMap = {
      "BLACK_ALPHA_60": [
        "BLACK",
        0.6
      ],
      "BRAND_NEW_360_ALPHA_20": [
        "BRAND_360",
        0.2
      ],
      "BRAND_NEW_360_ALPHA_25": [
        "BRAND_360",
        0.25
      ],
      "BRAND_NEW_500_ALPHA_20": [
        "BRAND_500",
        0.2
      ],
      "PRIMARY_DARK_500_ALPHA_20": [
        "PRIMARY_500",
        0.2
      ],
      "PRIMARY_DARK_700_ALPHA_60": [
        "PRIMARY_700",
        0.6
      ],
      "STATUS_GREEN_500_ALPHA_20": [
        "GREEN_500",
        0.2
      ],
      "STATUS_RED_500_ALPHA_20": [
        "RED_500",
        0.2
      ]
    };
    for (var key in alphaMap) {
      var [colorKey, alpha] = alphaMap[key];
      if (!rawColors2[colorKey])
        continue;
      rawColors2[key] = (0, import_chroma_js.default)(rawColors2[colorKey]).alpha(alpha).hex();
    }
    return rawColors2;
  }
  function normalizeToHex(colorString) {
    if (colorString === void 0)
      return void 0;
    if (import_chroma_js.default.valid(colorString))
      return (0, import_chroma_js.default)(colorString).hex();
    var color2 = Number((0, import_react_native3.processColor)(colorString));
    return import_chroma_js.default.rgb(
      color2 >> 16 & 255,
      color2 >> 8 & 255,
      color2 & 255,
      color2 >> 24 & 255
      // alpha
    ).hex();
  }
  var import_chroma_js, import_react_native3, tokenRef;
  var init_parser = __esm({
    "src/lib/addons/themes/colors/parser.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_metro();
      import_chroma_js = __toESM(require_chroma_js());
      init_dist();
      import_react_native3 = __toESM(require_react_native());
      init_preferences();
      tokenRef = findByProps("SemanticColor");
    }
  });

  // src/lib/addons/themes/colors/updater.ts
  function updateBlazeColor(colorManifest, { update = true }) {
    if (settings.safeMode?.enabled)
      return;
    var internalDef = colorManifest ? parseColorManifest(colorManifest) : null;
    var ref = Object.assign(_colorRef, {
      current: internalDef,
      key: `blz-theme-${++_inc}`,
      lastSetDiscordTheme: !ThemeStore.theme.startsWith("blz-theme-") ? ThemeStore.theme : _colorRef.lastSetDiscordTheme
    });
    if (internalDef != null) {
      tokenRef2.Theme[ref.key.toUpperCase()] = ref.key;
      FormDivider.DIVIDER_COLORS[ref.key] = FormDivider.DIVIDER_COLORS[ref.current.reference];
      Object.keys(tokenRef2.Shadow).forEach((k) => tokenRef2.Shadow[k][ref.key] = tokenRef2.Shadow[k][ref.current.reference]);
      Object.keys(tokenRef2.SemanticColor).forEach((k) => {
        tokenRef2.SemanticColor[k][ref.key] = {
          ...tokenRef2.SemanticColor[k][ref.current.reference]
        };
      });
    }
    if (update) {
      AppearanceManager.setShouldSyncAppearanceSettings(false);
      AppearanceManager.updateTheme(internalDef != null ? ref.key : ref.lastSetDiscordTheme);
    }
  }
  var tokenRef2, origRawColor, AppearanceManager, ThemeStore, FormDivider, _inc, _colorRef;
  var init_updater = __esm({
    "src/lib/addons/themes/colors/updater.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings();
      init_metro();
      init_parser();
      tokenRef2 = findByProps("SemanticColor");
      origRawColor = {
        ...tokenRef2.RawColor
      };
      AppearanceManager = findByPropsLazy("updateTheme");
      ThemeStore = findByStoreNameLazy("ThemeStore");
      FormDivider = findByPropsLazy("DIVIDER_COLORS");
      _inc = 1;
      _colorRef = {
        current: null,
        key: `blz-theme-${_inc}`,
        origRaw: origRawColor,
        lastSetDiscordTheme: "darker"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/background.tsx
  function ThemeBackground({ children }) {
    useObservable([
      colorsPref
    ]);
    if (!_colorRef.current || colorsPref.customBackground === "hidden" || !_colorRef.current.background?.url || _colorRef.current.background?.blur && typeof _colorRef.current.background?.blur !== "number") {
      return children;
    }
    return /* @__PURE__ */ jsx(import_react_native4.ImageBackground, {
      style: {
        flex: 1,
        height: "100%"
      },
      source: {
        uri: _colorRef.current.background?.url
      },
      blurRadius: _colorRef.current.background?.blur,
      children
    });
  }
  function patchChatBackground() {
    var patches2 = [
      after("render", Messages, (_2, ret) => {
        if (!_colorRef.current || !_colorRef.current.background?.url)
          return;
        var messagesComponent = findInReactTree(ret, (x2) => x2 && "HACK_fixModalInteraction" in x2.props && x2?.props?.style);
        if (messagesComponent) {
          var flattened = import_react_native4.StyleSheet.flatten(messagesComponent.props.style);
          var backgroundColor = (0, import_chroma_js2.default)(flattened.backgroundColor || "black").alpha(1 - (_colorRef.current.background?.opacity ?? 1)).hex();
          messagesComponent.props.style = import_react_native4.StyleSheet.flatten([
            messagesComponent.props.style,
            {
              backgroundColor
            }
          ]);
        }
        return /* @__PURE__ */ jsx(ThemeBackground, {
          children: ret
        });
      })
    ];
    return () => patches2.forEach((x2) => x2());
  }
  var import_chroma_js2, import_react_native4, Messages;
  var init_background = __esm({
    "src/lib/addons/themes/colors/patches/background.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_preferences();
      init_updater();
      init_patcher();
      init_storage2();
      init_utils();
      init_metro();
      import_chroma_js2 = __toESM(require_chroma_js());
      import_react_native4 = __toESM(require_react_native());
      Messages = findByFilePathLazy("components_native/chat/Messages.tsx", true);
    }
  });

  // src/lib/addons/themes/colors/patches/resolver.ts
  function patchDefinitionAndResolver() {
    var callback = ([theme]) => theme === _colorRef.key ? [
      _colorRef.current.reference
    ] : void 0;
    Object.keys(tokenReference.RawColor).forEach((key) => {
      Object.defineProperty(tokenReference.RawColor, key, {
        configurable: true,
        enumerable: true,
        get: () => {
          var ret = _colorRef.current?.raw[key];
          return ret || _colorRef.origRaw[key];
        }
      });
    });
    var unpatches = [
      before("isThemeDark", isThemeModule, callback),
      before("isThemeLight", isThemeModule, callback),
      before("updateTheme", NativeThemeModule, callback),
      instead("resolveSemanticColor", tokenReference.default.meta ?? tokenReference.default.internal, (args, orig) => {
        if (!_colorRef.current)
          return orig(...args);
        if (args[0] !== _colorRef.key)
          return orig(...args);
        args[0] = _colorRef.current.reference;
        var [name, colorDef] = extractInfo(_colorRef.current.reference, args[1]);
        var semanticDef = _colorRef.current.semantic[name];
        if (!semanticDef && _colorRef.current.spec === 2 && name in SEMANTIC_FALLBACK_MAP) {
          semanticDef = _colorRef.current.semantic[SEMANTIC_FALLBACK_MAP[name]];
        }
        if (semanticDef?.value) {
          if (semanticDef.opacity === 1)
            return semanticDef.value;
          return (0, import_chroma_js3.default)(semanticDef.value).alpha(semanticDef.opacity).hex();
        }
        var rawValue = _colorRef.current.raw[colorDef.raw];
        if (rawValue) {
          return colorDef.opacity === 1 ? rawValue : (0, import_chroma_js3.default)(rawValue).alpha(colorDef.opacity).hex();
        }
        return orig(...args);
      }),
      () => {
        Object.defineProperty(tokenReference, "RawColor", {
          configurable: true,
          writable: true,
          value: _colorRef.origRaw
        });
      }
    ];
    return () => unpatches.forEach((p) => p());
  }
  function extractInfo(themeName, colorObj) {
    var propName = colorObj[extractInfo._sym ??= Object.getOwnPropertySymbols(colorObj)[0]];
    var colorDef = tokenReference.SemanticColor[propName];
    return [
      propName,
      colorDef[themeName]
    ];
  }
  var import_chroma_js3, tokenReference, isThemeModule, SEMANTIC_FALLBACK_MAP;
  var init_resolver = __esm({
    "src/lib/addons/themes/colors/patches/resolver.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_modules();
      init_patcher();
      init_metro();
      init_filters();
      init_lazy2();
      import_chroma_js3 = __toESM(require_chroma_js());
      tokenReference = findByProps("SemanticColor");
      isThemeModule = createLazyModule(byMutableProp("isThemeDark"));
      SEMANTIC_FALLBACK_MAP = {
        "BG_BACKDROP": "BACKGROUND_FLOATING",
        "BG_BASE_PRIMARY": "BACKGROUND_PRIMARY",
        "BG_BASE_SECONDARY": "BACKGROUND_SECONDARY",
        "BG_BASE_TERTIARY": "BACKGROUND_SECONDARY_ALT",
        "BG_MOD_FAINT": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_STRONG": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_SUBTLE": "BACKGROUND_MODIFIER_ACCENT",
        "BG_SURFACE_OVERLAY": "BACKGROUND_FLOATING",
        "BG_SURFACE_OVERLAY_TMP": "BACKGROUND_FLOATING",
        "BG_SURFACE_RAISED": "BACKGROUND_MOBILE_PRIMARY"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/storage.ts
  function patchStorage() {
    var patchedKeys = /* @__PURE__ */ new Set([
      "ThemeStore",
      "SelectivelySyncedUserSettingsStore"
    ]);
    var patches2 = [
      after("get", mmkvStorage, ([key], ret) => {
        if (!_colorRef.current || !patchedKeys.has(key))
          return;
        var state = findInTree(ret._state, (s) => typeof s.theme === "string");
        if (state)
          state.theme = _colorRef.key;
      }),
      before("set", mmkvStorage, ([key, value]) => {
        if (!patchedKeys.has(key))
          return;
        var json = JSON.stringify(value);
        var lastSetDiscordTheme = _colorRef.lastSetDiscordTheme ?? "darker";
        var replaced = json.replace(/"theme":"blz-theme-\d+"/, `"theme":${JSON.stringify(lastSetDiscordTheme)}`);
        return [
          key,
          JSON.parse(replaced)
        ];
      })
    ];
    return () => patches2.forEach((p) => p());
  }
  var mmkvStorage;
  var init_storage3 = __esm({
    "src/lib/addons/themes/colors/patches/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_patcher();
      init_utils();
      init_lazy();
      init_metro();
      mmkvStorage = proxyLazy(() => {
        var newModule = findByProps("impl");
        if (typeof newModule?.impl === "object")
          return newModule.impl;
        return findByProps("storage");
      });
    }
  });

  // src/lib/addons/themes/colors/index.ts
  function initColors(manifest) {
    var patches2 = [
      patchStorage(),
      patchDefinitionAndResolver(),
      patchChatBackground()
    ];
    if (manifest)
      updateBlazeColor(manifest, {
        update: false
      });
    return () => patches2.forEach((p) => p());
  }
  var init_colors = __esm({
    "src/lib/addons/themes/colors/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_background();
      init_resolver();
      init_storage3();
      init_updater();
    }
  });

  // src/lib/addons/themes/index.ts
  var themes_exports = {};
  __export(themes_exports, {
    fetchTheme: () => fetchTheme,
    getCurrentTheme: () => getCurrentTheme,
    getThemeFromLoader: () => getThemeFromLoader,
    initThemes: () => initThemes,
    installTheme: () => installTheme,
    removeTheme: () => removeTheme,
    selectTheme: () => selectTheme,
    themes: () => themes,
    updateThemes: () => updateThemes,
    writeThemeToNative: () => writeThemeToNative
  });
  function writeThemeToNative(theme) {
    return _writeThemeToNative.apply(this, arguments);
  }
  function _writeThemeToNative() {
    _writeThemeToNative = _async_to_generator(function* (theme) {
      if (typeof theme !== "object")
        throw new Error("Theme must be an object");
      yield createFileBackend(getThemeFilePath() || "theme.json").set(theme);
    });
    return _writeThemeToNative.apply(this, arguments);
  }
  function processData(data) {
    if (data.semanticColors) {
      var { semanticColors: semanticColors2 } = data;
      for (var key in semanticColors2) {
        for (var index in semanticColors2[key]) {
          semanticColors2[key][index] &&= normalizeToHex(semanticColors2[key][index]) || false;
        }
      }
    }
    if (data.rawColors) {
      var { rawColors: rawColors2 } = data;
      for (var key1 in rawColors2) {
        var normalized = normalizeToHex(rawColors2[key1]);
        if (normalized)
          data.rawColors[key1] = normalized;
      }
      if (import_react_native5.Platform.OS === "android")
        applyAndroidAlphaKeys(rawColors2);
    }
    data.spec ??= 2;
    return data;
  }
  function validateTheme(themeJSON) {
    if (typeof themeJSON !== "object" || themeJSON === null)
      return false;
    if (themeJSON.spec !== 2 && themeJSON.spec !== 3)
      return false;
    if (themeJSON.spec === 3 && !themeJSON.main)
      return false;
    return true;
  }
  function fetchTheme(url2) {
    return _fetchTheme.apply(this, arguments);
  }
  function _fetchTheme() {
    _fetchTheme = _async_to_generator(function* (url2, selected = false) {
      var themeJSON;
      try {
        themeJSON = yield (yield safeFetch(url2, {
          cache: "no-store"
        })).json();
      } catch (e) {
        throw new Error(`Failed to fetch theme at ${url2}`);
      }
      if (!validateTheme(themeJSON))
        throw new Error(`Invalid theme at ${url2}`);
      themes[url2] = {
        id: url2,
        selected,
        data: processData(themeJSON)
      };
      if (selected) {
        writeThemeToNative(themes[url2]);
        updateBlazeColor(themes[url2].data, {
          update: true
        });
      }
    });
    return _fetchTheme.apply(this, arguments);
  }
  function installTheme(url2) {
    return _installTheme.apply(this, arguments);
  }
  function _installTheme() {
    _installTheme = _async_to_generator(function* (url2) {
      if (typeof url2 !== "string" || url2 in themes)
        throw new Error("Theme already installed");
      yield fetchTheme(url2);
    });
    return _installTheme.apply(this, arguments);
  }
  function selectTheme(theme, write = true) {
    if (theme)
      theme.selected = true;
    Object.keys(themes).forEach((k) => themes[k].selected = themes[k].id === theme?.id);
    if (theme == null && write) {
      updateBlazeColor(null, {
        update: true
      });
      return writeThemeToNative({});
    } else if (theme) {
      updateBlazeColor(theme.data, {
        update: true
      });
      return writeThemeToNative(theme);
    }
  }
  function removeTheme(id) {
    return _removeTheme.apply(this, arguments);
  }
  function _removeTheme() {
    _removeTheme = _async_to_generator(function* (id) {
      var theme = themes[id];
      if (theme.selected)
        yield selectTheme(null);
      delete themes[id];
      return theme.selected;
    });
    return _removeTheme.apply(this, arguments);
  }
  function updateThemes() {
    return _updateThemes.apply(this, arguments);
  }
  function _updateThemes() {
    _updateThemes = _async_to_generator(function* () {
      yield awaitStorage(themes);
      var currentTheme = getThemeFromLoader();
      yield allSettled(Object.keys(themes).map((id) => fetchTheme(id, currentTheme?.id === id)));
    });
    return _updateThemes.apply(this, arguments);
  }
  function getCurrentTheme() {
    return Object.values(themes).find((t) => t.selected) ?? null;
  }
  function getThemeFromLoader() {
    return getStoredTheme();
  }
  function initThemes() {
    return _initThemes.apply(this, arguments);
  }
  function _initThemes() {
    _initThemes = _async_to_generator(function* () {
      if (!isThemeSupported())
        return;
      try {
        if (isBlazedLoader()) {
          writeFile("../relapse_theme.json", "null");
        }
        yield awaitStorage2(colorsPref);
        var currentTheme = getThemeFromLoader();
        initColors(currentTheme?.data ?? null);
        updateThemes().catch((e) => console.error("Failed to update themes", e));
      } catch (e) {
        console.error("Failed to initialize themes", e);
      }
    });
    return _initThemes.apply(this, arguments);
  }
  var import_react_native5, themes;
  var init_themes = __esm({
    "src/lib/addons/themes/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_loader();
      init_storage2();
      init_utils();
      import_react_native5 = __toESM(require_react_native());
      init_colors();
      init_parser();
      init_preferences();
      init_updater();
      themes = wrapSync(createStorage(createMMKVBackend("RELAPSE_THEMES")));
    }
  });

  // src/lib/api/native/loader.ts
  function isRelapseLoader() {
    return relapseLoaderIdentity != null;
  }
  function isBlazedLoader() {
    return blazedLoaderIdentity != null;
  }
  function polyfillRelapseLoaderIdentity() {
    if (!isBlazedLoader() || isRelapseLoader())
      return null;
    var loader = {
      name: blazedLoaderIdentity.loaderName,
      features: {}
    };
    if (isLoaderConfigSupported())
      loader.features.loaderConfig = true;
    if (isSysColorsSupported()) {
      loader.features.syscolors = {
        prop: "__relapse_syscolors"
      };
      Object.defineProperty(globalThis, "__relapse_syscolors", {
        get: () => getSysColors(),
        configurable: true
      });
    }
    if (isThemeSupported()) {
      loader.features.themes = {
        prop: "__relapse_theme"
      };
      Object.defineProperty(globalThis, "__relapse_theme", {
        // get: () => getStoredTheme(),
        get: () => {
          var id = getStoredTheme()?.id;
          if (!id)
            return null;
          var { themes: themes2 } = (init_themes(), __toCommonJS(themes_exports));
          return themes2[id] ?? getStoredTheme() ?? null;
        },
        configurable: true
      });
    }
    Object.defineProperty(globalThis, "__relapse_loader", {
      get: () => loader,
      configurable: true
    });
    return loader;
  }
  function getRelapseLoaderIdentity() {
    if (globalThis.__relapse_loader)
      return globalThis.__relapse_loader;
    return polyfillRelapseLoaderIdentity();
  }
  function getLoaderName() {
    if (isBlazedLoader())
      return blazedLoaderIdentity.loaderName;
    else if (isRelapseLoader())
      return relapseLoaderIdentity.name;
    return "Unknown";
  }
  function getLoaderVersion() {
    if (isBlazedLoader())
      return blazedLoaderIdentity.loaderVersion;
    return null;
  }
  function isLoaderConfigSupported() {
    if (isBlazedLoader()) {
      return true;
    } else if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.loaderConfig;
    }
    return false;
  }
  function isThemeSupported() {
    if (isBlazedLoader()) {
      return blazedLoaderIdentity.hasThemeSupport;
    } else if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.themes != null;
    }
    return false;
  }
  function getStoredTheme() {
    if (isBlazedLoader()) {
      return blazedLoaderIdentity.storedTheme;
    } else if (isRelapseLoader()) {
      var themeProp = relapseLoaderIdentity.features.themes?.prop;
      if (!themeProp)
        return null;
      return globalThis[themeProp] || null;
    }
    return null;
  }
  function getThemeFilePath() {
    if (isBlazedLoader()) {
      return "blazecord/current-theme.json";
    } else if (isRelapseLoader()) {
      return "relapse_theme.json";
    }
    return null;
  }
  function isReactDevToolsPreloaded() {
    if (isBlazedLoader()) {
      return Boolean(window.__reactDevTools);
    }
    if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.devtools != null;
    }
    return false;
  }
  function getReactDevToolsProp() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isBlazedLoader()) {
      window.__blazecord_rdt = window.__reactDevTools.exports;
      return "__blazecord_rdt";
    }
    if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.devtools.prop;
    }
    return null;
  }
  function getReactDevToolsVersion() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isBlazedLoader()) {
      return window.__reactDevTools.version || null;
    }
    if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.devtools.version;
    }
    return null;
  }
  function isSysColorsSupported() {
    if (isBlazedLoader())
      return blazedLoaderIdentity.isSysColorsSupported;
    else if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.syscolors != null;
    }
    return false;
  }
  function getSysColors() {
    if (!isSysColorsSupported())
      return null;
    if (isBlazedLoader()) {
      return blazedLoaderIdentity.sysColors;
    } else if (isRelapseLoader()) {
      return relapseLoaderIdentity.features.syscolors.prop;
    }
    return null;
  }
  function getLoaderConfigPath() {
    if (isBlazedLoader()) {
      return "blazecord/loader.json";
    } else if (isRelapseLoader()) {
      return "relapse_loader.json";
    }
    return "loader.json";
  }
  function isFontSupported() {
    if (isBlazedLoader())
      return blazedLoaderIdentity.fontPatch === 2;
    return false;
  }
  var blazedLoaderIdentity, relapseLoaderIdentity;
  var init_loader = __esm({
    "src/lib/api/native/loader.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
      blazedLoaderIdentity = globalThis.__BLAZE_IS_LOADED__;
      relapseLoaderIdentity = globalThis.__relapse_loader;
      getRelapseLoaderIdentity();
    }
  });

  // src/lib/api/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    loaderConfig: () => loaderConfig,
    settings: () => settings
  });
  var settings, loaderConfig;
  var init_settings = __esm({
    "src/lib/api/settings.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage();
      init_loader();
      settings = wrapSync(createStorage(createMMKVBackend("RELAPSE_SETTINGS")));
      loaderConfig = wrapSync(createStorage(createFileBackend(getLoaderConfigPath(), {
        customLoadUrl: {
          enabled: false,
          url: "http://localhost:4040/blaze.js"
        }
      })));
    }
  });

  // src/metro/polyfills/redesign.ts
  var redesign_exports = {};
  __export(redesign_exports, {
    default: () => redesign_default
  });
  var redesignProps, _module, _source, cacher, actualExports, exportsKeysLength, prop, id, moduleExports, redesign_default;
  var init_redesign = __esm({
    "src/metro/polyfills/redesign.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      redesignProps = /* @__PURE__ */ new Set([
        "AlertActionButton",
        "AlertModal",
        "AlertModalContainer",
        "AvatarDuoPile",
        "AvatarPile",
        "BACKDROP_OPAQUE_MAX_OPACITY",
        "Backdrop",
        "Button",
        "Card",
        "ContextMenu",
        "ContextMenuContainer",
        "FauxHeader",
        "FloatingActionButton",
        "GhostInput",
        "GuildIconPile",
        "HeaderActionButton",
        "HeaderButton",
        "HeaderSubmittingIndicator",
        "IconButton",
        "Input",
        "InputButton",
        "InputContainer",
        "LayerContext",
        "LayerScope",
        "Modal",
        "ModalActionButton",
        "ModalContent",
        "ModalDisclaimer",
        "ModalFloatingAction",
        "ModalFloatingActionSpacer",
        "ModalFooter",
        "ModalScreen",
        "ModalStepIndicator",
        "NAV_BAR_HEIGHT",
        "NAV_BAR_HEIGHT_MULTILINE",
        "Navigator",
        "NavigatorHeader",
        "NavigatorScreen",
        "Pile",
        "PileOverflow",
        "RedesignCompat",
        "RedesignCompatContext",
        "RowButton",
        "STATUS_BAR_HEIGHT",
        "SceneLoadingIndicator",
        "SearchField",
        "SegmentedControl",
        "SegmentedControlPages",
        "Slider",
        "Stack",
        "StepModal",
        "StickyContext",
        "StickyHeader",
        "StickyWrapper",
        "TABLE_ROW_CONTENT_HEIGHT",
        "TABLE_ROW_HEIGHT",
        "TableCheckboxRow",
        "TableRadioGroup",
        "TableRadioRow",
        "TableRow",
        "TableRowGroup",
        "TableRowGroupTitle",
        "TableRowIcon",
        "TableSwitchRow",
        "Tabs",
        "TextArea",
        "TextField",
        "TextInput",
        "Toast",
        "dismissAlerts",
        "getHeaderBackButton",
        "getHeaderCloseButton",
        "getHeaderConditionalBackButton",
        "getHeaderNoTitle",
        "getHeaderTextButton",
        "hideContextMenu",
        "navigatorShouldCrossfade",
        "openAlert",
        "useAccessibilityNativeStackOptions",
        "useAndroidNavScrim",
        "useCoachmark",
        "useFloatingActionButtonScroll",
        "useFloatingActionButtonState",
        "useNativeStackNavigation",
        "useNavigation",
        "useNavigationTheme",
        "useNavigatorBackPressHandler",
        "useNavigatorScreens",
        "useNavigatorShouldCrossfade",
        "useSegmentedControlState",
        "useStackNavigation",
        "useTabNavigation",
        "useTooltip"
      ]);
      _module = {};
      _source = {};
      cacher = getPolyfillModuleCacher("redesign_module");
      for ([id, moduleExports] of cacher.getModules()) {
        for (prop of redesignProps) {
          actualExports = void 0;
          if (moduleExports[prop]) {
            actualExports = moduleExports;
          } else if (moduleExports.default?.[prop]) {
            actualExports = moduleExports.default;
          } else {
            continue;
          }
          exportsKeysLength = Reflect.ownKeys(actualExports).length;
          if (_source[prop] && exportsKeysLength >= _source[prop]) {
            continue;
          }
          _module[prop] = actualExports[prop];
          _source[prop] = Reflect.ownKeys(actualExports).length;
          cacher.cacheId(id);
          if (exportsKeysLength === 1) {
            redesignProps.delete(prop);
          }
        }
      }
      cacher.finish();
      redesign_default = _module;
    }
  });

  // src/metro/internals/modules.ts
  var modules_exports2 = {};
  __export(modules_exports2, {
    getCachedPolyfillModules: () => getCachedPolyfillModules,
    getImportingModuleId: () => getImportingModuleId,
    getModules: () => getModules,
    metroModules: () => metroModules,
    requireModule: () => requireModule,
    subscribeModule: () => subscribeModule
  });
  function blacklistModule(id) {
    Object.defineProperty(metroModules, id, {
      enumerable: false
    });
    blacklistedIds.add(id);
    indexBlacklistFlag(Number(id));
  }
  function isBadExports(exports) {
    return !exports || exports === window || exports["<!@ pylix was here :fuyusquish: !@>"] === null || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0 || exports.default?.[Symbol.toStringTag] === "IntlMessagesProxy";
  }
  function onModuleRequire(moduleExports, id) {
    indexExportsFlags(id, moduleExports);
    moduleExports.initSentry &&= () => void 0;
    if (moduleExports.default?.track && moduleExports.default.trackMaker)
      moduleExports.default.track = () => Promise.resolve();
    if (moduleExports.registerAsset) {
      (init_patches(), __toCommonJS(patches_exports)).patchAssets(moduleExports);
    }
    if (!patchedNativeComponentRegistry && [
      "customBubblingEventTypes",
      "customDirectEventTypes",
      "register",
      "get"
    ].every((x2) => moduleExports[x2])) {
      instead2("register", moduleExports, ([name, cb], origFunc) => {
        try {
          return origFunc(name, cb);
        } catch (e) {
          return name;
        }
      });
      patchedNativeComponentRegistry = true;
    }
    if (moduleExports?.default?.constructor?.displayName === "DeveloperExperimentStore") {
      moduleExports.default = new Proxy(moduleExports.default, {
        get(target, property, receiver) {
          if (property === "isDeveloper") {
            var { settings: settings2 } = (init_settings(), __toCommonJS(settings_exports));
            return settings2.enableDiscordDeveloperSettings ?? false;
          }
          return Reflect.get(target, property, receiver);
        }
      });
    }
    if (!patchedImportTracker && moduleExports.fileFinishedImporting) {
      before2("fileFinishedImporting", moduleExports, ([filePath]) => {
        if (_importingModuleId === -1 || !filePath)
          return;
        metroModules[_importingModuleId].__filePath = filePath;
      });
      patchedImportTracker = true;
    }
    if (!patchedInspectSource && window["__core-js_shared__"]) {
      var inspect = (f) => typeof f === "function" && functionToString.apply(f, []);
      window["__core-js_shared__"].inspectSource = inspect;
      patchedInspectSource = true;
    }
    if (moduleExports.findHostInstance_DEPRECATED) {
      var prevExports = metroModules[id - 1]?.publicModule.exports;
      var inc = prevExports.default?.reactProfilingEnabled ? 1 : -1;
      if (!metroModules[id + inc]?.isInitialized) {
        blacklistModule(id + inc);
      }
    }
    if (moduleExports.isMoment) {
      instead2("defineLocale", moduleExports, (args, orig) => {
        var origLocale = moduleExports.locale();
        orig(...args);
        moduleExports.locale(origLocale);
      });
    }
    var subs = moduleSubscriptions.get(Number(id));
    if (subs) {
      subs.forEach((s) => s());
      moduleSubscriptions.delete(Number(id));
    }
  }
  function getImportingModuleId() {
    return _importingModuleId;
  }
  function subscribeModule(id, cb) {
    var subs = moduleSubscriptions.get(id) ?? /* @__PURE__ */ new Set();
    subs.add(cb);
    moduleSubscriptions.set(id, subs);
    return () => subs.delete(cb);
  }
  function requireModule(id) {
    if (!metroModules[0]?.isInitialized)
      metroRequire(0);
    if (blacklistedIds.has(id))
      return void 0;
    if (Number(id) === -1)
      return init_redesign(), __toCommonJS(redesign_exports);
    if (metroModules[id]?.isInitialized && !metroModules[id]?.hasError) {
      return metroRequire(id);
    }
    var originalHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler(noopHandler);
    var moduleExports;
    try {
      moduleExports = metroRequire(id);
    } catch (e) {
      blacklistModule(id);
      moduleExports = void 0;
    }
    ErrorUtils.setGlobalHandler(originalHandler);
    return moduleExports;
  }
  function* getModules(uniq, all = false) {
    yield [
      -1,
      (init_redesign(), __toCommonJS(redesign_exports))
    ];
    var cache = getMetroCache().findIndex[uniq];
    if (all && !cache?.[`_${ModulesMapInternal.FULL_LOOKUP}`])
      cache = void 0;
    if (cache?.[`_${ModulesMapInternal.NOT_FOUND}`])
      return;
    for (var id in cache) {
      if (id[0] === "_")
        continue;
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    for (var id1 in metroModules) {
      var exports1 = requireModule(Number(id1));
      if (isBadExports(exports1))
        continue;
      yield [
        id1,
        exports1
      ];
    }
  }
  function* getCachedPolyfillModules(name) {
    var cache = getMetroCache().polyfillIndex[name];
    for (var id in cache) {
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    if (!cache[`_${ModulesMapInternal.FULL_LOOKUP}`]) {
      for (var id1 in metroModules) {
        var exports1 = requireModule(Number(id1));
        if (isBadExports(exports1))
          continue;
        yield [
          id1,
          exports1
        ];
      }
    }
  }
  var _loop, before2, instead2, metroModules, metroRequire, moduleSubscriptions, blacklistedIds, noopHandler, functionToString, patchedInspectSource, patchedImportTracker, patchedNativeComponentRegistry, _importingModuleId, key;
  var init_modules2 = __esm({
    "src/metro/internals/modules.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      _loop = function(key) {
        var id = Number(key);
        var metroModule = metroModules[id];
        var cache = getMetroCache().flagsIndex[id];
        if (cache & ModuleFlags.BLACKLISTED) {
          blacklistModule(id);
          return "continue";
        }
        if (metroModule.factory) {
          instead2("factory", metroModule, (args, origFunc) => {
            var originalImportingId = _importingModuleId;
            _importingModuleId = id;
            var { 1: metroRequire2, 4: moduleObject } = args;
            args[
              2
              /* metroImportDefault */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              return exps && exps.__esModule ? exps.default : exps;
            };
            args[
              3
              /* metroImportAll */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              if (exps && exps.__esModule)
                return exps;
              var importAll = {};
              if (exps)
                Object.assign(importAll, exps);
              importAll.default = exps;
              return importAll;
            };
            origFunc(...args);
            if (!isBadExports(moduleObject.exports)) {
              onModuleRequire(moduleObject.exports, id);
            } else {
              blacklistModule(id);
            }
            _importingModuleId = originalImportingId;
          });
        }
      };
      ({ before: before2, instead: instead2 } = require_cjs());
      metroModules = window.modules;
      metroRequire = (id) => window.__r(+id);
      moduleSubscriptions = /* @__PURE__ */ new Map();
      blacklistedIds = /* @__PURE__ */ new Set();
      noopHandler = () => void 0;
      functionToString = Function.prototype.toString;
      patchedInspectSource = false;
      patchedImportTracker = false;
      patchedNativeComponentRegistry = false;
      _importingModuleId = -1;
      for (key in metroModules)
        _loop(key);
    }
  });

  // src/metro/internals/caches.ts
  var caches_exports = {};
  __export(caches_exports, {
    getCacherForUniq: () => getCacherForUniq,
    getMetroCache: () => getMetroCache,
    getPolyfillModuleCacher: () => getPolyfillModuleCacher,
    indexAssetModuleFlag: () => indexAssetModuleFlag,
    indexBlacklistFlag: () => indexBlacklistFlag,
    indexExportsFlags: () => indexExportsFlags,
    initMetroCache: () => initMetroCache
  });
  function buildInitCache() {
    var cache = {
      _v: CACHE_VERSION,
      _buildNumber: NativeClientInfoModule.Build,
      _modulesCount: Object.keys(window.modules).length,
      flagsIndex: {},
      findIndex: {},
      polyfillIndex: {}
    };
    setTimeout(() => {
      for (var id in window.modules) {
        (init_modules2(), __toCommonJS(modules_exports2)).requireModule(id);
      }
    }, 100);
    _metroCache = cache;
    return cache;
  }
  function initMetroCache() {
    return _initMetroCache.apply(this, arguments);
  }
  function _initMetroCache() {
    _initMetroCache = _async_to_generator(function* () {
      if (!(yield fileExists(BLAZE_METRO_CACHE_PATH)))
        return void buildInitCache();
      var rawCache = yield readFile(BLAZE_METRO_CACHE_PATH);
      try {
        _metroCache = JSON.parse(rawCache);
        if (_metroCache._v !== CACHE_VERSION) {
          _metroCache = null;
          throw "cache invalidated; cache version outdated";
        }
        if (_metroCache._buildNumber !== NativeClientInfoModule.Build) {
          _metroCache = null;
          throw "cache invalidated; version mismatch";
        }
        if (_metroCache._modulesCount !== Object.keys(window.modules).length) {
          _metroCache = null;
          throw "cache invalidated; modules count mismatch";
        }
      } catch (e) {
        buildInitCache();
      }
    });
    return _initMetroCache.apply(this, arguments);
  }
  function extractExportsFlags(moduleExports) {
    if (!moduleExports)
      return void 0;
    var bit = ModuleFlags.EXISTS;
    return bit;
  }
  function indexExportsFlags(moduleId, moduleExports) {
    var flags = extractExportsFlags(moduleExports);
    if (flags && flags !== ModuleFlags.EXISTS) {
      _metroCache.flagsIndex[moduleId] = flags;
    }
  }
  function indexBlacklistFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.BLACKLISTED;
  }
  function indexAssetModuleFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.ASSET;
  }
  function getCacherForUniq(uniq, allFind) {
    var indexObject = _metroCache.findIndex[uniq] ??= {};
    return {
      cacheId(moduleId, exports) {
        indexObject[moduleId] ??= extractExportsFlags(exports);
        saveCache();
      },
      // Finish may not be called by single find
      finish(notFound) {
        if (allFind)
          indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        if (notFound)
          indexObject[`_${ModulesMapInternal.NOT_FOUND}`] = 1;
        saveCache();
      }
    };
  }
  function getPolyfillModuleCacher(name) {
    var indexObject = _metroCache.polyfillIndex[name] ??= {};
    return {
      getModules() {
        return (init_modules2(), __toCommonJS(modules_exports2)).getCachedPolyfillModules(name);
      },
      cacheId(moduleId) {
        indexObject[moduleId] = 1;
        saveCache();
      },
      finish() {
        indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        saveCache();
      }
    };
  }
  var CACHE_VERSION, BLAZE_METRO_CACHE_PATH, _metroCache, getMetroCache, saveCache;
  var init_caches = __esm({
    "src/metro/internals/caches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_fs();
      init_modules();
      init_dist();
      init_enums();
      CACHE_VERSION = 102;
      BLAZE_METRO_CACHE_PATH = "caches/metro_modules.json";
      _metroCache = null;
      getMetroCache = () => _metroCache;
      saveCache = debounce(() => {
        writeFile(BLAZE_METRO_CACHE_PATH, JSON.stringify(_metroCache));
      }, 1e3);
    }
  });

  // src/core/ui/reporter/utils/isStack.tsx
  function isComponentStack(error) {
    return "componentStack" in error && typeof error.componentStack === "string";
  }
  function hasStack(error) {
    return !!error.stack;
  }
  var init_isStack = __esm({
    "src/core/ui/reporter/utils/isStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/api/assets/index.ts
  var assets_exports = {};
  __export(assets_exports, {
    filterAssets: () => filterAssets,
    findAsset: () => findAsset,
    findAssetId: () => findAssetId,
    iterateAssets: () => iterateAssets
  });
  function* iterateAssets() {
    var { flagsIndex } = getMetroCache();
    var yielded = /* @__PURE__ */ new Set();
    for (var id in flagsIndex) {
      if (flagsIndex[id] & ModuleFlags.ASSET) {
        var assetId = requireModule(Number(id));
        if (typeof assetId !== "number" || yielded.has(assetId))
          continue;
        yield getAssetById(assetId);
        yielded.add(assetId);
      }
    }
  }
  function getAssetById(id) {
    var asset = assetsModule.getAssetByID(id);
    if (!asset)
      return asset;
    return Object.assign(asset, {
      id
    });
  }
  function findAsset(param) {
    if (typeof param === "number")
      return getAssetById(param);
    if (typeof param === "string" && _nameToAssetCache[param]) {
      return _nameToAssetCache[param];
    }
    for (var asset of iterateAssets()) {
      if (typeof param === "string" && asset.name === param) {
        _nameToAssetCache[param] = asset;
        return asset;
      } else if (typeof param === "function" && param(asset)) {
        return asset;
      }
    }
  }
  function filterAssets(param) {
    var filteredAssets = [];
    for (var asset of iterateAssets()) {
      if (typeof param === "string" ? asset.name === param : param(asset)) {
        filteredAssets.push(asset);
      }
    }
    return filteredAssets;
  }
  function findAssetId(name) {
    return findAsset(name)?.id;
  }
  var _nameToAssetCache;
  var init_assets = __esm({
    "src/lib/api/assets/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      init_modules2();
      init_patches();
      _nameToAssetCache = {};
    }
  });

  // src/core/i18n/default.json
  var default_default;
  var init_default = __esm({
    "src/core/i18n/default.json"() {
      default_default = {
        ABOUT: "About",
        ACTIONS: "Actions",
        ARE_YOU_SURE_TO_CLEAR_DATA: "Are you sure you wish to clear the data of {name}?",
        ARE_YOU_SURE_TO_DELETE_PLUGIN: "Are you sure you wish to delete {name}? This will clear all of the plugin's data.",
        ARE_YOU_SURE_TO_DELETE_THEME: "Are you sure you wish to delete {name}?",
        ASSET_BROWSER: "Asset Browser",
        BRAND: "Brand",
        BLAZE: "BlazeCord",
        BLAZE_URL: "BlazeCord URL",
        BYTECODE: "Bytecode",
        CANCEL: "Cancel",
        CLEAR: "Clear",
        CLEAR_BUNDLE: "Clear JS Bundle",
        CLEAR_BUNDLE_DESC: "Clear the cached bundle. This will force a re-download of the bundle next app launch.",
        CLEAR_DATA: "Clear data",
        CLEAR_DATA_FAILED: "Failed to clear data for {name}",
        CLEAR_DATA_SUCCESSFUL: "Cleared data for {name}",
        CODENAME: "Codename",
        COMMAND_DEBUG_DESC: "Send debug information",
        COMMAND_DEBUG_OPT_EPHEMERALLY: "Send the message ephemerally",
        COMMAND_EVAL_DESC: "Evaluate JavaScript code",
        COMMAND_EVAL_OPT_ASYNC: "Whether to support 'await' in code, must explicitly return for result (default: false)",
        COMMAND_EVAL_OPT_CODE: "The code to evaluate",
        COMMAND_PLUGINS_DESC: "Send list of installed plugins",
        COMMAND_PLUGINS_OPT_EPHEMERALLY: "Send the message ephemerally",
        COMPONENT: "Component",
        CONFIRMATION_LINK_IS_A_TYPE: "This link is a **{urlType, select, plugin {Plugin} theme {Theme} other {Add-on}}**, would you like to install it?",
        CONNECT_TO_DEBUG_WEBSOCKET: "Connect to debug WebSocket",
        CONNECT_TO_REACT_DEVTOOLS: "Connect to React DevTools",
        CONTINUE: "Continue",
        COPIED_TO_CLIPBOARD: "Copied to clipboard",
        COPY_URL: "Copy URL",
        DEBUG: "Debug",
        DEBUGGER_URL: "Debugger URL",
        DELETE: "Delete",
        DESC_EXTRACT_FONTS_FROM_THEME: 'Looks out for "fonts" field in your currently applied theme and install it.',
        DEVELOPER: "Developer",
        DEVELOPER_SETTINGS: "Developer Settings",
        DISABLE_THEME: "Disable Theme",
        DISABLE_UPDATES: "Disable Updates",
        DISCORD_SERVER: "Discord Server",
        DONE: "Done",
        ENABLE_EVAL_COMMAND: "Enable /eval command",
        ENABLE_EVAL_COMMAND_DESC: "Evaluate JavaScript directly from a command. Be cautious when using this command as it may pose a security risk. Make sure to know what you are doing.",
        ENABLE_UPDATES: "Enable Updates",
        ERROR_BOUNDARY_TOOLS_LABEL: "ErrorBoundary Tools",
        EXTRACT: "Extract",
        FONT_NAME: "Font Name",
        FONTS: "Fonts",
        GENERAL: "General",
        GITHUB: "GitHub",
        HOLD_UP: "Hold Up",
        INFO: "Info",
        INSTALL: "Install",
        INSTALL_ADDON: "Install an add-on",
        INSTALL_FONT: "Install a font",
        INSTALL_PLUGIN: "Install a plugin",
        INSTALL_REACT_DEVTOOLS: "Install React DevTools",
        INSTALL_THEME: "Install a theme",
        LABEL_EXTRACT_FONTS_FROM_THEME: "Extract font from theme",
        LINKS: "Links",
        LOAD_FROM_CUSTOM_URL: "Load from custom URL",
        LOAD_FROM_CUSTOM_URL_DEC: "Load BlazeCord from a custom endpoint",
        LOAD_REACT_DEVTOOLS: "Load React DevTools",
        LOADER: "Loader",
        MACHINE_ID: "Machine ID",
        MANUFACTURER: "Manufacturer",
        MESSAGE: "Message",
        MISCELLANEOUS: "Miscellaneous",
        MODAL_RELOAD_REQUIRED: "Reload app?",
        MODAL_RELOAD_REQUIRED_DESC: "A reload is required to see the changes. Do you want to reload now?",
        MODAL_THEME_REFETCHED: "Theme refetched",
        MODAL_THEME_REFETCHED_DESC: "A reload is required to see the changes. Do you want to reload now?",
        MODAL_UNPROXIED_PLUGIN_DESC: "The plugin you are trying to install has not been proxied/verified by staff. Are you sure you want to continue?",
        MODAL_UNPROXIED_PLUGIN_HEADER: "Unproxied Plugin",
        MODEL: "Model",
        OPEN_IN_BROWSER: "Open in Browser",
        OPERATING_SYSTEM: "Operating System",
        OVERFLOW_PLUGIN_SETTINGS: "Plugin Settings",
        PLATFORM: "Platform",
        PLUGIN_REFETCH_FAILED: "Failed to refetch plugin",
        PLUGIN_REFETCH_SUCCESSFUL: "Successfully refetched plugin",
        PLUGINS: "Plugins",
        REFETCH: "Refetch",
        RELOAD: "Reload",
        RELOAD_DISCORD: "Reload Discord",
        RELOAD_IN_NORMAL_MODE: "Reload in Normal Mode",
        RELOAD_IN_NORMAL_MODE_DESC: "Safe mode currently enabled, tap to reload in normal mode",
        RELOAD_IN_SAFE_MODE: "Reload in Safe Mode",
        RELOAD_IN_SAFE_MODE_DESC: "Tap to reload Discord without loading addons",
        REMOVE: "Remove",
        RESTART_REQUIRED_TO_TAKE_EFFECT: "Restart is required to take effect",
        RETRY: "Retry",
        RETRY_RENDER: "Retry Render",
        SAFE_MODE: "Safe Mode",
        SAFE_MODE_NOTICE_FONTS: "You are in safe mode, meaning fonts have been temporarily disabled. {enabled, select, true {If a font appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SAFE_MODE_NOTICE_PLUGINS: "You are in safe mode, so plugins cannot be loaded. Disable any misbehaving plugins, then return to Normal Mode from the General settings page.",
        SAFE_MODE_NOTICE_THEMES: "You are in safe mode, meaning themes have been temporarily disabled. {enabled, select, true {If a theme appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SEARCH: "Search",
        SEPARATOR: ", ",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS: "Activate Discord Experiments",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC: "Warning: Messing with this feature may lead to account termination. We are not responsible for what you do with this feature.",
        STACK_TRACE: "Stack Trace",
        SUCCESSFULLY_INSTALLED: "Successfully installed",
        THEME_EXTRACTOR_DESC: "This pack overrides the following: {fonts}",
        THEME_REFETCH_FAILED: "Failed to refetch theme",
        THEME_REFETCH_SUCCESSFUL: "Successfully refetched theme",
        THEMES: "Themes",
        THEMES_RELOAD_FOR_CHANGES: "Reload the app to fully apply changes",
        TOASTS_INSTALLED_PLUGIN: "Installed plugin",
        TOASTS_PLUGIN_UPDATE: "{update, select, true {Enabled} other {Disabled}} updates for {name}",
        UH_OH: "Uh Oh",
        UNINSTALL: "Uninstall",
        UNINSTALL_TITLE: "Uninstall {title}",
        URL_PLACEHOLDER: "https://blazek1ng420.github.io",
        VERSION: "Version",
        VERSIONS: "Versions"
      };
    }
  });

  // src/core/i18n/index.ts
  function initFetchI18nStrings() {
    var cb = ({ locale }) => {
      var languageMap = {
        "es-ES": "es",
        "es-419": "es_419",
        "zh-TW": "zh-Hant",
        "zh-CN": "zh-Hans",
        "pt-PT": "pt",
        "pt-BR": "pt_BR",
        "sv-SE": "sv"
      };
      var resolvedLocale = _lastSetLocale = languageMap[locale] ?? locale;
      if (resolvedLocale.startsWith("en-")) {
        _currentLocale = null;
        return;
      }
      if (!_loadedLocale.has(resolvedLocale)) {
        _loadedLocale.add(resolvedLocale);
        fetch(`https://raw.githubusercontent.com/BlazeK1ng420/BlazeK1ng420.github.io/tree/base/assets/BlazeCord/Utils/region/${resolvedLocale}/bunny.json`).then((r) => r.json()).then((strings) => _loadedStrings[resolvedLocale] = strings).then(() => resolvedLocale === _lastSetLocale && (_currentLocale = resolvedLocale)).catch((e) => console.error(`An error occured while fetching strings for ${resolvedLocale}: ${e}`));
      } else {
        _currentLocale = resolvedLocale;
      }
    };
    FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", cb);
    return () => FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", cb);
  }
  function formatString(key, val) {
    var str = Strings[key];
    return new IntlMessageFormat(str).format(val);
  }
  var IntlMessageFormat, _currentLocale, _lastSetLocale, _loadedLocale, _loadedStrings, Strings;
  var init_i18n = __esm({
    "src/core/i18n/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      init_default();
      IntlMessageFormat = findByNameLazy("MessageFormat");
      _currentLocale = null;
      _lastSetLocale = null;
      _loadedLocale = /* @__PURE__ */ new Set();
      _loadedStrings = {};
      Strings = new Proxy({}, {
        get: (_t, prop) => {
          if (_currentLocale && _loadedStrings[_currentLocale]?.[prop]) {
            return _loadedStrings[_currentLocale]?.[prop];
          }
          return default_default[prop];
        }
      });
    }
  });

  // src/lib/ui/toasts.ts
  var toasts_exports = {};
  __export(toasts_exports, {
    showToast: () => showToast2
  });
  var uuid4, showToast2;
  var init_toasts = __esm({
    "src/lib/ui/toasts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_assets();
      init_lazy();
      init_common();
      init_wrappers();
      ({ uuid4 } = lazyDestructure(() => findByProps("uuid4")));
      showToast2 = (content, asset) => toasts.open({
        // ? In build 182205/44707, Discord changed their toasts, source is no longer used, rather icon, and a key is needed.
        // TODO: We could probably have the developer specify a key themselves, but this works to fix toasts
        key: `re-toast-${uuid4()}`,
        content,
        source: asset,
        icon: asset
      });
      showToast2.showCopyToClipboard = (message = Strings.COPIED_TO_CLIPBOARD) => {
        showToast2(message, findAssetId("toast_copy_link"));
      };
    }
  });

  // src/lib/api/debug.ts
  var debug_exports = {};
  __export(debug_exports, {
    connectToDebugger: () => connectToDebugger,
    getDebugInfo: () => getDebugInfo,
    patchLogHook: () => patchLogHook,
    toggleSafeMode: () => toggleSafeMode,
    versionHash: () => versionHash
  });
  function toggleSafeMode() {
    return _toggleSafeMode.apply(this, arguments);
  }
  function _toggleSafeMode() {
    _toggleSafeMode = _async_to_generator(function* () {
      settings.safeMode = {
        ...settings.safeMode,
        enabled: !settings.safeMode?.enabled
      };
      if (isThemeSupported()) {
        if (getThemeFromLoader()?.id)
          settings.safeMode.currentThemeId = getThemeFromLoader().id;
        if (settings.safeMode?.enabled) {
          yield selectTheme(null);
        } else if (settings.safeMode?.currentThemeId) {
          yield selectTheme(themes[settings.safeMode?.currentThemeId]);
        }
      }
      setTimeout(BundleUpdaterManager.reload, 400);
    });
    return _toggleSafeMode.apply(this, arguments);
  }
  function connectToDebugger(url2) {
    if (socket !== void 0 && socket.readyState !== WebSocket.CLOSED)
      socket.close();
    if (!url2) {
      showToast2("Invalid debugger URL!", findAssetId("Small"));
      return;
    }
    socket = new WebSocket(`ws://${url2}`);
    socket.addEventListener("open", () => showToast2("Connected to debugger.", findAssetId("Check")));
    socket.addEventListener("message", (message) => {
      try {
        (0, eval)(message.data);
      } catch (e) {
        console.error(e);
      }
    });
    socket.addEventListener("error", (err) => {
      console.log(`Debugger error: ${err.message}`);
      showToast2("An error occurred with the debugger connection!", findAssetId("Small"));
    });
  }
  function patchLogHook() {
    var unpatch = after("nativeLoggingHook", globalThis, (args) => {
      if (socket?.readyState === WebSocket.OPEN)
        socket.send(JSON.stringify({
          message: args[0],
          level: args[1]
        }));
      logger.log(args[0]);
    });
    return () => {
      socket && socket.close();
      unpatch();
    };
  }
  function getDebugInfo() {
    var hermesProps = window.HermesInternal.getRuntimeProperties();
    var hermesVer = hermesProps["OSS Release Version"];
    var padding = "for RN ";
    var PlatformConstants = import_react_native6.Platform.constants;
    var rnVer = PlatformConstants.reactNativeVersion;
    return {
      /**
       * @deprecated use `blaze` field
       * */
      relapse: {
        version: versionHash.split("-")[0],
        loader: getLoaderName()
      },
      blaze: {
        version: versionHash,
        loader: {
          name: getLoaderName(),
          version: getLoaderVersion()
        }
      },
      discord: {
        version: NativeClientInfoModule.Version,
        build: NativeClientInfoModule.Build
      },
      react: {
        version: React.version,
        nativeVersion: hermesVer.startsWith(padding) ? hermesVer.substring(padding.length) : `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`
      },
      hermes: {
        version: hermesVer,
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      ...import_react_native6.Platform.select({
        android: {
          os: {
            name: "Android",
            version: PlatformConstants.Release,
            sdk: PlatformConstants.Version
          }
        },
        ios: {
          os: {
            name: PlatformConstants.systemName,
            version: PlatformConstants.osVersion
          }
        }
      }),
      ...import_react_native6.Platform.select({
        android: {
          device: {
            manufacturer: PlatformConstants.Manufacturer,
            brand: PlatformConstants.Brand,
            model: PlatformConstants.Model,
            codename: NativeDeviceModule.device
          }
        },
        ios: {
          device: {
            manufacturer: NativeDeviceModule.deviceManufacturer,
            brand: NativeDeviceModule.deviceBrand,
            model: NativeDeviceModule.deviceModel,
            codename: NativeDeviceModule.device
          }
        }
      })
    };
  }
  var import_react_native6, socket, versionHash;
  var init_debug = __esm({
    "src/lib/api/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_assets();
      init_loader();
      init_modules();
      init_patcher();
      init_settings();
      init_logger();
      init_toasts();
      import_react_native6 = __toESM(require_react_native());
      versionHash = "d1e4094-local";
    }
  });

  // src/lib/ui/components/wrappers/AlertModal.tsx
  function AlertModal2(props) {
    var forwardFailedModal = findByFilePath("modules/forwarding/native/ForwardFailedAlertModal.tsx");
    if (!forwardFailedModal && "extraContent" in props) {
      props.content = /* @__PURE__ */ jsxs(import_react_native7.View, {
        style: {
          gap: 16
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: props.content
          }),
          /* @__PURE__ */ jsx(import_react_native7.View, {
            children: props.extraContent
          })
        ]
      });
      delete props.extraContent;
    }
    return /* @__PURE__ */ jsx(_AlertModal, {
      ...props
    });
  }
  var import_react_native7, _AlertModal, _AlertActionButton, AlertActionButton2;
  var init_AlertModal = __esm({
    "src/lib/ui/components/wrappers/AlertModal.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_components();
      import_react_native7 = __toESM(require_react_native());
      ({ AlertModal: _AlertModal, AlertActionButton: _AlertActionButton } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
      AlertActionButton2 = _AlertActionButton;
    }
  });

  // src/lib/ui/components/wrappers/index.ts
  var wrappers_exports = {};
  __export(wrappers_exports, {
    AlertActionButton: () => AlertActionButton2,
    AlertModal: () => AlertModal2
  });
  var init_wrappers2 = __esm({
    "src/lib/ui/components/wrappers/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_AlertModal();
    }
  });

  // src/lib/ui/color.ts
  function isSemanticColor(sym) {
    return colorResolver.isSemanticColor(sym);
  }
  function resolveSemanticColor(sym, theme = ThemeStore2.theme) {
    return colorResolver.resolveSemanticColor(theme, sym);
  }
  var color, semanticColors, rawColors, ThemeStore2, colorResolver;
  var init_color = __esm({
    "src/lib/ui/color.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      color = findByProps("SemanticColor");
      semanticColors = color?.default?.colors ?? constants?.ThemeColorMap;
      rawColors = color?.default?.unsafe_rawColors ?? constants?.Colors;
      ThemeStore2 = findByStoreNameLazy("ThemeStore");
      colorResolver = color.default.meta ??= color.default.internal;
    }
  });

  // src/lib/ui/styles.ts
  var styles_exports = {};
  __export(styles_exports, {
    TextStyleSheet: () => TextStyleSheet,
    ThemeContext: () => ThemeContext,
    createLegacyClassComponentStyles: () => createLegacyClassComponentStyles,
    createStyles: () => createStyles,
    createThemedStyleSheet: () => createThemedStyleSheet
  });
  function createStyles(sheet) {
    return proxyLazy(() => Styles.createStyles(sheet));
  }
  function createLegacyClassComponentStyles(sheet) {
    return proxyLazy(() => Styles.createLegacyClassComponentStyles(sheet));
  }
  function createThemedStyleSheet(sheet) {
    for (var key in sheet) {
      sheet[key] = new Proxy(import_react_native8.StyleSheet.flatten(sheet[key]), {
        get(target, prop, receiver) {
          var res = Reflect.get(target, prop, receiver);
          return isSemanticColor(res) ? resolveSemanticColor(res) : res;
        }
      });
    }
    return sheet;
  }
  var import_react_native8, Styles, ThemeContext, TextStyleSheet;
  var init_styles = __esm({
    "src/lib/ui/styles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      init_color();
      import_react_native8 = __toESM(require_react_native());
      Styles = findByPropsLazy("createStyles");
      ({ ThemeContext } = lazyDestructure(() => findByProps("ThemeContext"), {
        hint: "object"
      }));
      ({ TextStyleSheet } = lazyDestructure(() => findByProps("TextStyleSheet")));
    }
  });

  // src/lib/ui/components/Codeblock.tsx
  function Codeblock({ selectable, style, children }) {
    if (!selectable)
      return /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children
      });
    return import_react_native9.Platform.select({
      ios: /* @__PURE__ */ jsx(InputBasedCodeblock, {
        style,
        children
      }),
      default: /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children,
        selectable: true
      })
    });
  }
  var import_react_native9, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/lib/ui/components/Codeblock.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_common();
      init_color();
      init_styles();
      import_react_native9 = __toESM(require_react_native());
      useStyles = createStyles({
        codeBlock: {
          fontFamily: constants.Fonts.CODE_NORMAL,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: semanticColors.BACKGROUND_SECONDARY,
          color: semanticColors.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: semanticColors.BACKGROUND_TERTIARY,
          padding: 10
        }
      });
      InputBasedCodeblock = ({ style, children }) => /* @__PURE__ */ jsx(import_react_native9.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        value: children
      });
      TextBasedCodeblock = ({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native9.Text, {
        selectable,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        children
      });
    }
  });

  // src/lib/ui/sheets.ts
  var sheets_exports = {};
  __export(sheets_exports, {
    hideSheet: () => hideSheet,
    showSheet: () => showSheet
  });
  function showSheet(key, lazyImport, props) {
    if (!("then" in lazyImport))
      lazyImport = Promise.resolve({
        default: lazyImport
      });
    actionSheet.openLazy(lazyImport, key, props ?? {});
  }
  function hideSheet(key) {
    actionSheet.hideActionSheet(key);
  }
  var actionSheet;
  var init_sheets = __esm({
    "src/lib/ui/sheets.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      actionSheet = findByPropsLazy("openLazy", "hideActionSheet");
    }
  });

  // src/core/ui/reporter/utils/parseComponentStack.tsx
  function parseComponentStack(componentStack) {
    return componentStack.split(/[\s|\n]+?in /).filter(Boolean);
  }
  var init_parseComponentStack = __esm({
    "src/core/ui/reporter/utils/parseComponentStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react"];
    }
  });

  // src/core/ui/reporter/components/ErrorComponentStackCard.tsx
  function ErrorComponentStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react.useState)(true);
    var stack;
    try {
      stack = parseComponentStack(props.componentStack);
      stack = collapsed ? stack.slice(0, 4) : stack;
    } catch (e) {
      return;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native10.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Component Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native10.View, {
            style: {
              gap: 4
            },
            children: stack.map((component) => /* @__PURE__ */ jsxs(import_react_native10.View, {
              style: {
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "<"
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  children: component
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "/>"
                })
              ]
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native10.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native10.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.componentStack)
              })
            ]
          })
        ]
      })
    });
  }
  var import_react, import_react_native10;
  var init_ErrorComponentStackCard = __esm({
    "src/core/ui/reporter/components/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseComponentStack();
      init_assets();
      init_common();
      init_components();
      import_react = __toESM(require_react());
      import_react_native10 = __toESM(require_react_native());
    }
  });

  // src/core/ui/reporter/utils/parseErrorStack.ts
  function isInternalBytecodeSourceUrl(sourceUrl) {
    return sourceUrl === "InternalBytecode.js";
  }
  function parseLine(line) {
    var asFrame = line.match(RE_FRAME);
    if (asFrame) {
      return {
        type: "FRAME",
        functionName: asFrame[1],
        location: asFrame[2] === "native" ? {
          type: "NATIVE"
        } : asFrame[3] === "address at " ? isInternalBytecodeSourceUrl(asFrame[4]) ? {
          type: "INTERNAL_BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "SOURCE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          column1Based: Number.parseInt(asFrame[6], 10)
        }
      };
    }
    var asSkipped = line.match(RE_SKIPPED);
    if (asSkipped) {
      return {
        type: "SKIPPED",
        count: Number.parseInt(asSkipped[1], 10)
      };
    }
  }
  function parseHermesStack(stack) {
    var lines = stack.split(/\n/);
    var entries = [];
    var lastMessageLine = -1;
    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];
      if (!line) {
        continue;
      }
      var entry = parseLine(line);
      if (entry) {
        entries.push(entry);
        continue;
      }
      if (RE_COMPONENT_NO_STACK.test(line)) {
        continue;
      }
      lastMessageLine = i;
      entries = [];
    }
    var message = lines.slice(0, lastMessageLine + 1).join("\n");
    return {
      message,
      entries
    };
  }
  function convertHermesStack(stack) {
    var frames = [];
    for (var entry of stack.entries) {
      if (entry.type !== "FRAME") {
        continue;
      }
      var { location, functionName } = entry;
      if (location.type === "NATIVE" || location.type === "INTERNAL_BYTECODE") {
        continue;
      }
      frames.push({
        methodName: functionName,
        file: location.sourceUrl,
        lineNumber: location.line1Based,
        column: location.type === "SOURCE" ? location.column1Based - 1 : location.virtualOffset0Based
      });
    }
    return frames;
  }
  function parseErrorStack(errorStack) {
    if (errorStack == null) {
      return [];
    }
    var parsedStack = Array.isArray(errorStack) ? errorStack : convertHermesStack(parseHermesStack(errorStack));
    return parsedStack;
  }
  var RE_FRAME, RE_SKIPPED, RE_COMPONENT_NO_STACK;
  var init_parseErrorStack = __esm({
    "src/core/ui/reporter/utils/parseErrorStack.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
      RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;
      RE_COMPONENT_NO_STACK = /^ {4}at .*$/;
    }
  });

  // src/core/ui/reporter/components/ErrorStackCard.tsx
  function ErrorStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    var stack;
    try {
      var parsedErrorStack = parseErrorStack(props.error.stack);
      stack = collapsed ? parsedErrorStack.slice(0, 4) : parsedErrorStack;
    } catch (e) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native11.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Call Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native11.View, {
            style: {
              gap: 4
            },
            children: stack.map((f, id) => /* @__PURE__ */ jsx(Line, {
              id,
              frame: f
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native11.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native11.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.error.stack)
              })
            ]
          })
        ]
      })
    });
  }
  function Line(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    return /* @__PURE__ */ jsxs(import_react_native11.Pressable, {
      onPress: () => setCollapsed((v2) => !v2),
      children: [
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_BOLD
          },
          children: props.frame.methodName
        }),
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_NORMAL
          },
          ellipsizeMode: "middle",
          numberOfLines: collapsed ? 1 : void 0,
          children: /* @__PURE__ */ jsxs(Text, {
            color: "text-muted",
            children: [
              props.frame.file === INDEX_BUNDLE_FILE ? "jsbundle" : props.frame.file,
              ":",
              props.frame.lineNumber,
              ":",
              props.frame.column
            ]
          })
        })
      ]
    }, props.id);
  }
  var import_react2, import_react_native11;
  var init_ErrorStackCard = __esm({
    "src/core/ui/reporter/components/ErrorStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseErrorStack();
      init_assets();
      init_common();
      init_components();
      import_react2 = __toESM(require_react());
      import_react_native11 = __toESM(require_react_native());
      init_ErrorCard();
    }
  });

  // src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx
  function ErrorDetailsActionSheet(props) {
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native12.View, {
        style: {
          gap: 12,
          paddingVertical: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/extrabold",
            children: "Error"
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: props.error.message
          }),
          hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
            error: props.error
          }),
          isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
            componentStack: props.error.componentStack
          }) : null
        ]
      })
    });
  }
  var import_react_native12;
  var init_ErrorDetailsActionSheet = __esm({
    "src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_components2();
      init_components();
      import_react_native12 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
    }
  });

  // src/core/ui/reporter/components/ErrorCard.tsx
  function ErrorCard(props) {
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        children: [
          props.header && typeof props.header !== "string" ? props.header : /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: props.header ?? Strings.UH_OH
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: String(props.error)
          }),
          /* @__PURE__ */ jsxs(TwinButtons, {
            children: [
              props.onRetryRender && /* @__PURE__ */ jsx(Button, {
                variant: "destructive",
                // icon={findAssetId("RetryIcon")}
                text: Strings.RETRY_RENDER,
                onPress: props.onRetryRender
              }),
              props.error instanceof Error ? /* @__PURE__ */ jsx(Button, {
                text: "Details",
                // icon={findAssetId("CircleInformationIcon-primary")}
                onPress: () => showSheet("BlazeErrorDetailsActionSheet", ErrorDetailsActionSheet, {
                  error: props.error
                })
              }) : null
            ]
          })
        ]
      })
    });
  }
  var INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/core/ui/reporter/components/ErrorCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_components2();
      init_sheets();
      init_components();
      init_ErrorDetailsActionSheet();
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
    }
  });

  // src/lib/ui/components/ErrorBoundary.tsx
  var _React_Component, ErrorBoundary;
  var init_ErrorBoundary = __esm({
    "src/lib/ui/components/ErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_inherits();
      init_jsxRuntime();
      init_ErrorCard();
      init_common();
      init_styles();
      ErrorBoundary = /* @__PURE__ */ function(_superClass) {
        "use strict";
        _inherits(ErrorBoundary2, _superClass);
        function ErrorBoundary2(props) {
          _class_call_check(this, ErrorBoundary2);
          var _this;
          _this = _call_super(this, ErrorBoundary2, [
            props
          ]);
          _this.state = {
            hasErr: false
          };
          return _this;
        }
        _create_class(ErrorBoundary2, [
          {
            key: "render",
            value: function render() {
              if (!this.state.hasErr)
                return this.props.children;
              return /* @__PURE__ */ jsx(ErrorCard, {
                error: this.state.error,
                onRetryRender: () => this.setState({
                  hasErr: false
                })
              });
            }
          }
        ]);
        return ErrorBoundary2;
      }(_React_Component = React2.Component);
      _define_property(ErrorBoundary, "contextType", ThemeContext);
      _define_property(ErrorBoundary, "getDerivedStateFromError", (error) => ({
        hasErr: true,
        error
      }));
    }
  });

  // src/lib/ui/components/Search.tsx
  function SearchIcon() {
    return /* @__PURE__ */ jsx(import_react_native13.Image, {
      style: {
        width: 16,
        height: 16
      },
      source: findAssetId("search")
    });
  }
  var import_react_native13, Search_default;
  var init_Search = __esm({
    "src/lib/ui/components/Search.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_components();
      init_ErrorBoundary();
      import_react_native13 = __toESM(require_react_native());
      Search_default = ({ onChangeText, placeholder, style, isRound }) => {
        var [query, setQuery] = React.useState("");
        var onChange = (value) => {
          setQuery(value);
          onChangeText?.(value);
        };
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(import_react_native13.View, {
            style,
            children: /* @__PURE__ */ jsx(TextInput, {
              grow: true,
              isClearable: true,
              leadingIcon: SearchIcon,
              placeholder: placeholder ?? Strings.SEARCH,
              onChange,
              returnKeyType: "search",
              size: "md",
              autoCapitalize: "none",
              autoCorrect: false,
              isRound,
              value: query
            })
          })
        });
      };
    }
  });

  // src/lib/ui/components/Summary.tsx
  function Summary({ label, icon, noPadding = false, noAnimation = false, children }) {
    var [hidden, setHidden] = React.useState(true);
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx(TableRow, {
          label,
          icon: icon && /* @__PURE__ */ jsx(TableRow.Icon, {
            source: findAssetId(icon)
          }),
          trailing: /* @__PURE__ */ jsx(LegacyFormRow.Arrow, {
            style: {
              transform: [
                {
                  rotate: `${hidden ? 180 : 90}deg`
                }
              ]
            }
          }),
          onPress: () => {
            setHidden(!hidden);
            if (!noAnimation)
              import_react_native14.LayoutAnimation.configureNext(import_react_native14.LayoutAnimation.Presets.easeInEaseOut);
          }
        }),
        !hidden && /* @__PURE__ */ jsx(Fragment, {
          children: /* @__PURE__ */ jsx(import_react_native14.View, {
            style: !noPadding && {
              paddingHorizontal: 15
            },
            children
          })
        })
      ]
    });
  }
  var import_react_native14;
  var init_Summary = __esm({
    "src/lib/ui/components/Summary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_components();
      import_react_native14 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/components/index.ts
  var components_exports2 = {};
  __export(components_exports2, {
    Codeblock: () => Codeblock,
    ErrorBoundary: () => ErrorBoundary,
    Search: () => Search_default,
    Summary: () => Summary,
    wrappers: () => wrappers_exports
  });
  var init_components2 = __esm({
    "src/lib/ui/components/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers2();
      init_Codeblock();
      init_ErrorBoundary();
      init_Search();
      init_Summary();
    }
  });

  // src/core/ui/reporter/components/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles = useStyles2();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(SafeAreaProvider, {
        children: /* @__PURE__ */ jsxs(SafeAreaView, {
          style: styles.container,
          children: [
            /* @__PURE__ */ jsxs(import_react_native15.View, {
              style: {
                gap: 4
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "display-lg",
                  children: "Uh oh."
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/normal",
                  children: "A crash occurred while rendering a component. This could be caused by a plugin, BlazeCord, or Discord itself."
                }),
                /* @__PURE__ */ jsxs(Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: [
                    debugInfo.os.name,
                    "; ",
                    debugInfo.discord.build,
                    " (",
                    debugInfo.discord.version,
                    "); ",
                    debugInfo.blaze.version
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs(import_react_native15.ScrollView, {
              fadingEdgeLength: 64,
              contentContainerStyle: {
                gap: 12
              },
              children: [
                /* @__PURE__ */ jsx(Codeblock, {
                  selectable: true,
                  children: props.error.message
                }),
                hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
                  error: props.error
                }),
                isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
                  componentStack: props.error.componentStack
                }) : null
              ]
            }),
            /* @__PURE__ */ jsxs(Card, {
              style: {
                gap: 6
              },
              children: [
                /* @__PURE__ */ jsx(Button, {
                  text: "Reload Discord",
                  onPress: () => BundleUpdaterManager.reload()
                }),
                !settings.safeMode?.enabled && /* @__PURE__ */ jsx(Button, {
                  text: "Reload in Safe Mode",
                  onPress: () => toggleSafeMode()
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: "destructive",
                  text: "Retry Render",
                  onPress: () => props.rerender()
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native15, useStyles2;
  var init_ErrorBoundaryScreen = __esm({
    "src/core/ui/reporter/components/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_debug();
      init_modules();
      init_settings();
      init_components2();
      init_styles();
      init_common();
      init_components();
      import_react_native15 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      useStyles2 = createStyles({
        container: {
          flex: 1,
          backgroundColor: tokens.colors.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          height: "100%",
          gap: 12
        }
      });
    }
  });

  // src/core/debug/patches/patchErrorBoundary.tsx
  function getErrorBoundaryContext() {
    var ctxt = findByNameLazy("ErrorBoundary")[_lazyContextSymbol];
    return new Promise((resolve) => ctxt.getExports((exp) => resolve(exp.prototype)));
  }
  function patchErrorBoundary() {
    return after.await("render", getErrorBoundaryContext(), function() {
      if (!this.state.error)
        return;
      return /* @__PURE__ */ jsx(ErrorBoundaryScreen, {
        error: this.state.error,
        rerender: () => this.setState({
          info: null,
          error: null
        })
      });
    });
  }
  var init_patchErrorBoundary = __esm({
    "src/core/debug/patches/patchErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_ErrorBoundaryScreen();
      init_patcher();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:moment
  var require_moment = __commonJS({
    "globals:moment"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["moment"];
    }
  });

  // src/core/fixes.ts
  function onDispatch({ locale }) {
    try {
      import_moment.default.locale(locale.toLowerCase());
    } catch (e) {
      logger.error("Failed to fix timestamps...", e);
    }
    FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", onDispatch);
  }
  var import_moment, fixes_default;
  var init_fixes = __esm({
    "src/core/fixes.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_logger();
      init_common();
      import_moment = __toESM(require_moment());
      fixes_default = () => {
        FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", onDispatch);
      };
    }
  });

  // src/assets/icons/blazecord.png
  var blazecord_default;
  var init_blazecord = __esm({
    "src/assets/icons/blazecord.png"() {
      blazecord_default = "data:image/png;base64,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";
    }
  });

  // src/lib/ui/settings/patches/shared.tsx
  function wrapOnPress(onPress, navigation2, renderPromise, screenOptions, props) {
    return /* @__PURE__ */ _async_to_generator(function* () {
      if (onPress)
        return void onPress();
      var Component = yield renderPromise().then((m2) => m2.default);
      if (typeof screenOptions === "string") {
        screenOptions = {
          title: screenOptions
        };
      }
      navigation2 ??= tabsNavigationRef.getRootNavigationRef();
      navigation2.navigate("BLAZE_CUSTOM_PAGE", {
        ...screenOptions,
        render: () => /* @__PURE__ */ jsx(Component, {
          ...props
        })
      });
    });
  }
  var tabsNavigationRef, CustomPageRenderer;
  var init_shared = __esm({
    "src/lib/ui/settings/patches/shared.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_common();
      init_wrappers();
      init_components2();
      tabsNavigationRef = findByPropsLazy("getRootNavigationRef");
      CustomPageRenderer = React.memo(() => {
        var navigation2 = NavigationNative.useNavigation();
        var route = NavigationNative.useRoute();
        var { render: PageComponent, ...args } = route.params;
        React.useEffect(() => void navigation2.setOptions({
          ...args
        }), []);
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(PageComponent, {})
        });
      });
    }
  });

  // src/lib/ui/settings/patches/tabs.tsx
  function useIsFirstRender() {
    var firstRender = false;
    React.useEffect(() => void (firstRender = true), []);
    return firstRender;
  }
  function patchTabsUI(unpatches) {
    var getRows = () => Object.values(registeredSections).flatMap((sect) => sect.map((row) => ({
      [row.key]: {
        type: "pressable",
        title: row.title,
        icon: row.icon,
        IconComponent: () => /* @__PURE__ */ jsx(TableRow.Icon, {
          source: row.icon
        }),
        usePredicate: row.usePredicate,
        useTrailing: row.useTrailing,
        onPress: wrapOnPress(row.onPress, null, row.render, row.title()),
        withArrow: true,
        ...row.rawTabsConfig
      }
    }))).reduce((a, c2) => Object.assign(a, c2));
    var origRendererConfig = settingConstants.SETTING_RENDERER_CONFIG;
    var rendererConfigValue = settingConstants.SETTING_RENDERER_CONFIG;
    Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
      enumerable: true,
      configurable: true,
      get: () => ({
        ...rendererConfigValue,
        RelapseCustomPage: {
          type: "route",
          title: () => Strings.BLAZE,
          screen: {
            route: "RelapseCustomPage",
            getComponent: () => CustomPageRenderer
          }
        },
        BLAZE_CUSTOM_PAGE: {
          type: "route",
          title: () => Strings.BLAZE,
          screen: {
            route: "BLAZE_CUSTOM_PAGE",
            getComponent: () => CustomPageRenderer
          }
        },
        ...getRows()
      }),
      set: (v2) => rendererConfigValue = v2
    });
    unpatches.push(() => {
      Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
        value: origRendererConfig,
        writable: true,
        get: void 0,
        set: void 0
      });
    });
    unpatches.push(after("default", SettingsOverviewScreen, (_2, ret) => {
      if (useIsFirstRender())
        return;
      var { sections } = findInReactTree(ret, (i) => i.props?.sections).props;
      var index = -~sections.findIndex((i) => i.settings.includes("ACCOUNT")) || 1;
      Object.keys(registeredSections).forEach((sect) => {
        sections.splice(index++, 0, {
          label: sect,
          title: sect,
          settings: registeredSections[sect].map((a) => a.key)
        });
      });
    }));
  }
  var settingConstants, SettingsOverviewScreen;
  var init_tabs = __esm({
    "src/lib/ui/settings/patches/tabs.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_patcher();
      init_utils();
      init_components();
      init_wrappers();
      init_settings2();
      init_shared();
      init_i18n();
      settingConstants = findByPropsLazy("SETTING_RENDERER_CONFIG");
      SettingsOverviewScreen = findByNameLazy("SettingsOverviewScreen", false);
    }
  });

  // src/lib/ui/settings/index.tsx
  var settings_exports2 = {};
  __export(settings_exports2, {
    patchSettings: () => patchSettings,
    registerSection: () => registerSection,
    registeredSections: () => registeredSections
  });
  function registerSection(section) {
    registeredSections[section.name] = section.items;
    return () => delete registeredSections[section.name];
  }
  function patchSettings() {
    var unpatches = new Array();
    patchTabsUI(unpatches);
    return () => unpatches.forEach((u) => u());
  }
  var registeredSections;
  var init_settings2 = __esm({
    "src/lib/ui/settings/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_tabs();
      registeredSections = {};
    }
  });

  // src/core/debug/safeMode.ts
  function isSafeMode() {
    return settings.safeMode?.enabled === true;
  }
  function toggleSafeMode2() {
    return _toggleSafeMode2.apply(this, arguments);
  }
  function _toggleSafeMode2() {
    _toggleSafeMode2 = _async_to_generator(function* ({ to = !isSafeMode(), reload = true } = {}) {
      var enabled = (settings.safeMode ??= {
        enabled: to
      }).enabled = to;
      var currentColor = getCurrentTheme();
      yield writeThemeToNative(enabled ? {} : currentColor?.data ?? {});
      if (reload)
        setTimeout(() => BundleUpdaterManager.reload(), 500);
    });
    return _toggleSafeMode2.apply(this, arguments);
  }
  var init_safeMode = __esm({
    "src/core/debug/safeMode.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_modules();
      init_settings();
    }
  });

  // src/core/ui/settings/pages/General/Version.tsx
  function Version({ label, version, icon }) {
    return /* @__PURE__ */ jsx(TableRow, {
      label,
      trailing: /* @__PURE__ */ jsx(TableRowTrailingText, {
        text: version
      }),
      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
        source: typeof icon === "string" ? findAssetId(icon) : icon
      }),
      onPress: () => {
        clipboard.setString(`${label} - ${version}`);
        showToast2.showCopyToClipboard();
      }
    });
  }
  var init_Version = __esm({
    "src/core/ui/settings/pages/General/Version.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_common();
      init_components();
      init_toasts();
    }
  });

  // src/core/ui/settings/pages/General/About.tsx
  function About() {
    var debugInfo = getDebugInfo();
    useProxy(settings);
    var versions = [
      {
        label: Strings.BLAZE,
        version: debugInfo.blaze.version,
        icon: {
          uri: blazecord_default
        }
      },
      {
        label: "Discord",
        version: `${debugInfo.discord.version} (${debugInfo.discord.build})`,
        icon: "Discord"
      },
      {
        label: "React",
        version: debugInfo.react.version,
        icon: "ScienceIcon"
      },
      {
        label: "React Native",
        version: debugInfo.react.nativeVersion,
        icon: "MobilePhoneIcon"
      },
      {
        label: Strings.BYTECODE,
        version: debugInfo.hermes.bytecodeVersion,
        icon: "TopicsIcon"
      }
    ];
    var platformInfo = [
      {
        label: Strings.LOADER,
        version: `${debugInfo.blaze.loader.name} (${debugInfo.blaze.loader.version})`,
        icon: "DownloadIcon"
      },
      {
        label: Strings.OPERATING_SYSTEM,
        version: `${debugInfo.os.name} ${debugInfo.os.version}`,
        icon: "ScreenIcon"
      },
      ...debugInfo.os.sdk ? [
        {
          label: "SDK",
          version: debugInfo.os.sdk,
          icon: "StaffBadgeIcon"
        }
      ] : [],
      {
        label: Strings.MANUFACTURER,
        version: debugInfo.device.manufacturer,
        icon: "WrenchIcon"
      },
      {
        label: Strings.BRAND,
        version: debugInfo.device.brand,
        icon: "SparklesIcon"
      },
      {
        label: Strings.MODEL,
        version: debugInfo.device.model,
        icon: "MobilePhoneIcon"
      },
      {
        label: import_react_native16.Platform.select({
          android: Strings.CODENAME,
          ios: Strings.MACHINE_ID
        }),
        version: debugInfo.device.codename,
        icon: "TagIcon"
      }
    ];
    return /* @__PURE__ */ jsx(import_react_native16.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.VERSIONS,
            children: versions.map((v2) => /* @__PURE__ */ jsx(Version, {
              label: v2.label,
              version: v2.version,
              icon: v2.icon
            }))
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.PLATFORM,
            children: platformInfo.map((p) => /* @__PURE__ */ jsx(Version, {
              label: p.label,
              version: p.version,
              icon: p.icon
            }))
          })
        ]
      })
    });
  }
  var import_react_native16;
  var init_About = __esm({
    "src/core/ui/settings/pages/General/About.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_settings3();
      init_Version();
      init_storage();
      init_debug();
      init_settings();
      init_components();
      import_react_native16 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/alerts.ts
  var alerts_exports = {};
  __export(alerts_exports, {
    dismissAlert: () => dismissAlert,
    openAlert: () => openAlert
  });
  var openAlert, dismissAlert;
  var init_alerts = __esm({
    "src/lib/ui/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_metro();
      ({ openAlert, dismissAlert } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
    }
  });

  // src/core/ui/settings/pages/General/index.tsx
  var General_exports = {};
  __export(General_exports, {
    default: () => General
  });
  function General() {
    useProxy(settings);
    var debugInfo = getDebugInfo();
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(import_react_native17.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.INFO,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.BLAZE,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: {
                    uri: blazecord_default
                  }
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: debugInfo.blaze.version
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Discord",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: `${debugInfo.discord.version} (${debugInfo.discord.build})`
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.ABOUT,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("CircleInformationIcon-primary")
                }),
                onPress: () => navigation2.push("BLAZE_CUSTOM_PAGE", {
                  title: Strings.ABOUT,
                  render: () => /* @__PURE__ */ jsx(About, {})
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.LINKS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.DISCORD_SERVER,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                onPress: () => import_react_native17.Linking.openURL(DISCORD_SERVER)
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.GITHUB,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("img_account_sync_github_white")
                }),
                onPress: () => import_react_native17.Linking.openURL(GITHUB)
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.ACTIONS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.RELOAD_DISCORD,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: () => BundleUpdaterManager.reload()
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: Strings.SAFE_MODE,
                subLabel: settings.safeMode?.enabled ? Strings.RELOAD_IN_NORMAL_MODE_DESC : Strings.RELOAD_IN_SAFE_MODE_DESC,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("ShieldIcon")
                }),
                value: isSafeMode(),
                onValueChange: (to) => {
                  toggleSafeMode2({
                    to,
                    reload: false
                  });
                  openAlert("blaze-reload-safe-mode", /* @__PURE__ */ jsx(AlertModal, {
                    title: "Reload now?",
                    content: !to ? "All add-ons will load normally." : "All add-ons will be temporarily disabled upon reload.",
                    actions: /* @__PURE__ */ jsxs(AlertActions, {
                      children: [
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Reload Now",
                          variant: "destructive",
                          onPress: () => BundleUpdaterManager.reload()
                        }),
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Later",
                          variant: "secondary"
                        })
                      ]
                    })
                  }));
                }
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: Strings.DEVELOPER_SETTINGS,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("WrenchIcon")
                }),
                value: settings.developerSettings,
                onValueChange: (v2) => {
                  settings.developerSettings = v2;
                }
              })
            ]
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.MISCELLANEOUS,
            children: /* @__PURE__ */ jsx(TableSwitchRow, {
              label: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS,
              subLabel: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC,
              icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                source: findAssetId("WrenchIcon")
              }),
              value: settings.enableDiscordDeveloperSettings,
              onValueChange: (v2) => {
                settings.enableDiscordDeveloperSettings = v2;
              }
            })
          })
        ]
      })
    });
  }
  var import_react_native17;
  var init_General = __esm({
    "src/core/ui/settings/pages/General/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_safeMode();
      init_i18n();
      init_settings3();
      init_About();
      init_storage();
      init_assets();
      init_debug();
      init_modules();
      init_settings();
      init_alerts();
      init_constants();
      init_common();
      init_components();
      import_react_native17 = __toESM(require_react_native());
    }
  });

  // src/lib/utils/isValidHttpUrl.ts
  function isValidHttpUrl(input) {
    var url2;
    try {
      url2 = new URL(input);
    } catch (e) {
      return false;
    }
    return url2.protocol === "http:" || url2.protocol === "https:";
  }
  var init_isValidHttpUrl = __esm({
    "src/lib/utils/isValidHttpUrl.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      ((root, UMD) => {
        if (typeof define === "function" && define.amd)
          define([], UMD);
        else if (typeof module === "object" && module.exports)
          module.exports = UMD();
        else
          root["fuzzysort"] = UMD();
      })(exports, (_2) => {
        "use strict";
        var single = (search, target) => {
          if (!search || !target)
            return NULL;
          var preparedSearch = getPreparedSearch(search);
          if (!isPrepared(target))
            target = getPrepared(target);
          var searchBitflags = preparedSearch.bitflags;
          if ((searchBitflags & target._bitflags) !== searchBitflags)
            return NULL;
          return algorithm(preparedSearch, target);
        };
        var go = (search, targets, options) => {
          if (!search)
            return options?.all ? all(targets, options) : noResults;
          var preparedSearch = getPreparedSearch(search);
          var searchBitflags = preparedSearch.bitflags;
          var containsSpace = preparedSearch.containsSpace;
          var threshold = denormalizeScore(options?.threshold || 0);
          var limit = options?.limit || INFINITY;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          function push_result(result2) {
            if (resultsLen < limit) {
              q3.add(result2);
              ++resultsLen;
            } else {
              ++limitedCount;
              if (result2._score > q3.peek()._score)
                q3.replaceTop(result2);
            }
          }
          if (options?.key) {
            var key = options.key;
            for (var i = 0; i < targetsLen; ++i) {
              var obj = targets[i];
              var target = getValue(obj, key);
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              result.obj = obj;
              push_result(result);
            }
          } else if (options?.keys) {
            var keys = options.keys;
            var keysLen = keys.length;
            outer:
              for (var i = 0; i < targetsLen; ++i) {
                var obj = targets[i];
                {
                  var keysBitflags = 0;
                  for (var keyI = 0; keyI < keysLen; ++keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      tmpTargets[keyI] = noTarget;
                      continue;
                    }
                    if (!isPrepared(target))
                      target = getPrepared(target);
                    tmpTargets[keyI] = target;
                    keysBitflags |= target._bitflags;
                  }
                  if ((searchBitflags & keysBitflags) !== searchBitflags)
                    continue;
                }
                if (containsSpace)
                  for (var i1 = 0; i1 < preparedSearch.spaceSearches.length; i1++)
                    keysSpacesBestScores[i1] = NEGATIVE_INFINITY;
                for (var keyI = 0; keyI < keysLen; ++keyI) {
                  target = tmpTargets[keyI];
                  if (target === noTarget) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  tmpResults[keyI] = algorithm(
                    preparedSearch,
                    target,
                    /*allowSpaces=*/
                    false,
                    /*allowPartialMatch=*/
                    containsSpace
                  );
                  if (tmpResults[keyI] === NULL) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  if (containsSpace)
                    for (var i2 = 0; i2 < preparedSearch.spaceSearches.length; i2++) {
                      if (allowPartialMatchScores[i2] > -1e3) {
                        if (keysSpacesBestScores[i2] > NEGATIVE_INFINITY) {
                          var tmp = (keysSpacesBestScores[i2] + allowPartialMatchScores[i2]) / 4;
                          if (tmp > keysSpacesBestScores[i2])
                            keysSpacesBestScores[i2] = tmp;
                        }
                      }
                      if (allowPartialMatchScores[i2] > keysSpacesBestScores[i2])
                        keysSpacesBestScores[i2] = allowPartialMatchScores[i2];
                    }
                }
                if (containsSpace) {
                  for (var i3 = 0; i3 < preparedSearch.spaceSearches.length; i3++) {
                    if (keysSpacesBestScores[i3] === NEGATIVE_INFINITY)
                      continue outer;
                  }
                } else {
                  var hasAtLeast1Match = false;
                  for (var i4 = 0; i4 < keysLen; i4++) {
                    if (tmpResults[i4]._score !== NEGATIVE_INFINITY) {
                      hasAtLeast1Match = true;
                      break;
                    }
                  }
                  if (!hasAtLeast1Match)
                    continue;
                }
                var objResults = new KeysResult(keysLen);
                for (var i5 = 0; i5 < keysLen; i5++) {
                  objResults[i5] = tmpResults[i5];
                }
                if (containsSpace) {
                  var score = 0;
                  for (var i6 = 0; i6 < preparedSearch.spaceSearches.length; i6++)
                    score += keysSpacesBestScores[i6];
                } else {
                  var score = NEGATIVE_INFINITY;
                  for (var i7 = 0; i7 < keysLen; i7++) {
                    var result = objResults[i7];
                    if (result._score > -1e3) {
                      if (score > NEGATIVE_INFINITY) {
                        var tmp = (score + result._score) / 4;
                        if (tmp > score)
                          score = tmp;
                      }
                    }
                    if (result._score > score)
                      score = result._score;
                  }
                }
                objResults.obj = obj;
                objResults._score = score;
                if (options?.scoreFn) {
                  score = options.scoreFn(objResults);
                  if (!score)
                    continue;
                  score = denormalizeScore(score);
                  objResults._score = score;
                }
                if (score < threshold)
                  continue;
                push_result(objResults);
              }
          } else {
            for (var i = 0; i < targetsLen; ++i) {
              var target = targets[i];
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              push_result(result);
            }
          }
          if (resultsLen === 0)
            return noResults;
          var results = new Array(resultsLen);
          for (var i = resultsLen - 1; i >= 0; --i)
            results[i] = q3.poll();
          results.total = resultsLen + limitedCount;
          return results;
        };
        var highlight = (result, open = "<b>", close = "</b>") => {
          var callback = typeof open === "function" ? open : void 0;
          var target = result.target;
          var targetLen = target.length;
          var indexes = result.indexes;
          var highlighted = "";
          var matchI = 0;
          var indexesI = 0;
          var opened = false;
          var parts = [];
          for (var i = 0; i < targetLen; ++i) {
            var char = target[i];
            if (indexes[indexesI] === i) {
              ++indexesI;
              if (!opened) {
                opened = true;
                if (callback) {
                  parts.push(highlighted);
                  highlighted = "";
                } else {
                  highlighted += open;
                }
              }
              if (indexesI === indexes.length) {
                if (callback) {
                  highlighted += char;
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                  parts.push(target.substr(i + 1));
                } else {
                  highlighted += char + close + target.substr(i + 1);
                }
                break;
              }
            } else {
              if (opened) {
                opened = false;
                if (callback) {
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                } else {
                  highlighted += close;
                }
              }
            }
            highlighted += char;
          }
          return callback ? parts : highlighted;
        };
        var prepare = (target) => {
          if (typeof target === "number")
            target = "" + target;
          else if (typeof target !== "string")
            target = "";
          var info = prepareLowerInfo(target);
          return new_result(target, {
            _targetLower: info._lower,
            _targetLowerCodes: info.lowerCodes,
            _bitflags: info.bitflags
          });
        };
        var cleanup = () => {
          preparedCache.clear();
          preparedSearchCache.clear();
        };
        var Result = /* @__PURE__ */ function() {
          function Result2() {
            _class_call_check(this, Result2);
          }
          _create_class(Result2, [
            {
              key: "indexes",
              get: function get() {
                return this._indexes.slice(0, this._indexes.len).sort((a, b3) => a - b3);
              }
            },
            {
              key: "indexes",
              set: function set(indexes) {
                return this._indexes = indexes;
              }
            },
            {
              key: "highlight",
              value: function value(open, close) {
                return highlight(this, open, close);
              }
            },
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return Result2;
        }();
        var KeysResult = /* @__PURE__ */ function(Array1) {
          _inherits(KeysResult2, Array1);
          function KeysResult2() {
            _class_call_check(this, KeysResult2);
            return _call_super(this, KeysResult2, arguments);
          }
          _create_class(KeysResult2, [
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return KeysResult2;
        }(_wrap_native_super(Array));
        var new_result = (target, options) => {
          var result = new Result();
          result["target"] = target;
          result["obj"] = options.obj ?? NULL;
          result._score = options._score ?? NEGATIVE_INFINITY;
          result._indexes = options._indexes ?? [];
          result._targetLower = options._targetLower ?? "";
          result._targetLowerCodes = options._targetLowerCodes ?? NULL;
          result._nextBeginningIndexes = options._nextBeginningIndexes ?? NULL;
          result._bitflags = options._bitflags ?? 0;
          return result;
        };
        var normalizeScore = (score) => {
          if (score === NEGATIVE_INFINITY)
            return 0;
          if (score > 1)
            return score;
          return Math.E ** (((-score + 1) ** 0.04307 - 1) * -2);
        };
        var denormalizeScore = (normalizedScore) => {
          if (normalizedScore === 0)
            return NEGATIVE_INFINITY;
          if (normalizedScore > 1)
            return normalizedScore;
          return 1 - Math.pow(Math.log(normalizedScore) / -2 + 1, 1 / 0.04307);
        };
        var prepareSearch = (search) => {
          if (typeof search === "number")
            search = "" + search;
          else if (typeof search !== "string")
            search = "";
          search = search.trim();
          var info = prepareLowerInfo(search);
          var spaceSearches = [];
          if (info.containsSpace) {
            var searches = search.split(/\s+/);
            searches = [
              ...new Set(searches)
            ];
            for (var i = 0; i < searches.length; i++) {
              if (searches[i] === "")
                continue;
              var _info = prepareLowerInfo(searches[i]);
              spaceSearches.push({
                lowerCodes: _info.lowerCodes,
                _lower: searches[i].toLowerCase(),
                containsSpace: false
              });
            }
          }
          return {
            lowerCodes: info.lowerCodes,
            _lower: info._lower,
            containsSpace: info.containsSpace,
            bitflags: info.bitflags,
            spaceSearches
          };
        };
        var getPrepared = (target) => {
          if (target.length > 999)
            return prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0)
            return targetPrepared;
          targetPrepared = prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        };
        var getPreparedSearch = (search) => {
          if (search.length > 999)
            return prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0)
            return searchPrepared;
          searchPrepared = prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        };
        var all = (targets, options) => {
          var results = [];
          results.total = targets.length;
          var limit = options?.limit || INFINITY;
          if (options?.key) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var target = getValue(obj, options.key);
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              var result = new_result(target.target, {
                _score: target._score,
                obj
              });
              results.push(result);
              if (results.length >= limit)
                return results;
            }
          } else if (options?.keys) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var objResults = new KeysResult(options.keys.length);
              for (var keyI = options.keys.length - 1; keyI >= 0; --keyI) {
                var target = getValue(obj, options.keys[keyI]);
                if (!target) {
                  objResults[keyI] = noTarget;
                  continue;
                }
                if (!isPrepared(target))
                  target = getPrepared(target);
                target._score = NEGATIVE_INFINITY;
                target._indexes.len = 0;
                objResults[keyI] = target;
              }
              objResults.obj = obj;
              objResults._score = NEGATIVE_INFINITY;
              results.push(objResults);
              if (results.length >= limit)
                return results;
            }
          } else {
            for (var i = 0; i < targets.length; i++) {
              var target = targets[i];
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              target._score = NEGATIVE_INFINITY;
              target._indexes.len = 0;
              results.push(target);
              if (results.length >= limit)
                return results;
            }
          }
          return results;
        };
        var algorithm = (preparedSearch, prepared, allowSpaces = false, allowPartialMatch = false) => {
          if (allowSpaces === false && preparedSearch.containsSpace)
            return algorithmSpaces(preparedSearch, prepared, allowPartialMatch);
          var searchLower = preparedSearch._lower;
          var searchLowerCodes = preparedSearch.lowerCodes;
          var searchLowerCode = searchLowerCodes[0];
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen)
              return NULL;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === NULL)
            nextBeginningIndexes = prepared._nextBeginningIndexes = prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          var backtrackCount = 0;
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0)
                  break;
                ++backtrackCount;
                if (backtrackCount > 200)
                  break;
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          var substringIndex = searchLen <= 1 ? -1 : prepared._targetLower.indexOf(searchLower, matchesSimple[0]);
          var isSubstring = !!~substringIndex;
          var isSubstringBeginning = !isSubstring ? false : substringIndex === 0 || prepared._nextBeginningIndexes[substringIndex - 1] === substringIndex;
          if (isSubstring && !isSubstringBeginning) {
            for (var i = 0; i < nextBeginningIndexes.length; i = nextBeginningIndexes[i]) {
              if (i <= substringIndex)
                continue;
              for (var s = 0; s < searchLen; s++)
                if (searchLowerCodes[s] !== prepared._targetLowerCodes[i + s])
                  break;
              if (s === searchLen) {
                substringIndex = i;
                isSubstringBeginning = true;
                break;
              }
            }
          }
          var calculateScore = (matches) => {
            var score2 = 0;
            var extraMatchGroupCount = 0;
            for (var i2 = 1; i2 < searchLen; ++i2) {
              if (matches[i2] - matches[i2 - 1] !== 1) {
                score2 -= matches[i2];
                ++extraMatchGroupCount;
              }
            }
            var unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
            score2 -= (12 + unmatchedDistance) * extraMatchGroupCount;
            if (matches[0] !== 0)
              score2 -= matches[0] * matches[0] * 0.2;
            if (!successStrict) {
              score2 *= 1e3;
            } else {
              var uniqueBeginningIndexes = 1;
              for (var i2 = nextBeginningIndexes[0]; i2 < targetLen; i2 = nextBeginningIndexes[i2])
                ++uniqueBeginningIndexes;
              if (uniqueBeginningIndexes > 24)
                score2 *= (uniqueBeginningIndexes - 24) * 10;
            }
            score2 -= (targetLen - searchLen) / 2;
            if (isSubstring)
              score2 /= 1 + searchLen * searchLen * 1;
            if (isSubstringBeginning)
              score2 /= 1 + searchLen * searchLen * 1;
            score2 -= (targetLen - searchLen) / 2;
            return score2;
          };
          if (!successStrict) {
            if (isSubstring)
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
            var matchesBest = matchesSimple;
            var score = calculateScore(matchesBest);
          } else {
            if (isSubstringBeginning) {
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
              var matchesBest = matchesSimple;
              var score = calculateScore(matchesSimple);
            } else {
              var matchesBest = matchesStrict;
              var score = calculateScore(matchesStrict);
            }
          }
          prepared._score = score;
          for (var i = 0; i < searchLen; ++i)
            prepared._indexes[i] = matchesBest[i];
          prepared._indexes.len = searchLen;
          var result = new Result();
          result.target = prepared.target;
          result._score = prepared._score;
          result._indexes = prepared._indexes;
          return result;
        };
        var algorithmSpaces = (preparedSearch, target, allowPartialMatch) => {
          var seen_indexes = /* @__PURE__ */ new Set();
          var score = 0;
          var result = NULL;
          var first_seen_index_last_search = 0;
          var searches = preparedSearch.spaceSearches;
          var searchesLen = searches.length;
          var changeslen = 0;
          var resetNextBeginningIndexes = () => {
            for (var i3 = changeslen - 1; i3 >= 0; i3--)
              target._nextBeginningIndexes[nextBeginningIndexesChanges[i3 * 2 + 0]] = nextBeginningIndexesChanges[i3 * 2 + 1];
          };
          var hasAtLeast1Match = false;
          for (var i = 0; i < searchesLen; ++i) {
            allowPartialMatchScores[i] = NEGATIVE_INFINITY;
            var search = searches[i];
            result = algorithm(search, target);
            if (allowPartialMatch) {
              if (result === NULL)
                continue;
              hasAtLeast1Match = true;
            } else {
              if (result === NULL) {
                resetNextBeginningIndexes();
                return NULL;
              }
            }
            var isTheLastSearch = i === searchesLen - 1;
            if (!isTheLastSearch) {
              var indexes = result._indexes;
              var indexesIsConsecutiveSubstring = true;
              for (var i1 = 0; i1 < indexes.len - 1; i1++) {
                if (indexes[i1 + 1] - indexes[i1] !== 1) {
                  indexesIsConsecutiveSubstring = false;
                  break;
                }
              }
              if (indexesIsConsecutiveSubstring) {
                var newBeginningIndex = indexes[indexes.len - 1] + 1;
                var toReplace = target._nextBeginningIndexes[newBeginningIndex - 1];
                for (var i2 = newBeginningIndex - 1; i2 >= 0; i2--) {
                  if (toReplace !== target._nextBeginningIndexes[i2])
                    break;
                  target._nextBeginningIndexes[i2] = newBeginningIndex;
                  nextBeginningIndexesChanges[changeslen * 2 + 0] = i2;
                  nextBeginningIndexesChanges[changeslen * 2 + 1] = toReplace;
                  changeslen++;
                }
              }
            }
            score += result._score / searchesLen;
            allowPartialMatchScores[i] = result._score / searchesLen;
            if (result._indexes[0] < first_seen_index_last_search) {
              score -= (first_seen_index_last_search - result._indexes[0]) * 2;
            }
            first_seen_index_last_search = result._indexes[0];
            for (var j = 0; j < result._indexes.len; ++j)
              seen_indexes.add(result._indexes[j]);
          }
          if (allowPartialMatch && !hasAtLeast1Match)
            return NULL;
          resetNextBeginningIndexes();
          var allowSpacesResult = algorithm(
            preparedSearch,
            target,
            /*allowSpaces=*/
            true
          );
          if (allowSpacesResult !== NULL && allowSpacesResult._score > score) {
            if (allowPartialMatch) {
              for (var i = 0; i < searchesLen; ++i) {
                allowPartialMatchScores[i] = allowSpacesResult._score / searchesLen;
              }
            }
            return allowSpacesResult;
          }
          if (allowPartialMatch)
            result = target;
          result._score = score;
          var i = 0;
          for (var index of seen_indexes)
            result._indexes[i++] = index;
          result._indexes.len = i;
          return result;
        };
        var prepareLowerInfo = (str) => {
          var strLen = str.length;
          var lower = str.toLowerCase();
          var lowerCodes = [];
          var bitflags = 0;
          var containsSpace = false;
          for (var i = 0; i < strLen; ++i) {
            var lowerCode = lowerCodes[i] = lower.charCodeAt(i);
            if (lowerCode === 32) {
              containsSpace = true;
              continue;
            }
            var bit = lowerCode >= 97 && lowerCode <= 122 ? lowerCode - 97 : lowerCode >= 48 && lowerCode <= 57 ? 26 : lowerCode <= 127 ? 30 : 31;
            bitflags |= 1 << bit;
          }
          return {
            lowerCodes,
            bitflags,
            containsSpace,
            _lower: lower
          };
        };
        var prepareBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i = 0; i < targetLen; ++i) {
            var targetCode = target.charCodeAt(i);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning)
              beginningIndexes[beginningIndexesLen++] = i;
          }
          return beginningIndexes;
        };
        var prepareNextBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i = 0; i < targetLen; ++i) {
            if (lastIsBeginning > i) {
              nextBeginningIndexes[i] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        };
        var preparedCache = /* @__PURE__ */ new Map();
        var preparedSearchCache = /* @__PURE__ */ new Map();
        var matchesSimple = [];
        var matchesStrict = [];
        var nextBeginningIndexesChanges = [];
        var keysSpacesBestScores = [];
        var allowPartialMatchScores = [];
        var tmpTargets = [];
        var tmpResults = [];
        var getValue = (obj, prop) => {
          var tmp = obj[prop];
          if (tmp !== void 0)
            return tmp;
          if (typeof prop === "function")
            return prop(obj);
          var segs = prop;
          if (!Array.isArray(prop))
            segs = prop.split(".");
          var len = segs.length;
          var i = -1;
          while (obj && ++i < len)
            obj = obj[segs[i]];
          return obj;
        };
        var isPrepared = (x2) => {
          return typeof x2 === "object" && typeof x2._bitflags === "number";
        };
        var INFINITY = Infinity;
        var NEGATIVE_INFINITY = -INFINITY;
        var noResults = [];
        noResults.total = 0;
        var NULL = null;
        var noTarget = prepare("");
        var fastpriorityqueue = (r) => {
          var e = [], o = 0, a = {}, v2 = (r2) => {
            for (var a2 = 0, v3 = e[a2], c2 = 1; c2 < o; ) {
              var s = c2 + 1;
              a2 = c2, s < o && e[s]._score < e[c2]._score && (a2 = s), e[a2 - 1 >> 1] = e[a2], c2 = 1 + (a2 << 1);
            }
            for (var f = a2 - 1 >> 1; a2 > 0 && v3._score < e[f]._score; f = (a2 = f) - 1 >> 1)
              e[a2] = e[f];
            e[a2] = v3;
          };
          return a.add = (r2) => {
            var a2 = o;
            e[o++] = r2;
            for (var v3 = a2 - 1 >> 1; a2 > 0 && r2._score < e[v3]._score; v3 = (a2 = v3) - 1 >> 1)
              e[a2] = e[v3];
            e[a2] = r2;
          }, a.poll = (r2) => {
            if (0 !== o) {
              var a2 = e[0];
              return e[0] = e[--o], v2(), a2;
            }
          }, a.peek = (r2) => {
            if (0 !== o)
              return e[0];
          }, a.replaceTop = (r2) => {
            e[0] = r2, v2();
          }, a;
        };
        var q3 = fastpriorityqueue();
        return {
          "single": single,
          "go": go,
          "prepare": prepare,
          "cleanup": cleanup
        };
      });
    }
  });

  // src/core/ui/components/AddonPage.tsx
  function InputAlert(props) {
    var [value, setValue] = React.useState("");
    var [error, setError] = React.useState("");
    var [isFetching, setIsFetching] = React.useState(false);
    function onConfirmWrapper() {
      setIsFetching(true);
      props.fetchFn(value).then(() => dismissAlert("AddonInputAlert")).catch((e) => e instanceof Error ? setError(e.message) : String(e)).finally(() => setIsFetching(false));
    }
    return /* @__PURE__ */ jsx(AlertModal, {
      title: props.label,
      content: "Type in the source URL you want to install from:",
      extraContent: /* @__PURE__ */ jsxs(Stack, {
        style: {
          marginTop: -12
        },
        children: [
          /* @__PURE__ */ jsx(TextInput, {
            autoFocus: true,
            isClearable: true,
            value,
            onChange: (v2) => {
              setValue(v2);
              if (error)
                setError("");
            },
            returnKeyType: "done",
            onSubmitEditing: onConfirmWrapper,
            state: error ? "error" : void 0,
            errorMessage: error || void 0
          }),
          /* @__PURE__ */ jsx(import_react_native18.ScrollView, {
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            style: {
              gap: 8
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "sm",
              variant: "tertiary",
              text: "Import from clipboard",
              icon: findAssetId("ClipboardListIcon"),
              onPress: () => clipboard.getString().then((str) => setValue(str))
            })
          })
        ]
      }),
      actions: /* @__PURE__ */ jsxs(Stack, {
        children: [
          /* @__PURE__ */ jsx(Button, {
            loading: isFetching,
            text: "Install",
            variant: "primary",
            disabled: !value || !isValidHttpUrl(value),
            onPress: onConfirmWrapper
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            disabled: isFetching,
            text: "Cancel",
            variant: "secondary"
          })
        ]
      })
    });
  }
  function AddonPage({ CardComponent, ...props }) {
    var [search, setSearch] = React.useState("");
    var [sortFn, setSortFn] = React.useState(() => null);
    var { bottom: bottomInset } = useSafeAreaInsets();
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react3.useEffect)(() => {
      if (props.OptionsActionSheetComponent) {
        navigation2.setOptions({
          headerRight: () => /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "secondary",
            icon: findAssetId("MoreHorizontalIcon"),
            onPress: () => showSheet("AddonMoreSheet", props.OptionsActionSheetComponent)
          })
        });
      }
    }, [
      navigation2
    ]);
    var results = (0, import_react3.useMemo)(() => {
      var values = props.items;
      if (props.resolveItem)
        values = values.map(props.resolveItem).filter(isNotNil);
      var items = values.filter((i) => isNotNil(i) && typeof i === "object");
      if (!search && sortFn)
        items.sort(sortFn);
      return import_fuzzysort.default.go(search, items, {
        keys: props.searchKeywords,
        all: true
      });
    }, [
      props.items,
      sortFn,
      search
    ]);
    var onInstallPress = (0, import_react3.useCallback)(() => {
      if (!props.installAction)
        return () => {
        };
      var { label, onPress, fetchFn } = props.installAction;
      if (fetchFn) {
        openAlert("AddonInputAlert", /* @__PURE__ */ jsx(InputAlert, {
          label: label ?? "Install",
          fetchFn
        }));
      } else {
        onPress?.();
      }
    }, []);
    if (results.length === 0 && !search) {
      return /* @__PURE__ */ jsxs(import_react_native18.View, {
        style: {
          gap: 32,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native18.View, {
            style: {
              gap: 8,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native18.Image, {
                source: findAssetId("empty_quick_switcher")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Oops! Nothing to see here\u2026 yet!"
              })
            ]
          }),
          /* @__PURE__ */ jsx(Button, {
            size: "lg",
            icon: findAssetId("DownloadIcon"),
            text: props.installAction?.label ?? "Install",
            onPress: onInstallPress
          })
        ]
      });
    }
    var headerElement = /* @__PURE__ */ jsxs(import_react_native18.View, {
      style: {
        paddingBottom: 8
      },
      children: [
        settings.safeMode?.enabled && /* @__PURE__ */ jsxs(import_react_native18.View, {
          style: {
            marginBottom: 10
          },
          children: [
            /* @__PURE__ */ jsx(HelpMessage, {
              messageType: 0,
              children: props.safeModeHint?.message
            }),
            props.safeModeHint?.footer
          ]
        }),
        /* @__PURE__ */ jsxs(import_react_native18.View, {
          style: {
            flexDirection: "row",
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(Search_default, {
              style: {
                flexGrow: 1
              },
              isRound: !!props.sortOptions,
              onChangeText: (v2) => setSearch(v2)
            }),
            props.sortOptions && /* @__PURE__ */ jsx(IconButton, {
              icon: findAssetId("ic_forum_channel_sort_order_24px"),
              variant: "tertiary",
              disabled: !!search,
              onPress: () => showSimpleActionSheet({
                key: "AddonListSortOptions",
                header: {
                  title: "Sort Options",
                  onClose: () => hideActionSheet("AddonListSortOptions")
                },
                options: Object.entries(props.sortOptions).map(([name, fn]) => ({
                  label: name,
                  onPress: () => setSortFn(() => fn)
                }))
              })
            })
          ]
        }),
        props.ListHeaderComponent && /* @__PURE__ */ jsx(props.ListHeaderComponent, {})
      ]
    });
    return /* @__PURE__ */ jsxs(ErrorBoundary, {
      children: [
        /* @__PURE__ */ jsx(FlashList, {
          data: results,
          extraData: search,
          estimatedItemSize: 136,
          ListHeaderComponent: headerElement,
          ListEmptyComponent: () => /* @__PURE__ */ jsxs(import_react_native18.View, {
            style: {
              gap: 12,
              padding: 12,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native18.Image, {
                source: findAssetId("devices_not_found")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Hmmm... could not find that!"
              })
            ]
          }),
          contentContainerStyle: {
            padding: 8,
            paddingHorizontal: 12,
            paddingBottom: 90
          },
          ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native18.View, {
            style: {
              height: 8
            }
          }),
          ListFooterComponent: props.ListFooterComponent,
          renderItem: ({ item }) => /* @__PURE__ */ jsx(CardComponent, {
            item: item.obj,
            result: item
          })
        }),
        props.installAction && /* @__PURE__ */ jsx(FloatingActionButton, {
          positionBottom: bottomInset + 8,
          icon: findAssetId("PlusLargeIcon"),
          onPress: onInstallPress
        })
      ]
    });
  }
  var import_fuzzysort, import_react3, import_react_native18, showSimpleActionSheet, hideActionSheet;
  var init_AddonPage = __esm({
    "src/core/ui/components/AddonPage.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_settings();
      init_alerts();
      init_sheets();
      init_isValidHttpUrl();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_components2();
      init_dist();
      import_fuzzysort = __toESM(require_fuzzysort());
      import_react3 = __toESM(require_react());
      import_react_native18 = __toESM(require_react_native());
      ({ showSimpleActionSheet, hideActionSheet } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
    }
  });

  // src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts
  var usePluginCardStyles;
  var init_usePluginCardStyles = __esm({
    "src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_styles();
      usePluginCardStyles = createStyles({
        smallIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 18,
          width: 18
        },
        badgeIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 12,
          width: 12
        },
        badgesContainer: {
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 6,
          borderRadius: 6,
          padding: 4
        }
      });
    }
  });

  // src/core/ui/settings/pages/Plugins/components/PluginCard.tsx
  function getHighlightColor() {
    return (0, import_chroma_js4.default)(tokens.unsafe_rawColors.YELLOW_300).alpha(0.3).hex();
  }
  function Title() {
    var styles = usePluginCardStyles();
    var { plugin, result } = useCardContext();
    var highlightedNode = result[0].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var icon = plugin.icon && findAssetId(plugin.icon);
    var textNode = /* @__PURE__ */ jsx(Text, {
      numberOfLines: 1,
      variant: "heading-lg/semibold",
      children: highlightedNode.length ? highlightedNode : plugin.name
    });
    return /* @__PURE__ */ jsxs(import_react_native19.View, {
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      },
      children: [
        icon && /* @__PURE__ */ jsx(import_react_native19.Image, {
          style: styles.smallIcon,
          source: icon
        }),
        textNode
      ]
    });
  }
  function Authors() {
    var { plugin, result } = useCardContext();
    var styles = usePluginCardStyles();
    if (!plugin.authors)
      return null;
    var highlightedNode = result[2].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var badges = plugin.getBadges();
    var authorText = highlightedNode.length > 0 ? highlightedNode : plugin.authors.map((a) => a.name).join(", ");
    return /* @__PURE__ */ jsxs(import_react_native19.View, {
      style: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsxs(Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: [
            "by ",
            authorText
          ]
        }),
        badges.length > 0 && /* @__PURE__ */ jsx(import_react_native19.View, {
          style: styles.badgesContainer,
          children: badges.map((b3, i) => /* @__PURE__ */ jsx(import_react_native19.Image, {
            source: b3.source,
            style: styles.badgeIcon
          }, i))
        })
      ]
    });
  }
  function Description() {
    var { plugin, result } = useCardContext();
    var highlightedNode = result[1].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    return /* @__PURE__ */ jsx(Text, {
      variant: "text-md/medium",
      children: highlightedNode.length ? highlightedNode : plugin.description
    });
  }
  function PluginCard({ result, item: plugin }) {
    plugin.usePluginState();
    var [, forceUpdate] = React.useReducer(() => ({}), 0);
    var cardContextValue = (0, import_react4.useMemo)(() => ({
      plugin,
      result
    }), [
      plugin,
      result
    ]);
    return /* @__PURE__ */ jsx(CardContext.Provider, {
      value: cardContextValue,
      children: /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsxs(Stack, {
          spacing: 16,
          children: [
            /* @__PURE__ */ jsxs(import_react_native19.View, {
              style: {
                flexDirection: "row",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native19.View, {
                  style: {
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Title, {}),
                    /* @__PURE__ */ jsx(Authors, {})
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native19.View, {
                  children: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 12,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(Actions, {}),
                      /* @__PURE__ */ jsx(TableSwitch, {
                        value: plugin.isEnabled(),
                        onValueChange: (v2) => {
                          plugin.toggle(v2);
                          forceUpdate();
                        }
                      })
                    ]
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsx(Description, {})
          ]
        })
      })
    });
  }
  var import_chroma_js4, import_react4, import_react_native19, CardContext, useCardContext, Actions;
  var init_PluginCard = __esm({
    "src/core/ui/settings/pages/Plugins/components/PluginCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_usePluginCardStyles();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      import_chroma_js4 = __toESM(require_chroma_js());
      import_react4 = __toESM(require_react());
      import_react_native19 = __toESM(require_react_native());
      CardContext = /* @__PURE__ */ (0, import_react4.createContext)(null);
      useCardContext = () => (0, import_react4.useContext)(CardContext);
      Actions = () => {
        var { plugin } = useCardContext();
        var navigation2 = NavigationNative.useNavigation();
        return /* @__PURE__ */ jsxs(import_react_native19.View, {
          style: {
            flexDirection: "row",
            gap: 6
          },
          children: [
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("WrenchIcon"),
              disabled: !plugin.getPluginSettingsComponent(),
              onPress: () => navigation2.push("BLAZE_CUSTOM_PAGE", {
                title: plugin.name,
                render: plugin.getPluginSettingsComponent()
              })
            }),
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("CircleInformationIcon-primary"),
              onPress: () => void showSheet("PluginInfoActionSheet", plugin.resolveSheetComponent(), {
                plugin,
                navigation: navigation2
              })
            })
          ]
        });
      };
    }
  });

  // src/core/relapse/plugins.ts
  var plugins, pluginInstance, RePluginManager;
  var init_plugins = __esm({
    "src/core/relapse/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_settings();
      init_utils();
      init_constants();
      init_logger();
      plugins = wrapSync(createStorage(createMMKVBackend("RELAPSE_PLUGINS")));
      pluginInstance = {};
      RePluginManager = {
        plugins,
        pluginFetch(url2) {
          return _async_to_generator(function* () {
            if (url2.startsWith(RELAPSED_PROXY)) {
              url2 = url2.replace("https://bunny-mod.github.io/plugins-proxy", BLAZED_PROXY).replace(RELAPSED_PROXY, BLAZED_PROXY);
            }
            return yield safeFetch(url2, {
              cache: "no-store"
            });
          })();
        },
        fetchPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var existingPlugin = plugins[id];
            var pluginManifest;
            try {
              pluginManifest = yield (yield this.pluginFetch(id + "manifest.json")).json();
            } catch (e) {
              throw new Error(`Failed to fetch manifest for ${id}`);
            }
            var pluginJs;
            if (existingPlugin?.manifest.hash !== pluginManifest.hash) {
              try {
                pluginJs = yield (yield this.pluginFetch(id + (pluginManifest.main || "index.js"))).text();
              } catch (e) {
              }
            }
            if (!pluginJs && !existingPlugin)
              throw new Error(`Failed to fetch JS for ${id}`);
            plugins[id] = {
              id,
              manifest: pluginManifest,
              enabled: existingPlugin?.enabled ?? false,
              update: existingPlugin?.update ?? true,
              js: pluginJs ?? existingPlugin.js
            };
          }).apply(this);
        },
        installPlugin(id, enabled = true) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            if (typeof id !== "string" || id in plugins)
              throw new Error("Plugin already installed");
            yield this.fetchPlugin(id);
            if (enabled)
              yield this.startPlugin(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        evalPlugin(plugin) {
          return _async_to_generator(function* () {
            var relapseForPlugins = {
              ...window.relapse,
              plugin: {
                id: plugin.id,
                manifest: plugin.manifest,
                // Wrapping this with wrapSync is NOT an option.
                storage: yield createStorage(createMMKVBackend(plugin.id))
              },
              logger: new LoggerClass(`BlazeCord \xBB ${plugin.manifest.name}`)
            };
            var pluginString = `relapse=>{return ${plugin.js}}
//# sourceURL=${plugin.id}`;
            var raw = (0, eval)(pluginString)(relapseForPlugins);
            var ret = typeof raw === "function" ? raw() : raw;
            return ret?.default ?? ret ?? {};
          })();
        },
        startPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (!plugin)
              throw new Error("Attempted to start non-existent plugin");
            try {
              if (!settings.safeMode?.enabled) {
                var pluginRet = yield this.evalPlugin(plugin);
                pluginInstance[id] = pluginRet;
                pluginRet.onLoad?.();
              }
              plugin.enabled = true;
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst loading, and will be unloaded`, e);
              try {
                pluginInstance[plugin.id]?.onUnload?.();
              } catch (e2) {
                logger.error(`Plugin ${plugin.id} errored whilst unloading`, e2);
              }
              delete pluginInstance[id];
              plugin.enabled = false;
            }
          }).apply(this);
        },
        stopPlugin(id, disable = true) {
          if (!id.endsWith("/"))
            id += "/";
          var plugin = plugins[id];
          var pluginRet = pluginInstance[id];
          if (!plugin)
            throw new Error("Attempted to stop non-existent plugin");
          if (!settings.safeMode?.enabled) {
            try {
              pluginRet?.onUnload?.();
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst unloading`, e);
            }
            delete pluginInstance[id];
          }
          if (disable)
            plugin.enabled = false;
        },
        removePlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (plugin.enabled)
              this.stopPlugin(id);
            delete plugins[id];
            yield purgeStorage(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        initPlugins() {
          return _async_to_generator(function* () {
            yield awaitStorage(settings, plugins);
            var allIds = Object.keys(plugins);
            if (!settings.safeMode?.enabled) {
              var _this = this;
              yield allSettled(allIds.filter((pl) => plugins[pl].enabled).map(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (pl) {
                  return plugins[pl].update && (yield _this.fetchPlugin(pl).catch((e) => logger.error(e.message))), yield _this.startPlugin(pl);
                });
                return function(pl) {
                  return _ref.apply(this, arguments);
                };
              }()));
              allIds.filter((pl) => !plugins[pl].enabled && plugins[pl].update).forEach((pl) => this.fetchPlugin(pl));
            }
            return () => this.stopAllPlugins();
          }).apply(this);
        },
        stopAllPlugins() {
          return Object.keys(pluginInstance).forEach((p) => this.stopPlugin(p, false));
        },
        getSettings: (id) => pluginInstance[id]?.settings
      };
    }
  });

  // src/core/plugins/quickinstall/forumPost.tsx
  function useExtractThreadContent(thread, _firstMessage = null, actionSheet3 = false) {
    if (thread.guild_id !== RE_DISCORD_SERVER_ID)
      return;
    var postType;
    if (thread.parent_id === RE_PLUGINS_CHANNEL_ID) {
      postType = "Plugin";
    } else if (thread.parent_id === RE_THEMES_CHANNEL_ID && isThemeSupported()) {
      postType = "Theme";
    } else
      return;
    var { firstMessage } = actionSheet3 ? useFirstForumPostMessage(thread) : {
      firstMessage: _firstMessage
    };
    var urls = firstMessage?.content?.match(HTTP_REGEX_MULTI)?.filter(postMap[postType].urlsFilter);
    if (!urls || !urls[0])
      return;
    if (postType === "Plugin" && !urls[0].endsWith("/"))
      urls[0] += "/";
    return [
      postType,
      urls[0]
    ];
  }
  function useInstaller(thread, firstMessage = null, actionSheet3 = false) {
    var [postType, url2] = useExtractThreadContent(thread, firstMessage, actionSheet3) ?? [];
    useProxy(RePluginManager.plugins);
    useProxy(themes);
    var [isInstalling, setIsInstalling] = React.useState(false);
    if (!postType || !url2)
      return [
        true
      ];
    var isInstalled = Boolean(postMap[postType].storage[url2]);
    var installOrRemove = /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* () {
        setIsInstalling(true);
        try {
          yield postMap[postType].installOrRemove(url2);
        } catch (e) {
          showToast2(e.message, findAssetId("Small"));
        } finally {
          setIsInstalling(false);
        }
      });
      return function installOrRemove2() {
        return _ref.apply(this, arguments);
      };
    }();
    return [
      false,
      postType,
      isInstalled,
      isInstalling,
      installOrRemove
    ];
  }
  var useFirstForumPostMessage, forumReactions, postMap, installButtonPatch, forumPost_default;
  var init_forumPost = __esm({
    "src/core/plugins/quickinstall/forumPost.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_plugins();
      init_storage();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_components();
      init_wrappers();
      init_components2();
      init_toasts();
      ({ useFirstForumPostMessage } = lazyDestructure(() => findByProps("useFirstForumPostMessage")));
      forumReactions = findByPropsLazy("MostCommonForumPostReaction");
      postMap = {
        Plugin: {
          storage: RePluginManager.plugins,
          urlsFilter: (url2) => url2.startsWith(RELAPSED_PROXY),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Plugin.storage[url2];
            return isInstalled ? RePluginManager.removePlugin(url2) : RePluginManager.installPlugin(url2);
          }
        },
        Theme: {
          storage: themes,
          urlsFilter: (url2) => url2.endsWith(".json"),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Theme.storage[url2];
            return isInstalled ? removeTheme(url2) : installTheme(url2);
          }
        }
      };
      installButtonPatch = () => after("MostCommonForumPostReaction", forumReactions, ([{ thread, firstMessage }], res) => {
        var [shouldReturn, _2, installed, loading, installOrRemove] = useInstaller(thread, firstMessage, true);
        if (shouldReturn)
          return;
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            res,
            /* @__PURE__ */ jsx(ErrorBoundary, {
              children: /* @__PURE__ */ jsx(Button, {
                size: "sm",
                loading,
                disabled: loading,
                // variant={installed ? "destructive" : "primary"} crashes older version because "destructive" was renamed from "danger" and there's no sane way for compat check horror
                variant: installed ? "secondary" : "primary",
                text: installed ? Strings.UNINSTALL : Strings.INSTALL,
                onPress: installOrRemove,
                icon: findAssetId(installed ? "ic_message_delete" : "DownloadIcon"),
                style: {
                  marginLeft: 8
                }
              })
            })
          ]
        });
      });
      forumPost_default = () => {
        var patches2 = [
          // actionSheetPatch(),
          installButtonPatch()
        ];
        return () => patches2.map((p) => p());
      };
    }
  });

  // src/lib/ui/components/InputAlert.tsx
  function InputAlert2({ title, confirmText, confirmColor, onConfirm, cancelText, placeholder, initialValue = "", secureTextEntry }) {
    var [value, setValue] = React.useState(initialValue);
    var [error, setError] = React.useState("");
    function onConfirmWrapper() {
      var asyncOnConfirm = Promise.resolve(onConfirm(value));
      asyncOnConfirm.then(() => {
        Alerts.close();
      }).catch((e) => {
        setError(e.message);
      });
    }
    return /* @__PURE__ */ jsx(LegacyAlert, {
      title,
      confirmText,
      confirmColor,
      isConfirmButtonDisabled: error.length !== 0,
      onConfirm: onConfirmWrapper,
      cancelText,
      onCancel: () => Alerts.close(),
      children: /* @__PURE__ */ jsx(LegacyFormInput, {
        placeholder,
        value,
        onChange: (v2) => {
          setValue(typeof v2 === "string" ? v2 : v2.text);
          if (error)
            setError("");
        },
        returnKeyType: "done",
        onSubmitEditing: onConfirmWrapper,
        error: error || void 0,
        secureTextEntry,
        autoFocus: true,
        showBorder: true,
        style: {
          alignSelf: "stretch"
        }
      })
    });
  }
  var Alerts;
  var init_InputAlert = __esm({
    "src/lib/ui/components/InputAlert.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_components();
      init_wrappers();
      Alerts = findByPropsLazy("openLazy", "close");
    }
  });

  // src/core/relapse/alerts.ts
  function showConfirmationAlert(options) {
    var internalOptions = options;
    internalOptions.body = options.content;
    delete internalOptions.content;
    internalOptions.isDismissable ??= true;
    return Alerts2.show(internalOptions);
  }
  var Alerts2, showCustomAlert, showInputAlert;
  var init_alerts2 = __esm({
    "src/core/relapse/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_wrappers();
      init_InputAlert();
      Alerts2 = findByPropsLazy("openLazy", "close");
      showCustomAlert = (component, props) => Alerts2.openLazy({
        importer: /* @__PURE__ */ _async_to_generator(function* () {
          return () => React.createElement(component, props);
        })
      });
      showInputAlert = (options) => showCustomAlert(InputAlert2, options);
    }
  });

  // src/core/plugins/quickinstall/url.tsx
  function typeFromUrl(url2) {
    if (url2.startsWith(RELAPSED_PROXY)) {
      return "plugin";
    } else if (url2.endsWith(".json") && isThemeSupported()) {
      return "theme";
    }
  }
  function installWithToast(type, url2) {
    (type === "plugin" ? RePluginManager.installPlugin.bind(RePluginManager) : installTheme)(url2).then(() => {
      showToast2(Strings.SUCCESSFULLY_INSTALLED, findAssetId("Check"));
    }).catch((e) => {
      showToast2(e.message, findAssetId("Small"));
    });
  }
  var import_react_native20, showSimpleActionSheet2, handleClick, getChannelId, getChannel, url_default;
  var init_url = __esm({
    "src/core/plugins/quickinstall/url.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_common();
      init_filters();
      init_finders();
      init_wrappers();
      init_toasts();
      import_react_native20 = __toESM(require_react_native());
      showSimpleActionSheet2 = findExports(byMutableProp("showSimpleActionSheet"));
      handleClick = findByPropsLazy("handleClick");
      ({ getChannelId } = lazyDestructure(() => channels));
      ({ getChannel } = lazyDestructure(() => findByProps("getChannel")));
      url_default = () => {
        var patches2 = new Array();
        patches2.push(after("showSimpleActionSheet", showSimpleActionSheet2, (args) => {
          if (args[0].key !== "LongPressUrl")
            return;
          var { header: { title: url2 }, options } = args[0];
          var urlType = typeFromUrl(url2);
          if (!urlType)
            return;
          options.push({
            label: Strings.INSTALL_ADDON,
            onPress: () => installWithToast(urlType, url2)
          });
        }));
        patches2.push(instead("handleClick", handleClick, /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (args, orig) {
            var { href: url2 } = args[0];
            var urlType = typeFromUrl(url2);
            if (!urlType)
              return orig.apply(this, args);
            if (urlType === "theme" && getChannel(getChannelId())?.parent_id !== RE_THEMES_CHANNEL_ID)
              return orig.apply(this, args);
            showConfirmationAlert({
              title: Strings.HOLD_UP,
              content: formatString("CONFIRMATION_LINK_IS_A_TYPE", {
                urlType
              }),
              onConfirm: () => installWithToast(urlType, url2),
              confirmText: Strings.INSTALL,
              cancelText: Strings.CANCEL,
              secondaryConfirmText: Strings.OPEN_IN_BROWSER,
              onConfirmSecondary: () => import_react_native20.Linking.openURL(url2)
            });
          });
          return function(args, orig) {
            return _ref.apply(this, arguments);
          };
        }()));
        return () => patches2.forEach((p) => p());
      };
    }
  });

  // src/core/plugins/quickinstall/index.ts
  var quickinstall_exports = {};
  __export(quickinstall_exports, {
    default: () => quickinstall_default
  });
  var patches, quickinstall_default;
  var init_quickinstall = __esm({
    "src/core/plugins/quickinstall/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins2();
      init_forumPost();
      init_url();
      patches = [];
      quickinstall_default = defineCorePlugin({
        manifest: {
          id: "blaze.quickinstall",
          name: "QuickInstall",
          version: "1.0.0",
          description: "Quickly install Relapse plugins and themes",
          authors: [
            {
              name: "Relapse Team"
            }
          ]
        },
        start() {
          patches = [
            forumPost_default(),
            url_default()
          ];
        },
        stop() {
          patches.forEach((p) => p());
        }
      });
    }
  });

  // src/lib/api/react/jsx.ts
  var jsx_exports = {};
  __export(jsx_exports, {
    deleteJsxCreate: () => deleteJsxCreate,
    onJsxCreate: () => onJsxCreate,
    patchJsx: () => patchJsx
  });
  function onJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      callbacks.set(Component, []);
    callbacks.get(Component).push(callback);
  }
  function deleteJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      return;
    var cbs = callbacks.get(Component);
    cbs.splice(cbs.indexOf(callback), 1);
    if (cbs.length === 0)
      callbacks.delete(Component);
  }
  function patchJsx() {
    var callback = ([Component], ret) => {
      if (typeof ret.type === "undefined") {
        ret.type = "RCTView";
        return ret;
      }
      if (typeof Component === "function" && callbacks.has(Component.name)) {
        var cbs = callbacks.get(Component.name);
        for (var cb of cbs) {
          var _ret = cb(Component, ret);
          if (_ret !== void 0)
            ret = _ret;
        }
        return ret;
      }
    };
    var patches2 = [
      after("jsx", jsxRuntime2, callback),
      after("jsxs", jsxRuntime2, callback)
    ];
    return () => patches2.forEach((unpatch) => unpatch());
  }
  var callbacks, jsxRuntime2;
  var init_jsx = __esm({
    "src/lib/api/react/jsx.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_metro();
      callbacks = /* @__PURE__ */ new Map();
      jsxRuntime2 = findByPropsLazy("jsx", "jsxs");
    }
  });

  // src/core/plugins/badges/index.tsx
  var badges_exports = {};
  __export(badges_exports, {
    default: () => badges_default
  });
  var import_react5, useBadgesModule, badges_default;
  var init_badges = __esm({
    "src/core/plugins/badges/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_jsx();
      init_metro();
      import_react5 = __toESM(require_react());
      init_plugins2();
      useBadgesModule = findByName("useBadges", false);
      badges_default = defineCorePlugin({
        manifest: {
          id: "blaze.badges",
          name: "Badges",
          version: "1.0.0",
          description: "Adds badges to user's profile",
          authors: [
            {
              name: "pylixonly"
            }
          ]
        },
        start() {
          var propHolder = {};
          var badgeCache = {};
          onJsxCreate("RenderedBadge", (_2, ret) => {
            if (ret.props.id.match(/blaze-\d+-\d+/)) {
              Object.assign(ret.props, propHolder[ret.props.id]);
            }
          });
          after("default", useBadgesModule, ([user], r) => {
            var [badges, setBadges] = (0, import_react5.useState)(user ? badgeCache[user.userId] ??= [] : []);
            (0, import_react5.useEffect)(() => {
              if (user) {
                fetch(`https://raw.githubusercontent.com/BlazeK1ng420/BlazeK1ng420.github.io/refs/heads/base/assets/BlazeCord/Badges/${user.userId}.json`).then((r2) => r2.json()).then((badges2) => setBadges(badgeCache[user.userId] = badges2));
              }
            }, [
              user
            ]);
            if (user) {
              badges.forEach((badges2, i) => {
                propHolder[`blaze-${user.userId}-${i}`] = {
                  source: {
                    uri: badges2.url
                  },
                  id: `blaze-${i}`,
                  label: badges2.label
                };
                r.push({
                  id: `blaze-${user.userId}-${i}`,
                  description: badges2.label,
                  icon: "_"
                });
              });
            }
          });
        }
      });
    }
  });

  // src/core/plugins/index.ts
  function defineCorePlugin(instance) {
    instance[Symbol.for("blaze.core.plugin")] = true;
    return instance;
  }
  var getCorePlugins;
  var init_plugins2 = __esm({
    "src/core/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      getCorePlugins = () => ({
        "blaze.quickinstall": (init_quickinstall(), __toCommonJS(quickinstall_exports)),
        "blaze.badges": (init_badges(), __toCommonJS(badges_exports))
      });
    }
  });

  // src/lib/api/commands/types.ts
  var ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType;
  var init_types = __esm({
    "src/lib/api/commands/types.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ApplicationCommandInputType2) {
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN"] = 0] = "BUILT_IN";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_TEXT"] = 1] = "BUILT_IN_TEXT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_INTEGRATION"] = 2] = "BUILT_IN_INTEGRATION";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BOT"] = 3] = "BOT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["PLACEHOLDER"] = 4] = "PLACEHOLDER";
      })(ApplicationCommandInputType || (ApplicationCommandInputType = {}));
      (function(ApplicationCommandOptionType2) {
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND"] = 1] = "SUB_COMMAND";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["STRING"] = 3] = "STRING";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["INTEGER"] = 4] = "INTEGER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["BOOLEAN"] = 5] = "BOOLEAN";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["USER"] = 6] = "USER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["CHANNEL"] = 7] = "CHANNEL";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ROLE"] = 8] = "ROLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["MENTIONABLE"] = 9] = "MENTIONABLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["NUMBER"] = 10] = "NUMBER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ATTACHMENT"] = 11] = "ATTACHMENT";
      })(ApplicationCommandOptionType || (ApplicationCommandOptionType = {}));
      (function(ApplicationCommandType2) {
        ApplicationCommandType2[ApplicationCommandType2["CHAT"] = 1] = "CHAT";
        ApplicationCommandType2[ApplicationCommandType2["USER"] = 2] = "USER";
        ApplicationCommandType2[ApplicationCommandType2["MESSAGE"] = 3] = "MESSAGE";
      })(ApplicationCommandType || (ApplicationCommandType = {}));
    }
  });

  // src/core/commands/eval.ts
  var eval_exports = {};
  __export(eval_exports, {
    default: () => eval_default
  });
  function wrapInJSCodeblock(resString) {
    return "```js\n" + resString.replaceAll("`", "`" + ZERO_WIDTH_SPACE_CHARACTER) + "\n```";
  }
  var util, AsyncFunction, ZERO_WIDTH_SPACE_CHARACTER, eval_default;
  var init_eval = __esm({
    "src/core/commands/eval.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_types();
      init_settings();
      init_common();
      init_wrappers();
      util = findByPropsLazy("inspect");
      AsyncFunction = _async_to_generator(function* () {
        return void 0;
      }).constructor;
      ZERO_WIDTH_SPACE_CHARACTER = "\u200B";
      eval_default = () => ({
        name: "eval",
        description: Strings.COMMAND_EVAL_DESC,
        shouldHide: () => settings.enableEvalCommand === true,
        options: [
          {
            name: "code",
            type: ApplicationCommandOptionType.STRING,
            description: Strings.COMMAND_EVAL_OPT_CODE,
            required: true
          },
          {
            name: "async",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_EVAL_OPT_ASYNC
          }
        ],
        execute([code, async], ctx) {
          return _async_to_generator(function* () {
            try {
              var res = util.inspect(async?.value ? yield AsyncFunction(code.value)() : eval?.(code.value));
              var trimmedRes = res.length > 2e3 ? res.slice(0, 2e3) + "..." : res;
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(trimmedRes));
            } catch (err) {
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(err?.stack ?? err));
            }
          })();
        }
      });
    }
  });

  // src/core/commands/debug.ts
  var debug_exports2 = {};
  __export(debug_exports2, {
    default: () => debug_default
  });
  var debug_default;
  var init_debug2 = __esm({
    "src/core/commands/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_types();
      init_debug();
      init_common();
      debug_default = () => ({
        name: "debug",
        description: Strings.COMMAND_DEBUG_DESC,
        options: [
          {
            name: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var info = getDebugInfo();
          var content = [
            "**BlazeCord Debug Info**",
            `> BlazeCord: ${info.blaze.version} (${info.blaze.loader.name} ${info.blaze.loader.version})`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `> React: ${info.react.version} (RN ${info.react.nativeVersion})`,
            `> Hermes: ${info.hermes.version} (bcv${info.hermes.bytecodeVersion})`,
            `> System: ${info.os.name} ${info.os.version} ${info.os.sdk ? `(SDK ${info.os.sdk})` : ""}`.trimEnd(),
            `> Device: ${info.device.model} (${info.device.codename})`
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/core/commands/plugins.ts
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins3 = __esm({
    "src/core/commands/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_plugins();
      init_types();
      init_common();
      plugins_default = () => ({
        name: "plugins",
        description: Strings.COMMAND_PLUGINS_DESC,
        options: [
          {
            name: "ephemeral",
            displayName: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var plugins2 = Object.values(RePluginManager.plugins).filter(Boolean);
          plugins2.sort((a, b3) => a.manifest.name.localeCompare(b3.manifest.name));
          var enabled = plugins2.filter((p) => p.enabled).map((p) => p.manifest.name);
          var disabled = plugins2.filter((p) => !p.enabled).map((p) => p.manifest.name);
          var content = [
            `**Installed Plugins (${plugins2.length}):**`,
            ...enabled.length > 0 ? [
              `Enabled (${enabled.length}):`,
              "> " + enabled.join(", ")
            ] : [],
            ...disabled.length > 0 ? [
              `Disabled (${disabled.length}):`,
              "> " + disabled.join(", ")
            ] : []
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/lib/api/commands/index.ts
  var commands_exports = {};
  __export(commands_exports, {
    patchCommands: () => patchCommands,
    registerCommand: () => registerCommand
  });
  function patchCommands() {
    var unpatch = after("getBuiltInCommands", commands, ([type], res) => {
      return [
        ...res,
        ...commands2.filter((c2) => (type instanceof Array ? type.includes(c2.type) : type === c2.type) && c2.__blaze?.shouldHide?.() !== false)
      ];
    });
    [
      (init_eval(), __toCommonJS(eval_exports)),
      (init_debug2(), __toCommonJS(debug_exports2)),
      (init_plugins3(), __toCommonJS(plugins_exports))
    ].forEach((r) => registerCommand(r.default()));
    return () => {
      commands2 = [];
      unpatch();
    };
  }
  function registerCommand(command) {
    var builtInCommands;
    try {
      builtInCommands = commands.getBuiltInCommands(ApplicationCommandType.CHAT, true, false);
    } catch (e) {
      builtInCommands = commands.getBuiltInCommands(Object.values(ApplicationCommandType), true, false);
    }
    builtInCommands.sort((a, b3) => parseInt(b3.id) - parseInt(a.id));
    var lastCommand = builtInCommands[builtInCommands.length - 1];
    command.id = (parseInt(lastCommand.id, 10) - 1).toString();
    command.__blaze = {
      shouldHide: command.shouldHide
    };
    command.applicationId ??= "-1";
    command.type ??= ApplicationCommandType.CHAT;
    command.inputType = ApplicationCommandInputType.BUILT_IN;
    command.displayName ??= command.name;
    command.untranslatedName ??= command.name;
    command.displayDescription ??= command.description;
    command.untranslatedDescription ??= command.description;
    if (command.options)
      for (var opt of command.options) {
        opt.displayName ??= opt.name;
        opt.displayDescription ??= opt.description;
      }
    instead("execute", command, (args, orig) => {
      Promise.resolve(orig.apply(command, args)).then((ret) => {
        if (ret && typeof ret === "object") {
          messageUtil.sendMessage(args[1].channel.id, ret);
        }
      }).catch((err) => {
        logger.error("Failed to execute command", err);
      });
    });
    commands2.push(command);
    return () => commands2 = commands2.filter(({ id }) => id !== command.id);
  }
  var commands2;
  var init_commands = __esm({
    "src/lib/api/commands/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_types();
      init_patcher();
      init_logger();
      init_common();
      commands2 = [];
    }
  });

  // src/lib/api/flux/index.ts
  var flux_exports = {};
  __export(flux_exports, {
    dispatcher: () => dispatcher,
    injectFluxInterceptor: () => injectFluxInterceptor,
    intercept: () => intercept
  });
  function injectFluxInterceptor() {
    var cb = (payload) => {
      for (var intercept2 of intercepts) {
        var res = intercept2(payload);
        if (res == null) {
          continue;
        } else if (!res) {
          payload[blockedSym] = true;
        } else if (typeof res === "object") {
          Object.assign(payload, res);
          payload[modifiedSym] = true;
        }
      }
      return blockedSym in payload;
    };
    (dispatcher._interceptors ??= []).unshift(cb);
    return () => dispatcher._interceptors &&= dispatcher._interceptors.filter((v2) => v2 !== cb);
  }
  function intercept(cb) {
    intercepts.push(cb);
    return () => {
      intercepts = intercepts.filter((i) => i !== cb);
    };
  }
  var blockedSym, modifiedSym, dispatcher, intercepts;
  var init_flux = __esm({
    "src/lib/api/flux/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      blockedSym = Symbol.for("blaze.flux.blocked");
      modifiedSym = Symbol.for("blaze.flux.modified");
      dispatcher = FluxDispatcher;
      intercepts = [];
    }
  });

  // src/lib/api/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    fs: () => fs_exports
  });
  var init_native = __esm({
    "src/lib/api/native/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
    }
  });

  // src/lib/api/react/index.ts
  var react_exports = {};
  __export(react_exports, {
    jsx: () => jsx_exports
  });
  var init_react = __esm({
    "src/lib/api/react/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsx();
    }
  });

  // src/lib/api/index.ts
  var api_exports = {};
  __export(api_exports, {
    assets: () => assets_exports,
    commands: () => commands_exports,
    debug: () => debug_exports,
    flux: () => flux_exports,
    native: () => native_exports,
    patcher: () => patcher_exports,
    react: () => react_exports,
    settings: () => settings_exports,
    storage: () => storage_exports
  });
  var init_api = __esm({
    "src/lib/api/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assets();
      init_commands();
      init_debug();
      init_flux();
      init_native();
      init_patcher();
      init_react();
      init_settings();
      init_storage2();
    }
  });

  // src/lib/addons/plugins/api.ts
  function shimDisposableFn(unpatches, f) {
    var dummy = (...props) => {
      var up = f(...props);
      unpatches.push(up);
      return up;
    };
    for (var key in f)
      if (typeof f[key] === "function") {
        dummy[key] = shimDisposableFn(unpatches, f[key]);
      }
    return dummy;
  }
  function createBlazePluginApi(id) {
    var disposers = new Array();
    var object = {
      ...window.blaze,
      api: {
        ...window.blaze.api,
        patcher: {
          before: shimDisposableFn(disposers, patcher_exports.before),
          after: shimDisposableFn(disposers, patcher_exports.after),
          instead: shimDisposableFn(disposers, patcher_exports.instead)
        },
        commands: {
          ...window.blaze.api.commands,
          registerCommand: shimDisposableFn(disposers, registerCommand)
        },
        flux: {
          ...window.blaze.api.flux,
          intercept: shimDisposableFn(disposers, window.blaze.api.flux.intercept)
        }
      },
      // Added something in here? Make sure to also update BlazePluginProperty in ./types
      plugin: {
        createStorage: () => createStorage2(`plugins/storage/${id}.json`),
        manifest: registeredPlugins.get(id),
        logger
      }
    };
    return {
      object,
      disposers
    };
  }
  var init_api2 = __esm({
    "src/lib/addons/plugins/api.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_api();
      init_commands();
      init_storage2();
      init_logger();
      init_plugins4();
    }
  });

  // src/lib/addons/plugins/index.ts
  var plugins_exports2 = {};
  __export(plugins_exports2, {
    apiObjects: () => apiObjects,
    corePluginInstances: () => corePluginInstances,
    deleteRepository: () => deleteRepository,
    disablePlugin: () => disablePlugin,
    enablePlugin: () => enablePlugin,
    getPluginSettingsComponent: () => getPluginSettingsComponent,
    initPlugins: () => initPlugins,
    installPlugin: () => installPlugin,
    isCorePlugin: () => isCorePlugin,
    isGreaterVersion: () => isGreaterVersion,
    isPluginEnabled: () => isPluginEnabled,
    isPluginInstalled: () => isPluginInstalled,
    pluginInstances: () => pluginInstances,
    pluginRepositories: () => pluginRepositories,
    pluginSettings: () => pluginSettings,
    refreshPlugin: () => refreshPlugin,
    registeredPlugins: () => registeredPlugins,
    startPlugin: () => startPlugin,
    stopPlugin: () => stopPlugin,
    uninstallPlugin: () => uninstallPlugin,
    updateAllRepository: () => updateAllRepository,
    updateAndWritePlugin: () => updateAndWritePlugin,
    updatePlugins: () => updatePlugins,
    updateRepository: () => updateRepository
  });
  function assert(condition, id, attempt) {
    if (!condition)
      throw new Error(`[${id}] Attempted to ${attempt}`);
  }
  function isGreaterVersion(v1, v2) {
    if (semver.gt(v1, v2))
      return true;
    var coerced = semver.coerce(v1);
    if (coerced == null)
      return false;
    return semver.prerelease(v1)?.includes("dev") && semver.eq(coerced, v2);
  }
  function isExternalPlugin(manifest) {
    return "parentRepository" in manifest;
  }
  function isCorePlugin(id) {
    return corePluginInstances.has(id);
  }
  function getPluginSettingsComponent(id) {
    var instance = pluginInstances.get(id);
    if (!instance)
      return null;
    if (instance.SettingsComponent)
      return instance.SettingsComponent;
    return null;
  }
  function isPluginInstalled(id) {
    return pluginSettings[id] != null;
  }
  function isPluginEnabled(id) {
    return Boolean(pluginSettings[id]?.enabled);
  }
  function updateAndWritePlugin(repoUrl, id, fetchScript) {
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function _updateAndWritePlugin() {
    _updateAndWritePlugin = _async_to_generator(function* (repoUrl, id, fetchScript) {
      var manifest = yield fetchJSON(repoUrl, `builds/${id}/manifest.json`);
      manifest.parentRepository = repoUrl;
      if (fetchScript) {
        manifest.jsPath = `plugins/scripts/${id}.js`;
        var js = yield fetchJS(repoUrl, `builds/${id}/index.js`);
        yield writeFile(manifest.jsPath, js);
      }
      yield updateStorage(`plugins/manifests/${id}.json`, manifest);
      if (registeredPlugins.has(id)) {
        var existingManifest = registeredPlugins.get(id);
        return Object.assign(existingManifest, manifest);
      }
      return manifest;
    });
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function refreshPlugin(id, repoUrl) {
    return _refreshPlugin.apply(this, arguments);
  }
  function _refreshPlugin() {
    _refreshPlugin = _async_to_generator(function* (id, repoUrl) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "refresh a non-registered plugin");
      assert(pluginInstances.get(id), id, "refresh a non-started plugin");
      stopPlugin(id);
      if (isExternalPlugin(manifest)) {
        manifest = yield updateAndWritePlugin(repoUrl ?? manifest.parentRepository, id, true);
      }
      registeredPlugins.delete(id);
      registeredPlugins.set(id, manifest);
      yield startPlugin(id);
    });
    return _refreshPlugin.apply(this, arguments);
  }
  function updateRepository(repoUrl) {
    return _updateRepository.apply(this, arguments);
  }
  function _updateRepository() {
    _updateRepository = _async_to_generator(function* (repoUrl) {
      var repo = yield fetchJSON(repoUrl, "repo.json");
      var storedRepo = pluginRepositories[repoUrl];
      var updated = false;
      if (!storedRepo) {
        for (var id in repo) {
          if (corePluginInstances.has(id)) {
            throw new Error(`Plugins can't have the same ID as any of Blaze core plugin '${id}'`);
          }
        }
        updated = true;
        pluginRepositories[repoUrl] = repo;
      } else {
        for (var plugin in storedRepo)
          if (!repo[plugin]) {
            delete storedRepo[plugin];
          }
      }
      var pluginIds = Object.keys(repo).filter((id2) => !id2.startsWith("$"));
      yield Promise.all(pluginIds.map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (pluginId) {
          if (!storedRepo || !storedRepo[pluginId] || repo[pluginId].alwaysFetch || isGreaterVersion(repo[pluginId].version, storedRepo[pluginId].version)) {
            updated = true;
            pluginRepositories[repoUrl][pluginId] = repo[pluginId];
            yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
          } else {
            var manifest2 = yield preloadStorageIfExists(`plugins/manifests/${pluginId}.json`);
            if (!manifest2) {
              yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
            }
          }
        });
        return function(pluginId) {
          return _ref.apply(this, arguments);
        };
      }()));
      for (var id1 of pluginIds) {
        var manifest = getPreloadedStorage(`plugins/manifests/${id1}.json`);
        if (manifest === void 0)
          continue;
        var existing = registeredPlugins.get(id1);
        if (existing && !isGreaterVersion(manifest.version, existing.version)) {
          continue;
        }
        registeredPlugins.set(id1, manifest);
      }
      return updated;
    });
    return _updateRepository.apply(this, arguments);
  }
  function deleteRepository(repoUrl) {
    return _deleteRepository.apply(this, arguments);
  }
  function _deleteRepository() {
    _deleteRepository = _async_to_generator(function* (repoUrl) {
      assert(repoUrl !== OFFICIAL_PLUGINS_REPO_URL, repoUrl, "delete the official repository");
      assert(pluginRepositories[repoUrl], repoUrl, "delete a non-registered repository");
      var promQueues = [];
      for (var [id, manifest] of registeredPlugins) {
        if (!isExternalPlugin(manifest) || manifest.parentRepository !== repoUrl)
          continue;
        if (isPluginInstalled(id)) {
          promQueues.push(uninstallPlugin(id));
        }
        promQueues.push(purgeStorage2(`plugins/manifests/${id}.json`));
        registeredPlugins.delete(id);
      }
      delete pluginRepositories[repoUrl];
      yield Promise.all(promQueues);
      updateAllRepository();
    });
    return _deleteRepository.apply(this, arguments);
  }
  function enablePlugin(id, start) {
    return _enablePlugin.apply(this, arguments);
  }
  function _enablePlugin() {
    _enablePlugin = _async_to_generator(function* (id, start) {
      assert(isPluginInstalled(id), id, "enable a non-installed plugin");
      if (start)
        yield startPlugin(id);
      pluginSettings[id].enabled = true;
    });
    return _enablePlugin.apply(this, arguments);
  }
  function disablePlugin(id) {
    assert(isPluginInstalled(id), id, "disable a non-installed plugin");
    pluginInstances.has(id) && stopPlugin(id);
    pluginSettings[id].enabled = false;
  }
  function installPlugin(id, start) {
    return _installPlugin.apply(this, arguments);
  }
  function _installPlugin() {
    _installPlugin = _async_to_generator(function* (id, start) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "install an non-registered plugin");
      assert(!isPluginInstalled(id), id, "install an already installed plugin");
      assert(isExternalPlugin(manifest), id, "install a core plugin");
      yield updateAndWritePlugin(manifest.parentRepository, id, true);
      pluginSettings[id] = {
        enabled: true
      };
      if (start)
        startPlugin(id);
    });
    return _installPlugin.apply(this, arguments);
  }
  function uninstallPlugin(id) {
    return _uninstallPlugin.apply(this, arguments);
  }
  function _uninstallPlugin() {
    _uninstallPlugin = _async_to_generator(function* (id) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "uninstall an unregistered plugin");
      assert(isPluginInstalled(id), id, "uninstall a non-installed plugin");
      assert(isExternalPlugin(manifest), id, "uninstall a core plugin");
      pluginInstances.has(id) && stopPlugin(id);
      delete pluginSettings[id];
      yield purgeStorage2(`plugins/storage/${id}.json`);
      yield removeFile(`plugins/scripts/${id}.js`);
    });
    return _uninstallPlugin.apply(this, arguments);
  }
  function startPlugin(id) {
    return _startPlugin.apply(this, arguments);
  }
  function _startPlugin() {
    _startPlugin = _async_to_generator(function* (id, { throwIfDisabled = false, disableWhenThrown = true } = {}) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "start a non-registered plugin");
      assert(isPluginInstalled(id), id, "start a non-installed plugin");
      assert(!throwIfDisabled || pluginSettings[id]?.enabled, id, "start a disabled plugin");
      assert(!pluginInstances.has(id), id, "start an already started plugin");
      yield preloadStorageIfExists(`plugins/storage/${id}.json`);
      var pluginInstance2;
      if (isExternalPlugin(manifest)) {
        try {
          var iife = yield readFile(manifest.jsPath);
          var instantiator = globalEvalWithSourceUrl(`(blaze,definePlugin)=>{${iife};return plugin?.default ?? plugin;}`, `blaze-plugin/${id}-${manifest.version}`);
        } catch (error) {
          throw new Error("An error occured while parsing plugin's code, possibly a syntax error?", {
            cause: error
          });
        }
        try {
          var api = createBlazePluginApi(id);
          pluginInstance2 = instantiator(api.object, (p) => {
            return Object.assign(p, {
              manifest
            });
          });
          if (!pluginInstance2)
            throw new Error(`Plugin '${id}' does not export a valid plugin instance`);
          apiObjects.set(id, api);
          pluginInstances.set(id, pluginInstance2);
        } catch (error) {
          throw new Error("An error occured while instantiating plugin's code", {
            cause: error
          });
        }
      } else {
        pluginInstance2 = corePluginInstances.get(id);
        assert(pluginInstance2, id, "start a non-existent core plugin");
        pluginInstances.set(id, pluginInstance2);
      }
      try {
        pluginInstance2.start?.();
        pluginSettings[id].enabled = true;
      } catch (error) {
        disableWhenThrown && disablePlugin(id);
        throw new Error("An error occured while starting the plugin", {
          cause: error
        });
      }
    });
    return _startPlugin.apply(this, arguments);
  }
  function stopPlugin(id) {
    var instance = pluginInstances.get(id);
    assert(instance, id, "stop a non-started plugin");
    instance.stop?.();
    var obj = apiObjects.get(id);
    obj?.disposers.forEach((d) => d());
    pluginInstances.delete(id);
  }
  function updateAllRepository() {
    return _updateAllRepository.apply(this, arguments);
  }
  function _updateAllRepository() {
    _updateAllRepository = _async_to_generator(function* () {
      try {
        yield updateRepository(OFFICIAL_PLUGINS_REPO_URL);
      } catch (error) {
        console.error("Failed to update official plugins repository", error);
      }
      yield allSettled(Object.keys(pluginRepositories).map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (repo) {
          if (repo !== OFFICIAL_PLUGINS_REPO_URL) {
            yield updateRepository(repo);
          }
        });
        return function(repo) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _updateAllRepository.apply(this, arguments);
  }
  function updatePlugins() {
    return _updatePlugins.apply(this, arguments);
  }
  function _updatePlugins() {
    _updatePlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      var corePlugins = getCorePlugins();
      for (var id in corePlugins) {
        var { default: instance, preenabled } = corePlugins[id];
        pluginSettings[id] ??= {
          enabled: preenabled ?? true
        };
        registeredPlugins.set(id, instance.manifest);
        corePluginInstances.set(id, instance);
      }
      yield updateAllRepository();
    });
    return _updatePlugins.apply(this, arguments);
  }
  function initPlugins() {
    return _initPlugins.apply(this, arguments);
  }
  function _initPlugins() {
    _initPlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      yield allSettled([
        ...registeredPlugins.keys()
      ].map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (id) {
          if (isPluginEnabled(id)) {
            yield startPlugin(id);
          }
        });
        return function(id) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _initPlugins.apply(this, arguments);
  }
  var corePluginInstances, registeredPlugins, pluginInstances, apiObjects, pluginRepositories, pluginSettings, _fetch, fetchJS, fetchJSON;
  var init_plugins4 = __esm({
    "src/lib/addons/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_plugins2();
      init_fs();
      init_storage2();
      init_utils();
      init_constants();
      init_common();
      init_api2();
      corePluginInstances = /* @__PURE__ */ new Map();
      registeredPlugins = /* @__PURE__ */ new Map();
      pluginInstances = /* @__PURE__ */ new Map();
      apiObjects = /* @__PURE__ */ new Map();
      pluginRepositories = createStorage2("plugins/repositories.json");
      pluginSettings = createStorage2("plugins/settings.json");
      _fetch = (repoUrl, path) => safeFetch(new URL(path, repoUrl), {
        cache: "no-store"
      });
      fetchJS = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.text());
      fetchJSON = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.json());
    }
  });

  // src/metro/common/stores.ts
  var UserStore;
  var init_stores = __esm({
    "src/metro/common/stores.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      UserStore = findByStoreNameLazy("UserStore");
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx
  function TitleComponent({ plugin }) {
    var users = FluxUtils.useStateFromStoresArray([
      UserStore
    ], () => {
      plugin.authors?.forEach((a) => a.id && maybeFetchUser(a.id));
      return plugin.authors?.map((a) => UserStore.getUser(a.id));
    });
    var { authors } = plugin;
    var authorTextNode = [];
    if (authors) {
      var _loop2 = function(author2) {
        authorTextNode.push(/* @__PURE__ */ jsx(Text, {
          onPress: () => showUserProfileActionSheet({
            userId: author2.id
          }),
          variant: "text-md/medium",
          children: author2.name
        }));
        authorTextNode.push(", ");
      };
      for (var author of authors)
        _loop2(author);
      authorTextNode.pop();
    }
    return /* @__PURE__ */ jsxs(import_react_native21.View, {
      style: {
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native21.View, {
          children: /* @__PURE__ */ jsx(Text, {
            variant: "heading-xl/semibold",
            children: plugin.name
          })
        }),
        /* @__PURE__ */ jsx(import_react_native21.View, {
          style: {
            flexDirection: "row",
            flexShrink: 1
          },
          children: authors?.length && /* @__PURE__ */ jsxs(import_react_native21.View, {
            style: {
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              backgroundColor: "#00000016",
              borderRadius: 32
            },
            children: [
              users.length && /* @__PURE__ */ jsx(AvatarPile, {
                size: "xxsmall",
                names: plugin.authors?.map((a) => a.name),
                totalCount: plugin.authors?.length,
                children: users.map((a) => /* @__PURE__ */ jsx(Avatar, {
                  size: "xxsmall",
                  user: a
                }))
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: authorTextNode
              })
            ]
          })
        })
      ]
    });
  }
  var import_react_native21, showUserProfileActionSheet, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_stores();
      import_react_native21 = __toESM(require_react_native());
      showUserProfileActionSheet = findByNameLazy("showUserProfileActionSheet");
      ({ getUser: maybeFetchUser } = lazyDestructure(() => findByProps("getUser", "fetchProfile")));
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx
  var PluginInfoActionSheet_exports = {};
  __export(PluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet
  });
  function PluginInfoIconButton(props) {
    var { onPress } = props;
    props.onPress &&= () => {
      hideSheet("PluginInfoActionSheet");
      onPress?.();
    };
    return /* @__PURE__ */ jsx(IconButton, {
      ...props
    });
  }
  function PluginInfoActionSheet({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native22.ScrollView, {
        contentContainerStyle: {
          gap: 12,
          marginBottom: 12
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native22.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 24,
              justifyContent: "space-between",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsx(TitleComponent, {
                plugin
              }),
              /* @__PURE__ */ jsx(ContextMenu, {
                items: [
                  {
                    label: "Details",
                    iconSource: findAssetId("CircleInformationIcon-primary"),
                    action: () => {
                    }
                  },
                  // {
                  //     label: true ? "Disable Updates" : "Enable Updates",
                  //     iconSource: true ? findAssetId("ClockXIcon") : findAssetId("ClockIcon"),
                  //     action: () => {
                  //     }
                  // },
                  {
                    label: "Clear Data",
                    iconSource: findAssetId("FileIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  },
                  {
                    label: "Uninstall",
                    iconSource: findAssetId("TrashIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  }
                ],
                children: (props) => /* @__PURE__ */ jsx(IconButton, {
                  ...props,
                  icon: findAssetId("MoreHorizontalIcon"),
                  variant: "secondary",
                  size: "sm"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native22.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center"
            },
            children: [
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Configure",
                variant: "secondary",
                disabled: !plugin.getPluginSettingsComponent(),
                icon: findAssetId("WrenchIcon"),
                onPress: () => {
                  navigation2.push("BLAZE_CUSTOM_PAGE", {
                    title: plugin.name,
                    render: plugin.getPluginSettingsComponent()
                  });
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Refetch",
                variant: "secondary",
                icon: findAssetId("RetryIcon"),
                onPress: () => {
                  startPlugin(plugin.id);
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Copy URL",
                variant: "secondary",
                icon: findAssetId("LinkIcon"),
                onPress: () => {
                  var pluginUrl = plugin.url ?? plugin.repoUrl ?? "No URL available";
                  Clipboard.setString(pluginUrl);
                  showToast("Copied URL to clipboard~");
                }
              })
            ]
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/semibold",
                color: "text-primary",
                style: {
                  marginBottom: 4
                },
                children: "Description"
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: plugin.description
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native22;
  var init_PluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_plugins4();
      init_assets();
      init_sheets();
      init_components();
      import_react_native22 = __toESM(require_react_native());
      init_TitleComponent();
    }
  });

  // src/core/ui/settings/pages/Plugins/models/blaze.ts
  function unifyBlazePlugin(manifest) {
    return {
      id: manifest.id,
      name: manifest.display.name,
      description: manifest.display.description,
      authors: manifest.display.authors,
      getBadges() {
        return [
          {
            source: {
              uri: blazecord_default
            }
          }
        ];
      },
      isEnabled: () => isPluginEnabled(manifest.id),
      isInstalled: () => manifest.id in pluginSettings,
      usePluginState() {
        useObservable([
          pluginSettings
        ]);
      },
      toggle(start) {
        try {
          start ? enablePlugin(manifest.id, true) : disablePlugin(manifest.id);
        } catch (e) {
          console.error(e);
        }
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_PluginInfoActionSheet(), PluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return getPluginSettingsComponent(manifest.id);
      }
    };
  }
  var init_blaze = __esm({
    "src/core/ui/settings/pages/Plugins/models/blaze.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings3();
      init_plugins4();
      init_storage2();
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/RePluginInfoActionSheet.tsx
  var RePluginInfoActionSheet_exports = {};
  __export(RePluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet2
  });
  function PluginInfoActionSheet2({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    var rePlugin = RePluginManager.plugins[plugin.id];
    var SettingsComponent = plugin.getPluginSettingsComponent();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native23.ScrollView, {
        children: [
          /* @__PURE__ */ jsxs(import_react_native23.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 24
            },
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "heading-xl/semibold",
                children: plugin.name
              }),
              /* @__PURE__ */ jsx(import_react_native23.View, {
                style: {
                  marginLeft: "auto"
                },
                children: SettingsComponent && /* @__PURE__ */ jsx(Button, {
                  size: "md",
                  text: "Configure",
                  variant: "secondary",
                  icon: findAssetId("WrenchIcon"),
                  onPress: () => {
                    hideSheet("PluginInfoActionSheet");
                    navigation2.push("BLAZE_CUSTOM_PAGE", {
                      title: plugin.name,
                      render: SettingsComponent
                    });
                  }
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(ActionSheetRow.Group, {
            children: [
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.REFETCH,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  if (rePlugin.enabled)
                    RePluginManager.stopPlugin(plugin.id, false);
                  try {
                    yield RePluginManager.fetchPlugin(plugin.id);
                    showToast2(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                  } catch (e) {
                    showToast2(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                  }
                  if (rePlugin.enabled)
                    yield RePluginManager.startPlugin(plugin.id);
                  hideSheet("PluginInfoActionSheet");
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.COPY_URL,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => {
                  clipboard.setString(plugin.id);
                  showToast2.showCopyToClipboard();
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: rePlugin.update ? Strings.DISABLE_UPDATES : Strings.ENABLE_UPDATES,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("DownloadIcon")
                }),
                onPress: () => {
                  rePlugin.update = !rePlugin.update;
                  showToast2(formatString("TOASTS_PLUGIN_UPDATE", {
                    update: rePlugin.update,
                    name: plugin.name
                  }), findAssetId("toast_image_saved"));
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.CLEAR_DATA,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("CopyIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_CLEAR_DATA", {
                    name: plugin.name
                  }),
                  confirmText: Strings.CLEAR,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: /* @__PURE__ */ _async_to_generator(function* () {
                    if (rePlugin.enabled)
                      RePluginManager.stopPlugin(plugin.id, false);
                    try {
                      yield RePluginManager.fetchPlugin(plugin.id);
                      showToast2(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                    } catch (e) {
                      showToast2(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                    }
                    var message;
                    try {
                      purgeStorage(plugin.id);
                      message = [
                        "CLEAR_DATA_SUCCESSFUL",
                        "trash"
                      ];
                    } catch (e) {
                      message = [
                        "CLEAR_DATA_FAILED",
                        "Small"
                      ];
                    }
                    showToast2(formatString(message[0], {
                      name: plugin.name
                    }), findAssetId(message[1]));
                    if (rePlugin.enabled)
                      yield RePluginManager.startPlugin(plugin.id);
                    hideSheet("PluginInfoActionSheet");
                  })
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.DELETE,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("TrashIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_DELETE_PLUGIN", {
                    name: plugin.name
                  }),
                  confirmText: Strings.DELETE,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: () => {
                    try {
                      RePluginManager.removePlugin(plugin.id);
                    } catch (e) {
                      showToast2(String(e), findAssetId("Small"));
                    }
                    hideSheet("PluginInfoActionSheet");
                  }
                })
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native23;
  var init_RePluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/RePluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_storage();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      init_toasts();
      import_react_native23 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Plugins/models/relapse.ts
  function unifyRePlugin(rePlugin) {
    return {
      id: rePlugin.id,
      name: rePlugin.manifest.name,
      description: rePlugin.manifest.description,
      authors: rePlugin.manifest.authors,
      icon: rePlugin.manifest.relapse?.icon,
      getBadges() {
        return [];
      },
      isEnabled: () => rePlugin.enabled,
      isInstalled: () => Boolean(rePlugin && RePluginManager.plugins[rePlugin.id]),
      usePluginState() {
        useProxy(RePluginManager.plugins[rePlugin.id]);
      },
      toggle(start) {
        start ? RePluginManager.startPlugin(rePlugin.id) : RePluginManager.stopPlugin(rePlugin.id);
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_RePluginInfoActionSheet(), RePluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return RePluginManager.getSettings(rePlugin.id);
      }
    };
  }
  var init_relapse = __esm({
    "src/core/ui/settings/pages/Plugins/models/relapse.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins();
      init_storage();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/subscribable.js
  var Subscribable;
  var init_subscribable = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/subscribable.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_create_class();
      Subscribable = /* @__PURE__ */ function() {
        "use strict";
        function Subscribable2() {
          _class_call_check(this, Subscribable2);
          this.listeners = /* @__PURE__ */ new Set();
          this.subscribe = this.subscribe.bind(this);
        }
        _create_class(Subscribable2, [
          {
            key: "subscribe",
            value: function subscribe(listener) {
              this.listeners.add(listener);
              this.onSubscribe();
              return () => {
                this.listeners.delete(listener);
                this.onUnsubscribe();
              };
            }
          },
          {
            key: "hasListeners",
            value: function hasListeners() {
              return this.listeners.size > 0;
            }
          },
          {
            key: "onSubscribe",
            value: function onSubscribe() {
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
            }
          }
        ]);
        return Subscribable2;
      }();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/utils.js
  function noop() {
    return void 0;
  }
  function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
  }
  function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
  }
  function matchQuery(filters, query) {
    var { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
      if (exact) {
        if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
          return false;
        }
      } else if (!partialMatchKey(query.queryKey, queryKey)) {
        return false;
      }
    }
    if (type !== "all") {
      var isActive = query.isActive();
      if (type === "active" && !isActive) {
        return false;
      }
      if (type === "inactive" && isActive) {
        return false;
      }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
      return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
      return false;
    }
    if (predicate && !predicate(query)) {
      return false;
    }
    return true;
  }
  function matchMutation(filters, mutation) {
    var { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
      if (!mutation.options.mutationKey) {
        return false;
      }
      if (exact) {
        if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
          return false;
        }
      } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
        return false;
      }
    }
    if (status && mutation.state.status !== status) {
      return false;
    }
    if (predicate && !predicate(mutation)) {
      return false;
    }
    return true;
  }
  function hashQueryKeyByOptions(queryKey, options) {
    var hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
  }
  function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_2, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val);
  }
  function partialMatchKey(a, b3) {
    if (a === b3) {
      return true;
    }
    if (typeof a !== typeof b3) {
      return false;
    }
    if (a && b3 && typeof a === "object" && typeof b3 === "object") {
      return !Object.keys(b3).some((key) => !partialMatchKey(a[key], b3[key]));
    }
    return false;
  }
  function replaceEqualDeep(a, b3) {
    if (a === b3) {
      return a;
    }
    var array = isPlainArray(a) && isPlainArray(b3);
    if (array || isPlainObject(a) && isPlainObject(b3)) {
      var aItems = array ? a : Object.keys(a);
      var aSize = aItems.length;
      var bItems = array ? b3 : Object.keys(b3);
      var bSize = bItems.length;
      var copy = array ? [] : {};
      var equalItems = 0;
      for (var i = 0; i < bSize; i++) {
        var key = array ? i : bItems[i];
        if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b3[key] === void 0) {
          copy[key] = void 0;
          equalItems++;
        } else {
          copy[key] = replaceEqualDeep(a[key], b3[key]);
          if (copy[key] === a[key] && a[key] !== void 0) {
            equalItems++;
          }
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b3;
  }
  function shallowEqualObjects(a, b3) {
    if (!b3 || Object.keys(a).length !== Object.keys(b3).length) {
      return false;
    }
    for (var key in a) {
      if (a[key] !== b3[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
  }
  function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    }
    var ctor = o.constructor;
    if (ctor === void 0) {
      return true;
    }
    var prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
      return false;
    }
    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  function sleep(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
      return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
      if (true) {
        try {
          return replaceEqualDeep(prevData, data);
        } catch (error) {
          console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
        }
      }
      return replaceEqualDeep(prevData, data);
    }
    return data;
  }
  function addToEnd(items, item, max = 0) {
    var newItems = [
      ...items,
      item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
  }
  function addToStart(items, item, max = 0) {
    var newItems = [
      item,
      ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
  }
  function ensureQueryFn(options, fetchOptions) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
      }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
      return () => fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
      return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
  }
  var isServer, skipToken;
  var init_utils2 = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/utils.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      isServer = typeof window === "undefined" || "Deno" in globalThis;
      skipToken = Symbol();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/focusManager.js
  var _focused, _cleanup, _setup, FocusManager, focusManager;
  var init_focusManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/focusManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_subscribable();
      init_utils2();
      FocusManager = (_focused = /* @__PURE__ */ new WeakMap(), _cleanup = /* @__PURE__ */ new WeakMap(), _setup = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5() {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _focused, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _cleanup, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _setup, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _setup, (onFocus) => {
            if (!isServer && window.addEventListener) {
              var listener = () => onFocus();
              window.addEventListener("visibilitychange", listener, false);
              return () => {
                window.removeEventListener("visibilitychange", listener);
              };
            }
            return;
          });
          return _this;
        }
        _create_class(_class5, [
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (!_class_private_field_get(this, _cleanup)) {
                this.setEventListener(_class_private_field_get(this, _setup));
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              var _this, _this1, _ref;
              if (!this.hasListeners()) {
                (_this = _class_private_field_get(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                _class_private_field_set(this, _cleanup, void 0);
              }
            }
          },
          {
            key: "setEventListener",
            value: function setEventListener(setup) {
              var _this, _this1, _ref;
              _class_private_field_set(this, _setup, setup);
              (_this = _class_private_field_get(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _cleanup, setup((focused) => {
                if (typeof focused === "boolean") {
                  this.setFocused(focused);
                } else {
                  this.onFocus();
                }
              }));
            }
          },
          {
            key: "setFocused",
            value: function setFocused(focused) {
              var changed = _class_private_field_get(this, _focused) !== focused;
              if (changed) {
                _class_private_field_set(this, _focused, focused);
                this.onFocus();
              }
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              var isFocused = this.isFocused();
              this.listeners.forEach((listener) => {
                listener(isFocused);
              });
            }
          },
          {
            key: "isFocused",
            value: function isFocused() {
              if (typeof _class_private_field_get(this, _focused) === "boolean") {
                return _class_private_field_get(this, _focused);
              }
              return globalThis.document?.visibilityState !== "hidden";
            }
          }
        ]);
        return _class5;
      }(Subscribable));
      focusManager = new FocusManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js
  var _online, _cleanup2, _setup2, OnlineManager, onlineManager;
  var init_onlineManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_subscribable();
      init_utils2();
      OnlineManager = (_online = /* @__PURE__ */ new WeakMap(), _cleanup2 = /* @__PURE__ */ new WeakMap(), _setup2 = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5() {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _online, {
            writable: true,
            value: true
          }), _class_private_field_init(_this, _cleanup2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _setup2, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _setup2, (onOnline) => {
            if (!isServer && window.addEventListener) {
              var onlineListener = () => onOnline(true);
              var offlineListener = () => onOnline(false);
              window.addEventListener("online", onlineListener, false);
              window.addEventListener("offline", offlineListener, false);
              return () => {
                window.removeEventListener("online", onlineListener);
                window.removeEventListener("offline", offlineListener);
              };
            }
            return;
          });
          return _this;
        }
        _create_class(_class5, [
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (!_class_private_field_get(this, _cleanup2)) {
                this.setEventListener(_class_private_field_get(this, _setup2));
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              var _this, _this1, _ref;
              if (!this.hasListeners()) {
                (_this = _class_private_field_get(_ref = _this1 = this, _cleanup2)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                _class_private_field_set(this, _cleanup2, void 0);
              }
            }
          },
          {
            key: "setEventListener",
            value: function setEventListener(setup) {
              var _this, _this1, _ref;
              _class_private_field_set(this, _setup2, setup);
              (_this = _class_private_field_get(_ref = _this1 = this, _cleanup2)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _cleanup2, setup(this.setOnline.bind(this)));
            }
          },
          {
            key: "setOnline",
            value: function setOnline(online) {
              var changed = _class_private_field_get(this, _online) !== online;
              if (changed) {
                _class_private_field_set(this, _online, online);
                this.listeners.forEach((listener) => {
                  listener(online);
                });
              }
            }
          },
          {
            key: "isOnline",
            value: function isOnline() {
              return _class_private_field_get(this, _online);
            }
          }
        ]);
        return _class5;
      }(Subscribable));
      onlineManager = new OnlineManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/retryer.js
  function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
  }
  function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
  }
  function isCancelledError(value) {
    return value instanceof CancelledError;
  }
  function createRetryer(config) {
    var isRetryCancelled = false;
    var failureCount = 0;
    var isResolved = false;
    var continueFn;
    var promiseResolve;
    var promiseReject;
    var promise = new Promise((outerResolve, outerReject) => {
      promiseResolve = outerResolve;
      promiseReject = outerReject;
    });
    var cancel = (cancelOptions) => {
      if (!isResolved) {
        reject(new CancelledError(cancelOptions));
        config.abort?.();
      }
    };
    var cancelRetry = () => {
      isRetryCancelled = true;
    };
    var continueRetry = () => {
      isRetryCancelled = false;
    };
    var canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
    var canStart = () => canFetch(config.networkMode) && config.canRun();
    var resolve = (value) => {
      if (!isResolved) {
        isResolved = true;
        config.onSuccess?.(value);
        continueFn?.();
        promiseResolve(value);
      }
    };
    var reject = (value) => {
      if (!isResolved) {
        isResolved = true;
        config.onError?.(value);
        continueFn?.();
        promiseReject(value);
      }
    };
    var pause = () => {
      return new Promise((continueResolve) => {
        continueFn = (value) => {
          if (isResolved || canContinue()) {
            continueResolve(value);
          }
        };
        config.onPause?.();
      }).then(() => {
        continueFn = void 0;
        if (!isResolved) {
          config.onContinue?.();
        }
      });
    };
    var run = () => {
      if (isResolved) {
        return;
      }
      var promiseOrValue;
      var initialPromise = failureCount === 0 ? config.initialPromise : void 0;
      try {
        promiseOrValue = initialPromise ?? config.fn();
      } catch (error) {
        promiseOrValue = Promise.reject(error);
      }
      Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
        if (isResolved) {
          return;
        }
        var retry = config.retry ?? (isServer ? 0 : 3);
        var retryDelay = config.retryDelay ?? defaultRetryDelay;
        var delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
        var shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
        if (isRetryCancelled || !shouldRetry) {
          reject(error);
          return;
        }
        failureCount++;
        config.onFail?.(failureCount, error);
        sleep(delay).then(() => {
          return canContinue() ? void 0 : pause();
        }).then(() => {
          if (isRetryCancelled) {
            reject(error);
          } else {
            run();
          }
        });
      });
    };
    return {
      promise,
      cancel,
      continue: () => {
        continueFn?.();
        return promise;
      },
      cancelRetry,
      continueRetry,
      canStart,
      start: () => {
        if (canStart()) {
          run();
        } else {
          pause().then(run);
        }
        return promise;
      }
    };
  }
  var CancelledError;
  var init_retryer = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/retryer.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_inherits();
      init_wrap_native_super();
      init_focusManager();
      init_onlineManager();
      init_utils2();
      CancelledError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(CancelledError2, Error1);
        function CancelledError2(options) {
          _class_call_check(this, CancelledError2);
          var _this;
          _this = _call_super(this, CancelledError2, [
            "CancelledError"
          ]);
          _this.revert = options?.revert;
          _this.silent = options?.silent;
          return _this;
        }
        return CancelledError2;
      }(_wrap_native_super(Error));
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_get.js
  function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver))
      throw new TypeError("attempted to get private field on non-instance");
    return fn;
  }
  var init_class_private_method_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_init.js
  function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  var init_class_private_method_init = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_method_init.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_check_private_redeclaration();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_super_prop_base.js
  function _super_prop_base(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _get_prototype_of(object);
      if (object === null)
        break;
    }
    return object;
  }
  var init_super_prop_base = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_super_prop_base.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_get_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get.js
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get)
      _get = Reflect.get;
    else {
      _get = function get(target2, property2, receiver2) {
        var base = _super_prop_base(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get)
          return desc.get.call(receiver2 || target2);
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  var init_get = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_super_prop_base();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js
  function createNotifyManager() {
    var queue = [];
    var transactions = 0;
    var notifyFn = (callback) => {
      callback();
    };
    var batchNotifyFn = (callback) => {
      callback();
    };
    var scheduleFn = (cb) => setTimeout(cb, 0);
    var schedule = (callback) => {
      if (transactions) {
        queue.push(callback);
      } else {
        scheduleFn(() => {
          notifyFn(callback);
        });
      }
    };
    var flush = () => {
      var originalQueue = queue;
      queue = [];
      if (originalQueue.length) {
        scheduleFn(() => {
          batchNotifyFn(() => {
            originalQueue.forEach((callback) => {
              notifyFn(callback);
            });
          });
        });
      }
    };
    return {
      batch: (callback) => {
        var result;
        transactions++;
        try {
          result = callback();
        } finally {
          transactions--;
          if (!transactions) {
            flush();
          }
        }
        return result;
      },
      /**
      * All calls to the wrapped function will be batched.
      */
      batchCalls: (callback) => {
        return (...args) => {
          schedule(() => {
            callback(...args);
          });
        };
      },
      schedule,
      /**
      * Use this method to set a custom notify function.
      * This can be used to for example wrap notifications with `React.act` while running tests.
      */
      setNotifyFunction: (fn) => {
        notifyFn = fn;
      },
      /**
      * Use this method to set a custom function to batch notifications together into a single tick.
      * By default React Query will use the batch function provided by ReactDOM or React Native.
      */
      setBatchNotifyFunction: (fn) => {
        batchNotifyFn = fn;
      },
      setScheduler: (fn) => {
        scheduleFn = fn;
      }
    };
  }
  var notifyManager;
  var init_notifyManager = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      notifyManager = createNotifyManager();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/removable.js
  var _gcTimeout, Removable;
  var init_removable = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/removable.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_utils2();
      Removable = (_gcTimeout = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function() {
        "use strict";
        function _class5() {
          _class_call_check(this, _class5);
          _class_private_field_init(this, _gcTimeout, {
            writable: true,
            value: void 0
          });
        }
        _create_class(_class5, [
          {
            key: "destroy",
            value: function destroy() {
              this.clearGcTimeout();
            }
          },
          {
            key: "scheduleGc",
            value: function scheduleGc() {
              this.clearGcTimeout();
              if (isValidTimeout(this.gcTime)) {
                _class_private_field_set(this, _gcTimeout, setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
              }
            }
          },
          {
            key: "updateGcTime",
            value: function updateGcTime(newGcTime) {
              this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3));
            }
          },
          {
            key: "clearGcTimeout",
            value: function clearGcTimeout() {
              if (_class_private_field_get(this, _gcTimeout)) {
                clearTimeout(_class_private_field_get(this, _gcTimeout));
                _class_private_field_set(this, _gcTimeout, void 0);
              }
            }
          }
        ]);
        return _class5;
      }());
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/query.js
  function fetchState(data, options) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
      ...data === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function getDefaultState(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasData = data !== void 0;
    var initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: hasData ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  function dispatch(action) {
    var reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          var error = action.error;
          if (isCancelledError(error) && error.revert && _class_private_field_get(this, _revertState)) {
            return {
              ..._class_private_field_get(this, _revertState),
              fetchStatus: "idle"
            };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      _class_private_field_get(this, _cache).notify({
        query: this,
        type: "updated",
        action
      });
    });
  }
  var _initialState, _revertState, _cache, _retryer, _defaultOptions, _abortSignalConsumed, _dispatch, _class, Query;
  var init_query = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/query.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_get();
      init_get_prototype_of();
      init_inherits();
      init_utils2();
      init_notifyManager();
      init_retryer();
      init_removable();
      Query = (_initialState = /* @__PURE__ */ new WeakMap(), _revertState = /* @__PURE__ */ new WeakMap(), _cache = /* @__PURE__ */ new WeakMap(), _retryer = /* @__PURE__ */ new WeakMap(), _defaultOptions = /* @__PURE__ */ new WeakMap(), _abortSignalConsumed = /* @__PURE__ */ new WeakMap(), _dispatch = /* @__PURE__ */ new WeakSet(), _class = /* @__PURE__ */ function(Removable2) {
        "use strict";
        _inherits(_class5, Removable2);
        function _class5(config) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _dispatch), _class_private_field_init(_this, _initialState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _revertState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _cache, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _retryer, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _defaultOptions, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _abortSignalConsumed, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _abortSignalConsumed, false);
          _class_private_field_set(_this, _defaultOptions, config.defaultOptions);
          _this.setOptions(config.options);
          _this.observers = [];
          _class_private_field_set(_this, _cache, config.cache);
          _this.queryKey = config.queryKey;
          _this.queryHash = config.queryHash;
          _class_private_field_set(_this, _initialState, getDefaultState(_this.options));
          _this.state = config.state ?? _class_private_field_get(_this, _initialState);
          _this.scheduleGc();
          return _this;
        }
        _create_class(_class5, [
          {
            key: "meta",
            get: function get() {
              return this.options.meta;
            }
          },
          {
            key: "promise",
            get: function get() {
              return _class_private_field_get(this, _retryer)?.promise;
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options) {
              this.options = {
                ..._class_private_field_get(this, _defaultOptions),
                ...options
              };
              this.updateGcTime(this.options.gcTime);
            }
          },
          {
            key: "optionalRemove",
            value: function optionalRemove() {
              if (!this.observers.length && this.state.fetchStatus === "idle") {
                _class_private_field_get(this, _cache).remove(this);
              }
            }
          },
          {
            key: "setData",
            value: function setData(newData, options) {
              var data = replaceData(this.state.data, newData, this.options);
              _class_private_method_get(this, _dispatch, dispatch).call(this, {
                data,
                type: "success",
                dataUpdatedAt: options?.updatedAt,
                manual: options?.manual
              });
              return data;
            }
          },
          {
            key: "setState",
            value: function setState(state, setStateOptions) {
              _class_private_method_get(this, _dispatch, dispatch).call(this, {
                type: "setState",
                state,
                setStateOptions
              });
            }
          },
          {
            key: "cancel",
            value: function cancel(options) {
              var promise = _class_private_field_get(this, _retryer)?.promise;
              _class_private_field_get(this, _retryer)?.cancel(options);
              return promise ? promise.then(noop).catch(noop) : Promise.resolve();
            }
          },
          {
            key: "destroy",
            value: function destroy() {
              _get(_get_prototype_of(_class5.prototype), "destroy", this).call(this);
              this.cancel({
                silent: true
              });
            }
          },
          {
            key: "reset",
            value: function reset() {
              this.destroy();
              this.setState(_class_private_field_get(this, _initialState));
            }
          },
          {
            key: "isActive",
            value: function isActive() {
              return this.observers.some((observer) => resolveEnabled(observer.options.enabled, this) !== false);
            }
          },
          {
            key: "isDisabled",
            value: function isDisabled() {
              return this.getObserversCount() > 0 && !this.isActive();
            }
          },
          {
            key: "isStale",
            value: function isStale2() {
              if (this.state.isInvalidated) {
                return true;
              }
              if (this.getObserversCount() > 0) {
                return this.observers.some((observer) => observer.getCurrentResult().isStale);
              }
              return this.state.data === void 0;
            }
          },
          {
            key: "isStaleByTime",
            value: function isStaleByTime(staleTime = 0) {
              return this.state.isInvalidated || this.state.data === void 0 || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              var observer = this.observers.find((x2) => x2.shouldFetchOnWindowFocus());
              observer?.refetch({
                cancelRefetch: false
              });
              _class_private_field_get(this, _retryer)?.continue();
            }
          },
          {
            key: "onOnline",
            value: function onOnline() {
              var observer = this.observers.find((x2) => x2.shouldFetchOnReconnect());
              observer?.refetch({
                cancelRefetch: false
              });
              _class_private_field_get(this, _retryer)?.continue();
            }
          },
          {
            key: "addObserver",
            value: function addObserver(observer) {
              if (!this.observers.includes(observer)) {
                this.observers.push(observer);
                this.clearGcTimeout();
                _class_private_field_get(this, _cache).notify({
                  type: "observerAdded",
                  query: this,
                  observer
                });
              }
            }
          },
          {
            key: "removeObserver",
            value: function removeObserver(observer) {
              if (this.observers.includes(observer)) {
                this.observers = this.observers.filter((x2) => x2 !== observer);
                if (!this.observers.length) {
                  if (_class_private_field_get(this, _retryer)) {
                    if (_class_private_field_get(this, _abortSignalConsumed)) {
                      _class_private_field_get(this, _retryer).cancel({
                        revert: true
                      });
                    } else {
                      _class_private_field_get(this, _retryer).cancelRetry();
                    }
                  }
                  this.scheduleGc();
                }
                _class_private_field_get(this, _cache).notify({
                  type: "observerRemoved",
                  query: this,
                  observer
                });
              }
            }
          },
          {
            key: "getObserversCount",
            value: function getObserversCount() {
              return this.observers.length;
            }
          },
          {
            key: "invalidate",
            value: function invalidate() {
              if (!this.state.isInvalidated) {
                _class_private_method_get(this, _dispatch, dispatch).call(this, {
                  type: "invalidate"
                });
              }
            }
          },
          {
            key: "fetch",
            value: function fetch2(options, fetchOptions) {
              if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                  this.cancel({
                    silent: true
                  });
                } else if (_class_private_field_get(this, _retryer)) {
                  _class_private_field_get(this, _retryer).continueRetry();
                  return _class_private_field_get(this, _retryer).promise;
                }
              }
              if (options) {
                this.setOptions(options);
              }
              if (!this.options.queryFn) {
                var observer = this.observers.find((x2) => x2.options.queryFn);
                if (observer) {
                  this.setOptions(observer.options);
                }
              }
              if (true) {
                if (!Array.isArray(this.options.queryKey)) {
                  console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
                }
              }
              var abortController = new AbortController();
              var addSignalProperty = (object) => {
                Object.defineProperty(object, "signal", {
                  enumerable: true,
                  get: () => {
                    _class_private_field_set(this, _abortSignalConsumed, true);
                    return abortController.signal;
                  }
                });
              };
              var fetchFn = () => {
                var queryFn = ensureQueryFn(this.options, fetchOptions);
                var queryFnContext = {
                  queryKey: this.queryKey,
                  meta: this.meta
                };
                addSignalProperty(queryFnContext);
                _class_private_field_set(this, _abortSignalConsumed, false);
                if (this.options.persister) {
                  return this.options.persister(queryFn, queryFnContext, this);
                }
                return queryFn(queryFnContext);
              };
              var context = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn
              };
              addSignalProperty(context);
              this.options.behavior?.onFetch(context, this);
              _class_private_field_set(this, _revertState, this.state);
              if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
                _class_private_method_get(this, _dispatch, dispatch).call(this, {
                  type: "fetch",
                  meta: context.fetchOptions?.meta
                });
              }
              var onError = (error) => {
                if (!(isCancelledError(error) && error.silent)) {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "error",
                    error
                  });
                }
                if (!isCancelledError(error)) {
                  _class_private_field_get(this, _cache).config.onError?.(error, this);
                  _class_private_field_get(this, _cache).config.onSettled?.(this.state.data, error, this);
                }
                if (!this.isFetchingOptimistic) {
                  this.scheduleGc();
                }
                this.isFetchingOptimistic = false;
              };
              _class_private_field_set(this, _retryer, createRetryer({
                initialPromise: fetchOptions?.initialPromise,
                fn: context.fetchFn,
                abort: abortController.abort.bind(abortController),
                onSuccess: (data) => {
                  if (data === void 0) {
                    if (true) {
                      console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                    }
                    onError(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(data);
                  } catch (error) {
                    onError(error);
                    return;
                  }
                  _class_private_field_get(this, _cache).config.onSuccess?.(data, this);
                  _class_private_field_get(this, _cache).config.onSettled?.(data, this.state.error, this);
                  if (!this.isFetchingOptimistic) {
                    this.scheduleGc();
                  }
                  this.isFetchingOptimistic = false;
                },
                onError,
                onFail: (failureCount, error) => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                  });
                },
                onPause: () => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                  });
                },
                onContinue: () => {
                  _class_private_method_get(this, _dispatch, dispatch).call(this, {
                    type: "continue"
                  });
                },
                retry: context.options.retry,
                retryDelay: context.options.retryDelay,
                networkMode: context.options.networkMode,
                canRun: () => true
              }));
              return _class_private_field_get(this, _retryer).start();
            }
          }
        ]);
        return _class5;
      }(Removable), _class);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryCache.js
  var _queries, QueryCache;
  var init_queryCache = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryCache.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_create_class();
      init_inherits();
      init_utils2();
      init_query();
      init_notifyManager();
      init_subscribable();
      QueryCache = (_queries = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _queries, {
            writable: true,
            value: void 0
          });
          _this.config = config;
          _class_private_field_set(_this, _queries, /* @__PURE__ */ new Map());
          return _this;
        }
        _create_class(_class5, [
          {
            key: "build",
            value: function build(client, options, state) {
              var queryKey = options.queryKey;
              var queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
              var query = this.get(queryHash);
              if (!query) {
                query = new Query({
                  cache: this,
                  queryKey,
                  queryHash,
                  options: client.defaultQueryOptions(options),
                  state,
                  defaultOptions: client.getQueryDefaults(queryKey)
                });
                this.add(query);
              }
              return query;
            }
          },
          {
            key: "add",
            value: function add(query) {
              if (!_class_private_field_get(this, _queries).has(query.queryHash)) {
                _class_private_field_get(this, _queries).set(query.queryHash, query);
                this.notify({
                  type: "added",
                  query
                });
              }
            }
          },
          {
            key: "remove",
            value: function remove(query) {
              var queryInMap = _class_private_field_get(this, _queries).get(query.queryHash);
              if (queryInMap) {
                query.destroy();
                if (queryInMap === query) {
                  _class_private_field_get(this, _queries).delete(query.queryHash);
                }
                this.notify({
                  type: "removed",
                  query
                });
              }
            }
          },
          {
            key: "clear",
            value: function clear() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  this.remove(query);
                });
              });
            }
          },
          {
            key: "get",
            value: function get(queryHash) {
              return _class_private_field_get(this, _queries).get(queryHash);
            }
          },
          {
            key: "getAll",
            value: function getAll() {
              return [
                ..._class_private_field_get(this, _queries).values()
              ];
            }
          },
          {
            key: "find",
            value: function find(filters) {
              var defaultedFilters = {
                exact: true,
                ...filters
              };
              return this.getAll().find((query) => matchQuery(defaultedFilters, query));
            }
          },
          {
            key: "findAll",
            value: function findAll(filters = {}) {
              var queries = this.getAll();
              return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
            }
          },
          {
            key: "notify",
            value: function notify3(event) {
              notifyManager.batch(() => {
                this.listeners.forEach((listener) => {
                  listener(event);
                });
              });
            }
          },
          {
            key: "onFocus",
            value: function onFocus() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  query.onFocus();
                });
              });
            }
          },
          {
            key: "onOnline",
            value: function onOnline() {
              notifyManager.batch(() => {
                this.getAll().forEach((query) => {
                  query.onOnline();
                });
              });
            }
          }
        ]);
        return _class5;
      }(Subscribable));
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js
  function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
      if (!descriptor.get)
        throw new TypeError("attempted to read set only private field");
      if (!("__destrWrapper" in descriptor)) {
        descriptor.__destrWrapper = {
          set value(v2) {
            descriptor.set.call(receiver, v2);
          },
          get value() {
            return descriptor.get.call(receiver);
          }
        };
      }
      return descriptor.__destrWrapper;
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      return descriptor;
    }
  }
  var init_class_apply_descriptor_update = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_update.js
  function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
  }
  var init_class_private_field_update = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_private_field_update.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_apply_descriptor_update();
      init_class_extract_field_descriptor();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutation.js
  function getDefaultState2() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }
  function dispatch2(action) {
    var reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      _class_private_field_get(this, _observers).forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      _class_private_field_get(this, _mutationCache).notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
  var _observers, _mutationCache, _retryer2, _dispatch2, _class2, Mutation;
  var init_mutation = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutation.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_notifyManager();
      init_removable();
      init_retryer();
      Mutation = (_observers = /* @__PURE__ */ new WeakMap(), _mutationCache = /* @__PURE__ */ new WeakMap(), _retryer2 = /* @__PURE__ */ new WeakMap(), _dispatch2 = /* @__PURE__ */ new WeakSet(), _class2 = /* @__PURE__ */ function(Removable2) {
        "use strict";
        _inherits(_class5, Removable2);
        function _class5(config) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _dispatch2), _class_private_field_init(_this, _observers, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutationCache, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _retryer2, {
            writable: true,
            value: void 0
          });
          _this.mutationId = config.mutationId;
          _class_private_field_set(_this, _mutationCache, config.mutationCache);
          _class_private_field_set(_this, _observers, []);
          _this.state = config.state || getDefaultState2();
          _this.setOptions(config.options);
          _this.scheduleGc();
          return _this;
        }
        _create_class(_class5, [
          {
            key: "setOptions",
            value: function setOptions(options) {
              this.options = options;
              this.updateGcTime(this.options.gcTime);
            }
          },
          {
            key: "meta",
            get: function get() {
              return this.options.meta;
            }
          },
          {
            key: "addObserver",
            value: function addObserver(observer) {
              if (!_class_private_field_get(this, _observers).includes(observer)) {
                _class_private_field_get(this, _observers).push(observer);
                this.clearGcTimeout();
                _class_private_field_get(this, _mutationCache).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer
                });
              }
            }
          },
          {
            key: "removeObserver",
            value: function removeObserver(observer) {
              _class_private_field_set(this, _observers, _class_private_field_get(this, _observers).filter((x2) => x2 !== observer));
              this.scheduleGc();
              _class_private_field_get(this, _mutationCache).notify({
                type: "observerRemoved",
                mutation: this,
                observer
              });
            }
          },
          {
            key: "optionalRemove",
            value: function optionalRemove() {
              if (!_class_private_field_get(this, _observers).length) {
                if (this.state.status === "pending") {
                  this.scheduleGc();
                } else {
                  _class_private_field_get(this, _mutationCache).remove(this);
                }
              }
            }
          },
          {
            key: "continue",
            value: function _continue() {
              return _class_private_field_get(this, _retryer2)?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
              this.execute(this.state.variables);
            }
          },
          {
            key: "execute",
            value: function execute(variables) {
              var _this = this;
              return _async_to_generator(function* () {
                _class_private_field_set(_this, _retryer2, createRetryer({
                  fn: () => {
                    if (!_this.options.mutationFn) {
                      return Promise.reject(new Error("No mutationFn found"));
                    }
                    return _this.options.mutationFn(variables);
                  },
                  onFail: (failureCount, error) => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "failed",
                      failureCount,
                      error
                    });
                  },
                  onPause: () => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "pause"
                    });
                  },
                  onContinue: () => {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "continue"
                    });
                  },
                  retry: _this.options.retry ?? 0,
                  retryDelay: _this.options.retryDelay,
                  networkMode: _this.options.networkMode,
                  canRun: () => _class_private_field_get(_this, _mutationCache).canRun(_this)
                }));
                var restored = _this.state.status === "pending";
                var isPaused = !_class_private_field_get(_this, _retryer2).canStart();
                try {
                  if (!restored) {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "pending",
                      variables,
                      isPaused
                    });
                    yield _class_private_field_get(_this, _mutationCache).config.onMutate?.(variables, _this);
                    var context = yield _this.options.onMutate?.(variables);
                    if (context !== _this.state.context) {
                      _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                        type: "pending",
                        context,
                        variables,
                        isPaused
                      });
                    }
                  }
                  var data = yield _class_private_field_get(_this, _retryer2).start();
                  yield _class_private_field_get(_this, _mutationCache).config.onSuccess?.(data, variables, _this.state.context, _this);
                  yield _this.options.onSuccess?.(data, variables, _this.state.context);
                  yield _class_private_field_get(_this, _mutationCache).config.onSettled?.(data, null, _this.state.variables, _this.state.context, _this);
                  yield _this.options.onSettled?.(data, null, variables, _this.state.context);
                  _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                    type: "success",
                    data
                  });
                  return data;
                } catch (error) {
                  try {
                    yield _class_private_field_get(_this, _mutationCache).config.onError?.(error, variables, _this.state.context, _this);
                    yield _this.options.onError?.(error, variables, _this.state.context);
                    yield _class_private_field_get(_this, _mutationCache).config.onSettled?.(void 0, error, _this.state.variables, _this.state.context, _this);
                    yield _this.options.onSettled?.(void 0, error, variables, _this.state.context);
                    throw error;
                  } finally {
                    _class_private_method_get(_this, _dispatch2, dispatch2).call(_this, {
                      type: "error",
                      error
                    });
                  }
                } finally {
                  _class_private_field_get(_this, _mutationCache).runNext(_this);
                }
              })();
            }
          }
        ]);
        return _class5;
      }(Removable), _class2);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationCache.js
  function scopeFor(mutation) {
    return mutation.options.scope?.id ?? String(mutation.mutationId);
  }
  var _mutations, _mutationId, MutationCache;
  var init_mutationCache = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationCache.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_field_update();
      init_create_class();
      init_inherits();
      init_notifyManager();
      init_mutation();
      init_utils2();
      init_subscribable();
      MutationCache = (_mutations = /* @__PURE__ */ new WeakMap(), _mutationId = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_field_init(_this, _mutations, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutationId, {
            writable: true,
            value: void 0
          });
          _this.config = config;
          _class_private_field_set(_this, _mutations, /* @__PURE__ */ new Map());
          _class_private_field_set(_this, _mutationId, Date.now());
          return _this;
        }
        _create_class(_class5, [
          {
            key: "build",
            value: function build(client, options, state) {
              var mutation = new Mutation({
                mutationCache: this,
                mutationId: ++_class_private_field_update(this, _mutationId).value,
                options: client.defaultMutationOptions(options),
                state
              });
              this.add(mutation);
              return mutation;
            }
          },
          {
            key: "add",
            value: function add(mutation) {
              var scope = scopeFor(mutation);
              var mutations = _class_private_field_get(this, _mutations).get(scope) ?? [];
              mutations.push(mutation);
              _class_private_field_get(this, _mutations).set(scope, mutations);
              this.notify({
                type: "added",
                mutation
              });
            }
          },
          {
            key: "remove",
            value: function remove(mutation) {
              var scope = scopeFor(mutation);
              if (_class_private_field_get(this, _mutations).has(scope)) {
                var mutations = _class_private_field_get(this, _mutations).get(scope)?.filter((x2) => x2 !== mutation);
                if (mutations) {
                  if (mutations.length === 0) {
                    _class_private_field_get(this, _mutations).delete(scope);
                  } else {
                    _class_private_field_get(this, _mutations).set(scope, mutations);
                  }
                }
              }
              this.notify({
                type: "removed",
                mutation
              });
            }
          },
          {
            key: "canRun",
            value: function canRun(mutation) {
              var firstPendingMutation = _class_private_field_get(this, _mutations).get(scopeFor(mutation))?.find((m2) => m2.state.status === "pending");
              return !firstPendingMutation || firstPendingMutation === mutation;
            }
          },
          {
            key: "runNext",
            value: function runNext(mutation) {
              var foundMutation = _class_private_field_get(this, _mutations).get(scopeFor(mutation))?.find((m2) => m2 !== mutation && m2.state.isPaused);
              return foundMutation?.continue() ?? Promise.resolve();
            }
          },
          {
            key: "clear",
            value: function clear() {
              notifyManager.batch(() => {
                this.getAll().forEach((mutation) => {
                  this.remove(mutation);
                });
              });
            }
          },
          {
            key: "getAll",
            value: function getAll() {
              return [
                ..._class_private_field_get(this, _mutations).values()
              ].flat();
            }
          },
          {
            key: "find",
            value: function find(filters) {
              var defaultedFilters = {
                exact: true,
                ...filters
              };
              return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
            }
          },
          {
            key: "findAll",
            value: function findAll(filters = {}) {
              return this.getAll().filter((mutation) => matchMutation(filters, mutation));
            }
          },
          {
            key: "notify",
            value: function notify3(event) {
              notifyManager.batch(() => {
                this.listeners.forEach((listener) => {
                  listener(event);
                });
              });
            }
          },
          {
            key: "resumePausedMutations",
            value: function resumePausedMutations() {
              var pausedMutations = this.getAll().filter((x2) => x2.state.isPaused);
              return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
            }
          }
        ]);
        return _class5;
      }(Subscribable));
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
  function infiniteQueryBehavior(pages) {
    return {
      onFetch: (context, query) => {
        var options = context.options;
        var direction = context.fetchOptions?.meta?.fetchMore?.direction;
        var oldPages = context.state.data?.pages || [];
        var oldPageParams = context.state.data?.pageParams || [];
        var result = {
          pages: [],
          pageParams: []
        };
        var currentPage = 0;
        var fetchFn = /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* () {
            var cancelled = false;
            var addSignalProperty = (object) => {
              Object.defineProperty(object, "signal", {
                enumerable: true,
                get: () => {
                  if (context.signal.aborted) {
                    cancelled = true;
                  } else {
                    context.signal.addEventListener("abort", () => {
                      cancelled = true;
                    });
                  }
                  return context.signal;
                }
              });
            };
            var queryFn = ensureQueryFn(context.options, context.fetchOptions);
            var fetchPage = /* @__PURE__ */ function() {
              var _ref2 = _async_to_generator(function* (data, param2, previous2) {
                if (cancelled) {
                  return Promise.reject();
                }
                if (param2 == null && data.pages.length) {
                  return Promise.resolve(data);
                }
                var queryFnContext = {
                  queryKey: context.queryKey,
                  pageParam: param2,
                  direction: previous2 ? "backward" : "forward",
                  meta: context.options.meta
                };
                addSignalProperty(queryFnContext);
                var page = yield queryFn(queryFnContext);
                var { maxPages } = context.options;
                var addTo = previous2 ? addToStart : addToEnd;
                return {
                  pages: addTo(data.pages, page, maxPages),
                  pageParams: addTo(data.pageParams, param2, maxPages)
                };
              });
              return function fetchPage2(data, param2, previous2) {
                return _ref2.apply(this, arguments);
              };
            }();
            if (direction && oldPages.length) {
              var previous = direction === "backward";
              var pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
              var oldData = {
                pages: oldPages,
                pageParams: oldPageParams
              };
              var param = pageParamFn(options, oldData);
              result = yield fetchPage(oldData, param, previous);
            } else {
              var remainingPages = pages ?? oldPages.length;
              do {
                var param1 = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                if (currentPage > 0 && param1 == null) {
                  break;
                }
                result = yield fetchPage(result, param1);
                currentPage++;
              } while (currentPage < remainingPages);
            }
            return result;
          });
          return function fetchFn2() {
            return _ref.apply(this, arguments);
          };
        }();
        if (context.options.persister) {
          context.fetchFn = () => {
            return context.options.persister?.(fetchFn, {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            }, query);
          };
        } else {
          context.fetchFn = fetchFn;
        }
      }
    };
  }
  function getNextPageParam(options, { pages, pageParams }) {
    var lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
  }
  function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
  }
  var init_infiniteQueryBehavior = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_utils2();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryClient.js
  var _queryCache, _mutationCache2, _defaultOptions2, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline, QueryClient;
  var init_queryClient = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryClient.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_field_update();
      init_create_class();
      init_utils2();
      init_queryCache();
      init_mutationCache();
      init_focusManager();
      init_onlineManager();
      init_notifyManager();
      init_infiniteQueryBehavior();
      QueryClient = (_queryCache = /* @__PURE__ */ new WeakMap(), _mutationCache2 = /* @__PURE__ */ new WeakMap(), _defaultOptions2 = /* @__PURE__ */ new WeakMap(), _queryDefaults = /* @__PURE__ */ new WeakMap(), _mutationDefaults = /* @__PURE__ */ new WeakMap(), _mountCount = /* @__PURE__ */ new WeakMap(), _unsubscribeFocus = /* @__PURE__ */ new WeakMap(), _unsubscribeOnline = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function() {
        "use strict";
        function _class5(config = {}) {
          _class_call_check(this, _class5);
          _class_private_field_init(this, _queryCache, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mutationCache2, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _defaultOptions2, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _queryDefaults, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mutationDefaults, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _mountCount, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _unsubscribeFocus, {
            writable: true,
            value: void 0
          });
          _class_private_field_init(this, _unsubscribeOnline, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(this, _queryCache, config.queryCache || new QueryCache());
          _class_private_field_set(this, _mutationCache2, config.mutationCache || new MutationCache());
          _class_private_field_set(this, _defaultOptions2, config.defaultOptions || {});
          _class_private_field_set(this, _queryDefaults, /* @__PURE__ */ new Map());
          _class_private_field_set(this, _mutationDefaults, /* @__PURE__ */ new Map());
          _class_private_field_set(this, _mountCount, 0);
        }
        _create_class(_class5, [
          {
            key: "mount",
            value: function mount() {
              _class_private_field_update(this, _mountCount).value++;
              if (_class_private_field_get(this, _mountCount) !== 1)
                return;
              var _this = this;
              _class_private_field_set(this, _unsubscribeFocus, focusManager.subscribe(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (focused) {
                  if (focused) {
                    yield _this.resumePausedMutations();
                    _class_private_field_get(_this, _queryCache).onFocus();
                  }
                });
                return function(focused) {
                  return _ref.apply(this, arguments);
                };
              }()));
              var _this1 = this;
              _class_private_field_set(this, _unsubscribeOnline, onlineManager.subscribe(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (online) {
                  if (online) {
                    yield _this1.resumePausedMutations();
                    _class_private_field_get(_this1, _queryCache).onOnline();
                  }
                });
                return function(online) {
                  return _ref.apply(this, arguments);
                };
              }()));
            }
          },
          {
            key: "unmount",
            value: function unmount() {
              var _this, _this1, _ref, _this2, _this3, _ref1;
              _class_private_field_update(this, _mountCount).value--;
              if (_class_private_field_get(this, _mountCount) !== 0)
                return;
              (_this = _class_private_field_get(_ref = _this1 = this, _unsubscribeFocus)) === null || _this === void 0 ? void 0 : _this.call(_this1);
              _class_private_field_set(this, _unsubscribeFocus, void 0);
              (_this2 = _class_private_field_get(_ref1 = _this3 = this, _unsubscribeOnline)) === null || _this2 === void 0 ? void 0 : _this2.call(_this3);
              _class_private_field_set(this, _unsubscribeOnline, void 0);
            }
          },
          {
            key: "isFetching",
            value: function isFetching(filters) {
              return _class_private_field_get(this, _queryCache).findAll({
                ...filters,
                fetchStatus: "fetching"
              }).length;
            }
          },
          {
            key: "isMutating",
            value: function isMutating(filters) {
              return _class_private_field_get(this, _mutationCache2).findAll({
                ...filters,
                status: "pending"
              }).length;
            }
          },
          {
            key: "getQueryData",
            value: function getQueryData(queryKey) {
              var options = this.defaultQueryOptions({
                queryKey
              });
              return _class_private_field_get(this, _queryCache).get(options.queryHash)?.state.data;
            }
          },
          {
            key: "ensureQueryData",
            value: function ensureQueryData(options) {
              var cachedData = this.getQueryData(options.queryKey);
              if (cachedData === void 0)
                return this.fetchQuery(options);
              else {
                var defaultedOptions = this.defaultQueryOptions(options);
                var query = _class_private_field_get(this, _queryCache).build(this, defaultedOptions);
                if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
                  void this.prefetchQuery(defaultedOptions);
                }
                return Promise.resolve(cachedData);
              }
            }
          },
          {
            key: "getQueriesData",
            value: function getQueriesData(filters) {
              return _class_private_field_get(this, _queryCache).findAll(filters).map(({ queryKey, state }) => {
                var data = state.data;
                return [
                  queryKey,
                  data
                ];
              });
            }
          },
          {
            key: "setQueryData",
            value: function setQueryData(queryKey, updater, options) {
              var defaultedOptions = this.defaultQueryOptions({
                queryKey
              });
              var query = _class_private_field_get(this, _queryCache).get(defaultedOptions.queryHash);
              var prevData = query?.state.data;
              var data = functionalUpdate(updater, prevData);
              if (data === void 0) {
                return void 0;
              }
              return _class_private_field_get(this, _queryCache).build(this, defaultedOptions).setData(data, {
                ...options,
                manual: true
              });
            }
          },
          {
            key: "setQueriesData",
            value: function setQueriesData(filters, updater, options) {
              return notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).map(({ queryKey }) => [
                queryKey,
                this.setQueryData(queryKey, updater, options)
              ]));
            }
          },
          {
            key: "getQueryState",
            value: function getQueryState(queryKey) {
              var options = this.defaultQueryOptions({
                queryKey
              });
              return _class_private_field_get(this, _queryCache).get(options.queryHash)?.state;
            }
          },
          {
            key: "removeQueries",
            value: function removeQueries(filters) {
              var queryCache = _class_private_field_get(this, _queryCache);
              notifyManager.batch(() => {
                queryCache.findAll(filters).forEach((query) => {
                  queryCache.remove(query);
                });
              });
            }
          },
          {
            key: "resetQueries",
            value: function resetQueries(filters, options) {
              var queryCache = _class_private_field_get(this, _queryCache);
              var refetchFilters = {
                type: "active",
                ...filters
              };
              return notifyManager.batch(() => {
                queryCache.findAll(filters).forEach((query) => {
                  query.reset();
                });
                return this.refetchQueries(refetchFilters, options);
              });
            }
          },
          {
            key: "cancelQueries",
            value: function cancelQueries(filters = {}, cancelOptions = {}) {
              var defaultedCancelOptions = {
                revert: true,
                ...cancelOptions
              };
              var promises = notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
              return Promise.all(promises).then(noop).catch(noop);
            }
          },
          {
            key: "invalidateQueries",
            value: function invalidateQueries(filters = {}, options = {}) {
              return notifyManager.batch(() => {
                _class_private_field_get(this, _queryCache).findAll(filters).forEach((query) => {
                  query.invalidate();
                });
                if (filters.refetchType === "none") {
                  return Promise.resolve();
                }
                var refetchFilters = {
                  ...filters,
                  type: filters.refetchType ?? filters.type ?? "active"
                };
                return this.refetchQueries(refetchFilters, options);
              });
            }
          },
          {
            key: "refetchQueries",
            value: function refetchQueries(filters = {}, options) {
              var fetchOptions = {
                ...options,
                cancelRefetch: options?.cancelRefetch ?? true
              };
              var promises = notifyManager.batch(() => _class_private_field_get(this, _queryCache).findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
                var promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                  promise = promise.catch(noop);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
              }));
              return Promise.all(promises).then(noop);
            }
          },
          {
            key: "fetchQuery",
            value: function fetchQuery(options) {
              var defaultedOptions = this.defaultQueryOptions(options);
              if (defaultedOptions.retry === void 0) {
                defaultedOptions.retry = false;
              }
              var query = _class_private_field_get(this, _queryCache).build(this, defaultedOptions);
              return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
            }
          },
          {
            key: "prefetchQuery",
            value: function prefetchQuery(options) {
              return this.fetchQuery(options).then(noop).catch(noop);
            }
          },
          {
            key: "fetchInfiniteQuery",
            value: function fetchInfiniteQuery(options) {
              options.behavior = infiniteQueryBehavior(options.pages);
              return this.fetchQuery(options);
            }
          },
          {
            key: "prefetchInfiniteQuery",
            value: function prefetchInfiniteQuery(options) {
              return this.fetchInfiniteQuery(options).then(noop).catch(noop);
            }
          },
          {
            key: "ensureInfiniteQueryData",
            value: function ensureInfiniteQueryData(options) {
              options.behavior = infiniteQueryBehavior(options.pages);
              return this.ensureQueryData(options);
            }
          },
          {
            key: "resumePausedMutations",
            value: function resumePausedMutations() {
              if (onlineManager.isOnline()) {
                return _class_private_field_get(this, _mutationCache2).resumePausedMutations();
              }
              return Promise.resolve();
            }
          },
          {
            key: "getQueryCache",
            value: function getQueryCache() {
              return _class_private_field_get(this, _queryCache);
            }
          },
          {
            key: "getMutationCache",
            value: function getMutationCache() {
              return _class_private_field_get(this, _mutationCache2);
            }
          },
          {
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
              return _class_private_field_get(this, _defaultOptions2);
            }
          },
          {
            key: "setDefaultOptions",
            value: function setDefaultOptions(options) {
              _class_private_field_set(this, _defaultOptions2, options);
            }
          },
          {
            key: "setQueryDefaults",
            value: function setQueryDefaults(queryKey, options) {
              _class_private_field_get(this, _queryDefaults).set(hashKey(queryKey), {
                queryKey,
                defaultOptions: options
              });
            }
          },
          {
            key: "getQueryDefaults",
            value: function getQueryDefaults(queryKey) {
              var defaults = [
                ..._class_private_field_get(this, _queryDefaults).values()
              ];
              var result = {};
              defaults.forEach((queryDefault) => {
                if (partialMatchKey(queryKey, queryDefault.queryKey)) {
                  result = {
                    ...result,
                    ...queryDefault.defaultOptions
                  };
                }
              });
              return result;
            }
          },
          {
            key: "setMutationDefaults",
            value: function setMutationDefaults(mutationKey, options) {
              _class_private_field_get(this, _mutationDefaults).set(hashKey(mutationKey), {
                mutationKey,
                defaultOptions: options
              });
            }
          },
          {
            key: "getMutationDefaults",
            value: function getMutationDefaults(mutationKey) {
              var defaults = [
                ..._class_private_field_get(this, _mutationDefaults).values()
              ];
              var result = {};
              defaults.forEach((queryDefault) => {
                if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
                  result = {
                    ...result,
                    ...queryDefault.defaultOptions
                  };
                }
              });
              return result;
            }
          },
          {
            key: "defaultQueryOptions",
            value: function defaultQueryOptions(options) {
              if (options._defaulted) {
                return options;
              }
              var defaultedOptions = {
                ..._class_private_field_get(this, _defaultOptions2).queries,
                ...this.getQueryDefaults(options.queryKey),
                ...options,
                _defaulted: true
              };
              if (!defaultedOptions.queryHash) {
                defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
              }
              if (defaultedOptions.refetchOnReconnect === void 0) {
                defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
              }
              if (defaultedOptions.throwOnError === void 0) {
                defaultedOptions.throwOnError = !!defaultedOptions.suspense;
              }
              if (!defaultedOptions.networkMode && defaultedOptions.persister) {
                defaultedOptions.networkMode = "offlineFirst";
              }
              if (defaultedOptions.enabled !== true && defaultedOptions.queryFn === skipToken) {
                defaultedOptions.enabled = false;
              }
              return defaultedOptions;
            }
          },
          {
            key: "defaultMutationOptions",
            value: function defaultMutationOptions(options) {
              if (options?._defaulted) {
                return options;
              }
              return {
                ..._class_private_field_get(this, _defaultOptions2).mutations,
                ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
                ...options,
                _defaulted: true
              };
            }
          },
          {
            key: "clear",
            value: function clear() {
              _class_private_field_get(this, _queryCache).clear();
              _class_private_field_get(this, _mutationCache2).clear();
            }
          }
        ]);
        return _class5;
      }());
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js
  function shouldLoadOnMount(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (resolveEnabled(options.enabled, query) !== false) {
      var value = typeof field === "function" ? field(query) : field;
      return value === "always" || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
  }
  function isStale(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
  }
  function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
      return true;
    }
    return false;
  }
  function executeFetch(fetchOptions) {
    _class_private_method_get(this, _updateQuery, updateQuery).call(this);
    var promise = _class_private_field_get(this, _currentQuery).fetch(this.options, fetchOptions);
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  function updateStaleTimeout() {
    _class_private_method_get(this, _clearStaleTimeout, clearStaleTimeout).call(this);
    var staleTime = resolveStaleTime(this.options.staleTime, _class_private_field_get(this, _currentQuery));
    if (isServer || _class_private_field_get(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
      return;
    }
    var time = timeUntilStale(_class_private_field_get(this, _currentResult).dataUpdatedAt, staleTime);
    var timeout = time + 1;
    _class_private_field_set(this, _staleTimeoutId, setTimeout(() => {
      if (!_class_private_field_get(this, _currentResult).isStale) {
        this.updateResult();
      }
    }, timeout));
  }
  function computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(_class_private_field_get(this, _currentQuery)) : this.options.refetchInterval) ?? false;
  }
  function updateRefetchInterval(nextInterval) {
    _class_private_method_get(this, _clearRefetchInterval, clearRefetchInterval).call(this);
    _class_private_field_set(this, _currentRefetchInterval, nextInterval);
    if (isServer || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) === false || !isValidTimeout(_class_private_field_get(this, _currentRefetchInterval)) || _class_private_field_get(this, _currentRefetchInterval) === 0) {
      return;
    }
    _class_private_field_set(this, _refetchIntervalId, setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _class_private_method_get(this, _executeFetch, executeFetch).call(this);
      }
    }, _class_private_field_get(this, _currentRefetchInterval)));
  }
  function updateTimers() {
    _class_private_method_get(this, _updateStaleTimeout, updateStaleTimeout).call(this);
    _class_private_method_get(this, _updateRefetchInterval, updateRefetchInterval).call(this, _class_private_method_get(this, _computeRefetchInterval, computeRefetchInterval).call(this));
  }
  function clearStaleTimeout() {
    if (_class_private_field_get(this, _staleTimeoutId)) {
      clearTimeout(_class_private_field_get(this, _staleTimeoutId));
      _class_private_field_set(this, _staleTimeoutId, void 0);
    }
  }
  function clearRefetchInterval() {
    if (_class_private_field_get(this, _refetchIntervalId)) {
      clearInterval(_class_private_field_get(this, _refetchIntervalId));
      _class_private_field_set(this, _refetchIntervalId, void 0);
    }
  }
  function updateQuery() {
    var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), this.options);
    if (query === _class_private_field_get(this, _currentQuery)) {
      return;
    }
    var prevQuery = _class_private_field_get(this, _currentQuery);
    _class_private_field_set(this, _currentQuery, query);
    _class_private_field_set(this, _currentQueryInitialState, query.state);
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  function notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(_class_private_field_get(this, _currentResult));
        });
      }
      _class_private_field_get(this, _client).getQueryCache().notify({
        query: _class_private_field_get(this, _currentQuery),
        type: "observerResultsUpdated"
      });
    });
  }
  var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _executeFetch, _updateStaleTimeout, _computeRefetchInterval, _updateRefetchInterval, _updateTimers, _clearStaleTimeout, _clearRefetchInterval, _updateQuery, _notify, _class3, QueryObserver;
  var init_queryObserver = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_utils2();
      init_notifyManager();
      init_focusManager();
      init_subscribable();
      init_query();
      QueryObserver = (_client = /* @__PURE__ */ new WeakMap(), _currentQuery = /* @__PURE__ */ new WeakMap(), _currentQueryInitialState = /* @__PURE__ */ new WeakMap(), _currentResult = /* @__PURE__ */ new WeakMap(), _currentResultState = /* @__PURE__ */ new WeakMap(), _currentResultOptions = /* @__PURE__ */ new WeakMap(), _selectError = /* @__PURE__ */ new WeakMap(), _selectFn = /* @__PURE__ */ new WeakMap(), _selectResult = /* @__PURE__ */ new WeakMap(), _lastQueryWithDefinedData = /* @__PURE__ */ new WeakMap(), _staleTimeoutId = /* @__PURE__ */ new WeakMap(), _refetchIntervalId = /* @__PURE__ */ new WeakMap(), _currentRefetchInterval = /* @__PURE__ */ new WeakMap(), _trackedProps = /* @__PURE__ */ new WeakMap(), _executeFetch = /* @__PURE__ */ new WeakSet(), _updateStaleTimeout = /* @__PURE__ */ new WeakSet(), _computeRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateTimers = /* @__PURE__ */ new WeakSet(), _clearStaleTimeout = /* @__PURE__ */ new WeakSet(), _clearRefetchInterval = /* @__PURE__ */ new WeakSet(), _updateQuery = /* @__PURE__ */ new WeakSet(), _notify = /* @__PURE__ */ new WeakSet(), _class3 = /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(client, options) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _executeFetch), _class_private_method_init(_this, _updateStaleTimeout), _class_private_method_init(_this, _computeRefetchInterval), _class_private_method_init(_this, _updateRefetchInterval), _class_private_method_init(_this, _updateTimers), _class_private_method_init(_this, _clearStaleTimeout), _class_private_method_init(_this, _clearRefetchInterval), _class_private_method_init(_this, _updateQuery), _class_private_method_init(_this, _notify), _class_private_field_init(_this, _client, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentQuery, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentQueryInitialState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResult, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResultState, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResultOptions, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectError, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectFn, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _selectResult, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _lastQueryWithDefinedData, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _staleTimeoutId, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _refetchIntervalId, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentRefetchInterval, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _trackedProps, {
            writable: true,
            value: /* @__PURE__ */ new Set()
          });
          _this.options = options;
          _class_private_field_set(_this, _client, client);
          _class_private_field_set(_this, _selectError, null);
          _this.bindMethods();
          _this.setOptions(options);
          return _this;
        }
        _create_class(_class5, [
          {
            key: "bindMethods",
            value: function bindMethods() {
              this.refetch = this.refetch.bind(this);
            }
          },
          {
            key: "onSubscribe",
            value: function onSubscribe() {
              if (this.listeners.size === 1) {
                _class_private_field_get(this, _currentQuery).addObserver(this);
                if (shouldFetchOnMount(_class_private_field_get(this, _currentQuery), this.options)) {
                  _class_private_method_get(this, _executeFetch, executeFetch).call(this);
                } else {
                  this.updateResult();
                }
                _class_private_method_get(this, _updateTimers, updateTimers).call(this);
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              if (!this.hasListeners()) {
                this.destroy();
              }
            }
          },
          {
            key: "shouldFetchOnReconnect",
            value: function shouldFetchOnReconnect() {
              return shouldFetchOn(_class_private_field_get(this, _currentQuery), this.options, this.options.refetchOnReconnect);
            }
          },
          {
            key: "shouldFetchOnWindowFocus",
            value: function shouldFetchOnWindowFocus() {
              return shouldFetchOn(_class_private_field_get(this, _currentQuery), this.options, this.options.refetchOnWindowFocus);
            }
          },
          {
            key: "destroy",
            value: function destroy() {
              this.listeners = /* @__PURE__ */ new Set();
              _class_private_method_get(this, _clearStaleTimeout, clearStaleTimeout).call(this);
              _class_private_method_get(this, _clearRefetchInterval, clearRefetchInterval).call(this);
              _class_private_field_get(this, _currentQuery).removeObserver(this);
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options, notifyOptions) {
              var prevOptions = this.options;
              var prevQuery = _class_private_field_get(this, _currentQuery);
              this.options = _class_private_field_get(this, _client).defaultQueryOptions(options);
              if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== "boolean") {
                throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
              }
              _class_private_method_get(this, _updateQuery, updateQuery).call(this);
              _class_private_field_get(this, _currentQuery).setOptions(this.options);
              if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
                _class_private_field_get(this, _client).getQueryCache().notify({
                  type: "observerOptionsUpdated",
                  query: _class_private_field_get(this, _currentQuery),
                  observer: this
                });
              }
              var mounted = this.hasListeners();
              if (mounted && shouldFetchOptionally(_class_private_field_get(this, _currentQuery), prevQuery, this.options, prevOptions)) {
                _class_private_method_get(this, _executeFetch, executeFetch).call(this);
              }
              this.updateResult(notifyOptions);
              if (mounted && (_class_private_field_get(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, _class_private_field_get(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, _class_private_field_get(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, _class_private_field_get(this, _currentQuery)))) {
                _class_private_method_get(this, _updateStaleTimeout, updateStaleTimeout).call(this);
              }
              var nextRefetchInterval = _class_private_method_get(this, _computeRefetchInterval, computeRefetchInterval).call(this);
              if (mounted && (_class_private_field_get(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, _class_private_field_get(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, _class_private_field_get(this, _currentQuery)) || nextRefetchInterval !== _class_private_field_get(this, _currentRefetchInterval))) {
                _class_private_method_get(this, _updateRefetchInterval, updateRefetchInterval).call(this, nextRefetchInterval);
              }
            }
          },
          {
            key: "getOptimisticResult",
            value: function getOptimisticResult(options) {
              var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), options);
              var result = this.createResult(query, options);
              if (shouldAssignObserverCurrentProperties(this, result)) {
                _class_private_field_set(this, _currentResult, result);
                _class_private_field_set(this, _currentResultOptions, this.options);
                _class_private_field_set(this, _currentResultState, _class_private_field_get(this, _currentQuery).state);
              }
              return result;
            }
          },
          {
            key: "getCurrentResult",
            value: function getCurrentResult() {
              return _class_private_field_get(this, _currentResult);
            }
          },
          {
            key: "trackResult",
            value: function trackResult(result, onPropTracked) {
              var trackedResult = {};
              Object.keys(result).forEach((key) => {
                Object.defineProperty(trackedResult, key, {
                  configurable: false,
                  enumerable: true,
                  get: () => {
                    this.trackProp(key);
                    onPropTracked?.(key);
                    return result[key];
                  }
                });
              });
              return trackedResult;
            }
          },
          {
            key: "trackProp",
            value: function trackProp(key) {
              _class_private_field_get(this, _trackedProps).add(key);
            }
          },
          {
            key: "getCurrentQuery",
            value: function getCurrentQuery() {
              return _class_private_field_get(this, _currentQuery);
            }
          },
          {
            key: "refetch",
            value: function refetch({ ...options } = {}) {
              return this.fetch({
                ...options
              });
            }
          },
          {
            key: "fetchOptimistic",
            value: function fetchOptimistic2(options) {
              var defaultedOptions = _class_private_field_get(this, _client).defaultQueryOptions(options);
              var query = _class_private_field_get(this, _client).getQueryCache().build(_class_private_field_get(this, _client), defaultedOptions);
              query.isFetchingOptimistic = true;
              return query.fetch().then(() => this.createResult(query, defaultedOptions));
            }
          },
          {
            key: "fetch",
            value: function fetch2(fetchOptions) {
              return _class_private_method_get(this, _executeFetch, executeFetch).call(this, {
                ...fetchOptions,
                cancelRefetch: fetchOptions.cancelRefetch ?? true
              }).then(() => {
                this.updateResult();
                return _class_private_field_get(this, _currentResult);
              });
            }
          },
          {
            key: "createResult",
            value: function createResult(query, options) {
              var prevQuery = _class_private_field_get(this, _currentQuery);
              var prevOptions = this.options;
              var prevResult = _class_private_field_get(this, _currentResult);
              var prevResultState = _class_private_field_get(this, _currentResultState);
              var prevResultOptions = _class_private_field_get(this, _currentResultOptions);
              var queryChange = query !== prevQuery;
              var queryInitialState = queryChange ? query.state : _class_private_field_get(this, _currentQueryInitialState);
              var { state } = query;
              var newState = {
                ...state
              };
              var isPlaceholderData = false;
              var data;
              if (options._optimisticResults) {
                var mounted = this.hasListeners();
                var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
                var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
                if (fetchOnMount || fetchOptionally) {
                  newState = {
                    ...newState,
                    ...fetchState(state.data, query.options)
                  };
                }
                if (options._optimisticResults === "isRestoring") {
                  newState.fetchStatus = "idle";
                }
              }
              var { error, errorUpdatedAt, status } = newState;
              if (options.select && newState.data !== void 0) {
                if (prevResult && newState.data === prevResultState?.data && options.select === _class_private_field_get(this, _selectFn)) {
                  data = _class_private_field_get(this, _selectResult);
                } else {
                  try {
                    _class_private_field_set(this, _selectFn, options.select);
                    data = options.select(newState.data);
                    data = replaceData(prevResult?.data, data, options);
                    _class_private_field_set(this, _selectResult, data);
                    _class_private_field_set(this, _selectError, null);
                  } catch (selectError) {
                    _class_private_field_set(this, _selectError, selectError);
                  }
                }
              } else {
                data = newState.data;
              }
              if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
                var placeholderData;
                if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                  placeholderData = prevResult.data;
                } else {
                  placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(_class_private_field_get(this, _lastQueryWithDefinedData)?.state.data, _class_private_field_get(this, _lastQueryWithDefinedData)) : options.placeholderData;
                  if (options.select && placeholderData !== void 0) {
                    try {
                      placeholderData = options.select(placeholderData);
                      _class_private_field_set(this, _selectError, null);
                    } catch (selectError) {
                      _class_private_field_set(this, _selectError, selectError);
                    }
                  }
                }
                if (placeholderData !== void 0) {
                  status = "success";
                  data = replaceData(prevResult?.data, placeholderData, options);
                  isPlaceholderData = true;
                }
              }
              if (_class_private_field_get(this, _selectError)) {
                error = _class_private_field_get(this, _selectError);
                data = _class_private_field_get(this, _selectResult);
                errorUpdatedAt = Date.now();
                status = "error";
              }
              var isFetching = newState.fetchStatus === "fetching";
              var isPending = status === "pending";
              var isError = status === "error";
              var isLoading = isPending && isFetching;
              var hasData = data !== void 0;
              var result = {
                status,
                fetchStatus: newState.fetchStatus,
                isPending,
                isSuccess: status === "success",
                isError,
                isInitialLoading: isLoading,
                isLoading,
                data,
                dataUpdatedAt: newState.dataUpdatedAt,
                error,
                errorUpdatedAt,
                failureCount: newState.fetchFailureCount,
                failureReason: newState.fetchFailureReason,
                errorUpdateCount: newState.errorUpdateCount,
                isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
                isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
                isFetching,
                isRefetching: isFetching && !isPending,
                isLoadingError: isError && !hasData,
                isPaused: newState.fetchStatus === "paused",
                isPlaceholderData,
                isRefetchError: isError && hasData,
                isStale: isStale(query, options),
                refetch: this.refetch
              };
              return result;
            }
          },
          {
            key: "updateResult",
            value: function updateResult2(notifyOptions) {
              var prevResult = _class_private_field_get(this, _currentResult);
              var nextResult = this.createResult(_class_private_field_get(this, _currentQuery), this.options);
              _class_private_field_set(this, _currentResultState, _class_private_field_get(this, _currentQuery).state);
              _class_private_field_set(this, _currentResultOptions, this.options);
              if (_class_private_field_get(this, _currentResultState).data !== void 0) {
                _class_private_field_set(this, _lastQueryWithDefinedData, _class_private_field_get(this, _currentQuery));
              }
              if (shallowEqualObjects(nextResult, prevResult)) {
                return;
              }
              _class_private_field_set(this, _currentResult, nextResult);
              var defaultNotifyOptions = {};
              var shouldNotifyListeners = () => {
                if (!prevResult) {
                  return true;
                }
                var { notifyOnChangeProps } = this.options;
                var notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
                if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !_class_private_field_get(this, _trackedProps).size) {
                  return true;
                }
                var includedProps = new Set(notifyOnChangePropsValue ?? _class_private_field_get(this, _trackedProps));
                if (this.options.throwOnError) {
                  includedProps.add("error");
                }
                return Object.keys(_class_private_field_get(this, _currentResult)).some((key) => {
                  var typedKey = key;
                  var changed = _class_private_field_get(this, _currentResult)[typedKey] !== prevResult[typedKey];
                  return changed && includedProps.has(typedKey);
                });
              };
              if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
                defaultNotifyOptions.listeners = true;
              }
              _class_private_method_get(this, _notify, notify).call(this, {
                ...defaultNotifyOptions,
                ...notifyOptions
              });
            }
          },
          {
            key: "onQueryUpdate",
            value: function onQueryUpdate() {
              this.updateResult();
              if (this.hasListeners()) {
                _class_private_method_get(this, _updateTimers, updateTimers).call(this);
              }
            }
          }
        ]);
        return _class5;
      }(Subscribable), _class3);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
  function updateResult() {
    var state = _class_private_field_get(this, _currentMutation)?.state ?? getDefaultState2();
    _class_private_field_set(this, _currentResult2, {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    });
  }
  function notify2(action) {
    notifyManager.batch(() => {
      if (_class_private_field_get(this, _mutateOptions) && this.hasListeners()) {
        var variables = _class_private_field_get(this, _currentResult2).variables;
        var context = _class_private_field_get(this, _currentResult2).context;
        if (action?.type === "success") {
          _class_private_field_get(this, _mutateOptions).onSuccess?.(action.data, variables, context);
          _class_private_field_get(this, _mutateOptions).onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          _class_private_field_get(this, _mutateOptions).onError?.(action.error, variables, context);
          _class_private_field_get(this, _mutateOptions).onSettled?.(void 0, action.error, variables, context);
        }
      }
      this.listeners.forEach((listener) => {
        listener(_class_private_field_get(this, _currentResult2));
      });
    });
  }
  var _client2, _currentResult2, _currentMutation, _mutateOptions, _updateResult, _notify2, _class4, MutationObserver;
  var init_mutationObserver = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_class_private_field_get();
      init_class_private_field_init();
      init_class_private_field_set();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_inherits();
      init_mutation();
      init_notifyManager();
      init_subscribable();
      init_utils2();
      MutationObserver = (_client2 = /* @__PURE__ */ new WeakMap(), _currentResult2 = /* @__PURE__ */ new WeakMap(), _currentMutation = /* @__PURE__ */ new WeakMap(), _mutateOptions = /* @__PURE__ */ new WeakMap(), _updateResult = /* @__PURE__ */ new WeakSet(), _notify2 = /* @__PURE__ */ new WeakSet(), _class4 = /* @__PURE__ */ function(Subscribable2) {
        "use strict";
        _inherits(_class5, Subscribable2);
        function _class5(client, options) {
          _class_call_check(this, _class5);
          var _this;
          _this = _call_super(this, _class5), _class_private_method_init(_this, _updateResult), _class_private_method_init(_this, _notify2), _class_private_field_init(_this, _client2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentResult2, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _currentMutation, {
            writable: true,
            value: void 0
          }), _class_private_field_init(_this, _mutateOptions, {
            writable: true,
            value: void 0
          });
          _class_private_field_set(_this, _client2, client);
          _this.setOptions(options);
          _this.bindMethods();
          _class_private_method_get(_this, _updateResult, updateResult).call(_this);
          return _this;
        }
        _create_class(_class5, [
          {
            key: "bindMethods",
            value: function bindMethods() {
              this.mutate = this.mutate.bind(this);
              this.reset = this.reset.bind(this);
            }
          },
          {
            key: "setOptions",
            value: function setOptions(options) {
              var prevOptions = this.options;
              this.options = _class_private_field_get(this, _client2).defaultMutationOptions(options);
              if (!shallowEqualObjects(this.options, prevOptions)) {
                _class_private_field_get(this, _client2).getMutationCache().notify({
                  type: "observerOptionsUpdated",
                  mutation: _class_private_field_get(this, _currentMutation),
                  observer: this
                });
              }
              if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
                this.reset();
              } else if (_class_private_field_get(this, _currentMutation)?.state.status === "pending") {
                _class_private_field_get(this, _currentMutation).setOptions(this.options);
              }
            }
          },
          {
            key: "onUnsubscribe",
            value: function onUnsubscribe() {
              if (!this.hasListeners()) {
                _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              }
            }
          },
          {
            key: "onMutationUpdate",
            value: function onMutationUpdate(action) {
              _class_private_method_get(this, _updateResult, updateResult).call(this);
              _class_private_method_get(this, _notify2, notify2).call(this, action);
            }
          },
          {
            key: "getCurrentResult",
            value: function getCurrentResult() {
              return _class_private_field_get(this, _currentResult2);
            }
          },
          {
            key: "reset",
            value: function reset() {
              _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              _class_private_field_set(this, _currentMutation, void 0);
              _class_private_method_get(this, _updateResult, updateResult).call(this);
              _class_private_method_get(this, _notify2, notify2).call(this);
            }
          },
          {
            key: "mutate",
            value: function mutate(variables, options) {
              _class_private_field_set(this, _mutateOptions, options);
              _class_private_field_get(this, _currentMutation)?.removeObserver(this);
              _class_private_field_set(this, _currentMutation, _class_private_field_get(this, _client2).getMutationCache().build(_class_private_field_get(this, _client2), this.options));
              _class_private_field_get(this, _currentMutation).addObserver(this);
              return _class_private_field_get(this, _currentMutation).execute(variables);
            }
          }
        ]);
        return _class5;
      }(Subscribable), _class4);
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/types.js
  var init_types2 = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/types.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/index.js
  var init_modern = __esm({
    "node_modules/.pnpm/@tanstack+query-core@5.56.2/node_modules/@tanstack/query-core/build/modern/index.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_queryClient();
      init_queryObserver();
      init_mutationObserver();
      init_notifyManager();
      init_types2();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/types.js
  var init_types3 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/types.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
  var React3, QueryClientContext, useQueryClient, QueryClientProvider;
  var init_QueryClientProvider = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React3 = __toESM(require_react(), 1);
      init_jsxRuntime();
      QueryClientContext = React3.createContext(void 0);
      useQueryClient = (queryClient2) => {
        var client = React3.useContext(QueryClientContext);
        if (queryClient2) {
          return queryClient2;
        }
        if (!client) {
          throw new Error("No QueryClient set, use QueryClientProvider to set one");
        }
        return client;
      };
      QueryClientProvider = ({ client, children }) => {
        React3.useEffect(() => {
          client.mount();
          return () => {
            client.unmount();
          };
        }, [
          client
        ]);
        return /* @__PURE__ */ jsx(QueryClientContext.Provider, {
          value: client,
          children
        });
      };
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/isRestoring.js
  var React4, IsRestoringContext, useIsRestoring, IsRestoringProvider;
  var init_isRestoring = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/isRestoring.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React4 = __toESM(require_react(), 1);
      IsRestoringContext = React4.createContext(false);
      useIsRestoring = () => React4.useContext(IsRestoringContext);
      IsRestoringProvider = IsRestoringContext.Provider;
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
  function createValue() {
    var isReset = false;
    return {
      clearReset: () => {
        isReset = false;
      },
      reset: () => {
        isReset = true;
      },
      isReset: () => {
        return isReset;
      }
    };
  }
  var React5, QueryErrorResetBoundaryContext, useQueryErrorResetBoundary;
  var init_QueryErrorResetBoundary = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React5 = __toESM(require_react(), 1);
      init_jsxRuntime();
      QueryErrorResetBoundaryContext = React5.createContext(createValue());
      useQueryErrorResetBoundary = () => React5.useContext(QueryErrorResetBoundaryContext);
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/utils.js
  function shouldThrowError(throwError, params) {
    if (typeof throwError === "function") {
      return throwError(...params);
    }
    return !!throwError;
  }
  function noop2() {
  }
  var init_utils3 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/utils.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  var React6, ensurePreventErrorBoundaryRetry, useClearResetErrorBoundary, getHasError;
  var init_errorBoundaryUtils = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React6 = __toESM(require_react(), 1);
      init_utils3();
      ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
        if (options.suspense || options.throwOnError) {
          if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
          }
        }
      };
      useClearResetErrorBoundary = (errorResetBoundary) => {
        React6.useEffect(() => {
          errorResetBoundary.clearReset();
        }, [
          errorResetBoundary
        ]);
      };
      getHasError = ({ result, errorResetBoundary, throwOnError, query }) => {
        return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && shouldThrowError(throwOnError, [
          result.error,
          query
        ]);
      };
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/suspense.js
  var ensureSuspenseTimers, shouldSuspend, fetchOptimistic;
  var init_suspense = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/suspense.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      ensureSuspenseTimers = (defaultedOptions) => {
        if (defaultedOptions.suspense) {
          if (typeof defaultedOptions.staleTime !== "number") {
            defaultedOptions.staleTime = 1e3;
          }
          if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
          }
        }
      };
      shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
      fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
        errorResetBoundary.clearReset();
      });
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
  function useBaseQuery(options, Observer, queryClient2) {
    if (true) {
      if (typeof options !== "object" || Array.isArray(options)) {
        throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
      }
    }
    var client = useQueryClient(queryClient2);
    var isRestoring = useIsRestoring();
    var errorResetBoundary = useQueryErrorResetBoundary();
    var defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    ensureSuspenseTimers(defaultedOptions);
    ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
    useClearResetErrorBoundary(errorResetBoundary);
    var [observer] = React7.useState(() => new Observer(client, defaultedOptions));
    var result = observer.getOptimisticResult(defaultedOptions);
    React7.useSyncExternalStore(React7.useCallback((onStoreChange) => {
      var unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange));
      observer.updateResult();
      return unsubscribe;
    }, [
      observer,
      isRestoring
    ]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
    React7.useEffect(() => {
      observer.setOptions(defaultedOptions, {
        listeners: false
      });
    }, [
      defaultedOptions,
      observer
    ]);
    if (shouldSuspend(defaultedOptions, result)) {
      throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
    }
    if (getHasError({
      result,
      errorResetBoundary,
      throwOnError: defaultedOptions.throwOnError,
      query: client.getQueryCache().get(defaultedOptions.queryHash)
    })) {
      throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
  }
  var React7;
  var init_useBaseQuery = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React7 = __toESM(require_react(), 1);
      init_modern();
      init_QueryErrorResetBoundary();
      init_QueryClientProvider();
      init_isRestoring();
      init_errorBoundaryUtils();
      init_suspense();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
  function useQuery(options, queryClient2) {
    return useBaseQuery(options, QueryObserver, queryClient2);
  }
  var init_useQuery = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_modern();
      init_useBaseQuery();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
  function useMutation(options, queryClient2) {
    var client = useQueryClient(queryClient2);
    var [observer] = React8.useState(() => new MutationObserver(client, options));
    React8.useEffect(() => {
      observer.setOptions(options);
    }, [
      observer,
      options
    ]);
    var result = React8.useSyncExternalStore(React8.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [
      observer
    ]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
    var mutate = React8.useCallback((variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop2);
    }, [
      observer
    ]);
    if (result.error && shouldThrowError(observer.options.throwOnError, [
      result.error
    ])) {
      throw result.error;
    }
    return {
      ...result,
      mutate,
      mutateAsync: result.mutate
    };
  }
  var React8;
  var init_useMutation = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js"() {
      "use client";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      React8 = __toESM(require_react(), 1);
      init_modern();
      init_QueryClientProvider();
      init_utils3();
    }
  });

  // node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/index.js
  var init_modern2 = __esm({
    "node_modules/.pnpm/@tanstack+react-query@5.56.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/index.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_modern();
      init_types3();
      init_useQuery();
      init_QueryClientProvider();
      init_useMutation();
    }
  });

  // src/core/ui/settings/pages/PluginBrowser/index.tsx
  var PluginBrowser_exports = {};
  __export(PluginBrowser_exports, {
    default: () => PluginBrowser
  });
  function getManifests() {
    return _getManifests.apply(this, arguments);
  }
  function _getManifests() {
    _getManifests = _async_to_generator(function* () {
      yield updateAllRepository();
      var plugins2 = [
        ...registeredPlugins.values()
      ];
      return plugins2.filter((p) => !isCorePlugin(p.id));
    });
    return _getManifests.apply(this, arguments);
  }
  function InstallButton(props) {
    var [installed, setInstalled] = (0, import_react6.useState)(isPluginInstalled(props.id));
    var installationState = useMutation({
      mutationFn: /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* ({ install }) {
          yield (install ? installPlugin : uninstallPlugin)(props.id, true);
        });
        return function(_2) {
          return _ref.apply(this, arguments);
        };
      }(),
      onSettled() {
        setInstalled(isPluginInstalled(props.id));
      },
      onError(error) {
        showToast2(error instanceof Error ? error.message : String(error));
      }
    });
    return /* @__PURE__ */ jsx(Button, {
      size: "sm",
      loading: installationState.isPending,
      text: !installed ? "Install" : "Uninstall",
      onPress: () => installationState.mutate({
        install: !installed
      }),
      variant: !installed ? "primary" : "destructive",
      icon: findAssetId(!installed ? "DownloadIcon" : "TrashIcon")
    });
  }
  function TrailingButtons(props) {
    return /* @__PURE__ */ jsxs(Stack, {
      spacing: 8,
      direction: "horizontal",
      children: [
        /* @__PURE__ */ jsx(IconButton, {
          size: "sm",
          onPress: () => {
            showSheet("plugin-info", () => {
              return /* @__PURE__ */ jsx(ActionSheet, {
                children: /* @__PURE__ */ jsx(TableRowGroup, {
                  title: "Plugin Info",
                  children: /* @__PURE__ */ jsx(TableRow, {
                    label: "ID",
                    subLabel: props.id
                  })
                })
              });
            });
          },
          variant: "secondary",
          icon: findAssetId("CircleInformationIcon")
        }),
        /* @__PURE__ */ jsx(InstallButton, {
          id: props.id
        })
      ]
    });
  }
  function PluginCard2(props) {
    var { display, version } = props.manifest;
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native24.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native24.View, {
                style: {
                  flexShrink: 1
                },
                children: [
                  /* @__PURE__ */ jsx(Text, {
                    numberOfLines: 1,
                    variant: "heading-lg/semibold",
                    children: display.name
                  }),
                  /* @__PURE__ */ jsxs(Text, {
                    variant: "text-md/semibold",
                    color: "text-muted",
                    children: [
                      "by ",
                      display.authors?.map((a) => a.name).join(", ") || "Unknown",
                      " (",
                      version,
                      ")"
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx(import_react_native24.View, {
                children: /* @__PURE__ */ jsx(TrailingButtons, {
                  id: props.manifest.id
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            children: display.description
          })
        ]
      })
    });
  }
  function BrowserPage() {
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react6.useEffect)(() => {
      navigation2.setOptions({
        title: "Plugin Browser",
        headerRight: () => /* @__PURE__ */ jsx(IconButton, {
          size: "sm",
          variant: "secondary",
          icon: findAssetId("PlusSmallIcon"),
          onPress: () => {
            showSheet("plugin-browser-options", PluginBrowserOptions);
          }
        })
      });
    }, [
      navigation2
    ]);
    var { data, error, isPending, refetch } = useQuery({
      queryKey: [
        "plugins-repo-fetch"
      ],
      queryFn: () => getManifests()
    });
    if (error) {
      return /* @__PURE__ */ jsx(import_react_native24.View, {
        style: {
          flex: 1,
          paddingHorizontal: 8,
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsxs(Card, {
          style: {
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(Text, {
              style: {
                textAlign: "center"
              },
              variant: "heading-lg/bold",
              children: "An error occured while fetching the repository!"
            }),
            /* @__PURE__ */ jsx(Text, {
              style: {
                textAlign: "center"
              },
              variant: "text-sm/medium",
              color: "text-muted",
              children: error instanceof Error ? error.message : String(error)
            }),
            /* @__PURE__ */ jsx(Button, {
              size: "lg",
              text: "Refetch",
              onPress: refetch,
              icon: findAssetId("RetryIcon")
            })
          ]
        })
      });
    }
    return /* @__PURE__ */ jsx(FlashList, {
      data,
      refreshing: isPending,
      onRefresh: refetch,
      estimatedItemSize: 136,
      contentContainerStyle: {
        paddingBottom: 90,
        paddingHorizontal: 5
      },
      renderItem: ({ item: manifest }) => /* @__PURE__ */ jsx(import_react_native24.View, {
        style: {
          paddingVertical: 6,
          paddingHorizontal: 8
        },
        children: /* @__PURE__ */ jsx(PluginCard2, {
          manifest
        })
      })
    });
  }
  function AddRepositoryAlert() {
    var [value, setValue] = (0, import_react6.useState)("");
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Add Repository",
      content: "Enter the URL of the repository you want to add.",
      extraContent: /* @__PURE__ */ jsx(TextInput, {
        value,
        onChange: setValue,
        placeholder: "https://example.com/repo.json"
      }),
      actions: /* @__PURE__ */ jsx(AlertActions, {
        children: /* @__PURE__ */ jsx(AlertActionButton2, {
          text: "Add",
          variant: "primary",
          disabled: !isValidHttpUrl(value),
          onPress: /* @__PURE__ */ _async_to_generator(function* () {
            try {
              yield updateRepository(value);
              showToast2("Added repository!", findAssetId("Check"));
            } catch (e) {
              showToast2("Failed to add repository!", findAssetId("Small"));
            } finally {
              dismissAlert("blaze-add-plugin-repository");
              showSheet("plugin-browser-options", PluginBrowserOptions);
            }
          })
        })
      })
    });
  }
  function PluginBrowserOptions() {
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(TableRowGroup, {
        title: "Repositories",
        children: [
          Object.keys(pluginRepositories).map((url2) => {
            return /* @__PURE__ */ jsx(RepositoryRow, {
              url: url2
            }, url2);
          }),
          /* @__PURE__ */ jsx(TableRow, {
            label: "Add Repository...",
            icon: /* @__PURE__ */ jsx(TableRow.Icon, {
              source: findAssetId("PlusMediumIcon")
            }),
            onPress: () => {
              openAlert("blaze-add-plugin-repository", /* @__PURE__ */ jsx(AddRepositoryAlert, {}));
              hideSheet("plugin-browser-options");
            }
          })
        ]
      })
    });
  }
  function RepositoryRow(props) {
    var repo = pluginRepositories[props.url];
    var isOfficial = props.url === OFFICIAL_PLUGINS_REPO_URL;
    return /* @__PURE__ */ jsx(TableRow, {
      label: isOfficial ? "Blaze's Repository" : repo.$meta?.name ?? "Unknown",
      subLabel: props.url,
      trailing: /* @__PURE__ */ jsxs(Stack, {
        direction: "horizontal",
        children: [
          /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "secondary",
            icon: findAssetId("LinkIcon"),
            onPress: () => {
              clipboard.setString(props.url);
              showToast2.showCopyToClipboard();
            }
          }),
          /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "destructive",
            disabled: isOfficial,
            icon: findAssetId("TrashIcon"),
            onPress: () => {
              openAlert("blaze-remove-repository", /* @__PURE__ */ jsx(AlertModal, {
                title: "Remove Repository",
                content: "Are you sure you want to remove this repository?",
                extraContent: /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsx(Text, {
                    variant: "text-md/normal",
                    children: props.url
                  })
                }),
                actions: /* @__PURE__ */ jsx(AlertActions, {
                  children: /* @__PURE__ */ jsx(AlertActionButton2, {
                    text: "Remove",
                    variant: "destructive",
                    onPress: /* @__PURE__ */ _async_to_generator(function* () {
                      yield deleteRepository(props.url);
                      showToast2("Removed repository!", findAssetId("Trash"));
                      dismissAlert("blaze-remove-repository");
                    })
                  })
                })
              }));
            }
          })
        ]
      })
    });
  }
  function PluginBrowser() {
    return /* @__PURE__ */ jsx(QueryClientProvider, {
      client: queryClient,
      children: /* @__PURE__ */ jsx(BrowserPage, {})
    });
  }
  var import_react6, import_react_native24, queryClient;
  var init_PluginBrowser = __esm({
    "src/core/ui/settings/pages/PluginBrowser/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_plugins4();
      init_assets();
      init_alerts();
      init_wrappers2();
      init_sheets();
      init_toasts();
      init_constants();
      init_isValidHttpUrl();
      init_common();
      init_components();
      init_modern2();
      import_react6 = __toESM(require_react());
      import_react_native24 = __toESM(require_react_native());
      queryClient = new QueryClient();
    }
  });

  // src/core/ui/settings/pages/Plugins/index.tsx
  var Plugins_exports = {};
  __export(Plugins_exports, {
    default: () => Plugins
  });
  function PluginPage(props) {
    var items = props.useItems();
    return /* @__PURE__ */ jsx(AddonPage, {
      CardComponent: PluginCard,
      title: Strings.PLUGINS,
      searchKeywords: [
        "name",
        "description",
        (p) => p.authors?.map((a) => typeof a === "string" ? a : a.name).join() || ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_PLUGINS
      },
      items,
      ...props
    });
  }
  function Plugins() {
    useProxy(settings);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(PluginPage, {
      useItems: () => {
        useProxy(RePluginManager.plugins);
        useObservable([
          pluginSettings
        ]);
        var rePlugins = Object.values(RePluginManager.plugins).map(unifyRePlugin);
        var blzPlugins = [
          ...registeredPlugins.values()
        ].filter((p) => isPluginInstalled(p.id) && !isCorePlugin(p.id)).map(unifyBlazePlugin);
        return [
          ...rePlugins,
          ...blzPlugins
        ];
      },
      ListHeaderComponent: () => {
        var unproxiedPlugins = Object.values(RePluginManager.plugins).filter((p) => !p.id.startsWith(RELAPSED_PROXY) && !p.id.startsWith(BLAZED_PROXY));
        if (!unproxiedPlugins.length)
          return null;
        return /* @__PURE__ */ jsx(import_react_native25.View, {
          style: {
            marginVertical: 12,
            marginHorizontal: 10
          },
          children: /* @__PURE__ */ jsx(Card, {
            border: "strong",
            children: /* @__PURE__ */ jsxs(import_react_native25.View, {
              style: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native25.View, {
                  style: {
                    gap: 6,
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Text, {
                      variant: "heading-md/bold",
                      children: "Unproxied Plugins Found"
                    }),
                    /* @__PURE__ */ jsx(Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: "Plugins installed from unproxied sources may run unverified code in this app without your awareness."
                    })
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native25.View, {
                  style: {
                    marginLeft: "auto"
                  },
                  children: /* @__PURE__ */ jsx(IconButton, {
                    size: "sm",
                    variant: "secondary",
                    icon: findAssetId("CircleInformationIcon-primary"),
                    style: {
                      marginLeft: 8
                    },
                    onPress: () => {
                      navigation2.push("BLAZE_CUSTOM_PAGE", {
                        title: "Unproxied Plugins",
                        render: () => {
                          return /* @__PURE__ */ jsx(FlashList, {
                            data: unproxiedPlugins,
                            contentContainerStyle: {
                              padding: 8
                            },
                            ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native25.View, {
                              style: {
                                height: 8
                              }
                            }),
                            renderItem: ({ item: p }) => /* @__PURE__ */ jsx(Card, {
                              children: /* @__PURE__ */ jsx(Text, {
                                variant: "heading-md/semibold",
                                children: p.id
                              })
                            })
                          });
                        }
                      });
                    }
                  })
                })
              ]
            })
          })
        });
      },
      ListFooterComponent: () => /* @__PURE__ */ jsx(import_react_native25.View, {
        style: {
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 16,
          gap: 12
        },
        children: /* @__PURE__ */ jsx(Button, {
          size: "lg",
          text: "Browse Plugins",
          icon: findAssetId("CompassIcon"),
          onPress: () => {
            navigation2.push("BLAZE_CUSTOM_PAGE", {
              title: "Plugin Browser",
              render: React.lazy(() => Promise.resolve().then(() => (init_PluginBrowser(), PluginBrowser_exports)))
            });
          }
        })
      }),
      installAction: {
        label: "Install a plugin",
        fetchFn: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (url2) {
            if (!url2.startsWith(RELAPSED_PROXY) && !url2.startsWith(BLAZED_PROXY) && !settings.developerSettings) {
              openAlert2("blaze-plugin-unproxied-confirmation", /* @__PURE__ */ jsx(AlertModal3, {
                title: "Hold On!",
                content: "You're trying to install a plugin from an unproxied external source. This means you're trusting the creator to run their code in this app without your knowledge. Are you sure you want to continue?",
                extraContent: /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsx(Text, {
                    variant: "text-md/bold",
                    children: url2
                  })
                }),
                actions: /* @__PURE__ */ jsxs(AlertActions2, {
                  children: [
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Continue",
                      variant: "primary",
                      onPress: () => {
                        RePluginManager.installPlugin(url2).then(() => showToast2(Strings.TOASTS_INSTALLED_PLUGIN, findAssetId("Check"))).catch((e) => openAlert2("blaze-plugin-install-failed", /* @__PURE__ */ jsx(AlertModal3, {
                          title: "Install Failed",
                          content: `Unable to install plugin from '${url2}':`,
                          extraContent: /* @__PURE__ */ jsx(Card, {
                            children: /* @__PURE__ */ jsx(Text, {
                              variant: "text-md/normal",
                              children: e instanceof Error ? e.message : String(e)
                            })
                          }),
                          actions: /* @__PURE__ */ jsx(AlertActionButton3, {
                            text: "Okay",
                            variant: "primary"
                          })
                        })));
                      }
                    }),
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Cancel",
                      variant: "secondary"
                    })
                  ]
                })
              }));
            } else {
              return yield RePluginManager.installPlugin(url2);
            }
          });
          return function(url2) {
            return _ref.apply(this, arguments);
          };
        }()
      }
    });
  }
  var import_react_native25, openAlert2, AlertModal3, AlertActions2, AlertActionButton3;
  var init_Plugins = __esm({
    "src/core/ui/settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_PluginCard();
      init_plugins();
      init_storage();
      init_plugins4();
      init_assets();
      init_settings();
      init_storage2();
      init_toasts();
      init_constants();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      import_react_native25 = __toESM(require_react_native());
      init_blaze();
      init_relapse();
      ({ openAlert: openAlert2 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal3, AlertActions: AlertActions2, AlertActionButton: AlertActionButton3 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
    }
  });

  // src/core/ui/components/AddonCard.tsx
  function AddonCard(props) {
    var styles = useStyles3();
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native26.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native26.View, {
                style: styles.headerLeading,
                children: [
                  /* @__PURE__ */ jsx(Text, {
                    style: styles.headerLabel,
                    children: props.headerLabel
                  }),
                  props.headerSublabel && /* @__PURE__ */ jsx(Text, {
                    style: styles.headerSubtitle,
                    children: props.headerSublabel
                  })
                ]
              }),
              /* @__PURE__ */ jsxs(import_react_native26.View, {
                style: [
                  styles.headerTrailing,
                  {
                    marginLeft: "auto"
                  }
                ],
                children: [
                  /* @__PURE__ */ jsxs(import_react_native26.View, {
                    style: styles.actions,
                    children: [
                      props.overflowActions && /* @__PURE__ */ jsx(IconButton, {
                        onPress: () => showSimpleActionSheet3({
                          key: "CardOverflow",
                          header: {
                            title: props.overflowTitle,
                            icon: props.headerIcon && /* @__PURE__ */ jsx(LegacyFormRow.Icon, {
                              style: {
                                marginRight: 8
                              },
                              source: findAssetId(props.headerIcon)
                            }),
                            onClose: () => hideActionSheet2()
                          },
                          options: props.overflowActions?.map((i) => ({
                            ...i,
                            icon: findAssetId(i.icon)
                          }))
                        }),
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("CircleInformationIcon-primary")
                      }),
                      props.actions?.map(({ icon, onPress, disabled }) => /* @__PURE__ */ jsx(IconButton, {
                        onPress,
                        disabled,
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId(icon)
                      }))
                    ]
                  }),
                  props.toggleType && (props.toggleType === "switch" ? /* @__PURE__ */ jsx(FormSwitch, {
                    value: props.toggleValue(),
                    onValueChange: props.onToggleChange
                  }) : /* @__PURE__ */ jsx(import_react_native26.TouchableOpacity, {
                    onPress: () => {
                      props.onToggleChange?.(!props.toggleValue());
                    },
                    children: /* @__PURE__ */ jsx(FormRadio, {
                      selected: props.toggleValue()
                    })
                  }))
                ]
              })
            ]
          }),
          props.descriptionLabel && /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            children: props.descriptionLabel
          })
        ]
      })
    });
  }
  var import_react_native26, hideActionSheet2, showSimpleActionSheet3, useStyles3;
  var init_AddonCard = __esm({
    "src/core/ui/components/AddonCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_lazy();
      init_components();
      init_wrappers();
      init_color();
      init_styles();
      import_react_native26 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet2 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet3 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      useStyles3 = createStyles({
        card: {
          backgroundColor: semanticColors?.CARD_SECONDARY_BG,
          borderRadius: 12,
          overflow: "hidden"
        },
        header: {
          padding: 0
        },
        headerLeading: {
          flexDirection: "column",
          justifyContent: "center",
          scale: 1.2
        },
        headerTrailing: {
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center"
        },
        headerLabel: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        headerSubtitle: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_MUTED
        },
        descriptionLabel: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        actions: {
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: 5
        },
        iconStyle: {
          tintColor: semanticColors.LOGO_PRIMARY,
          opacity: 0.2,
          height: 64,
          width: 64,
          left: void 0,
          right: "30%",
          top: "-10%"
        }
      });
    }
  });

  // src/core/ui/settings/pages/Themes/ThemeCard.tsx
  function selectAndApply(value, theme) {
    try {
      selectTheme(value ? theme : null);
    } catch (e) {
      console.error("Error while selectAndApply,", e);
    }
  }
  function ThemeCard({ item: theme }) {
    useProxy(theme);
    var [removed, setRemoved] = React.useState(false);
    if (removed)
      return null;
    var { authors } = theme.data;
    return /* @__PURE__ */ jsx(AddonCard, {
      headerLabel: theme.data.name,
      headerSublabel: authors ? `by ${authors.map((i) => i.name).join(", ")}` : "",
      descriptionLabel: theme.data.description ?? "No description.",
      toggleType: !settings.safeMode?.enabled ? "radio" : void 0,
      toggleValue: () => themes[theme.id].selected,
      onToggleChange: (v2) => {
        selectAndApply(v2, theme);
      },
      overflowTitle: theme.data.name,
      overflowActions: [
        {
          icon: "ic_sync_24px",
          label: Strings.REFETCH,
          onPress: () => {
            fetchTheme(theme.id, theme.selected).then(() => {
              showToast2(Strings.THEME_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
            }).catch(() => {
              showToast2(Strings.THEME_REFETCH_FAILED, findAssetId("Small"));
            });
          }
        },
        {
          icon: "copy",
          label: Strings.COPY_URL,
          onPress: () => {
            clipboard.setString(theme.id);
            showToast2.showCopyToClipboard();
          }
        },
        {
          icon: "ic_message_delete",
          label: Strings.DELETE,
          isDestructive: true,
          onPress: () => showConfirmationAlert({
            title: Strings.HOLD_UP,
            content: formatString("ARE_YOU_SURE_TO_DELETE_THEME", {
              name: theme.data.name
            }),
            confirmText: Strings.DELETE,
            cancelText: Strings.CANCEL,
            confirmColor: "red",
            onConfirm: () => {
              removeTheme(theme.id).then((wasSelected) => {
                setRemoved(true);
                if (wasSelected)
                  selectAndApply(false, theme);
              }).catch((e) => {
                showToast2(e.message, findAssetId("Small"));
              });
            }
          })
        }
      ]
    });
  }
  var init_ThemeCard = __esm({
    "src/core/ui/settings/pages/Themes/ThemeCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonCard();
      init_alerts2();
      init_storage();
      init_themes();
      init_assets();
      init_settings();
      init_common();
      init_toasts();
    }
  });

  // src/core/ui/settings/pages/Themes/index.tsx
  var Themes_exports = {};
  __export(Themes_exports, {
    default: () => Themes
  });
  function Themes() {
    useProxy(settings);
    useProxy(themes);
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.THEMES,
      searchKeywords: [
        "data.name",
        "data.description",
        (p) => p.data.authors?.map((a) => a.name).join(", ") ?? ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.data.name.localeCompare(b3.data.name),
        "Name (Z-A)": (a, b3) => b3.data.name.localeCompare(a.data.name)
      },
      installAction: {
        label: "Install a theme",
        fetchFn: installTheme
      },
      items: Object.values(themes),
      safeModeHint: {
        message: formatString("SAFE_MODE_NOTICE_THEMES", {
          enabled: Boolean(settings.safeMode?.currentThemeId)
        }),
        footer: settings.safeMode?.currentThemeId && /* @__PURE__ */ jsx(Button, {
          size: "small",
          text: Strings.DISABLE_THEME,
          onPress: () => delete settings.safeMode?.currentThemeId,
          style: {
            marginTop: 8
          }
        })
      },
      CardComponent: ThemeCard,
      OptionsActionSheetComponent: () => {
        useObservable([
          colorsPref
        ]);
        return /* @__PURE__ */ jsxs(ActionSheet, {
          children: [
            /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
              title: "Options"
            }),
            /* @__PURE__ */ jsxs(import_react_native27.View, {
              style: {
                paddingVertical: 20,
                gap: 12
              },
              children: [
                /* @__PURE__ */ jsxs(TableRadioGroup, {
                  title: "Override Theme Type",
                  value: colorsPref.type ?? "auto",
                  hasIcons: true,
                  onChange: (type) => {
                    colorsPref.type = type !== "auto" ? type : void 0;
                    getCurrentTheme()?.data && updateBlazeColor(getCurrentTheme().data, {
                      update: true
                    });
                  },
                  children: [
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("RobotIcon")
                      }),
                      label: "Auto",
                      value: "auto"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ThemeDarkIcon")
                      }),
                      label: "Dark",
                      value: "dark"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ThemeLightIcon")
                      }),
                      label: "Light",
                      value: "light"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs(TableRadioGroup, {
                  title: "Chat Background",
                  value: colorsPref.customBackground ?? "shown",
                  hasIcons: true,
                  onChange: (type) => {
                    colorsPref.customBackground = type !== "shown" ? type : null;
                  },
                  children: [
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ImageIcon")
                      }),
                      label: "Show",
                      value: "shown"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("DenyIcon")
                      }),
                      label: "Hide",
                      value: "hidden"
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    });
  }
  var import_react_native27;
  var init_Themes = __esm({
    "src/core/ui/settings/pages/Themes/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_ThemeCard();
      init_storage();
      init_themes();
      init_preferences();
      init_updater();
      init_assets();
      init_settings();
      init_storage2();
      init_components();
      import_react_native27 = __toESM(require_react_native());
    }
  });

  // src/lib/addons/fonts/index.ts
  var fonts_exports = {};
  __export(fonts_exports, {
    fonts: () => fonts,
    installFont: () => installFont,
    removeFont: () => removeFont,
    saveFont: () => saveFont,
    selectFont: () => selectFont,
    updateFont: () => updateFont,
    updateFonts: () => updateFonts,
    validateFont: () => validateFont
  });
  function writeFont(font) {
    return _writeFont.apply(this, arguments);
  }
  function _writeFont() {
    _writeFont = _async_to_generator(function* (font) {
      if (!font && font !== null)
        throw new Error("Arg font must be a valid object or null");
      if (font) {
        yield writeFile("fonts.json", JSON.stringify(font));
      } else {
        yield removeFile("fonts.json");
      }
    });
    return _writeFont.apply(this, arguments);
  }
  function validateFont(font) {
    if (!font || typeof font !== "object")
      throw new Error("URL returned a null/non-object JSON");
    if (typeof font.spec !== "number")
      throw new Error("Invalid font 'spec' number");
    if (font.spec !== 1)
      throw new Error("Only fonts which follows spec:1 are supported");
    var requiredFields = [
      "name",
      "main"
    ];
    if (requiredFields.some((f) => !font[f]))
      throw new Error(`Font is missing one of the fields: ${requiredFields}`);
    if (font.name.startsWith("__"))
      throw new Error("Font names cannot start with __");
    if (font.name in fonts)
      throw new Error(`There is already a font named '${font.name}' installed`);
  }
  function saveFont(data) {
    return _saveFont.apply(this, arguments);
  }
  function _saveFont() {
    _saveFont = _async_to_generator(function* (data, selected = false) {
      var fontDefJson;
      if (typeof data === "string") {
        try {
          fontDefJson = yield (yield safeFetch(data)).json();
        } catch (e) {
          throw new Error(`Failed to fetch fonts at ${data}`, {
            cause: e
          });
        }
      } else {
        fontDefJson = data;
      }
      validateFont(fontDefJson);
      var errors = yield allSettled(Object.entries(fontDefJson.main).map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* ([font, url2]) {
          var ext = url2.split(".").pop();
          if (ext !== "ttf" && ext !== "otf")
            ext = "ttf";
          var path = `downloads/fonts/${fontDefJson.name}/${font}.${ext}`;
          if (!(yield fileExists(path)))
            yield downloadFile(url2, path);
        });
        return function(_2) {
          return _ref.apply(this, arguments);
        };
      }())).then((it) => it.map((it2) => it2.status === "fulfilled" ? void 0 : it2.reason));
      if (errors.some((it) => it))
        throw errors;
      fonts[fontDefJson.name] = fontDefJson;
      if (selected)
        writeFont(fonts[fontDefJson.name]);
      return fontDefJson;
    });
    return _saveFont.apply(this, arguments);
  }
  function updateFont(fontDef) {
    return _updateFont.apply(this, arguments);
  }
  function _updateFont() {
    _updateFont = _async_to_generator(function* (fontDef) {
      var fontDefCopy = {
        ...fontDef
      };
      if (fontDefCopy.source)
        fontDefCopy = {
          ...yield fetch(fontDefCopy.source).then((it) => it.json()),
          // Can't change these properties
          name: fontDef.name,
          source: fontDef.source
        };
      var selected = fonts.__selected === fontDef.name;
      yield removeFont(fontDef.name);
      yield saveFont(fontDefCopy, selected);
    });
    return _updateFont.apply(this, arguments);
  }
  function installFont(url2) {
    return _installFont.apply(this, arguments);
  }
  function _installFont() {
    _installFont = _async_to_generator(function* (url2, selected = false) {
      var font = yield saveFont(url2);
      if (selected)
        yield selectFont(font.name);
    });
    return _installFont.apply(this, arguments);
  }
  function selectFont(name) {
    return _selectFont.apply(this, arguments);
  }
  function _selectFont() {
    _selectFont = _async_to_generator(function* (name) {
      if (name && !(name in fonts))
        throw new Error("Selected font does not exist!");
      if (name) {
        fonts.__selected = name;
      } else {
        delete fonts.__selected;
      }
      yield writeFont(name == null ? null : fonts[name]);
    });
    return _selectFont.apply(this, arguments);
  }
  function removeFont(name) {
    return _removeFont.apply(this, arguments);
  }
  function _removeFont() {
    _removeFont = _async_to_generator(function* (name) {
      var selected = fonts.__selected === name;
      if (selected)
        yield selectFont(null);
      delete fonts[name];
      try {
        yield clearFolder(`downloads/fonts/${name}`);
      } catch (e) {
      }
    });
    return _removeFont.apply(this, arguments);
  }
  function updateFonts() {
    return _updateFonts.apply(this, arguments);
  }
  function _updateFonts() {
    _updateFonts = _async_to_generator(function* () {
      yield awaitStorage(fonts);
      yield allSettled(Object.keys(fonts).map((name) => saveFont(fonts[name], fonts.__selected === name)));
    });
    return _updateFonts.apply(this, arguments);
  }
  var fonts;
  var init_fonts = __esm({
    "src/lib/addons/fonts/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_utils();
      fonts = wrapSync(createStorage(createMMKVBackend("BLAZE_FONTS")));
    }
  });

  // src/core/ui/settings/pages/Fonts/FontEditor.tsx
  function promptDetachConfirmationForThen(fontName, cb) {
    if (fontName && fonts[fontName].source)
      openAlert3("blazecord-fonts-detach-source-confirmation", /* @__PURE__ */ jsx(AlertModal4, {
        title: "Detach font pack URL?",
        content: "You need to detach the font pack URL from this font pack before you can manually edit its font entries. Do you want to detach the font pack URL?",
        actions: /* @__PURE__ */ jsxs(Stack, {
          children: [
            /* @__PURE__ */ jsx(AlertActionButton4, {
              text: "Detach",
              variant: "destructive",
              onPress: () => {
                delete fonts[fontName].source;
                cb();
              }
            }),
            /* @__PURE__ */ jsx(AlertActionButton4, {
              text: Strings.CANCEL,
              variant: "secondary"
            })
          ]
        })
      }));
    else
      cb();
  }
  function guessFontName(urls) {
    var fileNames = urls.map((url2) => {
      var { pathname } = new URL(url2);
      var fileName = pathname.replace(/\.[^/.]+$/, "");
      return fileName.split("/").pop();
    }).filter(Boolean);
    var shortest = fileNames.reduce((shortest2, name) => {
      return name.length < shortest2.length ? name : shortest2;
    }, fileNames[0] || "");
    return shortest?.replace(/-[A-Za-z]*$/, "") || null;
  }
  function BlazeCordFontsExtractor({ fonts: fonts2, setName }) {
    var currentTheme = getCurrentTheme().data;
    var themeFonts = currentTheme.fonts;
    var [fontName, setFontName] = (0, import_react7.useState)(guessFontName(Object.values(themeFonts)));
    var [error, setError] = (0, import_react7.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native28.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: Strings.FONT_NAME,
          value: fontName,
          placeholder: fontName || "Whitney",
          onChange: setFontName,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: formatString("THEME_EXTRACTOR_DESC", {
            fonts: Object.keys(themeFonts).join(Strings.SEPARATOR)
          })
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: Strings.EXTRACT,
          disabled: !fontName,
          onPress: () => {
            if (!fontName)
              return;
            try {
              validateFont({
                spec: 1,
                name: fontName,
                main: themeFonts
              });
              setName(fontName);
              Object.assign(fonts2, themeFonts);
              actionSheet2.hideActionSheet();
            } catch (e) {
              setError(String(e));
            }
          }
        })
      ]
    });
  }
  function JsonFontImporter({ fonts: fonts2, setName, setSource }) {
    var [fontLink, setFontLink] = (0, import_react7.useState)("");
    var [saving, setSaving] = (0, import_react7.useState)(false);
    var [error, setError] = (0, import_react7.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native28.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Font Link",
          value: fontLink,
          placeholder: "https://link.to/font/pack.json",
          onChange: setFontLink,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Import",
          disabled: !fontLink || saving,
          loading: saving,
          onPress: () => {
            setSaving(true);
            _async_to_generator(function* () {
              var res = yield safeFetch(fontLink, {
                cache: "no-store"
              });
              var json = yield res.json();
              validateFont(json);
              setName(json.name);
              setSource(fontLink);
              Object.assign(fonts2, json.main);
            })().then(() => actionSheet2.hideActionSheet()).catch((e) => setError(String(e))).finally(() => setSaving(false));
          }
        })
      ]
    });
  }
  function EntryEditorActionSheet(props) {
    var [familyName, setFamilyName] = (0, import_react7.useState)(props.name);
    var [fontUrl, setFontUrl] = (0, import_react7.useState)(props.fontEntries[props.name]);
    return /* @__PURE__ */ jsxs(import_react_native28.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Family Name (to override)",
          value: familyName,
          placeholder: "ggsans-Bold",
          onChange: setFamilyName
        }),
        /* @__PURE__ */ jsx(TextInput, {
          size: "md",
          label: "Font URL",
          value: fontUrl,
          placeholder: "https://link.to/the/font.ttf",
          onChange: setFontUrl
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Apply",
          onPress: () => {
            delete props.fontEntries[props.name];
            props.fontEntries[familyName] = fontUrl;
            props.onChange();
            actionSheet2.hideActionSheet();
          }
        })
      ]
    });
  }
  function promptActionSheet(Component, fontEntries, props) {
    actionSheet2.openLazy(Promise.resolve({
      default: () => /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsxs(ActionSheet, {
          children: [
            /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
              title: "Import Font"
            }),
            /* @__PURE__ */ jsx(Component, {
              fonts: fontEntries,
              ...props
            })
          ]
        })
      })
    }), "FontEditorActionSheet");
  }
  function NewEntryRow({ fontName, fontEntry }) {
    var nameRef = (0, import_react7.useRef)();
    var urlRef = (0, import_react7.useRef)();
    var [nameSet, setNameSet] = (0, import_react7.useState)(false);
    var [error, setError] = (0, import_react7.useState)();
    return /* @__PURE__ */ jsxs(import_react_native28.View, {
      style: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-start"
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native28.View, {
          style: {
            flex: 1
          },
          children: /* @__PURE__ */ jsx(TextInput, {
            isRound: true,
            size: "md",
            label: nameSet ? nameRef.current : void 0,
            placeholder: nameSet ? "https://path.to/the/file.ttf" : "PostScript name (e.g. ggsans-Bold)",
            leadingIcon: () => nameSet ? null : /* @__PURE__ */ jsx(TableRow.Icon, {
              source: findAssetId("PlusSmallIcon")
            }),
            leadingText: nameSet ? nameRef.current : "",
            onChange: (text) => (nameSet ? urlRef : nameRef).current = text,
            errorMessage: error,
            state: error ? "error" : void 0
          })
        }),
        nameSet && /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "secondary",
          onPress: () => {
            nameRef.current = "";
            setNameSet(false);
          },
          icon: findAssetId("TrashIcon")
        }),
        /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "primary",
          onPress: () => promptDetachConfirmationForThen(fontName, () => {
            if (!nameSet && nameRef.current) {
              setNameSet(true);
            } else if (nameSet && nameRef.current && urlRef.current) {
              try {
                var parsedUrl = new URL(urlRef.current);
                if (!parsedUrl.protocol || !parsedUrl.host) {
                  throw "Invalid URL";
                }
                fontEntry[nameRef.current] = urlRef.current;
                nameRef.current = void 0;
                urlRef.current = void 0;
                setNameSet(false);
              } catch (e) {
                setError(String(e));
              }
            }
          }),
          icon: findAssetId(nameSet ? "PlusSmallIcon" : "ArrowLargeRightIcon")
        })
      ]
    });
  }
  function FontEditor(props) {
    var [name, setName] = (0, import_react7.useState)(props.name);
    var [source, setSource] = (0, import_react7.useState)(props.name && fonts[props.name].source);
    var [importing, setIsImporting] = (0, import_react7.useState)(false);
    var [errors, setErrors] = (0, import_react7.useState)();
    var memoEntry = (0, import_react7.useMemo)(() => {
      return createProxy(props.name ? {
        ...fonts[props.name].main
      } : {}).proxy;
    }, [
      props.name
    ]);
    var fontEntries = useProxy(memoEntry);
    var navigation2 = NavigationNative.useNavigation();
    var [, forceUpdate] = React.useReducer(() => ({}), 0);
    return /* @__PURE__ */ jsx(import_react_native28.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 12,
        children: [
          !props.name ? /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Import",
            children: [
              getCurrentTheme()?.data?.fonts && /* @__PURE__ */ jsx(TableRow, {
                label: Strings.LABEL_EXTRACT_FONTS_FROM_THEME,
                subLabel: Strings.DESC_EXTRACT_FONTS_FROM_THEME,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("HammerIcon")
                }),
                onPress: () => promptActionSheet(BlazeCordFontsExtractor, fontEntries, {
                  setName
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Import font entries from a link",
                subLabel: "Directly import from a link with a pre-configured JSON file",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => promptActionSheet(JsonFontImporter, fontEntries, {
                  setName,
                  setSource
                })
              })
            ]
          }) : /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Actions",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Refetch fonts from source",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  yield updateFont(fonts[props.name]);
                  navigation2.goBack();
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                variant: "danger",
                label: "Delete font pack",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("TrashIcon")
                }),
                onPress: () => removeFont(props.name).then(() => navigation2.goBack())
              })
            ]
          }),
          /* @__PURE__ */ jsx(TextInput, {
            size: "lg",
            value: name,
            label: Strings.FONT_NAME,
            placeholder: "Whitney",
            onChange: setName
          }),
          props.name && fonts[props.name].source && /* @__PURE__ */ jsx(TextInput, {
            size: "lg",
            value: source,
            label: "Font Pack URL",
            onChange: setSource
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Font Entries",
            children: [
              Object.entries(fontEntries).map(([name2, url2], index) => {
                var error = errors?.[index];
                return /* @__PURE__ */ jsx(TableRow, {
                  label: name2,
                  subLabel: error ? /* @__PURE__ */ jsx(Text, {
                    variant: "text-xs/medium",
                    color: "text-danger",
                    children: error.message
                  }) : url2,
                  trailing: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 8,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("PencilIcon"),
                        onPress: () => promptDetachConfirmationForThen(props.name, () => promptActionSheet(EntryEditorActionSheet, fontEntries, {
                          name: name2,
                          fontEntries,
                          onChange: () => {
                            setErrors(void 0);
                            forceUpdate();
                          }
                        }))
                      }),
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("TrashIcon"),
                        onPress: () => promptDetachConfirmationForThen(props.name, () => {
                          delete fontEntries[name2];
                          setErrors(void 0);
                        })
                      })
                    ]
                  })
                });
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: /* @__PURE__ */ jsx(NewEntryRow, {
                  fontName: props.name,
                  fontEntry: fontEntries
                })
              })
            ]
          }),
          errors && /* @__PURE__ */ jsx(Text, {
            variant: "text-sm/medium",
            color: "text-danger",
            children: "Some font entries cannot be imported. Please modify the entries and try again."
          }),
          /* @__PURE__ */ jsx(import_react_native28.View, {
            style: {
              flexDirection: "row",
              justifyContent: "flex-end",
              bottom: 0,
              left: 0
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "lg",
              loading: importing,
              disabled: importing || !name || Object.keys(fontEntries).length === 0,
              variant: "primary",
              text: props.name ? "Save" : "Import",
              onPress: /* @__PURE__ */ _async_to_generator(function* () {
                if (!name)
                  return;
                setErrors(void 0);
                setIsImporting(true);
                if (!props.name) {
                  saveFont({
                    spec: 1,
                    name,
                    main: fontEntries,
                    source
                  }).then(() => navigation2.goBack()).catch((e) => setErrors(e)).finally(() => setIsImporting(false));
                } else {
                  Object.assign(fonts[props.name], {
                    name,
                    main: fontEntries
                  });
                  updateFont(fonts[props.name]).then(() => navigation2.goBack()).catch((e) => setErrors(e)).finally(() => setIsImporting(false));
                }
              }),
              icon: findAssetId(props.name ? "toast_image_saved" : "DownloadIcon"),
              style: {
                marginLeft: 8
              }
            })
          })
        ]
      })
    });
  }
  var import_react7, import_react_native28, actionSheet2, openAlert3, AlertModal4, AlertActionButton4;
  var init_FontEditor = __esm({
    "src/core/ui/settings/pages/Fonts/FontEditor.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_storage();
      init_fonts();
      init_themes();
      init_assets();
      init_utils();
      init_lazy();
      init_common();
      init_components();
      init_wrappers();
      init_components2();
      import_react7 = __toESM(require_react());
      import_react_native28 = __toESM(require_react_native());
      actionSheet2 = findByPropsLazy("hideActionSheet");
      ({ openAlert: openAlert3 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal4, AlertActionButton: AlertActionButton4 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
    }
  });

  // globals:@shopify/react-native-skia
  var require_react_native_skia = __commonJS({
    "globals:@shopify/react-native-skia"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["@shopify/react-native-skia"];
    }
  });

  // src/core/ui/settings/pages/Fonts/FontCard.tsx
  function FontPreview({ font }) {
    var TEXT_NORMAL = useToken2(tokens.colors.TEXT_NORMAL);
    var { fontFamily: fontFamilyList, fontSize } = TextStyleSheet["text-md/medium"];
    var fontFamily = fontFamilyList.split(/,/g)[0];
    var typeface = Skia.useFont(font.main[fontFamily])?.getTypeface();
    var paragraph = (0, import_react8.useMemo)(() => {
      if (!typeface)
        return null;
      var fMgr = SkiaApi.TypefaceFontProvider.Make();
      fMgr.registerFont(typeface, fontFamily);
      return SkiaApi.ParagraphBuilder.Make({}, fMgr).pushStyle({
        color: SkiaApi.Color(TEXT_NORMAL),
        fontFamilies: [
          fontFamily
        ],
        fontSize
      }).addText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.").pop().build();
    }, [
      typeface
    ]);
    return (
      // This does not work, actually :woeis:
      /* @__PURE__ */ jsx(import_react_native29.View, {
        style: {
          height: 64
        },
        children: typeface ? /* @__PURE__ */ jsx(Skia.Canvas, {
          style: {
            height: 64
          },
          children: /* @__PURE__ */ jsx(Skia.Paragraph, {
            paragraph,
            x: 0,
            y: 0,
            width: 300
          })
        }) : /* @__PURE__ */ jsx(import_react_native29.View, {
          style: {
            justifyContent: "center",
            alignItems: "center"
          },
          children: /* @__PURE__ */ jsx(Text, {
            color: "text-muted",
            variant: "heading-lg/semibold",
            children: "Loading..."
          })
        })
      })
    );
  }
  function FontCard({ item: font }) {
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    var selected = fonts.__selected === font.name;
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native29.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native29.View, {
                children: /* @__PURE__ */ jsx(Text, {
                  variant: "heading-lg/semibold",
                  children: font.name
                })
              }),
              /* @__PURE__ */ jsx(import_react_native29.View, {
                style: {
                  marginLeft: "auto"
                },
                children: /* @__PURE__ */ jsxs(Stack, {
                  spacing: 12,
                  direction: "horizontal",
                  children: [
                    /* @__PURE__ */ jsx(IconButton, {
                      onPress: () => {
                        navigation2.push("BLAZE_CUSTOM_PAGE", {
                          title: "Edit Font",
                          render: () => /* @__PURE__ */ jsx(FontEditor, {
                            name: font.name
                          })
                        });
                      },
                      size: "sm",
                      variant: "secondary",
                      disabled: selected,
                      icon: findAssetId("WrenchIcon")
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      size: "sm",
                      variant: selected ? "secondary" : "primary",
                      text: selected ? "Unapply" : "Apply",
                      onPress: /* @__PURE__ */ _async_to_generator(function* () {
                        yield selectFont(selected ? null : font.name);
                        showConfirmationAlert({
                          title: Strings.HOLD_UP,
                          content: "Reload Discord to apply changes?",
                          confirmText: Strings.RELOAD,
                          cancelText: Strings.CANCEL,
                          confirmColor: "red",
                          onConfirm: BundleUpdaterManager.reload
                        });
                      })
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(FontPreview, {
            font
          })
        ]
      })
    });
  }
  var Skia, import_react8, import_react_native29, useToken2;
  var init_FontCard = __esm({
    "src/core/ui/settings/pages/Fonts/FontCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_storage();
      init_fonts();
      init_assets();
      init_modules();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      Skia = __toESM(require_react_native_skia());
      init_styles();
      import_react8 = __toESM(require_react());
      import_react_native29 = __toESM(require_react_native());
      init_FontEditor();
      ({ useToken: useToken2 } = lazyDestructure(() => findByProps("useToken")));
    }
  });

  // src/core/ui/settings/pages/Fonts/index.tsx
  var Fonts_exports = {};
  __export(Fonts_exports, {
    default: () => Fonts
  });
  function Fonts() {
    useProxy(settings);
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.FONTS,
      searchKeywords: [
        "name",
        "description"
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      items: Object.values(fonts),
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_FONTS
      },
      CardComponent: FontCard,
      installAction: {
        label: "Install a font",
        onPress: () => {
          navigation2.push("BLAZE_CUSTOM_PAGE", {
            title: "Import Font",
            render: () => /* @__PURE__ */ jsx(FontEditor, {})
          });
        }
      }
    });
  }
  var init_Fonts = __esm({
    "src/core/ui/settings/pages/Fonts/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_FontEditor();
      init_storage();
      init_fonts();
      init_settings();
      init_common();
      init_FontCard();
    }
  });

  // src/core/ui/hooks/useFS.ts
  function useFileExists(path, prefix) {
    var [state, setState] = (0, import_react9.useState)(2);
    var check = () => fileExists(path, {
      prefix
    }).then((exists) => setState(exists ? 1 : 0)).catch(() => setState(3));
    var customFS = (0, import_react9.useMemo)(() => new Proxy(fs_exports, {
      get(target, p, receiver) {
        var val = Reflect.get(target, p, receiver);
        if (typeof val !== "function")
          return;
        return (...args) => {
          var promise = (check(), val(...args));
          if (promise?.constructor?.name === "Promise") {
            setState(2);
            promise.finally(check);
          }
          return promise;
        };
      }
    }), []);
    (0, import_react9.useEffect)(() => void check(), []);
    return [
      state,
      customFS
    ];
  }
  var import_react9, CheckState;
  var init_useFS = __esm({
    "src/core/ui/hooks/useFS.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
      import_react9 = __toESM(require_react());
      (function(CheckState2) {
        CheckState2[CheckState2["FALSE"] = 0] = "FALSE";
        CheckState2[CheckState2["TRUE"] = 1] = "TRUE";
        CheckState2[CheckState2["LOADING"] = 2] = "LOADING";
        CheckState2[CheckState2["ERROR"] = 3] = "ERROR";
      })(CheckState || (CheckState = {}));
    }
  });

  // src/core/ui/settings/pages/Developer/AssetDisplay.tsx
  function AssetDisplay({ asset }) {
    return /* @__PURE__ */ jsx(TableRow, {
      variant: displayable.has(asset.type) ? "default" : "danger",
      label: asset.name,
      subLabel: `Index: ${asset.id} Type: ${asset.type}`,
      icon: displayable.has(asset.type) ? /* @__PURE__ */ jsx(import_react_native30.Image, {
        source: asset.id,
        style: {
          width: 32,
          height: 32
        }
      }) : /* @__PURE__ */ jsx(TableRow.Icon, {
        variant: "danger",
        source: findAssetId(asset.type in iconMap ? iconMap[asset.type] : iconMap.default)
      }),
      onPress: () => openAlert4("blazecord-asset-display-details", /* @__PURE__ */ jsx(AlertModal5, {
        title: asset.name,
        content: `Index: ${asset.id}
Module ID: ${asset.moduleId}
Type: ${asset.type}`,
        extraContent: displayable.has(asset.type) ? /* @__PURE__ */ jsx(import_react_native30.Image, {
          resizeMode: "contain",
          source: asset.id,
          style: {
            flex: 1,
            width: "auto",
            height: 192
          }
        }) : /* @__PURE__ */ jsxs(Text, {
          variant: "text-sm/medium",
          color: "text-danger",
          style: {
            width: "100%",
            textAlign: "center"
          },
          children: [
            "Asset type ",
            asset.type.toUpperCase(),
            " is not supported for preview."
          ]
        }),
        actions: /* @__PURE__ */ jsxs(Stack, {
          children: [
            /* @__PURE__ */ jsx(AlertActionButton5, {
              text: "Copy asset name",
              variant: "primary",
              onPress: () => copyToClipboard(asset.name)
            }),
            /* @__PURE__ */ jsx(AlertActionButton5, {
              text: "Copy asset index",
              variant: "secondary",
              onPress: () => copyToClipboard(asset.id.toString())
            })
          ]
        })
      }))
    });
  }
  var import_react_native30, openAlert4, AlertModal5, AlertActionButton5, displayable, iconMap, copyToClipboard;
  var init_AssetDisplay = __esm({
    "src/core/ui/settings/pages/Developer/AssetDisplay.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_toasts();
      import_react_native30 = __toESM(require_react_native());
      ({ openAlert: openAlert4 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal5, AlertActionButton: AlertActionButton5 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
      displayable = /* @__PURE__ */ new Set([
        "png",
        "jpg",
        "svg"
      ]);
      iconMap = {
        jsona: "ic_file_text",
        lottie: "ic_image",
        webm: "CirclePlayIcon-primary",
        ttf: "ic_add_text",
        default: "UnknownGameIcon"
      };
      copyToClipboard = (text) => {
        clipboard.setString(text);
        showToast2.showCopyToClipboard();
      };
    }
  });

  // src/core/ui/settings/pages/Developer/AssetBrowser.tsx
  function AssetBrowser() {
    var [search, setSearch] = React.useState("");
    var all = (0, import_react10.useMemo)(() => Array.from(iterateAssets()), []);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsxs(import_react_native31.View, {
        style: {
          flex: 1
        },
        children: [
          /* @__PURE__ */ jsx(Search_default, {
            style: {
              margin: 10
            },
            onChangeText: (v2) => setSearch(v2)
          }),
          /* @__PURE__ */ jsxs(import_react_native31.View, {
            style: {
              flex: 1,
              borderRadius: 16,
              paddingHorizontal: 12,
              overflow: "hidden",
              backgroundColor: "transparent"
            },
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "text-sm/medium",
                color: "text-danger",
                style: {
                  marginBottom: 16
                },
                children: "Some assets types cannot be displayed and will be marked in red."
              }),
              /* @__PURE__ */ jsx(import_react_native31.FlatList, {
                data: all.filter((a) => a.name.includes(search) || a.id.toString() === search),
                renderItem: ({ item }) => /* @__PURE__ */ jsx(AssetDisplay, {
                  asset: item
                }),
                contentContainerStyle: {
                  overflow: "hidden",
                  backgroundColor: "transparent",
                  borderRadius: 16
                },
                keyExtractor: (a) => a.name
              })
            ]
          })
        ]
      })
    });
  }
  var import_react10, import_react_native31;
  var init_AssetBrowser = __esm({
    "src/core/ui/settings/pages/Developer/AssetBrowser.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_AssetDisplay();
      init_assets();
      init_components();
      init_components2();
      import_react10 = __toESM(require_react());
      import_react_native31 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Developer/index.tsx
  var Developer_exports = {};
  __export(Developer_exports, {
    default: () => Developer
  });
  function Developer() {
    var [rdtFileExists, fs] = useFileExists("preloads/reactDevtools.js");
    var styles = useStyles4();
    var navigation2 = NavigationNative.useNavigation();
    useProxy(settings);
    useProxy(loaderConfig);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(import_react_native33.ScrollView, {
        style: {
          flex: 1
        },
        contentContainerStyle: {
          paddingBottom: 38
        },
        children: /* @__PURE__ */ jsxs(Stack, {
          style: {
            paddingVertical: 24,
            paddingHorizontal: 12
          },
          spacing: 24,
          children: [
            /* @__PURE__ */ jsx(TextInput, {
              label: Strings.DEBUGGER_URL,
              placeholder: "127.0.0.1:9090",
              size: "md",
              leadingIcon: () => /* @__PURE__ */ jsx(LegacyFormText, {
                style: styles.leadingText,
                children: "ws://"
              }),
              defaultValue: settings.debuggerUrl,
              onChange: (v2) => settings.debuggerUrl = v2
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: Strings.DEBUG,
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.CONNECT_TO_DEBUG_WEBSOCKET,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("copy")
                  }),
                  onPress: () => connectToDebugger(settings.debuggerUrl)
                }),
                isReactDevToolsPreloaded() && /* @__PURE__ */ jsx(Fragment, {
                  children: /* @__PURE__ */ jsx(TableRow, {
                    label: Strings.CONNECT_TO_REACT_DEVTOOLS,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    onPress: () => window[getReactDevToolsProp() || "__relapse_rdc"]?.connectToDevTools({
                      host: settings.debuggerUrl.split(":")?.[0],
                      resolveRNStyle: import_react_native33.StyleSheet.flatten
                    })
                  })
                })
              ]
            }),
            isLoaderConfigSupported() && /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsxs(TableRowGroup, {
                title: "Loader config",
                children: [
                  /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_FROM_CUSTOM_URL,
                    subLabel: Strings.LOAD_FROM_CUSTOM_URL_DEC,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("copy")
                    }),
                    value: loaderConfig.customLoadUrl.enabled,
                    onValueChange: (v2) => {
                      loaderConfig.customLoadUrl.enabled = v2;
                    }
                  }),
                  loaderConfig.customLoadUrl.enabled && /* @__PURE__ */ jsx(TableRow, {
                    label: /* @__PURE__ */ jsx(TextInput, {
                      defaultValue: loaderConfig.customLoadUrl.url,
                      size: "md",
                      onChange: (v2) => loaderConfig.customLoadUrl.url = v2,
                      placeholder: "http://localhost:4040/relapse.js",
                      label: Strings.BLAZE_URL
                    })
                  }),
                  isReactDevToolsPreloaded() && isRelapseLoader() && /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_REACT_DEVTOOLS,
                    subLabel: `${Strings.VERSION}: ${getReactDevToolsVersion()}`,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    value: loaderConfig.loadReactDevTools,
                    onValueChange: (v2) => {
                      loaderConfig.loadReactDevTools = v2;
                    }
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: "Other",
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.CLEAR_BUNDLE,
                  subLabel: Strings.CLEAR_BUNDLE_DESC,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("trash")
                  }),
                  onPress: () => {
                    openAlert5("blazecord-clear-bundle-reload-confirmation", /* @__PURE__ */ jsx(AlertModal6, {
                      title: Strings.MODAL_RELOAD_REQUIRED,
                      content: Strings.MODAL_RELOAD_REQUIRED_DESC,
                      actions: /* @__PURE__ */ jsxs(Stack, {
                        children: [
                          /* @__PURE__ */ jsx(AlertActionButton6, {
                            text: Strings.RELOAD,
                            variant: "destructive",
                            onPress: () => import_react_native32.NativeModules.BundleUpdaterManager.reload()
                          }),
                          /* @__PURE__ */ jsx(AlertActionButton6, {
                            text: Strings.CANCEL,
                            variant: "secondary"
                          })
                        ]
                      })
                    }));
                  }
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  arrow: true,
                  label: Strings.ASSET_BROWSER,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("ic_image")
                  }),
                  trailing: TableRow.Arrow,
                  onPress: () => navigation2.push("BLAZE_CUSTOM_PAGE", {
                    title: Strings.ASSET_BROWSER,
                    render: AssetBrowser
                  })
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  arrow: true,
                  label: Strings.ERROR_BOUNDARY_TOOLS_LABEL,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("ic_warning_24px")
                  }),
                  onPress: () => showSimpleActionSheet4({
                    key: "ErrorBoundaryTools",
                    header: {
                      title: "Which ErrorBoundary do you want to trip?",
                      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                        style: {
                          marginRight: 8
                        },
                        source: findAssetId("ic_warning_24px")
                      }),
                      onClose: () => hideActionSheet3()
                    },
                    options: [
                      // @ts-expect-error
                      // Of course, to trigger an error, we need to do something incorrectly. The below will do!
                      {
                        label: Strings.BLAZE,
                        onPress: () => navigation2.push("BLAZE_CUSTOM_PAGE", {
                          render: () => /* @__PURE__ */ jsx("undefined", {})
                        })
                      },
                      {
                        label: "Discord",
                        isDestructive: true,
                        onPress: () => navigation2.push("BLAZE_CUSTOM_PAGE", {
                          noErrorBoundary: true
                        })
                      }
                    ]
                  })
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.INSTALL_REACT_DEVTOOLS,
                  subLabel: Strings.RESTART_REQUIRED_TO_TAKE_EFFECT,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("DownloadIcon")
                  }),
                  trailing: /* @__PURE__ */ jsx(Button, {
                    size: "sm",
                    loading: rdtFileExists === CheckState.LOADING,
                    disabled: rdtFileExists === CheckState.LOADING,
                    variant: rdtFileExists === CheckState.TRUE ? "secondary" : "primary",
                    text: rdtFileExists === CheckState.TRUE ? Strings.UNINSTALL : Strings.INSTALL,
                    onPress: /* @__PURE__ */ _async_to_generator(function* () {
                      if (rdtFileExists === CheckState.FALSE) {
                        fs.downloadFile(RDT_EMBED_LINK, "preloads/reactDevtools.js");
                      } else if (rdtFileExists === CheckState.TRUE) {
                        fs.removeFile("preloads/reactDevtools.js");
                      }
                    }),
                    icon: findAssetId(rdtFileExists === CheckState.TRUE ? "ic_message_delete" : "DownloadIcon"),
                    style: {
                      marginLeft: 8
                    }
                  })
                }),
                /* @__PURE__ */ jsx(TableSwitchRow, {
                  label: Strings.ENABLE_EVAL_COMMAND,
                  subLabel: Strings.ENABLE_EVAL_COMMAND_DESC,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("PencilIcon")
                  }),
                  value: !!settings.enableEvalCommand,
                  onValueChange: (v2) => {
                    settings.enableEvalCommand = v2;
                  }
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native32, import_react_native33, hideActionSheet3, showSimpleActionSheet4, openAlert5, AlertModal6, AlertActionButton6, RDT_EMBED_LINK, useStyles4;
  var init_Developer = __esm({
    "src/core/ui/settings/pages/Developer/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_useFS();
      init_AssetBrowser();
      init_storage();
      init_assets();
      init_debug();
      init_loader();
      init_settings();
      init_lazy();
      init_common();
      init_components();
      init_wrappers();
      init_color();
      init_components2();
      init_styles();
      import_react_native32 = __toESM(require_react_native());
      import_react_native33 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet3 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet4 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      ({ openAlert: openAlert5 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal6, AlertActionButton: AlertActionButton6 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
      RDT_EMBED_LINK = "https://github.com/BlazeK1ng420/BlazeK1ng420.github.io/releases/download/RDC/rdc.js";
      useStyles4 = createStyles({
        leadingText: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_MUTED,
          marginRight: -4
        }
      });
    }
  });

  // src/core/ui/settings/index.ts
  function initSettings() {
    if (settingsInitialized)
      return;
    settingsInitialized = true;
    registerSection({
      name: Strings.BLAZE,
      items: [
        {
          key: "BLAZE",
          title: () => Strings.BLAZE,
          icon: {
            uri: blazecord_default
          },
          render: () => Promise.resolve().then(() => (init_General(), General_exports)),
          useTrailing: () => `(${"d1e4094-local"})`
        },
        {
          key: "BLAZE_PLUGINS",
          title: () => Strings.PLUGINS,
          icon: findAssetId("ActivitiesIcon"),
          render: () => Promise.resolve().then(() => (init_Plugins(), Plugins_exports))
        },
        {
          key: "BLAZE_THEMES",
          title: () => Strings.THEMES,
          icon: findAssetId("PaintPaletteIcon"),
          render: () => Promise.resolve().then(() => (init_Themes(), Themes_exports)),
          usePredicate: () => isThemeSupported()
        },
        {
          key: "BLAZE_FONTS",
          title: () => Strings.FONTS,
          icon: findAssetId("ic_add_text"),
          render: () => Promise.resolve().then(() => (init_Fonts(), Fonts_exports)),
          usePredicate: () => isFontSupported()
        },
        {
          key: "BLAZE_DEVELOPER",
          title: () => Strings.DEVELOPER,
          icon: findAssetId("WrenchIcon"),
          render: () => Promise.resolve().then(() => (init_Developer(), Developer_exports)),
          usePredicate: () => useProxy(settings).developerSettings ?? false
        }
      ]
    });
    registerSection({
      name: "Blaze",
      items: []
    });
    registerSection({
      name: "Relapse",
      items: []
    });
  }
  var settingsInitialized;
  var init_settings3 = __esm({
    "src/core/ui/settings/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_blazecord();
      init_i18n();
      init_storage();
      init_assets();
      init_loader();
      init_settings();
      init_settings2();
      settingsInitialized = false;
    }
  });

  // globals:lodash
  var require_lodash = __commonJS({
    "globals:lodash"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["lodash"];
    }
  });

  // globals:util
  var require_util = __commonJS({
    "globals:util"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["util"];
    }
  });

  // src/core/relapse/api.tsx
  var import_react11, import_react_native34, initRelapseObject;
  var init_api3 = __esm({
    "src/core/relapse/api.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_alerts2();
      init_storage();
      init_storage();
      init_themes();
      init_assets();
      init_commands();
      init_debug();
      init_loader();
      init_patcher();
      init_settings();
      init_utils();
      init_cyrb64();
      init_logger();
      init_metro();
      init_common();
      init_components();
      init_components();
      init_color();
      init_components2();
      init_styles();
      init_toasts();
      init_dist();
      import_react11 = __toESM(require_react());
      import_react_native34 = __toESM(require_react_native());
      init_plugins();
      initRelapseObject = () => {
        var createStackBasedFilter = (fn) => {
          return (filter) => {
            return fn(factories_exports.createSimpleFilter(filter, cyrb64Hash(new Error().stack)));
          };
        };
        var api = window.relapse = {
          patcher: {
            before: patcher_default.before,
            after: patcher_default.after,
            instead: patcher_default.instead
          },
          metro: {
            modules: window.modules,
            find: createStackBasedFilter(findExports),
            findAll: createStackBasedFilter(findAllExports),
            findByProps: (...props) => {
              if (props.length === 1 && props[0] === "KeyboardAwareScrollView") {
                props.push("listenToKeyboardEvents");
              }
              var ret = findByProps(...props);
              if (ret == null) {
                if (props.includes("ActionSheetTitleHeader")) {
                  var module = findByProps("ActionSheetRow");
                  return {
                    ...module,
                    ActionSheetTitleHeader: module.BottomSheetTitleHeader,
                    ActionSheetContentContainer: ({ children }) => {
                      (0, import_react11.useEffect)(() => console.warn("Discord has removed 'ActionSheetContentContainer', please move into something else. This has been temporarily replaced with View"), []);
                      return /* @__PURE__ */ (0, import_react11.createElement)(import_react_native34.View, null, children);
                    }
                  };
                }
              }
              return ret;
            },
            findByPropsAll: (...props) => findByPropsAll(...props),
            findByName: (name, defaultExp) => {
              if (name === "create" && typeof defaultExp === "undefined") {
                return findByName("create", false).default;
              }
              return findByName(name, defaultExp ?? true);
            },
            findByNameAll: (name, defaultExp = true) => findByNameAll(name, defaultExp),
            findByDisplayName: (displayName, defaultExp = true) => findByDisplayName(displayName, defaultExp),
            findByDisplayNameAll: (displayName, defaultExp = true) => findByDisplayNameAll(displayName, defaultExp),
            findByTypeName: (typeName, defaultExp = true) => findByTypeName(typeName, defaultExp),
            findByTypeNameAll: (typeName, defaultExp = true) => findByTypeNameAll(typeName, defaultExp),
            findByStoreName: (name) => findByStoreName(name),
            common: {
              constants,
              channels,
              i18n,
              url,
              toasts,
              stylesheet: {
                createThemedStyleSheet
              },
              clipboard,
              assets,
              invites,
              commands,
              navigation,
              navigationStack,
              NavigationNative,
              Flux,
              FluxDispatcher,
              React: React2,
              ReactNative,
              moment: require_moment(),
              chroma: require_chroma_js(),
              lodash: require_lodash(),
              util: require_util()
            }
          },
          constants: {
            DISCORD_SERVER: "https://discord.gg/rUg5AvhwdQ",
            GITHUB: "https://github.com/BlazeK1ng420/",
            PROXY_PREFIX: "https://vd-plugins.github.io/proxy",
            HTTP_REGEX: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
            HTTP_REGEX_MULTI: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
            DISCORD_SERVER_ID: "1015931589865246730",
            PLUGINS_CHANNEL_ID: "1091880384561684561",
            THEMES_CHANNEL_ID: "1091880434939482202"
          },
          utils: {
            findInReactTree: (tree, filter) => findInReactTree(tree, filter),
            findInTree: (tree, filter, options) => findInTree(tree, filter, options),
            safeFetch: (input, options, timeout) => safeFetch(input, options, timeout),
            unfreeze: (obj) => Object.isFrozen(obj) ? {
              ...obj
            } : obj,
            without: (object, ...keys) => omit(object, keys)
          },
          debug: {
            connectToDebugger: (url2) => connectToDebugger(url2),
            getDebugInfo: () => getDebugInfo()
          },
          ui: {
            components: {
              Forms,
              General: ReactNative,
              Alert: LegacyAlert,
              Button: CompatButton,
              HelpMessage: (...props) => /* @__PURE__ */ jsx(HelpMessage, {
                ...props
              }),
              SafeAreaView: (...props) => /* @__PURE__ */ jsx(SafeAreaView, {
                ...props
              }),
              Summary,
              ErrorBoundary,
              Codeblock,
              Search: Search_default
            },
            toasts: {
              showToast: (content, asset) => showToast2(content, asset)
            },
            alerts: {
              showConfirmationAlert: (options) => showConfirmationAlert(options),
              showCustomAlert: (component, props) => showCustomAlert(component, props),
              showInputAlert: (options) => showInputAlert(options)
            },
            assets: {
              all: new Proxy({}, {
                get(cache, p) {
                  if (typeof p !== "string")
                    return void 0;
                  if (cache[p])
                    return cache[p];
                  for (var asset of iterateAssets()) {
                    if (asset.name)
                      return cache[p] = asset;
                  }
                },
                ownKeys(cache) {
                  var keys = /* @__PURE__ */ new Set();
                  for (var asset of iterateAssets()) {
                    cache[asset.name] = asset;
                    keys.add(asset.name);
                  }
                  return [
                    ...keys
                  ];
                }
              }),
              find: (filter) => findAsset(filter),
              getAssetByName: (name) => findAsset(name),
              getAssetByID: (id) => findAsset(id),
              getAssetIDByName: (name) => findAssetId(name)
            },
            semanticColors,
            rawColors
          },
          plugins: {
            plugins: RePluginManager.plugins,
            fetchPlugin: (source) => RePluginManager.fetchPlugin(source),
            installPlugin: (source, enabled = true) => RePluginManager.installPlugin(source, enabled),
            startPlugin: (id) => RePluginManager.startPlugin(id),
            stopPlugin: (id, disable = true) => RePluginManager.stopPlugin(id, disable),
            removePlugin: (id) => RePluginManager.removePlugin(id),
            getSettings: (id) => RePluginManager.getSettings(id)
          },
          themes: {
            themes,
            fetchTheme: (id, selected) => fetchTheme(id, selected),
            installTheme: (id) => installTheme(id),
            selectTheme: (id) => selectTheme(id === "default" ? null : themes[id]),
            removeTheme: (id) => removeTheme(id),
            getCurrentTheme: () => getThemeFromLoader(),
            updateThemes: () => updateThemes()
          },
          commands: {
            registerCommand
          },
          storage: {
            createProxy: (target) => createProxy(target),
            useProxy: (_storage) => useProxy(_storage),
            createStorage: (backend) => createStorage(backend),
            wrapSync: (store) => wrapSync(store),
            awaitSyncWrapper: (store) => awaitStorage(store),
            createMMKVBackend: (store) => createMMKVBackend(store),
            createFileBackend: (file) => {
              if (isBlazedLoader() && file === "relapse_theme.json") {
                file = "blazecord/current-theme.json";
              }
              return createFileBackend(file);
            }
          },
          settings,
          loader: {
            identity: getRelapseLoaderIdentity() ?? void 0,
            config: loaderConfig
          },
          logger: {
            log: (...message) => console.log(...message),
            info: (...message) => console.info(...message),
            warn: (...message) => console.warn(...message),
            error: (...message) => console.error(...message),
            time: (...message) => console.time(...message),
            trace: (...message) => console.trace(...message),
            verbose: (...message) => console.log(...message)
          },
          version: versionHash,
          unload: () => {
            delete window.relapse;
          }
        };
        return () => api.unload();
      };
    }
  });

  // src/global.d.ts
  var init_global_d = __esm({
    "src/global.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/modules.d.ts
  var init_modules_d = __esm({
    "src/modules.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/ui/index.ts
  var ui_exports = {};
  __export(ui_exports, {
    alerts: () => alerts_exports,
    components: () => components_exports2,
    settings: () => settings_exports2,
    sheets: () => sheets_exports,
    styles: () => styles_exports,
    toasts: () => toasts_exports
  });
  var init_ui = __esm({
    "src/lib/ui/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_alerts();
      init_components2();
      init_settings2();
      init_sheets();
      init_styles();
      init_toasts();
    }
  });

  // src/lib/index.ts
  var lib_exports = {};
  __export(lib_exports, {
    _jsx: () => jsxRuntime_exports,
    api: () => api_exports,
    fonts: () => fonts_exports,
    managers: () => managers,
    metro: () => metro_exports,
    plugins: () => plugins_exports2,
    themes: () => themes_exports,
    ui: () => ui_exports,
    unload: () => unload,
    utils: () => utils_exports
  });
  function unload() {
    for (var d of _disposer)
      if (typeof d === "function")
        d();
    delete window.blaze;
  }
  var managers, _disposer;
  var init_lib = __esm({
    "src/lib/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_global_d();
      init_modules_d();
      init_fonts();
      init_plugins4();
      init_themes();
      init_api();
      init_ui();
      init_utils();
      init_metro();
      init_fonts();
      init_plugins4();
      init_themes();
      init_jsxRuntime();
      init_lazy();
      managers = proxyLazy(() => {
        console.warn("blaze.managers.* is deprecated, and moved the top level (blaze.*). blaze.managers will be eventually removed soon");
        return {
          get fonts() {
            return fonts_exports;
          },
          get plugins() {
            return plugins_exports2;
          },
          get themes() {
            return themes_exports;
          }
        };
      }, {
        hint: "object"
      });
      _disposer = [];
      unload.push = (fn) => {
        _disposer.push(fn);
      };
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });
  var src_default;
  var init_src = __esm({
    "src/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_patchErrorBoundary();
      init_fixes();
      init_i18n();
      init_settings3();
      init_api3();
      init_plugins();
      init_fonts();
      init_plugins4();
      init_themes();
      init_commands();
      init_debug();
      init_flux();
      init_jsx();
      init_logger();
      init_settings2();
      init_lib();
      src_default = /* @__PURE__ */ _async_to_generator(function* () {
        yield Promise.all([
          initThemes(),
          injectFluxInterceptor(),
          patchSettings(),
          patchLogHook(),
          patchCommands(),
          patchJsx(),
          initRelapseObject(),
          initFetchI18nStrings(),
          initSettings(),
          fixes_default(),
          patchErrorBoundary(),
          updatePlugins()
        ]).then(
          // Push them all to unloader
          (u) => u.forEach((f) => f && unload.push(f))
        );
        window.blaze = lib_exports;
        RePluginManager.initPlugins().then((u) => unload.push(u)).catch(() => alert("Failed to initialize Relapse plugins"));
        initPlugins();
        updateFonts();
        logger.log("BlazeCord is ready!");
      });
    }
  });

  // src/entry.ts
  init_asyncIteratorSymbol();
  init_promiseAllSettled();
  init_async_to_generator();
  var { instead: instead3 } = require_cjs();
  globalThis.window = globalThis;
  function initializeBlaze() {
    return _initializeBlaze.apply(this, arguments);
  }
  function _initializeBlaze() {
    _initializeBlaze = _async_to_generator(function* () {
      try {
        Object.freeze = Object.seal = Object;
        yield (init_caches(), __toCommonJS(caches_exports)).initMetroCache();
        yield (init_src(), __toCommonJS(src_exports)).default();
      } catch (e) {
        var { ClientInfoManager } = (init_modules(), __toCommonJS(modules_exports));
        var stack = e instanceof Error ? e.stack : void 0;
        console.log(stack ?? e?.toString?.() ?? e);
        alert([
          "Failed to load BlazeCord!\n",
          `Build Number: ${ClientInfoManager.Build}`,
          `BlazeCord: ${"d1e4094-local"}`,
          stack || e?.toString?.()
        ].join("\n"));
      }
    });
    return _initializeBlaze.apply(this, arguments);
  }
  if (typeof globalThis.__r !== "undefined") {
    initializeBlaze();
  } else {
    var onceIndexRequired = function(originalRequire) {
      var batchedBridge = window.__fbBatchedBridge;
      var callQueue = new Array();
      var unpatchHook = instead3("callFunctionReturnFlushedQueue", batchedBridge, (args, orig) => {
        if (args[0] === "AppRegistry" || !batchedBridge.getCallableModule(args[0])) {
          callQueue.push(args);
          return batchedBridge.flushedQueue();
        }
        return orig.apply(batchedBridge, args);
      });
      var startDiscord = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* () {
          yield initializeBlaze();
          unpatchHook();
          originalRequire(0);
          callQueue.forEach((arg) => batchedBridge.getCallableModule(arg[0]) && batchedBridge.__callFunction(...arg));
        });
        return function startDiscord2() {
          return _ref.apply(this, arguments);
        };
      }();
      startDiscord();
    };
    onceIndexRequired2 = onceIndexRequired;
    Object.defineProperties(globalThis, {
      __r: {
        configurable: true,
        get: () => _requireFunc,
        set(v2) {
          _requireFunc = function patchedRequire(a) {
            if (a === 0) {
              if (window.modules instanceof Map)
                window.modules = Object.fromEntries(window.modules);
              onceIndexRequired(v2);
              _requireFunc = v2;
            } else
              return v2(a);
          };
        }
      },
      __d: {
        configurable: true,
        get() {
          if (window.Object && !window.modules) {
            window.modules = window.__c?.();
          }
          return this.value;
        },
        set(v2) {
          this.value = v2;
        }
      }
    });
  }
  var _requireFunc;
  var onceIndexRequired2;
})();
//# sourceURL=blazecord
