var BLAZED_START_TIME = nativePerformanceNow(); var window = typeof globalThis !== 'undefined' ? globalThis : this;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
      for (var keys = __getOwnPropNames(from), i2 = 0, n3 = keys.length, key; i2 < n3; i2++) {
        key = keys[i2];
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

  // node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o2) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : /* @__PURE__ */ __name(function getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    }, "getPrototypeOf");
    return _get_prototype_of(o2);
  }
  var init_get_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
      __name(_get_prototype_of, "_get_prototype_of");
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_) {
    }
    return (_is_native_reflect_construct = /* @__PURE__ */ __name(function _is_native_reflect_construct2() {
      return !!result;
    }, "_is_native_reflect_construct"))();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
      __name(_is_native_reflect_construct, "_is_native_reflect_construct");
    }
  });

  // node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
      __name(_assert_this_initialized, "_assert_this_initialized");
    }
  });

  // node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/@swc/helpers/esm/_type_of.js"() {
      __name(_type_of, "_type_of");
    }
  });

  // node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;
    return _assert_this_initialized(self);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_assert_this_initialized();
      init_type_of();
      __name(_possible_constructor_return, "_possible_constructor_return");
    }
  });

  // node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/@swc/helpers/esm/_call_super.js"() {
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
      __name(_call_super, "_call_super");
    }
  });

  // node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/@swc/helpers/esm/_class_call_check.js"() {
      __name(_class_call_check, "_class_call_check");
    }
  });

  // node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/@swc/helpers/esm/_create_class.js"() {
      __name(_defineProperties, "_defineProperties");
      __name(_create_class, "_create_class");
    }
  });

  // node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o2, p2) {
    _set_prototype_of = Object.setPrototypeOf || /* @__PURE__ */ __name(function setPrototypeOf(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    }, "setPrototypeOf");
    return _set_prototype_of(o2, p2);
  }
  var init_set_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
      __name(_set_prototype_of, "_set_prototype_of");
    }
  });

  // node_modules/@swc/helpers/esm/_inherits.js
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
    if (superClass) _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/@swc/helpers/esm/_inherits.js"() {
      init_set_prototype_of();
      __name(_inherits, "_inherits");
    }
  });

  // node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) _construct = Reflect.construct;
    else {
      _construct = /* @__PURE__ */ __name(function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _set_prototype_of(instance, Class2.prototype);
        return instance;
      }, "construct");
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/@swc/helpers/esm/_construct.js"() {
      init_is_native_reflect_construct();
      init_set_prototype_of();
      __name(_construct, "_construct");
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/@swc/helpers/esm/_is_native_function.js"() {
      __name(_is_native_function, "_is_native_function");
    }
  });

  // node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = /* @__PURE__ */ __name(function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2)) return Class2;
      if (typeof Class2 !== "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      __name(Wrapper, "Wrapper");
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    }, "_wrap_native_super");
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
      __name(_wrap_native_super, "_wrap_native_super");
    }
  });

  // node_modules/strict-event-emitter/lib/index.mjs
  var MemoryLeakError, _Emitter, Emitter;
  var init_lib = __esm({
    "node_modules/strict-event-emitter/lib/index.mjs"() {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      MemoryLeakError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(MemoryLeakError2, Error1);
        function MemoryLeakError2(emitter, type, count) {
          _class_call_check(this, MemoryLeakError2);
          var _this;
          _this = _call_super(this, MemoryLeakError2, [
            `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
          ]);
          _this.emitter = emitter;
          _this.type = type;
          _this.count = count;
          _this.name = "MaxListenersExceededWarning";
          return _this;
        }
        __name(MemoryLeakError2, "MemoryLeakError");
        return MemoryLeakError2;
      }(_wrap_native_super(Error));
      _Emitter = /* @__PURE__ */ function() {
        "use strict";
        function _Emitter1() {
          _class_call_check(this, _Emitter1);
          this.events = /* @__PURE__ */ new Map();
          this.maxListeners = _Emitter.defaultMaxListeners;
          this.hasWarnedAboutPotentialMemoryLeak = false;
        }
        __name(_Emitter1, "_Emitter1");
        _create_class(_Emitter1, [
          {
            key: "_emitInternalEvent",
            value: /* @__PURE__ */ __name(function _emitInternalEvent(internalEventName, eventName, listener) {
              this.emit(internalEventName, ...[
                eventName,
                listener
              ]);
            }, "_emitInternalEvent")
          },
          {
            key: "_getListeners",
            value: /* @__PURE__ */ __name(function _getListeners(eventName) {
              return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
            }, "_getListeners")
          },
          {
            key: "_removeListener",
            value: /* @__PURE__ */ __name(function _removeListener(listeners, listener) {
              var index = listeners.indexOf(listener);
              if (index > -1) {
                listeners.splice(index, 1);
              }
              return [];
            }, "_removeListener")
          },
          {
            key: "_wrapOnceListener",
            value: /* @__PURE__ */ __name(function _wrapOnceListener(eventName, listener) {
              var onceListener = /* @__PURE__ */ __name((...data) => {
                this.removeListener(eventName, onceListener);
                return listener.apply(this, data);
              }, "onceListener");
              Object.defineProperty(onceListener, "name", {
                value: listener.name
              });
              return onceListener;
            }, "_wrapOnceListener")
          },
          {
            key: "setMaxListeners",
            value: /* @__PURE__ */ __name(function setMaxListeners(maxListeners) {
              this.maxListeners = maxListeners;
              return this;
            }, "setMaxListeners")
          },
          {
            /**
            * Returns the current max listener value for the `Emitter` which is
            * either set by `emitter.setMaxListeners(n)` or defaults to
            * `Emitter.defaultMaxListeners`.
            */
            key: "getMaxListeners",
            value: /* @__PURE__ */ __name(function getMaxListeners() {
              return this.maxListeners;
            }, "getMaxListeners")
          },
          {
            /**
            * Returns an array listing the events for which the emitter has registered listeners.
            * The values in the array will be strings or Symbols.
            */
            key: "eventNames",
            value: /* @__PURE__ */ __name(function eventNames() {
              return Array.from(this.events.keys());
            }, "eventNames")
          },
          {
            /**
            * Synchronously calls each of the listeners registered for the event named `eventName`,
            * in the order they were registered, passing the supplied arguments to each.
            * Returns `true` if the event has listeners, `false` otherwise.
            *
            * @example
            * const emitter = new Emitter<{ hello: [string] }>()
            * emitter.emit('hello', 'John')
            */
            key: "emit",
            value: /* @__PURE__ */ __name(function emit(eventName, ...data) {
              var listeners = this._getListeners(eventName);
              listeners.forEach((listener) => {
                listener.apply(this, data);
              });
              return listeners.length > 0;
            }, "emit")
          },
          {
            key: "addListener",
            value: /* @__PURE__ */ __name(function addListener(eventName, listener) {
              this._emitInternalEvent("newListener", eventName, listener);
              var nextListeners = this._getListeners(eventName).concat(listener);
              this.events.set(eventName, nextListeners);
              if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                this.hasWarnedAboutPotentialMemoryLeak = true;
                var memoryLeakWarning = new MemoryLeakError(this, eventName, this.listenerCount(eventName));
                console.warn(memoryLeakWarning);
              }
              return this;
            }, "addListener")
          },
          {
            key: "on",
            value: /* @__PURE__ */ __name(function on(eventName, listener) {
              return this.addListener(eventName, listener);
            }, "on")
          },
          {
            key: "once",
            value: /* @__PURE__ */ __name(function once(eventName, listener) {
              return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
            }, "once")
          },
          {
            key: "prependListener",
            value: /* @__PURE__ */ __name(function prependListener(eventName, listener) {
              var listeners = this._getListeners(eventName);
              if (listeners.length > 0) {
                var nextListeners = [
                  listener
                ].concat(listeners);
                this.events.set(eventName, nextListeners);
              } else {
                this.events.set(eventName, listeners.concat(listener));
              }
              return this;
            }, "prependListener")
          },
          {
            key: "prependOnceListener",
            value: /* @__PURE__ */ __name(function prependOnceListener(eventName, listener) {
              return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
            }, "prependOnceListener")
          },
          {
            key: "removeListener",
            value: /* @__PURE__ */ __name(function removeListener(eventName, listener) {
              var listeners = this._getListeners(eventName);
              if (listeners.length > 0) {
                this._removeListener(listeners, listener);
                this.events.set(eventName, listeners);
                this._emitInternalEvent("removeListener", eventName, listener);
              }
              return this;
            }, "removeListener")
          },
          {
            /**
            * Alias for `emitter.removeListener()`.
            *
            * @example
            * emitter.off('hello', listener)
            */
            key: "off",
            value: /* @__PURE__ */ __name(function off(eventName, listener) {
              return this.removeListener(eventName, listener);
            }, "off")
          },
          {
            key: "removeAllListeners",
            value: /* @__PURE__ */ __name(function removeAllListeners(eventName) {
              if (eventName) {
                this.events.delete(eventName);
              } else {
                this.events.clear();
              }
              return this;
            }, "removeAllListeners")
          },
          {
            /**
            * Returns a copy of the array of listeners for the event named `eventName`.
            */
            key: "listeners",
            value: /* @__PURE__ */ __name(function listeners(eventName) {
              return Array.from(this._getListeners(eventName));
            }, "listeners")
          },
          {
            /**
            * Returns the number of listeners listening to the event named `eventName`.
            */
            key: "listenerCount",
            value: /* @__PURE__ */ __name(function listenerCount(eventName) {
              return this._getListeners(eventName).length;
            }, "listenerCount")
          },
          {
            key: "rawListeners",
            value: /* @__PURE__ */ __name(function rawListeners(eventName) {
              return this.listeners(eventName);
            }, "rawListeners")
          }
        ], [
          {
            key: "listenerCount",
            value: /* @__PURE__ */ __name(function listenerCount(emitter, eventName) {
              return emitter.listenerCount(eventName);
            }, "listenerCount")
          }
        ]);
        return _Emitter1;
      }();
      Emitter = _Emitter;
      Emitter.defaultMaxListeners = 10;
    }
  });

  // src/metro/internal/events.ts
  var events_exports = {};
  __export(events_exports, {
    metroEvents: () => metroEvents,
    modulesInitializationEvents: () => modulesInitializationEvents
  });
  var metroEvents, modulesInitializationEvents;
  var init_events = __esm({
    "src/metro/internal/events.ts"() {
      "use strict";
      init_lib();
      metroEvents = new Emitter();
      modulesInitializationEvents = new Emitter();
      metroEvents.setMaxListeners(Number.POSITIVE_INFINITY);
    }
  });

  // src/metro/internal/registry.ts
  var registry_exports = {};
  __export(registry_exports, {
    _importingModuleId: () => _importingModuleId,
    initializedModuleRegistry: () => initializedModuleRegistry,
    internal_getDefiner: () => internal_getDefiner,
    internal_onModuleLoaded: () => internal_onModuleLoaded,
    moduleRegistry: () => moduleRegistry
  });
  function internal_getDefiner(originalDefiner, onceIndexRequired) {
    return (factory, id, dependencies) => {
      var wrappedFactory = wrapModuleFactory(id, onceIndexRequired, factory);
      var state2 = {
        id,
        dependencies,
        initialized: false,
        meta: {}
      };
      moduleRegistry.set(id, state2);
      originalDefiner(wrappedFactory, id, dependencies);
    };
  }
  function wrapModuleFactory(id, onceIndexRequired, factory) {
    return (a0, a1, a2, a3, a4, a5, a6) => {
      var state2 = moduleRegistry.get(id);
      if (id === 0) {
        onceIndexRequired(() => factory(a0, a1, a2, a3, a4, a5, a6));
        state2.initialized = true;
        return;
      }
      var originalImportingModuleId = _importingModuleId;
      _importingModuleId = id;
      try {
        factory(a0, a1, a2, a3, a4, a5, a6);
      } catch (e3) {
        state2.error = e3;
      } finally {
        _importingModuleId = originalImportingModuleId;
        state2.module = a4;
        state2.initialized = true;
        initializedModuleRegistry.add(state2);
        for (var handler of internal_onModuleLoaded) handler(state2);
        metroEvents.emit("moduleLoaded", state2);
        modulesInitializationEvents.emit(id);
      }
    };
  }
  var moduleRegistry, initializedModuleRegistry, internal_onModuleLoaded, _importingModuleId;
  var init_registry = __esm({
    "src/metro/internal/registry.ts"() {
      "use strict";
      init_events();
      moduleRegistry = /* @__PURE__ */ new Map();
      initializedModuleRegistry = /* @__PURE__ */ new Set();
      internal_onModuleLoaded = /* @__PURE__ */ new Set();
      _importingModuleId = -1;
      __name(internal_getDefiner, "internal_getDefiner");
      __name(wrapModuleFactory, "wrapModuleFactory");
    }
  });

  // src/utils/objects.ts
  var objects_exports = {};
  __export(objects_exports, {
    default: () => hookDefineProperty,
    findInReactTree: () => findInReactTree,
    findInTree: () => findInTree
  });
  function hookDefineProperty(target, property, cb) {
    var targetAsAny = target;
    if (property in target) {
      return void cb(targetAsAny[property]);
    }
    var value;
    Object.defineProperty(targetAsAny, property, {
      get: /* @__PURE__ */ __name(() => value, "get"),
      set(v) {
        value = cb(v) ?? v;
      },
      configurable: true,
      enumerable: false
    });
    return () => {
      delete targetAsAny[property];
      targetAsAny[property] = value;
    };
  }
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth) return;
    if (!tree) return;
    try {
      if (filter(tree)) return tree;
    } catch (e3) {
    }
    if (Array.isArray(tree)) {
      for (var item of tree) {
        if (typeof item !== "object" || item === null) continue;
        try {
          var found = treeSearch(item, filter, opts, depth + 1);
          if (found) return found;
        } catch (e3) {
        }
      }
    } else if (typeof tree === "object") {
      for (var key of Object.keys(tree)) {
        if (typeof tree[key] !== "object" || tree[key] === null) continue;
        if (opts.walkable.length && !opts.walkable.includes(key)) continue;
        if (opts.ignore.includes(key)) continue;
        try {
          var found1 = treeSearch(tree[key], filter, opts, depth + 1);
          if (found1) return found1;
        } catch (e3) {
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
  var init_objects = __esm({
    "src/utils/objects.ts"() {
      "use strict";
      __name(hookDefineProperty, "hookDefineProperty");
      __name(treeSearch, "treeSearch");
      __name(findInTree, "findInTree");
      __name(findInReactTree, "findInReactTree");
    }
  });

  // node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/@swc/helpers/esm/_define_property.js"() {
      __name(_define_property, "_define_property");
    }
  });

  // node_modules/node-inspect-extracted/dist/inspect.js
  var require_inspect = __commonJS({
    "node_modules/node-inspect-extracted/dist/inspect.js"(exports, module3) {
      !function(t4, e3) {
        "object" == typeof exports && "object" == typeof module3 ? module3.exports = e3() : "function" == typeof define && define.amd ? define([], e3) : "object" == typeof exports ? exports.util = e3() : t4.util = e3();
      }(exports, () => (() => {
        "use strict";
        var t4 = {
          10: (t5, e4, r4) => {
            var n3;
            function o2() {
              return n3 = null != n3 ? n3 : r4(811).codes.ERR_INTERNAL_ASSERTION;
            }
            __name(o2, "o");
            function a(t6, e5) {
              if (!t6) throw new (o2())(e5);
            }
            __name(a, "a");
            a.fail = function(t6) {
              throw new (o2())(t6);
            }, t5.exports = a;
          },
          28: (t5) => {
            var e4 = [
              "_http_agent",
              "_http_client",
              "_http_common",
              "_http_incoming",
              "_http_outgoing",
              "_http_server",
              "_stream_duplex",
              "_stream_passthrough",
              "_stream_readable",
              "_stream_transform",
              "_stream_wrap",
              "_stream_writable",
              "_tls_common",
              "_tls_wrap",
              "assert",
              "assert/strict",
              "async_hooks",
              "buffer",
              "child_process",
              "cluster",
              "console",
              "constants",
              "crypto",
              "dgram",
              "diagnostics_channel",
              "dns",
              "dns/promises",
              "domain",
              "events",
              "fs",
              "fs/promises",
              "http",
              "http2",
              "https",
              "inspector",
              "module",
              "Module",
              "net",
              "os",
              "path",
              "path/posix",
              "path/win32",
              "perf_hooks",
              "process",
              "punycode",
              "querystring",
              "readline",
              "readline/promises",
              "repl",
              "stream",
              "stream/consumers",
              "stream/promises",
              "stream/web",
              "string_decoder",
              "sys",
              "timers",
              "timers/promises",
              "tls",
              "trace_events",
              "tty",
              "url",
              "util",
              "util/types",
              "v8",
              "vm",
              "wasi",
              "worker_threads",
              "zlib"
            ];
            t5.exports.BuiltinModule = {
              exists: /* @__PURE__ */ __name(function exists(t6) {
                return t6.startsWith("internal/") || -1 !== e4.indexOf(t6);
              }, "exists")
            };
          },
          31: (t5, e4, r4) => {
            var n3 = r4(874), o2 = n3.StringPrototypeCharCodeAt, a = n3.StringPrototypeIncludes, i2 = n3.StringPrototypeReplace, c2 = r4(859), u = r4(791).CHAR_FORWARD_SLASH, l2 = r4(883), f = /%/g, s = /\\/g, y = /\n/g, p2 = /\r/g, h = /\t/g;
            t5.exports = {
              pathToFileURL: /* @__PURE__ */ __name(function pathToFileURL(t6) {
                var e5 = new c2("file://"), _$r = l2.resolve(t6);
                return o2(t6, t6.length - 1) === u && _$r[_$r.length - 1] !== l2.sep && (_$r += "/"), e5.pathname = function(t7) {
                  return a(t7, "%") && (t7 = i2(t7, f, "%25")), a(t7, "\\") && (t7 = i2(t7, s, "%5C")), a(t7, "\n") && (t7 = i2(t7, y, "%0A")), a(t7, "\r") && (t7 = i2(t7, p2, "%0D")), a(t7, "	") && (t7 = i2(t7, h, "%09")), t7;
                }(_$r), e5;
              }, "pathToFileURL"),
              URL: c2
            };
          },
          90: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, a(n4.key), n4);
              }
            }
            __name(o2, "o");
            function a(t6) {
              var _$e = function(t7) {
                if ("object" != n3(t7) || !t7) return t7;
                var _$e2 = t7[Symbol.toPrimitive];
                if (void 0 !== _$e2) {
                  var _$r = _$e2.call(t7, "string");
                  if ("object" != n3(_$r)) return _$r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == n3(_$e) ? _$e : _$e + "";
            }
            __name(a, "a");
            var i2 = r4(874).ArrayPrototypeMap, c2 = function() {
              return t6 = /* @__PURE__ */ __name(function t7() {
                !function(t8, e5) {
                  if (!(t8 instanceof e5)) throw new TypeError("Cannot call a class as a function");
                }(this, t7);
              }, "t"), _$e = [
                {
                  key: "hexSlice",
                  value: /* @__PURE__ */ __name(function value() {
                    var t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, _$e2 = arguments.length > 1 ? arguments[1] : void 0;
                    return i2(this.slice(t7, _$e2), function(t8) {
                      return ("00" + t8.toString(16)).slice(-2);
                    }).join("");
                  }, "value")
                }
              ], _$e && o2(t6.prototype, _$e), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
              var t6, _$e;
            }();
            e4.h = c2;
          },
          292: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              var _$r = "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
              if (!_$r) {
                if (Array.isArray(t6) || (_$r = a(t6)) || e5 && t6 && "number" == typeof t6.length) {
                  _$r && (t6 = _$r);
                  var n4 = 0, o3 = /* @__PURE__ */ __name(function o4() {
                  }, "o");
                  return {
                    s: o3,
                    n: /* @__PURE__ */ __name(function n1() {
                      return n4 >= t6.length ? {
                        done: true
                      } : {
                        done: false,
                        value: t6[n4++]
                      };
                    }, "n1"),
                    e: /* @__PURE__ */ __name(function e6(t7) {
                      throw t7;
                    }, "e"),
                    f: o3
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, c3 = true, u2 = false;
              return {
                s: /* @__PURE__ */ __name(function s2() {
                  _$r = _$r.call(t6);
                }, "s"),
                n: /* @__PURE__ */ __name(function n5() {
                  var _$t = _$r.next();
                  return c3 = _$t.done, _$t;
                }, "n"),
                e: /* @__PURE__ */ __name(function e6(t7) {
                  u2 = true, i3 = t7;
                }, "e"),
                f: /* @__PURE__ */ __name(function f2() {
                  try {
                    c3 || null == _$r.return || _$r.return();
                  } finally {
                    if (u2) throw i3;
                  }
                }, "f")
              };
            }
            __name(o2, "o");
            function a(t6, e5) {
              if (t6) {
                if ("string" == typeof t6) return i2(t6, e5);
                var _$r = {}.toString.call(t6).slice(8, -1);
                return "Object" === _$r && t6.constructor && (_$r = t6.constructor.name), "Map" === _$r || "Set" === _$r ? Array.from(t6) : "Arguments" === _$r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r) ? i2(t6, e5) : void 0;
              }
            }
            __name(a, "a");
            function i2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(i2, "i");
            var c2 = r4(874), u = c2.BigInt, l2 = c2.Error, f = c2.NumberParseInt, s = c2.ObjectEntries, y = c2.ObjectGetOwnPropertyDescriptor, p2 = c2.ObjectGetOwnPropertyDescriptors, h = c2.ObjectGetOwnPropertySymbols, g = c2.ObjectPrototypeToString, v = c2.Symbol, d = r4(518), b = v("kPending"), m2 = v("kRejected");
            t5.exports = {
              constants: {
                kPending: b,
                kRejected: m2,
                ALL_PROPERTIES: 0,
                ONLY_ENUMERABLE: 2
              },
              getOwnNonIndexProperties: /* @__PURE__ */ __name(function getOwnNonIndexProperties(t6) {
                var e5, _$r, n4, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, c3 = p2(t6), u2 = [], l3 = o2(s(c3));
                try {
                  for (l3.s(); !(e5 = l3.n()).done; ) {
                    var g2 = (_$r = e5.value, n4 = 2, function(t7) {
                      if (Array.isArray(t7)) return t7;
                    }(_$r) || function(t7, e6) {
                      var _$r2 = null == t7 ? null : "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                      if (null != _$r2) {
                        var n5, _$o, _$a, i4, c4 = [], u3 = true, l4 = false;
                        try {
                          if (_$a = (_$r2 = _$r2.call(t7)).next, 0 === e6) {
                            if (Object(_$r2) !== _$r2) return;
                            u3 = false;
                          } else for (; !(u3 = (n5 = _$a.call(_$r2)).done) && (c4.push(n5.value), c4.length !== e6); u3 = true) ;
                        } catch (t8) {
                          l4 = true, _$o = t8;
                        } finally {
                          try {
                            if (!u3 && null != _$r2.return && (i4 = _$r2.return(), Object(i4) !== i4)) return;
                          } finally {
                            if (l4) throw _$o;
                          }
                        }
                        return c4;
                      }
                    }(_$r, n4) || a(_$r, n4) || function() {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }()), v2 = g2[0], d2 = g2[1];
                    if (!/^(0|[1-9][0-9]*)$/.test(v2) || f(v2, 10) >= Math.pow(2, 32) - 1) {
                      if (2 === i3 && !d2.enumerable) continue;
                      u2.push(v2);
                    }
                  }
                } catch (t7) {
                  l3.e(t7);
                } finally {
                  l3.f();
                }
                var b2, m3 = o2(h(t6));
                try {
                  for (m3.s(); !(b2 = m3.n()).done; ) {
                    var S = b2.value, w = y(t6, S);
                    (2 !== i3 || w.enumerable) && u2.push(S);
                  }
                } catch (t7) {
                  m3.e(t7);
                } finally {
                  m3.f();
                }
                return u2;
              }, "getOwnNonIndexProperties"),
              getPromiseDetails: /* @__PURE__ */ __name(function getPromiseDetails() {
                return [
                  b,
                  void 0
                ];
              }, "getPromiseDetails"),
              getProxyDetails: d.getProxyDetails,
              Proxy: d.Proxy,
              previewEntries: /* @__PURE__ */ __name(function previewEntries(t6) {
                return [
                  [],
                  false
                ];
              }, "previewEntries"),
              getConstructorName: /* @__PURE__ */ __name(function getConstructorName(t6) {
                if (!t6 || "object" !== n3(t6)) throw new l2("Invalid object");
                if (t6.constructor && t6.constructor.name) return t6.constructor.name;
                var e5 = g(t6).match(/^\[object ([^\]]+)\]/);
                return e5 ? e5[1] : "Object";
              }, "getConstructorName"),
              getExternalValue: /* @__PURE__ */ __name(function getExternalValue() {
                return u(0);
              }, "getExternalValue")
            };
          },
          487: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r4(874).ArrayIsArray, a = r4(811), i2 = a.hideStackFrames, c2 = a.codes.ERR_INVALID_ARG_TYPE, u = i2(function(t6, e5) {
              var _$r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              if (0 === _$r) {
                if (null === t6 || o2(t6)) throw new c2(e5, "Object", t6);
                if ("object" !== n3(t6)) throw new c2(e5, "Object", t6);
              } else {
                if (!(1 & _$r) && null === t6) throw new c2(e5, "Object", t6);
                if (!(2 & _$r) && o2(t6)) throw new c2(e5, "Object", t6);
                var a2 = !(4 & _$r), i3 = n3(t6);
                if ("object" !== i3 && (a2 || "function" !== i3)) throw new c2(e5, "Object", t6);
              }
            });
            t5.exports = {
              kValidateObjectNone: 0,
              kValidateObjectAllowNullable: 1,
              kValidateObjectAllowArray: 2,
              kValidateObjectAllowFunction: 4,
              validateObject: u,
              validateString: /* @__PURE__ */ __name(function validateString(t6, e5) {
                if ("string" != typeof t6) throw new c2(e5, "string", t6);
              }, "validateString")
            };
          },
          518: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, a(n4.key), n4);
              }
            }
            __name(o2, "o");
            function a(t6) {
              var e5 = function(t7) {
                if ("object" != n3(t7) || !t7) return t7;
                var e6 = t7[Symbol.toPrimitive];
                if (void 0 !== e6) {
                  var _$r = e6.call(t7, "string");
                  if ("object" != n3(_$r)) return _$r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == n3(e5) ? e5 : e5 + "";
            }
            __name(a, "a");
            var i2 = r4(874), c2 = i2.Proxy, u = i2.ProxyRevocable, l2 = new (0, i2.SafeWeakMap)(), f = function() {
              return _$t = /* @__PURE__ */ __name(function t6(e6, r5) {
                !function(t7, e7) {
                  if (!(t7 instanceof e7)) throw new TypeError("Cannot call a class as a function");
                }(this, t6);
                var n4 = new c2(e6, r5);
                return l2.set(n4, [
                  e6,
                  r5
                ]), n4;
              }, "t"), e5 = [
                {
                  key: "getProxyDetails",
                  value: /* @__PURE__ */ __name(function value(t6) {
                    var e6 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], _$r = l2.get(t6);
                    if (_$r) return e6 ? _$r : _$r[0];
                  }, "value")
                },
                {
                  key: "revocable",
                  value: /* @__PURE__ */ __name(function value(t6, e6) {
                    var _$r = u(t6, e6);
                    l2.set(_$r.proxy, [
                      t6,
                      e6
                    ]);
                    var n4 = _$r.revoke;
                    return _$r.revoke = function() {
                      l2.set(_$r.proxy, [
                        null,
                        null
                      ]), n4();
                    }, _$r;
                  }, "value")
                }
              ], null, e5 && o2(_$t, e5), Object.defineProperty(_$t, "prototype", {
                writable: false
              }), _$t;
              var _$t, e5;
            }();
            t5.exports = {
              getProxyDetails: f.getProxyDetails.bind(f),
              Proxy: f
            };
          },
          688: (t5, e4, r4) => {
            var n3 = r4(874), o2 = n3.ArrayPrototypeJoin, a = n3.Error, i2 = n3.StringPrototypeReplace, c2 = n3.SymbolFor, u = /\u001b\[\d\d?m/g;
            t5.exports = {
              customInspectSymbol: c2("nodejs.util.inspect.custom"),
              isError: /* @__PURE__ */ __name(function isError2(t6) {
                return t6 instanceof a;
              }, "isError"),
              join: o2,
              removeColors: /* @__PURE__ */ __name(function removeColors(t6) {
                return i2(t6, u, "");
              }, "removeColors")
            };
          },
          774: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              var _$r = "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
              if (!_$r) {
                if (Array.isArray(t6) || (_$r = function(t7, e6) {
                  if (t7) {
                    if ("string" == typeof t7) return a(t7, e6);
                    var _$r2 = {}.toString.call(t7).slice(8, -1);
                    return "Object" === _$r2 && t7.constructor && (_$r2 = t7.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t7) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? a(t7, e6) : void 0;
                  }
                }(t6)) || e5 && t6 && "number" == typeof t6.length) {
                  _$r && (t6 = _$r);
                  var n4 = 0, o3 = /* @__PURE__ */ __name(function o4() {
                  }, "o");
                  return {
                    s: o3,
                    n: /* @__PURE__ */ __name(function n1() {
                      return n4 >= t6.length ? {
                        done: true
                      } : {
                        done: false,
                        value: t6[n4++]
                      };
                    }, "n1"),
                    e: /* @__PURE__ */ __name(function e6(t7) {
                      throw t7;
                    }, "e"),
                    f: o3
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, c3 = true, u2 = false;
              return {
                s: /* @__PURE__ */ __name(function s2() {
                  _$r = _$r.call(t6);
                }, "s"),
                n: /* @__PURE__ */ __name(function n5() {
                  var _$t = _$r.next();
                  return c3 = _$t.done, _$t;
                }, "n"),
                e: /* @__PURE__ */ __name(function e6(t7) {
                  u2 = true, i3 = t7;
                }, "e"),
                f: /* @__PURE__ */ __name(function f2() {
                  try {
                    c3 || null == _$r.return || _$r.return();
                  } finally {
                    if (u2) throw i3;
                  }
                }, "f")
              };
            }
            __name(o2, "o");
            function a(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(a, "a");
            function i2(t6, e5) {
              var _$r = Object.keys(t6);
              if (Object.getOwnPropertySymbols) {
                var n4 = Object.getOwnPropertySymbols(t6);
                e5 && (n4 = n4.filter(function(e6) {
                  return Object.getOwnPropertyDescriptor(t6, e6).enumerable;
                })), _$r.push.apply(_$r, n4);
              }
              return _$r;
            }
            __name(i2, "i");
            function c2(t6) {
              for (var e5 = 1; e5 < arguments.length; e5++) {
                var _$r = null != arguments[e5] ? arguments[e5] : {};
                e5 % 2 ? i2(Object(_$r), true).forEach(function(e6) {
                  u(t6, e6, _$r[e6]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t6, Object.getOwnPropertyDescriptors(_$r)) : i2(Object(_$r)).forEach(function(e6) {
                  Object.defineProperty(t6, e6, Object.getOwnPropertyDescriptor(_$r, e6));
                });
              }
              return t6;
            }
            __name(c2, "c");
            function u(t6, e5, r5) {
              return (e5 = function(t7) {
                var _$e = function(t8) {
                  if ("object" != n3(t8) || !t8) return t8;
                  var _$e2 = t8[Symbol.toPrimitive];
                  if (void 0 !== _$e2) {
                    var _$r = _$e2.call(t8, "string");
                    if ("object" != n3(_$r)) return _$r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(t8);
                }(t7);
                return "symbol" == n3(_$e) ? _$e : _$e + "";
              }(e5)) in t6 ? Object.defineProperty(t6, e5, {
                value: r5,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t6[e5] = r5, t6;
            }
            __name(u, "u");
            var l2, f, s, y = r4(874), p2 = y.Array, h = y.ArrayBuffer, g = y.ArrayBufferPrototype, v = y.ArrayIsArray, d = y.ArrayPrototype, b = y.ArrayPrototypeFilter, m2 = y.ArrayPrototypeForEach, S = y.ArrayPrototypeIncludes, w = y.ArrayPrototypeIndexOf, x = y.ArrayPrototypeJoin, P = y.ArrayPrototypeMap, A = y.ArrayPrototypePop, O = y.ArrayPrototypePush, _ = y.ArrayPrototypePushApply, j = y.ArrayPrototypeSlice, E = y.ArrayPrototypeSort, k = y.ArrayPrototypeSplice, I = y.ArrayPrototypeUnshift, R = y.BigIntPrototypeValueOf, L = y.Boolean, T = y.BooleanPrototype, B = y.BooleanPrototypeValueOf, z = y.DataView, M = y.DataViewPrototype, N = y.Date, C = y.DatePrototype, D = y.DatePrototypeGetTime, F = y.DatePrototypeToISOString, W = y.DatePrototypeToString, G = y.Error, U = y.ErrorPrototype, H = y.ErrorPrototypeToString, V = y.Function, Z = y.FunctionPrototype, $ = y.FunctionPrototypeBind, Y = y.FunctionPrototypeCall, q = y.FunctionPrototypeSymbolHasInstance, J = y.FunctionPrototypeToString, K = y.JSONStringify, Q = y.Map, X = y.MapPrototype, tt = y.MapPrototypeEntries, et = y.MapPrototypeGetSize, rt = y.MathFloor, nt = y.MathMax, ot = y.MathMin, at = y.MathRound, it = y.MathSqrt, ct = y.MathTrunc, ut = y.Number, lt = y.NumberIsFinite, ft = y.NumberIsNaN, st = y.NumberParseFloat, yt = y.NumberParseInt, pt = y.NumberPrototype, ht = y.NumberPrototypeToString, gt = y.NumberPrototypeValueOf, vt = y.Object, dt = y.ObjectAssign, bt = y.ObjectDefineProperty, mt = y.ObjectGetOwnPropertyDescriptor, St = y.ObjectGetOwnPropertyNames, wt = y.ObjectGetOwnPropertySymbols, xt = y.ObjectGetPrototypeOf, Pt = y.ObjectIs, At = y.ObjectKeys, Ot = y.ObjectPrototype, _t = y.ObjectPrototypeHasOwnProperty, jt = y.ObjectPrototypePropertyIsEnumerable, Et = y.ObjectSeal, kt = y.ObjectSetPrototypeOf, It = y.Promise, Rt = y.PromisePrototype, Lt = y.ReflectApply, Tt = y.ReflectOwnKeys, Bt = y.RegExp, zt = y.RegExpPrototype, Mt = y.RegExpPrototypeExec, Nt = y.RegExpPrototypeSymbolReplace, Ct = y.RegExpPrototypeSymbolSplit, Dt = y.RegExpPrototypeToString, Ft = y.SafeMap, Wt = y.SafeSet, Gt = y.SafeStringIterator, Ut = y.Set, Ht = y.SetPrototype, Vt = y.SetPrototypeGetSize, Zt = y.SetPrototypeValues, $t = y.String, Yt = y.StringPrototype, qt = y.StringPrototypeCharCodeAt, Jt = y.StringPrototypeCodePointAt, Kt = y.StringPrototypeEndsWith, Qt = y.StringPrototypeIncludes, Xt = y.StringPrototypeIndexOf, te = y.StringPrototypeLastIndexOf, ee = y.StringPrototypeNormalize, re = y.StringPrototypePadEnd, ne = y.StringPrototypePadStart, oe = y.StringPrototypeRepeat, ae = y.StringPrototypeReplace, ie = y.StringPrototypeReplaceAll, ce = y.StringPrototypeSlice, ue = y.StringPrototypeSplit, le2 = y.StringPrototypeStartsWith, fe = y.StringPrototypeToLowerCase, se = y.StringPrototypeTrim, ye2 = y.StringPrototypeValueOf, pe = y.SymbolIterator, he = y.SymbolPrototypeToString, ge = y.SymbolPrototypeValueOf, ve = y.SymbolToPrimitive, de = y.SymbolToStringTag, be = y.TypedArray, me = y.TypedArrayPrototype, Se = y.TypedArrayPrototypeGetLength, we = y.TypedArrayPrototypeGetSymbolToStringTag, xe2 = y.Uint8Array, Pe = y.WeakMap, Ae = y.WeakMapPrototype, Oe = y.WeakSet, _e = y.WeakSetPrototype, je = y.globalThis, Ee = y.internalBinding, ke = y.uncurryThis, Ie = r4(292), Re = Ie.constants, Le = Re.ALL_PROPERTIES, Te = Re.ONLY_ENUMERABLE, Be = Re.kPending, ze = Re.kRejected, Me = Ie.getOwnNonIndexProperties, Ne = Ie.getPromiseDetails, Ce = Ie.getProxyDetails, De = Ie.previewEntries, Fe = Ie.getConstructorName, We = Ie.getExternalValue, Ge = Ie.Proxy, Ue = r4(688), He = Ue.customInspectSymbol, Ve = Ue.isError, Ze = Ue.join, $e = Ue.removeColors, Ye = r4(811).isStackOverflowError, qe = r4(838), Je = qe.isAsyncFunction, Ke = qe.isGeneratorFunction, Qe = qe.isAnyArrayBuffer, Xe = qe.isArrayBuffer, tr = qe.isArgumentsObject, er = qe.isBoxedPrimitive, rr = qe.isDataView, nr = qe.isExternal, or = qe.isMap, ar2 = qe.isMapIterator, ir = qe.isModuleNamespaceObject, cr = qe.isNativeError, ur = qe.isPromise, lr2 = qe.isSet, fr = qe.isSetIterator, sr = qe.isWeakMap, yr = qe.isWeakSet, pr = qe.isRegExp, hr = qe.isDate, gr = qe.isTypedArray, vr = qe.isStringObject, dr = qe.isNumberObject, br = qe.isBooleanObject, mr = qe.isBigIntObject, Sr = r4(10), wr = r4(28).BuiltinModule, xr = r4(487), Pr = xr.validateObject, Ar = xr.validateString, Or = xr.kValidateObjectAllowArray;
            var _r, jr, Er, kr, Ir, Rr = new Wt(b(St(je), function(t6) {
              return null !== Mt(/^[A-Z][a-zA-Z0-9]+$/, t6);
            })), Lr = /* @__PURE__ */ __name(function Lr2(t6) {
              return void 0 === t6 && void 0 !== t6;
            }, "Lr"), Tr = Et({
              showHidden: false,
              depth: 2,
              colors: false,
              customInspect: true,
              showProxy: false,
              maxArrayLength: 100,
              maxStringLength: 1e4,
              breakLength: 80,
              compact: 3,
              sorted: false,
              getters: false,
              numericSeparator: false
            });
            try {
              _r = new Bt("[\\x00-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), jr = new Bt("[\0-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g"), Er = new Bt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), kr = new Bt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g");
              var Br = new Bt("(?<=\\n)");
              Ir = /* @__PURE__ */ __name(function Ir2(t6) {
                return Ct(Br, t6);
              }, "Ir");
            } catch (t6) {
              _r = /[\x00-\x1f\x27\x5c\x7f-\x9f]/, jr = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g, Er = /[\x00-\x1f\x5c\x7f-\x9f]/, kr = /[\x00-\x1f\x5c\x7f-\x9f]/g, Ir = /* @__PURE__ */ __name(function Ir2(t7) {
                var e5 = Ct(/\n/, t7), _$r = A(e5), n4 = P(e5, function(t8) {
                  return t8 + "\n";
                });
                return "" !== _$r && n4.push(_$r), n4;
              }, "Ir");
            }
            var zr, Mr = /^[a-zA-Z_][a-zA-Z_0-9]*$/, Nr2 = /^(0|[1-9][0-9]*)$/, Cr = /^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/, Dr = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g, Fr = /^(\s+[^(]*?)\s*{/, Wr = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g, Gr = [
              "\\x00",
              "\\x01",
              "\\x02",
              "\\x03",
              "\\x04",
              "\\x05",
              "\\x06",
              "\\x07",
              "\\b",
              "\\t",
              "\\n",
              "\\x0B",
              "\\f",
              "\\r",
              "\\x0E",
              "\\x0F",
              "\\x10",
              "\\x11",
              "\\x12",
              "\\x13",
              "\\x14",
              "\\x15",
              "\\x16",
              "\\x17",
              "\\x18",
              "\\x19",
              "\\x1A",
              "\\x1B",
              "\\x1C",
              "\\x1D",
              "\\x1E",
              "\\x1F",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\'",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\\\",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\x7F",
              "\\x80",
              "\\x81",
              "\\x82",
              "\\x83",
              "\\x84",
              "\\x85",
              "\\x86",
              "\\x87",
              "\\x88",
              "\\x89",
              "\\x8A",
              "\\x8B",
              "\\x8C",
              "\\x8D",
              "\\x8E",
              "\\x8F",
              "\\x90",
              "\\x91",
              "\\x92",
              "\\x93",
              "\\x94",
              "\\x95",
              "\\x96",
              "\\x97",
              "\\x98",
              "\\x99",
              "\\x9A",
              "\\x9B",
              "\\x9C",
              "\\x9D",
              "\\x9E",
              "\\x9F"
            ], Ur = new Bt("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/\\#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/\\#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))", "g");
            function Hr(t6, e5) {
              var _$r = {
                budget: {},
                indentationLvl: 0,
                seen: [],
                currentDepth: 0,
                stylize: Qr,
                showHidden: Tr.showHidden,
                depth: Tr.depth,
                colors: Tr.colors,
                customInspect: Tr.customInspect,
                showProxy: Tr.showProxy,
                maxArrayLength: Tr.maxArrayLength,
                maxStringLength: Tr.maxStringLength,
                breakLength: Tr.breakLength,
                compact: Tr.compact,
                sorted: Tr.sorted,
                getters: Tr.getters,
                numericSeparator: Tr.numericSeparator
              };
              if (arguments.length > 1) {
                if (arguments.length > 2 && (void 0 !== arguments[2] && (_$r.depth = arguments[2]), arguments.length > 3 && void 0 !== arguments[3] && (_$r.colors = arguments[3])), "boolean" == typeof e5) _$r.showHidden = e5;
                else if (e5) for (var n4 = At(e5), o3 = 0; o3 < n4.length; ++o3) {
                  var a2 = n4[o3];
                  _t(Tr, a2) || "stylize" === a2 ? _$r[a2] = e5[a2] : void 0 === _$r.userOptions && (_$r.userOptions = e5);
                }
              }
              return _$r.colors && (_$r.stylize = Kr), null === _$r.maxArrayLength && (_$r.maxArrayLength = 1 / 0), null === _$r.maxStringLength && (_$r.maxStringLength = 1 / 0), un(_$r, t6, 0);
            }
            __name(Hr, "Hr");
            Hr.custom = He, bt(Hr, "defaultOptions", {
              __proto__: null,
              get: /* @__PURE__ */ __name(function get() {
                return Tr;
              }, "get"),
              set: /* @__PURE__ */ __name(function set2(t6) {
                return Pr(t6, "options"), dt(Tr, t6);
              }, "set")
            });
            var Vr = 39, Zr = 49;
            function $r(t6, e5) {
              bt(Hr.colors, e5, {
                __proto__: null,
                get: /* @__PURE__ */ __name(function get() {
                  return this[t6];
                }, "get"),
                set: /* @__PURE__ */ __name(function set2(e6) {
                  this[t6] = e6;
                }, "set"),
                configurable: true,
                enumerable: false
              });
            }
            __name($r, "$r");
            function Yr(t6, e5) {
              return -1 === e5 ? '"'.concat(t6, '"') : -2 === e5 ? "`".concat(t6, "`") : "'".concat(t6, "'");
            }
            __name(Yr, "Yr");
            function qr(t6) {
              var e5 = qt(t6);
              return Gr.length > e5 ? Gr[e5] : "\\u".concat(ht(e5, 16));
            }
            __name(qr, "qr");
            function Jr(t6) {
              var e5 = _r, _$r = jr, n4 = 39;
              if (Qt(t6, "'") && (Qt(t6, '"') ? Qt(t6, "`") || Qt(t6, "${") || (n4 = -2) : n4 = -1, 39 !== n4 && (e5 = Er, _$r = kr)), t6.length < 5e3 && null === Mt(e5, t6)) return Yr(t6, n4);
              if (t6.length > 100) return Yr(t6 = Nt(_$r, t6, qr), n4);
              for (var o3 = "", a2 = 0, i3 = 0; i3 < t6.length; i3++) {
                var c3 = qt(t6, i3);
                if (c3 === n4 || 92 === c3 || c3 < 32 || c3 > 126 && c3 < 160) o3 += a2 === i3 ? Gr[c3] : "".concat(ce(t6, a2, i3)).concat(Gr[c3]), a2 = i3 + 1;
                else if (c3 >= 55296 && c3 <= 57343) {
                  if (c3 <= 56319 && i3 + 1 < t6.length) {
                    var u2 = qt(t6, i3 + 1);
                    if (u2 >= 56320 && u2 <= 57343) {
                      i3++;
                      continue;
                    }
                  }
                  o3 += "".concat(ce(t6, a2, i3), "\\u").concat(ht(c3, 16)), a2 = i3 + 1;
                }
              }
              return a2 !== t6.length && (o3 += ce(t6, a2)), Yr(o3, n4);
            }
            __name(Jr, "Jr");
            function Kr(t6, e5) {
              var _$r = Hr.styles[e5];
              if (void 0 !== _$r) {
                var n4 = Hr.colors[_$r];
                if (void 0 !== n4) return "\x1B[".concat(n4[0], "m").concat(t6, "\x1B[").concat(n4[1], "m");
              }
              return t6;
            }
            __name(Kr, "Kr");
            function Qr(t6) {
              return t6;
            }
            __name(Qr, "Qr");
            function Xr() {
              return [];
            }
            __name(Xr, "Xr");
            function tn(t6, e5) {
              try {
                return t6 instanceof e5;
              } catch (t7) {
                return false;
              }
            }
            __name(tn, "tn");
            Hr.colors = {
              __proto__: null,
              reset: [
                0,
                0
              ],
              bold: [
                1,
                22
              ],
              dim: [
                2,
                22
              ],
              italic: [
                3,
                23
              ],
              underline: [
                4,
                24
              ],
              blink: [
                5,
                25
              ],
              inverse: [
                7,
                27
              ],
              hidden: [
                8,
                28
              ],
              strikethrough: [
                9,
                29
              ],
              doubleunderline: [
                21,
                24
              ],
              black: [
                30,
                Vr
              ],
              red: [
                31,
                Vr
              ],
              green: [
                32,
                Vr
              ],
              yellow: [
                33,
                Vr
              ],
              blue: [
                34,
                Vr
              ],
              magenta: [
                35,
                Vr
              ],
              cyan: [
                36,
                Vr
              ],
              white: [
                37,
                Vr
              ],
              bgBlack: [
                40,
                Zr
              ],
              bgRed: [
                41,
                Zr
              ],
              bgGreen: [
                42,
                Zr
              ],
              bgYellow: [
                43,
                Zr
              ],
              bgBlue: [
                44,
                Zr
              ],
              bgMagenta: [
                45,
                Zr
              ],
              bgCyan: [
                46,
                Zr
              ],
              bgWhite: [
                47,
                Zr
              ],
              framed: [
                51,
                54
              ],
              overlined: [
                53,
                55
              ],
              gray: [
                90,
                Vr
              ],
              redBright: [
                91,
                Vr
              ],
              greenBright: [
                92,
                Vr
              ],
              yellowBright: [
                93,
                Vr
              ],
              blueBright: [
                94,
                Vr
              ],
              magentaBright: [
                95,
                Vr
              ],
              cyanBright: [
                96,
                Vr
              ],
              whiteBright: [
                97,
                Vr
              ],
              bgGray: [
                100,
                Zr
              ],
              bgRedBright: [
                101,
                Zr
              ],
              bgGreenBright: [
                102,
                Zr
              ],
              bgYellowBright: [
                103,
                Zr
              ],
              bgBlueBright: [
                104,
                Zr
              ],
              bgMagentaBright: [
                105,
                Zr
              ],
              bgCyanBright: [
                106,
                Zr
              ],
              bgWhiteBright: [
                107,
                Zr
              ]
            }, $r("gray", "grey"), $r("gray", "blackBright"), $r("bgGray", "bgGrey"), $r("bgGray", "bgBlackBright"), $r("dim", "faint"), $r("strikethrough", "crossedout"), $r("strikethrough", "strikeThrough"), $r("strikethrough", "crossedOut"), $r("hidden", "conceal"), $r("inverse", "swapColors"), $r("inverse", "swapcolors"), $r("doubleunderline", "doubleUnderline"), Hr.styles = dt({
              __proto__: null
            }, {
              special: "cyan",
              number: "yellow",
              bigint: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              symbol: "green",
              date: "magenta",
              regexp: "red",
              module: "underline"
            });
            var en2 = new Ft().set(d, {
              name: "Array",
              constructor: p2
            }).set(g, {
              name: "ArrayBuffer",
              constructor: h
            }).set(Z, {
              name: "Function",
              constructor: V
            }).set(X, {
              name: "Map",
              constructor: Q
            }).set(Ht, {
              name: "Set",
              constructor: Ut
            }).set(Ot, {
              name: "Object",
              constructor: vt
            }).set(me, {
              name: "TypedArray",
              constructor: be
            }).set(zt, {
              name: "RegExp",
              constructor: Bt
            }).set(C, {
              name: "Date",
              constructor: N
            }).set(M, {
              name: "DataView",
              constructor: z
            }).set(U, {
              name: "Error",
              constructor: G
            }).set(T, {
              name: "Boolean",
              constructor: L
            }).set(pt, {
              name: "Number",
              constructor: ut
            }).set(Yt, {
              name: "String",
              constructor: $t
            }).set(Rt, {
              name: "Promise",
              constructor: It
            }).set(Ae, {
              name: "WeakMap",
              constructor: Pe
            }).set(_e, {
              name: "WeakSet",
              constructor: Oe
            });
            function rn(t6, e5, r5, n4) {
              for (var o3, a2 = t6; t6 || Lr(t6); ) {
                var i3 = en2.get(t6);
                if (void 0 !== i3) {
                  var u2 = i3.name, l3 = i3.constructor;
                  if (q(l3, a2)) return void 0 !== n4 && o3 !== t6 && nn(e5, a2, o3 || a2, r5, n4), u2;
                }
                var f2 = mt(t6, "constructor");
                if (void 0 !== f2 && "function" == typeof f2.value && "" !== f2.value.name && tn(a2, f2.value)) return void 0 === n4 || o3 === t6 && Rr.has(f2.value.name) || nn(e5, a2, o3 || a2, r5, n4), $t(f2.value.name);
                t6 = xt(t6), void 0 === o3 && (o3 = t6);
              }
              if (null === o3) return null;
              var s2 = Fe(a2);
              if (r5 > e5.depth && null !== e5.depth) return "".concat(s2, " <Complex prototype>");
              var y2 = rn(o3, e5, r5 + 1, n4);
              return null === y2 ? "".concat(s2, " <").concat(Hr(o3, c2(c2({}, e5), {}, {
                customInspect: false,
                depth: -1
              })), ">") : "".concat(s2, " <").concat(y2, ">");
            }
            __name(rn, "rn");
            function nn(t6, e5, r5, n4, a2) {
              var i3, c3, u2 = 0;
              do {
                if (0 !== u2 || e5 === r5) {
                  if (null === (r5 = xt(r5))) return;
                  var l3 = mt(r5, "constructor");
                  if (void 0 !== l3 && "function" == typeof l3.value && Rr.has(l3.value.name)) return;
                }
                0 === u2 ? c3 = new Wt() : m2(i3, function(t7) {
                  return c3.add(t7);
                }), i3 = Tt(r5), O(t6.seen, e5);
                var f2, s2 = o2(i3);
                try {
                  for (s2.s(); !(f2 = s2.n()).done; ) {
                    var y2 = f2.value;
                    if (!("constructor" === y2 || _t(e5, y2) || 0 !== u2 && c3.has(y2))) {
                      var p3 = mt(r5, y2);
                      if ("function" != typeof p3.value) {
                        var h2 = Tn(t6, r5, n4, y2, 0, p3, e5);
                        t6.colors ? O(a2, "\x1B[2m".concat(h2, "\x1B[22m")) : O(a2, h2);
                      }
                    }
                  }
                } catch (t7) {
                  s2.e(t7);
                } finally {
                  s2.f();
                }
                A(t6.seen);
              } while (3 != ++u2);
            }
            __name(nn, "nn");
            function on(t6, e5, r5) {
              var n4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
              return null === t6 ? "" !== e5 && r5 !== e5 ? "[".concat(r5).concat(n4, ": null prototype] [").concat(e5, "] ") : "[".concat(r5).concat(n4, ": null prototype] ") : "" !== e5 && t6 !== e5 ? "".concat(t6).concat(n4, " [").concat(e5, "] ") : "".concat(t6).concat(n4, " ");
            }
            __name(on, "on");
            function an(t6, e5) {
              var _$r, n4 = wt(t6);
              if (e5) _$r = St(t6), 0 !== n4.length && _(_$r, n4);
              else {
                try {
                  _$r = At(t6);
                } catch (e6) {
                  Sr(cr(e6) && "ReferenceError" === e6.name && ir(t6)), _$r = St(t6);
                }
                0 !== n4.length && _(_$r, b(n4, function(e6) {
                  return jt(t6, e6);
                }));
              }
              return _$r;
            }
            __name(an, "an");
            function cn(t6, e5, r5) {
              var n4 = "";
              return null === e5 && (n4 = Fe(t6)) === r5 && (n4 = "Object"), on(e5, r5, n4);
            }
            __name(cn, "cn");
            function un(t6, e5, a2, i3) {
              if ("object" !== n3(e5) && "function" != typeof e5 && !Lr(e5)) return bn(t6.stylize, e5, t6);
              if (null === e5) return t6.stylize("null", "null");
              var u2 = e5, l3 = Ce(e5, !!t6.showProxy);
              if (void 0 !== l3) {
                if (null === l3 || null === l3[0]) return t6.stylize("<Revoked Proxy>", "special");
                if (t6.showProxy) return function(t7, e6, r5) {
                  if (r5 > t7.depth && null !== t7.depth) return t7.stylize("Proxy [Array]", "special");
                  r5 += 1, t7.indentationLvl += 2;
                  var _$n = [
                    un(t7, e6[0], r5),
                    un(t7, e6[1], r5)
                  ];
                  return t7.indentationLvl -= 2, zn(t7, _$n, "", [
                    "Proxy [",
                    "]"
                  ], 2, r5);
                }(t6, l3, a2);
                e5 = l3;
              }
              if (t6.customInspect) {
                var p3, h2 = e5[He];
                if ("function" == typeof h2 && h2 !== Hr && (null === (p3 = mt(e5, "constructor")) || void 0 === p3 || null === (p3 = p3.value) || void 0 === p3 ? void 0 : p3.prototype) !== e5) {
                  var g2 = null === t6.depth ? null : t6.depth - a2, d2 = void 0 !== l3 || !q(vt, u2), b2 = Y(h2, u2, g2, function(t7, e6) {
                    var _$r = c2({
                      stylize: t7.stylize,
                      showHidden: t7.showHidden,
                      depth: t7.depth,
                      colors: t7.colors,
                      customInspect: t7.customInspect,
                      showProxy: t7.showProxy,
                      maxArrayLength: t7.maxArrayLength,
                      maxStringLength: t7.maxStringLength,
                      breakLength: t7.breakLength,
                      compact: t7.compact,
                      sorted: t7.sorted,
                      getters: t7.getters,
                      numericSeparator: t7.numericSeparator
                    }, t7.userOptions);
                    if (e6) {
                      kt(_$r, null);
                      var _$a, _$i = o2(At(_$r));
                      try {
                        for (_$i.s(); !(_$a = _$i.n()).done; ) {
                          var u3 = _$a.value;
                          "object" !== n3(_$r[u3]) && "function" != typeof _$r[u3] || null === _$r[u3] || delete _$r[u3];
                        }
                      } catch (t8) {
                        _$i.e(t8);
                      } finally {
                        _$i.f();
                      }
                      _$r.stylize = kt(function(e7, r5) {
                        var _$n;
                        try {
                          _$n = "".concat(t7.stylize(e7, r5));
                        } catch (t8) {
                        }
                        return "string" != typeof _$n ? e7 : _$n;
                      }, null);
                    }
                    return _$r;
                  }(t6, d2), Hr);
                  if (b2 !== u2) return "string" != typeof b2 ? un(t6, b2, a2) : ie(b2, "\n", "\n".concat(oe(" ", t6.indentationLvl)));
                }
              }
              if (t6.seen.includes(e5)) {
                var m3 = 1;
                return void 0 === t6.circular ? (t6.circular = new Ft(), t6.circular.set(e5, m3)) : void 0 === (m3 = t6.circular.get(e5)) && (m3 = t6.circular.size + 1, t6.circular.set(e5, m3)), t6.stylize("[Circular *".concat(m3, "]"), "special");
              }
              return function(t7, e6, n4, a3) {
                var _$i, c3;
                t7.showHidden && (n4 <= t7.depth || null === t7.depth) && (c3 = []);
                var u3 = rn(e6, t7, n4, c3);
                void 0 !== c3 && 0 === c3.length && (c3 = void 0);
                var l4 = e6[de];
                ("string" != typeof l4 || "" !== l4 && (t7.showHidden ? _t : jt)(e6, de)) && (l4 = "");
                var p4, h3, g3 = "", d3 = Xr, b3 = true, m4 = 0, P2 = t7.showHidden ? Le : Te, A2 = 0;
                if (pe in e6 || null === u3) if (b3 = false, v(e6)) {
                  var L2 = "Array" !== u3 || "" !== l4 ? on(u3, l4, "Array", "(".concat(e6.length, ")")) : "";
                  if (_$i = Me(e6, P2), p4 = [
                    "".concat(L2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$i.length && void 0 === c3) return "".concat(p4[0], "]");
                  A2 = 2, d3 = xn;
                } else if (lr2(e6)) {
                  var T2 = Vt(e6), z2 = on(u3, l4, "Set", "(".concat(T2, ")"));
                  if (_$i = an(e6, t7.showHidden), d3 = $(An, null, null !== u3 ? e6 : Zt(e6)), 0 === T2 && 0 === _$i.length && void 0 === c3) return "".concat(z2, "{}");
                  p4 = [
                    "".concat(z2, "{"),
                    "}"
                  ];
                } else if (or(e6)) {
                  var M2 = et(e6), N2 = on(u3, l4, "Map", "(".concat(M2, ")"));
                  if (_$i = an(e6, t7.showHidden), d3 = $(On, null, null !== u3 ? e6 : tt(e6)), 0 === M2 && 0 === _$i.length && void 0 === c3) return "".concat(N2, "{}");
                  p4 = [
                    "".concat(N2, "{"),
                    "}"
                  ];
                } else if (gr(e6)) {
                  _$i = Me(e6, P2);
                  var C2 = e6, G2 = "";
                  null === u3 && (G2 = we(e6), C2 = new y[G2](e6));
                  var U2 = Se(e6), H2 = on(u3, l4, G2, "(".concat(U2, ")"));
                  if (p4 = [
                    "".concat(H2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$i.length && !t7.showHidden) return "".concat(p4[0], "]");
                  d3 = $(Pn, null, C2, U2), A2 = 2;
                } else ar2(e6) ? (_$i = an(e6, t7.showHidden), p4 = ln("Map", l4), d3 = $(Rn, null, p4)) : fr(e6) ? (_$i = an(e6, t7.showHidden), p4 = ln("Set", l4), d3 = $(Rn, null, p4)) : b3 = true;
                if (b3) {
                  if (_$i = an(e6, t7.showHidden), p4 = [
                    "{",
                    "}"
                  ], "function" == typeof e6) {
                    if (g3 = function(t8, e7, r5, n5) {
                      var o3 = J(e7);
                      if (le2(o3, "class") && "}" === o3[o3.length - 1]) {
                        var _$a = ce(o3, 5, -1), _$i2 = Xt(_$a, "{");
                        if (-1 !== _$i2 && (!Qt(ce(_$a, 0, _$i2), "(") || null !== Mt(Fr, Nt(Wr, _$a)))) return function(t9, e8, r6) {
                          var _$n = _t(t9, "name") && t9.name || "(anonymous)", o4 = "class ".concat(_$n);
                          if ("Function" !== e8 && null !== e8 && (o4 += " [".concat(e8, "]")), "" !== r6 && e8 !== r6 && (o4 += " [".concat(r6, "]")), null !== e8) {
                            var _$a2 = xt(t9).name;
                            _$a2 && (o4 += " extends ".concat(_$a2));
                          } else o4 += " extends [null prototype]";
                          return "[".concat(o4, "]");
                        }(e7, r5, n5);
                      }
                      var c4 = "Function";
                      Ke(e7) && (c4 = "Generator".concat(c4)), Je(e7) && (c4 = "Async".concat(c4));
                      var u4 = "[".concat(c4);
                      return null === r5 && (u4 += " (null prototype)"), "" === e7.name ? u4 += " (anonymous)" : u4 += ": ".concat("string" == typeof e7.name ? e7.name : un(t8, e7.name)), u4 += "]", r5 !== c4 && null !== r5 && (u4 += " ".concat(r5)), "" !== n5 && r5 !== n5 && (u4 += " [".concat(n5, "]")), u4;
                    }(t7, e6, u3, l4), 0 === _$i.length && void 0 === c3) return t7.stylize(g3, "special");
                  } else if ("Object" === u3) {
                    if (tr(e6) ? p4[0] = "[Arguments] {" : "" !== l4 && (p4[0] = "".concat(on(u3, l4, "Object"), "{")), 0 === _$i.length && void 0 === c3) return "".concat(p4[0], "}");
                  } else if (pr(e6)) {
                    g3 = Dt(null !== u3 ? e6 : new Bt(e6));
                    var V2 = on(u3, l4, "RegExp");
                    if ("RegExp " !== V2 && (g3 = "".concat(V2).concat(g3)), 0 === _$i.length && void 0 === c3 || n4 > t7.depth && null !== t7.depth) return t7.stylize(g3, "regexp");
                  } else if (hr(e6)) {
                    g3 = ft(D(e6)) ? W(e6) : F(e6);
                    var Z2 = on(u3, l4, "Date");
                    if ("Date " !== Z2 && (g3 = "".concat(Z2).concat(g3)), 0 === _$i.length && void 0 === c3) return t7.stylize(g3, "date");
                  } else if (Ve(e6)) {
                    if (g3 = function(t8, e7, n5, a4, i4) {
                      var c4 = null != t8.name ? t8.name : "Error", u4 = sn(a4, t8);
                      (function(t9, e8, r5, n6) {
                        if (!t9.showHidden && 0 !== e8.length) for (var _$o = 0, _$a = [
                          "name",
                          "message",
                          "stack"
                        ]; _$o < _$a.length; _$o++) {
                          var _$i2 = _$a[_$o], c5 = w(e8, _$i2);
                          -1 === c5 || "string" == typeof r5[_$i2] && !Qt(n6, r5[_$i2]) || k(e8, c5, 1);
                        }
                      })(a4, i4, t8, u4), !("cause" in t8) || 0 !== i4.length && S(i4, "cause") || O(i4, "cause"), !v(t8.errors) || 0 !== i4.length && S(i4, "errors") || O(i4, "errors"), u4 = function(t9, e8, r5, n6) {
                        var _$o = r5.length;
                        if ("string" != typeof r5 && (t9 = ae(t9, "".concat(r5), "".concat(r5, " [").concat(ce(on(e8, n6, "Error"), 0, -1), "]"))), null === e8 || Kt(r5, "Error") && le2(t9, r5) && (t9.length === _$o || ":" === t9[_$o] || "\n" === t9[_$o])) {
                          var _$a = "Error";
                          if (null === e8) {
                            var _$i2 = Mt(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/, t9) || Mt(/^([a-z_A-Z0-9-]*Error)$/, t9);
                            _$o = (_$a = (null == _$i2 ? void 0 : _$i2[1]) || "").length, _$a = _$a || "Error";
                          }
                          var c5 = ce(on(e8, n6, _$a), 0, -1);
                          r5 !== c5 && (t9 = Qt(c5, r5) ? 0 === _$o ? "".concat(c5, ": ").concat(t9) : "".concat(c5).concat(ce(t9, _$o)) : "".concat(c5, " [").concat(r5, "]").concat(ce(t9, _$o)));
                        }
                        return t9;
                      }(u4, e7, c4, n5);
                      var l5 = t8.message && Xt(u4, t8.message) || -1;
                      -1 !== l5 && (l5 += t8.message.length);
                      var s2, y2 = Xt(u4, "\n    at", l5);
                      if (-1 === y2) u4 = "[".concat(u4, "]");
                      else {
                        var p5 = ce(u4, 0, y2), h4 = function(t9, e8, r5) {
                          var _$n, _$o = ue(r5, "\n");
                          try {
                            _$n = e8.cause;
                          } catch (t10) {
                          }
                          if (null != _$n && Ve(_$n)) {
                            var _$a = sn(t9, _$n), _$i2 = Xt(_$a, "\n    at");
                            if (-1 !== _$i2) {
                              var c5 = fn(_$o, ue(ce(_$a, _$i2 + 1), "\n")), u5 = c5.len, l6 = c5.offset;
                              if (u5 > 0) {
                                var f2 = u5 - 2, s3 = "    ... ".concat(f2, " lines matching cause stack trace ...");
                                _$o.splice(l6 + 1, f2, t9.stylize(s3, "undefined"));
                              }
                            }
                          }
                          return _$o;
                        }(a4, t8, ce(u4, y2 + 1));
                        if (a4.colors) {
                          var g4, d4, b4 = function() {
                            var _$t;
                            try {
                              _$t = process.cwd();
                            } catch (t9) {
                              return;
                            }
                            return _$t;
                          }(), m5 = o2(h4);
                          try {
                            for (m5.s(); !(d4 = m5.n()).done; ) {
                              var P3 = d4.value, A3 = Mt(Cr, P3);
                              if (null !== A3 && wr.exists(A3[1])) p5 += "\n".concat(a4.stylize(P3, "undefined"));
                              else {
                                if (p5 += "\n", P3 = yn(a4, P3), void 0 !== b4) {
                                  var _2 = pn(a4, P3, b4);
                                  _2 === P3 && (_2 = pn(a4, P3, g4 = null == g4 ? (s2 = b4, (f = null == f ? r4(31) : f).pathToFileURL(s2).href) : g4)), P3 = _2;
                                }
                                p5 += P3;
                              }
                            }
                          } catch (t9) {
                            m5.e(t9);
                          } finally {
                            m5.f();
                          }
                        } else p5 += "\n".concat(x(h4, "\n"));
                        u4 = p5;
                      }
                      if (0 !== a4.indentationLvl) {
                        var j2 = oe(" ", a4.indentationLvl);
                        u4 = ie(u4, "\n", "\n".concat(j2));
                      }
                      return u4;
                    }(e6, u3, l4, t7, _$i), 0 === _$i.length && void 0 === c3) return g3;
                  } else if (Qe(e6)) {
                    var Y2 = on(u3, l4, Xe(e6) ? "ArrayBuffer" : "SharedArrayBuffer");
                    if (void 0 === a3) d3 = wn;
                    else if (0 === _$i.length && void 0 === c3) return Y2 + "{ byteLength: ".concat(vn(t7.stylize, e6.byteLength, false), " }");
                    p4[0] = "".concat(Y2, "{"), I(_$i, "byteLength");
                  } else if (rr(e6)) p4[0] = "".concat(on(u3, l4, "DataView"), "{"), I(_$i, "byteLength", "byteOffset", "buffer");
                  else if (ur(e6)) p4[0] = "".concat(on(u3, l4, "Promise"), "{"), d3 = Ln;
                  else if (yr(e6)) p4[0] = "".concat(on(u3, l4, "WeakSet"), "{"), d3 = t7.showHidden ? kn : En;
                  else if (sr(e6)) p4[0] = "".concat(on(u3, l4, "WeakMap"), "{"), d3 = t7.showHidden ? In : En;
                  else if (ir(e6)) p4[0] = "".concat(on(u3, l4, "Module"), "{"), d3 = mn.bind(null, _$i);
                  else if (er(e6)) {
                    if (g3 = function(t8, e7, r5, n5, o3) {
                      var _$a, _$i2;
                      dr(t8) ? (_$a = gt, _$i2 = "Number") : vr(t8) ? (_$a = ye2, _$i2 = "String", r5.splice(0, t8.length)) : br(t8) ? (_$a = B, _$i2 = "Boolean") : mr(t8) ? (_$a = R, _$i2 = "BigInt") : (_$a = ge, _$i2 = "Symbol");
                      var c4 = "[".concat(_$i2);
                      return _$i2 !== n5 && (c4 += null === n5 ? " (null prototype)" : " (".concat(n5, ")")), c4 += ": ".concat(bn(Qr, _$a(t8), e7), "]"), "" !== o3 && o3 !== n5 && (c4 += " [".concat(o3, "]")), 0 !== r5.length || e7.stylize === Qr ? c4 : e7.stylize(c4, fe(_$i2));
                    }(e6, t7, _$i, u3, l4), 0 === _$i.length && void 0 === c3) return g3;
                  } else if (!function(t8) {
                    return f = null == f ? r4(31) : f, "string" == typeof t8.href && t8 instanceof f.URL;
                  }(e6) || n4 > t7.depth && null !== t7.depth) {
                    if (0 === _$i.length && void 0 === c3) {
                      if (nr(e6)) {
                        var q2 = We(e6).toString(16);
                        return t7.stylize("[External: ".concat(q2, "]"), "special");
                      }
                      return "".concat(cn(e6, u3, l4), "{}");
                    }
                    p4[0] = "".concat(cn(e6, u3, l4), "{");
                  } else if (_$i = function(t8) {
                    return s = s || wt(new f.URL("http://user:pass@localhost:8080/?foo=bar#baz")), t8.filter(function(t9) {
                      return -1 === s[t9];
                    });
                  }(_$i), g3 = e6.href, 0 === _$i.length && void 0 === c3) return g3;
                }
                if (n4 > t7.depth && null !== t7.depth) {
                  var K2 = ce(cn(e6, u3, l4), 0, -1);
                  return null !== u3 && (K2 = "[".concat(K2, "]")), t7.stylize(K2, "special");
                }
                n4 += 1, t7.seen.push(e6), t7.currentDepth = n4;
                var Q2 = t7.indentationLvl;
                try {
                  for (h3 = d3(t7, e6, n4), m4 = 0; m4 < _$i.length; m4++) O(h3, Tn(t7, e6, n4, _$i[m4], A2));
                  void 0 !== c3 && _(h3, c3);
                } catch (r5) {
                  if (!Ye(r5)) throw r5;
                  return function(t8, e7, r6, n5) {
                    return t8.seen.pop(), t8.indentationLvl = n5, t8.stylize("[".concat(r6, ": Inspection interrupted ") + "prematurely. Maximum call stack size exceeded.]", "special");
                  }(t7, 0, ce(cn(e6, u3, l4), 0, -1), Q2);
                }
                if (void 0 !== t7.circular) {
                  var X2 = t7.circular.get(e6);
                  if (void 0 !== X2) {
                    var rt2 = t7.stylize("<ref *".concat(X2, ">"), "special");
                    true !== t7.compact ? g3 = "" === g3 ? rt2 : "".concat(rt2, " ").concat(g3) : p4[0] = "".concat(rt2, " ").concat(p4[0]);
                  }
                }
                if (t7.seen.pop(), t7.sorted) {
                  var nt2 = true === t7.sorted ? void 0 : t7.sorted;
                  if (0 === A2) E(h3, nt2);
                  else if (_$i.length > 1) {
                    var ot2 = E(j(h3, h3.length - _$i.length), nt2);
                    I(ot2, h3, h3.length - _$i.length, _$i.length), Lt(k, null, ot2);
                  }
                }
                var at2 = zn(t7, h3, g3, p4, A2, n4, e6), it2 = (t7.budget[t7.indentationLvl] || 0) + at2.length;
                return t7.budget[t7.indentationLvl] = it2, it2 > Math.pow(2, 27) && (t7.depth = -1), at2;
              }(t6, e5, a2, i3);
            }
            __name(un, "un");
            function ln(t6, e5) {
              return e5 !== "".concat(t6, " Iterator") && ("" !== e5 && (e5 += "] ["), e5 += "".concat(t6, " Iterator")), [
                "[".concat(e5, "] {"),
                "}"
              ];
            }
            __name(ln, "ln");
            function fn(t6, e5) {
              for (var _$r = 0; _$r < t6.length - 3; _$r++) {
                var n4 = w(e5, t6[_$r]);
                if (-1 !== n4) {
                  var o3 = e5.length - n4;
                  if (o3 > 3) {
                    for (var a2 = 1, i3 = ot(t6.length - _$r, o3); i3 > a2 && t6[_$r + a2] === e5[n4 + a2]; ) a2++;
                    if (a2 > 3) return {
                      len: a2,
                      offset: _$r
                    };
                  }
                }
              }
              return {
                len: 0,
                offset: 0
              };
            }
            __name(fn, "fn");
            function sn(t6, e5) {
              return e5.stack ? "string" == typeof e5.stack ? e5.stack : un(t6, e5.stack) : H(e5);
            }
            __name(sn, "sn");
            function yn(t6, e5) {
              for (var _$r, n4 = "", o3 = 0; null !== (_$r = Dr.exec(e5)); ) n4 += ce(e5, o3, _$r.index + 14), n4 += t6.stylize(_$r[1], "module"), o3 = _$r.index + _$r[0].length;
              return 0 !== o3 && (e5 = n4 + ce(e5, o3)), e5;
            }
            __name(yn, "yn");
            function pn(t6, e5, r5) {
              var n4 = Xt(e5, r5), o3 = "", a2 = r5.length;
              if (-1 !== n4) {
                "file://" === ce(e5, n4 - 7, n4) && (a2 += 7, n4 -= 7);
                var i3 = "(" === e5[n4 - 1] ? n4 - 1 : n4, c3 = i3 !== n4 && Kt(e5, ")") ? -1 : e5.length, u2 = n4 + a2 + 1, l3 = ce(e5, i3, u2);
                o3 += ce(e5, 0, i3), o3 += t6.stylize(l3, "undefined"), o3 += ce(e5, u2, c3), -1 === c3 && (o3 += t6.stylize(")", "undefined"));
              } else o3 += e5;
              return o3;
            }
            __name(pn, "pn");
            function hn(t6) {
              var e5 = "", _$r = t6.length;
              Sr(0 !== _$r);
              for (var n4 = "-" === t6[0] ? 1 : 0; _$r >= n4 + 4; _$r -= 3) e5 = "_".concat(ce(t6, _$r - 3, _$r)).concat(e5);
              return _$r === t6.length ? t6 : "".concat(ce(t6, 0, _$r)).concat(e5);
            }
            __name(hn, "hn");
            var gn = /* @__PURE__ */ __name(function gn2(t6) {
              return "... ".concat(t6, " more item").concat(t6 > 1 ? "s" : "");
            }, "gn");
            function vn(t6, e5, r5) {
              if (!r5) return Pt(e5, -0) ? t6("-0", "number") : t6("".concat(e5), "number");
              var n4 = ct(e5), o3 = $t(n4);
              return n4 === e5 ? !lt(e5) || Qt(o3, "e") ? t6(o3, "number") : t6("".concat(hn(o3)), "number") : ft(e5) ? t6(o3, "number") : t6("".concat(hn(o3), ".").concat(function(t7) {
                for (var _$e = "", _$r = 0; _$r < t7.length - 3; _$r += 3) _$e += "".concat(ce(t7, _$r, _$r + 3), "_");
                return 0 === _$r ? t7 : "".concat(_$e).concat(ce(t7, _$r));
              }(ce($t(e5), o3.length + 1))), "number");
            }
            __name(vn, "vn");
            function dn(t6, e5, r5) {
              var n4 = $t(e5);
              return t6("".concat(r5 ? hn(n4) : n4, "n"), "bigint");
            }
            __name(dn, "dn");
            function bn(t6, e5, r5) {
              if ("string" == typeof e5) {
                var n4 = "";
                if (e5.length > r5.maxStringLength) {
                  var o3 = e5.length - r5.maxStringLength;
                  e5 = ce(e5, 0, r5.maxStringLength), n4 = "... ".concat(o3, " more character").concat(o3 > 1 ? "s" : "");
                }
                return true !== r5.compact && e5.length > 16 && e5.length > r5.breakLength - r5.indentationLvl - 4 ? x(P(Ir(e5), function(e6) {
                  return t6(Jr(e6), "string");
                }), " +\n".concat(oe(" ", r5.indentationLvl + 2))) + n4 : t6(Jr(e5), "string") + n4;
              }
              return "number" == typeof e5 ? vn(t6, e5, r5.numericSeparator) : "bigint" == typeof e5 ? dn(t6, e5, r5.numericSeparator) : "boolean" == typeof e5 ? t6("".concat(e5), "boolean") : void 0 === e5 ? t6("undefined", "undefined") : t6(he(e5), "symbol");
            }
            __name(bn, "bn");
            function mn(t6, e5, r5, n4) {
              for (var o3 = new p2(t6.length), a2 = 0; a2 < t6.length; a2++) try {
                o3[a2] = Tn(e5, r5, n4, t6[a2], 0);
              } catch (r6) {
                Sr(cr(r6) && "ReferenceError" === r6.name);
                var i3 = u({}, t6[a2], "");
                o3[a2] = Tn(e5, i3, n4, t6[a2], 0);
                var c3 = te(o3[a2], " ");
                o3[a2] = ce(o3[a2], 0, c3 + 1) + e5.stylize("<uninitialized>", "special");
              }
              return t6.length = 0, o3;
            }
            __name(mn, "mn");
            function Sn(t6, e5, r5, n4, o3, a2) {
              for (var i3 = At(e5), c3 = a2; a2 < i3.length && o3.length < n4; a2++) {
                var u2 = i3[a2], l3 = +u2;
                if (l3 > Math.pow(2, 32) - 2) break;
                if ("".concat(c3) !== u2) {
                  if (null === Mt(Nr2, u2)) break;
                  var f2 = l3 - c3, s2 = f2 > 1 ? "s" : "", y2 = "<".concat(f2, " empty item").concat(s2, ">");
                  if (O(o3, t6.stylize(y2, "undefined")), c3 = l3, o3.length === n4) break;
                }
                O(o3, Tn(t6, e5, r5, u2, 1)), c3++;
              }
              var p3 = e5.length - c3;
              if (o3.length !== n4) {
                if (p3 > 0) {
                  var h2 = p3 > 1 ? "s" : "", g2 = "<".concat(p3, " empty item").concat(h2, ">");
                  O(o3, t6.stylize(g2, "undefined"));
                }
              } else p3 > 0 && O(o3, gn(p3));
              return o3;
            }
            __name(Sn, "Sn");
            function wn(t6, e5) {
              var n4;
              try {
                n4 = new xe2(e5);
              } catch (e6) {
                return [
                  t6.stylize("(detached)", "special")
                ];
              }
              void 0 === l2 && (l2 = ke(r4(90).h.prototype.hexSlice));
              var o3 = se(Nt(/(.{2})/g, l2(n4, 0, ot(t6.maxArrayLength, n4.length)), "$1 ")), a2 = n4.length - t6.maxArrayLength;
              return a2 > 0 && (o3 += " ... ".concat(a2, " more byte").concat(a2 > 1 ? "s" : "")), [
                "".concat(t6.stylize("[Uint8Contents]", "special"), ": <").concat(o3, ">")
              ];
            }
            __name(wn, "wn");
            function xn(t6, e5, r5) {
              for (var n4 = e5.length, o3 = ot(nt(0, t6.maxArrayLength), n4), a2 = n4 - o3, i3 = [], c3 = 0; c3 < o3; c3++) {
                if (!_t(e5, c3)) return Sn(t6, e5, r5, o3, i3, c3);
                O(i3, Tn(t6, e5, r5, c3, 1));
              }
              return a2 > 0 && O(i3, gn(a2)), i3;
            }
            __name(xn, "xn");
            function Pn(t6, e5, r5, n4, o3) {
              for (var a2 = ot(nt(0, r5.maxArrayLength), e5), i3 = t6.length - a2, c3 = new p2(a2), u2 = t6.length > 0 && "number" == typeof t6[0] ? vn : dn, l3 = 0; l3 < a2; ++l3) c3[l3] = u2(r5.stylize, t6[l3], r5.numericSeparator);
              if (i3 > 0 && (c3[a2] = gn(i3)), r5.showHidden) {
                r5.indentationLvl += 2;
                for (var f2 = 0, s2 = [
                  "BYTES_PER_ELEMENT",
                  "length",
                  "byteLength",
                  "byteOffset",
                  "buffer"
                ]; f2 < s2.length; f2++) {
                  var y2 = s2[f2], h2 = un(r5, t6[y2], o3, true);
                  O(c3, "[".concat(y2, "]: ").concat(h2));
                }
                r5.indentationLvl -= 2;
              }
              return c3;
            }
            __name(Pn, "Pn");
            function An(t6, e5, r5, n4) {
              var a2 = t6.size, i3 = ot(nt(0, e5.maxArrayLength), a2), c3 = a2 - i3, u2 = [];
              e5.indentationLvl += 2;
              var l3, f2 = 0, s2 = o2(t6);
              try {
                for (s2.s(); !(l3 = s2.n()).done; ) {
                  var y2 = l3.value;
                  if (f2 >= i3) break;
                  O(u2, un(e5, y2, n4)), f2++;
                }
              } catch (t7) {
                s2.e(t7);
              } finally {
                s2.f();
              }
              return c3 > 0 && O(u2, gn(c3)), e5.indentationLvl -= 2, u2;
            }
            __name(An, "An");
            function On(t6, e5, r5, n4) {
              var a2 = t6.size, i3 = ot(nt(0, e5.maxArrayLength), a2), c3 = a2 - i3, u2 = [];
              e5.indentationLvl += 2;
              var l3, f2 = 0, s2 = o2(t6);
              try {
                for (s2.s(); !(l3 = s2.n()).done; ) {
                  var y2 = l3.value, p3 = y2[0], h2 = y2[1];
                  if (f2 >= i3) break;
                  O(u2, "".concat(un(e5, p3, n4), " => ").concat(un(e5, h2, n4))), f2++;
                }
              } catch (t7) {
                s2.e(t7);
              } finally {
                s2.f();
              }
              return c3 > 0 && O(u2, gn(c3)), e5.indentationLvl -= 2, u2;
            }
            __name(On, "On");
            function _n(t6, e5, r5, n4) {
              var o3 = nt(t6.maxArrayLength, 0), a2 = ot(o3, r5.length), i3 = new p2(a2);
              t6.indentationLvl += 2;
              for (var c3 = 0; c3 < a2; c3++) i3[c3] = un(t6, r5[c3], e5);
              t6.indentationLvl -= 2, 0 !== n4 || t6.sorted || E(i3);
              var u2 = r5.length - a2;
              return u2 > 0 && O(i3, gn(u2)), i3;
            }
            __name(_n, "_n");
            function jn(t6, e5, r5, n4) {
              var o3 = nt(t6.maxArrayLength, 0), a2 = r5.length / 2, i3 = a2 - o3, c3 = ot(o3, a2), u2 = new p2(c3), l3 = 0;
              if (t6.indentationLvl += 2, 0 === n4) {
                for (; l3 < c3; l3++) {
                  var f2 = 2 * l3;
                  u2[l3] = "".concat(un(t6, r5[f2], e5), " => ").concat(un(t6, r5[f2 + 1], e5));
                }
                t6.sorted || E(u2);
              } else for (; l3 < c3; l3++) {
                var s2 = 2 * l3, y2 = [
                  un(t6, r5[s2], e5),
                  un(t6, r5[s2 + 1], e5)
                ];
                u2[l3] = zn(t6, y2, "", [
                  "[",
                  "]"
                ], 2, e5);
              }
              return t6.indentationLvl -= 2, i3 > 0 && O(u2, gn(i3)), u2;
            }
            __name(jn, "jn");
            function En(t6) {
              return [
                t6.stylize("<items unknown>", "special")
              ];
            }
            __name(En, "En");
            function kn(t6, e5, r5) {
              return _n(t6, r5, De(e5), 0);
            }
            __name(kn, "kn");
            function In(t6, e5, r5) {
              return jn(t6, r5, De(e5), 0);
            }
            __name(In, "In");
            function Rn(t6, e5, r5, n4) {
              var o3 = De(r5, true), a2 = o3[0];
              return o3[1] ? (t6[0] = Nt(/ Iterator] {$/, t6[0], " Entries] {"), jn(e5, n4, a2, 2)) : _n(e5, n4, a2, 1);
            }
            __name(Rn, "Rn");
            function Ln(t6, e5, r5) {
              var n4, o3 = Ne(e5), a2 = o3[0], i3 = o3[1];
              if (a2 === Be) n4 = [
                t6.stylize("<pending>", "special")
              ];
              else {
                t6.indentationLvl += 2;
                var c3 = un(t6, i3, r5);
                t6.indentationLvl -= 2, n4 = [
                  a2 === ze ? "".concat(t6.stylize("<rejected>", "special"), " ").concat(c3) : c3
                ];
              }
              return n4;
            }
            __name(Ln, "Ln");
            function Tn(t6, e5, r5, o3, a2, i3) {
              var c3, u2, l3 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e5, f2 = " ";
              if (void 0 !== (i3 = i3 || mt(e5, o3) || {
                value: e5[o3],
                enumerable: true
              }).value) {
                var s2 = true !== t6.compact || 0 !== a2 ? 2 : 3;
                t6.indentationLvl += s2, u2 = un(t6, i3.value, r5), 3 === s2 && t6.breakLength < zr(u2, t6.colors) && (f2 = "\n".concat(oe(" ", t6.indentationLvl))), t6.indentationLvl -= s2;
              } else if (void 0 !== i3.get) {
                var y2 = void 0 !== i3.set ? "Getter/Setter" : "Getter", p3 = t6.stylize, h2 = "special";
                if (t6.getters && (true === t6.getters || "get" === t6.getters && void 0 === i3.set || "set" === t6.getters && void 0 !== i3.set)) try {
                  var g2 = Y(i3.get, l3);
                  if (t6.indentationLvl += 2, null === g2) u2 = "".concat(p3("[".concat(y2, ":"), h2), " ").concat(p3("null", "null")).concat(p3("]", h2));
                  else if ("object" === n3(g2)) u2 = "".concat(p3("[".concat(y2, "]"), h2), " ").concat(un(t6, g2, r5));
                  else {
                    var v2 = bn(p3, g2, t6);
                    u2 = "".concat(p3("[".concat(y2, ":"), h2), " ").concat(v2).concat(p3("]", h2));
                  }
                  t6.indentationLvl -= 2;
                } catch (t7) {
                  var d2 = "<Inspection threw (".concat(t7.message, ")>");
                  u2 = "".concat(p3("[".concat(y2, ":"), h2), " ").concat(d2).concat(p3("]", h2));
                }
                else u2 = t6.stylize("[".concat(y2, "]"), h2);
              } else u2 = void 0 !== i3.set ? t6.stylize("[Setter]", "special") : t6.stylize("undefined", "undefined");
              if (1 === a2) return u2;
              if ("symbol" === n3(o3)) {
                var b2 = Nt(jr, he(o3), qr);
                c3 = t6.stylize(b2, "symbol");
              } else c3 = null !== Mt(Mr, o3) ? "__proto__" === o3 ? "['__proto__']" : t6.stylize(o3, "name") : t6.stylize(Jr(o3), "string");
              return false === i3.enumerable && (c3 = "[".concat(c3, "]")), "".concat(c3, ":").concat(f2).concat(u2);
            }
            __name(Tn, "Tn");
            function Bn(t6, e5, r5, n4) {
              var o3 = e5.length + r5;
              if (o3 + e5.length > t6.breakLength) return false;
              for (var a2 = 0; a2 < e5.length; a2++) if (t6.colors ? o3 += $e(e5[a2]).length : o3 += e5[a2].length, o3 > t6.breakLength) return false;
              return "" === n4 || !Qt(n4, "\n");
            }
            __name(Bn, "Bn");
            function zn(t6, e5, r5, n4, o3, a2, i3) {
              if (true !== t6.compact) {
                if ("number" == typeof t6.compact && t6.compact >= 1) {
                  var c3 = e5.length;
                  if (2 === o3 && c3 > 6 && (e5 = function(t7, e6, r6) {
                    var _$n = 0, _$o = 0, _$a = 0, _$i = e6.length;
                    t7.maxArrayLength < e6.length && _$i--;
                    for (var c4 = new p2(_$i); _$a < _$i; _$a++) {
                      var u3 = zr(e6[_$a], t7.colors);
                      c4[_$a] = u3, _$n += u3 + 2, _$o < u3 && (_$o = u3);
                    }
                    var l4 = _$o + 2;
                    if (3 * l4 + t7.indentationLvl < t7.breakLength && (_$n / l4 > 5 || _$o <= 6)) {
                      var f3 = it(l4 - _$n / e6.length), s3 = nt(l4 - 3 - f3, 1), y2 = ot(at(it(2.5 * s3 * _$i) / s3), rt((t7.breakLength - t7.indentationLvl) / l4), 4 * t7.compact, 15);
                      if (y2 <= 1) return e6;
                      for (var h2 = [], g2 = [], v2 = 0; v2 < y2; v2++) {
                        for (var d2 = 0, b2 = v2; b2 < e6.length; b2 += y2) c4[b2] > d2 && (d2 = c4[b2]);
                        d2 += 2, g2[v2] = d2;
                      }
                      var m3 = ne;
                      if (void 0 !== r6) {
                        for (var S2 = 0; S2 < e6.length; S2++) if ("number" != typeof r6[S2] && "bigint" != typeof r6[S2]) {
                          m3 = re;
                          break;
                        }
                      }
                      for (var w2 = 0; w2 < _$i; w2 += y2) {
                        for (var x2 = ot(w2 + y2, _$i), P2 = "", A2 = w2; A2 < x2 - 1; A2++) {
                          var _2 = g2[A2 - w2] + e6[A2].length - c4[A2];
                          P2 += m3("".concat(e6[A2], ", "), _2, " ");
                        }
                        if (m3 === ne) {
                          var j2 = g2[A2 - w2] + e6[A2].length - c4[A2] - 2;
                          P2 += ne(e6[A2], j2, " ");
                        } else P2 += e6[A2];
                        O(h2, P2);
                      }
                      t7.maxArrayLength < e6.length && O(h2, e6[_$i]), e6 = h2;
                    }
                    return e6;
                  }(t6, e5, i3)), t6.currentDepth - a2 < t6.compact && c3 === e5.length && Bn(t6, e5, e5.length + t6.indentationLvl + n4[0].length + r5.length + 10, r5)) {
                    var u2 = Ze(e5, ", ");
                    if (!Qt(u2, "\n")) return "".concat(r5 ? "".concat(r5, " ") : "").concat(n4[0], " ").concat(u2) + " ".concat(n4[1]);
                  }
                }
                var l3 = "\n".concat(oe(" ", t6.indentationLvl));
                return "".concat(r5 ? "".concat(r5, " ") : "").concat(n4[0]).concat(l3, "  ") + "".concat(Ze(e5, ",".concat(l3, "  "))).concat(l3).concat(n4[1]);
              }
              if (Bn(t6, e5, 0, r5)) return "".concat(n4[0]).concat(r5 ? " ".concat(r5) : "", " ").concat(Ze(e5, ", "), " ") + n4[1];
              var f2 = oe(" ", t6.indentationLvl), s2 = "" === r5 && 1 === n4[0].length ? " " : "".concat(r5 ? " ".concat(r5) : "", "\n").concat(f2, "  ");
              return "".concat(n4[0]).concat(s2).concat(Ze(e5, ",\n".concat(f2, "  ")), " ").concat(n4[1]);
            }
            __name(zn, "zn");
            function Mn(t6) {
              var e5 = Ce(t6, false);
              if (void 0 !== e5) {
                if (null === e5) return true;
                t6 = e5;
              }
              var _$r = _t, n4 = _t;
              if ("function" != typeof t6.toString) {
                if ("function" != typeof t6[ve]) return true;
                if (_t(t6, ve)) return false;
                _$r = Nn;
              } else {
                if (_t(t6, "toString")) return false;
                if ("function" != typeof t6[ve]) n4 = Nn;
                else if (_t(t6, ve)) return false;
              }
              var o3 = t6;
              do {
                o3 = xt(o3);
              } while (!_$r(o3, "toString") && !n4(o3, ve));
              var a2 = mt(o3, "constructor");
              return void 0 !== a2 && "function" == typeof a2.value && Rr.has(a2.value.name);
            }
            __name(Mn, "Mn");
            function Nn() {
              return false;
            }
            __name(Nn, "Nn");
            var Cn, Dn = /* @__PURE__ */ __name(function Dn2(t6) {
              return ue(t6.message, "\n", 1)[0];
            }, "Dn");
            function Fn(t6) {
              try {
                return K(t6);
              } catch (t7) {
                if (!Cn) try {
                  var e5 = {};
                  e5.a = e5, K(e5);
                } catch (t8) {
                  Cn = Dn(t8);
                }
                if ("TypeError" === t7.name && Dn(t7) === Cn) return "[Circular]";
                throw t7;
              }
            }
            __name(Fn, "Fn");
            function Wn(t6, e5) {
              var _$r;
              return vn(Qr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : Tr.numericSeparator);
            }
            __name(Wn, "Wn");
            function Gn(t6, e5) {
              var _$r;
              return dn(Qr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : Tr.numericSeparator);
            }
            __name(Gn, "Gn");
            function Un(t6, e5) {
              var _$r = e5[0], o3 = 0, a2 = "", i3 = "";
              if ("string" == typeof _$r) {
                if (1 === e5.length) return _$r;
                for (var u2, l3 = 0, f2 = 0; f2 < _$r.length - 1; f2++) if (37 === qt(_$r, f2)) {
                  var s2 = qt(_$r, ++f2);
                  if (o3 + 1 !== e5.length) {
                    switch (s2) {
                      case 115:
                        var y2 = e5[++o3];
                        u2 = "number" == typeof y2 ? Wn(y2, t6) : "bigint" == typeof y2 ? Gn(y2, t6) : "object" === n3(y2) && null !== y2 && Mn(y2) ? Hr(y2, c2(c2({}, t6), {}, {
                          compact: 3,
                          colors: false,
                          depth: 0
                        })) : $t(y2);
                        break;
                      case 106:
                        u2 = Fn(e5[++o3]);
                        break;
                      case 100:
                        var p3 = e5[++o3];
                        u2 = "bigint" == typeof p3 ? Gn(p3, t6) : "symbol" === n3(p3) ? "NaN" : Wn(ut(p3), t6);
                        break;
                      case 79:
                        u2 = Hr(e5[++o3], t6);
                        break;
                      case 111:
                        u2 = Hr(e5[++o3], c2(c2({}, t6), {}, {
                          showHidden: true,
                          showProxy: true,
                          depth: 4
                        }));
                        break;
                      case 105:
                        var h2 = e5[++o3];
                        u2 = "bigint" == typeof h2 ? Gn(h2, t6) : "symbol" === n3(h2) ? "NaN" : Wn(yt(h2), t6);
                        break;
                      case 102:
                        var g2 = e5[++o3];
                        u2 = "symbol" === n3(g2) ? "NaN" : Wn(st(g2), t6);
                        break;
                      case 99:
                        o3 += 1, u2 = "";
                        break;
                      case 37:
                        a2 += ce(_$r, l3, f2), l3 = f2 + 1;
                        continue;
                      default:
                        continue;
                    }
                    l3 !== f2 - 1 && (a2 += ce(_$r, l3, f2 - 1)), a2 += u2, l3 = f2 + 1;
                  } else 37 === s2 && (a2 += ce(_$r, l3, f2), l3 = f2 + 1);
                }
                0 !== l3 && (o3++, i3 = " ", l3 < _$r.length && (a2 += ce(_$r, l3)));
              }
              for (; o3 < e5.length; ) {
                var v2 = e5[o3];
                a2 += i3, a2 += "string" != typeof v2 ? Hr(v2, t6) : v2, i3 = " ", o3++;
              }
              return a2;
            }
            __name(Un, "Un");
            function Hn(t6) {
              return t6 <= 31 || t6 >= 127 && t6 <= 159 || t6 >= 768 && t6 <= 879 || t6 >= 8203 && t6 <= 8207 || t6 >= 8400 && t6 <= 8447 || t6 >= 65024 && t6 <= 65039 || t6 >= 65056 && t6 <= 65071 || t6 >= 917760 && t6 <= 917999;
            }
            __name(Hn, "Hn");
            if (Ee("config").hasIntl) Sr(false);
            else {
              zr = /* @__PURE__ */ __name(function zr2(t6) {
                var e5 = 0;
                (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (t6 = Zn(t6)), t6 = ee(t6, "NFC");
                var _$r, n4 = o2(new Gt(t6));
                try {
                  for (n4.s(); !(_$r = n4.n()).done; ) {
                    var a2 = _$r.value, i3 = Jt(a2, 0);
                    Vn(i3) ? e5 += 2 : Hn(i3) || e5++;
                  }
                } catch (t7) {
                  n4.e(t7);
                } finally {
                  n4.f();
                }
                return e5;
              }, "zr");
              var Vn = /* @__PURE__ */ __name(function Vn2(t6) {
                return t6 >= 4352 && (t6 <= 4447 || 9001 === t6 || 9002 === t6 || t6 >= 11904 && t6 <= 12871 && 12351 !== t6 || t6 >= 12880 && t6 <= 19903 || t6 >= 19968 && t6 <= 42182 || t6 >= 43360 && t6 <= 43388 || t6 >= 44032 && t6 <= 55203 || t6 >= 63744 && t6 <= 64255 || t6 >= 65040 && t6 <= 65049 || t6 >= 65072 && t6 <= 65131 || t6 >= 65281 && t6 <= 65376 || t6 >= 65504 && t6 <= 65510 || t6 >= 110592 && t6 <= 110593 || t6 >= 127488 && t6 <= 127569 || t6 >= 127744 && t6 <= 128591 || t6 >= 131072 && t6 <= 262141);
              }, "Vn");
            }
            function Zn(t6) {
              return Ar(t6, "str"), Nt(Ur, t6, "");
            }
            __name(Zn, "Zn");
            var $n = {
              34: "&quot;",
              38: "&amp;",
              39: "&apos;",
              60: "&lt;",
              62: "&gt;",
              160: "&nbsp;"
            };
            function Yn(t6) {
              return t6.replace(/[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g, function(t7) {
                var e5 = $t(t7.charCodeAt(0));
                return $n[e5] || "&#" + e5 + ";";
              });
            }
            __name(Yn, "Yn");
            t5.exports = {
              identicalSequenceRange: fn,
              inspect: Hr,
              inspectDefaultOptions: Tr,
              format: /* @__PURE__ */ __name(function format2() {
                for (var _$t = arguments.length, e5 = new Array(_$t), _$r = 0; _$r < _$t; _$r++) e5[_$r] = arguments[_$r];
                return Un(void 0, e5);
              }, "format"),
              formatWithOptions: /* @__PURE__ */ __name(function formatWithOptions2(t6) {
                Pr(t6, "inspectOptions", Or);
                for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), n4 = 1; n4 < e5; n4++) _$r[n4 - 1] = arguments[n4];
                return Un(t6, _$r);
              }, "formatWithOptions"),
              getStringWidth: zr,
              stripVTControlCharacters: Zn,
              isZeroWidthCodePoint: Hn,
              stylizeWithColor: Kr,
              stylizeWithHTML: /* @__PURE__ */ __name(function stylizeWithHTML2(t6, e5) {
                var _$r = Hr.styles[e5];
                return void 0 !== _$r ? '<span style="color:'.concat(_$r, ';">').concat(Yn(t6), "</span>") : Yn(t6);
              }, "stylizeWithHTML"),
              Proxy: Ge
            };
          },
          791: (t5) => {
            t5.exports = {
              CHAR_DOT: 46,
              CHAR_FORWARD_SLASH: 47,
              CHAR_BACKWARD_SLASH: 92
            };
          },
          811: (t5, e4, r4) => {
            function n3(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(n3, "n");
            function o2(t6) {
              return o2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function o3(t7) {
                return typeof t7;
              }, "o") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, o2(t6);
            }
            __name(o2, "o");
            function a(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, i2(n4.key), n4);
              }
            }
            __name(a, "a");
            function i2(t6) {
              var e5 = function(t7) {
                if ("object" != o2(t7) || !t7) return t7;
                var e6 = t7[Symbol.toPrimitive];
                if (void 0 !== e6) {
                  var _$r = e6.call(t7, "string");
                  if ("object" != o2(_$r)) return _$r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == o2(e5) ? e5 : e5 + "";
            }
            __name(i2, "i");
            function c2() {
              try {
                var _$t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                }));
              } catch (t6) {
              }
              return (c2 = /* @__PURE__ */ __name(function c3() {
                return !!_$t;
              }, "c"))();
            }
            __name(c2, "c");
            function u(t6) {
              return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ __name(function u2(t7) {
                return t7.__proto__ || Object.getPrototypeOf(t7);
              }, "u"), u(t6);
            }
            __name(u, "u");
            function l2(t6, e5) {
              return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ __name(function l3(t7, e6) {
                return t7.__proto__ = e6, t7;
              }, "l"), l2(t6, e5);
            }
            __name(l2, "l");
            var f, s, y = r4(874), p2 = y.ArrayIsArray, h = y.ArrayPrototypeIncludes, g = y.ArrayPrototypeIndexOf, v = y.ArrayPrototypeJoin, d = y.ArrayPrototypePush, b = y.ArrayPrototypeSlice, m2 = y.ArrayPrototypeSplice, S = y.Error, w = y.ErrorCaptureStackTrace, x = y.JSONStringify, P = y.ObjectDefineProperty, A = y.ReflectApply, O = y.RegExpPrototypeExec, _ = y.SafeMap, j = y.SafeWeakMap, E = y.String, k = y.StringPrototypeEndsWith, I = y.StringPrototypeIncludes, R = y.StringPrototypeIndexOf, L = y.StringPrototypeSlice, T = y.StringPrototypeToLowerCase, B = y.Symbol, z = y.TypeError, M = B("kIsNodeError"), N = new _(), C = {}, D = /^[A-Z][a-zA-Z0-9]*$/, F = [
              "string",
              "function",
              "number",
              "object",
              "Function",
              "Object",
              "boolean",
              "bigint",
              "symbol"
            ], W = new j(), G = r4(10), U = null;
            function H(t6, e5) {
              var _$r = function(t7) {
                function r5() {
                  var _$t, n5, _$a, l3;
                  (function(t8, e6) {
                    if (!(t8 instanceof e6)) throw new TypeError("Cannot call a class as a function");
                  })(this, r5), _$t = function(t8, e6, r6) {
                    return e6 = u(e6), function(t9, e7) {
                      if (e7 && ("object" == o2(e7) || "function" == typeof e7)) return e7;
                      if (void 0 !== e7) throw new TypeError("Derived constructors may only return object or undefined");
                      return function(t10) {
                        if (void 0 === t10) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t10;
                      }(t9);
                    }(t8, c2() ? Reflect.construct(e6, r6 || [], u(t8).constructor) : e6.apply(t8, r6));
                  }(this, r5), n5 = _$t, l3 = e5, (_$a = i2(_$a = "code")) in n5 ? Object.defineProperty(n5, _$a, {
                    value: l3,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : n5[_$a] = l3;
                  for (var f3 = arguments.length, s3 = new Array(f3), y2 = 0; y2 < f3; y2++) s3[y2] = arguments[y2];
                  return P(_$t, "message", {
                    __proto__: null,
                    value: Z(e5, s3, _$t),
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }), _$t;
                }
                __name(r5, "r");
                return function(t8, e6) {
                  if ("function" != typeof e6 && null !== e6) throw new TypeError("Super expression must either be null or a function");
                  t8.prototype = Object.create(e6 && e6.prototype, {
                    constructor: {
                      value: t8,
                      writable: true,
                      configurable: true
                    }
                  }), Object.defineProperty(t8, "prototype", {
                    writable: false
                  }), e6 && l2(t8, e6);
                }(r5, t7), n4 = r5, (f2 = [
                  {
                    key: "toString",
                    value: /* @__PURE__ */ __name(function value() {
                      return "".concat(this.name, " [").concat(e5, "]: ").concat(this.message);
                    }, "value")
                  }
                ]) && a(n4.prototype, f2), s2 && a(n4, s2), Object.defineProperty(n4, "prototype", {
                  writable: false
                }), n4;
                var n4, f2, s2;
              }(t6);
              return _$r;
            }
            __name(H, "H");
            function V(t6, e5, r5) {
              N.set(t6, e5);
              var n4 = H(r5, t6);
              C[t6] = n4;
            }
            __name(V, "V");
            function Z(t6, e5, r5) {
              var n4 = N.get(t6);
              if ("function" == typeof n4) return G(n4.length <= e5.length, "Code: ".concat(t6, "; The provided arguments length (").concat(e5.length, ") does not ") + "match the required ones (".concat(n4.length, ").")), A(n4, r5, e5);
            }
            __name(Z, "Z");
            var $ = B("kEnhanceStackBeforeInspector");
            function Y(t6) {
              if (null === t6) return "null";
              if (void 0 === t6) return "undefined";
              switch (o2(t6)) {
                case "bigint":
                  return "type bigint (".concat(t6, "n)");
                case "number":
                  return 0 === t6 ? 1 / t6 == -1 / 0 ? "type number (-0)" : "type number (0)" : t6 != t6 ? "type number (NaN)" : t6 === 1 / 0 ? "type number (Infinity)" : t6 === -1 / 0 ? "type number (-Infinity)" : "type number (".concat(t6, ")");
                case "boolean":
                  return t6 ? "type boolean (true)" : "type boolean (false)";
                case "symbol":
                  return "type symbol (".concat(E(t6), ")");
                case "function":
                  return "function ".concat(t6.name);
                case "object":
                  return t6.constructor && "name" in t6.constructor ? "an instance of ".concat(t6.constructor.name) : "".concat((U = U || r4(774)).inspect(t6, {
                    depth: -1
                  }));
                case "string":
                  return t6.length > 28 && (t6 = "".concat(L(t6, 0, 25), "...")), -1 === R(t6, "'") ? "type string ('".concat(t6, "')") : "type string (".concat(x(t6), ")");
              }
            }
            __name(Y, "Y");
            function q(t6) {
              var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "and";
              switch (t6.length) {
                case 0:
                  return "";
                case 1:
                  return "".concat(t6[0]);
                case 2:
                  return "".concat(t6[0], " ").concat(e5, " ").concat(t6[1]);
                case 3:
                  return "".concat(t6[0], ", ").concat(t6[1], ", ").concat(e5, " ").concat(t6[2]);
                default:
                  return "".concat(v(b(t6, 0, -1), ", "), ", ").concat(e5, " ").concat(t6[t6.length - 1]);
              }
            }
            __name(q, "q");
            t5.exports = {
              codes: C,
              determineSpecificType: Y,
              E: V,
              formatList: q,
              getMessage: Z,
              hideStackFrames: /* @__PURE__ */ __name(function hideStackFrames(t6) {
                function e5() {
                  try {
                    for (var _$r = arguments.length, n4 = new Array(_$r), o3 = 0; o3 < _$r; o3++) n4[o3] = arguments[o3];
                    return A(t6, this, n4);
                  } catch (t7) {
                    throw S.stackTraceLimit && w(t7, e5), t7;
                  }
                }
                __name(e5, "e");
                return e5.withoutStackTrace = t6, e5;
              }, "hideStackFrames"),
              isStackOverflowError: /* @__PURE__ */ __name(function isStackOverflowError(t6) {
                if (void 0 === s) try {
                  var e5 = /* @__PURE__ */ __name(function e1() {
                    e5();
                  }, "e1");
                  e5();
                } catch (t7) {
                  s = t7.message, f = t7.name;
                }
                return t6 && t6.name === f && t6.message === s;
              }, "isStackOverflowError"),
              kEnhanceStackBeforeInspector: $,
              kIsNodeError: M,
              overrideStackTrace: W
            }, V("ERR_INTERNAL_ASSERTION", function(t6) {
              var e5 = "This is caused by either a bug in Node.js or incorrect usage of Node.js internals.\nPlease open an issue with this stack trace at https://github.com/nodejs/node/issues\n";
              return void 0 === t6 ? e5 : "".concat(t6, "\n").concat(e5);
            }, S), V("ERR_INVALID_ARG_TYPE", function(t6, e5, r5) {
              G("string" == typeof t6, "'name' must be a string"), p2(e5) || (e5 = [
                e5
              ]);
              var o3 = "The ";
              if (k(t6, " argument")) o3 += "".concat(t6, " ");
              else {
                var a2 = I(t6, ".") ? "property" : "argument";
                o3 += '"'.concat(t6, '" ').concat(a2, " ");
              }
              o3 += "must be ";
              var i3, c3 = [], u2 = [], l3 = [], f2 = function(t7, e6) {
                var _$r = "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                if (!_$r) {
                  if (Array.isArray(t7) || (_$r = function(t8, e7) {
                    if (t8) {
                      if ("string" == typeof t8) return n3(t8, e7);
                      var _$r2 = {}.toString.call(t8).slice(8, -1);
                      return "Object" === _$r2 && t8.constructor && (_$r2 = t8.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t8) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? n3(t8, e7) : void 0;
                    }
                  }(t7)) || e6 && t7 && "number" == typeof t7.length) {
                    _$r && (t7 = _$r);
                    var o4 = 0, a3 = /* @__PURE__ */ __name(function a4() {
                    }, "a");
                    return {
                      s: a3,
                      n: /* @__PURE__ */ __name(function n4() {
                        return o4 >= t7.length ? {
                          done: true
                        } : {
                          done: false,
                          value: t7[o4++]
                        };
                      }, "n"),
                      e: /* @__PURE__ */ __name(function e7(t8) {
                        throw t8;
                      }, "e"),
                      f: a3
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i4, c4 = true, u3 = false;
                return {
                  s: /* @__PURE__ */ __name(function s3() {
                    _$r = _$r.call(t7);
                  }, "s"),
                  n: /* @__PURE__ */ __name(function n4() {
                    var _$t = _$r.next();
                    return c4 = _$t.done, _$t;
                  }, "n"),
                  e: /* @__PURE__ */ __name(function e7(t8) {
                    u3 = true, i4 = t8;
                  }, "e"),
                  f: /* @__PURE__ */ __name(function f3() {
                    try {
                      c4 || null == _$r.return || _$r.return();
                    } finally {
                      if (u3) throw i4;
                    }
                  }, "f")
                };
              }(e5);
              try {
                for (f2.s(); !(i3 = f2.n()).done; ) {
                  var s2 = i3.value;
                  G("string" == typeof s2, "All expected entries have to be of type string"), h(F, s2) ? d(c3, T(s2)) : null !== O(D, s2) ? d(u2, s2) : (G("object" !== s2, 'The value "object" should be written as "Object"'), d(l3, s2));
                }
              } catch (t7) {
                f2.e(t7);
              } finally {
                f2.f();
              }
              if (u2.length > 0) {
                var y2 = g(c3, "object");
                -1 !== y2 && (m2(c3, y2, 1), d(u2, "Object"));
              }
              return c3.length > 0 && (o3 += "".concat(c3.length > 1 ? "one of type" : "of type", " ").concat(q(c3, "or")), (u2.length > 0 || l3.length > 0) && (o3 += " or ")), u2.length > 0 && (o3 += "an instance of ".concat(q(u2, "or")), l3.length > 0 && (o3 += " or ")), l3.length > 0 && (l3.length > 1 ? o3 += "one of ".concat(q(l3, "or")) : (T(l3[0]) !== l3[0] && (o3 += "an "), o3 += "".concat(l3[0]))), o3 + ". Received ".concat(Y(r5));
            }, z);
          },
          838: (t5, e4, r4) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r4(874), a = o2.ArrayIsArray, i2 = o2.BigInt, c2 = o2.Boolean, u = o2.DatePrototype, l2 = o2.Error, f = o2.FunctionPrototype, s = o2.Number, y = o2.ObjectDefineProperty, p2 = o2.ObjectGetOwnPropertyDescriptor, h = o2.ObjectGetPrototypeOf, g = o2.ObjectIsFrozen, v = o2.ObjectPrototype, d = o2.String, b = o2.Symbol, m2 = o2.SymbolToStringTag, S = o2.globalThis, w = r4(292).getConstructorName;
            function x(t6) {
              for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), o3 = 1; o3 < e5; o3++) _$r[o3 - 1] = arguments[o3];
              for (var a2 = 0, i3 = _$r; a2 < i3.length; a2++) {
                var c3 = i3[a2], u2 = S[c3];
                if (u2 && t6 instanceof u2) return true;
              }
              for (; t6; ) {
                if ("object" !== n3(t6)) return false;
                if (_$r.indexOf(w(t6)) >= 0) return true;
                t6 = h(t6);
              }
              return false;
            }
            __name(x, "x");
            function P(t6) {
              return function(e5) {
                if (!x(e5, t6.name)) return false;
                try {
                  t6.prototype.valueOf.call(e5);
                } catch (t7) {
                  return false;
                }
                return true;
              };
            }
            __name(P, "P");
            "object" !== n3(S) && (y(v, "__magic__", {
              get: /* @__PURE__ */ __name(function get() {
                return this;
              }, "get"),
              configurable: true
            }), __magic__.globalThis = __magic__, delete v.__magic__);
            var A = P(d), O = P(s), _ = P(c2), j = P(i2), E = P(b);
            t5.exports = {
              isAsyncFunction: /* @__PURE__ */ __name(function isAsyncFunction(t6) {
                return "function" == typeof t6 && f.toString.call(t6).startsWith("async");
              }, "isAsyncFunction"),
              isGeneratorFunction: /* @__PURE__ */ __name(function isGeneratorFunction(t6) {
                return "function" == typeof t6 && f.toString.call(t6).match(/^(async\s+)?function *\*/);
              }, "isGeneratorFunction"),
              isAnyArrayBuffer: /* @__PURE__ */ __name(function isAnyArrayBuffer(t6) {
                return x(t6, "ArrayBuffer", "SharedArrayBuffer");
              }, "isAnyArrayBuffer"),
              isArrayBuffer: /* @__PURE__ */ __name(function isArrayBuffer(t6) {
                return x(t6, "ArrayBuffer");
              }, "isArrayBuffer"),
              isArgumentsObject: /* @__PURE__ */ __name(function isArgumentsObject(t6) {
                if (null !== t6 && "object" === n3(t6) && !a(t6) && "number" == typeof t6.length && t6.length === (0 | t6.length) && t6.length >= 0) {
                  var e5 = p2(t6, "callee");
                  return e5 && !e5.enumerable;
                }
                return false;
              }, "isArgumentsObject"),
              isBoxedPrimitive: /* @__PURE__ */ __name(function isBoxedPrimitive(t6) {
                return O(t6) || A(t6) || _(t6) || j(t6) || E(t6);
              }, "isBoxedPrimitive"),
              isDataView: /* @__PURE__ */ __name(function isDataView(t6) {
                return x(t6, "DataView");
              }, "isDataView"),
              isExternal: /* @__PURE__ */ __name(function isExternal(t6) {
                return "object" === n3(t6) && g(t6) && null == h(t6);
              }, "isExternal"),
              isMap: /* @__PURE__ */ __name(function isMap2(t6) {
                if (!x(t6, "Map")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isMap"),
              isMapIterator: /* @__PURE__ */ __name(function isMapIterator(t6) {
                return "[object Map Iterator]" === v.toString.call(h(t6));
              }, "isMapIterator"),
              isModuleNamespaceObject: /* @__PURE__ */ __name(function isModuleNamespaceObject(t6) {
                return t6 && "object" === n3(t6) && "Module" === t6[m2];
              }, "isModuleNamespaceObject"),
              isNativeError: /* @__PURE__ */ __name(function isNativeError(t6) {
                return t6 instanceof l2 && x(t6, "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError");
              }, "isNativeError"),
              isPromise: /* @__PURE__ */ __name(function isPromise(t6) {
                return x(t6, "Promise");
              }, "isPromise"),
              isSet: /* @__PURE__ */ __name(function isSet2(t6) {
                if (!x(t6, "Set")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isSet"),
              isSetIterator: /* @__PURE__ */ __name(function isSetIterator(t6) {
                return "[object Set Iterator]" === v.toString.call(h(t6));
              }, "isSetIterator"),
              isWeakMap: /* @__PURE__ */ __name(function isWeakMap(t6) {
                return x(t6, "WeakMap");
              }, "isWeakMap"),
              isWeakSet: /* @__PURE__ */ __name(function isWeakSet(t6) {
                return x(t6, "WeakSet");
              }, "isWeakSet"),
              isRegExp: /* @__PURE__ */ __name(function isRegExp(t6) {
                return x(t6, "RegExp");
              }, "isRegExp"),
              isDate: /* @__PURE__ */ __name(function isDate(t6) {
                if (x(t6, "Date")) try {
                  return u.getTime.call(t6), true;
                } catch (t7) {
                }
                return false;
              }, "isDate"),
              isTypedArray: /* @__PURE__ */ __name(function isTypedArray2(t6) {
                return x(t6, "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array");
              }, "isTypedArray"),
              isStringObject: A,
              isNumberObject: O,
              isBooleanObject: _,
              isBigIntObject: j,
              isSymbolObject: E
            };
          },
          859: (t5) => {
            t5.exports = URL;
          },
          874: (t5) => {
            function e4() {
              e4 = /* @__PURE__ */ __name(function e5() {
                return r5;
              }, "e");
              var _$t, r5 = {}, n4 = Object.prototype, o3 = n4.hasOwnProperty, a2 = "function" == typeof Symbol ? Symbol : {}, i3 = a2.iterator || "@@iterator", c3 = a2.asyncIterator || "@@asyncIterator", u2 = a2.toStringTag || "@@toStringTag";
              function l3(t6, e5, r6, n5) {
                return Object.defineProperty(t6, e5, {
                  value: r6,
                  enumerable: !n5,
                  configurable: !n5,
                  writable: !n5
                });
              }
              __name(l3, "l");
              try {
                l3({}, "");
              } catch (t6) {
                l3 = /* @__PURE__ */ __name(function l4(t7, e5, r6) {
                  return t7[e5] = r6;
                }, "l");
              }
              function f2(e5, r6, n5, o4) {
                var a3 = r6 && r6.prototype instanceof p3 ? r6 : p3, i4 = Object.create(a3.prototype);
                return l3(i4, "_invoke", /* @__PURE__ */ function(e6, r7, n6) {
                  var _$o = 1;
                  return function(a4, i5) {
                    if (3 === _$o) throw Error("Generator is already running");
                    if (4 === _$o) {
                      if ("throw" === a4) throw i5;
                      return {
                        value: _$t,
                        done: true
                      };
                    }
                    for (n6.method = a4, n6.arg = i5; ; ) {
                      var c4 = n6.delegate;
                      if (c4) {
                        var u3 = P2(c4, n6);
                        if (u3) {
                          if (u3 === y2) continue;
                          return u3;
                        }
                      }
                      if ("next" === n6.method) n6.sent = n6._sent = n6.arg;
                      else if ("throw" === n6.method) {
                        if (1 === _$o) throw _$o = 4, n6.arg;
                        n6.dispatchException(n6.arg);
                      } else "return" === n6.method && n6.abrupt("return", n6.arg);
                      _$o = 3;
                      var _$l = s2(e6, r7, n6);
                      if ("normal" === _$l.type) {
                        if (_$o = n6.done ? 4 : 2, _$l.arg === y2) continue;
                        return {
                          value: _$l.arg,
                          done: n6.done
                        };
                      }
                      "throw" === _$l.type && (_$o = 4, n6.method = "throw", n6.arg = _$l.arg);
                    }
                  };
                }(e5, n5, new _2(o4 || [])), true), i4;
              }
              __name(f2, "f");
              function s2(t6, e5, r6) {
                try {
                  return {
                    type: "normal",
                    arg: t6.call(e5, r6)
                  };
                } catch (t7) {
                  return {
                    type: "throw",
                    arg: t7
                  };
                }
              }
              __name(s2, "s");
              r5.wrap = f2;
              var y2 = {};
              function p3() {
              }
              __name(p3, "p");
              function h2() {
              }
              __name(h2, "h");
              function g2() {
              }
              __name(g2, "g");
              var _$d = {};
              l3(_$d, i3, function() {
                return this;
              });
              var _$b = Object.getPrototypeOf, m3 = _$b && _$b(_$b(j2([])));
              m3 && m3 !== n4 && o3.call(m3, i3) && (_$d = m3);
              var S2 = g2.prototype = p3.prototype = Object.create(_$d);
              function w2(t6) {
                [
                  "next",
                  "throw",
                  "return"
                ].forEach(function(e5) {
                  l3(t6, e5, function(t7) {
                    return this._invoke(e5, t7);
                  });
                });
              }
              __name(w2, "w");
              function x2(t6, e5) {
                function r6(n6, a3, i4, c4) {
                  var u3 = s2(t6[n6], t6, a3);
                  if ("throw" !== u3.type) {
                    var _$l = u3.arg, _$f = _$l.value;
                    return _$f && "object" == v(_$f) && o3.call(_$f, "__await") ? e5.resolve(_$f.__await).then(function(t7) {
                      r6("next", t7, i4, c4);
                    }, function(t7) {
                      r6("throw", t7, i4, c4);
                    }) : e5.resolve(_$f).then(function(t7) {
                      _$l.value = t7, i4(_$l);
                    }, function(t7) {
                      return r6("throw", t7, i4, c4);
                    });
                  }
                  c4(u3.arg);
                }
                __name(r6, "r");
                var n5;
                l3(this, "_invoke", function(t7, o4) {
                  function a3() {
                    return new e5(function(e6, n6) {
                      r6(t7, o4, e6, n6);
                    });
                  }
                  __name(a3, "a");
                  return n5 = n5 ? n5.then(a3, a3) : a3();
                }, true);
              }
              __name(x2, "x");
              function P2(e5, r6) {
                var n5 = r6.method, o4 = e5.i[n5];
                if (o4 === _$t) return r6.delegate = null, "throw" === n5 && e5.i.return && (r6.method = "return", r6.arg = _$t, P2(e5, r6), "throw" === r6.method) || "return" !== n5 && (r6.method = "throw", r6.arg = new TypeError("The iterator does not provide a '" + n5 + "' method")), y2;
                var a3 = s2(o4, e5.i, r6.arg);
                if ("throw" === a3.type) return r6.method = "throw", r6.arg = a3.arg, r6.delegate = null, y2;
                var i4 = a3.arg;
                return i4 ? i4.done ? (r6[e5.r] = i4.value, r6.next = e5.n, "return" !== r6.method && (r6.method = "next", r6.arg = _$t), r6.delegate = null, y2) : i4 : (r6.method = "throw", r6.arg = new TypeError("iterator result is not an object"), r6.delegate = null, y2);
              }
              __name(P2, "P");
              function A2(t6) {
                this.tryEntries.push(t6);
              }
              __name(A2, "A");
              function O2(e5) {
                var r6 = e5[4] || {};
                r6.type = "normal", r6.arg = _$t, e5[4] = r6;
              }
              __name(O2, "O");
              function _2(t6) {
                this.tryEntries = [
                  [
                    -1
                  ]
                ], t6.forEach(A2, this), this.reset(true);
              }
              __name(_2, "_");
              function j2(e5) {
                if (null != e5) {
                  var r6 = e5[i3];
                  if (r6) return r6.call(e5);
                  if ("function" == typeof e5.next) return e5;
                  if (!isNaN(e5.length)) {
                    var n5 = -1, a3 = /* @__PURE__ */ __name(function r7() {
                      for (; ++n5 < e5.length; ) if (o3.call(e5, n5)) return r7.value = e5[n5], r7.done = false, r7;
                      return r7.value = _$t, r7.done = true, r7;
                    }, "r");
                    return a3.next = a3;
                  }
                }
                throw new TypeError(v(e5) + " is not iterable");
              }
              __name(j2, "j");
              return h2.prototype = g2, l3(S2, "constructor", g2), l3(g2, "constructor", h2), h2.displayName = l3(g2, u2, "GeneratorFunction"), r5.isGeneratorFunction = function(t6) {
                var _$e = "function" == typeof t6 && t6.constructor;
                return !!_$e && (_$e === h2 || "GeneratorFunction" === (_$e.displayName || _$e.name));
              }, r5.mark = function(t6) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t6, g2) : (t6.__proto__ = g2, l3(t6, u2, "GeneratorFunction")), t6.prototype = Object.create(S2), t6;
              }, r5.awrap = function(t6) {
                return {
                  __await: t6
                };
              }, w2(x2.prototype), l3(x2.prototype, c3, function() {
                return this;
              }), r5.AsyncIterator = x2, r5.async = function(t6, e5, n5, o4, a3) {
                void 0 === a3 && (a3 = Promise);
                var i4 = new x2(f2(t6, e5, n5, o4), a3);
                return r5.isGeneratorFunction(e5) ? i4 : i4.next().then(function(t7) {
                  return t7.done ? t7.value : i4.next();
                });
              }, w2(S2), l3(S2, u2, "Generator"), l3(S2, i3, function() {
                return this;
              }), l3(S2, "toString", function() {
                return "[object Generator]";
              }), r5.keys = function(t6) {
                var _$e = Object(t6), r6 = [];
                for (var n5 in _$e) r6.unshift(n5);
                return /* @__PURE__ */ __name(function t7() {
                  for (; r6.length; ) if ((n5 = r6.pop()) in _$e) return t7.value = n5, t7.done = false, t7;
                  return t7.done = true, t7;
                }, "t");
              }, r5.values = j2, _2.prototype = {
                constructor: _2,
                reset: /* @__PURE__ */ __name(function reset(e5) {
                  if (this.prev = this.next = 0, this.sent = this._sent = _$t, this.done = false, this.delegate = null, this.method = "next", this.arg = _$t, this.tryEntries.forEach(O2), !e5) for (var r6 in this) "t" === r6.charAt(0) && o3.call(this, r6) && !isNaN(+r6.slice(1)) && (this[r6] = _$t);
                }, "reset"),
                stop: /* @__PURE__ */ __name(function stop() {
                  this.done = true;
                  var _$t2 = this.tryEntries[0][4];
                  if ("throw" === _$t2.type) throw _$t2.arg;
                  return this.rval;
                }, "stop"),
                dispatchException: /* @__PURE__ */ __name(function dispatchException(e5) {
                  if (this.done) throw e5;
                  var r6 = this;
                  function n5(t6) {
                    i4.type = "throw", i4.arg = e5, r6.next = t6;
                  }
                  __name(n5, "n");
                  for (var o4 = r6.tryEntries.length - 1; o4 >= 0; --o4) {
                    var a3 = this.tryEntries[o4], i4 = a3[4], c4 = this.prev, u3 = a3[1], _$l = a3[2];
                    if (-1 === a3[0]) return n5("end"), false;
                    if (!u3 && !_$l) throw Error("try statement without catch or finally");
                    if (null != a3[0] && a3[0] <= c4) {
                      if (c4 < u3) return this.method = "next", this.arg = _$t, n5(u3), true;
                      if (c4 < _$l) return n5(_$l), false;
                    }
                  }
                }, "dispatchException"),
                abrupt: /* @__PURE__ */ __name(function abrupt(t6, e5) {
                  for (var r6 = this.tryEntries.length - 1; r6 >= 0; --r6) {
                    var n5 = this.tryEntries[r6];
                    if (n5[0] > -1 && n5[0] <= this.prev && this.prev < n5[2]) {
                      var o4 = n5;
                      break;
                    }
                  }
                  o4 && ("break" === t6 || "continue" === t6) && o4[0] <= e5 && e5 <= o4[2] && (o4 = null);
                  var a3 = o4 ? o4[4] : {};
                  return a3.type = t6, a3.arg = e5, o4 ? (this.method = "next", this.next = o4[2], y2) : this.complete(a3);
                }, "abrupt"),
                complete: /* @__PURE__ */ __name(function complete(t6, e5) {
                  if ("throw" === t6.type) throw t6.arg;
                  return "break" === t6.type || "continue" === t6.type ? this.next = t6.arg : "return" === t6.type ? (this.rval = this.arg = t6.arg, this.method = "return", this.next = "end") : "normal" === t6.type && e5 && (this.next = e5), y2;
                }, "complete"),
                finish: /* @__PURE__ */ __name(function finish(t6) {
                  for (var _$e = this.tryEntries.length - 1; _$e >= 0; --_$e) {
                    var r6 = this.tryEntries[_$e];
                    if (r6[2] === t6) return this.complete(r6[4], r6[3]), O2(r6), y2;
                  }
                }, "finish"),
                catch: /* @__PURE__ */ __name(function _catch(t6) {
                  for (var _$e = this.tryEntries.length - 1; _$e >= 0; --_$e) {
                    var r6 = this.tryEntries[_$e];
                    if (r6[0] === t6) {
                      var n5 = r6[4];
                      if ("throw" === n5.type) {
                        var o4 = n5.arg;
                        O2(r6);
                      }
                      return o4;
                    }
                  }
                  throw Error("illegal catch attempt");
                }, "_catch"),
                delegateYield: /* @__PURE__ */ __name(function delegateYield(e5, r6, n5) {
                  return this.delegate = {
                    i: j2(e5),
                    r: r6,
                    n: n5
                  }, "next" === this.method && (this.arg = _$t), y2;
                }, "delegateYield")
              }, r5;
            }
            __name(e4, "e");
            function r4(t6, e5, r5) {
              return e5 = o2(e5), function(t7, e6) {
                if (e6 && ("object" == v(e6) || "function" == typeof e6)) return e6;
                if (void 0 !== e6) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t8) {
                  if (void 0 === t8) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t8;
                }(t7);
              }(t6, n3() ? Reflect.construct(e5, r5 || [], o2(t6).constructor) : e5.apply(t6, r5));
            }
            __name(r4, "r");
            function n3() {
              try {
                var _$t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                }));
              } catch (t6) {
              }
              return (n3 = /* @__PURE__ */ __name(function n4() {
                return !!_$t;
              }, "n"))();
            }
            __name(n3, "n");
            function o2(t6) {
              return o2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ __name(function o3(t7) {
                return t7.__proto__ || Object.getPrototypeOf(t7);
              }, "o"), o2(t6);
            }
            __name(o2, "o");
            function a(t6, e5) {
              if ("function" != typeof e5 && null !== e5) throw new TypeError("Super expression must either be null or a function");
              t6.prototype = Object.create(e5 && e5.prototype, {
                constructor: {
                  value: t6,
                  writable: true,
                  configurable: true
                }
              }), Object.defineProperty(t6, "prototype", {
                writable: false
              }), e5 && i2(t6, e5);
            }
            __name(a, "a");
            function i2(t6, e5) {
              return i2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ __name(function i3(t7, e6) {
                return t7.__proto__ = e6, t7;
              }, "i"), i2(t6, e5);
            }
            __name(i2, "i");
            function c2(t6, e5) {
              if (!(t6 instanceof e5)) throw new TypeError("Cannot call a class as a function");
            }
            __name(c2, "c");
            function u(t6, e5) {
              for (var r5 = 0; r5 < e5.length; r5++) {
                var n4 = e5[r5];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, p2(n4.key), n4);
              }
            }
            __name(u, "u");
            function l2(t6, e5, r5) {
              return e5 && u(t6.prototype, e5), r5 && u(t6, r5), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
            }
            __name(l2, "l");
            function f(t6, e5) {
              var r5 = Object.keys(t6);
              if (Object.getOwnPropertySymbols) {
                var n4 = Object.getOwnPropertySymbols(t6);
                e5 && (n4 = n4.filter(function(e6) {
                  return Object.getOwnPropertyDescriptor(t6, e6).enumerable;
                })), r5.push.apply(r5, n4);
              }
              return r5;
            }
            __name(f, "f");
            function s(t6) {
              for (var _$e = 1; _$e < arguments.length; _$e++) {
                var r5 = null != arguments[_$e] ? arguments[_$e] : {};
                _$e % 2 ? f(Object(r5), true).forEach(function(e5) {
                  y(t6, e5, r5[e5]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t6, Object.getOwnPropertyDescriptors(r5)) : f(Object(r5)).forEach(function(e5) {
                  Object.defineProperty(t6, e5, Object.getOwnPropertyDescriptor(r5, e5));
                });
              }
              return t6;
            }
            __name(s, "s");
            function y(t6, e5, r5) {
              return (e5 = p2(e5)) in t6 ? Object.defineProperty(t6, e5, {
                value: r5,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t6[e5] = r5, t6;
            }
            __name(y, "y");
            function p2(t6) {
              var _$e = function(t7) {
                if ("object" != v(t7) || !t7) return t7;
                var _$e2 = t7[Symbol.toPrimitive];
                if (void 0 !== _$e2) {
                  var r5 = _$e2.call(t7, "string");
                  if ("object" != v(r5)) return r5;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == v(_$e) ? _$e : _$e + "";
            }
            __name(p2, "p");
            function h(t6, e5) {
              var r5 = "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
              if (!r5) {
                if (Array.isArray(t6) || (r5 = function(t7, e6) {
                  if (t7) {
                    if ("string" == typeof t7) return g(t7, e6);
                    var r6 = {}.toString.call(t7).slice(8, -1);
                    return "Object" === r6 && t7.constructor && (r6 = t7.constructor.name), "Map" === r6 || "Set" === r6 ? Array.from(t7) : "Arguments" === r6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r6) ? g(t7, e6) : void 0;
                  }
                }(t6)) || e5 && t6 && "number" == typeof t6.length) {
                  r5 && (t6 = r5);
                  var n4 = 0, o3 = /* @__PURE__ */ __name(function o4() {
                  }, "o");
                  return {
                    s: o3,
                    n: /* @__PURE__ */ __name(function n1() {
                      return n4 >= t6.length ? {
                        done: true
                      } : {
                        done: false,
                        value: t6[n4++]
                      };
                    }, "n1"),
                    e: /* @__PURE__ */ __name(function e6(t7) {
                      throw t7;
                    }, "e"),
                    f: o3
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a2, i3 = true, c3 = false;
              return {
                s: /* @__PURE__ */ __name(function s2() {
                  r5 = r5.call(t6);
                }, "s"),
                n: /* @__PURE__ */ __name(function n5() {
                  var _$t = r5.next();
                  return i3 = _$t.done, _$t;
                }, "n"),
                e: /* @__PURE__ */ __name(function e6(t7) {
                  c3 = true, a2 = t7;
                }, "e"),
                f: /* @__PURE__ */ __name(function f2() {
                  try {
                    i3 || null == r5.return || r5.return();
                  } finally {
                    if (c3) throw a2;
                  }
                }, "f")
              };
            }
            __name(h, "h");
            function g(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var r5 = 0, n4 = Array(e5); r5 < e5; r5++) n4[r5] = t6[r5];
              return n4;
            }
            __name(g, "g");
            function v(t6) {
              return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function v2(t7) {
                return typeof t7;
              }, "v") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, v(t6);
            }
            __name(v, "v");
            function d(t6) {
              return function() {
                return new b(t6.apply(this, arguments));
              };
            }
            __name(d, "d");
            function b(t6) {
              var _$e, r5;
              function n4(e5, r6) {
                try {
                  var a2 = t6[e5](r6), i3 = a2.value, c3 = i3 instanceof m2;
                  Promise.resolve(c3 ? i3.v : i3).then(function(r7) {
                    if (c3) {
                      var u2 = "return" === e5 ? "return" : "next";
                      if (!i3.k || r7.done) return n4(u2, r7);
                      r7 = t6[u2](r7).value;
                    }
                    o3(a2.done ? "return" : "normal", r7);
                  }, function(t7) {
                    n4("throw", t7);
                  });
                } catch (t7) {
                  o3("throw", t7);
                }
              }
              __name(n4, "n");
              function o3(t7, o4) {
                switch (t7) {
                  case "return":
                    _$e.resolve({
                      value: o4,
                      done: true
                    });
                    break;
                  case "throw":
                    _$e.reject(o4);
                    break;
                  default:
                    _$e.resolve({
                      value: o4,
                      done: false
                    });
                }
                (_$e = _$e.next) ? n4(_$e.key, _$e.arg) : r5 = null;
              }
              __name(o3, "o");
              this._invoke = function(t7, o4) {
                return new Promise(function(a2, i3) {
                  var c3 = {
                    key: t7,
                    arg: o4,
                    resolve: a2,
                    reject: i3,
                    next: null
                  };
                  r5 ? r5 = r5.next = c3 : (_$e = r5 = c3, n4(t7, o4));
                });
              }, "function" != typeof t6.return && (this.return = void 0);
            }
            __name(b, "b");
            function m2(t6, e5) {
              this.v = t6, this.k = e5;
            }
            __name(m2, "m");
            b.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
              return this;
            }, b.prototype.next = function(t6) {
              return this._invoke("next", t6);
            }, b.prototype.throw = function(t6) {
              return this._invoke("throw", t6);
            }, b.prototype.return = function(t6) {
              return this._invoke("return", t6);
            };
            var S = {
              __proto__: null
            }, w = Reflect.defineProperty, x = Reflect.getOwnPropertyDescriptor, P = Reflect.ownKeys, A = Function.prototype, O = A.apply, _ = A.bind, j = A.call, E = _.bind(j);
            S.uncurryThis = E;
            var k = _.bind(O);
            S.applyBind = k;
            var I = [
              "ArrayOf",
              "ArrayPrototypePush",
              "ArrayPrototypeUnshift",
              "MathHypot",
              "MathMax",
              "MathMin",
              "StringFromCharCode",
              "StringFromCodePoint",
              "StringPrototypeConcat",
              "TypedArrayOf"
            ];
            function R(t6) {
              return "symbol" === v(t6) ? "Symbol".concat(t6.description[7].toUpperCase()).concat(t6.description.slice(8)) : "".concat(t6[0].toUpperCase()).concat(t6.slice(1));
            }
            __name(R, "R");
            function L(t6, e5, r5, n4) {
              var o3 = n4.enumerable, a2 = n4.get, i3 = n4.set;
              w(t6, "".concat(e5, "Get").concat(r5), {
                __proto__: null,
                value: E(a2),
                enumerable: o3
              }), void 0 !== i3 && w(t6, "".concat(e5, "Set").concat(r5), {
                __proto__: null,
                value: E(i3),
                enumerable: o3
              });
            }
            __name(L, "L");
            function T(t6, e5, r5) {
              var n4, o3 = h(P(t6));
              try {
                for (o3.s(); !(n4 = o3.n()).done; ) {
                  var a2 = n4.value, i3 = R(a2), c3 = x(t6, a2);
                  if ("get" in c3) L(e5, r5, i3, c3);
                  else {
                    var u2 = "".concat(r5).concat(i3);
                    w(e5, u2, s({
                      __proto__: null
                    }, c3)), I.includes(u2) && w(e5, "".concat(u2, "Apply"), {
                      __proto__: null,
                      value: k(c3.value, t6)
                    });
                  }
                }
              } catch (t7) {
                o3.e(t7);
              } finally {
                o3.f();
              }
            }
            __name(T, "T");
            function B(t6, e5, r5) {
              var n4, o3 = h(P(t6));
              try {
                for (o3.s(); !(n4 = o3.n()).done; ) {
                  var a2 = n4.value, i3 = R(a2), c3 = x(t6, a2);
                  if ("get" in c3) L(e5, r5, i3, c3);
                  else {
                    var u2 = c3.value;
                    "function" == typeof u2 && (c3.value = E(u2));
                    var l3 = "".concat(r5).concat(i3);
                    w(e5, l3, s({
                      __proto__: null
                    }, c3)), I.includes(l3) && w(e5, "".concat(l3, "Apply"), {
                      __proto__: null,
                      value: k(u2)
                    });
                  }
                }
              } catch (t7) {
                o3.e(t7);
              } finally {
                o3.f();
              }
            }
            __name(B, "B");
            [
              "Proxy",
              "globalThis"
            ].forEach(function(t6) {
              S[t6] = globalThis[t6];
            }), [
              decodeURI,
              decodeURIComponent,
              encodeURI,
              encodeURIComponent
            ].forEach(function(t6) {
              S[t6.name] = t6;
            }), [
              escape,
              eval,
              unescape
            ].forEach(function(t6) {
              S[t6.name] = t6;
            }), [
              "Atomics",
              "JSON",
              "Math",
              "Proxy",
              "Reflect"
            ].forEach(function(t6) {
              T(globalThis[t6], S, t6);
            }), [
              "AggregateError",
              "Array",
              "ArrayBuffer",
              "BigInt",
              "BigInt64Array",
              "BigUint64Array",
              "Boolean",
              "DataView",
              "Date",
              "Error",
              "EvalError",
              "FinalizationRegistry",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int16Array",
              "Int32Array",
              "Int8Array",
              "Map",
              "Number",
              "Object",
              "RangeError",
              "ReferenceError",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "SyntaxError",
              "TypeError",
              "URIError",
              "Uint16Array",
              "Uint32Array",
              "Uint8Array",
              "Uint8ClampedArray",
              "WeakMap",
              "WeakRef",
              "WeakSet"
            ].forEach(function(t6) {
              var _$e = globalThis[t6];
              _$e && (S[t6] = _$e, T(_$e, S, t6), B(_$e.prototype, S, "".concat(t6, "Prototype")));
            }), [
              "Promise"
            ].forEach(function(t6) {
              var _$e = globalThis[t6];
              S[t6] = _$e, function(t7, e5, r5) {
                var n4, o3 = h(P(t7));
                try {
                  for (o3.s(); !(n4 = o3.n()).done; ) {
                    var a2 = n4.value, i3 = R(a2), c3 = x(t7, a2);
                    if ("get" in c3) L(e5, r5, i3, c3);
                    else {
                      var u2 = c3.value;
                      "function" == typeof u2 && (c3.value = u2.bind(t7));
                      var l3 = "".concat(r5).concat(i3);
                      w(e5, l3, s({
                        __proto__: null
                      }, c3));
                    }
                  }
                } catch (t8) {
                  o3.e(t8);
                } finally {
                  o3.f();
                }
              }(_$e, S, t6), B(_$e.prototype, S, "".concat(t6, "Prototype"));
            }), [
              {
                name: "TypedArray",
                original: Reflect.getPrototypeOf(Uint8Array)
              },
              {
                name: "ArrayIterator",
                original: {
                  prototype: Reflect.getPrototypeOf(Array.prototype[Symbol.iterator]())
                }
              },
              {
                name: "StringIterator",
                original: {
                  prototype: Reflect.getPrototypeOf(String.prototype[Symbol.iterator]())
                }
              }
            ].forEach(function(t6) {
              var _$e = t6.name, r5 = t6.original;
              S[_$e] = r5, B(r5, S, _$e), B(r5.prototype, S, "".concat(_$e, "Prototype"));
            }), S.IteratorPrototype = Reflect.getPrototypeOf(S.ArrayIteratorPrototype);
            var z = S.ArrayPrototypeForEach, M = S.FinalizationRegistry, N = S.FunctionPrototypeCall, C = S.Map, D = S.ObjectFreeze, F = S.ObjectSetPrototypeOf, W = S.RegExp, G = S.Set, U = S.SymbolIterator, H = S.WeakMap, V = S.WeakRef, Z = S.WeakSet, $ = /* @__PURE__ */ __name(function $2(t6, e5) {
              var r5 = function() {
                return l2(/* @__PURE__ */ __name(function e6(r6) {
                  c2(this, e6), this._iterator = t6(r6);
                }, "e"), [
                  {
                    key: "next",
                    value: /* @__PURE__ */ __name(function value() {
                      return e5(this._iterator);
                    }, "value")
                  },
                  {
                    key: U,
                    value: /* @__PURE__ */ __name(function value() {
                      return this;
                    }, "value")
                  }
                ]);
              }();
              return F(r5.prototype, null), D(r5.prototype), D(r5), r5;
            }, "$");
            S.SafeArrayIterator = $(S.ArrayPrototypeSymbolIterator, S.ArrayIteratorPrototypeNext), S.SafeStringIterator = $(S.StringPrototypeSymbolIterator, S.StringIteratorPrototypeNext);
            var Y = /* @__PURE__ */ __name(function Y2(t6, e5) {
              z(P(t6), function(r5) {
                x(e5, r5) || w(e5, r5, s({
                  __proto__: null
                }, x(t6, r5)));
              });
            }, "Y"), q = /* @__PURE__ */ __name(function q2(t6, e5) {
              if (U in t6.prototype) {
                var r5, n4 = new t6();
                z(P(t6.prototype), function(o3) {
                  if (!x(e5.prototype, o3)) {
                    var a2, i3 = x(t6.prototype, o3);
                    if ("function" == typeof i3.value && 0 === i3.value.length && U in (null !== (a2 = N(i3.value, n4)) && void 0 !== a2 ? a2 : {})) {
                      var c3 = E(i3.value);
                      r5 = r5 || E(c3(n4).next);
                      var u2 = $(c3, r5);
                      i3.value = function() {
                        return new u2(this);
                      };
                    }
                    w(e5.prototype, o3, s({
                      __proto__: null
                    }, i3));
                  }
                });
              } else Y(t6.prototype, e5.prototype);
              return Y(t6, e5), F(e5.prototype, null), D(e5.prototype), D(e5), e5;
            }, "q");
            S.makeSafe = q, S.SafeMap = q(C, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(C)), S.SafeWeakMap = q(H, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(H)), S.SafeSet = q(G, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(G)), S.SafeWeakSet = q(Z, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(Z)), S.SafeFinalizationRegistry = q(M, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(M)), S.SafeWeakRef = q(V, function(t6) {
              function e5(t7) {
                return c2(this, e5), r4(this, e5, [
                  t7
                ]);
              }
              __name(e5, "e");
              return a(e5, t6), l2(e5);
            }(V)), S.AsyncIteratorPrototype = S.ReflectGetPrototypeOf(d(e4().mark(/* @__PURE__ */ __name(function t6() {
              return e4().wrap(function(t7) {
                for (; ; ) switch (t7.prev = t7.next) {
                  case 0:
                  case "end":
                    return t7.stop();
                }
              }, t6);
            }, "t")))).prototype, S.internalBinding = function(t6) {
              if ("config" === t6) return {
                hasIntl: false
              };
              throw new Error('unknown module: "'.concat(t6, '"'));
            }, S._stringPrototypeReplaceAll = function(t6, e5, r5) {
              return "[object regexp]" === Object.prototype.toString.call(e5).toLowerCase() ? t6.replace(e5, r5) : t6.replace(new W(e5, "g"), r5);
            }, S.StringPrototypeReplaceAll = S.StringPrototypeReplaceAll || S._stringPrototypeReplaceAll, F(S, null), D(S), t5.exports = S;
          },
          883: (t5, e4, r4) => {
            var n3 = r4(874), o2 = n3.StringPrototypeCharCodeAt, a = n3.StringPrototypeLastIndexOf, i2 = n3.StringPrototypeSlice, c2 = r4(791), u = c2.CHAR_DOT, l2 = c2.CHAR_FORWARD_SLASH, f = r4(487).validateString;
            function s(t6) {
              return t6 === l2;
            }
            __name(s, "s");
            function y(t6, e5, r5, n4) {
              for (var c3 = "", f2 = 0, _$s = -1, _$y = 0, p2 = 0, h = 0; h <= t6.length; ++h) {
                if (h < t6.length) p2 = o2(t6, h);
                else {
                  if (n4(p2)) break;
                  p2 = l2;
                }
                if (n4(p2)) {
                  if (_$s === h - 1 || 1 === _$y) ;
                  else if (2 === _$y) {
                    if (c3.length < 2 || 2 !== f2 || o2(c3, c3.length - 1) !== u || o2(c3, c3.length - 2) !== u) {
                      if (c3.length > 2) {
                        var g = a(c3, r5);
                        -1 === g ? (c3 = "", f2 = 0) : f2 = (c3 = i2(c3, 0, g)).length - 1 - a(c3, r5), _$s = h, _$y = 0;
                        continue;
                      }
                      if (0 !== c3.length) {
                        c3 = "", f2 = 0, _$s = h, _$y = 0;
                        continue;
                      }
                    }
                    e5 && (c3 += c3.length > 0 ? "".concat(r5, "..") : "..", f2 = 2);
                  } else c3.length > 0 ? c3 += "".concat(r5).concat(i2(t6, _$s + 1, h)) : c3 = i2(t6, _$s + 1, h), f2 = h - _$s - 1;
                  _$s = h, _$y = 0;
                } else p2 === u && -1 !== _$y ? ++_$y : _$y = -1;
              }
              return c3;
            }
            __name(y, "y");
            t5.exports = {
              isPosixPathSeparator: s,
              normalizeString: y,
              resolve: /* @__PURE__ */ __name(function resolve() {
                for (var _$t = "", e5 = false, _$r = arguments.length - 1; _$r >= -1 && !e5; _$r--) {
                  var n4 = _$r >= 0 ? _$r < 0 || arguments.length <= _$r ? void 0 : arguments[_$r] : "/";
                  f(n4, "path"), 0 !== n4.length && (_$t = "".concat(n4, "/").concat(_$t), e5 = o2(n4, 0) === l2);
                }
                return _$t = y(_$t, !e5, "/", s), e5 ? "/".concat(_$t) : _$t.length > 0 ? _$t : ".";
              }, "resolve")
            };
          }
        }, e3 = {};
        return (/* @__PURE__ */ __name(function r4(n3) {
          var o2 = e3[n3];
          if (void 0 !== o2) return o2.exports;
          var a = e3[n3] = {
            exports: {}
          };
          return t4[n3](a, a.exports, r4), a.exports;
        }, "r"))(774);
      })());
    }
  });

  // node_modules/node-inspect-extracted/index.mjs
  var import_inspect, inspect, format, formatWithOptions, stripVTControlCharacters, stylizeWithColor, stylizeWithHTML, Proxy2;
  var init_node_inspect_extracted = __esm({
    "node_modules/node-inspect-extracted/index.mjs"() {
      import_inspect = __toESM(require_inspect(), 1);
      ({
        inspect: (
          // The commented out things are not visible from normal node's util.
          // identicalSequenceRange,
          inspect
        ),
        format: (
          // inspectDefaultOptions,
          format
        ),
        formatWithOptions,
        stripVTControlCharacters: (
          // getStringWidth,
          stripVTControlCharacters
        ),
        stylizeWithColor: (
          // isZeroWidthCodePoint,
          stylizeWithColor
        ),
        stylizeWithHTML,
        Proxy: Proxy2
      } = import_inspect.default);
    }
  });

  // src/api/logger.ts
  var logger_exports = {};
  __export(logger_exports, {
    wtlogger: () => wtlogger
  });
  var Logger, wtlogger;
  var init_logger = __esm({
    "src/api/logger.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_node_inspect_extracted();
      Logger = /* @__PURE__ */ function() {
        "use strict";
        function Logger2(name) {
          _class_call_check(this, Logger2);
          _define_property(this, "name", void 0);
          _define_property(this, "breadcrumbs", []);
          _define_property(this, "parent", null);
          _define_property(this, "logs", []);
          _define_property(this, "logHandlers", /* @__PURE__ */ new Set());
          this.name = name;
          if (this.breadcrumbs.length === 0) {
            this.breadcrumbs.push(name);
          }
        }
        __name(Logger2, "Logger");
        _create_class(Logger2, [
          {
            key: "executeOnSelfAndAncestors",
            value: /* @__PURE__ */ __name(function executeOnSelfAndAncestors(fn) {
              fn(this);
              var parent = this.parent;
              while (parent) {
                fn(parent);
                parent = parent.parent;
              }
            }, "executeOnSelfAndAncestors")
          },
          {
            key: "createChild",
            value: /* @__PURE__ */ __name(function createChild(name) {
              var logger22 = new Logger2(name);
              logger22.parent = this;
              logger22.breadcrumbs = [
                ...this.breadcrumbs,
                name
              ];
              return logger22;
            }, "createChild")
          },
          {
            key: "log",
            value: /* @__PURE__ */ __name(function log(level, message, ...substitutions) {
              if (typeof message === "object") {
                message = String.raw(message, ...substitutions);
              }
              this.executeOnSelfAndAncestors((logger22) => {
                var logParameters = {
                  message,
                  level,
                  timestamp: Date.now(),
                  breadcrumbs: this.breadcrumbs
                };
                if (level === "error") {
                  var error = substitutions.find((a) => a instanceof Error);
                  logParameters.errorStack = error?.stack;
                }
                if (logger22.logHandlers.size > 0) {
                  for (var handler of logger22.logHandlers) {
                    handler(logParameters);
                  }
                }
                logger22.logs.push(logParameters);
              });
            }, "log")
          },
          {
            key: "info",
            value: /* @__PURE__ */ __name(function info(message, ...substitutions) {
              this.log("info", message, ...substitutions);
            }, "info")
          },
          {
            key: "warn",
            value: /* @__PURE__ */ __name(function warn(message, ...substitutions) {
              this.log("warn", message, ...substitutions);
            }, "warn")
          },
          {
            key: "error",
            value: /* @__PURE__ */ __name(function error(message, ...substitutions) {
              this.log("error", message, ...substitutions);
            }, "error")
          },
          {
            key: "debug",
            value: /* @__PURE__ */ __name(function debug(message, ...substitutions) {
              this.log("debug", message, ...substitutions);
            }, "debug")
          },
          {
            key: "inspect",
            value: /* @__PURE__ */ __name(function inspect1(...data) {
              var inspected = "";
              if (data.length === 1) {
                inspected = inspect(data[0]);
              } else {
                inspected = inspect(data);
              }
              this.log("debug", inspected);
            }, "inspect1")
          },
          {
            key: "pipe",
            value: /* @__PURE__ */ __name(function pipe(logHandler) {
              this.executeOnSelfAndAncestors((logger22) => {
                logger22.logHandlers.add(logHandler);
              });
              return () => this.unpipe(logHandler);
            }, "pipe")
          },
          {
            key: "unpipe",
            value: /* @__PURE__ */ __name(function unpipe(logHandler) {
              this.executeOnSelfAndAncestors((logger22) => {
                logger22.logHandlers.delete(logHandler);
              });
            }, "unpipe")
          },
          {
            key: "unpipeAll",
            value: /* @__PURE__ */ __name(function unpipeAll() {
              this.executeOnSelfAndAncestors((logger22) => {
                if (logger22 === this) return;
                for (var handler of this.logHandlers) {
                  if (logger22.logHandlers.has(handler)) {
                    logger22.logHandlers.delete(handler);
                  }
                }
              });
              this.logHandlers.clear();
            }, "unpipeAll")
          }
        ]);
        return Logger2;
      }();
      wtlogger = new Logger("BlazeCord");
    }
  });

  // shims/emptyModule.ts
  var init_emptyModule = __esm({
    "shims/emptyModule.ts"() {
      "use strict";
    }
  });

  // src/error-reporter.ts
  var error_reporter_exports = {};
  __export(error_reporter_exports, {
    default: () => reportErrorOnInitialization
  });
  function getStackTrace(error) {
    if (error instanceof Error) {
      return error.stack;
    }
    return String(error) || "<unknown error>";
  }
  function maybeLogError(error) {
    var stackTrace = getStackTrace(error);
    hookDefineProperty(window, "console", (console2) => {
      console2.error(`An error occurred during initialization: ${stackTrace}`);
    });
  }
  function maybeAlertError(error) {
    var stackTrace = getStackTrace(error);
    hookDefineProperty(window, "alert", (alert2) => {
      alert2(`BlazeCord failed due to an error: ${stackTrace}`);
    });
  }
  function reportErrorOnInitialization(error) {
    maybeLogError(error);
    maybeAlertError(error);
  }
  var init_error_reporter = __esm({
    "src/error-reporter.ts"() {
      "use strict";
      init_emptyModule();
      init_objects();
      __name(getStackTrace, "getStackTrace");
      __name(maybeLogError, "maybeLogError");
      __name(maybeAlertError, "maybeAlertError");
      __name(reportErrorOnInitialization, "reportErrorOnInitialization");
    }
  });

  // node_modules/es-toolkit/dist/error/AbortError.mjs
  var AbortError;
  var init_AbortError = __esm({
    "node_modules/es-toolkit/dist/error/AbortError.mjs"() {
      init_call_super();
      init_class_call_check();
      init_inherits();
      init_wrap_native_super();
      AbortError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(AbortError2, Error1);
        function AbortError2(message = "The operation was aborted") {
          _class_call_check(this, AbortError2);
          var _this;
          _this = _call_super(this, AbortError2, [
            message
          ]);
          _this.name = "AbortError";
          return _this;
        }
        __name(AbortError2, "AbortError");
        return AbortError2;
      }(_wrap_native_super(Error));
    }
  });

  // node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        __name(_next, "_next");
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        __name(_throw, "_throw");
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/@swc/helpers/esm/_async_to_generator.js"() {
      __name(asyncGeneratorStep, "asyncGeneratorStep");
      __name(_async_to_generator, "_async_to_generator");
    }
  });

  // node_modules/es-toolkit/dist/function/debounce.mjs
  function debounce(func, debounceMs, { signal, edges } = {}) {
    var pendingThis = void 0;
    var pendingArgs = null;
    var leading = edges != null && edges.includes("leading");
    var trailing = edges == null || edges.includes("trailing");
    var invoke = /* @__PURE__ */ __name(() => {
      if (pendingArgs !== null) {
        func.apply(pendingThis, pendingArgs);
        pendingThis = void 0;
        pendingArgs = null;
      }
    }, "invoke");
    var onTimerEnd = /* @__PURE__ */ __name(() => {
      if (trailing) {
        invoke();
      }
      cancel();
    }, "onTimerEnd");
    var timeoutId = null;
    var schedule = /* @__PURE__ */ __name(() => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        onTimerEnd();
      }, debounceMs);
    }, "schedule");
    var cancelTimer = /* @__PURE__ */ __name(() => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }, "cancelTimer");
    var cancel = /* @__PURE__ */ __name(() => {
      cancelTimer();
      pendingThis = void 0;
      pendingArgs = null;
    }, "cancel");
    var flush = /* @__PURE__ */ __name(() => {
      cancelTimer();
      invoke();
    }, "flush");
    var debounced = /* @__PURE__ */ __name(function debounced2(...args) {
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
    }, "debounced");
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener("abort", cancel, {
      once: true
    });
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/es-toolkit/dist/function/debounce.mjs"() {
      __name(debounce, "debounce");
    }
  });

  // node_modules/es-toolkit/dist/function/memoize.mjs
  function memoize(fn, options = {}) {
    var { cache = /* @__PURE__ */ new Map(), getCacheKey } = options;
    var memoizedFn = /* @__PURE__ */ __name(function memoizedFn2(arg) {
      var key = getCacheKey ? getCacheKey(arg) : arg;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = fn.call(this, arg);
      cache.set(key, result);
      return result;
    }, "memoizedFn");
    memoizedFn.cache = cache;
    return memoizedFn;
  }
  var init_memoize = __esm({
    "node_modules/es-toolkit/dist/function/memoize.mjs"() {
      __name(memoize, "memoize");
    }
  });

  // node_modules/es-toolkit/dist/function/noop.mjs
  function noop() {
  }
  var init_noop = __esm({
    "node_modules/es-toolkit/dist/function/noop.mjs"() {
      __name(noop, "noop");
    }
  });

  // node_modules/es-toolkit/dist/promise/delay.mjs
  function delay(ms, { signal } = {}) {
    return new Promise((resolve, reject) => {
      var abortError = /* @__PURE__ */ __name(() => {
        reject(new AbortError());
      }, "abortError");
      var abortHandler = /* @__PURE__ */ __name(() => {
        clearTimeout(timeoutId);
        abortError();
      }, "abortHandler");
      if (signal?.aborted) {
        return abortError();
      }
      var timeoutId = setTimeout(() => {
        signal?.removeEventListener("abort", abortHandler);
        resolve();
      }, ms);
      signal?.addEventListener("abort", abortHandler, {
        once: true
      });
    });
  }
  var init_delay = __esm({
    "node_modules/es-toolkit/dist/promise/delay.mjs"() {
      init_AbortError();
      __name(delay, "delay");
    }
  });

  // node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
  function isPrimitive(value) {
    return value == null || typeof value !== "object" && typeof value !== "function";
  }
  var init_isPrimitive = __esm({
    "node_modules/es-toolkit/dist/predicate/isPrimitive.mjs"() {
      __name(isPrimitive, "isPrimitive");
    }
  });

  // node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
  function isTypedArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }
  var init_isTypedArray = __esm({
    "node_modules/es-toolkit/dist/predicate/isTypedArray.mjs"() {
      __name(isTypedArray, "isTypedArray");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
  function getSymbols(object) {
    return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
  }
  var init_getSymbols = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs"() {
      __name(getSymbols, "getSymbols");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
  function getTag(value) {
    if (value == null) {
      return value === void 0 ? "[object Undefined]" : "[object Null]";
    }
    return Object.prototype.toString.call(value);
  }
  var init_getTag = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/getTag.mjs"() {
      __name(getTag, "getTag");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/tags.mjs
  var regexpTag, stringTag, numberTag, booleanTag, argumentsTag, symbolTag, dateTag, mapTag, setTag, arrayTag, arrayBufferTag, objectTag, dataViewTag, uint8ArrayTag, uint8ClampedArrayTag, uint16ArrayTag, uint32ArrayTag, int8ArrayTag, int16ArrayTag, int32ArrayTag, float32ArrayTag, float64ArrayTag;
  var init_tags = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/tags.mjs"() {
      regexpTag = "[object RegExp]";
      stringTag = "[object String]";
      numberTag = "[object Number]";
      booleanTag = "[object Boolean]";
      argumentsTag = "[object Arguments]";
      symbolTag = "[object Symbol]";
      dateTag = "[object Date]";
      mapTag = "[object Map]";
      setTag = "[object Set]";
      arrayTag = "[object Array]";
      arrayBufferTag = "[object ArrayBuffer]";
      objectTag = "[object Object]";
      dataViewTag = "[object DataView]";
      uint8ArrayTag = "[object Uint8Array]";
      uint8ClampedArrayTag = "[object Uint8ClampedArray]";
      uint16ArrayTag = "[object Uint16Array]";
      uint32ArrayTag = "[object Uint32Array]";
      int8ArrayTag = "[object Int8Array]";
      int16ArrayTag = "[object Int16Array]";
      int32ArrayTag = "[object Int32Array]";
      float32ArrayTag = "[object Float32Array]";
      float64ArrayTag = "[object Float64Array]";
    }
  });

  // node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
  function cloneDeepWith(obj, cloneValue) {
    return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
  }
  function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
    var cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
    if (cloned != null) {
      return cloned;
    }
    if (isPrimitive(valueToClone)) {
      return valueToClone;
    }
    if (stack.has(valueToClone)) {
      return stack.get(valueToClone);
    }
    if (Array.isArray(valueToClone)) {
      var result = new Array(valueToClone.length);
      stack.set(valueToClone, result);
      for (var i2 = 0; i2 < valueToClone.length; i2++) {
        result[i2] = cloneDeepWithImpl(valueToClone[i2], i2, objectToClone, stack, cloneValue);
      }
      if (Object.hasOwn(valueToClone, "index")) {
        result.index = valueToClone.index;
      }
      if (Object.hasOwn(valueToClone, "input")) {
        result.input = valueToClone.input;
      }
      return result;
    }
    if (valueToClone instanceof Date) {
      return new Date(valueToClone.getTime());
    }
    if (valueToClone instanceof RegExp) {
      var result1 = new RegExp(valueToClone.source, valueToClone.flags);
      result1.lastIndex = valueToClone.lastIndex;
      return result1;
    }
    if (valueToClone instanceof Map) {
      var result2 = /* @__PURE__ */ new Map();
      stack.set(valueToClone, result2);
      for (var [key, value] of valueToClone) {
        result2.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
      }
      return result2;
    }
    if (valueToClone instanceof Set) {
      var result3 = /* @__PURE__ */ new Set();
      stack.set(valueToClone, result3);
      for (var value1 of valueToClone) {
        result3.add(cloneDeepWithImpl(value1, void 0, objectToClone, stack, cloneValue));
      }
      return result3;
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
      return valueToClone.subarray();
    }
    if (isTypedArray(valueToClone)) {
      var result4 = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
      stack.set(valueToClone, result4);
      for (var i1 = 0; i1 < valueToClone.length; i1++) {
        result4[i1] = cloneDeepWithImpl(valueToClone[i1], i1, objectToClone, stack, cloneValue);
      }
      return result4;
    }
    if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
      return valueToClone.slice(0);
    }
    if (valueToClone instanceof DataView) {
      var result5 = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
      stack.set(valueToClone, result5);
      copyProperties(result5, valueToClone, objectToClone, stack, cloneValue);
      return result5;
    }
    if (typeof File !== "undefined" && valueToClone instanceof File) {
      var result6 = new File([
        valueToClone
      ], valueToClone.name, {
        type: valueToClone.type
      });
      stack.set(valueToClone, result6);
      copyProperties(result6, valueToClone, objectToClone, stack, cloneValue);
      return result6;
    }
    if (valueToClone instanceof Blob) {
      var result7 = new Blob([
        valueToClone
      ], {
        type: valueToClone.type
      });
      stack.set(valueToClone, result7);
      copyProperties(result7, valueToClone, objectToClone, stack, cloneValue);
      return result7;
    }
    if (valueToClone instanceof Error) {
      var result8 = new valueToClone.constructor();
      stack.set(valueToClone, result8);
      result8.message = valueToClone.message;
      result8.name = valueToClone.name;
      result8.stack = valueToClone.stack;
      result8.cause = valueToClone.cause;
      copyProperties(result8, valueToClone, objectToClone, stack, cloneValue);
      return result8;
    }
    if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
      var result9 = Object.create(Object.getPrototypeOf(valueToClone));
      stack.set(valueToClone, result9);
      copyProperties(result9, valueToClone, objectToClone, stack, cloneValue);
      return result9;
    }
    return valueToClone;
  }
  function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
    var keys = [
      ...Object.keys(source),
      ...getSymbols(source)
    ];
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      var descriptor = Object.getOwnPropertyDescriptor(target, key);
      if (descriptor == null || descriptor.writable) {
        target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
      }
    }
  }
  function isCloneableObject(object) {
    switch (getTag(object)) {
      case argumentsTag:
      case arrayTag:
      case arrayBufferTag:
      case dataViewTag:
      case booleanTag:
      case dateTag:
      case float32ArrayTag:
      case float64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case mapTag:
      case numberTag:
      case objectTag:
      case regexpTag:
      case setTag:
      case stringTag:
      case symbolTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag: {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  var init_cloneDeepWith = __esm({
    "node_modules/es-toolkit/dist/object/cloneDeepWith.mjs"() {
      init_getSymbols();
      init_getTag();
      init_tags();
      init_isPrimitive();
      init_isTypedArray();
      __name(cloneDeepWith, "cloneDeepWith");
      __name(cloneDeepWithImpl, "cloneDeepWithImpl");
      __name(copyProperties, "copyProperties");
      __name(isCloneableObject, "isCloneableObject");
    }
  });

  // node_modules/es-toolkit/dist/object/cloneDeep.mjs
  function cloneDeep(obj) {
    return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
  }
  var init_cloneDeep = __esm({
    "node_modules/es-toolkit/dist/object/cloneDeep.mjs"() {
      init_cloneDeepWith();
      __name(cloneDeep, "cloneDeep");
    }
  });

  // node_modules/es-toolkit/dist/object/omit.mjs
  function omit(obj, keys) {
    var result = {
      ...obj
    };
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      delete result[key];
    }
    return result;
  }
  var init_omit = __esm({
    "node_modules/es-toolkit/dist/object/omit.mjs"() {
      __name(omit, "omit");
    }
  });

  // node_modules/es-toolkit/dist/object/pick.mjs
  function pick(obj, keys) {
    var result = {};
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      if (Object.hasOwn(obj, key)) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  var init_pick = __esm({
    "node_modules/es-toolkit/dist/object/pick.mjs"() {
      __name(pick, "pick");
    }
  });

  // node_modules/es-toolkit/dist/compat/util/eq.mjs
  function eq(value, other) {
    return value === other || Number.isNaN(value) && Number.isNaN(other);
  }
  var init_eq = __esm({
    "node_modules/es-toolkit/dist/compat/util/eq.mjs"() {
      __name(eq, "eq");
    }
  });

  // node_modules/es-toolkit/dist/predicate/isLength.mjs
  function isLength(value) {
    return Number.isSafeInteger(value) && value >= 0;
  }
  var init_isLength = __esm({
    "node_modules/es-toolkit/dist/predicate/isLength.mjs"() {
      __name(isLength, "isLength");
    }
  });

  // node_modules/es-toolkit/dist/promise/semaphore.mjs
  var Semaphore;
  var init_semaphore = __esm({
    "node_modules/es-toolkit/dist/promise/semaphore.mjs"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      init_define_property();
      Semaphore = /* @__PURE__ */ function() {
        "use strict";
        function Semaphore2(capacity) {
          _class_call_check(this, Semaphore2);
          _define_property(this, "capacity", void 0);
          _define_property(this, "available", void 0);
          _define_property(this, "deferredTasks", []);
          this.capacity = capacity;
          this.available = capacity;
        }
        __name(Semaphore2, "Semaphore");
        _create_class(Semaphore2, [
          {
            key: "acquire",
            value: /* @__PURE__ */ __name(function acquire() {
              return _async_to_generator(function* () {
                if (this.available > 0) {
                  this.available--;
                  return;
                }
                return new Promise((resolve) => {
                  this.deferredTasks.push(resolve);
                });
              }).call(this);
            }, "acquire")
          },
          {
            key: "release",
            value: /* @__PURE__ */ __name(function release() {
              var deferredTask = this.deferredTasks.shift();
              if (deferredTask != null) {
                deferredTask();
                return;
              }
              if (this.available < this.capacity) {
                this.available++;
              }
            }, "release")
          }
        ]);
        return Semaphore2;
      }();
    }
  });

  // node_modules/es-toolkit/dist/promise/mutex.mjs
  var Mutex;
  var init_mutex = __esm({
    "node_modules/es-toolkit/dist/promise/mutex.mjs"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_semaphore();
      Mutex = /* @__PURE__ */ function() {
        "use strict";
        function Mutex2() {
          _class_call_check(this, Mutex2);
          _define_property(this, "semaphore", new Semaphore(1));
        }
        __name(Mutex2, "Mutex");
        _create_class(Mutex2, [
          {
            key: "isLocked",
            get: /* @__PURE__ */ __name(function get() {
              return this.semaphore.available === 0;
            }, "get")
          },
          {
            key: "acquire",
            value: /* @__PURE__ */ __name(function acquire() {
              return _async_to_generator(function* () {
                return this.semaphore.acquire();
              }).call(this);
            }, "acquire")
          },
          {
            key: "release",
            value: /* @__PURE__ */ __name(function release() {
              this.semaphore.release();
            }, "release")
          }
        ]);
        return Mutex2;
      }();
    }
  });

  // node_modules/es-toolkit/dist/index.mjs
  var init_dist = __esm({
    "node_modules/es-toolkit/dist/index.mjs"() {
      init_debounce();
      init_memoize();
      init_noop();
      init_cloneDeep();
      init_omit();
      init_pick();
      init_isPrimitive();
      init_delay();
      init_mutex();
    }
  });

  // src/utils/lazy.ts
  var lazy_exports = {};
  __export(lazy_exports, {
    createLazyImportProxy: () => createLazyImportProxy,
    getProxyFactory: () => getProxyFactory,
    lazyDestructure: () => lazyDestructure,
    lazyValue: () => lazyValue
  });
  function lazyValue(factory, opts = {}) {
    var cache;
    var dummy = opts.hint !== "object" ? () => {
    } : {};
    var proxyFactory = /* @__PURE__ */ __name(() => {
      if (!cache) {
        cache = factory();
        if (cache != null && isPrimitive(cache)) {
          cache = new cache.constructor(cache);
        }
      }
      return cache;
    }, "proxyFactory");
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory: proxyFactory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = lazyValue(factory);
    return new Proxy({}, {
      get(_, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: /* @__PURE__ */ __name((_2, p2) => lazyValue(() => proxiedObject[p2], opts), "get")
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return lazyValue(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  function createLazyImportProxy(getter) {
    return new Proxy(() => {
    }, {
      apply: /* @__PURE__ */ __name((_, __, args) => {
        return getter().default?.(...args);
      }, "apply"),
      get: /* @__PURE__ */ __name((_, p2) => getter()?.default?.[p2] ?? getter()?.[p2], "get"),
      getPrototypeOf: /* @__PURE__ */ __name(() => new Proxy({}, {
        get: /* @__PURE__ */ __name((_, p2) => getter()?.[p2], "get")
      }), "getPrototypeOf")
    });
  }
  var originalFnSym, unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "src/utils/lazy.ts"() {
      "use strict";
      init_dist();
      originalFnSym = Symbol.for("blazed.lazy.originalFn");
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = /* @__PURE__ */ __name((key) => typeof key === "string" && unconfigurable.has(key), "isUnconfigurable");
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved) throw new Error(`Trying to Reflect.${fnName} of ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p2) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p2 in isolatedEntries) return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Trying to Reflect.has of ${typeof resolved}`);
          return Reflect.has(resolved, p2);
        },
        get(target, p2, receiver) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries } = contextHolder.options;
            if (exemptedEntries?.[p2]) return exemptedEntries[p2];
          }
          var resolved = contextHolder?.factory();
          try {
            var ret = Reflect.get(resolved, p2, receiver);
            if (typeof ret === "function" && contextHolder?.options?.retainContext !== false) {
              return new Proxy(ret, {
                get(target2, prop, receiver2) {
                  if (prop === originalFnSym) return target2;
                  return Reflect.get(target2, prop, receiver2);
                },
                apply(target2, thisArg, args) {
                  return Reflect.apply(target2, thisArg === receiver ? resolved : thisArg, args);
                }
              });
            }
            return ret;
          } catch (e3) {
            throw new Error(`Reflect.get called on ${typeof resolved}`);
          }
        },
        ownKeys: /* @__PURE__ */ __name((target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Reflect.ownKeys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          for (var key of unconfigurable) {
            if (!cacheKeys.includes(key)) {
              cacheKeys.push(key);
            }
          }
          return cacheKeys;
        }, "ownKeys"),
        getOwnPropertyDescriptor: /* @__PURE__ */ __name((target, p2) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Reflect.getOwnPropertyDescriptor of ${typeof resolved}`);
          if (isUnconfigurable(p2)) return Reflect.getOwnPropertyDescriptor(target, p2);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p2);
          if (descriptor) Object.defineProperty(target, p2, descriptor);
          return descriptor;
        }, "getOwnPropertyDescriptor")
      };
      __name(lazyValue, "lazyValue");
      __name(lazyDestructure, "lazyDestructure");
      __name(getProxyFactory, "getProxyFactory");
      __name(createLazyImportProxy, "createLazyImportProxy");
    }
  });

  // src/data/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    Devs: () => Devs,
    Links: () => Links
  });
  var Devs, Links;
  var init_constants = __esm({
    "src/data/constants.ts"() {
      "use strict";
      Devs = {
        Blaze: {
          name: "Blaze",
          id: 1337n
        }
      };
      Links = {
        GITHUB: "github.com/BlazeK1ng420",
        DISCORD: "discord.gg/XjYgWXHb9Q",
        BLAZE: "github.com/BlazeK1ng420"
      };
    }
  });

  // src/metro/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    createModuleFilter: () => createModuleFilter,
    defaultResolvers: () => defaultResolvers,
    withInteropOptions: () => withInteropOptions
  });
  function createModuleFilter({ filter, stringify, getResolvers = /* @__PURE__ */ __name(() => defaultResolvers, "getResolvers") }) {
    var factory = Object.assign((arg, options = {}) => {
      var resolvers = getResolvers(arg, options);
      return {
        key: stringify(arg, options),
        resolvers,
        factory: moduleFilter,
        check: /* @__PURE__ */ __name((id, exports) => {
          return !!filter([
            arg,
            exports,
            moduleRegistry.get(id)
          ], options);
        }, "check")
      };
    }, {
      stringify,
      getResolvers
    });
    var moduleFilter = factory;
    return moduleFilter;
  }
  function withInteropOptions(props) {
    return {
      filter: /* @__PURE__ */ __name((arg, options) => {
        var { checkEsmDefault, returnEsmDefault = true } = options;
        if (checkEsmDefault !== false && returnEsmDefault === false && arg[1]?.__esModule && arg[1].default) {
          var res = props.filter([
            arg[0],
            arg[2].module?.exports?.default,
            arg[2]
          ], options);
          if (res || checkEsmDefault === true) return res;
        }
        return props.filter(arg, options);
      }, "filter"),
      stringify: /* @__PURE__ */ __name((arg, options) => {
        var VERSION = 1;
        var boolToNum = /* @__PURE__ */ __name((bool) => bool ? 2 : bool === false ? 1 : 0, "boolToNum");
        return `${props.stringify(arg, options)}::interop:${VERSION}:${boolToNum(options.checkEsmDefault)}:${boolToNum(options.returnEsmDefault)}`;
      }, "stringify"),
      getResolvers: /* @__PURE__ */ __name((arg, options) => {
        var { checkEsmDefault, returnEsmDefault = true } = options;
        if (checkEsmDefault === false || returnEsmDefault === false) {
          return [
            (exp) => exp
          ];
        }
        if (checkEsmDefault === true) {
          return [
            (exp) => exp.__esModule && exp.default
          ];
        }
        return props.getResolvers?.(arg, options) ?? defaultResolvers;
      }, "getResolvers")
    };
  }
  var defaultResolvers;
  var init_filters = __esm({
    "src/metro/filters.ts"() {
      "use strict";
      init_registry();
      defaultResolvers = [
        (exp) => exp?.__esModule && exp.default,
        (exp) => exp
      ];
      __name(createModuleFilter, "createModuleFilter");
      __name(withInteropOptions, "withInteropOptions");
    }
  });

  // src/metro/common/filters.ts
  var filters_exports2 = {};
  __export(filters_exports2, {
    byFilePath: () => byFilePath,
    byName: () => byName,
    byProps: () => byProps,
    bySingularProp: () => bySingularProp,
    byWriteableProp: () => byWriteableProp
  });
  var byProps, byName, byFilePath, bySingularProp, byWriteableProp;
  var init_filters2 = __esm({
    "src/metro/common/filters.ts"() {
      "use strict";
      init_filters();
      byProps = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([props, m2]) => props.length === 1 ? m2[props[0]] : props.every((p2) => m2[p2]), "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byProps([${arg.join(",")}])`, "stringify")
      }));
      byName = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([name, m2]) => typeof m2 === "function" && m2.name === name, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byName(${arg})`, "stringify")
      }));
      byFilePath = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([path, _, state2]) => state2.meta.filePath === path, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byFilePath(${arg})`, "stringify")
      }));
      bySingularProp = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([prop, m2]) => m2[prop] && Object.keys(m2).length === 1, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `bySingularProp(${arg})`, "stringify")
      }));
      byWriteableProp = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([prop, m2]) => m2[prop] && Object.getOwnPropertyDescriptor(m2, prop)?.writable, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byMutableProp(${arg})`, "stringify")
      }));
    }
  });

  // src/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    BundleUpdaterModule: () => BundleUpdaterModule,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    ThemeModule: () => ThemeModule,
    getNativeModule: () => getNativeModule
  });
  function getNativeModule(...names) {
    var moduleProxy = window.nativeModuleProxy;
    var module3 = names.find((name) => moduleProxy[name] !== null);
    return moduleProxy[module3];
  }
  var NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, BundleUpdaterModule, ThemeModule;
  var init_native = __esm({
    "src/native/index.ts"() {
      "use strict";
      __name(getNativeModule, "getNativeModule");
      NativeCacheModule = getNativeModule("NativeCacheModule");
      NativeFileModule = getNativeModule("NativeFileModule");
      NativeClientInfoModule = getNativeModule("NativeClientInfoModule");
      NativeDeviceModule = getNativeModule("NativeDeviceModule");
      BundleUpdaterModule = getNativeModule("BundleUpdaterManager");
      ThemeModule = getNativeModule("NativeThemeModule");
    }
  });

  // src/loader/index.ts
  var loader_exports = {};
  __export(loader_exports, {
    callFunction: () => callFunction,
    getModule: () => getModule,
    isFunctionRegistered: () => isFunctionRegistered,
    isModuleRegistered: () => isModuleRegistered,
    isSafeModeEnabled: () => isSafeModeEnabled,
    loaderPayload: () => loaderPayload
  });
  function isModuleRegistered(module3) {
    return loaderPayload.loader.modules[module3] !== void 0;
  }
  function isFunctionRegistered(module3, function_) {
    return loaderPayload.loader.modules[module3]?.functions[function_] !== void 0;
  }
  function callFunction(module3, functionName, args) {
    return _async_to_generator(function* () {
      if (!isFunctionRegistered(module3, functionName)) {
        throw new Error(`Function ${module3}.${functionName} is not registered`);
      }
      var { queryCache } = window.nativeModuleProxy.ImageLoader;
      var promise = queryCache([
        "__blazed_bridge",
        JSON.stringify({
          m: module3,
          f: functionName,
          a: args
        })
      ]);
      var result = yield promise;
      if ("ret" in result) {
        return JSON.parse(result.ret);
      }
      if ("cancelled" in result) {
        throw new Error(`Function ${module3}.${functionName} was cancelled: ${result.reason}`);
      }
      if ("err" in result) {
        throw new Error(result.err);
      }
    })();
  }
  function getModule({ name, argumentProcessors: processArgs }) {
    var _loop = /* @__PURE__ */ __name(function(functionName2) {
      baseObject[functionName2] = (...args) => callFunction(
        name,
        functionName2,
        // @ts-expect-error
        processArgs && functionName2 in processArgs ? processArgs[functionName2](args) : args
      );
    }, "_loop");
    var module3 = loaderPayload.loader.modules[name];
    if (!module3) {
      throw new Error(`Module ${name} is not registered`);
    }
    var baseObject = {
      hasFunction: /* @__PURE__ */ __name((functionName2) => isFunctionRegistered(name, functionName2), "hasFunction"),
      callFunction: /* @__PURE__ */ __name((functionName2, args) => callFunction(name, functionName2, args), "callFunction")
    };
    for (var [functionName] of Object.entries(module3.functions)) _loop(functionName);
    return baseObject;
  }
  function isSafeModeEnabled() {
    return Boolean(loaderPayload.loader.initConfig.safeMode);
  }
  var loaderPayload;
  var init_loader = __esm({
    "src/loader/index.ts"() {
      "use strict";
      init_async_to_generator();
      loaderPayload = window.__BLAZED_LOADER__;
      __name(isModuleRegistered, "isModuleRegistered");
      __name(isFunctionRegistered, "isFunctionRegistered");
      __name(callFunction, "callFunction");
      __name(getModule, "getModule");
      __name(isSafeModeEnabled, "isSafeModeEnabled");
    }
  });

  // src/api/fs.ts
  var fs_exports = {};
  __export(fs_exports, {
    clearFolder: () => clearFolder,
    downloadFile: () => downloadFile,
    fileExists: () => fileExists,
    readFile: () => readFile,
    removeFile: () => removeFile,
    writeFile: () => writeFile
  });
  function getFullPath(path) {
    return `${loaderPayload.loader.constants.BLAZED_DIR}/${path}`;
  }
  function clearFolder(path) {
    return _async_to_generator(function* () {
      yield NativeFileModule.clearFolder(BASE_DIR, path);
    })();
  }
  function removeFile(path) {
    return _async_to_generator(function* () {
      yield NativeFileModule.removeFile(BASE_DIR, path);
    })();
  }
  function fileExists(path) {
    return _async_to_generator(function* () {
      return yield NativeFileModule.fileExists(getFullPath(path));
    })();
  }
  function writeFile(path, data) {
    return _async_to_generator(function* () {
      if (typeof data !== "string") {
        throw new TypeError("Argument 'data' must be a string");
      }
      yield NativeFileModule.writeFile(BASE_DIR, path, data, ENCODING);
    })();
  }
  function readFile(path) {
    return _async_to_generator(function* () {
      try {
        return yield NativeFileModule.readFile(getFullPath(path), ENCODING);
      } catch (err) {
        throw new Error(`Failed to read file '${path}'`, {
          cause: err
        });
      }
    })();
  }
  function downloadFile(url, path) {
    return _async_to_generator(function* () {
      var response = yield fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download file from ${url}: ${response.statusText}`);
      }
      var arrayBuffer = yield response.arrayBuffer();
      var data = Buffer.from(arrayBuffer).toString("base64");
      yield NativeFileModule.writeFile(BASE_DIR, path, data, "base64");
    })();
  }
  var BASE_DIR, ENCODING;
  var init_fs = __esm({
    "src/api/fs.ts"() {
      "use strict";
      init_async_to_generator();
      init_native();
      init_loader();
      BASE_DIR = "blazecord";
      ENCODING = "utf8";
      __name(getFullPath, "getFullPath");
      __name(clearFolder, "clearFolder");
      __name(removeFile, "removeFile");
      __name(fileExists, "fileExists");
      __name(writeFile, "writeFile");
      __name(readFile, "readFile");
      __name(downloadFile, "downloadFile");
    }
  });

  // src/loader/kvStorage.ts
  var kvStorage_exports = {};
  __export(kvStorage_exports, {
    kvStorage: () => kvStorage
  });
  function getItem(key) {
    return state[key] ?? null;
  }
  function setItem(key, value) {
    if (value == null) {
      delete state[key];
    } else {
      state[key] = value;
    }
    saveState();
  }
  function removeItem(key) {
    delete state[key];
    saveState();
  }
  var state, KV_FOLDER, KV_PREFIX, key, saveState, kvStorage;
  var init_kvStorage = __esm({
    "src/loader/kvStorage.ts"() {
      "use strict";
      init_dist();
      init_fs();
      state = window.s = {};
      KV_FOLDER = "kv";
      KV_PREFIX = "__wt_kv/";
      for (key in window) {
        if (key.startsWith(KV_PREFIX)) {
          state[key.slice(KV_PREFIX.length)] = window[key];
          delete window[key];
        }
      }
      saveState = debounce(() => {
        for (var key in state) {
          writeFile(`${KV_FOLDER}/${key}`, state[key]);
        }
      }, 500);
      __name(getItem, "getItem");
      __name(setItem, "setItem");
      __name(removeItem, "removeItem");
      kvStorage = {
        getItem,
        setItem,
        removeItem
      };
    }
  });

  // src/metro/internal/enums.ts
  var enums_exports = {};
  __export(enums_exports, {
    ModuleFlags: () => ModuleFlags,
    ModulesMapInternal: () => ModulesMapInternal
  });
  var ModuleFlags, ModulesMapInternal;
  var init_enums = __esm({
    "src/metro/internal/enums.ts"() {
      "use strict";
      ModuleFlags = /* @__PURE__ */ function(ModuleFlags2) {
        ModuleFlags2[ModuleFlags2["EXISTS"] = 1] = "EXISTS";
        ModuleFlags2[ModuleFlags2["BLACKLISTED"] = 2] = "BLACKLISTED";
        return ModuleFlags2;
      }({});
      ModulesMapInternal = /* @__PURE__ */ function(ModulesMapInternal2) {
        ModulesMapInternal2[ModulesMapInternal2["FULL_LOOKUP"] = 0] = "FULL_LOOKUP";
        ModulesMapInternal2[ModulesMapInternal2["NOT_FOUND"] = 1] = "NOT_FOUND";
        return ModulesMapInternal2;
      }({});
    }
  });

  // src/metro/internal/modules.ts
  var modules_exports = {};
  __export(modules_exports, {
    isBadModuleExports: () => isBadModuleExports,
    waitFor: () => waitFor
  });
  function isBadModuleExports(exports) {
    var RANDOM_STRING = "insert the funny here? :fuyusquish:";
    return exports == null || exports === globalThis || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0 || // Empty object, implies no exports
    // Blacklist evil proxies which always return non-undefined. For example, IntlMessagesProxy or NativeModules.
    exports[RANDOM_STRING] !== void 0 || exports.default?.[RANDOM_STRING] !== void 0;
  }
  function waitFor(filter, callback, { count = 1 } = {}) {
    var currentCount = 0;
    var onAbort = [];
    var cleanup = /* @__PURE__ */ __name(() => {
      for (var handler of onAbort) handler();
      cleanup = null;
    }, "cleanup");
    var cachedModuleIds = getAllCachedModuleIds(filter.key);
    var cacheHandler = createCacheHandler(filter.key, false);
    function checkState(state3) {
      if (!cleanup) return true;
      var exports = state3.module.exports;
      if (isBadModuleExports(exports) || isModuleBlacklisted(state3.id)) {
        return false;
      }
      var result = testExports(state3.id, exports, filter);
      if (!result) return false;
      cacheHandler.cacheId(state3.id, result);
      callback(result, state3);
      if (++currentCount === count) {
        cleanup();
        return true;
      }
      return false;
    }
    __name(checkState, "checkState");
    if (cachedModuleIds && cachedModuleIds.length >= count) {
      var _loop = /* @__PURE__ */ __name(function(id2) {
        var state3 = moduleRegistry.get(id2);
        if (!state3) return "continue";
        if (state3.module?.exports) {
          if (checkState(state3)) return {
            v: cleanup
          };
        } else {
          var cb = /* @__PURE__ */ __name(() => checkState(state3), "cb");
          modulesInitializationEvents.once(state3.id, cb);
          onAbort.push(() => modulesInitializationEvents.off(state3.id, cb));
        }
      }, "_loop");
      for (var id of cachedModuleIds) {
        var _ret = _loop(id);
        if (_type_of(_ret) === "object") return _ret.v;
      }
    } else if (cleanup) {
      for (var state2 of initializedModuleRegistry) {
        if (checkState(state2)) return cleanup;
      }
      var moduleLoadedHandler = /* @__PURE__ */ __name((state3) => checkState(state3), "moduleLoadedHandler");
      var lookupFoundHandler = /* @__PURE__ */ __name((key, state3) => filter.key === key ? checkState(state3) : false, "lookupFoundHandler");
      metroEvents.on("moduleLoaded", moduleLoadedHandler);
      metroEvents.on("lookupFound", lookupFoundHandler);
      onAbort.push(() => metroEvents.off("moduleLoaded", moduleLoadedHandler), () => metroEvents.off("lookupFound", lookupFoundHandler));
    }
    return cleanup;
  }
  var init_modules = __esm({
    "src/metro/internal/modules.ts"() {
      "use strict";
      init_type_of();
      init_caches();
      init_events();
      init_api();
      init_registry();
      __name(isBadModuleExports, "isBadModuleExports");
      __name(waitFor, "waitFor");
    }
  });

  // src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    createModuleFilter: () => createModuleFilter,
    defaultResolvers: () => defaultResolvers,
    findIdAndResolved: () => findIdAndResolved,
    logger: () => logger,
    lookup: () => lookup,
    testExports: () => testExports,
    withInteropOptions: () => withInteropOptions
  });
  var logger;
  var init_metro = __esm({
    "src/metro/index.ts"() {
      "use strict";
      init_logger();
      init_filters();
      init_api();
      logger = wtlogger.createChild("Metro");
    }
  });

  // src/metro/internal/caches.ts
  var caches_exports = {};
  __export(caches_exports, {
    MetroCache: () => MetroCache,
    createCacheHandler: () => createCacheHandler,
    getAllCachedModuleIds: () => getAllCachedModuleIds,
    isModuleBlacklisted: () => isModuleBlacklisted,
    iterateModulesForCache: () => iterateModulesForCache,
    markExportsFlags: () => markExportsFlags,
    onceCacheReady: () => onceCacheReady
  });
  function setupMetroCache() {
    var serialized;
    try {
      serialized = JSON.parse(kvStorage.getItem(BLAZED_METRO_CACHE_KEY));
      if (serialized.v.cache !== CACHE_VERSION || serialized.v.bundle !== NativeClientInfoModule.Build) {
        throw "Cache version mismatch";
      }
    } catch (error) {
      logger.info("Metro cache invalidated/not exist, creating a new one");
      serialized = {
        v: {
          cache: CACHE_VERSION,
          bundle: NativeClientInfoModule.Build
        },
        moduleFlags: {},
        lookupIndex: {}
      };
    }
    var cache = {
      version: serialized.v.cache,
      moduleFlags: new Map(Object.entries(serialized.moduleFlags).map(([k, v]) => [
        Number(k),
        v
      ])),
      lookupIndex: new Map(Object.entries(serialized.lookupIndex).map(([k, v]) => {
        var map = /* @__PURE__ */ new Map();
        map.fullLookup = v?._[ModulesMapInternal.FULL_LOOKUP] === 1;
        map.notFound = v?._[ModulesMapInternal.NOT_FOUND] === 1;
        for (var strId in v) {
          if (strId === "_") continue;
          map.set(Number(strId), v[strId]);
        }
        return [
          k,
          map
        ];
      })),
      save: debounce(() => {
        kvStorage.setItem(BLAZED_METRO_CACHE_KEY, JSON.stringify({
          v: {
            cache: CACHE_VERSION,
            bundle: NativeClientInfoModule.Build
          },
          moduleFlags: Object.fromEntries(cache.moduleFlags),
          lookupIndex: Object.fromEntries([
            ...cache.lookupIndex
          ].map(([k, v]) => {
            var serializedMap = {
              _: [
                v?.fullLookup ? 1 : 0,
                v?.notFound ? 1 : 0
              ]
            };
            for (var [id, flags] of v) {
              serializedMap[id] = flags;
            }
            return [
              k,
              serializedMap
            ];
          }))
        }));
      }, 500),
      invalidate() {
        kvStorage.removeItem(BLAZED_METRO_CACHE_KEY);
        Object.assign(cache, setupMetroCache());
        cache.save();
      }
    };
    logger.info(`Loaded Metro cache with ${cache.moduleFlags.size} module flags and ${cache.lookupIndex.size} lookup indexes`);
    return cache;
  }
  function getModuleExportFlags(moduleExports) {
    var bit = ModuleFlags.EXISTS;
    if (isBadModuleExports(moduleExports)) bit |= ModuleFlags.BLACKLISTED;
    return bit;
  }
  function markExportsFlags(moduleId, moduleExports) {
    var flags = getModuleExportFlags(moduleExports);
    if (flags !== ModuleFlags.EXISTS) {
      MetroCache.moduleFlags.set(moduleId, flags);
    }
  }
  function isModuleBlacklisted(moduleId) {
    return (MetroCache.moduleFlags.get(moduleId) & ModuleFlags.BLACKLISTED) !== 0;
  }
  function createCacheHandler(key, allFind) {
    var indexObject = MetroCache.lookupIndex.get(key);
    if (!indexObject) {
      indexObject = /* @__PURE__ */ new Map();
      MetroCache.lookupIndex.set(key, indexObject);
    }
    return {
      cacheId(moduleId, exports) {
        if (!indexObject.has(moduleId)) indexObject.set(moduleId, getModuleExportFlags(exports));
        MetroCache.save();
      },
      // Finish may not be called by single/numbered find
      finish(notFound) {
        if (allFind) indexObject.fullLookup = true;
        if (notFound) indexObject.notFound = true;
        MetroCache.save();
      }
    };
  }
  function* iterateModulesForCache(key, fullLookup) {
    var cache = MetroCache.lookupIndex.get(key);
    if (fullLookup && !cache?.fullLookup) cache = void 0;
    if (cache?.notFound) return;
    if (cache) {
      for (var id of cache.keys()) {
        var exports = window.__r(id);
        if (isBadModuleExports(exports)) continue;
        yield [
          id,
          exports
        ];
      }
    }
    for (var id1 of moduleRegistry.keys()) {
      var exports1 = void 0;
      try {
        if (isModuleBlacklisted(id1) || cache?.has(id1)) continue;
        exports1 = window.__r(id1);
      } catch (e3) {
      }
      if (isBadModuleExports(exports1)) continue;
      yield [
        id1,
        exports1
      ];
    }
  }
  function getAllCachedModuleIds(id) {
    var modulesMap = MetroCache.lookupIndex.get(id);
    if (!modulesMap) return void 0;
    return [
      ...modulesMap.keys()
    ];
  }
  function onceCacheReady(callback) {
    callback(MetroCache);
  }
  var CACHE_VERSION, BLAZED_METRO_CACHE_KEY, MetroCache;
  var init_caches = __esm({
    "src/metro/internal/caches.ts"() {
      "use strict";
      init_kvStorage();
      init_native();
      init_enums();
      init_modules();
      init_registry();
      init_dist();
      init_metro();
      CACHE_VERSION = 1;
      BLAZED_METRO_CACHE_KEY = "__blazed_metro_cache_key__";
      MetroCache = setupMetroCache();
      __name(setupMetroCache, "setupMetroCache");
      __name(getModuleExportFlags, "getModuleExportFlags");
      __name(markExportsFlags, "markExportsFlags");
      __name(isModuleBlacklisted, "isModuleBlacklisted");
      __name(createCacheHandler, "createCacheHandler");
      __name(iterateModulesForCache, "iterateModulesForCache");
      __name(getAllCachedModuleIds, "getAllCachedModuleIds");
      __name(onceCacheReady, "onceCacheReady");
    }
  });

  // node_modules/synchronous-promise/index.js
  var require_synchronous_promise = __commonJS({
    "node_modules/synchronous-promise/index.js"(exports, module3) {
      "use strict";
      function makeArrayFrom(obj) {
        return Array.prototype.slice.apply(obj);
      }
      __name(makeArrayFrom, "makeArrayFrom");
      var PENDING = "pending";
      var RESOLVED = "resolved";
      var REJECTED = "rejected";
      function SynchronousPromise2(handler) {
        this.status = PENDING;
        this._continuations = [];
        this._parent = null;
        this._paused = false;
        if (handler) {
          handler.call(this, this._continueWith.bind(this), this._failWith.bind(this));
        }
      }
      __name(SynchronousPromise2, "SynchronousPromise");
      function looksLikeAPromise(obj) {
        return obj && typeof obj.then === "function";
      }
      __name(looksLikeAPromise, "looksLikeAPromise");
      function passThrough(value) {
        return value;
      }
      __name(passThrough, "passThrough");
      SynchronousPromise2.prototype = {
        then: /* @__PURE__ */ __name(function then(nextFn, catchFn) {
          var next = SynchronousPromise2.unresolved()._setParent(this);
          if (this._isRejected()) {
            if (this._paused) {
              this._continuations.push({
                promise: next,
                nextFn,
                catchFn
              });
              return next;
            }
            if (catchFn) {
              try {
                var catchResult = catchFn(this._error);
                if (looksLikeAPromise(catchResult)) {
                  this._chainPromiseData(catchResult, next);
                  return next;
                } else {
                  return SynchronousPromise2.resolve(catchResult)._setParent(this);
                }
              } catch (e3) {
                return SynchronousPromise2.reject(e3)._setParent(this);
              }
            }
            return SynchronousPromise2.reject(this._error)._setParent(this);
          }
          this._continuations.push({
            promise: next,
            nextFn,
            catchFn
          });
          this._runResolutions();
          return next;
        }, "then"),
        catch: /* @__PURE__ */ __name(function _catch(handler) {
          if (this._isResolved()) {
            return SynchronousPromise2.resolve(this._data)._setParent(this);
          }
          var next = SynchronousPromise2.unresolved()._setParent(this);
          this._continuations.push({
            promise: next,
            catchFn: handler
          });
          this._runRejections();
          return next;
        }, "_catch"),
        finally: /* @__PURE__ */ __name(function _finally(callback) {
          var ran = false;
          function runFinally(result, err) {
            if (!ran) {
              ran = true;
              if (!callback) {
                callback = passThrough;
              }
              var callbackResult = callback(result);
              if (looksLikeAPromise(callbackResult)) {
                return callbackResult.then(function() {
                  if (err) {
                    throw err;
                  }
                  return result;
                });
              } else {
                return result;
              }
            }
          }
          __name(runFinally, "runFinally");
          return this.then(function(result) {
            return runFinally(result);
          }).catch(function(err) {
            return runFinally(null, err);
          });
        }, "_finally"),
        pause: /* @__PURE__ */ __name(function pause() {
          this._paused = true;
          return this;
        }, "pause"),
        resume: /* @__PURE__ */ __name(function resume() {
          var firstPaused = this._findFirstPaused();
          if (firstPaused) {
            firstPaused._paused = false;
            firstPaused._runResolutions();
            firstPaused._runRejections();
          }
          return this;
        }, "resume"),
        _findAncestry: /* @__PURE__ */ __name(function _findAncestry() {
          return this._continuations.reduce(function(acc, cur) {
            if (cur.promise) {
              var node = {
                promise: cur.promise,
                children: cur.promise._findAncestry()
              };
              acc.push(node);
            }
            return acc;
          }, []);
        }, "_findAncestry"),
        _setParent: /* @__PURE__ */ __name(function _setParent(parent) {
          if (this._parent) {
            throw new Error("parent already set");
          }
          this._parent = parent;
          return this;
        }, "_setParent"),
        _continueWith: /* @__PURE__ */ __name(function _continueWith(data) {
          var firstPending = this._findFirstPending();
          if (firstPending) {
            firstPending._data = data;
            firstPending._setResolved();
          }
        }, "_continueWith"),
        _findFirstPending: /* @__PURE__ */ __name(function _findFirstPending() {
          return this._findFirstAncestor(function(test) {
            return test._isPending && test._isPending();
          });
        }, "_findFirstPending"),
        _findFirstPaused: /* @__PURE__ */ __name(function _findFirstPaused() {
          return this._findFirstAncestor(function(test) {
            return test._paused;
          });
        }, "_findFirstPaused"),
        _findFirstAncestor: /* @__PURE__ */ __name(function _findFirstAncestor(matching) {
          var test = this;
          var result;
          while (test) {
            if (matching(test)) {
              result = test;
            }
            test = test._parent;
          }
          return result;
        }, "_findFirstAncestor"),
        _failWith: /* @__PURE__ */ __name(function _failWith(error) {
          var firstRejected = this._findFirstPending();
          if (firstRejected) {
            firstRejected._error = error;
            firstRejected._setRejected();
          }
        }, "_failWith"),
        _takeContinuations: /* @__PURE__ */ __name(function _takeContinuations() {
          return this._continuations.splice(0, this._continuations.length);
        }, "_takeContinuations"),
        _runRejections: /* @__PURE__ */ __name(function _runRejections() {
          if (this._paused || !this._isRejected()) {
            return;
          }
          var error = this._error, continuations = this._takeContinuations(), self = this;
          continuations.forEach(function(cont) {
            if (cont.catchFn) {
              try {
                var catchResult = cont.catchFn(error);
                self._handleUserFunctionResult(catchResult, cont.promise);
              } catch (e3) {
                cont.promise.reject(e3);
              }
            } else {
              cont.promise.reject(error);
            }
          });
        }, "_runRejections"),
        _runResolutions: /* @__PURE__ */ __name(function _runResolutions() {
          if (this._paused || !this._isResolved() || this._isPending()) {
            return;
          }
          var continuations = this._takeContinuations();
          var data = this._data;
          var self = this;
          continuations.forEach(function(cont) {
            if (cont.nextFn) {
              try {
                var result = cont.nextFn(data);
                self._handleUserFunctionResult(result, cont.promise);
              } catch (e3) {
                self._handleResolutionError(e3, cont);
              }
            } else if (cont.promise) {
              cont.promise.resolve(data);
            }
          });
          if (looksLikeAPromise(this._data)) {
            return this._handleWhenResolvedDataIsPromise(this._data);
          }
        }, "_runResolutions"),
        _handleResolutionError: /* @__PURE__ */ __name(function _handleResolutionError(e3, continuation) {
          this._setRejected();
          if (continuation.catchFn) {
            try {
              continuation.catchFn(e3);
              return;
            } catch (e22) {
              e3 = e22;
            }
          }
          if (continuation.promise) {
            continuation.promise.reject(e3);
          }
        }, "_handleResolutionError"),
        _handleWhenResolvedDataIsPromise: /* @__PURE__ */ __name(function _handleWhenResolvedDataIsPromise(data) {
          var self = this;
          return data.then(function(result) {
            self._data = result;
            self._runResolutions();
          }).catch(function(error) {
            self._error = error;
            self._setRejected();
            self._runRejections();
          });
        }, "_handleWhenResolvedDataIsPromise"),
        _handleUserFunctionResult: /* @__PURE__ */ __name(function _handleUserFunctionResult(data, nextSynchronousPromise) {
          if (looksLikeAPromise(data)) {
            this._chainPromiseData(data, nextSynchronousPromise);
          } else {
            nextSynchronousPromise.resolve(data);
          }
        }, "_handleUserFunctionResult"),
        _chainPromiseData: /* @__PURE__ */ __name(function _chainPromiseData(promiseData, nextSynchronousPromise) {
          promiseData.then(function(newData) {
            nextSynchronousPromise.resolve(newData);
          }).catch(function(newError) {
            nextSynchronousPromise.reject(newError);
          });
        }, "_chainPromiseData"),
        _setResolved: /* @__PURE__ */ __name(function _setResolved() {
          this.status = RESOLVED;
          if (!this._paused) {
            this._runResolutions();
          }
        }, "_setResolved"),
        _setRejected: /* @__PURE__ */ __name(function _setRejected() {
          this.status = REJECTED;
          if (!this._paused) {
            this._runRejections();
          }
        }, "_setRejected"),
        _isPending: /* @__PURE__ */ __name(function _isPending() {
          return this.status === PENDING;
        }, "_isPending"),
        _isResolved: /* @__PURE__ */ __name(function _isResolved() {
          return this.status === RESOLVED;
        }, "_isResolved"),
        _isRejected: /* @__PURE__ */ __name(function _isRejected() {
          return this.status === REJECTED;
        }, "_isRejected")
      };
      SynchronousPromise2.resolve = function(result) {
        return new SynchronousPromise2(function(resolve, reject) {
          if (looksLikeAPromise(result)) {
            result.then(function(newResult) {
              resolve(newResult);
            }).catch(function(error) {
              reject(error);
            });
          } else {
            resolve(result);
          }
        });
      };
      SynchronousPromise2.reject = function(result) {
        return new SynchronousPromise2(function(resolve, reject) {
          reject(result);
        });
      };
      SynchronousPromise2.unresolved = function() {
        return new SynchronousPromise2(function(resolve, reject) {
          this.resolve = resolve;
          this.reject = reject;
        });
      };
      SynchronousPromise2.all = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.resolve([]);
        }
        return new SynchronousPromise2(function(resolve, reject) {
          var allData = [], numResolved = 0, doResolve = /* @__PURE__ */ __name(function doResolve2() {
            if (numResolved === args.length) {
              resolve(allData);
            }
          }, "doResolve"), rejected = false, doReject = /* @__PURE__ */ __name(function doReject2(err) {
            if (rejected) {
              return;
            }
            rejected = true;
            reject(err);
          }, "doReject");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              allData[idx] = thisResult;
              numResolved += 1;
              doResolve();
            }).catch(function(err) {
              doReject(err);
            });
          });
        });
      };
      function createAggregateErrorFrom(errors2) {
        if (typeof window !== "undefined" && "AggregateError" in window) {
          return new window.AggregateError(errors2);
        }
        return {
          errors: errors2
        };
      }
      __name(createAggregateErrorFrom, "createAggregateErrorFrom");
      SynchronousPromise2.any = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.reject(createAggregateErrorFrom([]));
        }
        return new SynchronousPromise2(function(resolve, reject) {
          var allErrors = [], numRejected = 0, doReject = /* @__PURE__ */ __name(function doReject2() {
            if (numRejected === args.length) {
              reject(createAggregateErrorFrom(allErrors));
            }
          }, "doReject"), resolved = false, doResolve = /* @__PURE__ */ __name(function doResolve2(result) {
            if (resolved) {
              return;
            }
            resolved = true;
            resolve(result);
          }, "doResolve");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              doResolve(thisResult);
            }).catch(function(err) {
              allErrors[idx] = err;
              numRejected += 1;
              doReject();
            });
          });
        });
      };
      SynchronousPromise2.allSettled = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.resolve([]);
        }
        return new SynchronousPromise2(function(resolve) {
          var allData = [], numSettled = 0, doSettled = /* @__PURE__ */ __name(function doSettled2() {
            numSettled += 1;
            if (numSettled === args.length) {
              resolve(allData);
            }
          }, "doSettled");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              allData[idx] = {
                status: "fulfilled",
                value: thisResult
              };
              doSettled();
            }).catch(function(err) {
              allData[idx] = {
                status: "rejected",
                reason: err
              };
              doSettled();
            });
          });
        });
      };
      if (Promise === SynchronousPromise2) {
        throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
      }
      var RealPromise = Promise;
      SynchronousPromise2.installGlobally = function(__awaiter) {
        if (Promise === SynchronousPromise2) {
          return __awaiter;
        }
        var result = patchAwaiterIfRequired(__awaiter);
        Promise = SynchronousPromise2;
        return result;
      };
      SynchronousPromise2.uninstallGlobally = function() {
        if (Promise === SynchronousPromise2) {
          Promise = RealPromise;
        }
      };
      function patchAwaiterIfRequired(__awaiter) {
        if (typeof __awaiter === "undefined" || __awaiter.__patched) {
          return __awaiter;
        }
        var originalAwaiter = __awaiter;
        __awaiter = /* @__PURE__ */ __name(function __awaiter2() {
          var _$Promise = RealPromise;
          originalAwaiter.apply(this, makeArrayFrom(arguments));
        }, "__awaiter");
        __awaiter.__patched = true;
        return __awaiter;
      }
      __name(patchAwaiterIfRequired, "patchAwaiterIfRequired");
      module3.exports = {
        SynchronousPromise: SynchronousPromise2
      };
    }
  });

  // src/patcher/hook.ts
  var hook_exports = {};
  __export(hook_exports, {
    default: () => hook_default
  });
  var hook_default;
  var init_hook = __esm({
    "src/patcher/hook.ts"() {
      "use strict";
      init_emptyModule();
      init_patcher();
      hook_default = /* @__PURE__ */ __name((patchedFunc, origFunc, funcArgs, ctx, isConstruct) => {
        var patch = patchedFunctions.get(patchedFunc);
        if (!patch) {
          return isConstruct ? Reflect.construct(origFunc, funcArgs, ctx) : origFunc.apply(ctx, funcArgs);
        }
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctx, funcArgs);
          if (Array.isArray(maybefuncArgs)) funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current2) => (...args) => current2.call(ctx, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(origFunc, args, ctx) : origFunc.apply(ctx, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values()) {
          workingRetVal = hook1.call(ctx, funcArgs, workingRetVal) ?? workingRetVal;
        }
        for (var cleanup of patch.c) cleanup();
        patch.c = [];
        return workingRetVal;
      }, "default");
    }
  });

  // src/patcher/patcher.ts
  var patcher_exports = {};
  __export(patcher_exports, {
    _patcherDelaySymbol: () => _patcherDelaySymbol,
    getPatchFunc: () => getPatchFunc,
    patchedFunctions: () => patchedFunctions,
    unpatch: () => unpatch
  });
  function getPatchFunc(patchType) {
    var patch = /* @__PURE__ */ __name((funcParent, funcName, callback, oneTime = false) => {
      var origFunc = funcParent[funcName];
      if (typeof origFunc !== "function") {
        throw new Error(`${String(funcName)} is not a function in ${funcParent.constructor.name}`);
      }
      var funcPatch = patchedFunctions.get(origFunc);
      if (!funcPatch) {
        funcPatch = {
          b: /* @__PURE__ */ new Map(),
          i: /* @__PURE__ */ new Map(),
          a: /* @__PURE__ */ new Map(),
          c: []
        };
        var replaceProxy = new Proxy(origFunc, {
          apply: /* @__PURE__ */ __name((_, ctx, args) => runHook(ctx, args, false), "apply"),
          construct: /* @__PURE__ */ __name((_, args) => runHook(origFunc, args, true), "construct"),
          get: /* @__PURE__ */ __name((target, prop, receiver) => prop === "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver), "get")
        });
        var runHook = /* @__PURE__ */ __name((ctx, args, construct) => hook_default(replaceProxy, origFunc, args, ctx, construct), "runHook");
        patchedFunctions.set(replaceProxy, funcPatch);
        if (!Reflect.defineProperty(funcParent, funcName, {
          value: replaceProxy,
          configurable: true,
          writable: true
        })) {
          funcParent[funcName] = replaceProxy;
        }
      }
      var hookId = Symbol();
      var patchedFunc = funcParent[funcName];
      var unpatchThisPatch = /* @__PURE__ */ __name(() => unpatch(patchedFunc, hookId, patchType), "unpatchThisPatch");
      if (oneTime) funcPatch.c.push(unpatchThisPatch);
      funcPatch[patchType].set(hookId, callback);
      return unpatchThisPatch;
    }, "patch");
    var patchWithDelay = /* @__PURE__ */ __name((funcParent, funcName, callback, oneTime = false) => {
      if (_patcherDelaySymbol in funcParent) {
        var delayCallback = funcParent[_patcherDelaySymbol];
        var cancel = false;
        var unpatch2 = /* @__PURE__ */ __name(() => cancel = true, "unpatch");
        delayCallback((target) => {
          if (cancel) return;
          unpatch2 = patch(target, funcName, callback, oneTime);
        });
        return () => unpatch2();
      }
      return patch(funcParent, funcName, callback, oneTime);
    }, "patchWithDelay");
    var patchAsync = /* @__PURE__ */ __name((promiseOfParent, funcName, callback, oneTime = false) => {
      if (!promiseOfParent || !("then" in promiseOfParent)) throw new Error("target is not a then-able object");
      var cancel = false;
      var unpatch2 = /* @__PURE__ */ __name(() => cancel = true, "unpatch");
      promiseOfParent.then((target) => {
        if (cancel) return;
        unpatch2 = patch(target, funcName, callback, oneTime);
        return target;
      });
      return () => unpatch2();
    }, "patchAsync");
    return Object.assign(patchWithDelay, {
      pure: patch,
      async: patchAsync
    });
  }
  function unpatch(patchedFunction, hookId, type) {
    var patch = patchedFunctions.get(patchedFunction);
    if (!patch || !patch[type].delete(hookId)) return false;
    return true;
  }
  var _patcherDelaySymbol, patchedFunctions;
  var init_patcher = __esm({
    "src/patcher/patcher.ts"() {
      "use strict";
      init_emptyModule();
      init_hook();
      _patcherDelaySymbol = Symbol.for("blazed.patcher.delaysymbol");
      __name(getPatchFunc, "getPatchFunc");
      __name(unpatch, "unpatch");
      patchedFunctions = /* @__PURE__ */ new WeakMap();
    }
  });

  // src/metro/lazy.ts
  var lazy_exports2 = {};
  __export(lazy_exports2, {
    LazyModuleContext: () => LazyModuleContext
  });
  var LazyModuleContext;
  var init_lazy2 = __esm({
    "src/metro/lazy.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_modules();
      init_lazy();
      init_patcher();
      LazyModuleContext = /* @__PURE__ */ function() {
        "use strict";
        function LazyModuleContext2(module3) {
          _class_call_check(this, LazyModuleContext2);
          _define_property(this, "_proxy", void 0);
          _define_property(this, "filter", void 0);
          _define_property(this, "module", void 0);
          this.module = module3;
          this.filter = module3?.filter;
        }
        __name(LazyModuleContext2, "LazyModuleContext");
        _create_class(LazyModuleContext2, [
          {
            key: "cache",
            get: /* @__PURE__ */ __name(function get() {
              return this.module._module;
            }, "get"),
            set: /* @__PURE__ */ __name(function set2(value) {
              this.module._lazyCallback?.(value);
              this.module._lazyCallback = void 0;
              this.module._module = value;
            }, "set")
          },
          {
            key: "wait",
            value: /* @__PURE__ */ __name(function wait(callback) {
              return waitFor(this.filter, (exp) => callback(exp));
            }, "wait")
          },
          {
            key: "proxy",
            value: /* @__PURE__ */ __name(function proxy() {
              if (this._proxy) {
                return this._proxy;
              }
              var proxy2 = lazyValue(() => this.load(), {
                exemptedEntries: {
                  ...true ? {
                    __LAZY_MODULE__: true
                  } : null,
                  [LazyModuleContext2.ProxySymbol]: this,
                  [_patcherDelaySymbol]: (cb) => this.wait(cb)
                }
              });
              LazyModuleContext2.ProxyMap.set(proxy2, this);
              this.wait((exp) => this.cache = exp);
              return this._proxy = proxy2;
            }, "proxy")
          },
          {
            key: "load",
            value: /* @__PURE__ */ __name(function load() {
              if (!this.cache) {
                var cache = this.cache = this.module.load();
                if (typeof cache === "function" || typeof cache === "object") {
                  LazyModuleContext2.ProxyMap.set(this.cache, this);
                }
              }
              return this.cache;
            }, "load")
          },
          {
            key: Symbol.toStringTag,
            get: /* @__PURE__ */ __name(function get() {
              return "LazyModuleContext";
            }, "get")
          }
        ]);
        return LazyModuleContext2;
      }();
      _define_property(LazyModuleContext, "ProxySymbol", Symbol.for("blazed.metro.lazyContext"));
      _define_property(LazyModuleContext, "ProxyMap", /* @__PURE__ */ new WeakMap());
    }
  });

  // src/metro/module.ts
  var module_exports = {};
  __export(module_exports, {
    SingleMetroModule: () => SingleMetroModule
  });
  var import_synchronous_promise, SingleMetroModule;
  var init_module = __esm({
    "src/metro/module.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      import_synchronous_promise = __toESM(require_synchronous_promise(), 1);
      init_modules();
      init_lazy2();
      init_api();
      SingleMetroModule = /* @__PURE__ */ function() {
        "use strict";
        function SingleMetroModule2(filter) {
          _class_call_check(this, SingleMetroModule2);
          _define_property(this, "_id", void 0);
          _define_property(this, "_module", void 0);
          _define_property(this, "_lazy", void 0);
          _define_property(this, "_lazyCallback", void 0);
          _define_property(this, "filter", void 0);
          this.filter = filter;
        }
        __name(SingleMetroModule2, "SingleMetroModule");
        _create_class(SingleMetroModule2, [
          {
            key: "wait",
            value: /* @__PURE__ */ __name(function wait(callback) {
              return waitFor(this.filter, (exp) => callback(exp));
            }, "wait")
          },
          {
            key: "load",
            value: /* @__PURE__ */ __name(function load() {
              if (!this._module) {
                var ret = findIdAndResolved(this.filter);
                if (!ret) {
                  throw new Error(`Module ${this.filter.key} returned unexpected ${typeof this._module}`);
                }
                this._id = ret.id;
                this._module = ret.resolved;
              }
              return this._module;
            }, "load")
          },
          {
            key: "await",
            value: /* @__PURE__ */ __name(function _await() {
              return new import_synchronous_promise.SynchronousPromise((resolve) => {
                this.wait(resolve);
              });
            }, "_await")
          },
          {
            key: "asLazy",
            value: /* @__PURE__ */ __name(function asLazy(cb) {
              if (cb) this._lazyCallback = cb;
              this._lazy ??= new LazyModuleContext(this);
              return this._lazy.proxy();
            }, "asLazy")
          }
        ]);
        return SingleMetroModule2;
      }();
    }
  });

  // src/metro/api.ts
  var api_exports = {};
  __export(api_exports, {
    findIdAndResolved: () => findIdAndResolved,
    lookup: () => lookup,
    testExports: () => testExports
  });
  function testExports(moduleId, moduleExports, filter) {
    for (var resolve of filter.resolvers) {
      var resolved = resolve(moduleExports);
      if (!resolved) continue;
      if (filter.check(moduleId, resolved)) {
        return resolved;
      }
    }
  }
  function* _iterateModule(filter, fullLookup) {
    var { cacheId, finish } = createCacheHandler(filter.key, fullLookup);
    for (var [id, moduleExports] of iterateModulesForCache(filter.key, fullLookup)) {
      var resolved = testExports(id, moduleExports, filter);
      if (resolved !== void 0) {
        cacheId(id, resolved);
        metroEvents.emit("lookupFound", filter.key, moduleRegistry.get(id));
        yield {
          id,
          resolved
        };
      }
    }
    finish(true);
    return void 0;
  }
  function _findModule(filter) {
    return _iterateModule(filter, false).next().value;
  }
  function findIdAndResolved(filter) {
    return _findModule(filter);
  }
  function lookup(filter) {
    return new SingleMetroModule(filter);
  }
  var init_api = __esm({
    "src/metro/api.ts"() {
      "use strict";
      init_caches();
      init_events();
      init_registry();
      init_module();
      __name(testExports, "testExports");
      __name(_iterateModule, "_iterateModule");
      __name(_findModule, "_findModule");
      __name(findIdAndResolved, "findIdAndResolved");
      __name(lookup, "lookup");
    }
  });

  // shims/jsxRuntime.ts
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory) args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_jsxRuntime = __esm({
    "shims/jsxRuntime.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_lazy();
      jsxRuntime = lookup(byProps([
        "jsx",
        "jsxs"
      ])).asLazy((r4) => jsxRuntime = r4);
      __name(unproxyFirstArg, "unproxyFirstArg");
      Fragment = Symbol.for("react.fragment");
      jsx = /* @__PURE__ */ __name((...args) => jsxRuntime.jsx(...unproxyFirstArg(args)), "jsx");
      jsxs = /* @__PURE__ */ __name((...args) => jsxRuntime.jsxs(...unproxyFirstArg(args)), "jsxs");
    }
  });

  // src/metro/common/wrappers.ts
  var wrappers_exports = {};
  __export(wrappers_exports, {
    lookupByFilePath: () => lookupByFilePath,
    lookupByName: () => lookupByName,
    lookupByProps: () => lookupByProps
  });
  function lookupByProps(...props) {
    return lookup(byProps(props));
  }
  function lookupByName(name) {
    return lookup(byName(name));
  }
  function lookupByFilePath(filePath, options) {
    return lookup(byFilePath(filePath, options));
  }
  var init_wrappers = __esm({
    "src/metro/common/wrappers.ts"() {
      "use strict";
      init_filters2();
      init_api();
      __name(lookupByProps, "lookupByProps");
      __name(lookupByName, "lookupByName");
      __name(lookupByFilePath, "lookupByFilePath");
    }
  });

  // src/metro/common/libraries/Discord.ts
  var Discord_exports = {};
  __export(Discord_exports, {
    constants: () => constants,
    i18n: () => i18n,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var constants, i18n, tokens, useToken;
  var init_Discord = __esm({
    "src/metro/common/libraries/Discord.ts"() {
      "use strict";
      init_lazy();
      init_wrappers();
      constants = lookupByProps("Fonts", "Permissions").asLazy((m2) => constants = m2);
      i18n = lookupByProps("Messages").asLazy((m2) => i18n = m2);
      tokens = lookupByProps("unsafe_rawColors", "colors").asLazy((m2) => tokens = m2);
      ({ useToken } = lazyDestructure(() => lookupByProps("useToken").asLazy((m2) => ({ useToken } = m2))));
    }
  });

  // src/metro/common/libraries/Flux.ts
  var Flux_exports = {};
  __export(Flux_exports, {
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils
  });
  var Flux, FluxDispatcher, FluxUtils;
  var init_Flux = __esm({
    "src/metro/common/libraries/Flux.ts"() {
      "use strict";
      init_wrappers();
      Flux = lookupByProps("connectStores").asLazy((m2) => Flux = m2);
      FluxDispatcher = lookupByProps("_interceptors").asLazy((m2) => FluxDispatcher = m2);
      FluxUtils = lookupByProps("useStateFromStores").asLazy((m2) => FluxUtils = m2);
    }
  });

  // src/metro/common/libraries/index.ts
  var libraries_exports = {};
  __export(libraries_exports, {
    AssetsRegistry: () => AssetsRegistry,
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils,
    NavigationNative: () => NavigationNative,
    React: () => React,
    ReactNative: () => ReactNative,
    Reanimated: () => Reanimated,
    chroma: () => chroma,
    constants: () => constants,
    i18n: () => i18n,
    semver: () => semver,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var semver, chroma, Reanimated, NavigationNative, React, ReactNative, AssetsRegistry;
  var init_libraries = __esm({
    "src/metro/common/libraries/index.ts"() {
      "use strict";
      init_wrappers();
      init_Discord();
      init_Flux();
      semver = lookupByProps("parse", "clean").asLazy((m2) => semver = m2);
      chroma = lookupByProps("brewer").asLazy((m2) => chroma = m2);
      Reanimated = lookupByProps("useAnimatedStyle", "withSpring").asLazy((m2) => Reanimated = m2);
      NavigationNative = lookupByProps("NavigationContainer").asLazy((m2) => NavigationNative = m2);
      React = lookupByProps("createElement").asLazy((m2) => React = m2);
      ReactNative = lookupByProps("AppRegistry").asLazy((m2) => ReactNative = m2);
      AssetsRegistry = lookupByProps("getAssetByID").asLazy((m2) => AssetsRegistry = m2);
    }
  });

  // src/api/assets.ts
  var assets_exports = {};
  __export(assets_exports, {
    filterAssets: () => filterAssets,
    findAsset: () => findAsset,
    findAssetId: () => findAssetId,
    getAssets: () => getAssets,
    iterateAssets: () => iterateAssets
  });
  function getAssets() {
    return arrayCache ??= Array.from(iterateAssets());
  }
  function* iterateAssets() {
    var yielded = /* @__PURE__ */ new Set();
    for (var state2 of moduleRegistry.values()) {
      if (state2.meta.isAsset) {
        var assetId = window.__r(state2.id);
        if (yielded.has(state2.id) || typeof assetId !== "number") {
          continue;
        }
        yield getAssetById(assetId);
        yielded.add(state2.id);
      }
    }
  }
  function getAssetById(id) {
    var asset = AssetsRegistry.getAssetByID(id);
    if (!asset) return asset;
    return Object.assign(asset, {
      id
    });
  }
  function findAsset(param) {
    if (typeof param === "number") return getAssetById(param);
    if (typeof param === "string" && _nameToAssetCache[param]) {
      return _nameToAssetCache[param];
    }
    for (var asset of iterateAssets()) {
      if (typeof param === "string" && asset.name === param) {
        _nameToAssetCache[param] = asset;
        return asset;
      }
      if (typeof param === "function" && param(asset)) {
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
  function findAssetId(param) {
    return typeof param === "string" ? findAsset(param)?.id : findAsset(param)?.id;
  }
  var _nameToAssetCache, arrayCache;
  var init_assets = __esm({
    "src/api/assets.ts"() {
      "use strict";
      init_libraries();
      init_registry();
      _nameToAssetCache = {};
      __name(getAssets, "getAssets");
      __name(iterateAssets, "iterateAssets");
      __name(getAssetById, "getAssetById");
      __name(findAsset, "findAsset");
      __name(filterAssets, "filterAssets");
      __name(findAssetId, "findAssetId");
    }
  });

  // src/components/Discord/util.tsx
  var util_exports = {};
  __export(util_exports, {
    getComponentFromFilePath: () => getComponentFromFilePath,
    getComponentFromProps: () => getComponentFromProps
  });
  function getComponentFromProps(props, { singular = false } = {}) {
    var actualProps = typeof props === "string" ? [
      props
    ] : props;
    var ActualComponent = singular ? findSingular(actualProps[0]) : findProp(...actualProps);
    return ActualComponent;
  }
  function getComponentFromFilePath(path) {
    var ActualComponent = lookup(byFilePath(path)).asLazy();
    return ActualComponent;
  }
  var findSingular, findProp;
  var init_util = __esm({
    "src/components/Discord/util.tsx"() {
      "use strict";
      init_api();
      init_filters2();
      init_lazy();
      findSingular = /* @__PURE__ */ __name((prop) => lazyValue(() => lookup(bySingularProp(prop)).load()[prop]), "findSingular");
      findProp = /* @__PURE__ */ __name((...prop) => lazyValue(() => lookup(byProps(prop)).load()[prop[0]]), "findProp");
      __name(getComponentFromProps, "getComponentFromProps");
      __name(getComponentFromFilePath, "getComponentFromFilePath");
    }
  });

  // src/components/Discord/Button/Button.tsx
  var Button_exports = {};
  __export(Button_exports, {
    default: () => Button_default
  });
  var Button_default;
  var init_Button = __esm({
    "src/components/Discord/Button/Button.tsx"() {
      "use strict";
      init_util();
      Button_default = getComponentFromProps("Button", {
        singular: true
      });
    }
  });

  // src/components/Discord/Button/IconButton.tsx
  var IconButton_exports = {};
  __export(IconButton_exports, {
    default: () => IconButton_default
  });
  var IconButton_default;
  var init_IconButton = __esm({
    "src/components/Discord/Button/IconButton.tsx"() {
      "use strict";
      init_util();
      IconButton_default = getComponentFromProps("IconButton", {
        singular: true
      });
    }
  });

  // src/components/Discord/Card/Card.tsx
  var Card_exports = {};
  __export(Card_exports, {
    default: () => Card_default
  });
  var Card_default;
  var init_Card = __esm({
    "src/components/Discord/Card/Card.tsx"() {
      "use strict";
      init_util();
      Card_default = getComponentFromProps("Card");
    }
  });

  // src/components/Discord/Sheet/BottomSheet.tsx
  var BottomSheet_exports = {};
  __export(BottomSheet_exports, {
    default: () => BottomSheet_default
  });
  var BottomSheet_default;
  var init_BottomSheet = __esm({
    "src/components/Discord/Sheet/BottomSheet.tsx"() {
      "use strict";
      init_util();
      BottomSheet_default = getComponentFromProps("BottomSheet");
    }
  });

  // src/components/Discord/Stack/Stack.tsx
  var Stack_exports = {};
  __export(Stack_exports, {
    default: () => Stack_default
  });
  var Stack_default;
  var init_Stack = __esm({
    "src/components/Discord/Stack/Stack.tsx"() {
      "use strict";
      init_util();
      Stack_default = getComponentFromProps("Stack");
    }
  });

  // src/components/Discord/TableRow/RowButton.tsx
  var RowButton_exports = {};
  __export(RowButton_exports, {
    default: () => RowButton_default
  });
  var RowButton_default;
  var init_RowButton = __esm({
    "src/components/Discord/TableRow/RowButton.tsx"() {
      "use strict";
      init_util();
      RowButton_default = getComponentFromProps("RowButton");
    }
  });

  // src/components/Discord/TableRow/TableCheckboxRow.tsx
  var TableCheckboxRow_exports = {};
  __export(TableCheckboxRow_exports, {
    default: () => TableCheckboxRow_default
  });
  var TableCheckboxRow_default;
  var init_TableCheckboxRow = __esm({
    "src/components/Discord/TableRow/TableCheckboxRow.tsx"() {
      "use strict";
      init_util();
      TableCheckboxRow_default = getComponentFromProps("TableCheckboxRow");
    }
  });

  // src/components/Discord/TableRow/TableRadioGroup.tsx
  var TableRadioGroup_exports = {};
  __export(TableRadioGroup_exports, {
    default: () => TableRadioGroup_default
  });
  var TableRadioGroup_default;
  var init_TableRadioGroup = __esm({
    "src/components/Discord/TableRow/TableRadioGroup.tsx"() {
      "use strict";
      init_util();
      TableRadioGroup_default = getComponentFromProps("TableRadioGroup");
    }
  });

  // src/components/Discord/TableRow/TableRadioRow.tsx
  var TableRadioRow_exports = {};
  __export(TableRadioRow_exports, {
    default: () => TableRadioRow_default
  });
  var TableRadioRow_default;
  var init_TableRadioRow = __esm({
    "src/components/Discord/TableRow/TableRadioRow.tsx"() {
      "use strict";
      init_util();
      TableRadioRow_default = getComponentFromProps("TableRadioRow");
    }
  });

  // src/components/Discord/TableRow/TableRow.tsx
  var TableRow_exports = {};
  __export(TableRow_exports, {
    default: () => TableRow_default
  });
  var TableRow_default;
  var init_TableRow = __esm({
    "src/components/Discord/TableRow/TableRow.tsx"() {
      "use strict";
      init_util();
      TableRow_default = getComponentFromProps("TableRow");
    }
  });

  // src/components/Discord/TableRow/TableRowGroup.tsx
  var TableRowGroup_exports = {};
  __export(TableRowGroup_exports, {
    default: () => TableRowGroup_default
  });
  var TableRowGroup_default;
  var init_TableRowGroup = __esm({
    "src/components/Discord/TableRow/TableRowGroup.tsx"() {
      "use strict";
      init_util();
      TableRowGroup_default = getComponentFromProps("TableRowGroup");
    }
  });

  // src/components/Discord/TableRow/TableRowIcon.tsx
  var TableRowIcon_exports = {};
  __export(TableRowIcon_exports, {
    default: () => TableRowIcon_default
  });
  var TableRowIcon_default;
  var init_TableRowIcon = __esm({
    "src/components/Discord/TableRow/TableRowIcon.tsx"() {
      "use strict";
      init_util();
      TableRowIcon_default = getComponentFromProps("TableRowIcon");
    }
  });

  // src/components/Discord/TableRow/TableRowTrailingText.tsx
  var TableRowTrailingText_exports = {};
  __export(TableRowTrailingText_exports, {
    default: () => TableRowTrailingText_default
  });
  var TableRowTrailingText_default;
  var init_TableRowTrailingText = __esm({
    "src/components/Discord/TableRow/TableRowTrailingText.tsx"() {
      "use strict";
      init_util();
      TableRowTrailingText_default = getComponentFromProps("TableRowTrailingText");
    }
  });

  // src/components/Discord/TableRow/TableSwitchRow.tsx
  var TableSwitchRow_exports = {};
  __export(TableSwitchRow_exports, {
    default: () => TableSwitchRow_default
  });
  var TableSwitchRow_default;
  var init_TableSwitchRow = __esm({
    "src/components/Discord/TableRow/TableSwitchRow.tsx"() {
      "use strict";
      init_util();
      TableSwitchRow_default = getComponentFromProps("TableSwitchRow");
    }
  });

  // src/components/Discord/Text/Text.tsx
  var Text_exports = {};
  __export(Text_exports, {
    default: () => Text_default
  });
  var Text_default;
  var init_Text = __esm({
    "src/components/Discord/Text/Text.tsx"() {
      "use strict";
      init_util();
      Text_default = getComponentFromProps([
        "Text",
        "LegacyText"
      ]);
    }
  });

  // src/components/Discord/TextInput/TextInput.tsx
  var TextInput_exports = {};
  __export(TextInput_exports, {
    default: () => TextInput_default
  });
  var TextInput_default;
  var init_TextInput = __esm({
    "src/components/Discord/TextInput/TextInput.tsx"() {
      "use strict";
      init_util();
      TextInput_default = getComponentFromProps("TextInput", {
        singular: true
      });
    }
  });

  // src/components/Discord/index.tsx
  var Discord_exports2 = {};
  __export(Discord_exports2, {
    BottomSheet: () => BottomSheet_default,
    Button: () => Button_default,
    Card: () => Card_default,
    IconButton: () => IconButton_default,
    RowButton: () => RowButton_default,
    Stack: () => Stack_default,
    TableCheckboxRow: () => TableCheckboxRow_default,
    TableRadioGroup: () => TableRadioGroup_default,
    TableRadioRow: () => TableRadioRow_default,
    TableRow: () => TableRow_default,
    TableRowGroup: () => TableRowGroup_default,
    TableRowIcon: () => TableRowIcon_default,
    TableRowTrailingText: () => TableRowTrailingText_default,
    TableSwitchRow: () => TableSwitchRow_default,
    Text: () => Text_default,
    TextInput: () => TextInput_default
  });
  var init_Discord2 = __esm({
    "src/components/Discord/index.tsx"() {
      "use strict";
      init_Button();
      init_IconButton();
      init_Card();
      init_BottomSheet();
      init_Stack();
      init_RowButton();
      init_TableCheckboxRow();
      init_TableRadioGroup();
      init_TableRadioRow();
      init_TableRow();
      init_TableRowGroup();
      init_TableRowIcon();
      init_TableRowTrailingText();
      init_TableSwitchRow();
      init_Text();
      init_TextInput();
    }
  });

  // src/components/Discord/ContextMenu/ContextMenu.tsx
  var ContextMenu_exports = {};
  __export(ContextMenu_exports, {
    default: () => ContextMenu_default
  });
  var ContextMenu_default;
  var init_ContextMenu = __esm({
    "src/components/Discord/ContextMenu/ContextMenu.tsx"() {
      "use strict";
      init_util();
      ContextMenu_default = getComponentFromProps("ContextMenu");
    }
  });

  // shims/depsModule.ts
  var depsModule_exports = {};
  __export(depsModule_exports, {
    default: () => depsModule_default
  });
  var React2, ReactNative2, Reanimated2, GestureHandler, FlashList, depsModule_default;
  var init_depsModule = __esm({
    "shims/depsModule.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_lazy();
      React2 = lookup(byProps([
        "createElement"
      ])).asLazy((r4) => React2 = r4);
      ReactNative2 = lookup(byProps([
        "AppRegistry"
      ])).asLazy((r4) => ReactNative2 = r4);
      Reanimated2 = lookup(byProps([
        "useSharedValue",
        "useAnimatedStyle",
        "FadeInUp"
      ])).asLazy((r4) => Reanimated2 = r4);
      GestureHandler = lookup(byProps([
        "gestureHandlerRootHOC"
      ])).asLazy((r4) => GestureHandler = r4);
      FlashList = lookup(byProps([
        "FlashList"
      ])).asLazy((r4) => FlashList = r4);
      depsModule_default = {
        "react": createLazyImportProxy(() => React2),
        "react-native": createLazyImportProxy(() => ReactNative2),
        "react-native-reanimated": createLazyImportProxy(() => Reanimated2),
        "react-native-gesture-handler": createLazyImportProxy(() => GestureHandler),
        "@shopify/flash-list": createLazyImportProxy(() => FlashList)
      };
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native"];
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react"];
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs
  var removeEmptyValues, trimAllValues, parseArgumentPart, isBasicPluralPart, parsePluralPart, REGEX_SWITCH_CASE, parseCases, REGEX_BRACKETS_SPLIT, removeOuterBrackets, parseRawText;
  var init_basic = __esm({
    "node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs"() {
      removeEmptyValues = /* @__PURE__ */ __name((object) => Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.entries(object).map(([key, value]) => key !== "i" && value && value != "0" && [
          key,
          value
        ]).filter(Boolean)
      ), "removeEmptyValues");
      trimAllValues = /* @__PURE__ */ __name((part) => Object.fromEntries(Object.keys(part).map((key) => {
        var val = part[key];
        return [
          key,
          Array.isArray(val) ? val.map((v) => v === null || v === void 0 ? void 0 : v.trim()) : val === !!val ? val : val === null || val === void 0 ? void 0 : val.trim()
        ];
      })), "trimAllValues");
      parseArgumentPart = /* @__PURE__ */ __name((text) => {
        var [keyPart = "", ...formatterKeys] = text.split("|");
        var [keyWithoutType = "", type] = keyPart.split(":");
        var [key, isOptional] = keyWithoutType.split("?");
        return {
          k: key,
          i: type,
          n: isOptional === "",
          f: formatterKeys
        };
      }, "parseArgumentPart");
      isBasicPluralPart = /* @__PURE__ */ __name((part) => !!(part.o || part.r), "isBasicPluralPart");
      parsePluralPart = /* @__PURE__ */ __name((content, lastAccessor) => {
        var [key, values] = content.split(":");
        if (!values) {
          values = key;
          key = lastAccessor;
        }
        var entries = values.split("|");
        var [zero, one, two, few, many, rest] = entries;
        var nrOfEntries = entries.filter((entry) => entry !== void 0).length;
        if (nrOfEntries === 1) {
          return {
            k: key,
            r: zero
          };
        }
        if (nrOfEntries === 2) {
          return {
            k: key,
            o: zero,
            r: one
          };
        }
        if (nrOfEntries === 3) {
          return {
            k: key,
            z: zero,
            o: one,
            r: two
          };
        }
        return {
          k: key,
          z: zero,
          o: one,
          t: two,
          f: few,
          m: many,
          r: rest
        };
      }, "parsePluralPart");
      REGEX_SWITCH_CASE = /^\{.*\}$/;
      parseCases = /* @__PURE__ */ __name((text) => Object.fromEntries(removeOuterBrackets(text).split(",").map((part) => part.split(":")).reduce((accumulator, entry) => {
        if (entry.length === 2) {
          return [
            ...accumulator,
            entry.map((entry2) => entry2.trim())
          ];
        }
        ;
        accumulator[accumulator.length - 1][1] += "," + entry[0];
        return accumulator;
      }, [])), "parseCases");
      REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
      removeOuterBrackets = /* @__PURE__ */ __name((text) => text.substring(1, text.length - 1), "removeOuterBrackets");
      parseRawText = /* @__PURE__ */ __name((rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
        if (!part.match(REGEX_BRACKETS_SPLIT)) {
          return part;
        }
        var content = removeOuterBrackets(part);
        if (content.startsWith("{")) {
          return parsePluralPart(removeOuterBrackets(content), lastKey);
        }
        var parsedPart = parseArgumentPart(content);
        lastKey = parsedPart.k || lastKey;
        !firstKey && (firstKey = lastKey);
        return parsedPart;
      }).map((part) => {
        if (typeof part === "string") return part;
        if (!part.k) part.k = firstKey || "0";
        var trimmed = trimAllValues(part);
        return optimize ? removeEmptyValues(trimmed) : trimmed;
      }), "parseRawText");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs
  var applyFormatters, getPlural, REGEX_PLURAL_VALUE_INJECTION, applyArguments, translate;
  var init_core = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs"() {
      init_basic();
      applyFormatters = /* @__PURE__ */ __name((formatters, formatterKeys, initialValue) => formatterKeys.reduce((value, formatterKey) => {
        var _a, _b;
        return (_b = formatterKey.match(REGEX_SWITCH_CASE) ? ((cases) => {
          var _a2;
          return (_a2 = cases[value]) !== null && _a2 !== void 0 ? _a2 : cases["*"];
        })(parseCases(formatterKey)) : (_a = formatters[formatterKey]) === null || _a === void 0 ? void 0 : _a.call(formatters, value)) !== null && _b !== void 0 ? _b : value;
      }, initialValue), "applyFormatters");
      getPlural = /* @__PURE__ */ __name((pluralRules, { z, o: o2, t: t4, f, m: m2, r: r4 }, value) => {
        switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
          case "zero":
            return z;
          case "one":
            return o2;
          case "two":
            return t4;
          case "few":
            return f !== null && f !== void 0 ? f : r4;
          case "many":
            return m2 !== null && m2 !== void 0 ? m2 : r4;
          default:
            return r4;
        }
      }, "getPlural");
      REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
      applyArguments = /* @__PURE__ */ __name((textParts, pluralRules, formatters, args) => textParts.map((part) => {
        if (typeof part === "string") {
          return part;
        }
        var { k: key = "0", f: formatterKeys = [] } = part;
        var value = args[key];
        if (isBasicPluralPart(part)) {
          return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
        }
        var formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
        return ("" + (formattedValue !== null && formattedValue !== void 0 ? formattedValue : "")).trim();
      }).join(""), "applyArguments");
      translate = /* @__PURE__ */ __name((textParts, pluralRules, formatters, args) => {
        var firstArg = args[0];
        var isObject2 = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
        var transformedArgs = args.length === 1 && isObject2 ? firstArg : args;
        return applyArguments(textParts, pluralRules, formatters, transformedArgs);
      }, "translate");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs
  var getPartsFromString, translateString, i18nString;
  var init_util_string = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs"() {
      init_basic();
      init_core();
      getPartsFromString = /* @__PURE__ */ __name((cache, text) => cache[text] || (cache[text] = parseRawText(text)), "getPartsFromString");
      translateString = /* @__PURE__ */ __name((cache, pluralRules, formatters, text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args), "translateString");
      i18nString = /* @__PURE__ */ __name((locale, formatters = {}) => translateString.bind(null, {}, new Intl.PluralRules(locale), formatters), "i18nString");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs
  function i18nObject(locale, translations, formatters = {}) {
    return createProxy(translations, getTranslateInstance(locale, formatters));
  }
  var getTranslateInstance, wrap, createProxy;
  var init_util_object = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs"() {
      init_core();
      init_util_string();
      getTranslateInstance = /* @__PURE__ */ __name((locale, formatters) => {
        var cache = {};
        var pluralRules = new Intl.PluralRules(locale);
        return (text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args);
      }, "getTranslateInstance");
      __name(i18nObject, "i18nObject");
      wrap = /* @__PURE__ */ __name((proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(Object.defineProperty(() => "", "name", {
        writable: true
      }), proxyObject), "wrap");
      createProxy = /* @__PURE__ */ __name((proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
        get: /* @__PURE__ */ __name((target, key) => {
          if (key === Symbol.iterator) return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
          return createProxy(target[key], translateFn);
        }, "get")
      }), "createProxy");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs
  var i18n2;
  var init_util_instance = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs"() {
      init_util_object();
      i18n2 = /* @__PURE__ */ __name((translations, formatters) => {
        var cache = {};
        return new Proxy({}, {
          get: /* @__PURE__ */ __name((_target, locale) => cache[locale] || (cache[locale] = i18nObject(locale, translations[locale], formatters[locale])), "get")
        });
      }, "i18n");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs
  var init_src = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs"() {
      init_util_instance();
      init_util_object();
      init_util_string();
    }
  });

  // node_modules/typesafe-i18n/detectors/detect.mjs
  var p, n, Nr, l;
  var init_detect = __esm({
    "node_modules/typesafe-i18n/detectors/detect.mjs"() {
      p = /* @__PURE__ */ __name((e3) => !!e3, "p");
      n = /* @__PURE__ */ __name((e3) => Array.from(new Set(e3)), "n");
      Nr = /* @__PURE__ */ __name((e3, o2, ...s) => {
        for (var i2 of s) {
          var t4 = l(o2, i2);
          if (t4) return t4;
        }
        return e3;
      }, "Nr");
      l = /* @__PURE__ */ __name((e3, o2) => {
        var s = o2().map((r4) => r4.toLowerCase()), i2 = n(s.flatMap((r4) => [
          r4,
          r4.split("-")[0]
        ])), t4 = e3.map((r4) => r4.toLowerCase());
        return i2.map((r4) => {
          var c2 = t4.findIndex((x) => x === r4);
          return c2 >= 0 && e3[c2];
        }).find(p);
      }, "l");
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs
  var r, i, n2;
  var init_document_cookie = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs"() {
      r = /* @__PURE__ */ __name((o2, c2) => {
        var t4 = o2?.split(";").map((e3) => e3.trim()).find((e3) => e3.startsWith(c2))?.split("=")[1];
        return t4 ? [
          t4
        ] : [];
      }, "r");
      i = /* @__PURE__ */ __name((o2 = "lang") => () => r(document?.cookie, o2), "i");
      n2 = i();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs
  var init_html_lang_attribute = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs
  var e, t, xe;
  var init_localstorage_detector = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs"() {
      e = /* @__PURE__ */ __name((r4) => !!r4, "e");
      t = /* @__PURE__ */ __name((r4 = "lang") => () => [
        window?.localStorage?.getItem(r4)
      ].filter(e), "t");
      xe = t();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs
  var init_navigator = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs
  var o, c;
  var init_query_string = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs"() {
      o = /* @__PURE__ */ __name((e3 = "lang") => () => {
        var t4 = location?.search?.slice(1).split("&").find((r4) => r4.startsWith(e3))?.split("=")[1];
        return t4 ? [
          t4
        ] : [];
      }, "o");
      c = o();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs
  var r2, t2, lr;
  var init_sessionstorage_detector = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs"() {
      r2 = /* @__PURE__ */ __name((e3) => !!e3, "r");
      t2 = /* @__PURE__ */ __name((e3 = "lang") => () => [
        window?.sessionStorage?.getItem(e3)
      ].filter(r2), "t");
      lr = t2();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs
  var init_accept_language_header = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs
  var init_request_cookies = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs
  var init_request_hostname = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs
  var init_request_parameters = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/index.mjs
  var init_detectors = __esm({
    "node_modules/typesafe-i18n/detectors/index.mjs"() {
      init_detect();
      init_document_cookie();
      init_html_lang_attribute();
      init_localstorage_detector();
      init_navigator();
      init_query_string();
      init_sessionstorage_detector();
      init_accept_language_header();
      init_request_cookies();
      init_request_hostname();
      init_request_parameters();
    }
  });

  // node_modules/typesafe-i18n/utils/index.mjs
  function extend() {
    var args = [].slice.call(arguments);
    var deep = false;
    if (typeof args[0] == "boolean") {
      deep = args.shift();
    }
    var result = args[0];
    if (isUnextendable(result)) {
      throw new Error("extendee must be an object");
    }
    var extenders = args.slice(1);
    var len = extenders.length;
    for (var i2 = 0; i2 < len; i2++) {
      var extender = extenders[i2];
      for (var key in extender) {
        if (Object.prototype.hasOwnProperty.call(extender, key)) {
          var value = extender[key];
          if (deep && isCloneable(value)) {
            var base = Array.isArray(value) ? [] : {};
            result[key] = extend(true, Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key]) ? result[key] : base, value);
          } else {
            result[key] = value;
          }
        }
      }
    }
    return result;
  }
  function isCloneable(obj) {
    return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
  }
  function isUnextendable(val) {
    return !val || typeof val != "object" && typeof val != "function";
  }
  var objectExtend, initExtendDictionary, extendDictionary;
  var init_utils = __esm({
    "node_modules/typesafe-i18n/utils/index.mjs"() {
      objectExtend = extend;
      __name(extend, "extend");
      __name(isCloneable, "isCloneable");
      __name(isUnextendable, "isUnextendable");
      initExtendDictionary = /* @__PURE__ */ __name(() => (base, part) => objectExtend({}, base, part), "initExtendDictionary");
      extendDictionary = initExtendDictionary();
    }
  });

  // src/i18n/i18n-util.ts
  var i18n_util_exports = {};
  __export(i18n_util_exports, {
    baseLocale: () => baseLocale,
    detectLocale: () => detectLocale,
    extendDictionary: () => extendDictionary2,
    i18n: () => i18n3,
    i18nObject: () => i18nObject2,
    i18nString: () => i18nString2,
    isLocale: () => isLocale,
    loadedFormatters: () => loadedFormatters,
    loadedLocales: () => loadedLocales,
    locales: () => locales
  });
  var baseLocale, locales, isLocale, loadedLocales, loadedFormatters, extendDictionary2, i18nString2, i18nObject2, i18n3, detectLocale;
  var init_i18n_util = __esm({
    "src/i18n/i18n-util.ts"() {
      "use strict";
      init_src();
      init_detectors();
      init_utils();
      baseLocale = "en";
      locales = [
        "en"
      ];
      isLocale = /* @__PURE__ */ __name((locale) => locales.includes(locale), "isLocale");
      loadedLocales = {};
      loadedFormatters = {};
      extendDictionary2 = initExtendDictionary();
      i18nString2 = /* @__PURE__ */ __name((locale) => i18nString(locale, loadedFormatters[locale]), "i18nString");
      i18nObject2 = /* @__PURE__ */ __name((locale) => i18nObject(locale, loadedLocales[locale], loadedFormatters[locale]), "i18nObject");
      i18n3 = /* @__PURE__ */ __name(() => i18n2(loadedLocales, loadedFormatters), "i18n");
      detectLocale = /* @__PURE__ */ __name((...detectors) => Nr(baseLocale, locales, ...detectors), "detectLocale");
    }
  });

  // lazy-resolver:./i18n-util
  var require_i18n_util = __commonJS({
    "lazy-resolver:./i18n-util"(exports, module3) {
      module3.exports = (init_lazy(), __toCommonJS(lazy_exports)).createLazyImportProxy(
        () => (init_i18n_util(), __toCommonJS(i18n_util_exports))
      );
    }
  });

  // src/i18n/formatters.ts
  var initFormatters;
  var init_formatters = __esm({
    "src/i18n/formatters.ts"() {
      "use strict";
      initFormatters = /* @__PURE__ */ __name((locale) => {
        var formatters = {};
        return formatters;
      }, "initFormatters");
    }
  });

  // src/i18n/en/index.ts
  var en, en_default;
  var init_en = __esm({
    "src/i18n/en/index.ts"() {
      "use strict";
      en = {
        discord: "Discord",
        blazecord: "BlazeCord",
        ui: {
          components: {
            search: {
              placeholder: "Search"
            }
          }
        },
        error_boundary: {
          uh_oh: "Uh oh.",
          retry_render: "Retry Render",
          reload: "Reload Discord",
          safe_mode: "Safe Mode",
          stack_trace: "Stack Trace",
          screen: {
            copy: "Copy",
            show_more: "Show more",
            show_less: "Show less",
            component_stack: "Component Stack",
            call_stack: "Call Stack",
            description: "An error occurred while rendering a component. This may have been caused by a plugin, BlazeCord, or Discord itself."
          }
        },
        actions: {
          nevermind: "Nevermind",
          dismiss: "Dismiss",
          copy: "Copy"
        },
        updater: {
          update_tag: "Update",
          update_available: "Update Available",
          new_version: "A new version of BlazeCord is available!",
          update_now: "Update Now",
          update_and_restart: "Update and Restart",
          already_latest: "You're already on the latest version!",
          failed_to_check: "Failed to check for updates",
          error_alert: "An error occurred while checking for updates."
        },
        settings: {
          sections: {
            plugins: "Plugins",
            themes: "Themes",
            developer: "Developer",
            updater: "Updater"
          },
          general: {
            info: "Info",
            logs: "Logs",
            platform: "Platform",
            quick_actions: "Quick Actions",
            reload: "Reload Discord",
            links: "Links",
            github: "GitHub",
            discord: "Discord",
            x: "X",
            react: "React",
            react_native: "React Native",
            hermes: "Hermes",
            client_info: {
              label: "Client Info"
            },
            configurations: {
              label: "Configurations",
              safe_mode: {
                label: "Safe Mode",
                description: "This will stop non-essential addons from running, leaving only core functionalities. Restart required.",
                alert: {
                  title: "{action|{disable: Disable, enable: Enable}} Safe Mode?",
                  description: "Do you want to {action:string} safe mode? This will {action|{enable: stop non-essential plugins from running, disable: allow all plugins to run as usual}}. A restart is needed for changes to take effect.",
                  apply_and_restart: "Apply and Restart",
                  apply_without_restart: "Apply Without Restart"
                }
              }
            }
          },
          plugins: {
            description: "Description",
            safe_mode_callout: "Safe Mode Enabled",
            safe_mode_callout_desc: "Only essential plugins will take effect while safe mode is enabled.",
            info_sheet: {
              details: "Details",
              more_info: "More Info",
              view_source: "View Source",
              configurations: "Configurations",
              authors: "Authors",
              version: "Version",
              id: "ID",
              path: "Path"
            }
          },
          developer: {
            sections: {
              init_config: {
                label: "Loader Configurations",
                sublabel: "Configure the loader to use custom endpoint for bundle fetching. Refer CONTRIBUTING.md to learn how to configure local dev server for development",
                custom_endpoint: "Custom Endpoint",
                bundle_path: "Override Bundle Path",
                bundle_path_desc: "Override the path to the bundle file. By default, the injector prioritizes the bytecode bundle, followed by the minified bundle, and lastly, the regular bundle.",
                force_update: "Force Update",
                force_update_desc: "Forcefully fetch bundle every app start to ensure latest bundle is loaded"
              },
              tools: {
                label: "Tools",
                asset_browser: {
                  label: "Asset Browser"
                }
              },
              playground: {
                label: "Playground"
              },
              actions: {
                label: "Actions",
                invalidate_metro_cache: "Invalidate Metro Cache"
              }
            }
          },
          updater: {
            info: "Info",
            repo: "Repository",
            settings: "Settings",
            autoUpdate: "Automatic Updates",
            autoUpdateDescription: "Enable automatic bundle updates without prompts. Bundles are forcefully fetched if uncached.",
            notifyNewUpdates: "Notify New Updates",
            notifyNewUpdatesDescription: "Show a notification when a new update is available.",
            checkForUpdates: "Check for Updates"
          }
        }
      };
      en_default = en;
    }
  });

  // src/i18n/i18n-util.sync.ts
  var i18n_util_sync_exports = {};
  __export(i18n_util_sync_exports, {
    loadAllLocales: () => loadAllLocales,
    loadFormatters: () => loadFormatters,
    loadLocale: () => loadLocale
  });
  var localeTranslations, loadLocale, loadAllLocales, loadFormatters;
  var init_i18n_util_sync = __esm({
    "src/i18n/i18n-util.sync.ts"() {
      "use strict";
      init_formatters();
      init_i18n_util();
      init_en();
      localeTranslations = {
        en: en_default
      };
      loadLocale = /* @__PURE__ */ __name((locale) => {
        if (loadedLocales[locale]) return;
        loadedLocales[locale] = localeTranslations[locale];
        loadFormatters(locale);
      }, "loadLocale");
      loadAllLocales = /* @__PURE__ */ __name(() => locales.forEach(loadLocale), "loadAllLocales");
      loadFormatters = /* @__PURE__ */ __name((locale) => void (loadedFormatters[locale] = initFormatters(locale)), "loadFormatters");
    }
  });

  // lazy-resolver:./i18n-util.sync
  var require_i18n_util2 = __commonJS({
    "lazy-resolver:./i18n-util.sync"(exports, module3) {
      module3.exports = (init_lazy(), __toCommonJS(lazy_exports)).createLazyImportProxy(
        () => (init_i18n_util_sync(), __toCommonJS(i18n_util_sync_exports))
      );
    }
  });

  // src/i18n/index.ts
  var import_i18n_util2, import_i18n_util3, t3;
  var init_i18n = __esm({
    "src/i18n/index.ts"() {
      "use strict";
      init_lazy();
      import_i18n_util2 = __toESM(require_i18n_util(), 1);
      import_i18n_util3 = __toESM(require_i18n_util2(), 1);
      t3 = lazyValue(() => {
        (0, import_i18n_util3.loadLocale)("en");
        return (0, import_i18n_util2.i18nObject)("en");
      }, {
        hint: "object"
      });
    }
  });

  // src/components/Blazed/Search.tsx
  var Search_exports = {};
  __export(Search_exports, {
    default: () => Search_default,
    useSearchQuery: () => useSearchQuery
  });
  function SearchIcon() {
    return /* @__PURE__ */ jsx(import_react_native.Image, {
      style: {
        width: 16,
        height: 16
      },
      source: findAssetId("search")
    });
  }
  function useSearchQuery() {
    var [q, setQ] = (0, import_react.useState)("");
    var ref = {
      query: q,
      __set: setQ
    };
    return ref;
  }
  var import_react, import_react_native, Search_default;
  var init_Search = __esm({
    "src/components/Blazed/Search.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react = __toESM(require_react(), 1);
      import_react_native = __toESM(require_react_native(), 1);
      init_i18n();
      init_assets();
      init_TextInput();
      __name(SearchIcon, "SearchIcon");
      __name(useSearchQuery, "useSearchQuery");
      Search_default = /* @__PURE__ */ __name(({ onChangeText, placeholder, style, isRound, queryRef }) => {
        var [query, setQuery] = (0, import_react.useState)(queryRef?.query ?? "");
        var onChange = /* @__PURE__ */ __name((value) => {
          setQuery(value);
          onChangeText?.(value);
          queryRef?.__set(value);
        }, "onChange");
        return /* @__PURE__ */ jsx(import_react_native.View, {
          style,
          children: /* @__PURE__ */ jsx(TextInput_default, {
            grow: true,
            isClearable: true,
            leadingIcon: SearchIcon,
            placeholder: placeholder ?? t3.ui.components.search.placeholder(),
            onChange,
            returnKeyType: "search",
            size: "md",
            autoCapitalize: "none",
            autoCorrect: false,
            isRound,
            value: query
          })
        });
      }, "default");
    }
  });

  // src/components/Blazed/FilterAndSortBar.tsx
  var FilterAndSortBar_exports = {};
  __export(FilterAndSortBar_exports, {
    FilterAndSortBar: () => FilterAndSortBar
  });
  function FilterAndSortBar({ queryRef, sortOptions, filterOptions, onSortChange, onFilterChange, currentFilterOptions, currentSortOption, style }) {
    return /* @__PURE__ */ jsxs(import_react_native2.View, {
      style: [
        {
          flexDirection: "row",
          gap: 8
        },
        style
      ],
      children: [
        /* @__PURE__ */ jsx(Search_default, {
          style: {
            flexGrow: 1
          },
          isRound: true,
          queryRef
        }),
        sortOptions.length > 0 && /* @__PURE__ */ jsx(ContextMenu_default, {
          items: sortOptions.map((option) => ({
            label: option.label(),
            iconSource: currentSortOption === option.key ? findAssetId("CheckmarkSmallBoldIcon") : void 0,
            action: /* @__PURE__ */ __name(() => onSortChange(option.key), "action")
          })),
          children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
            ...props,
            variant: "tertiary",
            icon: findAssetId("ArrowsUpDownIcon")
          }), "children")
        }),
        filterOptions.length > 0 && /* @__PURE__ */ jsx(ContextMenu_default, {
          items: filterOptions.map((option) => ({
            label: option.label(),
            iconSource: currentFilterOptions.includes(option.key) ? findAssetId("CheckmarkSmallBoldIcon") : void 0,
            action: /* @__PURE__ */ __name(() => onFilterChange(option.key), "action")
          })),
          children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
            ...props,
            variant: "tertiary",
            icon: findAssetId("FiltersHorizontalIcon")
          }), "children")
        })
      ]
    });
  }
  var import_react_native2;
  var init_FilterAndSortBar = __esm({
    "src/components/Blazed/FilterAndSortBar.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord2();
      init_ContextMenu();
      import_react_native2 = __toESM(require_react_native(), 1);
      init_Search();
      __name(FilterAndSortBar, "FilterAndSortBar");
    }
  });

  // src/metro/common/icons.ts
  var icons_exports = {};
  __export(icons_exports, {
    ActivitiesIcon: () => ActivitiesIcon,
    ArrowSmallLeftIcon: () => ArrowSmallLeftIcon,
    CircleCheckIcon: () => CircleCheckIcon,
    CircleInformationIcon: () => CircleInformationIcon,
    CircleMinusIcon: () => CircleMinusIcon,
    CirclePlusIcon: () => CirclePlusIcon,
    DownloadIcon: () => DownloadIcon,
    FireIcon: () => FireIcon,
    PaintPaletteIcon: () => PaintPaletteIcon,
    PuzzlePieceIcon: () => PuzzlePieceIcon,
    WarningIcon: () => WarningIcon,
    WrenchIcon: () => WrenchIcon
  });
  function getIcon(name) {
    return lazyValue(() => lookupByProps(name).load()[name]);
  }
  var CirclePlusIcon, CircleMinusIcon, ArrowSmallLeftIcon, ActivitiesIcon, WrenchIcon, DownloadIcon, PaintPaletteIcon, PuzzlePieceIcon, CircleInformationIcon, CircleCheckIcon, WarningIcon, FireIcon;
  var init_icons = __esm({
    "src/metro/common/icons.ts"() {
      "use strict";
      init_wrappers();
      init_lazy();
      __name(getIcon, "getIcon");
      CirclePlusIcon = getIcon("CirclePlusIcon");
      CircleMinusIcon = getIcon("CircleMinusIcon");
      ArrowSmallLeftIcon = getIcon("ArrowSmallLeftIcon");
      ActivitiesIcon = getIcon("ActivitiesIcon");
      WrenchIcon = getIcon("WrenchIcon");
      DownloadIcon = getIcon("DownloadIcon");
      PaintPaletteIcon = getIcon("PaintPaletteIcon");
      PuzzlePieceIcon = getIcon("PuzzlePieceIcon");
      CircleInformationIcon = getIcon("CircleInformationIcon");
      CircleCheckIcon = getIcon("CircleCheckIcon");
      WarningIcon = getIcon("WarningIcon");
      FireIcon = getIcon("FireIcon");
    }
  });

  // src/components/Blazed/Callout.tsx
  var Callout_exports = {};
  __export(Callout_exports, {
    default: () => Callout
  });
  function Callout({ title, children, variant = "info" }) {
    var config = CALLOUT_VARIANT_CONFIG[variant];
    var backgroundColor = useToken(tokens.colors[config.background]);
    var borderColor = useToken(tokens.colors[config.foreground]);
    var IconComponent = config.Icon;
    return /* @__PURE__ */ jsxs(import_react_native3.View, {
      style: {
        padding: 16,
        backgroundColor,
        borderWidth: 1,
        borderColor,
        borderRadius: 12,
        rowGap: 8
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native3.View, {
          style: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(IconComponent, {
              style: {
                width: 18,
                height: 18
              }
            }),
            title && /* @__PURE__ */ jsx(Text_default, {
              variant: "heading-lg/semibold",
              children: title
            })
          ]
        }),
        /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          color: config.textColor,
          children
        })
      ]
    });
  }
  var import_react_native3, CALLOUT_VARIANT_CONFIG;
  var init_Callout = __esm({
    "src/components/Blazed/Callout.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_libraries();
      import_react_native3 = __toESM(require_react_native(), 1);
      init_Discord2();
      init_icons();
      CALLOUT_VARIANT_CONFIG = {
        info: {
          background: "INFO_BOX_BACKGROUND",
          foreground: "CREATOR_REVENUE_INFO_BOX_BORDER",
          textColor: "info-positive-text",
          Icon: CircleInformationIcon
        },
        success: {
          background: "INFO_POSITIVE_BACKGROUND",
          foreground: "INFO_POSITIVE_FOREGROUND",
          textColor: "info-positive-text",
          Icon: CircleCheckIcon
        },
        warning: {
          background: "INFO_WARNING_BACKGROUND",
          foreground: "INFO_WARNING_FOREGROUND",
          textColor: "info-positive-text",
          Icon: WarningIcon
        },
        danger: {
          background: "INFO_DANGER_BACKGROUND",
          foreground: "INFO_DANGER_FOREGROUND",
          textColor: "info-positive-text",
          Icon: WarningIcon
        }
      };
      __name(Callout, "Callout");
    }
  });

  // src/components/Blazed/Tag.tsx
  var Tag_exports = {};
  __export(Tag_exports, {
    default: () => Tag
  });
  function Tag({ text }) {
    var color = useToken(tokens.colors.BG_BRAND);
    return /* @__PURE__ */ jsx(import_react_native4.View, {
      style: {
        backgroundColor: color,
        borderRadius: 18,
        paddingVertical: 4,
        paddingHorizontal: 8
      },
      children: /* @__PURE__ */ jsx(Text_default, {
        variant: "eyebrow",
        color: "white",
        children: text
      })
    });
  }
  var import_react_native4;
  var init_Tag = __esm({
    "src/components/Blazed/Tag.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native4 = __toESM(require_react_native(), 1);
      init_Discord2();
      init_libraries();
      __name(Tag, "Tag");
    }
  });

  // src/components/utils/styles.ts
  var styles_exports = {};
  __export(styles_exports, {
    TextStyleSheet: () => TextStyleSheet,
    ThemeContext: () => ThemeContext,
    createLegacyClassComponentStyles: () => createLegacyClassComponentStyles,
    createStyles: () => createStyles
  });
  function createStyles(sheet) {
    return lazyValue(() => Styles.createStyles(sheet));
  }
  function createLegacyClassComponentStyles(sheet) {
    return lazyValue(() => Styles.createLegacyClassComponentStyles(sheet));
  }
  var Styles, ThemeContext, TextStyleSheet;
  var init_styles = __esm({
    "src/components/utils/styles.ts"() {
      "use strict";
      init_lazy();
      init_wrappers();
      Styles = lookupByProps("createStyles").asLazy((m2) => Styles = m2);
      ({ ThemeContext } = lazyDestructure(() => lookupByProps("ThemeContext").load(), {
        hint: "object"
      }));
      ({ TextStyleSheet } = lazyDestructure(() => lookupByProps("TextStyleSheet").load()));
      __name(createStyles, "createStyles");
      __name(createLegacyClassComponentStyles, "createLegacyClassComponentStyles");
    }
  });

  // src/components/Blazed/Codeblock.tsx
  var Codeblock_exports = {};
  __export(Codeblock_exports, {
    default: () => Codeblock
  });
  function Codeblock({ selectable, style, children }) {
    if (!selectable) return /* @__PURE__ */ jsx(TextBasedCodeblock, {
      style,
      children
    });
    return import_react_native5.Platform.select({
      ios: /* @__PURE__ */ jsx(InputBasedCodeblock, {
        style,
        children
      }),
      default: /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        selectable: true,
        children
      })
    });
  }
  var import_react_native5, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/components/Blazed/Codeblock.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native5 = __toESM(require_react_native(), 1);
      init_styles();
      init_libraries();
      useStyles = createStyles(() => ({
        codeblock: {
          fontFamily: constants.Fonts.CODE_NORMAL,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: tokens.colors.BACKGROUND_SECONDARY,
          color: tokens.colors.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: tokens.colors.BACKGROUND_TERTIARY,
          padding: 10
        }
      }));
      InputBasedCodeblock = /* @__PURE__ */ __name(({ style, children }) => /* @__PURE__ */ jsx(import_react_native5.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeblock,
          style && style
        ],
        value: children
      }), "InputBasedCodeblock");
      TextBasedCodeblock = /* @__PURE__ */ __name(({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native5.Text, {
        selectable,
        style: [
          useStyles().codeblock,
          style && style
        ],
        children
      }), "TextBasedCodeblock");
      __name(Codeblock, "Codeblock");
    }
  });

  // src/components/Discord/Forms/FormCheckbox.tsx
  var FormCheckbox_exports = {};
  __export(FormCheckbox_exports, {
    default: () => FormCheckbox_default
  });
  var FormCheckbox_default;
  var init_FormCheckbox = __esm({
    "src/components/Discord/Forms/FormCheckbox.tsx"() {
      "use strict";
      init_util();
      FormCheckbox_default = getComponentFromProps("FormCheckbox", {
        singular: true
      });
    }
  });

  // src/components/Blazed/InlineCheckbox.tsx
  var InlineCheckbox_exports = {};
  __export(InlineCheckbox_exports, {
    InlineCheckbox: () => InlineCheckbox
  });
  function InlineCheckbox({ label, checked, onPress }) {
    return /* @__PURE__ */ jsxs(import_react_native6.Pressable, {
      onPress: /* @__PURE__ */ __name(() => onPress(!checked), "onPress"),
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
      },
      children: [
        /* @__PURE__ */ jsx(FormCheckbox_default, {
          checked
        }),
        /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/normal",
          children: label
        })
      ]
    });
  }
  var import_react_native6;
  var init_InlineCheckbox = __esm({
    "src/components/Blazed/InlineCheckbox.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_FormCheckbox();
      import_react_native6 = __toESM(require_react_native(), 1);
      __name(InlineCheckbox, "InlineCheckbox");
    }
  });

  // src/components/Discord/experimental/TwinButtons.tsx
  var TwinButtons_exports = {};
  __export(TwinButtons_exports, {
    default: () => TwinButtons_default
  });
  var TwinButtons_default;
  var init_TwinButtons = __esm({
    "src/components/Discord/experimental/TwinButtons.tsx"() {
      "use strict";
      init_util();
      TwinButtons_default = getComponentFromProps("TwinButtons");
    }
  });

  // src/components/utils/sheets.ts
  var sheets_exports = {};
  __export(sheets_exports, {
    hideSheet: () => hideSheet,
    showSheet: () => showSheet
  });
  function showSheet(key, lazyImport, props, displayMode = "replaceAll") {
    var importPromise = "then" in lazyImport ? lazyImport : Promise.resolve({
      default: lazyImport
    });
    SheetActionCreators.openLazy(importPromise, key, props ?? {}, displayMode);
  }
  function hideSheet(key) {
    SheetActionCreators.hideActionSheet(key);
  }
  var SheetActionCreators;
  var init_sheets = __esm({
    "src/components/utils/sheets.ts"() {
      "use strict";
      init_wrappers();
      SheetActionCreators = lookupByProps("openLazy", "hideActionSheet").asLazy((m2) => SheetActionCreators = m2);
      __name(showSheet, "showSheet");
      __name(hideSheet, "hideSheet");
    }
  });

  // src/components/Blazed/ErrorCard.tsx
  var ErrorCard_exports = {};
  __export(ErrorCard_exports, {
    INDEX_BUNDLE_FILE: () => INDEX_BUNDLE_FILE,
    default: () => ErrorCard
  });
  function formatErrorContent(error, showStackTrace) {
    if (error instanceof Error) {
      return showStackTrace ? error.stack || error.message : error.message;
    }
    try {
      return JSON.stringify(error, null, 2);
    } catch (e3) {
      return String(error);
    }
  }
  function ErrorStack({ error }) {
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(Stack_default, {
        style: {
          padding: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.stack_trace()
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: formatErrorContent(error, true)
          })
        ]
      })
    });
  }
  function openStackTraceSheet(error) {
    showSheet("Stack Trace", ErrorStack, {
      error
    }, "stack");
  }
  function renderHeader(header) {
    if (/* @__PURE__ */ (0, import_react2.isValidElement)(header) || header === null) {
      return header;
    }
    return /* @__PURE__ */ jsx(Text_default, {
      variant: "heading-lg/bold",
      children: header || t3.error_boundary.uh_oh()
    });
  }
  function ErrorCard({ error, header, showStackTrace = false, onRetryRender }) {
    var isErrorInstance = error instanceof Error;
    var shouldShowStackTraceButton = isErrorInstance && !showStackTrace;
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(Stack_default, {
        children: [
          renderHeader(header),
          /* @__PURE__ */ jsx(import_react_native7.ScrollView, {
            contentContainerStyle: {
              maxHeight: 180
            },
            horizontal: true,
            children: /* @__PURE__ */ jsx(Codeblock, {
              selectable: true,
              children: formatErrorContent(error, showStackTrace)
            })
          }),
          /* @__PURE__ */ jsxs(TwinButtons_default, {
            children: [
              onRetryRender && /* @__PURE__ */ jsx(Button_default, {
                variant: "destructive",
                text: t3.error_boundary.retry_render(),
                onPress: onRetryRender
              }),
              shouldShowStackTraceButton && /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.stack_trace(),
                onPress: /* @__PURE__ */ __name(() => openStackTraceSheet(error), "onPress")
              })
            ]
          })
        ]
      })
    });
  }
  var import_react2, import_react_native7, INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/components/Blazed/ErrorCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      import_react2 = __toESM(require_react(), 1);
      init_Button();
      init_Discord2();
      init_TwinButtons();
      init_Codeblock();
      init_sheets();
      import_react_native7 = __toESM(require_react_native(), 1);
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
      __name(formatErrorContent, "formatErrorContent");
      __name(ErrorStack, "ErrorStack");
      __name(openStackTraceSheet, "openStackTraceSheet");
      __name(renderHeader, "renderHeader");
      __name(ErrorCard, "ErrorCard");
    }
  });

  // src/components/Libraries/react-native-safe-area-context.tsx
  var react_native_safe_area_context_exports = {};
  __export(react_native_safe_area_context_exports, {
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    useSafeAreaInsets: () => useSafeAreaInsets
  });
  var SafeAreaView, SafeAreaProvider, useSafeAreaInsets;
  var init_react_native_safe_area_context = __esm({
    "src/components/Libraries/react-native-safe-area-context.tsx"() {
      "use strict";
      init_wrappers();
      init_lazy();
      ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = lazyDestructure(() => lookupByProps("useSafeAreaInsets", "SafeAreaView", "SafeAreaProvider").asLazy((m2) => ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = m2))));
    }
  });

  // src/components/Blazed/Settings/PageWrapper.tsx
  var PageWrapper_exports = {};
  __export(PageWrapper_exports, {
    default: () => PageWrapper
  });
  function PageWrapper(props) {
    var { height } = useSafeAreaInsets();
    var containerStyle = [
      {
        paddingTop: 8,
        paddingHorizontal: 12
      },
      props.containerStyle
    ];
    var node = props.children;
    if (props.scrollable) {
      node = /* @__PURE__ */ jsx(import_react_native8.ScrollView, {
        contentContainerStyle: containerStyle,
        children: node
      });
    } else {
      node = /* @__PURE__ */ jsx(import_react_native8.View, {
        style: [
          {
            flex: 1,
            maxHeight: height
          },
          containerStyle
        ],
        children: node
      });
    }
    return /* @__PURE__ */ jsx(SafeAreaView, {
      style: {
        flex: 1
      },
      edges: props.edges ?? [
        "right",
        "bottom",
        "left"
      ],
      children: node
    });
  }
  var import_react_native8;
  var init_PageWrapper = __esm({
    "src/components/Blazed/Settings/PageWrapper.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_react_native_safe_area_context();
      import_react_native8 = __toESM(require_react_native(), 1);
      __name(PageWrapper, "PageWrapper");
    }
  });

  // src/components/Blazed/Settings/pages/InfoSection.tsx
  var InfoSection_exports = {};
  __export(InfoSection_exports, {
    InfoSection: () => InfoSection
  });
  function InfoSection({ label, children }) {
    return /* @__PURE__ */ jsxs(import_react_native9.View, {
      children: [
        /* @__PURE__ */ jsx(Text_default, {
          variant: "heading-sm/semibold",
          color: "text-secondary",
          style: {
            marginBottom: 8
          },
          children: label
        }),
        typeof children === "string" ? /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          children
        }) : children
      ]
    });
  }
  var import_react_native9;
  var init_InfoSection = __esm({
    "src/components/Blazed/Settings/pages/InfoSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native9 = __toESM(require_react_native(), 1);
      init_Discord2();
      __name(InfoSection, "InfoSection");
    }
  });

  // globals:@shopify/flash-list
  var require_flash_list = __commonJS({
    "globals:@shopify/flash-list"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["@shopify/flash-list"];
    }
  });

  // src/components/Blazed/Settings/pages/ResponsiveMasonryFlashList.tsx
  var ResponsiveMasonryFlashList_exports = {};
  __export(ResponsiveMasonryFlashList_exports, {
    ResponsiveMasonryFlashList: () => ResponsiveMasonryFlashList
  });
  function ResponsiveMasonryFlashList(props) {
    var minWidth = props.itemMinWidth;
    var dimensions = (0, import_react_native10.useWindowDimensions)();
    var listProps = (0, import_react3.useMemo)(() => omit(props, [
      "data",
      "renderItem"
    ]), [
      props
    ]);
    var numColumns = (0, import_react3.useMemo)(() => Math.min(props.data.length, Math.floor((dimensions.width - 24) / minWidth)), [
      dimensions.width,
      props.data,
      minWidth
    ]);
    var renderItem = (0, import_react3.useCallback)((info) => {
      var { columnIndex } = info;
      var Item = props.renderItem;
      return /* @__PURE__ */ jsx(import_react_native10.View, {
        style: {
          minWidth,
          paddingRight: columnIndex === numColumns - 1 ? 0 : 4,
          paddingLeft: columnIndex === 0 ? 0 : 4
        },
        children: /* @__PURE__ */ jsx(Item, {
          ...info
        })
      });
    }, [
      numColumns,
      minWidth,
      props.renderItem
    ]);
    return /* @__PURE__ */ jsx(import_flash_list.MasonryFlashList, {
      data: props.data,
      numColumns,
      renderItem,
      ...listProps
    });
  }
  var import_react3, import_react_native10, import_flash_list;
  var init_ResponsiveMasonryFlashList = __esm({
    "src/components/Blazed/Settings/pages/ResponsiveMasonryFlashList.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react3 = __toESM(require_react(), 1);
      import_react_native10 = __toESM(require_react_native(), 1);
      init_dist();
      import_flash_list = __toESM(require_flash_list(), 1);
      __name(ResponsiveMasonryFlashList, "ResponsiveMasonryFlashList");
    }
  });

  // node_modules/zustand/esm/vanilla.mjs
  var createStoreImpl, createStore;
  var init_vanilla = __esm({
    "node_modules/zustand/esm/vanilla.mjs"() {
      createStoreImpl = /* @__PURE__ */ __name((createState) => {
        var state2;
        var listeners = /* @__PURE__ */ new Set();
        var setState = /* @__PURE__ */ __name((partial, replace) => {
          var nextState = typeof partial === "function" ? partial(state2) : partial;
          if (!Object.is(nextState, state2)) {
            var previousState = state2;
            state2 = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state2, nextState);
            listeners.forEach((listener) => listener(state2, previousState));
          }
        }, "setState");
        var getState = /* @__PURE__ */ __name(() => state2, "getState");
        var getInitialState = /* @__PURE__ */ __name(() => initialState, "getInitialState");
        var subscribe = /* @__PURE__ */ __name((listener) => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        }, "subscribe");
        var api = {
          setState,
          getState,
          getInitialState,
          subscribe
        };
        var initialState = state2 = createState(setState, getState, api);
        return api;
      }, "createStoreImpl");
      createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
    }
  });

  // node_modules/zustand/esm/react.mjs
  function useStore(api, selector = identity) {
    var slice = import_react4.default.useSyncExternalStore(api.subscribe, () => selector(api.getState()), () => selector(api.getInitialState()));
    import_react4.default.useDebugValue(slice);
    return slice;
  }
  var import_react4, identity, createImpl, create;
  var init_react = __esm({
    "node_modules/zustand/esm/react.mjs"() {
      import_react4 = __toESM(require_react(), 1);
      init_vanilla();
      identity = /* @__PURE__ */ __name((arg) => arg, "identity");
      __name(useStore, "useStore");
      createImpl = /* @__PURE__ */ __name((createState) => {
        var api = createStore(createState);
        var useBoundStore = /* @__PURE__ */ __name((selector) => useStore(api, selector), "useBoundStore");
        Object.assign(useBoundStore, api);
        return useBoundStore;
      }, "createImpl");
      create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");
    }
  });

  // node_modules/zustand/esm/index.mjs
  var init_esm = __esm({
    "node_modules/zustand/esm/index.mjs"() {
      init_vanilla();
      init_react();
    }
  });

  // src/stores/useToastStore.ts
  var useToastStore_exports = {};
  __export(useToastStore_exports, {
    useToastStore: () => useToastStore
  });
  var useToastStore;
  var init_useToastStore = __esm({
    "src/stores/useToastStore.ts"() {
      "use strict";
      init_esm();
      useToastStore = create((set2, get) => {
        var timeouts = /* @__PURE__ */ new Map();
        var handleTimeout = /* @__PURE__ */ __name((id, onTimeout) => {
          set2((state2) => {
            onTimeout?.();
            timeouts.delete(id);
            return {
              toasts: state2.toasts.filter((t4) => t4.id !== id)
            };
          });
        }, "handleTimeout");
        var clearToastTimeout = /* @__PURE__ */ __name((id) => {
          if (timeouts.has(id)) {
            clearTimeout(timeouts.get(id));
            timeouts.delete(id);
          }
        }, "clearToastTimeout");
        var setToastTimeout = /* @__PURE__ */ __name((toast) => {
          if (toast.duration && toast.duration > 0) {
            var timeout = setTimeout(() => handleTimeout(toast.id, toast.onTimeout), toast.duration);
            timeouts.set(toast.id, timeout);
          }
        }, "setToastTimeout");
        return {
          toasts: [],
          getToast: /* @__PURE__ */ __name((id) => get().toasts.find((toast) => toast.id === id), "getToast"),
          hideToast: /* @__PURE__ */ __name((id) => set2((state2) => {
            clearToastTimeout(id);
            return {
              toasts: state2.toasts.filter((toast) => toast.id !== id)
            };
          }), "hideToast"),
          updateToast: /* @__PURE__ */ __name((config) => {
            if (config.id && get().getToast(config.id) === void 0) {
              set2((state2) => {
                setToastTimeout(config);
                return {
                  toasts: [
                    ...state2.toasts,
                    config
                  ]
                };
              });
            } else {
              set2((state2) => ({
                toasts: state2.toasts.map((toast) => {
                  if (toast.id === config.id) {
                    var updatedToast = {
                      ...toast,
                      ...config
                    };
                    if ("duration" in config && config.duration > 0) {
                      clearToastTimeout(config.id);
                      setToastTimeout(updatedToast);
                    }
                    return updatedToast;
                  }
                  return toast;
                })
              }));
            }
          }, "updateToast")
        };
      });
    }
  });

  // src/api/toasts.ts
  var toasts_exports = {};
  __export(toasts_exports, {
    showToast: () => showToast
  });
  function showToast(configOrText) {
    var id;
    var toastProps;
    if (typeof configOrText === "string") {
      id = configOrText;
      toastProps = {
        id: configOrText,
        text: configOrText
      };
    } else {
      id = configOrText.id;
      toastProps = configOrText;
    }
    var toast = {
      use: /* @__PURE__ */ __name((selector) => useToastStore((state2) => selector(state2.getToast(id) ?? toast)), "use"),
      ...toastProps
    };
    var showToast2 = /* @__PURE__ */ __name(() => useToastStore.getState().updateToast({
      duration: 5e3,
      dismissible: true,
      ...useToastStore.getState().getToast(id) ?? toast
    }), "showToast");
    showToast2();
    var controller = {
      hide: /* @__PURE__ */ __name(() => {
        useToastStore.getState().hideToast(id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((newConfig) => {
        useToastStore.getState().updateToast({
          ...toast,
          ...newConfig,
          id
        });
        return controller;
      }, "update")
    };
    return controller;
  }
  var init_toasts = __esm({
    "src/api/toasts.ts"() {
      "use strict";
      init_useToastStore();
      __name(showToast, "showToast");
    }
  });

  // src/utils/clipboard.ts
  var clipboard_exports = {};
  __export(clipboard_exports, {
    copyToClipboard: () => copyToClipboard
  });
  function copyToClipboard(_0) {
    return _async_to_generator(function* (text, { toast = true } = {}) {
      try {
        yield clipboard.setString(text);
        if (toast) showToast({
          id: "blz-copied",
          text: "Copied to clipboard"
        });
      } catch (e3) {
        if (toast) showToast({
          id: "blz-failed-to-copy",
          text: "Failed to copy to clipboard"
        });
      }
    }).apply(this, arguments);
  }
  var clipboard;
  var init_clipboard = __esm({
    "src/utils/clipboard.ts"() {
      "use strict";
      init_async_to_generator();
      init_toasts();
      init_wrappers();
      clipboard = lookupByProps("setString", "getString", "hasString").asLazy((m2) => clipboard = m2);
      __name(copyToClipboard, "copyToClipboard");
    }
  });

  // src/components/Blazed/Settings/pages/Logs/constants.tsx
  var constants_exports2 = {};
  __export(constants_exports2, {
    VARIANT_CONFIG: () => VARIANT_CONFIG
  });
  var VARIANT_CONFIG;
  var init_constants2 = __esm({
    "src/components/Blazed/Settings/pages/Logs/constants.tsx"() {
      "use strict";
      VARIANT_CONFIG = {
        info: {
          background: "CARD_PRIMARY_BG",
          textColor: "text-normal",
          timestampColor: "text-muted"
        },
        warn: {
          background: "INFO_WARNING_BACKGROUND",
          textColor: "text-normal",
          timestampColor: "text-muted"
        },
        error: {
          background: "STATUS_DANGER",
          textColor: "white",
          timestampColor: "white"
        },
        debug: {
          background: "CARD_PRIMARY_BG",
          textColor: "text-normal",
          timestampColor: "text-muted"
        }
      };
    }
  });

  // src/components/Blazed/Settings/pages/Logs/LogDetailsSheet.tsx
  var LogDetailsSheet_exports = {};
  __export(LogDetailsSheet_exports, {
    LogDetailsSheet: () => LogDetailsSheet
  });
  function LogDetailsSheet({ log }) {
    var variantStyles = VARIANT_CONFIG[log.level];
    var backgroundColor = useToken(tokens.colors[variantStyles.background]);
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(import_react_native11.View, {
        style: {
          padding: 16,
          gap: 16
        },
        children: [
          /* @__PURE__ */ jsxs(Stack_default, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            style: {
              padding: 12,
              paddingHorizontal: 16,
              backgroundColor,
              borderRadius: 16
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native11.View, {
                style: {
                  gap: 4
                },
                children: [
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-lg/semibold",
                    color: variantStyles.textColor,
                    children: log.level.toUpperCase()
                  }),
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-xs/semibold",
                    color: variantStyles.textColor,
                    children: new Date(log.timestamp).toLocaleString()
                  })
                ]
              }),
              /* @__PURE__ */ jsx(Button_default, {
                size: "sm",
                variant: "secondary",
                onPress: /* @__PURE__ */ __name(() => {
                  var toCopy = `${log.level.toUpperCase()} | ${new Date(log.timestamp).toLocaleString()}
${log.message}`;
                  if (log.breadcrumbs?.length) {
                    toCopy += `
${log.breadcrumbs.join(" > ")}`;
                  }
                  if (log.errorStack) {
                    toCopy += `
${log.errorStack}`;
                  }
                  copyToClipboard(toCopy);
                }, "onPress"),
                text: t3.actions.copy()
              })
            ]
          }),
          /* @__PURE__ */ jsx(InfoSection, {
            label: "Message",
            children: /* @__PURE__ */ jsx(Codeblock, {
              children: log.message
            })
          }),
          log.errorStack && /* @__PURE__ */ jsx(InfoSection, {
            label: "Error",
            children: /* @__PURE__ */ jsx(Codeblock, {
              selectable: true,
              children: log.errorStack
            })
          })
        ]
      })
    });
  }
  var import_react_native11;
  var init_LogDetailsSheet = __esm({
    "src/components/Blazed/Settings/pages/Logs/LogDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_Discord2();
      init_libraries();
      import_react_native11 = __toESM(require_react_native(), 1);
      init_InfoSection();
      init_clipboard();
      init_i18n();
      init_constants2();
      __name(LogDetailsSheet, "LogDetailsSheet");
    }
  });

  // src/components/Discord/TableRow/TableRowDivider.tsx
  var TableRowDivider_exports = {};
  __export(TableRowDivider_exports, {
    default: () => TableRowDivider_default
  });
  var TableRowDivider_default;
  var init_TableRowDivider = __esm({
    "src/components/Discord/TableRow/TableRowDivider.tsx"() {
      "use strict";
      init_util();
      TableRowDivider_default = getComponentFromProps("TableRowDivider");
    }
  });

  // src/components/Discord/experimental/PressableScale.tsx
  var PressableScale_exports = {};
  __export(PressableScale_exports, {
    default: () => PressableScale_default
  });
  var PressableScale_default;
  var init_PressableScale = __esm({
    "src/components/Discord/experimental/PressableScale.tsx"() {
      "use strict";
      init_util();
      PressableScale_default = getComponentFromProps("PressableScale");
    }
  });

  // src/components/Blazed/Settings/pages/Logs/LogRow.tsx
  var LogRow_exports = {};
  __export(LogRow_exports, {
    LogRow: () => LogRow
  });
  function LogRow({ item: log, start, end }) {
    var variantStyles = VARIANT_CONFIG[log.level];
    var backgroundColor = useToken(tokens.colors[variantStyles.background]);
    var handlePress = /* @__PURE__ */ __name(() => {
      showSheet("Log Details", LogDetailsSheet, {
        log
      });
    }, "handlePress");
    return /* @__PURE__ */ jsx(import_react_native12.View, {
      style: {
        gap: 2,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor,
        ...start ? {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        } : end ? {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12
        } : {}
      },
      children: /* @__PURE__ */ jsxs(PressableScale_default, {
        onPress: handlePress,
        children: [
          /* @__PURE__ */ jsxs(Text_default, {
            variant: "text-xxs/semibold",
            color: variantStyles.timestampColor,
            children: [
              log.level.toUpperCase(),
              " | ",
              new Date(log.timestamp).toLocaleString()
            ]
          }),
          log.breadcrumbs?.length !== 0 && /* @__PURE__ */ jsx(Text_default, {
            style: {
              paddingBottom: 4
            },
            variant: "text-xs/semibold",
            color: variantStyles.timestampColor,
            children: log.breadcrumbs.join(" > ")
          }),
          /* @__PURE__ */ jsx(Text_default, {
            numberOfLines: 6,
            variant: "text-sm/semibold",
            color: variantStyles.textColor,
            children: log.message
          })
        ]
      })
    });
  }
  var import_react_native12;
  var init_LogRow = __esm({
    "src/components/Blazed/Settings/pages/Logs/LogRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PressableScale();
      init_sheets();
      init_libraries();
      import_react_native12 = __toESM(require_react_native(), 1);
      init_LogDetailsSheet();
      init_constants2();
      __name(LogRow, "LogRow");
    }
  });

  // src/components/Blazed/Settings/pages/Logs/index.tsx
  var Logs_exports = {};
  __export(Logs_exports, {
    default: () => LogsPage
  });
  function LogsPage() {
    var [showDebug, setShowDebug] = (0, import_react5.useState)(false);
    var filteredLogs = (0, import_react5.useMemo)(() => {
      return wtlogger.logs.filter((log) => log.level !== "debug" || showDebug);
    }, [
      showDebug
    ]);
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsx(import_flash_list2.FlashList, {
        data: filteredLogs,
        ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native13.ScrollView, {
          contentContainerStyle: {
            gap: 12,
            paddingVertical: 12
          },
          horizontal: true,
          children: /* @__PURE__ */ jsx(InlineCheckbox, {
            label: "Show debug",
            checked: showDebug,
            onPress: /* @__PURE__ */ __name(() => setShowDebug((v) => !v), "onPress")
          })
        }),
        ItemSeparatorComponent: TableRowDivider_default,
        renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(LogRow, {
          item,
          start: index === 0,
          end: index === filteredLogs.length - 1
        }), "renderItem"),
        estimatedItemSize: 80
      })
    });
  }
  var import_flash_list2, import_react5, import_react_native13;
  var init_Logs = __esm({
    "src/components/Blazed/Settings/pages/Logs/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_TableRowDivider();
      init_PageWrapper();
      import_flash_list2 = __toESM(require_flash_list(), 1);
      import_react5 = __toESM(require_react(), 1);
      import_react_native13 = __toESM(require_react_native(), 1);
      init_InlineCheckbox();
      init_LogRow();
      init_logger();
      __name(LogsPage, "LogsPage");
    }
  });

  // src/components/Blazed/Settings/pages/Logs/__mockings__.tsx
  var mockings_exports = {};
  __export(mockings_exports, {
    LOG_HISTORY_MOCK: () => LOG_HISTORY_MOCK
  });
  var SAMPLE_MESSAGES, generateMockLogs, LOG_HISTORY_MOCK;
  var init_mockings = __esm({
    "src/components/Blazed/Settings/pages/Logs/__mockings__.tsx"() {
      "use strict";
      SAMPLE_MESSAGES = {
        info: [
          "Connection established",
          "Database query completed successfully with 1024 records returned in 350ms",
          "Cache invalidated for user session tokens due to security policy update",
          `As a twenty year old single male I think it's very hard to find a girl who's actually interested in free software. I've had girls jokingly ask to "Netflix and chill" but when I tell her that I don't use Netflix since Netflix requires proprietary software to stream content, they stop talking to me. And worse if they do stay they think I'm weird since I blocked google IP's in my host file and we can't even watch youtube. I can't ever seem to get girls to come over to my place and I can't text them either. Once I get their numbers since I've added customs roms to my phone and refuse to use sms since it's a security concern I require all of my friends to download a free and open source messaging app and I share with them my public gpg key so that we can verify that our conversations are secure. None of my friends are willing to do this. And I can't use sites like tinder since it's not only proprietary software but a major privacy vulnerability. How come it is so hard to find a girl concerned about software freedom. I feel like I'm going to be a virgin forever.`
        ],
        warn: [
          "Resource usage high: CPU utilization has exceeded 85% threshold for over 5 minutes",
          "Disk space low",
          "Network latency detected between application server and database cluster (avg 230ms)",
          "Chiya-san! Coco-nee becomes a drug dealer in the future and might disappear! What should I do!?"
        ],
        error: [
          "Server unreachable: Connection attempts to auth-service failed after 5 retries",
          "Authentication failed",
          "Background task timed out after 120 seconds while processing large media file conversion",
          "Resource limit exceeded: Maximum allowed memory allocation (2GB) reached in worker process"
        ],
        debug: [
          "Component re-rendered",
          "State updated",
          "API response received",
          "User session token refreshed"
        ]
      };
      generateMockLogs = /* @__PURE__ */ __name((count) => Array.from({
        length: count
      }, () => {
        var levelRandom = Math.random();
        var level = levelRandom > 0.9 ? "error" : levelRandom > 0.75 ? "warn" : levelRandom > 0.6 ? "debug" : "info";
        var messageIndex = Math.floor(Math.random() * 4);
        var hasError = level === "error" || level === "warn" && Math.random() > 0.8;
        return {
          level,
          message: SAMPLE_MESSAGES[level][messageIndex],
          timestamp: Date.now() - Math.floor(Math.random() * 864e5),
          errorStack: hasError ? new Error(`Error with ${SAMPLE_MESSAGES[level][messageIndex].toLowerCase()}`).stack : void 0,
          breadcrumbs: hasError ? [
            "Error",
            "ErrorBoundary",
            "AppRoot"
          ] : Math.random() > 0.5 ? [
            "Info",
            "AppRoot"
          ] : []
        };
      }), "generateMockLogs");
      LOG_HISTORY_MOCK = generateMockLogs(100);
    }
  });

  // asset-loader:src/assets/flamelogo.png
  var require_flamelogo = __commonJS({
    "asset-loader:src/assets/flamelogo.png"(exports, module3) {
      init_libraries();
      module3.exports = AssetsRegistry.registerAsset({ "__blazed": true, "__packager_asset": true, "width": 941, "height": 934, "httpServerLocation": "src/assets/flamelogo.png", "dataurl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA60AAAOmCAYAAAAAYnMcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAACAASURBVHic7N13nGR5Xe//1/fUqaquznm6e/JsYFlgF4RlR1hEMqgEA9cECEYEBBETSLiEq+JPUdGrP+UiXn9XwYBXMWFAJc9KWILIsjOzOz0z3bPTM51zpfP749u1TDjfU9VdVafS+/l49GN36ltd59vdFc7nfD/fzwdERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERNqQafQERESkJXnAIPB44JuBG4FuoACcBz4NfAy4AGw3ZooiIiIiIiLSCQzQBzwVeD9wEchhA9Rima8sNoj9PeBOoDfmuYuIiIiIiEibSgK3A+8B5vl6kBrs4auIDXS/CLwAGEDZPiIiIiIiIrIHaeAO4P8CW+w9UI0KXj+KXXlNx/QziYiIiIiISIszwH7gvwOr1DZYDQteLwMvBvpj+NlERERERESkhXnYVOCPYtOA6xWsXhu4bgKvxaYLi4iIiIiIiFwnBTwdOEd9V1ddges28OPY6sMiIiIiV1ERDBGRzpYCvgV4LzBEhZ8LnueRTqcZHBxkeHiYTCaD53kUi0Wy2SyLi4vMz8+ztbVFsVgEG6C6HjsANoDvBv4BG8iKiIiIAApaRUQ6mYftsfoX2J6rkZ8JxhgGBgaYnJyku7ubRCJR9gC5XI7FxUVmZmbI5XJRdw2AU8DTsCu+IiIiIgCUP+MQEZF2ZIBbgT8D9hGxCmqMMWNjY9xwww2Mj4+TTqfxPK+igyQSCXp6ehgeHiafz7O5uRk1n2FgDfgEWm0VERGRHVppFRHpTKPA/wc8i4iAtauriyNHjpje3t6KA1WXQqHAxYsXmZmZIQgC190WgMcAZ6s6mIiIiLQNrbSKiHQeD/gB4Cd2/j9MMDg4yLFjx0xPTw/GVH+N0/M8uru7CYKAtbU11926gHng41UfUERE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jYyMMDY2RiAQ2JfbV9u2WVpaYn5+fqfGSyXgo8AjwGar1iYiIjV7PfBVoK/SJ91uN1NTUxw4cKBpv6HjOGxubhKLxUgkEs0KVMHsN88CfwS8iOpURTqaglaR/eEFvhd4P/AzmDrYum9fA4EA4+PjhEIhWpm6FY/HmZ2d3ekBwwGeBu4DVluyMBERacTDwK9T5bb1wIEDHD16tKE0Ydu22dzcJBqNkkwmGx1PA1eD0Tzwb5hA9evAGgpURbqCglaR/WVhbl9vx9QT/RD1377icrkYHh5mfHycQCCwp82bUqkU586dw7btnRovTWPG28zs2UJERKTZ/gfTk6Hie3skErFq7SZcLBZJpVJEo1HS6TS2bTe6xnIwWsSk/D4B/D0QR2UoIl1HQatI+/AB34NozJTVAAADqklEQVQZmfNzwDB13r6CGZ1z8OBBwuEwfr+/qenDm5ubnD179kadghPA3cC30QOEiEgnCQIxzL70XVwuF7fccguhUKjqC5Q7/q6urhKPx8lms42m/cLVQNUGzgJ/DnwJdf4V6XoKWkXaUwi4jau1rx7q/Hm1LOtKADs6OtpwAJvP55mZmXE2NjbYYU054F5ManBD095FRGRf/ArwOFUOJn0+nzU1NUUgELjyH0ulEpubm6ysrLC2tkah0JS3/+03qjPAnwJPAfPoQFSkZyhoFWlvXuAWTNfhe4ARGrh9LQeww8PDjI6OEggEakrvKhQKzM3NOfF4nB3WYAO/jenSqMZLIiKd6xnM3PGKgevQ0BCHDh2y0uk00WiUTCZDqdSUOLIcqBYwqb+fxHT/VeqvSI9S0CrSGcq1r7dhGmS8BhPQNvQz7Ha76e/vZ3R0lKGhIbxeb9Vb2FKpxOLi4o06BTvAn2Fm/cUbWZuIiLSFy8DNLfh9tjdT+g6mmdKzmCZ+ClRFepyCVpHO48U8QNyDqX+9iQZuX7dzu934/X6Gh4cJhUL4/X5cLheO45BIJDh//vyNOgV/HTOPdrHRtYiISFsYAc5jylaarbyhZIDnMc2UnkXjaURERLpKee7rU8A65jS6xNWB6g19uFwuJxAIOJFIxPH7/Tu9dgkzZmB4z79jERFptb8G0jRnbylhykjWgC9g9rAgukgRERHpehYwBLwD+BaQpckB7A4fJWB2779FERHZR/+I2Vvq2SNKmEZKF4E/AE5QpTOxiIiI9AY3MIYZm/Mipj5oLwPYtdZ8WyIiss++gWmOtNtANQO8gOkmH6Z6PwQRERHpYW7gEHA/JoDN0dwANgN8pGXfjYiI7LfnMIehma2P7Qej68BLwMeAWwE/SvsVkSbQG4lI77CAQeB1wAPAG7i2jqjW94MCJhX5zmYtUEREOsIjQAB4GVjAdIu/CPzvPq5JREREupAXiADvBb6CGStQZHc3sQXgm8DJFq9ZREREREREelT5JvYO4Elgnsr1sHnMaIIf3I9FioiIiIiIiIBpmHEQuAv4LHAamAE+tZ+LEhERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER4f8BoEPmju4K37MAAAAASUVORK5CYII=", "scales": [1], "name": "flamelogo.png", "type": "png" });
    }
  });

  // src/components/Blazed/Settings/pages/Developer/ToastPlayground.tsx
  var ToastPlayground_exports = {};
  __export(ToastPlayground_exports, {
    default: () => ToastPlayground
  });
  function DemoToastComponent(props) {
    var [count, setCount] = (0, import_react6.useState)(0);
    (0, import_react6.useEffect)(() => {
      var interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1e3);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return /* @__PURE__ */ jsxs(import_react_native14.View, {
      style: {
        gap: 8,
        paddingHorizontal: 12
      },
      children: [
        /* @__PURE__ */ jsxs(Text_default, {
          variant: "text-md/semibold",
          children: [
            count,
            " second(s) has passed"
          ]
        }),
        count >= 3 && /* @__PURE__ */ jsx(Text_default, {
          variant: "display-md",
          children: "Gaboo!"
        })
      ]
    });
  }
  function ToastPlayground() {
    var [toastConfig, setToastConfig] = (0, import_react6.useState)({
      id: "toast-demo",
      text: "This is a toast message",
      dismissible: true,
      duration: 5e3,
      showIcon: false,
      updateAfterDelay: false
    });
    var handleShowToast = /* @__PURE__ */ __name(() => {
      var options = {
        id: JSON.stringify(toastConfig),
        text: toastConfig.text,
        dismissible: toastConfig.dismissible,
        duration: toastConfig.duration,
        onDismiss() {
          logger2.info("Toast dismissed");
        },
        onPress() {
          logger2.info("Toast pressed");
        },
        onTimeout() {
          logger2.info("Toast timed out");
        }
      };
      if (toastConfig.showIcon) {
        options.icon = require_flamelogo();
      }
      if (toastConfig.updateAfterDelay) {
        setTimeout(() => {
          toast.update({
            text: `${toastConfig.text} (Updated)`
          });
        }, 2e3);
      }
      var toast = showToast(options);
    }, "handleShowToast");
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsxs(import_react_native14.ScrollView, {
        contentContainerStyle: {
          gap: 12
        },
        style: {
          flex: 1
        },
        children: [
          /* @__PURE__ */ jsxs(TableRowGroup_default, {
            title: "Configure",
            children: [
              /* @__PURE__ */ jsx(TableRow_default, {
                label: /* @__PURE__ */ jsx(TextInput_default, {
                  label: "Toast Text",
                  value: toastConfig.text,
                  onChange: /* @__PURE__ */ __name((text) => setToastConfig((prev) => ({
                    ...prev,
                    text
                  })), "onChange"),
                  style: {
                    width: 150
                  }
                })
              }),
              /* @__PURE__ */ jsx(TableRow_default, {
                label: /* @__PURE__ */ jsx(TextInput_default, {
                  label: "Duration (ms)",
                  value: String(toastConfig.duration),
                  onChange: /* @__PURE__ */ __name((text) => setToastConfig((prev) => ({
                    ...prev,
                    duration: Number(text) || 5e3
                  })), "onChange"),
                  keyboardType: "numeric",
                  style: {
                    width: 150
                  }
                })
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Show Icon",
                value: toastConfig.showIcon,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  showIcon: value
                })), "onValueChange")
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Dismissible",
                value: toastConfig.dismissible,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  dismissible: value
                })), "onValueChange")
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Update After Delay",
                value: toastConfig.updateAfterDelay,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  updateAfterDelay: value
                })), "onValueChange")
              })
            ]
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Show Configured Toast",
            onPress: handleShowToast
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Show Custom Component Toast",
            onPress: /* @__PURE__ */ __name(() => {
              var toast = showToast({
                id: "custom-toast",
                render: DemoToastComponent,
                onPress: /* @__PURE__ */ __name(() => toast.hide(), "onPress"),
                duration: toastConfig.duration,
                dismissible: toastConfig.dismissible
              });
            }, "onPress")
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Loading Toast",
            onPress: /* @__PURE__ */ __name(() => {
              var toast = showToast({
                id: "loading-toast",
                text: "Loading...",
                icon: /* @__PURE__ */ jsx(import_react_native14.ActivityIndicator, {}),
                dismissible: false
              });
              setTimeout(() => {
                toast.update({
                  text: "Loading complete!",
                  icon: void 0,
                  dismissible: true
                });
              }, 2e3);
            }, "onPress")
          })
        ]
      })
    });
  }
  var import_react6, import_react_native14, logger2;
  var init_ToastPlayground = __esm({
    "src/components/Blazed/Settings/pages/Developer/ToastPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_logger();
      init_toasts();
      init_Discord2();
      init_PageWrapper();
      import_react6 = __toESM(require_react(), 1);
      import_react_native14 = __toESM(require_react_native(), 1);
      logger2 = wtlogger.createChild("ToastPlayground");
      __name(DemoToastComponent, "DemoToastComponent");
      __name(ToastPlayground, "ToastPlayground");
    }
  });

  // src/components/Blazed/Settings/pages/Developer/AssetBrowser.tsx
  var AssetBrowser_exports = {};
  __export(AssetBrowser_exports, {
    default: () => AssetBrowser
  });
  function AssetBrowser() {
    var ref = useSearchQuery();
    var assets = (0, import_react7.useMemo)(() => sortAssets(getAssets()).filter((a) => a.name.toLowerCase().includes(ref.query.toLowerCase()) || a.id.toString() === ref.query), [
      ref.query
    ]);
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12,
        paddingHorizontal: 12,
        paddingTop: 8
      },
      children: [
        /* @__PURE__ */ jsx(Search_default, {
          queryRef: ref
        }),
        /* @__PURE__ */ jsx(import_flash_list3.FlashList, {
          data: assets,
          estimatedItemSize: 73,
          keyExtractor: /* @__PURE__ */ __name((item) => String(item.id), "keyExtractor"),
          renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(AssetDisplay, {
            asset: item,
            start: index === 0,
            end: index === assets.length - 1
          }), "renderItem")
        })
      ]
    });
  }
  var import_react7, import_react_native15, import_flash_list3, IMAGE_TYPES, DEFAULT_IMAGE_SIZE, isAssetTypeAnImage, BasicAssetDisplay, ImageAssetDisplay, AssetDisplay, ImageAssetPreviewer, sortAssets;
  var init_AssetBrowser = __esm({
    "src/components/Blazed/Settings/pages/Developer/AssetBrowser.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react7 = __toESM(require_react(), 1);
      init_assets();
      import_react_native15 = __toESM(require_react_native(), 1);
      init_sheets();
      init_Search();
      init_PageWrapper();
      import_flash_list3 = __toESM(require_flash_list(), 1);
      init_Discord2();
      init_BottomSheet();
      IMAGE_TYPES = [
        "png",
        "jpg",
        "jpeg",
        "bmp",
        "gif",
        "webp",
        "psd",
        "svg",
        "tiff",
        "ktx"
      ];
      DEFAULT_IMAGE_SIZE = 48;
      isAssetTypeAnImage = /* @__PURE__ */ __name((type) => IMAGE_TYPES.includes(type), "isAssetTypeAnImage");
      BasicAssetDisplay = /* @__PURE__ */ __name(({ asset, start, end }) => /* @__PURE__ */ jsx(TableRow_default, {
        label: asset.name,
        subLabel: `${asset.id} | ${asset.type}`,
        start,
        end
      }), "BasicAssetDisplay");
      ImageAssetDisplay = /* @__PURE__ */ __name(({ asset, start, end }) => /* @__PURE__ */ jsx(TableRow_default, {
        label: asset.name,
        subLabel: `${asset.id} | ${asset.type}`,
        start,
        end,
        onPress: /* @__PURE__ */ __name(() => showSheet("ImageAssetPreviewer", ImageAssetPreviewer, {
          asset
        }), "onPress"),
        trailing: /* @__PURE__ */ jsx(import_react_native15.Image, {
          source: asset.id,
          style: {
            width: Math.min(asset.width ?? DEFAULT_IMAGE_SIZE, DEFAULT_IMAGE_SIZE),
            height: Math.min(asset.height ?? DEFAULT_IMAGE_SIZE, DEFAULT_IMAGE_SIZE)
          },
          resizeMode: "contain"
        })
      }), "ImageAssetDisplay");
      AssetDisplay = /* @__PURE__ */ __name((props) => isAssetTypeAnImage(props.asset.type) ? /* @__PURE__ */ jsx(ImageAssetDisplay, {
        ...props
      }) : /* @__PURE__ */ jsx(BasicAssetDisplay, {
        ...props
      }), "AssetDisplay");
      ImageAssetPreviewer = /* @__PURE__ */ __name(({ asset }) => {
        var width = (0, import_react_native15.useWindowDimensions)().width - 24;
        var imageSize = {
          width: Math.min(width, asset.width ?? DEFAULT_IMAGE_SIZE),
          height: Math.min(width, asset.height ?? DEFAULT_IMAGE_SIZE)
        };
        return /* @__PURE__ */ jsx(BottomSheet_default, {
          contentStyles: {
            paddingHorizontal: 16
          },
          children: /* @__PURE__ */ jsxs(Stack_default, {
            children: [
              /* @__PURE__ */ jsx(import_react_native15.View, {
                style: {
                  alignItems: "center",
                  paddingVertical: 24
                },
                children: /* @__PURE__ */ jsx(import_react_native15.Image, {
                  source: asset.id,
                  style: imageSize,
                  resizeMode: "contain"
                })
              }),
              /* @__PURE__ */ jsxs(TableRowGroup_default, {
                title: "Details",
                children: [
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "ID",
                    subLabel: "Asset IDs are runtime specific. Do not hardcode these IDs!",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: String(asset.id)
                    })
                  }),
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "Type",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: asset.type
                    })
                  }),
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "Size",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: `${asset.width}x${asset.height}`
                    })
                  })
                ]
              })
            ]
          })
        });
      }, "ImageAssetPreviewer");
      sortAssets = /* @__PURE__ */ __name((assets) => assets.sort((a, b) => isAssetTypeAnImage(a.type) === isAssetTypeAnImage(b.type) ? 0 : isAssetTypeAnImage(a.type) ? -1 : 1), "sortAssets");
      __name(AssetBrowser, "AssetBrowser");
    }
  });

  // src/stores/useInitConfigStore.ts
  var useInitConfigStore_exports = {};
  __export(useInitConfigStore_exports, {
    useInitConfigStore: () => useInitConfigStore
  });
  var useInitConfigStore;
  var init_useInitConfigStore = __esm({
    "src/stores/useInitConfigStore.ts"() {
      "use strict";
      init_fs();
      init_loader();
      init_esm();
      useInitConfigStore = create((set2) => ({
        config: loaderPayload.loader.initConfig,
        toggleSafeMode: /* @__PURE__ */ __name((to) => set2((s) => ({
          config: {
            ...s.config,
            safeMode: to
          }
        })), "toggleSafeMode")
      }));
      useInitConfigStore.subscribe((state2) => {
        writeFile("init_config.json", JSON.stringify(state2.config));
      });
    }
  });

  // node_modules/zustand/esm/vanilla/shallow.mjs
  function shallow(valueA, valueB) {
    if (Object.is(valueA, valueB)) {
      return true;
    }
    if (typeof valueA !== "object" || valueA === null || typeof valueB !== "object" || valueB === null) {
      return false;
    }
    if (Object.getPrototypeOf(valueA) !== Object.getPrototypeOf(valueB)) {
      return false;
    }
    if (isIterable(valueA) && isIterable(valueB)) {
      if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
        return compareEntries(valueA, valueB);
      }
      return compareIterables(valueA, valueB);
    }
    return compareEntries({
      entries: /* @__PURE__ */ __name(() => Object.entries(valueA), "entries")
    }, {
      entries: /* @__PURE__ */ __name(() => Object.entries(valueB), "entries")
    });
  }
  var isIterable, hasIterableEntries, compareEntries, compareIterables;
  var init_shallow = __esm({
    "node_modules/zustand/esm/vanilla/shallow.mjs"() {
      isIterable = /* @__PURE__ */ __name((obj) => Symbol.iterator in obj, "isIterable");
      hasIterableEntries = /* @__PURE__ */ __name((value) => (
        // HACK: avoid checking entries type
        "entries" in value
      ), "hasIterableEntries");
      compareEntries = /* @__PURE__ */ __name((valueA, valueB) => {
        var mapA = valueA instanceof Map ? valueA : new Map(valueA.entries());
        var mapB = valueB instanceof Map ? valueB : new Map(valueB.entries());
        if (mapA.size !== mapB.size) {
          return false;
        }
        for (var [key, value] of mapA) {
          if (!Object.is(value, mapB.get(key))) {
            return false;
          }
        }
        return true;
      }, "compareEntries");
      compareIterables = /* @__PURE__ */ __name((valueA, valueB) => {
        var iteratorA = valueA[Symbol.iterator]();
        var iteratorB = valueB[Symbol.iterator]();
        var nextA = iteratorA.next();
        var nextB = iteratorB.next();
        while (!nextA.done && !nextB.done) {
          if (!Object.is(nextA.value, nextB.value)) {
            return false;
          }
          nextA = iteratorA.next();
          nextB = iteratorB.next();
        }
        return !!nextA.done && !!nextB.done;
      }, "compareIterables");
      __name(shallow, "shallow");
    }
  });

  // node_modules/zustand/esm/react/shallow.mjs
  function useShallow(selector) {
    var prev = import_react8.default.useRef(void 0);
    return (state2) => {
      var next = selector(state2);
      return shallow(prev.current, next) ? prev.current : prev.current = next;
    };
  }
  var import_react8;
  var init_shallow2 = __esm({
    "node_modules/zustand/esm/react/shallow.mjs"() {
      import_react8 = __toESM(require_react(), 1);
      init_shallow();
      __name(useShallow, "useShallow");
    }
  });

  // node_modules/zustand/esm/shallow.mjs
  var init_shallow3 = __esm({
    "node_modules/zustand/esm/shallow.mjs"() {
      init_shallow();
      init_shallow2();
    }
  });

  // src/components/Blazed/Settings/pages/Developer/TokenBrowser/Colors.tsx
  var Colors_exports = {};
  __export(Colors_exports, {
    default: () => Colors
  });
  function ColorRow({ token, start, end }) {
    var color = useToken(tokens.colors[token]);
    return /* @__PURE__ */ jsx(TableRow_default, {
      label: token,
      start,
      end,
      trailing: /* @__PURE__ */ jsx(import_react_native16.View, {
        style: {
          width: 24,
          height: 24,
          borderRadius: 4,
          backgroundColor: color
        }
      })
    });
  }
  function Colors() {
    return /* @__PURE__ */ jsx(PageWrapper, {
      containerStyle: {
        paddingHorizontal: 0
      },
      children: /* @__PURE__ */ jsx(import_flash_list4.FlashList, {
        data: Object.keys(tokens.colors),
        contentContainerStyle: {
          paddingHorizontal: 12
        },
        renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(ColorRow, {
          token: item,
          start: index === 0,
          end: index === Object.keys(tokens.colors).length - 1
        }), "renderItem"),
        keyExtractor: /* @__PURE__ */ __name((item) => item, "keyExtractor")
      })
    });
  }
  var import_flash_list4, import_react_native16;
  var init_Colors = __esm({
    "src/components/Blazed/Settings/pages/Developer/TokenBrowser/Colors.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      import_flash_list4 = __toESM(require_flash_list(), 1);
      import_react_native16 = __toESM(require_react_native(), 1);
      __name(ColorRow, "ColorRow");
      __name(Colors, "Colors");
    }
  });

  // src/components/Blazed/Settings/pages/Developer/TokenBrowser/index.tsx
  var TokenBrowser_exports = {};
  __export(TokenBrowser_exports, {
    default: () => TokenBrowser
  });
  function TokenBrowser() {
    var navigation = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsx(TableRowGroup_default, {
        title: "Token type",
        children: /* @__PURE__ */ jsx(TableRow_default, {
          label: "Colors",
          arrow: true,
          onPress: /* @__PURE__ */ __name(() => {
            navigation.push("BLAZED_CUSTOM_PAGE", {
              title: "Colors",
              render: /* @__PURE__ */ (0, import_react9.lazy)(() => Promise.resolve().then(() => (init_Colors(), Colors_exports)))
            });
          }, "onPress")
        })
      })
    });
  }
  var import_react9;
  var init_TokenBrowser = __esm({
    "src/components/Blazed/Settings/pages/Developer/TokenBrowser/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      import_react9 = __toESM(require_react(), 1);
      __name(TokenBrowser, "TokenBrowser");
    }
  });

  // src/components/Blazed/Settings/pages/Developer/CalloutPlayground.tsx
  var CalloutPlayground_exports = {};
  __export(CalloutPlayground_exports, {
    default: () => CalloutPlayground
  });
  function CalloutPlayground() {
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(Callout, {
          title: "Info",
          variant: "info",
          children: "This is used to provide additional information."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Success",
          variant: "success",
          children: "This is used to provide successful feedback."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Warning",
          variant: "warning",
          children: "This is used to provide warning feedback."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Danger",
          variant: "danger",
          children: "This is used to provide error feedback."
        })
      ]
    });
  }
  var init_CalloutPlayground = __esm({
    "src/components/Blazed/Settings/pages/Developer/CalloutPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_PageWrapper();
      __name(CalloutPlayground, "CalloutPlayground");
    }
  });

  // src/components/Discord/AlertModal/AlertModal.tsx
  var AlertModal_exports = {};
  __export(AlertModal_exports, {
    AlertActionButton: () => AlertActionButton,
    AlertActions: () => AlertActions,
    AlertModal: () => AlertModal,
    AlertModalContainer: () => AlertModalContainer,
    useDismissModalCallback: () => useDismissModalCallback
  });
  function getPropLazy(prop) {
    return lazyValue(() => module.load()[prop]);
  }
  var module, AlertModal, AlertModalContainer, AlertActionButton, AlertActions, useDismissModalCallback;
  var init_AlertModal = __esm({
    "src/components/Discord/AlertModal/AlertModal.tsx"() {
      "use strict";
      init_wrappers();
      init_lazy();
      module = lookupByProps("AlertModal", "AlertActions");
      __name(getPropLazy, "getPropLazy");
      AlertModal = getPropLazy("AlertModal");
      AlertModalContainer = getPropLazy("AlertModalContainer");
      AlertActionButton = getPropLazy("AlertActionButton");
      AlertActions = getPropLazy("AlertActions");
      useDismissModalCallback = getPropLazy("useDismissModalCallback");
    }
  });

  // src/api/alerts.tsx
  var alerts_exports = {};
  __export(alerts_exports, {
    dismissAlert: () => dismissAlert,
    showAlert: () => showAlert
  });
  function AlertModalWrapper({ children, dismissable }) {
    (0, import_react10.useEffect)(() => {
      if (dismissable === false) {
        var backHandler = import_react_native17.BackHandler.addEventListener("hardwareBackPress", () => true);
        return () => backHandler.remove();
      }
    }, [
      dismissable
    ]);
    return dismissable === false ? /* @__PURE__ */ jsx(import_react_native17.Pressable, {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      children
    }) : children;
  }
  function showAlert(props) {
    var content;
    if ("content" in props) {
      content = /* @__PURE__ */ jsx(AlertModal, {
        header: props.header,
        title: props.title,
        content: props.content,
        extraContent: props.extraContent,
        actions: props.actions?.map((a, i2) => /* @__PURE__ */ (0, import_react10.isValidElement)(a) ? a : /* @__PURE__ */ jsx(AlertActionButton, {
          ...a
        }, i2))
      });
    } else if ("Component" in props) {
      content = /* @__PURE__ */ jsx(props.Component, {});
    } else {
      throw new Error("Invalid alert props");
    }
    logger3.info(`Showing alert: ${props.id}`);
    AlertStore.openAlert(props.id, /* @__PURE__ */ jsx(AlertModalWrapper, {
      dismissable: props.dismissable,
      children: content
    }), props.onDismiss);
    return props.id;
  }
  function dismissAlert(id) {
    AlertStore.dismissAlert(id);
  }
  var import_react10, import_react_native17, logger3, AlertStore;
  var init_alerts = __esm({
    "src/api/alerts.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react10 = __toESM(require_react(), 1);
      init_logger();
      init_wrappers();
      import_react_native17 = __toESM(require_react_native(), 1);
      init_AlertModal();
      logger3 = wtlogger.createChild("Alerts");
      AlertStore = lookupByProps("openAlert", "useAlertStore").asLazy();
      __name(AlertModalWrapper, "AlertModalWrapper");
      __name(showAlert, "showAlert");
      __name(dismissAlert, "dismissAlert");
    }
  });

  // src/components/Blazed/Settings/pages/Developer/AlertsPlayground.tsx
  var AlertsPlayground_exports = {};
  __export(AlertsPlayground_exports, {
    default: () => AlertsPlayground
  });
  function DemoAlert() {
    var [understood, setUnderstood] = (0, import_react11.useState)(false);
    var dismissModal = useDismissModalCallback();
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Alert System Demo",
      content: "This is an interactive demonstration of the alert system component. You can test various actions and behaviors using the buttons below.",
      extraContent: /* @__PURE__ */ jsxs(Stack_default, {
        spacing: 12,
        children: [
          /* @__PURE__ */ jsx(Card_default, {
            children: /* @__PURE__ */ jsx(Text_default, {
              variant: "text-md/medium",
              children: "The alert modal supports additional content sections for complex interactions and information displays."
            })
          }),
          /* @__PURE__ */ jsx(InlineCheckbox, {
            label: "Understood",
            checked: understood,
            onPress: setUnderstood
          })
        ]
      }),
      actions: [
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Async Action",
          onPress: /* @__PURE__ */ __name(() => _async_to_generator(function* () {
            yield delay(1e3);
            dismissModal();
          })(), "onPress")
        }, "async"),
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Dismiss Alert",
          variant: "destructive",
          onPress: /* @__PURE__ */ __name(() => {
            dismissModal();
          }, "onPress")
        }, "dismiss")
      ]
    });
  }
  function CountdownDemoAlert() {
    var [count, setCount] = (0, import_react11.useState)(0);
    var dismissModal = useDismissModalCallback();
    (0, import_react11.useEffect)(() => {
      var interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1e3);
      return () => clearInterval(interval);
    }, []);
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Countdown Alert",
      content: `The button below will be enabled in ${Math.max(0, 5 - count)} seconds.`,
      actions: [
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Dismiss Alert",
          variant: "destructive",
          disabled: count < 5,
          onPress: /* @__PURE__ */ __name(() => {
            dismissModal();
          }, "onPress")
        }, "dismiss")
      ]
    });
  }
  function AlertsPlayground() {
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12,
        justifyContent: "flex-end"
      },
      children: [
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "demo-alert",
              Component: DemoAlert
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show non-dismissable alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "non-dismissable-demo-alert",
              Component: DemoAlert,
              dismissable: false
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show countdown alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "countdown-demo-alert",
              Component: CountdownDemoAlert,
              dismissable: false
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show alert with custom buttons",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "custom-buttons-demo",
              title: "Custom Buttons Alert",
              content: "This alert has custom buttons. The buttons below will not dismiss the alert or show a loading indicator when the 'onPress' returns a Promise, unlike AlertActionButton does.",
              actions: [
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Button 1",
                  onPress: noop
                }, "1"),
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Button 2",
                  onPress: noop
                }, "2")
              ]
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show direct content alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "direct-content-demo",
              title: "Direct Content Alert",
              content: "This alert uses direct content instead of a component.",
              actions: [
                {
                  text: "Dismiss Alert",
                  variant: "destructive",
                  onPress: /* @__PURE__ */ __name(() => dismissAlert("direct-content-demo"), "onPress")
                }
              ]
            });
          }, "onPress")
        })
      ]
    });
  }
  var import_react11;
  var init_AlertsPlayground = __esm({
    "src/components/Blazed/Settings/pages/Developer/AlertsPlayground.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_alerts();
      init_Discord2();
      init_AlertModal();
      init_InlineCheckbox();
      init_PageWrapper();
      init_dist();
      import_react11 = __toESM(require_react(), 1);
      __name(DemoAlert, "DemoAlert");
      __name(CountdownDemoAlert, "CountdownDemoAlert");
      __name(AlertsPlayground, "AlertsPlayground");
    }
  });

  // src/components/Blazed/Settings/pages/Developer/index.tsx
  var Developer_exports = {};
  __export(Developer_exports, {
    default: () => DeveloperPage
  });
  function DeveloperPage() {
    var config = useInitConfigStore(useShallow((s) => s.config));
    var navigation = NavigationNative.useNavigation();
    var tSections = t3.settings.developer.sections;
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.init_config.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: /* @__PURE__ */ jsx(TextInput_default, {
                label: tSections.init_config.custom_endpoint(),
                value: config.baseUrl,
                placeholder: "http://localhost:4040/",
                onChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                  config: {
                    ...s.config,
                    baseUrl: v
                  }
                })), "onChange")
              })
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: /* @__PURE__ */ jsx(TextInput_default, {
                label: tSections.init_config.bundle_path(),
                value: config.bundlePath || "",
                placeholder: "bundle.js",
                onChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                  config: {
                    ...s.config,
                    bundlePath: v || null
                  }
                })), "onChange")
              }),
              subLabel: tSections.init_config.bundle_path_desc()
            }),
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: tSections.init_config.force_update(),
              subLabel: tSections.init_config.force_update_desc(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("RefreshIcon")
              }),
              value: config.forceUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                config: {
                  ...s.config,
                  forceUpdate: v
                }
              })), "onValueChange")
            })
          ]
        }),
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            marginTop: -6
          },
          variant: "text-xs/normal",
          color: "text-muted",
          children: tSections.init_config.sublabel()
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.tools.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: tSections.tools.asset_browser.label(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("ImageIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
                title: tSections.tools.asset_browser.label(),
                render: /* @__PURE__ */ (0, import_react12.lazy)(() => Promise.resolve().then(() => (init_AssetBrowser(), AssetBrowser_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Token Browser",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("PaintPaletteIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
                title: "Token Browser",
                render: /* @__PURE__ */ (0, import_react12.lazy)(() => Promise.resolve().then(() => (init_TokenBrowser(), TokenBrowser_exports)))
              }), "onPress")
            })
          ]
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.playground.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Toasts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("ChatWarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
                title: "Toast Playground",
                render: /* @__PURE__ */ (0, import_react12.lazy)(() => Promise.resolve().then(() => (init_ToastPlayground(), ToastPlayground_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Callouts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
                title: "Callouts Playground",
                render: /* @__PURE__ */ (0, import_react12.lazy)(() => Promise.resolve().then(() => (init_CalloutPlayground(), CalloutPlayground_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Alerts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
                title: "Alerts Playground",
                render: /* @__PURE__ */ (0, import_react12.lazy)(() => Promise.resolve().then(() => (init_AlertsPlayground(), AlertsPlayground_exports)))
              }), "onPress")
            })
          ]
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          title: tSections.actions.label(),
          children: /* @__PURE__ */ jsx(TableRow_default, {
            label: tSections.actions.invalidate_metro_cache(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              variant: "danger",
              source: findAssetId("TrashIcon")
            }),
            variant: "danger",
            onPress: /* @__PURE__ */ __name(() => {
              MetroCache.invalidate();
              alert("Metro cache invalidated");
            }, "onPress")
          })
        })
      ]
    });
  }
  var import_react12;
  var init_Developer = __esm({
    "src/components/Blazed/Settings/pages/Developer/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react12 = __toESM(require_react(), 1);
      init_i18n();
      init_assets();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      init_caches();
      init_useInitConfigStore();
      init_shallow3();
      __name(DeveloperPage, "DeveloperPage");
    }
  });

  // src/components/Discord/Forms/FormSwitch.tsx
  var FormSwitch_exports = {};
  __export(FormSwitch_exports, {
    default: () => FormSwitch_default
  });
  var FormSwitch_default;
  var init_FormSwitch = __esm({
    "src/components/Discord/Forms/FormSwitch.tsx"() {
      "use strict";
      init_util();
      FormSwitch_default = getComponentFromProps("FormSwitch", {
        singular: true
      });
    }
  });

  // src/components/Blazed/Settings/pages/Addon/SearchTermHighlight.tsx
  var SearchTermHighlight_exports = {};
  __export(SearchTermHighlight_exports, {
    HighlightProvider: () => HighlightProvider,
    useHighlight: () => useHighlight,
    useHighlightedSearchTerm: () => useHighlightedSearchTerm
  });
  function HighlightProvider({ children, result, searchTerms }) {
    var contextValue = (0, import_react13.useMemo)(() => ({
      result,
      searchTerms
    }), [
      result,
      searchTerms
    ]);
    return /* @__PURE__ */ jsx(HighlightContext.Provider, {
      value: contextValue,
      children
    });
  }
  function useHighlight() {
    var context16 = (0, import_react13.useContext)(HighlightContext);
    if (!context16) {
      throw new Error("useHighlight must be used within a HighlightProvider");
    }
    return context16;
  }
  function useHighlightedSearchTerm(index) {
    var { result, searchTerms } = useHighlight();
    return (0, import_react13.useCallback)((textProps) => {
      var highlightedNode = result[index]?.highlight?.((m2, i2) => /* @__PURE__ */ jsx(Text_default, {
        ...textProps,
        style: [
          textProps.style,
          {
            backgroundColor: chroma(tokens.unsafe_rawColors.YELLOW_300).alpha(0.3).hex()
          }
        ],
        children: m2
      }, i2)) || [];
      return /* @__PURE__ */ jsx(Text_default, {
        ...textProps,
        children: highlightedNode.length > 0 ? highlightedNode : searchTerms[index](result.obj)
      });
    }, [
      result,
      searchTerms,
      index
    ]);
  }
  var import_react13, HighlightContext;
  var init_SearchTermHighlight = __esm({
    "src/components/Blazed/Settings/pages/Addon/SearchTermHighlight.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_libraries();
      import_react13 = __toESM(require_react(), 1);
      HighlightContext = /* @__PURE__ */ (0, import_react13.createContext)(null);
      __name(HighlightProvider, "HighlightProvider");
      __name(useHighlight, "useHighlight");
      __name(useHighlightedSearchTerm, "useHighlightedSearchTerm");
    }
  });

  // src/components/Blazed/Settings/pages/Addon/AddonCard.tsx
  var AddonCard_exports = {};
  __export(AddonCard_exports, {
    default: () => AddonCard
  });
  function CardHeader({ addon }) {
    var HeaderText = useHighlightedSearchTerm(0);
    return /* @__PURE__ */ jsx(import_react_native18.View, {
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      },
      children: /* @__PURE__ */ jsx(HeaderText, {
        variant: "heading-lg/semibold"
      })
    });
  }
  function CardDevs({ addon }) {
    if (!addon.asAddonMetadata().authors) return null;
    var DevText = useHighlightedSearchTerm(2);
    return /* @__PURE__ */ jsx(import_react_native18.View, {
      style: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 4
      },
      children: /* @__PURE__ */ jsxs(Text_default, {
        variant: "text-sm/semibold",
        color: "text-muted",
        children: [
          "by ",
          /* @__PURE__ */ jsx(DevText, {
            variant: "text-sm/semibold",
            color: "text-muted"
          })
        ]
      })
    });
  }
  function Description() {
    var DescriptionText = useHighlightedSearchTerm(1);
    return /* @__PURE__ */ jsx(DescriptionText, {
      variant: "text-md/medium",
      color: "text-secondary"
    });
  }
  function CardActions({ addon, pageProps }) {
    return /* @__PURE__ */ jsx(import_react_native18.View, {
      style: {
        flexDirection: "row",
        gap: 6
      },
      children: pageProps.onPressInfo && /* @__PURE__ */ jsx(IconButton_default, {
        size: "sm",
        variant: "secondary",
        icon: findAssetId("CircleInformationIcon-primary"),
        onPress: /* @__PURE__ */ __name(() => pageProps.onPressInfo?.(addon), "onPress")
      })
    });
  }
  function CardSwitch({ addon, pageProps }) {
    var canToggle = pageProps.useCanHandleAddon(addon.asAddonMetadata().id);
    var [enabled, setEnabled] = pageProps.useToggler(addon.asAddonMetadata().id);
    return /* @__PURE__ */ jsx(import_react_native18.View, {
      children: /* @__PURE__ */ jsx(FormSwitch_default, {
        value: enabled,
        disabled: !canToggle,
        onValueChange: /* @__PURE__ */ __name((v) => {
          setEnabled(v);
        }, "onValueChange")
      })
    });
  }
  function AddonCard(props) {
    var { pageProps, addon } = props;
    var handleable = pageProps.useCanHandleAddon(addon.asAddonMetadata().id);
    return /* @__PURE__ */ jsx(Card_default, {
      style: {
        opacity: !handleable ? 0.7 : 1
      },
      onPress: handleable && pageProps.onPressInfo && (() => pageProps.onPressInfo(addon)) || void 0,
      children: /* @__PURE__ */ jsxs(Stack_default, {
        spacing: 8,
        children: [
          /* @__PURE__ */ jsxs(import_react_native18.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native18.View, {
                style: {
                  flexShrink: 1
                },
                children: [
                  /* @__PURE__ */ jsx(CardHeader, {
                    addon
                  }),
                  /* @__PURE__ */ jsx(CardDevs, {
                    addon
                  })
                ]
              }),
              /* @__PURE__ */ jsx(import_react_native18.View, {
                children: /* @__PURE__ */ jsxs(Stack_default, {
                  spacing: 12,
                  direction: "horizontal",
                  children: [
                    /* @__PURE__ */ jsx(CardActions, {
                      addon,
                      pageProps
                    }),
                    /* @__PURE__ */ jsx(CardSwitch, {
                      addon,
                      pageProps
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Description, {})
        ]
      })
    });
  }
  var import_react_native18;
  var init_AddonCard = __esm({
    "src/components/Blazed/Settings/pages/Addon/AddonCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native18 = __toESM(require_react_native(), 1);
      init_assets();
      init_IconButton();
      init_FormSwitch();
      init_Discord2();
      init_SearchTermHighlight();
      __name(CardHeader, "CardHeader");
      __name(CardDevs, "CardDevs");
      __name(Description, "Description");
      __name(CardActions, "CardActions");
      __name(CardSwitch, "CardSwitch");
      __name(AddonCard, "AddonCard");
    }
  });

  // src/components/Blazed/Settings/pages/Addon/index.tsx
  var Addon_exports = {};
  __export(Addon_exports, {
    default: () => AddonPage
  });
  function AddonPage(props) {
    var { useFilterResults, FilterBarComponent } = props.collectionManager;
    var results = useFilterResults();
    return /* @__PURE__ */ jsx(PageWrapper, {
      containerStyle: {
        paddingHorizontal: 0
      },
      children: /* @__PURE__ */ jsx(ResponsiveMasonryFlashList, {
        data: results,
        itemMinWidth: 244,
        estimatedItemSize: 150,
        keyExtractor: /* @__PURE__ */ __name((i2) => i2.obj.asAddonMetadata().id, "keyExtractor"),
        renderItem: /* @__PURE__ */ __name(({ item: result }) => /* @__PURE__ */ jsx(HighlightProvider, {
          result,
          searchTerms: props.collectionManager.searchTerms,
          children: /* @__PURE__ */ jsx(AddonCard, {
            addon: result.obj,
            pageProps: props
          })
        }), "renderItem"),
        ItemSeparatorComponent: ItemSeparator,
        ListHeaderComponent: /* @__PURE__ */ jsxs(import_react_native19.View, {
          style: {
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(FilterBarComponent, {}),
            isSafeModeEnabled() && /* @__PURE__ */ jsx(Callout, {
              variant: "info",
              title: t3.settings.plugins.safe_mode_callout(),
              children: t3.settings.plugins.safe_mode_callout_desc()
            })
          ]
        }),
        contentContainerStyle: {
          paddingHorizontal: 12
        },
        ListHeaderComponentStyle: {
          marginBottom: 12
        },
        ListFooterComponentStyle: {
          marginVertical: 16,
          alignItems: "center"
        }
      })
    });
  }
  var import_react_native19, ItemSeparator;
  var init_Addon = __esm({
    "src/components/Blazed/Settings/pages/Addon/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_i18n();
      import_react_native19 = __toESM(require_react_native(), 1);
      init_PageWrapper();
      init_ResponsiveMasonryFlashList();
      init_AddonCard();
      init_SearchTermHighlight();
      init_loader();
      ItemSeparator = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(import_react_native19.View, {
        style: {
          height: 8
        }
      }), "ItemSeparator");
      __name(AddonPage, "AddonPage");
    }
  });

  // node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/fuzzysort/fuzzysort.js"(exports, module3) {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      ((root, UMD) => {
        if (typeof define === "function" && define.amd) define([], UMD);
        else if (typeof module3 === "object" && module3.exports) module3.exports = UMD();
        else root["fuzzysort"] = UMD();
      })(exports, (_) => {
        "use strict";
        var single = /* @__PURE__ */ __name((search, target) => {
          if (!search || !target) return NULL;
          var preparedSearch = getPreparedSearch(search);
          if (!isPrepared(target)) target = getPrepared(target);
          var searchBitflags = preparedSearch.bitflags;
          if ((searchBitflags & target._bitflags) !== searchBitflags) return NULL;
          return algorithm(preparedSearch, target);
        }, "single");
        var go = /* @__PURE__ */ __name((search, targets, options) => {
          if (!search) return options?.all ? all(targets, options) : noResults;
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
              q.add(result2);
              ++resultsLen;
            } else {
              ++limitedCount;
              if (result2._score > q.peek()._score) q.replaceTop(result2);
            }
          }
          __name(push_result, "push_result");
          if (options?.key) {
            var key = options.key;
            for (var i2 = 0; i2 < targetsLen; ++i2) {
              var obj = targets[i2];
              var target = getValue(obj, key);
              if (!target) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags) continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL) continue;
              if (result._score < threshold) continue;
              result.obj = obj;
              push_result(result);
            }
          } else if (options?.keys) {
            var keys = options.keys;
            var keysLen = keys.length;
            outer: for (var i2 = 0; i2 < targetsLen; ++i2) {
              var obj = targets[i2];
              {
                var keysBitflags = 0;
                for (var keyI = 0; keyI < keysLen; ++keyI) {
                  var key = keys[keyI];
                  var target = getValue(obj, key);
                  if (!target) {
                    tmpTargets[keyI] = noTarget;
                    continue;
                  }
                  if (!isPrepared(target)) target = getPrepared(target);
                  tmpTargets[keyI] = target;
                  keysBitflags |= target._bitflags;
                }
                if ((searchBitflags & keysBitflags) !== searchBitflags) continue;
              }
              if (containsSpace) for (var i1 = 0; i1 < preparedSearch.spaceSearches.length; i1++) keysSpacesBestScores[i1] = NEGATIVE_INFINITY;
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
                if (containsSpace) for (var i22 = 0; i22 < preparedSearch.spaceSearches.length; i22++) {
                  if (allowPartialMatchScores[i22] > -1e3) {
                    if (keysSpacesBestScores[i22] > NEGATIVE_INFINITY) {
                      var tmp = (keysSpacesBestScores[i22] + allowPartialMatchScores[i22]) / 4;
                      if (tmp > keysSpacesBestScores[i22]) keysSpacesBestScores[i22] = tmp;
                    }
                  }
                  if (allowPartialMatchScores[i22] > keysSpacesBestScores[i22]) keysSpacesBestScores[i22] = allowPartialMatchScores[i22];
                }
              }
              if (containsSpace) {
                for (var i3 = 0; i3 < preparedSearch.spaceSearches.length; i3++) {
                  if (keysSpacesBestScores[i3] === NEGATIVE_INFINITY) continue outer;
                }
              } else {
                var hasAtLeast1Match = false;
                for (var i4 = 0; i4 < keysLen; i4++) {
                  if (tmpResults[i4]._score !== NEGATIVE_INFINITY) {
                    hasAtLeast1Match = true;
                    break;
                  }
                }
                if (!hasAtLeast1Match) continue;
              }
              var objResults = new KeysResult(keysLen);
              for (var i5 = 0; i5 < keysLen; i5++) {
                objResults[i5] = tmpResults[i5];
              }
              if (containsSpace) {
                var score = 0;
                for (var i6 = 0; i6 < preparedSearch.spaceSearches.length; i6++) score += keysSpacesBestScores[i6];
              } else {
                var score = NEGATIVE_INFINITY;
                for (var i7 = 0; i7 < keysLen; i7++) {
                  var result = objResults[i7];
                  if (result._score > -1e3) {
                    if (score > NEGATIVE_INFINITY) {
                      var tmp = (score + result._score) / 4;
                      if (tmp > score) score = tmp;
                    }
                  }
                  if (result._score > score) score = result._score;
                }
              }
              objResults.obj = obj;
              objResults._score = score;
              if (options?.scoreFn) {
                score = options.scoreFn(objResults);
                if (!score) continue;
                score = denormalizeScore(score);
                objResults._score = score;
              }
              if (score < threshold) continue;
              push_result(objResults);
            }
          } else {
            for (var i2 = 0; i2 < targetsLen; ++i2) {
              var target = targets[i2];
              if (!target) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags) continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL) continue;
              if (result._score < threshold) continue;
              push_result(result);
            }
          }
          if (resultsLen === 0) return noResults;
          var results = new Array(resultsLen);
          for (var i2 = resultsLen - 1; i2 >= 0; --i2) results[i2] = q.poll();
          results.total = resultsLen + limitedCount;
          return results;
        }, "go");
        var highlight = /* @__PURE__ */ __name((result, open = "<b>", close = "</b>") => {
          var callback = typeof open === "function" ? open : void 0;
          var target = result.target;
          var targetLen = target.length;
          var indexes = result.indexes;
          var highlighted = "";
          var matchI = 0;
          var indexesI = 0;
          var opened = false;
          var parts = [];
          for (var i2 = 0; i2 < targetLen; ++i2) {
            var char = target[i2];
            if (indexes[indexesI] === i2) {
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
                  parts.push(target.substr(i2 + 1));
                } else {
                  highlighted += char + close + target.substr(i2 + 1);
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
        }, "highlight");
        var prepare = /* @__PURE__ */ __name((target) => {
          if (typeof target === "number") target = "" + target;
          else if (typeof target !== "string") target = "";
          var info = prepareLowerInfo(target);
          return new_result(target, {
            _targetLower: info._lower,
            _targetLowerCodes: info.lowerCodes,
            _bitflags: info.bitflags
          });
        }, "prepare");
        var cleanup = /* @__PURE__ */ __name(() => {
          preparedCache.clear();
          preparedSearchCache.clear();
        }, "cleanup");
        var Result = /* @__PURE__ */ function() {
          function Result2() {
            _class_call_check(this, Result2);
          }
          __name(Result2, "Result");
          _create_class(Result2, [
            {
              key: "indexes",
              get: /* @__PURE__ */ __name(function get() {
                return this._indexes.slice(0, this._indexes.len).sort((a, b) => a - b);
              }, "get")
            },
            {
              key: "indexes",
              set: /* @__PURE__ */ __name(function set2(indexes) {
                return this._indexes = indexes;
              }, "set")
            },
            {
              key: "highlight",
              value: /* @__PURE__ */ __name(function value(open, close) {
                return highlight(this, open, close);
              }, "value")
            },
            {
              key: "score",
              get: /* @__PURE__ */ __name(function get() {
                return normalizeScore(this._score);
              }, "get")
            },
            {
              key: "score",
              set: /* @__PURE__ */ __name(function set2(score) {
                this._score = denormalizeScore(score);
              }, "set")
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
          __name(KeysResult2, "KeysResult");
          _create_class(KeysResult2, [
            {
              key: "score",
              get: /* @__PURE__ */ __name(function get() {
                return normalizeScore(this._score);
              }, "get")
            },
            {
              key: "score",
              set: /* @__PURE__ */ __name(function set2(score) {
                this._score = denormalizeScore(score);
              }, "set")
            }
          ]);
          return KeysResult2;
        }(_wrap_native_super(Array));
        var new_result = /* @__PURE__ */ __name((target, options) => {
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
        }, "new_result");
        var normalizeScore = /* @__PURE__ */ __name((score) => {
          if (score === NEGATIVE_INFINITY) return 0;
          if (score > 1) return score;
          return Math.E ** (((-score + 1) ** 0.04307 - 1) * -2);
        }, "normalizeScore");
        var denormalizeScore = /* @__PURE__ */ __name((normalizedScore) => {
          if (normalizedScore === 0) return NEGATIVE_INFINITY;
          if (normalizedScore > 1) return normalizedScore;
          return 1 - Math.pow(Math.log(normalizedScore) / -2 + 1, 1 / 0.04307);
        }, "denormalizeScore");
        var prepareSearch = /* @__PURE__ */ __name((search) => {
          if (typeof search === "number") search = "" + search;
          else if (typeof search !== "string") search = "";
          search = search.trim();
          var info = prepareLowerInfo(search);
          var spaceSearches = [];
          if (info.containsSpace) {
            var searches = search.split(/\s+/);
            searches = [
              ...new Set(searches)
            ];
            for (var i2 = 0; i2 < searches.length; i2++) {
              if (searches[i2] === "") continue;
              var _info = prepareLowerInfo(searches[i2]);
              spaceSearches.push({
                lowerCodes: _info.lowerCodes,
                _lower: searches[i2].toLowerCase(),
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
        }, "prepareSearch");
        var getPrepared = /* @__PURE__ */ __name((target) => {
          if (target.length > 999) return prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0) return targetPrepared;
          targetPrepared = prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        }, "getPrepared");
        var getPreparedSearch = /* @__PURE__ */ __name((search) => {
          if (search.length > 999) return prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0) return searchPrepared;
          searchPrepared = prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        }, "getPreparedSearch");
        var all = /* @__PURE__ */ __name((targets, options) => {
          var results = [];
          results.total = targets.length;
          var limit = options?.limit || INFINITY;
          if (options?.key) {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var obj = targets[i2];
              var target = getValue(obj, options.key);
              if (target == NULL) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              var result = new_result(target.target, {
                _score: target._score,
                obj
              });
              results.push(result);
              if (results.length >= limit) return results;
            }
          } else if (options?.keys) {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var obj = targets[i2];
              var objResults = new KeysResult(options.keys.length);
              for (var keyI = options.keys.length - 1; keyI >= 0; --keyI) {
                var target = getValue(obj, options.keys[keyI]);
                if (!target) {
                  objResults[keyI] = noTarget;
                  continue;
                }
                if (!isPrepared(target)) target = getPrepared(target);
                target._score = NEGATIVE_INFINITY;
                target._indexes.len = 0;
                objResults[keyI] = target;
              }
              objResults.obj = obj;
              objResults._score = NEGATIVE_INFINITY;
              results.push(objResults);
              if (results.length >= limit) return results;
            }
          } else {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var target = targets[i2];
              if (target == NULL) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              target._score = NEGATIVE_INFINITY;
              target._indexes.len = 0;
              results.push(target);
              if (results.length >= limit) return results;
            }
          }
          return results;
        }, "all");
        var algorithm = /* @__PURE__ */ __name((preparedSearch, prepared, allowSpaces = false, allowPartialMatch = false) => {
          if (allowSpaces === false && preparedSearch.containsSpace) return algorithmSpaces(preparedSearch, prepared, allowPartialMatch);
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
              if (searchI === searchLen) break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen) return NULL;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === NULL) nextBeginningIndexes = prepared._nextBeginningIndexes = prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          var backtrackCount = 0;
          if (targetI !== targetLen) for (; ; ) {
            if (targetI >= targetLen) {
              if (searchI <= 0) break;
              ++backtrackCount;
              if (backtrackCount > 200) break;
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
            for (var i2 = 0; i2 < nextBeginningIndexes.length; i2 = nextBeginningIndexes[i2]) {
              if (i2 <= substringIndex) continue;
              for (var s = 0; s < searchLen; s++) if (searchLowerCodes[s] !== prepared._targetLowerCodes[i2 + s]) break;
              if (s === searchLen) {
                substringIndex = i2;
                isSubstringBeginning = true;
                break;
              }
            }
          }
          var calculateScore = /* @__PURE__ */ __name((matches) => {
            var score2 = 0;
            var extraMatchGroupCount = 0;
            for (var i3 = 1; i3 < searchLen; ++i3) {
              if (matches[i3] - matches[i3 - 1] !== 1) {
                score2 -= matches[i3];
                ++extraMatchGroupCount;
              }
            }
            var unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
            score2 -= (12 + unmatchedDistance) * extraMatchGroupCount;
            if (matches[0] !== 0) score2 -= matches[0] * matches[0] * 0.2;
            if (!successStrict) {
              score2 *= 1e3;
            } else {
              var uniqueBeginningIndexes = 1;
              for (var i3 = nextBeginningIndexes[0]; i3 < targetLen; i3 = nextBeginningIndexes[i3]) ++uniqueBeginningIndexes;
              if (uniqueBeginningIndexes > 24) score2 *= (uniqueBeginningIndexes - 24) * 10;
            }
            score2 -= (targetLen - searchLen) / 2;
            if (isSubstring) score2 /= 1 + searchLen * searchLen * 1;
            if (isSubstringBeginning) score2 /= 1 + searchLen * searchLen * 1;
            score2 -= (targetLen - searchLen) / 2;
            return score2;
          }, "calculateScore");
          if (!successStrict) {
            if (isSubstring) for (var i2 = 0; i2 < searchLen; ++i2) matchesSimple[i2] = substringIndex + i2;
            var matchesBest = matchesSimple;
            var score = calculateScore(matchesBest);
          } else {
            if (isSubstringBeginning) {
              for (var i2 = 0; i2 < searchLen; ++i2) matchesSimple[i2] = substringIndex + i2;
              var matchesBest = matchesSimple;
              var score = calculateScore(matchesSimple);
            } else {
              var matchesBest = matchesStrict;
              var score = calculateScore(matchesStrict);
            }
          }
          prepared._score = score;
          for (var i2 = 0; i2 < searchLen; ++i2) prepared._indexes[i2] = matchesBest[i2];
          prepared._indexes.len = searchLen;
          var result = new Result();
          result.target = prepared.target;
          result._score = prepared._score;
          result._indexes = prepared._indexes;
          return result;
        }, "algorithm");
        var algorithmSpaces = /* @__PURE__ */ __name((preparedSearch, target, allowPartialMatch) => {
          var seen_indexes = /* @__PURE__ */ new Set();
          var score = 0;
          var result = NULL;
          var first_seen_index_last_search = 0;
          var searches = preparedSearch.spaceSearches;
          var searchesLen = searches.length;
          var changeslen = 0;
          var resetNextBeginningIndexes = /* @__PURE__ */ __name(() => {
            for (var i4 = changeslen - 1; i4 >= 0; i4--) target._nextBeginningIndexes[nextBeginningIndexesChanges[i4 * 2 + 0]] = nextBeginningIndexesChanges[i4 * 2 + 1];
          }, "resetNextBeginningIndexes");
          var hasAtLeast1Match = false;
          for (var i3 = 0; i3 < searchesLen; ++i3) {
            allowPartialMatchScores[i3] = NEGATIVE_INFINITY;
            var search = searches[i3];
            result = algorithm(search, target);
            if (allowPartialMatch) {
              if (result === NULL) continue;
              hasAtLeast1Match = true;
            } else {
              if (result === NULL) {
                resetNextBeginningIndexes();
                return NULL;
              }
            }
            var isTheLastSearch = i3 === searchesLen - 1;
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
                  if (toReplace !== target._nextBeginningIndexes[i2]) break;
                  target._nextBeginningIndexes[i2] = newBeginningIndex;
                  nextBeginningIndexesChanges[changeslen * 2 + 0] = i2;
                  nextBeginningIndexesChanges[changeslen * 2 + 1] = toReplace;
                  changeslen++;
                }
              }
            }
            score += result._score / searchesLen;
            allowPartialMatchScores[i3] = result._score / searchesLen;
            if (result._indexes[0] < first_seen_index_last_search) {
              score -= (first_seen_index_last_search - result._indexes[0]) * 2;
            }
            first_seen_index_last_search = result._indexes[0];
            for (var j = 0; j < result._indexes.len; ++j) seen_indexes.add(result._indexes[j]);
          }
          if (allowPartialMatch && !hasAtLeast1Match) return NULL;
          resetNextBeginningIndexes();
          var allowSpacesResult = algorithm(
            preparedSearch,
            target,
            /*allowSpaces=*/
            true
          );
          if (allowSpacesResult !== NULL && allowSpacesResult._score > score) {
            if (allowPartialMatch) {
              for (var i3 = 0; i3 < searchesLen; ++i3) {
                allowPartialMatchScores[i3] = allowSpacesResult._score / searchesLen;
              }
            }
            return allowSpacesResult;
          }
          if (allowPartialMatch) result = target;
          result._score = score;
          var i3 = 0;
          for (var index of seen_indexes) result._indexes[i3++] = index;
          result._indexes.len = i3;
          return result;
        }, "algorithmSpaces");
        var prepareLowerInfo = /* @__PURE__ */ __name((str) => {
          var strLen = str.length;
          var lower = str.toLowerCase();
          var lowerCodes = [];
          var bitflags = 0;
          var containsSpace = false;
          for (var i2 = 0; i2 < strLen; ++i2) {
            var lowerCode = lowerCodes[i2] = lower.charCodeAt(i2);
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
        }, "prepareLowerInfo");
        var prepareBeginningIndexes = /* @__PURE__ */ __name((target) => {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i2 = 0; i2 < targetLen; ++i2) {
            var targetCode = target.charCodeAt(i2);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning) beginningIndexes[beginningIndexesLen++] = i2;
          }
          return beginningIndexes;
        }, "prepareBeginningIndexes");
        var prepareNextBeginningIndexes = /* @__PURE__ */ __name((target) => {
          var targetLen = target.length;
          var beginningIndexes = prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i2 = 0; i2 < targetLen; ++i2) {
            if (lastIsBeginning > i2) {
              nextBeginningIndexes[i2] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i2] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        }, "prepareNextBeginningIndexes");
        var preparedCache = /* @__PURE__ */ new Map();
        var preparedSearchCache = /* @__PURE__ */ new Map();
        var matchesSimple = [];
        var matchesStrict = [];
        var nextBeginningIndexesChanges = [];
        var keysSpacesBestScores = [];
        var allowPartialMatchScores = [];
        var tmpTargets = [];
        var tmpResults = [];
        var getValue = /* @__PURE__ */ __name((obj, prop) => {
          var tmp = obj[prop];
          if (tmp !== void 0) return tmp;
          if (typeof prop === "function") return prop(obj);
          var segs = prop;
          if (!Array.isArray(prop)) segs = prop.split(".");
          var len = segs.length;
          var i2 = -1;
          while (obj && ++i2 < len) obj = obj[segs[i2]];
          return obj;
        }, "getValue");
        var isPrepared = /* @__PURE__ */ __name((x) => {
          return typeof x === "object" && typeof x._bitflags === "number";
        }, "isPrepared");
        var INFINITY = Infinity;
        var NEGATIVE_INFINITY = -INFINITY;
        var noResults = [];
        noResults.total = 0;
        var NULL = null;
        var noTarget = prepare("");
        var fastpriorityqueue = /* @__PURE__ */ __name((r4) => {
          var e3 = [], o2 = 0, a = {}, v = /* @__PURE__ */ __name((r5) => {
            for (var a2 = 0, v2 = e3[a2], c2 = 1; c2 < o2; ) {
              var s = c2 + 1;
              a2 = c2, s < o2 && e3[s]._score < e3[c2]._score && (a2 = s), e3[a2 - 1 >> 1] = e3[a2], c2 = 1 + (a2 << 1);
            }
            for (var f = a2 - 1 >> 1; a2 > 0 && v2._score < e3[f]._score; f = (a2 = f) - 1 >> 1) e3[a2] = e3[f];
            e3[a2] = v2;
          }, "v");
          return a.add = (r5) => {
            var a2 = o2;
            e3[o2++] = r5;
            for (var v2 = a2 - 1 >> 1; a2 > 0 && r5._score < e3[v2]._score; v2 = (a2 = v2) - 1 >> 1) e3[a2] = e3[v2];
            e3[a2] = r5;
          }, a.poll = (r5) => {
            if (0 !== o2) {
              var a2 = e3[0];
              return e3[0] = e3[--o2], v(), a2;
            }
          }, a.peek = (r5) => {
            if (0 !== o2) return e3[0];
          }, a.replaceTop = (r5) => {
            e3[0] = r5, v();
          }, a;
        }, "fastpriorityqueue");
        var q = fastpriorityqueue();
        return {
          "single": single,
          "go": go,
          "prepare": prepare,
          "cleanup": cleanup
        };
      });
    }
  });

  // src/components/Blazed/Settings/pages/Addon/AddonCollectionManager.tsx
  var AddonCollectionManager_exports = {};
  __export(AddonCollectionManager_exports, {
    createAddonCollectionManager: () => createAddonCollectionManager
  });
  function createAddonCollectionManager({ data, defaultSortOption, defaultFilterOptions, sortOptions, filterOptions, ...props }) {
    var searchTerms = [
      (v) => v.asAddonMetadata().name,
      (v) => v.asAddonMetadata().description,
      (v) => v.asAddonMetadata().authors.map((a) => a.name).join(", "),
      ...props.searchTerms ?? []
    ];
    var useStore2 = create((set2) => ({
      currentQuery: "",
      currentSortOption: defaultSortOption,
      currentFilterOptions: defaultFilterOptions,
      setSortOption: /* @__PURE__ */ __name((option) => set2({
        currentSortOption: option
      }), "setSortOption"),
      toggleFilterOption: /* @__PURE__ */ __name((option) => set2((state2) => {
        if (state2.currentFilterOptions.includes(option)) {
          return {
            currentFilterOptions: state2.currentFilterOptions.filter((o2) => o2 !== option)
          };
        }
        return {
          currentFilterOptions: [
            ...state2.currentFilterOptions,
            option
          ]
        };
      }), "toggleFilterOption")
    }));
    return {
      useFilterAndSortStore: useStore2,
      searchTerms,
      useFilterResults: /* @__PURE__ */ __name(() => {
        var _loop = /* @__PURE__ */ __name(function(option2) {
          var filterFn = filterOptions.find((o2) => o2.key === option2)?.filterFn;
          if (filterFn) {
            addons = addons.filter(filterFn);
          }
        }, "_loop");
        var { currentSortOption, currentFilterOptions, currentQuery } = useStore2();
        var addons = data();
        for (var option of currentFilterOptions) _loop(option);
        var result = import_fuzzysort.default.go(currentQuery, addons, {
          keys: searchTerms,
          all: true
        });
        return [
          ...result
        ].sort((a, b) => sortOptions.find((o2) => o2.key === currentSortOption)?.compareFn(a.obj, b.obj) ?? 0);
      }, "useFilterResults"),
      FilterBarComponent: /* @__PURE__ */ __name(() => {
        var queryRef = useSearchQuery();
        if (useStore2.getState().currentQuery !== queryRef.query) {
          useStore2.setState({
            currentQuery: queryRef.query
          });
        }
        return /* @__PURE__ */ jsx(FilterAndSortBar, {
          queryRef,
          sortOptions,
          filterOptions,
          currentSortOption: useStore2((state2) => state2.currentSortOption),
          currentFilterOptions: useStore2((state2) => state2.currentFilterOptions),
          onSortChange: useStore2((state2) => state2.setSortOption),
          onFilterChange: useStore2((state2) => state2.toggleFilterOption)
        });
      }, "FilterBarComponent")
    };
  }
  var import_fuzzysort;
  var init_AddonCollectionManager = __esm({
    "src/components/Blazed/Settings/pages/Addon/AddonCollectionManager.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_fuzzysort = __toESM(require_fuzzysort(), 1);
      init_Search();
      init_esm();
      init_FilterAndSortBar();
      __name(createAddonCollectionManager, "createAddonCollectionManager");
    }
  });

  // node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
  function isArrayLike(value) {
    return value != null && typeof value !== "function" && isLength(value.length);
  }
  var init_isArrayLike = __esm({
    "node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs"() {
      init_isLength();
      __name(isArrayLike, "isArrayLike");
    }
  });

  // node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
  function isObject(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  var init_isObject = __esm({
    "node_modules/es-toolkit/dist/compat/predicate/isObject.mjs"() {
      __name(isObject, "isObject");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
  function cloneDeepWith2(obj, customizer) {
    return cloneDeepWith(obj, (value, key, object, stack) => {
      var cloned = customizer?.(value, key, object, stack);
      if (cloned != null) {
        return cloned;
      }
      if (typeof obj !== "object") {
        return void 0;
      }
      switch (Object.prototype.toString.call(obj)) {
        case numberTag:
        case stringTag:
        case booleanTag: {
          var result = new obj.constructor(obj?.valueOf());
          copyProperties(result, obj);
          return result;
        }
        case argumentsTag: {
          var result1 = {};
          copyProperties(result1, obj);
          result1.length = obj.length;
          result1[Symbol.iterator] = obj[Symbol.iterator];
          return result1;
        }
        default: {
          return void 0;
        }
      }
    });
  }
  var init_cloneDeepWith2 = __esm({
    "node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs"() {
      init_cloneDeepWith();
      init_tags();
      __name(cloneDeepWith2, "cloneDeepWith");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
  function cloneDeep2(obj) {
    return cloneDeepWith2(obj);
  }
  var init_cloneDeep2 = __esm({
    "node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs"() {
      init_cloneDeepWith2();
      __name(cloneDeep2, "cloneDeep");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
  function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
    switch (typeof value) {
      case "number": {
        return Number.isInteger(value) && value >= 0 && value < length;
      }
      case "symbol": {
        return false;
      }
      case "string": {
        return IS_UNSIGNED_INTEGER.test(value);
      }
    }
  }
  var IS_UNSIGNED_INTEGER;
  var init_isIndex = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs"() {
      IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
      __name(isIndex, "isIndex");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    if (typeof index === "number" && isArrayLike(object) && isIndex(index) && index < object.length || typeof index === "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  var init_isIterateeCall = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs"() {
      init_isIndex();
      init_isArrayLike();
      init_isObject();
      init_eq();
      __name(isIterateeCall, "isIterateeCall");
    }
  });

  // node_modules/es-toolkit/dist/compat/function/memoize.mjs
  function memoize2(func, resolver) {
    if (typeof func !== "function" || resolver != null && typeof resolver !== "function") {
      throw new TypeError("Expected a function");
    }
    var memoized = /* @__PURE__ */ __name(function memoized1(...args) {
      var key = resolver ? resolver.apply(this, args) : args[0];
      var cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    }, "memoized1");
    var CacheConstructor = memoize2.Cache || Map;
    memoized.cache = new CacheConstructor();
    return memoized;
  }
  var init_memoize2 = __esm({
    "node_modules/es-toolkit/dist/compat/function/memoize.mjs"() {
      __name(memoize2, "memoize");
      memoize2.Cache = Map;
    }
  });

  // node_modules/es-toolkit/dist/compat/object/defaults.mjs
  function defaults(object, ...sources) {
    object = Object(object);
    var objectProto = Object.prototype;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    for (var i2 = 0; i2 < length; i2++) {
      var source = sources[i2];
      var keys = Object.keys(source);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var value = object[key];
        if (value === void 0 || !Object.hasOwn(object, key) && eq(value, objectProto[key])) {
          object[key] = source[key];
        }
      }
    }
    return object;
  }
  var init_defaults = __esm({
    "node_modules/es-toolkit/dist/compat/object/defaults.mjs"() {
      init_isIterateeCall();
      init_eq();
      __name(defaults, "defaults");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs
  function toDefaulted(object, ...sources) {
    var cloned = cloneDeep2(object);
    return defaults(cloned, ...sources);
  }
  var init_toDefaulted = __esm({
    "node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs"() {
      init_cloneDeep2();
      init_defaults();
      __name(toDefaulted, "toDefaulted");
    }
  });

  // node_modules/es-toolkit/dist/compat/index.mjs
  var init_compat = __esm({
    "node_modules/es-toolkit/dist/compat/index.mjs"() {
      init_memoize2();
      init_toDefaulted();
    }
  });

  // node_modules/zustand/esm/middleware.mjs
  function createJSONStorage(getStorage, options) {
    var storage;
    try {
      storage = getStorage();
    } catch (e3) {
      return;
    }
    var persistStorage = {
      getItem: /* @__PURE__ */ __name((name) => {
        var _a;
        var parse = /* @__PURE__ */ __name((str2) => {
          if (str2 === null) {
            return null;
          }
          return JSON.parse(str2, options == null ? void 0 : options.reviver);
        }, "parse");
        var str = (_a = storage.getItem(name)) != null ? _a : null;
        if (str instanceof Promise) {
          return str.then(parse);
        }
        return parse(str);
      }, "getItem"),
      setItem: /* @__PURE__ */ __name((name, newValue) => storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)), "setItem"),
      removeItem: /* @__PURE__ */ __name((name) => storage.removeItem(name), "removeItem")
    };
    return persistStorage;
  }
  var subscribeWithSelectorImpl, subscribeWithSelector, toThenable, persistImpl, persist;
  var init_middleware = __esm({
    "node_modules/zustand/esm/middleware.mjs"() {
      subscribeWithSelectorImpl = /* @__PURE__ */ __name((fn) => (set2, get, api) => {
        var origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options) => {
          var listener = selector;
          if (optListener) {
            var equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
            var currentSlice = selector(api.getState());
            listener = /* @__PURE__ */ __name((state2) => {
              var nextSlice = selector(state2);
              if (!equalityFn(currentSlice, nextSlice)) {
                var previousSlice = currentSlice;
                optListener(currentSlice = nextSlice, previousSlice);
              }
            }, "listener");
            if (options == null ? void 0 : options.fireImmediately) {
              optListener(currentSlice, currentSlice);
            }
          }
          return origSubscribe(listener);
        };
        var initialState = fn(set2, get, api);
        return initialState;
      }, "subscribeWithSelectorImpl");
      subscribeWithSelector = subscribeWithSelectorImpl;
      __name(createJSONStorage, "createJSONStorage");
      toThenable = /* @__PURE__ */ __name((fn) => (input) => {
        try {
          var result = fn(input);
          if (result instanceof Promise) {
            return result;
          }
          return {
            then(onFulfilled) {
              return toThenable(onFulfilled)(result);
            },
            catch(_onRejected) {
              return this;
            }
          };
        } catch (e3) {
          return {
            then(_onFulfilled) {
              return this;
            },
            catch(onRejected) {
              return toThenable(onRejected)(e3);
            }
          };
        }
      }, "toThenable");
      persistImpl = /* @__PURE__ */ __name((config, baseOptions) => (set2, get, api) => {
        var options = {
          storage: createJSONStorage(() => localStorage),
          partialize: /* @__PURE__ */ __name((state2) => state2, "partialize"),
          version: 0,
          merge: /* @__PURE__ */ __name((persistedState, currentState) => ({
            ...currentState,
            ...persistedState
          }), "merge"),
          ...baseOptions
        };
        var hasHydrated = false;
        var hydrationListeners = /* @__PURE__ */ new Set();
        var finishHydrationListeners = /* @__PURE__ */ new Set();
        var storage = options.storage;
        if (!storage) {
          return config((...args) => {
            console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
            set2(...args);
          }, get, api);
        }
        var setItem2 = /* @__PURE__ */ __name(() => {
          var state2 = options.partialize({
            ...get()
          });
          return storage.setItem(options.name, {
            state: state2,
            version: options.version
          });
        }, "setItem");
        var savedSetState = api.setState;
        api.setState = (state2, replace) => {
          savedSetState(state2, replace);
          void setItem2();
        };
        var configResult = config((...args) => {
          set2(...args);
          void setItem2();
        }, get, api);
        api.getInitialState = () => configResult;
        var stateFromStorage;
        var hydrate = /* @__PURE__ */ __name(() => {
          var _a, _b;
          if (!storage) return;
          hasHydrated = false;
          hydrationListeners.forEach((cb) => {
            var _a2;
            return cb((_a2 = get()) != null ? _a2 : configResult);
          });
          var postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
          return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
            if (deserializedStorageValue) {
              if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                if (options.migrate) {
                  var migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                  if (migration instanceof Promise) {
                    return migration.then((result) => [
                      true,
                      result
                    ]);
                  }
                  return [
                    true,
                    migration
                  ];
                }
                console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
              } else {
                return [
                  false,
                  deserializedStorageValue.state
                ];
              }
            }
            return [
              false,
              void 0
            ];
          }).then((migrationResult) => {
            var _a2;
            var [migrated, migratedState] = migrationResult;
            stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
            set2(stateFromStorage, true);
            if (migrated) {
              return setItem2();
            }
          }).then(() => {
            postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
            stateFromStorage = get();
            hasHydrated = true;
            finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
          }).catch((e3) => {
            postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e3);
          });
        }, "hydrate");
        api.persist = {
          setOptions: /* @__PURE__ */ __name((newOptions) => {
            options = {
              ...options,
              ...newOptions
            };
            if (newOptions.storage) {
              storage = newOptions.storage;
            }
          }, "setOptions"),
          clearStorage: /* @__PURE__ */ __name(() => {
            storage == null ? void 0 : storage.removeItem(options.name);
          }, "clearStorage"),
          getOptions: /* @__PURE__ */ __name(() => options, "getOptions"),
          rehydrate: /* @__PURE__ */ __name(() => hydrate(), "rehydrate"),
          hasHydrated: /* @__PURE__ */ __name(() => hasHydrated, "hasHydrated"),
          onHydrate: /* @__PURE__ */ __name((cb) => {
            hydrationListeners.add(cb);
            return () => {
              hydrationListeners.delete(cb);
            };
          }, "onHydrate"),
          onFinishHydration: /* @__PURE__ */ __name((cb) => {
            finishHydrationListeners.add(cb);
            return () => {
              finishHydrationListeners.delete(cb);
            };
          }, "onFinishHydration")
        };
        if (!options.skipHydration) {
          hydrate();
        }
        return stateFromStorage || configResult;
      }, "persistImpl");
      persist = persistImpl;
    }
  });

  // node_modules/immer/dist/immer.mjs
  function die(error, ...args) {
    if (true) {
      var e3 = errors[error];
      var msg = typeof e3 === "function" ? e3.apply(null, args) : e3;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
  }
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  function isPlainObject(value) {
    if (!value || typeof value !== "object") return false;
    var proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object) return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0) {
      Reflect.ownKeys(obj).forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    var state2 = thing[DRAFT_STATE];
    return state2 ? state2.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    var t4 = getArchtype(thing);
    if (t4 === 2) thing.set(propOrOldValue, value);
    else if (t4 === 3) {
      thing.add(value);
    } else thing[propOrOldValue] = value;
  }
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state2) {
    return state2.copy_ || state2.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base)) return Array.prototype.slice.call(base);
    var isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      var descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      var keys = Reflect.ownKeys(descriptors);
      for (var i2 = 0; i2 < keys.length; i2++) {
        var key = keys[i2];
        var desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set) descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
      }
      return Object.create(getPrototypeOf(base), descriptors);
    } else {
      var proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return {
          ...base
        };
      }
      var obj = Object.create(proto);
      return Object.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep) Object.entries(obj).forEach(([key, value]) => freeze(value, true));
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }
  function getPlugin(pluginKey) {
    var plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer22) {
    return currentScope = createScope(currentScope, immer22);
  }
  function revokeDraft(draft) {
    var state2 = draft[DRAFT_STATE];
    if (state2.type_ === 0 || state2.type_ === 1) state2.revoke_();
    else state2.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    var baseDraft = scope.drafts_[0];
    var isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_) maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value)) return value;
    var state2 = value[DRAFT_STATE];
    if (!state2) {
      each(value, (key, childValue) => finalizeProperty(rootScope, state2, value, key, childValue, path));
      return value;
    }
    if (state2.scope_ !== rootScope) return value;
    if (!state2.modified_) {
      maybeFreeze(rootScope, state2.base_, true);
      return state2.base_;
    }
    if (!state2.finalized_) {
      state2.finalized_ = true;
      state2.scope_.unfinalizedDrafts_--;
      var result = state2.copy_;
      var resultEach = result;
      var isSet2 = false;
      if (state2.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(resultEach, (key, childValue) => finalizeProperty(rootScope, state2, result, key, childValue, path, isSet2));
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(state2, path, rootScope.patches_, rootScope.inversePatches_);
      }
    }
    return state2.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (childValue === targetObject) die(5);
    if (isDraft(childValue)) {
      var path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      var res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop)) maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    var isArray = Array.isArray(base);
    var state2 = {
      type_: isArray ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    var target = state2;
    var traps = objectTraps;
    if (isArray) {
      target = [
        state2
      ];
      traps = arrayTraps;
    }
    var { revoke, proxy } = Proxy.revocable(target, traps);
    state2.draft_ = proxy;
    state2.revoke_ = revoke;
    return proxy;
  }
  function peek(draft, prop) {
    var state2 = draft[DRAFT_STATE];
    var source = state2 ? latest(state2) : draft;
    return source[prop];
  }
  function readPropFromProto(state2, source, prop) {
    var desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state2.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    var proto = getPrototypeOf(source);
    while (proto) {
      var desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc) return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state2) {
    if (!state2.modified_) {
      state2.modified_ = true;
      if (state2.parent_) {
        markChanged(state2.parent_);
      }
    }
  }
  function prepareCopy(state2) {
    if (!state2.copy_) {
      state2.copy_ = shallowCopy(state2.base_, state2.scope_.immer_.useStrictShallowCopy_);
    }
  }
  function createProxy2(value, parent) {
    var draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    var scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    var state2 = value[DRAFT_STATE];
    var copy;
    if (state2) {
      if (!state2.modified_) return state2.base_;
      state2.finalized_ = true;
      copy = shallowCopy(value, state2.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    });
    if (state2) {
      state2.finalized_ = false;
    }
    return copy;
  }
  var NOTHING, DRAFTABLE, DRAFT_STATE, errors, getPrototypeOf, objectCtorString, plugins, currentScope, objectTraps, arrayTraps, Immer2, immer, produce, produceWithPatches, setAutoFreeze, setUseStrictShallowCopy, applyPatches, createDraft, finishDraft;
  var init_immer = __esm({
    "node_modules/immer/dist/immer.mjs"() {
      init_class_call_check();
      init_create_class();
      NOTHING = Symbol.for("immer-nothing");
      DRAFTABLE = Symbol.for("immer-draftable");
      DRAFT_STATE = Symbol.for("immer-state");
      errors = true ? [
        // All error codes, starting by 0:
        function(plugin) {
          return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
        },
        function(thing) {
          return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
        },
        "This object has been frozen and should not be mutated",
        function(data) {
          return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
        },
        "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
        "Immer forbids circular references",
        "The first or second argument to `produce` must be a function",
        "The third argument to `produce` must be a function or undefined",
        "First argument to `createDraft` must be a plain object, an array, or an immerable object",
        "First argument to `finishDraft` must be a draft returned by `createDraft`",
        function(thing) {
          return `'current' expects a draft, got: ${thing}`;
        },
        "Object.defineProperty() cannot be used on an Immer draft",
        "Object.setPrototypeOf() cannot be used on an Immer draft",
        "Immer only supports deleting array indices",
        "Immer only supports setting array indices and the 'length' property",
        function(thing) {
          return `'original' expects a draft, got: ${thing}`;
        }
      ] : [];
      __name(die, "die");
      getPrototypeOf = Object.getPrototypeOf;
      __name(isDraft, "isDraft");
      __name(isDraftable, "isDraftable");
      objectCtorString = Object.prototype.constructor.toString();
      __name(isPlainObject, "isPlainObject");
      __name(each, "each");
      __name(getArchtype, "getArchtype");
      __name(has, "has");
      __name(set, "set");
      __name(is, "is");
      __name(isMap, "isMap");
      __name(isSet, "isSet");
      __name(latest, "latest");
      __name(shallowCopy, "shallowCopy");
      __name(freeze, "freeze");
      __name(dontMutateFrozenCollections, "dontMutateFrozenCollections");
      __name(isFrozen, "isFrozen");
      plugins = {};
      __name(getPlugin, "getPlugin");
      __name(getCurrentScope, "getCurrentScope");
      __name(createScope, "createScope");
      __name(usePatchesInScope, "usePatchesInScope");
      __name(revokeScope, "revokeScope");
      __name(leaveScope, "leaveScope");
      __name(enterScope, "enterScope");
      __name(revokeDraft, "revokeDraft");
      __name(processResult, "processResult");
      __name(finalize, "finalize");
      __name(finalizeProperty, "finalizeProperty");
      __name(maybeFreeze, "maybeFreeze");
      __name(createProxyProxy, "createProxyProxy");
      objectTraps = {
        get(state2, prop) {
          if (prop === DRAFT_STATE) return state2;
          var source = latest(state2);
          if (!has(source, prop)) {
            return readPropFromProto(state2, source, prop);
          }
          var value = source[prop];
          if (state2.finalized_ || !isDraftable(value)) {
            return value;
          }
          if (value === peek(state2.base_, prop)) {
            prepareCopy(state2);
            return state2.copy_[prop] = createProxy2(value, state2);
          }
          return value;
        },
        has(state2, prop) {
          return prop in latest(state2);
        },
        ownKeys(state2) {
          return Reflect.ownKeys(latest(state2));
        },
        set(state2, prop, value) {
          var desc = getDescriptorFromProto(latest(state2), prop);
          if (desc?.set) {
            desc.set.call(state2.draft_, value);
            return true;
          }
          if (!state2.modified_) {
            var current2 = peek(latest(state2), prop);
            var currentState = current2?.[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
              state2.copy_[prop] = value;
              state2.assigned_[prop] = false;
              return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state2.base_, prop))) return true;
            prepareCopy(state2);
            markChanged(state2);
          }
          if (state2.copy_[prop] === value && // special case: handle new props with value 'undefined'
          (value !== void 0 || prop in state2.copy_) || // special case: NaN
          Number.isNaN(value) && Number.isNaN(state2.copy_[prop])) return true;
          state2.copy_[prop] = value;
          state2.assigned_[prop] = true;
          return true;
        },
        deleteProperty(state2, prop) {
          if (peek(state2.base_, prop) !== void 0 || prop in state2.base_) {
            state2.assigned_[prop] = false;
            prepareCopy(state2);
            markChanged(state2);
          } else {
            delete state2.assigned_[prop];
          }
          if (state2.copy_) {
            delete state2.copy_[prop];
          }
          return true;
        },
        // Note: We never coerce `desc.value` into an Immer draft, because we can't make
        // the same guarantee in ES5 mode.
        getOwnPropertyDescriptor(state2, prop) {
          var owner = latest(state2);
          var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
          if (!desc) return desc;
          return {
            writable: true,
            configurable: state2.type_ !== 1 || prop !== "length",
            enumerable: desc.enumerable,
            value: owner[prop]
          };
        },
        defineProperty() {
          die(11);
        },
        getPrototypeOf(state2) {
          return getPrototypeOf(state2.base_);
        },
        setPrototypeOf() {
          die(12);
        }
      };
      arrayTraps = {};
      each(objectTraps, (key, fn) => {
        arrayTraps[key] = function() {
          arguments[0] = arguments[0][0];
          return fn.apply(this, arguments);
        };
      });
      arrayTraps.deleteProperty = function(state2, prop) {
        if (isNaN(parseInt(prop))) die(13);
        return arrayTraps.set.call(this, state2, prop, void 0);
      };
      arrayTraps.set = function(state2, prop, value) {
        if (prop !== "length" && isNaN(parseInt(prop))) die(14);
        return objectTraps.set.call(this, state2[0], prop, value, state2[0]);
      };
      __name(peek, "peek");
      __name(readPropFromProto, "readPropFromProto");
      __name(getDescriptorFromProto, "getDescriptorFromProto");
      __name(markChanged, "markChanged");
      __name(prepareCopy, "prepareCopy");
      Immer2 = /* @__PURE__ */ function() {
        "use strict";
        function Immer22(config) {
          _class_call_check(this, Immer22);
          this.autoFreeze_ = true;
          this.useStrictShallowCopy_ = false;
          this.produce = (base, recipe, patchListener) => {
            if (typeof base === "function" && typeof recipe !== "function") {
              var defaultBase = recipe;
              recipe = base;
              var self = this;
              return /* @__PURE__ */ __name(function curriedProduce(base2 = defaultBase, ...args) {
                return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
              }, "curriedProduce");
            }
            if (typeof recipe !== "function") die(6);
            if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
            var result;
            if (isDraftable(base)) {
              var scope = enterScope(this);
              var proxy = createProxy2(base, void 0);
              var hasError = true;
              try {
                result = recipe(proxy);
                hasError = false;
              } finally {
                if (hasError) revokeScope(scope);
                else leaveScope(scope);
              }
              usePatchesInScope(scope, patchListener);
              return processResult(result, scope);
            } else if (!base || typeof base !== "object") {
              result = recipe(base);
              if (result === void 0) result = base;
              if (result === NOTHING) result = void 0;
              if (this.autoFreeze_) freeze(result, true);
              if (patchListener) {
                var p2 = [];
                var ip = [];
                getPlugin("Patches").generateReplacementPatches_(base, result, p2, ip);
                patchListener(p2, ip);
              }
              return result;
            } else die(1, base);
          };
          this.produceWithPatches = (base, recipe) => {
            if (typeof base === "function") {
              return (state2, ...args) => this.produceWithPatches(state2, (draft) => base(draft, ...args));
            }
            var patches, inversePatches;
            var result = this.produce(base, recipe, (p2, ip) => {
              patches = p2;
              inversePatches = ip;
            });
            return [
              result,
              patches,
              inversePatches
            ];
          };
          if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
          if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        }
        __name(Immer22, "Immer2");
        _create_class(Immer22, [
          {
            key: "createDraft",
            value: /* @__PURE__ */ __name(function createDraft2(base) {
              if (!isDraftable(base)) die(8);
              if (isDraft(base)) base = current(base);
              var scope = enterScope(this);
              var proxy = createProxy2(base, void 0);
              proxy[DRAFT_STATE].isManual_ = true;
              leaveScope(scope);
              return proxy;
            }, "createDraft")
          },
          {
            key: "finishDraft",
            value: /* @__PURE__ */ __name(function finishDraft2(draft, patchListener) {
              var state2 = draft && draft[DRAFT_STATE];
              if (!state2 || !state2.isManual_) die(9);
              var { scope_: scope } = state2;
              usePatchesInScope(scope, patchListener);
              return processResult(void 0, scope);
            }, "finishDraft")
          },
          {
            /**
            * Pass true to automatically freeze all copies created by Immer.
            *
            * By default, auto-freezing is enabled.
            */
            key: "setAutoFreeze",
            value: /* @__PURE__ */ __name(function setAutoFreeze2(value) {
              this.autoFreeze_ = value;
            }, "setAutoFreeze")
          },
          {
            /**
            * Pass true to enable strict shallow copy.
            *
            * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
            */
            key: "setUseStrictShallowCopy",
            value: /* @__PURE__ */ __name(function setUseStrictShallowCopy2(value) {
              this.useStrictShallowCopy_ = value;
            }, "setUseStrictShallowCopy")
          },
          {
            key: "applyPatches",
            value: /* @__PURE__ */ __name(function applyPatches2(base, patches) {
              var i2;
              for (i2 = patches.length - 1; i2 >= 0; i2--) {
                var patch = patches[i2];
                if (patch.path.length === 0 && patch.op === "replace") {
                  base = patch.value;
                  break;
                }
              }
              if (i2 > -1) {
                patches = patches.slice(i2 + 1);
              }
              var applyPatchesImpl = getPlugin("Patches").applyPatches_;
              if (isDraft(base)) {
                return applyPatchesImpl(base, patches);
              }
              return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
            }, "applyPatches")
          }
        ]);
        return Immer22;
      }();
      __name(createProxy2, "createProxy");
      __name(current, "current");
      __name(currentImpl, "currentImpl");
      immer = new Immer2();
      produce = immer.produce;
      produceWithPatches = immer.produceWithPatches.bind(immer);
      setAutoFreeze = immer.setAutoFreeze.bind(immer);
      setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
      applyPatches = immer.applyPatches.bind(immer);
      createDraft = immer.createDraft.bind(immer);
      finishDraft = immer.finishDraft.bind(immer);
    }
  });

  // node_modules/zustand/esm/middleware/immer.mjs
  var immerImpl, immer2;
  var init_immer2 = __esm({
    "node_modules/zustand/esm/middleware/immer.mjs"() {
      init_immer();
      immerImpl = /* @__PURE__ */ __name((initializer) => (set2, get, store) => {
        store.setState = (updater, replace, ...args) => {
          var nextState = typeof updater === "function" ? produce(updater) : updater;
          return set2(nextState, replace, ...args);
        };
        return initializer(store.setState, get, store);
      }, "immerImpl");
      immer2 = immerImpl;
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/toasts/index.tsx
  var context, meta, definePlugin, definePluginSettings, logger4, patcher;
  var init_toasts2 = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/toasts/index.tsx"() {
      init_shared();
      context = getPluginContext("toasts");
      ({ meta, definePlugin, definePluginSettings, logger: logger4, patcher } = context);
    }
  });

  // globals:react-native-reanimated
  var require_react_native_reanimated = __commonJS({
    "globals:react-native-reanimated"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native-reanimated"];
    }
  });

  // globals:react-native-gesture-handler
  var require_react_native_gesture_handler = __commonJS({
    "globals:react-native-gesture-handler"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native-gesture-handler"];
    }
  });

  // src/plugins/_api/toasts/components/ToastContentRenderer.tsx
  function ToastIcon({ icon }) {
    if (!icon) {
      return null;
    }
    if (typeof icon === "number" || typeof icon === "object" && "uri" in icon) {
      return /* @__PURE__ */ jsx(import_react_native20.Image, {
        style: {
          width: 18,
          height: 18
        },
        resizeMode: "contain",
        source: icon
      });
    }
    if (/* @__PURE__ */ (0, import_react14.isValidElement)(icon) && typeof icon.type === "object") {
      return icon;
    }
    var Icon = icon;
    return /* @__PURE__ */ jsx(Icon, {});
  }
  function GenericToast({ toast }) {
    var [text, icon] = toast.use(useShallow((t4) => [
      t4.text,
      t4.icon
    ]));
    var [isMultiline, setIsMultiline] = (0, import_react14.useState)(false);
    var onTextLayout = /* @__PURE__ */ __name(({ nativeEvent }) => {
      setIsMultiline(nativeEvent.lines.length > 1);
    }, "onTextLayout");
    return /* @__PURE__ */ jsx(import_react_native20.View, {
      style: [
        isMultiline && {
          paddingHorizontal: 12
        }
      ],
      children: /* @__PURE__ */ jsxs(import_react_native20.View, {
        style: {
          flexDirection: "row",
          alignItems: "center",
          gap: 8
        },
        children: [
          icon && /* @__PURE__ */ jsx(ToastIcon, {
            icon
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "text-sm/semibold",
            onTextLayout,
            children: text
          })
        ]
      })
    });
  }
  function CustomToast({ toast }) {
    var CustomComponent = toast.use((t4) => t4.render);
    var { updateToast, hideToast } = useToastStore(useShallow((state2) => ({
      updateToast: state2.updateToast,
      hideToast: state2.hideToast
    })));
    var controller = {
      hide: /* @__PURE__ */ __name(() => {
        hideToast(toast.id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((config) => {
        updateToast({
          ...config,
          id: toast.id
        });
        return controller;
      }, "update")
    };
    return /* @__PURE__ */ jsx(CustomComponent, {
      controller
    });
  }
  function ToastContentRenderer({ toast }) {
    if ("text" in toast) {
      return /* @__PURE__ */ jsx(GenericToast, {
        toast
      });
    }
    if ("render" in toast && toast.render) {
      return /* @__PURE__ */ jsx(CustomToast, {
        toast
      });
    }
    throw new Error("Invalid toast type");
  }
  var import_react14, import_react_native20;
  var init_ToastContentRenderer = __esm({
    "src/plugins/_api/toasts/components/ToastContentRenderer.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_useToastStore();
      import_react14 = __toESM(require_react(), 1);
      import_react_native20 = __toESM(require_react_native(), 1);
      init_shallow3();
      __name(ToastIcon, "ToastIcon");
      __name(GenericToast, "GenericToast");
      __name(CustomToast, "CustomToast");
      __name(ToastContentRenderer, "ToastContentRenderer");
    }
  });

  // src/plugins/_api/toasts/components/Toast.tsx
  var import_react_native_reanimated, import_react_native_gesture_handler, import_react_native21, import_react15, OFFSCREEN_LENGTH, useStyles2, _worklet_10575445024011_init_data, _worklet_12707892542287_init_data, _worklet_2394815801719_init_data, _worklet_1148071943580_init_data, _worklet_12633554293434_init_data, _worklet_14643467246605_init_data, _worklet_3070931472053_init_data, _worklet_1700014798715_init_data, Toast_default;
  var init_Toast = __esm({
    "src/plugins/_api/toasts/components/Toast.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native_reanimated = __toESM(require_react_native_reanimated(), 1);
      import_react_native_gesture_handler = __toESM(require_react_native_gesture_handler(), 1);
      import_react_native21 = __toESM(require_react_native(), 1);
      init_styles();
      init_libraries();
      import_react15 = __toESM(require_react(), 1);
      init_useToastStore();
      init_ToastContentRenderer();
      init_PressableScale();
      OFFSCREEN_LENGTH = 800;
      useStyles2 = createStyles(() => ({
        container: {
          maxWidth: "90%",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          shadowColor: tokens.colors.TOAST_CONTAINER_SHADOW_COLOR
        },
        contentContainer: {
          flexShrink: 1,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: tokens.radii.xxl,
          padding: tokens.spacing.PX_8,
          paddingHorizontal: tokens.spacing.PX_12,
          backgroundColor: tokens.colors.TOAST_BG,
          borderColor: tokens.colors.BORDER_SUBTLE,
          borderWidth: 1,
          ...tokens.shadows.SHADOW_HIGH
        }
      }));
      _worklet_10575445024011_init_data = {
        code: "function ToastTsx1(){const{translationX,translationY}=this.__closure;return{transform:[{translateX:translationX.value},{translateY:translationY.value}]};}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx1","translationX","translationY","__closure","transform","translateX","value","translateY"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAwC0C,SAAAA,UAAA,QAAAC,YAAA,CAAAC,YAAA,OAAAC,SAAA,OAAK,CACnCC,SAAS,CAAE,CACP,CACIC,UAAU,CAAEJ,YAAY,CAACK,KAC7B,CAAC,CACD,CACIC,UAAU,CAAEL,YAAY,CAACI,KAC7B,CAAC,CAET,CAAC","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_12707892542287_init_data = {
        code: "function ToastTsx2(){const{toast,translationX,width,OFFSCREEN_LENGTH,withTiming,runOnJS,onceOnDismiss}=this.__closure;var willDisappear=toast.dismissible&&(translationX.value>width/4||translationX.value<-width/4);var direction=Math.sign(translationX.value);var position=willDisappear?OFFSCREEN_LENGTH*direction:0;translationX.value=withTiming(position,undefined,function(finished){if(finished&&willDisappear){runOnJS(onceOnDismiss)();}});}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx2","toast","translationX","width","OFFSCREEN_LENGTH","withTiming","runOnJS","onceOnDismiss","__closure","willDisappear","dismissible","value","direction","Math","sign","position","undefined","finished"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA2Da,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,KAAA,CAAAC,gBAAA,CAAAC,UAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACT,GAAI,CAAAC,aAAa,CAAGR,KAAK,CAACS,WAAW,GAAKR,YAAY,CAACS,KAAK,CAAGR,KAAK,CAAG,CAAC,EAAID,YAAY,CAACS,KAAK,CAAG,CAACR,KAAK,CAAG,CAAC,CAAC,CAC5G,GAAI,CAAAS,SAAS,CAAGC,IAAI,CAACC,IAAI,CAACZ,YAAY,CAACS,KAAK,CAAC,CAC7C,GAAI,CAAAI,QAAQ,CAAGN,aAAa,CAAGL,gBAAgB,CAAGQ,SAAS,CAAG,CAAC,CAC/DV,YAAY,CAACS,KAAK,CAAGN,UAAU,CAACU,QAAQ,CAAEC,SAAS,CAAG,SAAAC,QAAQ,CAAG,CAC7D,GAAIA,QAAQ,EAAIR,aAAa,CAAE,CAC3BH,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_2394815801719_init_data = {
        code: "function ToastTsx3(event){const{translationX}=this.__closure;translationX.value+=event.changeX;}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx3","event","translationX","__closure","value","changeX"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDwG,SAAAA,SAAQA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,CACxGD,YAAY,CAACE,KAAK,EAAIH,KAAK,CAACI,OAAO,CACvC","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_1148071943580_init_data = {
        code: "function ToastTsx4(e){const{translationX}=this.__closure;return translationX.value=e.translationX;}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx4","e","translationX","__closure","value"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDqD,QAAC,CAAAA,UAAAC,CAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAIH,CAAC,CAAAC,YAAA","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_12633554293434_init_data = {
        code: "function ToastTsx5(finished){const{willDisappear,runOnJS,onceOnDismiss}=this.__closure;if(finished&&willDisappear){runOnJS(onceOnDismiss)();}}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx5","finished","willDisappear","runOnJS","onceOnDismiss","__closure"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA+D8D,SAAAA,UAAQC,QAAG,QAAAC,aAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC7D,GAAIJ,QAAQ,EAAIC,aAAa,CAAE,CAC3BC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_14643467246605_init_data = {
        code: "function ToastTsx6(){const{toast,translationY,withTiming,OFFSCREEN_LENGTH,runOnJS,onceOnDismiss}=this.__closure;if(!toast.dismissible)return;translationY.value=withTiming(-OFFSCREEN_LENGTH,undefined,function(finished){if(finished){runOnJS(onceOnDismiss)();}});}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx6","toast","translationY","withTiming","OFFSCREEN_LENGTH","runOnJS","onceOnDismiss","__closure","dismissible","value","undefined","finished"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEmJ,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,UAAA,CAAAC,gBAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC/I,GAAI,CAACN,KAAK,CAACO,WAAW,CAAE,OACxBN,YAAY,CAACO,KAAK,CAAGN,UAAU,CAAC,CAACC,gBAAgB,CAAEM,SAAS,CAAG,SAAAC,QAAQ,CAAG,CACtE,GAAIA,QAAQ,CAAE,CACVN,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_3070931472053_init_data = {
        code: "function ToastTsx7(event){const{translationY}=this.__closure;return translationY.value=event.y;}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx7","event","translationY","__closure","value","y"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEuG,SAAAA,SAAKA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAGH,KAAM,CAAAI,CAAA","ignoreList":[]}',
        version: "3.18.0"
      };
      _worklet_1700014798715_init_data = {
        code: "function ToastTsx8(finished){const{runOnJS,onceOnDismiss}=this.__closure;if(finished){runOnJS(onceOnDismiss)();}}",
        location: "/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx8","finished","runOnJS","onceOnDismiss","__closure"],"sources":["/home/blaze/coding/discord/redux/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAuEuE,SAAAA,UAAQC,QAAG,QAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACtE,GAAIH,QAAQ,CAAE,CACVC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.18.0"
      };
      Toast_default = /* @__PURE__ */ (0, import_react15.memo)(/* @__PURE__ */ __name(function Toast({
        toast
      }) {
        var styles = useStyles2();
        var {
          width
        } = (0, import_react_native21.useWindowDimensions)();
        var hideToast = useToastStore((s) => s.hideToast);
        var translationX = (0, import_react_native_reanimated.useSharedValue)(0);
        var translationY = (0, import_react_native_reanimated.useSharedValue)(0);
        var animatedStyles = (0, import_react_native_reanimated.useAnimatedStyle)(function() {
          var _e = [new globalThis.Error(), -3, -27];
          var ToastTsx1 = /* @__PURE__ */ __name(() => ({
            transform: [{
              translateX: translationX.value
            }, {
              translateY: translationY.value
            }]
          }), "ToastTsx1");
          ToastTsx1.__closure = {
            translationX,
            translationY
          };
          ToastTsx1.__workletHash = 10575445024011;
          ToastTsx1.__initData = _worklet_10575445024011_init_data;
          ToastTsx1.__stackDetails = _e;
          return ToastTsx1;
        }());
        var onceOnDismiss = (0, import_react15.useCallback)(() => {
          toast.onDismiss?.();
          hideToast(toast.id);
        }, [hideToast, toast]);
        var pan = import_react_native_gesture_handler.Gesture.Pan().minDistance(20).onStart(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx4 = /* @__PURE__ */ __name((e3) => translationX.value = e3.translationX, "ToastTsx4");
          ToastTsx4.__closure = {
            translationX
          };
          ToastTsx4.__workletHash = 1148071943580;
          ToastTsx4.__initData = _worklet_1148071943580_init_data;
          ToastTsx4.__stackDetails = _e;
          return ToastTsx4;
        }()).onChange(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx3 = /* @__PURE__ */ __name(function(event) {
            translationX.value += event.changeX;
          }, "ToastTsx3");
          ToastTsx3.__closure = {
            translationX
          };
          ToastTsx3.__workletHash = 2394815801719;
          ToastTsx3.__initData = _worklet_2394815801719_init_data;
          ToastTsx3.__stackDetails = _e;
          return ToastTsx3;
        }()).onEnd(function() {
          var _e = [new globalThis.Error(), -8, -27];
          var ToastTsx2 = /* @__PURE__ */ __name(function() {
            var willDisappear = toast.dismissible && (translationX.value > width / 4 || translationX.value < -width / 4);
            var direction = Math.sign(translationX.value);
            var position = willDisappear ? OFFSCREEN_LENGTH * direction : 0;
            translationX.value = (0, import_react_native_reanimated.withTiming)(position, void 0, function() {
              var _e2 = [new globalThis.Error(), -4, -27];
              var ToastTsx5 = /* @__PURE__ */ __name(function(finished) {
                if (finished && willDisappear) {
                  (0, import_react_native_reanimated.runOnJS)(onceOnDismiss)();
                }
              }, "ToastTsx5");
              ToastTsx5.__closure = {
                willDisappear,
                runOnJS: import_react_native_reanimated.runOnJS,
                onceOnDismiss
              };
              ToastTsx5.__workletHash = 12633554293434;
              ToastTsx5.__initData = _worklet_12633554293434_init_data;
              ToastTsx5.__stackDetails = _e2;
              return ToastTsx5;
            }());
          }, "ToastTsx2");
          ToastTsx2.__closure = {
            toast,
            translationX,
            width,
            OFFSCREEN_LENGTH,
            withTiming: import_react_native_reanimated.withTiming,
            runOnJS: import_react_native_reanimated.runOnJS,
            onceOnDismiss
          };
          ToastTsx2.__workletHash = 12707892542287;
          ToastTsx2.__initData = _worklet_12707892542287_init_data;
          ToastTsx2.__stackDetails = _e;
          return ToastTsx2;
        }());
        var fling = import_react_native_gesture_handler.Gesture.Fling().simultaneousWithExternalGesture(pan).direction(import_react_native_gesture_handler.Directions.UP).onStart(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx7 = /* @__PURE__ */ __name((event) => translationY.value = event.y, "ToastTsx7");
          ToastTsx7.__closure = {
            translationY
          };
          ToastTsx7.__workletHash = 3070931472053;
          ToastTsx7.__initData = _worklet_3070931472053_init_data;
          ToastTsx7.__stackDetails = _e;
          return ToastTsx7;
        }()).onEnd(function() {
          var _e = [new globalThis.Error(), -7, -27];
          var ToastTsx6 = /* @__PURE__ */ __name(function() {
            if (!toast.dismissible) return;
            translationY.value = (0, import_react_native_reanimated.withTiming)(-OFFSCREEN_LENGTH, void 0, function() {
              var _e2 = [new globalThis.Error(), -3, -27];
              var ToastTsx8 = /* @__PURE__ */ __name(function(finished) {
                if (finished) {
                  (0, import_react_native_reanimated.runOnJS)(onceOnDismiss)();
                }
              }, "ToastTsx8");
              ToastTsx8.__closure = {
                runOnJS: import_react_native_reanimated.runOnJS,
                onceOnDismiss
              };
              ToastTsx8.__workletHash = 1700014798715;
              ToastTsx8.__initData = _worklet_1700014798715_init_data;
              ToastTsx8.__stackDetails = _e2;
              return ToastTsx8;
            }());
          }, "ToastTsx6");
          ToastTsx6.__closure = {
            toast,
            translationY,
            withTiming: import_react_native_reanimated.withTiming,
            OFFSCREEN_LENGTH,
            runOnJS: import_react_native_reanimated.runOnJS,
            onceOnDismiss
          };
          ToastTsx6.__workletHash = 14643467246605;
          ToastTsx6.__initData = _worklet_14643467246605_init_data;
          ToastTsx6.__stackDetails = _e;
          return ToastTsx6;
        }());
        var setupSpringMotion = /* @__PURE__ */ __name((spring) => spring.mass(0.35).damping(15).stiffness(350).restDisplacementThreshold(0.1).restSpeedThreshold(0.1), "setupSpringMotion");
        return /* @__PURE__ */ jsx(import_react_native_gesture_handler.GestureDetector, {
          gesture: import_react_native_gesture_handler.Gesture.Simultaneous(pan, fling),
          children: /* @__PURE__ */ jsx(import_react_native_reanimated.default.View, {
            pointerEvents: "box-none",
            layout: import_react_native_reanimated.LinearTransition.springify().duration(500).dampingRatio(0.5),
            entering: setupSpringMotion(import_react_native_reanimated.FadeInUp.springify()),
            exiting: setupSpringMotion(import_react_native_reanimated.FadeOutUp.springify()),
            children: /* @__PURE__ */ jsx(PressableScale_default, {
              pointerEvents: "box-none",
              disabled: !toast.onPress,
              onPress: toast.onPress,
              children: /* @__PURE__ */ jsx(import_react_native_reanimated.default.View, {
                style: [animatedStyles, styles.container, toast.contentContainerStyle],
                children: /* @__PURE__ */ jsx(import_react_native21.View, {
                  style: styles.contentContainer,
                  children: /* @__PURE__ */ jsx(ToastContentRenderer, {
                    toast
                  })
                })
              })
            })
          })
        });
      }, "Toast"));
    }
  });

  // src/metro/common/stores.ts
  var stores_exports = {};
  __export(stores_exports, {
    ChannelStore: () => ChannelStore,
    DeveloperExperimentStore: () => DeveloperExperimentStore,
    EmojiStore: () => EmojiStore,
    GuildStore: () => GuildStore,
    PermissionStore: () => PermissionStore,
    ThemeStore: () => ThemeStore,
    ToastStore: () => ToastStore,
    UserStore: () => UserStore,
    byStoreName: () => byStoreName,
    getStore: () => getStore
  });
  function getStore(name, resolver) {
    return lookup(byStoreName(name, {
      checkEsmDefault: true
    })).asLazy(resolver);
  }
  var byStoreName, UserStore, ChannelStore, GuildStore, DeveloperExperimentStore, ToastStore, PermissionStore, EmojiStore, ThemeStore;
  var init_stores = __esm({
    "src/metro/common/stores.ts"() {
      "use strict";
      init_filters();
      init_api();
      byStoreName = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([name, m2]) => m2.constructor?.displayName === name && m2.getName() === name, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byStoreName(${arg})`, "stringify")
      }));
      __name(getStore, "getStore");
      UserStore = getStore("UserStore", (m2) => UserStore = m2);
      ChannelStore = getStore("ChannelStore", (m2) => ChannelStore = m2);
      GuildStore = getStore("GuildStore", (m2) => GuildStore = m2);
      DeveloperExperimentStore = getStore("DeveloperExperimentStore", (m2) => DeveloperExperimentStore = m2);
      ToastStore = getStore("ToastStore", (m2) => ToastStore = m2);
      PermissionStore = getStore("PermissionStore", (m2) => PermissionStore = m2);
      EmojiStore = getStore("EmojiStore", (m2) => EmojiStore = m2);
      ThemeStore = getStore("ThemeStore", (m2) => ThemeStore = m2);
    }
  });

  // src/plugins/_api/toasts/components/ToastContainer.tsx
  function ToastContainer() {
    var toasts = useToastStore((state2) => state2.toasts);
    var marginTop = useSafeAreaInsets().top + 8;
    if (isDiscordToastActive()) marginTop += 50;
    return /* @__PURE__ */ jsx(import_react_native22.View, {
      style: {
        marginTop,
        gap: 4
      },
      children: [
        ...toasts
      ].reverse().map((toast) => /* @__PURE__ */ jsx(Toast_default, {
        toast
      }, toast.id))
    });
  }
  var import_react_native22, isDiscordToastActive;
  var init_ToastContainer = __esm({
    "src/plugins/_api/toasts/components/ToastContainer.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native22 = __toESM(require_react_native(), 1);
      init_react_native_safe_area_context();
      init_useToastStore();
      init_Toast();
      init_stores();
      init_libraries();
      isDiscordToastActive = /* @__PURE__ */ __name(() => FluxUtils.useStateFromStores([
        ToastStore
      ], () => ToastStore.getContent()) != null, "isDiscordToastActive");
      __name(ToastContainer, "ToastContainer");
    }
  });

  // src/plugins/_api/toasts/index.tsx
  var toasts_exports2 = {};
  __export(toasts_exports2, {
    default: () => toasts_default
  });
  var toasts_default;
  var init_toasts3 = __esm({
    "src/plugins/_api/toasts/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_toasts2();
      init_constants();
      init_filters2();
      init_ToastContainer();
      init_useToastStore();
      toasts_default = definePlugin({
        name: "Toasts",
        description: "Provides a toast notification API.",
        authors: [
          Devs.Blaze
        ],
        required: true,
        patches: [
          {
            id: "add-toast-container",
            target: byFilePath("modules/toast/native/ToastContainer.tsx"),
            patch(module3, patcher16) {
              patcher16.after(module3, "type", (_, res) => {
                var toasts = useToastStore((s) => s.toasts);
                if (!toasts.length) return res;
                return /* @__PURE__ */ jsxs(Fragment, {
                  children: [
                    res,
                    /* @__PURE__ */ jsx(ToastContainer, {})
                  ]
                });
              });
            }
          }
        ]
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/settings/index.tsx
  var context2, meta2, definePlugin2, definePluginSettings2, logger5, patcher2;
  var init_settings = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/settings/index.tsx"() {
      init_shared();
      context2 = getPluginContext("settings");
      ({ meta: meta2, definePlugin: definePlugin2, definePluginSettings: definePluginSettings2, logger: logger5, patcher: patcher2 } = context2);
    }
  });

  // src/api/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    _registeredSettingItems: () => _registeredSettingItems,
    _registeredSettingSections: () => _registeredSettingSections,
    registerSettingRenderer: () => registerSettingRenderer,
    registerSettingSection: () => registerSettingSection
  });
  function registerSettingRenderer(name, item) {
    _registeredSettingItems[name] = item;
    return name;
  }
  function registerSettingSection(section) {
    _registeredSettingSections.push(section);
  }
  var _registeredSettingItems, _registeredSettingSections;
  var init_settings2 = __esm({
    "src/api/settings.ts"() {
      "use strict";
      _registeredSettingItems = {};
      _registeredSettingSections = [];
      __name(registerSettingRenderer, "registerSettingRenderer");
      __name(registerSettingSection, "registerSettingSection");
    }
  });

  // build-info:#build-info
  var revision, branch, remote, version;
  var init_build_info = __esm({
    "build-info:#build-info"() {
      revision = "fe108ad16964a39be369275679f076f2a4de299b";
      branch = "master";
      remote = "BlazeCordMod/BlazeCord";
      version = "1.0.0";
    }
  });

  // src/debug/info.ts
  var info_exports = {};
  __export(info_exports, {
    getDebugInfo: () => getDebugInfo,
    getVersions: () => getVersions
  });
  function getVersions() {
    var hermesProps = window.HermesInternal.getRuntimeProperties();
    var rnVer = import_react_native23.Platform.constants.reactNativeVersion;
    var rnBranch = hermesProps["OSS Release Version"].replace(/^for /, "");
    return {
      blazecord: {
        shortRevision: revision.slice(0, 7),
        revision,
        branch,
        remote,
        version
      },
      discord: {
        version: NativeClientInfoModule.Version,
        build: NativeClientInfoModule.Build
      },
      hermes: {
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      react: {
        version: import_react16.default.version
      },
      reactNative: {
        version: `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`,
        branch: rnBranch
      }
    };
  }
  function getAndroidDebugInfo() {
    var PlatformConstants = import_react_native23.Platform.constants;
    return {
      os: {
        name: "Android",
        version: PlatformConstants.Release,
        sdk: PlatformConstants.Version
      },
      device: {
        manufacturer: PlatformConstants.Manufacturer,
        brand: PlatformConstants.Brand,
        model: PlatformConstants.Model
      }
    };
  }
  function getIOSDebugInfo() {
    var PlatformConstants = import_react_native23.Platform.constants;
    return {
      os: {
        name: PlatformConstants.systemName,
        version: PlatformConstants.osVersion
      },
      device: {
        manufacturer: NativeDeviceModule.deviceManufacturer,
        brand: NativeDeviceModule.deviceBrand,
        model: NativeDeviceModule.deviceModel
      }
    };
  }
  function getDebugInfo() {
    return {
      ...getVersions(),
      ...import_react_native23.Platform.select({
        android: getAndroidDebugInfo(),
        ios: getIOSDebugInfo()
      })
    };
  }
  var import_react16, import_react_native23;
  var init_info = __esm({
    "src/debug/info.ts"() {
      "use strict";
      init_build_info();
      init_native();
      import_react16 = __toESM(require_react(), 1);
      import_react_native23 = __toESM(require_react_native(), 1);
      __name(getVersions, "getVersions");
      __name(getAndroidDebugInfo, "getAndroidDebugInfo");
      __name(getIOSDebugInfo, "getIOSDebugInfo");
      __name(getDebugInfo, "getDebugInfo");
    }
  });

  // src/loader/modules/UpdaterModule.ts
  var UpdaterModule_exports = {};
  __export(UpdaterModule_exports, {
    default: () => UpdaterModule_default
  });
  var UpdaterModule_default;
  var init_UpdaterModule = __esm({
    "src/loader/modules/UpdaterModule.ts"() {
      "use strict";
      init_loader();
      UpdaterModule_default = getModule({
        name: "UpdaterModule",
        argumentProcessors: {
          // Make sure the arguments are always with length 2
          fetchBundle: /* @__PURE__ */ __name((args) => [
            args[0],
            args[1]
          ], "fetchBundle")
        }
      });
    }
  });

  // src/stores/useUpdaterStore.tsx
  var useUpdaterStore_exports = {};
  __export(useUpdaterStore_exports, {
    initCheckForUpdates: () => initCheckForUpdates,
    showAlreadyUpdatedToast: () => showAlreadyUpdatedToast,
    showUpdateAvailableAlert: () => showUpdateAvailableAlert,
    showUpdateAvailableToast: () => showUpdateAvailableToast,
    showUpdateErrorAlert: () => showUpdateErrorAlert,
    showUpdateErrorToast: () => showUpdateErrorToast,
    useUpdaterStore: () => useUpdaterStore
  });
  function initCheckForUpdates() {
    return _async_to_generator(function* () {
      if (!loaderPayload.loader.initConfig.skipUpdate) {
        return;
      }
      var { checkForUpdates, notifyOnNewUpdate } = useUpdaterStore.getState();
      try {
        var updateAvailable = yield checkForUpdates();
        if (updateAvailable && notifyOnNewUpdate) {
          showUpdateAvailableToast(updateAvailable);
        }
      } catch (e3) {
        logger6.error`Failed to check for updates: ${e3}`;
        showUpdateErrorToast(e3);
      }
    })();
  }
  function showUpdateAvailableToast(updateInfo) {
    showToast({
      id: "blz-update-available",
      text: t3.updater.new_version(),
      duration: 8e3,
      onPress: /* @__PURE__ */ __name(() => {
        showUpdateAvailableAlert(updateInfo);
      }, "onPress")
    });
  }
  function showUpdateAvailableAlert(updateInfo) {
    showAlert({
      id: "blz-update-available",
      title: t3.updater.update_available(),
      content: t3.updater.new_version(),
      extraContent: /* @__PURE__ */ jsx(Card_default, {
        children: /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          children: updateInfo.revision || "Unknown hash"
        })
      }),
      actions: [
        {
          text: t3.updater.update_and_restart(),
          onPress: /* @__PURE__ */ __name(() => _async_to_generator(function* () {
            try {
              yield UpdaterModule_default.fetchBundle(updateInfo.url, updateInfo.revision);
              yield delay(500);
              BundleUpdaterModule.reload();
            } catch (e3) {
              logger6.error`Failed to fetch bundle: ${e3}`;
              showUpdateErrorToast(e3);
            }
          })(), "onPress")
        },
        {
          text: t3.actions.nevermind(),
          variant: "secondary",
          onPress: /* @__PURE__ */ __name(() => {
          }, "onPress")
        }
      ]
    });
  }
  function showAlreadyUpdatedToast() {
    showToast({
      id: "blz-already-updated",
      text: t3.updater.already_latest()
    });
  }
  function showUpdateErrorToast(error) {
    showToast({
      id: "blz-update-error",
      text: t3.updater.failed_to_check(),
      onPress: /* @__PURE__ */ __name(() => {
        showUpdateErrorAlert(error);
      }, "onPress")
    });
  }
  function showUpdateErrorAlert(error) {
    showAlert({
      id: "blz-update-error",
      title: t3.updater.failed_to_check(),
      content: t3.updater.error_alert(),
      extraContent: /* @__PURE__ */ jsx(ErrorCard, {
        header: null,
        showStackTrace: true,
        error
      }),
      actions: [
        {
          text: t3.actions.dismiss(),
          variant: "destructive",
          onPress: noop
        }
      ]
    });
  }
  var logger6, _updateMutex, useUpdaterStore;
  var init_useUpdaterStore = __esm({
    "src/stores/useUpdaterStore.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord2();
      init_UpdaterModule();
      init_esm();
      init_alerts();
      init_ErrorCard();
      init_toasts();
      init_dist();
      init_i18n();
      init_logger();
      init_loader();
      init_native();
      init_middleware();
      init_kvStorage();
      logger6 = wtlogger.createChild("UpdaterStore");
      _updateMutex = new Mutex();
      useUpdaterStore = create(persist((set2, get) => ({
        notifyOnNewUpdate: false,
        isCheckingForUpdates: false,
        availableUpdate: null,
        checkForUpdates: /* @__PURE__ */ __name(() => _async_to_generator(function* () {
          if (get().availableUpdate) {
            return get().availableUpdate;
          }
          yield _updateMutex.acquire();
          set2({
            isCheckingForUpdates: true
          });
          try {
            var ret = yield UpdaterModule_default.checkForUpdates();
            set2({
              availableUpdate: ret
            });
            return ret;
          } finally {
            set2({
              isCheckingForUpdates: false
            });
            _updateMutex.release();
          }
        })(), "checkForUpdates")
      }), {
        name: "updater-store",
        storage: createJSONStorage(() => kvStorage),
        // @ts-expect-error - bad types
        partialize: /* @__PURE__ */ __name((s) => pick(s, [
          "notifyOnNewUpdate"
        ]), "partialize")
      }));
      __name(initCheckForUpdates, "initCheckForUpdates");
      __name(showUpdateAvailableToast, "showUpdateAvailableToast");
      __name(showUpdateAvailableAlert, "showUpdateAvailableAlert");
      __name(showAlreadyUpdatedToast, "showAlreadyUpdatedToast");
      __name(showUpdateErrorToast, "showUpdateErrorToast");
      __name(showUpdateErrorAlert, "showUpdateErrorAlert");
    }
  });

  // src/components/Blazed/Settings/pages/Blaze/InfoCard.tsx
  var InfoCard_exports = {};
  __export(InfoCard_exports, {
    InfoCard: () => InfoCard
  });
  function InfoCard({ title, style, icon, tag, onPress, trailing }) {
    return /* @__PURE__ */ jsx(Card_default, {
      style,
      onPress,
      children: /* @__PURE__ */ jsxs(import_react_native24.View, {
        style: {
          gap: 8
        },
        children: [
          tag && /* @__PURE__ */ jsx(import_react_native24.View, {
            style: {
              position: "absolute",
              top: -28,
              right: -18
            },
            children: /* @__PURE__ */ jsx(Tag, {
              text: tag
            })
          }),
          /* @__PURE__ */ jsxs(import_react_native24.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              icon,
              /* @__PURE__ */ jsx(Text_default, {
                numberOfLines: 2,
                style: {
                  textAlign: "right"
                },
                variant: "text-sm/medium",
                color: "text-muted",
                children: trailing
              })
            ]
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-md/semibold",
            children: title
          })
        ]
      })
    });
  }
  var import_react_native24;
  var init_InfoCard = __esm({
    "src/components/Blazed/Settings/pages/Blaze/InfoCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_Tag();
      import_react_native24 = __toESM(require_react_native(), 1);
      __name(InfoCard, "InfoCard");
    }
  });

  // src/components/Blazed/Settings/pages/Blaze/ClientInfoSheet.tsx
  var ClientInfoSheet_exports = {};
  __export(ClientInfoSheet_exports, {
    ClientInfoSheet: () => ClientInfoSheet
  });
  function ClientInfoSheet() {
    var { discord, react, reactNative, hermes } = getVersions();
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      bodyStyles: {
        padding: 12
      },
      children: /* @__PURE__ */ jsxs(TableRowGroup_default, {
        title: t3.settings.general.client_info.label(),
        children: [
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.discord(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("Discord")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: `${discord.version} (${discord.build})`
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.react(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ScienceIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: react.version
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.react_native(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ScienceIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: `${reactNative.version} (${reactNative.branch})`
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.hermes(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("PollsIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: hermes.bytecodeVersion
            })
          })
        ]
      })
    });
  }
  var init_ClientInfoSheet = __esm({
    "src/components/Blazed/Settings/pages/Blaze/ClientInfoSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_info();
      init_Discord2();
      __name(ClientInfoSheet, "ClientInfoSheet");
    }
  });

  // src/utils/network/url.ts
  var url_exports = {};
  __export(url_exports, {
    openURL: () => openURL
  });
  function openURL(url) {
    urlModule.openURL(url);
  }
  var urlModule;
  var init_url = __esm({
    "src/utils/network/url.ts"() {
      "use strict";
      init_wrappers();
      urlModule = lookupByProps("openURL", "openDeeplink").asLazy((m2) => urlModule = m2);
      __name(openURL, "openURL");
    }
  });

  // asset-loader:src/assets/blazecord.png
  var require_blazecord = __commonJS({
    "asset-loader:src/assets/blazecord.png"(exports, module3) {
      init_libraries();
      module3.exports = AssetsRegistry.registerAsset({ "__blazed": true, "__packager_asset": true, "width": 100, "height": 64, "httpServerLocation": "src/assets/blazecord.png", "dataurl": "data:image/png;base64,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", "scales": [1], "name": "blazecord.png", "type": "png" });
    }
  });

  // src/components/Blazed/Settings/pages/Updater/index.tsx
  var Updater_exports = {};
  __export(Updater_exports, {
    default: () => UpdaterPage
  });
  function UpdaterPage() {
    var { blazecord } = getVersions();
    var { isCheckingForUpdates, notifyOnNewUpdate, checkForUpdates } = useUpdaterStore();
    var { config } = useInitConfigStore();
    var check = /* @__PURE__ */ __name(() => _async_to_generator(function* () {
      try {
        var updateAvailable = yield checkForUpdates();
        if (updateAvailable) {
          showUpdateAvailableAlert(updateAvailable);
        } else {
          showAlreadyUpdatedToast();
        }
      } catch (e3) {
        showUpdateErrorAlert(e3);
      }
    })(), "check");
    (0, import_react17.useEffect)(() => void check(), []);
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        paddingTop: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.updater.info(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.blazed(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: require_flamelogo()
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: `${blazecord.version}-${blazecord.shortRevision} (${blazecord.branch})`
              })
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.updater.repo(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_github_light")
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: blazecord.remote
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx(import_react_native25.View, {
          style: {
            flexShrink: 1,
            alignSelf: "flex-end"
          },
          children: /* @__PURE__ */ jsx(Button_default, {
            text: t3.settings.updater.checkForUpdates(),
            onPress: check,
            icon: findAssetId("DownloadIcon"),
            disabled: isCheckingForUpdates,
            loading: isCheckingForUpdates
          })
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.updater.settings(),
          children: [
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: t3.settings.updater.autoUpdate(),
              subLabel: t3.settings.updater.autoUpdateDescription(),
              value: !config.skipUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                config: {
                  ...s.config,
                  skipUpdate: !v
                }
              })), "onValueChange")
            }),
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: t3.settings.updater.notifyNewUpdates(),
              subLabel: t3.settings.updater.notifyNewUpdatesDescription(),
              disabled: !config.skipUpdate,
              value: notifyOnNewUpdate && config.skipUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useUpdaterStore.setState({
                notifyOnNewUpdate: v
              }), "onValueChange")
            })
          ]
        })
      ]
    });
  }
  var import_react_native25, import_react17;
  var init_Updater = __esm({
    "src/components/Blazed/Settings/pages/Updater/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord2();
      init_Button();
      init_PageWrapper();
      init_i18n();
      init_info();
      init_AlertModal();
      init_assets();
      import_react_native25 = __toESM(require_react_native(), 1);
      init_useUpdaterStore();
      init_useInitConfigStore();
      import_react17 = __toESM(require_react(), 1);
      __name(UpdaterPage, "UpdaterPage");
    }
  });

  // src/components/Blazed/Settings/pages/Blaze/index.tsx
  var Blaze_exports = {};
  __export(Blaze_exports, {
    default: () => BlazedPage
  });
  function BlazedPage() {
    var navigation = NavigationNative.useNavigation();
    var { config, toggleSafeMode } = useInitConfigStore();
    var updateAvailable = useUpdaterStore((state2) => state2.availableUpdate);
    var { blazecord, discord } = getVersions();
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        paddingTop: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native26.View, {
          style: {
            gap: 12
          },
          children: /* @__PURE__ */ jsxs(import_react_native26.View, {
            style: {
              flexDirection: "row",
              gap: 12,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ jsx(InfoCard, {
                title: t3.blazecord(),
                tag: updateAvailable ? t3.updater.update_tag() : void 0,
                style: {
                  flex: 1
                },
                trailing: `${blazecord.version}-${blazecord.shortRevision}
(${blazecord.branch})`,
                icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                  source: require_blazecord()
                }),
                onPress: /* @__PURE__ */ __name(() => {
                  navigation.push("BLAZED_CUSTOM_PAGE", {
                    title: t3.blazecord(),
                    render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_Updater(), Updater_exports)))
                  });
                }, "onPress")
              }),
              /* @__PURE__ */ jsx(InfoCard, {
                title: t3.discord(),
                style: {
                  flex: 1
                },
                trailing: `${discord.version}
(${discord.build})`,
                icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                  source: findAssetId("Discord")
                }),
                onPress: /* @__PURE__ */ __name(() => showSheet("ClientInfoSheet", ClientInfoSheet), "onPress")
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          children: /* @__PURE__ */ jsx(TableRow_default, {
            arrow: true,
            label: t3.settings.general.logs(),
            onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZED_CUSTOM_PAGE", {
              title: t3.settings.general.logs(),
              render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_Logs(), Logs_exports)))
            }), "onPress"),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("PaperIcon")
            })
          })
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          title: t3.settings.general.configurations.label(),
          children: /* @__PURE__ */ jsx(TableSwitchRow_default, {
            label: t3.settings.general.configurations.safe_mode.label(),
            subLabel: t3.settings.general.configurations.safe_mode.description(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ShieldIcon")
            }),
            value: config.safeMode,
            onValueChange: /* @__PURE__ */ __name((v) => {
              var showSafeModeAlert = /* @__PURE__ */ __name((enable) => {
                var ts = t3.settings.general.configurations.safe_mode.alert;
                var action = enable ? "enable" : "disable";
                showAlert({
                  id: `safe-mode-${action}`,
                  title: ts.title({
                    action
                  }),
                  content: ts.description({
                    action
                  }),
                  actions: [
                    {
                      text: ts.apply_and_restart(),
                      onPress: /* @__PURE__ */ __name(() => _async_to_generator(function* () {
                        toggleSafeMode(enable);
                        yield delay(500);
                        BundleUpdaterModule.reload();
                      })(), "onPress")
                    },
                    {
                      text: ts.apply_without_restart(),
                      variant: enable ? "primary" : "secondary",
                      onPress: /* @__PURE__ */ __name(() => _async_to_generator(function* () {
                        toggleSafeMode(enable);
                      })(), "onPress")
                    },
                    {
                      text: t3.actions.nevermind(),
                      variant: "secondary",
                      onPress: /* @__PURE__ */ __name(() => {
                      }, "onPress")
                    }
                  ]
                });
              }, "showSafeModeAlert");
              showSafeModeAlert(v);
            }, "onValueChange")
          })
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.general.links(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.general.github(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_github_light")
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.GITHUB
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.GITHUB}`), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.general.discord(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("Discord")
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.DISCORD
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.DISCORD}`), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.general.x(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_x_light")
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.BLAZE
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.BLAZE}`), "onPress")
            })
          ]
        })
      ]
    });
  }
  var import_react_native26, import_react18;
  var init_Blaze = __esm({
    "src/components/Blazed/Settings/pages/Blaze/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_PageWrapper();
      init_info();
      init_Discord2();
      import_react_native26 = __toESM(require_react_native(), 1);
      init_dist();
      init_libraries();
      import_react18 = __toESM(require_react(), 1);
      init_InfoCard();
      init_sheets();
      init_ClientInfoSheet();
      init_alerts();
      init_native();
      init_url();
      init_constants();
      init_useInitConfigStore();
      init_useUpdaterStore();
      __name(BlazedPage, "BlazedPage");
    }
  });

  // src/components/Discord/Pile/AvatarPile.tsx
  var AvatarPile_exports = {};
  __export(AvatarPile_exports, {
    default: () => AvatarPile_default
  });
  var AvatarPile_default;
  var init_AvatarPile = __esm({
    "src/components/Discord/Pile/AvatarPile.tsx"() {
      "use strict";
      init_util();
      AvatarPile_default = getComponentFromProps("AvatarPile", {
        singular: true
      });
    }
  });

  // src/components/Discord/ui-kit/Avatar.tsx
  var Avatar_exports = {};
  __export(Avatar_exports, {
    Avatar: () => Avatar,
    default: () => Avatar_default
  });
  var Avatar, Avatar_default;
  var init_Avatar = __esm({
    "src/components/Discord/ui-kit/Avatar.tsx"() {
      "use strict";
      init_wrappers();
      Avatar = lookupByFilePath("uikit-native/Avatar.tsx", {
        returnEsmDefault: true
      }).asLazy();
      Avatar_default = Avatar;
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/TitleComponent.tsx
  var TitleComponent_exports = {};
  __export(TitleComponent_exports, {
    default: () => TitleComponent
  });
  function TitleComponent({ plugin }) {
    var styles = useStyles3();
    var users = FluxUtils.useStateFromStoresArray([
      UserStore
    ], () => {
      for (var author2 of plugin.authors ?? []) {
        maybeFetchUser(author2.id);
      }
      return plugin.authors?.map((a) => UserStore.getUser(a.id.toString()));
    });
    var { authors } = plugin;
    var authorTextNode = [];
    if (authors) {
      var _loop = /* @__PURE__ */ __name(function(author2) {
        authorTextNode.push(/* @__PURE__ */ jsx(Text_default, {
          onPress: /* @__PURE__ */ __name(() => showUserProfileActionSheet({
            userId: author2.id
          }), "onPress"),
          variant: "text-md/medium",
          children: author2.name
        }));
        authorTextNode.push(", ");
      }, "_loop");
      for (var author of authors) _loop(author);
      authorTextNode.pop();
    }
    return /* @__PURE__ */ jsxs(import_react_native27.View, {
      style: {
        gap: 6,
        width: "80%"
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native27.View, {
          style: {
            gap: 4,
            flexDirection: "column-reverse"
          },
          children: [
            /* @__PURE__ */ jsx(import_react_native27.View, {
              children: /* @__PURE__ */ jsx(Text_default, {
                variant: "heading-xl/semibold",
                children: plugin.name
              })
            }),
            /* @__PURE__ */ jsx(import_react_native27.View, {
              style: {
                flexDirection: "row",
                flexShrink: 1
              },
              children: authors?.length && /* @__PURE__ */ jsxs(import_react_native27.View, {
                style: styles.devsPill,
                children: [
                  users.length && /* @__PURE__ */ jsx(AvatarPile_default, {
                    size: "xxsmall",
                    names: plugin.authors?.map((a) => a.name),
                    totalCount: plugin.authors?.length,
                    children: users.map((a, i2) => /* @__PURE__ */ jsx(Avatar_default, {
                      size: "xxsmall",
                      user: a
                    }, i2))
                  }),
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-md/medium",
                    children: authorTextNode
                  })
                ]
              })
            })
          ]
        }),
        plugin.description && /* @__PURE__ */ jsx(Text_default, {
          style: {
            flexShrink: 1
          },
          color: "text-muted",
          variant: "text-md/medium",
          children: plugin.description
        })
      ]
    });
  }
  var import_react_native27, showUserProfileActionSheet, useStyles3, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/components/Blazed/Settings/pages/Plugins/TitleComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native27 = __toESM(require_react_native(), 1);
      init_lazy();
      init_stores();
      init_wrappers();
      init_AvatarPile();
      init_Discord2();
      init_Avatar();
      init_libraries();
      init_styles();
      showUserProfileActionSheet = lookupByName("showUserProfileActionSheet").asLazy();
      useStyles3 = createStyles(() => ({
        devsPill: {
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          paddingVertical: 4,
          paddingHorizontal: 8,
          backgroundColor: tokens.colors.STAGE_CARD_PILL_BG,
          borderRadius: 32
        }
      }));
      ({ getUser: maybeFetchUser } = lazyDestructure(() => lookupByProps("getUser", "fetchProfile").load()));
      __name(TitleComponent, "TitleComponent");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/common/index.tsx
  var common_exports = {};
  __export(common_exports, {
    NativeViewGestureHandler: () => NativeViewGestureHandler,
    RNGHScrollView: () => RNGHScrollView
  });
  var RNGestureHandlerModule, RNGHScrollView, NativeViewGestureHandler;
  var init_common = __esm({
    "src/components/Blazed/Settings/pages/Plugins/common/index.tsx"() {
      "use strict";
      init_lazy();
      init_wrappers();
      RNGestureHandlerModule = lookupByProps("NativeViewGestureHandler", "ScrollView").asLazy();
      RNGHScrollView = lazyValue(() => RNGestureHandlerModule.ScrollView);
      NativeViewGestureHandler = lazyValue(() => RNGestureHandlerModule.NativeViewGestureHandler);
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/common/usePluginSettings.tsx
  var usePluginSettings_exports = {};
  __export(usePluginSettings_exports, {
    usePluginSettings: () => usePluginSettings
  });
  function usePluginSettings(id, key) {
    var current2 = usePluginStore_default(useShallow((state2) => state2.settings[id][key]));
    var setValue = /* @__PURE__ */ __name((value) => {
      usePluginStore_default.setState((state2) => {
        state2.settings[id][key] = typeof value === "function" ? value(state2.settings[id][key]) : value;
      });
    }, "setValue");
    return [
      current2,
      setValue
    ];
  }
  var init_usePluginSettings = __esm({
    "src/components/Blazed/Settings/pages/Plugins/common/usePluginSettings.tsx"() {
      "use strict";
      init_shallow3();
      init_usePluginStore();
      __name(usePluginSettings, "usePluginSettings");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/common/getIcon.tsx
  var getIcon_exports = {};
  __export(getIcon_exports, {
    getIcon: () => getIcon2
  });
  function getIcon2(icon) {
    if (!icon) return;
    var source = typeof icon === "string" ? findAssetId(icon) : icon;
    return /* @__PURE__ */ jsx(TableRow_default.Icon, {
      source
    });
  }
  var init_getIcon = __esm({
    "src/components/Blazed/Settings/pages/Plugins/common/getIcon.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord2();
      __name(getIcon2, "getIcon");
    }
  });

  // src/components/Discord/TextInput/TextArea.tsx
  var TextArea_exports = {};
  __export(TextArea_exports, {
    default: () => TextArea_default
  });
  var TextArea_default;
  var init_TextArea = __esm({
    "src/components/Discord/TextInput/TextArea.tsx"() {
      "use strict";
      init_util();
      TextArea_default = getComponentFromProps("TextArea", {
        singular: true
      });
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/StringOptionRow.tsx
  var StringOptionRow_exports = {};
  __export(StringOptionRow_exports, {
    StringOptionRow: () => StringOptionRow
  });
  function StringOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setter] = usePluginSettings(plugin.$id, settingKey);
    var InputComponent = opt.textArea === true ? TextArea_default : TextInput_default;
    var isValid = /* @__PURE__ */ __name(() => current2 && opt.validate ? opt.validate(current2) : true, "isValid");
    return /* @__PURE__ */ jsx(TableRow_default, {
      start,
      end,
      label: /* @__PURE__ */ jsxs(import_react_native28.View, {
        style: {
          paddingHorizontal: 6,
          gap: 4
        },
        children: [
          /* @__PURE__ */ jsx(InputComponent, {
            size: "md",
            label: opt.label,
            placeholder: opt.placeholder,
            value: current2,
            onChange: /* @__PURE__ */ __name((v) => setter(v), "onChange"),
            state: isValid() ? "error" : void 0,
            errorMessage: isValid() ? void 0 : "Invalid input"
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: opt.description
          })
        ]
      }),
      icon: getIcon2(opt.icon)
    });
  }
  var import_react_native28;
  var init_StringOptionRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/StringOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_getIcon();
      init_Discord2();
      init_TextArea();
      init_TextInput();
      import_react_native28 = __toESM(require_react_native(), 1);
      __name(StringOptionRow, "StringOptionRow");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/BooleanOptionRow.tsx
  var BooleanOptionRow_exports = {};
  __export(BooleanOptionRow_exports, {
    BooleanOptionRow: () => BooleanOptionRow
  });
  function BooleanOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    return /* @__PURE__ */ jsx(TableSwitchRow_default, {
      start,
      end,
      label: opt.label,
      subLabel: opt.description,
      icon: getIcon2(opt.icon),
      value: current2,
      onValueChange: /* @__PURE__ */ __name(() => setCurrent((v) => !v), "onValueChange")
    });
  }
  var init_BooleanOptionRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/BooleanOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_usePluginSettings();
      init_getIcon();
      __name(BooleanOptionRow, "BooleanOptionRow");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/BaseCardOption.tsx
  var BaseCardOption_exports = {};
  __export(BaseCardOption_exports, {
    BaseCardOption: () => BaseCardOption
  });
  function BaseCardOption({ opt, children, start, end }) {
    return /* @__PURE__ */ jsxs(Card_default, {
      start,
      end,
      children: [
        children,
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            marginTop: 8
          },
          color: "text-secondary",
          variant: "text-sm/normal",
          children: opt.description
        })
      ]
    });
  }
  var init_BaseCardOption = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/BaseCardOption.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      __name(BaseCardOption, "BaseCardOption");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/SelectOptionRow.tsx
  var SelectOptionRow_exports = {};
  __export(SelectOptionRow_exports, {
    SelectOptionRow: () => SelectOptionRow
  });
  function SelectOptionRow({ opt, plugin, settingKey, start, end }) {
    var [selected, setSelected] = usePluginSettings(plugin.$id, settingKey);
    var handleToggleOption = /* @__PURE__ */ __name((value) => {
      setSelected((currentSelected) => {
        var isCurrentlySelected = currentSelected.includes(value);
        return isCurrentlySelected ? currentSelected.filter((v) => v !== value) : [
          ...currentSelected,
          value
        ];
      });
    }, "handleToggleOption");
    return /* @__PURE__ */ jsx(BaseCardOption, {
      start,
      end,
      opt,
      children: /* @__PURE__ */ jsx(TableRowGroup_default, {
        title: opt.label,
        children: opt.options.map((option, index) => /* @__PURE__ */ jsx(TableCheckboxRow_default, {
          label: option.label,
          subLabel: option.description,
          icon: getIcon2(option.icon),
          checked: selected.includes(option.value),
          onPress: /* @__PURE__ */ __name(() => handleToggleOption(option.value), "onPress")
        }, index))
      })
    });
  }
  var init_SelectOptionRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/SelectOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_BaseCardOption();
      init_getIcon();
      init_usePluginSettings();
      __name(SelectOptionRow, "SelectOptionRow");
    }
  });

  // src/components/Discord/RedesignCompat/RedesignCompat.tsx
  var RedesignCompat_exports = {};
  __export(RedesignCompat_exports, {
    default: () => RedesignCompat_default
  });
  var RedesignCompat_default;
  var init_RedesignCompat = __esm({
    "src/components/Discord/RedesignCompat/RedesignCompat.tsx"() {
      "use strict";
      init_util();
      RedesignCompat_default = getComponentFromProps("RedesignCompat");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/RadioOptionRow.tsx
  var RadioOptionRow_exports = {};
  __export(RadioOptionRow_exports, {
    RadioOptionRow: () => RadioOptionRow
  });
  function RadioOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    return /* @__PURE__ */ jsx(BaseCardOption, {
      start,
      end,
      opt,
      children: /* @__PURE__ */ jsx(RedesignCompat_default, {
        children: /* @__PURE__ */ jsx(TableRadioGroup_default, {
          title: opt.label,
          hasIcons: opt.options.some((o2) => o2.icon),
          value: current2,
          onChange: setCurrent,
          children: opt.options.map((def, i2) => /* @__PURE__ */ jsx(TableRadioRow_default, {
            label: def.label,
            subLabel: def.description,
            icon: getIcon2(def.icon),
            value: String(def.value)
          }, i2))
        })
      })
    });
  }
  var init_RadioOptionRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/RadioOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_BaseCardOption();
      init_getIcon();
      init_Discord2();
      init_RedesignCompat();
      __name(RadioOptionRow, "RadioOptionRow");
    }
  });

  // src/components/Discord/Slider/Slider.tsx
  var Slider_exports = {};
  __export(Slider_exports, {
    default: () => Slider_default
  });
  var Slider_default;
  var init_Slider = __esm({
    "src/components/Discord/Slider/Slider.tsx"() {
      "use strict";
      init_util();
      Slider_default = getComponentFromProps("Slider");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/SliderOptionRow.tsx
  var SliderOptionRow_exports = {};
  __export(SliderOptionRow_exports, {
    SliderOptionRow: () => SliderOptionRow
  });
  function SliderRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    var currentIndex = opt.points.indexOf(current2);
    var updateValue = /* @__PURE__ */ __name((newIndex) => {
      var clampedIndex = Math.max(0, Math.min(newIndex, opt.points.length - 1));
      setCurrent(opt.points[clampedIndex]);
    }, "updateValue");
    return /* @__PURE__ */ jsxs(Card_default, {
      style: {
        gap: 12
      },
      start,
      end,
      children: [
        /* @__PURE__ */ jsxs(Stack_default, {
          direction: "horizontal",
          justify: "space-between",
          children: [
            /* @__PURE__ */ jsx(Text_default, {
              variant: "text-md/semibold",
              children: opt.label
            }),
            current2 !== void 0 && /* @__PURE__ */ jsx(Text_default, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: current2
            })
          ]
        }),
        /* @__PURE__ */ jsx(import_react_native29.View, {
          style: {
            paddingVertical: 12
          },
          children: /* @__PURE__ */ jsx(Slider_default, {
            step: 1,
            value: currentIndex,
            minimumValue: 0,
            maximumValue: opt.points.length - 1,
            // onSlidingComplete={updateValue}
            onValueChange: updateValue,
            startIcon: /* @__PURE__ */ jsx(import_react_native29.Pressable, {
              onPress: /* @__PURE__ */ __name(() => updateValue(currentIndex - 1), "onPress"),
              children: /* @__PURE__ */ jsx(CircleMinusIcon, {})
            }),
            endIcon: /* @__PURE__ */ jsx(import_react_native29.Pressable, {
              onPress: /* @__PURE__ */ __name(() => updateValue(currentIndex + 1), "onPress"),
              children: /* @__PURE__ */ jsx(CirclePlusIcon, {})
            })
          })
        })
      ]
    });
  }
  function SliderOptionRow({ opt, plugin, settingKey, start, end }) {
    return /* @__PURE__ */ jsx(SliderRow, {
      start,
      end,
      opt,
      plugin,
      settingKey
    });
  }
  var import_react_native29;
  var init_SliderOptionRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/SliderOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native29 = __toESM(require_react_native(), 1);
      init_usePluginSettings();
      init_icons();
      init_Slider();
      init_Discord2();
      __name(SliderRow, "SliderRow");
      __name(SliderOptionRow, "SliderOptionRow");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/OptionDefRow.tsx
  var OptionDefRow_exports = {};
  __export(OptionDefRow_exports, {
    OptionDefRow: () => OptionDefRow
  });
  function OptionDefRow(props) {
    var componentMap = {
      string: StringOptionRow,
      boolean: BooleanOptionRow,
      select: SelectOptionRow,
      radio: RadioOptionRow,
      slider: SliderOptionRow
    };
    var Component = componentMap[props.opt.type];
    return Component ? /* @__PURE__ */ jsx(Component, {
      ...props
    }) : null;
  }
  var init_OptionDefRow = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/OptionDefRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_StringOptionRow();
      init_BooleanOptionRow();
      init_SelectOptionRow();
      init_RadioOptionRow();
      init_SliderOptionRow();
      __name(OptionDefRow, "OptionDefRow");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/options/OptionSection.tsx
  var OptionSection_exports = {};
  __export(OptionSection_exports, {
    OptionSection: () => OptionSection
  });
  function getGroupedOptions(plugin) {
    var _loop = /* @__PURE__ */ __name(function(key2, opt2) {
      var currentGroup = groupedOptions[groupedOptions.length - 1];
      if (!currentGroup || !groupable.includes(opt2.type) || groupableMap.some((group) => !group.includes(opt2.type))) {
        currentGroup = [];
        groupedOptions.push(currentGroup);
      }
      currentGroup.push([
        key2,
        opt2
      ]);
    }, "_loop");
    var options = Object.entries(getPluginSettings(plugin.$id)?.definition ?? {});
    var groupableMap = [
      [
        "string",
        "boolean",
        "slider"
      ]
    ];
    var groupable = groupableMap.flat();
    var groupedOptions = [];
    for (var [key, opt] of options) _loop(key, opt);
    return groupedOptions;
  }
  function OptionSection({ plugin }) {
    var options = getGroupedOptions(plugin);
    if (options.length === 0) return null;
    return /* @__PURE__ */ jsx(InfoSection, {
      label: t3.settings.plugins.info_sheet.configurations(),
      children: /* @__PURE__ */ jsx(import_react_native30.View, {
        style: {
          gap: 12
        },
        children: options.map((group, i2) => /* @__PURE__ */ jsx(import_react_native30.View, {
          children: group.map(([key, opt], i3) => /* @__PURE__ */ jsx(import_react_native30.View, {
            children: /* @__PURE__ */ jsx(OptionDefRow, {
              opt,
              plugin,
              settingKey: key,
              start: i3 === 0,
              end: i3 === group.length - 1
            })
          }, key))
        }, i2))
      })
    });
  }
  var import_react_native30;
  var init_OptionSection = __esm({
    "src/components/Blazed/Settings/pages/Plugins/options/OptionSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_utils2();
      init_InfoSection();
      import_react_native30 = __toESM(require_react_native(), 1);
      init_OptionDefRow();
      __name(getGroupedOptions, "getGroupedOptions");
      __name(OptionSection, "OptionSection");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/PluginDetailsSheet.tsx
  var PluginDetailsSheet_exports = {};
  __export(PluginDetailsSheet_exports, {
    PluginDetailsSheet: () => PluginDetailsSheet
  });
  function PluginDetailsSheet({ plugin }) {
    return /* @__PURE__ */ jsxs(BottomSheet_default, {
      bodyStyles: {
        gap: 12
      },
      contentStyles: {
        paddingHorizontal: 16
      },
      children: [
        /* @__PURE__ */ jsxs(Stack_default, {
          style: {
            marginTop: 8,
            flexWrap: "nowrap"
          },
          spacing: 8,
          justify: "center",
          align: "center",
          direction: "horizontal",
          children: [
            /* @__PURE__ */ jsx(Text_default, {
              variant: "heading-xl/semibold",
              children: plugin.name
            }),
            /* @__PURE__ */ jsxs(Text_default, {
              variant: "heading-sm/semibold",
              color: "text-muted",
              children: [
                "(",
                plugin.$id,
                ")"
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsx(RNGHScrollView, {
          contentContainerStyle: {
            marginBottom: 12
          },
          children: /* @__PURE__ */ jsxs(TableRowGroup_default, {
            title: t3.settings.plugins.info_sheet.details(),
            children: [
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.id(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.$id
                })
              }),
              false,
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.authors(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.authors.map((author) => `${author.name} (${author.id})`).join(", ")
                })
              }),
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.path(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.$path
                })
              })
            ]
          })
        })
      ]
    });
  }
  var init_PluginDetailsSheet = __esm({
    "src/components/Blazed/Settings/pages/Plugins/PluginDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_common();
      init_Discord2();
      init_BottomSheet();
      __name(PluginDetailsSheet, "PluginDetailsSheet");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/SheetAwareIconButton.tsx
  var SheetAwareIconButton_exports = {};
  __export(SheetAwareIconButton_exports, {
    SheetAwareIconButton: () => SheetAwareIconButton
  });
  function SheetAwareIconButton(props) {
    var { onPress } = props;
    props.onPress &&= () => {
      hideSheet("PluginSheetComponent");
      onPress?.();
    };
    return /* @__PURE__ */ jsx(IconButton_default, {
      ...props
    });
  }
  var init_SheetAwareIconButton = __esm({
    "src/components/Blazed/Settings/pages/Plugins/SheetAwareIconButton.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_IconButton();
      init_sheets();
      __name(SheetAwareIconButton, "SheetAwareIconButton");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/PluginSheetComponent.tsx
  var PluginSheetComponent_exports = {};
  __export(PluginSheetComponent_exports, {
    default: () => PluginSheetComponent
  });
  function PluginSheetComponent({ plugin }) {
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      contentStyles: {
        paddingHorizontal: 16
      },
      children: /* @__PURE__ */ jsxs(RNGHScrollView, {
        contentContainerStyle: {
          marginBottom: 24
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native31.View, {
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
              /* @__PURE__ */ jsx(ContextMenu_default, {
                items: [
                  {
                    label: t3.settings.plugins.info_sheet.details(),
                    iconSource: findAssetId("CircleInformationIcon-primary"),
                    action: /* @__PURE__ */ __name(() => {
                      showSheet("PluginDetailsSheet", PluginDetailsSheet, {
                        plugin
                      }, "stack");
                    }, "action")
                  }
                ],
                children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
                  ...props,
                  icon: findAssetId("MoreHorizontalIcon"),
                  variant: "secondary",
                  size: "sm"
                }), "children")
              })
            ]
          }),
          false,
          /* @__PURE__ */ jsx(import_react_native31.View, {
            style: {
              gap: 12
            },
            children: /* @__PURE__ */ jsx(OptionSection, {
              plugin
            })
          })
        ]
      })
    });
  }
  var import_react_native31;
  var init_PluginSheetComponent = __esm({
    "src/components/Blazed/Settings/pages/Plugins/PluginSheetComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native31 = __toESM(require_react_native(), 1);
      init_assets();
      init_TitleComponent();
      init_i18n();
      init_common();
      init_OptionSection();
      init_sheets();
      init_PluginDetailsSheet();
      init_SheetAwareIconButton();
      init_IconButton();
      init_BottomSheet();
      init_ContextMenu();
      __name(PluginSheetComponent, "PluginSheetComponent");
    }
  });

  // src/components/Blazed/Settings/pages/Plugins/index.tsx
  var Plugins_exports = {};
  __export(Plugins_exports, {
    default: () => PluginsPage
  });
  function PluginsPage() {
    return /* @__PURE__ */ jsx(AddonPage, {
      collectionManager: pluginCollectionManager,
      onPressInfo: /* @__PURE__ */ __name((plugin) => {
        showSheet("PluginSheetComponent", Promise.resolve().then(() => (init_PluginSheetComponent(), PluginSheetComponent_exports)), {
          plugin
        });
      }, "onPressInfo"),
      useCanHandleAddon: /* @__PURE__ */ __name((id) => plugins_default[id].$isToggleable(), "useCanHandleAddon"),
      useToggler: /* @__PURE__ */ __name((id) => {
        var enabled = usePluginStore_default((s) => s.settings[id].enabled);
        var toggle = usePluginStore_default((s) => s.togglePlugin);
        return [
          enabled,
          (v) => toggle(id, v)
        ];
      }, "useToggler")
    });
  }
  var pluginCollectionManager;
  var init_Plugins = __esm({
    "src/components/Blazed/Settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_plugins();
      init_utils2();
      init_Addon();
      init_AddonCollectionManager();
      init_usePluginStore();
      init_sheets();
      pluginCollectionManager = createAddonCollectionManager({
        data: /* @__PURE__ */ __name(() => Object.values(plugins_default), "data"),
        defaultFilterOptions: [
          "HIDE_INTERNAL",
          "HIDE_UNAVAILABLE"
        ],
        defaultSortOption: "A-Z",
        sortOptions: [
          {
            key: "A-Z",
            label: /* @__PURE__ */ __name(() => "A-Z", "label"),
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var aInternal = isPluginInternal(a);
              var bInternal = isPluginInternal(b);
              if (aInternal !== bInternal) return aInternal ? 1 : -1;
              return a.name.localeCompare(b.name);
            }, "compareFn")
          },
          {
            key: "Z-A",
            label: /* @__PURE__ */ __name(() => "Z-A", "label"),
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var aInternal = isPluginInternal(a);
              var bInternal = isPluginInternal(b);
              if (aInternal !== bInternal) return aInternal ? 1 : -1;
              return b.name.localeCompare(a.name);
            }, "compareFn")
          }
        ],
        filterOptions: [
          {
            key: "HIDE_INTERNAL",
            // TODO: I18n
            label: /* @__PURE__ */ __name(() => "Hide internal plugins", "label"),
            filterFn: /* @__PURE__ */ __name((a) => !isPluginInternal(a), "filterFn")
          },
          {
            key: "HIDE_UNAVAILABLE",
            // TODO: I18n
            label: /* @__PURE__ */ __name(() => "Hide unavailable plugins", "label"),
            filterFn: /* @__PURE__ */ __name((a) => a.isAvailable?.() !== false, "filterFn")
          }
        ]
      });
      __name(PluginsPage, "PluginsPage");
    }
  });

  // src/plugins/_api/settings/index.tsx
  var settings_exports2 = {};
  __export(settings_exports2, {
    default: () => settings_default
  });
  var import_react19, settings, settings_default;
  var init_settings3 = __esm({
    "src/plugins/_api/settings/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_settings();
      init_settings2();
      init_Tag();
      init_constants();
      init_info();
      init_i18n();
      init_filters2();
      init_icons();
      init_libraries();
      init_useUpdaterStore();
      init_objects();
      init_dist();
      import_react19 = __toESM(require_react(), 1);
      settings = definePluginSettings2({
        onTop: {
          label: "Put on top",
          description: "Put the settings on top of the settings list",
          type: "boolean",
          default: false
        }
      });
      settings_default = definePlugin2({
        name: "Settings",
        description: "Provides a settings interface and debug information",
        authors: [
          Devs.Blaze
        ],
        required: true,
        patches: [
          {
            id: "add-renderer",
            target: byProps([
              "SETTING_RENDERER_CONFIG"
            ]),
            patch(module3, patcher16) {
              var origRendererConfig = module3.SETTING_RENDERER_CONFIG;
              Object.defineProperty(module3, "SETTING_RENDERER_CONFIG", {
                enumerable: true,
                configurable: true,
                get: /* @__PURE__ */ __name(() => ({
                  ...origRendererConfig,
                  ..._registeredSettingItems
                }), "get"),
                set: /* @__PURE__ */ __name((value) => {
                  Object.defineProperty(module3, "SETTING_RENDERER_CONFIG", {
                    writable: true,
                    value
                  });
                }, "set")
              });
              patcher16.attachDisposer(() => {
                module3.SETTING_RENDERER_CONFIG = origRendererConfig;
              });
            }
          },
          {
            id: "overview-screen",
            target: byName("SettingsOverviewScreen", {
              returnEsmDefault: false
            }),
            patch(module3, patcher16) {
              patcher16.after(module3, "default", (_, ret) => {
                var { props } = findInReactTree(ret, (i2) => i2.props?.sections);
                if (!props) {
                  logger5.warn("Failed to find settings sections in SettingsOverviewScreen");
                  return;
                }
                if (!settings.get().onTop) {
                  try {
                    var accountSectionIndex = props.sections.findIndex((i2) => i2.settings.includes("ACCOUNT"));
                    if (accountSectionIndex !== -1) {
                      props.sections = [
                        ...props.sections.slice(0, accountSectionIndex + 1),
                        ..._registeredSettingSections,
                        ...props.sections.slice(accountSectionIndex + 1)
                      ];
                      return;
                    }
                  } catch (e3) {
                    logger5.warn`Failed to insert settings sections next to account section: ${e3}`;
                  }
                }
                props.sections = [
                  ..._registeredSettingSections,
                  ...props.sections
                ];
              });
            }
          }
        ],
        start() {
          setImmediate(() => {
            registerSettingRenderer("BLAZED_CUSTOM_PAGE", {
              type: "route",
              title: /* @__PURE__ */ __name(() => "", "title"),
              unsearchable: true,
              screen: {
                route: "BLAZED_CUSTOM_PAGE",
                getComponent: memoize(() => /* @__PURE__ */ (0, import_react19.memo)(() => {
                  var navigation = NavigationNative.useNavigation();
                  var route = NavigationNative.useRoute();
                  var { render: PageComponent, ...args } = route.params;
                  (0, import_react19.useLayoutEffect)(() => void navigation.setOptions({
                    ...args
                  }), [
                    navigation
                  ]);
                  return /* @__PURE__ */ jsx(PageComponent, {});
                }))
              }
            });
            registerSettingSection({
              label: t3.blazecord(),
              settings: [
                registerSettingRenderer("BLAZED", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.blazecord(), "title"),
                  IconComponent: FireIcon,
                  useTrailing: /* @__PURE__ */ __name(() => {
                    var availableUpdate = useUpdaterStore((s) => s.availableUpdate);
                    if (availableUpdate) return /* @__PURE__ */ jsx(Tag, {
                      text: t3.updater.update_tag()
                    });
                    var { version: version2, shortRevision, branch: branch2 } = getVersions().blazecord;
                    return `${version2}-${shortRevision} (${branch2})`;
                  }, "useTrailing"),
                  screen: {
                    route: "BLAZED",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Blaze(), Blaze_exports))), "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZED_PLUGINS", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.plugins(), "title"),
                  IconComponent: PuzzlePieceIcon,
                  screen: {
                    route: "BLAZED_PLUGINS",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Plugins(), Plugins_exports))), "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZED_THEMES", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.themes(), "title"),
                  IconComponent: PaintPaletteIcon,
                  screen: {
                    route: "BLAZED_THEMES",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Themes(), Themes_exports))), "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZED_DEVELOPER", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.developer(), "title"),
                  IconComponent: WrenchIcon,
                  screen: {
                    route: "BLAZED_DEVELOPER",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Developer(), Developer_exports))), "getComponent")
                  }
                })
              ]
            });
          });
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/dummy/index.ts
  var context3, meta3, definePlugin3, definePluginSettings3, logger7, patcher3;
  var init_dummy = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/dummy/index.ts"() {
      init_shared();
      context3 = getPluginContext("dummy");
      ({ meta: meta3, definePlugin: definePlugin3, definePluginSettings: definePluginSettings3, logger: logger7, patcher: patcher3 } = context3);
    }
  });

  // src/plugins/dummy/index.ts
  var dummy_exports = {};
  __export(dummy_exports, {
    default: () => dummy_default
  });
  var settings2, dummy_default;
  var init_dummy2 = __esm({
    "src/plugins/dummy/index.ts"() {
      "use strict";
      init_dummy();
      init_constants();
      init_filters2();
      settings2 = definePluginSettings3({
        bunnyName: {
          type: "string",
          label: "Bunny Name",
          description: "Name of the bunny.",
          placeholder: "Fluffy",
          validate: /* @__PURE__ */ __name((value) => {
            return Boolean(value.match(/^[a-zA-Z]+$/));
          }, "validate")
        },
        winterCoat: {
          type: "boolean",
          label: "Winter Coat",
          description: "Does the bunny have a winter coat?",
          icon: "SnowflakeIcon"
        },
        favoriteSeason: {
          type: "select",
          label: "Favorite Season",
          description: "Select the bunny's favorite season.",
          options: [
            {
              label: "Spring",
              description: "The season of new beginnings.",
              value: "spring"
            },
            {
              label: "Summer",
              description: "The season of warmth and sunshine.",
              value: "summer"
            },
            {
              label: "Autumn",
              description: "The season of harvest and falling leaves.",
              value: "autumn"
            },
            {
              label: "Winter",
              description: "The season of snow and coziness.",
              value: "winter"
            }
          ]
        },
        hibernation: {
          type: "radio",
          label: "Hibernation",
          description: "Does the bunny hibernate during winter?",
          options: [
            {
              label: "Yes",
              description: "The bunny hibernates during winter.",
              value: "yes"
            },
            {
              label: "No",
              description: "The bunny stays active during winter.",
              value: "no"
            }
          ]
        },
        energyLevel: {
          type: "slider",
          label: "Energy Level",
          description: "Set the bunny's energy level.",
          points: [
            "0%",
            "25%",
            "50%",
            "75%",
            "100%"
          ],
          default: "50%"
        }
      });
      if (true) {
        window.sampleMethod = () => {
          return "this method is unpatched";
        };
      }
      dummy_default = definePlugin3({
        name: "Dummy",
        description: "Does literally nothing! Used for showcasing plugin APIs.",
        authors: [
          Devs.Blaze
        ],
        isAvailable: /* @__PURE__ */ __name(() => true, "isAvailable"),
        patches: [
          {
            id: "sample-patch",
            predicate: /* @__PURE__ */ __name(() => settings2.get().winterCoat === true, "predicate"),
            target: byProps([
              "toString"
            ]),
            patch(_, patcher16) {
              patcher16.after(window, "sampleMethod", () => {
                return "this method is patched";
              });
            }
          }
        ],
        start() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/expression-utils/index.tsx
  var context4, meta4, definePlugin4, definePluginSettings4, logger8, patcher4;
  var init_expression_utils = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/expression-utils/index.tsx"() {
      init_shared();
      context4 = getPluginContext("expression-utils");
      ({ meta: meta4, definePlugin: definePlugin4, definePluginSettings: definePluginSettings4, logger: logger8, patcher: patcher4 } = context4);
    }
  });

  // src/utils/network/fetchAsDataUrl.ts
  var fetchAsDataUrl_exports = {};
  __export(fetchAsDataUrl_exports, {
    fetchAsDataUrl: () => fetchAsDataUrl
  });
  function fetchAsDataUrl(url) {
    return _async_to_generator(function* () {
      var response = yield fetch(url);
      var blob = yield response.blob();
      return yield new Promise((resolve) => {
        var reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    })();
  }
  var init_fetchAsDataUrl = __esm({
    "src/utils/network/fetchAsDataUrl.ts"() {
      "use strict";
      init_async_to_generator();
      __name(fetchAsDataUrl, "fetchAsDataUrl");
    }
  });

  // src/plugins/expression-utils/common.ts
  var CustomEmojiContent, MessageReactionsContent, GuildIcon, MessageEmojiActionSheet, MediaViewer, Surrogates, EmojiActionCreators;
  var init_common2 = __esm({
    "src/plugins/expression-utils/common.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_wrappers();
      CustomEmojiContent = lookup(byFilePath("modules/messages/native/emoji/CustomEmojiContent.tsx", {
        returnEsmDefault: false
      })).asLazy();
      MessageReactionsContent = lookup(byFilePath("modules/reactions/native/MessageReactionsContent.tsx", {
        returnEsmDefault: false
      })).asLazy();
      GuildIcon = lookup(byFilePath("uikit-native/GuildIcon.tsx")).asLazy((r4) => GuildIcon = r4);
      MessageEmojiActionSheet = lookup(byFilePath("modules/messages/native/emoji/MessageEmojiActionSheet.tsx")).asLazy((r4) => MessageEmojiActionSheet = r4);
      MediaViewer = lookupByProps("openMediaModal").asLazy();
      Surrogates = lookupByProps("convertSurrogateToName").asLazy();
      EmojiActionCreators = lookupByProps("uploadEmoji").asLazy();
    }
  });

  // src/plugins/expression-utils/stores/useEmojiAdderStore.ts
  var useEmojiAdderStore;
  var init_useEmojiAdderStore = __esm({
    "src/plugins/expression-utils/stores/useEmojiAdderStore.ts"() {
      "use strict";
      init_async_to_generator();
      init_esm();
      init_fetchAsDataUrl();
      init_common2();
      useEmojiAdderStore = create((set2, get) => ({
        status: "idle",
        recentUploadDetails: null,
        customAlt: null,
        cleanup: /* @__PURE__ */ __name(() => set2({
          status: "idle",
          recentUploadDetails: null,
          customAlt: null
        }), "cleanup"),
        uploadEmoji: /* @__PURE__ */ __name((guildId, emojiNode) => _async_to_generator(function* () {
          set2({
            status: "pending",
            recentUploadDetails: null
          });
          try {
            var dataUrl = yield fetchAsDataUrl(emojiNode.src);
            yield EmojiActionCreators.uploadEmoji({
              guildId,
              image: dataUrl,
              name: get().customAlt ?? emojiNode.alt
            });
            set2({
              status: "success"
            });
            set2({
              recentUploadDetails: {
                guildId,
                emojiNode,
                customAlt: get().customAlt ?? emojiNode.alt,
                error: null
              }
            });
          } catch (error) {
            set2({
              status: "error"
            });
            set2({
              recentUploadDetails: {
                guildId,
                emojiNode,
                customAlt: null,
                error
              }
            });
          }
        })(), "uploadEmoji")
      }));
    }
  });

  // src/utils/errors/isError.ts
  var isError_exports = {};
  __export(isError_exports, {
    hasStack: () => hasStack,
    isComponentStack: () => isComponentStack,
    isError: () => isError
  });
  function isError(error) {
    return error instanceof Error;
  }
  function isComponentStack(error) {
    return isError(error) && "componentStack" in error && typeof error.componentStack === "string";
  }
  function hasStack(error) {
    return isError(error) && !!error.stack;
  }
  var init_isError = __esm({
    "src/utils/errors/isError.ts"() {
      "use strict";
      __name(isError, "isError");
      __name(isComponentStack, "isComponentStack");
      __name(hasStack, "hasStack");
    }
  });

  // src/plugins/expression-utils/components/UploadStatusView.tsx
  function getErrorText(error) {
    if (isError(error) && error.stack) {
      return error.stack;
    }
    if (error != null && typeof error === "object") {
      try {
        if ("body" in error && "ok" in error && error.ok === false) {
          var response = error;
          return response.body.name.join("/");
        }
        return JSON.stringify(error, null, 4);
      } catch (e3) {
      }
    }
    return String(error);
  }
  function ToastText({ children }) {
    return /* @__PURE__ */ jsx(Text_default, {
      numberOfLines: 1,
      ellipsizeMode: "tail",
      style: {
        maxWidth: "40%"
      },
      variant: "text-md/semibold",
      children
    });
  }
  function UploadStatusView() {
    var styles = useStyles4();
    var [status, recentUploadDetails] = useEmojiAdderStore(useShallow((s) => [
      s.status,
      s.recentUploadDetails
    ]));
    if (status === "idle" && !recentUploadDetails) {
      return null;
    }
    var { guildId, emojiNode, customAlt, error } = recentUploadDetails ?? {};
    var guild = GuildStore.getGuild(guildId);
    return /* @__PURE__ */ jsxs(import_react_native_reanimated2.default.View, {
      layout: import_react_native_reanimated2.CurvedTransition,
      style: styles.container,
      children: [
        status === "pending" && /* @__PURE__ */ jsxs(import_react_native32.View, {
          style: styles.rowContainer,
          children: [
            /* @__PURE__ */ jsx(import_react_native32.ActivityIndicator, {
              size: "small"
            }),
            /* @__PURE__ */ jsx(Text_default, {
              variant: "text-lg/semibold",
              children: "Uploading emoji..."
            })
          ]
        }),
        status === "success" && /* @__PURE__ */ jsxs(import_react_native32.View, {
          style: styles.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native32.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native32.Image, {
                  source: findAssetId("CheckmarkLargeBoldIcon"),
                  style: styles.checkmarkIcon
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-lg/semibold",
                  children: "Upload Successful"
                })
              ]
            }),
            emojiNode && /* @__PURE__ */ jsxs(import_react_native32.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(GuildIcon, {
                  guild,
                  size: "XSMALL",
                  animate: false
                }),
                /* @__PURE__ */ jsx(ToastText, {
                  children: guild.name
                }),
                /* @__PURE__ */ jsx(ArrowSmallLeftIcon, {}),
                /* @__PURE__ */ jsx(import_react_native32.Image, {
                  source: {
                    uri: emojiNode.src
                  },
                  style: styles.emojiImage
                }),
                /* @__PURE__ */ jsx(ToastText, {
                  children: customAlt && customAlt !== emojiNode.alt ? `:${customAlt}: (${emojiNode.alt})` : `:${emojiNode.alt}:`
                })
              ]
            })
          ]
        }),
        status === "error" && error != null && /* @__PURE__ */ jsxs(import_react_native32.View, {
          style: styles.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native32.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native32.Image, {
                  source: findAssetId("XLargeBoldIcon"),
                  style: styles.xIcon
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-lg/semibold",
                  children: "Upload Failed"
                })
              ]
            }),
            /* @__PURE__ */ jsx(Codeblock, {
              children: `${getErrorText(error).slice(0, 300)}...`
            })
          ]
        })
      ]
    });
  }
  var import_react_native32, import_react_native_reanimated2, useStyles4;
  var init_UploadStatusView = __esm({
    "src/plugins/expression-utils/components/UploadStatusView.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      import_react_native32 = __toESM(require_react_native(), 1);
      import_react_native_reanimated2 = __toESM(require_react_native_reanimated(), 1);
      init_common2();
      init_shallow3();
      init_useEmojiAdderStore();
      init_isError();
      init_assets();
      init_icons();
      init_stores();
      init_Discord2();
      init_libraries();
      useStyles4 = createStyles(() => ({
        checkmarkIcon: {
          width: 24,
          height: 24,
          tintColor: tokens.colors.TEXT_POSITIVE
        },
        xIcon: {
          width: 24,
          height: 24,
          tintColor: tokens.colors.TEXT_DANGER
        },
        container: {
          paddingVertical: 8,
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center"
        },
        rowContainer: {
          gap: 8,
          flexDirection: "row",
          alignItems: "center"
        },
        centeredContainer: {
          gap: 8,
          alignItems: "center"
        },
        emojiImage: {
          width: 24,
          height: 24
        }
      }));
      __name(getErrorText, "getErrorText");
      __name(ToastText, "ToastText");
      __name(UploadStatusView, "UploadStatusView");
    }
  });

  // src/plugins/expression-utils/utils/useSlots.tsx
  function useSlots(guild, emojiNode) {
    var currentAlt = useEmojiAdderStore((s) => s.customAlt) || emojiNode.alt;
    var guildEmojis = FluxUtils.useStateFromStores([
      EmojiStore
    ], () => EmojiStore.getGuilds()[guild.id]?.emojis ?? []);
    return (0, import_react20.useMemo)(() => {
      var maxSlots = getMaxEmojiSlots(guild);
      var isAnimated = emojiNode.src.includes(".gif");
      var currentCount = guildEmojis.filter((e3) => e3?.animated === isAnimated).length;
      return {
        hasDuplicate: guildEmojis.some((e3) => e3.name === currentAlt),
        availableSlots: maxSlots - currentCount,
        maxSlots,
        isAnimated
      };
    }, [
      currentAlt,
      guild,
      emojiNode,
      guildEmojis
    ]);
  }
  var import_react20, getMaxEmojiSlots;
  var init_useSlots = __esm({
    "src/plugins/expression-utils/utils/useSlots.tsx"() {
      "use strict";
      import_react20 = __toESM(require_react(), 1);
      init_useEmojiAdderStore();
      init_stores();
      init_Flux();
      init_wrappers();
      init_lazy();
      ({ getMaxEmojiSlots } = lazyDestructure(() => lookupByProps("getMaxEmojiSlots", "getAvailableStickerSlotCount").load()));
      __name(useSlots, "useSlots");
    }
  });

  // src/plugins/expression-utils/components/ServerRow.tsx
  function ServerRow({ start, end, guild, emojiNode }) {
    var [status, uploadEmoji] = useEmojiAdderStore(useShallow((s) => [
      s.status,
      s.uploadEmoji
    ]));
    var { isAnimated, availableSlots, maxSlots, hasDuplicate } = useSlots(guild, emojiNode);
    return /* @__PURE__ */ jsx(TableRow_default, {
      label: guild.name,
      subLabel: `${availableSlots}/${maxSlots}${isAnimated ? " animated" : " static"} slots available ${hasDuplicate ? "(has duplicate name)" : ""}`,
      disabled: status === "pending" || availableSlots <= 0,
      icon: /* @__PURE__ */ jsx(GuildIcon, {
        guild,
        size: "NORMAL",
        animate: false
      }),
      onPress: /* @__PURE__ */ __name(() => {
        import_react_native33.Keyboard.dismiss();
        uploadEmoji(guild.id, emojiNode);
      }, "onPress"),
      start,
      end
    });
  }
  var import_react_native33;
  var init_ServerRow = __esm({
    "src/plugins/expression-utils/components/ServerRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native33 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_shallow3();
      init_common2();
      init_useSlots();
      init_Discord2();
      __name(ServerRow, "ServerRow");
    }
  });

  // src/plugins/expression-utils/components/EmoteStealerActionSheet.tsx
  function EmoteStealerActionSheet({ emojiNode }) {
    var customAlt = useEmojiAdderStore((s) => s.customAlt);
    var guilds = Object.values(GuildStore.getGuilds()).filter((guild) => PermissionStore.can(constants.Permissions.MANAGE_GUILD_EXPRESSIONS, guild));
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      contentStyles: {
        paddingHorizontal: 16
      },
      children: /* @__PURE__ */ jsxs(import_react_native34.ScrollView, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(import_react_native34.View, {
            style: {
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsxs(Text_default, {
              variant: "heading-lg/bold",
              children: [
                "Clone :",
                emojiNode.alt,
                ":",
                "  ",
                /* @__PURE__ */ jsx(import_react_native34.Image, {
                  resizeMode: "contain",
                  source: {
                    uri: emojiNode.src
                  },
                  style: {
                    width: 24,
                    height: 24
                  }
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx(import_flash_list5.FlashList, {
            style: {
              flex: 1
            },
            estimatedItemSize: 63,
            ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native34.View, {
              style: {
                gap: 12,
                paddingVertical: 12
              },
              children: /* @__PURE__ */ jsx(TextInput_default, {
                label: "Emoji Name",
                description: "The name of the emoji to be uploaded",
                placeholder: emojiNode.alt,
                value: customAlt ?? emojiNode.alt,
                onChange: /* @__PURE__ */ __name((text) => useEmojiAdderStore.setState({
                  customAlt: text
                }), "onChange")
              })
            }),
            contentContainerStyle: {
              paddingBottom: 24
            },
            data: guilds,
            keyboardShouldPersistTaps: "handled",
            keyExtractor: /* @__PURE__ */ __name((x) => x.id, "keyExtractor"),
            renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(ServerRow, {
              start: index === 0,
              end: index === guilds.length - 1,
              guild: item,
              emojiNode
            }), "renderItem")
          })
        ]
      })
    });
  }
  var import_react_native34, import_flash_list5;
  var init_EmoteStealerActionSheet = __esm({
    "src/plugins/expression-utils/components/EmoteStealerActionSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native34 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_ServerRow();
      init_stores();
      import_flash_list5 = __toESM(require_flash_list(), 1);
      init_BottomSheet();
      init_Discord2();
      init_libraries();
      __name(EmoteStealerActionSheet, "EmoteStealerActionSheet");
    }
  });

  // src/plugins/expression-utils/components/StealButtons.tsx
  function StealButtons({ emojiNode, style }) {
    return /* @__PURE__ */ jsxs(import_react_native35.View, {
      style: [
        {
          gap: 8
        },
        style
      ],
      children: [
        /* @__PURE__ */ jsx(Button_default, {
          text: "Clone",
          onPress: /* @__PURE__ */ __name(() => {
            useEmojiAdderStore.getState().cleanup();
            showSheet("EmoteStealerActionSheet", EmoteStealerActionSheet, {
              emojiNode
            }, "stack");
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(Button_default, {
          text: "Copy URL",
          onPress: /* @__PURE__ */ __name(() => copyToClipboard(emojiNode.src), "onPress")
        })
      ]
    });
  }
  var import_react_native35;
  var init_StealButtons = __esm({
    "src/plugins/expression-utils/components/StealButtons.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_sheets();
      import_react_native35 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_clipboard();
      init_EmoteStealerActionSheet();
      init_Button();
      __name(StealButtons, "StealButtons");
    }
  });

  // src/plugins/expression-utils/utils/openMediaModal.tsx
  function getSizeAsync(src) {
    return new Promise((resolve, reject) => {
      import_react_native36.Image.getSize(src, (width, height) => {
        resolve([
          width,
          height
        ]);
      }, reject);
    });
  }
  function openMediaModal(src) {
    return _async_to_generator(function* () {
      var [width, height] = yield getSizeAsync(src);
      var { width: screenWidth, height: screenHeight } = import_react_native36.Dimensions.get("window");
      hideSheet("MessageEmojiActionSheet");
      MediaViewer.openMediaModal({
        initialSources: [
          {
            uri: src,
            sourceURI: src,
            width,
            height
          }
        ],
        initialIndex: 0,
        originLayout: {
          width: 128,
          height: 128,
          x: screenWidth / 2 - 64,
          y: screenHeight - 64,
          resizeMode: "fill"
        }
      });
    })();
  }
  var import_react_native36;
  var init_openMediaModal = __esm({
    "src/plugins/expression-utils/utils/openMediaModal.tsx"() {
      "use strict";
      init_async_to_generator();
      init_sheets();
      import_react_native36 = __toESM(require_react_native(), 1);
      init_common2();
      __name(getSizeAsync, "getSizeAsync");
      __name(openMediaModal, "openMediaModal");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/expression-utils/utils/openEmojiActionSheet.tsx
  var context5, meta5, definePlugin5, definePluginSettings5, logger9, patcher5;
  var init_openEmojiActionSheet = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/expression-utils/utils/openEmojiActionSheet.tsx"() {
      init_shared();
      context5 = getPluginContext("expression-utils");
      ({ meta: meta5, definePlugin: definePlugin5, definePluginSettings: definePluginSettings5, logger: logger9, patcher: patcher5 } = context5);
    }
  });

  // src/plugins/expression-utils/utils/openEmojiActionSheet.tsx
  function openEmojiActionSheet({ id, name, animated }) {
    try {
      showSheet("MessageEmojiActionSheet", MessageEmojiActionSheet, {
        emojiNode: id ? {
          id,
          alt: name,
          src: `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}?size=128`
        } : {
          content: Surrogates.convertSurrogateToName(name),
          surrogate: name
        }
      }, "stack");
    } catch (err) {
      logger9.error(`Failed to open emoji action sheet: ${err}`);
    }
  }
  var init_openEmojiActionSheet2 = __esm({
    "src/plugins/expression-utils/utils/openEmojiActionSheet.tsx"() {
      "use strict";
      init_sheets();
      init_common2();
      init_openEmojiActionSheet();
      __name(openEmojiActionSheet, "openEmojiActionSheet");
    }
  });

  // src/plugins/expression-utils/index.tsx
  var expression_utils_exports = {};
  __export(expression_utils_exports, {
    default: () => expression_utils_default
  });
  function addStealButton(emojiNode, element) {
    var insertAtIndex = /* @__PURE__ */ __name((container, index, paddingTop) => {
      container.splice(index, 0, /* @__PURE__ */ jsx(StealButtons, {
        style: {
          paddingTop
        },
        emojiNode
      }, "steal-button"));
    }, "insertAtIndex");
    var findLastElementIndex = /* @__PURE__ */ __name((tree, predicate) => {
      var container = findInReactTree(tree, (c2) => c2?.find?.(predicate));
      return [
        container,
        container?.findLastIndex?.(predicate) ?? -1
      ];
    }, "findLastElementIndex");
    var [buttonContainer, buttonIndex] = findLastElementIndex(element, (c2) => c2?.type?.name === "Button");
    if (buttonIndex >= 0) {
      insertAtIndex(buttonContainer, buttonIndex + 1, 8);
      return;
    }
    var [dividerContainer, dividerIndex] = findLastElementIndex(element, (c2) => c2?.type === Fragment && c2.props.children[0].type.name === "FormDivider");
    if (dividerIndex >= 0) {
      insertAtIndex(dividerContainer, dividerIndex - 1, 12);
      return;
    }
    element.props.children.push(/* @__PURE__ */ jsx(StealButtons, {
      style: {
        paddingTop: 12
      },
      emojiNode
    }, "steal-button"));
  }
  function makeEmojiIconPressable(emojiNode, element) {
    var emojiDetailsChildren = findInReactTree(element, (c2) => c2[0]?.type?.name === "FastImageAndroid");
    if (!emojiDetailsChildren) return;
    var emojiDetails = emojiDetailsChildren[0];
    emojiDetailsChildren[0] = /* @__PURE__ */ jsx(PressableScale_default, {
      onPress: /* @__PURE__ */ __name(() => {
        openMediaModal(emojiNode.src);
      }, "onPress"),
      children: emojiDetails
    });
  }
  var import_react21, expression_utils_default;
  var init_expression_utils2 = __esm({
    "src/plugins/expression-utils/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_expression_utils();
      init_constants();
      init_objects();
      import_react21 = __toESM(require_react(), 1);
      init_jsxRuntime();
      init_useEmojiAdderStore();
      init_UploadStatusView();
      init_StealButtons();
      init_openMediaModal();
      init_openEmojiActionSheet2();
      init_PressableScale();
      init_toasts();
      init_filters2();
      __name(addStealButton, "addStealButton");
      __name(makeEmojiIconPressable, "makeEmojiIconPressable");
      expression_utils_default = definePlugin4({
        name: "ExpressionUtils",
        description: "Adds more emotes and stickers utilities such as cloning or copying links.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "emoji-sheet",
            target: byFilePath("modules/messages/native/emoji/CustomEmojiContent.tsx", {
              returnEsmDefault: false
            }),
            patch(module3, patcher16) {
              patcher16.after(module3, "default", ([{ emojiNode }], res) => {
                if (!emojiNode) return;
                addStealButton(emojiNode, res);
                makeEmojiIconPressable(emojiNode, res);
              });
            }
          },
          {
            id: "reaction-sheet",
            target: byFilePath("modules/reactions/native/MessageReactionsContent.tsx", {
              returnEsmDefault: false
            }),
            patch(module3, patcher16) {
              patcher16.after(module3, "MessageReactionsContent", (_, { props }) => {
                var unpatchReactionsHeader = patcher16.detached.after(props.header, "type", (_2, res) => {
                  (0, import_react21.useEffect)(() => unpatchReactionsHeader, []);
                  try {
                    var tabsRow = res.props.children[0];
                    var { tabs, onSelect } = tabsRow.props;
                    tabsRow.props.tabs = tabs.map((tab, i2) => /* @__PURE__ */ jsx(PressableScale_default, {
                      onPress: /* @__PURE__ */ __name(() => onSelect(tab.props.index), "onPress"),
                      onLongPress: /* @__PURE__ */ __name(() => {
                        var { emoji } = tab.props.reaction;
                        openEmojiActionSheet(emoji);
                      }, "onLongPress"),
                      children: tab
                    }, i2));
                  } catch (e3) {
                    logger8.error`Failed to patch reaction header: ${e3}`;
                  }
                });
              });
            }
          }
        ],
        start() {
          patcher4.attachDisposer(useEmojiAdderStore.subscribe((s, p2) => {
            var toastController = showToast({
              id: "expression-utils-upload-status",
              render: UploadStatusView
            }).hide();
            if (s.status !== "idle" && s.status !== p2.status || s.recentUploadDetails && s.recentUploadDetails !== p2.recentUploadDetails) {
              toastController.update({
                duration: Number.MAX_SAFE_INTEGER
              });
              if (s.status === "success" || s.status === "error") {
                toastController.update({
                  duration: 3e3
                });
              }
            }
            if (s.status === "idle") {
              toastController.hide();
            }
          }));
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/devtoolkit/index.ts
  var context6, meta6, definePlugin6, definePluginSettings6, logger10, patcher6;
  var init_devtoolkit = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/devtoolkit/index.ts"() {
      init_shared();
      context6 = getPluginContext("devtoolkit");
      ({ meta: meta6, definePlugin: definePlugin6, definePluginSettings: definePluginSettings6, logger: logger10, patcher: patcher6 } = context6);
    }
  });

  // src/plugins/devtoolkit/repl-client.ts
  function establishWebSocketConnection() {
    return _async_to_generator(function* () {
      var stop = false;
      var socket = null;
      while (!stop) {
        try {
          if (socket && socket.readyState === WebSocket.OPEN) {
            yield delay(5e3);
            continue;
          }
          socket = yield setupWebsocketConnection();
        } catch (error) {
          yield delay(2e3);
        }
      }
      return () => stop = true;
    })();
  }
  var WS_HOST, WS_PORT, setupWebsocketConnection, setupLogForwarding, messageHandlers, handleIncomingMessage, storeResultInWindowContext, sendEvalResult;
  var init_repl_client = __esm({
    "src/plugins/devtoolkit/repl-client.ts"() {
      "use strict";
      init_async_to_generator();
      init_logger();
      init_dist();
      init_node_inspect_extracted();
      WS_HOST = "localhost";
      WS_PORT = 9090;
      setupWebsocketConnection = /* @__PURE__ */ __name(() => {
        return new Promise((resolve, reject) => {
          var socket = new WebSocket(`ws://${WS_HOST}:${WS_PORT}`);
          var handleOpen = /* @__PURE__ */ __name(() => {
            socket.send(JSON.stringify({
              type: "handshake",
              client: "BlazeCord",
              logBuffer: wtlogger.logs
            }));
            var removeLogPipe = setupLogForwarding(socket);
            socket.addEventListener("close", removeLogPipe);
            resolve(socket);
          }, "handleOpen");
          socket.addEventListener("error", (error) => {
            reject(new Error(`Failed to connect to WebSocket server: ${error}`));
          });
          socket.addEventListener("open", handleOpen);
          socket.addEventListener("message", ({ data }) => handleIncomingMessage(socket, data));
        });
      }, "setupWebsocketConnection");
      setupLogForwarding = /* @__PURE__ */ __name((socket) => {
        return wtlogger.pipe((args) => {
          socket.send(JSON.stringify({
            type: "log",
            details: args
          }));
        });
      }, "setupLogForwarding");
      messageHandlers = {
        handshake: /* @__PURE__ */ __name(() => {
        }, "handshake"),
        eval: /* @__PURE__ */ __name((socket, message) => _async_to_generator(function* () {
          var result;
          var error;
          try {
            result = yield globalEvalWithSourceUrl(message.code, `repl-${message.nonce}`);
            if (result?.await) {
              result.return = yield result.return;
            }
            result = result?.return;
          } catch (err) {
            error = err;
          }
          if (result) {
            storeResultInWindowContext(result, message.nonce);
          }
          sendEvalResult(socket, message.nonce, result, error, message.color);
        })(), "eval"),
        "get-global-hints": /* @__PURE__ */ __name((socket) => {
          var hints = [
            "blazecord",
            "lookup",
            "lookupByProps",
            "lookupByName",
            "dk"
          ];
          socket.send(JSON.stringify({
            type: "global-hints",
            hints
          }));
        }, "get-global-hints")
      };
      handleIncomingMessage = /* @__PURE__ */ __name((socket, data) => _async_to_generator(function* () {
        var message = JSON.parse(data.toString());
        if (!message.type || !(message.type in messageHandlers)) return;
        var handler = messageHandlers[message.type];
        if (handler) {
          yield handler(socket, message);
        } else {
          console.error("Unknown message type", message);
        }
      })(), "handleIncomingMessage");
      storeResultInWindowContext = /* @__PURE__ */ __name((result, nonce) => {
        Object.defineProperty(window, "___", {
          value: window.__,
          configurable: true
        });
        Object.defineProperty(window, "__", {
          value: window._,
          configurable: true
        });
        Object.defineProperty(window, "_", {
          value: result,
          configurable: true
        });
        Object.defineProperty(window, `_${nonce}`, {
          value: result,
          configurable: true
        });
      }, "storeResultInWindowContext");
      sendEvalResult = /* @__PURE__ */ __name((socket, nonce, result, error, colorize) => {
        socket.send(JSON.stringify({
          type: "eval-result",
          nonce,
          error: error ? inspect(error) : null,
          result: inspect(result, {
            customInspect: true,
            colors: colorize
          })
        }));
      }, "sendEvalResult");
      __name(establishWebSocketConnection, "establishWebSocketConnection");
    }
  });

  // src/plugins/devtoolkit/index.ts
  var devtoolkit_exports = {};
  __export(devtoolkit_exports, {
    default: () => devtoolkit_default
  });
  var devtoolkit_default;
  var init_devtoolkit2 = __esm({
    "src/plugins/devtoolkit/index.ts"() {
      "use strict";
      init_devtoolkit();
      init_constants();
      init_metro();
      init_wrappers();
      init_module();
      init_node_inspect_extracted();
      init_repl_client();
      devtoolkit_default = definePlugin6({
        name: "DevToolkit",
        description: "A toolkit for developers to ease the development process.",
        authors: [
          Devs.Blaze
        ],
        version: "1.0.0",
        start() {
          Object.defineProperty(SingleMetroModule.prototype, "l", {
            enumerable: false,
            get() {
              return this.asLazy();
            }
          });
          Object.assign(window, {
            lookup,
            lookupByProps,
            lookupByName,
            ...(init_filters2(), __toCommonJS(filters_exports2)),
            dk: {
              patcher: patcher6,
              snipe(mod, prop) {
                patcher6.after(mod, prop, (args, ret) => {
                  logger10.info(`Sniped ${prop}
${inspect({
                    args,
                    ret
                  })}`);
                  window._r = {
                    args,
                    ret
                  };
                });
              },
              shotgun(mod) {
                for (var key in mod) {
                  if (typeof mod[key] === "function") {
                    this.snipe(mod, key);
                  }
                }
              },
              wipe() {
                patcher6.reuse();
              }
            }
          });
          establishWebSocketConnection();
        },
        stop() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/nitro-icons/index.ts
  var context7, meta7, definePlugin7, definePluginSettings7, logger11, patcher7;
  var init_nitro_icons = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/nitro-icons/index.ts"() {
      init_shared();
      context7 = getPluginContext("nitro-icons");
      ({ meta: meta7, definePlugin: definePlugin7, definePluginSettings: definePluginSettings7, logger: logger11, patcher: patcher7 } = context7);
    }
  });

  // src/plugins/nitro-icons/index.ts
  var nitro_icons_exports = {};
  __export(nitro_icons_exports, {
    default: () => nitro_icons_default
  });
  var originalFreemiumIds, unpatches, nitro_icons_default;
  var init_nitro_icons2 = __esm({
    "src/plugins/nitro-icons/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_nitro_icons();
      init_modules();
      init_filters2();
      originalFreemiumIds = null;
      unpatches = [];
      nitro_icons_default = definePlugin7({
        name: "UnlockPremiumIcons",
        description: "Marks all app icons as non-premium.",
        authors: [
          {
            name: "Blaze",
            id: 1337n
          }
        ],
        onLoad() {
          return _async_to_generator(function* () {
            try {
              var icons = yield new Promise((resolve) => waitFor(byProps([
                "getIcons",
                "getIconById",
                "getOfficialAlternateIcons"
              ]), resolve));
              if (!icons || typeof icons.getIcons !== "function" || typeof icons.getOfficialAlternateIcons !== "function") {
                console.warn("[UnlockPremiumIcons] Icons module not valid.");
                return;
              }
              var originalMain = icons.getIcons?.();
              var originalAlt = icons.getOfficialAlternateIcons?.();
              if (!Array.isArray(originalMain) || !Array.isArray(originalAlt)) {
                console.warn("[UnlockPremiumIcons] Icons are not arrays.");
                return;
              }
              var mainIcons = originalMain.map((x) => ({
                ...x,
                isPremium: false
              }));
              var alternateIcons = originalAlt.map((x) => ({
                ...x,
                isPremium: false
              }));
              unpatches.push(patcher7.instead(icons, "getIcons", () => mainIcons));
              unpatches.push(patcher7.instead(icons, "getOfficialAlternateIcons", () => alternateIcons));
              unpatches.push(patcher7.after(icons, "getIconById", (_, ret) => {
                if (ret && typeof ret === "object") ret.isPremium = false;
              }));
              console.log("[UnlockPremiumIcons] Icons patched successfully.");
            } catch (err) {
              console.error("[UnlockPremiumIcons] Icon patch failed:", err);
            }
            try {
              var ids = yield new Promise((resolve) => waitFor(byProps([
                "FreemiumAppIconIds",
                "MasterAppIconIds"
              ]), resolve));
              if (ids && Array.isArray(ids.FreemiumAppIconIds) && Array.isArray(ids.MasterAppIconIds)) {
                originalFreemiumIds = ids.FreemiumAppIconIds;
                ids.FreemiumAppIconIds = ids.MasterAppIconIds;
                console.log("[UnlockPremiumIcons] Freemium ID patched.");
              } else {
                console.warn("[UnlockPremiumIcons] Could not patch FreemiumAppIconIds.");
              }
            } catch (err) {
              console.error("[UnlockPremiumIcons] ID patch failed:", err);
            }
          })();
        },
        cleanup() {
          for (var unpatch2 of unpatches) {
            try {
              unpatch2();
            } catch (e3) {
              console.warn("[UnlockPremiumIcons] Failed to unpatch:", e3);
            }
          }
          waitFor(byProps([
            "FreemiumAppIconIds"
          ]), (ids) => {
            if (ids && originalFreemiumIds) {
              ids.FreemiumAppIconIds = originalFreemiumIds;
              console.log("[UnlockPremiumIcons] Freemium IDs restored.");
            }
          });
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/experiments/index.ts
  var context8, meta8, definePlugin8, definePluginSettings8, logger12, patcher8;
  var init_experiments = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/experiments/index.ts"() {
      init_shared();
      context8 = getPluginContext("experiments");
      ({ meta: meta8, definePlugin: definePlugin8, definePluginSettings: definePluginSettings8, logger: logger12, patcher: patcher8 } = context8);
    }
  });

  // src/plugins/experiments/index.ts
  var experiments_exports = {};
  __export(experiments_exports, {
    default: () => experiments_default
  });
  function reinitStore() {
    waitFor(byStoreName("DeveloperExperimentStore", {
      checkEsmDefault: true
    }), (DeveloperExperimentStore2) => {
      var unpatch2 = patcher8.detached.instead(Object, "defineProperties", () => {
      });
      DeveloperExperimentStore2.initialize();
      unpatch2();
    });
  }
  var experiments_default;
  var init_experiments2 = __esm({
    "src/plugins/experiments/index.ts"() {
      "use strict";
      init_constants();
      init_modules();
      init_experiments();
      init_stores();
      init_filters2();
      __name(reinitStore, "reinitStore");
      experiments_default = definePlugin8({
        name: "Experiments",
        description: "Exposes internal developer sections, allowing you to override Discord experiments.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "is-staff-env",
            target: byProps([
              "isStaffEnv"
            ]),
            patch(module3, patcher16) {
              patcher16.instead(module3, "isStaffEnv", ([user]) => {
                if (user === UserStore.getCurrentUser()) return true;
              });
              reinitStore();
            }
          }
        ],
        cleanup() {
          reinitStore();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/chat-bubbles/index.ts
  var context9, meta9, definePlugin9, definePluginSettings9, logger13, patcher9;
  var init_chat_bubbles = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/chat-bubbles/index.ts"() {
      init_shared();
      context9 = getPluginContext("chat-bubbles");
      ({ meta: meta9, definePlugin: definePlugin9, definePluginSettings: definePluginSettings9, logger: logger13, patcher: patcher9 } = context9);
    }
  });

  // src/loader/modules/BubbleModule.ts
  var BubbleModule_exports = {};
  __export(BubbleModule_exports, {
    default: () => BubbleModule_default
  });
  var import_react_native37, BubbleModule_default;
  var init_BubbleModule = __esm({
    "src/loader/modules/BubbleModule.ts"() {
      "use strict";
      import_react_native37 = __toESM(require_react_native(), 1);
      init_loader();
      BubbleModule_default = getModule({
        name: "BubbleModule",
        argumentProcessors: {
          configure: /* @__PURE__ */ __name((args) => [
            args[0],
            args[1],
            Number((0, import_react_native37.processColor)(args[2]))
          ], "configure")
        }
      });
    }
  });

  // src/plugins/chat-bubbles/index.ts
  var chat_bubbles_exports = {};
  __export(chat_bubbles_exports, {
    default: () => chat_bubbles_default
  });
  var settings3, chat_bubbles_default;
  var init_chat_bubbles2 = __esm({
    "src/plugins/chat-bubbles/index.ts"() {
      "use strict";
      init_chat_bubbles();
      init_constants();
      init_BubbleModule();
      init_filters2();
      init_libraries();
      init_stores();
      init_modules();
      init_shallow3();
      settings3 = definePluginSettings9({
        avatarRadius: {
          type: "slider",
          label: "Avatar Curve",
          points: [
            0,
            3,
            6,
            9,
            12,
            15,
            18
          ],
          default: 12
        },
        bubbleChatRadius: {
          type: "slider",
          label: "Bubble Curve",
          points: [
            0,
            3,
            6,
            9,
            12,
            15,
            18
          ],
          default: 12
        },
        bubbleChatColor: {
          type: "string",
          label: "Bubble Color",
          placeholder: "#RRGGBBAA",
          description: "The color of the chat bubble (in #RRGGBBAA format). When empty, BG_BASE_TERTIARY is used.",
          validate: /* @__PURE__ */ __name((value) => /^#[0-9A-Fa-f]{8}$/.test(value), "validate")
        }
      });
      chat_bubbles_default = definePlugin9({
        name: "ChatBubbles",
        description: "Adds customizable chat bubbles to the chat, similar to Flowercord.",
        authors: [
          Devs.Blaze
        ],
        start() {
          BubbleModule_default.hookBubbles();
          var getBubbleColor = /* @__PURE__ */ __name(() => {
            var userColor = settings3.get().bubbleChatColor;
            if (userColor) return userColor;
            var token = tokens.colors.BG_BASE_TERTIARY;
            return tokens.internal.resolveSemanticColor(ThemeStore.theme, token);
          }, "getBubbleColor");
          var updateBubbleAppearance = /* @__PURE__ */ __name(() => {
            var { avatarRadius, bubbleChatRadius } = settings3.get();
            var color = getBubbleColor();
            BubbleModule_default.configure(avatarRadius, bubbleChatRadius, color).catch(logger13.error);
          }, "updateBubbleAppearance");
          waitFor(byStoreName("ThemeStore"), (ThemeStore2) => {
            ThemeStore2.addChangeListener(updateBubbleAppearance);
          });
          waitFor(byProps([
            "_interceptors",
            "subscribe"
          ]), (FluxDispatcher2) => {
            for (var event of [
              "CACHE_LOADED",
              "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE"
            ]) {
              FluxDispatcher2.subscribe(event, updateBubbleAppearance);
            }
          });
          settings3.subscribe((s) => [
            s.avatarRadius,
            s.bubbleChatRadius,
            s.bubbleChatColor
          ], () => updateBubbleAppearance(), {
            equalityFn: shallow
          });
        },
        cleanup() {
          BubbleModule_default.unhookBubbles();
          settings3.unsubscribeAll();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/error-boundary/index.tsx
  var context10, meta10, definePlugin10, definePluginSettings10, logger14, patcher10;
  var init_error_boundary = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/error-boundary/index.tsx"() {
      init_shared();
      context10 = getPluginContext("error-boundary");
      ({ meta: meta10, definePlugin: definePlugin10, definePluginSettings: definePluginSettings10, logger: logger14, patcher: patcher10 } = context10);
    }
  });

  // src/utils/errors/parseComponentStack.ts
  var parseComponentStack_exports = {};
  __export(parseComponentStack_exports, {
    parseComponentStack: () => parseComponentStack
  });
  function parseComponentStack(componentStack) {
    return componentStack.split(/[\s|\n]+?in /).filter(Boolean);
  }
  var init_parseComponentStack = __esm({
    "src/utils/errors/parseComponentStack.ts"() {
      "use strict";
      __name(parseComponentStack, "parseComponentStack");
    }
  });

  // src/plugins/_core/error-boundary/CollapsibleHandler.tsx
  function CollapsibleHandler({ collapsed, setCollapsed, onCopy }) {
    var logoPrimary = useToken(tokens.colors.LOGO_PRIMARY);
    return /* @__PURE__ */ jsxs(import_react_native38.View, {
      style: {
        gap: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx(Button_default, {
          variant: "secondary",
          text: collapsed ? t3.error_boundary.screen.show_more() : t3.error_boundary.screen.show_less(),
          icon: /* @__PURE__ */ jsx(import_react_native38.Image, {
            resizeMode: "contain",
            source: findAssetId("down_arrow"),
            style: {
              width: 16,
              tintColor: logoPrimary,
              transform: [
                {
                  rotate: `${collapsed ? 0 : 180}deg`
                }
              ]
            }
          }),
          onPress: /* @__PURE__ */ __name(() => setCollapsed((v) => !v), "onPress")
        }),
        /* @__PURE__ */ jsx(Button_default, {
          variant: "secondary",
          text: t3.error_boundary.screen.copy(),
          icon: /* @__PURE__ */ jsx(import_react_native38.Image, {
            resizeMode: "contain",
            style: {
              tintColor: logoPrimary,
              width: 16
            },
            source: findAssetId("CopyIcon")
          }),
          onPress: onCopy
        })
      ]
    });
  }
  var import_react_native38;
  var init_CollapsibleHandler = __esm({
    "src/plugins/_core/error-boundary/CollapsibleHandler.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Button();
      init_i18n();
      init_assets();
      init_Discord();
      import_react_native38 = __toESM(require_react_native(), 1);
      __name(CollapsibleHandler, "CollapsibleHandler");
    }
  });

  // src/plugins/_core/error-boundary/ErrorComponentStackCard.tsx
  function ErrorComponentStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react22.useState)(true);
    var stack;
    try {
      stack = parseComponentStack(props.componentStack);
      stack = collapsed ? stack.slice(0, 4) : stack;
    } catch (e3) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(import_react_native39.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.component_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native39.View, {
            style: {
              gap: 4
            },
            children: stack.map((component, index) => /* @__PURE__ */ jsxs(import_react_native39.View, {
              style: {
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "<"
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  children: component
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "/>"
                })
              ]
            }, index))
          }),
          collapsed && /* @__PURE__ */ jsx(Text_default, {
            children: "..."
          }),
          /* @__PURE__ */ jsx(CollapsibleHandler, {
            collapsed,
            setCollapsed,
            onCopy: /* @__PURE__ */ __name(() => copyToClipboard(props.componentStack, {
              toast: false
            }), "onCopy")
          })
        ]
      })
    });
  }
  var import_react22, import_react_native39;
  var init_ErrorComponentStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_parseComponentStack();
      import_react22 = __toESM(require_react(), 1);
      import_react_native39 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_clipboard();
      init_Discord2();
      __name(ErrorComponentStackCard, "ErrorComponentStackCard");
    }
  });

  // src/utils/errors/parseErrorStack.ts
  var parseErrorStack_exports = {};
  __export(parseErrorStack_exports, {
    default: () => parseErrorStack
  });
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
    for (var i2 = 0; i2 < lines.length; ++i2) {
      var line = lines[i2];
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
      lastMessageLine = i2;
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
      var { location: location2, functionName } = entry;
      if (location2.type === "NATIVE" || location2.type === "INTERNAL_BYTECODE") {
        continue;
      }
      frames.push({
        methodName: functionName,
        file: location2.sourceUrl,
        lineNumber: location2.line1Based,
        column: location2.type === "SOURCE" ? location2.column1Based - 1 : location2.virtualOffset0Based
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
    "src/utils/errors/parseErrorStack.ts"() {
      "use strict";
      RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
      RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;
      RE_COMPONENT_NO_STACK = /^ {4}at .*$/;
      __name(isInternalBytecodeSourceUrl, "isInternalBytecodeSourceUrl");
      __name(parseLine, "parseLine");
      __name(parseHermesStack, "parseHermesStack");
      __name(convertHermesStack, "convertHermesStack");
      __name(parseErrorStack, "parseErrorStack");
    }
  });

  // src/plugins/_core/error-boundary/ErrorStackCard.tsx
  function ErrorStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react23.useState)(true);
    var stack;
    try {
      var parsedErrorStack = parseErrorStack(props.error.stack);
      stack = collapsed ? parsedErrorStack.slice(0, 4) : parsedErrorStack;
    } catch (e3) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(import_react_native40.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.call_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native40.View, {
            style: {
              gap: 4
            },
            children: stack.map((f, id) => /* @__PURE__ */ jsx(Line, {
              frame: f
            }, id))
          }),
          collapsed && /* @__PURE__ */ jsx(Text_default, {
            children: "..."
          }),
          /* @__PURE__ */ jsx(CollapsibleHandler, {
            collapsed,
            setCollapsed,
            onCopy: /* @__PURE__ */ __name(() => copyToClipboard(props.error.stack, {
              toast: false
            }), "onCopy")
          })
        ]
      })
    });
  }
  function Line(props) {
    var [collapsed, setCollapsed] = (0, import_react23.useState)(true);
    return /* @__PURE__ */ jsxs(import_react_native40.Pressable, {
      onPress: /* @__PURE__ */ __name(() => setCollapsed((v) => !v), "onPress"),
      children: [
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            fontFamily: constants.Fonts.CODE_BOLD
          },
          children: props.frame.methodName
        }),
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            fontFamily: constants.Fonts.CODE_NORMAL
          },
          ellipsizeMode: "middle",
          numberOfLines: collapsed ? 1 : void 0,
          children: /* @__PURE__ */ jsxs(Text_default, {
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
    });
  }
  var import_react23, import_react_native40;
  var init_ErrorStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_ErrorCard();
      init_parseErrorStack();
      import_react23 = __toESM(require_react(), 1);
      import_react_native40 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_i18n();
      init_clipboard();
      init_Discord2();
      init_libraries();
      __name(ErrorStackCard, "ErrorStackCard");
      __name(Line, "Line");
    }
  });

  // src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles = useStyles5();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(SafeAreaProvider, {
      children: /* @__PURE__ */ jsxs(SafeAreaView, {
        style: styles.container,
        children: [
          /* @__PURE__ */ jsxs(import_react_native41.View, {
            style: {
              gap: 4
            },
            children: [
              /* @__PURE__ */ jsx(Text_default, {
                variant: "display-lg",
                children: t3.error_boundary.uh_oh()
              }),
              /* @__PURE__ */ jsx(Text_default, {
                variant: "text-md/normal",
                children: t3.error_boundary.screen.description()
              }),
              /* @__PURE__ */ jsxs(Text_default, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                  debugInfo.os.name,
                  "; ",
                  debugInfo.discord.build,
                  " (",
                  debugInfo.discord.version,
                  ");",
                  " ",
                  debugInfo.blazecord.version,
                  " ",
                  debugInfo.blazecord.shortRevision
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native41.ScrollView, {
            fadingEdgeLength: 64,
            contentContainerStyle: {
              gap: 12
            },
            children: [
              /* @__PURE__ */ jsx(Codeblock, {
                selectable: true,
                children: props.error instanceof Error ? props.error.message : String(props.error)
              }),
              hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
                error: props.error
              }),
              isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
                componentStack: props.error.componentStack
              }) : null
            ]
          }),
          /* @__PURE__ */ jsxs(Card_default, {
            style: {
              gap: 6
            },
            children: [
              /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.reload(),
                onPress: /* @__PURE__ */ __name(() => BundleUpdaterModule.reload(), "onPress")
              }),
              !isSafeModeEnabled() && /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.safe_mode(),
                onPress: /* @__PURE__ */ __name(() => {
                  useInitConfigStore.setState((s) => ({
                    config: {
                      ...s.config,
                      safeMode: true
                    }
                  }));
                }, "onPress")
              }),
              /* @__PURE__ */ jsx(Button_default, {
                variant: "destructive",
                text: t3.error_boundary.retry_render(),
                onPress: /* @__PURE__ */ __name(() => props.reset(), "onPress")
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native41, useStyles5;
  var init_ErrorBoundaryScreen = __esm({
    "src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      init_i18n();
      init_native();
      init_isError();
      import_react_native41 = __toESM(require_react_native(), 1);
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      init_info();
      init_Button();
      init_Discord2();
      init_libraries();
      init_react_native_safe_area_context();
      init_loader();
      init_useInitConfigStore();
      useStyles5 = createStyles(() => ({
        container: {
          flex: 1,
          backgroundColor: tokens.colors.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          height: "100%",
          padding: 8,
          gap: 12
        }
      }));
      __name(ErrorBoundaryScreen, "ErrorBoundaryScreen");
    }
  });

  // src/plugins/_core/error-boundary/index.tsx
  var error_boundary_exports = {};
  __export(error_boundary_exports, {
    default: () => error_boundary_default
  });
  var error_boundary_default;
  var init_error_boundary2 = __esm({
    "src/plugins/_core/error-boundary/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_error_boundary();
      init_constants();
      init_filters2();
      init_ErrorBoundaryScreen();
      init_wrappers();
      error_boundary_default = definePlugin10({
        name: "ErrorBoundary",
        description: "Error boundary for React components",
        authors: [
          Devs.Blaze
        ],
        required: true,
        patches: [
          {
            id: "error-boundary",
            target: byName("ErrorBoundary"),
            patch(module3, patcher16) {
              patcher16.after(module3.prototype, "render", function() {
                var { state: { error } } = this;
                if (!error) return null;
                logger14.error(error.stack);
                var reset = this.setState.bind(this, {
                  error: null
                });
                return /* @__PURE__ */ jsx(ErrorBoundaryScreen, {
                  error,
                  reset
                });
              });
            }
          }
        ],
        start() {
          var jsxRuntime2 = lookupByProps("jsx", "jsxs").await();
          var callback = /* @__PURE__ */ __name((args) => {
            if (!args[0]) throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
          }, "callback");
          patcher10.after.async(jsxRuntime2, "jsx", callback);
          patcher10.after.async(jsxRuntime2, "jsxs", callback);
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/no-track/index.ts
  var context11, meta11, definePlugin11, definePluginSettings11, logger15, patcher11;
  var init_no_track = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/no-track/index.ts"() {
      init_shared();
      context11 = getPluginContext("no-track");
      ({ meta: meta11, definePlugin: definePlugin11, definePluginSettings: definePluginSettings11, logger: logger15, patcher: patcher11 } = context11);
    }
  });

  // src/plugins/_core/no-track/index.ts
  var no_track_exports = {};
  __export(no_track_exports, {
    default: () => no_track_default
  });
  var no_track_default;
  var init_no_track2 = __esm({
    "src/plugins/_core/no-track/index.ts"() {
      "use strict";
      init_constants();
      init_filters2();
      init_no_track();
      no_track_default = definePlugin11({
        name: "NoTrack",
        description: "Prevents Discord's tracking analytics and Sentry crash reporting",
        authors: [
          Devs.Blaze
        ],
        required: true,
        patches: [
          {
            id: "no-sentry",
            target: byProps([
              "initSentry"
            ]),
            patch(module3, patcher16) {
              patcher16.instead(module3, "initSentry", () => void 0);
            }
          },
          {
            id: "no-tracker",
            target: byProps([
              "track",
              "trackMaker"
            ]),
            patch(module3, patcher16) {
              patcher16.instead(module3, "track", () => Promise.resolve());
            }
          }
        ]
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/index.ts
  var context12, meta12, definePlugin12, definePluginSettings12, logger16, patcher12;
  var init_painter = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/index.ts"() {
      init_shared();
      context12 = getPluginContext("painter");
      ({ meta: meta12, definePlugin: definePlugin12, definePluginSettings: definePluginSettings12, logger: logger16, patcher: patcher12 } = context12);
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/resolver.ts
  var context13, meta13, definePlugin13, definePluginSettings13, logger17, patcher13;
  var init_resolver = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/resolver.ts"() {
      init_shared();
      context13 = getPluginContext("painter");
      ({ meta: meta13, definePlugin: definePlugin13, definePluginSettings: definePluginSettings13, logger: logger17, patcher: patcher13 } = context13);
    }
  });

  // src/plugins/_core/painter/patches/resolver.ts
  function patchDefinitionAndResolver() {
    var _loop = /* @__PURE__ */ __name(function(key2) {
      Object.defineProperty(tokensModule.RawColor, key2, {
        configurable: true,
        enumerable: true,
        get: /* @__PURE__ */ __name(() => {
          var ret = getCurrentRef()?.color.raw[key2];
          return ret || origRaw[key2];
        }, "get")
      });
    }, "_loop");
    var origRaw = {
      ...tokensModule.RawColor
    };
    var callback = /* @__PURE__ */ __name(([theme]) => theme === getCurrentRef()?.key ? [
      getCurrentRef().color.reference
    ] : void 0, "callback");
    for (var key of Object.keys(tokensModule.RawColor)) _loop(key);
    patcher13.before(isThemeModule, "isThemeDark", callback);
    patcher13.before(isThemeModule, "isThemeLight", callback);
    patcher13.before(getNativeModule("NativeThemeModule"), "updateTheme", callback);
    patcher13.instead(tokensModule.default.internal, "resolveSemanticColor", (args, orig) => {
      var _colorRef = getCurrentRef();
      if (!_colorRef) return orig(...args);
      if (args[0] !== getCurrentRef().key) return orig(...args);
      args[0] = _colorRef.color.reference;
      var [name, colorDef] = extractInfo(_colorRef.color.reference, args[1]);
      var semanticDef = _colorRef.color.semantic[name];
      if (semanticDef?.value) {
        if (semanticDef.opacity === 1) return semanticDef.value;
        return chroma(semanticDef.value).alpha(semanticDef.opacity).hex();
      }
      var rawValue = _colorRef.color.raw[colorDef.raw];
      if (rawValue) {
        return colorDef.opacity === 1 ? rawValue : chroma(rawValue).alpha(colorDef.opacity).hex();
      }
      return orig(...args);
    });
    patcher13.attachDisposer(() => {
      Object.defineProperty(tokensModule, "RawColor", {
        configurable: true,
        writable: true,
        value: origRaw
      });
    });
  }
  function extractInfo(themeName, colorObj) {
    var propName = colorObj[extractInfo._sym ??= Object.getOwnPropertySymbols(colorObj)[0]];
    var colorDef = tokensModule.SemanticColor[propName];
    return [
      propName,
      colorDef[themeName]
    ];
  }
  var tokensModule, isThemeModule;
  var init_resolver2 = __esm({
    "src/plugins/_core/painter/patches/resolver.ts"() {
      "use strict";
      init_metro();
      init_filters2();
      init_wrappers();
      init_useThemeStore();
      init_native();
      init_resolver();
      init_libraries();
      tokensModule = lookupByProps("SemanticColor").asLazy();
      isThemeModule = lookup(byWriteableProp("isThemeDark")).asLazy();
      __name(patchDefinitionAndResolver, "patchDefinitionAndResolver");
      __name(extractInfo, "extractInfo");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/stores.ts
  var context14, meta14, definePlugin14, definePluginSettings14, logger18, patcher14;
  var init_stores2 = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/stores.ts"() {
      init_shared();
      context14 = getPluginContext("painter");
      ({ meta: meta14, definePlugin: definePlugin14, definePluginSettings: definePluginSettings14, logger: logger18, patcher: patcher14 } = context14);
    }
  });

  // src/plugins/_core/painter/patches/stores.ts
  function patchSelectivelySyncedUserSettingsStore() {
    var isPersisting = false;
    var modifiedInitialState = false;
    patcher14.after(SelectivelySyncedUserSettingsStore, "getState", (_, ret) => {
      var currentRef = getCurrentRef();
      if (ret.appearance?.settings?.theme && currentRef) {
        if (!isPersisting && !modifiedInitialState) {
          modifiedInitialState = true;
          ret.appearance.settings.theme = currentRef.key;
        } else if (isPersisting) {
          ret = cloneDeep(ret);
          ret.appearance.settings.theme = currentRef.color.reference;
        }
      }
      return ret;
    });
    patcher14.instead(SelectivelySyncedUserSettingsStore, "persist", (_, orig) => {
      isPersisting = true;
      try {
        orig();
      } finally {
        isPersisting = false;
      }
    });
  }
  var SelectivelySyncedUserSettingsStore;
  var init_stores3 = __esm({
    "src/plugins/_core/painter/patches/stores.ts"() {
      "use strict";
      init_stores2();
      init_stores();
      init_dist();
      init_useThemeStore();
      SelectivelySyncedUserSettingsStore = getStore("SelectivelySyncedUserSettingsStore");
      __name(patchSelectivelySyncedUserSettingsStore, "patchSelectivelySyncedUserSettingsStore");
    }
  });

  // src/plugins/_core/painter/index.ts
  var painter_exports = {};
  __export(painter_exports, {
    default: () => painter_default
  });
  var painter_default;
  var init_painter2 = __esm({
    "src/plugins/_core/painter/index.ts"() {
      "use strict";
      init_painter();
      init_constants();
      init_modules();
      init_filters2();
      init_resolver2();
      init_stores3();
      painter_default = definePlugin12({
        name: "Painter",
        description: "Provides themes functionalities within BlazeCord",
        authors: [
          Devs.Blaze
        ],
        required: true,
        start() {
          waitFor(byProps([
            "SemanticColor"
          ]), () => {
            patchDefinitionAndResolver();
            patchSelectivelySyncedUserSettingsStore();
          });
        }
      });
    }
  });

  // plugins-importer:/home/blaze/coding/discord/redux/src/plugins
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins = __esm({
    "plugins-importer:/home/blaze/coding/discord/redux/src/plugins"() {
      plugins_default = {
        "toasts": (init_toasts3(), __toCommonJS(toasts_exports2)).default("/_api/toasts"),
        "settings": (init_settings3(), __toCommonJS(settings_exports2)).default("/_api/settings"),
        "dummy": (init_dummy2(), __toCommonJS(dummy_exports)).default("/dummy"),
        "expression-utils": (init_expression_utils2(), __toCommonJS(expression_utils_exports)).default("/expression-utils"),
        "devtoolkit": (init_devtoolkit2(), __toCommonJS(devtoolkit_exports)).default("/devtoolkit"),
        "nitro-icons": (init_nitro_icons2(), __toCommonJS(nitro_icons_exports)).default("/nitro-icons"),
        "experiments": (init_experiments2(), __toCommonJS(experiments_exports)).default("/experiments"),
        "chat-bubbles": (init_chat_bubbles2(), __toCommonJS(chat_bubbles_exports)).default("/chat-bubbles"),
        "error-boundary": (init_error_boundary2(), __toCommonJS(error_boundary_exports)).default("/_core/error-boundary"),
        "no-track": (init_no_track2(), __toCommonJS(no_track_exports)).default("/_core/no-track"),
        "painter": (init_painter2(), __toCommonJS(painter_exports)).default("/_core/painter")
      };
    }
  });

  // src/stores/usePluginStore.ts
  var usePluginStore_exports = {};
  __export(usePluginStore_exports, {
    default: () => usePluginStore_default,
    initializePlugins: () => initializePlugins
  });
  function startPlugin(draft, id) {
    var plugin = PLUGINS[id];
    if (isSafeModeEnabled() && !plugin.required) {
      logger19.info(`Plugin ${plugin.$id} is not required and safe mode is enabled, skipping`);
      return;
    }
    if (plugin.isAvailable?.() === false) {
      logger19.warn(`Plugin ${plugin.$id} is not available, skipping`);
      return;
    }
    if (draft.states[id].running) {
      logger19.warn(`${plugin.$id} already started`);
      return;
    }
    logger19.debug(`Starting plugin '${plugin.$id}'`);
    try {
      applyPluginPatches(id, plugin);
      draft.states[id].running = true;
      plugin.start?.();
    } catch (e3) {
      logger19.error`Failed to start ${plugin.$id}: ${e3}`;
      return;
    }
    return;
  }
  function applyPluginPatches(id, plugin) {
    var _loop = /* @__PURE__ */ __name(function(pluginPatch2) {
      var patcher16 = pluginPatcherContext.createChild({
        id: pluginPatch2.id ?? pluginPatch2.target.key
      });
      var apply = /* @__PURE__ */ __name(() => {
        logger19.debug(`Applying ${patcher16.id} patch`);
        patcher16.reuse();
        waitFor(pluginPatch2.target, (module3) => {
          pluginPatch2.patch(module3, patcher16);
        });
      }, "apply");
      var settings4 = getPluginSettings(id);
      if (settings4 && pluginPatch2.predicate) {
        var { predicate } = pluginPatch2;
        var unsub = settings4.subscribe(() => predicate(), () => {
          if (predicate()) {
            apply();
          } else {
            logger19.debug(`Disposing ${patcher16.id} patch`);
            patcher16.dispose();
          }
        }, {
          fireImmediately: true
        });
        pluginPatcherContext.attachDisposer(unsub);
      } else {
        if (!pluginPatch2.predicate || pluginPatch2.predicate()) apply();
      }
    }, "_loop");
    if (!plugin.patches) return;
    var pluginPatcherContext = getContextualPatcher(id);
    pluginPatcherContext.reuse();
    for (var pluginPatch of plugin.patches) _loop(pluginPatch);
  }
  function cleanupPlugin(draft, id) {
    var plugin = PLUGINS[id];
    if (plugin.required) {
      logger19.warn(`Cannot stop required plugin '${plugin.$id}'`);
      if (true) throw new Error(`Cannot stop required plugin '${plugin.$id}'`);
      return;
    }
    if (!draft.states[id].running) {
      logger19.warn(`${plugin.$id} already stopped`);
      return;
    }
    logger19.info(`Cleaning up plugin ${plugin.$id}`);
    try {
      var patcher16 = getContextualPatcher(id, false);
      if (patcher16) {
        patcher16.dispose();
        patcher16.children.length = 0;
      }
      plugin.cleanup?.();
    } catch (e3) {
      logger19.error(`Failed to cleanup ${plugin.$id}: ${e3}`);
      return;
    }
    draft.states[id].running = false;
    return;
  }
  function initializePlugins() {
    usePluginStore.persist.rehydrate();
    getProxyFactory(PLUGINS)?.();
    var { startPlugin: startPlugin2, settings: settings4 } = usePluginStore.getState();
    for (var id in PLUGINS) {
      if (settings4[id].enabled) {
        startPlugin2(id);
      }
    }
  }
  var logger19, PLUGINS, usePluginStore, usePluginStore_default;
  var init_usePluginStore = __esm({
    "src/stores/usePluginStore.ts"() {
      "use strict";
      init_esm();
      init_middleware();
      init_immer2();
      init_kvStorage();
      init_lazy();
      init_logger();
      init_loader();
      init_modules();
      init_utils2();
      logger19 = wtlogger.createChild("PluginStore");
      PLUGINS = lazyValue(() => (init_plugins(), __toCommonJS(plugins_exports)).default, {
        hint: "object"
      });
      __name(startPlugin, "startPlugin");
      __name(applyPluginPatches, "applyPluginPatches");
      __name(cleanupPlugin, "cleanupPlugin");
      __name(initializePlugins, "initializePlugins");
      usePluginStore = create(subscribeWithSelector(persist(immer2((set2) => ({
        settings: {},
        states: {},
        /**
                 * Toggle a plugin's enabled state
                 */
        togglePlugin: /* @__PURE__ */ __name((id, value, startOrStop = true) => set2((draft) => {
          var target = value ?? !draft.settings[id].enabled;
          if (target === draft.settings[id].enabled) return;
          draft.settings[id].enabled = target;
          if (startOrStop && !isSafeModeEnabled()) {
            if (draft.settings[id].enabled) {
              startPlugin(draft, id);
            } else {
              cleanupPlugin(draft, id);
            }
          }
        }), "togglePlugin"),
        startPlugin: /* @__PURE__ */ __name((id) => set2((draft) => startPlugin(draft, id)), "startPlugin"),
        cleanupPlugin: /* @__PURE__ */ __name((id) => set2((draft) => cleanupPlugin(draft, id)), "cleanupPlugin")
      })), {
        name: "plugin-store",
        storage: createJSONStorage(() => kvStorage),
        partialize: /* @__PURE__ */ __name((state2) => ({
          settings: state2.settings
        }), "partialize")
      })));
      usePluginStore_default = usePluginStore;
    }
  });

  // src/patcher/index.ts
  var patcher_exports2 = {};
  __export(patcher_exports2, {
    after: () => after,
    before: () => before,
    instead: () => instead
  });
  var before, instead, after;
  var init_patcher2 = __esm({
    "src/patcher/index.ts"() {
      "use strict";
      init_patcher();
      before = getPatchFunc("b");
      instead = getPatchFunc("i");
      after = getPatchFunc("a");
    }
  });

  // src/patcher/contextual.ts
  var contextual_exports = {};
  __export(contextual_exports, {
    createContextualPatcher: () => createContextualPatcher
  });
  function createContextualPatcher({ id }) {
    var unpatches2 = [];
    function shimDisposableFn(f) {
      var base = /* @__PURE__ */ __name((...props) => {
        if (contextualPatcher.disposed) return () => true;
        var up = f(...props);
        unpatches2.push(up);
        return up;
      }, "base");
      for (var key in f) if (typeof f[key] === "function") {
        base[key] = shimDisposableFn(f[key]);
      }
      return base;
    }
    __name(shimDisposableFn, "shimDisposableFn");
    var contextualPatcher = {
      id,
      children: [],
      before: shimDisposableFn(before),
      instead: shimDisposableFn(instead),
      after: shimDisposableFn(after),
      detached: patcher_exports2,
      disposed: false,
      attachDisposer(...cbs) {
        if (contextualPatcher.disposed) {
          for (var cb of cbs) {
            if (typeof cb === "function") cb();
          }
        } else {
          unpatches2.push(...cbs.map((cb2) => () => !!cb2()));
        }
      },
      dispose() {
        contextualPatcher.disposed = true;
        for (var unpatch2 of unpatches2) {
          unpatch2();
        }
        for (var child of this.children) {
          child.dispose();
        }
      },
      reuse() {
        this.dispose();
        contextualPatcher.disposed = false;
        for (var child of this.children) {
          child.reuse();
        }
      },
      createChild(options) {
        var patcher16 = createContextualPatcher({
          ...options,
          id: `${id}/${options.id}`
        });
        patcher16.parent = this;
        this.children.push(patcher16);
        return patcher16;
      }
    };
    return contextualPatcher;
  }
  var init_contextual = __esm({
    "src/patcher/contextual.ts"() {
      "use strict";
      init_emptyModule();
      init_patcher2();
      __name(createContextualPatcher, "createContextualPatcher");
    }
  });

  // src/plugins/utils.ts
  function getContextualPatcher(id, create2 = true) {
    if (patcherRegistry.has(id)) return patcherRegistry.get(id);
    if (!create2) return void 0;
    var patcher16 = createContextualPatcher({
      id
    });
    patcherRegistry.set(id, patcher16);
    return patcher16;
  }
  function getPluginSettings(id) {
    return settingsDefRegistry.get(id);
  }
  function registerPlugin(id, plugin) {
    var pluginState = {
      running: false
    };
    var pluginSettings = toDefaulted(usePluginStore_default.getState().settings[id] ?? {}, {
      enabled: Boolean(plugin.preenabled === true || plugin.required || false)
    });
    if (settingsDefRegistry.has(id)) {
      var def = settingsDefRegistry.get(id).definition;
      setDefaultPluginSettings(def, pluginSettings);
    }
    usePluginStore_default.persist.rehydrate();
    usePluginStore_default.setState((state2) => {
      state2.states[id] = pluginState;
      state2.settings[id] = pluginSettings;
    });
    Object.defineProperties(plugin, {
      $id: {
        value: id
      },
      $state: {
        get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().states[id], "get")
      },
      $settings: {
        get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().settings[id], "get")
      },
      $isToggleable: {
        value: /* @__PURE__ */ __name(() => !plugin.required && plugin.isAvailable?.() !== false, "value")
      },
      asAddonMetadata: {
        value: memoize2(() => ({
          id,
          name: plugin.name,
          description: plugin.description,
          authors: plugin.authors
        }))
      }
    });
    return (relativePath) => {
      Object.defineProperties(plugin, {
        $path: {
          value: relativePath || "<unknown>"
        }
      });
      return plugin;
    };
  }
  function setDefaultPluginSettings(def, pluginSettings) {
    for (var [key, setting] of Object.entries(def)) {
      if (key in pluginSettings) continue;
      if ("default" in setting) pluginSettings[key] = setting.default;
      else {
        switch (setting.type) {
          case "string":
            pluginSettings[key] = "";
            break;
          case "boolean":
            pluginSettings[key] = false;
            break;
        }
      }
      if ("options" in setting) {
        switch (setting.type) {
          case "radio": {
            var defaultOption = setting.options.find((opt) => opt.default);
            if (defaultOption != null) pluginSettings[key] = defaultOption?.value ?? null;
            else pluginSettings[key] = null;
            break;
          }
          case "select": {
            var defaults2 = setting.options.filter((opt) => opt.default).map((opt) => opt.value);
            if (defaults2.length > 0) pluginSettings[key] = defaults2;
            else pluginSettings[key] = [];
            break;
          }
        }
      }
    }
  }
  function registerPluginSettings(id, def) {
    var unsubscribers = /* @__PURE__ */ new Set();
    var definition = {
      pluginId: id,
      definition: def,
      get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().settings[definition.pluginId], "get"),
      use(selector) {
        return usePluginStore_default((state2) => selector(state2.settings[this.pluginId]));
      },
      subscribe(selector, listener, options) {
        var unsub = usePluginStore_default.subscribe((state2) => selector(state2.settings[this.pluginId]), (state2, prevState) => listener(state2, prevState), options);
        unsubscribers.add(unsub);
        return unsub;
      },
      unsubscribeAll() {
        for (var unsub of unsubscribers) unsub();
      }
    };
    settingsDefRegistry.set(id, definition);
    return definition;
  }
  function isPluginInternal(plugin) {
    return plugin.$path.startsWith("/_");
  }
  var patcherRegistry, settingsDefRegistry;
  var init_utils2 = __esm({
    "src/plugins/utils.ts"() {
      "use strict";
      init_compat();
      init_usePluginStore();
      init_contextual();
      patcherRegistry = /* @__PURE__ */ new Map();
      settingsDefRegistry = /* @__PURE__ */ new Map();
      __name(getContextualPatcher, "getContextualPatcher");
      __name(getPluginSettings, "getPluginSettings");
      __name(registerPlugin, "registerPlugin");
      __name(setDefaultPluginSettings, "setDefaultPluginSettings");
      __name(registerPluginSettings, "registerPluginSettings");
      __name(isPluginInternal, "isPluginInternal");
    }
  });

  // src/plugins/shared.ts
  function getPluginContext(id) {
    return {
      definePlugin(plugin) {
        return registerPlugin(id, plugin);
      },
      definePluginSettings(def) {
        return registerPluginSettings(id, def);
      },
      meta: {
        id
      },
      logger: pluginlogger.createChild(id),
      patcher: getContextualPatcher(id)
    };
  }
  var pluginlogger;
  var init_shared = __esm({
    "src/plugins/shared.ts"() {
      "use strict";
      init_logger();
      init_utils2();
      pluginlogger = wtlogger.createChild("Plugins");
      __name(getPluginContext, "getPluginContext");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/parser.ts
  var context15, meta15, definePlugin15, definePluginSettings15, logger20, patcher15;
  var init_parser = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/parser.ts"() {
      init_shared();
      context15 = getPluginContext("painter");
      ({ meta: meta15, definePlugin: definePlugin15, definePluginSettings: definePluginSettings15, logger: logger20, patcher: patcher15 } = context15);
    }
  });

  // src/plugins/_core/painter/parser.ts
  function parseColorManifest(manifest) {
    var semanticColorDefinitions = {};
    for (var [semanticColorKey, semanticColorValue] of Object.entries(manifest.main.colors.semantic ?? {})) {
      var { value, opacity: semanticColorOpacity } = semanticColorValue;
      if (value[0] === "#") {
        semanticColorDefinitions[semanticColorKey] = {
          value,
          opacity: semanticColorOpacity ?? 1
        };
      } else if (value[0] === "$") {
        var rawColorValue = tokensModule2.RawColor[value.slice(1)];
        if (!rawColorValue) {
          logger20.warn(`Unknown raw color reference: ${value}`);
          continue;
        }
        semanticColorDefinitions[semanticColorKey] = {
          value: rawColorValue,
          opacity: semanticColorOpacity ?? 1
        };
      }
    }
    return {
      reference: determineColorReference(manifest.main.base),
      semantic: semanticColorDefinitions,
      raw: maybeApplyAndroidExtraKeys(manifest.main.colors.raw),
      background: manifest.main.background
    };
  }
  function maybeApplyAndroidExtraKeys(rawColors) {
    if (import_react_native42.Platform.OS !== "android") return rawColors;
    if (!rawColors) return {};
    var copy = {
      ...rawColors
    };
    var alphaMap = {
      BLACK_ALPHA_60: [
        "BLACK",
        0.6
      ],
      BRAND_NEW_360_ALPHA_20: [
        "BRAND_360",
        0.2
      ],
      BRAND_NEW_360_ALPHA_25: [
        "BRAND_360",
        0.25
      ],
      BRAND_NEW_500_ALPHA_20: [
        "BRAND_500",
        0.2
      ],
      PRIMARY_DARK_500_ALPHA_20: [
        "PRIMARY_500",
        0.2
      ],
      PRIMARY_DARK_700_ALPHA_60: [
        "PRIMARY_700",
        0.6
      ],
      STATUS_GREEN_500_ALPHA_20: [
        "GREEN_500",
        0.2
      ],
      STATUS_RED_500_ALPHA_20: [
        "RED_500",
        0.2
      ]
    };
    for (var key in alphaMap) {
      var [colorKey, alpha] = alphaMap[key];
      if (!rawColors[colorKey]) continue;
      copy[key] ??= chroma(rawColors[colorKey]).alpha(alpha).hex();
    }
    return copy;
  }
  var import_react_native42, tokensModule2, determineColorReference;
  var init_parser2 = __esm({
    "src/plugins/_core/painter/parser.ts"() {
      "use strict";
      import_react_native42 = __toESM(require_react_native(), 1);
      init_libraries();
      init_wrappers();
      init_parser();
      tokensModule2 = lookupByProps("SemanticColor").asLazy();
      determineColorReference = /* @__PURE__ */ __name((type) => type === "dark" ? "darker" : "light", "determineColorReference");
      __name(parseColorManifest, "parseColorManifest");
      __name(maybeApplyAndroidExtraKeys, "maybeApplyAndroidExtraKeys");
    }
  });

  // src/plugins/_core/painter/example_theme.ts
  var MOCHA_THEME;
  var init_example_theme = __esm({
    "src/plugins/_core/painter/example_theme.ts"() {
      "use strict";
      MOCHA_THEME = {
        id: "chadpuccin.mocha",
        type: "theme",
        display: {
          name: "Chadpuccin Mocha",
          description: "A (spec v3) warmer, more wholesome (unofficial!) catppuccin flavor",
          authors: [
            {
              name: "Moodzz",
              id: "807170846497570848"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#726F80"
              },
              BACKGROUND_ACCENT: {
                value: "#89b4fa"
              },
              BACKGROUND_MENTIONED: {
                value: "#f9e2af",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#9B98AB"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#363240"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#363240"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#363240"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#363240"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#221E2A"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#1B1822"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#1B1822"
              },
              BACKGROUND_PRIMARY: {
                value: "#221E2A"
              },
              BACKGROUND_SECONDARY: {
                value: "#1B1822"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#1B1822"
              },
              BACKGROUND_TERTIARY: {
                value: "#141119"
              },
              BG_BASE_PRIMARY: {
                value: "#221E2A"
              },
              BG_BASE_SECONDARY: {
                value: "#1B1822"
              },
              BG_BASE_TERTIARY: {
                value: "#141119"
              },
              EMBED_BACKGROUND: {
                value: "#363240"
              },
              CARD_PRIMARY_BG: {
                value: "#221E2A"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#726F80"
              },
              CARD_SECONDARY_BG: {
                value: "#221E2A"
              },
              CHANNEL_ICON: {
                value: "#9B98AB"
              },
              CHANNELS_DEFAULT: {
                value: "#a6adc8"
              },
              CHAT_BACKGROUND: {
                value: "#221E2A"
              },
              HEADER_PRIMARY: {
                value: "#cdd6f4"
              },
              HEADER_SECONDARY: {
                value: "#bac2de"
              },
              INPUT_BACKGROUND: {
                value: "#141119"
              },
              INTERACTIVE_ACTIVE: {
                value: "#cdd6f4"
              },
              INTERACTIVE_HOVER: {
                value: "#9B98AB"
              },
              INTERACTIVE_MUTED: {
                value: "#a6adc8"
              },
              INTERACTIVE_NORMAL: {
                value: "#9B98AB"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#363240"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#4A4755"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#1B1822"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#cdd6f4"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#cdd6f4"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#1B1822"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#89b4fa"
              },
              TEXT_LINK: {
                value: "#89b4fa"
              },
              TEXT_MUTED: {
                value: "#a6adc8"
              },
              TEXT_NORMAL: {
                value: "#cdd6f4"
              },
              TEXT_PRIMARY: {
                value: "#cdd6f4"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#5E5B6A"
              }
            },
            raw: {
              BRAND_260: "#726F80",
              BRAND_360: "#89b4fa",
              BRAND_500: "#89b4fa",
              BRAND_560: "#89b4fa",
              BLUE_260: "#89b4fa",
              BLUE_300: "#89b4fa",
              BLUE_330: "#89b4fa",
              BLUE_345: "#89b4fa",
              BLUE_360: "#89b4fa",
              BLUE_400: "#89b4fa",
              BLUE_430: "#89b4fa",
              BLUE_460: "#89b4fa",
              BLUE_500: "#89b4fa",
              BLUE_530: "#89b4fa",
              BLUE_560: "#89b4fa",
              BLUE_600: "#89b4fa",
              BLUE_630: "#89b4fa",
              BLUE_660: "#89b4fa",
              BLUE_700: "#89b4fa",
              PRIMARY_100: "#cdd6f4",
              PRIMARY_300: "#221E2A",
              PRIMARY_360: "#cba6f7",
              PRIMARY_400: "#5E5B6A",
              PRIMARY_460: "#9B98AB",
              PRIMARY_500: "#cdd6f4",
              PRIMARY_600: "#363240",
              PRIMARY_630: "#363240",
              PRIMARY_660: "#141119",
              PRIMARY_700: "#141119",
              PRIMARY_800: "#1B1822",
              PLUM_10: "#9B98AB",
              PLUM_13: "#726F80",
              PLUM_15: "#4A4755",
              PLUM_16: "#363240",
              PLUM_17: "#141119",
              PLUM_18: "#363240",
              PLUM_20: "#1B1822",
              PLUM_22: "#141119",
              PLUM_3: "#cdd6f4",
              PLUM_4: "#89b4fa",
              PLUM_6: "#cdd6f4",
              GREEN_100: "#a6e3a1",
              GREEN_130: "#a6e3a1",
              GREEN_160: "#a6e3a1",
              GREEN_200: "#a6e3a1",
              GREEN_230: "#a6e3a1",
              GREEN_260: "#a6e3a1",
              GREEN_300: "#a6e3a1",
              GREEN_330: "#a6e3a1",
              GREEN_345: "#a6e3a1",
              GREEN_360: "#a6e3a1",
              GREEN_400: "#a6e3a1",
              GREEN_430: "#a6e3a1",
              GREEN_460: "#a6e3a1",
              GREEN_500: "#a6e3a1",
              GREEN_530: "#a6e3a1",
              GREEN_560: "#a6e3a1",
              GREEN_600: "#a6e3a1",
              GREEN_630: "#a6e3a1",
              GREEN_660: "#a6e3a1",
              GREEN_700: "#a6e3a1",
              GREEN_730: "#a6e3a1",
              GREEN_760: "#a6e3a1",
              GREEN_800: "#a6e3a1",
              GREEN_830: "#a6e3a1",
              GREEN_860: "#a6e3a1",
              GREEN_900: "#a6e3a1",
              GUILD_BOOSTING_BLUE: "#89b4fa",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#89b4fa",
              GUILD_BOOSTING_PINK: "#f5c2e7",
              GUILD_BOOSTING_PURPLE: "#cba6f7",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#cba6f7",
              ORANGE_260: "#fab387",
              ORANGE_300: "#fab387",
              ORANGE_330: "#fab387",
              ORANGE_345: "#fab387",
              ORANGE_360: "#fab387",
              ORANGE_400: "#fab387",
              ORANGE_430: "#fab387",
              ORANGE_460: "#fab387",
              ORANGE_500: "#fab387",
              ORANGE_530: "#fab387",
              ORANGE_560: "#fab387",
              ORANGE_600: "#fab387",
              ORANGE_630: "#fab387",
              ORANGE_660: "#fab387",
              ORANGE_700: "#fab387",
              RED_260: "#f38ba8",
              RED_300: "#f38ba8",
              RED_330: "#f38ba8",
              RED_345: "#f38ba8",
              RED_360: "#f38ba8",
              RED_400: "#f38ba8",
              RED_430: "#f38ba8",
              RED_460: "#f38ba8",
              RED_500: "#f38ba8",
              RED_530: "#f38ba8",
              RED_560: "#f38ba8",
              RED_600: "#f38ba8",
              RED_630: "#f38ba8",
              RED_660: "#f38ba8",
              RED_700: "#f38ba8",
              YELLOW_100: "#f9e2af",
              YELLOW_130: "#f9e2af",
              YELLOW_160: "#f9e2af",
              YELLOW_200: "#f9e2af",
              YELLOW_230: "#f9e2af",
              YELLOW_260: "#f9e2af",
              YELLOW_300: "#f9e2af",
              YELLOW_330: "#f9e2af",
              YELLOW_345: "#f9e2af",
              YELLOW_360: "#f9e2af",
              YELLOW_400: "#f9e2af",
              YELLOW_430: "#f9e2af",
              YELLOW_460: "#f9e2af",
              YELLOW_500: "#f9e2af",
              YELLOW_530: "#f9e2af",
              YELLOW_560: "#f9e2af",
              YELLOW_600: "#f9e2af",
              YELLOW_630: "#f9e2af",
              YELLOW_660: "#f9e2af",
              YELLOW_700: "#f9e2af",
              YELLOW_730: "#f9e2af",
              YELLOW_760: "#f9e2af",
              YELLOW_800: "#f9e2af",
              YELLOW_830: "#f9e2af",
              YELLOW_860: "#f9e2af",
              YELLOW_900: "#f9e2af",
              WHITE: "#221E2A",
              WHITE_500: "#221E2A"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/example_theme_1.ts
  var ROSIE_PINK_THEME;
  var init_example_theme_1 = __esm({
    "src/plugins/_core/painter/example_theme_1.ts"() {
      "use strict";
      ROSIE_PINK_THEME = {
        id: "rosie.pink",
        type: "theme",
        display: {
          name: "Rosie Pink",
          description: "A cute pink theme for Discord.",
          authors: [
            {
              name: "Rosie<3",
              id: "581573474296791211"
            }
          ]
        },
        asAddonMetadata: /* @__PURE__ */ __name(() => {
          throw new Error("Function not implemented.");
        }, "asAddonMetadata"),
        main: {
          base: "dark",
          colors: {
            semantic: {
              CHAT_BACKGROUND: {
                value: "$PRIMARY_600"
              },
              HEADER_PRIMARY: {
                value: "#e792c5"
              },
              HEADER_SECONDARY: {
                value: "$PRIMARY_300"
              },
              TEXT_NORMAL: {
                value: "#fbfbfb"
              },
              TEXT_MUTED: {
                value: "#e792c1"
              },
              INTERACTIVE_NORMAL: {
                value: "$PRIMARY_300"
              },
              INTERACTIVE_HOVER: {
                value: "#dedcde"
              },
              INTERACTIVE_ACTIVE: {
                value: "$PRIMARY_200"
              },
              INTERACTIVE_MUTED: {
                value: "#bf8ab0"
              },
              BACKGROUND_PRIMARY: {
                value: "$PRIMARY_600"
              },
              CARD_PRIMARY_BG: {
                value: "$PRIMARY_600"
              },
              BG_BASE_PRIMARY: {
                value: "$PRIMARY_600"
              },
              BACKGROUND_SECONDARY: {
                value: "#332831"
              },
              CARD_SECONDARY_BG: {
                value: "#332831"
              },
              BG_BASE_SECONDARY: {
                value: "#221b21"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#1f191d"
              },
              BACKGROUND_TERTIARY: {
                value: "#282027"
              },
              BG_BASE_TERTIARY: {
                value: "#282027"
              },
              BACKGROUND_ACCENT: {
                value: "#ffb5f3"
              },
              BACKGROUND_FLOATING: {
                value: "#292228"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#201820"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#2b232a"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#2d242c"
              },
              BACKGROUND_MESSAGE_HOVER: {
                value: "$PRIMARY_200",
                opacity: 0.02
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "$PRIMARY_200",
                opacity: 0.02
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "$PRIMARY_200",
                opacity: 0.08
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "$PRIMARY_200",
                opacity: 0.04
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#382e37"
              },
              BACKGROUND_MENTIONED: {
                value: "#ff63b1",
                opacity: 0.37
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#ffabd5",
                opacity: 0.5
              },
              SCROLLBAR_THIN_THUMB: {
                value: "#000",
                opacity: 0
              },
              SCROLLBAR_THIN_TRACK: {
                value: "#000",
                opacity: 0
              },
              SCROLLBAR_AUTO_THUMB: {
                value: "#000",
                opacity: 0
              },
              SCROLLBAR_AUTO_TRACK: {
                value: "#000",
                opacity: 0.1
              },
              CHANNELTEXTAREA_BACKGROUND: {
                value: "#111"
              },
              REDESIGN_ACTIVITY_CARD_BACKGROUND: {
                value: "#30272e"
              },
              REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED: {
                value: "#685564"
              },
              CHANNELS_DEFAULT: {
                value: "#b6b6b6"
              },
              TEXT_LINK: {
                value: "#ffbaf2"
              },
              KEYBOARD: {
                value: "$PRIMARY_800"
              }
            },
            raw: {
              PRIMARY_100: "#ffffff",
              PRIMARY_200: "#ffffff",
              PRIMARY_300: "#fffeff",
              PRIMARY_330: "#e7c6db",
              PRIMARY_360: "#fcfdfc",
              PRIMARY_400: "#e3bede",
              PRIMARY_460: "#493645",
              PRIMARY_500: "#e68cbf",
              PRIMARY_530: "#d46ea7",
              PRIMARY_600: "#2b2329",
              PRIMARY_630: "#30272f",
              PRIMARY_645: "#2a2229",
              PRIMARY_660: "#1a1419",
              PRIMARY_700: "#1a1419",
              PRIMARY_800: "#272027",
              BRAND_260: "#ff9ecb",
              BRAND_300: "#f598c3",
              BRAND_330: "#ed93bd",
              BRAND_345: "#e890b9",
              BRAND_360: "#e68eb7",
              BRAND_400: "#db88af",
              BRAND_430: "#d483a9",
              BRAND_460: "#cc7ea2",
              BRAND_500: "#c2789b",
              BRAND_530: "#ba7394",
              BRAND_560: "#b36f8e",
              BRAND_600: "#a86885",
              BRAND_630: "#a1647f",
              BRAND_660: "#995f79",
              BRAND_700: "#8f5971",
              RED_260: "#ff9ecb",
              RED_300: "#f598c3",
              RED_330: "#ed93bd",
              RED_345: "#e890b9",
              RED_360: "#e68eb7",
              RED_400: "#db88af",
              RED_430: "#d483a9",
              RED_460: "#cc7ea2",
              RED_500: "#c2789b",
              RED_530: "#ba7394",
              RED_560: "#b36f8e",
              RED_600: "#a86885",
              RED_630: "#a1647f",
              RED_660: "#995f79",
              RED_700: "#8f5971",
              ORANGE_260: "#ff9ecb",
              ORANGE_300: "#f598c3",
              ORANGE_330: "#ed93bd",
              ORANGE_345: "#e890b9",
              ORANGE_360: "#e68eb7",
              ORANGE_400: "#db88af",
              ORANGE_430: "#d483a9",
              ORANGE_460: "#cc7ea2",
              ORANGE_500: "#c2789b",
              ORANGE_530: "#ba7394",
              ORANGE_560: "#b36f8e",
              ORANGE_600: "#a86885",
              ORANGE_630: "#a1647f",
              ORANGE_660: "#995f79",
              ORANGE_700: "#8f5971",
              YELLOW_260: "#ff9ecb",
              YELLOW_300: "#f598c3",
              YELLOW_330: "#ed93bd",
              YELLOW_345: "#e890b9",
              YELLOW_360: "#e68eb7",
              YELLOW_400: "#db88af",
              YELLOW_430: "#d483a9",
              YELLOW_460: "#cc7ea2",
              YELLOW_500: "#c2789b",
              YELLOW_530: "#ba7394",
              YELLOW_560: "#b36f8e",
              YELLOW_600: "#a86885",
              YELLOW_630: "#a1647f",
              YELLOW_660: "#995f79",
              YELLOW_700: "#8f5971",
              GREEN_260: "#ff9ecb",
              GREEN_300: "#f598c3",
              GREEN_330: "#ed93bd",
              GREEN_345: "#e890b9",
              GREEN_360: "#e68eb7",
              GREEN_400: "#db88af",
              GREEN_430: "#d483a9",
              GREEN_460: "#cc7ea2",
              GREEN_500: "#c2789b",
              GREEN_530: "#ba7394",
              GREEN_560: "#b36f8e",
              GREEN_600: "#a86885",
              GREEN_630: "#a1647f",
              GREEN_660: "#995f79",
              GREEN_700: "#8f5971",
              BLUE_260: "#ff9ecb",
              BLUE_300: "#f598c3",
              BLUE_330: "#ed93bd",
              BLUE_345: "#e890b9",
              BLUE_360: "#e68eb7",
              BLUE_400: "#db88af",
              BLUE_430: "#d483a9",
              BLUE_460: "#cc7ea2",
              BLUE_500: "#c2789b",
              BLUE_530: "#ba7394",
              BLUE_560: "#b36f8e",
              BLUE_600: "#a86885",
              BLUE_630: "#a1647f",
              BLUE_660: "#995f79",
              BLUE_700: "#8f5971"
            }
          },
          background: {
            blur: 0.1,
            image: "https://media.discordapp.net/attachments/1026554757948637305/1042919699626852362/rosiepink.png",
            opacity: 1
          }
        }
      };
    }
  });

  // src/plugins/_core/painter/purple_haze.ts
  var PURPLE_HAZE;
  var init_purple_haze = __esm({
    "src/plugins/_core/painter/purple_haze.ts"() {
      "use strict";
      PURPLE_HAZE = {
        id: "purple.haze",
        type: "theme",
        display: {
          name: "Purple Haze v1",
          description: "Lets Get-lit~",
          authors: [
            {
              name: "BlazeCord",
              id: "blazecord"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#726F80"
              },
              BACKGROUND_ACCENT: {
                value: "#350042"
              },
              BACKGROUND_MENTIONED: {
                value: "#ff15f5",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#9B98AB"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#9a00ae"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#9a00ae"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#9a00ae"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#9a00ae"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#221E2A"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#200020"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#200020"
              },
              BACKGROUND_PRIMARY: {
                value: "#221E2A"
              },
              BACKGROUND_SECONDARY: {
                value: "#200020"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#200020"
              },
              BACKGROUND_TERTIARY: {
                value: "#141119"
              },
              BG_BASE_PRIMARY: {
                value: "#221E2A"
              },
              BG_BASE_SECONDARY: {
                value: "#200020"
              },
              BG_BASE_TERTIARY: {
                value: "#141119"
              },
              EMBED_BACKGROUND: {
                value: "#9a00ae"
              },
              CARD_PRIMARY_BG: {
                value: "#221E2A"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#726F80"
              },
              CARD_SECONDARY_BG: {
                value: "#221E2A"
              },
              CHANNEL_ICON: {
                value: "#9B98AB"
              },
              CHANNELS_DEFAULT: {
                value: "#a6adc8"
              },
              CHAT_BACKGROUND: {
                value: "#221E2A"
              },
              HEADER_PRIMARY: {
                value: "#cdd6f4"
              },
              HEADER_SECONDARY: {
                value: "#bac2de"
              },
              INPUT_BACKGROUND: {
                value: "#141119"
              },
              INTERACTIVE_ACTIVE: {
                value: "#cdd6f4"
              },
              INTERACTIVE_HOVER: {
                value: "#9B98AB"
              },
              INTERACTIVE_MUTED: {
                value: "#a6adc8"
              },
              INTERACTIVE_NORMAL: {
                value: "#9B98AB"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#9a00ae"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#4A4755"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#200020"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#cdd6f4"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#cdd6f4"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#200020"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#350042"
              },
              TEXT_LINK: {
                value: "#350042"
              },
              TEXT_MUTED: {
                value: "#a6adc8"
              },
              TEXT_NORMAL: {
                value: "#cdd6f4"
              },
              TEXT_PRIMARY: {
                value: "#cdd6f4"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#5E5B6A"
              }
            },
            raw: {
              BRAND_260: "#726F80",
              BRAND_360: "#350042",
              BRAND_500: "#350042",
              BRAND_560: "#350042",
              BLUE_260: "#350042",
              BLUE_300: "#350042",
              BLUE_330: "#350042",
              BLUE_345: "#350042",
              BLUE_360: "#350042",
              BLUE_400: "#350042",
              BLUE_430: "#350042",
              BLUE_460: "#350042",
              BLUE_500: "#350042",
              BLUE_530: "#350042",
              BLUE_560: "#350042",
              BLUE_600: "#350042",
              BLUE_630: "#350042",
              BLUE_660: "#350042",
              BLUE_700: "#350042",
              PRIMARY_100: "#cdd6f4",
              PRIMARY_300: "#221E2A",
              PRIMARY_360: "#cba6f7",
              PRIMARY_400: "#5E5B6A",
              PRIMARY_460: "#9B98AB",
              PRIMARY_500: "#cdd6f4",
              PRIMARY_600: "#9a00ae",
              PRIMARY_630: "#9a00ae",
              PRIMARY_660: "#141119",
              PRIMARY_700: "#141119",
              PRIMARY_800: "#200020",
              PLUM_10: "#9B98AB",
              PLUM_13: "#726F80",
              PLUM_15: "#4A4755",
              PLUM_16: "#9a00ae",
              PLUM_17: "#141119",
              PLUM_18: "#9a00ae",
              PLUM_20: "#200020",
              PLUM_22: "#141119",
              PLUM_3: "#cdd6f4",
              PLUM_4: "#350042",
              PLUM_6: "#cdd6f4",
              GREEN_100: "#00ff53",
              GREEN_130: "#00ff53",
              GREEN_160: "#00ff53",
              GREEN_200: "#00ff53",
              GREEN_230: "#00ff53",
              GREEN_260: "#00ff53",
              GREEN_300: "#00ff53",
              GREEN_330: "#00ff53",
              GREEN_345: "#00ff53",
              GREEN_360: "#00ff53",
              GREEN_400: "#00ff53",
              GREEN_430: "#00ff53",
              GREEN_460: "#00ff53",
              GREEN_500: "#00ff53",
              GREEN_530: "#00ff53",
              GREEN_560: "#00ff53",
              GREEN_600: "#00ff53",
              GREEN_630: "#00ff53",
              GREEN_660: "#00ff53",
              GREEN_700: "#00ff53",
              GREEN_730: "#00ff53",
              GREEN_760: "#00ff53",
              GREEN_800: "#00ff53",
              GREEN_830: "#00ff53",
              GREEN_860: "#00ff53",
              GREEN_900: "#00ff53",
              GUILD_BOOSTING_BLUE: "#350042",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#350042",
              GUILD_BOOSTING_PINK: "#f5c2e7",
              GUILD_BOOSTING_PURPLE: "#cba6f7",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#cba6f7",
              ORANGE_260: "#fa894b",
              ORANGE_300: "#fa894b",
              ORANGE_330: "#fa894b",
              ORANGE_345: "#fa894b",
              ORANGE_360: "#fa894b",
              ORANGE_400: "#fa894b",
              ORANGE_430: "#fa894b",
              ORANGE_460: "#fa894b",
              ORANGE_500: "#fa894b",
              ORANGE_530: "#fa894b",
              ORANGE_560: "#fa894b",
              ORANGE_600: "#fa894b",
              ORANGE_630: "#fa894b",
              ORANGE_660: "#fa894b",
              ORANGE_700: "#fa894b",
              RED_260: "#ff0db7",
              RED_300: "#ff0db7",
              RED_330: "#ff0db7",
              RED_345: "#ff0db7",
              RED_360: "#ff0db7",
              RED_400: "#ff0db7",
              RED_430: "#ff0db7",
              RED_460: "#ff0db7",
              RED_500: "#ff0db7",
              RED_530: "#ff0db7",
              RED_560: "#ff0db7",
              RED_600: "#ff0db7",
              RED_630: "#ff0db7",
              RED_660: "#ff0db7",
              RED_700: "#ff0db7",
              YELLOW_100: "#f9e2af",
              YELLOW_130: "#f9e2af",
              YELLOW_160: "#f9e2af",
              YELLOW_200: "#f9e2af",
              YELLOW_230: "#f9e2af",
              YELLOW_260: "#f9e2af",
              YELLOW_300: "#f9e2af",
              YELLOW_330: "#f9e2af",
              YELLOW_345: "#f9e2af",
              YELLOW_360: "#f9e2af",
              YELLOW_400: "#f9e2af",
              YELLOW_430: "#f9e2af",
              YELLOW_460: "#f9e2af",
              YELLOW_500: "#f9e2af",
              YELLOW_530: "#f9e2af",
              YELLOW_560: "#f9e2af",
              YELLOW_600: "#f9e2af",
              YELLOW_630: "#f9e2af",
              YELLOW_660: "#f9e2af",
              YELLOW_700: "#f9e2af",
              YELLOW_730: "#f9e2af",
              YELLOW_760: "#f9e2af",
              YELLOW_800: "#f9e2af",
              YELLOW_830: "#f9e2af",
              YELLOW_860: "#f9e2af",
              YELLOW_900: "#f9e2af",
              WHITE: "#221E2A",
              WHITE_500: "#221E2A"
            }
          }
        },
        asAddonMetadata: /* @__PURE__ */ __name(function asAddonMetadata() {
          throw new Error("Blue theme fucked us.");
        }, "asAddonMetadata")
      };
    }
  });

  // src/plugins/_core/painter/useThemeStore.ts
  function getCurrentRef() {
    return useThemeStore.getState().currentRef;
  }
  function applyTheme(id, update) {
    useThemeStore.getState().setThemeRef(id);
    var ref = getCurrentRef();
    if (id && ref) {
      formDividerModule.wait((exp) => {
        exp.DIVIDER_COLORS[ref.key] = exp.DIVIDER_COLORS[ref.color.reference];
      });
      tokenRefModule.wait((tokenRef) => {
        tokenRef.Theme[ref.key.toUpperCase()] = ref.key;
        var shadowKeys = Object.keys(tokenRef.Shadow);
        var semanticKeys = Object.keys(tokenRef.SemanticColor);
        for (var i2 = 0; i2 < shadowKeys.length; i2++) {
          var k = shadowKeys[i2];
          tokenRef.Shadow[k][ref.key] = tokenRef.Shadow[k][ref.color.reference];
        }
        for (var i1 = 0; i1 < semanticKeys.length; i1++) {
          var k1 = semanticKeys[i1];
          tokenRef.SemanticColor[k1][ref.key] = {
            ...tokenRef.SemanticColor[k1][ref.color.reference]
          };
        }
      });
    }
    if (update) {
      var manifest = id != null && useThemeStore.getState().themes.find((t4) => t4.id === id);
      var base = ref?.color.reference || manifest && manifest.main.base || "darker";
      UserSettingsActionCreators.setShouldSyncAppearanceSettings(false);
      UserSettingsActionCreators.updateTheme(ref ? ref.key : base);
    }
  }
  var logger21, formDividerModule, tokenRefModule, UserSettingsActionCreators, _inc, useThemeStore;
  var init_useThemeStore = __esm({
    "src/plugins/_core/painter/useThemeStore.ts"() {
      "use strict";
      init_esm();
      init_parser2();
      init_logger();
      init_example_theme();
      init_wrappers();
      init_middleware();
      init_kvStorage();
      init_dist();
      init_example_theme_1();
      init_purple_haze();
      logger21 = wtlogger.createChild("useThemeStore");
      formDividerModule = lookupByProps("DIVIDER_COLORS");
      tokenRefModule = lookupByProps("SemanticColor");
      UserSettingsActionCreators = lookupByProps("updateTheme", "setShouldSyncAppearanceSettings").asLazy();
      _inc = 0;
      __name(getCurrentRef, "getCurrentRef");
      window.applyTheme = applyTheme;
      __name(applyTheme, "applyTheme");
      useThemeStore = create(persist((set2, get) => ({
        appliedTheme: null,
        currentRef: null,
        themes: [
          MOCHA_THEME,
          ROSIE_PINK_THEME,
          PURPLE_HAZE
        ],
        setThemeRef: /* @__PURE__ */ __name((id) => {
          set2({
            appliedTheme: null,
            currentRef: null
          });
          if (id != null) {
            var theme = get().themes.find((t4) => t4.id === id);
            if (!theme) throw new Error(`Theme is not installed: ${id}`);
            set2({
              appliedTheme: id,
              currentRef: {
                key: `blz-theme-${_inc++}`,
                color: parseColorManifest(theme)
              }
            });
          }
        }, "setThemeRef")
      }), {
        name: "theme-store",
        version: 2,
        storage: createJSONStorage(() => kvStorage),
        onRehydrateStorage() {
          return (state2) => {
            if (state2 && state2.themes.length !== 0) {
              var _loop = /* @__PURE__ */ __name(function(theme2) {
                theme2.asAddonMetadata = memoize(() => ({
                  id: theme2.id,
                  name: theme2.display.name,
                  description: theme2.display.description,
                  authors: theme2.display.authors
                }));
              }, "_loop");
              for (var theme of state2.themes) _loop(theme);
            }
          };
        },
        partialize: /* @__PURE__ */ __name((s) => ({
          ...s,
          currentRef: null
        }), "partialize")
      }));
      applyTheme(useThemeStore.getState().appliedTheme, false);
    }
  });

  // src/components/Blazed/Settings/pages/Themes/index.tsx
  var Themes_exports = {};
  __export(Themes_exports, {
    default: () => Themes
  });
  function Themes() {
    return /* @__PURE__ */ jsx(AddonPage, {
      collectionManager: themeCollectionManager,
      useCanHandleAddon: /* @__PURE__ */ __name(() => true, "useCanHandleAddon"),
      useToggler: /* @__PURE__ */ __name((id) => {
        var enabled = useThemeStore((s) => s.appliedTheme === id);
        return [
          enabled,
          () => enabled ? applyTheme(null, true) : applyTheme(id, true)
        ];
      }, "useToggler")
    });
  }
  var themeCollectionManager;
  var init_Themes = __esm({
    "src/components/Blazed/Settings/pages/Themes/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Addon();
      init_AddonCollectionManager();
      init_useThemeStore();
      themeCollectionManager = createAddonCollectionManager({
        data: /* @__PURE__ */ __name(() => useThemeStore.getState().themes, "data"),
        defaultFilterOptions: [],
        defaultSortOption: "A-Z",
        sortOptions: [
          {
            key: "A-Z",
            label: /* @__PURE__ */ __name(() => "A-Z", "label"),
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var meta16 = a.asAddonMetadata();
              return meta16.name.localeCompare(meta16.name);
            }, "compareFn")
          },
          {
            key: "Z-A",
            label: /* @__PURE__ */ __name(() => "Z-A", "label"),
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var meta16 = a.asAddonMetadata();
              return meta16.name.localeCompare(meta16.name);
            }, "compareFn")
          }
        ],
        filterOptions: []
      });
      __name(Themes, "Themes");
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControlState.tsx
  var SegmentedControlState_exports = {};
  __export(SegmentedControlState_exports, {
    useSegmentedControlState: () => useSegmentedControlState
  });
  var module2, useSegmentedControlState;
  var init_SegmentedControlState = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControlState.tsx"() {
      "use strict";
      init_wrappers();
      module2 = lookupByProps("useSegmentedControlState");
      useSegmentedControlState = /* @__PURE__ */ __name((args) => {
        return module2.load().useSegmentedControlState(args);
      }, "useSegmentedControlState");
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControlPages.tsx
  var SegmentedControlPages_exports = {};
  __export(SegmentedControlPages_exports, {
    default: () => SegmentedControlPages_default
  });
  var SegmentedControlPages_default;
  var init_SegmentedControlPages = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControlPages.tsx"() {
      "use strict";
      init_util();
      SegmentedControlPages_default = getComponentFromProps("SegmentedControlPages");
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControl.tsx
  var SegmentedControl_exports = {};
  __export(SegmentedControl_exports, {
    default: () => SegmentedControl_default
  });
  var SegmentedControl_default;
  var init_SegmentedControl = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControl.tsx"() {
      "use strict";
      init_util();
      SegmentedControl_default = getComponentFromProps("SegmentedControl");
    }
  });

  // src/components/Discord/Button/FloatingActionButton.tsx
  var FloatingActionButton_exports = {};
  __export(FloatingActionButton_exports, {
    default: () => FloatingActionButton_default
  });
  var FloatingActionButton_default;
  var init_FloatingActionButton = __esm({
    "src/components/Discord/Button/FloatingActionButton.tsx"() {
      "use strict";
      init_util();
      FloatingActionButton_default = getComponentFromProps("FloatingActionButton", {
        singular: true
      });
    }
  });

  // src/components/Discord/settings/renderer/SettingListRenderer.tsx
  var SettingListRenderer_exports = {};
  __export(SettingListRenderer_exports, {
    SearchableSettingsList: () => SearchableSettingsList,
    SettingsList: () => SettingsList
  });
  var SettingsList, SearchableSettingsList;
  var init_SettingListRenderer = __esm({
    "src/components/Discord/settings/renderer/SettingListRenderer.tsx"() {
      "use strict";
      init_metro();
      init_filters2();
      ({ SettingsList, SearchableSettingsList } = lookup(byFilePath("modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx")).asLazy());
    }
  });

  // src/components/Discord/TableRow/TableRowArrow.tsx
  var TableRowArrow_exports = {};
  __export(TableRowArrow_exports, {
    default: () => TableRowArrow_default
  });
  var TableRowArrow_default;
  var init_TableRowArrow = __esm({
    "src/components/Discord/TableRow/TableRowArrow.tsx"() {
      "use strict";
      init_util();
      TableRowArrow_default = getComponentFromProps("TableRowArrow");
    }
  });

  // src/components/Discord/Forms/FormRadio.tsx
  var FormRadio_exports = {};
  __export(FormRadio_exports, {
    default: () => FormRadio_default
  });
  var FormRadio_default;
  var init_FormRadio = __esm({
    "src/components/Discord/Forms/FormRadio.tsx"() {
      "use strict";
      init_util();
      FormRadio_default = getComponentFromProps("FormRadio", {
        singular: true
      });
    }
  });

  // src/components/Discord/Sheet/ActionSheetRow.tsx
  var ActionSheetRow_exports = {};
  __export(ActionSheetRow_exports, {
    default: () => ActionSheetRow_default
  });
  var ActionSheetRow_default;
  var init_ActionSheetRow = __esm({
    "src/components/Discord/Sheet/ActionSheetRow.tsx"() {
      "use strict";
      init_util();
      ActionSheetRow_default = getComponentFromProps("ActionSheetRow");
    }
  });

  // src/stores/usePrefsStore.ts
  var usePrefsStore_exports = {};
  __export(usePrefsStore_exports, {
    default: () => usePrefsStore_default
  });
  var usePrefsStore, usePrefsStore_default;
  var init_usePrefsStore = __esm({
    "src/stores/usePrefsStore.ts"() {
      "use strict";
      init_esm();
      init_middleware();
      init_kvStorage();
      usePrefsStore = create(persist((set2) => ({}), {
        name: "prefs-store",
        storage: createJSONStorage(() => kvStorage)
      }));
      usePrefsStore_default = usePrefsStore;
    }
  });

  // src/utils/events.ts
  var events_exports2 = {};
  __export(events_exports2, {
    onUntil: () => onUntil
  });
  function onUntil(emitter, eventName, listener) {
    var callback = /* @__PURE__ */ __name((...args) => {
      var shouldOff = listener(...args);
      if (shouldOff) emitter.off(eventName, callback);
    }, "callback");
    emitter.on(eventName, callback);
  }
  var init_events2 = __esm({
    "src/utils/events.ts"() {
      "use strict";
      __name(onUntil, "onUntil");
    }
  });

  // src/metro/internal/index.ts
  var internal_exports = {};
  __export(internal_exports, {
    initializeMetro: () => initializeMetro
  });
  function patchModule(predicate, patch, { count = 1 } = {}) {
    var _count = 0;
    var callback = /* @__PURE__ */ __name((state2) => {
      var exports = state2.module.exports;
      if (exports && !isBadModuleExports(exports) && predicate(exports, state2)) {
        patch(state2);
        if (++_count === count) {
          internal_onModuleLoaded.delete(callback);
        }
      }
    }, "callback");
    internal_onModuleLoaded.add(callback);
  }
  function initializeMetro() {
    patchModule((exports) => exports.registerAsset, (state2) => {
      var assetRegistryModuleId = state2.id;
      for (var _$state of moduleRegistry.values()) {
        if (Number(_$state.dependencies) === assetRegistryModuleId) {
          _$state.meta.isAsset = true;
        }
      }
    }, {
      count: 2
    });
    patchModule((exports) => exports.fileFinishedImporting, (state2) => {
      before(state2.module.exports, "fileFinishedImporting", (args) => {
        if (_importingModuleId === -1 || !args[0]) return;
        moduleRegistry.get(_importingModuleId).meta.filePath = args[0];
      });
    });
    patchModule((exports) => exports.name === "resolveAssetSource", ({ module: { exports: resolveAssetSource } }) => {
      resolveAssetSource.addCustomSourceTransformer(({ asset }) => {
        if (asset.__blazed) {
          return {
            __packager_asset: true,
            width: asset.width,
            height: asset.height,
            uri: asset.dataurl,
            scale: 1
          };
        }
      });
    });
    patchModule(
      (exp) => exp.default?.reactProfilingEnabled,
      // The bad module is next to the module that is being checked
      ({ id }) => markExportsFlags(id + 1, void 0)
    );
    patchModule((exp) => exp.isMoment, ({ module: { exports } }) => {
      instead(exports, "defineLocale", (args, orig) => {
        var origLocale = exports.locale();
        orig(...args);
        exports.locale(origLocale);
      });
    });
  }
  var init_internal = __esm({
    "src/metro/internal/index.ts"() {
      "use strict";
      init_patcher2();
      init_caches();
      init_registry();
      init_modules();
      __name(patchModule, "patchModule");
      __name(initializeMetro, "initializeMetro");
    }
  });

  // modules-exposer:#globals#
  var globals_exports = {};
  __export(globals_exports, {
    default: () => globals_default
  });
  function createModuleProxy(factory) {
    var cache = null;
    return new Proxy({}, {
      get: /* @__PURE__ */ __name((_, p2) => (cache ??= factory())[p2], "get"),
      getPrototypeOf: /* @__PURE__ */ __name(() => cache ??= factory(), "getPrototypeOf"),
      ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(cache ??= factory()), "ownKeys"),
      getOwnPropertyDescriptor: /* @__PURE__ */ __name((_, p2) => {
        var descriptor = Reflect.getOwnPropertyDescriptor(cache ??= factory(), p2);
        if (descriptor)
          descriptor.configurable = true;
        return descriptor;
      }, "getOwnPropertyDescriptor")
    });
  }
  var globals_default;
  var init_globals = __esm({
    "modules-exposer:#globals#"() {
      __name(createModuleProxy, "createModuleProxy");
      globals_default = {
        "data/constants": createModuleProxy(() => (init_constants(), __toCommonJS(constants_exports))),
        "components/Blazed/FilterAndSortBar": createModuleProxy(() => (init_FilterAndSortBar(), __toCommonJS(FilterAndSortBar_exports))),
        "components/Blazed/Callout": createModuleProxy(() => (init_Callout(), __toCommonJS(Callout_exports))),
        "components/Blazed/Tag": createModuleProxy(() => (init_Tag(), __toCommonJS(Tag_exports))),
        "components/Blazed/Codeblock": createModuleProxy(() => (init_Codeblock(), __toCommonJS(Codeblock_exports))),
        "components/Blazed/InlineCheckbox": createModuleProxy(() => (init_InlineCheckbox(), __toCommonJS(InlineCheckbox_exports))),
        "components/Blazed/Search": createModuleProxy(() => (init_Search(), __toCommonJS(Search_exports))),
        "components/Blazed/ErrorCard": createModuleProxy(() => (init_ErrorCard(), __toCommonJS(ErrorCard_exports))),
        "components/Blazed/Settings/PageWrapper": createModuleProxy(() => (init_PageWrapper(), __toCommonJS(PageWrapper_exports))),
        "components/Blazed/Settings/pages/InfoSection": createModuleProxy(() => (init_InfoSection(), __toCommonJS(InfoSection_exports))),
        "components/Blazed/Settings/pages/ResponsiveMasonryFlashList": createModuleProxy(() => (init_ResponsiveMasonryFlashList(), __toCommonJS(ResponsiveMasonryFlashList_exports))),
        "components/Blazed/Settings/pages/Logs/LogDetailsSheet": createModuleProxy(() => (init_LogDetailsSheet(), __toCommonJS(LogDetailsSheet_exports))),
        "components/Blazed/Settings/pages/Logs/": createModuleProxy(() => (init_Logs(), __toCommonJS(Logs_exports))),
        "components/Blazed/Settings/pages/Logs/LogRow": createModuleProxy(() => (init_LogRow(), __toCommonJS(LogRow_exports))),
        "components/Blazed/Settings/pages/Logs/constants": createModuleProxy(() => (init_constants2(), __toCommonJS(constants_exports2))),
        "components/Blazed/Settings/pages/Logs/__mockings__": createModuleProxy(() => (init_mockings(), __toCommonJS(mockings_exports))),
        "components/Blazed/Settings/pages/Developer/ToastPlayground": createModuleProxy(() => (init_ToastPlayground(), __toCommonJS(ToastPlayground_exports))),
        "components/Blazed/Settings/pages/Developer/AssetBrowser": createModuleProxy(() => (init_AssetBrowser(), __toCommonJS(AssetBrowser_exports))),
        "components/Blazed/Settings/pages/Developer/": createModuleProxy(() => (init_Developer(), __toCommonJS(Developer_exports))),
        "components/Blazed/Settings/pages/Developer/AlertsPlayground": createModuleProxy(() => (init_AlertsPlayground(), __toCommonJS(AlertsPlayground_exports))),
        "components/Blazed/Settings/pages/Developer/CalloutPlayground": createModuleProxy(() => (init_CalloutPlayground(), __toCommonJS(CalloutPlayground_exports))),
        "components/Blazed/Settings/pages/Developer/TokenBrowser/Colors": createModuleProxy(() => (init_Colors(), __toCommonJS(Colors_exports))),
        "components/Blazed/Settings/pages/Developer/TokenBrowser/": createModuleProxy(() => (init_TokenBrowser(), __toCommonJS(TokenBrowser_exports))),
        "components/Blazed/Settings/pages/Themes/": createModuleProxy(() => (init_Themes(), __toCommonJS(Themes_exports))),
        "components/Blazed/Settings/pages/Updater/": createModuleProxy(() => (init_Updater(), __toCommonJS(Updater_exports))),
        "components/Blazed/Settings/pages/Addon/AddonCollectionManager": createModuleProxy(() => (init_AddonCollectionManager(), __toCommonJS(AddonCollectionManager_exports))),
        "components/Blazed/Settings/pages/Addon/": createModuleProxy(() => (init_Addon(), __toCommonJS(Addon_exports))),
        "components/Blazed/Settings/pages/Addon/SearchTermHighlight": createModuleProxy(() => (init_SearchTermHighlight(), __toCommonJS(SearchTermHighlight_exports))),
        "components/Blazed/Settings/pages/Addon/AddonCard": createModuleProxy(() => (init_AddonCard(), __toCommonJS(AddonCard_exports))),
        "components/Blazed/Settings/pages/Plugins/TitleComponent": createModuleProxy(() => (init_TitleComponent(), __toCommonJS(TitleComponent_exports))),
        "components/Blazed/Settings/pages/Plugins/SheetAwareIconButton": createModuleProxy(() => (init_SheetAwareIconButton(), __toCommonJS(SheetAwareIconButton_exports))),
        "components/Blazed/Settings/pages/Plugins/": createModuleProxy(() => (init_Plugins(), __toCommonJS(Plugins_exports))),
        "components/Blazed/Settings/pages/Plugins/PluginDetailsSheet": createModuleProxy(() => (init_PluginDetailsSheet(), __toCommonJS(PluginDetailsSheet_exports))),
        "components/Blazed/Settings/pages/Plugins/PluginSheetComponent": createModuleProxy(() => (init_PluginSheetComponent(), __toCommonJS(PluginSheetComponent_exports))),
        "components/Blazed/Settings/pages/Plugins/common/usePluginSettings": createModuleProxy(() => (init_usePluginSettings(), __toCommonJS(usePluginSettings_exports))),
        "components/Blazed/Settings/pages/Plugins/common/getIcon": createModuleProxy(() => (init_getIcon(), __toCommonJS(getIcon_exports))),
        "components/Blazed/Settings/pages/Plugins/common/": createModuleProxy(() => (init_common(), __toCommonJS(common_exports))),
        "components/Blazed/Settings/pages/Plugins/options/StringOptionRow": createModuleProxy(() => (init_StringOptionRow(), __toCommonJS(StringOptionRow_exports))),
        "components/Blazed/Settings/pages/Plugins/options/SliderOptionRow": createModuleProxy(() => (init_SliderOptionRow(), __toCommonJS(SliderOptionRow_exports))),
        "components/Blazed/Settings/pages/Plugins/options/BooleanOptionRow": createModuleProxy(() => (init_BooleanOptionRow(), __toCommonJS(BooleanOptionRow_exports))),
        "components/Blazed/Settings/pages/Plugins/options/BaseCardOption": createModuleProxy(() => (init_BaseCardOption(), __toCommonJS(BaseCardOption_exports))),
        "components/Blazed/Settings/pages/Plugins/options/RadioOptionRow": createModuleProxy(() => (init_RadioOptionRow(), __toCommonJS(RadioOptionRow_exports))),
        "components/Blazed/Settings/pages/Plugins/options/OptionDefRow": createModuleProxy(() => (init_OptionDefRow(), __toCommonJS(OptionDefRow_exports))),
        "components/Blazed/Settings/pages/Plugins/options/OptionSection": createModuleProxy(() => (init_OptionSection(), __toCommonJS(OptionSection_exports))),
        "components/Blazed/Settings/pages/Plugins/options/SelectOptionRow": createModuleProxy(() => (init_SelectOptionRow(), __toCommonJS(SelectOptionRow_exports))),
        "components/Blazed/Settings/pages/Blaze/": createModuleProxy(() => (init_Blaze(), __toCommonJS(Blaze_exports))),
        "components/Blazed/Settings/pages/Blaze/ClientInfoSheet": createModuleProxy(() => (init_ClientInfoSheet(), __toCommonJS(ClientInfoSheet_exports))),
        "components/Blazed/Settings/pages/Blaze/InfoCard": createModuleProxy(() => (init_InfoCard(), __toCommonJS(InfoCard_exports))),
        "components/Discord/": createModuleProxy(() => (init_Discord2(), __toCommonJS(Discord_exports2))),
        "components/Discord/util": createModuleProxy(() => (init_util(), __toCommonJS(util_exports))),
        "components/Discord/Text/Text": createModuleProxy(() => (init_Text(), __toCommonJS(Text_exports))),
        "components/Discord/TextInput/TextInput": createModuleProxy(() => (init_TextInput(), __toCommonJS(TextInput_exports))),
        "components/Discord/TextInput/TextArea": createModuleProxy(() => (init_TextArea(), __toCommonJS(TextArea_exports))),
        "components/Discord/Pile/AvatarPile": createModuleProxy(() => (init_AvatarPile(), __toCommonJS(AvatarPile_exports))),
        "components/Discord/AlertModal/AlertModal": createModuleProxy(() => (init_AlertModal(), __toCommonJS(AlertModal_exports))),
        "components/Discord/experimental/PressableScale": createModuleProxy(() => (init_PressableScale(), __toCommonJS(PressableScale_exports))),
        "components/Discord/experimental/TwinButtons": createModuleProxy(() => (init_TwinButtons(), __toCommonJS(TwinButtons_exports))),
        "components/Discord/SegmentedControl/SegmentedControlState": createModuleProxy(() => (init_SegmentedControlState(), __toCommonJS(SegmentedControlState_exports))),
        "components/Discord/SegmentedControl/SegmentedControlPages": createModuleProxy(() => (init_SegmentedControlPages(), __toCommonJS(SegmentedControlPages_exports))),
        "components/Discord/SegmentedControl/SegmentedControl": createModuleProxy(() => (init_SegmentedControl(), __toCommonJS(SegmentedControl_exports))),
        "components/Discord/Button/FloatingActionButton": createModuleProxy(() => (init_FloatingActionButton(), __toCommonJS(FloatingActionButton_exports))),
        "components/Discord/Button/IconButton": createModuleProxy(() => (init_IconButton(), __toCommonJS(IconButton_exports))),
        "components/Discord/Button/Button": createModuleProxy(() => (init_Button(), __toCommonJS(Button_exports))),
        "components/Discord/Stack/Stack": createModuleProxy(() => (init_Stack(), __toCommonJS(Stack_exports))),
        "components/Discord/settings/renderer/SettingListRenderer": createModuleProxy(() => (init_SettingListRenderer(), __toCommonJS(SettingListRenderer_exports))),
        "components/Discord/Card/Card": createModuleProxy(() => (init_Card(), __toCommonJS(Card_exports))),
        "components/Discord/ui-kit/Avatar": createModuleProxy(() => (init_Avatar(), __toCommonJS(Avatar_exports))),
        "components/Discord/RedesignCompat/RedesignCompat": createModuleProxy(() => (init_RedesignCompat(), __toCommonJS(RedesignCompat_exports))),
        "components/Discord/TableRow/TableRowDivider": createModuleProxy(() => (init_TableRowDivider(), __toCommonJS(TableRowDivider_exports))),
        "components/Discord/TableRow/TableRowArrow": createModuleProxy(() => (init_TableRowArrow(), __toCommonJS(TableRowArrow_exports))),
        "components/Discord/TableRow/TableRowGroup": createModuleProxy(() => (init_TableRowGroup(), __toCommonJS(TableRowGroup_exports))),
        "components/Discord/TableRow/TableRadioGroup": createModuleProxy(() => (init_TableRadioGroup(), __toCommonJS(TableRadioGroup_exports))),
        "components/Discord/TableRow/TableCheckboxRow": createModuleProxy(() => (init_TableCheckboxRow(), __toCommonJS(TableCheckboxRow_exports))),
        "components/Discord/TableRow/TableSwitchRow": createModuleProxy(() => (init_TableSwitchRow(), __toCommonJS(TableSwitchRow_exports))),
        "components/Discord/TableRow/TableRow": createModuleProxy(() => (init_TableRow(), __toCommonJS(TableRow_exports))),
        "components/Discord/TableRow/TableRadioRow": createModuleProxy(() => (init_TableRadioRow(), __toCommonJS(TableRadioRow_exports))),
        "components/Discord/TableRow/RowButton": createModuleProxy(() => (init_RowButton(), __toCommonJS(RowButton_exports))),
        "components/Discord/TableRow/TableRowIcon": createModuleProxy(() => (init_TableRowIcon(), __toCommonJS(TableRowIcon_exports))),
        "components/Discord/TableRow/TableRowTrailingText": createModuleProxy(() => (init_TableRowTrailingText(), __toCommonJS(TableRowTrailingText_exports))),
        "components/Discord/ContextMenu/ContextMenu": createModuleProxy(() => (init_ContextMenu(), __toCommonJS(ContextMenu_exports))),
        "components/Discord/Forms/FormSwitch": createModuleProxy(() => (init_FormSwitch(), __toCommonJS(FormSwitch_exports))),
        "components/Discord/Forms/FormRadio": createModuleProxy(() => (init_FormRadio(), __toCommonJS(FormRadio_exports))),
        "components/Discord/Forms/FormCheckbox": createModuleProxy(() => (init_FormCheckbox(), __toCommonJS(FormCheckbox_exports))),
        "components/Discord/Slider/Slider": createModuleProxy(() => (init_Slider(), __toCommonJS(Slider_exports))),
        "components/Discord/Sheet/ActionSheetRow": createModuleProxy(() => (init_ActionSheetRow(), __toCommonJS(ActionSheetRow_exports))),
        "components/Discord/Sheet/BottomSheet": createModuleProxy(() => (init_BottomSheet(), __toCommonJS(BottomSheet_exports))),
        "components/Libraries/react-native-safe-area-context": createModuleProxy(() => (init_react_native_safe_area_context(), __toCommonJS(react_native_safe_area_context_exports))),
        "components/utils/styles": createModuleProxy(() => (init_styles(), __toCommonJS(styles_exports))),
        "components/utils/sheets": createModuleProxy(() => (init_sheets(), __toCommonJS(sheets_exports))),
        "stores/usePrefsStore": createModuleProxy(() => (init_usePrefsStore(), __toCommonJS(usePrefsStore_exports))),
        "stores/useToastStore": createModuleProxy(() => (init_useToastStore(), __toCommonJS(useToastStore_exports))),
        "stores/useUpdaterStore": createModuleProxy(() => (init_useUpdaterStore(), __toCommonJS(useUpdaterStore_exports))),
        "stores/usePluginStore": createModuleProxy(() => (init_usePluginStore(), __toCommonJS(usePluginStore_exports))),
        "stores/useInitConfigStore": createModuleProxy(() => (init_useInitConfigStore(), __toCommonJS(useInitConfigStore_exports))),
        "api/logger": createModuleProxy(() => (init_logger(), __toCommonJS(logger_exports))),
        "api/toasts": createModuleProxy(() => (init_toasts(), __toCommonJS(toasts_exports))),
        "api/alerts": createModuleProxy(() => (init_alerts(), __toCommonJS(alerts_exports))),
        "api/fs": createModuleProxy(() => (init_fs(), __toCommonJS(fs_exports))),
        "api/assets": createModuleProxy(() => (init_assets(), __toCommonJS(assets_exports))),
        "api/settings": createModuleProxy(() => (init_settings2(), __toCommonJS(settings_exports))),
        "native/": createModuleProxy(() => (init_native(), __toCommonJS(native_exports))),
        "loader/": createModuleProxy(() => (init_loader(), __toCommonJS(loader_exports))),
        "loader/kvStorage": createModuleProxy(() => (init_kvStorage(), __toCommonJS(kvStorage_exports))),
        "loader/modules/BubbleModule": createModuleProxy(() => (init_BubbleModule(), __toCommonJS(BubbleModule_exports))),
        "loader/modules/UpdaterModule": createModuleProxy(() => (init_UpdaterModule(), __toCommonJS(UpdaterModule_exports))),
        "utils/events": createModuleProxy(() => (init_events2(), __toCommonJS(events_exports2))),
        "utils/lazy": createModuleProxy(() => (init_lazy(), __toCommonJS(lazy_exports))),
        "utils/clipboard": createModuleProxy(() => (init_clipboard(), __toCommonJS(clipboard_exports))),
        "utils/objects": createModuleProxy(() => (init_objects(), __toCommonJS(objects_exports))),
        "utils/errors/parseComponentStack": createModuleProxy(() => (init_parseComponentStack(), __toCommonJS(parseComponentStack_exports))),
        "utils/errors/parseErrorStack": createModuleProxy(() => (init_parseErrorStack(), __toCommonJS(parseErrorStack_exports))),
        "utils/errors/isError": createModuleProxy(() => (init_isError(), __toCommonJS(isError_exports))),
        "utils/network/fetchAsDataUrl": createModuleProxy(() => (init_fetchAsDataUrl(), __toCommonJS(fetchAsDataUrl_exports))),
        "utils/network/url": createModuleProxy(() => (init_url(), __toCommonJS(url_exports))),
        "metro/": createModuleProxy(() => (init_metro(), __toCommonJS(metro_exports))),
        "metro/module": createModuleProxy(() => (init_module(), __toCommonJS(module_exports))),
        "metro/lazy": createModuleProxy(() => (init_lazy2(), __toCommonJS(lazy_exports2))),
        "metro/filters": createModuleProxy(() => (init_filters(), __toCommonJS(filters_exports))),
        "metro/api": createModuleProxy(() => (init_api(), __toCommonJS(api_exports))),
        "metro/common/stores": createModuleProxy(() => (init_stores(), __toCommonJS(stores_exports))),
        "metro/common/icons": createModuleProxy(() => (init_icons(), __toCommonJS(icons_exports))),
        "metro/common/wrappers": createModuleProxy(() => (init_wrappers(), __toCommonJS(wrappers_exports))),
        "metro/common/filters": createModuleProxy(() => (init_filters2(), __toCommonJS(filters_exports2))),
        "metro/common/libraries/": createModuleProxy(() => (init_libraries(), __toCommonJS(libraries_exports))),
        "metro/common/libraries/Discord": createModuleProxy(() => (init_Discord(), __toCommonJS(Discord_exports))),
        "metro/common/libraries/Flux": createModuleProxy(() => (init_Flux(), __toCommonJS(Flux_exports))),
        "metro/internal/": createModuleProxy(() => (init_internal(), __toCommonJS(internal_exports))),
        "metro/internal/enums": createModuleProxy(() => (init_enums(), __toCommonJS(enums_exports))),
        "metro/internal/events": createModuleProxy(() => (init_events(), __toCommonJS(events_exports))),
        "metro/internal/caches": createModuleProxy(() => (init_caches(), __toCommonJS(caches_exports))),
        "metro/internal/modules": createModuleProxy(() => (init_modules(), __toCommonJS(modules_exports))),
        "metro/internal/registry": createModuleProxy(() => (init_registry(), __toCommonJS(registry_exports))),
        "patcher/hook": createModuleProxy(() => (init_hook(), __toCommonJS(hook_exports))),
        "patcher/": createModuleProxy(() => (init_patcher2(), __toCommonJS(patcher_exports2))),
        "patcher/patcher": createModuleProxy(() => (init_patcher(), __toCommonJS(patcher_exports))),
        "patcher/contextual": createModuleProxy(() => (init_contextual(), __toCommonJS(contextual_exports))),
        "debug/info": createModuleProxy(() => (init_info(), __toCommonJS(info_exports)))
      };
    }
  });

  // src/globals.ts
  function blazedGlobalObject() {
    var availableModules = Object.keys(blazedGlobalExports);
    function getNestedSubPaths(paths) {
      var subPaths = /* @__PURE__ */ new Set();
      for (var path of paths) {
        var segments = path.split("/");
        if (segments.length >= 2) {
          subPaths.add(segments.slice(0, 2).join("/"));
        }
      }
      return Array.from(subPaths);
    }
    __name(getNestedSubPaths, "getNestedSubPaths");
    function defineLazyProperty(target, key, getter) {
      Object.defineProperty(target, key, {
        get() {
          var value = getter();
          Object.defineProperty(target, key, {
            value,
            writable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    }
    __name(defineLazyProperty, "defineLazyProperty");
    function createModuleProxy2(baseObject = {}, currentPath = "") {
      return new Proxy(baseObject, {
        get(_, key) {
          var _loop = /* @__PURE__ */ __name(function(childPath2) {
            var fullChildPath = currentPath + childPath2;
            var childKey = fullChildPath.replace(pathPrefix, "");
            defineLazyProperty(childModules, childKey, () => createModuleProxy2(blazedGlobalExports[fullChildPath], `${fullChildPath}/`));
          }, "_loop");
          if (typeof key !== "string") return baseObject[key];
          var matchingModulePaths = availableModules.filter((modulePath) => modulePath.startsWith(currentPath + key));
          if (matchingModulePaths.length === 0) return baseObject[key];
          if (matchingModulePaths.length === 1 && key === matchingModulePaths[0]) return blazedGlobalExports[currentPath + key];
          var pathPrefix = new RegExp(`^${currentPath + key}/`);
          var relativePaths = matchingModulePaths.map((path) => `${key}/${path.replace(pathPrefix, "")}`);
          var immediateChildren = getNestedSubPaths(relativePaths);
          var childModules = {};
          for (var childPath of immediateChildren) _loop(childPath);
          var currentModule = blazedGlobalExports[currentPath + key] ?? {};
          return new Proxy(currentModule, {
            get(_2, prop) {
              if (typeof prop === "string" && prop.startsWith("$$") && currentModule[prop.slice(2)] && childModules[prop.slice(2)]) {
                return childModules[prop.slice(2)];
              }
              return currentModule[prop] ?? childModules[prop];
            },
            ownKeys() {
              return [
                ...Object.keys(currentModule),
                ...Object.keys(childModules)
              ];
            },
            has(_2, prop) {
              return prop in currentModule || prop in childModules;
            },
            getOwnPropertyDescriptor(_2, prop) {
              return Object.getOwnPropertyDescriptor(currentModule, prop) ?? Object.getOwnPropertyDescriptor(childModules, prop);
            }
          });
        }
      });
    }
    __name(createModuleProxy2, "createModuleProxy");
    return createModuleProxy2();
  }
  var blazedGlobalExports;
  var init_globals2 = __esm({
    "src/globals.ts"() {
      "use strict";
      init_lazy();
      init_emptyModule();
      blazedGlobalExports = window.__blazed_exports = lazyValue(() => (init_globals(), __toCommonJS(globals_exports)).default);
      __name(blazedGlobalObject, "blazedGlobalObject");
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    initializeBlazeCord: () => initializeBlazeCord
  });
  function initializeBlazeCord() {
    try {
      wtlogger.info("Initializing BlazeCord...");
      initializeMetro();
      initializePlugins();
      initCheckForUpdates();
      window.blazed = blazedGlobalObject();
      wtlogger.info(`Fully initialized BlazeCord in ${(nativePerformanceNow() - BLAZED_START_TIME).toFixed(2)}ms!`);
    } catch (e3) {
      reportErrorOnInitialization(e3);
    }
  }
  var init_src2 = __esm({
    "src/index.ts"() {
      "use strict";
      init_logger();
      init_error_reporter();
      init_globals2();
      init_internal();
      init_usePluginStore();
      init_useUpdaterStore();
      Object.freeze = Object.seal = Object;
      __name(initializeBlazeCord, "initializeBlazeCord");
    }
  });

  // src/entry.ts
  var entry_exports = {};
  var unhook;
  var init_entry = __esm({
    "src/entry.ts"() {
      "use strict";
      init_registry();
      init_objects();
      Object.freeze = Object.seal = Object;
      unhook = hookDefineProperty(globalThis, "__d", (define2) => {
        unhook();
        globalThis.__d = internal_getDefiner(define2, (runFactory) => {
          (init_src2(), __toCommonJS(src_exports)).initializeBlazeCord();
          runFactory();
        });
      });
    }
  });

  // <stdin>
  try {
    init_entry();
  } catch (e3) {
    (init_error_reporter(), __toCommonJS(error_reporter_exports)).default(e3);
  }
})();
//# sourceURL=blazecord
