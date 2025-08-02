var BLAZECORD_START_TIME = nativePerformanceNow(); var window = this;
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
          765: (t5, e4) => {
            function r5(t6) {
              return r5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function r6(t7) {
                return typeof t7;
              }, "r") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, r5(t6);
            }
            __name(r5, "r");
            function n3(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, o2(n4.key), n4);
              }
            }
            __name(n3, "n");
            function o2(t6) {
              var _$e = function(t7, e5) {
                if ("object" != r5(t7) || !t7) return t7;
                var n4 = t7[Symbol.toPrimitive];
                if (void 0 !== n4) {
                  var o3 = n4.call(t7, "string");
                  if ("object" != r5(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == r5(_$e) ? _$e : _$e + "";
            }
            __name(o2, "o");
            var i2 = function() {
              return t6 = /* @__PURE__ */ __name(function t7() {
                !function(t8, e5) {
                  if (!(t8 instanceof e5)) throw new TypeError("Cannot call a class as a function");
                }(this, t7);
              }, "t"), _$e = [
                {
                  key: "hexSlice",
                  value: /* @__PURE__ */ __name(function value() {
                    var t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, _$e2 = arguments.length > 1 ? arguments[1] : void 0;
                    return Array.prototype.map.call(this.slice(t7, _$e2), function(t8) {
                      return ("00" + t8.toString(16)).slice(-2);
                    }).join("");
                  }, "value")
                }
              ], _$e && n3(t6.prototype, _$e), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
              var t6, _$e;
            }();
            e4.h = i2;
          },
          339: (t5, e4, r5) => {
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
                    if ("string" == typeof t7) return i2(t7, e6);
                    var _$r2 = Object.prototype.toString.call(t7).slice(8, -1);
                    return "Object" === _$r2 && t7.constructor && (_$r2 = t7.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t7) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? i2(t7, e6) : void 0;
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
              var a2, c3 = true, l3 = false;
              return {
                s: /* @__PURE__ */ __name(function s2() {
                  _$r = _$r.call(t6);
                }, "s"),
                n: /* @__PURE__ */ __name(function n5() {
                  var _$t = _$r.next();
                  return c3 = _$t.done, _$t;
                }, "n"),
                e: /* @__PURE__ */ __name(function e6(t7) {
                  l3 = true, a2 = t7;
                }, "e"),
                f: /* @__PURE__ */ __name(function f2() {
                  try {
                    c3 || null == _$r.return || _$r.return();
                  } finally {
                    if (l3) throw a2;
                  }
                }, "f")
              };
            }
            __name(o2, "o");
            function i2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(i2, "i");
            function a(t6, e5) {
              var _$r = Object.keys(t6);
              if (Object.getOwnPropertySymbols) {
                var n4 = Object.getOwnPropertySymbols(t6);
                e5 && (n4 = n4.filter(function(e6) {
                  return Object.getOwnPropertyDescriptor(t6, e6).enumerable;
                })), _$r.push.apply(_$r, n4);
              }
              return _$r;
            }
            __name(a, "a");
            function c2(t6) {
              for (var e5 = 1; e5 < arguments.length; e5++) {
                var _$r = null != arguments[e5] ? arguments[e5] : {};
                e5 % 2 ? a(Object(_$r), true).forEach(function(e6) {
                  l2(t6, e6, _$r[e6]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t6, Object.getOwnPropertyDescriptors(_$r)) : a(Object(_$r)).forEach(function(e6) {
                  Object.defineProperty(t6, e6, Object.getOwnPropertyDescriptor(_$r, e6));
                });
              }
              return t6;
            }
            __name(c2, "c");
            function l2(t6, e5, r6) {
              var o3;
              return o3 = function(t7, e6) {
                if ("object" != n3(t7) || !t7) return t7;
                var _$r = t7[Symbol.toPrimitive];
                if (void 0 !== _$r) {
                  var o4 = _$r.call(t7, "string");
                  if ("object" != n3(o4)) return o4;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(e5), (e5 = "symbol" == n3(o3) ? o3 : o3 + "") in t6 ? Object.defineProperty(t6, e5, {
                value: r6,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t6[e5] = r6, t6;
            }
            __name(l2, "l");
            var u, p2, f = r5(951), y = f.internalBinding, s = f.Array, g = f.ArrayIsArray, d = f.ArrayPrototypeFilter, b = f.ArrayPrototypeForEach, h = f.ArrayPrototypeIncludes, v = f.ArrayPrototypeIndexOf, m2 = f.ArrayPrototypeJoin, S = f.ArrayPrototypeMap, P = f.ArrayPrototypePop, x = f.ArrayPrototypePush, O = f.ArrayPrototypePushApply, w = f.ArrayPrototypeSlice, A = f.ArrayPrototypeSort, j = f.ArrayPrototypeSplice, E = f.ArrayPrototypeUnshift, _ = f.BigIntPrototypeValueOf, F = f.BooleanPrototypeValueOf, L = f.DatePrototypeGetTime, R = f.DatePrototypeToISOString, k = f.DatePrototypeToString, T = f.ErrorPrototypeToString, I = f.FunctionPrototypeBind, z = f.FunctionPrototypeCall, M = f.FunctionPrototypeToString, B = f.JSONStringify, N = f.MapPrototypeEntries, D = f.MapPrototypeGetSize, C = f.MathFloor, H = f.MathMax, G = f.MathMin, W = f.MathRound, V = f.MathSqrt, U = f.MathTrunc, $ = f.Number, Z = f.NumberIsFinite, q = f.NumberIsNaN, K = f.NumberParseFloat, Y = f.NumberParseInt, J = f.NumberPrototypeToString, Q = f.NumberPrototypeValueOf, X = f.Object, tt = f.ObjectAssign, et = f.ObjectDefineProperty, rt = f.ObjectGetOwnPropertyDescriptor, nt = f.ObjectGetOwnPropertyNames, ot = f.ObjectGetOwnPropertySymbols, it = f.ObjectGetPrototypeOf, at = f.ObjectIs, ct = f.ObjectKeys, lt = f.ObjectPrototypeHasOwnProperty, ut = f.ObjectPrototypePropertyIsEnumerable, pt = f.ObjectSeal, ft = f.ObjectSetPrototypeOf, yt = f.ReflectApply, st = f.ReflectOwnKeys, gt = f.RegExp, dt = f.RegExpPrototypeExec, bt = f.RegExpPrototypeSymbolReplace, ht = f.RegExpPrototypeSymbolSplit, vt = f.RegExpPrototypeToString, mt = f.SafeMap, St = f.SafeSet, Pt = f.SafeStringIterator, xt = f.SetPrototypeGetSize, Ot = f.SetPrototypeValues, wt = f.String, At = f.StringPrototypeCharCodeAt, jt = f.StringPrototypeCodePointAt, Et = f.StringPrototypeEndsWith, _t = f.StringPrototypeIncludes, Ft = f.StringPrototypeIndexOf, Lt = f.StringPrototypeLastIndexOf, Rt = f.StringPrototypeNormalize, kt = f.StringPrototypePadEnd, Tt = f.StringPrototypePadStart, It = f.StringPrototypeRepeat, zt = f.StringPrototypeReplaceAll, Mt = f.StringPrototypeSlice, Bt = f.StringPrototypeSplit, Nt = f.StringPrototypeStartsWith, Dt = f.StringPrototypeToLowerCase, Ct = f.StringPrototypeTrim, Ht = f.StringPrototypeValueOf, Gt = f.SymbolPrototypeToString, Wt = f.SymbolPrototypeValueOf, Vt = f.SymbolIterator, Ut = f.SymbolToStringTag, $t = f.TypedArrayPrototypeGetLength, Zt = f.TypedArrayPrototypeGetSymbolToStringTag, qt = f.Uint8Array, Kt = f.globalThis, Yt = f.uncurryThis, Jt = r5(763), Qt = Jt.constants, Xt = Qt.ALL_PROPERTIES, te = Qt.ONLY_ENUMERABLE, ee = Qt.kPending, re = Qt.kRejected, ne = Jt.getOwnNonIndexProperties, oe = Jt.getPromiseDetails, ie = Jt.getProxyDetails, ae = Jt.previewEntries, ce = Jt.getConstructorName, le2 = Jt.getExternalValue, ue = Jt.Proxy, pe = r5(641), fe = pe.customInspectSymbol, ye2 = pe.isError, se = pe.join, ge = pe.removeColors, de = r5(638).isStackOverflowError, be = r5(567), he = be.isAsyncFunction, ve = be.isGeneratorFunction, me = be.isAnyArrayBuffer, Se = be.isArrayBuffer, Pe = be.isArgumentsObject, xe2 = be.isBoxedPrimitive, Oe = be.isDataView, we = be.isExternal, Ae = be.isMap, je = be.isMapIterator, Ee = be.isModuleNamespaceObject, _e = be.isNativeError, Fe = be.isPromise, Le = be.isSet, Re = be.isSetIterator, ke = be.isWeakMap, Te = be.isWeakSet, Ie = be.isRegExp, ze = be.isDate, Me = be.isTypedArray, Be = be.isStringObject, Ne = be.isNumberObject, De = be.isBooleanObject, Ce = be.isBigIntObject, He = r5(783), Ge = r5(111).BuiltinModule, We = r5(322), Ve = We.validateObject, Ue = We.validateString, $e = We.kValidateObjectAllowArray;
            var Ze, qe, Ke, Ye, Je, Qe = new St(d(nt(Kt), function(t6) {
              return null !== dt(/^[A-Z][a-zA-Z0-9]+$/, t6);
            })), Xe = /* @__PURE__ */ __name(function Xe2(t6) {
              return void 0 === t6 && void 0 !== t6;
            }, "Xe"), tr = pt({
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
            }), er = 0, rr = 1, nr = 2;
            try {
              Ze = new gt("[\\x00-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), qe = new gt("[\0-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g"), Ke = new gt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), Ye = new gt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g");
              var or = new gt("(?<=\\n)");
              Je = /* @__PURE__ */ __name(function Je2(t6) {
                return ht(or, t6);
              }, "Je");
            } catch (t6) {
              Ze = /[\x00-\x1f\x27\x5c\x7f-\x9f]/, qe = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g, Ke = /[\x00-\x1f\x5c\x7f-\x9f]/, Ye = /[\x00-\x1f\x5c\x7f-\x9f]/g, Je = /* @__PURE__ */ __name(function Je2(t7) {
                var e5 = ht(/\n/, t7), _$r = P(e5), n4 = S(e5, function(t8) {
                  return t8 + "\n";
                });
                return "" !== _$r && n4.push(_$r), n4;
              }, "Je");
            }
            var ir, ar2 = /^[a-zA-Z_][a-zA-Z_0-9]*$/, cr = /^(0|[1-9][0-9]*)$/, lr2 = /^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/, ur = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g, pr = /^(\s+[^(]*?)\s*{/, fr = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g, yr = 16, sr = 0, gr = 1, dr = 2, br = [
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
            ], hr = new gt("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", "g");
            function vr(t6, e5) {
              var _$r = {
                budget: {},
                indentationLvl: 0,
                seen: [],
                currentDepth: 0,
                stylize: jr,
                showHidden: tr.showHidden,
                depth: tr.depth,
                colors: tr.colors,
                customInspect: tr.customInspect,
                showProxy: tr.showProxy,
                maxArrayLength: tr.maxArrayLength,
                maxStringLength: tr.maxStringLength,
                breakLength: tr.breakLength,
                compact: tr.compact,
                sorted: tr.sorted,
                getters: tr.getters,
                numericSeparator: tr.numericSeparator
              };
              if (arguments.length > 1) {
                if (arguments.length > 2 && (void 0 !== arguments[2] && (_$r.depth = arguments[2]), arguments.length > 3 && void 0 !== arguments[3] && (_$r.colors = arguments[3])), "boolean" == typeof e5) _$r.showHidden = e5;
                else if (e5) for (var n4 = ct(e5), o3 = 0; o3 < n4.length; ++o3) {
                  var i3 = n4[o3];
                  lt(tr, i3) || "stylize" === i3 ? _$r[i3] = e5[i3] : void 0 === _$r.userOptions && (_$r.userOptions = e5);
                }
              }
              return _$r.colors && (_$r.stylize = Ar), null === _$r.maxArrayLength && (_$r.maxArrayLength = 1 / 0), null === _$r.maxStringLength && (_$r.maxStringLength = 1 / 0), Ir(_$r, t6, 0);
            }
            __name(vr, "vr");
            vr.custom = fe, et(vr, "defaultOptions", {
              __proto__: null,
              get: /* @__PURE__ */ __name(function get() {
                return tr;
              }, "get"),
              set: /* @__PURE__ */ __name(function set2(t6) {
                return Ve(t6, "options"), tt(tr, t6);
              }, "set")
            });
            var mr = 39, Sr = 49;
            function Pr(t6, e5) {
              et(vr.colors, e5, {
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
            __name(Pr, "Pr");
            function xr(t6, e5) {
              return -1 === e5 ? '"'.concat(t6, '"') : -2 === e5 ? "`".concat(t6, "`") : "'".concat(t6, "'");
            }
            __name(xr, "xr");
            function Or(t6) {
              var e5 = At(t6);
              return br.length > e5 ? br[e5] : "\\u".concat(J(e5, 16));
            }
            __name(Or, "Or");
            function wr(t6) {
              var e5 = Ze, _$r = qe, n4 = 39;
              if (_t(t6, "'") && (_t(t6, '"') ? _t(t6, "`") || _t(t6, "${") || (n4 = -2) : n4 = -1, 39 !== n4 && (e5 = Ke, _$r = Ye)), t6.length < 5e3 && null === dt(e5, t6)) return xr(t6, n4);
              if (t6.length > 100) return xr(t6 = bt(_$r, t6, Or), n4);
              for (var o3 = "", i3 = 0, a2 = 0; a2 < t6.length; a2++) {
                var c3 = At(t6, a2);
                if (c3 === n4 || 92 === c3 || c3 < 32 || c3 > 126 && c3 < 160) o3 += i3 === a2 ? br[c3] : "".concat(Mt(t6, i3, a2)).concat(br[c3]), i3 = a2 + 1;
                else if (c3 >= 55296 && c3 <= 57343) {
                  if (c3 <= 56319 && a2 + 1 < t6.length) {
                    var l3 = At(t6, a2 + 1);
                    if (l3 >= 56320 && l3 <= 57343) {
                      a2++;
                      continue;
                    }
                  }
                  o3 += "".concat(Mt(t6, i3, a2), "\\u").concat(J(c3, 16)), i3 = a2 + 1;
                }
              }
              return i3 !== t6.length && (o3 += Mt(t6, i3)), xr(o3, n4);
            }
            __name(wr, "wr");
            function Ar(t6, e5) {
              var _$r = vr.styles[e5];
              if (void 0 !== _$r) {
                var n4 = vr.colors[_$r];
                if (void 0 !== n4) return "\x1B[".concat(n4[0], "m").concat(t6, "\x1B[").concat(n4[1], "m");
              }
              return t6;
            }
            __name(Ar, "Ar");
            function jr(t6) {
              return t6;
            }
            __name(jr, "jr");
            function Er() {
              return [];
            }
            __name(Er, "Er");
            function _r(t6, e5) {
              try {
                return t6 instanceof e5;
              } catch (t7) {
                return false;
              }
            }
            __name(_r, "_r");
            function Fr(t6, e5, r6, n4) {
              for (var o3, i3 = t6; t6 || Xe(t6); ) {
                var a2 = rt(t6, "constructor");
                if (void 0 !== a2 && "function" == typeof a2.value && "" !== a2.value.name && _r(i3, a2.value)) return void 0 === n4 || o3 === t6 && Qe.has(a2.value.name) || Lr(e5, i3, o3 || i3, r6, n4), wt(a2.value.name);
                t6 = it(t6), void 0 === o3 && (o3 = t6);
              }
              if (null === o3) return null;
              var l3 = ce(i3);
              if (r6 > e5.depth && null !== e5.depth) return "".concat(l3, " <Complex prototype>");
              var u2 = Fr(o3, e5, r6 + 1, n4);
              return null === u2 ? "".concat(l3, " <").concat(vr(o3, c2(c2({}, e5), {}, {
                customInspect: false,
                depth: -1
              })), ">") : "".concat(l3, " <").concat(u2, ">");
            }
            __name(Fr, "Fr");
            function Lr(t6, e5, r6, n4, i3) {
              var a2, c3, l3 = 0;
              do {
                if (0 !== l3 || e5 === r6) {
                  if (null === (r6 = it(r6))) return;
                  var u2 = rt(r6, "constructor");
                  if (void 0 !== u2 && "function" == typeof u2.value && Qe.has(u2.value.name)) return;
                }
                0 === l3 ? c3 = new St() : b(a2, function(t7) {
                  return c3.add(t7);
                }), a2 = st(r6), x(t6.seen, e5);
                var p3, f2 = o2(a2);
                try {
                  for (f2.s(); !(p3 = f2.n()).done; ) {
                    var y2 = p3.value;
                    if (!("constructor" === y2 || lt(e5, y2) || 0 !== l3 && c3.has(y2))) {
                      var s2 = rt(r6, y2);
                      if ("function" != typeof s2.value) {
                        var g2 = an(t6, r6, n4, y2, er, s2, e5);
                        t6.colors ? x(i3, "\x1B[2m".concat(g2, "\x1B[22m")) : x(i3, g2);
                      }
                    }
                  }
                } catch (t7) {
                  f2.e(t7);
                } finally {
                  f2.f();
                }
                P(t6.seen);
              } while (3 != ++l3);
            }
            __name(Lr, "Lr");
            function Rr(t6, e5, r6) {
              var n4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
              return null === t6 ? "" !== e5 && r6 !== e5 ? "[".concat(r6).concat(n4, ": null prototype] [").concat(e5, "] ") : "[".concat(r6).concat(n4, ": null prototype] ") : "" !== e5 && t6 !== e5 ? "".concat(t6).concat(n4, " [").concat(e5, "] ") : "".concat(t6).concat(n4, " ");
            }
            __name(Rr, "Rr");
            function kr(t6, e5) {
              var _$r, n4 = ot(t6);
              if (e5) _$r = nt(t6), 0 !== n4.length && O(_$r, n4);
              else {
                try {
                  _$r = ct(t6);
                } catch (e6) {
                  He(_e(e6) && "ReferenceError" === e6.name && Ee(t6)), _$r = nt(t6);
                }
                0 !== n4.length && O(_$r, d(n4, function(e6) {
                  return ut(t6, e6);
                }));
              }
              return _$r;
            }
            __name(kr, "kr");
            function Tr(t6, e5, r6) {
              var n4 = "";
              return null === e5 && (n4 = ce(t6)) === r6 && (n4 = "Object"), Rr(e5, r6, n4);
            }
            __name(Tr, "Tr");
            function Ir(t6, e5, i3, a2) {
              if ("object" !== n3(e5) && "function" != typeof e5 && !Xe(e5)) return Vr(t6.stylize, e5, t6);
              if (null === e5) return t6.stylize("null", "null");
              var l3 = e5, u2 = ie(e5, !!t6.showProxy);
              if (void 0 !== u2) {
                if (null === u2 || null === u2[0]) return t6.stylize("<Revoked Proxy>", "special");
                if (t6.showProxy) return function(t7, e6, r6) {
                  if (r6 > t7.depth && null !== t7.depth) return t7.stylize("Proxy [Array]", "special");
                  r6 += 1, t7.indentationLvl += 2;
                  var _$n = [
                    Ir(t7, e6[0], r6),
                    Ir(t7, e6[1], r6)
                  ];
                  return t7.indentationLvl -= 2, ln(t7, _$n, "", [
                    "Proxy [",
                    "]"
                  ], nr, r6);
                }(t6, u2, i3);
                e5 = u2;
              }
              if (t6.customInspect) {
                var y2 = e5[fe];
                if ("function" == typeof y2 && y2 !== vr && (!e5.constructor || e5.constructor.prototype !== e5)) {
                  var s2 = null === t6.depth ? null : t6.depth - i3, d2 = z(y2, l3, s2, function(t7, e6) {
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
                      ft(_$r, null);
                      var _$i, _$a = o2(ct(_$r));
                      try {
                        for (_$a.s(); !(_$i = _$a.n()).done; ) {
                          var l4 = _$i.value;
                          "object" !== n3(_$r[l4]) && "function" != typeof _$r[l4] || null === _$r[l4] || delete _$r[l4];
                        }
                      } catch (t8) {
                        _$a.e(t8);
                      } finally {
                        _$a.f();
                      }
                      _$r.stylize = ft(function(e7, r6) {
                        var _$n;
                        try {
                          _$n = "".concat(t7.stylize(e7, r6));
                        } catch (t8) {
                        }
                        return "string" != typeof _$n ? e7 : _$n;
                      }, null);
                    }
                    return _$r;
                  }(t6, void 0 !== u2 || !(l3 instanceof X)), vr);
                  if (d2 !== l3) return "string" != typeof d2 ? Ir(t6, d2, i3) : zt(d2, "\n", "\n".concat(It(" ", t6.indentationLvl)));
                }
              }
              if (t6.seen.includes(e5)) {
                var b2 = 1;
                return void 0 === t6.circular ? (t6.circular = new mt(), t6.circular.set(e5, b2)) : void 0 === (b2 = t6.circular.get(e5)) && (b2 = t6.circular.size + 1, t6.circular.set(e5, b2)), t6.stylize("[Circular *".concat(b2, "]"), "special");
              }
              return function(t7, e6, n4, i4) {
                var _$a, c3;
                t7.showHidden && (n4 <= t7.depth || null === t7.depth) && (c3 = []);
                var l4 = Fr(e6, t7, n4, c3);
                void 0 !== c3 && 0 === c3.length && (c3 = void 0);
                var u3 = e6[Ut];
                ("string" != typeof u3 || "" !== u3 && (t7.showHidden ? lt : ut)(e6, Ut)) && (u3 = "");
                var y3, s3, d3 = "", b3 = Er, S2 = true, P2 = 0, T2 = t7.showHidden ? Xt : te, z2 = er;
                if (Vt in e6 || null === l4) if (S2 = false, g(e6)) {
                  var B2 = "Array" !== l4 || "" !== u3 ? Rr(l4, u3, "Array", "(".concat(e6.length, ")")) : "";
                  if (_$a = ne(e6, T2), y3 = [
                    "".concat(B2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$a.length && void 0 === c3) return "".concat(y3[0], "]");
                  z2 = nr, b3 = qr;
                } else if (Le(e6)) {
                  var C2 = xt(e6), H2 = Rr(l4, u3, "Set", "(".concat(C2, ")"));
                  if (_$a = kr(e6, t7.showHidden), b3 = I(Yr, null, null !== l4 ? e6 : Ot(e6)), 0 === C2 && 0 === _$a.length && void 0 === c3) return "".concat(H2, "{}");
                  y3 = [
                    "".concat(H2, "{"),
                    "}"
                  ];
                } else if (Ae(e6)) {
                  var G2 = D(e6), W2 = Rr(l4, u3, "Map", "(".concat(G2, ")"));
                  if (_$a = kr(e6, t7.showHidden), b3 = I(Jr, null, null !== l4 ? e6 : N(e6)), 0 === G2 && 0 === _$a.length && void 0 === c3) return "".concat(W2, "{}");
                  y3 = [
                    "".concat(W2, "{"),
                    "}"
                  ];
                } else if (Me(e6)) {
                  _$a = ne(e6, T2);
                  var V2 = e6, U2 = "";
                  null === l4 && (U2 = Zt(e6), V2 = new f[U2](e6));
                  var $2 = $t(e6), Z2 = Rr(l4, u3, U2, "(".concat($2, ")"));
                  if (y3 = [
                    "".concat(Z2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$a.length && !t7.showHidden) return "".concat(y3[0], "]");
                  b3 = I(Kr, null, V2, $2), z2 = nr;
                } else je(e6) ? (_$a = kr(e6, t7.showHidden), y3 = zr("Map", u3), b3 = I(nn, null, y3)) : Re(e6) ? (_$a = kr(e6, t7.showHidden), y3 = zr("Set", u3), b3 = I(nn, null, y3)) : S2 = true;
                if (S2) if (_$a = kr(e6, t7.showHidden), y3 = [
                  "{",
                  "}"
                ], "Object" === l4) {
                  if (Pe(e6) ? y3[0] = "[Arguments] {" : "" !== u3 && (y3[0] = "".concat(Rr(l4, u3, "Object"), "{")), 0 === _$a.length && void 0 === c3) return "".concat(y3[0], "}");
                } else if ("function" == typeof e6) {
                  if (d3 = function(t8, e7, r6) {
                    var _$n = M(t8);
                    if (Nt(_$n, "class") && Et(_$n, "}")) {
                      var o3 = Mt(_$n, 5, -1), _$i = Ft(o3, "{");
                      if (-1 !== _$i && (!_t(Mt(o3, 0, _$i), "(") || null !== dt(pr, bt(fr, o3)))) return function(t9, e8, r7) {
                        var _$n2 = lt(t9, "name") && t9.name || "(anonymous)", o4 = "class ".concat(_$n2);
                        if ("Function" !== e8 && null !== e8 && (o4 += " [".concat(e8, "]")), "" !== r7 && e8 !== r7 && (o4 += " [".concat(r7, "]")), null !== e8) {
                          var _$i2 = it(t9).name;
                          _$i2 && (o4 += " extends ".concat(_$i2));
                        } else o4 += " extends [null prototype]";
                        return "[".concat(o4, "]");
                      }(t8, e7, r6);
                    }
                    var _$a2 = "Function";
                    ve(t8) && (_$a2 = "Generator".concat(_$a2)), he(t8) && (_$a2 = "Async".concat(_$a2));
                    var c4 = "[".concat(_$a2);
                    return null === e7 && (c4 += " (null prototype)"), "" === t8.name ? c4 += " (anonymous)" : c4 += ": ".concat(t8.name), c4 += "]", e7 !== _$a2 && null !== e7 && (c4 += " ".concat(e7)), "" !== r6 && e7 !== r6 && (c4 += " [".concat(r6, "]")), c4;
                  }(e6, l4, u3), 0 === _$a.length && void 0 === c3) return t7.stylize(d3, "special");
                } else if (Ie(e6)) {
                  d3 = vt(null !== l4 ? e6 : new gt(e6));
                  var K2 = Rr(l4, u3, "RegExp");
                  if ("RegExp " !== K2 && (d3 = "".concat(K2).concat(d3)), 0 === _$a.length && void 0 === c3 || n4 > t7.depth && null !== t7.depth) return t7.stylize(d3, "regexp");
                } else if (ze(e6)) {
                  d3 = q(L(e6)) ? k(e6) : R(e6);
                  var Y2 = Rr(l4, u3, "Date");
                  if ("Date " !== Y2 && (d3 = "".concat(Y2).concat(d3)), 0 === _$a.length && void 0 === c3) return t7.stylize(d3, "date");
                } else if (ye2(e6)) {
                  if (d3 = function(t8, e7, n5, i5, a3) {
                    var c4 = null != t8.name ? wt(t8.name) : "Error", l5 = Br(t8);
                    (function(t9, e8, r6, n6) {
                      if (!t9.showHidden && 0 !== e8.length) for (var _$o = 0, _$i = [
                        "name",
                        "message",
                        "stack"
                      ]; _$o < _$i.length; _$o++) {
                        var _$a2 = _$i[_$o], c5 = v(e8, _$a2);
                        -1 !== c5 && _t(n6, r6[_$a2]) && j(e8, c5, 1);
                      }
                    })(i5, a3, t8, l5), !("cause" in t8) || 0 !== a3.length && h(a3, "cause") || x(a3, "cause"), !g(t8.errors) || 0 !== a3.length && h(a3, "errors") || x(a3, "errors"), l5 = function(t9, e8, r6, n6) {
                      var _$o = r6.length;
                      if (null === e8 || Et(r6, "Error") && Nt(t9, r6) && (t9.length === _$o || ":" === t9[_$o] || "\n" === t9[_$o])) {
                        var _$i = "Error";
                        if (null === e8) {
                          var _$a2 = dt(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/, t9) || dt(/^([a-z_A-Z0-9-]*Error)$/, t9);
                          _$o = (_$i = _$a2 && _$a2[1] || "").length, _$i = _$i || "Error";
                        }
                        var c5 = Mt(Rr(e8, n6, _$i), 0, -1);
                        r6 !== c5 && (t9 = _t(c5, r6) ? 0 === _$o ? "".concat(c5, ": ").concat(t9) : "".concat(c5).concat(Mt(t9, _$o)) : "".concat(c5, " [").concat(r6, "]").concat(Mt(t9, _$o)));
                      }
                      return t9;
                    }(l5, e7, c4, n5);
                    var u4 = t8.message && Ft(l5, t8.message) || -1;
                    -1 !== u4 && (u4 += t8.message.length);
                    var f2, y4 = Ft(l5, "\n    at", u4);
                    if (-1 === y4) l5 = "[".concat(l5, "]");
                    else {
                      var s4 = Mt(l5, 0, y4), d4 = function(t9, e8, r6) {
                        var _$n, _$o = Bt(r6, "\n");
                        try {
                          _$n = e8.cause;
                        } catch (t10) {
                        }
                        if (null != _$n && ye2(_$n)) {
                          var _$i = Br(_$n), _$a2 = Ft(_$i, "\n    at");
                          if (-1 !== _$a2) {
                            var c5 = Mr(_$o, Bt(Mt(_$i, _$a2 + 1), "\n")), l6 = c5.len, u5 = c5.offset;
                            if (l6 > 0) {
                              var p3 = l6 - 2, f3 = "    ... ".concat(p3, " lines matching cause stack trace ...");
                              _$o.splice(u5 + 1, p3, t9.stylize(f3, "undefined"));
                            }
                          }
                        }
                        return _$o;
                      }(i5, t8, Mt(l5, y4 + 1));
                      if (i5.colors) {
                        var b4, S3, P3 = function() {
                          var _$t;
                          try {
                            _$t = process.cwd();
                          } catch (t9) {
                            return;
                          }
                          return _$t;
                        }(), O2 = o2(d4);
                        try {
                          for (O2.s(); !(S3 = O2.n()).done; ) {
                            var w2 = S3.value, A2 = dt(lr2, w2);
                            if (null !== A2 && Ge.exists(A2[1])) s4 += "\n".concat(i5.stylize(w2, "undefined"));
                            else {
                              if (s4 += "\n", w2 = Nr2(i5, w2), void 0 !== P3) {
                                var E2 = Dr(i5, w2, P3);
                                E2 === w2 && (E2 = Dr(i5, w2, b4 = null == b4 ? (f2 = P3, (p2 = null == p2 ? r5(976) : p2).pathToFileURL(f2).href) : b4)), w2 = E2;
                              }
                              s4 += w2;
                            }
                          }
                        } catch (t9) {
                          O2.e(t9);
                        } finally {
                          O2.f();
                        }
                      } else s4 += "\n".concat(m2(d4, "\n"));
                      l5 = s4;
                    }
                    if (0 !== i5.indentationLvl) {
                      var _2 = It(" ", i5.indentationLvl);
                      l5 = zt(l5, "\n", "\n".concat(_2));
                    }
                    return l5;
                  }(e6, l4, u3, t7, _$a), 0 === _$a.length && void 0 === c3) return d3;
                } else if (me(e6)) {
                  var J2 = Rr(l4, u3, Se(e6) ? "ArrayBuffer" : "SharedArrayBuffer");
                  if (void 0 === i4) b3 = Zr;
                  else if (0 === _$a.length && void 0 === c3) return J2 + "{ byteLength: ".concat(Gr(t7.stylize, e6.byteLength, false), " }");
                  y3[0] = "".concat(J2, "{"), E(_$a, "byteLength");
                } else if (Oe(e6)) y3[0] = "".concat(Rr(l4, u3, "DataView"), "{"), E(_$a, "byteLength", "byteOffset", "buffer");
                else if (Fe(e6)) y3[0] = "".concat(Rr(l4, u3, "Promise"), "{"), b3 = on;
                else if (Te(e6)) y3[0] = "".concat(Rr(l4, u3, "WeakSet"), "{"), b3 = t7.showHidden ? en2 : tn;
                else if (ke(e6)) y3[0] = "".concat(Rr(l4, u3, "WeakMap"), "{"), b3 = t7.showHidden ? rn : tn;
                else if (Ee(e6)) y3[0] = "".concat(Rr(l4, u3, "Module"), "{"), b3 = Ur.bind(null, _$a);
                else if (xe2(e6)) {
                  if (d3 = function(t8, e7, r6, n5, o3) {
                    var _$i, _$a2;
                    Ne(t8) ? (_$i = Q, _$a2 = "Number") : Be(t8) ? (_$i = Ht, _$a2 = "String", r6.splice(0, t8.length)) : De(t8) ? (_$i = F, _$a2 = "Boolean") : Ce(t8) ? (_$i = _, _$a2 = "BigInt") : (_$i = Wt, _$a2 = "Symbol");
                    var c4 = "[".concat(_$a2);
                    return _$a2 !== n5 && (c4 += null === n5 ? " (null prototype)" : " (".concat(n5, ")")), c4 += ": ".concat(Vr(jr, _$i(t8), e7), "]"), "" !== o3 && o3 !== n5 && (c4 += " [".concat(o3, "]")), 0 !== r6.length || e7.stylize === jr ? c4 : e7.stylize(c4, Dt(_$a2));
                  }(e6, t7, _$a, l4, u3), 0 === _$a.length && void 0 === c3) return d3;
                } else {
                  if (0 === _$a.length && void 0 === c3) {
                    if (we(e6)) {
                      var X2 = le2(e6).toString(16);
                      return t7.stylize("[External: ".concat(X2, "]"), "special");
                    }
                    return "".concat(Tr(e6, l4, u3), "{}");
                  }
                  y3[0] = "".concat(Tr(e6, l4, u3), "{");
                }
                if (n4 > t7.depth && null !== t7.depth) {
                  var tt2 = Mt(Tr(e6, l4, u3), 0, -1);
                  return null !== l4 && (tt2 = "[".concat(tt2, "]")), t7.stylize(tt2, "special");
                }
                n4 += 1, t7.seen.push(e6), t7.currentDepth = n4;
                var et2 = t7.indentationLvl;
                try {
                  for (s3 = b3(t7, e6, n4), P2 = 0; P2 < _$a.length; P2++) x(s3, an(t7, e6, n4, _$a[P2], z2));
                  void 0 !== c3 && O(s3, c3);
                } catch (r6) {
                  return function(t8, e7, r7, n5) {
                    if (de(e7)) return t8.seen.pop(), t8.indentationLvl = n5, t8.stylize("[".concat(r7, ": Inspection interrupted ") + "prematurely. Maximum call stack size exceeded.]", "special");
                    He.fail(e7.stack);
                  }(t7, r6, Mt(Tr(e6, l4, u3), 0, -1), et2);
                }
                if (void 0 !== t7.circular) {
                  var rt2 = t7.circular.get(e6);
                  if (void 0 !== rt2) {
                    var nt2 = t7.stylize("<ref *".concat(rt2, ">"), "special");
                    true !== t7.compact ? d3 = "" === d3 ? nt2 : "".concat(nt2, " ").concat(d3) : y3[0] = "".concat(nt2, " ").concat(y3[0]);
                  }
                }
                if (t7.seen.pop(), t7.sorted) {
                  var ot2 = true === t7.sorted ? void 0 : t7.sorted;
                  if (z2 === er) A(s3, ot2);
                  else if (_$a.length > 1) {
                    var at2 = A(w(s3, s3.length - _$a.length), ot2);
                    E(at2, s3, s3.length - _$a.length, _$a.length), yt(j, null, at2);
                  }
                }
                var ct2 = ln(t7, s3, d3, y3, z2, n4, e6), pt2 = (t7.budget[t7.indentationLvl] || 0) + ct2.length;
                return t7.budget[t7.indentationLvl] = pt2, pt2 > Math.pow(2, 27) && (t7.depth = -1), ct2;
              }(t6, e5, i3, a2);
            }
            __name(Ir, "Ir");
            function zr(t6, e5) {
              return e5 !== "".concat(t6, " Iterator") && ("" !== e5 && (e5 += "] ["), e5 += "".concat(t6, " Iterator")), [
                "[".concat(e5, "] {"),
                "}"
              ];
            }
            __name(zr, "zr");
            function Mr(t6, e5) {
              for (var _$r = 0; _$r < t6.length - 3; _$r++) {
                var n4 = v(e5, t6[_$r]);
                if (-1 !== n4) {
                  var o3 = e5.length - n4;
                  if (o3 > 3) {
                    for (var i3 = 1, a2 = G(t6.length - _$r, o3); a2 > i3 && t6[_$r + i3] === e5[n4 + i3]; ) i3++;
                    if (i3 > 3) return {
                      len: i3,
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
            __name(Mr, "Mr");
            function Br(t6) {
              return t6.stack ? wt(t6.stack) : T(t6);
            }
            __name(Br, "Br");
            function Nr2(t6, e5) {
              for (var _$r, n4 = "", o3 = 0; null !== (_$r = ur.exec(e5)); ) n4 += Mt(e5, o3, _$r.index + 14), n4 += t6.stylize(_$r[1], "module"), o3 = _$r.index + _$r[0].length;
              return 0 !== o3 && (e5 = n4 + Mt(e5, o3)), e5;
            }
            __name(Nr2, "Nr");
            function Dr(t6, e5, r6) {
              var n4 = Ft(e5, r6), o3 = "", i3 = r6.length;
              if (-1 !== n4) {
                "file://" === Mt(e5, n4 - 7, n4) && (i3 += 7, n4 -= 7);
                var a2 = "(" === e5[n4 - 1] ? n4 - 1 : n4, c3 = a2 !== n4 && Et(e5, ")") ? -1 : e5.length, l3 = n4 + i3 + 1, u2 = Mt(e5, a2, l3);
                o3 += Mt(e5, 0, a2), o3 += t6.stylize(u2, "undefined"), o3 += Mt(e5, l3, c3), -1 === c3 && (o3 += t6.stylize(")", "undefined"));
              } else o3 += e5;
              return o3;
            }
            __name(Dr, "Dr");
            function Cr(t6) {
              for (var e5 = "", _$r = t6.length, n4 = Nt(t6, "-") ? 1 : 0; _$r >= n4 + 4; _$r -= 3) e5 = "_".concat(Mt(t6, _$r - 3, _$r)).concat(e5);
              return _$r === t6.length ? t6 : "".concat(Mt(t6, 0, _$r)).concat(e5);
            }
            __name(Cr, "Cr");
            vr.colors = {
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
                mr
              ],
              red: [
                31,
                mr
              ],
              green: [
                32,
                mr
              ],
              yellow: [
                33,
                mr
              ],
              blue: [
                34,
                mr
              ],
              magenta: [
                35,
                mr
              ],
              cyan: [
                36,
                mr
              ],
              white: [
                37,
                mr
              ],
              bgBlack: [
                40,
                Sr
              ],
              bgRed: [
                41,
                Sr
              ],
              bgGreen: [
                42,
                Sr
              ],
              bgYellow: [
                43,
                Sr
              ],
              bgBlue: [
                44,
                Sr
              ],
              bgMagenta: [
                45,
                Sr
              ],
              bgCyan: [
                46,
                Sr
              ],
              bgWhite: [
                47,
                Sr
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
                mr
              ],
              redBright: [
                91,
                mr
              ],
              greenBright: [
                92,
                mr
              ],
              yellowBright: [
                93,
                mr
              ],
              blueBright: [
                94,
                mr
              ],
              magentaBright: [
                95,
                mr
              ],
              cyanBright: [
                96,
                mr
              ],
              whiteBright: [
                97,
                mr
              ],
              bgGray: [
                100,
                Sr
              ],
              bgRedBright: [
                101,
                Sr
              ],
              bgGreenBright: [
                102,
                Sr
              ],
              bgYellowBright: [
                103,
                Sr
              ],
              bgBlueBright: [
                104,
                Sr
              ],
              bgMagentaBright: [
                105,
                Sr
              ],
              bgCyanBright: [
                106,
                Sr
              ],
              bgWhiteBright: [
                107,
                Sr
              ]
            }, Pr("gray", "grey"), Pr("gray", "blackBright"), Pr("bgGray", "bgGrey"), Pr("bgGray", "bgBlackBright"), Pr("dim", "faint"), Pr("strikethrough", "crossedout"), Pr("strikethrough", "strikeThrough"), Pr("strikethrough", "crossedOut"), Pr("hidden", "conceal"), Pr("inverse", "swapColors"), Pr("inverse", "swapcolors"), Pr("doubleunderline", "doubleUnderline"), vr.styles = tt({
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
            var Hr = /* @__PURE__ */ __name(function Hr2(t6) {
              return "... ".concat(t6, " more item").concat(t6 > 1 ? "s" : "");
            }, "Hr");
            function Gr(t6, e5, r6) {
              if (!r6) return at(e5, -0) ? t6("-0", "number") : t6("".concat(e5), "number");
              var n4 = U(e5), o3 = wt(n4);
              return n4 === e5 ? !Z(e5) || _t(o3, "e") ? t6(o3, "number") : t6("".concat(Cr(o3)), "number") : q(e5) ? t6(o3, "number") : t6("".concat(Cr(o3), ".").concat(function(t7) {
                for (var _$e = "", _$r = 0; _$r < t7.length - 3; _$r += 3) _$e += "".concat(Mt(t7, _$r, _$r + 3), "_");
                return 0 === _$r ? t7 : "".concat(_$e).concat(Mt(t7, _$r));
              }(Mt(wt(e5), o3.length + 1))), "number");
            }
            __name(Gr, "Gr");
            function Wr(t6, e5, r6) {
              var n4 = wt(e5);
              return t6("".concat(r6 ? Cr(n4) : n4, "n"), "bigint");
            }
            __name(Wr, "Wr");
            function Vr(t6, e5, r6) {
              if ("string" == typeof e5) {
                var n4 = "";
                if (e5.length > r6.maxStringLength) {
                  var o3 = e5.length - r6.maxStringLength;
                  e5 = Mt(e5, 0, r6.maxStringLength), n4 = "... ".concat(o3, " more character").concat(o3 > 1 ? "s" : "");
                }
                return true !== r6.compact && e5.length > yr && e5.length > r6.breakLength - r6.indentationLvl - 4 ? m2(S(Je(e5), function(e6) {
                  return t6(wr(e6), "string");
                }), " +\n".concat(It(" ", r6.indentationLvl + 2))) + n4 : t6(wr(e5), "string") + n4;
              }
              return "number" == typeof e5 ? Gr(t6, e5, r6.numericSeparator) : "bigint" == typeof e5 ? Wr(t6, e5, r6.numericSeparator) : "boolean" == typeof e5 ? t6("".concat(e5), "boolean") : void 0 === e5 ? t6("undefined", "undefined") : t6(Gt(e5), "symbol");
            }
            __name(Vr, "Vr");
            function Ur(t6, e5, r6, n4) {
              for (var o3 = new s(t6.length), i3 = 0; i3 < t6.length; i3++) try {
                o3[i3] = an(e5, r6, n4, t6[i3], er);
              } catch (r7) {
                He(_e(r7) && "ReferenceError" === r7.name);
                var a2 = l2({}, t6[i3], "");
                o3[i3] = an(e5, a2, n4, t6[i3], er);
                var c3 = Lt(o3[i3], " ");
                o3[i3] = Mt(o3[i3], 0, c3 + 1) + e5.stylize("<uninitialized>", "special");
              }
              return t6.length = 0, o3;
            }
            __name(Ur, "Ur");
            function $r(t6, e5, r6, n4, o3, i3) {
              for (var a2 = ct(e5), c3 = i3; i3 < a2.length && o3.length < n4; i3++) {
                var l3 = a2[i3], u2 = +l3;
                if (u2 > Math.pow(2, 32) - 2) break;
                if ("".concat(c3) !== l3) {
                  if (null === dt(cr, l3)) break;
                  var p3 = u2 - c3, f2 = p3 > 1 ? "s" : "", y2 = "<".concat(p3, " empty item").concat(f2, ">");
                  if (x(o3, t6.stylize(y2, "undefined")), c3 = u2, o3.length === n4) break;
                }
                x(o3, an(t6, e5, r6, l3, rr)), c3++;
              }
              var s2 = e5.length - c3;
              if (o3.length !== n4) {
                if (s2 > 0) {
                  var g2 = s2 > 1 ? "s" : "", d2 = "<".concat(s2, " empty item").concat(g2, ">");
                  x(o3, t6.stylize(d2, "undefined"));
                }
              } else s2 > 0 && x(o3, Hr(s2));
              return o3;
            }
            __name($r, "$r");
            function Zr(t6, e5) {
              var n4;
              try {
                n4 = new qt(e5);
              } catch (e6) {
                return [
                  t6.stylize("(detached)", "special")
                ];
              }
              void 0 === u && (u = Yt(r5(765).h.prototype.hexSlice));
              var o3 = Ct(bt(/(.{2})/g, u(n4, 0, G(t6.maxArrayLength, n4.length)), "$1 ")), i3 = n4.length - t6.maxArrayLength;
              return i3 > 0 && (o3 += " ... ".concat(i3, " more byte").concat(i3 > 1 ? "s" : "")), [
                "".concat(t6.stylize("[Uint8Contents]", "special"), ": <").concat(o3, ">")
              ];
            }
            __name(Zr, "Zr");
            function qr(t6, e5, r6) {
              for (var n4 = e5.length, o3 = G(H(0, t6.maxArrayLength), n4), i3 = n4 - o3, a2 = [], c3 = 0; c3 < o3; c3++) {
                if (!lt(e5, c3)) return $r(t6, e5, r6, o3, a2, c3);
                x(a2, an(t6, e5, r6, c3, rr));
              }
              return i3 > 0 && x(a2, Hr(i3)), a2;
            }
            __name(qr, "qr");
            function Kr(t6, e5, r6, n4, o3) {
              for (var i3 = G(H(0, r6.maxArrayLength), e5), a2 = t6.length - i3, c3 = new s(i3), l3 = t6.length > 0 && "number" == typeof t6[0] ? Gr : Wr, u2 = 0; u2 < i3; ++u2) c3[u2] = l3(r6.stylize, t6[u2], r6.numericSeparator);
              if (a2 > 0 && (c3[i3] = Hr(a2)), r6.showHidden) {
                r6.indentationLvl += 2;
                for (var p3 = 0, f2 = [
                  "BYTES_PER_ELEMENT",
                  "length",
                  "byteLength",
                  "byteOffset",
                  "buffer"
                ]; p3 < f2.length; p3++) {
                  var y2 = f2[p3], g2 = Ir(r6, t6[y2], o3, true);
                  x(c3, "[".concat(y2, "]: ").concat(g2));
                }
                r6.indentationLvl -= 2;
              }
              return c3;
            }
            __name(Kr, "Kr");
            function Yr(t6, e5, r6, n4) {
              var i3 = t6.size, a2 = G(H(0, e5.maxArrayLength), i3), c3 = i3 - a2, l3 = [];
              e5.indentationLvl += 2;
              var u2, p3 = 0, f2 = o2(t6);
              try {
                for (f2.s(); !(u2 = f2.n()).done; ) {
                  var y2 = u2.value;
                  if (p3 >= a2) break;
                  x(l3, Ir(e5, y2, n4)), p3++;
                }
              } catch (t7) {
                f2.e(t7);
              } finally {
                f2.f();
              }
              return c3 > 0 && x(l3, Hr(c3)), e5.indentationLvl -= 2, l3;
            }
            __name(Yr, "Yr");
            function Jr(t6, e5, r6, n4) {
              var i3 = t6.size, a2 = G(H(0, e5.maxArrayLength), i3), c3 = i3 - a2, l3 = [];
              e5.indentationLvl += 2;
              var u2, p3 = 0, f2 = o2(t6);
              try {
                for (f2.s(); !(u2 = f2.n()).done; ) {
                  var y2 = u2.value, s2 = y2[0], g2 = y2[1];
                  if (p3 >= a2) break;
                  x(l3, "".concat(Ir(e5, s2, n4), " => ").concat(Ir(e5, g2, n4))), p3++;
                }
              } catch (t7) {
                f2.e(t7);
              } finally {
                f2.f();
              }
              return c3 > 0 && x(l3, Hr(c3)), e5.indentationLvl -= 2, l3;
            }
            __name(Jr, "Jr");
            function Qr(t6, e5, r6, n4) {
              var o3 = H(t6.maxArrayLength, 0), i3 = G(o3, r6.length), a2 = new s(i3);
              t6.indentationLvl += 2;
              for (var c3 = 0; c3 < i3; c3++) a2[c3] = Ir(t6, r6[c3], e5);
              t6.indentationLvl -= 2, n4 !== sr || t6.sorted || A(a2);
              var l3 = r6.length - i3;
              return l3 > 0 && x(a2, Hr(l3)), a2;
            }
            __name(Qr, "Qr");
            function Xr(t6, e5, r6, n4) {
              var o3 = H(t6.maxArrayLength, 0), i3 = r6.length / 2, a2 = i3 - o3, c3 = G(o3, i3), l3 = new s(c3), u2 = 0;
              if (t6.indentationLvl += 2, n4 === sr) {
                for (; u2 < c3; u2++) {
                  var p3 = 2 * u2;
                  l3[u2] = "".concat(Ir(t6, r6[p3], e5), " => ").concat(Ir(t6, r6[p3 + 1], e5));
                }
                t6.sorted || A(l3);
              } else for (; u2 < c3; u2++) {
                var f2 = 2 * u2, y2 = [
                  Ir(t6, r6[f2], e5),
                  Ir(t6, r6[f2 + 1], e5)
                ];
                l3[u2] = ln(t6, y2, "", [
                  "[",
                  "]"
                ], nr, e5);
              }
              return t6.indentationLvl -= 2, a2 > 0 && x(l3, Hr(a2)), l3;
            }
            __name(Xr, "Xr");
            function tn(t6) {
              return [
                t6.stylize("<items unknown>", "special")
              ];
            }
            __name(tn, "tn");
            function en2(t6, e5, r6) {
              return Qr(t6, r6, ae(e5), sr);
            }
            __name(en2, "en");
            function rn(t6, e5, r6) {
              return Xr(t6, r6, ae(e5), sr);
            }
            __name(rn, "rn");
            function nn(t6, e5, r6, n4) {
              var o3 = ae(r6, true), i3 = o3[0];
              return o3[1] ? (t6[0] = bt(/ Iterator] {$/, t6[0], " Entries] {"), Xr(e5, n4, i3, dr)) : Qr(e5, n4, i3, gr);
            }
            __name(nn, "nn");
            function on(t6, e5, r6) {
              var n4, o3 = oe(e5), i3 = o3[0], a2 = o3[1];
              if (i3 === ee) n4 = [
                t6.stylize("<pending>", "special")
              ];
              else {
                t6.indentationLvl += 2;
                var c3 = Ir(t6, a2, r6);
                t6.indentationLvl -= 2, n4 = [
                  i3 === re ? "".concat(t6.stylize("<rejected>", "special"), " ").concat(c3) : c3
                ];
              }
              return n4;
            }
            __name(on, "on");
            function an(t6, e5, r6, o3, i3, a2) {
              var c3, l3, u2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e5, p3 = " ";
              if (void 0 !== (a2 = a2 || rt(e5, o3) || {
                value: e5[o3],
                enumerable: true
              }).value) {
                var f2 = true !== t6.compact || i3 !== er ? 2 : 3;
                t6.indentationLvl += f2, l3 = Ir(t6, a2.value, r6), 3 === f2 && t6.breakLength < ir(l3, t6.colors) && (p3 = "\n".concat(It(" ", t6.indentationLvl))), t6.indentationLvl -= f2;
              } else if (void 0 !== a2.get) {
                var y2 = void 0 !== a2.set ? "Getter/Setter" : "Getter", s2 = t6.stylize, g2 = "special";
                if (t6.getters && (true === t6.getters || "get" === t6.getters && void 0 === a2.set || "set" === t6.getters && void 0 !== a2.set)) try {
                  var d2 = z(a2.get, u2);
                  if (t6.indentationLvl += 2, null === d2) l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(s2("null", "null")).concat(s2("]", g2));
                  else if ("object" === n3(d2)) l3 = "".concat(s2("[".concat(y2, "]"), g2), " ").concat(Ir(t6, d2, r6));
                  else {
                    var b2 = Vr(s2, d2, t6);
                    l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(b2).concat(s2("]", g2));
                  }
                  t6.indentationLvl -= 2;
                } catch (t7) {
                  var h2 = "<Inspection threw (".concat(t7.message, ")>");
                  l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(h2).concat(s2("]", g2));
                }
                else l3 = t6.stylize("[".concat(y2, "]"), g2);
              } else l3 = void 0 !== a2.set ? t6.stylize("[Setter]", "special") : t6.stylize("undefined", "undefined");
              if (i3 === rr) return l3;
              if ("symbol" === n3(o3)) {
                var v2 = bt(qe, Gt(o3), Or);
                c3 = "[".concat(t6.stylize(v2, "symbol"), "]");
              } else if ("__proto__" === o3) c3 = "['__proto__']";
              else if (false === a2.enumerable) {
                var m3 = bt(qe, o3, Or);
                c3 = "[".concat(m3, "]");
              } else c3 = null !== dt(ar2, o3) ? t6.stylize(o3, "name") : t6.stylize(wr(o3), "string");
              return "".concat(c3, ":").concat(p3).concat(l3);
            }
            __name(an, "an");
            function cn(t6, e5, r6, n4) {
              var o3 = e5.length + r6;
              if (o3 + e5.length > t6.breakLength) return false;
              for (var i3 = 0; i3 < e5.length; i3++) if (t6.colors ? o3 += ge(e5[i3]).length : o3 += e5[i3].length, o3 > t6.breakLength) return false;
              return "" === n4 || !_t(n4, "\n");
            }
            __name(cn, "cn");
            function ln(t6, e5, r6, n4, o3, i3, a2) {
              if (true !== t6.compact) {
                if ("number" == typeof t6.compact && t6.compact >= 1) {
                  var c3 = e5.length;
                  if (o3 === nr && c3 > 6 && (e5 = function(t7, e6, r7) {
                    var _$n = 0, _$o = 0, _$i = 0, _$a = e6.length;
                    t7.maxArrayLength < e6.length && _$a--;
                    for (var c4 = new s(_$a); _$i < _$a; _$i++) {
                      var l4 = ir(e6[_$i], t7.colors);
                      c4[_$i] = l4, _$n += l4 + 2, _$o < l4 && (_$o = l4);
                    }
                    var u3 = _$o + 2;
                    if (3 * u3 + t7.indentationLvl < t7.breakLength && (_$n / u3 > 5 || _$o <= 6)) {
                      var p4 = V(u3 - _$n / e6.length), f3 = H(u3 - 3 - p4, 1), y2 = G(W(V(2.5 * f3 * _$a) / f3), C((t7.breakLength - t7.indentationLvl) / u3), 4 * t7.compact, 15);
                      if (y2 <= 1) return e6;
                      for (var g2 = [], d2 = [], b2 = 0; b2 < y2; b2++) {
                        for (var h2 = 0, v2 = b2; v2 < e6.length; v2 += y2) c4[v2] > h2 && (h2 = c4[v2]);
                        h2 += 2, d2[b2] = h2;
                      }
                      var m3 = Tt;
                      if (void 0 !== r7) {
                        for (var S2 = 0; S2 < e6.length; S2++) if ("number" != typeof r7[S2] && "bigint" != typeof r7[S2]) {
                          m3 = kt;
                          break;
                        }
                      }
                      for (var P2 = 0; P2 < _$a; P2 += y2) {
                        for (var O2 = G(P2 + y2, _$a), w2 = "", A2 = P2; A2 < O2 - 1; A2++) {
                          var j2 = d2[A2 - P2] + e6[A2].length - c4[A2];
                          w2 += m3("".concat(e6[A2], ", "), j2, " ");
                        }
                        if (m3 === Tt) {
                          var E2 = d2[A2 - P2] + e6[A2].length - c4[A2] - 2;
                          w2 += Tt(e6[A2], E2, " ");
                        } else w2 += e6[A2];
                        x(g2, w2);
                      }
                      t7.maxArrayLength < e6.length && x(g2, e6[_$a]), e6 = g2;
                    }
                    return e6;
                  }(t6, e5, a2)), t6.currentDepth - i3 < t6.compact && c3 === e5.length && cn(t6, e5, e5.length + t6.indentationLvl + n4[0].length + r6.length + 10, r6)) {
                    var l3 = se(e5, ", ");
                    if (!_t(l3, "\n")) return "".concat(r6 ? "".concat(r6, " ") : "").concat(n4[0], " ").concat(l3) + " ".concat(n4[1]);
                  }
                }
                var u2 = "\n".concat(It(" ", t6.indentationLvl));
                return "".concat(r6 ? "".concat(r6, " ") : "").concat(n4[0]).concat(u2, "  ") + "".concat(se(e5, ",".concat(u2, "  "))).concat(u2).concat(n4[1]);
              }
              if (cn(t6, e5, 0, r6)) return "".concat(n4[0]).concat(r6 ? " ".concat(r6) : "", " ").concat(se(e5, ", "), " ") + n4[1];
              var p3 = It(" ", t6.indentationLvl), f2 = "" === r6 && 1 === n4[0].length ? " " : "".concat(r6 ? " ".concat(r6) : "", "\n").concat(p3, "  ");
              return "".concat(n4[0]).concat(f2).concat(se(e5, ",\n".concat(p3, "  ")), " ").concat(n4[1]);
            }
            __name(ln, "ln");
            function un(t6) {
              var e5 = ie(t6, false);
              if (void 0 !== e5) {
                if (null === e5) return true;
                t6 = e5;
              }
              if ("function" != typeof t6.toString) return true;
              if (lt(t6, "toString")) return false;
              var _$r = t6;
              do {
                _$r = it(_$r);
              } while (!lt(_$r, "toString"));
              var n4 = rt(_$r, "constructor");
              return void 0 !== n4 && "function" == typeof n4.value && Qe.has(n4.value.name);
            }
            __name(un, "un");
            var pn, fn = /* @__PURE__ */ __name(function fn2(t6) {
              return Bt(t6.message, "\n", 1)[0];
            }, "fn");
            function yn(t6) {
              try {
                return B(t6);
              } catch (t7) {
                if (!pn) try {
                  var e5 = {};
                  e5.a = e5, B(e5);
                } catch (t8) {
                  pn = fn(t8);
                }
                if ("TypeError" === t7.name && fn(t7) === pn) return "[Circular]";
                throw t7;
              }
            }
            __name(yn, "yn");
            function sn(t6, e5) {
              var _$r;
              return Gr(jr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : tr.numericSeparator);
            }
            __name(sn, "sn");
            function gn(t6, e5) {
              var _$r;
              return Wr(jr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : tr.numericSeparator);
            }
            __name(gn, "gn");
            function dn(t6, e5) {
              var _$r = e5[0], o3 = 0, i3 = "", a2 = "";
              if ("string" == typeof _$r) {
                if (1 === e5.length) return _$r;
                for (var l3, u2 = 0, p3 = 0; p3 < _$r.length - 1; p3++) if (37 === At(_$r, p3)) {
                  var f2 = At(_$r, ++p3);
                  if (o3 + 1 !== e5.length) {
                    switch (f2) {
                      case 115:
                        var y2 = e5[++o3];
                        l3 = "number" == typeof y2 ? sn(y2, t6) : "bigint" == typeof y2 ? gn(y2, t6) : "object" === n3(y2) && null !== y2 && un(y2) ? vr(y2, c2(c2({}, t6), {}, {
                          compact: 3,
                          colors: false,
                          depth: 0
                        })) : wt(y2);
                        break;
                      case 106:
                        l3 = yn(e5[++o3]);
                        break;
                      case 100:
                        var s2 = e5[++o3];
                        l3 = "bigint" == typeof s2 ? gn(s2, t6) : "symbol" === n3(s2) ? "NaN" : sn($(s2), t6);
                        break;
                      case 79:
                        l3 = vr(e5[++o3], t6);
                        break;
                      case 111:
                        l3 = vr(e5[++o3], c2(c2({}, t6), {}, {
                          showHidden: true,
                          showProxy: true,
                          depth: 4
                        }));
                        break;
                      case 105:
                        var g2 = e5[++o3];
                        l3 = "bigint" == typeof g2 ? gn(g2, t6) : "symbol" === n3(g2) ? "NaN" : sn(Y(g2), t6);
                        break;
                      case 102:
                        var d2 = e5[++o3];
                        l3 = "symbol" === n3(d2) ? "NaN" : sn(K(d2), t6);
                        break;
                      case 99:
                        o3 += 1, l3 = "";
                        break;
                      case 37:
                        i3 += Mt(_$r, u2, p3), u2 = p3 + 1;
                        continue;
                      default:
                        continue;
                    }
                    u2 !== p3 - 1 && (i3 += Mt(_$r, u2, p3 - 1)), i3 += l3, u2 = p3 + 1;
                  } else 37 === f2 && (i3 += Mt(_$r, u2, p3), u2 = p3 + 1);
                }
                0 !== u2 && (o3++, a2 = " ", u2 < _$r.length && (i3 += Mt(_$r, u2)));
              }
              for (; o3 < e5.length; ) {
                var b2 = e5[o3];
                i3 += a2, i3 += "string" != typeof b2 ? vr(b2, t6) : b2, a2 = " ", o3++;
              }
              return i3;
            }
            __name(dn, "dn");
            function bn(t6) {
              return t6 <= 31 || t6 >= 127 && t6 <= 159 || t6 >= 768 && t6 <= 879 || t6 >= 8203 && t6 <= 8207 || t6 >= 8400 && t6 <= 8447 || t6 >= 65024 && t6 <= 65039 || t6 >= 65056 && t6 <= 65071 || t6 >= 917760 && t6 <= 917999;
            }
            __name(bn, "bn");
            if (y("config").hasIntl) He(false);
            else {
              ir = /* @__PURE__ */ __name(function ir2(t6) {
                var e5 = 0;
                (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (t6 = vn(t6)), t6 = Rt(t6, "NFC");
                var _$r, n4 = o2(new Pt(t6));
                try {
                  for (n4.s(); !(_$r = n4.n()).done; ) {
                    var i3 = _$r.value, a2 = jt(i3, 0);
                    hn(a2) ? e5 += 2 : bn(a2) || e5++;
                  }
                } catch (t7) {
                  n4.e(t7);
                } finally {
                  n4.f();
                }
                return e5;
              }, "ir");
              var hn = /* @__PURE__ */ __name(function hn2(t6) {
                return t6 >= 4352 && (t6 <= 4447 || 9001 === t6 || 9002 === t6 || t6 >= 11904 && t6 <= 12871 && 12351 !== t6 || t6 >= 12880 && t6 <= 19903 || t6 >= 19968 && t6 <= 42182 || t6 >= 43360 && t6 <= 43388 || t6 >= 44032 && t6 <= 55203 || t6 >= 63744 && t6 <= 64255 || t6 >= 65040 && t6 <= 65049 || t6 >= 65072 && t6 <= 65131 || t6 >= 65281 && t6 <= 65376 || t6 >= 65504 && t6 <= 65510 || t6 >= 110592 && t6 <= 110593 || t6 >= 127488 && t6 <= 127569 || t6 >= 127744 && t6 <= 128591 || t6 >= 131072 && t6 <= 262141);
              }, "hn");
            }
            function vn(t6) {
              return Ue(t6, "str"), bt(hr, t6, "");
            }
            __name(vn, "vn");
            var mn = {
              34: "&quot;",
              38: "&amp;",
              39: "&apos;",
              60: "&lt;",
              62: "&gt;",
              160: "&nbsp;"
            };
            function Sn(t6) {
              return t6.replace(/[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g, function(t7) {
                var e5 = wt(t7.charCodeAt(0));
                return mn[e5] || "&#" + e5 + ";";
              });
            }
            __name(Sn, "Sn");
            t5.exports = {
              identicalSequenceRange: Mr,
              inspect: vr,
              inspectDefaultOptions: tr,
              format: /* @__PURE__ */ __name(function format2() {
                for (var _$t = arguments.length, e5 = new Array(_$t), _$r = 0; _$r < _$t; _$r++) e5[_$r] = arguments[_$r];
                return dn(void 0, e5);
              }, "format"),
              formatWithOptions: /* @__PURE__ */ __name(function formatWithOptions2(t6) {
                Ve(t6, "inspectOptions", $e);
                for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), n4 = 1; n4 < e5; n4++) _$r[n4 - 1] = arguments[n4];
                return dn(t6, _$r);
              }, "formatWithOptions"),
              getStringWidth: ir,
              stripVTControlCharacters: vn,
              isZeroWidthCodePoint: bn,
              stylizeWithColor: Ar,
              stylizeWithHTML: /* @__PURE__ */ __name(function stylizeWithHTML2(t6, e5) {
                var _$r = vr.styles[e5];
                return void 0 !== _$r ? '<span style="color:'.concat(_$r, ';">').concat(Sn(t6), "</span>") : Sn(t6);
              }, "stylizeWithHTML"),
              Proxy: ue
            };
          },
          783: (t5) => {
            function e4(t6) {
              if (!t6) throw new Error("Assertion failed");
            }
            __name(e4, "e");
            e4.fail = function(t6) {
              throw new Error(t6);
            }, t5.exports = e4;
          },
          111: (t5, e4) => {
            var _$r = [
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
            e4.BuiltinModule = {
              exists: /* @__PURE__ */ __name(function exists(t6) {
                return t6.startsWith("internal/") || -1 !== _$r.indexOf(t6);
              }, "exists")
            };
          },
          840: (t5) => {
            t5.exports = {
              CHAR_DOT: 46,
              CHAR_FORWARD_SLASH: 47,
              CHAR_BACKWARD_SLASH: 92
            };
          },
          638: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(o2, "o");
            var i2, a, c2 = r5(951), l2 = c2.ArrayIsArray, u = c2.ArrayPrototypeIncludes, p2 = c2.ArrayPrototypeIndexOf, f = c2.ArrayPrototypeJoin, y = c2.ArrayPrototypePop, s = c2.ArrayPrototypePush, g = c2.ArrayPrototypeSplice, d = c2.ErrorCaptureStackTrace, b = c2.ObjectDefineProperty, h = c2.ReflectApply, v = c2.RegExpPrototypeTest, m2 = c2.SafeMap, S = c2.StringPrototypeEndsWith, P = c2.StringPrototypeIncludes, x = c2.StringPrototypeSlice, O = c2.StringPrototypeToLowerCase, w = new m2(), A = {}, j = /^([A-Z][a-z0-9]*)+$/, E = [
              "string",
              "function",
              "number",
              "object",
              "Function",
              "Object",
              "boolean",
              "bigint",
              "symbol"
            ], _ = null;
            function F() {
              return _ || (_ = r5(339)), _;
            }
            __name(F, "F");
            var L = R(function(t6, e5, r6) {
              (t6 = D(t6)).name = "".concat(e5, " [").concat(r6, "]"), t6.stack, delete t6.name;
            });
            function R(t6) {
              var e5 = "__node_internal_" + t6.name;
              return b(t6, "name", {
                value: e5
              }), t6;
            }
            __name(R, "R");
            var k, T, I, z, M, B, N, D = R(function(t6) {
              return i2 = Error.stackTraceLimit, Error.stackTraceLimit = 1 / 0, d(t6), Error.stackTraceLimit = i2, t6;
            });
            t5.exports = {
              codes: A,
              hideStackFrames: R,
              isStackOverflowError: /* @__PURE__ */ __name(function isStackOverflowError(t6) {
                if (void 0 === T) try {
                  !(/* @__PURE__ */ __name(function t7() {
                    t7();
                  }, "t"))();
                } catch (t7) {
                  T = t7.message, k = t7.name;
                }
                return t6 && t6.name === k && t6.message === T;
              }, "isStackOverflowError")
            }, I = "ERR_INVALID_ARG_TYPE", z = /* @__PURE__ */ __name(function z2(t6, e5, r6) {
              a("string" == typeof t6, "'name' must be a string"), l2(e5) || (e5 = [
                e5
              ]);
              var i3 = "The ";
              if (S(t6, " argument")) i3 += "".concat(t6, " ");
              else {
                var c3 = P(t6, ".") ? "property" : "argument";
                i3 += '"'.concat(t6, '" ').concat(c3, " ");
              }
              i3 += "must be ";
              var d2, b2 = [], h2 = [], m3 = [], w2 = function(t7, e6) {
                var _$r = "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                if (!_$r) {
                  if (Array.isArray(t7) || (_$r = function(t8, e7) {
                    if (t8) {
                      if ("string" == typeof t8) return o2(t8, e7);
                      var _$r2 = Object.prototype.toString.call(t8).slice(8, -1);
                      return "Object" === _$r2 && t8.constructor && (_$r2 = t8.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t8) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? o2(t8, e7) : void 0;
                    }
                  }(t7)) || e6 && t7 && "number" == typeof t7.length) {
                    _$r && (t7 = _$r);
                    var _$n = 0, i4 = /* @__PURE__ */ __name(function i5() {
                    }, "i");
                    return {
                      s: i4,
                      n: /* @__PURE__ */ __name(function n4() {
                        return _$n >= t7.length ? {
                          done: true
                        } : {
                          done: false,
                          value: t7[_$n++]
                        };
                      }, "n"),
                      e: /* @__PURE__ */ __name(function e7(t8) {
                        throw t8;
                      }, "e"),
                      f: i4
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a2, c4 = true, l3 = false;
                return {
                  s: /* @__PURE__ */ __name(function s2() {
                    _$r = _$r.call(t7);
                  }, "s"),
                  n: /* @__PURE__ */ __name(function n4() {
                    var _$t = _$r.next();
                    return c4 = _$t.done, _$t;
                  }, "n"),
                  e: /* @__PURE__ */ __name(function e7(t8) {
                    l3 = true, a2 = t8;
                  }, "e"),
                  f: /* @__PURE__ */ __name(function f2() {
                    try {
                      c4 || null == _$r.return || _$r.return();
                    } finally {
                      if (l3) throw a2;
                    }
                  }, "f")
                };
              }(e5);
              try {
                for (w2.s(); !(d2 = w2.n()).done; ) {
                  var A2 = d2.value;
                  a("string" == typeof A2, "All expected entries have to be of type string"), u(E, A2) ? s(b2, O(A2)) : v(j, A2) ? s(h2, A2) : (a("object" !== A2, 'The value "object" should be written as "Object"'), s(m3, A2));
                }
              } catch (t7) {
                w2.e(t7);
              } finally {
                w2.f();
              }
              if (h2.length > 0) {
                var _2 = p2(b2, "object");
                -1 !== _2 && (g(b2, _2, 1), s(h2, "Object"));
              }
              if (b2.length > 0) {
                if (b2.length > 2) {
                  var L2 = y(b2);
                  i3 += "one of type ".concat(f(b2, ", "), ", or ").concat(L2);
                } else i3 += 2 === b2.length ? "one of type ".concat(b2[0], " or ").concat(b2[1]) : "of type ".concat(b2[0]);
                (h2.length > 0 || m3.length > 0) && (i3 += " or ");
              }
              if (h2.length > 0) {
                if (h2.length > 2) {
                  var _$R = y(h2);
                  i3 += "an instance of ".concat(f(h2, ", "), ", or ").concat(_$R);
                } else i3 += "an instance of ".concat(h2[0]), 2 === h2.length && (i3 += " or ".concat(h2[1]));
                m3.length > 0 && (i3 += " or ");
              }
              if (m3.length > 0) if (m3.length > 2) {
                var k2 = y(m3);
                i3 += "one of ".concat(f(m3, ", "), ", or ").concat(k2);
              } else 2 === m3.length ? i3 += "one of ".concat(m3[0], " or ").concat(m3[1]) : (O(m3[0]) !== m3[0] && (i3 += "an "), i3 += "".concat(m3[0]));
              if (null == r6) i3 += ". Received ".concat(r6);
              else if ("function" == typeof r6 && r6.name) i3 += ". Received function ".concat(r6.name);
              else if ("object" === n3(r6)) if (r6.constructor && r6.constructor.name) i3 += ". Received an instance of ".concat(r6.constructor.name);
              else {
                var T2 = F().inspect(r6, {
                  depth: -1
                });
                i3 += ". Received ".concat(T2);
              }
              else {
                var I2 = F().inspect(r6, {
                  colors: false
                });
                I2.length > 25 && (I2 = "".concat(x(I2, 0, 25), "...")), i3 += ". Received type ".concat(n3(r6), " (").concat(I2, ")");
              }
              return i3;
            }, "z"), M = TypeError, w.set(I, z), A[I] = (B = M, N = I, function() {
              var _$t = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              var e5 = new B();
              Error.stackTraceLimit = _$t;
              for (var n4 = arguments.length, o3 = new Array(n4), i3 = 0; i3 < n4; i3++) o3[i3] = arguments[i3];
              var c3 = function(t6, e6, n5) {
                var o4 = w.get(t6);
                return void 0 === a && (a = r5(783)), a("function" == typeof o4), a(o4.length <= e6.length, "Code: ".concat(t6, "; The provided arguments length (").concat(e6.length, ") does not ") + "match the required ones (".concat(o4.length, ").")), h(o4, n5, e6);
              }(N, o3, e5);
              return b(e5, "message", {
                value: c3,
                enumerable: false,
                writable: true,
                configurable: true
              }), b(e5, "toString", {
                value: /* @__PURE__ */ __name(function value() {
                  return "".concat(this.name, " [").concat(N, "]: ").concat(this.message);
                }, "value"),
                enumerable: false,
                writable: true,
                configurable: true
              }), L(e5, B.name, N), e5.code = N, e5;
            });
          },
          976: (t5, e4, r5) => {
            var n3 = r5(951), o2 = n3.StringPrototypeCharCodeAt, i2 = n3.StringPrototypeIncludes, a = n3.StringPrototypeReplace, c2 = r5(840).CHAR_FORWARD_SLASH, l2 = r5(948), u = /%/g, p2 = /\\/g, f = /\n/g, y = /\r/g, s = /\t/g;
            t5.exports = {
              pathToFileURL: /* @__PURE__ */ __name(function pathToFileURL(t6) {
                var e5 = new URL("file://"), _$r = l2.resolve(t6);
                return o2(t6, t6.length - 1) === c2 && _$r[_$r.length - 1] !== l2.sep && (_$r += "/"), e5.pathname = function(t7) {
                  return i2(t7, "%") && (t7 = a(t7, u, "%25")), i2(t7, "\\") && (t7 = a(t7, p2, "%5C")), i2(t7, "\n") && (t7 = a(t7, f, "%0A")), i2(t7, "\r") && (t7 = a(t7, y, "%0D")), i2(t7, "	") && (t7 = a(t7, s, "%09")), t7;
                }(_$r), e5;
              }, "pathToFileURL")
            };
          },
          641: (t5) => {
            var e4 = /\u001b\[\d\d?m/g;
            t5.exports = {
              customInspectSymbol: Symbol.for("nodejs.util.inspect.custom"),
              isError: /* @__PURE__ */ __name(function isError2(t6) {
                return t6 instanceof Error;
              }, "isError"),
              join: Array.prototype.join.call.bind(Array.prototype.join),
              removeColors: /* @__PURE__ */ __name(function removeColors(t6) {
                return String.prototype.replace.call(t6, e4, "");
              }, "removeColors")
            };
          },
          567: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r5(763).getConstructorName;
            function i2(t6) {
              for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) _$r[i3 - 1] = arguments[i3];
              for (var _$a = 0, c3 = _$r; _$a < c3.length; _$a++) {
                var l3 = c3[_$a], u2 = globalThis[l3];
                if (u2 && t6 instanceof u2) return true;
              }
              for (; t6; ) {
                if ("object" !== n3(t6)) return false;
                if (_$r.indexOf(o2(t6)) >= 0) return true;
                t6 = Object.getPrototypeOf(t6);
              }
              return false;
            }
            __name(i2, "i");
            function a(t6) {
              return function(e5) {
                if (!i2(e5, t6.name)) return false;
                try {
                  t6.prototype.valueOf.call(e5);
                } catch (t7) {
                  return false;
                }
                return true;
              };
            }
            __name(a, "a");
            "object" !== ("undefined" == typeof globalThis ? "undefined" : n3(globalThis)) && (Object.defineProperty(Object.prototype, "__magic__", {
              get: /* @__PURE__ */ __name(function get() {
                return this;
              }, "get"),
              configurable: true
            }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
            var c2 = a(String), l2 = a(Number), u = a(Boolean), p2 = a(BigInt), f = a(Symbol);
            t5.exports = {
              isAsyncFunction: /* @__PURE__ */ __name(function isAsyncFunction(t6) {
                return "function" == typeof t6 && Function.prototype.toString.call(t6).startsWith("async");
              }, "isAsyncFunction"),
              isGeneratorFunction: /* @__PURE__ */ __name(function isGeneratorFunction(t6) {
                return "function" == typeof t6 && Function.prototype.toString.call(t6).match(/^(async\s+)?function *\*/);
              }, "isGeneratorFunction"),
              isAnyArrayBuffer: /* @__PURE__ */ __name(function isAnyArrayBuffer(t6) {
                return i2(t6, "ArrayBuffer", "SharedArrayBuffer");
              }, "isAnyArrayBuffer"),
              isArrayBuffer: /* @__PURE__ */ __name(function isArrayBuffer(t6) {
                return i2(t6, "ArrayBuffer");
              }, "isArrayBuffer"),
              isArgumentsObject: /* @__PURE__ */ __name(function isArgumentsObject(t6) {
                if (null !== t6 && "object" === n3(t6) && !Array.isArray(t6) && "number" == typeof t6.length && t6.length === (0 | t6.length) && t6.length >= 0) {
                  var e5 = Object.getOwnPropertyDescriptor(t6, "callee");
                  return e5 && !e5.enumerable;
                }
                return false;
              }, "isArgumentsObject"),
              isBoxedPrimitive: /* @__PURE__ */ __name(function isBoxedPrimitive(t6) {
                return l2(t6) || c2(t6) || u(t6) || p2(t6) || f(t6);
              }, "isBoxedPrimitive"),
              isDataView: /* @__PURE__ */ __name(function isDataView(t6) {
                return i2(t6, "DataView");
              }, "isDataView"),
              isExternal: /* @__PURE__ */ __name(function isExternal(t6) {
                return "object" === n3(t6) && Object.isFrozen(t6) && null == Object.getPrototypeOf(t6);
              }, "isExternal"),
              isMap: /* @__PURE__ */ __name(function isMap2(t6) {
                if (!i2(t6, "Map")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isMap"),
              isMapIterator: /* @__PURE__ */ __name(function isMapIterator(t6) {
                return "[object Map Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t6));
              }, "isMapIterator"),
              isModuleNamespaceObject: /* @__PURE__ */ __name(function isModuleNamespaceObject(t6) {
                return t6 && "object" === n3(t6) && "Module" === t6[Symbol.toStringTag];
              }, "isModuleNamespaceObject"),
              isNativeError: /* @__PURE__ */ __name(function isNativeError(t6) {
                return t6 instanceof Error && i2(t6, "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError");
              }, "isNativeError"),
              isPromise: /* @__PURE__ */ __name(function isPromise(t6) {
                return i2(t6, "Promise");
              }, "isPromise"),
              isSet: /* @__PURE__ */ __name(function isSet2(t6) {
                if (!i2(t6, "Set")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isSet"),
              isSetIterator: /* @__PURE__ */ __name(function isSetIterator(t6) {
                return "[object Set Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t6));
              }, "isSetIterator"),
              isWeakMap: /* @__PURE__ */ __name(function isWeakMap(t6) {
                return i2(t6, "WeakMap");
              }, "isWeakMap"),
              isWeakSet: /* @__PURE__ */ __name(function isWeakSet(t6) {
                return i2(t6, "WeakSet");
              }, "isWeakSet"),
              isRegExp: /* @__PURE__ */ __name(function isRegExp(t6) {
                return i2(t6, "RegExp");
              }, "isRegExp"),
              isDate: /* @__PURE__ */ __name(function isDate(t6) {
                if (i2(t6, "Date")) try {
                  return Date.prototype.getTime.call(t6), true;
                } catch (t7) {
                }
                return false;
              }, "isDate"),
              isTypedArray: /* @__PURE__ */ __name(function isTypedArray2(t6) {
                return i2(t6, "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array");
              }, "isTypedArray"),
              isStringObject: c2,
              isNumberObject: l2,
              isBooleanObject: u,
              isBigIntObject: p2,
              isSymbolObject: f
            };
          },
          322: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r5(951).ArrayIsArray, i2 = r5(638), a = i2.hideStackFrames, c2 = i2.codes.ERR_INVALID_ARG_TYPE, l2 = a(function(t6, e5) {
              var _$r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              if (0 === _$r) {
                if (null === t6 || o2(t6)) throw new c2(e5, "Object", t6);
                if ("object" !== n3(t6)) throw new c2(e5, "Object", t6);
              } else {
                if (!(1 & _$r) && null === t6) throw new c2(e5, "Object", t6);
                if (!(2 & _$r) && o2(t6)) throw new c2(e5, "Object", t6);
                var i3 = !(4 & _$r), a2 = n3(t6);
                if ("object" !== a2 && (i3 || "function" !== a2)) throw new c2(e5, "Object", t6);
              }
            });
            t5.exports = {
              kValidateObjectNone: 0,
              kValidateObjectAllowNullable: 1,
              kValidateObjectAllowArray: 2,
              kValidateObjectAllowFunction: 4,
              validateObject: l2,
              validateString: /* @__PURE__ */ __name(function validateString(t6, e5) {
                if ("string" != typeof t6) throw new c2(e5, "string", t6);
              }, "validateString")
            };
          },
          948: (t5, e4, r5) => {
            var n3 = r5(951), o2 = n3.StringPrototypeCharCodeAt, i2 = n3.StringPrototypeLastIndexOf, a = n3.StringPrototypeSlice, c2 = r5(840), l2 = c2.CHAR_DOT, u = c2.CHAR_FORWARD_SLASH, p2 = r5(322).validateString;
            function f(t6) {
              return t6 === u;
            }
            __name(f, "f");
            t5.exports = {
              resolve: /* @__PURE__ */ __name(function resolve() {
                for (var _$t = "", e5 = false, _$r = arguments.length - 1; _$r >= -1 && !e5; _$r--) {
                  var n4 = _$r >= 0 ? _$r < 0 || arguments.length <= _$r ? void 0 : arguments[_$r] : "/";
                  p2(n4, "path"), 0 !== n4.length && (_$t = "".concat(n4, "/").concat(_$t), e5 = o2(n4, 0) === u);
                }
                return _$t = function(t6, e6, r6, n5) {
                  for (var c3 = "", p3 = 0, _$f = -1, y = 0, s = 0, g = 0; g <= t6.length; ++g) {
                    if (g < t6.length) s = o2(t6, g);
                    else {
                      if (n5(s)) break;
                      s = u;
                    }
                    if (n5(s)) {
                      if (_$f === g - 1 || 1 === y) ;
                      else if (2 === y) {
                        if (c3.length < 2 || 2 !== p3 || o2(c3, c3.length - 1) !== l2 || o2(c3, c3.length - 2) !== l2) {
                          if (c3.length > 2) {
                            var d = i2(c3, r6);
                            -1 === d ? (c3 = "", p3 = 0) : p3 = (c3 = a(c3, 0, d)).length - 1 - i2(c3, r6), _$f = g, y = 0;
                            continue;
                          }
                          if (0 !== c3.length) {
                            c3 = "", p3 = 0, _$f = g, y = 0;
                            continue;
                          }
                        }
                        e6 && (c3 += c3.length > 0 ? "".concat(r6, "..") : "..", p3 = 2);
                      } else c3.length > 0 ? c3 += "".concat(r6).concat(a(t6, _$f + 1, g)) : c3 = a(t6, _$f + 1, g), p3 = g - _$f - 1;
                      _$f = g, y = 0;
                    } else s === l2 && -1 !== y ? ++y : y = -1;
                  }
                  return c3;
                }(_$t, !e5, "/", f), e5 ? "/".concat(_$t) : _$t.length > 0 ? _$t : ".";
              }, "resolve")
            };
          },
          951: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5, r6) {
              return e5 = u(e5), function(t7, e6) {
                if (e6 && ("object" === n3(e6) || "function" == typeof e6)) return e6;
                if (void 0 !== e6) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t8) {
                  if (void 0 === t8) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t8;
                }(t7);
              }(t6, c2() ? Reflect.construct(e5, r6 || [], u(t6).constructor) : e5.apply(t6, r6));
            }
            __name(o2, "o");
            function i2(t6, e5) {
              if ("function" != typeof e5 && null !== e5) throw new TypeError("Super expression must either be null or a function");
              t6.prototype = Object.create(e5 && e5.prototype, {
                constructor: {
                  value: t6,
                  writable: true,
                  configurable: true
                }
              }), Object.defineProperty(t6, "prototype", {
                writable: false
              }), e5 && l2(t6, e5);
            }
            __name(i2, "i");
            function a(t6) {
              var e5 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
              return a = /* @__PURE__ */ __name(function a2(t7) {
                if (null === t7 || !function(t8) {
                  try {
                    return -1 !== Function.toString.call(t8).indexOf("[native code]");
                  } catch (e6) {
                    return "function" == typeof t8;
                  }
                }(t7)) return t7;
                if ("function" != typeof t7) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e5) {
                  if (e5.has(t7)) return e5.get(t7);
                  e5.set(t7, r6);
                }
                function r6() {
                  return function(t8, e6, r7) {
                    if (c2()) return Reflect.construct.apply(null, arguments);
                    var n4 = [
                      null
                    ];
                    n4.push.apply(n4, e6);
                    var o3 = new (t8.bind.apply(t8, n4))();
                    return r7 && l2(o3, r7.prototype), o3;
                  }(t7, arguments, u(this).constructor);
                }
                __name(r6, "r");
                return r6.prototype = Object.create(t7.prototype, {
                  constructor: {
                    value: r6,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                }), l2(r6, t7);
              }, "a"), a(t6);
            }
            __name(a, "a");
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
            function l2(t6, e5) {
              return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ __name(function l3(t7, e6) {
                return t7.__proto__ = e6, t7;
              }, "l"), l2(t6, e5);
            }
            __name(l2, "l");
            function u(t6) {
              return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ __name(function u2(t7) {
                return t7.__proto__ || Object.getPrototypeOf(t7);
              }, "u"), u(t6);
            }
            __name(u, "u");
            function p2(t6, e5) {
              if (!(t6 instanceof e5)) throw new TypeError("Cannot call a class as a function");
            }
            __name(p2, "p");
            function f(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, s(n4.key), n4);
              }
            }
            __name(f, "f");
            function y(t6, e5, r6) {
              return e5 && f(t6.prototype, e5), r6 && f(t6, r6), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
            }
            __name(y, "y");
            function s(t6) {
              var e5 = function(t7, e6) {
                if ("object" != n3(t7) || !t7) return t7;
                var _$r = t7[Symbol.toPrimitive];
                if (void 0 !== _$r) {
                  var o3 = _$r.call(t7, "string");
                  if ("object" != n3(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == n3(e5) ? e5 : e5 + "";
            }
            __name(s, "s");
            var g = /* @__PURE__ */ __name(function g2(t6, e5) {
              var _$r = function() {
                return y(/* @__PURE__ */ __name(function e6(r6) {
                  p2(this, e6), this._iterator = t6(r6);
                }, "e"), [
                  {
                    key: "next",
                    value: /* @__PURE__ */ __name(function value() {
                      return e5(this._iterator);
                    }, "value")
                  },
                  {
                    key: Symbol.iterator,
                    value: /* @__PURE__ */ __name(function value() {
                      return this;
                    }, "value")
                  }
                ]);
              }();
              return Object.setPrototypeOf(_$r.prototype, null), Object.freeze(_$r.prototype), Object.freeze(_$r), _$r;
            }, "g");
            function d(t6, e5) {
              return Function.prototype.call.bind(t6.prototype.__lookupGetter__(e5));
            }
            __name(d, "d");
            function b(t6) {
              return Function.prototype.call.bind(t6);
            }
            __name(b, "b");
            var h = /* @__PURE__ */ __name(function h2(t6, e5) {
              Array.prototype.forEach.call(Reflect.ownKeys(t6), function(r6) {
                Reflect.getOwnPropertyDescriptor(e5, r6) || Reflect.defineProperty(e5, r6, Reflect.getOwnPropertyDescriptor(t6, r6));
              });
            }, "h"), v = /* @__PURE__ */ __name(function v2(t6, e5) {
              if (Symbol.iterator in t6.prototype) {
                var _$r, n4 = new t6();
                Array.prototype.forEach.call(Reflect.ownKeys(t6.prototype), function(o3) {
                  if (!Reflect.getOwnPropertyDescriptor(e5.prototype, o3)) {
                    var i3 = Reflect.getOwnPropertyDescriptor(t6.prototype, o3);
                    if ("function" == typeof i3.value && 0 === i3.value.length && Symbol.iterator in (Function.prototype.call.call(i3.value, n4) || {})) {
                      var _$a = b(i3.value);
                      null == _$r && (_$r = b(_$a(n4).next));
                      var c3 = g(_$a, _$r);
                      i3.value = function() {
                        return new c3(this);
                      };
                    }
                    Reflect.defineProperty(e5.prototype, o3, i3);
                  }
                });
              } else h(t6.prototype, e5.prototype);
              return h(t6, e5), Object.setPrototypeOf(e5.prototype, null), Object.freeze(e5.prototype), Object.freeze(e5), e5;
            }, "v"), m2 = Function.prototype.call.bind(String.prototype[Symbol.iterator]), S = Reflect.getPrototypeOf(m2(""));
            if (t5.exports = {
              makeSafe: v,
              internalBinding: /* @__PURE__ */ __name(function internalBinding(t6) {
                if ("config" === t6) return {
                  hasIntl: false
                };
                throw new Error('unknown module: "'.concat(t6, '"'));
              }, "internalBinding"),
              Array,
              ArrayIsArray: Array.isArray,
              ArrayPrototypeFilter: Function.prototype.call.bind(Array.prototype.filter),
              ArrayPrototypeForEach: Function.prototype.call.bind(Array.prototype.forEach),
              ArrayPrototypeIncludes: Function.prototype.call.bind(Array.prototype.includes),
              ArrayPrototypeIndexOf: Function.prototype.call.bind(Array.prototype.indexOf),
              ArrayPrototypeJoin: Function.prototype.call.bind(Array.prototype.join),
              ArrayPrototypeMap: Function.prototype.call.bind(Array.prototype.map),
              ArrayPrototypePop: Function.prototype.call.bind(Array.prototype.pop),
              ArrayPrototypePush: Function.prototype.call.bind(Array.prototype.push),
              ArrayPrototypePushApply: Function.apply.bind(Array.prototype.push),
              ArrayPrototypeSlice: Function.prototype.call.bind(Array.prototype.slice),
              ArrayPrototypeSort: Function.prototype.call.bind(Array.prototype.sort),
              ArrayPrototypeSplice: Function.prototype.call.bind(Array.prototype.splice),
              ArrayPrototypeUnshift: Function.prototype.call.bind(Array.prototype.unshift),
              BigIntPrototypeValueOf: Function.prototype.call.bind(BigInt.prototype.valueOf),
              BooleanPrototypeValueOf: Function.prototype.call.bind(Boolean.prototype.valueOf),
              DatePrototypeGetTime: Function.prototype.call.bind(Date.prototype.getTime),
              DatePrototypeToISOString: Function.prototype.call.bind(Date.prototype.toISOString),
              DatePrototypeToString: Function.prototype.call.bind(Date.prototype.toString),
              ErrorCaptureStackTrace: /* @__PURE__ */ __name(function ErrorCaptureStackTrace(t6) {
                var e5 = new Error().stack;
                t6.stack = e5.replace(/.*\n.*/, "$1");
              }, "ErrorCaptureStackTrace"),
              ErrorPrototypeToString: Function.prototype.call.bind(Error.prototype.toString),
              FunctionPrototypeBind: Function.prototype.call.bind(Function.prototype.bind),
              FunctionPrototypeCall: Function.prototype.call.bind(Function.prototype.call),
              FunctionPrototypeToString: Function.prototype.call.bind(Function.prototype.toString),
              globalThis: "undefined" == typeof globalThis ? r5.g : globalThis,
              JSONStringify: JSON.stringify,
              MapPrototypeGetSize: d(Map, "size"),
              MapPrototypeEntries: Function.prototype.call.bind(Map.prototype.entries),
              MathFloor: Math.floor,
              MathMax: Math.max,
              MathMin: Math.min,
              MathRound: Math.round,
              MathSqrt: Math.sqrt,
              MathTrunc: Math.trunc,
              Number,
              NumberIsFinite: Number.isFinite,
              NumberIsNaN: Number.isNaN,
              NumberParseFloat: Number.parseFloat,
              NumberParseInt: Number.parseInt,
              NumberPrototypeToString: Function.prototype.call.bind(Number.prototype.toString),
              NumberPrototypeValueOf: Function.prototype.call.bind(Number.prototype.valueOf),
              Object,
              ObjectAssign: Object.assign,
              ObjectCreate: Object.create,
              ObjectDefineProperty: Object.defineProperty,
              ObjectGetOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
              ObjectGetOwnPropertyNames: Object.getOwnPropertyNames,
              ObjectGetOwnPropertySymbols: Object.getOwnPropertySymbols,
              ObjectGetPrototypeOf: Object.getPrototypeOf,
              ObjectIs: Object.is,
              ObjectKeys: Object.keys,
              ObjectPrototypeHasOwnProperty: Function.prototype.call.bind(Object.prototype.hasOwnProperty),
              ObjectPrototypePropertyIsEnumerable: Function.prototype.call.bind(Object.prototype.propertyIsEnumerable),
              ObjectSeal: Object.seal,
              ObjectSetPrototypeOf: Object.setPrototypeOf,
              ReflectApply: Reflect.apply,
              ReflectOwnKeys: Reflect.ownKeys,
              RegExp,
              RegExpPrototypeExec: Function.prototype.call.bind(RegExp.prototype.exec),
              RegExpPrototypeSymbolReplace: Function.prototype.call.bind(RegExp.prototype[Symbol.replace]),
              RegExpPrototypeSymbolSplit: Function.prototype.call.bind(RegExp.prototype[Symbol.split]),
              RegExpPrototypeTest: Function.prototype.call.bind(RegExp.prototype.test),
              RegExpPrototypeToString: Function.prototype.call.bind(RegExp.prototype.toString),
              SafeStringIterator: g(m2, Function.prototype.call.bind(S.next)),
              SafeMap: v(Map, function(t6) {
                function e5(t7) {
                  return p2(this, e5), o2(this, e5, [
                    t7
                  ]);
                }
                __name(e5, "e");
                return i2(e5, t6), y(e5);
              }(a(Map))),
              SafeSet: v(Set, function(t6) {
                function e5(t7) {
                  return p2(this, e5), o2(this, e5, [
                    t7
                  ]);
                }
                __name(e5, "e");
                return i2(e5, t6), y(e5);
              }(a(Set))),
              SetPrototypeGetSize: d(Set, "size"),
              SetPrototypeValues: Function.prototype.call.bind(Set.prototype.values),
              String,
              StringPrototypeCharCodeAt: Function.prototype.call.bind(String.prototype.charCodeAt),
              StringPrototypeCodePointAt: Function.prototype.call.bind(String.prototype.codePointAt),
              StringPrototypeEndsWith: Function.prototype.call.bind(String.prototype.endsWith),
              StringPrototypeIncludes: Function.prototype.call.bind(String.prototype.includes),
              StringPrototypeIndexOf: Function.prototype.call.bind(String.prototype.indexOf),
              StringPrototypeLastIndexOf: Function.prototype.call.bind(String.prototype.lastIndexOf),
              StringPrototypeNormalize: Function.prototype.call.bind(String.prototype.normalize),
              StringPrototypePadEnd: Function.prototype.call.bind(String.prototype.padEnd),
              StringPrototypePadStart: Function.prototype.call.bind(String.prototype.padStart),
              StringPrototypeRepeat: Function.prototype.call.bind(String.prototype.repeat),
              StringPrototypeReplace: Function.prototype.call.bind(String.prototype.replace),
              StringPrototypeReplaceAll: Function.prototype.call.bind(String.prototype.replaceAll),
              StringPrototypeSlice: Function.prototype.call.bind(String.prototype.slice),
              StringPrototypeSplit: Function.prototype.call.bind(String.prototype.split),
              StringPrototypeStartsWith: Function.prototype.call.bind(String.prototype.startsWith),
              StringPrototypeToLowerCase: Function.prototype.call.bind(String.prototype.toLowerCase),
              StringPrototypeTrim: Function.prototype.call.bind(String.prototype.trim),
              StringPrototypeValueOf: Function.prototype.call.bind(String.prototype.valueOf),
              SymbolPrototypeToString: Function.prototype.call.bind(Symbol.prototype.toString),
              SymbolPrototypeValueOf: Function.prototype.call.bind(Symbol.prototype.valueOf),
              SymbolIterator: Symbol.iterator,
              SymbolFor: Symbol.for,
              SymbolToStringTag: Symbol.toStringTag,
              TypedArrayPrototypeGetLength: ("length", function(t6) {
                return t6.constructor.prototype.__lookupGetter__("length").call(t6);
              }),
              Uint8Array,
              uncurryThis: b
            }, !String.prototype.replaceAll) {
              var P = /* @__PURE__ */ __name(function P2(t6) {
                if (null == t6) throw new TypeError("Can't call method on " + t6);
                return t6;
              }, "P"), x = /* @__PURE__ */ __name(function x2(t6, e5, r6, n4, o3, i3) {
                var _$a = r6 + t6.length, c3 = n4.length, l3 = /\$([$&'`]|\d{1,2})/;
                return void 0 !== o3 && (o3 = Object(P(o3)), l3 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g), i3.replace(l3, function(i4, l4) {
                  var u2;
                  switch (l4.charAt(0)) {
                    case "$":
                      return "$";
                    case "&":
                      return t6;
                    case "`":
                      return e5.slice(0, r6);
                    case "'":
                      return e5.slice(_$a);
                    case "<":
                      u2 = o3[l4.slice(1, -1)];
                      break;
                    default:
                      var p3 = +l4;
                      if (0 === p3) return i4;
                      if (p3 > c3) {
                        var f2 = Math.floor(p3 / 10);
                        return 0 === f2 ? i4 : f2 <= c3 ? void 0 === n4[f2 - 1] ? l4.charAt(1) : n4[f2 - 1] + l4.charAt(1) : i4;
                      }
                      u2 = n4[p3 - 1];
                  }
                  return void 0 === u2 ? "" : u2;
                });
              }, "x");
              t5.exports.StringPrototypeReplaceAll = function(t6, e5, r6) {
                var n4, o3, i3 = P(t6), _$a = 0, c3 = 0, l3 = "";
                if (null != e5) {
                  if (e5 instanceof RegExp && !~e5.flags.indexOf("g")) throw new TypeError("`.replaceAll` does not allow non-global regexes");
                  if (n4 = e5[Symbol.replace]) return n4.call(e5, i3, r6);
                }
                var u2 = String(i3), p3 = String(e5), f2 = "function" == typeof r6;
                f2 || (r6 = String(r6));
                var y2 = p3.length, s2 = Math.max(1, y2);
                for (_$a = u2.indexOf(p3, 0); -1 !== _$a; ) o3 = f2 ? String(r6(p3, _$a, u2)) : x(p3, u2, _$a, [], void 0, r6), l3 += u2.slice(c3, _$a) + o3, c3 = _$a + y2, _$a = u2.indexOf(p3, _$a + s2);
                return c3 < u2.length && (l3 += u2.slice(c3)), l3;
              };
            }
          },
          975: (t5) => {
            function e4(t6) {
              return e4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function e5(t7) {
                return typeof t7;
              }, "e") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, e4(t6);
            }
            __name(e4, "e");
            function r5(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var o3 = e5[_$r];
                o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t6, n3(o3.key), o3);
              }
            }
            __name(r5, "r");
            function n3(t6) {
              var _$r = function(t7, r6) {
                if ("object" != e4(t7) || !t7) return t7;
                var n4 = t7[Symbol.toPrimitive];
                if (void 0 !== n4) {
                  var o3 = n4.call(t7, "string");
                  if ("object" != e4(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == e4(_$r) ? _$r : _$r + "";
            }
            __name(n3, "n");
            var o2 = /* @__PURE__ */ new WeakMap(), i2 = function() {
              return _$t = /* @__PURE__ */ __name(function t6(e6, r6) {
                !function(t7, e7) {
                  if (!(t7 instanceof e7)) throw new TypeError("Cannot call a class as a function");
                }(this, t6);
                var n4 = new Proxy(e6, r6);
                return o2.set(n4, [
                  e6,
                  r6
                ]), n4;
              }, "t"), e5 = [
                {
                  key: "getProxyDetails",
                  value: /* @__PURE__ */ __name(function value(t6) {
                    var e6 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], _$r = o2.get(t6);
                    if (_$r) return e6 ? _$r : _$r[0];
                  }, "value")
                },
                {
                  key: "revocable",
                  value: /* @__PURE__ */ __name(function value(t6, e6) {
                    var _$r = Proxy.revocable(t6, e6);
                    o2.set(_$r.proxy, [
                      t6,
                      e6
                    ]);
                    var n4 = _$r.revoke;
                    return _$r.revoke = function() {
                      o2.set(_$r.proxy, [
                        null,
                        null
                      ]), n4();
                    }, _$r;
                  }, "value")
                }
              ], null, e5 && r5(_$t, e5), Object.defineProperty(_$t, "prototype", {
                writable: false
              }), _$t;
              var _$t, e5;
            }();
            t5.exports = {
              getProxyDetails: i2.getProxyDetails.bind(i2),
              Proxy: i2
            };
          },
          763: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              if (t6) {
                if ("string" == typeof t6) return i2(t6, e5);
                var _$r = Object.prototype.toString.call(t6).slice(8, -1);
                return "Object" === _$r && t6.constructor && (_$r = t6.constructor.name), "Map" === _$r || "Set" === _$r ? Array.from(t6) : "Arguments" === _$r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r) ? i2(t6, e5) : void 0;
              }
            }
            __name(o2, "o");
            function i2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(i2, "i");
            var a = r5(975), c2 = Symbol("kPending"), l2 = Symbol("kRejected");
            t5.exports = {
              constants: {
                kPending: c2,
                kRejected: l2,
                ALL_PROPERTIES: 0,
                ONLY_ENUMERABLE: 2
              },
              getOwnNonIndexProperties: /* @__PURE__ */ __name(function getOwnNonIndexProperties(t6) {
                for (var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, _$r = Object.getOwnPropertyDescriptors(t6), n4 = [], i3 = 0, a2 = Object.entries(_$r); i3 < a2.length; i3++) {
                  var c3 = (p2 = a2[i3], f = 2, function(t7) {
                    if (Array.isArray(t7)) return t7;
                  }(p2) || function(t7, e6) {
                    var _$r2 = null == t7 ? null : "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                    if (null != _$r2) {
                      var n5, _$o, i4, a3, c4 = [], l4 = true, u2 = false;
                      try {
                        if (i4 = (_$r2 = _$r2.call(t7)).next, 0 === e6) {
                          if (Object(_$r2) !== _$r2) return;
                          l4 = false;
                        } else for (; !(l4 = (n5 = i4.call(_$r2)).done) && (c4.push(n5.value), c4.length !== e6); l4 = true) ;
                      } catch (t8) {
                        u2 = true, _$o = t8;
                      } finally {
                        try {
                          if (!l4 && null != _$r2.return && (a3 = _$r2.return(), Object(a3) !== a3)) return;
                        } finally {
                          if (u2) throw _$o;
                        }
                      }
                      return c4;
                    }
                  }(p2, f) || o2(p2, f) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }()), l3 = c3[0], u = c3[1];
                  if (!/^(0|[1-9][0-9]*)$/.test(l3) || parseInt(l3, 10) >= Math.pow(2, 32) - 1) {
                    if (2 === e5 && !u.enumerable) continue;
                    n4.push(l3);
                  }
                }
                var p2, f, y, s = function(t7, e6) {
                  var _$r2 = "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                  if (!_$r2) {
                    if (Array.isArray(t7) || (_$r2 = o2(t7))) {
                      _$r2 && (t7 = _$r2);
                      var n5 = 0, i4 = /* @__PURE__ */ __name(function i5() {
                      }, "i");
                      return {
                        s: i4,
                        n: /* @__PURE__ */ __name(function n1() {
                          return n5 >= t7.length ? {
                            done: true
                          } : {
                            done: false,
                            value: t7[n5++]
                          };
                        }, "n1"),
                        e: /* @__PURE__ */ __name(function e7(t8) {
                          throw t8;
                        }, "e"),
                        f: i4
                      };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var a3, c4 = true, l4 = false;
                  return {
                    s: /* @__PURE__ */ __name(function s2() {
                      _$r2 = _$r2.call(t7);
                    }, "s"),
                    n: /* @__PURE__ */ __name(function n6() {
                      var _$t = _$r2.next();
                      return c4 = _$t.done, _$t;
                    }, "n"),
                    e: /* @__PURE__ */ __name(function e7(t8) {
                      l4 = true, a3 = t8;
                    }, "e"),
                    f: /* @__PURE__ */ __name(function f2() {
                      try {
                        c4 || null == _$r2.return || _$r2.return();
                      } finally {
                        if (l4) throw a3;
                      }
                    }, "f")
                  };
                }(Object.getOwnPropertySymbols(t6));
                try {
                  for (s.s(); !(y = s.n()).done; ) {
                    var g = y.value, d = Object.getOwnPropertyDescriptor(t6, g);
                    (2 !== e5 || d.enumerable) && n4.push(g);
                  }
                } catch (t7) {
                  s.e(t7);
                } finally {
                  s.f();
                }
                return n4;
              }, "getOwnNonIndexProperties"),
              getPromiseDetails: /* @__PURE__ */ __name(function getPromiseDetails() {
                return [
                  c2,
                  void 0
                ];
              }, "getPromiseDetails"),
              getProxyDetails: a.getProxyDetails,
              Proxy: a.Proxy,
              previewEntries: /* @__PURE__ */ __name(function previewEntries(t6) {
                return [
                  [],
                  false
                ];
              }, "previewEntries"),
              getConstructorName: /* @__PURE__ */ __name(function getConstructorName(t6) {
                if (!t6 || "object" !== n3(t6)) throw new Error("Invalid object");
                if (t6.constructor && t6.constructor.name) return t6.constructor.name;
                var e5 = Object.prototype.toString.call(t6).match(/^\[object ([^\]]+)\]/);
                return e5 ? e5[1] : "Object";
              }, "getConstructorName"),
              getExternalValue: /* @__PURE__ */ __name(function getExternalValue() {
                return BigInt(0);
              }, "getExternalValue")
            };
          }
        }, e3 = {};
        function r4(n3) {
          var o2 = e3[n3];
          if (void 0 !== o2) return o2.exports;
          var i2 = e3[n3] = {
            exports: {}
          };
          return t4[n3](i2, i2.exports, r4), i2.exports;
        }
        __name(r4, "r");
        return r4.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t5) {
            if ("object" == typeof window) return window;
          }
        }(), r4(339);
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
    blzlogger: () => blzlogger
  });
  var Logger, blzlogger;
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
              var logger31 = new Logger2(name);
              logger31.parent = this;
              logger31.breadcrumbs = [
                ...this.breadcrumbs,
                name
              ];
              return logger31;
            }, "createChild")
          },
          {
            key: "log",
            value: /* @__PURE__ */ __name(function log(level, message, ...substitutions) {
              if (typeof message === "object") {
                message = String.raw(message, ...substitutions);
              }
              this.executeOnSelfAndAncestors((logger31) => {
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
                if (logger31.logHandlers.size > 0) {
                  for (var handler of logger31.logHandlers) {
                    handler(logParameters);
                  }
                }
                logger31.logs.push(logParameters);
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
              this.executeOnSelfAndAncestors((logger31) => {
                logger31.logHandlers.add(logHandler);
              });
              return () => this.unpipe(logHandler);
            }, "pipe")
          },
          {
            key: "unpipe",
            value: /* @__PURE__ */ __name(function unpipe(logHandler) {
              this.executeOnSelfAndAncestors((logger31) => {
                logger31.logHandlers.delete(logHandler);
              });
            }, "unpipe")
          },
          {
            key: "unpipeAll",
            value: /* @__PURE__ */ __name(function unpipeAll() {
              this.executeOnSelfAndAncestors((logger31) => {
                if (logger31 === this) return;
                for (var handler of this.logHandlers) {
                  if (logger31.logHandlers.has(handler)) {
                    logger31.logHandlers.delete(handler);
                  }
                }
              });
              this.logHandlers.clear();
            }, "unpipeAll")
          }
        ]);
        return Logger2;
      }();
      blzlogger = new Logger("BlazeCord");
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

  // src/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    BundleUpdaterModule: () => BundleUpdaterModule,
    ImageLoader: () => ImageLoader,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    ThemeModule: () => ThemeModule,
    getNativeModule: () => getNativeModule
  });
  function getNativeModule(...names) {
    for (var name of names) {
      var module3 = globalThis.__turboModuleProxy?.(name);
      if (module3) return module3;
      var legacyModule = globalThis.nativeModuleProxy?.[name];
      if (legacyModule) return legacyModule;
    }
    throw new Error(`Native module "${names.join(", ")}" not found.`);
  }
  var NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, BundleUpdaterModule, ThemeModule, ImageLoader;
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
      ImageLoader = getNativeModule("ImageLoader");
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
      var promise = ImageLoader.queryCache([
        "__blazecord_bridge",
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
      init_native();
      loaderPayload = window.__BLAZECORD_LOADER__;
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
    return `${loaderPayload.loader.constants.BLAZECORD_DIR}/${path}`;
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
      KV_PREFIX = "__blz_kv/";
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
      logger = blzlogger.createChild("Metro");
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
      serialized = JSON.parse(kvStorage.getItem(BLAZECORD_METRO_CACHE_KEY));
      if (serialized.v.cache !== CACHE_VERSION || serialized.v.bundle !== NativeClientInfoModule.getConstants().Build) {
        throw "Cache version mismatch";
      }
    } catch (error) {
      logger.info("Metro cache invalidated/not exist, creating a new one");
      serialized = {
        v: {
          cache: CACHE_VERSION,
          bundle: NativeClientInfoModule.getConstants().Build
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
        kvStorage.setItem(BLAZECORD_METRO_CACHE_KEY, JSON.stringify({
          v: {
            cache: CACHE_VERSION,
            bundle: NativeClientInfoModule.getConstants().Build
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
        kvStorage.removeItem(BLAZECORD_METRO_CACHE_KEY);
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
  var CACHE_VERSION, BLAZECORD_METRO_CACHE_KEY, MetroCache;
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
      BLAZECORD_METRO_CACHE_KEY = "__blazecord_metro_cache_key__";
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
      originalFnSym = Symbol.for("blazecord.lazy.originalFn");
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

  // shims/emptyModule.ts
  var init_emptyModule = __esm({
    "shims/emptyModule.ts"() {
      "use strict";
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
      if (_patcherDelaySymbol in funcParent && typeof funcParent[_patcherDelaySymbol] === "function") {
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
      _patcherDelaySymbol = Symbol.for("blazecord.patcher.delaysymbol");
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
        ], [
          {
            key: "getContext",
            value: /* @__PURE__ */ __name(function getContext(object) {
              return LazyModuleContext2.ProxyMap.get(object) ?? object[LazyModuleContext2.ProxySymbol];
            }, "getContext")
          }
        ]);
        return LazyModuleContext2;
      }();
      _define_property(LazyModuleContext, "ProxySymbol", Symbol.for("blazecord.metro.lazyContext"));
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
  var Discord_exports = {};
  __export(Discord_exports, {
    BottomSheet: () => BottomSheet_default,
    Button: () => Button_default,
    Card: () => Card_default,
    IconButton: () => IconButton_default,
    RowButton: () => RowButton_default,
    Slider: () => Slider_default,
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
  var init_Discord = __esm({
    "src/components/Discord/index.tsx"() {
      "use strict";
      init_Button();
      init_IconButton();
      init_Card();
      init_BottomSheet();
      init_Stack();
      init_Slider();
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

  // shims/depsModule.ts
  var depsModule_exports = {};
  __export(depsModule_exports, {
    default: () => depsModule_default
  });
  var React, ReactNative, Reanimated, GestureHandler, FlashList, depsModule_default;
  var init_depsModule = __esm({
    "shims/depsModule.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_lazy();
      React = lookup(byProps([
        "createElement"
      ])).asLazy((r4) => React = r4);
      ReactNative = lookup(byProps([
        "AppRegistry"
      ])).asLazy((r4) => ReactNative = r4);
      Reanimated = lookup(byProps([
        "useSharedValue",
        "useAnimatedStyle",
        "FadeInUp"
      ])).asLazy((r4) => Reanimated = r4);
      GestureHandler = lookup(byProps([
        "gestureHandlerRootHOC"
      ])).asLazy((r4) => GestureHandler = r4);
      FlashList = lookup(byProps([
        "FlashList"
      ])).asLazy((r4) => FlashList = r4);
      depsModule_default = {
        "react": createLazyImportProxy(() => React),
        "react-native": createLazyImportProxy(() => ReactNative),
        "react-native-reanimated": createLazyImportProxy(() => Reanimated),
        "react-native-gesture-handler": createLazyImportProxy(() => GestureHandler),
        "@shopify/flash-list": createLazyImportProxy(() => FlashList)
      };
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react"];
    }
  });

  // node_modules/zustand/esm/react.mjs
  function useStore(api, selector = identity) {
    var slice = import_react.default.useSyncExternalStore(api.subscribe, () => selector(api.getState()), () => selector(api.getInitialState()));
    import_react.default.useDebugValue(slice);
    return slice;
  }
  var import_react, identity, createImpl, create;
  var init_react = __esm({
    "node_modules/zustand/esm/react.mjs"() {
      import_react = __toESM(require_react(), 1);
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

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native"];
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
    (0, import_react2.useEffect)(() => {
      if (dismissable === false) {
        var backHandler = import_react_native.BackHandler.addEventListener("hardwareBackPress", () => true);
        return () => backHandler.remove();
      }
    }, [
      dismissable
    ]);
    return dismissable === false ? /* @__PURE__ */ jsx(import_react_native.Pressable, {
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
        actions: props.actions?.map((a, i2) => /* @__PURE__ */ (0, import_react2.isValidElement)(a) ? a : /* @__PURE__ */ jsx(AlertActionButton, {
          ...a
        }, i2))
      });
    } else if ("Component" in props) {
      content = /* @__PURE__ */ jsx(props.Component, {});
    } else {
      throw new Error("Invalid alert props");
    }
    logger2.info(`Showing alert: ${props.id}`);
    AlertStore.openAlert(props.id, /* @__PURE__ */ jsx(AlertModalWrapper, {
      dismissable: props.dismissable,
      children: content
    }), props.onDismiss);
    return props.id;
  }
  function dismissAlert(id) {
    AlertStore.dismissAlert(id);
  }
  var import_react2, import_react_native, logger2, AlertStore;
  var init_alerts = __esm({
    "src/api/alerts.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react2 = __toESM(require_react(), 1);
      init_logger();
      init_wrappers();
      import_react_native = __toESM(require_react_native(), 1);
      init_AlertModal();
      logger2 = blzlogger.createChild("Alerts");
      AlertStore = lookupByProps("openAlert", "useAlertStore").asLazy();
      __name(AlertModalWrapper, "AlertModalWrapper");
      __name(showAlert, "showAlert");
      __name(dismissAlert, "dismissAlert");
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
  var i18n;
  var init_util_instance = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs"() {
      init_util_object();
      i18n = /* @__PURE__ */ __name((translations, formatters) => {
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
    i18n: () => i18n2,
    i18nObject: () => i18nObject2,
    i18nString: () => i18nString2,
    isLocale: () => isLocale,
    loadedFormatters: () => loadedFormatters,
    loadedLocales: () => loadedLocales,
    locales: () => locales
  });
  var baseLocale, locales, isLocale, loadedLocales, loadedFormatters, extendDictionary2, i18nString2, i18nObject2, i18n2, detectLocale;
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
      i18n2 = /* @__PURE__ */ __name(() => i18n(loadedLocales, loadedFormatters), "i18n");
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
          uh_oh: "Fuck Blaze~",
          retry_render: "Retry",
          reload: "Reload BlazeCord",
          safe_mode: "Safe-Mode",
          stack_trace: "Stack-Trace",
          screen: {
            copy: "Copy",
            show_more: "Show more",
            show_less: "Show less",
            component_stack: "Component Stack",
            call_stack: "Call Stack",
            description: "Something fucked up rendering some shit. Could've been caused by Discord internally, or by Blaze being a fucking skid-tard."
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
            wallpapers: "Wallpapers",
            developer: "Developer",
            updater: "Updater"
          },
          general: {
            info: "Info",
            logs: "Logs",
            platform: "Platform",
            quick_actions: "Quick Actions",
            reload: "Reload BlazeCord",
            links: "Links",
            github: "GitHub",
            discord: "Discord",
            paypal: "PayPal",
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
                description: "Stops all plugins not required to run. Useful when something breaks, because it will eventually lol. *Restart required*",
                alert: {
                  title: "{action|{disable: Disable, enable: Enable}} Safe Mode?",
                  description: "Do you want to {action:string} safe mode? This will {action|{enable: stop all non-essential plugins from running, disable: allow all plugins to run normally}}. Restart the app to take effect.",
                  apply_and_restart: "Apply & Restart",
                  apply_without_restart: "Apply & Continue"
                }
              }
            }
          },
          plugins: {
            description: "Description",
            safe_mode_callout: "Safe Mode Enabled",
            safe_mode_callout_desc: "Only essential plugins will be loaded.",
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
                label: "BlazeCord Loader Overrides.",
                sublabel: "Override where BlazeCord's bundle.js is loaded from. (Advanced)",
                custom_endpoint: "Custom Endpoint:",
                bundle_path: "Custom Path:",
                bundle_path_desc: "Override the path to BlazeCord's bundle.js file.",
                force_update: "Force Update",
                force_update_desc: "Load the latest bundle.js every app start. (Advanced)"
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
                invalidate_metro_cache: "Wipe Metro Cache"
              }
            }
          },
          updater: {
            info: "Info",
            repo: "Repo",
            settings: "Settings",
            autoUpdate: "Auto-Update",
            autoUpdateDescription: "Automatically update BlazeCord whenever a new version becomes available.",
            notifyNewUpdates: "Prompt-Update",
            notifyNewUpdatesDescription: "Show a notification when a new version of BlazeCord is available.",
            checkForUpdates: "Check for Updates"
          }
        },
        commands: {
          debug: {
            info: "Send debug information",
            ephemeral: "Send ephemerally"
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

  // src/metro/common/libraries/Commands.ts
  var Commands_exports = {};
  __export(Commands_exports, {
    commands: () => commands,
    messageUtil: () => messageUtil
  });
  var commands, messageUtil;
  var init_Commands = __esm({
    "src/metro/common/libraries/Commands.ts"() {
      "use strict";
      init_wrappers();
      commands = lookupByProps("getBuiltInCommands").asLazy((m2) => commands = m2);
      messageUtil = lookupByProps("sendBotMessage").asLazy((m2) => messageUtil = m2);
    }
  });

  // src/metro/common/libraries/Discord.ts
  var Discord_exports2 = {};
  __export(Discord_exports2, {
    channels: () => channels,
    constants: () => constants,
    i18n: () => i18n3,
    invites: () => invites,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var constants, i18n3, tokens, useToken, channels, invites;
  var init_Discord2 = __esm({
    "src/metro/common/libraries/Discord.ts"() {
      "use strict";
      init_lazy();
      init_wrappers();
      constants = lookupByProps("Fonts", "Permissions").asLazy((m2) => constants = m2);
      i18n3 = lookupByProps("Messages").asLazy((m2) => i18n3 = m2);
      tokens = lookupByProps("unsafe_rawColors", "colors").asLazy((m2) => tokens = m2);
      ({ useToken } = lazyDestructure(() => lookupByProps("useToken").asLazy((m2) => ({ useToken } = m2))));
      channels = lookupByProps("getVoiceChannelId").asLazy((m2) => channels = m2);
      invites = lookupByProps("acceptInviteAndTransitionToInviteChannel").asLazy((m2) => invites = m2);
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
    React: () => React3,
    ReactNative: () => ReactNative2,
    Reanimated: () => Reanimated2,
    channels: () => channels,
    chroma: () => chroma,
    commands: () => commands,
    constants: () => constants,
    i18n: () => i18n3,
    invites: () => invites,
    messageUtil: () => messageUtil,
    semver: () => semver,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var semver, chroma, Reanimated2, NavigationNative, React3, ReactNative2, AssetsRegistry;
  var init_libraries = __esm({
    "src/metro/common/libraries/index.ts"() {
      "use strict";
      init_wrappers();
      init_Commands();
      init_Discord2();
      init_Flux();
      semver = lookupByProps("parse", "clean").asLazy((m2) => semver = m2);
      chroma = lookupByProps("brewer").asLazy((m2) => chroma = m2);
      Reanimated2 = lookupByProps("useAnimatedStyle", "withSpring").asLazy((m2) => Reanimated2 = m2);
      NavigationNative = lookupByProps("NavigationContainer").asLazy((m2) => NavigationNative = m2);
      React3 = lookupByProps("createElement").asLazy((m2) => React3 = m2);
      ReactNative2 = lookupByProps("AppRegistry").asLazy((m2) => ReactNative2 = m2);
      AssetsRegistry = lookupByProps("getAssetByID").asLazy((m2) => AssetsRegistry = m2);
    }
  });

  // src/components/Blaze/Codeblock.tsx
  var Codeblock_exports = {};
  __export(Codeblock_exports, {
    default: () => Codeblock
  });
  function Codeblock({ selectable, style, children }) {
    if (!selectable) return /* @__PURE__ */ jsx(TextBasedCodeblock, {
      style,
      children
    });
    return import_react_native2.Platform.select({
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
  var import_react_native2, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/components/Blaze/Codeblock.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native2 = __toESM(require_react_native(), 1);
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
      InputBasedCodeblock = /* @__PURE__ */ __name(({ style, children }) => /* @__PURE__ */ jsx(import_react_native2.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeblock,
          style && style
        ],
        value: children
      }), "InputBasedCodeblock");
      TextBasedCodeblock = /* @__PURE__ */ __name(({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native2.Text, {
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

  // src/components/Blaze/ErrorCard.tsx
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
    if (/* @__PURE__ */ (0, import_react3.isValidElement)(header) || header === null) {
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
          /* @__PURE__ */ jsx(import_react_native3.ScrollView, {
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
  var import_react3, import_react_native3, INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/components/Blaze/ErrorCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      import_react3 = __toESM(require_react(), 1);
      init_Button();
      init_Discord();
      init_TwinButtons();
      init_Codeblock();
      init_sheets();
      import_react_native3 = __toESM(require_react_native(), 1);
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
      __name(formatErrorContent, "formatErrorContent");
      __name(ErrorStack, "ErrorStack");
      __name(openStackTraceSheet, "openStackTraceSheet");
      __name(renderHeader, "renderHeader");
      __name(ErrorCard, "ErrorCard");
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
        var setToastTimeout = /* @__PURE__ */ __name((toast2) => {
          if (toast2.duration && toast2.duration > 0) {
            var timeout = setTimeout(() => handleTimeout(toast2.id, toast2.onTimeout), toast2.duration);
            timeouts.set(toast2.id, timeout);
          }
        }, "setToastTimeout");
        return {
          toasts: [],
          getToast: /* @__PURE__ */ __name((id) => get().toasts.find((toast2) => toast2.id === id), "getToast"),
          hideToast: /* @__PURE__ */ __name((id) => set2((state2) => {
            clearToastTimeout(id);
            return {
              toasts: state2.toasts.filter((toast2) => toast2.id !== id)
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
                toasts: state2.toasts.map((toast2) => {
                  if (toast2.id === config.id) {
                    var updatedToast = {
                      ...toast2,
                      ...config
                    };
                    if ("duration" in config && config.duration > 0) {
                      clearToastTimeout(config.id);
                      setToastTimeout(updatedToast);
                    }
                    return updatedToast;
                  }
                  return toast2;
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
    var toast2 = {
      use: /* @__PURE__ */ __name((selector) => useToastStore((state2) => selector(state2.getToast(id) ?? toast2)), "use"),
      ...toastProps
    };
    var showToast2 = /* @__PURE__ */ __name(() => useToastStore.getState().updateToast({
      duration: 5e3,
      dismissible: true,
      ...useToastStore.getState().getToast(id) ?? toast2
    }), "showToast");
    showToast2();
    var controller = {
      show: /* @__PURE__ */ __name(() => {
        showToast2();
        return controller;
      }, "show"),
      hide: /* @__PURE__ */ __name(() => {
        useToastStore.getState().hideToast(id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((newConfig) => {
        useToastStore.getState().updateToast({
          ...toast2,
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
        logger3.error`Failed to check for updates: ${e3}`;
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
              logger3.error`Failed to fetch bundle: ${e3}`;
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
  var logger3, _updateMutex, useUpdaterStore;
  var init_useUpdaterStore = __esm({
    "src/stores/useUpdaterStore.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord();
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
      logger3 = blzlogger.createChild("UpdaterStore");
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
          name: "blaze",
          id: 300547560840495104n
        }
      };
      Links = {
        GITHUB: "github.com/BlazeCordMod",
        DISCORD: "discord.gg/CxtkRvT6MU",
        PAYPAL: "paypal.me/xBlazeK1ng420x"
      };
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

  // src/metro/common/icons.ts
  var icons_exports = {};
  __export(icons_exports, {
    ActivitiesIcon: () => ActivitiesIcon,
    AnalyticsIcon: () => AnalyticsIcon,
    ArrowSmallLeftIcon: () => ArrowSmallLeftIcon,
    BeakerIcon: () => BeakerIcon,
    BicycleIcon: () => BicycleIcon,
    BookmarkIcon: () => BookmarkIcon,
    BoostTier1Icon: () => BoostTier1Icon,
    BoostTier2Icon: () => BoostTier2Icon,
    BoostTier3Icon: () => BoostTier3Icon,
    BugIcon: () => BugIcon,
    CircleCheckIcon: () => CircleCheckIcon,
    CircleInformationIcon: () => CircleInformationIcon,
    CircleMinusIcon: () => CircleMinusIcon,
    CirclePlusIcon: () => CirclePlusIcon,
    CircleQuestionIcon: () => CircleQuestionIcon,
    CircleWarningIcon: () => CircleWarningIcon,
    CircleXIcon: () => CircleXIcon,
    DownloadIcon: () => DownloadIcon,
    EducationIcon: () => EducationIcon,
    EyeIcon: () => EyeIcon,
    FireIcon: () => FireIcon,
    FlagIcon: () => FlagIcon,
    FlashIcon: () => FlashIcon,
    FoodIcon: () => FoodIcon,
    GifIcon: () => GifIcon,
    HammerIcon: () => HammerIcon,
    HashmarkIcon: () => HashmarkIcon,
    HeartIcon: () => HeartIcon,
    HomeIcon: () => HomeIcon,
    HourglassIcon: () => HourglassIcon,
    ImageIcon: () => ImageIcon,
    ImagePlusIcon: () => ImagePlusIcon,
    ImagesIcon: () => ImagesIcon,
    LettersIcon: () => LettersIcon,
    LinkIcon: () => LinkIcon,
    MagicWandIcon: () => MagicWandIcon,
    MagnifyingGlassIcon: () => MagnifyingGlassIcon,
    MedalIcon: () => MedalIcon,
    NatureIcon: () => NatureIcon,
    NewUserIcon: () => NewUserIcon,
    ObjectIcon: () => ObjectIcon,
    PaintPaletteIcon: () => PaintPaletteIcon,
    PaintbrushThinIcon: () => PaintbrushThinIcon,
    PaperIcon: () => PaperIcon,
    PaperPlusIcon: () => PaperPlusIcon,
    PencilIcon: () => PencilIcon,
    PencilSparkleIcon: () => PencilSparkleIcon,
    PuzzlePieceIcon: () => PuzzlePieceIcon,
    RetryIcon: () => RetryIcon,
    SignPostIcon: () => SignPostIcon,
    SparkleIcon: () => SparkleIcon,
    StaffBadgeIcon: () => StaffBadgeIcon,
    StampIcon: () => StampIcon,
    StarIcon: () => StarIcon,
    StarShootingIcon: () => StarShootingIcon,
    StickerIcon: () => StickerIcon,
    SuperReactionIcon: () => SuperReactionIcon,
    ThemeDarkIcon: () => ThemeDarkIcon,
    ThemeLightIcon: () => ThemeLightIcon,
    ThemeMidnightIcon: () => ThemeMidnightIcon,
    TimerIcon: () => TimerIcon,
    TopicsIcon: () => TopicsIcon,
    TreehouseIcon: () => TreehouseIcon,
    WarningIcon: () => WarningIcon,
    WrenchIcon: () => WrenchIcon
  });
  function getIcon(name) {
    return lazyValue(() => lookupByProps(name).load()[name]);
  }
  var ActivitiesIcon, ArrowSmallLeftIcon, AnalyticsIcon, BeakerIcon, BicycleIcon, BugIcon, BookmarkIcon, BoostTier1Icon, BoostTier2Icon, BoostTier3Icon, CircleCheckIcon, CircleInformationIcon, CircleMinusIcon, CirclePlusIcon, CircleQuestionIcon, CircleWarningIcon, CircleXIcon, DownloadIcon, EducationIcon, EyeIcon, FireIcon, FlagIcon, FlashIcon, FoodIcon, GifIcon, ImageIcon, ImagesIcon, ImagePlusIcon, HammerIcon, HashmarkIcon, HeartIcon, HomeIcon, HourglassIcon, LettersIcon, LinkIcon, MagicWandIcon, MagnifyingGlassIcon, MedalIcon, NatureIcon, NewUserIcon, ObjectIcon, PaintbrushThinIcon, PaintPaletteIcon, PaperIcon, PaperPlusIcon, PencilIcon, PencilSparkleIcon, PuzzlePieceIcon, RetryIcon, SignPostIcon, SparkleIcon, StampIcon, StaffBadgeIcon, StarIcon, StarShootingIcon, StickerIcon, SuperReactionIcon, ThemeDarkIcon, ThemeLightIcon, ThemeMidnightIcon, TimerIcon, TreehouseIcon, TopicsIcon, WarningIcon, WrenchIcon;
  var init_icons = __esm({
    "src/metro/common/icons.ts"() {
      "use strict";
      init_wrappers();
      init_lazy();
      __name(getIcon, "getIcon");
      ActivitiesIcon = getIcon("ActivitiesIcon");
      ArrowSmallLeftIcon = getIcon("ArrowSmallLeftIcon");
      AnalyticsIcon = getIcon("AnalyticsIcon");
      BeakerIcon = getIcon("BeakerIcon");
      BicycleIcon = getIcon("BicycleIcon");
      BugIcon = getIcon("BugIcon");
      BookmarkIcon = getIcon("BookmarkIcon");
      BoostTier1Icon = getIcon("BoostTier1Icon");
      BoostTier2Icon = getIcon("BoostTier2Icon");
      BoostTier3Icon = getIcon("BoostTier3Icon");
      CircleCheckIcon = getIcon("CircleCheckIcon");
      CircleInformationIcon = getIcon("CircleInformationIcon");
      CircleMinusIcon = getIcon("CircleMinusIcon");
      CirclePlusIcon = getIcon("CirclePlusIcon");
      CircleQuestionIcon = getIcon("CircleQuestionIcon");
      CircleWarningIcon = getIcon("CircleWarningIcon");
      CircleXIcon = getIcon("CircleXIcon");
      DownloadIcon = getIcon("DownloadIcon");
      EducationIcon = getIcon("EducationIcon");
      EyeIcon = getIcon("EyeIcon");
      FireIcon = getIcon("FireIcon");
      FlagIcon = getIcon("FlagIcon");
      FlashIcon = getIcon("FlashIcon");
      FoodIcon = getIcon("FoodIcon");
      GifIcon = getIcon("GifIcon");
      ImageIcon = getIcon("ImageIcon");
      ImagesIcon = getIcon("ImagesIcon");
      ImagePlusIcon = getIcon("ImagePlusIcon");
      HammerIcon = getIcon("HammerIcon");
      HashmarkIcon = getIcon("HashmarkIcon");
      HeartIcon = getIcon("HeartIcon");
      HomeIcon = getIcon("HomeIcon");
      HourglassIcon = getIcon("HourglassIcon");
      LettersIcon = getIcon("LettersIcon");
      LinkIcon = getIcon("LinkIcon");
      MagicWandIcon = getIcon("MagicWandIcon");
      MagnifyingGlassIcon = getIcon("MagnifyingGlassIcon");
      MedalIcon = getIcon("MedalIcon");
      NatureIcon = getIcon("NatureIcon");
      NewUserIcon = getIcon("NewUserIcon");
      ObjectIcon = getIcon("ObjectIcon");
      PaintbrushThinIcon = getIcon("PaintbrushThinIcon");
      PaintPaletteIcon = getIcon("PaintPaletteIcon");
      PaperIcon = getIcon("PaperIcon");
      PaperPlusIcon = getIcon("PaperPlusIcon");
      PencilIcon = getIcon("PencilIcon");
      PencilSparkleIcon = getIcon("PencilSparkleIcon");
      PuzzlePieceIcon = getIcon("PuzzlePieceIcon");
      RetryIcon = getIcon("RetryIcon");
      SignPostIcon = getIcon("SignPostIcon");
      SparkleIcon = getIcon("SparkleIcon");
      StampIcon = getIcon("StampIcon");
      StaffBadgeIcon = getIcon("StaffBadgeIcon");
      StarIcon = getIcon("StarIcon");
      StarShootingIcon = getIcon("StarShootingIcon");
      StickerIcon = getIcon("StickerIcon");
      SuperReactionIcon = getIcon("SuperReactionIcon");
      ThemeDarkIcon = getIcon("ThemeDarkIcon");
      ThemeLightIcon = getIcon("ThemeLightIcon");
      ThemeMidnightIcon = getIcon("ThemeMidnightIcon");
      TimerIcon = getIcon("TimerIcon");
      TreehouseIcon = getIcon("TreehouseIcon");
      TopicsIcon = getIcon("TopicsIcon");
      WarningIcon = getIcon("WarningIcon");
      WrenchIcon = getIcon("WrenchIcon");
    }
  });

  // src/components/Blaze/Search.tsx
  var Search_exports = {};
  __export(Search_exports, {
    default: () => Search_default,
    useSearchQuery: () => useSearchQuery
  });
  function useSearchQuery() {
    var [q, setQ] = (0, import_react4.useState)("");
    var ref = {
      query: q,
      __set: setQ
    };
    return ref;
  }
  var import_react4, import_react_native4, Search_default;
  var init_Search = __esm({
    "src/components/Blaze/Search.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react4 = __toESM(require_react(), 1);
      import_react_native4 = __toESM(require_react_native(), 1);
      init_i18n();
      init_TextInput();
      init_icons();
      __name(useSearchQuery, "useSearchQuery");
      Search_default = /* @__PURE__ */ __name(({ onChangeText, placeholder, style, isRound, queryRef }) => {
        var [query, setQuery] = (0, import_react4.useState)(queryRef?.query ?? "");
        var onChange = /* @__PURE__ */ __name((value) => {
          setQuery(value);
          onChangeText?.(value);
          queryRef?.__set(value);
        }, "onChange");
        return /* @__PURE__ */ jsx(import_react_native4.View, {
          style,
          children: /* @__PURE__ */ jsx(TextInput_default, {
            grow: true,
            isClearable: true,
            leadingIcon: MagnifyingGlassIcon,
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

  // src/components/Blaze/FilterAndSortBar.tsx
  var FilterAndSortBar_exports = {};
  __export(FilterAndSortBar_exports, {
    FilterAndSortBar: () => FilterAndSortBar
  });
  function FilterAndSortBar({ queryRef, sortOptions, filterOptions, onSortChange, onFilterChange, currentFilterOptions, currentSortOption, style }) {
    return /* @__PURE__ */ jsxs(import_react_native5.View, {
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
  var import_react_native5;
  var init_FilterAndSortBar = __esm({
    "src/components/Blaze/FilterAndSortBar.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord();
      init_ContextMenu();
      import_react_native5 = __toESM(require_react_native(), 1);
      init_Search();
      __name(FilterAndSortBar, "FilterAndSortBar");
    }
  });

  // src/components/Blaze/Callout.tsx
  var Callout_exports = {};
  __export(Callout_exports, {
    default: () => Callout
  });
  function Callout({ title, children, variant = "info" }) {
    var config = CALLOUT_VARIANT_CONFIG[variant];
    var backgroundColor = useToken(tokens.colors[config.background]);
    var borderColor = useToken(tokens.colors[config.foreground]);
    var IconComponent = config.Icon;
    return /* @__PURE__ */ jsxs(import_react_native6.View, {
      style: {
        padding: 16,
        backgroundColor,
        borderWidth: 1,
        borderColor,
        borderRadius: 12,
        rowGap: 8
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native6.View, {
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
  var import_react_native6, CALLOUT_VARIANT_CONFIG;
  var init_Callout = __esm({
    "src/components/Blaze/Callout.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_libraries();
      import_react_native6 = __toESM(require_react_native(), 1);
      init_Discord();
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

  // src/components/Blaze/Tag.tsx
  var Tag_exports = {};
  __export(Tag_exports, {
    default: () => Tag
  });
  function Tag({ text }) {
    var color = useToken(tokens.colors.BG_BRAND);
    return /* @__PURE__ */ jsx(import_react_native7.View, {
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
  var import_react_native7;
  var init_Tag = __esm({
    "src/components/Blaze/Tag.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native7 = __toESM(require_react_native(), 1);
      init_Discord();
      init_libraries();
      __name(Tag, "Tag");
    }
  });

  // src/components/Blaze/InlineCheckbox.tsx
  var InlineCheckbox_exports = {};
  __export(InlineCheckbox_exports, {
    InlineCheckbox: () => InlineCheckbox
  });
  function InlineCheckbox({ label, checked, onPress }) {
    return /* @__PURE__ */ jsxs(import_react_native8.Pressable, {
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
  var import_react_native8;
  var init_InlineCheckbox = __esm({
    "src/components/Blaze/InlineCheckbox.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_FormCheckbox();
      import_react_native8 = __toESM(require_react_native(), 1);
      __name(InlineCheckbox, "InlineCheckbox");
    }
  });

  // src/components/Blaze/Settings/PageWrapper.tsx
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
      node = /* @__PURE__ */ jsx(import_react_native9.ScrollView, {
        contentContainerStyle: containerStyle,
        children: node
      });
    } else {
      node = /* @__PURE__ */ jsx(import_react_native9.View, {
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
  var import_react_native9;
  var init_PageWrapper = __esm({
    "src/components/Blaze/Settings/PageWrapper.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_react_native_safe_area_context();
      import_react_native9 = __toESM(require_react_native(), 1);
      __name(PageWrapper, "PageWrapper");
    }
  });

  // src/components/Blaze/Settings/pages/InfoSection.tsx
  var InfoSection_exports = {};
  __export(InfoSection_exports, {
    InfoSection: () => InfoSection
  });
  function InfoSection({ label, children }) {
    return /* @__PURE__ */ jsxs(import_react_native10.View, {
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
  var import_react_native10;
  var init_InfoSection = __esm({
    "src/components/Blaze/Settings/pages/InfoSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native10 = __toESM(require_react_native(), 1);
      init_Discord();
      __name(InfoSection, "InfoSection");
    }
  });

  // globals:@shopify/flash-list
  var require_flash_list = __commonJS({
    "globals:@shopify/flash-list"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["@shopify/flash-list"];
    }
  });

  // src/components/Blaze/Settings/pages/ResponsiveMasonryFlashList.tsx
  var ResponsiveMasonryFlashList_exports = {};
  __export(ResponsiveMasonryFlashList_exports, {
    ResponsiveMasonryFlashList: () => ResponsiveMasonryFlashList
  });
  function ResponsiveMasonryFlashList(props) {
    var minWidth = props.itemMinWidth;
    var dimensions = (0, import_react_native11.useWindowDimensions)();
    var listProps = (0, import_react5.useMemo)(() => omit(props, [
      "data",
      "renderItem"
    ]), [
      props
    ]);
    var numColumns = (0, import_react5.useMemo)(() => Math.min(props.data.length, Math.floor((dimensions.width - 24) / minWidth)), [
      dimensions.width,
      props.data,
      minWidth
    ]);
    var renderItem = (0, import_react5.useCallback)((info) => {
      var { columnIndex } = info;
      var Item = props.renderItem;
      return /* @__PURE__ */ jsx(import_react_native11.View, {
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
  var import_react5, import_react_native11, import_flash_list;
  var init_ResponsiveMasonryFlashList = __esm({
    "src/components/Blaze/Settings/pages/ResponsiveMasonryFlashList.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react5 = __toESM(require_react(), 1);
      import_react_native11 = __toESM(require_react_native(), 1);
      init_dist();
      import_flash_list = __toESM(require_flash_list(), 1);
      __name(ResponsiveMasonryFlashList, "ResponsiveMasonryFlashList");
    }
  });

  // src/plugins/_core/wallpapers/stores/wallpaperStore.ts
  var useWallpaperStore;
  var init_wallpaperStore = __esm({
    "src/plugins/_core/wallpapers/stores/wallpaperStore.ts"() {
      "use strict";
      init_esm();
      init_middleware();
      useWallpaperStore = create(persist((set2, get) => ({
        categories: [
          {
            name: "Particles",
            wallpapers: [
              {
                name: "Pink",
                image: "https://example.com/pink.jpeg",
                isBuiltin: true
              }
            ]
          }
        ],
        appliedWallpaper: void 0,
        blurAmount: 0,
        opacity: 1,
        followTheme: false,
        addWallpaper: /* @__PURE__ */ __name((categoryName, wallpaper) => set2((state2) => {
          var existingCategory = state2.categories.find((cat) => cat.name === categoryName);
          if (existingCategory) {
            return {
              categories: state2.categories.map((cat) => cat.name === categoryName ? {
                ...cat,
                wallpapers: [
                  ...cat.wallpapers,
                  wallpaper
                ]
              } : cat)
            };
          }
          return {
            categories: [
              ...state2.categories,
              {
                name: categoryName,
                wallpapers: [
                  wallpaper
                ]
              }
            ]
          };
        }), "addWallpaper"),
        deleteWallpaper: /* @__PURE__ */ __name((categoryName, name) => set2((state2) => ({
          categories: state2.categories.map((cat) => cat.name === categoryName ? {
            ...cat,
            wallpapers: cat.wallpapers.filter((w) => w.name !== name || w.isBuiltin)
          } : cat)
        })), "deleteWallpaper"),
        applyWallpaper: /* @__PURE__ */ __name((wallpaper) => set2({
          appliedWallpaper: wallpaper
        }), "applyWallpaper"),
        clearWallpaper: /* @__PURE__ */ __name(() => set2({
          appliedWallpaper: void 0
        }), "clearWallpaper"),
        setFollowTheme: /* @__PURE__ */ __name((value) => set2({
          followTheme: value
        }), "setFollowTheme"),
        setBlurAmount: /* @__PURE__ */ __name((blur) => set2({
          blurAmount: blur
        }), "setBlurAmount"),
        setOpacity: /* @__PURE__ */ __name((opacity) => set2({
          opacity
        }), "setOpacity")
      }), {
        name: "wallpaper-store"
      }));
    }
  });

  // src/components/Blaze/Settings/pages/Wallpapers/WallpaperPreviewSheet.tsx
  var WallpaperPreviewSheet_exports = {};
  __export(WallpaperPreviewSheet_exports, {
    default: () => WallpaperPreviewSheet
  });
  function WallpaperPreviewSheet({ wallpaper }) {
    var { appliedWallpaper, blurAmount, opacity, applyWallpaper, clearWallpaper, deleteWallpaper, setBlurAmount, setOpacity, categories } = useWallpaperStore();
    var isActive = appliedWallpaper?.name === wallpaper.name;
    var closeSheet = (0, import_react6.useCallback)(() => {
      hideSheet("WallpaperPreviewSheet");
      return true;
    }, []);
    (0, import_react6.useEffect)(() => {
      var backHandler = import_react_native12.BackHandler.addEventListener("hardwareBackPress", closeSheet);
      return () => backHandler.remove();
    }, [
      closeSheet
    ]);
    var handleApply = /* @__PURE__ */ __name(() => {
      applyWallpaper(wallpaper);
      hideSheet("WallpaperPreviewSheet");
    }, "handleApply");
    var handleClear = /* @__PURE__ */ __name(() => {
      clearWallpaper();
      hideSheet("WallpaperPreviewSheet");
    }, "handleClear");
    var handleDelete = /* @__PURE__ */ __name(() => {
      var category = categories.find((cat) => cat.wallpapers.some((w) => w.name === wallpaper.name));
      if (category) {
        deleteWallpaper(category.name, wallpaper.name);
        hideSheet("WallpaperPreviewSheet");
      }
    }, "handleDelete");
    return /* @__PURE__ */ jsxs(import_react_native12.View, {
      style: styles.container,
      children: [
        /* @__PURE__ */ jsx(import_react_native12.Image, {
          source: {
            uri: wallpaper.image
          },
          style: [
            styles.image,
            {
              opacity,
              width: screenWidth,
              height: screenHeight
            }
          ],
          blurRadius: blurAmount,
          resizeMode: "cover"
        }),
        /* @__PURE__ */ jsxs(import_react_native12.View, {
          style: styles.controls,
          children: [
            /* @__PURE__ */ jsxs(Text_default, {
              children: [
                "Opacity: ",
                opacity.toFixed(2)
              ]
            }),
            /* @__PURE__ */ jsx(Slider_default, {
              value: opacity,
              minimumValue: 0.1,
              maximumValue: 1,
              step: 0.01,
              onValueChange: setOpacity
            }),
            /* @__PURE__ */ jsxs(Text_default, {
              children: [
                "Blur: ",
                blurAmount.toFixed(0),
                "px"
              ]
            }),
            /* @__PURE__ */ jsx(Slider_default, {
              value: blurAmount,
              minimumValue: 0,
              maximumValue: 25,
              step: 1,
              onValueChange: setBlurAmount
            }),
            /* @__PURE__ */ jsxs(import_react_native12.View, {
              style: styles.buttonsRow,
              children: [
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Apply",
                  onPress: handleApply
                }),
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Clear",
                  onPress: handleClear,
                  disabled: !isActive
                }),
                !wallpaper.isBuiltin && /* @__PURE__ */ jsx(Button_default, {
                  text: "Delete",
                  color: "danger",
                  onPress: handleDelete
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var import_react6, import_react_native12, screenWidth, screenHeight, styles;
  var init_WallpaperPreviewSheet = __esm({
    "src/components/Blaze/Settings/pages/Wallpapers/WallpaperPreviewSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react6 = __toESM(require_react(), 1);
      import_react_native12 = __toESM(require_react_native(), 1);
      init_Discord();
      init_sheets();
      init_wallpaperStore();
      ({ width: screenWidth, height: screenHeight } = import_react_native12.Dimensions.get("window"));
      __name(WallpaperPreviewSheet, "WallpaperPreviewSheet");
      styles = import_react_native12.StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#000"
        },
        image: {
          position: "absolute",
          top: 0,
          left: 0
        },
        controls: {
          position: "absolute",
          bottom: 32,
          left: 16,
          right: 16,
          gap: 12
        },
        buttonsRow: {
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 16
        }
      });
    }
  });

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module3) {
      "use strict";
      var invariant2 = /* @__PURE__ */ __name(function invariant3(condition, format2, a, b, c2, d, e3, f) {
        if (true) {
          if (format2 === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format2 === void 0) {
            error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          } else {
            var args = [
              a,
              b,
              c2,
              d,
              e3,
              f
            ];
            var argIndex = 0;
            error = new Error(format2.replace(/%s/g, function() {
              return args[argIndex++];
            }));
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      }, "invariant");
      module3.exports = invariant2;
    }
  });

  // node_modules/react-native-document-picker/lib/module/fileTypes.js
  var mimeTypes, utis, extensions, perPlatformTypes;
  var init_fileTypes = __esm({
    "node_modules/react-native-document-picker/lib/module/fileTypes.js"() {
      mimeTypes = Object.freeze({
        allFiles: "*/*",
        audio: "audio/*",
        csv: "text/csv",
        doc: "application/msword",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        images: "image/*",
        json: "application/json",
        pdf: "application/pdf",
        plainText: "text/plain",
        ppt: "application/vnd.ms-powerpoint",
        pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        video: "video/*",
        xls: "application/vnd.ms-excel",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        zip: "application/zip"
      });
      utis = Object.freeze({
        allFiles: "public.item",
        audio: "public.audio",
        csv: "public.comma-separated-values-text",
        doc: "com.microsoft.word.doc",
        docx: "org.openxmlformats.wordprocessingml.document",
        images: "public.image",
        json: "public.json",
        pdf: "com.adobe.pdf",
        plainText: "public.plain-text",
        ppt: "com.microsoft.powerpoint.ppt",
        pptx: "org.openxmlformats.presentationml.presentation",
        video: "public.movie",
        xls: "com.microsoft.excel.xls",
        xlsx: "org.openxmlformats.spreadsheetml.sheet",
        zip: "public.zip-archive"
      });
      extensions = Object.freeze({
        allFiles: "*",
        audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma",
        csv: ".csv",
        doc: ".doc",
        docx: ".docx",
        images: ".jpeg .jpg .png",
        json: ".json",
        pdf: ".pdf",
        plainText: ".txt",
        ppt: ".ppt",
        pptx: ".pptx",
        video: ".mp4",
        xls: ".xls",
        xlsx: ".xlsx",
        zip: ".zip .gz"
      });
      perPlatformTypes = {
        android: mimeTypes,
        ios: utis,
        windows: extensions,
        // unsupported, but added to make TS happy
        macos: extensions,
        web: extensions
      };
    }
  });

  // node_modules/react-native-document-picker/lib/module/NativeDocumentPicker.js
  var import_react_native13, NativeDocumentPicker;
  var init_NativeDocumentPicker = __esm({
    "node_modules/react-native-document-picker/lib/module/NativeDocumentPicker.js"() {
      import_react_native13 = __toESM(require_react_native());
      NativeDocumentPicker = import_react_native13.TurboModuleRegistry.getEnforcing("RNDocumentPicker");
    }
  });

  // node_modules/react-native-document-picker/lib/module/index.js
  var module_exports2 = {};
  __export(module_exports2, {
    default: () => module_default,
    isCancel: () => isCancel,
    isInProgress: () => isInProgress,
    pick: () => pick2,
    pickDirectory: () => pickDirectory,
    pickSingle: () => pickSingle,
    releaseSecureAccess: () => releaseSecureAccess,
    types: () => types
  });
  function pickDirectory(params) {
    return _async_to_generator(function* () {
      if (import_react_native14.Platform.OS === "ios") {
        var result = yield pick2({
          ...params,
          mode: "open",
          allowMultiSelection: false,
          type: [
            "public.folder"
          ]
        });
        return {
          uri: result[0].uri
        };
      } else {
        return NativeDocumentPicker.pickDirectory();
      }
    })();
  }
  function pickSingle(opts) {
    var options = {
      ...opts,
      allowMultiSelection: false
    };
    return pick2(options).then((results) => results[0]);
  }
  function pick2(opts) {
    var options = {
      // must be false to maintain old (v5) behavior
      allowMultiSelection: false,
      type: [
        types.allFiles
      ],
      ...opts
    };
    var newOpts = {
      presentationStyle: "formSheet",
      transitionStyle: "coverVertical",
      ...options,
      type: Array.isArray(options.type) ? options.type : [
        options.type
      ]
    };
    return doPick(newOpts);
  }
  function doPick(options) {
    (0, import_invariant.default)(!("filetype" in options), "A `filetype` option was passed to DocumentPicker.pick, the correct option is `type`");
    (0, import_invariant.default)(!("types" in options), "A `types` option was passed to DocumentPicker.pick, the correct option is `type`");
    (0, import_invariant.default)(options.type.every((type) => typeof type === "string"), `Unexpected type option in ${options.type}, did you try using a DocumentPicker.types.* that does not exist?`);
    (0, import_invariant.default)(options.type.length > 0, "`type` option should not be an empty array, at least one type must be passed if the `type` option is not omitted");
    (0, import_invariant.default)(!options.type.includes("folder"), 'RN document picker: "folder" option was removed, use "pickDirectory()"');
    if ("mode" in options && ![
      "import",
      "open"
    ].includes(options.mode ?? "")) {
      throw new TypeError("Invalid mode option: " + options.mode);
    }
    if ("copyTo" in options && ![
      "cachesDirectory",
      "documentDirectory"
    ].includes(options.copyTo ?? "")) {
      throw new TypeError("Invalid copyTo option: " + options.copyTo);
    }
    return NativeDocumentPicker.pick(options);
  }
  function releaseSecureAccess(uris) {
    if (import_react_native14.Platform.OS !== "ios") {
      return Promise.resolve();
    }
    (0, import_invariant.default)(Array.isArray(uris) && uris.every((uri) => typeof uri === "string"), `"uris" should be an array of strings, was ${uris}`);
    return NativeDocumentPicker.releaseSecureAccess(uris);
  }
  function isCancel(err) {
    return isErrorWithCode(err, E_DOCUMENT_PICKER_CANCELED);
  }
  function isInProgress(err) {
    return isErrorWithCode(err, E_DOCUMENT_PICKER_IN_PROGRESS);
  }
  function isErrorWithCode(err, errorCode) {
    if (err && typeof err === "object" && "code" in err) {
      var nativeModuleErrorInstance = err;
      return (nativeModuleErrorInstance === null || nativeModuleErrorInstance === void 0 ? void 0 : nativeModuleErrorInstance.code) === errorCode;
    }
    return false;
  }
  var import_react_native14, import_invariant, types, E_DOCUMENT_PICKER_CANCELED, E_DOCUMENT_PICKER_IN_PROGRESS, module_default;
  var init_module2 = __esm({
    "node_modules/react-native-document-picker/lib/module/index.js"() {
      init_async_to_generator();
      import_react_native14 = __toESM(require_react_native());
      import_invariant = __toESM(require_browser());
      init_fileTypes();
      init_NativeDocumentPicker();
      types = perPlatformTypes[import_react_native14.Platform.OS];
      __name(pickDirectory, "pickDirectory");
      __name(pickSingle, "pickSingle");
      __name(pick2, "pick");
      __name(doPick, "doPick");
      __name(releaseSecureAccess, "releaseSecureAccess");
      E_DOCUMENT_PICKER_CANCELED = "DOCUMENT_PICKER_CANCELED";
      E_DOCUMENT_PICKER_IN_PROGRESS = "ASYNC_OP_IN_PROGRESS";
      __name(isCancel, "isCancel");
      __name(isInProgress, "isInProgress");
      __name(isErrorWithCode, "isErrorWithCode");
      module_default = {
        isCancel,
        isInProgress,
        releaseSecureAccess,
        pickDirectory,
        pick: pick2,
        pickSingle,
        types,
        perPlatformTypes
      };
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/spec/NativeDocumentPicker.js
  var import_react_native15, NativeDocumentPicker2;
  var init_NativeDocumentPicker2 = __esm({
    "node_modules/@react-native-documents/picker/lib/module/spec/NativeDocumentPicker.js"() {
      "use strict";
      import_react_native15 = __toESM(require_react_native(), 1);
      NativeDocumentPicker2 = import_react_native15.TurboModuleRegistry.getEnforcing("RNDocumentPicker");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/isKnownType.js
  function isKnownType(options) {
    var { kind, value } = options;
    var result = NativeDocumentPicker2.isKnownType(kind, value);
    return result;
  }
  var init_isKnownType = __esm({
    "node_modules/@react-native-documents/picker/lib/module/isKnownType.js"() {
      "use strict";
      init_NativeDocumentPicker2();
      __name(isKnownType, "isKnownType");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/keepLocalCopy.js
  function keepLocalCopy(options) {
    var response = NativeDocumentPicker2.keepLocalCopy(options);
    return response;
  }
  var init_keepLocalCopy = __esm({
    "node_modules/@react-native-documents/picker/lib/module/keepLocalCopy.js"() {
      "use strict";
      init_NativeDocumentPicker2();
      __name(keepLocalCopy, "keepLocalCopy");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/fileTypes.js
  var import_react_native16, mimeTypes2, utis2, perPlatformTypes2, types2;
  var init_fileTypes2 = __esm({
    "node_modules/@react-native-documents/picker/lib/module/fileTypes.js"() {
      "use strict";
      import_react_native16 = __toESM(require_react_native(), 1);
      mimeTypes2 = Object.freeze({
        allFiles: "*/*",
        audio: "audio/*",
        csv: [
          "text/csv",
          "text/comma-separated-values"
        ],
        doc: "application/msword",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        images: "image/*",
        pdf: "application/pdf",
        plainText: "text/plain",
        json: "application/json",
        ppt: "application/vnd.ms-powerpoint",
        pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        video: "video/*",
        xls: "application/vnd.ms-excel",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        zip: "application/zip"
      });
      utis2 = Object.freeze({
        allFiles: "public.item",
        audio: "public.audio",
        csv: "public.comma-separated-values-text",
        doc: "com.microsoft.word.doc",
        docx: "org.openxmlformats.wordprocessingml.document",
        images: "public.image",
        pdf: "com.adobe.pdf",
        plainText: "public.plain-text",
        json: "public.json",
        ppt: "com.microsoft.powerpoint.ppt",
        pptx: "org.openxmlformats.presentationml.presentation",
        video: "public.movie",
        xls: "com.microsoft.excel.xls",
        xlsx: "org.openxmlformats.spreadsheetml.sheet",
        zip: "public.zip-archive"
      });
      perPlatformTypes2 = {
        android: mimeTypes2,
        ios: utis2,
        // unsupported, but added to make TS happy
        macos: utis2,
        windows: mimeTypes2,
        web: mimeTypes2
      };
      types2 = perPlatformTypes2[import_react_native16.Platform.OS];
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/errors.js
  var OPERATION_CANCELED, IN_PROGRESS, UNABLE_TO_OPEN_FILE_TYPE, errorCodes, isErrorWithCode2;
  var init_errors = __esm({
    "node_modules/@react-native-documents/picker/lib/module/errors.js"() {
      "use strict";
      OPERATION_CANCELED = "OPERATION_CANCELED";
      IN_PROGRESS = "ASYNC_OP_IN_PROGRESS";
      UNABLE_TO_OPEN_FILE_TYPE = "UNABLE_TO_OPEN_FILE_TYPE";
      errorCodes = Object.freeze({
        OPERATION_CANCELED,
        IN_PROGRESS,
        UNABLE_TO_OPEN_FILE_TYPE
      });
      isErrorWithCode2 = /* @__PURE__ */ __name((error) => {
        var isNewArchErrorIOS = typeof error === "object" && error != null;
        return (error instanceof Error || isNewArchErrorIOS) && "code" in error;
      }, "isErrorWithCode");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/pickDirectory.js
  function pickDirectory2(options) {
    return _async_to_generator(function* () {
      var optionsOverride = (() => {
        if (import_react_native17.Platform.OS === "ios") {
          return {
            ...options,
            mode: "open",
            allowMultiSelection: false,
            type: [
              "public.folder"
            ]
          };
        } else {
          return {
            // technically, "mode" is ignored here, and we shouldn't need to specify anything but the PickOptions data class
            // requires mode to be set
            mode: "open",
            ...options
          };
        }
      })();
      return NativeDocumentPicker2.pickDirectory(optionsOverride);
    })();
  }
  var import_react_native17;
  var init_pickDirectory = __esm({
    "node_modules/@react-native-documents/picker/lib/module/pickDirectory.js"() {
      "use strict";
      init_async_to_generator();
      import_react_native17 = __toESM(require_react_native(), 1);
      init_NativeDocumentPicker2();
      __name(pickDirectory2, "pickDirectory");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/validateTypes.js
  var safeValidate, nativeTypeMatches;
  var init_validateTypes = __esm({
    "node_modules/@react-native-documents/picker/lib/module/validateTypes.js"() {
      "use strict";
      safeValidate = /* @__PURE__ */ __name((requestedTypes, singlePickResult) => {
        var { nativeType } = singlePickResult;
        return requestedTypes.some((it) => nativeTypeMatches(it, nativeType));
      }, "safeValidate");
      nativeTypeMatches = /* @__PURE__ */ __name((requiredType, actualType) => {
        if (requiredType === actualType || requiredType === "*/*") {
          return true;
        }
        if (actualType === null) {
          return false;
        }
        if (requiredType.endsWith("/*")) {
          var requiredTypeWithoutStar = requiredType.slice(0, -2);
          if (actualType.startsWith(requiredTypeWithoutStar)) {
            return true;
          }
        }
        return false;
      }, "nativeTypeMatches");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/pick.js
  function pick3(options) {
    return _async_to_generator(function* () {
      var type = (() => {
        if (!options?.type) {
          return [
            types2.allFiles
          ];
        }
        var newType = Array.isArray(options.type) ? options.type : [
          options.type
        ];
        return newType.flat().map((it) => it.trim());
      })();
      var newOpts = {
        mode: "import",
        // allowMultiSelection must be false to maintain old (v5) behavior
        allowMultiSelection: false,
        allowVirtualFiles: false,
        ...options,
        type
      };
      if (!newOpts.type.every((it) => typeof it === "string")) {
        throw new TypeError(`Unexpected type option in ${newOpts.type}, did you try using a DocumentPicker.types.* that does not exist?`);
      }
      if ("mode" in newOpts && ![
        "import",
        "open"
      ].includes(newOpts.mode)) {
        throw new TypeError("Invalid mode option: " + newOpts.mode);
      }
      var response = NativeDocumentPicker2.pick(newOpts);
      var awaitedResult = yield response;
      for (var res of awaitedResult) {
        if (import_react_native18.Platform.OS === "android") {
          res.hasRequestedType = safeValidate(newOpts.type, res);
        } else {
          res.hasRequestedType = true;
        }
      }
      return awaitedResult;
    })();
  }
  var import_react_native18;
  var init_pick2 = __esm({
    "node_modules/@react-native-documents/picker/lib/module/pick.js"() {
      "use strict";
      init_async_to_generator();
      init_NativeDocumentPicker2();
      init_fileTypes2();
      import_react_native18 = __toESM(require_react_native(), 1);
      init_validateTypes();
      __name(pick3, "pick");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/saveDocuments.js
  function saveDocuments(options) {
    return _async_to_generator(function* () {
      var writeDocumentResponse = yield (() => _async_to_generator(function* () {
        if (import_react_native19.Platform.OS === "android") {
          var length = options.sourceUris.length;
          if (length > 1) {
            console.warn(`DocumentPicker.saveDocuments: Android only allows to save one file at a time.

      You provided an array with ${length} entries.`);
          }
          var objectWithSingleUri = yield NativeDocumentPicker2.saveDocument(options);
          var response = yield NativeDocumentPicker2.writeDocuments(objectWithSingleUri);
          return response;
        } else {
          return NativeDocumentPicker2.writeDocuments(options);
        }
      })())();
      return writeDocumentResponse.map(keepOnlySpecifiedFields);
    })();
  }
  function keepOnlySpecifiedFields(source) {
    return {
      uri: source.uri,
      name: source.name,
      error: source.error
    };
  }
  var import_react_native19;
  var init_saveDocuments = __esm({
    "node_modules/@react-native-documents/picker/lib/module/saveDocuments.js"() {
      "use strict";
      init_async_to_generator();
      init_NativeDocumentPicker2();
      import_react_native19 = __toESM(require_react_native(), 1);
      __name(saveDocuments, "saveDocuments");
      __name(keepOnlySpecifiedFields, "keepOnlySpecifiedFields");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/release.js
  var releaseLongTermAccess, releaseSecureAccess2;
  var init_release = __esm({
    "node_modules/@react-native-documents/picker/lib/module/release.js"() {
      "use strict";
      init_async_to_generator();
      init_NativeDocumentPicker2();
      releaseLongTermAccess = /* @__PURE__ */ __name((uris) => _async_to_generator(function* () {
        return NativeDocumentPicker2.releaseLongTermAccess(uris);
      })(), "releaseLongTermAccess");
      releaseSecureAccess2 = /* @__PURE__ */ __name((uris) => _async_to_generator(function* () {
        return NativeDocumentPicker2.releaseSecureAccess(uris);
      })(), "releaseSecureAccess");
    }
  });

  // node_modules/@react-native-documents/picker/lib/module/index.js
  var module_exports3 = {};
  __export(module_exports3, {
    errorCodes: () => errorCodes,
    isErrorWithCode: () => isErrorWithCode2,
    isKnownType: () => isKnownType,
    keepLocalCopy: () => keepLocalCopy,
    pick: () => pick3,
    pickDirectory: () => pickDirectory2,
    releaseLongTermAccess: () => releaseLongTermAccess,
    releaseSecureAccess: () => releaseSecureAccess2,
    saveDocuments: () => saveDocuments,
    types: () => types2
  });
  var init_module3 = __esm({
    "node_modules/@react-native-documents/picker/lib/module/index.js"() {
      "use strict";
      init_isKnownType();
      init_keepLocalCopy();
      init_fileTypes2();
      init_errors();
      init_pickDirectory();
      init_pick2();
      init_saveDocuments();
      init_release();
    }
  });

  // src/components/Blaze/Settings/pages/Wallpapers/AddWallpaperSheet.tsx
  var AddWallpaperSheet_exports = {};
  __export(AddWallpaperSheet_exports, {
    default: () => AddWallpaperSheet
  });
  function AddWallpaperSheet() {
    var [category, setCategory] = (0, import_react7.useState)("");
    var [name, setName] = (0, import_react7.useState)("");
    var [image, setImage] = (0, import_react7.useState)(null);
    var [opacity, setOpacity] = (0, import_react7.useState)(1);
    var [blur, setBlur] = (0, import_react7.useState)(0);
    var addWallpaper = useWallpaperStore((state2) => state2.addWallpaper);
    var handlePickImage = /* @__PURE__ */ __name(() => _async_to_generator(function* () {
      try {
        if (module_exports2?.pickSingle) {
          var file = yield pickSingle({
            type: [
              types.images
            ],
            mode: "open"
          });
          if (file) {
            if (!file.uri) {
              import_react_native20.Alert.alert("Error", "Failed to get file URI");
              return;
            }
            setImage({
              uri: file.uri,
              name: file.name ?? "Unknown"
            });
          }
        } else if (module_exports3?.pick) {
          var files = yield pick3({
            type: [
              types2.images
            ],
            allowVirtualFiles: true,
            mode: "open"
          });
          var firstFile = files[0];
          if (firstFile?.uri) {
            var name2 = firstFile.name ?? "wallpaper.jpg";
            var finalUri = firstFile.uri;
            try {
              var keptCopies = yield keepLocalCopy({
                files: [
                  {
                    fileName: name2,
                    uri: firstFile.uri
                  }
                ],
                destination: "documentDirectory"
              });
              var result = keptCopies[0];
              if (result?.status === "success" && result.localUri) {
                finalUri = result.localUri;
              }
            } catch (copyError) {
              console.warn("Failed to create local copy, using original:", copyError);
            }
            setImage({
              uri: finalUri.startsWith("file://") ? finalUri : `file://${finalUri}`,
              name: name2
            });
          }
        }
      } catch (e3) {
        if (module_exports2?.isCancel && isCancel(e3)) {
          return;
        }
        if (e3 instanceof Error && e3.message.includes("User cancelled")) {
          return;
        }
        console.error("Image picker error:", e3);
        import_react_native20.Alert.alert("Error", "Failed to select image");
      }
    })(), "handlePickImage");
    var handleAdd = /* @__PURE__ */ __name(() => {
      if (!image || !category || !name) return;
      if (!image.uri) {
        import_react_native20.Alert.alert("Error", "Invalid image URI");
        return;
      }
      addWallpaper(category, {
        name,
        image: image.uri,
        opacity,
        blur,
        isBuiltin: false
      });
      hideSheet("AddWallpaperSheet");
    }, "handleAdd");
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(import_react_native20.View, {
        style: styles2.container,
        children: [
          /* @__PURE__ */ jsx(TextInput_default, {
            label: "Category Name",
            placeholder: "e.g. Nature",
            value: category,
            onChange: setCategory
          }),
          /* @__PURE__ */ jsx(TextInput_default, {
            label: "Wallpaper Name",
            placeholder: "e.g. Sunset",
            value: name,
            onChange: setName
          }),
          /* @__PURE__ */ jsx(Button_default, {
            text: image?.name ?? "Select Image",
            onPress: handlePickImage,
            style: styles2.selectButton
          }),
          image && /* @__PURE__ */ jsxs(import_react_native20.Text, {
            style: styles2.imageInfo,
            children: [
              "Selected: ",
              image.name
            ]
          }),
          /* @__PURE__ */ jsx(Button_default, {
            text: "Add Wallpaper",
            onPress: handleAdd,
            disabled: !image || !category || !name,
            style: styles2.addButton
          })
        ]
      })
    });
  }
  var import_react7, import_react_native20, styles2;
  var init_AddWallpaperSheet = __esm({
    "src/components/Blaze/Settings/pages/Wallpapers/AddWallpaperSheet.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      import_react7 = __toESM(require_react(), 1);
      import_react_native20 = __toESM(require_react_native(), 1);
      init_Discord();
      init_BottomSheet();
      init_sheets();
      init_wallpaperStore();
      init_module2();
      init_module3();
      __name(AddWallpaperSheet, "AddWallpaperSheet");
      styles2 = import_react_native20.StyleSheet.create({
        container: {
          padding: 16,
          gap: 12
        },
        selectButton: {
          marginTop: 8
        },
        addButton: {
          marginTop: 24
        },
        imageInfo: {
          fontSize: 12,
          color: "#999",
          marginTop: -8
        }
      });
    }
  });

  // src/components/Blaze/Settings/pages/Wallpapers/index.tsx
  var Wallpapers_exports = {};
  __export(Wallpapers_exports, {
    default: () => WallpaperManager
  });
  function WallpaperManager() {
    var { categories, followTheme, setFollowTheme } = useWallpaperStore();
    return /* @__PURE__ */ jsxs(import_react_native21.ScrollView, {
      style: styles3.container,
      children: [
        /* @__PURE__ */ jsx(TableSwitchRow_default, {
          label: "Follow Theme",
          value: followTheme,
          onValueChange: setFollowTheme
        }),
        categories.map((category) => /* @__PURE__ */ jsxs(import_react_native21.View, {
          style: styles3.categoryContainer,
          children: [
            /* @__PURE__ */ jsx(Text_default, {
              variant: "heading-sm/semibold",
              style: styles3.categoryTitle,
              children: category.name
            }),
            /* @__PURE__ */ jsx(import_react_native21.ScrollView, {
              horizontal: true,
              showsHorizontalScrollIndicator: false,
              children: category.wallpapers.map((wallpaper) => /* @__PURE__ */ jsxs(import_react_native21.TouchableOpacity, {
                onPress: /* @__PURE__ */ __name(() => showSheet("WallpaperPreviewSheet", WallpaperPreviewSheet, {
                  wallpaper
                }), "onPress"),
                style: styles3.wallpaperThumb,
                children: [
                  /* @__PURE__ */ jsx(import_react_native21.Image, {
                    source: {
                      uri: wallpaper.image
                    },
                    style: styles3.thumbnail
                  }),
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-xs/medium",
                    style: styles3.wallpaperName,
                    children: wallpaper.name
                  })
                ]
              }, wallpaper.name))
            })
          ]
        }, category.name)),
        /* @__PURE__ */ jsx(Button_default, {
          text: "Add Custom Background",
          onPress: /* @__PURE__ */ __name(() => showSheet("AddWallpaperSheet", AddWallpaperSheet), "onPress"),
          icon: findAssetId("PlusIcon"),
          style: styles3.addButton
        })
      ]
    });
  }
  var import_react8, import_react_native21, styles3;
  var init_Wallpapers = __esm({
    "src/components/Blaze/Settings/pages/Wallpapers/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react8 = __toESM(require_react(), 1);
      import_react_native21 = __toESM(require_react_native(), 1);
      init_wallpaperStore();
      init_Discord();
      init_TableSwitchRow();
      init_assets();
      init_AddWallpaperSheet();
      init_WallpaperPreviewSheet();
      init_sheets();
      init_Text();
      __name(WallpaperManager, "WallpaperManager");
      styles3 = import_react_native21.StyleSheet.create({
        container: {
          padding: 16
        },
        categoryContainer: {
          marginBottom: 24
        },
        categoryTitle: {
          marginBottom: 8
        },
        wallpaperThumb: {
          margin: 8,
          alignItems: "center",
          width: 80
        },
        thumbnail: {
          width: 80,
          height: 120,
          borderRadius: 8
        },
        wallpaperName: {
          marginTop: 4,
          textAlign: "center"
        },
        addButton: {
          marginTop: 16
        }
      });
    }
  });

  // src/utils/clipboard.ts
  var clipboard_exports = {};
  __export(clipboard_exports, {
    copyToClipboard: () => copyToClipboard
  });
  function copyToClipboard(_0) {
    return _async_to_generator(function* (text, { toast: toast2 = true } = {}) {
      try {
        yield clipboard.setString(text);
        if (toast2) showToast({
          id: "blz-copied",
          text: "Copied to clipboard"
        });
      } catch (e3) {
        if (toast2) showToast({
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

  // src/components/Blaze/Settings/pages/Logs/constants.tsx
  var constants_exports2 = {};
  __export(constants_exports2, {
    VARIANT_CONFIG: () => VARIANT_CONFIG
  });
  var VARIANT_CONFIG;
  var init_constants2 = __esm({
    "src/components/Blaze/Settings/pages/Logs/constants.tsx"() {
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

  // src/components/Blaze/Settings/pages/Logs/LogDetailsSheet.tsx
  var LogDetailsSheet_exports = {};
  __export(LogDetailsSheet_exports, {
    LogDetailsSheet: () => LogDetailsSheet
  });
  function LogDetailsSheet({ log }) {
    var variantStyles = VARIANT_CONFIG[log.level];
    var backgroundColor = useToken(tokens.colors[variantStyles.background]);
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(import_react_native22.View, {
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
              /* @__PURE__ */ jsxs(import_react_native22.View, {
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
  var import_react_native22;
  var init_LogDetailsSheet = __esm({
    "src/components/Blaze/Settings/pages/Logs/LogDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_Discord();
      init_libraries();
      import_react_native22 = __toESM(require_react_native(), 1);
      init_InfoSection();
      init_clipboard();
      init_i18n();
      init_constants2();
      __name(LogDetailsSheet, "LogDetailsSheet");
    }
  });

  // src/components/Blaze/Settings/pages/Logs/LogRow.tsx
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
    return /* @__PURE__ */ jsx(import_react_native23.View, {
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
  var import_react_native23;
  var init_LogRow = __esm({
    "src/components/Blaze/Settings/pages/Logs/LogRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_PressableScale();
      init_sheets();
      init_libraries();
      import_react_native23 = __toESM(require_react_native(), 1);
      init_LogDetailsSheet();
      init_constants2();
      __name(LogRow, "LogRow");
    }
  });

  // src/components/Blaze/Settings/pages/Logs/index.tsx
  var Logs_exports = {};
  __export(Logs_exports, {
    default: () => LogsPage
  });
  function LogsPage() {
    var [showDebug, setShowDebug] = (0, import_react9.useState)(false);
    var filteredLogs = (0, import_react9.useMemo)(() => {
      return blzlogger.logs.filter((log) => log.level !== "debug" || showDebug);
    }, [
      showDebug
    ]);
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsx(import_flash_list2.FlashList, {
        data: filteredLogs,
        ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native24.ScrollView, {
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
  var import_flash_list2, import_react9, import_react_native24;
  var init_Logs = __esm({
    "src/components/Blaze/Settings/pages/Logs/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_TableRowDivider();
      init_PageWrapper();
      import_flash_list2 = __toESM(require_flash_list(), 1);
      import_react9 = __toESM(require_react(), 1);
      import_react_native24 = __toESM(require_react_native(), 1);
      init_InlineCheckbox();
      init_LogRow();
      init_logger();
      __name(LogsPage, "LogsPage");
    }
  });

  // src/components/Blaze/Settings/pages/Logs/__mockings__.tsx
  var mockings_exports = {};
  __export(mockings_exports, {
    LOG_HISTORY_MOCK: () => LOG_HISTORY_MOCK
  });
  var SAMPLE_MESSAGES, generateMockLogs, LOG_HISTORY_MOCK;
  var init_mockings = __esm({
    "src/components/Blaze/Settings/pages/Logs/__mockings__.tsx"() {
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

  // asset-loader:src/assets/ic_blazecord.png
  var require_ic_blazecord = __commonJS({
    "asset-loader:src/assets/ic_blazecord.png"(exports, module3) {
      init_libraries();
      module3.exports = AssetsRegistry.registerAsset({ "__blazecord": true, "__packager_asset": true, "width": 254, "height": 256, "httpServerLocation": "src/assets/ic_blazecord.png", "dataurl": "data:image/png;base64,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", "scales": [1], "name": "ic_blazecord.png", "type": "png" });
    }
  });

  // src/components/Blaze/Settings/pages/Developer/ToastPlayground.tsx
  var ToastPlayground_exports = {};
  __export(ToastPlayground_exports, {
    default: () => ToastPlayground
  });
  function DemoToastComponent(props) {
    var [count, setCount] = (0, import_react10.useState)(0);
    (0, import_react10.useEffect)(() => {
      var interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1e3);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
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
    var [toastConfig, setToastConfig] = (0, import_react10.useState)({
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
          logger4.info("Toast dismissed");
        },
        onPress() {
          logger4.info("Toast pressed");
        },
        onTimeout() {
          logger4.info("Toast timed out");
        }
      };
      if (toastConfig.showIcon) {
        options.icon = require_ic_blazecord();
      }
      if (toastConfig.updateAfterDelay) {
        setTimeout(() => {
          toast2.update({
            text: `${toastConfig.text} (Updated)`
          });
        }, 2e3);
      }
      var toast2 = showToast(options);
    }, "handleShowToast");
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsxs(import_react_native25.ScrollView, {
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
              var toast2 = showToast({
                id: "custom-toast",
                render: DemoToastComponent,
                onPress: /* @__PURE__ */ __name(() => toast2.hide(), "onPress"),
                duration: toastConfig.duration,
                dismissible: toastConfig.dismissible
              });
            }, "onPress")
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Loading Toast",
            onPress: /* @__PURE__ */ __name(() => {
              var toast2 = showToast({
                id: "loading-toast",
                text: "Loading...",
                icon: /* @__PURE__ */ jsx(import_react_native25.ActivityIndicator, {}),
                dismissible: false
              });
              setTimeout(() => {
                toast2.update({
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
  var import_react10, import_react_native25, logger4;
  var init_ToastPlayground = __esm({
    "src/components/Blaze/Settings/pages/Developer/ToastPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_logger();
      init_toasts();
      init_Discord();
      init_PageWrapper();
      import_react10 = __toESM(require_react(), 1);
      import_react_native25 = __toESM(require_react_native(), 1);
      logger4 = blzlogger.createChild("ToastPlayground");
      __name(DemoToastComponent, "DemoToastComponent");
      __name(ToastPlayground, "ToastPlayground");
    }
  });

  // src/components/Blaze/Settings/pages/Developer/AssetBrowser.tsx
  var AssetBrowser_exports = {};
  __export(AssetBrowser_exports, {
    default: () => AssetBrowser
  });
  function AssetBrowser() {
    var ref = useSearchQuery();
    var assets = (0, import_react11.useMemo)(() => sortAssets(getAssets()).filter((a) => a.name.toLowerCase().includes(ref.query.toLowerCase()) || a.id.toString() === ref.query), [
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
  var import_react11, import_react_native26, import_flash_list3, IMAGE_TYPES, DEFAULT_IMAGE_SIZE, isAssetTypeAnImage, BasicAssetDisplay, ImageAssetDisplay, AssetDisplay, ImageAssetPreviewer, sortAssets;
  var init_AssetBrowser = __esm({
    "src/components/Blaze/Settings/pages/Developer/AssetBrowser.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react11 = __toESM(require_react(), 1);
      init_assets();
      import_react_native26 = __toESM(require_react_native(), 1);
      init_sheets();
      init_Search();
      init_PageWrapper();
      import_flash_list3 = __toESM(require_flash_list(), 1);
      init_Discord();
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
        trailing: /* @__PURE__ */ jsx(import_react_native26.Image, {
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
        var width = (0, import_react_native26.useWindowDimensions)().width - 24;
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
              /* @__PURE__ */ jsx(import_react_native26.View, {
                style: {
                  alignItems: "center",
                  paddingVertical: 24
                },
                children: /* @__PURE__ */ jsx(import_react_native26.Image, {
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
    var prev = import_react12.default.useRef(void 0);
    return (state2) => {
      var next = selector(state2);
      return shallow(prev.current, next) ? prev.current : prev.current = next;
    };
  }
  var import_react12;
  var init_shallow2 = __esm({
    "node_modules/zustand/esm/react/shallow.mjs"() {
      import_react12 = __toESM(require_react(), 1);
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

  // src/components/Blaze/Settings/pages/Developer/TokenBrowser/Colors.tsx
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
      trailing: /* @__PURE__ */ jsx(import_react_native27.View, {
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
  var import_flash_list4, import_react_native27;
  var init_Colors = __esm({
    "src/components/Blaze/Settings/pages/Developer/TokenBrowser/Colors.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_PageWrapper();
      init_libraries();
      import_flash_list4 = __toESM(require_flash_list(), 1);
      import_react_native27 = __toESM(require_react_native(), 1);
      __name(ColorRow, "ColorRow");
      __name(Colors, "Colors");
    }
  });

  // src/components/Blaze/Settings/pages/Developer/TokenBrowser/index.tsx
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
            navigation.push("BLAZECORD_CUSTOM_PAGE", {
              title: "Colors",
              render: (init_Colors(), __toCommonJS(Colors_exports)).default
            });
          }, "onPress")
        })
      })
    });
  }
  var init_TokenBrowser = __esm({
    "src/components/Blaze/Settings/pages/Developer/TokenBrowser/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_PageWrapper();
      init_libraries();
      __name(TokenBrowser, "TokenBrowser");
    }
  });

  // src/components/Blaze/Settings/pages/Developer/CalloutPlayground.tsx
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
    "src/components/Blaze/Settings/pages/Developer/CalloutPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_PageWrapper();
      __name(CalloutPlayground, "CalloutPlayground");
    }
  });

  // src/components/Blaze/Settings/pages/Developer/AlertsPlayground.tsx
  var AlertsPlayground_exports = {};
  __export(AlertsPlayground_exports, {
    default: () => AlertsPlayground
  });
  function DemoAlert() {
    var [understood, setUnderstood] = (0, import_react13.useState)(false);
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
    var [count, setCount] = (0, import_react13.useState)(0);
    var dismissModal = useDismissModalCallback();
    (0, import_react13.useEffect)(() => {
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
  var import_react13;
  var init_AlertsPlayground = __esm({
    "src/components/Blaze/Settings/pages/Developer/AlertsPlayground.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_alerts();
      init_Discord();
      init_AlertModal();
      init_InlineCheckbox();
      init_PageWrapper();
      init_dist();
      import_react13 = __toESM(require_react(), 1);
      __name(DemoAlert, "DemoAlert");
      __name(CountdownDemoAlert, "CountdownDemoAlert");
      __name(AlertsPlayground, "AlertsPlayground");
    }
  });

  // src/components/Blaze/Settings/pages/Developer/index.tsx
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
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
                title: tSections.tools.asset_browser.label(),
                render: (init_AssetBrowser(), __toCommonJS(AssetBrowser_exports)).default
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Token Browser",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("PaintPaletteIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
                title: "Token Browser",
                render: (init_TokenBrowser(), __toCommonJS(TokenBrowser_exports)).default
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
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
                title: "Toast Playground",
                render: (init_ToastPlayground(), __toCommonJS(ToastPlayground_exports)).default
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Callouts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
                title: "Callouts Playground",
                render: (init_CalloutPlayground(), __toCommonJS(CalloutPlayground_exports)).default
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Alerts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
                title: "Alerts Playground",
                render: (init_AlertsPlayground(), __toCommonJS(AlertsPlayground_exports)).default
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
  var init_Developer = __esm({
    "src/components/Blaze/Settings/pages/Developer/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_Discord();
      init_PageWrapper();
      init_libraries();
      init_caches();
      init_useInitConfigStore();
      init_shallow3();
      __name(DeveloperPage, "DeveloperPage");
    }
  });

  // src/components/Blaze/Settings/pages/Addon/SearchTermHighlight.tsx
  var SearchTermHighlight_exports = {};
  __export(SearchTermHighlight_exports, {
    HighlightProvider: () => HighlightProvider,
    useHighlight: () => useHighlight,
    useHighlightedSearchTerm: () => useHighlightedSearchTerm
  });
  function HighlightProvider({ children, result, searchTerms }) {
    var contextValue = (0, import_react14.useMemo)(() => ({
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
    var context25 = (0, import_react14.useContext)(HighlightContext);
    if (!context25) {
      throw new Error("useHighlight must be used within a HighlightProvider");
    }
    return context25;
  }
  function useHighlightedSearchTerm(index) {
    var { result, searchTerms } = useHighlight();
    return (0, import_react14.useCallback)((textProps) => {
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
  var import_react14, HighlightContext;
  var init_SearchTermHighlight = __esm({
    "src/components/Blaze/Settings/pages/Addon/SearchTermHighlight.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_libraries();
      import_react14 = __toESM(require_react(), 1);
      HighlightContext = /* @__PURE__ */ (0, import_react14.createContext)(null);
      __name(HighlightProvider, "HighlightProvider");
      __name(useHighlight, "useHighlight");
      __name(useHighlightedSearchTerm, "useHighlightedSearchTerm");
    }
  });

  // src/components/Blaze/Settings/pages/Addon/AddonCard.tsx
  var AddonCard_exports = {};
  __export(AddonCard_exports, {
    default: () => AddonCard
  });
  function CardHeader({ addon }) {
    var HeaderText = useHighlightedSearchTerm(0);
    return /* @__PURE__ */ jsx(import_react_native28.View, {
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
    return /* @__PURE__ */ jsx(import_react_native28.View, {
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
    return /* @__PURE__ */ jsx(import_react_native28.View, {
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
    return /* @__PURE__ */ jsx(import_react_native28.View, {
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
          /* @__PURE__ */ jsxs(import_react_native28.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native28.View, {
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
              /* @__PURE__ */ jsx(import_react_native28.View, {
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
  var import_react_native28;
  var init_AddonCard = __esm({
    "src/components/Blaze/Settings/pages/Addon/AddonCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native28 = __toESM(require_react_native(), 1);
      init_assets();
      init_IconButton();
      init_FormSwitch();
      init_Discord();
      init_SearchTermHighlight();
      __name(CardHeader, "CardHeader");
      __name(CardDevs, "CardDevs");
      __name(Description, "Description");
      __name(CardActions, "CardActions");
      __name(CardSwitch, "CardSwitch");
      __name(AddonCard, "AddonCard");
    }
  });

  // src/components/Blaze/Settings/pages/Addon/index.tsx
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
        ListHeaderComponent: /* @__PURE__ */ jsxs(import_react_native29.View, {
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
  var import_react_native29, ItemSeparator;
  var init_Addon = __esm({
    "src/components/Blaze/Settings/pages/Addon/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_i18n();
      import_react_native29 = __toESM(require_react_native(), 1);
      init_PageWrapper();
      init_ResponsiveMasonryFlashList();
      init_AddonCard();
      init_SearchTermHighlight();
      init_loader();
      ItemSeparator = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(import_react_native29.View, {
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

  // src/components/Blaze/Settings/pages/Addon/AddonCollectionManager.tsx
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
    "src/components/Blaze/Settings/pages/Addon/AddonCollectionManager.tsx"() {
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

  // src/api/flux.ts
  var flux_exports = {};
  __export(flux_exports, {
    injectFluxInterceptor: () => injectFluxInterceptor,
    interceptFluxEvent: () => interceptFluxEvent
  });
  function injectFluxInterceptor(FluxDispatcher2) {
    var cb = /* @__PURE__ */ __name((payload) => {
      var blocked = false;
      var modified = false;
      for (var i2 = 0, len = intercepts.length; i2 < len; i2++) {
        var res = intercepts[i2](payload);
        if (res == null) continue;
        if (!res) {
          blocked = true;
        } else if (typeof res === "object") {
          Object.assign(payload, res);
          modified = true;
        }
      }
      if (blocked) payload[blockedSym] = true;
      if (modified) payload[modifiedSym] = true;
      return blocked;
    }, "cb");
    (FluxDispatcher2._interceptors ??= []).unshift(cb);
    return () => FluxDispatcher2._interceptors.filter((v) => v !== cb);
  }
  function interceptFluxEvent(cb) {
    intercepts.push(cb);
    return () => {
      intercepts = intercepts.filter((i2) => i2 !== cb);
    };
  }
  var blockedSym, modifiedSym, intercepts;
  var init_flux = __esm({
    "src/api/flux.ts"() {
      "use strict";
      blockedSym = Symbol.for("blazecord.flux.blocked");
      modifiedSym = Symbol.for("blazecord.flux.modified");
      intercepts = [];
      __name(injectFluxInterceptor, "injectFluxInterceptor");
      __name(interceptFluxEvent, "interceptFluxEvent");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/toasts/index.tsx
  var context, meta, definePlugin, definePluginSettings, logger5, patcher;
  var init_toasts2 = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/toasts/index.tsx"() {
      init_shared();
      context = getPluginContext("toasts");
      ({ meta, definePlugin, definePluginSettings, logger: logger5, patcher } = context);
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
      return /* @__PURE__ */ jsx(import_react_native30.Image, {
        style: {
          width: 18,
          height: 18
        },
        resizeMode: "contain",
        source: icon
      });
    }
    if (/* @__PURE__ */ (0, import_react15.isValidElement)(icon) && typeof icon.type === "object") {
      return icon;
    }
    var Icon = icon;
    return /* @__PURE__ */ jsx(Icon, {});
  }
  function GenericToast({ toast: toast2 }) {
    var [text, icon] = toast2.use(useShallow((t4) => [
      t4.text,
      t4.icon
    ]));
    var [isMultiline, setIsMultiline] = (0, import_react15.useState)(false);
    var onTextLayout = /* @__PURE__ */ __name(({ nativeEvent }) => {
      setIsMultiline(nativeEvent.lines.length > 1);
    }, "onTextLayout");
    return /* @__PURE__ */ jsx(import_react_native30.View, {
      style: [
        isMultiline && {
          paddingHorizontal: 12
        }
      ],
      children: /* @__PURE__ */ jsxs(import_react_native30.View, {
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
  function CustomToast({ toast: toast2 }) {
    var CustomComponent = toast2.use((t4) => t4.render);
    var { updateToast, hideToast } = useToastStore(useShallow((state2) => ({
      updateToast: state2.updateToast,
      hideToast: state2.hideToast
    })));
    var controller = {
      hide: /* @__PURE__ */ __name(() => {
        hideToast(toast2.id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((config) => {
        updateToast({
          ...config,
          id: toast2.id
        });
        return controller;
      }, "update")
    };
    return /* @__PURE__ */ jsx(CustomComponent, {
      controller
    });
  }
  function ToastContentRenderer({ toast: toast2 }) {
    if ("text" in toast2) {
      return /* @__PURE__ */ jsx(GenericToast, {
        toast: toast2
      });
    }
    if ("render" in toast2 && toast2.render) {
      return /* @__PURE__ */ jsx(CustomToast, {
        toast: toast2
      });
    }
    throw new Error("Invalid toast type");
  }
  var import_react15, import_react_native30;
  var init_ToastContentRenderer = __esm({
    "src/plugins/_api/toasts/components/ToastContentRenderer.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_useToastStore();
      import_react15 = __toESM(require_react(), 1);
      import_react_native30 = __toESM(require_react_native(), 1);
      init_shallow3();
      __name(ToastIcon, "ToastIcon");
      __name(GenericToast, "GenericToast");
      __name(CustomToast, "CustomToast");
      __name(ToastContentRenderer, "ToastContentRenderer");
    }
  });

  // src/plugins/_api/toasts/components/Toast.tsx
  var import_react_native_reanimated, import_react_native_gesture_handler, import_react_native31, import_react16, OFFSCREEN_LENGTH, useStyles2, _worklet_10575445024011_init_data, _worklet_12707892542287_init_data, _worklet_2394815801719_init_data, _worklet_1148071943580_init_data, _worklet_12633554293434_init_data, _worklet_14643467246605_init_data, _worklet_3070931472053_init_data, _worklet_1700014798715_init_data, Toast_default;
  var init_Toast = __esm({
    "src/plugins/_api/toasts/components/Toast.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native_reanimated = __toESM(require_react_native_reanimated(), 1);
      import_react_native_gesture_handler = __toESM(require_react_native_gesture_handler(), 1);
      import_react_native31 = __toESM(require_react_native(), 1);
      init_styles();
      init_libraries();
      import_react16 = __toESM(require_react(), 1);
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
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx1","translationX","translationY","__closure","transform","translateX","value","translateY"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAwC0C,SAAAA,UAAA,QAAAC,YAAA,CAAAC,YAAA,OAAAC,SAAA,OAAK,CACnCC,SAAS,CAAE,CACP,CACIC,UAAU,CAAEJ,YAAY,CAACK,KAC7B,CAAC,CACD,CACIC,UAAU,CAAEL,YAAY,CAACI,KAC7B,CAAC,CAET,CAAC","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_12707892542287_init_data = {
        code: "function ToastTsx2(){const{toast,translationX,width,OFFSCREEN_LENGTH,withTiming,runOnJS,onceOnDismiss}=this.__closure;var willDisappear=toast.dismissible&&(translationX.value>width/4||translationX.value<-width/4);var direction=Math.sign(translationX.value);var position=willDisappear?OFFSCREEN_LENGTH*direction:0;translationX.value=withTiming(position,undefined,function(finished){if(finished&&willDisappear){runOnJS(onceOnDismiss)();}});}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx2","toast","translationX","width","OFFSCREEN_LENGTH","withTiming","runOnJS","onceOnDismiss","__closure","willDisappear","dismissible","value","direction","Math","sign","position","undefined","finished"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA2Da,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,KAAA,CAAAC,gBAAA,CAAAC,UAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACT,GAAI,CAAAC,aAAa,CAAGR,KAAK,CAACS,WAAW,GAAKR,YAAY,CAACS,KAAK,CAAGR,KAAK,CAAG,CAAC,EAAID,YAAY,CAACS,KAAK,CAAG,CAACR,KAAK,CAAG,CAAC,CAAC,CAC5G,GAAI,CAAAS,SAAS,CAAGC,IAAI,CAACC,IAAI,CAACZ,YAAY,CAACS,KAAK,CAAC,CAC7C,GAAI,CAAAI,QAAQ,CAAGN,aAAa,CAAGL,gBAAgB,CAAGQ,SAAS,CAAG,CAAC,CAC/DV,YAAY,CAACS,KAAK,CAAGN,UAAU,CAACU,QAAQ,CAAEC,SAAS,CAAG,SAAAC,QAAQ,CAAG,CAC7D,GAAIA,QAAQ,EAAIR,aAAa,CAAE,CAC3BH,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_2394815801719_init_data = {
        code: "function ToastTsx3(event){const{translationX}=this.__closure;translationX.value+=event.changeX;}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx3","event","translationX","__closure","value","changeX"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDwG,SAAAA,SAAQA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,CACxGD,YAAY,CAACE,KAAK,EAAIH,KAAK,CAACI,OAAO,CACvC","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_1148071943580_init_data = {
        code: "function ToastTsx4(e){const{translationX}=this.__closure;return translationX.value=e.translationX;}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx4","e","translationX","__closure","value"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDqD,QAAC,CAAAA,UAAAC,CAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAIH,CAAC,CAAAC,YAAA","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_12633554293434_init_data = {
        code: "function ToastTsx5(finished){const{willDisappear,runOnJS,onceOnDismiss}=this.__closure;if(finished&&willDisappear){runOnJS(onceOnDismiss)();}}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx5","finished","willDisappear","runOnJS","onceOnDismiss","__closure"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA+D8D,SAAAA,UAAQC,QAAG,QAAAC,aAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC7D,GAAIJ,QAAQ,EAAIC,aAAa,CAAE,CAC3BC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_14643467246605_init_data = {
        code: "function ToastTsx6(){const{toast,translationY,withTiming,OFFSCREEN_LENGTH,runOnJS,onceOnDismiss}=this.__closure;if(!toast.dismissible)return;translationY.value=withTiming(-OFFSCREEN_LENGTH,undefined,function(finished){if(finished){runOnJS(onceOnDismiss)();}});}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx6","toast","translationY","withTiming","OFFSCREEN_LENGTH","runOnJS","onceOnDismiss","__closure","dismissible","value","undefined","finished"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEmJ,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,UAAA,CAAAC,gBAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC/I,GAAI,CAACN,KAAK,CAACO,WAAW,CAAE,OACxBN,YAAY,CAACO,KAAK,CAAGN,UAAU,CAAC,CAACC,gBAAgB,CAAEM,SAAS,CAAG,SAAAC,QAAQ,CAAG,CACtE,GAAIA,QAAQ,CAAE,CACVN,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_3070931472053_init_data = {
        code: "function ToastTsx7(event){const{translationY}=this.__closure;return translationY.value=event.y;}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx7","event","translationY","__closure","value","y"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEuG,SAAAA,SAAKA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAGH,KAAM,CAAAI,CAAA","ignoreList":[]}',
        version: "3.17.4"
      };
      _worklet_1700014798715_init_data = {
        code: "function ToastTsx8(finished){const{runOnJS,onceOnDismiss}=this.__closure;if(finished){runOnJS(onceOnDismiss)();}}",
        location: "/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx8","finished","runOnJS","onceOnDismiss","__closure"],"sources":["/home/blaze/coding/new/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAuEuE,SAAAA,UAAQC,QAAG,QAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACtE,GAAIH,QAAQ,CAAE,CACVC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.17.4"
      };
      Toast_default = /* @__PURE__ */ (0, import_react16.memo)(/* @__PURE__ */ __name(function Toast({
        toast: toast2
      }) {
        var styles4 = useStyles2();
        var {
          width
        } = (0, import_react_native31.useWindowDimensions)();
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
        var onceOnDismiss = (0, import_react16.useCallback)(() => {
          toast2.onDismiss?.();
          hideToast(toast2.id);
        }, [hideToast, toast2]);
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
            var willDisappear = toast2.dismissible && (translationX.value > width / 4 || translationX.value < -width / 4);
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
            toast: toast2,
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
            if (!toast2.dismissible) return;
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
            toast: toast2,
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
        var setupSpringMotion = /* @__PURE__ */ __name((spring) => spring.mass(0.2).damping(15).stiffness(350).restDisplacementThreshold(0.1).restSpeedThreshold(0.1), "setupSpringMotion");
        return /* @__PURE__ */ jsx(import_react_native_gesture_handler.GestureDetector, {
          gesture: import_react_native_gesture_handler.Gesture.Simultaneous(pan, fling),
          children: /* @__PURE__ */ jsx(import_react_native_reanimated.default.View, {
            pointerEvents: "box-none",
            layout: import_react_native_reanimated.LinearTransition.springify(500).dampingRatio(0.5),
            // FadeInUp and FadeOutUp would be preferable here, but after Discord upgraded to Fabric Native Components,
            // they appear to cause no animation at all.
            entering: setupSpringMotion(import_react_native_reanimated.SlideInUp.springify()),
            exiting: setupSpringMotion(import_react_native_reanimated.SlideOutUp.springify()),
            children: /* @__PURE__ */ jsx(PressableScale_default, {
              pointerEvents: "box-none",
              disabled: !toast2.onPress,
              onPress: toast2.onPress,
              children: /* @__PURE__ */ jsx(import_react_native_reanimated.default.View, {
                layout: import_react_native_reanimated.LinearTransition.springify(500).dampingRatio(0.5),
                style: [animatedStyles, styles4.container, toast2.contentContainerStyle],
                children: /* @__PURE__ */ jsx(import_react_native31.View, {
                  style: styles4.contentContainer,
                  children: /* @__PURE__ */ jsx(ToastContentRenderer, {
                    toast: toast2
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
    GuildMemberStore: () => GuildMemberStore,
    GuildStore: () => GuildStore,
    MessageStore: () => MessageStore,
    PermissionStore: () => PermissionStore,
    RelationshipStore: () => RelationshipStore,
    SelectedChannelStore: () => SelectedChannelStore,
    SelectedGuildStore: () => SelectedGuildStore,
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
  var byStoreName, UserStore, ChannelStore, SelectedChannelStore, GuildStore, GuildMemberStore, SelectedGuildStore, RelationshipStore, MessageStore, DeveloperExperimentStore, ToastStore, PermissionStore, EmojiStore, ThemeStore;
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
      SelectedChannelStore = getStore("SelectedChannelStore", (m2) => SelectedChannelStore = m2);
      GuildStore = getStore("GuildStore", (m2) => GuildStore = m2);
      GuildMemberStore = getStore("GuildMemberStore", (m2) => GuildMemberStore = m2);
      SelectedGuildStore = getStore("SelectedGuildStore", (m2) => SelectedGuildStore = m2);
      RelationshipStore = getStore("RelationshipStore", (m2) => RelationshipStore = m2);
      MessageStore = getStore("MessageStore", (m2) => MessageStore = m2);
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
    return /* @__PURE__ */ jsx(import_react_native32.View, {
      style: {
        marginTop,
        gap: 4
      },
      children: [
        ...toasts
      ].reverse().map((toast2) => /* @__PURE__ */ jsx(Toast_default, {
        toast: toast2
      }, toast2.id))
    });
  }
  var import_react_native32, isDiscordToastActive;
  var init_ToastContainer = __esm({
    "src/plugins/_api/toasts/components/ToastContainer.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native32 = __toESM(require_react_native(), 1);
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
            patch(module3, patcher25) {
              patcher25.after(module3, "type", (_, res) => {
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

  // plugins-context-provider:#plugin-context#src/plugins/_api/flux/index.tsx
  var context2, meta2, definePlugin2, definePluginSettings2, logger6, patcher2;
  var init_flux2 = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/flux/index.tsx"() {
      init_shared();
      context2 = getPluginContext("flux");
      ({ meta: meta2, definePlugin: definePlugin2, definePluginSettings: definePluginSettings2, logger: logger6, patcher: patcher2 } = context2);
    }
  });

  // src/plugins/_api/flux/index.tsx
  var flux_exports2 = {};
  __export(flux_exports2, {
    default: () => flux_default
  });
  var flux_default;
  var init_flux3 = __esm({
    "src/plugins/_api/flux/index.tsx"() {
      "use strict";
      init_flux2();
      init_flux();
      init_constants();
      init_filters2();
      flux_default = definePlugin2({
        name: "FluxAPI",
        description: "Provides an API for intercepting Flux dispatches.",
        authors: [
          Devs.Blaze
        ],
        required: true,
        patches: [
          {
            id: "intercept-flux-dispatcher",
            target: byProps([
              "_interceptors"
            ]),
            patch(module3, patcher25) {
              var uninject = injectFluxInterceptor(module3);
              patcher25.attachDisposer(() => void uninject());
            }
          }
        ]
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/settings/index.tsx
  var context3, meta3, definePlugin3, definePluginSettings3, logger7, patcher3;
  var init_settings = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/settings/index.tsx"() {
      init_shared();
      context3 = getPluginContext("settings");
      ({ meta: meta3, definePlugin: definePlugin3, definePluginSettings: definePluginSettings3, logger: logger7, patcher: patcher3 } = context3);
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
      revision = "c1707e0dd70b48ce8486032ea2066490aac0c670";
      branch = "wallpapers";
      remote = "BlazeCordMod/BlazeCord";
      version = "0.1.4";
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
    var rnVer = import_react_native33.Platform.constants.reactNativeVersion;
    var rnBranch = hermesProps["OSS Release Version"].replace(/^for /, "");
    return {
      blaze: {
        shortRevision: revision.slice(0, 7),
        revision,
        branch,
        remote,
        version
      },
      discord: {
        version: NativeClientInfoModule.getConstants().Version,
        build: NativeClientInfoModule.getConstants().Build
      },
      hermes: {
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      react: {
        version: import_react17.default.version
      },
      reactNative: {
        version: `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`,
        branch: rnBranch
      }
    };
  }
  function getAndroidDebugInfo() {
    var PlatformConstants = import_react_native33.Platform.constants;
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
    var PlatformConstants = import_react_native33.Platform.constants;
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
      ...import_react_native33.Platform.select({
        android: getAndroidDebugInfo(),
        ios: getIOSDebugInfo()
      })
    };
  }
  var import_react17, import_react_native33;
  var init_info = __esm({
    "src/debug/info.ts"() {
      "use strict";
      init_build_info();
      init_native();
      import_react17 = __toESM(require_react(), 1);
      import_react_native33 = __toESM(require_react_native(), 1);
      __name(getVersions, "getVersions");
      __name(getAndroidDebugInfo, "getAndroidDebugInfo");
      __name(getIOSDebugInfo, "getIOSDebugInfo");
      __name(getDebugInfo, "getDebugInfo");
    }
  });

  // src/components/Blaze/Settings/pages/General/InfoCard.tsx
  var InfoCard_exports = {};
  __export(InfoCard_exports, {
    InfoCard: () => InfoCard
  });
  function InfoCard({ title, style, icon, tag, onPress, trailing }) {
    return /* @__PURE__ */ jsx(Card_default, {
      style,
      onPress,
      children: /* @__PURE__ */ jsxs(import_react_native34.View, {
        style: {
          gap: 8
        },
        children: [
          tag && /* @__PURE__ */ jsx(import_react_native34.View, {
            style: {
              position: "absolute",
              top: -28,
              right: -18
            },
            children: /* @__PURE__ */ jsx(Tag, {
              text: tag
            })
          }),
          /* @__PURE__ */ jsxs(import_react_native34.View, {
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
  var import_react_native34;
  var init_InfoCard = __esm({
    "src/components/Blaze/Settings/pages/General/InfoCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_Tag();
      import_react_native34 = __toESM(require_react_native(), 1);
      __name(InfoCard, "InfoCard");
    }
  });

  // src/components/Blaze/Settings/pages/General/ClientInfoSheet.tsx
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
    "src/components/Blaze/Settings/pages/General/ClientInfoSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_info();
      init_Discord();
      __name(ClientInfoSheet, "ClientInfoSheet");
    }
  });

  // src/utils/network/url.ts
  var url_exports = {};
  __export(url_exports, {
    openURL: () => openURL
  });
  function openURL(url) {
    import_react_native35.Linking.openURL(url);
  }
  var import_react_native35;
  var init_url = __esm({
    "src/utils/network/url.ts"() {
      "use strict";
      import_react_native35 = __toESM(require_react_native(), 1);
      __name(openURL, "openURL");
    }
  });

  // src/components/Blaze/Settings/pages/Updater/index.tsx
  var Updater_exports = {};
  __export(Updater_exports, {
    default: () => UpdaterPage
  });
  function UpdaterPage() {
    var { blaze } = getVersions();
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
    (0, import_react18.useEffect)(() => void check(), []);
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
              label: t3.blazecord(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: require_ic_blazecord()
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: `${blaze.version}-${blaze.shortRevision} (${blaze.branch})`
              })
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.updater.repo(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_github_light")
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: blaze.remote
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx(import_react_native36.View, {
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
  var import_react_native36, import_react18;
  var init_Updater = __esm({
    "src/components/Blaze/Settings/pages/Updater/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord();
      init_Button();
      init_PageWrapper();
      init_i18n();
      init_info();
      init_AlertModal();
      init_assets();
      import_react_native36 = __toESM(require_react_native(), 1);
      init_useUpdaterStore();
      init_useInitConfigStore();
      import_react18 = __toESM(require_react(), 1);
      __name(UpdaterPage, "UpdaterPage");
    }
  });

  // asset-loader:src/assets/paypal.png
  var require_paypal = __commonJS({
    "asset-loader:src/assets/paypal.png"(exports, module3) {
      init_libraries();
      module3.exports = AssetsRegistry.registerAsset({ "__blazecord": true, "__packager_asset": true, "width": 512, "height": 512, "httpServerLocation": "src/assets/paypal.png", "dataurl": "data:image/png;base64,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", "scales": [1], "name": "paypal.png", "type": "png" });
    }
  });

  // src/components/Blaze/Settings/pages/General/index.tsx
  var General_exports = {};
  __export(General_exports, {
    default: () => BlazeCordPage
  });
  function BlazeCordPage() {
    var navigation = NavigationNative.useNavigation();
    var { config, toggleSafeMode } = useInitConfigStore();
    var updateAvailable = useUpdaterStore((state2) => state2.availableUpdate);
    var { blaze, discord } = getVersions();
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        paddingTop: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native37.View, {
          style: {
            gap: 12
          },
          children: /* @__PURE__ */ jsxs(import_react_native37.View, {
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
                trailing: `${blaze.version}-${blaze.shortRevision}
(${blaze.branch})`,
                icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                  source: require_ic_blazecord()
                }),
                onPress: /* @__PURE__ */ __name(() => {
                  navigation.push("BLAZECORD_CUSTOM_PAGE", {
                    title: t3.blazecord(),
                    render: (init_Updater(), __toCommonJS(Updater_exports)).default
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
            onPress: /* @__PURE__ */ __name(() => navigation.push("BLAZECORD_CUSTOM_PAGE", {
              title: t3.settings.general.logs(),
              render: (init_Logs(), __toCommonJS(Logs_exports)).default
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
              label: t3.settings.general.paypal(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: require_paypal()
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.PAYPAL
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.PAYPAL}`), "onPress")
            })
          ]
        })
      ]
    });
  }
  var import_react_native37;
  var init_General = __esm({
    "src/components/Blaze/Settings/pages/General/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_PageWrapper();
      init_info();
      init_Discord();
      import_react_native37 = __toESM(require_react_native(), 1);
      init_dist();
      init_libraries();
      init_InfoCard();
      init_sheets();
      init_ClientInfoSheet();
      init_alerts();
      init_native();
      init_url();
      init_constants();
      init_useInitConfigStore();
      init_useUpdaterStore();
      __name(BlazeCordPage, "BlazeCordPage");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/TitleComponent.tsx
  var TitleComponent_exports = {};
  __export(TitleComponent_exports, {
    default: () => TitleComponent
  });
  function TitleComponent({ plugin }) {
    var styles4 = useStyles3();
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
    return /* @__PURE__ */ jsxs(import_react_native38.View, {
      style: {
        gap: 6,
        width: "80%"
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native38.View, {
          style: {
            gap: 4,
            flexDirection: "column-reverse"
          },
          children: [
            /* @__PURE__ */ jsx(import_react_native38.View, {
              children: /* @__PURE__ */ jsx(Text_default, {
                variant: "heading-xl/semibold",
                children: plugin.name
              })
            }),
            /* @__PURE__ */ jsx(import_react_native38.View, {
              style: {
                flexDirection: "row",
                flexShrink: 1
              },
              children: authors?.length && /* @__PURE__ */ jsxs(import_react_native38.View, {
                style: styles4.devsPill,
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
  var import_react_native38, showUserProfileActionSheet, useStyles3, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/components/Blaze/Settings/pages/Plugins/TitleComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native38 = __toESM(require_react_native(), 1);
      init_lazy();
      init_stores();
      init_wrappers();
      init_AvatarPile();
      init_Discord();
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

  // src/components/Blaze/Settings/pages/Plugins/common/index.tsx
  var common_exports = {};
  __export(common_exports, {
    NativeViewGestureHandler: () => NativeViewGestureHandler,
    RNGHScrollView: () => RNGHScrollView
  });
  var RNGestureHandlerModule, RNGHScrollView, NativeViewGestureHandler;
  var init_common = __esm({
    "src/components/Blaze/Settings/pages/Plugins/common/index.tsx"() {
      "use strict";
      init_lazy();
      init_wrappers();
      RNGestureHandlerModule = lookupByProps("NativeViewGestureHandler", "ScrollView").asLazy();
      RNGHScrollView = lazyValue(() => RNGestureHandlerModule.ScrollView);
      NativeViewGestureHandler = lazyValue(() => RNGestureHandlerModule.NativeViewGestureHandler);
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/common/usePluginSettings.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/common/usePluginSettings.tsx"() {
      "use strict";
      init_shallow3();
      init_usePluginStore();
      __name(usePluginSettings, "usePluginSettings");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/common/getIcon.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/common/getIcon.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord();
      __name(getIcon2, "getIcon");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/StringOptionRow.tsx
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
      label: /* @__PURE__ */ jsxs(import_react_native39.View, {
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
  var import_react_native39;
  var init_StringOptionRow = __esm({
    "src/components/Blaze/Settings/pages/Plugins/options/StringOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_getIcon();
      init_Discord();
      init_TextArea();
      init_TextInput();
      import_react_native39 = __toESM(require_react_native(), 1);
      __name(StringOptionRow, "StringOptionRow");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/BooleanOptionRow.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/options/BooleanOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_usePluginSettings();
      init_getIcon();
      __name(BooleanOptionRow, "BooleanOptionRow");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/BaseCardOption.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/options/BaseCardOption.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      __name(BaseCardOption, "BaseCardOption");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/SelectOptionRow.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/options/SelectOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord();
      init_BaseCardOption();
      init_getIcon();
      init_usePluginSettings();
      __name(SelectOptionRow, "SelectOptionRow");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/RadioOptionRow.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/options/RadioOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_BaseCardOption();
      init_getIcon();
      init_Discord();
      init_RedesignCompat();
      __name(RadioOptionRow, "RadioOptionRow");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/SliderOptionRow.tsx
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
        /* @__PURE__ */ jsx(import_react_native40.View, {
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
            startIcon: /* @__PURE__ */ jsx(import_react_native40.Pressable, {
              onPress: /* @__PURE__ */ __name(() => updateValue(currentIndex - 1), "onPress"),
              children: /* @__PURE__ */ jsx(CircleMinusIcon, {})
            }),
            endIcon: /* @__PURE__ */ jsx(import_react_native40.Pressable, {
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
  var import_react_native40;
  var init_SliderOptionRow = __esm({
    "src/components/Blaze/Settings/pages/Plugins/options/SliderOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native40 = __toESM(require_react_native(), 1);
      init_usePluginSettings();
      init_icons();
      init_Slider();
      init_Discord();
      __name(SliderRow, "SliderRow");
      __name(SliderOptionRow, "SliderOptionRow");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/options/OptionDefRow.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/options/OptionDefRow.tsx"() {
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

  // src/components/Blaze/Settings/pages/Plugins/options/OptionSection.tsx
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
      children: /* @__PURE__ */ jsx(import_react_native41.View, {
        style: {
          gap: 12
        },
        children: options.map((group, i2) => /* @__PURE__ */ jsx(import_react_native41.View, {
          children: group.map(([key, opt], i3) => /* @__PURE__ */ jsx(import_react_native41.View, {
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
  var import_react_native41;
  var init_OptionSection = __esm({
    "src/components/Blaze/Settings/pages/Plugins/options/OptionSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_utils2();
      init_InfoSection();
      import_react_native41 = __toESM(require_react_native(), 1);
      init_OptionDefRow();
      __name(getGroupedOptions, "getGroupedOptions");
      __name(OptionSection, "OptionSection");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/PluginDetailsSheet.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/PluginDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_common();
      init_Discord();
      init_BottomSheet();
      __name(PluginDetailsSheet, "PluginDetailsSheet");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/SheetAwareIconButton.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/SheetAwareIconButton.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_IconButton();
      init_sheets();
      __name(SheetAwareIconButton, "SheetAwareIconButton");
    }
  });

  // src/components/Blaze/Settings/pages/Plugins/PluginSheetComponent.tsx
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
          /* @__PURE__ */ jsxs(import_react_native42.View, {
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
          /* @__PURE__ */ jsx(import_react_native42.View, {
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
  var import_react_native42;
  var init_PluginSheetComponent = __esm({
    "src/components/Blaze/Settings/pages/Plugins/PluginSheetComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native42 = __toESM(require_react_native(), 1);
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

  // src/components/Blaze/Settings/pages/Plugins/index.tsx
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
    "src/components/Blaze/Settings/pages/Plugins/index.tsx"() {
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
  var import_react19, settings_default;
  var init_settings3 = __esm({
    "src/plugins/_api/settings/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_settings();
      init_settings2();
      init_Discord();
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
      settings_default = definePlugin3({
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
            patch(module3, patcher25) {
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
              patcher25.attachDisposer(() => {
                module3.SETTING_RENDERER_CONFIG = origRendererConfig;
              });
            }
          },
          {
            id: "overview-screen",
            target: byName("SettingsOverviewScreen", {
              returnEsmDefault: false
            }),
            patch(module3, patcher25) {
              patcher25.after(module3, "default", (_, ret) => {
                var node = findInReactTree(ret, (i2) => i2?.props?.sections);
                if (!node || !Array.isArray(node.props.sections)) {
                  logger7.warn("Failed to find settings sections in SettingsOverviewScreen");
                  return;
                }
                var alreadyInjected = _registeredSettingSections.every((custom) => node.props.sections.some((sec) => sec.label === custom.label));
                if (!alreadyInjected) {
                  node.props.sections.unshift(..._registeredSettingSections);
                }
              });
            }
          }
        ],
        start() {
          setImmediate(() => {
            registerSettingRenderer("BLAZECORD_CUSTOM_PAGE", {
              type: "route",
              title: /* @__PURE__ */ __name(() => "", "title"),
              unsearchable: true,
              screen: {
                route: "BLAZECORD_CUSTOM_PAGE",
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
                registerSettingRenderer("BLAZECORD", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.blazecord(), "title"),
                  IconComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(TableRow_default.Icon, {
                    source: require_ic_blazecord()
                  }), "IconComponent"),
                  useTrailing: /* @__PURE__ */ __name(() => {
                    var availableUpdate = useUpdaterStore((s) => s.availableUpdate);
                    if (availableUpdate) return /* @__PURE__ */ jsx(Tag, {
                      text: t3.updater.update_tag()
                    });
                    var { version: version2, branch: branch2 } = getVersions().blaze;
                    return `${version2}-(${branch2})`;
                  }, "useTrailing"),
                  screen: {
                    route: "BLAZECORD",
                    getComponent: /* @__PURE__ */ __name(() => (init_General(), __toCommonJS(General_exports)).default, "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZECORD_PLUGINS", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.plugins(), "title"),
                  IconComponent: PuzzlePieceIcon,
                  screen: {
                    route: "BLAZECORD_PLUGINS",
                    getComponent: /* @__PURE__ */ __name(() => (init_Plugins(), __toCommonJS(Plugins_exports)).default, "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZECORD_THEMES", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.themes(), "title"),
                  IconComponent: PaintPaletteIcon,
                  screen: {
                    route: "BLAZECORD_THEMES",
                    getComponent: /* @__PURE__ */ __name(() => (init_Themes(), __toCommonJS(Themes_exports)).default, "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZECORD_WALLPAPERS", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.wallpapers(), "title"),
                  IconComponent: ImageIcon,
                  screen: {
                    route: "BLAZECORD_WALLPAPERS",
                    getComponent: /* @__PURE__ */ __name(() => (init_Wallpapers(), __toCommonJS(Wallpapers_exports)).default, "getComponent")
                  }
                }),
                registerSettingRenderer("BLAZECORD_DEVELOPER", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.developer(), "title"),
                  IconComponent: WrenchIcon,
                  screen: {
                    route: "BLAZECORD_DEVELOPER",
                    getComponent: /* @__PURE__ */ __name(() => (init_Developer(), __toCommonJS(Developer_exports)).default, "getComponent")
                  }
                })
              ]
            });
          });
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/commands/index.ts
  var context4, meta4, definePlugin4, definePluginSettings4, logger8, patcher4;
  var init_commands = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/commands/index.ts"() {
      init_shared();
      context4 = getPluginContext("commands");
      ({ meta: meta4, definePlugin: definePlugin4, definePluginSettings: definePluginSettings4, logger: logger8, patcher: patcher4 } = context4);
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_api/commands/slash.ts
  var context5, meta5, definePlugin5, definePluginSettings5, logger9, patcher5;
  var init_slash = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_api/commands/slash.ts"() {
      init_shared();
      context5 = getPluginContext("commands");
      ({ meta: meta5, definePlugin: definePlugin5, definePluginSettings: definePluginSettings5, logger: logger9, patcher: patcher5 } = context5);
    }
  });

  // src/plugins/_api/commands/types.ts
  var ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType;
  var init_types = __esm({
    "src/plugins/_api/commands/types.ts"() {
      "use strict";
      ApplicationCommandInputType = /* @__PURE__ */ function(ApplicationCommandInputType2) {
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN"] = 0] = "BUILT_IN";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_TEXT"] = 1] = "BUILT_IN_TEXT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_INTEGRATION"] = 2] = "BUILT_IN_INTEGRATION";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BOT"] = 3] = "BOT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["PLACEHOLDER"] = 4] = "PLACEHOLDER";
        return ApplicationCommandInputType2;
      }({});
      ApplicationCommandOptionType = /* @__PURE__ */ function(ApplicationCommandOptionType2) {
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
        return ApplicationCommandOptionType2;
      }({});
      ApplicationCommandType = /* @__PURE__ */ function(ApplicationCommandType2) {
        ApplicationCommandType2[ApplicationCommandType2["CHAT"] = 1] = "CHAT";
        ApplicationCommandType2[ApplicationCommandType2["USER"] = 2] = "USER";
        ApplicationCommandType2[ApplicationCommandType2["MESSAGE"] = 3] = "MESSAGE";
        return ApplicationCommandType2;
      }({});
    }
  });

  // src/plugins/_api/commands/coms/debug.ts
  var debug_exports = {};
  __export(debug_exports, {
    default: () => debug_default
  });
  var debug_default;
  var init_debug = __esm({
    "src/plugins/_api/commands/coms/debug.ts"() {
      "use strict";
      init_types();
      init_info();
      init_libraries();
      debug_default = /* @__PURE__ */ __name(() => ({
        name: "debug",
        description: "Get your current runtime info.",
        options: [
          {
            name: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: "ephemeral"
          }
        ],
        execute([ephemeral], ctx) {
          var info = getDebugInfo();
          var content = [
            "**BlazeCord Debug Info**",
            `> BlazeCord: ${info.blaze.version} (${info.blaze.remote} ${info.blaze.branch})`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `> React: ${info.react.version} (Native: ${info.reactNative.version})`,
            `> Hermes: ${info.hermes.buildType} (ByteCodeVer: ${info.hermes.bytecodeVersion})`,
            `> System: ${info.os.name} ${info.os.version}`,
            `> Device: ${info.device.manufacturer} (${info.device.model}-${info.device.brand})`
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      }), "default");
    }
  });

  // src/plugins/_api/commands/coms/eval.ts
  var eval_exports = {};
  __export(eval_exports, {
    default: () => eval_default
  });
  function wrapInJSCodeblock(resString) {
    return "```js\n" + resString.replaceAll("`", "`" + ZERO_WIDTH_SPACE_CHARACTER) + "\n```";
  }
  var util2, AsyncFunction, ZERO_WIDTH_SPACE_CHARACTER, eval_default;
  var init_eval = __esm({
    "src/plugins/_api/commands/coms/eval.ts"() {
      "use strict";
      init_async_to_generator();
      init_types();
      init_libraries();
      init_wrappers();
      util2 = lookupByProps("inspect").asLazy();
      AsyncFunction = (() => _async_to_generator(function* () {
        return void 0;
      })()).constructor;
      ZERO_WIDTH_SPACE_CHARACTER = "\u200B";
      __name(wrapInJSCodeblock, "wrapInJSCodeblock");
      eval_default = /* @__PURE__ */ __name(() => ({
        name: "eval",
        description: "Run javascript code snippits.",
        options: [
          {
            name: "code",
            type: ApplicationCommandOptionType.STRING,
            description: "Code to execute.",
            required: true
          },
          {
            name: "async",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: "async"
          }
        ],
        execute(_0, _1) {
          return _async_to_generator(function* ([code, asyncFlag], ctx) {
            try {
              var res = util2.inspect(asyncFlag?.value ? yield AsyncFunction(code.value)() : eval?.(code.value));
              var trimmedRes = res.length > 2e3 ? res.slice(0, 2e3) + "..." : res;
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(trimmedRes));
            } catch (err) {
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(err?.stack ?? err));
            }
          }).apply(this, arguments);
        }
      }), "default");
    }
  });

  // src/plugins/_api/commands/coms/ping.ts
  var ping_exports = {};
  __export(ping_exports, {
    default: () => ping_default
  });
  var ping_default;
  var init_ping = __esm({
    "src/plugins/_api/commands/coms/ping.ts"() {
      "use strict";
      init_libraries();
      ping_default = /* @__PURE__ */ __name(() => ({
        name: "ping",
        displayName: "ping",
        description: "Pong!",
        options: [],
        execute(_, ctx) {
          messageUtil.sendMessage(ctx.channel.id, {
            content: "Pong! \u{1F3D3}"
          });
        }
      }), "default");
    }
  });

  // src/plugins/_api/commands/coms/stealth.ts
  var stealth_exports = {};
  __export(stealth_exports, {
    default: () => stealth_default
  });
  var stealth_default;
  var init_stealth = __esm({
    "src/plugins/_api/commands/coms/stealth.ts"() {
      "use strict";
      init_libraries();
      init_usePluginStore();
      stealth_default = /* @__PURE__ */ __name(() => ({
        name: "stealth",
        description: "Toggle Stealth Mode plugin state",
        options: [],
        execute(_, ctx) {
          var PLUGIN_ID = "Stealth Mode";
          var pluginStore = usePluginStore_default.getState();
          pluginStore.togglePlugin(PLUGIN_ID);
          var isEnabled = pluginStore.settings[PLUGIN_ID]?.enabled;
          messageUtil.sendBotMessage(ctx.channel.id, `Stealth Mode ${isEnabled ? "ENABLED" : "DISABLED"}`);
        }
      }), "default");
    }
  });

  // src/plugins/_api/commands/slash.ts
  function patchAppCommands() {
    var unpatch2 = patcher5.after(commands, "getBuiltInCommands", (args, res) => {
      var type = args[0];
      return [
        ...res,
        ...commands2.filter((c2) => (Array.isArray(type) ? type.includes(c2.type) : type === c2.type) && c2.__blaze?.shouldHide?.() !== false)
      ];
    });
    [
      (init_debug(), __toCommonJS(debug_exports)).default,
      (init_eval(), __toCommonJS(eval_exports)).default,
      (init_ping(), __toCommonJS(ping_exports)).default,
      (init_stealth(), __toCommonJS(stealth_exports)).default
    ].forEach((cmdFactory) => registerCommand(cmdFactory()));
    return () => {
      commands2 = [];
      unpatch2();
    };
  }
  function registerCommand(command) {
    var builtInCommands;
    try {
      builtInCommands = commands.getBuiltInCommands(ApplicationCommandType.CHAT, true, false);
    } catch (e3) {
      builtInCommands = commands.getBuiltInCommands(Object.values(ApplicationCommandType), true, false);
    }
    builtInCommands.sort((a, b) => parseInt(b.id) - parseInt(a.id));
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
    if (command.options) for (var opt of command.options) {
      opt.displayName ??= opt.name;
      opt.displayDescription ??= opt.description;
    }
    var originalExecute = command.execute;
    command.execute = function(args, ctx) {
      try {
        var result = originalExecute.call(command, args, ctx);
        if (result instanceof Promise) {
          result.then((ret) => {
            if (ret && typeof ret === "object") {
              messageUtil.sendMessage(ctx.channel.id, ret);
            }
          }).catch((err) => {
            blzlogger.error(`Command execution failed (sync): ${err}`);
          });
        } else if (result && typeof result === "object") {
          messageUtil.sendMessage(ctx.channel.id, result);
        }
      } catch (err) {
        blzlogger.error(`Command execution failed (sync): ${err}`);
      }
    };
    commands2.push(command);
    return () => {
      commands2 = commands2.filter((c2) => c2.id !== command.id);
    };
  }
  var commands2;
  var init_slash2 = __esm({
    "src/plugins/_api/commands/slash.ts"() {
      "use strict";
      init_slash();
      init_logger();
      init_libraries();
      init_types();
      commands2 = [];
      __name(patchAppCommands, "patchAppCommands");
      __name(registerCommand, "registerCommand");
    }
  });

  // src/plugins/_api/commands/index.ts
  var commands_exports = {};
  __export(commands_exports, {
    default: () => commands_default
  });
  var commands_default;
  var init_commands2 = __esm({
    "src/plugins/_api/commands/index.ts"() {
      "use strict";
      init_commands();
      init_constants();
      init_modules();
      init_filters2();
      init_slash2();
      commands_default = definePlugin4({
        name: "Commands",
        description: "Add slash command api to BlazeCord",
        authors: [
          Devs.Blaze
        ],
        required: true,
        start() {
          waitFor(byProps([
            "getBuiltInCommands"
          ]), () => {
            patchAppCommands();
          });
        },
        cleanup() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/expressions/index.tsx
  var context6, meta6, definePlugin6, definePluginSettings6, logger10, patcher6;
  var init_expressions = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/expressions/index.tsx"() {
      init_shared();
      context6 = getPluginContext("expressions");
      ({ meta: meta6, definePlugin: definePlugin6, definePluginSettings: definePluginSettings6, logger: logger10, patcher: patcher6 } = context6);
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

  // src/plugins/expressions/common.ts
  var CustomEmojiContent, MessageReactionsContent, GuildIcon, MessageEmojiActionSheet, MediaViewer, Surrogates, EmojiActionCreators;
  var init_common2 = __esm({
    "src/plugins/expressions/common.ts"() {
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

  // src/plugins/expressions/stores/useEmojiAdderStore.ts
  var useEmojiAdderStore;
  var init_useEmojiAdderStore = __esm({
    "src/plugins/expressions/stores/useEmojiAdderStore.ts"() {
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

  // src/plugins/expressions/components/UploadStatusView.tsx
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
    var styles4 = useStyles4();
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
      style: styles4.container,
      children: [
        status === "pending" && /* @__PURE__ */ jsxs(import_react_native43.View, {
          style: styles4.rowContainer,
          children: [
            /* @__PURE__ */ jsx(import_react_native43.ActivityIndicator, {
              size: "small"
            }),
            /* @__PURE__ */ jsx(Text_default, {
              variant: "text-lg/semibold",
              children: "Uploading emoji..."
            })
          ]
        }),
        status === "success" && /* @__PURE__ */ jsxs(import_react_native43.View, {
          style: styles4.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native43.View, {
              style: styles4.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native43.Image, {
                  source: findAssetId("CheckmarkLargeBoldIcon"),
                  style: styles4.checkmarkIcon
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-lg/semibold",
                  children: "Upload Successful"
                })
              ]
            }),
            emojiNode && /* @__PURE__ */ jsxs(import_react_native43.View, {
              style: styles4.rowContainer,
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
                /* @__PURE__ */ jsx(import_react_native43.Image, {
                  source: {
                    uri: emojiNode.src
                  },
                  style: styles4.emojiImage
                }),
                /* @__PURE__ */ jsx(ToastText, {
                  children: customAlt && customAlt !== emojiNode.alt ? `:${customAlt}: (${emojiNode.alt})` : `:${emojiNode.alt}:`
                })
              ]
            })
          ]
        }),
        status === "error" && error != null && /* @__PURE__ */ jsxs(import_react_native43.View, {
          style: styles4.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native43.View, {
              style: styles4.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native43.Image, {
                  source: findAssetId("XLargeBoldIcon"),
                  style: styles4.xIcon
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
  var import_react_native43, import_react_native_reanimated2, useStyles4;
  var init_UploadStatusView = __esm({
    "src/plugins/expressions/components/UploadStatusView.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      import_react_native43 = __toESM(require_react_native(), 1);
      import_react_native_reanimated2 = __toESM(require_react_native_reanimated(), 1);
      init_common2();
      init_shallow3();
      init_useEmojiAdderStore();
      init_isError();
      init_assets();
      init_icons();
      init_stores();
      init_Discord();
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

  // src/plugins/expressions/utils/useSlots.tsx
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
    "src/plugins/expressions/utils/useSlots.tsx"() {
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

  // src/plugins/expressions/components/ServerRow.tsx
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
        import_react_native44.Keyboard.dismiss();
        uploadEmoji(guild.id, emojiNode);
      }, "onPress"),
      start,
      end
    });
  }
  var import_react_native44;
  var init_ServerRow = __esm({
    "src/plugins/expressions/components/ServerRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native44 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_shallow3();
      init_common2();
      init_useSlots();
      init_Discord();
      __name(ServerRow, "ServerRow");
    }
  });

  // src/plugins/expressions/components/EmoteStealerActionSheet.tsx
  function EmoteStealerActionSheet({ emojiNode }) {
    var customAlt = useEmojiAdderStore((s) => s.customAlt);
    var guilds = Object.values(GuildStore.getGuilds()).filter((guild) => PermissionStore.can(constants.Permissions.MANAGE_GUILD_EXPRESSIONS, guild));
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      contentStyles: {
        paddingHorizontal: 16
      },
      children: /* @__PURE__ */ jsxs(import_react_native45.ScrollView, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(import_react_native45.View, {
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
                /* @__PURE__ */ jsx(import_react_native45.Image, {
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
            ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native45.View, {
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
  var import_react_native45, import_flash_list5;
  var init_EmoteStealerActionSheet = __esm({
    "src/plugins/expressions/components/EmoteStealerActionSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native45 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_ServerRow();
      init_stores();
      import_flash_list5 = __toESM(require_flash_list(), 1);
      init_BottomSheet();
      init_Discord();
      init_libraries();
      __name(EmoteStealerActionSheet, "EmoteStealerActionSheet");
    }
  });

  // src/plugins/expressions/components/StealButtons.tsx
  function StealButtons({ emojiNode, style }) {
    return /* @__PURE__ */ jsxs(import_react_native46.View, {
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
  var import_react_native46;
  var init_StealButtons = __esm({
    "src/plugins/expressions/components/StealButtons.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_sheets();
      import_react_native46 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_clipboard();
      init_EmoteStealerActionSheet();
      init_Button();
      __name(StealButtons, "StealButtons");
    }
  });

  // src/plugins/expressions/utils/openMediaModal.tsx
  function getSizeAsync(src) {
    return new Promise((resolve, reject) => {
      import_react_native47.Image.getSize(src, (width, height) => {
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
      var { width: screenWidth2, height: screenHeight2 } = import_react_native47.Dimensions.get("window");
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
          x: screenWidth2 / 2 - 64,
          y: screenHeight2 - 64,
          resizeMode: "fill"
        }
      });
    })();
  }
  var import_react_native47;
  var init_openMediaModal = __esm({
    "src/plugins/expressions/utils/openMediaModal.tsx"() {
      "use strict";
      init_async_to_generator();
      init_sheets();
      import_react_native47 = __toESM(require_react_native(), 1);
      init_common2();
      __name(getSizeAsync, "getSizeAsync");
      __name(openMediaModal, "openMediaModal");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/expressions/utils/openEmojiActionSheet.tsx
  var context7, meta7, definePlugin7, definePluginSettings7, logger11, patcher7;
  var init_openEmojiActionSheet = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/expressions/utils/openEmojiActionSheet.tsx"() {
      init_shared();
      context7 = getPluginContext("expressions");
      ({ meta: meta7, definePlugin: definePlugin7, definePluginSettings: definePluginSettings7, logger: logger11, patcher: patcher7 } = context7);
    }
  });

  // src/plugins/expressions/utils/openEmojiActionSheet.tsx
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
      logger11.error(`Failed to open emoji action sheet: ${err}`);
    }
  }
  var init_openEmojiActionSheet2 = __esm({
    "src/plugins/expressions/utils/openEmojiActionSheet.tsx"() {
      "use strict";
      init_sheets();
      init_common2();
      init_openEmojiActionSheet();
      __name(openEmojiActionSheet, "openEmojiActionSheet");
    }
  });

  // src/plugins/expressions/index.tsx
  var expressions_exports = {};
  __export(expressions_exports, {
    default: () => expressions_default
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
  var import_react21, expressions_default;
  var init_expressions2 = __esm({
    "src/plugins/expressions/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_expressions();
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
      expressions_default = definePlugin6({
        name: "Better Expressions",
        description: "Copy, clone, and upload emojis & stickers",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "emoji-sheet",
            target: byFilePath("modules/messages/native/emoji/CustomEmojiContent.tsx", {
              returnEsmDefault: false
            }),
            patch(module3, patcher25) {
              patcher25.after(module3, "default", ([{ emojiNode }], res) => {
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
            patch(module3, patcher25) {
              patcher25.after(module3, "MessageReactionsContent", (_, { props }) => {
                var unpatchReactionsHeader = patcher25.detached.after(props.header, "type", (_2, res) => {
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
                    logger10.error`Failed to patch reaction header: ${e3}`;
                  }
                });
              });
            }
          }
        ],
        start() {
          patcher6.attachDisposer(useEmojiAdderStore.subscribe((s, p2) => {
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

  // plugins-context-provider:#plugin-context#src/plugins/silent-typing/index.ts
  var context8, meta8, definePlugin8, definePluginSettings8, logger12, patcher8;
  var init_silent_typing = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/silent-typing/index.ts"() {
      init_shared();
      context8 = getPluginContext("silent-typing");
      ({ meta: meta8, definePlugin: definePlugin8, definePluginSettings: definePluginSettings8, logger: logger12, patcher: patcher8 } = context8);
    }
  });

  // src/plugins/silent-typing/index.ts
  var silent_typing_exports = {};
  __export(silent_typing_exports, {
    default: () => silent_typing_default
  });
  var toast, silent_typing_default;
  var init_silent_typing2 = __esm({
    "src/plugins/silent-typing/index.ts"() {
      "use strict";
      init_silent_typing();
      init_toasts();
      init_constants();
      toast = showToast("Currently Typing...").hide();
      silent_typing_default = definePlugin8({
        name: "Stealth Mode",
        description: 'Prevents you from showing "is typing...".',
        authors: [
          Devs.Blaze
        ],
        flux: {
          TYPING_START_LOCAL: /* @__PURE__ */ __name(() => {
            return false;
          }, "TYPING_START_LOCAL")
        }
      });
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

  // plugins-context-provider:#plugin-context#src/plugins/spaces-in-channels/index.ts
  var context9, meta9, definePlugin9, definePluginSettings9, logger13, patcher9;
  var init_spaces_in_channels = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/spaces-in-channels/index.ts"() {
      init_shared();
      context9 = getPluginContext("spaces-in-channels");
      ({ meta: meta9, definePlugin: definePlugin9, definePluginSettings: definePluginSettings9, logger: logger13, patcher: patcher9 } = context9);
    }
  });

  // src/plugins/spaces-in-channels/index.ts
  var spaces_in_channels_exports = {};
  __export(spaces_in_channels_exports, {
    default: () => spaces_in_channels_default
  });
  var View32, traverseAndModify, unpatchRender, spaces_in_channels_default;
  var init_spaces_in_channels2 = __esm({
    "src/plugins/spaces-in-channels/index.ts"() {
      "use strict";
      init_libraries();
      init_patcher2();
      init_spaces_in_channels();
      init_constants();
      ({ View: View32 } = ReactNative2);
      traverseAndModify = /* @__PURE__ */ __name((node) => {
        if (typeof node === "string") {
          return node.replace(/-/g, " ");
        }
        if (Array.isArray(node)) {
          return node.map(traverseAndModify);
        }
        if (node && typeof node === "object" && node.props && node.props.children) {
          return {
            ...node,
            props: {
              ...node.props,
              children: traverseAndModify(node.props.children)
            }
          };
        }
        return node;
      }, "traverseAndModify");
      spaces_in_channels_default = definePlugin9({
        name: "Channel Spaces",
        description: "Turns dashes in text channels into spaces.",
        authors: [
          Devs.Blaze
        ],
        start() {
          unpatchRender = after(View32, "render", (_, res) => {
            return traverseAndModify(res);
          });
        },
        cleanup() {
          unpatchRender?.();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/nitro-emojis/index.ts
  var context10, meta10, definePlugin10, definePluginSettings10, logger14, patcher10;
  var init_nitro_emojis = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/nitro-emojis/index.ts"() {
      init_shared();
      context10 = getPluginContext("nitro-emojis");
      ({ meta: meta10, definePlugin: definePlugin10, definePluginSettings: definePluginSettings10, logger: logger14, patcher: patcher10 } = context10);
    }
  });

  // src/plugins/nitro-emojis/parse.ts
  function modifyIfNeeded(msg, haveNitro2, settings4) {
    if (!msg?.content?.match(/<a?:(\w+):(\d+)>/)) return;
    var { emojiSize, forceMoji, hyperlink } = settings4.get();
    if (!forceMoji && haveNitro2) return;
    var currentGuildId = GuildStore2.getLastSelectedGuildId?.();
    msg.content = msg.content.replace(/<(a?):(\w+):(\d+)>/gi, (match, animatedFlag, name, id) => {
      if (currentGuildId && match.includes(currentGuildId)) return match;
      var ext = animatedFlag === "a" ? "gif" : "webp";
      var url = `https://cdn.discordapp.com/emojis/${id}.${ext}?size=${emojiSize}&quality=lossless`;
      return hyperlink ? `[${name}](${url})` : url;
    });
    msg.invalidEmojis = [];
  }
  var GuildStore2;
  var init_parse = __esm({
    "src/plugins/nitro-emojis/parse.ts"() {
      "use strict";
      init_stores();
      GuildStore2 = getStore("GuildStore");
      __name(modifyIfNeeded, "modifyIfNeeded");
    }
  });

  // src/plugins/nitro-emojis/realshit.ts
  function patchRealmoji(module3, patcher25, getSetting) {
    var { getCustomEmojiById } = getStore("EmojiStore");
    patcher25.before(module3.prototype, "generate", ([data]) => {
      if (!getSetting()) return;
      if (data.rowType !== 1) return;
      var content = data.message.content;
      if (typeof content !== "string" || !content.length) return;
      var matchIndex = content.match(emojiRegex)?.index;
      if (matchIndex === void 0) return;
      var emojis = content.slice(matchIndex).trim().split("\n");
      if (!emojis.every((s) => emojiRegex.test(s))) return;
      content = content.slice(0, matchIndex);
      while (content.includes("  ")) {
        content = content.replace("  ", ` ${emojis.shift()} `);
      }
      content = content.trim();
      if (emojis.length > 0) content += ` ${emojis.join(" ")}`;
      var embeds = data.message.embeds;
      for (var i2 = 0; i2 < embeds.length; i2++) {
        var embed = embeds[i2];
        if (embed.type === "image" && emojiRegex.test(embed.url)) {
          embeds.splice(i2--, 1);
        }
      }
      data.message.content = content;
      data.__realshit = true;
    });
    patcher25.after(module3.prototype, "generate", ([data], row) => {
      if (!getSetting()) return;
      if (data.rowType !== 1 || data.__realshit !== true) return;
      var content = row.message?.content;
      if (!Array.isArray(content)) return;
      var jumbo = content.every((c2) => c2.type === "link" && emojiRegex.test(c2.target) || c2.type === "text" && c2.content === " ");
      for (var i2 = 0; i2 < content.length; i2++) {
        var el = content[i2];
        if (el.type !== "link") continue;
        var match = el.target.match(emojiRegex);
        if (!match) continue;
        var id = match[1];
        var url = `${match[0]}?size=128`;
        var emoji = getCustomEmojiById(id);
        content[i2] = {
          type: "customEmoji",
          id,
          alt: emoji?.name ?? "<BlazeWuzHere>",
          src: url,
          frozenSrc: url.replace("gif", "webp"),
          jumboable: jumbo ? true : void 0
        };
      }
    });
  }
  var emojiRegex;
  var init_realshit = __esm({
    "src/plugins/nitro-emojis/realshit.ts"() {
      "use strict";
      init_stores();
      emojiRegex = /https:\/\/cdn.discordapp.com\/emojis\/(\d+)\.\w+/;
      __name(patchRealmoji, "patchRealmoji");
    }
  });

  // src/plugins/nitro-emojis/index.ts
  var nitro_emojis_exports = {};
  __export(nitro_emojis_exports, {
    default: () => nitro_emojis_default
  });
  var settings, haveNitro, nitro_emojis_default;
  var init_nitro_emojis2 = __esm({
    "src/plugins/nitro-emojis/index.ts"() {
      "use strict";
      init_nitro_emojis();
      init_filters2();
      init_stores();
      init_modules();
      init_constants();
      init_parse();
      init_realshit();
      settings = definePluginSettings10({
        emojiSize: {
          type: "slider",
          label: "Display Size",
          points: [
            16,
            32,
            48,
            56,
            64,
            96,
            128,
            256
          ],
          default: 48
        },
        hyperlink: {
          type: "boolean",
          label: "Hyperlink Emoji's",
          description: "Use markdown links for emoji [EmojiName](URL)",
          default: true
        },
        realshit: {
          type: "boolean",
          label: "Blazed Emoji's",
          description: "Render spoofed emoji as real within BlazeCord.",
          default: true
        },
        forceMoji: {
          type: "boolean",
          label: "Override Nitro",
          description: "Use spoofed emojis even if user has real Nitro.",
          default: false
        }
      });
      haveNitro = false;
      nitro_emojis_default = definePlugin10({
        name: "Unlock Nitro Emoji's",
        description: "Unlocks all emoji's by spoofing Nitro.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "fuck-nitro-checks",
            target: byProps([
              "canUseEmojisEverywhere",
              "canUseAnimatedEmojis"
            ]),
            patch(module3, patcher25) {
              patcher25.instead(module3, "canUseEmojisEverywhere", () => true);
              patcher25.instead(module3, "canUseAnimatedEmojis", () => true);
            }
          },
          {
            id: "hook-message",
            target: byProps([
              "sendMessage",
              "receiveMessage"
            ]),
            patch(module3, patcher25) {
              patcher25.before(module3, "sendMessage", ([, msg]) => {
                haveNitro = getStore("UserStore").getCurrentUser()?.premiumType != null;
                modifyIfNeeded(msg, haveNitro, settings);
              });
            }
          },
          {
            id: "hook-upload",
            target: byProps([
              "uploadLocalFiles"
            ]),
            patch(module3, patcher25) {
              patcher25.before(module3, "uploadLocalFiles", ([uploadArgs]) => {
                haveNitro = getStore("UserStore").getCurrentUser()?.premiumType != null;
                modifyIfNeeded(uploadArgs?.parsedMessage, haveNitro, settings);
              });
            }
          },
          {
            id: "render-real-emojis",
            target: byName("RowManager"),
            patch(module3, patcher25) {
              patchRealmoji(module3, patcher25, () => settings.get().realshit);
            }
          }
        ],
        start() {
          settings.subscribe((state2) => state2, (newState) => {
            console.log("[NitroMoji] Settings changed:", newState);
          });
          waitFor(byStoreName("UserStore"), (UserStore2) => {
            var user = UserStore2.getCurrentUser?.();
            haveNitro = user?.premiumType != null;
          });
        },
        cleanup() {
          settings.unsubscribeAll();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/nitro-icons/index.ts
  var context11, meta11, definePlugin11, definePluginSettings11, logger15, patcher11;
  var init_nitro_icons = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/nitro-icons/index.ts"() {
      init_shared();
      context11 = getPluginContext("nitro-icons");
      ({ meta: meta11, definePlugin: definePlugin11, definePluginSettings: definePluginSettings11, logger: logger15, patcher: patcher11 } = context11);
    }
  });

  // src/plugins/nitro-icons/index.ts
  var nitro_icons_exports = {};
  __export(nitro_icons_exports, {
    default: () => nitro_icons_default
  });
  var originalFreemiumAppIconIds, nitro_icons_default;
  var init_nitro_icons2 = __esm({
    "src/plugins/nitro-icons/index.ts"() {
      "use strict";
      init_nitro_icons();
      init_filters2();
      init_toasts();
      init_constants();
      nitro_icons_default = definePlugin11({
        name: "Unlock Nitro AppIcons",
        description: "Unlocks all AppIcons by spoofing Nitro.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "hack-app-icons",
            target: byProps([
              "getOfficialAlternateIcons",
              "getIcons",
              "getIconById"
            ]),
            patch(module3, patcher25) {
              var altIcons = module3.getOfficialAlternateIcons();
              var mainIcons = module3.getIcons();
              altIcons.forEach((icon) => {
                icon.isPremium = false;
              });
              mainIcons.forEach((icon) => {
                icon.isPremium = false;
              });
              patcher25.instead(module3, "getIcons", () => mainIcons);
              patcher25.instead(module3, "getOfficialAlternateIcons", () => altIcons);
              patcher25.after(module3, "getIconById", (_args, ret) => {
                ret.isPremium = false;
                return ret;
              });
            }
          },
          {
            id: "hack-icon-ids",
            target: byProps([
              "FreemiumAppIconIds",
              "MasterAppIconIds"
            ]),
            patch(module3) {
              originalFreemiumAppIconIds = module3.FreemiumAppIconIds;
              module3.FreemiumAppIconIds = module3.MasterAppIconIds;
            }
          }
        ],
        start() {
          if (!globalThis.__appIconUnlockerActive) {
            showToast("\u{1F3A8} App Icons Unlocked");
            globalThis.__appIconUnlockerActive = true;
          }
        },
        cleanup() {
          var idModule = (init_filters(), __toCommonJS(filters_exports)).lookup(byProps([
            "FreemiumAppIconIds",
            "MasterAppIconIds"
          ]));
          if (originalFreemiumAppIconIds != null) {
            idModule.FreemiumAppIconIds = originalFreemiumAppIconIds;
          }
          delete globalThis.__appIconUnlockerActive;
          showToast("\u{1F512} App Icons Restored");
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/nitro-themes/index.ts
  var context12, meta12, definePlugin12, definePluginSettings12, logger16, patcher12;
  var init_nitro_themes = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/nitro-themes/index.ts"() {
      init_shared();
      context12 = getPluginContext("nitro-themes");
      ({ meta: meta12, definePlugin: definePlugin12, definePluginSettings: definePluginSettings12, logger: logger16, patcher: patcher12 } = context12);
    }
  });

  // src/plugins/nitro-themes/index.ts
  var nitro_themes_exports = {};
  __export(nitro_themes_exports, {
    default: () => nitro_themes_default
  });
  var nitro_themes_default;
  var init_nitro_themes2 = __esm({
    "src/plugins/nitro-themes/index.ts"() {
      "use strict";
      init_nitro_themes();
      init_filters2();
      init_stores();
      init_constants();
      nitro_themes_default = definePlugin12({
        name: "Unlock Nitro Themes",
        description: "Unlocks all built-in themes by spoofing Nitro.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "no-sync",
            target: byProps([
              "setShouldSyncAppearanceSettings"
            ]),
            patch(module3, patcher25) {
              module3.setShouldSyncAppearanceSettings(false);
              patcher25.instead(module3, "setShouldSyncAppearanceSettings", () => false);
            }
          },
          {
            id: "hack-client-themes",
            target: byProps([
              "canUseClientThemes"
            ]),
            patch(module3, patcher25) {
              patcher25.instead(module3, "canUseClientThemes", () => true);
            }
          },
          {
            id: "force-client-theme-experiment",
            target: byStoreName("ExperimentStore"),
            patch(module3, patcher25) {
              patcher25.after(module3, "getUserExperimentDescriptor", ([expName], res) => {
                if (expName === "2023-02_client_themes_mobile" && res?.bucket) {
                  return {
                    type: "user",
                    revision: 1,
                    population: 0,
                    bucket: 1,
                    override: true
                  };
                }
              });
            }
          }
        ],
        start() {
          var FluxDispatcher2 = (init_filters(), __toCommonJS(filters_exports)).lookup(byProps([
            "dispatch",
            "subscribe"
          ]));
          var UserSettingsProtoStore = (init_filters(), __toCommonJS(filters_exports)).lookup(byStoreName("UserSettingsProtoStore"));
          var savedTheme = UserSettingsProtoStore?.settings?.appearance?.theme;
          var savedPresetId = UserSettingsProtoStore?.settings?.appearance?.clientThemeSettings?.backgroundGradientPresetId?.value;
          if (savedTheme || savedPresetId) {
            FluxDispatcher2.dispatch({
              type: "USER_SETTINGS_PROTO_UPDATE",
              local: true,
              partial: true,
              settings: {
                type: 1,
                proto: {
                  appearance: {
                    ...savedTheme && {
                      theme: savedTheme
                    },
                    ...savedPresetId && {
                      clientThemeSettings: {
                        backgroundGradientPresetId: {
                          value: savedPresetId
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        },
        cleanup() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/experiments/index.ts
  var context13, meta13, definePlugin13, definePluginSettings13, logger17, patcher13;
  var init_experiments = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/experiments/index.ts"() {
      init_shared();
      context13 = getPluginContext("experiments");
      ({ meta: meta13, definePlugin: definePlugin13, definePluginSettings: definePluginSettings13, logger: logger17, patcher: patcher13 } = context13);
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
      var unpatch2 = patcher13.detached.instead(Object, "defineProperties", () => {
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
      experiments_default = definePlugin13({
        name: "Experiments",
        description: "Allows overriding Discord experiments.",
        authors: [
          Devs.Blaze
        ],
        patches: [
          {
            id: "is-staff-env",
            target: byProps([
              "isStaffEnv"
            ]),
            patch(module3, patcher25) {
              patcher25.instead(module3, "isStaffEnv", ([user]) => {
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
  var context14, meta14, definePlugin14, definePluginSettings14, logger18, patcher14;
  var init_chat_bubbles = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/chat-bubbles/index.ts"() {
      init_shared();
      context14 = getPluginContext("chat-bubbles");
      ({ meta: meta14, definePlugin: definePlugin14, definePluginSettings: definePluginSettings14, logger: logger18, patcher: patcher14 } = context14);
    }
  });

  // src/loader/modules/BubbleModule.ts
  var BubbleModule_exports = {};
  __export(BubbleModule_exports, {
    default: () => BubbleModule_default
  });
  var import_react_native48, BubbleModule_default;
  var init_BubbleModule = __esm({
    "src/loader/modules/BubbleModule.ts"() {
      "use strict";
      import_react_native48 = __toESM(require_react_native(), 1);
      init_loader();
      BubbleModule_default = getModule({
        name: "BubbleModule",
        argumentProcessors: {
          configure: /* @__PURE__ */ __name((args) => [
            args[0],
            args[1],
            Number((0, import_react_native48.processColor)(args[2]))
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
  var settings2, chat_bubbles_default;
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
      settings2 = definePluginSettings14({
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
          description: "Bubble Color as #RRGGBBAA. (default: BG_BASE_TERTIARY)",
          validate: /* @__PURE__ */ __name((value) => /^#[0-9A-Fa-f]{8}$/.test(value), "validate")
        }
      });
      chat_bubbles_default = definePlugin14({
        name: "Chat Tweaks",
        description: "Adds custom message bubbles & avatars in chat.",
        authors: [
          Devs.Blaze
        ],
        start() {
          BubbleModule_default.hookBubbles();
          var getBubbleColor = /* @__PURE__ */ __name(() => {
            var userColor = settings2.get().bubbleChatColor;
            if (userColor) return userColor;
            var token = tokens.colors.BG_BASE_TERTIARY;
            return tokens.internal.resolveSemanticColor(ThemeStore.theme, token);
          }, "getBubbleColor");
          var updateBubbleAppearance = /* @__PURE__ */ __name(() => {
            var { avatarRadius, bubbleChatRadius } = settings2.get();
            var color = getBubbleColor();
            BubbleModule_default.configure(avatarRadius, bubbleChatRadius, color).catch(logger18.error);
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
          settings2.subscribe((s) => [
            s.avatarRadius,
            s.bubbleChatRadius,
            s.bubbleChatColor
          ], () => updateBubbleAppearance(), {
            equalityFn: shallow
          });
        },
        cleanup() {
          BubbleModule_default.unhookBubbles();
          settings2.unsubscribeAll();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/error-boundary/index.tsx
  var context15, meta15, definePlugin15, definePluginSettings15, logger19, patcher15;
  var init_error_boundary = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/error-boundary/index.tsx"() {
      init_shared();
      context15 = getPluginContext("error-boundary");
      ({ meta: meta15, definePlugin: definePlugin15, definePluginSettings: definePluginSettings15, logger: logger19, patcher: patcher15 } = context15);
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
    return /* @__PURE__ */ jsxs(import_react_native49.View, {
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
          icon: /* @__PURE__ */ jsx(import_react_native49.Image, {
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
          icon: /* @__PURE__ */ jsx(import_react_native49.Image, {
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
  var import_react_native49;
  var init_CollapsibleHandler = __esm({
    "src/plugins/_core/error-boundary/CollapsibleHandler.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Button();
      init_i18n();
      init_assets();
      init_Discord2();
      import_react_native49 = __toESM(require_react_native(), 1);
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
      children: /* @__PURE__ */ jsxs(import_react_native50.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.component_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native50.View, {
            style: {
              gap: 4
            },
            children: stack.map((component, index) => /* @__PURE__ */ jsxs(import_react_native50.View, {
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
  var import_react22, import_react_native50;
  var init_ErrorComponentStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_parseComponentStack();
      import_react22 = __toESM(require_react(), 1);
      import_react_native50 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_clipboard();
      init_Discord();
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
      children: /* @__PURE__ */ jsxs(import_react_native51.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.call_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native51.View, {
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
    return /* @__PURE__ */ jsxs(import_react_native51.Pressable, {
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
  var import_react23, import_react_native51;
  var init_ErrorStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_ErrorCard();
      init_parseErrorStack();
      import_react23 = __toESM(require_react(), 1);
      import_react_native51 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_i18n();
      init_clipboard();
      init_Discord();
      init_libraries();
      __name(ErrorStackCard, "ErrorStackCard");
      __name(Line, "Line");
    }
  });

  // src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles4 = useStyles5();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(SafeAreaProvider, {
      children: /* @__PURE__ */ jsxs(SafeAreaView, {
        style: styles4.container,
        children: [
          /* @__PURE__ */ jsxs(import_react_native52.View, {
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
                  debugInfo.blaze.version,
                  " ",
                  debugInfo.blaze.shortRevision
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native52.ScrollView, {
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
  var import_react_native52, useStyles5;
  var init_ErrorBoundaryScreen = __esm({
    "src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      init_i18n();
      init_native();
      init_isError();
      import_react_native52 = __toESM(require_react_native(), 1);
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      init_info();
      init_Button();
      init_Discord();
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
      error_boundary_default = definePlugin15({
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
            patch(module3, patcher25) {
              patcher25.after(module3.prototype, "render", function() {
                var { state: { error } } = this;
                if (!error) return null;
                logger19.error(error.stack);
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
          patcher15.after.async(jsxRuntime2, "jsx", callback);
          patcher15.after.async(jsxRuntime2, "jsxs", callback);
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/wallpapers/index.ts
  var context16, meta16, definePlugin16, definePluginSettings16, logger20, patcher16;
  var init_wallpapers = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/wallpapers/index.ts"() {
      init_shared();
      context16 = getPluginContext("wallpapers");
      ({ meta: meta16, definePlugin: definePlugin16, definePluginSettings: definePluginSettings16, logger: logger20, patcher: patcher16 } = context16);
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/wallpapers/patches/background.tsx
  var context17, meta17, definePlugin17, definePluginSettings17, logger21, patcher17;
  var init_background = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/wallpapers/patches/background.tsx"() {
      init_shared();
      context17 = getPluginContext("wallpapers");
      ({ meta: meta17, definePlugin: definePlugin17, definePluginSettings: definePluginSettings17, logger: logger21, patcher: patcher17 } = context17);
    }
  });

  // src/plugins/_core/wallpapers/patches/background.tsx
  function getFallbackThemeBackground() {
    var state2 = useThemeStore.getState();
    var theme = state2.themes.find((t4) => t4.id === state2.appliedTheme);
    return theme?.main.background;
  }
  function ThemeBackground({ children }) {
    var { appliedWallpaper, followTheme } = useWallpaperStore.getState();
    var bg = !followTheme && appliedWallpaper ? appliedWallpaper : getFallbackThemeBackground();
    if (!bg?.image || bg.image === "hidden") return /* @__PURE__ */ jsx(Fragment, {
      children
    });
    return /* @__PURE__ */ jsx(import_react_native53.ImageBackground, {
      source: {
        uri: bg.image
      },
      blurRadius: typeof bg.blur === "number" ? bg.blur : 0,
      style: {
        flex: 1,
        height: "100%"
      },
      children
    });
  }
  function patchChatBackground() {
    patcher17.after(Messages, "render", (_, ret) => {
      var node = findInReactTree(ret, (n3) => n3?.props?.style && "HACK_fixModalInteraction" in n3.props);
      var { appliedWallpaper, followTheme } = useWallpaperStore.getState();
      var bg = !followTheme && appliedWallpaper ? appliedWallpaper : getFallbackThemeBackground();
      if (node && bg?.opacity != null) {
        var flat = import_react_native53.StyleSheet.flatten(node.props.style);
        var baseColor = flat.backgroundColor ?? "#000";
        var overlay = chroma(baseColor).alpha(1 - bg.opacity).hex();
        node.props.style = [
          node.props.style,
          {
            backgroundColor: overlay
          }
        ];
      }
      return /* @__PURE__ */ jsx(ThemeBackground, {
        children: ret
      });
    });
    console.log("[Wallpapers] Chat background patch applied");
  }
  var import_react24, import_react_native53, Messages;
  var init_background2 = __esm({
    "src/plugins/_core/wallpapers/patches/background.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react24 = __toESM(require_react(), 1);
      import_react_native53 = __toESM(require_react_native(), 1);
      init_libraries();
      init_background();
      init_wrappers();
      init_objects();
      init_wallpaperStore();
      init_useThemeStore();
      Messages = lookupByFilePath("components_native/chat/Messages.tsx").asLazy();
      __name(getFallbackThemeBackground, "getFallbackThemeBackground");
      __name(ThemeBackground, "ThemeBackground");
      __name(patchChatBackground, "patchChatBackground");
    }
  });

  // src/plugins/_core/wallpapers/index.ts
  var wallpapers_exports = {};
  __export(wallpapers_exports, {
    default: () => wallpapers_default
  });
  var wallpapers_default;
  var init_wallpapers2 = __esm({
    "src/plugins/_core/wallpapers/index.ts"() {
      "use strict";
      init_wallpapers();
      init_constants();
      init_background2();
      wallpapers_default = definePlugin16({
        name: "Wallpapers",
        description: "Adds chat wallpapers to BlazeCord",
        authors: [
          Devs.Blaze
        ],
        required: true,
        start() {
          patchChatBackground();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/dummy/index.ts
  var context18, meta18, definePlugin18, definePluginSettings18, logger22, patcher18;
  var init_dummy = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/dummy/index.ts"() {
      init_shared();
      context18 = getPluginContext("dummy");
      ({ meta: meta18, definePlugin: definePlugin18, definePluginSettings: definePluginSettings18, logger: logger22, patcher: patcher18 } = context18);
    }
  });

  // src/plugins/_core/dummy/index.ts
  var dummy_exports = {};
  __export(dummy_exports, {
    default: () => dummy_default
  });
  var settings3, dummy_default;
  var init_dummy2 = __esm({
    "src/plugins/_core/dummy/index.ts"() {
      "use strict";
      init_dummy();
      init_constants();
      init_filters2();
      settings3 = definePluginSettings18({
        stonerName: {
          type: "string",
          label: "Stoner Name",
          description: "What's your stoner alias?",
          placeholder: "BlazeyMcBluntface",
          validate: /* @__PURE__ */ __name((value) => {
            return Boolean(value.match(/^[a-zA-Z]+$/));
          }, "validate")
        },
        gotMunchies: {
          type: "boolean",
          label: "Got the Munchies?",
          description: "Are you feeling snacky right now?",
          icon: "FoodIcon"
        },
        favoriteStrain: {
          type: "select",
          label: "Favorite Strain",
          description: "Pick your go-to strain vibe.",
          options: [
            {
              label: "Sativa",
              description: "Energetic and uplifting \u2014 great for day sessions.",
              value: "sativa"
            },
            {
              label: "Indica",
              description: "Chill and couch-locked \u2014 perfect for lazy nights.",
              value: "indica"
            },
            {
              label: "Hybrid",
              description: "A little bit of both. Balanced buzz.",
              value: "hybrid"
            },
            {
              label: "CBD Only",
              description: "No high, just vibes and relaxation.",
              value: "cbd"
            }
          ]
        },
        smokeSchedule: {
          type: "radio",
          label: "Smoke Schedule",
          description: "How often do you toke?",
          options: [
            {
              label: "Wake 'n Bake",
              description: "Start the day blazed.",
              value: "morning"
            },
            {
              label: "Night Owl",
              description: "Only toke after dark.",
              value: "night"
            },
            {
              label: "All Day Erry Day",
              description: "Perma-stoned, baby.",
              value: "always"
            }
          ]
        },
        highLevel: {
          type: "slider",
          label: "How High Are You?",
          description: "Adjust your current baked level.",
          points: [
            "Sober",
            "Buzzin'",
            "Lifted",
            "Gone",
            "Interdimensional"
          ],
          default: "Buzzin'"
        }
      });
      if (true) {
        window.sampleMethod = () => {
          return "this method is unpatched";
        };
      }
      dummy_default = definePlugin18({
        name: "Dummy",
        description: "Its a dummy, like you!.",
        authors: [
          Devs.Blaze
        ],
        isAvailable: /* @__PURE__ */ __name(() => true, "isAvailable"),
        patches: [
          {
            id: "sample-patch",
            predicate: /* @__PURE__ */ __name(() => settings3.get().gotMunchies === true, "predicate"),
            target: byProps([
              "toString"
            ]),
            patch(_, patcher25) {
              patcher25.after(window, "sampleMethod", () => {
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

  // plugins-context-provider:#plugin-context#src/plugins/_core/no-track/index.ts
  var context19, meta19, definePlugin19, definePluginSettings19, logger23, patcher19;
  var init_no_track = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/no-track/index.ts"() {
      init_shared();
      context19 = getPluginContext("no-track");
      ({ meta: meta19, definePlugin: definePlugin19, definePluginSettings: definePluginSettings19, logger: logger23, patcher: patcher19 } = context19);
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
      no_track_default = definePlugin19({
        name: "NoTrack",
        description: "Kills Discord's analytics and crash reporting",
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
            patch(module3, patcher25) {
              patcher25.instead(module3, "initSentry", () => void 0);
            }
          },
          {
            id: "no-tracker",
            target: byProps([
              "track",
              "trackMaker"
            ]),
            patch(module3, patcher25) {
              patcher25.instead(module3, "track", () => Promise.resolve());
            }
          }
        ]
      });
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/devtoolkit/index.ts
  var context20, meta20, definePlugin20, definePluginSettings20, logger24, patcher20;
  var init_devtoolkit = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/devtoolkit/index.ts"() {
      init_shared();
      context20 = getPluginContext("devtoolkit");
      ({ meta: meta20, definePlugin: definePlugin20, definePluginSettings: definePluginSettings20, logger: logger24, patcher: patcher20 } = context20);
    }
  });

  // src/plugins/_core/devtoolkit/repl-client.ts
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
    "src/plugins/_core/devtoolkit/repl-client.ts"() {
      "use strict";
      init_async_to_generator();
      init_logger();
      init_dist();
      init_node_inspect_extracted();
      WS_HOST = "192.168.0.157";
      WS_PORT = 9090;
      setupWebsocketConnection = /* @__PURE__ */ __name(() => {
        return new Promise((resolve, reject) => {
          var socket = new WebSocket(`ws://${WS_HOST}:${WS_PORT}`);
          var handleOpen = /* @__PURE__ */ __name(() => {
            socket.send(JSON.stringify({
              type: "handshake",
              client: "BlazeCord",
              logBuffer: blzlogger.logs
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
        return blzlogger.pipe((args) => {
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

  // src/plugins/_core/devtoolkit/index.ts
  var devtoolkit_exports = {};
  __export(devtoolkit_exports, {
    default: () => devtoolkit_default
  });
  var devtoolkit_default;
  var init_devtoolkit2 = __esm({
    "src/plugins/_core/devtoolkit/index.ts"() {
      "use strict";
      init_devtoolkit();
      init_constants();
      init_metro();
      init_wrappers();
      init_module();
      init_node_inspect_extracted();
      init_repl_client();
      devtoolkit_default = definePlugin20({
        name: "Webhook Debugger",
        description: "Connect to a debugger via webhook.",
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
              patcher: patcher20,
              snipe(mod, prop) {
                patcher20.after(mod, prop, (args, ret) => {
                  logger24.info(`Sniped ${prop}
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
                patcher20.reuse();
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

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/index.ts
  var context21, meta21, definePlugin21, definePluginSettings21, logger25, patcher21;
  var init_painter = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/index.ts"() {
      init_shared();
      context21 = getPluginContext("painter");
      ({ meta: meta21, definePlugin: definePlugin21, definePluginSettings: definePluginSettings21, logger: logger25, patcher: patcher21 } = context21);
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/resolver.ts
  var context22, meta22, definePlugin22, definePluginSettings22, logger26, patcher22;
  var init_resolver = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/resolver.ts"() {
      init_shared();
      context22 = getPluginContext("painter");
      ({ meta: meta22, definePlugin: definePlugin22, definePluginSettings: definePluginSettings22, logger: logger26, patcher: patcher22 } = context22);
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/stores.ts
  var context23, meta23, definePlugin23, definePluginSettings23, logger27, patcher23;
  var init_stores2 = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/patches/stores.ts"() {
      init_shared();
      context23 = getPluginContext("painter");
      ({ meta: meta23, definePlugin: definePlugin23, definePluginSettings: definePluginSettings23, logger: logger27, patcher: patcher23 } = context23);
    }
  });

  // src/plugins/_core/painter/patches/stores.ts
  function patchSelectivelySyncedUserSettingsStore() {
    var isPersisting = false;
    patcher23.after(SelectivelySyncedUserSettingsStore, "getState", (_, ret) => {
      var currentRef = getCurrentRef();
      if (ret.appearance?.settings?.theme && currentRef) {
        if (!isPersisting && !hasInitialThemeStateBeenRestored) {
          ret.appearance.settings.theme = currentRef.key;
          hasInitialThemeStateBeenRestored = true;
        } else if (isPersisting) {
          ret = cloneDeep(ret);
          ret.appearance.settings.theme = currentRef.color.reference;
        }
      }
      return ret;
    });
    patcher23.instead(SelectivelySyncedUserSettingsStore, "persist", (_, orig) => {
      isPersisting = true;
      try {
        orig();
      } finally {
        isPersisting = false;
      }
    });
  }
  var SelectivelySyncedUserSettingsStore, hasInitialThemeStateBeenRestored;
  var init_stores3 = __esm({
    "src/plugins/_core/painter/patches/stores.ts"() {
      "use strict";
      init_stores2();
      init_stores();
      init_dist();
      init_useThemeStore();
      SelectivelySyncedUserSettingsStore = getStore("SelectivelySyncedUserSettingsStore");
      hasInitialThemeStateBeenRestored = false;
      __name(patchSelectivelySyncedUserSettingsStore, "patchSelectivelySyncedUserSettingsStore");
    }
  });

  // src/plugins/_core/painter/patches/resolver.ts
  function patchDefinitionAndResolver(tokensModule2) {
    var _loop = /* @__PURE__ */ __name(function(key2) {
      Object.defineProperty(tokensModule2.RawColor, key2, {
        configurable: true,
        enumerable: true,
        get: /* @__PURE__ */ __name(() => {
          if (!hasInitialThemeStateBeenRestored) return origRaw[key2];
          var ret = getCurrentRef()?.color.raw[key2];
          return ret || origRaw[key2];
        }, "get")
      });
    }, "_loop");
    var origRaw = {
      ...tokensModule2.RawColor
    };
    var callback = /* @__PURE__ */ __name(([theme]) => theme === getCurrentRef()?.key ? [
      getCurrentRef().color.reference
    ] : void 0, "callback");
    for (var key of Object.keys(tokensModule2.RawColor)) _loop(key);
    patcher22.before(isThemeModule, "isThemeDark", callback);
    patcher22.before(isThemeModule, "isThemeLight", callback);
    patcher22.before(getNativeModule("NativeThemeModule"), "updateTheme", callback);
    patcher22.instead(tokensModule2.default.internal, "resolveSemanticColor", (args, orig) => {
      var _colorRef = getCurrentRef();
      if (!_colorRef) return orig(...args);
      if (args[0] !== getCurrentRef().key) return orig(...args);
      args[0] = _colorRef.color.reference;
      var [name, colorDef] = extractInfo(tokensModule2, _colorRef.color.reference, args[1]);
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
    patcher22.attachDisposer(() => {
      Object.defineProperty(tokensModule2, "RawColor", {
        configurable: true,
        writable: true,
        value: origRaw
      });
    });
  }
  function extractInfo(tokensModule2, themeName, colorObj) {
    var propName = colorObj[extractInfo._sym ??= Object.getOwnPropertySymbols(colorObj)[0]];
    var colorDef = tokensModule2.SemanticColor[propName];
    return [
      propName,
      colorDef[themeName]
    ];
  }
  var isThemeModule;
  var init_resolver2 = __esm({
    "src/plugins/_core/painter/patches/resolver.ts"() {
      "use strict";
      init_useThemeStore();
      init_native();
      init_resolver();
      init_libraries();
      init_filters2();
      init_metro();
      init_stores3();
      isThemeModule = lookup(byWriteableProp("isThemeDark")).asLazy();
      __name(patchDefinitionAndResolver, "patchDefinitionAndResolver");
      __name(extractInfo, "extractInfo");
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
      init_useThemeStore();
      painter_default = definePlugin21({
        name: "Painter",
        description: "Provides custom themes in BlazeCord",
        authors: [
          Devs.Blaze
        ],
        required: true,
        start() {
          waitFor(byProps([
            "SemanticColor"
          ]), (tokensModule2) => {
            patchDefinitionAndResolver(tokensModule2);
            patchSelectivelySyncedUserSettingsStore();
            applyTheme(useThemeStore.getState().appliedTheme, false);
          });
        }
      });
    }
  });

  // plugins-importer:/home/blaze/coding/new/src/plugins
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins = __esm({
    "plugins-importer:/home/blaze/coding/new/src/plugins"() {
      plugins_default = {
        "toasts": (init_toasts3(), __toCommonJS(toasts_exports2)).default("/_api/toasts"),
        "flux": (init_flux3(), __toCommonJS(flux_exports2)).default("/_api/flux"),
        "settings": (init_settings3(), __toCommonJS(settings_exports2)).default("/_api/settings"),
        "commands": (init_commands2(), __toCommonJS(commands_exports)).default("/_api/commands"),
        "expressions": (init_expressions2(), __toCommonJS(expressions_exports)).default("/expressions"),
        "silent-typing": (init_silent_typing2(), __toCommonJS(silent_typing_exports)).default("/silent-typing"),
        "spaces-in-channels": (init_spaces_in_channels2(), __toCommonJS(spaces_in_channels_exports)).default("/spaces-in-channels"),
        "nitro-emojis": (init_nitro_emojis2(), __toCommonJS(nitro_emojis_exports)).default("/nitro-emojis"),
        "nitro-icons": (init_nitro_icons2(), __toCommonJS(nitro_icons_exports)).default("/nitro-icons"),
        "nitro-themes": (init_nitro_themes2(), __toCommonJS(nitro_themes_exports)).default("/nitro-themes"),
        "experiments": (init_experiments2(), __toCommonJS(experiments_exports)).default("/experiments"),
        "chat-bubbles": (init_chat_bubbles2(), __toCommonJS(chat_bubbles_exports)).default("/chat-bubbles"),
        "error-boundary": (init_error_boundary2(), __toCommonJS(error_boundary_exports)).default("/_core/error-boundary"),
        "wallpapers": (init_wallpapers2(), __toCommonJS(wallpapers_exports)).default("/_core/wallpapers"),
        "dummy": (init_dummy2(), __toCommonJS(dummy_exports)).default("/_core/dummy"),
        "no-track": (init_no_track2(), __toCommonJS(no_track_exports)).default("/_core/no-track"),
        "devtoolkit": (init_devtoolkit2(), __toCommonJS(devtoolkit_exports)).default("/_core/devtoolkit"),
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
      logger28.info(`Plugin ${plugin.$id} is not required and safe mode is enabled, skipping`);
      return;
    }
    if (plugin.isAvailable?.() === false) {
      logger28.warn(`Plugin ${plugin.$id} is not available, skipping`);
      return;
    }
    if (draft.states[id].running) {
      logger28.warn(`${plugin.$id} already started`);
      return;
    }
    logger28.debug(`Starting plugin '${plugin.$id}'`);
    try {
      var pluginPatcherContext = getContextualPatcher(id);
      pluginPatcherContext.reuse();
      applyPluginPatches(id, plugin, pluginPatcherContext);
      applyPluginFluxInterceptors(id, plugin, pluginPatcherContext);
      draft.states[id].running = true;
      plugin.start?.();
    } catch (e3) {
      logger28.error`Failed to start ${plugin.$id}: ${e3}`;
      return;
    }
    return;
  }
  function applyPluginFluxInterceptors(id, plugin, pluginPatcherContext) {
    var _loop = /* @__PURE__ */ __name(function(eventName2, cb2) {
      var unintercept = interceptFluxEvent((event) => {
        try {
          if (event.type !== eventName2) return;
          return cb2(event);
        } catch (e3) {
          logger28.error`${id}: Error while handling ${event.type}: ${e3}`;
        }
      });
      logger28.debug(`Intercepted flux event '${eventName2}' for plugin '${id}'`);
      pluginPatcherContext.attachDisposer(() => {
        unintercept();
        logger28.debug(`Intercepted from flux event '${eventName2}' for plugin '${id}'`);
      });
    }, "_loop");
    if (!plugin.flux) return;
    for (var [eventName, cb] of Object.entries(plugin.flux)) _loop(eventName, cb);
  }
  function applyPluginPatches(id, plugin, pluginPatcherContext) {
    var _loop = /* @__PURE__ */ __name(function(pluginPatch2) {
      var patcher25 = pluginPatcherContext.createChild({
        id: pluginPatch2.id ?? pluginPatch2.target.key
      });
      var apply = /* @__PURE__ */ __name(() => {
        logger28.debug(`Applying ${patcher25.id} patch`);
        patcher25.reuse();
        waitFor(pluginPatch2.target, (module3) => {
          pluginPatch2.patch(module3, patcher25);
        });
      }, "apply");
      var settings4 = getPluginSettings(id);
      if (settings4 && pluginPatch2.predicate) {
        var { predicate } = pluginPatch2;
        var unsub = settings4.subscribe(() => predicate(), () => {
          if (predicate()) {
            apply();
          } else {
            logger28.debug(`Disposing ${patcher25.id} patch`);
            patcher25.dispose();
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
    for (var pluginPatch of plugin.patches) _loop(pluginPatch);
  }
  function cleanupPlugin(draft, id) {
    var plugin = PLUGINS[id];
    if (plugin.required) {
      logger28.warn(`Cannot stop required plugin '${plugin.$id}'`);
      if (true) throw new Error(`Cannot stop required plugin '${plugin.$id}'`);
      return;
    }
    if (!draft.states[id].running) {
      logger28.warn(`${plugin.$id} already stopped`);
      return;
    }
    logger28.info(`Cleaning up plugin ${plugin.$id}`);
    try {
      var patcher25 = getContextualPatcher(id, false);
      if (patcher25) {
        patcher25.dispose();
        patcher25.children.length = 0;
      }
      plugin.cleanup?.();
    } catch (e3) {
      logger28.error(`Failed to cleanup ${plugin.$id}: ${e3}`);
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
  var logger28, PLUGINS, usePluginStore, usePluginStore_default;
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
      init_flux();
      logger28 = blzlogger.createChild("PluginStore");
      PLUGINS = lazyValue(() => (init_plugins(), __toCommonJS(plugins_exports)).default, {
        hint: "object"
      });
      __name(startPlugin, "startPlugin");
      __name(applyPluginFluxInterceptors, "applyPluginFluxInterceptors");
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

  // src/patcher/contextual.ts
  var contextual_exports = {};
  __export(contextual_exports, {
    createContextualPatcher: () => createContextualPatcher
  });
  function createContextualPatcher({ id }) {
    var unpatches = [];
    function shimDisposableFn(f) {
      var base = /* @__PURE__ */ __name((...props) => {
        if (contextualPatcher.disposed) return () => true;
        var up = f(...props);
        unpatches.push(up);
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
          unpatches.push(...cbs.map((cb2) => () => !!cb2()));
        }
      },
      dispose() {
        contextualPatcher.disposed = true;
        for (var unpatch2 of unpatches) {
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
        var patcher25 = createContextualPatcher({
          ...options,
          id: `${id}/${options.id}`
        });
        patcher25.parent = this;
        this.children.push(patcher25);
        return patcher25;
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
    var patcher25 = createContextualPatcher({
      id
    });
    patcherRegistry.set(id, patcher25);
    return patcher25;
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
      pluginlogger = blzlogger.createChild("Plugins");
      __name(getPluginContext, "getPluginContext");
    }
  });

  // plugins-context-provider:#plugin-context#src/plugins/_core/painter/parser.ts
  var context24, meta24, definePlugin24, definePluginSettings24, logger29, patcher24;
  var init_parser = __esm({
    "plugins-context-provider:#plugin-context#src/plugins/_core/painter/parser.ts"() {
      init_shared();
      context24 = getPluginContext("painter");
      ({ meta: meta24, definePlugin: definePlugin24, definePluginSettings: definePluginSettings24, logger: logger29, patcher: patcher24 } = context24);
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
        var rawColorValue = tokensModule.RawColor[value.slice(1)];
        if (!rawColorValue) {
          logger29.warn(`Unknown raw color reference: ${value}`);
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
    if (import_react_native54.Platform.OS !== "android") return rawColors;
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
  var import_react_native54, tokensModule, determineColorReference;
  var init_parser2 = __esm({
    "src/plugins/_core/painter/parser.ts"() {
      "use strict";
      import_react_native54 = __toESM(require_react_native(), 1);
      init_libraries();
      init_wrappers();
      init_parser();
      tokensModule = lookupByProps("SemanticColor").asLazy();
      determineColorReference = /* @__PURE__ */ __name((type) => type === "dark" ? "darker" : "light", "determineColorReference");
      __name(parseColorManifest, "parseColorManifest");
      __name(maybeApplyAndroidExtraKeys, "maybeApplyAndroidExtraKeys");
    }
  });

  // src/plugins/_core/painter/themes/purple-haze.ts
  var PURPLE_HAZE;
  var init_purple_haze = __esm({
    "src/plugins/_core/painter/themes/purple-haze.ts"() {
      "use strict";
      PURPLE_HAZE = {
        id: "purple.haze",
        type: "theme",
        display: {
          name: "Purple Haze",
          description: "A hazy green on deep purple theme with improved contrast.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#00ff88"
              },
              BACKGROUND_ACCENT: {
                value: "#2a003f"
              },
              BACKGROUND_MENTIONED: {
                value: "#00ff88",
                opacity: 0.12
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#00cc6a"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#220034"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#220034"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#2d0044"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#2d0044"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#10001a"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#150021"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#150021"
              },
              BACKGROUND_PRIMARY: {
                value: "#10001a"
              },
              BACKGROUND_SECONDARY: {
                value: "#150021"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#150021"
              },
              BACKGROUND_TERTIARY: {
                value: "#0a0012"
              },
              BG_BASE_PRIMARY: {
                value: "#10001a"
              },
              BG_BASE_SECONDARY: {
                value: "#150021"
              },
              BG_BASE_TERTIARY: {
                value: "#0a0012"
              },
              EMBED_BACKGROUND: {
                value: "#220034"
              },
              CARD_PRIMARY_BG: {
                value: "#150021"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#00cc6a"
              },
              CARD_SECONDARY_BG: {
                value: "#150021"
              },
              CHANNEL_ICON: {
                value: "#00ff88"
              },
              CHANNELS_DEFAULT: {
                value: "#66ffb1"
              },
              CHAT_BACKGROUND: {
                value: "#10001a"
              },
              HEADER_PRIMARY: {
                value: "#ccffdd"
              },
              HEADER_SECONDARY: {
                value: "#99eebb"
              },
              INPUT_BACKGROUND: {
                value: "#0a0012"
              },
              INTERACTIVE_ACTIVE: {
                value: "#ccffdd"
              },
              INTERACTIVE_HOVER: {
                value: "#00cc6a"
              },
              INTERACTIVE_MUTED: {
                value: "#66cca1"
              },
              INTERACTIVE_NORMAL: {
                value: "#00ff88"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#220034"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#33004d"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#150021"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#ccffdd"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#ccffdd"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#150021"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#00cc6a"
              },
              TEXT_LINK: {
                value: "#00cc6a"
              },
              TEXT_MUTED: {
                value: "#99eebb"
              },
              TEXT_NORMAL: {
                value: "#ccffdd"
              },
              TEXT_PRIMARY: {
                value: "#ccffdd"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#44ff9a"
              }
            },
            raw: {
              BRAND_260: "#00ff88",
              BRAND_360: "#00cc6a",
              BRAND_500: "#00cc6a",
              BRAND_560: "#00cc6a",
              BLUE_260: "#00ffaa",
              BLUE_300: "#00e68f",
              BLUE_330: "#00cc88",
              BLUE_345: "#00bb7d",
              BLUE_360: "#00aa73",
              BLUE_400: "#00995f",
              BLUE_430: "#008844",
              BLUE_460: "#007733",
              BLUE_500: "#006622",
              BLUE_530: "#005511",
              BLUE_560: "#004400",
              BLUE_600: "#003300",
              BLUE_630: "#002200",
              BLUE_660: "#001100",
              BLUE_700: "#000000",
              PRIMARY_100: "#ccffdd",
              PRIMARY_300: "#150021",
              PRIMARY_360: "#00cc6a",
              PRIMARY_400: "#33004d",
              PRIMARY_460: "#66ffb1",
              PRIMARY_500: "#ccffdd",
              PRIMARY_600: "#220034",
              PRIMARY_630: "#220034",
              PRIMARY_660: "#0a0012",
              PRIMARY_700: "#0a0012",
              PRIMARY_800: "#150021",
              PLUM_10: "#66ffb1",
              PLUM_13: "#00ff88",
              PLUM_15: "#33004d",
              PLUM_16: "#220034",
              PLUM_17: "#0a0012",
              PLUM_18: "#220034",
              PLUM_20: "#150021",
              PLUM_22: "#0a0012",
              PLUM_3: "#ccffdd",
              PLUM_4: "#00cc6a",
              PLUM_6: "#ccffdd",
              GREEN_100: "#00ff88",
              GREEN_130: "#00cc6a",
              GREEN_160: "#00cc6a",
              GREEN_200: "#00cc6a",
              GREEN_230: "#00cc6a",
              GREEN_260: "#00cc6a",
              GREEN_300: "#00cc6a",
              GREEN_330: "#00cc6a",
              GREEN_345: "#00cc6a",
              GREEN_360: "#00cc6a",
              GREEN_400: "#00cc6a",
              GREEN_430: "#00cc6a",
              GREEN_460: "#00cc6a",
              GREEN_500: "#00cc6a",
              GREEN_530: "#00cc6a",
              GREEN_560: "#00cc6a",
              GREEN_600: "#00cc6a",
              GREEN_630: "#00cc6a",
              GREEN_660: "#00cc6a",
              GREEN_700: "#00cc6a",
              GREEN_730: "#00cc6a",
              GREEN_760: "#00cc6a",
              GREEN_800: "#00cc6a",
              GREEN_830: "#00cc6a",
              GREEN_860: "#00cc6a",
              GREEN_900: "#00cc6a",
              GUILD_BOOSTING_BLUE: "#00ffaa",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#00ffaa",
              GUILD_BOOSTING_PINK: "#ff66cc",
              GUILD_BOOSTING_PURPLE: "#b366ff",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#b366ff",
              ORANGE_260: "#ffcc66",
              ORANGE_300: "#ffbb33",
              ORANGE_330: "#ffaa00",
              ORANGE_345: "#ff9900",
              ORANGE_360: "#ff8800",
              ORANGE_400: "#ff7700",
              ORANGE_430: "#ff6600",
              ORANGE_460: "#ff5500",
              ORANGE_500: "#ff4400",
              ORANGE_530: "#ff3300",
              ORANGE_560: "#ff2200",
              ORANGE_600: "#ff1100",
              ORANGE_630: "#ff0000",
              ORANGE_660: "#cc0000",
              ORANGE_700: "#990000",
              RED_260: "#ff99aa",
              RED_300: "#ff8899",
              RED_330: "#ff7788",
              RED_345: "#ff6677",
              RED_360: "#ff5566",
              RED_400: "#ff4455",
              RED_430: "#ff3344",
              RED_460: "#ff2233",
              RED_500: "#ff1122",
              RED_530: "#ff0011",
              RED_560: "#ee0011",
              RED_600: "#dd0011",
              RED_630: "#cc0011",
              RED_660: "#bb0011",
              RED_700: "#aa0011",
              YELLOW_100: "#ffffcc",
              YELLOW_130: "#ffff99",
              YELLOW_160: "#ffff66",
              YELLOW_200: "#ffff33",
              YELLOW_230: "#ffff00",
              YELLOW_260: "#e6e600",
              YELLOW_300: "#cccc00",
              YELLOW_330: "#b3b300",
              YELLOW_345: "#999900",
              YELLOW_360: "#808000",
              YELLOW_400: "#666600",
              YELLOW_430: "#4d4d00",
              YELLOW_460: "#333300",
              YELLOW_500: "#1a1a00",
              YELLOW_530: "#000000",
              YELLOW_560: "#000000",
              YELLOW_600: "#000000",
              YELLOW_630: "#000000",
              YELLOW_660: "#000000",
              YELLOW_700: "#000000",
              YELLOW_730: "#000000",
              YELLOW_760: "#000000",
              YELLOW_800: "#000000",
              YELLOW_830: "#000000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#10001a",
              WHITE_500: "#10001a"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/catppuccin-mocha.ts
  var MOCHA_THEME;
  var init_catppuccin_mocha = __esm({
    "src/plugins/_core/painter/themes/catppuccin-mocha.ts"() {
      "use strict";
      MOCHA_THEME = {
        id: "catppuccin.mocha",
        type: "theme",
        display: {
          name: "Catppuccin Mocha",
          description: "A warm catppuccin theme.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
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

  // src/plugins/_core/painter/themes/rose-pink.ts
  var ROSIE_PINK_THEME;
  var init_rose_pink = __esm({
    "src/plugins/_core/painter/themes/rose-pink.ts"() {
      "use strict";
      ROSIE_PINK_THEME = {
        id: "rose.pink",
        type: "theme",
        display: {
          name: "Rose Pink",
          description: "A simple, pink theme.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
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
            image: "https://cdn.discordapp.com/attachments/1375223339093856389/1395332092031795260/uhdmisc254.jpg?ex=687a0fc6&is=6878be46&hm=b0d3dc96465810f23bb5aec1aefc20b8128925f6d72c8f9b3353811d21da6feb&",
            opacity: 1
          }
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/ocean-mist.ts
  var OCEAN_MIST;
  var init_ocean_mist = __esm({
    "src/plugins/_core/painter/themes/ocean-mist.ts"() {
      "use strict";
      OCEAN_MIST = {
        id: "ocean.mist",
        type: "theme",
        display: {
          name: "Ocean Mist",
          description: "A teal theme inspired by the ocean.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#56d9c2"
              },
              BACKGROUND_ACCENT: {
                value: "#4ad9d9"
              },
              BACKGROUND_MENTIONED: {
                value: "#91eae4",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#5bd1c9"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#1e2b2f"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#1e2b2f"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#1e2b2f"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#1e2b2f"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#0c1a1b"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#122225"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#122225"
              },
              BACKGROUND_PRIMARY: {
                value: "#0c1a1b"
              },
              BACKGROUND_SECONDARY: {
                value: "#122225"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#122225"
              },
              BACKGROUND_TERTIARY: {
                value: "#0a1416"
              },
              BG_BASE_PRIMARY: {
                value: "#0c1a1b"
              },
              BG_BASE_SECONDARY: {
                value: "#122225"
              },
              BG_BASE_TERTIARY: {
                value: "#0a1416"
              },
              EMBED_BACKGROUND: {
                value: "#1e2b2f"
              },
              CARD_PRIMARY_BG: {
                value: "#0c1a1b"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#56d9c2"
              },
              CARD_SECONDARY_BG: {
                value: "#0c1a1b"
              },
              CHANNEL_ICON: {
                value: "#a2f6eb"
              },
              CHANNELS_DEFAULT: {
                value: "#89e6dd"
              },
              CHAT_BACKGROUND: {
                value: "#0c1a1b"
              },
              HEADER_PRIMARY: {
                value: "#d2fefe"
              },
              HEADER_SECONDARY: {
                value: "#aeeeee"
              },
              INPUT_BACKGROUND: {
                value: "#0a1416"
              },
              INTERACTIVE_ACTIVE: {
                value: "#d2fefe"
              },
              INTERACTIVE_HOVER: {
                value: "#56d9c2"
              },
              INTERACTIVE_MUTED: {
                value: "#89e6dd"
              },
              INTERACTIVE_NORMAL: {
                value: "#5bd1c9"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#1e2b2f"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#234145"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#122225"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#d2fefe"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#d2fefe"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#122225"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#4ad9d9"
              },
              TEXT_LINK: {
                value: "#4ad9d9"
              },
              TEXT_MUTED: {
                value: "#aeeeee"
              },
              TEXT_NORMAL: {
                value: "#d2fefe"
              },
              TEXT_PRIMARY: {
                value: "#d2fefe"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#63e4da"
              }
            },
            raw: {
              BRAND_260: "#56d9c2",
              BRAND_360: "#4ad9d9",
              BRAND_500: "#4ad9d9",
              BRAND_560: "#4ad9d9",
              BLUE_260: "#4ad9d9",
              BLUE_300: "#56d9c2",
              BLUE_330: "#5bd1c9",
              BLUE_345: "#63e4da",
              BLUE_360: "#4ad9d9",
              BLUE_400: "#3cc2c2",
              BLUE_430: "#2db3b3",
              BLUE_460: "#25a3a3",
              BLUE_500: "#1f9292",
              BLUE_530: "#198282",
              BLUE_560: "#127171",
              BLUE_600: "#0c6161",
              BLUE_630: "#064f4f",
              BLUE_660: "#003e3e",
              BLUE_700: "#002d2d",
              PRIMARY_100: "#d2fefe",
              PRIMARY_300: "#0c1a1b",
              PRIMARY_360: "#4ad9d9",
              PRIMARY_400: "#2db3b3",
              PRIMARY_460: "#5bd1c9",
              PRIMARY_500: "#d2fefe",
              PRIMARY_600: "#1e2b2f",
              PRIMARY_630: "#1e2b2f",
              PRIMARY_660: "#0a1416",
              PRIMARY_700: "#0a1416",
              PRIMARY_800: "#122225",
              PLUM_10: "#a2f6eb",
              PLUM_13: "#56d9c2",
              PLUM_15: "#234145",
              PLUM_16: "#1e2b2f",
              PLUM_17: "#0a1416",
              PLUM_18: "#1e2b2f",
              PLUM_20: "#122225",
              PLUM_22: "#0a1416",
              PLUM_3: "#d2fefe",
              PLUM_4: "#4ad9d9",
              PLUM_6: "#d2fefe",
              GREEN_100: "#4ad9d9",
              GREEN_130: "#4ad9d9",
              GREEN_160: "#4ad9d9",
              GREEN_200: "#4ad9d9",
              GREEN_230: "#4ad9d9",
              GREEN_260: "#4ad9d9",
              GREEN_300: "#4ad9d9",
              GREEN_330: "#4ad9d9",
              GREEN_345: "#4ad9d9",
              GREEN_360: "#4ad9d9",
              GREEN_400: "#4ad9d9",
              GREEN_430: "#4ad9d9",
              GREEN_460: "#4ad9d9",
              GREEN_500: "#4ad9d9",
              GREEN_530: "#4ad9d9",
              GREEN_560: "#4ad9d9",
              GREEN_600: "#4ad9d9",
              GREEN_630: "#4ad9d9",
              GREEN_660: "#4ad9d9",
              GREEN_700: "#4ad9d9",
              GREEN_730: "#4ad9d9",
              GREEN_760: "#4ad9d9",
              GREEN_800: "#4ad9d9",
              GREEN_830: "#4ad9d9",
              GREEN_860: "#4ad9d9",
              GREEN_900: "#4ad9d9",
              GUILD_BOOSTING_BLUE: "#4ad9d9",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#4ad9d9",
              GUILD_BOOSTING_PINK: "#b3e5e5",
              GUILD_BOOSTING_PURPLE: "#69d3cc",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#69d3cc",
              ORANGE_260: "#f4a261",
              ORANGE_300: "#f4a261",
              ORANGE_330: "#f4a261",
              ORANGE_345: "#f4a261",
              ORANGE_360: "#f4a261",
              ORANGE_400: "#f4a261",
              ORANGE_430: "#f4a261",
              ORANGE_460: "#f4a261",
              ORANGE_500: "#f4a261",
              ORANGE_530: "#f4a261",
              ORANGE_560: "#f4a261",
              ORANGE_600: "#f4a261",
              ORANGE_630: "#f4a261",
              ORANGE_660: "#f4a261",
              ORANGE_700: "#f4a261",
              RED_260: "#ef5350",
              RED_300: "#ef5350",
              RED_330: "#ef5350",
              RED_345: "#ef5350",
              RED_360: "#ef5350",
              RED_400: "#ef5350",
              RED_430: "#ef5350",
              RED_460: "#ef5350",
              RED_500: "#ef5350",
              RED_530: "#ef5350",
              RED_560: "#ef5350",
              RED_600: "#ef5350",
              RED_630: "#ef5350",
              RED_660: "#ef5350",
              RED_700: "#ef5350",
              YELLOW_100: "#e0f7fa",
              YELLOW_130: "#b2ebf2",
              YELLOW_160: "#80deea",
              YELLOW_200: "#4dd0e1",
              YELLOW_230: "#26c6da",
              YELLOW_260: "#00bcd4",
              YELLOW_300: "#00acc1",
              YELLOW_330: "#0097a7",
              YELLOW_345: "#00838f",
              YELLOW_360: "#006064",
              YELLOW_400: "#004d40",
              YELLOW_430: "#00363a",
              YELLOW_460: "#00251a",
              YELLOW_500: "#001d1d",
              YELLOW_530: "#001212",
              YELLOW_560: "#000a0a",
              YELLOW_600: "#000505",
              YELLOW_630: "#000000",
              YELLOW_660: "#000000",
              YELLOW_700: "#000000",
              YELLOW_730: "#000000",
              YELLOW_760: "#000000",
              YELLOW_800: "#000000",
              YELLOW_830: "#000000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#0c1a1b",
              WHITE_500: "#0c1a1b"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/red-on-black.ts
  var BLOOD_TERMINAL;
  var init_red_on_black = __esm({
    "src/plugins/_core/painter/themes/red-on-black.ts"() {
      "use strict";
      BLOOD_TERMINAL = {
        id: "blood.terminal",
        type: "theme",
        display: {
          name: "Blood Terminal",
          description: "A red on black theme.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#7f1d1d"
              },
              BACKGROUND_ACCENT: {
                value: "#dc2626"
              },
              BACKGROUND_MENTIONED: {
                value: "#dc2626",
                opacity: 0.08
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#ef4444"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#1a0000"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#1a0000"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#1a0000"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#1a0000"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#000000"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#0d0000"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#0d0000"
              },
              BACKGROUND_PRIMARY: {
                value: "#000000"
              },
              BACKGROUND_SECONDARY: {
                value: "#0d0000"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#0d0000"
              },
              BACKGROUND_TERTIARY: {
                value: "#1a0000"
              },
              BG_BASE_PRIMARY: {
                value: "#000000"
              },
              BG_BASE_SECONDARY: {
                value: "#0d0000"
              },
              BG_BASE_TERTIARY: {
                value: "#1a0000"
              },
              EMBED_BACKGROUND: {
                value: "#1a0000"
              },
              CARD_PRIMARY_BG: {
                value: "#000000"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#7f1d1d"
              },
              CARD_SECONDARY_BG: {
                value: "#0d0000"
              },
              CHANNEL_ICON: {
                value: "#f87171"
              },
              CHANNELS_DEFAULT: {
                value: "#fca5a5"
              },
              CHAT_BACKGROUND: {
                value: "#000000"
              },
              HEADER_PRIMARY: {
                value: "#fef2f2"
              },
              HEADER_SECONDARY: {
                value: "#fecaca"
              },
              INPUT_BACKGROUND: {
                value: "#1a0000"
              },
              INTERACTIVE_ACTIVE: {
                value: "#fef2f2"
              },
              INTERACTIVE_HOVER: {
                value: "#ef4444"
              },
              INTERACTIVE_MUTED: {
                value: "#f87171"
              },
              INTERACTIVE_NORMAL: {
                value: "#ef4444"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#1a0000"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#450a0a"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#0d0000"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#fef2f2"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#fef2f2"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#0d0000"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#dc2626"
              },
              TEXT_LINK: {
                value: "#dc2626"
              },
              TEXT_MUTED: {
                value: "#fca5a5"
              },
              TEXT_NORMAL: {
                value: "#fef2f2"
              },
              TEXT_PRIMARY: {
                value: "#fef2f2"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#b91c1c"
              }
            },
            raw: {
              BRAND_260: "#7f1d1d",
              BRAND_360: "#dc2626",
              BRAND_500: "#dc2626",
              BRAND_560: "#ef4444",
              BLUE_260: "#991b1b",
              BLUE_300: "#b91c1c",
              BLUE_330: "#dc2626",
              BLUE_345: "#ef4444",
              BLUE_360: "#f87171",
              BLUE_400: "#fca5a5",
              BLUE_430: "#fecaca",
              BLUE_460: "#fee2e2",
              BLUE_500: "#fef2f2",
              BLUE_530: "#ffffff",
              BLUE_560: "#fef2f2",
              BLUE_600: "#ffeded",
              BLUE_630: "#ffe5e5",
              BLUE_660: "#ffdddd",
              BLUE_700: "#ffd5d5",
              PRIMARY_100: "#fef2f2",
              PRIMARY_300: "#0d0000",
              PRIMARY_360: "#dc2626",
              PRIMARY_400: "#991b1b",
              PRIMARY_460: "#b91c1c",
              PRIMARY_500: "#fef2f2",
              PRIMARY_600: "#1a0000",
              PRIMARY_630: "#1a0000",
              PRIMARY_660: "#1a0000",
              PRIMARY_700: "#0a0000",
              PRIMARY_800: "#000000",
              PLUM_10: "#fecaca",
              PLUM_13: "#dc2626",
              PLUM_15: "#991b1b",
              PLUM_16: "#1a0000",
              PLUM_17: "#0a0000",
              PLUM_18: "#1a0000",
              PLUM_20: "#0d0000",
              PLUM_22: "#0a0000",
              PLUM_3: "#fef2f2",
              PLUM_4: "#dc2626",
              PLUM_6: "#fef2f2",
              GREEN_100: "#991b1b",
              GREEN_130: "#b91c1c",
              GREEN_160: "#dc2626",
              GREEN_200: "#ef4444",
              GREEN_230: "#f87171",
              GREEN_260: "#fca5a5",
              GREEN_300: "#fecaca",
              GREEN_330: "#fee2e2",
              GREEN_345: "#fef2f2",
              GREEN_360: "#ffffff",
              GREEN_400: "#fef2f2",
              GREEN_430: "#ffffff",
              GREEN_460: "#ffffff",
              GREEN_500: "#fef2f2",
              GREEN_530: "#ffffff",
              GREEN_560: "#ffffff",
              GREEN_600: "#ffffff",
              GREEN_630: "#ffffff",
              GREEN_660: "#ffffff",
              GREEN_700: "#ffffff",
              GREEN_730: "#ffffff",
              GREEN_760: "#ffffff",
              GREEN_800: "#ffffff",
              GREEN_830: "#ffffff",
              GREEN_860: "#ffffff",
              GREEN_900: "#ffffff",
              GUILD_BOOSTING_BLUE: "#ef4444",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#dc2626",
              GUILD_BOOSTING_PINK: "#fca5a5",
              GUILD_BOOSTING_PURPLE: "#991b1b",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#7f1d1d",
              ORANGE_260: "#f87171",
              ORANGE_300: "#ef4444",
              ORANGE_330: "#dc2626",
              ORANGE_345: "#b91c1c",
              ORANGE_360: "#991b1b",
              ORANGE_400: "#7f1d1d",
              ORANGE_430: "#450a0a",
              ORANGE_460: "#1a0000",
              ORANGE_500: "#0d0000",
              ORANGE_530: "#0a0000",
              ORANGE_560: "#000000",
              ORANGE_600: "#000000",
              ORANGE_630: "#000000",
              ORANGE_660: "#000000",
              ORANGE_700: "#000000",
              RED_260: "#dc2626",
              RED_300: "#dc2626",
              RED_330: "#ef4444",
              RED_345: "#f87171",
              RED_360: "#fca5a5",
              RED_400: "#fecaca",
              RED_430: "#fee2e2",
              RED_460: "#fef2f2",
              RED_500: "#ffffff",
              RED_530: "#ffffff",
              RED_560: "#ffffff",
              RED_600: "#ffffff",
              RED_630: "#ffffff",
              RED_660: "#ffffff",
              RED_700: "#ffffff",
              YELLOW_100: "#fff0f0",
              YELLOW_130: "#ffe4e4",
              YELLOW_160: "#ffd4d4",
              YELLOW_200: "#ffc4c4",
              YELLOW_230: "#ffb4b4",
              YELLOW_260: "#ffa4a4",
              YELLOW_300: "#ff9494",
              YELLOW_330: "#ff8484",
              YELLOW_345: "#ff7474",
              YELLOW_360: "#ff6464",
              YELLOW_400: "#ff5454",
              YELLOW_430: "#ff4444",
              YELLOW_460: "#ff3434",
              YELLOW_500: "#ff2424",
              YELLOW_530: "#ff1414",
              YELLOW_560: "#ff0404",
              YELLOW_600: "#f00000",
              YELLOW_630: "#d00000",
              YELLOW_660: "#a00000",
              YELLOW_700: "#700000",
              YELLOW_730: "#500000",
              YELLOW_760: "#300000",
              YELLOW_800: "#200000",
              YELLOW_830: "#100000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#000000",
              WHITE_500: "#000000"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/solar-bloom.ts
  var SOLAR_BLOOM;
  var init_solar_bloom = __esm({
    "src/plugins/_core/painter/themes/solar-bloom.ts"() {
      "use strict";
      SOLAR_BLOOM = {
        id: "solar.bloom",
        type: "theme",
        display: {
          name: "Solar Bloom",
          description: "A radiant, warm theme.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "light",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#f7c59f"
              },
              BACKGROUND_ACCENT: {
                value: "#ffb347"
              },
              BACKGROUND_MENTIONED: {
                value: "#f9e2af",
                opacity: 0.15
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#f8d47e"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#ffd9b3"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#ffe5c1"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#ffe5c1"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#ffe5c1"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#fff7ec"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#fff2dc"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#fff1d8"
              },
              BACKGROUND_PRIMARY: {
                value: "#fff7ec"
              },
              BACKGROUND_SECONDARY: {
                value: "#fff2dc"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#fff2dc"
              },
              BACKGROUND_TERTIARY: {
                value: "#ffeece"
              },
              BG_BASE_PRIMARY: {
                value: "#fff7ec"
              },
              BG_BASE_SECONDARY: {
                value: "#fff2dc"
              },
              BG_BASE_TERTIARY: {
                value: "#ffeece"
              },
              EMBED_BACKGROUND: {
                value: "#fff0cc"
              },
              CARD_PRIMARY_BG: {
                value: "#fffaf1"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#f7c59f"
              },
              CARD_SECONDARY_BG: {
                value: "#fff6e6"
              },
              CHANNEL_ICON: {
                value: "#fbbd9c"
              },
              CHANNELS_DEFAULT: {
                value: "#ff8a65"
              },
              CHAT_BACKGROUND: {
                value: "#fffaf1"
              },
              HEADER_PRIMARY: {
                value: "#4e342e"
              },
              HEADER_SECONDARY: {
                value: "#795548"
              },
              INPUT_BACKGROUND: {
                value: "#fff5df"
              },
              INTERACTIVE_ACTIVE: {
                value: "#ff7043"
              },
              INTERACTIVE_HOVER: {
                value: "#ff8a65"
              },
              INTERACTIVE_MUTED: {
                value: "#ce9378"
              },
              INTERACTIVE_NORMAL: {
                value: "#f7b95c"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#ffd8b0"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#f7c59f"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#fff0cc"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#6d4c41"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#6d4c41"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#fff5e0"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#ffb347"
              },
              TEXT_LINK: {
                value: "#ff8a65"
              },
              TEXT_MUTED: {
                value: "#bf6f4b"
              },
              TEXT_NORMAL: {
                value: "#4e342e"
              },
              TEXT_PRIMARY: {
                value: "#3e2723"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#ffcc80"
              }
            },
            raw: {
              BRAND_260: "#f7c59f",
              BRAND_360: "#ffb347",
              BRAND_500: "#ffb347",
              BRAND_560: "#ffb347",
              BLUE_260: "#82b1ff",
              BLUE_300: "#64b5f6",
              BLUE_330: "#4fc3f7",
              BLUE_345: "#29b6f6",
              BLUE_360: "#03a9f4",
              BLUE_400: "#039be5",
              BLUE_430: "#0288d1",
              BLUE_460: "#0277bd",
              BLUE_500: "#01579b",
              BLUE_530: "#81d4fa",
              BLUE_560: "#4fc3f7",
              BLUE_600: "#29b6f6",
              BLUE_630: "#03a9f4",
              BLUE_660: "#0288d1",
              BLUE_700: "#0277bd",
              PRIMARY_100: "#fff7ec",
              PRIMARY_300: "#ffd9b3",
              PRIMARY_360: "#f7c59f",
              PRIMARY_400: "#f5b17d",
              PRIMARY_460: "#f7b95c",
              PRIMARY_500: "#ffb347",
              PRIMARY_600: "#f29544",
              PRIMARY_630: "#f07d2c",
              PRIMARY_660: "#e65100",
              PRIMARY_700: "#bf360c",
              PRIMARY_800: "#a84300",
              PLUM_10: "#fdd9c1",
              PLUM_13: "#f7c59f",
              PLUM_15: "#f29544",
              PLUM_16: "#ffcc80",
              PLUM_17: "#ffeece",
              PLUM_18: "#ffd8b0",
              PLUM_20: "#ffe5c1",
              PLUM_22: "#fff2dc",
              PLUM_3: "#ffccbc",
              PLUM_4: "#ff8a65",
              PLUM_6: "#ff7043",
              GREEN_100: "#aed581",
              GREEN_130: "#c5e1a5",
              GREEN_160: "#dcedc8",
              GREEN_200: "#f0f4c3",
              GREEN_230: "#fff9c4",
              GREEN_260: "#fff59d",
              GREEN_300: "#fff176",
              GREEN_330: "#ffee58",
              GREEN_345: "#fdd835",
              GREEN_360: "#fbc02d",
              GREEN_400: "#f9a825",
              GREEN_430: "#f57f17",
              GREEN_460: "#fbc02d",
              GREEN_500: "#f57f17",
              GREEN_530: "#f9a825",
              GREEN_560: "#fbc02d",
              GREEN_600: "#fdd835",
              GREEN_630: "#ffee58",
              GREEN_660: "#fff176",
              GREEN_700: "#ffd54f",
              GREEN_730: "#ffca28",
              GREEN_760: "#ffc107",
              GREEN_800: "#ffb300",
              GREEN_830: "#ffa000",
              GREEN_860: "#ff8f00",
              GREEN_900: "#ff6f00",
              GUILD_BOOSTING_BLUE: "#81d4fa",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#81d4fa",
              GUILD_BOOSTING_PINK: "#f8bbd0",
              GUILD_BOOSTING_PURPLE: "#ce93d8",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#ce93d8",
              ORANGE_260: "#ffcc80",
              ORANGE_300: "#ffb74d",
              ORANGE_330: "#ffa726",
              ORANGE_345: "#ff9800",
              ORANGE_360: "#fb8c00",
              ORANGE_400: "#f57c00",
              ORANGE_430: "#ef6c00",
              ORANGE_460: "#e65100",
              ORANGE_500: "#dd2c00",
              ORANGE_530: "#ffab91",
              ORANGE_560: "#ff8a65",
              ORANGE_600: "#ff7043",
              ORANGE_630: "#ff5722",
              ORANGE_660: "#f4511e",
              ORANGE_700: "#e64a19",
              RED_260: "#ffcdd2",
              RED_300: "#ef9a9a",
              RED_330: "#e57373",
              RED_345: "#ef5350",
              RED_360: "#f44336",
              RED_400: "#e53935",
              RED_430: "#d32f2f",
              RED_460: "#c62828",
              RED_500: "#b71c1c",
              RED_530: "#ff8a80",
              RED_560: "#ff5252",
              RED_600: "#ff1744",
              RED_630: "#d50000",
              RED_660: "#c51162",
              RED_700: "#880e4f",
              YELLOW_100: "#fffde7",
              YELLOW_130: "#fff9c4",
              YELLOW_160: "#fff59d",
              YELLOW_200: "#fff176",
              YELLOW_230: "#ffee58",
              YELLOW_260: "#fdd835",
              YELLOW_300: "#fbc02d",
              YELLOW_330: "#f9a825",
              YELLOW_345: "#f57f17",
              YELLOW_360: "#ffeb3b",
              YELLOW_400: "#fbc02d",
              YELLOW_430: "#fdd835",
              YELLOW_460: "#ffee58",
              YELLOW_500: "#fff176",
              YELLOW_530: "#fff59d",
              YELLOW_560: "#fff9c4",
              YELLOW_600: "#fffde7",
              YELLOW_630: "#fff9c4",
              YELLOW_660: "#fff176",
              YELLOW_700: "#fdd835",
              YELLOW_730: "#fbc02d",
              YELLOW_760: "#f9a825",
              YELLOW_800: "#f57f17",
              YELLOW_830: "#ef6c00",
              YELLOW_860: "#e65100",
              YELLOW_900: "#dd2c00",
              WHITE: "#fffaf1",
              WHITE_500: "#fffaf1"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/cold-heights.ts
  var COLD_HEIGHTS;
  var init_cold_heights = __esm({
    "src/plugins/_core/painter/themes/cold-heights.ts"() {
      "use strict";
      COLD_HEIGHTS = {
        id: "repainter.cold_heights",
        type: "theme",
        display: {
          name: "Cold Heights",
          description: "A cool, icy blue theme inspired by cold mountain heights.",
          authors: [
            {
              name: "Repainter Community",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#4ab3d6"
              },
              BACKGROUND_ACCENT: {
                value: "#1c2e3f"
              },
              BACKGROUND_MENTIONED: {
                value: "#4ab3d6",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#5bc1e3"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#14232e"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#14232e"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#14232e"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#14232e"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#111f29"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#163040"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#163040"
              },
              BACKGROUND_PRIMARY: {
                value: "#111f29"
              },
              BACKGROUND_SECONDARY: {
                value: "#163040"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#163040"
              },
              BACKGROUND_TERTIARY: {
                value: "#0f1a23"
              },
              BG_BASE_PRIMARY: {
                value: "#111f29"
              },
              BG_BASE_SECONDARY: {
                value: "#163040"
              },
              BG_BASE_TERTIARY: {
                value: "#0f1a23"
              },
              EMBED_BACKGROUND: {
                value: "#14232e"
              },
              CARD_PRIMARY_BG: {
                value: "#111f29"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#4ab3d6"
              },
              CARD_SECONDARY_BG: {
                value: "#111f29"
              },
              CHANNEL_ICON: {
                value: "#4ab3d6"
              },
              CHANNELS_DEFAULT: {
                value: "#3ea2ca"
              },
              CHAT_BACKGROUND: {
                value: "#111f29"
              },
              HEADER_PRIMARY: {
                value: "#9dd3e9"
              },
              HEADER_SECONDARY: {
                value: "#80b9d7"
              },
              INPUT_BACKGROUND: {
                value: "#0f1a23"
              },
              INTERACTIVE_ACTIVE: {
                value: "#9dd3e9"
              },
              INTERACTIVE_HOVER: {
                value: "#4ab3d6"
              },
              INTERACTIVE_MUTED: {
                value: "#3ea2ca"
              },
              INTERACTIVE_NORMAL: {
                value: "#5bc1e3"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#14232e"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#2a475f"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#163040"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#9dd3e9"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#9dd3e9"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#163040"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#5bc1e3"
              },
              TEXT_LINK: {
                value: "#4ab3d6"
              },
              TEXT_MUTED: {
                value: "#80b9d7"
              },
              TEXT_NORMAL: {
                value: "#9dd3e9"
              },
              TEXT_PRIMARY: {
                value: "#9dd3e9"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#3ea2ca"
              }
            },
            raw: {
              BRAND_260: "#4ab3d6",
              BRAND_360: "#5bc1e3",
              BRAND_500: "#5bc1e3",
              BRAND_560: "#5bc1e3",
              BLUE_260: "#5bc1e3",
              BLUE_300: "#4ab3d6",
              BLUE_330: "#5bc1e3",
              BLUE_345: "#3ea2ca",
              BLUE_360: "#5bc1e3",
              BLUE_400: "#339dcf",
              BLUE_430: "#2b8ab5",
              BLUE_460: "#257799",
              BLUE_500: "#1f6580",
              BLUE_530: "#1a5167",
              BLUE_560: "#153f4d",
              BLUE_600: "#102c35",
              BLUE_630: "#0c1f25",
              BLUE_660: "#061315",
              BLUE_700: "#020708",
              PRIMARY_100: "#9dd3e9",
              PRIMARY_300: "#111f29",
              PRIMARY_360: "#4ab3d6",
              PRIMARY_400: "#339dcf",
              PRIMARY_460: "#14232e",
              PRIMARY_500: "#9dd3e9",
              PRIMARY_600: "#14232e",
              PRIMARY_630: "#14232e",
              PRIMARY_660: "#0f1a23",
              PRIMARY_700: "#0f1a23",
              PRIMARY_800: "#163040",
              PLUM_10: "#4ab3d6",
              PLUM_13: "#4ab3d6",
              PLUM_15: "#2a475f",
              PLUM_16: "#14232e",
              PLUM_17: "#0f1a23",
              PLUM_18: "#14232e",
              PLUM_20: "#163040",
              PLUM_22: "#0f1a23",
              PLUM_3: "#9dd3e9",
              PLUM_4: "#4ab3d6",
              PLUM_6: "#9dd3e9",
              GREEN_100: "#4ab3d6",
              GREEN_130: "#4ab3d6",
              GREEN_160: "#4ab3d6",
              GREEN_200: "#4ab3d6",
              GREEN_230: "#4ab3d6",
              GREEN_260: "#4ab3d6",
              GREEN_300: "#4ab3d6",
              GREEN_330: "#4ab3d6",
              GREEN_345: "#4ab3d6",
              GREEN_360: "#4ab3d6",
              GREEN_400: "#4ab3d6",
              GREEN_430: "#4ab3d6",
              GREEN_460: "#4ab3d6",
              GREEN_500: "#4ab3d6",
              GREEN_530: "#4ab3d6",
              GREEN_560: "#4ab3d6",
              GREEN_600: "#4ab3d6",
              GREEN_630: "#4ab3d6",
              GREEN_660: "#4ab3d6",
              GREEN_700: "#4ab3d6",
              GREEN_730: "#4ab3d6",
              GREEN_760: "#4ab3d6",
              GREEN_800: "#4ab3d6",
              GREEN_830: "#4ab3d6",
              GREEN_860: "#4ab3d6",
              GREEN_900: "#4ab3d6",
              GUILD_BOOSTING_BLUE: "#4ab3d6",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#4ab3d6",
              GUILD_BOOSTING_PINK: "#99d6f3",
              GUILD_BOOSTING_PURPLE: "#4ab3d6",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#4ab3d6",
              ORANGE_260: "#14232e",
              ORANGE_300: "#14232e",
              ORANGE_330: "#14232e",
              ORANGE_345: "#14232e",
              ORANGE_360: "#14232e",
              ORANGE_400: "#14232e",
              ORANGE_430: "#14232e",
              ORANGE_460: "#14232e",
              ORANGE_500: "#14232e",
              ORANGE_530: "#14232e",
              ORANGE_560: "#14232e",
              ORANGE_600: "#14232e",
              ORANGE_630: "#14232e",
              ORANGE_660: "#14232e",
              ORANGE_700: "#14232e",
              RED_260: "#4ab3d6",
              RED_300: "#4ab3d6",
              RED_330: "#4ab3d6",
              RED_345: "#4ab3d6",
              RED_360: "#4ab3d6",
              RED_400: "#4ab3d6",
              RED_430: "#4ab3d6",
              RED_460: "#4ab3d6",
              RED_500: "#4ab3d6",
              RED_530: "#4ab3d6",
              RED_560: "#4ab3d6",
              RED_600: "#4ab3d6",
              RED_630: "#4ab3d6",
              RED_660: "#4ab3d6",
              RED_700: "#4ab3d6",
              YELLOW_100: "#daf3ff",
              YELLOW_130: "#b9e7ff",
              YELLOW_160: "#9bdcff",
              YELLOW_200: "#75d2ff",
              YELLOW_230: "#57c9ff",
              YELLOW_260: "#33bfff",
              YELLOW_300: "#1eaaff",
              YELLOW_330: "#0096e6",
              YELLOW_345: "#0080b3",
              YELLOW_360: "#006d99",
              YELLOW_400: "#005973",
              YELLOW_430: "#00464d",
              YELLOW_460: "#003326",
              YELLOW_500: "#001f0f",
              YELLOW_530: "#00130b",
              YELLOW_560: "#000a06",
              YELLOW_600: "#000404",
              YELLOW_630: "#000201",
              YELLOW_660: "#000000",
              YELLOW_700: "#000000",
              YELLOW_730: "#000000",
              YELLOW_760: "#000000",
              YELLOW_800: "#000000",
              YELLOW_830: "#000000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#111f29",
              WHITE_500: "#111f29"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/sunset-ember.ts
  var SUNSET_EMBER;
  var init_sunset_ember = __esm({
    "src/plugins/_core/painter/themes/sunset-ember.ts"() {
      "use strict";
      SUNSET_EMBER = {
        id: "sunset.ember",
        type: "theme",
        display: {
          name: "Sunset Ember",
          description: "A warm and cozy theme inspired by a fiery sunset.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#c94f4f"
              },
              BACKGROUND_ACCENT: {
                value: "#ef6f5e"
              },
              BACKGROUND_MENTIONED: {
                value: "#ef6f5e",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#d35a4e"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#442c2e"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#442c2e"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#442c2e"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#442c2e"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#2b1c1e"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#3c2a2c"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#3c2a2c"
              },
              BACKGROUND_PRIMARY: {
                value: "#2b1c1e"
              },
              BACKGROUND_SECONDARY: {
                value: "#3c2a2c"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#3c2a2c"
              },
              BACKGROUND_TERTIARY: {
                value: "#1e1213"
              },
              BG_BASE_PRIMARY: {
                value: "#2b1c1e"
              },
              BG_BASE_SECONDARY: {
                value: "#3c2a2c"
              },
              BG_BASE_TERTIARY: {
                value: "#1e1213"
              },
              EMBED_BACKGROUND: {
                value: "#442c2e"
              },
              CARD_PRIMARY_BG: {
                value: "#2b1c1e"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#ef6f5e"
              },
              CARD_SECONDARY_BG: {
                value: "#2b1c1e"
              },
              CHANNEL_ICON: {
                value: "#c94f4f"
              },
              CHANNELS_DEFAULT: {
                value: "#d35a4e"
              },
              CHAT_BACKGROUND: {
                value: "#2b1c1e"
              },
              HEADER_PRIMARY: {
                value: "#f4b3a0"
              },
              HEADER_SECONDARY: {
                value: "#e89a83"
              },
              INPUT_BACKGROUND: {
                value: "#1e1213"
              },
              INTERACTIVE_ACTIVE: {
                value: "#f4b3a0"
              },
              INTERACTIVE_HOVER: {
                value: "#ef6f5e"
              },
              INTERACTIVE_MUTED: {
                value: "#d35a4e"
              },
              INTERACTIVE_NORMAL: {
                value: "#c94f4f"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#442c2e"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#5a3e3f"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#3c2a2c"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#f4b3a0"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#f4b3a0"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#3c2a2c"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#ef6f5e"
              },
              TEXT_LINK: {
                value: "#ef6f5e"
              },
              TEXT_MUTED: {
                value: "#e89a83"
              },
              TEXT_NORMAL: {
                value: "#f4b3a0"
              },
              TEXT_PRIMARY: {
                value: "#f4b3a0"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#d35a4e"
              }
            },
            raw: {
              BRAND_260: "#c94f4f",
              BRAND_360: "#ef6f5e",
              BRAND_500: "#ef6f5e",
              BRAND_560: "#ef6f5e",
              BLUE_260: "#d35a4e",
              BLUE_300: "#c94f4f",
              BLUE_330: "#d35a4e",
              BLUE_345: "#d35a4e",
              BLUE_360: "#ef6f5e",
              BLUE_400: "#c24848",
              BLUE_430: "#a23f3f",
              BLUE_460: "#8b3535",
              BLUE_500: "#6e2a2a",
              BLUE_530: "#5b2222",
              BLUE_560: "#4a1a1a",
              BLUE_600: "#3c1414",
              BLUE_630: "#2e0f0f",
              BLUE_660: "#210a0a",
              BLUE_700: "#160606",
              PRIMARY_100: "#f4b3a0",
              PRIMARY_300: "#2b1c1e",
              PRIMARY_360: "#ef6f5e",
              PRIMARY_400: "#a23f3f",
              PRIMARY_460: "#d35a4e",
              PRIMARY_500: "#f4b3a0",
              PRIMARY_600: "#442c2e",
              PRIMARY_630: "#442c2e",
              PRIMARY_660: "#1e1213",
              PRIMARY_700: "#1e1213",
              PRIMARY_800: "#3c2a2c",
              PLUM_10: "#c94f4f",
              PLUM_13: "#ef6f5e",
              PLUM_15: "#5a3e3f",
              PLUM_16: "#442c2e",
              PLUM_17: "#1e1213",
              PLUM_18: "#442c2e",
              PLUM_20: "#3c2a2c",
              PLUM_22: "#1e1213",
              PLUM_3: "#f4b3a0",
              PLUM_4: "#ef6f5e",
              PLUM_6: "#f4b3a0",
              GREEN_100: "#ef6f5e",
              GREEN_130: "#ef6f5e",
              GREEN_160: "#ef6f5e",
              GREEN_200: "#ef6f5e",
              GREEN_230: "#ef6f5e",
              GREEN_260: "#ef6f5e",
              GREEN_300: "#ef6f5e",
              GREEN_330: "#ef6f5e",
              GREEN_345: "#ef6f5e",
              GREEN_360: "#ef6f5e",
              GREEN_400: "#ef6f5e",
              GREEN_430: "#ef6f5e",
              GREEN_460: "#ef6f5e",
              GREEN_500: "#ef6f5e",
              GREEN_530: "#ef6f5e",
              GREEN_560: "#ef6f5e",
              GREEN_600: "#ef6f5e",
              GREEN_630: "#ef6f5e",
              GREEN_660: "#ef6f5e",
              GREEN_700: "#ef6f5e",
              GREEN_730: "#ef6f5e",
              GREEN_760: "#ef6f5e",
              GREEN_800: "#ef6f5e",
              GREEN_830: "#ef6f5e",
              GREEN_860: "#ef6f5e",
              GREEN_900: "#ef6f5e",
              GUILD_BOOSTING_BLUE: "#ef6f5e",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#ef6f5e",
              GUILD_BOOSTING_PINK: "#f7c1b6",
              GUILD_BOOSTING_PURPLE: "#e77a76",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#e77a76",
              ORANGE_260: "#ef6f5e",
              ORANGE_300: "#ef6f5e",
              ORANGE_330: "#ef6f5e",
              ORANGE_345: "#ef6f5e",
              ORANGE_360: "#ef6f5e",
              ORANGE_400: "#ef6f5e",
              ORANGE_430: "#ef6f5e",
              ORANGE_460: "#ef6f5e",
              ORANGE_500: "#ef6f5e",
              ORANGE_530: "#ef6f5e",
              ORANGE_560: "#ef6f5e",
              ORANGE_600: "#ef6f5e",
              ORANGE_630: "#ef6f5e",
              ORANGE_660: "#ef6f5e",
              ORANGE_700: "#ef6f5e",
              RED_260: "#c94f4f",
              RED_300: "#c94f4f",
              RED_330: "#c94f4f",
              RED_345: "#c94f4f",
              RED_360: "#c94f4f",
              RED_400: "#c94f4f",
              RED_430: "#c94f4f",
              RED_460: "#c94f4f",
              RED_500: "#c94f4f",
              RED_530: "#c94f4f",
              RED_560: "#c94f4f",
              RED_600: "#c94f4f",
              RED_630: "#c94f4f",
              RED_660: "#c94f4f",
              RED_700: "#c94f4f",
              YELLOW_100: "#fceae6",
              YELLOW_130: "#f8d8d3",
              YELLOW_160: "#f4b3a0",
              YELLOW_200: "#ef6f5e",
              YELLOW_230: "#ef6f5e",
              YELLOW_260: "#ef6f5e",
              YELLOW_300: "#ef6f5e",
              YELLOW_330: "#ef6f5e",
              YELLOW_345: "#ef6f5e",
              YELLOW_360: "#d35a4e",
              YELLOW_400: "#b74a3f",
              YELLOW_430: "#7a2b22",
              YELLOW_460: "#441411",
              YELLOW_500: "#220a08",
              YELLOW_530: "#110504",
              YELLOW_560: "#080302",
              YELLOW_600: "#040101",
              YELLOW_630: "#000000",
              YELLOW_660: "#000000",
              YELLOW_700: "#000000",
              YELLOW_730: "#000000",
              YELLOW_760: "#000000",
              YELLOW_800: "#000000",
              YELLOW_830: "#000000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#2b1c1e",
              WHITE_500: "#2b1c1e"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
      };
    }
  });

  // src/plugins/_core/painter/themes/forest-whisper.ts
  var FOREST_WHISPER;
  var init_forest_whisper = __esm({
    "src/plugins/_core/painter/themes/forest-whisper.ts"() {
      "use strict";
      FOREST_WHISPER = {
        id: "forest.whisper",
        type: "theme",
        display: {
          name: "Forest Whisper",
          description: "A calming green theme inspired by a quiet forest at twilight.",
          authors: [
            {
              name: "Blaze",
              id: "300547560840495104"
            }
          ]
        },
        main: {
          base: "dark",
          colors: {
            semantic: {
              ANDROID_RIPPLE: {
                value: "#497558"
              },
              BACKGROUND_ACCENT: {
                value: "#1e3d2f"
              },
              BACKGROUND_MENTIONED: {
                value: "#497558",
                opacity: 0.1
              },
              BACKGROUND_MENTIONED_HOVER: {
                value: "#3a5a45"
              },
              BACKGROUND_MODIFIER_ACCENT: {
                value: "#836953"
              },
              BACKGROUND_MODIFIER_ACTIVE: {
                value: "#836953"
              },
              BACKGROUND_MODIFIER_HOVER: {
                value: "#836953"
              },
              BACKGROUND_MODIFIER_SELECTED: {
                value: "#836953"
              },
              BACKGROUND_MOBILE_PRIMARY: {
                value: "#152920"
              },
              BACKGROUND_MOBILE_SECONDARY: {
                value: "#243726"
              },
              BACKGROUND_NESTED_FLOATING: {
                value: "#243726"
              },
              BACKGROUND_PRIMARY: {
                value: "#152920"
              },
              BACKGROUND_SECONDARY: {
                value: "#243726"
              },
              BACKGROUND_SECONDARY_ALT: {
                value: "#243726"
              },
              BACKGROUND_TERTIARY: {
                value: "#0e1e16"
              },
              BG_BASE_PRIMARY: {
                value: "#152920"
              },
              BG_BASE_SECONDARY: {
                value: "#243726"
              },
              BG_BASE_TERTIARY: {
                value: "#0e1e16"
              },
              EMBED_BACKGROUND: {
                value: "#836953"
              },
              CARD_PRIMARY_BG: {
                value: "#152920"
              },
              CARD_PRIMARY_PRESSED_BG: {
                value: "#497558"
              },
              CARD_SECONDARY_BG: {
                value: "#152920"
              },
              CHANNEL_ICON: {
                value: "#4fa36b"
              },
              CHANNELS_DEFAULT: {
                value: "#5aa97d"
              },
              CHAT_BACKGROUND: {
                value: "#152920"
              },
              HEADER_PRIMARY: {
                value: "#a4d1a3"
              },
              HEADER_SECONDARY: {
                value: "#82b178"
              },
              INPUT_BACKGROUND: {
                value: "#0e1e16"
              },
              INTERACTIVE_ACTIVE: {
                value: "#a4d1a3"
              },
              INTERACTIVE_HOVER: {
                value: "#497558"
              },
              INTERACTIVE_MUTED: {
                value: "#5aa97d"
              },
              INTERACTIVE_NORMAL: {
                value: "#4fa36b"
              },
              REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
                value: "#836953"
              },
              REDESIGN_BUTTON_SECONDARY_BORDER: {
                value: "#6b574a"
              },
              REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
                value: "#243726"
              },
              REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
                value: "#a4d1a3"
              },
              REDESIGN_CHANNEL_NAME_TEXT: {
                value: "#a4d1a3"
              },
              REDESIGN_CHAT_INPUT_BACKGROUND: {
                value: "#243726"
              },
              REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
                value: "#1e3d2f"
              },
              TEXT_LINK: {
                value: "#1e3d2f"
              },
              TEXT_MUTED: {
                value: "#82b178"
              },
              TEXT_NORMAL: {
                value: "#a4d1a3"
              },
              TEXT_PRIMARY: {
                value: "#a4d1a3"
              },
              THREAD_CHANNEL_SPINE: {
                value: "#5aa97d"
              }
            },
            raw: {
              BRAND_260: "#497558",
              BRAND_360: "#1e3d2f",
              BRAND_500: "#1e3d2f",
              BRAND_560: "#1e3d2f",
              BLUE_260: "#5aa97d",
              BLUE_300: "#497558",
              BLUE_330: "#5aa97d",
              BLUE_345: "#5aa97d",
              BLUE_360: "#1e3d2f",
              BLUE_400: "#3a5a45",
              BLUE_430: "#2b3d2e",
              BLUE_460: "#224027",
              BLUE_500: "#182f1f",
              BLUE_530: "#122616",
              BLUE_560: "#0d1c10",
              BLUE_600: "#0a160c",
              BLUE_630: "#061108",
              BLUE_660: "#041006",
              BLUE_700: "#021003",
              PRIMARY_100: "#a4d1a3",
              PRIMARY_300: "#152920",
              PRIMARY_360: "#1e3d2f",
              PRIMARY_400: "#3a5a45",
              PRIMARY_460: "#497558",
              PRIMARY_500: "#a4d1a3",
              PRIMARY_600: "#836953",
              PRIMARY_630: "#836953",
              PRIMARY_660: "#0e1e16",
              PRIMARY_700: "#0e1e16",
              PRIMARY_800: "#243726",
              PLUM_10: "#4fa36b",
              PLUM_13: "#497558",
              PLUM_15: "#6b574a",
              PLUM_16: "#836953",
              PLUM_17: "#0e1e16",
              PLUM_18: "#836953",
              PLUM_20: "#243726",
              PLUM_22: "#0e1e16",
              PLUM_3: "#a4d1a3",
              PLUM_4: "#497558",
              PLUM_6: "#a4d1a3",
              GREEN_100: "#497558",
              GREEN_130: "#497558",
              GREEN_160: "#497558",
              GREEN_200: "#497558",
              GREEN_230: "#497558",
              GREEN_260: "#497558",
              GREEN_300: "#497558",
              GREEN_330: "#497558",
              GREEN_345: "#497558",
              GREEN_360: "#497558",
              GREEN_400: "#497558",
              GREEN_430: "#497558",
              GREEN_460: "#497558",
              GREEN_500: "#497558",
              GREEN_530: "#497558",
              GREEN_560: "#497558",
              GREEN_600: "#497558",
              GREEN_630: "#497558",
              GREEN_660: "#497558",
              GREEN_700: "#497558",
              GREEN_730: "#497558",
              GREEN_760: "#497558",
              GREEN_800: "#497558",
              GREEN_830: "#497558",
              GREEN_860: "#497558",
              GREEN_900: "#497558",
              GUILD_BOOSTING_BLUE: "#497558",
              GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#497558",
              GUILD_BOOSTING_PINK: "#89b47a",
              GUILD_BOOSTING_PURPLE: "#69965a",
              GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#69965a",
              ORANGE_260: "#836953",
              ORANGE_300: "#836953",
              ORANGE_330: "#836953",
              ORANGE_345: "#836953",
              ORANGE_360: "#836953",
              ORANGE_400: "#836953",
              ORANGE_430: "#836953",
              ORANGE_460: "#836953",
              ORANGE_500: "#836953",
              ORANGE_530: "#836953",
              ORANGE_560: "#836953",
              ORANGE_600: "#836953",
              ORANGE_630: "#836953",
              ORANGE_660: "#836953",
              ORANGE_700: "#836953",
              RED_260: "#497558",
              RED_300: "#497558",
              RED_330: "#497558",
              RED_345: "#497558",
              RED_360: "#497558",
              RED_400: "#497558",
              RED_430: "#497558",
              RED_460: "#497558",
              RED_500: "#497558",
              RED_530: "#497558",
              RED_560: "#497558",
              RED_600: "#497558",
              RED_630: "#497558",
              RED_660: "#497558",
              RED_700: "#497558",
              YELLOW_100: "#e4f0db",
              YELLOW_130: "#c5dbb3",
              YELLOW_160: "#a4d1a3",
              YELLOW_200: "#497558",
              YELLOW_230: "#3a5a45",
              YELLOW_260: "#1e3d2f",
              YELLOW_300: "#152920",
              YELLOW_330: "#0e1e16",
              YELLOW_345: "#0e1e16",
              YELLOW_360: "#0e1e16",
              YELLOW_400: "#0a160c",
              YELLOW_430: "#061108",
              YELLOW_460: "#021003",
              YELLOW_500: "#011001",
              YELLOW_530: "#010b01",
              YELLOW_560: "#010601",
              YELLOW_600: "#010301",
              YELLOW_630: "#000000",
              YELLOW_660: "#000000",
              YELLOW_700: "#000000",
              YELLOW_730: "#000000",
              YELLOW_760: "#000000",
              YELLOW_800: "#000000",
              YELLOW_830: "#000000",
              YELLOW_860: "#000000",
              YELLOW_900: "#000000",
              WHITE: "#152920",
              WHITE_500: "#152920"
            }
          }
        },
        asAddonMetadata() {
          throw new Error("Function not implemented.");
        }
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
  var logger30, formDividerModule, tokenRefModule, UserSettingsActionCreators, useThemeStore;
  var init_useThemeStore = __esm({
    "src/plugins/_core/painter/useThemeStore.ts"() {
      "use strict";
      init_logger();
      init_kvStorage();
      init_wrappers();
      init_dist();
      init_esm();
      init_middleware();
      init_parser2();
      init_purple_haze();
      init_catppuccin_mocha();
      init_rose_pink();
      init_ocean_mist();
      init_red_on_black();
      init_solar_bloom();
      init_cold_heights();
      init_sunset_ember();
      init_forest_whisper();
      logger30 = blzlogger.createChild("ThemeStore");
      formDividerModule = lookupByProps("DIVIDER_COLORS");
      tokenRefModule = lookupByProps("SemanticColor");
      UserSettingsActionCreators = lookupByProps("updateTheme", "setShouldSyncAppearanceSettings").asLazy();
      __name(getCurrentRef, "getCurrentRef");
      window.applyTheme = applyTheme;
      __name(applyTheme, "applyTheme");
      useThemeStore = create(persist((set2, get) => ({
        appliedTheme: null,
        currentRef: null,
        themes: [
          PURPLE_HAZE,
          OCEAN_MIST,
          FOREST_WHISPER,
          SUNSET_EMBER,
          COLD_HEIGHTS,
          MOCHA_THEME,
          BLOOD_TERMINAL,
          ROSIE_PINK_THEME,
          SOLAR_BLOOM
        ],
        setThemeRef: /* @__PURE__ */ __name((id) => {
          set2({
            appliedTheme: null,
            currentRef: null
          });
          if (id != null) {
            var theme = get().themes.find((t4) => t4.id === id);
            if (!theme) throw new Error(`Theme is not installed: ${id}`);
            var stableKey = `blz-theme-${id.replace(/[^a-z0-9]/gi, "_")}`;
            set2({
              appliedTheme: id,
              currentRef: {
                key: stableKey,
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
            if (state2) {
              if (state2.appliedTheme) {
                setTimeout(() => {
                  applyTheme(state2.appliedTheme, true);
                }, 500);
              }
              if (state2.themes.length !== 0) {
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
            }
          };
        }
      }));
    }
  });

  // src/components/Blaze/Settings/pages/Themes/index.tsx
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
    "src/components/Blaze/Settings/pages/Themes/index.tsx"() {
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
              var meta25 = a.asAddonMetadata();
              return meta25.name.localeCompare(meta25.name);
            }, "compareFn")
          },
          {
            key: "Z-A",
            label: /* @__PURE__ */ __name(() => "Z-A", "label"),
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var meta25 = a.asAddonMetadata();
              return meta25.name.localeCompare(meta25.name);
            }, "compareFn")
          }
        ],
        filterOptions: []
      });
      __name(Themes, "Themes");
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
        if (asset.__blazecord) {
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
        "components/Discord/": createModuleProxy(() => (init_Discord(), __toCommonJS(Discord_exports))),
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
        "components/Blaze/FilterAndSortBar": createModuleProxy(() => (init_FilterAndSortBar(), __toCommonJS(FilterAndSortBar_exports))),
        "components/Blaze/Callout": createModuleProxy(() => (init_Callout(), __toCommonJS(Callout_exports))),
        "components/Blaze/Tag": createModuleProxy(() => (init_Tag(), __toCommonJS(Tag_exports))),
        "components/Blaze/Codeblock": createModuleProxy(() => (init_Codeblock(), __toCommonJS(Codeblock_exports))),
        "components/Blaze/InlineCheckbox": createModuleProxy(() => (init_InlineCheckbox(), __toCommonJS(InlineCheckbox_exports))),
        "components/Blaze/Search": createModuleProxy(() => (init_Search(), __toCommonJS(Search_exports))),
        "components/Blaze/ErrorCard": createModuleProxy(() => (init_ErrorCard(), __toCommonJS(ErrorCard_exports))),
        "components/Blaze/Settings/PageWrapper": createModuleProxy(() => (init_PageWrapper(), __toCommonJS(PageWrapper_exports))),
        "components/Blaze/Settings/pages/InfoSection": createModuleProxy(() => (init_InfoSection(), __toCommonJS(InfoSection_exports))),
        "components/Blaze/Settings/pages/ResponsiveMasonryFlashList": createModuleProxy(() => (init_ResponsiveMasonryFlashList(), __toCommonJS(ResponsiveMasonryFlashList_exports))),
        "components/Blaze/Settings/pages/Wallpapers/WallpaperPreviewSheet": createModuleProxy(() => (init_WallpaperPreviewSheet(), __toCommonJS(WallpaperPreviewSheet_exports))),
        "components/Blaze/Settings/pages/Wallpapers/": createModuleProxy(() => (init_Wallpapers(), __toCommonJS(Wallpapers_exports))),
        "components/Blaze/Settings/pages/Wallpapers/AddWallpaperSheet": createModuleProxy(() => (init_AddWallpaperSheet(), __toCommonJS(AddWallpaperSheet_exports))),
        "components/Blaze/Settings/pages/Logs/LogDetailsSheet": createModuleProxy(() => (init_LogDetailsSheet(), __toCommonJS(LogDetailsSheet_exports))),
        "components/Blaze/Settings/pages/Logs/": createModuleProxy(() => (init_Logs(), __toCommonJS(Logs_exports))),
        "components/Blaze/Settings/pages/Logs/LogRow": createModuleProxy(() => (init_LogRow(), __toCommonJS(LogRow_exports))),
        "components/Blaze/Settings/pages/Logs/constants": createModuleProxy(() => (init_constants2(), __toCommonJS(constants_exports2))),
        "components/Blaze/Settings/pages/Logs/__mockings__": createModuleProxy(() => (init_mockings(), __toCommonJS(mockings_exports))),
        "components/Blaze/Settings/pages/Developer/ToastPlayground": createModuleProxy(() => (init_ToastPlayground(), __toCommonJS(ToastPlayground_exports))),
        "components/Blaze/Settings/pages/Developer/AssetBrowser": createModuleProxy(() => (init_AssetBrowser(), __toCommonJS(AssetBrowser_exports))),
        "components/Blaze/Settings/pages/Developer/": createModuleProxy(() => (init_Developer(), __toCommonJS(Developer_exports))),
        "components/Blaze/Settings/pages/Developer/AlertsPlayground": createModuleProxy(() => (init_AlertsPlayground(), __toCommonJS(AlertsPlayground_exports))),
        "components/Blaze/Settings/pages/Developer/CalloutPlayground": createModuleProxy(() => (init_CalloutPlayground(), __toCommonJS(CalloutPlayground_exports))),
        "components/Blaze/Settings/pages/Developer/TokenBrowser/Colors": createModuleProxy(() => (init_Colors(), __toCommonJS(Colors_exports))),
        "components/Blaze/Settings/pages/Developer/TokenBrowser/": createModuleProxy(() => (init_TokenBrowser(), __toCommonJS(TokenBrowser_exports))),
        "components/Blaze/Settings/pages/Themes/": createModuleProxy(() => (init_Themes(), __toCommonJS(Themes_exports))),
        "components/Blaze/Settings/pages/Updater/": createModuleProxy(() => (init_Updater(), __toCommonJS(Updater_exports))),
        "components/Blaze/Settings/pages/Addon/AddonCollectionManager": createModuleProxy(() => (init_AddonCollectionManager(), __toCommonJS(AddonCollectionManager_exports))),
        "components/Blaze/Settings/pages/Addon/": createModuleProxy(() => (init_Addon(), __toCommonJS(Addon_exports))),
        "components/Blaze/Settings/pages/Addon/SearchTermHighlight": createModuleProxy(() => (init_SearchTermHighlight(), __toCommonJS(SearchTermHighlight_exports))),
        "components/Blaze/Settings/pages/Addon/AddonCard": createModuleProxy(() => (init_AddonCard(), __toCommonJS(AddonCard_exports))),
        "components/Blaze/Settings/pages/General/": createModuleProxy(() => (init_General(), __toCommonJS(General_exports))),
        "components/Blaze/Settings/pages/General/ClientInfoSheet": createModuleProxy(() => (init_ClientInfoSheet(), __toCommonJS(ClientInfoSheet_exports))),
        "components/Blaze/Settings/pages/General/InfoCard": createModuleProxy(() => (init_InfoCard(), __toCommonJS(InfoCard_exports))),
        "components/Blaze/Settings/pages/Plugins/TitleComponent": createModuleProxy(() => (init_TitleComponent(), __toCommonJS(TitleComponent_exports))),
        "components/Blaze/Settings/pages/Plugins/SheetAwareIconButton": createModuleProxy(() => (init_SheetAwareIconButton(), __toCommonJS(SheetAwareIconButton_exports))),
        "components/Blaze/Settings/pages/Plugins/": createModuleProxy(() => (init_Plugins(), __toCommonJS(Plugins_exports))),
        "components/Blaze/Settings/pages/Plugins/PluginDetailsSheet": createModuleProxy(() => (init_PluginDetailsSheet(), __toCommonJS(PluginDetailsSheet_exports))),
        "components/Blaze/Settings/pages/Plugins/PluginSheetComponent": createModuleProxy(() => (init_PluginSheetComponent(), __toCommonJS(PluginSheetComponent_exports))),
        "components/Blaze/Settings/pages/Plugins/common/usePluginSettings": createModuleProxy(() => (init_usePluginSettings(), __toCommonJS(usePluginSettings_exports))),
        "components/Blaze/Settings/pages/Plugins/common/getIcon": createModuleProxy(() => (init_getIcon(), __toCommonJS(getIcon_exports))),
        "components/Blaze/Settings/pages/Plugins/common/": createModuleProxy(() => (init_common(), __toCommonJS(common_exports))),
        "components/Blaze/Settings/pages/Plugins/options/StringOptionRow": createModuleProxy(() => (init_StringOptionRow(), __toCommonJS(StringOptionRow_exports))),
        "components/Blaze/Settings/pages/Plugins/options/SliderOptionRow": createModuleProxy(() => (init_SliderOptionRow(), __toCommonJS(SliderOptionRow_exports))),
        "components/Blaze/Settings/pages/Plugins/options/BooleanOptionRow": createModuleProxy(() => (init_BooleanOptionRow(), __toCommonJS(BooleanOptionRow_exports))),
        "components/Blaze/Settings/pages/Plugins/options/BaseCardOption": createModuleProxy(() => (init_BaseCardOption(), __toCommonJS(BaseCardOption_exports))),
        "components/Blaze/Settings/pages/Plugins/options/RadioOptionRow": createModuleProxy(() => (init_RadioOptionRow(), __toCommonJS(RadioOptionRow_exports))),
        "components/Blaze/Settings/pages/Plugins/options/OptionDefRow": createModuleProxy(() => (init_OptionDefRow(), __toCommonJS(OptionDefRow_exports))),
        "components/Blaze/Settings/pages/Plugins/options/OptionSection": createModuleProxy(() => (init_OptionSection(), __toCommonJS(OptionSection_exports))),
        "components/Blaze/Settings/pages/Plugins/options/SelectOptionRow": createModuleProxy(() => (init_SelectOptionRow(), __toCommonJS(SelectOptionRow_exports))),
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
        "api/flux": createModuleProxy(() => (init_flux(), __toCommonJS(flux_exports))),
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
        "metro/common/libraries/Discord": createModuleProxy(() => (init_Discord2(), __toCommonJS(Discord_exports2))),
        "metro/common/libraries/Flux": createModuleProxy(() => (init_Flux(), __toCommonJS(Flux_exports))),
        "metro/common/libraries/Commands": createModuleProxy(() => (init_Commands(), __toCommonJS(Commands_exports))),
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
  function blazecordGlobalObject() {
    var availableModules = Object.keys(blazecordGlobalExports);
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
            defineLazyProperty(childModules, childKey, () => createModuleProxy2(blazecordGlobalExports[fullChildPath], `${fullChildPath}/`));
          }, "_loop");
          if (typeof key !== "string") return baseObject[key];
          var matchingModulePaths = availableModules.filter((modulePath) => modulePath.startsWith(currentPath + key));
          if (matchingModulePaths.length === 0) return baseObject[key];
          if (matchingModulePaths.length === 1 && key === matchingModulePaths[0]) return blazecordGlobalExports[currentPath + key];
          var pathPrefix = new RegExp(`^${currentPath + key}/`);
          var relativePaths = matchingModulePaths.map((path) => `${key}/${path.replace(pathPrefix, "")}`);
          var immediateChildren = getNestedSubPaths(relativePaths);
          var childModules = {};
          for (var childPath of immediateChildren) _loop(childPath);
          var currentModule = blazecordGlobalExports[currentPath + key] ?? {};
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
  var blazecordGlobalExports;
  var init_globals2 = __esm({
    "src/globals.ts"() {
      "use strict";
      init_lazy();
      init_emptyModule();
      blazecordGlobalExports = window.__blazecord_exports = lazyValue(() => (init_globals(), __toCommonJS(globals_exports)).default);
      __name(blazecordGlobalObject, "blazecordGlobalObject");
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    initializeBlazeCord: () => initializeBlazeCord
  });
  function initializeBlazeCord() {
    try {
      blzlogger.info("Initializing BlazeCord...");
      initializeMetro();
      initializePlugins();
      initCheckForUpdates();
      window.blazecord = blazecordGlobalObject();
      blzlogger.info(`Fully initialized BlazeCord in ${(nativePerformanceNow() - BLAZECORD_START_TIME).toFixed(2)}ms!`);
    } catch (e3) {
      reportErrorOnInitialization(e3);
    }
  }
  var init_src2 = __esm({
    "src/index.ts"() {
      "use strict";
      init_logger();
      init_useUpdaterStore();
      init_error_reporter();
      init_globals2();
      init_internal();
      init_usePluginStore();
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
