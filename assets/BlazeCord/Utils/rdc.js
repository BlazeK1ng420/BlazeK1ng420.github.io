(function() {

var window = globalThis, self = globalThis, console = new Proxy({}, { get: () => () => undefined })
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region node_modules/react-devtools-core/dist/backend.js
var require_backend = __commonJS({ "node_modules/react-devtools-core/dist/backend.js"(exports, module) {
	(function webpackUniversalModuleDefinition(root, factory) {
		if (typeof exports === "object" && typeof module === "object") module.exports = factory();
		else if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof exports === "object") exports["ReactDevToolsBackend"] = factory();
		else root["ReactDevToolsBackend"] = factory();
	})(self, () => {
		return (() => {
			var __webpack_modules__ = {
				786: (__unused_webpack_module, exports1, __webpack_require__$1) => {
					"use strict";
					var __webpack_unused_export__;
					/**
					* @license React
					* react-debug-tools.production.js
					*
					* Copyright (c) Meta Platforms, Inc. and affiliates.
					*
					* This source code is licensed under the MIT license found in the
					* LICENSE file in the root directory of this source tree.
					*/ function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					var ErrorStackParser = __webpack_require__$1(206);
					var React = __webpack_require__$1(189);
					var assign = Object.assign;
					var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
					var REACT_CONTEXT_TYPE = Symbol.for("react.context");
					var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
					var hasOwnProperty = Object.prototype.hasOwnProperty;
					var hookLog = [];
					var primitiveStackCache = null;
					function getPrimitiveStackCache() {
						if (null === primitiveStackCache) {
							var cache = new Map();
							try {
								Dispatcher.useContext({ _currentValue: null });
								Dispatcher.useState(null);
								Dispatcher.useReducer(function(s) {
									return s;
								}, null);
								Dispatcher.useRef(null);
								"function" === typeof Dispatcher.useCacheRefresh && Dispatcher.useCacheRefresh();
								Dispatcher.useLayoutEffect(function() {});
								Dispatcher.useInsertionEffect(function() {});
								Dispatcher.useEffect(function() {});
								Dispatcher.useImperativeHandle(void 0, function() {
									return null;
								});
								Dispatcher.useDebugValue(null);
								Dispatcher.useCallback(function() {});
								Dispatcher.useTransition();
								Dispatcher.useSyncExternalStore(function() {
									return function() {};
								}, function() {
									return null;
								}, function() {
									return null;
								});
								Dispatcher.useDeferredValue(null);
								Dispatcher.useMemo(function() {
									return null;
								});
								"function" === typeof Dispatcher.useMemoCache && Dispatcher.useMemoCache(0);
								"function" === typeof Dispatcher.useOptimistic && Dispatcher.useOptimistic(null, function(s) {
									return s;
								});
								"function" === typeof Dispatcher.useFormState && Dispatcher.useFormState(function(s) {
									return s;
								}, null);
								"function" === typeof Dispatcher.useActionState && Dispatcher.useActionState(function(s) {
									return s;
								}, null);
								if ("function" === typeof Dispatcher.use) {
									Dispatcher.use({
										$$typeof: REACT_CONTEXT_TYPE,
										_currentValue: null
									});
									Dispatcher.use({
										then: function then() {},
										status: "fulfilled",
										value: null
									});
									try {
										Dispatcher.use({ then: function then() {} });
									} catch (x) {}
								}
								Dispatcher.useId();
								"function" === typeof Dispatcher.useHostTransitionStatus && Dispatcher.useHostTransitionStatus();
							} finally {
								var readHookLog = hookLog;
								hookLog = [];
							}
							for (var i = 0; i < readHookLog.length; i++) {
								var hook = readHookLog[i];
								cache.set(hook.primitive, ErrorStackParser.parse(hook.stackError));
							}
							primitiveStackCache = cache;
						}
						return primitiveStackCache;
					}
					var currentFiber = null;
					var currentHook = null;
					var currentContextDependency = null;
					function nextHook() {
						var hook = currentHook;
						null !== hook && (currentHook = hook.next);
						return hook;
					}
					function readContext(context) {
						if (null === currentFiber) return context._currentValue;
						if (null === currentContextDependency) throw Error("Context reads do not line up with context dependencies. This is a bug in React Debug Tools.");
						hasOwnProperty.call(currentContextDependency, "memoizedValue") ? (context = currentContextDependency.memoizedValue, currentContextDependency = currentContextDependency.next) : context = context._currentValue;
						return context;
					}
					var SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
					var Dispatcher = {
						use: function use(usable) {
							if (null !== usable && "object" === _typeof(usable)) {
								if ("function" === typeof usable.then) {
									switch (usable.status) {
										case "fulfilled":
											var fulfilledValue = usable.value;
											hookLog.push({
												displayName: null,
												primitive: "Promise",
												stackError: Error(),
												value: fulfilledValue,
												debugInfo: void 0 === usable._debugInfo ? null : usable._debugInfo,
												dispatcherHookName: "Use"
											});
											return fulfilledValue;
										case "rejected": throw usable.reason;
									}
									hookLog.push({
										displayName: null,
										primitive: "Unresolved",
										stackError: Error(),
										value: usable,
										debugInfo: void 0 === usable._debugInfo ? null : usable._debugInfo,
										dispatcherHookName: "Use"
									});
									throw SuspenseException;
								}
								if (usable.$$typeof === REACT_CONTEXT_TYPE) return fulfilledValue = readContext(usable), hookLog.push({
									displayName: usable.displayName || "Context",
									primitive: "Context (use)",
									stackError: Error(),
									value: fulfilledValue,
									debugInfo: null,
									dispatcherHookName: "Use"
								}), fulfilledValue;
							}
							throw Error("An unsupported type was passed to use(): " + String(usable));
						},
						readContext,
						useCacheRefresh: function useCacheRefresh() {
							var hook = nextHook();
							hookLog.push({
								displayName: null,
								primitive: "CacheRefresh",
								stackError: Error(),
								value: null !== hook ? hook.memoizedState : function() {},
								debugInfo: null,
								dispatcherHookName: "CacheRefresh"
							});
							return function() {};
						},
						useCallback: function useCallback(callback) {
							var hook = nextHook();
							hookLog.push({
								displayName: null,
								primitive: "Callback",
								stackError: Error(),
								value: null !== hook ? hook.memoizedState[0] : callback,
								debugInfo: null,
								dispatcherHookName: "Callback"
							});
							return callback;
						},
						useContext: function useContext(context) {
							var value1 = readContext(context);
							hookLog.push({
								displayName: context.displayName || null,
								primitive: "Context",
								stackError: Error(),
								value: value1,
								debugInfo: null,
								dispatcherHookName: "Context"
							});
							return value1;
						},
						useEffect: function useEffect(create) {
							nextHook();
							hookLog.push({
								displayName: null,
								primitive: "Effect",
								stackError: Error(),
								value: create,
								debugInfo: null,
								dispatcherHookName: "Effect"
							});
						},
						useImperativeHandle: function useImperativeHandle(ref) {
							nextHook();
							var instance = void 0;
							null !== ref && "object" === _typeof(ref) && (instance = ref.current);
							hookLog.push({
								displayName: null,
								primitive: "ImperativeHandle",
								stackError: Error(),
								value: instance,
								debugInfo: null,
								dispatcherHookName: "ImperativeHandle"
							});
						},
						useDebugValue: function useDebugValue(value1, formatterFn) {
							hookLog.push({
								displayName: null,
								primitive: "DebugValue",
								stackError: Error(),
								value: "function" === typeof formatterFn ? formatterFn(value1) : value1,
								debugInfo: null,
								dispatcherHookName: "DebugValue"
							});
						},
						useLayoutEffect: function useLayoutEffect(create) {
							nextHook();
							hookLog.push({
								displayName: null,
								primitive: "LayoutEffect",
								stackError: Error(),
								value: create,
								debugInfo: null,
								dispatcherHookName: "LayoutEffect"
							});
						},
						useInsertionEffect: function useInsertionEffect(create) {
							nextHook();
							hookLog.push({
								displayName: null,
								primitive: "InsertionEffect",
								stackError: Error(),
								value: create,
								debugInfo: null,
								dispatcherHookName: "InsertionEffect"
							});
						},
						useMemo: function useMemo(nextCreate) {
							var hook = nextHook();
							nextCreate = null !== hook ? hook.memoizedState[0] : nextCreate();
							hookLog.push({
								displayName: null,
								primitive: "Memo",
								stackError: Error(),
								value: nextCreate,
								debugInfo: null,
								dispatcherHookName: "Memo"
							});
							return nextCreate;
						},
						useMemoCache: function useMemoCache(size) {
							var fiber = currentFiber;
							if (null == fiber) return [];
							var $jscomp$optchain$tmp1432063890$0;
							fiber = null == ($jscomp$optchain$tmp1432063890$0 = fiber.updateQueue) ? void 0 : $jscomp$optchain$tmp1432063890$0.memoCache;
							if (null == fiber) return [];
							$jscomp$optchain$tmp1432063890$0 = fiber.data[fiber.index];
							if (void 0 === $jscomp$optchain$tmp1432063890$0) {
								$jscomp$optchain$tmp1432063890$0 = fiber.data[fiber.index] = Array(size);
								for (var i = 0; i < size; i++) $jscomp$optchain$tmp1432063890$0[i] = REACT_MEMO_CACHE_SENTINEL;
							}
							fiber.index++;
							return $jscomp$optchain$tmp1432063890$0;
						},
						useOptimistic: function useOptimistic(passthrough) {
							var hook = nextHook();
							passthrough = null !== hook ? hook.memoizedState : passthrough;
							hookLog.push({
								displayName: null,
								primitive: "Optimistic",
								stackError: Error(),
								value: passthrough,
								debugInfo: null,
								dispatcherHookName: "Optimistic"
							});
							return [passthrough, function() {}];
						},
						useReducer: function useReducer(reducer, initialArg, init) {
							reducer = nextHook();
							initialArg = null !== reducer ? reducer.memoizedState : void 0 !== init ? init(initialArg) : initialArg;
							hookLog.push({
								displayName: null,
								primitive: "Reducer",
								stackError: Error(),
								value: initialArg,
								debugInfo: null,
								dispatcherHookName: "Reducer"
							});
							return [initialArg, function() {}];
						},
						useRef: function useRef(initialValue) {
							var hook = nextHook();
							initialValue = null !== hook ? hook.memoizedState : { current: initialValue };
							hookLog.push({
								displayName: null,
								primitive: "Ref",
								stackError: Error(),
								value: initialValue.current,
								debugInfo: null,
								dispatcherHookName: "Ref"
							});
							return initialValue;
						},
						useState: function useState(initialState) {
							var hook = nextHook();
							initialState = null !== hook ? hook.memoizedState : "function" === typeof initialState ? initialState() : initialState;
							hookLog.push({
								displayName: null,
								primitive: "State",
								stackError: Error(),
								value: initialState,
								debugInfo: null,
								dispatcherHookName: "State"
							});
							return [initialState, function() {}];
						},
						useTransition: function useTransition() {
							var stateHook = nextHook();
							nextHook();
							stateHook = null !== stateHook ? stateHook.memoizedState : !1;
							hookLog.push({
								displayName: null,
								primitive: "Transition",
								stackError: Error(),
								value: stateHook,
								debugInfo: null,
								dispatcherHookName: "Transition"
							});
							return [stateHook, function() {}];
						},
						useSyncExternalStore: function useSyncExternalStore(subscribe, getSnapshot) {
							nextHook();
							nextHook();
							subscribe = getSnapshot();
							hookLog.push({
								displayName: null,
								primitive: "SyncExternalStore",
								stackError: Error(),
								value: subscribe,
								debugInfo: null,
								dispatcherHookName: "SyncExternalStore"
							});
							return subscribe;
						},
						useDeferredValue: function useDeferredValue(value1) {
							var hook = nextHook();
							value1 = null !== hook ? hook.memoizedState : value1;
							hookLog.push({
								displayName: null,
								primitive: "DeferredValue",
								stackError: Error(),
								value: value1,
								debugInfo: null,
								dispatcherHookName: "DeferredValue"
							});
							return value1;
						},
						useId: function useId() {
							var hook = nextHook();
							hook = null !== hook ? hook.memoizedState : "";
							hookLog.push({
								displayName: null,
								primitive: "Id",
								stackError: Error(),
								value: hook,
								debugInfo: null,
								dispatcherHookName: "Id"
							});
							return hook;
						},
						useFormState: function useFormState(action, initialState) {
							var hook = nextHook();
							nextHook();
							nextHook();
							action = Error();
							var debugInfo = null, error = null;
							if (null !== hook) if (initialState = hook.memoizedState, "object" === _typeof(initialState) && null !== initialState && "function" === typeof initialState.then) switch (initialState.status) {
								case "fulfilled":
									var value1 = initialState.value;
									debugInfo = void 0 === initialState._debugInfo ? null : initialState._debugInfo;
									break;
								case "rejected":
									error = initialState.reason;
									break;
								default: error = SuspenseException, debugInfo = void 0 === initialState._debugInfo ? null : initialState._debugInfo, value1 = initialState;
							}
							else value1 = initialState;
							else value1 = initialState;
							hookLog.push({
								displayName: null,
								primitive: "FormState",
								stackError: action,
								value: value1,
								debugInfo,
								dispatcherHookName: "FormState"
							});
							if (null !== error) throw error;
							return [
								value1,
								function() {},
								!1
							];
						},
						useActionState: function useActionState(action, initialState) {
							var hook = nextHook();
							nextHook();
							nextHook();
							action = Error();
							var debugInfo = null, error = null;
							if (null !== hook) if (initialState = hook.memoizedState, "object" === _typeof(initialState) && null !== initialState && "function" === typeof initialState.then) switch (initialState.status) {
								case "fulfilled":
									var value1 = initialState.value;
									debugInfo = void 0 === initialState._debugInfo ? null : initialState._debugInfo;
									break;
								case "rejected":
									error = initialState.reason;
									break;
								default: error = SuspenseException, debugInfo = void 0 === initialState._debugInfo ? null : initialState._debugInfo, value1 = initialState;
							}
							else value1 = initialState;
							else value1 = initialState;
							hookLog.push({
								displayName: null,
								primitive: "ActionState",
								stackError: action,
								value: value1,
								debugInfo,
								dispatcherHookName: "ActionState"
							});
							if (null !== error) throw error;
							return [
								value1,
								function() {},
								!1
							];
						},
						useHostTransitionStatus: function useHostTransitionStatus() {
							var status = readContext({ _currentValue: null });
							hookLog.push({
								displayName: null,
								primitive: "HostTransitionStatus",
								stackError: Error(),
								value: status,
								debugInfo: null,
								dispatcherHookName: "HostTransitionStatus"
							});
							return status;
						}
					};
					var DispatcherProxyHandler = { get: function get(target, prop) {
						if (target.hasOwnProperty(prop)) return target[prop];
						target = Error("Missing method in Dispatcher: " + prop);
						target.name = "ReactDebugToolsUnsupportedHookError";
						throw target;
					} };
					var DispatcherProxy = "undefined" === typeof Proxy ? Dispatcher : new Proxy(Dispatcher, DispatcherProxyHandler);
					var mostLikelyAncestorIndex = 0;
					function findSharedIndex(hookStack, rootStack, rootIndex) {
						var source = rootStack[rootIndex].source;
						var i = 0;
						a: for (; i < hookStack.length; i++) if (hookStack[i].source === source) {
							for (var a = rootIndex + 1, b = i + 1; a < rootStack.length && b < hookStack.length; a++, b++) if (hookStack[b].source !== rootStack[a].source) continue a;
							return i;
						}
						return -1;
					}
					function isReactWrapper(functionName, wrapperName) {
						functionName = parseHookName(functionName);
						return "HostTransitionStatus" === wrapperName ? functionName === wrapperName || "FormStatus" === functionName : functionName === wrapperName;
					}
					function parseHookName(functionName) {
						if (!functionName) return "";
						var startIndex = functionName.lastIndexOf("[as ");
						if (-1 !== startIndex) return parseHookName(functionName.slice(startIndex + 4, -1));
						startIndex = functionName.lastIndexOf(".");
						startIndex = -1 === startIndex ? 0 : startIndex + 1;
						if ("use" === functionName.slice(startIndex, startIndex + 3)) {
							if (3 === functionName.length - startIndex) return "Use";
							startIndex += 3;
						}
						return functionName.slice(startIndex);
					}
					function buildTree(rootStack$jscomp$0, readHookLog) {
						for (var rootChildren = [], prevStack = null, levelChildren = rootChildren, nativeHookID = 0, stackOfChildren = [], i = 0; i < readHookLog.length; i++) {
							var hook = readHookLog[i];
							var rootStack = rootStack$jscomp$0;
							var JSCompiler_inline_result = ErrorStackParser.parse(hook.stackError);
							b: {
								var hookStack = JSCompiler_inline_result;
								var rootIndex = findSharedIndex(hookStack, rootStack, mostLikelyAncestorIndex);
								if (-1 !== rootIndex) rootStack = rootIndex;
								else {
									for (var i$jscomp$0 = 0; i$jscomp$0 < rootStack.length && 5 > i$jscomp$0; i$jscomp$0++) if (rootIndex = findSharedIndex(hookStack, rootStack, i$jscomp$0), -1 !== rootIndex) {
										mostLikelyAncestorIndex = i$jscomp$0;
										rootStack = rootIndex;
										break b;
									}
									rootStack = -1;
								}
							}
							b: {
								hookStack = JSCompiler_inline_result;
								rootIndex = getPrimitiveStackCache().get(hook.primitive);
								if (void 0 !== rootIndex) {
									for (i$jscomp$0 = 0; i$jscomp$0 < rootIndex.length && i$jscomp$0 < hookStack.length; i$jscomp$0++) if (rootIndex[i$jscomp$0].source !== hookStack[i$jscomp$0].source) {
										i$jscomp$0 < hookStack.length - 1 && isReactWrapper(hookStack[i$jscomp$0].functionName, hook.dispatcherHookName) && i$jscomp$0++;
										i$jscomp$0 < hookStack.length - 1 && isReactWrapper(hookStack[i$jscomp$0].functionName, hook.dispatcherHookName) && i$jscomp$0++;
										hookStack = i$jscomp$0;
										break b;
									}
								}
								hookStack = -1;
							}
							JSCompiler_inline_result = -1 === rootStack || -1 === hookStack || 2 > rootStack - hookStack ? -1 === hookStack ? [null, null] : [JSCompiler_inline_result[hookStack - 1], null] : [JSCompiler_inline_result[hookStack - 1], JSCompiler_inline_result.slice(hookStack, rootStack - 1)];
							hookStack = JSCompiler_inline_result[0];
							JSCompiler_inline_result = JSCompiler_inline_result[1];
							rootStack = hook.displayName;
							null === rootStack && null !== hookStack && (rootStack = parseHookName(hookStack.functionName) || parseHookName(hook.dispatcherHookName));
							if (null !== JSCompiler_inline_result) {
								hookStack = 0;
								if (null !== prevStack) {
									for (; hookStack < JSCompiler_inline_result.length && hookStack < prevStack.length && JSCompiler_inline_result[JSCompiler_inline_result.length - hookStack - 1].source === prevStack[prevStack.length - hookStack - 1].source;) hookStack++;
									for (prevStack = prevStack.length - 1; prevStack > hookStack; prevStack--) levelChildren = stackOfChildren.pop();
								}
								for (prevStack = JSCompiler_inline_result.length - hookStack - 1; 1 <= prevStack; prevStack--) hookStack = [], rootIndex = JSCompiler_inline_result[prevStack], rootIndex = {
									id: null,
									isStateEditable: !1,
									name: parseHookName(JSCompiler_inline_result[prevStack - 1].functionName),
									value: void 0,
									subHooks: hookStack,
									debugInfo: null,
									hookSource: {
										lineNumber: rootIndex.lineNumber,
										columnNumber: rootIndex.columnNumber,
										functionName: rootIndex.functionName,
										fileName: rootIndex.fileName
									}
								}, levelChildren.push(rootIndex), stackOfChildren.push(levelChildren), levelChildren = hookStack;
								prevStack = JSCompiler_inline_result;
							}
							hookStack = hook.primitive;
							rootIndex = hook.debugInfo;
							hook = {
								id: "Context" === hookStack || "Context (use)" === hookStack || "DebugValue" === hookStack || "Promise" === hookStack || "Unresolved" === hookStack || "HostTransitionStatus" === hookStack ? null : nativeHookID++,
								isStateEditable: "Reducer" === hookStack || "State" === hookStack,
								name: rootStack || hookStack,
								value: hook.value,
								subHooks: [],
								debugInfo: rootIndex,
								hookSource: null
							};
							rootStack = {
								lineNumber: null,
								functionName: null,
								fileName: null,
								columnNumber: null
							};
							JSCompiler_inline_result && 1 <= JSCompiler_inline_result.length && (JSCompiler_inline_result = JSCompiler_inline_result[0], rootStack.lineNumber = JSCompiler_inline_result.lineNumber, rootStack.functionName = JSCompiler_inline_result.functionName, rootStack.fileName = JSCompiler_inline_result.fileName, rootStack.columnNumber = JSCompiler_inline_result.columnNumber);
							hook.hookSource = rootStack;
							levelChildren.push(hook);
						}
						processDebugValues(rootChildren, null);
						return rootChildren;
					}
					function processDebugValues(hooksTree, parentHooksNode) {
						for (var debugValueHooksNodes = [], i = 0; i < hooksTree.length; i++) {
							var hooksNode = hooksTree[i];
							"DebugValue" === hooksNode.name && 0 === hooksNode.subHooks.length ? (hooksTree.splice(i, 1), i--, debugValueHooksNodes.push(hooksNode)) : processDebugValues(hooksNode.subHooks, hooksNode);
						}
						null !== parentHooksNode && (1 === debugValueHooksNodes.length ? parentHooksNode.value = debugValueHooksNodes[0].value : 1 < debugValueHooksNodes.length && (parentHooksNode.value = debugValueHooksNodes.map(function(_ref) {
							return _ref.value;
						})));
					}
					function handleRenderFunctionError(error) {
						if (error !== SuspenseException) {
							if (error instanceof Error && "ReactDebugToolsUnsupportedHookError" === error.name) throw error;
							var wrapperError = Error("Error rendering inspected component", { cause: error });
							wrapperError.name = "ReactDebugToolsRenderError";
							wrapperError.cause = error;
							throw wrapperError;
						}
					}
					function inspectHooks(renderFunction, props, currentDispatcher) {
						currentDispatcher ??= ReactSharedInternals;
						var previousDispatcher = currentDispatcher.H;
						currentDispatcher.H = DispatcherProxy;
						try {
							var ancestorStackError = Error();
							renderFunction(props);
						} catch (error) {
							handleRenderFunctionError(error);
						} finally {
							renderFunction = hookLog, hookLog = [], currentDispatcher.H = previousDispatcher;
						}
						currentDispatcher = ErrorStackParser.parse(ancestorStackError);
						return buildTree(currentDispatcher, renderFunction);
					}
					function restoreContexts(contextMap) {
						contextMap.forEach(function(value1, context) {
							return context._currentValue = value1;
						});
					}
					__webpack_unused_export__ = inspectHooks;
					exports1.inspectHooksOfFiber = function(fiber, currentDispatcher) {
						currentDispatcher ??= ReactSharedInternals;
						if (0 !== fiber.tag && 15 !== fiber.tag && 11 !== fiber.tag) throw Error("Unknown Fiber. Needs to be a function component to inspect hooks.");
						getPrimitiveStackCache();
						currentHook = fiber.memoizedState;
						currentFiber = fiber;
						if (hasOwnProperty.call(currentFiber, "dependencies")) {
							var dependencies = currentFiber.dependencies;
							currentContextDependency = null !== dependencies ? dependencies.firstContext : null;
						} else if (hasOwnProperty.call(currentFiber, "dependencies_old")) dependencies = currentFiber.dependencies_old, currentContextDependency = null !== dependencies ? dependencies.firstContext : null;
						else if (hasOwnProperty.call(currentFiber, "dependencies_new")) dependencies = currentFiber.dependencies_new, currentContextDependency = null !== dependencies ? dependencies.firstContext : null;
						else if (hasOwnProperty.call(currentFiber, "contextDependencies")) dependencies = currentFiber.contextDependencies, currentContextDependency = null !== dependencies ? dependencies.first : null;
						else throw Error("Unsupported React version. This is a bug in React Debug Tools.");
						dependencies = fiber.type;
						var props = fiber.memoizedProps;
						if (dependencies !== fiber.elementType && dependencies && dependencies.defaultProps) {
							props = assign({}, props);
							var defaultProps = dependencies.defaultProps;
							for (propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);
						}
						var propName = new Map();
						try {
							if (null !== currentContextDependency && !hasOwnProperty.call(currentContextDependency, "memoizedValue")) for (defaultProps = fiber; defaultProps;) {
								if (10 === defaultProps.tag) {
									var context = defaultProps.type;
									void 0 !== context._context && (context = context._context);
									propName.has(context) || (propName.set(context, context._currentValue), context._currentValue = defaultProps.memoizedProps.value);
								}
								defaultProps = defaultProps.return;
							}
							if (11 === fiber.tag) {
								var renderFunction = dependencies.render;
								context = props;
								var ref = fiber.ref;
								fiber = currentDispatcher;
								var previousDispatcher = fiber.H;
								fiber.H = DispatcherProxy;
								try {
									var ancestorStackError = Error();
									renderFunction(context, ref);
								} catch (error) {
									handleRenderFunctionError(error);
								} finally {
									var readHookLog = hookLog;
									hookLog = [];
									fiber.H = previousDispatcher;
								}
								var rootStack = ErrorStackParser.parse(ancestorStackError);
								return buildTree(rootStack, readHookLog);
							}
							return inspectHooks(dependencies, props, currentDispatcher);
						} finally {
							currentContextDependency = currentHook = currentFiber = null, restoreContexts(propName);
						}
					};
				},
				987: (module1, __unused_webpack_exports, __webpack_require__$1) => {
					"use strict";
					module1.exports = __webpack_require__$1(786);
				},
				890: (__unused_webpack_module, exports1) => {
					"use strict";
					var __webpack_unused_export__;
					/**
					* @license React
					* react-is.production.js
					*
					* Copyright (c) Meta Platforms, Inc. and affiliates.
					*
					* This source code is licensed under the MIT license found in the
					* LICENSE file in the root directory of this source tree.
					*/ function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
					var REACT_PORTAL_TYPE = Symbol.for("react.portal");
					var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
					var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
					var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
					Symbol.for("react.provider");
					var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
					var REACT_CONTEXT_TYPE = Symbol.for("react.context");
					var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
					var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
					var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
					var REACT_MEMO_TYPE = Symbol.for("react.memo");
					var REACT_LAZY_TYPE = Symbol.for("react.lazy");
					var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
					var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
					function typeOf(object) {
						if ("object" === _typeof(object) && null !== object) {
							var $$typeof = object.$$typeof;
							switch ($$typeof) {
								case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
									case REACT_FRAGMENT_TYPE:
									case REACT_PROFILER_TYPE:
									case REACT_STRICT_MODE_TYPE:
									case REACT_SUSPENSE_TYPE:
									case REACT_SUSPENSE_LIST_TYPE: return object;
									default: switch (object = object && object.$$typeof, object) {
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE: return object;
										case REACT_CONSUMER_TYPE: return object;
										default: return $$typeof;
									}
								}
								case REACT_PORTAL_TYPE: return $$typeof;
							}
						}
					}
					exports1.AI = REACT_CONSUMER_TYPE;
					exports1.HQ = REACT_CONTEXT_TYPE;
					__webpack_unused_export__ = REACT_ELEMENT_TYPE;
					exports1.A4 = REACT_FORWARD_REF_TYPE;
					exports1.HY = REACT_FRAGMENT_TYPE;
					exports1.oM = REACT_LAZY_TYPE;
					exports1._Y = REACT_MEMO_TYPE;
					exports1.h_ = REACT_PORTAL_TYPE;
					exports1.Q1 = REACT_PROFILER_TYPE;
					exports1.nF = REACT_STRICT_MODE_TYPE;
					exports1.n4 = REACT_SUSPENSE_TYPE;
					__webpack_unused_export__ = REACT_SUSPENSE_LIST_TYPE;
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_CONSUMER_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_CONTEXT_TYPE;
					};
					exports1.kK = function(object) {
						return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_FORWARD_REF_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_FRAGMENT_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_LAZY_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_MEMO_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_PORTAL_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_PROFILER_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_STRICT_MODE_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_SUSPENSE_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(object) {
						return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
					};
					__webpack_unused_export__ = function __webpack_unused_export__$1(type) {
						return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
					};
					exports1.kM = typeOf;
				},
				126: (__unused_webpack_module, exports1, __webpack_require__$1) => {
					"use strict";
					var process = __webpack_require__$1(169);
					/**
					* @license React
					* react.production.js
					*
					* Copyright (c) Meta Platforms, Inc. and affiliates.
					*
					* This source code is licensed under the MIT license found in the
					* LICENSE file in the root directory of this source tree.
					*/ function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
					var REACT_PORTAL_TYPE = Symbol.for("react.portal");
					var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
					var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
					var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
					var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
					var REACT_CONTEXT_TYPE = Symbol.for("react.context");
					var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
					var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
					var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
					var REACT_MEMO_TYPE = Symbol.for("react.memo");
					var REACT_LAZY_TYPE = Symbol.for("react.lazy");
					var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
					var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
					var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
					var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
					function getIteratorFn(maybeIterable) {
						if (null === maybeIterable || "object" !== _typeof(maybeIterable)) return null;
						maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
						return "function" === typeof maybeIterable ? maybeIterable : null;
					}
					var ReactNoopUpdateQueue = {
						isMounted: function isMounted() {
							return !1;
						},
						enqueueForceUpdate: function enqueueForceUpdate() {},
						enqueueReplaceState: function enqueueReplaceState() {},
						enqueueSetState: function enqueueSetState() {}
					};
					var assign = Object.assign;
					var emptyObject = {};
					function Component(props, context, updater) {
						this.props = props;
						this.context = context;
						this.refs = emptyObject;
						this.updater = updater || ReactNoopUpdateQueue;
					}
					Component.prototype.isReactComponent = {};
					Component.prototype.setState = function(partialState, callback) {
						if ("object" !== _typeof(partialState) && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
						this.updater.enqueueSetState(this, partialState, callback, "setState");
					};
					Component.prototype.forceUpdate = function(callback) {
						this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
					};
					function ComponentDummy() {}
					ComponentDummy.prototype = Component.prototype;
					function PureComponent(props, context, updater) {
						this.props = props;
						this.context = context;
						this.refs = emptyObject;
						this.updater = updater || ReactNoopUpdateQueue;
					}
					var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
					pureComponentPrototype.constructor = PureComponent;
					assign(pureComponentPrototype, Component.prototype);
					pureComponentPrototype.isPureReactComponent = !0;
					var isArrayImpl = Array.isArray;
					var ReactSharedInternals = {
						H: null,
						A: null,
						T: null,
						S: null
					};
					var hasOwnProperty = Object.prototype.hasOwnProperty;
					function ReactElement(type, key, _ref, self1, source, owner, props) {
						_ref = props.ref;
						return {
							$$typeof: REACT_ELEMENT_TYPE,
							type,
							key,
							ref: void 0 !== _ref ? _ref : null,
							props
						};
					}
					function cloneAndReplaceKey(oldElement, newKey) {
						return ReactElement(oldElement.type, newKey, null, void 0, void 0, void 0, oldElement.props);
					}
					function isValidElement(object) {
						return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
					}
					function escape(key) {
						var escaperLookup = {
							"=": "=0",
							":": "=2"
						};
						return "$" + key.replace(/[=:]/g, function(match) {
							return escaperLookup[match];
						});
					}
					var userProvidedKeyEscapeRegex = /\/+/g;
					function getElementKey(element, index) {
						return "object" === _typeof(element) && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
					}
					function noop$1() {}
					function resolveThenable(thenable) {
						switch (thenable.status) {
							case "fulfilled": return thenable.value;
							case "rejected": throw thenable.reason;
							default: switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
								"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
							}, function(error) {
								"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
							})), thenable.status) {
								case "fulfilled": return thenable.value;
								case "rejected": throw thenable.reason;
							}
						}
						throw thenable;
					}
					function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
						var type = _typeof(children);
						if ("undefined" === type || "boolean" === type) children = null;
						var invokeCallback = !1;
						if (null === children) invokeCallback = !0;
						else switch (type) {
							case "bigint":
							case "string":
							case "number":
								invokeCallback = !0;
								break;
							case "object": switch (children.$$typeof) {
								case REACT_ELEMENT_TYPE:
								case REACT_PORTAL_TYPE:
									invokeCallback = !0;
									break;
								case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
							}
						}
						if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
							return c;
						})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
						invokeCallback = 0;
						var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
						if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
						else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
						else if ("object" === type) {
							if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
							array = String(children);
							throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
						}
						return invokeCallback;
					}
					function mapChildren(children, func, context) {
						if (null == children) return children;
						var result = [];
						var count = 0;
						mapIntoArray(children, result, "", "", function(child) {
							return func.call(context, child, count++);
						});
						return result;
					}
					function lazyInitializer(payload) {
						if (-1 === payload._status) {
							var ctor = payload._result;
							ctor = ctor();
							ctor.then(function(moduleObject) {
								if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
							}, function(error) {
								if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
							});
							-1 === payload._status && (payload._status = 0, payload._result = ctor);
						}
						if (1 === payload._status) return payload._result.default;
						throw payload._result;
					}
					function useOptimistic(passthrough, reducer) {
						return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
					}
					var reportGlobalError = "function" === typeof reportError ? reportError : function reportGlobalError$1(error) {
						if ("object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) && "function" === typeof window.ErrorEvent) {
							var event = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message: "object" === _typeof(error) && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
								error
							});
							if (!window.dispatchEvent(event)) return;
						} else if ("object" === (typeof process === "undefined" ? "undefined" : _typeof(process)) && "function" === typeof process.emit) {
							process.emit("uncaughtException", error);
							return;
						}
						console.error(error);
					};
					function noop() {}
					exports1.Children = {
						map: mapChildren,
						forEach: function forEach(children, forEachFunc, forEachContext) {
							mapChildren(children, function() {
								forEachFunc.apply(this, arguments);
							}, forEachContext);
						},
						count: function count(children) {
							var n = 0;
							mapChildren(children, function() {
								n++;
							});
							return n;
						},
						toArray: function toArray(children) {
							return mapChildren(children, function(child) {
								return child;
							}) || [];
						},
						only: function only(children) {
							if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
							return children;
						}
					};
					exports1.Component = Component;
					exports1.Fragment = REACT_FRAGMENT_TYPE;
					exports1.Profiler = REACT_PROFILER_TYPE;
					exports1.PureComponent = PureComponent;
					exports1.StrictMode = REACT_STRICT_MODE_TYPE;
					exports1.Suspense = REACT_SUSPENSE_TYPE;
					exports1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
					exports1.act = function() {
						throw Error("act(...) is not supported in production builds of React.");
					};
					exports1.cache = function(fn) {
						return function() {
							return fn.apply(null, arguments);
						};
					};
					exports1.captureOwnerStack = function() {
						return null;
					};
					exports1.cloneElement = function(element, config, children) {
						if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
						var props = assign({}, element.props);
						var key = element.key;
						var owner = void 0;
						if (null != config) for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
						var propName = arguments.length - 2;
						if (1 === propName) props.children = children;
						else if (1 < propName) {
							for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
							props.children = childArray;
						}
						return ReactElement(element.type, key, null, void 0, void 0, owner, props);
					};
					exports1.createContext = function(defaultValue) {
						defaultValue = {
							$$typeof: REACT_CONTEXT_TYPE,
							_currentValue: defaultValue,
							_currentValue2: defaultValue,
							_threadCount: 0,
							Provider: null,
							Consumer: null
						};
						defaultValue.Provider = defaultValue;
						defaultValue.Consumer = {
							$$typeof: REACT_CONSUMER_TYPE,
							_context: defaultValue
						};
						return defaultValue;
					};
					exports1.createElement = function(type, config, children) {
						var propName;
						var props = {};
						var key = null;
						if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
						var childrenLength = arguments.length - 2;
						if (1 === childrenLength) props.children = children;
						else if (1 < childrenLength) {
							for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
							props.children = childArray;
						}
						if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
						return ReactElement(type, key, null, void 0, void 0, null, props);
					};
					exports1.createRef = function() {
						return { current: null };
					};
					exports1.experimental_useEffectEvent = function(callback) {
						return ReactSharedInternals.H.useEffectEvent(callback);
					};
					exports1.experimental_useOptimistic = function(passthrough, reducer) {
						return useOptimistic(passthrough, reducer);
					};
					exports1.forwardRef = function(render) {
						return {
							$$typeof: REACT_FORWARD_REF_TYPE,
							render
						};
					};
					exports1.isValidElement = isValidElement;
					exports1.lazy = function(ctor) {
						return {
							$$typeof: REACT_LAZY_TYPE,
							_payload: {
								_status: -1,
								_result: ctor
							},
							_init: lazyInitializer
						};
					};
					exports1.memo = function(type, compare) {
						return {
							$$typeof: REACT_MEMO_TYPE,
							type,
							compare: void 0 === compare ? null : compare
						};
					};
					exports1.startTransition = function(scope) {
						var prevTransition = ReactSharedInternals.T;
						var transition = {};
						ReactSharedInternals.T = transition;
						try {
							var returnValue = scope();
							var onStartTransitionFinish = ReactSharedInternals.S;
							null !== onStartTransitionFinish && onStartTransitionFinish(transition, returnValue);
							"object" === _typeof(returnValue) && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
						} catch (error) {
							reportGlobalError(error);
						} finally {
							ReactSharedInternals.T = prevTransition;
						}
					};
					exports1.unstable_Activity = REACT_OFFSCREEN_TYPE;
					exports1.unstable_DebugTracingMode = REACT_DEBUG_TRACING_MODE_TYPE;
					exports1.unstable_SuspenseList = REACT_SUSPENSE_LIST_TYPE;
					exports1.unstable_getCacheForType = function(resourceType) {
						var dispatcher = ReactSharedInternals.A;
						return dispatcher ? dispatcher.getCacheForType(resourceType) : resourceType();
					};
					exports1.unstable_postpone = function(reason) {
						reason = Error(reason);
						reason.$$typeof = REACT_POSTPONE_TYPE;
						throw reason;
					};
					exports1.unstable_useCacheRefresh = function() {
						return ReactSharedInternals.H.useCacheRefresh();
					};
					exports1.use = function(usable) {
						return ReactSharedInternals.H.use(usable);
					};
					exports1.useActionState = function(action, initialState, permalink) {
						return ReactSharedInternals.H.useActionState(action, initialState, permalink);
					};
					exports1.useCallback = function(callback, deps) {
						return ReactSharedInternals.H.useCallback(callback, deps);
					};
					exports1.useContext = function(Context) {
						return ReactSharedInternals.H.useContext(Context);
					};
					exports1.useDebugValue = function() {};
					exports1.useDeferredValue = function(value1, initialValue) {
						return ReactSharedInternals.H.useDeferredValue(value1, initialValue);
					};
					exports1.useEffect = function(create, deps) {
						return ReactSharedInternals.H.useEffect(create, deps);
					};
					exports1.useId = function() {
						return ReactSharedInternals.H.useId();
					};
					exports1.useImperativeHandle = function(ref, create, deps) {
						return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
					};
					exports1.useInsertionEffect = function(create, deps) {
						return ReactSharedInternals.H.useInsertionEffect(create, deps);
					};
					exports1.useLayoutEffect = function(create, deps) {
						return ReactSharedInternals.H.useLayoutEffect(create, deps);
					};
					exports1.useMemo = function(create, deps) {
						return ReactSharedInternals.H.useMemo(create, deps);
					};
					exports1.useOptimistic = useOptimistic;
					exports1.useReducer = function(reducer, initialArg, init) {
						return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
					};
					exports1.useRef = function(initialValue) {
						return ReactSharedInternals.H.useRef(initialValue);
					};
					exports1.useState = function(initialState) {
						return ReactSharedInternals.H.useState(initialState);
					};
					exports1.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
						return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
					};
					exports1.useTransition = function() {
						return ReactSharedInternals.H.useTransition();
					};
					exports1.version = "19.0.0-experimental-572ded3762-20240703";
				},
				189: (module1, __unused_webpack_exports, __webpack_require__$1) => {
					"use strict";
					module1.exports = __webpack_require__$1(126);
				},
				206: function(module1, exports1, __webpack_require__$1) {
					var __WEBPACK_AMD_DEFINE_FACTORY__;
					var __WEBPACK_AMD_DEFINE_ARRAY__;
					var __WEBPACK_AMD_DEFINE_RESULT__;
					function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					(function(root, factory) {
						"use strict";
						__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__$1(430)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports1, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
					})(this, function ErrorStackParser(StackFrame) {
						"use strict";
						var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
						var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
						var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
						return {
							parse: function ErrorStackParser$$parse(error) {
								if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") return this.parseOpera(error);
								else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) return this.parseV8OrIE(error);
								else if (error.stack) return this.parseFFOrSafari(error);
								else throw new Error("Cannot parse given Error object");
							},
							extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
								if (urlLike.indexOf(":") === -1) return [urlLike];
								var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
								var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
								return [
									parts[1],
									parts[2] || void 0,
									parts[3] || void 0
								];
							},
							parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
								var filtered = error.stack.split("\n").filter(function(line) {
									return !!line.match(CHROME_IE_STACK_REGEXP);
								}, this);
								return filtered.map(function(line) {
									if (line.indexOf("(eval ") > -1) line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
									var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(");
									var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
									sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
									var tokens = sanitizedLine.split(/\s+/).slice(1);
									var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
									var functionName = tokens.join(" ") || void 0;
									var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
									return new StackFrame({
										functionName,
										fileName,
										lineNumber: locationParts[1],
										columnNumber: locationParts[2],
										source: line
									});
								}, this);
							},
							parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
								var filtered = error.stack.split("\n").filter(function(line) {
									return !line.match(SAFARI_NATIVE_CODE_REGEXP);
								}, this);
								return filtered.map(function(line) {
									if (line.indexOf(" > eval") > -1) line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
									if (line.indexOf("@") === -1 && line.indexOf(":") === -1) return new StackFrame({ functionName: line });
									else {
										var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
										var matches = line.match(functionNameRegex);
										var functionName = matches && matches[1] ? matches[1] : void 0;
										var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
										return new StackFrame({
											functionName,
											fileName: locationParts[0],
											lineNumber: locationParts[1],
											columnNumber: locationParts[2],
											source: line
										});
									}
								}, this);
							},
							parseOpera: function ErrorStackParser$$parseOpera(e) {
								if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) return this.parseOpera9(e);
								else if (!e.stack) return this.parseOpera10(e);
								else return this.parseOpera11(e);
							},
							parseOpera9: function ErrorStackParser$$parseOpera9(e) {
								var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
								var lines = e.message.split("\n");
								var result = [];
								for (var i = 2, len = lines.length; i < len; i += 2) {
									var match = lineRE.exec(lines[i]);
									if (match) result.push(new StackFrame({
										fileName: match[2],
										lineNumber: match[1],
										source: lines[i]
									}));
								}
								return result;
							},
							parseOpera10: function ErrorStackParser$$parseOpera10(e) {
								var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
								var lines = e.stacktrace.split("\n");
								var result = [];
								for (var i = 0, len = lines.length; i < len; i += 2) {
									var match = lineRE.exec(lines[i]);
									if (match) result.push(new StackFrame({
										functionName: match[3] || void 0,
										fileName: match[2],
										lineNumber: match[1],
										source: lines[i]
									}));
								}
								return result;
							},
							parseOpera11: function ErrorStackParser$$parseOpera11(error) {
								var filtered = error.stack.split("\n").filter(function(line) {
									return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
								}, this);
								return filtered.map(function(line) {
									var tokens = line.split("@");
									var locationParts = this.extractLocation(tokens.pop());
									var functionCall = tokens.shift() || "";
									var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
									var argsRaw;
									if (functionCall.match(/\(([^)]*)\)/)) argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
									var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
									return new StackFrame({
										functionName,
										args,
										fileName: locationParts[0],
										lineNumber: locationParts[1],
										columnNumber: locationParts[2],
										source: line
									});
								}, this);
							}
						};
					});
				},
				172: (module1) => {
					function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					/**
					* lodash (Custom Build) <https://lodash.com/>
					* Build: `lodash modularize exports="npm" -o ./`
					* Copyright jQuery Foundation and other contributors <https://jquery.org/>
					* Released under MIT license <https://lodash.com/license>
					* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
					* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
					*/
					/** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = "Expected a function";
					/** Used as references for various `Number` constants. */ var NAN = NaN;
					/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
					/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
					/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
					/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
					/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
					/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
					/** Detect free variable `global` from Node.js. */ var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global;
					/** Detect free variable `self`. */ var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
					/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
					/** Used for built-in method references. */ var objectProto = Object.prototype;
					/**
					* Used to resolve the
					* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
					* of values.
					*/ var objectToString = objectProto.toString;
					var nativeMax = Math.max;
					var nativeMin = Math.min;
					/**
					* Gets the timestamp of the number of milliseconds that have elapsed since
					* the Unix epoch (1 January 1970 00:00:00 UTC).
					*
					* @static
					* @memberOf _
					* @since 2.4.0
					* @category Date
					* @returns {number} Returns the timestamp.
					* @example
					*
					* _.defer(function(stamp) {
					*   console.log(_.now() - stamp);
					* }, _.now());
					* // => Logs the number of milliseconds it took for the deferred invocation.
					*/ var now = function now$1() {
						return root.Date.now();
					};
					/**
					* Creates a debounced function that delays invoking `func` until after `wait`
					* milliseconds have elapsed since the last time the debounced function was
					* invoked. The debounced function comes with a `cancel` method to cancel
					* delayed `func` invocations and a `flush` method to immediately invoke them.
					* Provide `options` to indicate whether `func` should be invoked on the
					* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
					* with the last arguments provided to the debounced function. Subsequent
					* calls to the debounced function return the result of the last `func`
					* invocation.
					*
					* **Note:** If `leading` and `trailing` options are `true`, `func` is
					* invoked on the trailing edge of the timeout only if the debounced function
					* is invoked more than once during the `wait` timeout.
					*
					* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
					* until to the next tick, similar to `setTimeout` with a timeout of `0`.
					*
					* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
					* for details over the differences between `_.debounce` and `_.throttle`.
					*
					* @static
					* @memberOf _
					* @since 0.1.0
					* @category Function
					* @param {Function} func The function to debounce.
					* @param {number} [wait=0] The number of milliseconds to delay.
					* @param {Object} [options={}] The options object.
					* @param {boolean} [options.leading=false]
					*  Specify invoking on the leading edge of the timeout.
					* @param {number} [options.maxWait]
					*  The maximum time `func` is allowed to be delayed before it's invoked.
					* @param {boolean} [options.trailing=true]
					*  Specify invoking on the trailing edge of the timeout.
					* @returns {Function} Returns the new debounced function.
					* @example
					*
					* // Avoid costly calculations while the window size is in flux.
					* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
					*
					* // Invoke `sendMail` when clicked, debouncing subsequent calls.
					* jQuery(element).on('click', _.debounce(sendMail, 300, {
					*   'leading': true,
					*   'trailing': false
					* }));
					*
					* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
					* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
					* var source = new EventSource('/stream');
					* jQuery(source).on('message', debounced);
					*
					* // Cancel the trailing debounced invocation.
					* jQuery(window).on('popstate', debounced.cancel);
					*/ function debounce(func, wait, options) {
						var lastArgs;
						var lastThis;
						var maxWait;
						var result;
						var timerId;
						var lastCallTime;
						var lastInvokeTime = 0;
						var leading = false;
						var maxing = false;
						var trailing = true;
						if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
						wait = toNumber(wait) || 0;
						if (isObject(options)) {
							leading = !!options.leading;
							maxing = "maxWait" in options;
							maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
							trailing = "trailing" in options ? !!options.trailing : trailing;
						}
						function invokeFunc(time) {
							var args = lastArgs;
							var thisArg = lastThis;
							lastArgs = lastThis = void 0;
							lastInvokeTime = time;
							result = func.apply(thisArg, args);
							return result;
						}
						function leadingEdge(time) {
							lastInvokeTime = time;
							timerId = setTimeout(timerExpired, wait);
							return leading ? invokeFunc(time) : result;
						}
						function remainingWait(time) {
							var timeSinceLastCall = time - lastCallTime;
							var timeSinceLastInvoke = time - lastInvokeTime;
							var result$1 = wait - timeSinceLastCall;
							return maxing ? nativeMin(result$1, maxWait - timeSinceLastInvoke) : result$1;
						}
						function shouldInvoke(time) {
							var timeSinceLastCall = time - lastCallTime;
							var timeSinceLastInvoke = time - lastInvokeTime;
							return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
						}
						function timerExpired() {
							var time = now();
							if (shouldInvoke(time)) return trailingEdge(time);
							timerId = setTimeout(timerExpired, remainingWait(time));
						}
						function trailingEdge(time) {
							timerId = void 0;
							if (trailing && lastArgs) return invokeFunc(time);
							lastArgs = lastThis = void 0;
							return result;
						}
						function cancel() {
							if (timerId !== void 0) clearTimeout(timerId);
							lastInvokeTime = 0;
							lastArgs = lastCallTime = lastThis = timerId = void 0;
						}
						function flush() {
							return timerId === void 0 ? result : trailingEdge(now());
						}
						function debounced() {
							var time = now();
							var isInvoking = shouldInvoke(time);
							lastArgs = arguments;
							lastThis = this;
							lastCallTime = time;
							if (isInvoking) {
								if (timerId === void 0) return leadingEdge(lastCallTime);
								if (maxing) {
									timerId = setTimeout(timerExpired, wait);
									return invokeFunc(lastCallTime);
								}
							}
							if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
							return result;
						}
						debounced.cancel = cancel;
						debounced.flush = flush;
						return debounced;
					}
					/**
					* Creates a throttled function that only invokes `func` at most once per
					* every `wait` milliseconds. The throttled function comes with a `cancel`
					* method to cancel delayed `func` invocations and a `flush` method to
					* immediately invoke them. Provide `options` to indicate whether `func`
					* should be invoked on the leading and/or trailing edge of the `wait`
					* timeout. The `func` is invoked with the last arguments provided to the
					* throttled function. Subsequent calls to the throttled function return the
					* result of the last `func` invocation.
					*
					* **Note:** If `leading` and `trailing` options are `true`, `func` is
					* invoked on the trailing edge of the timeout only if the throttled function
					* is invoked more than once during the `wait` timeout.
					*
					* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
					* until to the next tick, similar to `setTimeout` with a timeout of `0`.
					*
					* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
					* for details over the differences between `_.throttle` and `_.debounce`.
					*
					* @static
					* @memberOf _
					* @since 0.1.0
					* @category Function
					* @param {Function} func The function to throttle.
					* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
					* @param {Object} [options={}] The options object.
					* @param {boolean} [options.leading=true]
					*  Specify invoking on the leading edge of the timeout.
					* @param {boolean} [options.trailing=true]
					*  Specify invoking on the trailing edge of the timeout.
					* @returns {Function} Returns the new throttled function.
					* @example
					*
					* // Avoid excessively updating the position while scrolling.
					* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
					*
					* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
					* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
					* jQuery(element).on('click', throttled);
					*
					* // Cancel the trailing throttled invocation.
					* jQuery(window).on('popstate', throttled.cancel);
					*/ function throttle(func, wait, options) {
						var leading = true;
						var trailing = true;
						if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
						if (isObject(options)) {
							leading = "leading" in options ? !!options.leading : leading;
							trailing = "trailing" in options ? !!options.trailing : trailing;
						}
						return debounce(func, wait, {
							"leading": leading,
							"maxWait": wait,
							"trailing": trailing
						});
					}
					/**
					* Checks if `value` is the
					* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
					* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
					*
					* @static
					* @memberOf _
					* @since 0.1.0
					* @category Lang
					* @param {*} value The value to check.
					* @returns {boolean} Returns `true` if `value` is an object, else `false`.
					* @example
					*
					* _.isObject({});
					* // => true
					*
					* _.isObject([1, 2, 3]);
					* // => true
					*
					* _.isObject(_.noop);
					* // => true
					*
					* _.isObject(null);
					* // => false
					*/ function isObject(value1) {
						var type = _typeof(value1);
						return !!value1 && (type == "object" || type == "function");
					}
					/**
					* Checks if `value` is object-like. A value is object-like if it's not `null`
					* and has a `typeof` result of "object".
					*
					* @static
					* @memberOf _
					* @since 4.0.0
					* @category Lang
					* @param {*} value The value to check.
					* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
					* @example
					*
					* _.isObjectLike({});
					* // => true
					*
					* _.isObjectLike([1, 2, 3]);
					* // => true
					*
					* _.isObjectLike(_.noop);
					* // => false
					*
					* _.isObjectLike(null);
					* // => false
					*/ function isObjectLike(value1) {
						return !!value1 && _typeof(value1) == "object";
					}
					/**
					* Checks if `value` is classified as a `Symbol` primitive or object.
					*
					* @static
					* @memberOf _
					* @since 4.0.0
					* @category Lang
					* @param {*} value The value to check.
					* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
					* @example
					*
					* _.isSymbol(Symbol.iterator);
					* // => true
					*
					* _.isSymbol('abc');
					* // => false
					*/ function isSymbol(value1) {
						return _typeof(value1) == "symbol" || isObjectLike(value1) && objectToString.call(value1) == symbolTag;
					}
					/**
					* Converts `value` to a number.
					*
					* @static
					* @memberOf _
					* @since 4.0.0
					* @category Lang
					* @param {*} value The value to process.
					* @returns {number} Returns the number.
					* @example
					*
					* _.toNumber(3.2);
					* // => 3.2
					*
					* _.toNumber(Number.MIN_VALUE);
					* // => 5e-324
					*
					* _.toNumber(Infinity);
					* // => Infinity
					*
					* _.toNumber('3.2');
					* // => 3.2
					*/ function toNumber(value1) {
						if (typeof value1 == "number") return value1;
						if (isSymbol(value1)) return NAN;
						if (isObject(value1)) {
							var other = typeof value1.valueOf == "function" ? value1.valueOf() : value1;
							value1 = isObject(other) ? other + "" : other;
						}
						if (typeof value1 != "string") return value1 === 0 ? value1 : +value1;
						value1 = value1.replace(reTrim, "");
						var isBinary = reIsBinary.test(value1);
						return isBinary || reIsOctal.test(value1) ? freeParseInt(value1.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value1) ? NAN : +value1;
					}
					module1.exports = throttle;
				},
				730: (module1, __unused_webpack_exports, __webpack_require__$1) => {
					"use strict";
					var process = __webpack_require__$1(169);
					module1.exports = LRUCache;
					var Map1 = __webpack_require__$1(307);
					var util = __webpack_require__$1(82);
					var Yallist = __webpack_require__$1(695);
					var hasSymbol = typeof Symbol === "function" && process.env._nodeLRUCacheForceNoSymbol !== "1";
					var makeSymbol;
					if (hasSymbol) makeSymbol = function makeSymbol$1(key) {
						return Symbol(key);
					};
					else makeSymbol = function makeSymbol$1(key) {
						return "_" + key;
					};
					var MAX = makeSymbol("max");
					var LENGTH = makeSymbol("length");
					var LENGTH_CALCULATOR = makeSymbol("lengthCalculator");
					var ALLOW_STALE = makeSymbol("allowStale");
					var MAX_AGE = makeSymbol("maxAge");
					var DISPOSE = makeSymbol("dispose");
					var NO_DISPOSE_ON_SET = makeSymbol("noDisposeOnSet");
					var LRU_LIST = makeSymbol("lruList");
					var CACHE = makeSymbol("cache");
					function naiveLength() {
						return 1;
					}
					function LRUCache(options) {
						if (!(this instanceof LRUCache)) return new LRUCache(options);
						if (typeof options === "number") options = { max: options };
						if (!options) options = {};
						var max = this[MAX] = options.max;
						if (!max || !(typeof max === "number") || max <= 0) this[MAX] = Infinity;
						var lc = options.length || naiveLength;
						if (typeof lc !== "function") lc = naiveLength;
						this[LENGTH_CALCULATOR] = lc;
						this[ALLOW_STALE] = options.stale || false;
						this[MAX_AGE] = options.maxAge || 0;
						this[DISPOSE] = options.dispose;
						this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
						this.reset();
					}
					Object.defineProperty(LRUCache.prototype, "max", {
						set: function set(mL) {
							if (!mL || !(typeof mL === "number") || mL <= 0) mL = Infinity;
							this[MAX] = mL;
							trim(this);
						},
						get: function get$1() {
							return this[MAX];
						},
						enumerable: true
					});
					Object.defineProperty(LRUCache.prototype, "allowStale", {
						set: function set(allowStale) {
							this[ALLOW_STALE] = !!allowStale;
						},
						get: function get$1() {
							return this[ALLOW_STALE];
						},
						enumerable: true
					});
					Object.defineProperty(LRUCache.prototype, "maxAge", {
						set: function set(mA) {
							if (!mA || !(typeof mA === "number") || mA < 0) mA = 0;
							this[MAX_AGE] = mA;
							trim(this);
						},
						get: function get$1() {
							return this[MAX_AGE];
						},
						enumerable: true
					});
					Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
						set: function set(lC) {
							if (typeof lC !== "function") lC = naiveLength;
							if (lC !== this[LENGTH_CALCULATOR]) {
								this[LENGTH_CALCULATOR] = lC;
								this[LENGTH] = 0;
								this[LRU_LIST].forEach(function(hit) {
									hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
									this[LENGTH] += hit.length;
								}, this);
							}
							trim(this);
						},
						get: function get$1() {
							return this[LENGTH_CALCULATOR];
						},
						enumerable: true
					});
					Object.defineProperty(LRUCache.prototype, "length", {
						get: function get$1() {
							return this[LENGTH];
						},
						enumerable: true
					});
					Object.defineProperty(LRUCache.prototype, "itemCount", {
						get: function get$1() {
							return this[LRU_LIST].length;
						},
						enumerable: true
					});
					LRUCache.prototype.rforEach = function(fn, thisp) {
						thisp = thisp || this;
						for (var walker = this[LRU_LIST].tail; walker !== null;) {
							var prev = walker.prev;
							forEachStep(this, fn, walker, thisp);
							walker = prev;
						}
					};
					function forEachStep(self1, fn, node, thisp) {
						var hit = node.value;
						if (isStale(self1, hit)) {
							del(self1, node);
							if (!self1[ALLOW_STALE]) hit = void 0;
						}
						if (hit) fn.call(thisp, hit.value, hit.key, self1);
					}
					LRUCache.prototype.forEach = function(fn, thisp) {
						thisp = thisp || this;
						for (var walker = this[LRU_LIST].head; walker !== null;) {
							var next = walker.next;
							forEachStep(this, fn, walker, thisp);
							walker = next;
						}
					};
					LRUCache.prototype.keys = function() {
						return this[LRU_LIST].toArray().map(function(k) {
							return k.key;
						}, this);
					};
					LRUCache.prototype.values = function() {
						return this[LRU_LIST].toArray().map(function(k) {
							return k.value;
						}, this);
					};
					LRUCache.prototype.reset = function() {
						if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) this[LRU_LIST].forEach(function(hit) {
							this[DISPOSE](hit.key, hit.value);
						}, this);
						this[CACHE] = new Map1();
						this[LRU_LIST] = new Yallist();
						this[LENGTH] = 0;
					};
					LRUCache.prototype.dump = function() {
						return this[LRU_LIST].map(function(hit) {
							if (!isStale(this, hit)) return {
								k: hit.key,
								v: hit.value,
								e: hit.now + (hit.maxAge || 0)
							};
						}, this).toArray().filter(function(h) {
							return h;
						});
					};
					LRUCache.prototype.dumpLru = function() {
						return this[LRU_LIST];
					};
					/* istanbul ignore next */ LRUCache.prototype.inspect = function(n, opts) {
						var str = "LRUCache {";
						var extras = false;
						var as = this[ALLOW_STALE];
						if (as) {
							str += "\n  allowStale: true";
							extras = true;
						}
						var max = this[MAX];
						if (max && max !== Infinity) {
							if (extras) str += ",";
							str += "\n  max: " + util.inspect(max, opts);
							extras = true;
						}
						var maxAge = this[MAX_AGE];
						if (maxAge) {
							if (extras) str += ",";
							str += "\n  maxAge: " + util.inspect(maxAge, opts);
							extras = true;
						}
						var lc = this[LENGTH_CALCULATOR];
						if (lc && lc !== naiveLength) {
							if (extras) str += ",";
							str += "\n  length: " + util.inspect(this[LENGTH], opts);
							extras = true;
						}
						var didFirst = false;
						this[LRU_LIST].forEach(function(item) {
							if (didFirst) str += ",\n  ";
							else {
								if (extras) str += ",\n";
								didFirst = true;
								str += "\n  ";
							}
							var key = util.inspect(item.key).split("\n").join("\n  ");
							var val = { value: item.value };
							if (item.maxAge !== maxAge) val.maxAge = item.maxAge;
							if (lc !== naiveLength) val.length = item.length;
							if (isStale(this, item)) val.stale = true;
							val = util.inspect(val, opts).split("\n").join("\n  ");
							str += key + " => " + val;
						});
						if (didFirst || extras) str += "\n";
						str += "}";
						return str;
					};
					LRUCache.prototype.set = function(key, value1, maxAge) {
						maxAge = maxAge || this[MAX_AGE];
						var now = maxAge ? Date.now() : 0;
						var len = this[LENGTH_CALCULATOR](value1, key);
						if (this[CACHE].has(key)) {
							if (len > this[MAX]) {
								del(this, this[CACHE].get(key));
								return false;
							}
							var node = this[CACHE].get(key);
							var item = node.value;
							if (this[DISPOSE]) {
								if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
							}
							item.now = now;
							item.maxAge = maxAge;
							item.value = value1;
							this[LENGTH] += len - item.length;
							item.length = len;
							this.get(key);
							trim(this);
							return true;
						}
						var hit = new Entry(key, value1, len, now, maxAge);
						if (hit.length > this[MAX]) {
							if (this[DISPOSE]) this[DISPOSE](key, value1);
							return false;
						}
						this[LENGTH] += hit.length;
						this[LRU_LIST].unshift(hit);
						this[CACHE].set(key, this[LRU_LIST].head);
						trim(this);
						return true;
					};
					LRUCache.prototype.has = function(key) {
						if (!this[CACHE].has(key)) return false;
						var hit = this[CACHE].get(key).value;
						if (isStale(this, hit)) return false;
						return true;
					};
					LRUCache.prototype.get = function(key) {
						return get(this, key, true);
					};
					LRUCache.prototype.peek = function(key) {
						return get(this, key, false);
					};
					LRUCache.prototype.pop = function() {
						var node = this[LRU_LIST].tail;
						if (!node) return null;
						del(this, node);
						return node.value;
					};
					LRUCache.prototype.del = function(key) {
						del(this, this[CACHE].get(key));
					};
					LRUCache.prototype.load = function(arr) {
						this.reset();
						var now = Date.now();
						for (var l = arr.length - 1; l >= 0; l--) {
							var hit = arr[l];
							var expiresAt = hit.e || 0;
							if (expiresAt === 0) this.set(hit.k, hit.v);
							else {
								var maxAge = expiresAt - now;
								if (maxAge > 0) this.set(hit.k, hit.v, maxAge);
							}
						}
					};
					LRUCache.prototype.prune = function() {
						var _$self = this;
						this[CACHE].forEach(function(value1, key) {
							get(_$self, key, false);
						});
					};
					function get(self1, key, doUse) {
						var node = self1[CACHE].get(key);
						if (node) {
							var hit = node.value;
							if (isStale(self1, hit)) {
								del(self1, node);
								if (!self1[ALLOW_STALE]) hit = void 0;
							} else if (doUse) self1[LRU_LIST].unshiftNode(node);
							if (hit) hit = hit.value;
						}
						return hit;
					}
					function isStale(self1, hit) {
						if (!hit || !hit.maxAge && !self1[MAX_AGE]) return false;
						var stale = false;
						var diff = Date.now() - hit.now;
						if (hit.maxAge) stale = diff > hit.maxAge;
						else stale = self1[MAX_AGE] && diff > self1[MAX_AGE];
						return stale;
					}
					function trim(self1) {
						if (self1[LENGTH] > self1[MAX]) for (var walker = self1[LRU_LIST].tail; self1[LENGTH] > self1[MAX] && walker !== null;) {
							var prev = walker.prev;
							del(self1, walker);
							walker = prev;
						}
					}
					function del(self1, node) {
						if (node) {
							var hit = node.value;
							if (self1[DISPOSE]) self1[DISPOSE](hit.key, hit.value);
							self1[LENGTH] -= hit.length;
							self1[CACHE].delete(hit.key);
							self1[LRU_LIST].removeNode(node);
						}
					}
					function Entry(key, value1, length, now, maxAge) {
						this.key = key;
						this.value = value1;
						this.length = length;
						this.now = now;
						this.maxAge = maxAge || 0;
					}
				},
				169: (module1) => {
					var process = module1.exports = {};
					var cachedSetTimeout;
					var cachedClearTimeout;
					function defaultSetTimout() {
						throw new Error("setTimeout has not been defined");
					}
					function defaultClearTimeout() {
						throw new Error("clearTimeout has not been defined");
					}
					(function() {
						try {
							if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
							else cachedSetTimeout = defaultSetTimout;
						} catch (e) {
							cachedSetTimeout = defaultSetTimout;
						}
						try {
							if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
							else cachedClearTimeout = defaultClearTimeout;
						} catch (e) {
							cachedClearTimeout = defaultClearTimeout;
						}
					})();
					function runTimeout(fun) {
						if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
						if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
							cachedSetTimeout = setTimeout;
							return setTimeout(fun, 0);
						}
						try {
							return cachedSetTimeout(fun, 0);
						} catch (e) {
							try {
								return cachedSetTimeout.call(null, fun, 0);
							} catch (e$1) {
								return cachedSetTimeout.call(this, fun, 0);
							}
						}
					}
					function runClearTimeout(marker) {
						if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
						if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
							cachedClearTimeout = clearTimeout;
							return clearTimeout(marker);
						}
						try {
							return cachedClearTimeout(marker);
						} catch (e) {
							try {
								return cachedClearTimeout.call(null, marker);
							} catch (e$1) {
								return cachedClearTimeout.call(this, marker);
							}
						}
					}
					var queue = [];
					var draining = false;
					var currentQueue;
					var queueIndex = -1;
					function cleanUpNextTick() {
						if (!draining || !currentQueue) return;
						draining = false;
						if (currentQueue.length) queue = currentQueue.concat(queue);
						else queueIndex = -1;
						if (queue.length) drainQueue();
					}
					function drainQueue() {
						if (draining) return;
						var timeout = runTimeout(cleanUpNextTick);
						draining = true;
						var len = queue.length;
						while (len) {
							currentQueue = queue;
							queue = [];
							while (++queueIndex < len) if (currentQueue) currentQueue[queueIndex].run();
							queueIndex = -1;
							len = queue.length;
						}
						currentQueue = null;
						draining = false;
						runClearTimeout(timeout);
					}
					process.nextTick = function(fun) {
						var args = new Array(arguments.length - 1);
						if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
						queue.push(new Item(fun, args));
						if (queue.length === 1 && !draining) runTimeout(drainQueue);
					};
					function Item(fun, array) {
						this.fun = fun;
						this.array = array;
					}
					Item.prototype.run = function() {
						this.fun.apply(null, this.array);
					};
					process.title = "browser";
					process.browser = true;
					process.env = {};
					process.argv = [];
					process.version = "";
					process.versions = {};
					function noop() {}
					process.on = noop;
					process.addListener = noop;
					process.once = noop;
					process.off = noop;
					process.removeListener = noop;
					process.removeAllListeners = noop;
					process.emit = noop;
					process.prependListener = noop;
					process.prependOnceListener = noop;
					process.listeners = function(name) {
						return [];
					};
					process.binding = function(name) {
						throw new Error("process.binding is not supported");
					};
					process.cwd = function() {
						return "/";
					};
					process.chdir = function(dir) {
						throw new Error("process.chdir is not supported");
					};
					process.umask = function() {
						return 0;
					};
				},
				307: (module1, __unused_webpack_exports, __webpack_require__$1) => {
					var process = __webpack_require__$1(169);
					if (process.env.npm_package_name === "pseudomap" && process.env.npm_lifecycle_script === "test") process.env.TEST_PSEUDOMAP = "true";
					if (typeof Map === "function" && !process.env.TEST_PSEUDOMAP) module1.exports = Map;
					else module1.exports = __webpack_require__$1(761);
				},
				761: (module1) => {
					var hasOwnProperty = Object.prototype.hasOwnProperty;
					module1.exports = PseudoMap;
					function PseudoMap(set$1) {
						if (!(this instanceof PseudoMap)) throw new TypeError("Constructor PseudoMap requires 'new'");
						this.clear();
						if (set$1) if (set$1 instanceof PseudoMap || typeof Map === "function" && set$1 instanceof Map) set$1.forEach(function(value1, key) {
							this.set(key, value1);
						}, this);
						else if (Array.isArray(set$1)) set$1.forEach(function(kv) {
							this.set(kv[0], kv[1]);
						}, this);
						else throw new TypeError("invalid argument");
					}
					PseudoMap.prototype.forEach = function(fn, thisp) {
						thisp = thisp || this;
						Object.keys(this._data).forEach(function(k) {
							if (k !== "size") fn.call(thisp, this._data[k].value, this._data[k].key);
						}, this);
					};
					PseudoMap.prototype.has = function(k) {
						return !!find(this._data, k);
					};
					PseudoMap.prototype.get = function(k) {
						var res = find(this._data, k);
						return res && res.value;
					};
					PseudoMap.prototype.set = function(k, v) {
						set(this._data, k, v);
					};
					PseudoMap.prototype.delete = function(k) {
						var res = find(this._data, k);
						if (res) {
							delete this._data[res._index];
							this._data.size--;
						}
					};
					PseudoMap.prototype.clear = function() {
						var data = Object.create(null);
						data.size = 0;
						Object.defineProperty(this, "_data", {
							value: data,
							enumerable: false,
							configurable: true,
							writable: false
						});
					};
					Object.defineProperty(PseudoMap.prototype, "size", {
						get: function get() {
							return this._data.size;
						},
						set: function set$1(n) {},
						enumerable: true,
						configurable: true
					});
					PseudoMap.prototype.values = PseudoMap.prototype.keys = PseudoMap.prototype.entries = function() {
						throw new Error("iterators are not implemented in this version");
					};
					function same(a, b) {
						return a === b || a !== a && b !== b;
					}
					function Entry(k, v, i) {
						this.key = k;
						this.value = v;
						this._index = i;
					}
					function find(data, k) {
						for (var i = 0, s = "_" + k, key = s; hasOwnProperty.call(data, key); key = s + i++) if (same(data[key].key, k)) return data[key];
					}
					function set(data, k, v) {
						for (var i = 0, s = "_" + k, key = s; hasOwnProperty.call(data, key); key = s + i++) if (same(data[key].key, k)) {
							data[key].value = v;
							return;
						}
						data.size++;
						data[key] = new Entry(k, v, key);
					}
				},
				430: function(module1, exports1) {
					var __WEBPACK_AMD_DEFINE_FACTORY__;
					var __WEBPACK_AMD_DEFINE_ARRAY__;
					var __WEBPACK_AMD_DEFINE_RESULT__;
					function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					(function(root, factory) {
						"use strict";
						__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports1, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
					})(this, function() {
						"use strict";
						function _isNumber(n) {
							return !isNaN(parseFloat(n)) && isFinite(n);
						}
						function _capitalize(str) {
							return str.charAt(0).toUpperCase() + str.substring(1);
						}
						function _getter(p) {
							return function() {
								return this[p];
							};
						}
						var booleanProps = [
							"isConstructor",
							"isEval",
							"isNative",
							"isToplevel"
						];
						var numericProps = ["columnNumber", "lineNumber"];
						var stringProps = [
							"fileName",
							"functionName",
							"source"
						];
						var arrayProps = ["args"];
						var props = booleanProps.concat(numericProps, stringProps, arrayProps);
						function StackFrame(obj) {
							if (!obj) return;
							for (var i$1 = 0; i$1 < props.length; i$1++) if (obj[props[i$1]] !== void 0) this["set" + _capitalize(props[i$1])](obj[props[i$1]]);
						}
						StackFrame.prototype = {
							getArgs: function getArgs() {
								return this.args;
							},
							setArgs: function setArgs(v) {
								if (Object.prototype.toString.call(v) !== "[object Array]") throw new TypeError("Args must be an Array");
								this.args = v;
							},
							getEvalOrigin: function getEvalOrigin() {
								return this.evalOrigin;
							},
							setEvalOrigin: function setEvalOrigin(v) {
								if (v instanceof StackFrame) this.evalOrigin = v;
								else if (v instanceof Object) this.evalOrigin = new StackFrame(v);
								else throw new TypeError("Eval Origin must be an Object or StackFrame");
							},
							toString: function toString() {
								var fileName = this.getFileName() || "";
								var lineNumber = this.getLineNumber() || "";
								var columnNumber = this.getColumnNumber() || "";
								var functionName = this.getFunctionName() || "";
								if (this.getIsEval()) {
									if (fileName) return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
									return "[eval]:" + lineNumber + ":" + columnNumber;
								}
								if (functionName) return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
								return fileName + ":" + lineNumber + ":" + columnNumber;
							}
						};
						StackFrame.fromString = function StackFrame$$fromString(str) {
							var argsStartIndex = str.indexOf("(");
							var argsEndIndex = str.lastIndexOf(")");
							var functionName = str.substring(0, argsStartIndex);
							var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
							var locationString = str.substring(argsEndIndex + 1);
							if (locationString.indexOf("@") === 0) {
								var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
								var fileName = parts[1];
								var lineNumber = parts[2];
								var columnNumber = parts[3];
							}
							return new StackFrame({
								functionName,
								args: args || void 0,
								fileName,
								lineNumber: lineNumber || void 0,
								columnNumber: columnNumber || void 0
							});
						};
						for (var i = 0; i < booleanProps.length; i++) {
							StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
							StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
								return function(v) {
									this[p] = Boolean(v);
								};
							}(booleanProps[i]);
						}
						for (var j = 0; j < numericProps.length; j++) {
							StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
							StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
								return function(v) {
									if (!_isNumber(v)) throw new TypeError(p + " must be a Number");
									this[p] = Number(v);
								};
							}(numericProps[j]);
						}
						for (var k = 0; k < stringProps.length; k++) {
							StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
							StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
								return function(v) {
									this[p] = String(v);
								};
							}(stringProps[k]);
						}
						return StackFrame;
					});
				},
				718: (module1) => {
					if (typeof Object.create === "function") module1.exports = function inherits(ctor, superCtor) {
						ctor.super_ = superCtor;
						ctor.prototype = Object.create(superCtor.prototype, { constructor: {
							value: ctor,
							enumerable: false,
							writable: true,
							configurable: true
						} });
					};
					else module1.exports = function inherits(ctor, superCtor) {
						ctor.super_ = superCtor;
						var TempCtor = function TempCtor$1() {};
						TempCtor.prototype = superCtor.prototype;
						ctor.prototype = new TempCtor();
						ctor.prototype.constructor = ctor;
					};
				},
				715: (module1) => {
					function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					module1.exports = function isBuffer(arg) {
						return arg && _typeof(arg) === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
					};
				},
				82: (__unused_webpack_module, exports1, __webpack_require__$1) => {
					var process = __webpack_require__$1(169);
					function _typeof(obj) {
						"@babel/helpers - typeof";
						if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
							return typeof obj$1;
						};
						else _typeof = function _typeof$1(obj$1) {
							return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
						};
						return _typeof(obj);
					}
					var formatRegExp = /%[sdj%]/g;
					exports1.format = function(f) {
						if (!isString(f)) {
							var objects = [];
							for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
							return objects.join(" ");
						}
						var i = 1;
						var args = arguments;
						var len = args.length;
						var str = String(f).replace(formatRegExp, function(x$1) {
							if (x$1 === "%%") return "%";
							if (i >= len) return x$1;
							switch (x$1) {
								case "%s": return String(args[i++]);
								case "%d": return Number(args[i++]);
								case "%j": try {
									return JSON.stringify(args[i++]);
								} catch (_) {
									return "[Circular]";
								}
								default: return x$1;
							}
						});
						for (var x = args[i]; i < len; x = args[++i]) if (isNull(x) || !isObject(x)) str += " " + x;
						else str += " " + inspect(x);
						return str;
					};
					exports1.deprecate = function(fn, msg) {
						if (isUndefined(global.process)) return function() {
							return exports1.deprecate(fn, msg).apply(this, arguments);
						};
						if (process.noDeprecation === true) return fn;
						var warned = false;
						function deprecated() {
							if (!warned) {
								if (process.throwDeprecation) throw new Error(msg);
								else if (process.traceDeprecation) console.trace(msg);
								else console.error(msg);
								warned = true;
							}
							return fn.apply(this, arguments);
						}
						return deprecated;
					};
					var debugs = {};
					var debugEnviron;
					exports1.debuglog = function(set) {
						if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
						set = set.toUpperCase();
						if (!debugs[set]) if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
							var pid = process.pid;
							debugs[set] = function() {
								var msg = exports1.format.apply(exports1, arguments);
								console.error("%s %d: %s", set, pid, msg);
							};
						} else debugs[set] = function() {};
						return debugs[set];
					};
					/**
					* Echos the value of a value. Trys to print the value out
					* in the best way possible given the different types.
					*
					* @param {Object} obj The object to print out.
					* @param {Object} opts Optional options object that alters the output.
					*/ function inspect(obj, opts) {
						var ctx = {
							seen: [],
							stylize: stylizeNoColor
						};
						if (arguments.length >= 3) ctx.depth = arguments[2];
						if (arguments.length >= 4) ctx.colors = arguments[3];
						if (isBoolean(opts)) ctx.showHidden = opts;
						else if (opts) exports1._extend(ctx, opts);
						if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
						if (isUndefined(ctx.depth)) ctx.depth = 2;
						if (isUndefined(ctx.colors)) ctx.colors = false;
						if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
						if (ctx.colors) ctx.stylize = stylizeWithColor;
						return formatValue(ctx, obj, ctx.depth);
					}
					exports1.inspect = inspect;
					inspect.colors = {
						"bold": [1, 22],
						"italic": [3, 23],
						"underline": [4, 24],
						"inverse": [7, 27],
						"white": [37, 39],
						"grey": [90, 39],
						"black": [30, 39],
						"blue": [34, 39],
						"cyan": [36, 39],
						"green": [32, 39],
						"magenta": [35, 39],
						"red": [31, 39],
						"yellow": [33, 39]
					};
					inspect.styles = {
						"special": "cyan",
						"number": "yellow",
						"boolean": "yellow",
						"undefined": "grey",
						"null": "bold",
						"string": "green",
						"date": "magenta",
						"regexp": "red"
					};
					function stylizeWithColor(str, styleType) {
						var style = inspect.styles[styleType];
						if (style) return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
						else return str;
					}
					function stylizeNoColor(str, styleType) {
						return str;
					}
					function arrayToHash(array) {
						var hash = {};
						array.forEach(function(val, idx) {
							hash[val] = true;
						});
						return hash;
					}
					function formatValue(ctx, value1, recurseTimes) {
						if (ctx.customInspect && value1 && isFunction(value1.inspect) && value1.inspect !== exports1.inspect && !(value1.constructor && value1.constructor.prototype === value1)) {
							var ret = value1.inspect(recurseTimes, ctx);
							if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
							return ret;
						}
						var primitive = formatPrimitive(ctx, value1);
						if (primitive) return primitive;
						var keys = Object.keys(value1);
						var visibleKeys = arrayToHash(keys);
						if (ctx.showHidden) keys = Object.getOwnPropertyNames(value1);
						if (isError(value1) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value1);
						if (keys.length === 0) {
							if (isFunction(value1)) {
								var name = value1.name ? ": " + value1.name : "";
								return ctx.stylize("[Function" + name + "]", "special");
							}
							if (isRegExp(value1)) return ctx.stylize(RegExp.prototype.toString.call(value1), "regexp");
							if (isDate(value1)) return ctx.stylize(Date.prototype.toString.call(value1), "date");
							if (isError(value1)) return formatError(value1);
						}
						var base = "";
						var array = false;
						var braces = ["{", "}"];
						if (isArray(value1)) {
							array = true;
							braces = ["[", "]"];
						}
						if (isFunction(value1)) {
							var n = value1.name ? ": " + value1.name : "";
							base = " [Function" + n + "]";
						}
						if (isRegExp(value1)) base = " " + RegExp.prototype.toString.call(value1);
						if (isDate(value1)) base = " " + Date.prototype.toUTCString.call(value1);
						if (isError(value1)) base = " " + formatError(value1);
						if (keys.length === 0 && (!array || value1.length == 0)) return braces[0] + base + braces[1];
						if (recurseTimes < 0) if (isRegExp(value1)) return ctx.stylize(RegExp.prototype.toString.call(value1), "regexp");
						else return ctx.stylize("[Object]", "special");
						ctx.seen.push(value1);
						var output;
						if (array) output = formatArray(ctx, value1, recurseTimes, visibleKeys, keys);
						else output = keys.map(function(key) {
							return formatProperty(ctx, value1, recurseTimes, visibleKeys, key, array);
						});
						ctx.seen.pop();
						return reduceToSingleString(output, base, braces);
					}
					function formatPrimitive(ctx, value1) {
						if (isUndefined(value1)) return ctx.stylize("undefined", "undefined");
						if (isString(value1)) {
							var simple = "'" + JSON.stringify(value1).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
							return ctx.stylize(simple, "string");
						}
						if (isNumber(value1)) return ctx.stylize("" + value1, "number");
						if (isBoolean(value1)) return ctx.stylize("" + value1, "boolean");
						if (isNull(value1)) return ctx.stylize("null", "null");
					}
					function formatError(value1) {
						return "[" + Error.prototype.toString.call(value1) + "]";
					}
					function formatArray(ctx, value1, recurseTimes, visibleKeys, keys) {
						var output = [];
						for (var i = 0, l = value1.length; i < l; ++i) if (hasOwnProperty(value1, String(i))) output.push(formatProperty(ctx, value1, recurseTimes, visibleKeys, String(i), true));
						else output.push("");
						keys.forEach(function(key) {
							if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value1, recurseTimes, visibleKeys, key, true));
						});
						return output;
					}
					function formatProperty(ctx, value1, recurseTimes, visibleKeys, key, array) {
						var name;
						var str;
						var desc;
						desc = Object.getOwnPropertyDescriptor(value1, key) || { value: value1[key] };
						if (desc.get) if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
						else str = ctx.stylize("[Getter]", "special");
						else if (desc.set) str = ctx.stylize("[Setter]", "special");
						if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
						if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
							if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
							else str = formatValue(ctx, desc.value, recurseTimes - 1);
							if (str.indexOf("\n") > -1) if (array) str = str.split("\n").map(function(line) {
								return "  " + line;
							}).join("\n").substr(2);
							else str = "\n" + str.split("\n").map(function(line) {
								return "   " + line;
							}).join("\n");
						} else str = ctx.stylize("[Circular]", "special");
						if (isUndefined(name)) {
							if (array && key.match(/^\d+$/)) return str;
							name = JSON.stringify("" + key);
							if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
								name = name.substr(1, name.length - 2);
								name = ctx.stylize(name, "name");
							} else {
								name = name.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
								name = ctx.stylize(name, "string");
							}
						}
						return name + ": " + str;
					}
					function reduceToSingleString(output, base, braces) {
						var numLinesEst = 0;
						var length = output.reduce(function(prev, cur) {
							numLinesEst++;
							if (cur.indexOf("\n") >= 0) numLinesEst++;
							return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
						}, 0);
						if (length > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
						return braces[0] + base + " " + output.join(", ") + " " + braces[1];
					}
					function isArray(ar) {
						return Array.isArray(ar);
					}
					exports1.isArray = isArray;
					function isBoolean(arg) {
						return typeof arg === "boolean";
					}
					exports1.isBoolean = isBoolean;
					function isNull(arg) {
						return arg === null;
					}
					exports1.isNull = isNull;
					function isNullOrUndefined(arg) {
						return arg == null;
					}
					exports1.isNullOrUndefined = isNullOrUndefined;
					function isNumber(arg) {
						return typeof arg === "number";
					}
					exports1.isNumber = isNumber;
					function isString(arg) {
						return typeof arg === "string";
					}
					exports1.isString = isString;
					function isSymbol(arg) {
						return _typeof(arg) === "symbol";
					}
					exports1.isSymbol = isSymbol;
					function isUndefined(arg) {
						return arg === void 0;
					}
					exports1.isUndefined = isUndefined;
					function isRegExp(re) {
						return isObject(re) && objectToString(re) === "[object RegExp]";
					}
					exports1.isRegExp = isRegExp;
					function isObject(arg) {
						return _typeof(arg) === "object" && arg !== null;
					}
					exports1.isObject = isObject;
					function isDate(d) {
						return isObject(d) && objectToString(d) === "[object Date]";
					}
					exports1.isDate = isDate;
					function isError(e) {
						return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
					}
					exports1.isError = isError;
					function isFunction(arg) {
						return typeof arg === "function";
					}
					exports1.isFunction = isFunction;
					function isPrimitive(arg) {
						return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || _typeof(arg) === "symbol" || typeof arg === "undefined";
					}
					exports1.isPrimitive = isPrimitive;
					exports1.isBuffer = __webpack_require__$1(715);
					function objectToString(o) {
						return Object.prototype.toString.call(o);
					}
					function pad(n) {
						return n < 10 ? "0" + n.toString(10) : n.toString(10);
					}
					var months = [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					];
					function timestamp() {
						var d = new Date();
						var time = [
							pad(d.getHours()),
							pad(d.getMinutes()),
							pad(d.getSeconds())
						].join(":");
						return [
							d.getDate(),
							months[d.getMonth()],
							time
						].join(" ");
					}
					exports1.log = function() {
						console.log("%s - %s", timestamp(), exports1.format.apply(exports1, arguments));
					};
					/**
					* Inherit the prototype methods from one constructor into another.
					*
					* The Function.prototype.inherits from lang.js rewritten as a standalone
					* function (not on Function.prototype). NOTE: If this file is to be loaded
					* during bootstrapping this function needs to be rewritten using some native
					* functions as prototype setup using normal JavaScript does not work as
					* expected during bootstrapping (see mirror.js in r114903).
					*
					* @param {function} ctor Constructor function which needs to inherit the
					*     prototype.
					* @param {function} superCtor Constructor function to inherit prototype from.
					*/ exports1.inherits = __webpack_require__$1(718);
					exports1._extend = function(origin, add) {
						if (!add || !isObject(add)) return origin;
						var keys = Object.keys(add);
						var i = keys.length;
						while (i--) origin[keys[i]] = add[keys[i]];
						return origin;
					};
					function hasOwnProperty(obj, prop) {
						return Object.prototype.hasOwnProperty.call(obj, prop);
					}
				},
				695: (module1) => {
					module1.exports = Yallist;
					Yallist.Node = Node1;
					Yallist.create = Yallist;
					function Yallist(list) {
						var _$self = this;
						if (!(_$self instanceof Yallist)) _$self = new Yallist();
						_$self.tail = null;
						_$self.head = null;
						_$self.length = 0;
						if (list && typeof list.forEach === "function") list.forEach(function(item) {
							_$self.push(item);
						});
						else if (arguments.length > 0) for (var i = 0, l = arguments.length; i < l; i++) _$self.push(arguments[i]);
						return _$self;
					}
					Yallist.prototype.removeNode = function(node) {
						if (node.list !== this) throw new Error("removing node which does not belong to this list");
						var next = node.next;
						var prev = node.prev;
						if (next) next.prev = prev;
						if (prev) prev.next = next;
						if (node === this.head) this.head = next;
						if (node === this.tail) this.tail = prev;
						node.list.length--;
						node.next = null;
						node.prev = null;
						node.list = null;
					};
					Yallist.prototype.unshiftNode = function(node) {
						if (node === this.head) return;
						if (node.list) node.list.removeNode(node);
						var head = this.head;
						node.list = this;
						node.next = head;
						if (head) head.prev = node;
						this.head = node;
						if (!this.tail) this.tail = node;
						this.length++;
					};
					Yallist.prototype.pushNode = function(node) {
						if (node === this.tail) return;
						if (node.list) node.list.removeNode(node);
						var tail = this.tail;
						node.list = this;
						node.prev = tail;
						if (tail) tail.next = node;
						this.tail = node;
						if (!this.head) this.head = node;
						this.length++;
					};
					Yallist.prototype.push = function() {
						for (var i = 0, l = arguments.length; i < l; i++) push(this, arguments[i]);
						return this.length;
					};
					Yallist.prototype.unshift = function() {
						for (var i = 0, l = arguments.length; i < l; i++) unshift(this, arguments[i]);
						return this.length;
					};
					Yallist.prototype.pop = function() {
						if (!this.tail) return void 0;
						var res = this.tail.value;
						this.tail = this.tail.prev;
						if (this.tail) this.tail.next = null;
						else this.head = null;
						this.length--;
						return res;
					};
					Yallist.prototype.shift = function() {
						if (!this.head) return void 0;
						var res = this.head.value;
						this.head = this.head.next;
						if (this.head) this.head.prev = null;
						else this.tail = null;
						this.length--;
						return res;
					};
					Yallist.prototype.forEach = function(fn, thisp) {
						thisp = thisp || this;
						for (var walker = this.head, i = 0; walker !== null; i++) {
							fn.call(thisp, walker.value, i, this);
							walker = walker.next;
						}
					};
					Yallist.prototype.forEachReverse = function(fn, thisp) {
						thisp = thisp || this;
						for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
							fn.call(thisp, walker.value, i, this);
							walker = walker.prev;
						}
					};
					Yallist.prototype.get = function(n) {
						for (var i = 0, walker = this.head; walker !== null && i < n; i++) walker = walker.next;
						if (i === n && walker !== null) return walker.value;
					};
					Yallist.prototype.getReverse = function(n) {
						for (var i = 0, walker = this.tail; walker !== null && i < n; i++) walker = walker.prev;
						if (i === n && walker !== null) return walker.value;
					};
					Yallist.prototype.map = function(fn, thisp) {
						thisp = thisp || this;
						var res = new Yallist();
						for (var walker = this.head; walker !== null;) {
							res.push(fn.call(thisp, walker.value, this));
							walker = walker.next;
						}
						return res;
					};
					Yallist.prototype.mapReverse = function(fn, thisp) {
						thisp = thisp || this;
						var res = new Yallist();
						for (var walker = this.tail; walker !== null;) {
							res.push(fn.call(thisp, walker.value, this));
							walker = walker.prev;
						}
						return res;
					};
					Yallist.prototype.reduce = function(fn, initial) {
						var acc;
						var walker = this.head;
						if (arguments.length > 1) acc = initial;
						else if (this.head) {
							walker = this.head.next;
							acc = this.head.value;
						} else throw new TypeError("Reduce of empty list with no initial value");
						for (var i = 0; walker !== null; i++) {
							acc = fn(acc, walker.value, i);
							walker = walker.next;
						}
						return acc;
					};
					Yallist.prototype.reduceReverse = function(fn, initial) {
						var acc;
						var walker = this.tail;
						if (arguments.length > 1) acc = initial;
						else if (this.tail) {
							walker = this.tail.prev;
							acc = this.tail.value;
						} else throw new TypeError("Reduce of empty list with no initial value");
						for (var i = this.length - 1; walker !== null; i--) {
							acc = fn(acc, walker.value, i);
							walker = walker.prev;
						}
						return acc;
					};
					Yallist.prototype.toArray = function() {
						var arr = new Array(this.length);
						for (var i = 0, walker = this.head; walker !== null; i++) {
							arr[i] = walker.value;
							walker = walker.next;
						}
						return arr;
					};
					Yallist.prototype.toArrayReverse = function() {
						var arr = new Array(this.length);
						for (var i = 0, walker = this.tail; walker !== null; i++) {
							arr[i] = walker.value;
							walker = walker.prev;
						}
						return arr;
					};
					Yallist.prototype.slice = function(from, to) {
						to = to || this.length;
						if (to < 0) to += this.length;
						from = from || 0;
						if (from < 0) from += this.length;
						var ret = new Yallist();
						if (to < from || to < 0) return ret;
						if (from < 0) from = 0;
						if (to > this.length) to = this.length;
						for (var i = 0, walker = this.head; walker !== null && i < from; i++) walker = walker.next;
						for (; walker !== null && i < to; i++, walker = walker.next) ret.push(walker.value);
						return ret;
					};
					Yallist.prototype.sliceReverse = function(from, to) {
						to = to || this.length;
						if (to < 0) to += this.length;
						from = from || 0;
						if (from < 0) from += this.length;
						var ret = new Yallist();
						if (to < from || to < 0) return ret;
						if (from < 0) from = 0;
						if (to > this.length) to = this.length;
						for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) walker = walker.prev;
						for (; walker !== null && i > from; i--, walker = walker.prev) ret.push(walker.value);
						return ret;
					};
					Yallist.prototype.reverse = function() {
						var head = this.head;
						var tail = this.tail;
						for (var walker = head; walker !== null; walker = walker.prev) {
							var p = walker.prev;
							walker.prev = walker.next;
							walker.next = p;
						}
						this.head = tail;
						this.tail = head;
						return this;
					};
					function push(self1, item) {
						self1.tail = new Node1(item, self1.tail, null, self1);
						if (!self1.head) self1.head = self1.tail;
						self1.length++;
					}
					function unshift(self1, item) {
						self1.head = new Node1(item, null, self1.head, self1);
						if (!self1.tail) self1.tail = self1.head;
						self1.length++;
					}
					function Node1(value1, prev, next, list) {
						if (!(this instanceof Node1)) return new Node1(value1, prev, next, list);
						this.list = list;
						this.value = value1;
						if (prev) {
							prev.next = this;
							this.prev = prev;
						} else this.prev = null;
						if (next) {
							next.prev = this;
							this.next = next;
						} else this.next = null;
					}
				}
			};
			var __webpack_module_cache__ = {};
			function __webpack_require__(moduleId) {
				var cachedModule = __webpack_module_cache__[moduleId];
				if (cachedModule !== void 0) return cachedModule.exports;
				var module1 = __webpack_module_cache__[moduleId] = { exports: {} };
				__webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
				return module1.exports;
			}
			/* webpack/runtime/compat get default export */ __webpack_require__.n = (module1) => {
				var getter = module1 && module1.__esModule ? () => module1["default"] : () => module1;
				__webpack_require__.d(getter, { a: getter });
				return getter;
			};
			/* webpack/runtime/define property getters */ __webpack_require__.d = (exports1, definition) => {
				for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
					enumerable: true,
					get: definition[key]
				});
			};
			/* webpack/runtime/hasOwnProperty shorthand */ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
			/* webpack/runtime/make namespace object */ __webpack_require__.r = (exports1) => {
				if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, { value: "Module" });
				Object.defineProperty(exports1, "__esModule", { value: true });
			};
			var __webpack_exports__ = {};
			(() => {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				__webpack_require__.d(__webpack_exports__, {
					"connectToDevTools": () => connectToDevTools,
					"connectWithCustomMessagingProtocol": () => connectWithCustomMessagingProtocol
				});
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
				}
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}
				function _defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var EventEmitter = /* @__PURE__ */ function() {
					function EventEmitter$1() {
						_classCallCheck(this, EventEmitter$1);
						_defineProperty(this, "listenersMap", new Map());
					}
					__name(EventEmitter$1, "EventEmitter");
					_createClass(EventEmitter$1, [
						{
							key: "addListener",
							value: function addListener(event, listener) {
								var listeners = this.listenersMap.get(event);
								if (listeners === void 0) this.listenersMap.set(event, [listener]);
								else {
									var index = listeners.indexOf(listener);
									if (index < 0) listeners.push(listener);
								}
							}
						},
						{
							key: "emit",
							value: function emit(event) {
								var listeners = this.listenersMap.get(event);
								if (listeners !== void 0) {
									for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
									if (listeners.length === 1) {
										var listener = listeners[0];
										listener.apply(null, args);
									} else {
										var didThrow = false;
										var caughtError = null;
										var clonedListeners = Array.from(listeners);
										for (var i = 0; i < clonedListeners.length; i++) {
											var _listener = clonedListeners[i];
											try {
												_listener.apply(null, args);
											} catch (error) {
												if (caughtError === null) {
													didThrow = true;
													caughtError = error;
												}
											}
										}
										if (didThrow) throw caughtError;
									}
								}
							}
						},
						{
							key: "removeAllListeners",
							value: function removeAllListeners() {
								this.listenersMap.clear();
							}
						},
						{
							key: "removeListener",
							value: function removeListener(event, listener) {
								var listeners = this.listenersMap.get(event);
								if (listeners !== void 0) {
									var index = listeners.indexOf(listener);
									if (index >= 0) listeners.splice(index, 1);
								}
							}
						}
					]);
					return EventEmitter$1;
				}();
				var lodash_throttle = __webpack_require__(172);
				var lodash_throttle_default = /* @__PURE__ */ __webpack_require__.n(lodash_throttle);
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var CHROME_WEBSTORE_EXTENSION_ID = "fmkadmapgofadopljbjfkapdkoienihi";
				var INTERNAL_EXTENSION_ID = "dnjnjgbfilfphmojnmhliehogmojhclc";
				var LOCAL_EXTENSION_ID = "ikiahnapldjmdmpkmfhjdjilojjhgcbf";
				var __DEBUG__ = false;
				var __PERFORMANCE_PROFILE__ = false;
				var TREE_OPERATION_ADD = 1;
				var TREE_OPERATION_REMOVE = 2;
				var TREE_OPERATION_REORDER_CHILDREN = 3;
				var TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4;
				var TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS = 5;
				var TREE_OPERATION_REMOVE_ROOT = 6;
				var TREE_OPERATION_SET_SUBTREE_MODE = 7;
				var PROFILING_FLAG_BASIC_SUPPORT = 1;
				var PROFILING_FLAG_TIMELINE_SUPPORT = 2;
				var LOCAL_STORAGE_DEFAULT_TAB_KEY = "React::DevTools::defaultTab";
				var constants_LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY = "React::DevTools::componentFilters";
				var SESSION_STORAGE_LAST_SELECTION_KEY = "React::DevTools::lastSelection";
				var constants_LOCAL_STORAGE_OPEN_IN_EDITOR_URL = "React::DevTools::openInEditorUrl";
				var LOCAL_STORAGE_OPEN_IN_EDITOR_URL_PRESET = "React::DevTools::openInEditorUrlPreset";
				var LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY = "React::DevTools::parseHookNames";
				var SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY = "React::DevTools::recordChangeDescriptions";
				var SESSION_STORAGE_RELOAD_AND_PROFILE_KEY = "React::DevTools::reloadAndProfile";
				var constants_LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS = "React::DevTools::breakOnConsoleErrors";
				var LOCAL_STORAGE_BROWSER_THEME = "React::DevTools::theme";
				var constants_LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY = "React::DevTools::appendComponentStack";
				var constants_LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY = "React::DevTools::showInlineWarningsAndErrors";
				var LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY = "React::DevTools::traceUpdatesEnabled";
				var constants_LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE = "React::DevTools::hideConsoleLogsInStrictMode";
				var LOCAL_STORAGE_SUPPORTS_PROFILING_KEY = "React::DevTools::supportsProfiling";
				var PROFILER_EXPORT_VERSION = 5;
				var FIREFOX_CONSOLE_DIMMING_COLOR = "color: rgba(124, 124, 124, 0.75)";
				var ANSI_STYLE_DIMMING_TEMPLATE = "\x1B[2;38;2;124;124;124m%s\x1B[0m";
				var ANSI_STYLE_DIMMING_TEMPLATE_WITH_COMPONENT_STACK = "\x1B[2;38;2;124;124;124m%s %s\x1B[0m";
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function storage_localStorageGetItem(key) {
					try {
						return localStorage.getItem(key);
					} catch (error) {
						return null;
					}
				}
				function localStorageRemoveItem(key) {
					try {
						localStorage.removeItem(key);
					} catch (error) {}
				}
				function storage_localStorageSetItem(key, value1) {
					try {
						return localStorage.setItem(key, value1);
					} catch (error) {}
				}
				function sessionStorageGetItem(key) {
					try {
						return sessionStorage.getItem(key);
					} catch (error) {
						return null;
					}
				}
				function sessionStorageRemoveItem(key) {
					try {
						sessionStorage.removeItem(key);
					} catch (error) {}
				}
				function sessionStorageSetItem(key, value1) {
					try {
						return sessionStorage.setItem(key, value1);
					} catch (error) {}
				}
				var simpleIsEqual = function simpleIsEqual$1(a, b) {
					return a === b;
				};
				function esm(resultFn) {
					var isEqual = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : simpleIsEqual;
					var lastThis = void 0;
					var lastArgs = [];
					var lastResult = void 0;
					var calledOnce = false;
					var isNewArgEqualToLast = function isNewArgEqualToLast$1(newArg, index) {
						return isEqual(newArg, lastArgs[index]);
					};
					var result = function result$1() {
						for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) newArgs[_key] = arguments[_key];
						if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) return lastResult;
						calledOnce = true;
						lastThis = this;
						lastArgs = newArgs;
						lastResult = resultFn.apply(this, newArgs);
						return lastResult;
					};
					return result;
				}
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else _typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return _typeof(obj);
				}
				function _slicedToArray(arr, i) {
					return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
				}
				function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function _unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return _arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
				}
				function _arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function _iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				/**
				* Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
				* This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
				* @param v1 - First version to compare
				* @param v2 - Second version to compare
				* @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
				*/ var compareVersions = function compareVersions$1(v1, v2) {
					var n1 = validateAndParse(v1);
					var n2 = validateAndParse(v2);
					var p1 = n1.pop();
					var p2 = n2.pop();
					var r = compareSegments(n1, n2);
					if (r !== 0) return r;
					if (p1 && p2) return compareSegments(p1.split("."), p2.split("."));
					else if (p1 || p2) return p1 ? -1 : 1;
					return 0;
				};
				/**
				* Validate [semver](https://semver.org/) version strings.
				*
				* @param version Version number to validate
				* @returns `true` if the version number is a valid semver version number, `false` otherwise.
				*
				* @example
				* ```
				* validate('1.0.0-rc.1'); // return true
				* validate('1.0-rc.1'); // return false
				* validate('foo'); // return false
				* ```
				*/ var validate = function validate$1(version) {
					return typeof version === "string" && /^[v\d]/.test(version) && semver.test(version);
				};
				/**
				* Compare [semver](https://semver.org/) version strings using the specified operator.
				*
				* @param v1 First version to compare
				* @param v2 Second version to compare
				* @param operator Allowed arithmetic operator to use
				* @returns `true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise.
				*
				* @example
				* ```
				* compare('10.1.8', '10.0.4', '>'); // return true
				* compare('10.0.1', '10.0.1', '='); // return true
				* compare('10.1.1', '10.2.2', '<'); // return true
				* compare('10.1.1', '10.2.2', '<='); // return true
				* compare('10.1.1', '10.2.2', '>='); // return false
				* ```
				*/ var compare = function compare$1(v1, v2, operator) {
					assertValidOperator(operator);
					var res = compareVersions(v1, v2);
					return operatorResMap[operator].includes(res);
				};
				/**
				* Match [npm semver](https://docs.npmjs.com/cli/v6/using-npm/semver) version range.
				*
				* @param version Version number to match
				* @param range Range pattern for version
				* @returns `true` if the version number is within the range, `false` otherwise.
				*
				* @example
				* ```
				* satisfies('1.1.0', '^1.0.0'); // return true
				* satisfies('1.1.0', '~1.0.0'); // return false
				* ```
				*/ var satisfies = function satisfies$1(version, range) {
					var m = range.match(/^([<>=~^]+)/);
					var op = m ? m[1] : "=";
					if (op !== "^" && op !== "~") return compare(version, range, op);
					var _validateAndParse = validateAndParse(version);
					var _validateAndParse2 = _slicedToArray(_validateAndParse, 5);
					var v1 = _validateAndParse2[0];
					var v2 = _validateAndParse2[1];
					var v3 = _validateAndParse2[2];
					var vp = _validateAndParse2[4];
					var _validateAndParse3 = validateAndParse(range);
					var _validateAndParse4 = _slicedToArray(_validateAndParse3, 5);
					var r1 = _validateAndParse4[0];
					var r2 = _validateAndParse4[1];
					var r3 = _validateAndParse4[2];
					var rp = _validateAndParse4[4];
					var v = [
						v1,
						v2,
						v3
					];
					var r = [
						r1,
						r2 !== null && r2 !== void 0 ? r2 : "x",
						r3 !== null && r3 !== void 0 ? r3 : "x"
					];
					if (rp) {
						if (!vp) return false;
						if (compareSegments(v, r) !== 0) return false;
						if (compareSegments(vp.split("."), rp.split(".")) === -1) return false;
					}
					var nonZero = r.findIndex(function(v$1) {
						return v$1 !== "0";
					}) + 1;
					var i = op === "~" ? 2 : nonZero > 1 ? nonZero : 1;
					if (compareSegments(v.slice(0, i), r.slice(0, i)) !== 0) return false;
					if (compareSegments(v.slice(i), r.slice(i)) === -1) return false;
					return true;
				};
				var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
				var validateAndParse = function validateAndParse$1(version) {
					if (typeof version !== "string") throw new TypeError("Invalid argument expected string");
					var match = version.match(semver);
					if (!match) throw new Error("Invalid argument not valid semver ('".concat(version, "' received)"));
					match.shift();
					return match;
				};
				var isWildcard = function isWildcard$1(s) {
					return s === "*" || s === "x" || s === "X";
				};
				var tryParse = function tryParse$1(v) {
					var n = parseInt(v, 10);
					return isNaN(n) ? v : n;
				};
				var forceType = function forceType$1(a, b) {
					return _typeof(a) !== _typeof(b) ? [String(a), String(b)] : [a, b];
				};
				var compareStrings = function compareStrings$1(a, b) {
					if (isWildcard(a) || isWildcard(b)) return 0;
					var _forceType = forceType(tryParse(a), tryParse(b));
					var _forceType2 = _slicedToArray(_forceType, 2);
					var ap = _forceType2[0];
					var bp = _forceType2[1];
					if (ap > bp) return 1;
					if (ap < bp) return -1;
					return 0;
				};
				var compareSegments = function compareSegments$1(a, b) {
					for (var i = 0; i < Math.max(a.length, b.length); i++) {
						var r = compareStrings(a[i] || "0", b[i] || "0");
						if (r !== 0) return r;
					}
					return 0;
				};
				var operatorResMap = {
					">": [1],
					">=": [0, 1],
					"=": [0],
					"<=": [-1, 0],
					"<": [-1]
				};
				var allowedOperators = Object.keys(operatorResMap);
				var assertValidOperator = function assertValidOperator$1(op) {
					if (typeof op !== "string") throw new TypeError("Invalid operator type, expected string but got ".concat(_typeof(op)));
					if (allowedOperators.indexOf(op) === -1) throw new Error("Invalid operator, expected one of ".concat(allowedOperators.join("|")));
				};
				var lru_cache = __webpack_require__(730);
				var lru_cache_default = /* @__PURE__ */ __webpack_require__.n(lru_cache);
				var react_is_production = __webpack_require__(890);
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var enableComponentStackLocations = true;
				var favorSafetyOverHydrationPerf = true;
				var enableAsyncActions = true;
				var disableSchedulerTimeoutInWorkLoop = false;
				var enableDeferRootSchedulingToMicrotask = true;
				var disableDefaultPropsExceptForClasses = true;
				var enableSuspenseCallback = false;
				var enableScopeAPI = false;
				var enableCreateEventHandleAPI = false;
				var enableLegacyFBSupport = false;
				var enableCache = true;
				var enableLegacyCache = null;
				var enableBinaryFlight = true;
				var enableFlightReadableStream = true;
				var enableAsyncIterableChildren = null;
				var enableTaint = null;
				var enablePostpone = null;
				var enableTransitionTracing = false;
				var enableLazyContextPropagation = false;
				var enableLegacyHidden = false;
				var enableSuspenseAvoidThisFallback = false;
				var enableSuspenseAvoidThisFallbackFizz = false;
				var enableCPUSuspense = null;
				var enableUseMemoCacheHook = true;
				var enableNoCloningMemoCache = false;
				var enableUseEffectEventHook = null;
				var enableFizzExternalRuntime = null;
				var alwaysThrottleRetries = true;
				var passChildrenWhenCloningPersistedNodes = false;
				var enableServerComponentLogs = null;
				var enableAddPropertiesFastPath = false;
				var enableOwnerStacks = null;
				var enableShallowPropDiffing = false;
				/**
				* Enables an expiration time for retry lanes to avoid starvation.
				*/ var enableRetryLaneExpiration = false;
				var retryLaneExpirationMs = 5e3;
				var syncLaneExpirationMs = 250;
				var transitionLaneExpirationMs = 5e3;
				var renameElementSymbol = true;
				var disableLegacyContext = true;
				var useModernStrictMode = true;
				var disableIEWorkarounds = true;
				var enableFilterEmptyStringAttributesDOM = true;
				var disableClientCache = true;
				/**
				* Enables a new error detection for infinite render loops from updates caused
				* by setState or similar outside of the component owning the state.
				*/ var enableInfiniteRenderLoopDetection = true;
				var enableRefAsProp = true;
				var disableStringRefs = true;
				var enableFastJSX = true;
				var enableReactTestRendererWarning = true;
				var disableLegacyMode = true;
				var enableRenderableContext = true;
				var enableUseDeferredValueInitialArg = true;
				var forceConcurrentByDefaultForTesting = false;
				var allowConcurrentByDefault = false;
				var disableCommentsAsDOMContainers = true;
				var enableTrustedTypesIntegration = false;
				var disableInputAttributeSyncing = false;
				var disableTextareaChildren = false;
				var enableSchedulingProfiler = null;
				var debugRenderPhaseSideEffectsForStrictMode = null;
				var enableProfilerTimer = null;
				var enableProfilerCommitHooks = null;
				var enableProfilerNestedUpdatePhase = null;
				var enableDebugTracing = false;
				var enableAsyncDebugInfo = null;
				var enableUpdaterTracking = null;
				var enableGetInspectorDataForInstanceInProduction = false;
				var consoleManagedByDevToolsDuringStrictMode = true;
				var enableDO_NOT_USE_disableStrictPassiveEffect = false;
				function ReactSymbols_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ReactSymbols_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else ReactSymbols_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return ReactSymbols_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
				var REACT_ELEMENT_TYPE = renameElementSymbol ? Symbol.for("react.transitional.element") : REACT_LEGACY_ELEMENT_TYPE;
				var REACT_PORTAL_TYPE = Symbol.for("react.portal");
				var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
				var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
				var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
				var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
				var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
				var REACT_CONTEXT_TYPE = Symbol.for("react.context");
				var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
				var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
				var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
				var REACT_MEMO_TYPE = Symbol.for("react.memo");
				var REACT_LAZY_TYPE = Symbol.for("react.lazy");
				var REACT_SCOPE_TYPE = Symbol.for("react.scope");
				var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
				var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
				var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
				var REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
				var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
				var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
				var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = "@@iterator";
				function getIteratorFn(maybeIterable) {
					if (maybeIterable === null || ReactSymbols_typeof(maybeIterable) !== "object") return null;
					var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
					if (typeof maybeIterator === "function") return maybeIterator;
					return null;
				}
				var ASYNC_ITERATOR = Symbol.asyncIterator;
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/
				/**
				* WARNING:
				* This file contains types that are designed for React DevTools UI and how it interacts with the backend.
				* They might be used in different versions of DevTools backends.
				* Be mindful of backwards compatibility when making changes.
				*/ var types_ElementTypeClass = 1;
				var ElementTypeContext = 2;
				var types_ElementTypeFunction = 5;
				var types_ElementTypeForwardRef = 6;
				var ElementTypeHostComponent = 7;
				var types_ElementTypeMemo = 8;
				var ElementTypeOtherOrUnknown = 9;
				var ElementTypeProfiler = 10;
				var ElementTypeRoot = 11;
				var ElementTypeSuspense = 12;
				var ElementTypeSuspenseList = 13;
				var ElementTypeTracingMarker = 14;
				var ComponentFilterElementType = 1;
				var ComponentFilterDisplayName = 2;
				var ComponentFilterLocation = 3;
				var ComponentFilterHOC = 4;
				var StrictMode = 1;
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var isArray = Array.isArray;
				var src_isArray = isArray;
				var process = __webpack_require__(169);
				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
							utils_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function utils_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				function utils_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") utils_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else utils_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return utils_typeof(obj);
				}
				function _toConsumableArray(arr) {
					return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread();
				}
				function _nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function utils_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return utils_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen);
				}
				function _iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function _arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return utils_arrayLikeToArray(arr);
				}
				function utils_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var utils_hasOwnProperty = Object.prototype.hasOwnProperty;
				var cachedDisplayNames = new WeakMap();
				var encodedStringCache = new (lru_cache_default())({ max: 1e3 });
				function alphaSortKeys(a, b) {
					if (a.toString() > b.toString()) return 1;
					else if (b.toString() > a.toString()) return -1;
					else return 0;
				}
				function getAllEnumerableKeys(obj) {
					var keys = new Set();
					var current = obj;
					var _loop = function _loop$1() {
						var currentKeys = [].concat(_toConsumableArray(Object.keys(current)), _toConsumableArray(Object.getOwnPropertySymbols(current)));
						var descriptors = Object.getOwnPropertyDescriptors(current);
						currentKeys.forEach(function(key) {
							if (descriptors[key].enumerable) keys.add(key);
						});
						current = Object.getPrototypeOf(current);
					};
					while (current != null) _loop();
					return keys;
				}
				function getWrappedDisplayName(outerType, innerType, wrapperName, fallbackName) {
					var displayName = outerType === null || outerType === void 0 ? void 0 : outerType.displayName;
					return displayName || "".concat(wrapperName, "(").concat(getDisplayName(innerType, fallbackName), ")");
				}
				function getDisplayName(type) {
					var fallbackName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Anonymous";
					var nameFromCache = cachedDisplayNames.get(type);
					if (nameFromCache != null) return nameFromCache;
					var displayName = fallbackName;
					if (typeof type.displayName === "string") displayName = type.displayName;
					else if (typeof type.name === "string" && type.name !== "") displayName = type.name;
					cachedDisplayNames.set(type, displayName);
					return displayName;
				}
				var uidCounter = 0;
				function getUID() {
					return ++uidCounter;
				}
				function utfDecodeStringWithRanges(array, left, right) {
					var string = "";
					for (var i = left; i <= right; i++) string += String.fromCodePoint(array[i]);
					return string;
				}
				function surrogatePairToCodePoint(charCode1, charCode2) {
					return ((charCode1 & 1023) << 10) + (charCode2 & 1023) + 65536;
				}
				function utfEncodeString(string) {
					var cached = encodedStringCache.get(string);
					if (cached !== void 0) return cached;
					var encoded = [];
					var i = 0;
					var charCode;
					while (i < string.length) {
						charCode = string.charCodeAt(i);
						if ((charCode & 63488) === 55296) encoded.push(surrogatePairToCodePoint(charCode, string.charCodeAt(++i)));
						else encoded.push(charCode);
						++i;
					}
					encodedStringCache.set(string, encoded);
					return encoded;
				}
				function printOperationsArray(operations) {
					var rendererID = operations[0];
					var rootID = operations[1];
					var logs = ["operations for renderer:".concat(rendererID, " and root:").concat(rootID)];
					var i = 2;
					var stringTable = [null];
					var stringTableSize = operations[i++];
					var stringTableEnd = i + stringTableSize;
					while (i < stringTableEnd) {
						var nextLength = operations[i++];
						var nextString = utfDecodeStringWithRanges(operations, i, i + nextLength - 1);
						stringTable.push(nextString);
						i += nextLength;
					}
					while (i < operations.length) {
						var operation = operations[i];
						switch (operation) {
							case TREE_OPERATION_ADD: {
								var _id = operations[i + 1];
								var type = operations[i + 2];
								i += 3;
								if (type === ElementTypeRoot) {
									logs.push("Add new root node ".concat(_id));
									i++;
									i++;
									i++;
									i++;
								} else {
									var parentID = operations[i];
									i++;
									i++;
									var displayNameStringID = operations[i];
									var displayName = stringTable[displayNameStringID];
									i++;
									i++;
									logs.push("Add node ".concat(_id, " (").concat(displayName || "null", ") as child of ").concat(parentID));
								}
								break;
							}
							case TREE_OPERATION_REMOVE: {
								var removeLength = operations[i + 1];
								i += 2;
								for (var removeIndex = 0; removeIndex < removeLength; removeIndex++) {
									var _id2 = operations[i];
									i += 1;
									logs.push("Remove node ".concat(_id2));
								}
								break;
							}
							case TREE_OPERATION_REMOVE_ROOT: {
								i += 1;
								logs.push("Remove root ".concat(rootID));
								break;
							}
							case TREE_OPERATION_SET_SUBTREE_MODE: {
								var _id3 = operations[i + 1];
								var mode = operations[i + 1];
								i += 3;
								logs.push("Mode ".concat(mode, " set for subtree with root ").concat(_id3));
								break;
							}
							case TREE_OPERATION_REORDER_CHILDREN: {
								var _id4 = operations[i + 1];
								var numChildren = operations[i + 2];
								i += 3;
								var children = operations.slice(i, i + numChildren);
								i += numChildren;
								logs.push("Re-order node ".concat(_id4, " children ").concat(children.join(",")));
								break;
							}
							case TREE_OPERATION_UPDATE_TREE_BASE_DURATION:
								i += 3;
								break;
							case TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS:
								var id = operations[i + 1];
								var numErrors = operations[i + 2];
								var numWarnings = operations[i + 3];
								i += 4;
								logs.push("Node ".concat(id, " has ").concat(numErrors, " errors and ").concat(numWarnings, " warnings"));
								break;
							default: throw Error("Unsupported Bridge operation \"".concat(operation, "\""));
						}
					}
					console.log(logs.join("\n  "));
				}
				function getDefaultComponentFilters() {
					return [{
						type: ComponentFilterElementType,
						value: ElementTypeHostComponent,
						isEnabled: true
					}];
				}
				function getSavedComponentFilters() {
					try {
						var raw = localStorageGetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY);
						if (raw != null) {
							var parsedFilters = JSON.parse(raw);
							return filterOutLocationComponentFilters(parsedFilters);
						}
					} catch (error) {}
					return getDefaultComponentFilters();
				}
				function setSavedComponentFilters(componentFilters) {
					localStorageSetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY, JSON.stringify(filterOutLocationComponentFilters(componentFilters)));
				}
				function filterOutLocationComponentFilters(componentFilters) {
					if (!Array.isArray(componentFilters)) return componentFilters;
					return componentFilters.filter(function(f) {
						return f.type !== ComponentFilterLocation;
					});
				}
				function parseBool(s) {
					if (s === "true") return true;
					if (s === "false") return false;
				}
				function castBool(v) {
					if (v === true || v === false) return v;
				}
				function castBrowserTheme(v) {
					if (v === "light" || v === "dark" || v === "auto") return v;
				}
				function getAppendComponentStack() {
					var _parseBool;
					var raw = localStorageGetItem(LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY);
					return (_parseBool = parseBool(raw)) !== null && _parseBool !== void 0 ? _parseBool : true;
				}
				function getBreakOnConsoleErrors() {
					var _parseBool2;
					var raw = localStorageGetItem(LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS);
					return (_parseBool2 = parseBool(raw)) !== null && _parseBool2 !== void 0 ? _parseBool2 : false;
				}
				function getHideConsoleLogsInStrictMode() {
					var _parseBool3;
					var raw = localStorageGetItem(LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE);
					return (_parseBool3 = parseBool(raw)) !== null && _parseBool3 !== void 0 ? _parseBool3 : false;
				}
				function getShowInlineWarningsAndErrors() {
					var _parseBool4;
					var raw = localStorageGetItem(LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY);
					return (_parseBool4 = parseBool(raw)) !== null && _parseBool4 !== void 0 ? _parseBool4 : true;
				}
				function getDefaultOpenInEditorURL() {
					return typeof process.env.EDITOR_URL === "string" ? process.env.EDITOR_URL : "";
				}
				function getOpenInEditorURL() {
					try {
						var raw = localStorageGetItem(LOCAL_STORAGE_OPEN_IN_EDITOR_URL);
						if (raw != null) return JSON.parse(raw);
					} catch (error) {}
					return getDefaultOpenInEditorURL();
				}
				function parseElementDisplayNameFromBackend(displayName, type) {
					if (displayName === null) return {
						formattedDisplayName: null,
						hocDisplayNames: null,
						compiledWithForget: false
					};
					if (displayName.startsWith("Forget(")) {
						var displayNameWithoutForgetWrapper = displayName.slice(7, displayName.length - 1);
						var _parseElementDisplayN = parseElementDisplayNameFromBackend(displayNameWithoutForgetWrapper, type);
						var formattedDisplayName = _parseElementDisplayN.formattedDisplayName;
						var _hocDisplayNames = _parseElementDisplayN.hocDisplayNames;
						return {
							formattedDisplayName,
							hocDisplayNames: _hocDisplayNames,
							compiledWithForget: true
						};
					}
					var hocDisplayNames = null;
					switch (type) {
						case ElementTypeClass:
						case ElementTypeForwardRef:
						case ElementTypeFunction:
						case ElementTypeMemo:
							if (displayName.indexOf("(") >= 0) {
								var matches = displayName.match(/[^()]+/g);
								if (matches != null) {
									displayName = matches.pop();
									hocDisplayNames = matches;
								}
							}
							break;
						default: break;
					}
					return {
						formattedDisplayName: displayName,
						hocDisplayNames,
						compiledWithForget: false
					};
				}
				function shallowDiffers(prev, next) {
					for (var attribute in prev) if (!(attribute in next)) return true;
					for (var _attribute in next) if (prev[_attribute] !== next[_attribute]) return true;
					return false;
				}
				function utils_getInObject(object, path) {
					return path.reduce(function(reduced, attr) {
						if (reduced) {
							if (utils_hasOwnProperty.call(reduced, attr)) return reduced[attr];
							if (typeof reduced[Symbol.iterator] === "function") return Array.from(reduced)[attr];
						}
						return null;
					}, object);
				}
				function deletePathInObject(object, path) {
					var length = path.length;
					var last = path[length - 1];
					if (object != null) {
						var parent = utils_getInObject(object, path.slice(0, length - 1));
						if (parent) if (src_isArray(parent)) parent.splice(last, 1);
						else delete parent[last];
					}
				}
				function renamePathInObject(object, oldPath, newPath) {
					var length = oldPath.length;
					if (object != null) {
						var parent = utils_getInObject(object, oldPath.slice(0, length - 1));
						if (parent) {
							var lastOld = oldPath[length - 1];
							var lastNew = newPath[length - 1];
							parent[lastNew] = parent[lastOld];
							if (src_isArray(parent)) parent.splice(lastOld, 1);
							else delete parent[lastOld];
						}
					}
				}
				function utils_setInObject(object, path, value1) {
					var length = path.length;
					var last = path[length - 1];
					if (object != null) {
						var parent = utils_getInObject(object, path.slice(0, length - 1));
						if (parent) parent[last] = value1;
					}
				}
				/**
				* Get a enhanced/artificial type string based on the object instance
				*/ function getDataType(data) {
					if (data === null) return "null";
					else if (data === void 0) return "undefined";
					if ((0, react_is_production.kK)(data)) return "react_element";
					if (typeof HTMLElement !== "undefined" && data instanceof HTMLElement) return "html_element";
					var type = utils_typeof(data);
					switch (type) {
						case "bigint": return "bigint";
						case "boolean": return "boolean";
						case "function": return "function";
						case "number": if (Number.isNaN(data)) return "nan";
						else if (!Number.isFinite(data)) return "infinity";
						else return "number";
						case "object":
							if (src_isArray(data)) return "array";
							else if (ArrayBuffer.isView(data)) return utils_hasOwnProperty.call(data.constructor, "BYTES_PER_ELEMENT") ? "typed_array" : "data_view";
							else if (data.constructor && data.constructor.name === "ArrayBuffer") return "array_buffer";
							else if (typeof data[Symbol.iterator] === "function") {
								var iterator = data[Symbol.iterator]();
								if (!iterator) {} else return iterator === data ? "opaque_iterator" : "iterator";
							} else if (data.constructor && data.constructor.name === "RegExp") return "regexp";
							else {
								var toStringValue = Object.prototype.toString.call(data);
								if (toStringValue === "[object Date]") return "date";
								else if (toStringValue === "[object HTMLAllCollection]") return "html_all_collection";
							}
							if (!isPlainObject(data)) return "class_instance";
							return "object";
						case "string": return "string";
						case "symbol": return "symbol";
						case "undefined":
							if (Object.prototype.toString.call(data) === "[object HTMLAllCollection]") return "html_all_collection";
							return "undefined";
						default: return "unknown";
					}
				}
				function typeOfWithLegacyElementSymbol(object) {
					if (utils_typeof(object) === "object" && object !== null) {
						var $$typeof = object.$$typeof;
						switch ($$typeof) {
							case REACT_LEGACY_ELEMENT_TYPE:
								var type = object.type;
								switch (type) {
									case REACT_FRAGMENT_TYPE:
									case REACT_PROFILER_TYPE:
									case REACT_STRICT_MODE_TYPE:
									case REACT_SUSPENSE_TYPE:
									case REACT_SUSPENSE_LIST_TYPE: return type;
									default:
										var $$typeofType = type && type.$$typeof;
										switch ($$typeofType) {
											case REACT_CONTEXT_TYPE:
											case REACT_FORWARD_REF_TYPE:
											case REACT_LAZY_TYPE:
											case REACT_MEMO_TYPE: return $$typeofType;
											case REACT_CONSUMER_TYPE: if (enableRenderableContext) return $$typeofType;
											case REACT_PROVIDER_TYPE: if (!enableRenderableContext) return $$typeofType;
											default: return $$typeof;
										}
								}
							case REACT_PORTAL_TYPE: return $$typeof;
						}
					}
					return void 0;
				}
				function getDisplayNameForReactElement(element) {
					var elementType = (0, react_is_production.kM)(element) || typeOfWithLegacyElementSymbol(element);
					switch (elementType) {
						case react_is_production.AI: return "ContextConsumer";
						case react_is_production.HQ: return "ContextProvider";
						case react_is_production.A4: return "ForwardRef";
						case react_is_production.HY: return "Fragment";
						case react_is_production.oM: return "Lazy";
						case react_is_production._Y: return "Memo";
						case react_is_production.h_: return "Portal";
						case react_is_production.Q1: return "Profiler";
						case react_is_production.nF: return "StrictMode";
						case react_is_production.n4: return "Suspense";
						case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
						case REACT_TRACING_MARKER_TYPE: return "TracingMarker";
						default:
							var type = element.type;
							if (typeof type === "string") return type;
							else if (typeof type === "function") return getDisplayName(type, "Anonymous");
							else if (type != null) return "NotImplementedInDevtools";
							else return "Element";
					}
				}
				var MAX_PREVIEW_STRING_LENGTH = 50;
				function truncateForDisplay(string) {
					var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : MAX_PREVIEW_STRING_LENGTH;
					if (string.length > length) return string.slice(0, length) + "…";
					else return string;
				}
				function formatDataForPreview(data, showFormattedValue) {
					if (data != null && utils_hasOwnProperty.call(data, meta.type)) return showFormattedValue ? data[meta.preview_long] : data[meta.preview_short];
					var type = getDataType(data);
					switch (type) {
						case "html_element": return "<".concat(truncateForDisplay(data.tagName.toLowerCase()), " />");
						case "function": return truncateForDisplay("ƒ ".concat(typeof data.name === "function" ? "" : data.name, "() {}"));
						case "string": return "\"".concat(data, "\"");
						case "bigint": return truncateForDisplay(data.toString() + "n");
						case "regexp": return truncateForDisplay(data.toString());
						case "symbol": return truncateForDisplay(data.toString());
						case "react_element": return "<".concat(truncateForDisplay(getDisplayNameForReactElement(data) || "Unknown"), " />");
						case "array_buffer": return "ArrayBuffer(".concat(data.byteLength, ")");
						case "data_view": return "DataView(".concat(data.buffer.byteLength, ")");
						case "array": if (showFormattedValue) {
							var formatted = "";
							for (var i = 0; i < data.length; i++) {
								if (i > 0) formatted += ", ";
								formatted += formatDataForPreview(data[i], false);
								if (formatted.length > MAX_PREVIEW_STRING_LENGTH) break;
							}
							return "[".concat(truncateForDisplay(formatted), "]");
						} else {
							var length = utils_hasOwnProperty.call(data, meta.size) ? data[meta.size] : data.length;
							return "Array(".concat(length, ")");
						}
						case "typed_array":
							var shortName = "".concat(data.constructor.name, "(").concat(data.length, ")");
							if (showFormattedValue) {
								var _formatted = "";
								for (var _i = 0; _i < data.length; _i++) {
									if (_i > 0) _formatted += ", ";
									_formatted += data[_i];
									if (_formatted.length > MAX_PREVIEW_STRING_LENGTH) break;
								}
								return "".concat(shortName, " [").concat(truncateForDisplay(_formatted), "]");
							} else return shortName;
						case "iterator":
							var name = data.constructor.name;
							if (showFormattedValue) {
								var array = Array.from(data);
								var _formatted2 = "";
								for (var _i2 = 0; _i2 < array.length; _i2++) {
									var entryOrEntries = array[_i2];
									if (_i2 > 0) _formatted2 += ", ";
									if (src_isArray(entryOrEntries)) {
										var key = formatDataForPreview(entryOrEntries[0], true);
										var value1 = formatDataForPreview(entryOrEntries[1], false);
										_formatted2 += "".concat(key, " => ").concat(value1);
									} else _formatted2 += formatDataForPreview(entryOrEntries, false);
									if (_formatted2.length > MAX_PREVIEW_STRING_LENGTH) break;
								}
								return "".concat(name, "(").concat(data.size, ") {").concat(truncateForDisplay(_formatted2), "}");
							} else return "".concat(name, "(").concat(data.size, ")");
						case "opaque_iterator": return data[Symbol.toStringTag];
						case "date": return data.toString();
						case "class_instance": return data.constructor.name;
						case "object": if (showFormattedValue) {
							var keys = Array.from(getAllEnumerableKeys(data)).sort(alphaSortKeys);
							var _formatted3 = "";
							for (var _i3 = 0; _i3 < keys.length; _i3++) {
								var _key = keys[_i3];
								if (_i3 > 0) _formatted3 += ", ";
								_formatted3 += "".concat(_key.toString(), ": ").concat(formatDataForPreview(data[_key], false));
								if (_formatted3.length > MAX_PREVIEW_STRING_LENGTH) break;
							}
							return "{".concat(truncateForDisplay(_formatted3), "}");
						} else return "{…}";
						case "boolean":
						case "number":
						case "infinity":
						case "nan":
						case "null":
						case "undefined": return data;
						default: try {
							return truncateForDisplay(String(data));
						} catch (error) {
							return "unserializable";
						}
					}
				}
				var isPlainObject = function isPlainObject$1(object) {
					var objectPrototype = Object.getPrototypeOf(object);
					if (!objectPrototype) return true;
					var objectParentPrototype = Object.getPrototypeOf(objectPrototype);
					return !objectParentPrototype;
				};
				function backendToFrontendSerializedElementMapper(element) {
					var _parseElementDisplayN2 = parseElementDisplayNameFromBackend(element.displayName, element.type);
					var formattedDisplayName = _parseElementDisplayN2.formattedDisplayName;
					var hocDisplayNames = _parseElementDisplayN2.hocDisplayNames;
					var compiledWithForget = _parseElementDisplayN2.compiledWithForget;
					return _objectSpread(_objectSpread({}, element), {}, {
						displayName: formattedDisplayName,
						hocDisplayNames,
						compiledWithForget
					});
				}
				function normalizeUrl(url) {
					return url.replace("/./", "/");
				}
				function hydration_ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function hydration_objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) hydration_ownKeys(Object(source), true).forEach(function(key) {
							hydration_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else hydration_ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function hydration_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var meta = {
					inspectable: Symbol("inspectable"),
					inspected: Symbol("inspected"),
					name: Symbol("name"),
					preview_long: Symbol("preview_long"),
					preview_short: Symbol("preview_short"),
					readonly: Symbol("readonly"),
					size: Symbol("size"),
					type: Symbol("type"),
					unserializable: Symbol("unserializable")
				};
				var LEVEL_THRESHOLD = 2;
				/**
				* Generate the dehydrated metadata for complex object instances
				*/ function createDehydrated(type, inspectable, data, cleaned, path) {
					cleaned.push(path);
					var dehydrated = {
						inspectable,
						type,
						preview_long: formatDataForPreview(data, true),
						preview_short: formatDataForPreview(data, false),
						name: typeof data.constructor !== "function" || typeof data.constructor.name !== "string" || data.constructor.name === "Object" ? "" : data.constructor.name
					};
					if (type === "array" || type === "typed_array") dehydrated.size = data.length;
					else if (type === "object") dehydrated.size = Object.keys(data).length;
					if (type === "iterator" || type === "typed_array") dehydrated.readonly = true;
					return dehydrated;
				}
				/**
				* Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels deep).
				* The paths of the stripped out objects are appended to the `cleaned` list.
				* On the other side of the barrier, the cleaned list is used to "re-hydrate" the cleaned representation into
				* an object with symbols as attributes, so that a sanitized object can be distinguished from a normal object.
				*
				* Input: {"some": {"attr": fn()}, "other": AnInstance}
				* Output: {
				*   "some": {
				*     "attr": {"name": the fn.name, type: "function"}
				*   },
				*   "other": {
				*     "name": "AnInstance",
				*     "type": "object",
				*   },
				* }
				* and cleaned = [["some", "attr"], ["other"]]
				*/ function dehydrate(data, cleaned, unserializable, path, isPathAllowed) {
					var level = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
					var type = getDataType(data);
					var isPathAllowedCheck;
					switch (type) {
						case "html_element":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data.tagName,
								type
							};
						case "function":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: typeof data.name === "function" || !data.name ? "function" : data.name,
								type
							};
						case "string":
							isPathAllowedCheck = isPathAllowed(path);
							if (isPathAllowedCheck) return data;
							else return data.length <= 500 ? data : data.slice(0, 500) + "...";
						case "bigint":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data.toString(),
								type
							};
						case "symbol":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data.toString(),
								type
							};
						case "react_element":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: getDisplayNameForReactElement(data) || "Unknown",
								type
							};
						case "array_buffer":
						case "data_view":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: type === "data_view" ? "DataView" : "ArrayBuffer",
								size: data.byteLength,
								type
							};
						case "array":
							isPathAllowedCheck = isPathAllowed(path);
							if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) return createDehydrated(type, true, data, cleaned, path);
							return data.map(function(item, i) {
								return dehydrate(item, cleaned, unserializable, path.concat([i]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1);
							});
						case "html_all_collection":
						case "typed_array":
						case "iterator":
							isPathAllowedCheck = isPathAllowed(path);
							if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) return createDehydrated(type, true, data, cleaned, path);
							else {
								var unserializableValue = {
									unserializable: true,
									type,
									readonly: true,
									size: type === "typed_array" ? data.length : void 0,
									preview_short: formatDataForPreview(data, false),
									preview_long: formatDataForPreview(data, true),
									name: typeof data.constructor !== "function" || typeof data.constructor.name !== "string" || data.constructor.name === "Object" ? "" : data.constructor.name
								};
								Array.from(data).forEach(function(item, i) {
									return unserializableValue[i] = dehydrate(item, cleaned, unserializable, path.concat([i]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1);
								});
								unserializable.push(path);
								return unserializableValue;
							}
						case "opaque_iterator":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data[Symbol.toStringTag],
								type
							};
						case "date":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data.toString(),
								type
							};
						case "regexp":
							cleaned.push(path);
							return {
								inspectable: false,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: data.toString(),
								type
							};
						case "object":
							isPathAllowedCheck = isPathAllowed(path);
							if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) return createDehydrated(type, true, data, cleaned, path);
							else {
								var object = {};
								getAllEnumerableKeys(data).forEach(function(key) {
									var name = key.toString();
									object[name] = dehydrate(data[key], cleaned, unserializable, path.concat([name]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1);
								});
								return object;
							}
						case "class_instance":
							isPathAllowedCheck = isPathAllowed(path);
							if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) return createDehydrated(type, true, data, cleaned, path);
							var value1 = {
								unserializable: true,
								type,
								readonly: true,
								preview_short: formatDataForPreview(data, false),
								preview_long: formatDataForPreview(data, true),
								name: typeof data.constructor !== "function" || typeof data.constructor.name !== "string" ? "" : data.constructor.name
							};
							getAllEnumerableKeys(data).forEach(function(key) {
								var keyAsString = key.toString();
								value1[keyAsString] = dehydrate(data[key], cleaned, unserializable, path.concat([keyAsString]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1);
							});
							unserializable.push(path);
							return value1;
						case "infinity":
						case "nan":
						case "undefined":
							cleaned.push(path);
							return { type };
						default: return data;
					}
				}
				function fillInPath(object, data, path, value1) {
					var target = getInObject(object, path);
					if (target != null) {
						if (!target[meta.unserializable]) {
							delete target[meta.inspectable];
							delete target[meta.inspected];
							delete target[meta.name];
							delete target[meta.preview_long];
							delete target[meta.preview_short];
							delete target[meta.readonly];
							delete target[meta.size];
							delete target[meta.type];
						}
					}
					if (value1 !== null && data.unserializable.length > 0) {
						var unserializablePath = data.unserializable[0];
						var isMatch = unserializablePath.length === path.length;
						for (var i = 0; i < path.length; i++) if (path[i] !== unserializablePath[i]) {
							isMatch = false;
							break;
						}
						if (isMatch) upgradeUnserializable(value1, value1);
					}
					setInObject(object, path, value1);
				}
				function hydrate(object, cleaned, unserializable) {
					cleaned.forEach(function(path) {
						var length = path.length;
						var last = path[length - 1];
						var parent = getInObject(object, path.slice(0, length - 1));
						if (!parent || !parent.hasOwnProperty(last)) return;
						var value1 = parent[last];
						if (!value1) return;
						else if (value1.type === "infinity") parent[last] = Infinity;
						else if (value1.type === "nan") parent[last] = NaN;
						else if (value1.type === "undefined") parent[last] = void 0;
						else {
							var replaced = {};
							replaced[meta.inspectable] = !!value1.inspectable;
							replaced[meta.inspected] = false;
							replaced[meta.name] = value1.name;
							replaced[meta.preview_long] = value1.preview_long;
							replaced[meta.preview_short] = value1.preview_short;
							replaced[meta.size] = value1.size;
							replaced[meta.readonly] = !!value1.readonly;
							replaced[meta.type] = value1.type;
							parent[last] = replaced;
						}
					});
					unserializable.forEach(function(path) {
						var length = path.length;
						var last = path[length - 1];
						var parent = getInObject(object, path.slice(0, length - 1));
						if (!parent || !parent.hasOwnProperty(last)) return;
						var node = parent[last];
						var replacement = hydration_objectSpread({}, node);
						upgradeUnserializable(replacement, node);
						parent[last] = replacement;
					});
					return object;
				}
				function upgradeUnserializable(destination, source) {
					var _Object$definePropert;
					Object.defineProperties(destination, (_Object$definePropert = {}, hydration_defineProperty(_Object$definePropert, meta.inspected, {
						configurable: true,
						enumerable: false,
						value: !!source.inspected
					}), hydration_defineProperty(_Object$definePropert, meta.name, {
						configurable: true,
						enumerable: false,
						value: source.name
					}), hydration_defineProperty(_Object$definePropert, meta.preview_long, {
						configurable: true,
						enumerable: false,
						value: source.preview_long
					}), hydration_defineProperty(_Object$definePropert, meta.preview_short, {
						configurable: true,
						enumerable: false,
						value: source.preview_short
					}), hydration_defineProperty(_Object$definePropert, meta.size, {
						configurable: true,
						enumerable: false,
						value: source.size
					}), hydration_defineProperty(_Object$definePropert, meta.readonly, {
						configurable: true,
						enumerable: false,
						value: !!source.readonly
					}), hydration_defineProperty(_Object$definePropert, meta.type, {
						configurable: true,
						enumerable: false,
						value: source.type
					}), hydration_defineProperty(_Object$definePropert, meta.unserializable, {
						configurable: true,
						enumerable: false,
						value: !!source.unserializable
					}), _Object$definePropert));
					delete destination.inspected;
					delete destination.name;
					delete destination.preview_long;
					delete destination.preview_short;
					delete destination.size;
					delete destination.readonly;
					delete destination.type;
					delete destination.unserializable;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var isArrayImpl = Array.isArray;
				function isArray_isArray(a) {
					return isArrayImpl(a);
				}
				var shared_isArray = isArray_isArray;
				function _createForOfIteratorHelper(o, allowArrayLike) {
					var it;
					if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
						if (Array.isArray(o) || (it = backend_utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
							if (it) o = it;
							var i = 0;
							var F = function F$1() {};
							return {
								s: F,
								n: function n() {
									if (i >= o.length) return { done: true };
									return {
										done: false,
										value: o[i++]
									};
								},
								e: function e(_e2) {
									throw _e2;
								},
								f: F
							};
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					}
					var normalCompletion = true;
					var didErr = false;
					var err;
					return {
						s: function s() {
							it = o[Symbol.iterator]();
						},
						n: function n() {
							var step = it.next();
							normalCompletion = step.done;
							return step;
						},
						e: function e(_e3) {
							didErr = true;
							err = _e3;
						},
						f: function f() {
							try {
								if (!normalCompletion && it.return != null) it.return();
							} finally {
								if (didErr) throw err;
							}
						}
					};
				}
				function utils_slicedToArray(arr, i) {
					return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || backend_utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest();
				}
				function utils_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function utils_iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function utils_arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				function utils_toConsumableArray(arr) {
					return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || backend_utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread();
				}
				function utils_nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function backend_utils_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return backend_utils_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return backend_utils_arrayLikeToArray(o, minLen);
				}
				function utils_iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function utils_arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return backend_utils_arrayLikeToArray(arr);
				}
				function backend_utils_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function backend_utils_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") backend_utils_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else backend_utils_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return backend_utils_typeof(obj);
				}
				function utils_ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function utils_objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) utils_ownKeys(Object(source), true).forEach(function(key) {
							backend_utils_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else utils_ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function backend_utils_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var FIRST_DEVTOOLS_BACKEND_LOCKSTEP_VER = "999.9.9";
				function hasAssignedBackend(version) {
					if (version == null || version === "") return false;
					return gte(version, FIRST_DEVTOOLS_BACKEND_LOCKSTEP_VER);
				}
				function cleanForBridge(data, isPathAllowed) {
					var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
					if (data !== null) {
						var cleanedPaths = [];
						var unserializablePaths = [];
						var cleanedData = dehydrate(data, cleanedPaths, unserializablePaths, path, isPathAllowed);
						return {
							data: cleanedData,
							cleaned: cleanedPaths,
							unserializable: unserializablePaths
						};
					} else return null;
				}
				function copyWithDelete(obj, path) {
					var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
					var key = path[index];
					var updated = shared_isArray(obj) ? obj.slice() : utils_objectSpread({}, obj);
					if (index + 1 === path.length) if (shared_isArray(updated)) updated.splice(key, 1);
					else delete updated[key];
					else updated[key] = copyWithDelete(obj[key], path, index + 1);
					return updated;
				}
				function copyWithRename(obj, oldPath, newPath) {
					var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
					var oldKey = oldPath[index];
					var updated = shared_isArray(obj) ? obj.slice() : utils_objectSpread({}, obj);
					if (index + 1 === oldPath.length) {
						var newKey = newPath[index];
						updated[newKey] = updated[oldKey];
						if (shared_isArray(updated)) updated.splice(oldKey, 1);
						else delete updated[oldKey];
					} else updated[oldKey] = copyWithRename(obj[oldKey], oldPath, newPath, index + 1);
					return updated;
				}
				function copyWithSet(obj, path, value1) {
					var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
					if (index >= path.length) return value1;
					var key = path[index];
					var updated = shared_isArray(obj) ? obj.slice() : utils_objectSpread({}, obj);
					updated[key] = copyWithSet(obj[key], path, value1, index + 1);
					return updated;
				}
				function getEffectDurations(root) {
					var effectDuration = null;
					var passiveEffectDuration = null;
					var hostRoot = root.current;
					if (hostRoot != null) {
						var stateNode = hostRoot.stateNode;
						if (stateNode != null) {
							effectDuration = stateNode.effectDuration != null ? stateNode.effectDuration : null;
							passiveEffectDuration = stateNode.passiveEffectDuration != null ? stateNode.passiveEffectDuration : null;
						}
					}
					return {
						effectDuration,
						passiveEffectDuration
					};
				}
				function serializeToString(data) {
					if (data === void 0) return "undefined";
					if (typeof data === "function") return data.toString();
					var cache = new Set();
					return JSON.stringify(data, function(key, value1) {
						if (backend_utils_typeof(value1) === "object" && value1 !== null) {
							if (cache.has(value1)) return;
							cache.add(value1);
						}
						if (typeof value1 === "bigint") return value1.toString() + "n";
						return value1;
					}, 2);
				}
				function formatWithStyles(inputArgs, style) {
					if (inputArgs === void 0 || inputArgs === null || inputArgs.length === 0 || typeof inputArgs[0] === "string" && inputArgs[0].match(/([^%]|^)(%c)/g) || style === void 0) return inputArgs;
					var REGEXP = /([^%]|^)((%%)*)(%([oOdisf]))/g;
					if (typeof inputArgs[0] === "string" && inputArgs[0].match(REGEXP)) return ["%c".concat(inputArgs[0]), style].concat(utils_toConsumableArray(inputArgs.slice(1)));
					else {
						var firstArg = inputArgs.reduce(function(formatStr, elem, i) {
							if (i > 0) formatStr += " ";
							switch (backend_utils_typeof(elem)) {
								case "string":
								case "boolean":
								case "symbol": return formatStr += "%s";
								case "number":
									var formatting = Number.isInteger(elem) ? "%i" : "%f";
									return formatStr += formatting;
								default: return formatStr += "%o";
							}
						}, "%c");
						return [firstArg, style].concat(utils_toConsumableArray(inputArgs));
					}
				}
				function formatConsoleArguments(maybeMessage) {
					for (var _len = arguments.length, inputArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) inputArgs[_key - 1] = arguments[_key];
					if (inputArgs.length === 0 || typeof maybeMessage !== "string") return [maybeMessage].concat(inputArgs);
					var args = inputArgs.slice();
					var template = "";
					var argumentsPointer = 0;
					for (var i = 0; i < maybeMessage.length; ++i) {
						var currentChar = maybeMessage[i];
						if (currentChar !== "%") {
							template += currentChar;
							continue;
						}
						var nextChar = maybeMessage[i + 1];
						++i;
						switch (nextChar) {
							case "c":
							case "O":
							case "o": {
								++argumentsPointer;
								template += "%".concat(nextChar);
								break;
							}
							case "d":
							case "i": {
								var _args$splice = args.splice(argumentsPointer, 1);
								var _args$splice2 = utils_slicedToArray(_args$splice, 1);
								var arg = _args$splice2[0];
								template += parseInt(arg, 10).toString();
								break;
							}
							case "f": {
								var _args$splice3 = args.splice(argumentsPointer, 1);
								var _args$splice4 = utils_slicedToArray(_args$splice3, 1);
								var _arg = _args$splice4[0];
								template += parseFloat(_arg).toString();
								break;
							}
							case "s": {
								var _args$splice5 = args.splice(argumentsPointer, 1);
								var _args$splice6 = utils_slicedToArray(_args$splice5, 1);
								var _arg2 = _args$splice6[0];
								template += _arg2.toString();
								break;
							}
							default: template += "%".concat(nextChar);
						}
					}
					return [template].concat(utils_toConsumableArray(args));
				}
				function formatConsoleArgumentsToSingleString(maybeMessage) {
					for (var _len2 = arguments.length, inputArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) inputArgs[_key2 - 1] = arguments[_key2];
					var args = inputArgs.slice();
					var formatted = String(maybeMessage);
					if (typeof maybeMessage === "string") {
						if (args.length) {
							var REGEXP = /(%?)(%([jds]))/g;
							formatted = formatted.replace(REGEXP, function(match, escaped, ptn, flag) {
								var arg = args.shift();
								switch (flag) {
									case "s":
										arg += "";
										break;
									case "d":
									case "i":
										arg = parseInt(arg, 10).toString();
										break;
									case "f":
										arg = parseFloat(arg).toString();
										break;
								}
								if (!escaped) return arg;
								args.unshift(arg);
								return match;
							});
						}
					}
					if (args.length) for (var i = 0; i < args.length; i++) formatted += " " + String(args[i]);
					formatted = formatted.replace(/%{2,2}/g, "%");
					return String(formatted);
				}
				function isSynchronousXHRSupported() {
					return !!(window.document && window.document.featurePolicy && window.document.featurePolicy.allowsFeature("sync-xhr"));
				}
				function gt() {
					var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
					return compareVersions(a, b) === 1;
				}
				function gte() {
					var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
					return compareVersions(a, b) > -1;
				}
				var isReactNativeEnvironment = function isReactNativeEnvironment$1() {
					return window.document == null;
				};
				function extractLocation(url) {
					if (url.indexOf(":") === -1) return null;
					var withoutParentheses = url.replace(/^\(+/, "").replace(/\)+$/, "");
					var locationParts = /(at )?(.+?)(?::(\d+))?(?::(\d+))?$/.exec(withoutParentheses);
					if (locationParts == null) return null;
					var _locationParts = utils_slicedToArray(locationParts, 5);
					var sourceURL = _locationParts[2];
					var line = _locationParts[3];
					var column = _locationParts[4];
					return {
						sourceURL,
						line,
						column
					};
				}
				var CHROME_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
				function parseSourceFromChromeStack(stack) {
					var frames = stack.split("\n");
					var _iterator = _createForOfIteratorHelper(frames);
					var _step;
					try {
						for (_iterator.s(); !(_step = _iterator.n()).done;) {
							var frame = _step.value;
							var sanitizedFrame = frame.trim();
							var locationInParenthesesMatch = sanitizedFrame.match(/ (\(.+\)$)/);
							var possibleLocation = locationInParenthesesMatch ? locationInParenthesesMatch[1] : sanitizedFrame;
							var location = extractLocation(possibleLocation);
							if (location == null) continue;
							var sourceURL = location.sourceURL;
							var _location$line = location.line;
							var line = _location$line === void 0 ? "1" : _location$line;
							var _location$column = location.column;
							var column = _location$column === void 0 ? "1" : _location$column;
							return {
								sourceURL,
								line: parseInt(line, 10),
								column: parseInt(column, 10)
							};
						}
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}
					return null;
				}
				function parseSourceFromFirefoxStack(stack) {
					var frames = stack.split("\n");
					var _iterator2 = _createForOfIteratorHelper(frames);
					var _step2;
					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
							var frame = _step2.value;
							var sanitizedFrame = frame.trim();
							var frameWithoutFunctionName = sanitizedFrame.replace(/((.*".+"[^@]*)?[^@]*)(?:@)/, "");
							var location = extractLocation(frameWithoutFunctionName);
							if (location == null) continue;
							var sourceURL = location.sourceURL;
							var _location$line2 = location.line;
							var line = _location$line2 === void 0 ? "1" : _location$line2;
							var _location$column2 = location.column;
							var column = _location$column2 === void 0 ? "1" : _location$column2;
							return {
								sourceURL,
								line: parseInt(line, 10),
								column: parseInt(column, 10)
							};
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
					return null;
				}
				function parseSourceFromComponentStack(componentStack) {
					if (componentStack.match(CHROME_STACK_REGEXP)) return parseSourceFromChromeStack(componentStack);
					return parseSourceFromFirefoxStack(componentStack);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function getOwnerWindow(node) {
					if (!node.ownerDocument) return null;
					return node.ownerDocument.defaultView;
				}
				function getOwnerIframe(node) {
					var nodeWindow = getOwnerWindow(node);
					if (nodeWindow) return nodeWindow.frameElement;
					return null;
				}
				function getBoundingClientRectWithBorderOffset(node) {
					var dimensions = getElementDimensions(node);
					return mergeRectOffsets([node.getBoundingClientRect(), {
						top: dimensions.borderTop,
						left: dimensions.borderLeft,
						bottom: dimensions.borderBottom,
						right: dimensions.borderRight,
						width: 0,
						height: 0
					}]);
				}
				function mergeRectOffsets(rects) {
					return rects.reduce(function(previousRect, rect) {
						if (previousRect == null) return rect;
						return {
							top: previousRect.top + rect.top,
							left: previousRect.left + rect.left,
							width: previousRect.width,
							height: previousRect.height,
							bottom: previousRect.bottom + rect.bottom,
							right: previousRect.right + rect.right
						};
					});
				}
				function getNestedBoundingClientRect(node, boundaryWindow) {
					var ownerIframe = getOwnerIframe(node);
					if (ownerIframe && ownerIframe !== boundaryWindow) {
						var rects = [node.getBoundingClientRect()];
						var currentIframe = ownerIframe;
						var onlyOneMore = false;
						while (currentIframe) {
							var rect = getBoundingClientRectWithBorderOffset(currentIframe);
							rects.push(rect);
							currentIframe = getOwnerIframe(currentIframe);
							if (onlyOneMore) break;
							if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) onlyOneMore = true;
						}
						return mergeRectOffsets(rects);
					} else return node.getBoundingClientRect();
				}
				function getElementDimensions(domElement) {
					var calculatedStyle = window.getComputedStyle(domElement);
					return {
						borderLeft: parseInt(calculatedStyle.borderLeftWidth, 10),
						borderRight: parseInt(calculatedStyle.borderRightWidth, 10),
						borderTop: parseInt(calculatedStyle.borderTopWidth, 10),
						borderBottom: parseInt(calculatedStyle.borderBottomWidth, 10),
						marginLeft: parseInt(calculatedStyle.marginLeft, 10),
						marginRight: parseInt(calculatedStyle.marginRight, 10),
						marginTop: parseInt(calculatedStyle.marginTop, 10),
						marginBottom: parseInt(calculatedStyle.marginBottom, 10),
						paddingLeft: parseInt(calculatedStyle.paddingLeft, 10),
						paddingRight: parseInt(calculatedStyle.paddingRight, 10),
						paddingTop: parseInt(calculatedStyle.paddingTop, 10),
						paddingBottom: parseInt(calculatedStyle.paddingBottom, 10)
					};
				}
				function Overlay_classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
				}
				function Overlay_defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				function Overlay_createClass(Constructor, protoProps, staticProps) {
					if (protoProps) Overlay_defineProperties(Constructor.prototype, protoProps);
					if (staticProps) Overlay_defineProperties(Constructor, staticProps);
					return Constructor;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var Overlay_assign = Object.assign;
				var OverlayRect = /* @__PURE__ */ function() {
					function OverlayRect$1(doc, container) {
						Overlay_classCallCheck(this, OverlayRect$1);
						this.node = doc.createElement("div");
						this.border = doc.createElement("div");
						this.padding = doc.createElement("div");
						this.content = doc.createElement("div");
						this.border.style.borderColor = overlayStyles.border;
						this.padding.style.borderColor = overlayStyles.padding;
						this.content.style.backgroundColor = overlayStyles.background;
						Overlay_assign(this.node.style, {
							borderColor: overlayStyles.margin,
							pointerEvents: "none",
							position: "fixed"
						});
						this.node.style.zIndex = "10000000";
						this.node.appendChild(this.border);
						this.border.appendChild(this.padding);
						this.padding.appendChild(this.content);
						container.appendChild(this.node);
					}
					__name(OverlayRect$1, "OverlayRect");
					Overlay_createClass(OverlayRect$1, [{
						key: "remove",
						value: function remove() {
							if (this.node.parentNode) this.node.parentNode.removeChild(this.node);
						}
					}, {
						key: "update",
						value: function update(box, dims) {
							boxWrap(dims, "margin", this.node);
							boxWrap(dims, "border", this.border);
							boxWrap(dims, "padding", this.padding);
							Overlay_assign(this.content.style, {
								height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + "px",
								width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + "px"
							});
							Overlay_assign(this.node.style, {
								top: box.top - dims.marginTop + "px",
								left: box.left - dims.marginLeft + "px"
							});
						}
					}]);
					return OverlayRect$1;
				}();
				var OverlayTip = /* @__PURE__ */ function() {
					function OverlayTip$1(doc, container) {
						Overlay_classCallCheck(this, OverlayTip$1);
						this.tip = doc.createElement("div");
						Overlay_assign(this.tip.style, {
							display: "flex",
							flexFlow: "row nowrap",
							backgroundColor: "#333740",
							borderRadius: "2px",
							fontFamily: "\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace",
							fontWeight: "bold",
							padding: "3px 5px",
							pointerEvents: "none",
							position: "fixed",
							fontSize: "12px",
							whiteSpace: "nowrap"
						});
						this.nameSpan = doc.createElement("span");
						this.tip.appendChild(this.nameSpan);
						Overlay_assign(this.nameSpan.style, {
							color: "#ee78e6",
							borderRight: "1px solid #aaaaaa",
							paddingRight: "0.5rem",
							marginRight: "0.5rem"
						});
						this.dimSpan = doc.createElement("span");
						this.tip.appendChild(this.dimSpan);
						Overlay_assign(this.dimSpan.style, { color: "#d7d7d7" });
						this.tip.style.zIndex = "10000000";
						container.appendChild(this.tip);
					}
					__name(OverlayTip$1, "OverlayTip");
					Overlay_createClass(OverlayTip$1, [
						{
							key: "remove",
							value: function remove() {
								if (this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
							}
						},
						{
							key: "updateText",
							value: function updateText(name, width, height) {
								this.nameSpan.textContent = name;
								this.dimSpan.textContent = Math.round(width) + "px × " + Math.round(height) + "px";
							}
						},
						{
							key: "updatePosition",
							value: function updatePosition(dims, bounds) {
								var tipRect = this.tip.getBoundingClientRect();
								var tipPos = findTipPos(dims, bounds, {
									width: tipRect.width,
									height: tipRect.height
								});
								Overlay_assign(this.tip.style, tipPos.style);
							}
						}
					]);
					return OverlayTip$1;
				}();
				var Overlay = /* @__PURE__ */ function() {
					function Overlay$1(agent$1) {
						Overlay_classCallCheck(this, Overlay$1);
						var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
						this.window = currentWindow;
						var tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
						this.tipBoundsWindow = tipBoundsWindow;
						var doc = currentWindow.document;
						this.container = doc.createElement("div");
						this.container.style.zIndex = "10000000";
						this.tip = new OverlayTip(doc, this.container);
						this.rects = [];
						this.agent = agent$1;
						doc.body.appendChild(this.container);
					}
					__name(Overlay$1, "Overlay");
					Overlay_createClass(Overlay$1, [{
						key: "remove",
						value: function remove() {
							this.tip.remove();
							this.rects.forEach(function(rect) {
								rect.remove();
							});
							this.rects.length = 0;
							if (this.container.parentNode) this.container.parentNode.removeChild(this.container);
						}
					}, {
						key: "inspect",
						value: function inspect(nodes, name) {
							var _this = this;
							var elements = nodes.filter(function(node$1) {
								return node$1.nodeType === Node.ELEMENT_NODE;
							});
							while (this.rects.length > elements.length) {
								var rect = this.rects.pop();
								rect.remove();
							}
							if (elements.length === 0) return;
							while (this.rects.length < elements.length) this.rects.push(new OverlayRect(this.window.document, this.container));
							var outerBox = {
								top: Number.POSITIVE_INFINITY,
								right: Number.NEGATIVE_INFINITY,
								bottom: Number.NEGATIVE_INFINITY,
								left: Number.POSITIVE_INFINITY
							};
							elements.forEach(function(element, index) {
								var box = getNestedBoundingClientRect(element, _this.window);
								var dims = getElementDimensions(element);
								outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
								outerBox.right = Math.max(outerBox.right, box.left + box.width + dims.marginRight);
								outerBox.bottom = Math.max(outerBox.bottom, box.top + box.height + dims.marginBottom);
								outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
								var rect$1 = _this.rects[index];
								rect$1.update(box, dims);
							});
							if (!name) {
								name = elements[0].nodeName.toLowerCase();
								var node = elements[0];
								var rendererInterface = this.agent.getBestMatchingRendererInterface(node);
								if (rendererInterface) {
									var id = rendererInterface.getFiberIDForNative(node, true);
									if (id) {
										var ownerName = rendererInterface.getDisplayNameForFiberID(id, true);
										if (ownerName) name += " (in " + ownerName + ")";
									}
								}
							}
							this.tip.updateText(name, outerBox.right - outerBox.left, outerBox.bottom - outerBox.top);
							var tipBounds = getNestedBoundingClientRect(this.tipBoundsWindow.document.documentElement, this.window);
							this.tip.updatePosition({
								top: outerBox.top,
								left: outerBox.left,
								height: outerBox.bottom - outerBox.top,
								width: outerBox.right - outerBox.left
							}, {
								top: tipBounds.top + this.tipBoundsWindow.scrollY,
								left: tipBounds.left + this.tipBoundsWindow.scrollX,
								height: this.tipBoundsWindow.innerHeight,
								width: this.tipBoundsWindow.innerWidth
							});
						}
					}]);
					return Overlay$1;
				}();
				function findTipPos(dims, bounds, tipSize) {
					var tipHeight = Math.max(tipSize.height, 20);
					var tipWidth = Math.max(tipSize.width, 60);
					var margin = 5;
					var top;
					if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) if (dims.top + dims.height < bounds.top + 0) top = bounds.top + margin;
					else top = dims.top + dims.height + margin;
					else if (dims.top - tipHeight <= bounds.top + bounds.height) if (dims.top - tipHeight - margin < bounds.top + margin) top = bounds.top + margin;
					else top = dims.top - tipHeight - margin;
					else top = bounds.top + bounds.height - tipHeight - margin;
					var left = dims.left + margin;
					if (dims.left < bounds.left) left = bounds.left + margin;
					if (dims.left + tipWidth > bounds.left + bounds.width) left = bounds.left + bounds.width - tipWidth - margin;
					top += "px";
					left += "px";
					return { style: {
						top,
						left
					} };
				}
				function boxWrap(dims, what, node) {
					Overlay_assign(node.style, {
						borderTopWidth: dims[what + "Top"] + "px",
						borderLeftWidth: dims[what + "Left"] + "px",
						borderRightWidth: dims[what + "Right"] + "px",
						borderBottomWidth: dims[what + "Bottom"] + "px",
						borderStyle: "solid"
					});
				}
				var overlayStyles = {
					background: "rgba(120, 170, 210, 0.7)",
					padding: "rgba(77, 200, 0, 0.3)",
					margin: "rgba(255, 155, 0, 0.3)",
					border: "rgba(255, 200, 50, 0.3)"
				};
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var SHOW_DURATION = 2e3;
				var timeoutID = null;
				var overlay = null;
				function hideOverlayNative(agent$1) {
					agent$1.emit("hideNativeHighlight");
				}
				function hideOverlayWeb() {
					timeoutID = null;
					if (overlay !== null) {
						overlay.remove();
						overlay = null;
					}
				}
				function hideOverlay(agent$1) {
					return isReactNativeEnvironment() ? hideOverlayNative(agent$1) : hideOverlayWeb();
				}
				function showOverlayNative(elements, agent$1) {
					agent$1.emit("showNativeHighlight", elements);
				}
				function showOverlayWeb(elements, componentName, agent$1, hideAfterTimeout) {
					if (timeoutID !== null) clearTimeout(timeoutID);
					if (overlay === null) overlay = new Overlay(agent$1);
					overlay.inspect(elements, componentName);
					if (hideAfterTimeout) timeoutID = setTimeout(function() {
						return hideOverlay(agent$1);
					}, SHOW_DURATION);
				}
				function showOverlay(elements, componentName, agent$1, hideAfterTimeout) {
					return isReactNativeEnvironment() ? showOverlayNative(elements, agent$1) : showOverlayWeb(elements, componentName, agent$1, hideAfterTimeout);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var iframesListeningTo = new Set();
				function setupHighlighter(bridge, agent$1) {
					bridge.addListener("clearNativeElementHighlight", clearNativeElementHighlight);
					bridge.addListener("highlightNativeElement", highlightNativeElement);
					bridge.addListener("shutdown", stopInspectingNative);
					bridge.addListener("startInspectingNative", startInspectingNative);
					bridge.addListener("stopInspectingNative", stopInspectingNative);
					function startInspectingNative() {
						registerListenersOnWindow(window);
					}
					function registerListenersOnWindow(window1) {
						if (window1 && typeof window1.addEventListener === "function") {
							window1.addEventListener("click", onClick, true);
							window1.addEventListener("mousedown", onMouseEvent, true);
							window1.addEventListener("mouseover", onMouseEvent, true);
							window1.addEventListener("mouseup", onMouseEvent, true);
							window1.addEventListener("pointerdown", onPointerDown, true);
							window1.addEventListener("pointermove", onPointerMove, true);
							window1.addEventListener("pointerup", onPointerUp, true);
						} else agent$1.emit("startInspectingNative");
					}
					function stopInspectingNative() {
						hideOverlay(agent$1);
						removeListenersOnWindow(window);
						iframesListeningTo.forEach(function(frame) {
							try {
								removeListenersOnWindow(frame.contentWindow);
							} catch (error) {}
						});
						iframesListeningTo = new Set();
					}
					function removeListenersOnWindow(window1) {
						if (window1 && typeof window1.removeEventListener === "function") {
							window1.removeEventListener("click", onClick, true);
							window1.removeEventListener("mousedown", onMouseEvent, true);
							window1.removeEventListener("mouseover", onMouseEvent, true);
							window1.removeEventListener("mouseup", onMouseEvent, true);
							window1.removeEventListener("pointerdown", onPointerDown, true);
							window1.removeEventListener("pointermove", onPointerMove, true);
							window1.removeEventListener("pointerup", onPointerUp, true);
						} else agent$1.emit("stopInspectingNative");
					}
					function clearNativeElementHighlight() {
						hideOverlay(agent$1);
					}
					function highlightNativeElement(_ref) {
						var displayName = _ref.displayName;
						var hideAfterTimeout = _ref.hideAfterTimeout;
						var id = _ref.id;
						var openNativeElementsPanel = _ref.openNativeElementsPanel;
						var rendererID = _ref.rendererID;
						var scrollIntoView = _ref.scrollIntoView;
						var renderer = agent$1.rendererInterfaces[rendererID];
						if (renderer == null) {
							console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							hideOverlay(agent$1);
							return;
						}
						if (!renderer.hasFiberWithId(id)) {
							hideOverlay(agent$1);
							return;
						}
						var nodes = renderer.findNativeNodesForFiberID(id);
						if (nodes != null && nodes[0] != null) {
							var node = nodes[0];
							if (scrollIntoView && typeof node.scrollIntoView === "function") node.scrollIntoView({
								block: "nearest",
								inline: "nearest"
							});
							showOverlay(nodes, displayName, agent$1, hideAfterTimeout);
							if (openNativeElementsPanel) {
								window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = node;
								bridge.send("syncSelectionToNativeElementsPanel");
							}
						} else hideOverlay(agent$1);
					}
					function onClick(event) {
						event.preventDefault();
						event.stopPropagation();
						stopInspectingNative();
						bridge.send("stopInspectingNative", true);
					}
					function onMouseEvent(event) {
						event.preventDefault();
						event.stopPropagation();
					}
					function onPointerDown(event) {
						event.preventDefault();
						event.stopPropagation();
						selectFiberForNode(getEventTarget(event));
					}
					var lastHoveredNode = null;
					function onPointerMove(event) {
						event.preventDefault();
						event.stopPropagation();
						var target = getEventTarget(event);
						if (lastHoveredNode === target) return;
						lastHoveredNode = target;
						if (target.tagName === "IFRAME") {
							var iframe = target;
							try {
								if (!iframesListeningTo.has(iframe)) {
									var _window = iframe.contentWindow;
									registerListenersOnWindow(_window);
									iframesListeningTo.add(iframe);
								}
							} catch (error) {}
						}
						showOverlay([target], null, agent$1, false);
						selectFiberForNode(target);
					}
					function onPointerUp(event) {
						event.preventDefault();
						event.stopPropagation();
					}
					var selectFiberForNode = lodash_throttle_default()(esm(function(node) {
						var id = agent$1.getIDForNode(node);
						if (id !== null) bridge.send("selectFiber", id);
					}), 200, { leading: false });
					function getEventTarget(event) {
						if (event.composed) return event.composedPath()[0];
						return event.target;
					}
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var OUTLINE_COLOR = "#f0f0f0";
				var COLORS = [
					"#37afa9",
					"#63b19e",
					"#80b393",
					"#97b488",
					"#abb67d",
					"#beb771",
					"#cfb965",
					"#dfba57",
					"#efbb49",
					"#febc38"
				];
				var canvas = null;
				function drawNative(nodeToData$1, agent$1) {
					var nodesToDraw = [];
					iterateNodes(nodeToData$1, function(_, color, node) {
						nodesToDraw.push({
							node,
							color
						});
					});
					agent$1.emit("drawTraceUpdates", nodesToDraw);
				}
				function drawWeb(nodeToData$1) {
					if (canvas === null) initialize();
					var canvasFlow = canvas;
					canvasFlow.width = window.innerWidth;
					canvasFlow.height = window.innerHeight;
					var context = canvasFlow.getContext("2d");
					context.clearRect(0, 0, canvasFlow.width, canvasFlow.height);
					iterateNodes(nodeToData$1, function(rect, color) {
						if (rect !== null) drawBorder(context, rect, color);
					});
				}
				function draw(nodeToData$1, agent$1) {
					return isReactNativeEnvironment() ? drawNative(nodeToData$1, agent$1) : drawWeb(nodeToData$1);
				}
				function iterateNodes(nodeToData$1, execute) {
					nodeToData$1.forEach(function(_ref, node) {
						var count = _ref.count;
						var rect = _ref.rect;
						var colorIndex = Math.min(COLORS.length - 1, count - 1);
						var color = COLORS[colorIndex];
						execute(rect, color, node);
					});
				}
				function drawBorder(context, rect, color) {
					var height = rect.height;
					var left = rect.left;
					var top = rect.top;
					var width = rect.width;
					context.lineWidth = 1;
					context.strokeStyle = OUTLINE_COLOR;
					context.strokeRect(left - 1, top - 1, width + 2, height + 2);
					context.lineWidth = 1;
					context.strokeStyle = OUTLINE_COLOR;
					context.strokeRect(left + 1, top + 1, width - 1, height - 1);
					context.strokeStyle = color;
					context.setLineDash([0]);
					context.lineWidth = 1;
					context.strokeRect(left, top, width - 1, height - 1);
					context.setLineDash([0]);
				}
				function destroyNative(agent$1) {
					agent$1.emit("disableTraceUpdates");
				}
				function destroyWeb() {
					if (canvas !== null) {
						if (canvas.parentNode != null) canvas.parentNode.removeChild(canvas);
						canvas = null;
					}
				}
				function destroy(agent$1) {
					return isReactNativeEnvironment() ? destroyNative(agent$1) : destroyWeb();
				}
				function initialize() {
					canvas = window.document.createElement("canvas");
					canvas.style.cssText = "\n    xx-background-color: red;\n    xx-opacity: 0.5;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 1000000000;\n  ";
					var root = window.document.documentElement;
					root.insertBefore(canvas, root.firstChild);
				}
				function TraceUpdates_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") TraceUpdates_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else TraceUpdates_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return TraceUpdates_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var DISPLAY_DURATION = 250;
				var MAX_DISPLAY_DURATION = 3e3;
				var REMEASUREMENT_AFTER_DURATION = 250;
				var getCurrentTime = (typeof performance === "undefined" ? "undefined" : TraceUpdates_typeof(performance)) === "object" && typeof performance.now === "function" ? function getCurrentTime$1() {
					return performance.now();
				} : function() {
					return Date.now();
				};
				var nodeToData = new Map();
				var agent = null;
				var drawAnimationFrameID = null;
				var isEnabled = false;
				var redrawTimeoutID = null;
				function TraceUpdates_initialize(injectedAgent) {
					agent = injectedAgent;
					agent.addListener("traceUpdates", traceUpdates);
				}
				function toggleEnabled(value1) {
					isEnabled = value1;
					if (!isEnabled) {
						nodeToData.clear();
						if (drawAnimationFrameID !== null) {
							cancelAnimationFrame(drawAnimationFrameID);
							drawAnimationFrameID = null;
						}
						if (redrawTimeoutID !== null) {
							clearTimeout(redrawTimeoutID);
							redrawTimeoutID = null;
						}
						destroy(agent);
					}
				}
				function traceUpdates(nodes) {
					if (!isEnabled) return;
					nodes.forEach(function(node) {
						var data = nodeToData.get(node);
						var now = getCurrentTime();
						var lastMeasuredAt = data != null ? data.lastMeasuredAt : 0;
						var rect = data != null ? data.rect : null;
						if (rect === null || lastMeasuredAt + REMEASUREMENT_AFTER_DURATION < now) {
							lastMeasuredAt = now;
							rect = measureNode(node);
						}
						nodeToData.set(node, {
							count: data != null ? data.count + 1 : 1,
							expirationTime: data != null ? Math.min(now + MAX_DISPLAY_DURATION, data.expirationTime + DISPLAY_DURATION) : now + DISPLAY_DURATION,
							lastMeasuredAt,
							rect
						});
					});
					if (redrawTimeoutID !== null) {
						clearTimeout(redrawTimeoutID);
						redrawTimeoutID = null;
					}
					if (drawAnimationFrameID === null) drawAnimationFrameID = requestAnimationFrame(prepareToDraw);
				}
				function prepareToDraw() {
					drawAnimationFrameID = null;
					redrawTimeoutID = null;
					var now = getCurrentTime();
					var earliestExpiration = Number.MAX_VALUE;
					nodeToData.forEach(function(data, node) {
						if (data.expirationTime < now) nodeToData.delete(node);
						else earliestExpiration = Math.min(earliestExpiration, data.expirationTime);
					});
					draw(nodeToData, agent);
					if (earliestExpiration !== Number.MAX_VALUE) redrawTimeoutID = setTimeout(prepareToDraw, earliestExpiration - now);
				}
				function measureNode(node) {
					if (!node || typeof node.getBoundingClientRect !== "function") return null;
					var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
					return getNestedBoundingClientRect(node, currentWindow);
				}
				var react_debug_tools = __webpack_require__(987);
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var CONCURRENT_MODE_NUMBER = 60111;
				var CONCURRENT_MODE_SYMBOL_STRING = "Symbol(react.concurrent_mode)";
				var CONTEXT_NUMBER = 60110;
				var CONTEXT_SYMBOL_STRING = "Symbol(react.context)";
				var SERVER_CONTEXT_SYMBOL_STRING = "Symbol(react.server_context)";
				var DEPRECATED_ASYNC_MODE_SYMBOL_STRING = "Symbol(react.async_mode)";
				var ELEMENT_SYMBOL_STRING = "Symbol(react.transitional.element)";
				var LEGACY_ELEMENT_NUMBER = 60103;
				var LEGACY_ELEMENT_SYMBOL_STRING = "Symbol(react.element)";
				var DEBUG_TRACING_MODE_NUMBER = 60129;
				var DEBUG_TRACING_MODE_SYMBOL_STRING = "Symbol(react.debug_trace_mode)";
				var FORWARD_REF_NUMBER = 60112;
				var FORWARD_REF_SYMBOL_STRING = "Symbol(react.forward_ref)";
				var FRAGMENT_NUMBER = 60107;
				var FRAGMENT_SYMBOL_STRING = "Symbol(react.fragment)";
				var LAZY_NUMBER = 60116;
				var LAZY_SYMBOL_STRING = "Symbol(react.lazy)";
				var MEMO_NUMBER = 60115;
				var MEMO_SYMBOL_STRING = "Symbol(react.memo)";
				var PORTAL_NUMBER = 60106;
				var PORTAL_SYMBOL_STRING = "Symbol(react.portal)";
				var PROFILER_NUMBER = 60114;
				var PROFILER_SYMBOL_STRING = "Symbol(react.profiler)";
				var PROVIDER_NUMBER = 60109;
				var PROVIDER_SYMBOL_STRING = "Symbol(react.provider)";
				var CONSUMER_SYMBOL_STRING = "Symbol(react.consumer)";
				var SCOPE_NUMBER = 60119;
				var SCOPE_SYMBOL_STRING = "Symbol(react.scope)";
				var STRICT_MODE_NUMBER = 60108;
				var STRICT_MODE_SYMBOL_STRING = "Symbol(react.strict_mode)";
				var SUSPENSE_NUMBER = 60113;
				var SUSPENSE_SYMBOL_STRING = "Symbol(react.suspense)";
				var SUSPENSE_LIST_NUMBER = 60120;
				var SUSPENSE_LIST_SYMBOL_STRING = "Symbol(react.suspense_list)";
				var SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED_SYMBOL_STRING = "Symbol(react.server_context.defaultValue)";
				var ReactSymbols_REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/
				/************************************************************************
				* This file is forked between different DevTools implementations.
				* It should never be imported directly!
				* It should always be imported from "react-devtools-feature-flags".
				************************************************************************/ var enableLogger = false;
				var enableStyleXFeatures = false;
				var isInternalFacebookBuild = false;
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/
				/**
				* inlined Object.is polyfill to avoid requiring consumers ship their own
				* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
				*/ function is(x, y) {
					return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
				}
				var objectIs = typeof Object.is === "function" ? Object.is : is;
				var shared_objectIs = objectIs;
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var hasOwnProperty_hasOwnProperty = Object.prototype.hasOwnProperty;
				var shared_hasOwnProperty = hasOwnProperty_hasOwnProperty;
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var cachedStyleNameToValueMap = new Map();
				function getStyleXData(data) {
					var sources = new Set();
					var resolvedStyles = {};
					crawlData(data, sources, resolvedStyles);
					return {
						sources: Array.from(sources).sort(),
						resolvedStyles
					};
				}
				function crawlData(data, sources, resolvedStyles) {
					if (data == null) return;
					if (src_isArray(data)) data.forEach(function(entry) {
						if (entry == null) return;
						if (src_isArray(entry)) crawlData(entry, sources, resolvedStyles);
						else crawlObjectProperties(entry, sources, resolvedStyles);
					});
					else crawlObjectProperties(data, sources, resolvedStyles);
					resolvedStyles = Object.fromEntries(Object.entries(resolvedStyles).sort());
				}
				function crawlObjectProperties(entry, sources, resolvedStyles) {
					var keys = Object.keys(entry);
					keys.forEach(function(key) {
						var value1 = entry[key];
						if (typeof value1 === "string") if (key === value1) sources.add(key);
						else {
							var propertyValue = getPropertyValueForStyleName(value1);
							if (propertyValue != null) resolvedStyles[key] = propertyValue;
						}
						else {
							var nestedStyle = {};
							resolvedStyles[key] = nestedStyle;
							crawlData([value1], sources, nestedStyle);
						}
					});
				}
				function getPropertyValueForStyleName(styleName) {
					if (cachedStyleNameToValueMap.has(styleName)) return cachedStyleNameToValueMap.get(styleName);
					for (var styleSheetIndex = 0; styleSheetIndex < document.styleSheets.length; styleSheetIndex++) {
						var styleSheet = document.styleSheets[styleSheetIndex];
						var rules = null;
						try {
							rules = styleSheet.cssRules;
						} catch (_e) {
							continue;
						}
						for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
							if (!(rules[ruleIndex] instanceof CSSStyleRule)) continue;
							var rule = rules[ruleIndex];
							var cssText = rule.cssText;
							var selectorText = rule.selectorText;
							var style = rule.style;
							if (selectorText != null) {
								if (selectorText.startsWith(".".concat(styleName))) {
									var match = cssText.match(/{ *([a-z\-]+):/);
									if (match !== null) {
										var property = match[1];
										var value1 = style.getPropertyValue(property);
										cachedStyleNameToValueMap.set(styleName, value1);
										return value1;
									} else return null;
								}
							}
						}
					}
					return null;
				}
				var CHANGE_LOG_URL = "https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md";
				var UNSUPPORTED_VERSION_URL = "https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back";
				var REACT_DEVTOOLS_WORKPLACE_URL = "https://fburl.com/react-devtools-workplace-group";
				var THEME_STYLES = {
					light: {
						"--color-attribute-name": "#ef6632",
						"--color-attribute-name-not-editable": "#23272f",
						"--color-attribute-name-inverted": "rgba(255, 255, 255, 0.7)",
						"--color-attribute-value": "#1a1aa6",
						"--color-attribute-value-inverted": "#ffffff",
						"--color-attribute-editable-value": "#1a1aa6",
						"--color-background": "#ffffff",
						"--color-background-hover": "rgba(0, 136, 250, 0.1)",
						"--color-background-inactive": "#e5e5e5",
						"--color-background-invalid": "#fff0f0",
						"--color-background-selected": "#0088fa",
						"--color-button-background": "#ffffff",
						"--color-button-background-focus": "#ededed",
						"--color-button": "#5f6673",
						"--color-button-disabled": "#cfd1d5",
						"--color-button-active": "#0088fa",
						"--color-button-focus": "#23272f",
						"--color-button-hover": "#23272f",
						"--color-border": "#eeeeee",
						"--color-commit-did-not-render-fill": "#cfd1d5",
						"--color-commit-did-not-render-fill-text": "#000000",
						"--color-commit-did-not-render-pattern": "#cfd1d5",
						"--color-commit-did-not-render-pattern-text": "#333333",
						"--color-commit-gradient-0": "#37afa9",
						"--color-commit-gradient-1": "#63b19e",
						"--color-commit-gradient-2": "#80b393",
						"--color-commit-gradient-3": "#97b488",
						"--color-commit-gradient-4": "#abb67d",
						"--color-commit-gradient-5": "#beb771",
						"--color-commit-gradient-6": "#cfb965",
						"--color-commit-gradient-7": "#dfba57",
						"--color-commit-gradient-8": "#efbb49",
						"--color-commit-gradient-9": "#febc38",
						"--color-commit-gradient-text": "#000000",
						"--color-component-name": "#6a51b2",
						"--color-component-name-inverted": "#ffffff",
						"--color-component-badge-background": "#e6e6e6",
						"--color-component-badge-background-inverted": "rgba(255, 255, 255, 0.25)",
						"--color-component-badge-count": "#777d88",
						"--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
						"--color-console-error-badge-text": "#ffffff",
						"--color-console-error-background": "#fff0f0",
						"--color-console-error-border": "#ffd6d6",
						"--color-console-error-icon": "#eb3941",
						"--color-console-error-text": "#fe2e31",
						"--color-console-warning-badge-text": "#000000",
						"--color-console-warning-background": "#fffbe5",
						"--color-console-warning-border": "#fff5c1",
						"--color-console-warning-icon": "#f4bd00",
						"--color-console-warning-text": "#64460c",
						"--color-context-background": "rgba(0,0,0,.9)",
						"--color-context-background-hover": "rgba(255, 255, 255, 0.1)",
						"--color-context-background-selected": "#178fb9",
						"--color-context-border": "#3d424a",
						"--color-context-text": "#ffffff",
						"--color-context-text-selected": "#ffffff",
						"--color-dim": "#777d88",
						"--color-dimmer": "#cfd1d5",
						"--color-dimmest": "#eff0f1",
						"--color-error-background": "hsl(0, 100%, 97%)",
						"--color-error-border": "hsl(0, 100%, 92%)",
						"--color-error-text": "#ff0000",
						"--color-expand-collapse-toggle": "#777d88",
						"--color-forget-badge-background": "#2683e2",
						"--color-forget-badge-background-inverted": "#1a6bbc",
						"--color-forget-text": "#fff",
						"--color-link": "#0000ff",
						"--color-modal-background": "rgba(255, 255, 255, 0.75)",
						"--color-bridge-version-npm-background": "#eff0f1",
						"--color-bridge-version-npm-text": "#000000",
						"--color-bridge-version-number": "#0088fa",
						"--color-primitive-hook-badge-background": "#e5e5e5",
						"--color-primitive-hook-badge-text": "#5f6673",
						"--color-record-active": "#fc3a4b",
						"--color-record-hover": "#3578e5",
						"--color-record-inactive": "#0088fa",
						"--color-resize-bar": "#eeeeee",
						"--color-resize-bar-active": "#dcdcdc",
						"--color-resize-bar-border": "#d1d1d1",
						"--color-resize-bar-dot": "#333333",
						"--color-timeline-internal-module": "#d1d1d1",
						"--color-timeline-internal-module-hover": "#c9c9c9",
						"--color-timeline-internal-module-text": "#444",
						"--color-timeline-native-event": "#ccc",
						"--color-timeline-native-event-hover": "#aaa",
						"--color-timeline-network-primary": "#fcf3dc",
						"--color-timeline-network-primary-hover": "#f0e7d1",
						"--color-timeline-network-secondary": "#efc457",
						"--color-timeline-network-secondary-hover": "#e3ba52",
						"--color-timeline-priority-background": "#f6f6f6",
						"--color-timeline-priority-border": "#eeeeee",
						"--color-timeline-user-timing": "#c9cacd",
						"--color-timeline-user-timing-hover": "#93959a",
						"--color-timeline-react-idle": "#d3e5f6",
						"--color-timeline-react-idle-hover": "#c3d9ef",
						"--color-timeline-react-render": "#9fc3f3",
						"--color-timeline-react-render-hover": "#83afe9",
						"--color-timeline-react-render-text": "#11365e",
						"--color-timeline-react-commit": "#c88ff0",
						"--color-timeline-react-commit-hover": "#b281d6",
						"--color-timeline-react-commit-text": "#3e2c4a",
						"--color-timeline-react-layout-effects": "#b281d6",
						"--color-timeline-react-layout-effects-hover": "#9d71bd",
						"--color-timeline-react-layout-effects-text": "#3e2c4a",
						"--color-timeline-react-passive-effects": "#b281d6",
						"--color-timeline-react-passive-effects-hover": "#9d71bd",
						"--color-timeline-react-passive-effects-text": "#3e2c4a",
						"--color-timeline-react-schedule": "#9fc3f3",
						"--color-timeline-react-schedule-hover": "#2683E2",
						"--color-timeline-react-suspense-rejected": "#f1cc14",
						"--color-timeline-react-suspense-rejected-hover": "#ffdf37",
						"--color-timeline-react-suspense-resolved": "#a6e59f",
						"--color-timeline-react-suspense-resolved-hover": "#89d281",
						"--color-timeline-react-suspense-unresolved": "#c9cacd",
						"--color-timeline-react-suspense-unresolved-hover": "#93959a",
						"--color-timeline-thrown-error": "#ee1638",
						"--color-timeline-thrown-error-hover": "#da1030",
						"--color-timeline-text-color": "#000000",
						"--color-timeline-text-dim-color": "#ccc",
						"--color-timeline-react-work-border": "#eeeeee",
						"--color-search-match": "yellow",
						"--color-search-match-current": "#f7923b",
						"--color-selected-tree-highlight-active": "rgba(0, 136, 250, 0.1)",
						"--color-selected-tree-highlight-inactive": "rgba(0, 0, 0, 0.05)",
						"--color-scroll-caret": "rgba(150, 150, 150, 0.5)",
						"--color-tab-selected-border": "#0088fa",
						"--color-text": "#000000",
						"--color-text-invalid": "#ff0000",
						"--color-text-selected": "#ffffff",
						"--color-toggle-background-invalid": "#fc3a4b",
						"--color-toggle-background-on": "#0088fa",
						"--color-toggle-background-off": "#cfd1d5",
						"--color-toggle-text": "#ffffff",
						"--color-warning-background": "#fb3655",
						"--color-warning-background-hover": "#f82042",
						"--color-warning-text-color": "#ffffff",
						"--color-warning-text-color-inverted": "#fd4d69",
						"--color-scroll-thumb": "#c2c2c2",
						"--color-scroll-track": "#fafafa",
						"--color-tooltip-background": "rgba(0, 0, 0, 0.9)",
						"--color-tooltip-text": "#ffffff"
					},
					dark: {
						"--color-attribute-name": "#9d87d2",
						"--color-attribute-name-not-editable": "#ededed",
						"--color-attribute-name-inverted": "#282828",
						"--color-attribute-value": "#cedae0",
						"--color-attribute-value-inverted": "#ffffff",
						"--color-attribute-editable-value": "yellow",
						"--color-background": "#282c34",
						"--color-background-hover": "rgba(255, 255, 255, 0.1)",
						"--color-background-inactive": "#3d424a",
						"--color-background-invalid": "#5c0000",
						"--color-background-selected": "#178fb9",
						"--color-button-background": "#282c34",
						"--color-button-background-focus": "#3d424a",
						"--color-button": "#afb3b9",
						"--color-button-active": "#61dafb",
						"--color-button-disabled": "#4f5766",
						"--color-button-focus": "#a2e9fc",
						"--color-button-hover": "#ededed",
						"--color-border": "#3d424a",
						"--color-commit-did-not-render-fill": "#777d88",
						"--color-commit-did-not-render-fill-text": "#000000",
						"--color-commit-did-not-render-pattern": "#666c77",
						"--color-commit-did-not-render-pattern-text": "#ffffff",
						"--color-commit-gradient-0": "#37afa9",
						"--color-commit-gradient-1": "#63b19e",
						"--color-commit-gradient-2": "#80b393",
						"--color-commit-gradient-3": "#97b488",
						"--color-commit-gradient-4": "#abb67d",
						"--color-commit-gradient-5": "#beb771",
						"--color-commit-gradient-6": "#cfb965",
						"--color-commit-gradient-7": "#dfba57",
						"--color-commit-gradient-8": "#efbb49",
						"--color-commit-gradient-9": "#febc38",
						"--color-commit-gradient-text": "#000000",
						"--color-component-name": "#61dafb",
						"--color-component-name-inverted": "#282828",
						"--color-component-badge-background": "#5e6167",
						"--color-component-badge-background-inverted": "#46494e",
						"--color-component-badge-count": "#8f949d",
						"--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.85)",
						"--color-console-error-badge-text": "#000000",
						"--color-console-error-background": "#290000",
						"--color-console-error-border": "#5c0000",
						"--color-console-error-icon": "#eb3941",
						"--color-console-error-text": "#fc7f7f",
						"--color-console-warning-badge-text": "#000000",
						"--color-console-warning-background": "#332b00",
						"--color-console-warning-border": "#665500",
						"--color-console-warning-icon": "#f4bd00",
						"--color-console-warning-text": "#f5f2ed",
						"--color-context-background": "rgba(255,255,255,.95)",
						"--color-context-background-hover": "rgba(0, 136, 250, 0.1)",
						"--color-context-background-selected": "#0088fa",
						"--color-context-border": "#eeeeee",
						"--color-context-text": "#000000",
						"--color-context-text-selected": "#ffffff",
						"--color-dim": "#8f949d",
						"--color-dimmer": "#777d88",
						"--color-dimmest": "#4f5766",
						"--color-error-background": "#200",
						"--color-error-border": "#900",
						"--color-error-text": "#f55",
						"--color-expand-collapse-toggle": "#8f949d",
						"--color-forget-badge-background": "#2683e2",
						"--color-forget-badge-background-inverted": "#1a6bbc",
						"--color-forget-text": "#fff",
						"--color-link": "#61dafb",
						"--color-modal-background": "rgba(0, 0, 0, 0.75)",
						"--color-bridge-version-npm-background": "rgba(0, 0, 0, 0.25)",
						"--color-bridge-version-npm-text": "#ffffff",
						"--color-bridge-version-number": "yellow",
						"--color-primitive-hook-badge-background": "rgba(0, 0, 0, 0.25)",
						"--color-primitive-hook-badge-text": "rgba(255, 255, 255, 0.7)",
						"--color-record-active": "#fc3a4b",
						"--color-record-hover": "#a2e9fc",
						"--color-record-inactive": "#61dafb",
						"--color-resize-bar": "#282c34",
						"--color-resize-bar-active": "#31363f",
						"--color-resize-bar-border": "#3d424a",
						"--color-resize-bar-dot": "#cfd1d5",
						"--color-timeline-internal-module": "#303542",
						"--color-timeline-internal-module-hover": "#363b4a",
						"--color-timeline-internal-module-text": "#7f8899",
						"--color-timeline-native-event": "#b2b2b2",
						"--color-timeline-native-event-hover": "#949494",
						"--color-timeline-network-primary": "#fcf3dc",
						"--color-timeline-network-primary-hover": "#e3dbc5",
						"--color-timeline-network-secondary": "#efc457",
						"--color-timeline-network-secondary-hover": "#d6af4d",
						"--color-timeline-priority-background": "#1d2129",
						"--color-timeline-priority-border": "#282c34",
						"--color-timeline-user-timing": "#c9cacd",
						"--color-timeline-user-timing-hover": "#93959a",
						"--color-timeline-react-idle": "#3d485b",
						"--color-timeline-react-idle-hover": "#465269",
						"--color-timeline-react-render": "#2683E2",
						"--color-timeline-react-render-hover": "#1a76d4",
						"--color-timeline-react-render-text": "#11365e",
						"--color-timeline-react-commit": "#731fad",
						"--color-timeline-react-commit-hover": "#611b94",
						"--color-timeline-react-commit-text": "#e5c1ff",
						"--color-timeline-react-layout-effects": "#611b94",
						"--color-timeline-react-layout-effects-hover": "#51167a",
						"--color-timeline-react-layout-effects-text": "#e5c1ff",
						"--color-timeline-react-passive-effects": "#611b94",
						"--color-timeline-react-passive-effects-hover": "#51167a",
						"--color-timeline-react-passive-effects-text": "#e5c1ff",
						"--color-timeline-react-schedule": "#2683E2",
						"--color-timeline-react-schedule-hover": "#1a76d4",
						"--color-timeline-react-suspense-rejected": "#f1cc14",
						"--color-timeline-react-suspense-rejected-hover": "#e4c00f",
						"--color-timeline-react-suspense-resolved": "#a6e59f",
						"--color-timeline-react-suspense-resolved-hover": "#89d281",
						"--color-timeline-react-suspense-unresolved": "#c9cacd",
						"--color-timeline-react-suspense-unresolved-hover": "#93959a",
						"--color-timeline-thrown-error": "#fb3655",
						"--color-timeline-thrown-error-hover": "#f82042",
						"--color-timeline-text-color": "#282c34",
						"--color-timeline-text-dim-color": "#555b66",
						"--color-timeline-react-work-border": "#3d424a",
						"--color-search-match": "yellow",
						"--color-search-match-current": "#f7923b",
						"--color-selected-tree-highlight-active": "rgba(23, 143, 185, 0.15)",
						"--color-selected-tree-highlight-inactive": "rgba(255, 255, 255, 0.05)",
						"--color-scroll-caret": "#4f5766",
						"--color-shadow": "rgba(0, 0, 0, 0.5)",
						"--color-tab-selected-border": "#178fb9",
						"--color-text": "#ffffff",
						"--color-text-invalid": "#ff8080",
						"--color-text-selected": "#ffffff",
						"--color-toggle-background-invalid": "#fc3a4b",
						"--color-toggle-background-on": "#178fb9",
						"--color-toggle-background-off": "#777d88",
						"--color-toggle-text": "#ffffff",
						"--color-warning-background": "#ee1638",
						"--color-warning-background-hover": "#da1030",
						"--color-warning-text-color": "#ffffff",
						"--color-warning-text-color-inverted": "#ee1638",
						"--color-scroll-thumb": "#afb3b9",
						"--color-scroll-track": "#313640",
						"--color-tooltip-background": "rgba(255, 255, 255, 0.95)",
						"--color-tooltip-text": "#000000"
					},
					compact: {
						"--font-size-monospace-small": "9px",
						"--font-size-monospace-normal": "11px",
						"--font-size-monospace-large": "15px",
						"--font-size-sans-small": "10px",
						"--font-size-sans-normal": "12px",
						"--font-size-sans-large": "14px",
						"--line-height-data": "18px"
					},
					comfortable: {
						"--font-size-monospace-small": "10px",
						"--font-size-monospace-normal": "13px",
						"--font-size-monospace-large": "17px",
						"--font-size-sans-small": "12px",
						"--font-size-sans-normal": "14px",
						"--font-size-sans-large": "16px",
						"--line-height-data": "22px"
					}
				};
				var COMFORTABLE_LINE_HEIGHT = parseInt(THEME_STYLES.comfortable["--line-height-data"], 10);
				var COMPACT_LINE_HEIGHT = parseInt(THEME_STYLES.compact["--line-height-data"], 10);
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var REACT_TOTAL_NUM_LANES = 31;
				var SCHEDULING_PROFILER_VERSION = 1;
				var SNAPSHOT_MAX_HEIGHT = 60;
				function DevToolsConsolePatching_ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function DevToolsConsolePatching_objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) DevToolsConsolePatching_ownKeys(Object(source), true).forEach(function(key) {
							DevToolsConsolePatching_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else DevToolsConsolePatching_ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function DevToolsConsolePatching_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var disabledDepth = 0;
				var prevLog;
				var prevInfo;
				var prevWarn;
				var prevError;
				var prevGroup;
				var prevGroupCollapsed;
				var prevGroupEnd;
				function disabledLog() {}
				disabledLog.__reactDisabledLog = true;
				function disableLogs() {
					if (disabledDepth === 0) {
						prevLog = console.log;
						prevInfo = console.info;
						prevWarn = console.warn;
						prevError = console.error;
						prevGroup = console.group;
						prevGroupCollapsed = console.groupCollapsed;
						prevGroupEnd = console.groupEnd;
						var props = {
							configurable: true,
							enumerable: true,
							value: disabledLog,
							writable: true
						};
						Object.defineProperties(console, {
							info: props,
							log: props,
							warn: props,
							error: props,
							group: props,
							groupCollapsed: props,
							groupEnd: props
						});
					}
					disabledDepth++;
				}
				function reenableLogs() {
					disabledDepth--;
					if (disabledDepth === 0) {
						var props = {
							configurable: true,
							enumerable: true,
							writable: true
						};
						Object.defineProperties(console, {
							log: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevLog }),
							info: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevInfo }),
							warn: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevWarn }),
							error: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevError }),
							group: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevGroup }),
							groupCollapsed: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevGroupCollapsed }),
							groupEnd: DevToolsConsolePatching_objectSpread(DevToolsConsolePatching_objectSpread({}, props), {}, { value: prevGroupEnd })
						});
					}
					if (disabledDepth < 0) console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
				}
				function DevToolsComponentStackFrame_slicedToArray(arr, i) {
					return DevToolsComponentStackFrame_arrayWithHoles(arr) || DevToolsComponentStackFrame_iterableToArrayLimit(arr, i) || DevToolsComponentStackFrame_unsupportedIterableToArray(arr, i) || DevToolsComponentStackFrame_nonIterableRest();
				}
				function DevToolsComponentStackFrame_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function DevToolsComponentStackFrame_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return DevToolsComponentStackFrame_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DevToolsComponentStackFrame_arrayLikeToArray(o, minLen);
				}
				function DevToolsComponentStackFrame_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function DevToolsComponentStackFrame_iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function DevToolsComponentStackFrame_arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				function DevToolsComponentStackFrame_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") DevToolsComponentStackFrame_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else DevToolsComponentStackFrame_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return DevToolsComponentStackFrame_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var prefix;
				function describeBuiltInComponentFrame(name) {
					if (prefix === void 0) try {
						throw Error();
					} catch (x) {
						var match = x.stack.trim().match(/\n( *(at )?)/);
						prefix = match && match[1] || "";
					}
					return "\n" + prefix + name;
				}
				function describeDebugInfoFrame(name, env) {
					return describeBuiltInComponentFrame(name + (env ? " (" + env + ")" : ""));
				}
				var reentry = false;
				var componentFrameCache;
				if (0) var PossiblyWeakMap;
				function describeNativeComponentFrame(fn, construct, currentDispatcherRef) {
					if (!fn || reentry) return "";
					if (0) var frame;
					var previousPrepareStackTrace = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					reentry = true;
					var previousDispatcher = currentDispatcherRef.H;
					currentDispatcherRef.H = null;
					disableLogs();
					/**
					* Finding a common stack frame between sample and control errors can be
					* tricky given the different types and levels of stack trace truncation from
					* different JS VMs. So instead we'll attempt to control what that common
					* frame should be through this object method:
					* Having both the sample and control errors be in the function under the
					* `DescribeNativeComponentFrameRoot` property, + setting the `name` and
					* `displayName` properties of the function ensures that a stack
					* frame exists that has the method name `DescribeNativeComponentFrameRoot` in
					* it for both control and sample stacks.
					*/ var RunInRootFrame = { DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
						var control;
						try {
							if (construct) {
								var Fake = function Fake$1() {
									throw Error();
								};
								Object.defineProperty(Fake.prototype, "props", { set: function set() {
									throw Error();
								} });
								if ((typeof Reflect === "undefined" ? "undefined" : DevToolsComponentStackFrame_typeof(Reflect)) === "object" && Reflect.construct) {
									try {
										Reflect.construct(Fake, []);
									} catch (x) {
										control = x;
									}
									Reflect.construct(fn, [], Fake);
								} else {
									try {
										Fake.call();
									} catch (x) {
										control = x;
									}
									fn.call(Fake.prototype);
								}
							} else {
								try {
									throw Error();
								} catch (x) {
									control = x;
								}
								var maybePromise = fn();
								if (maybePromise && typeof maybePromise.catch === "function") maybePromise.catch(function() {});
							}
						} catch (sample) {
							if (sample && control && typeof sample.stack === "string") return [sample.stack, control.stack];
						}
						return [null, null];
					} };
					RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
					var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
					if (namePropDescriptor && namePropDescriptor.configurable) Object.defineProperty(
						RunInRootFrame.DetermineComponentFrameRoot,
						// $FlowFixMe[cannot-write]
						"name",
						{ value: "DetermineComponentFrameRoot" }
);
					try {
						var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot();
						var _RunInRootFrame$Deter2 = DevToolsComponentStackFrame_slicedToArray(_RunInRootFrame$Deter, 2);
						var sampleStack = _RunInRootFrame$Deter2[0];
						var controlStack = _RunInRootFrame$Deter2[1];
						if (sampleStack && controlStack) {
							var sampleLines = sampleStack.split("\n");
							var controlLines = controlStack.split("\n");
							var s = 0;
							var c = 0;
							while (s < sampleLines.length && !sampleLines[s].includes("DetermineComponentFrameRoot")) s++;
							while (c < controlLines.length && !controlLines[c].includes("DetermineComponentFrameRoot")) c++;
							if (s === sampleLines.length || c === controlLines.length) {
								s = sampleLines.length - 1;
								c = controlLines.length - 1;
								while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
							}
							for (; s >= 1 && c >= 0; s--, c--) if (sampleLines[s] !== controlLines[c]) {
								if (s !== 1 || c !== 1) do {
									s--;
									c--;
									if (c < 0 || sampleLines[s] !== controlLines[c]) {
										var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
										if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
										return _frame;
									}
								} while (s >= 1 && c >= 0);
								break;
							}
						}
					} finally {
						reentry = false;
						Error.prepareStackTrace = previousPrepareStackTrace;
						currentDispatcherRef.H = previousDispatcher;
						reenableLogs();
					}
					var name = fn ? fn.displayName || fn.name : "";
					var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
					return syntheticFrame;
				}
				function describeClassComponentFrame(ctor, currentDispatcherRef) {
					return describeNativeComponentFrame(ctor, true, currentDispatcherRef);
				}
				function describeFunctionComponentFrame(fn, currentDispatcherRef) {
					return describeNativeComponentFrame(fn, false, currentDispatcherRef);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function describeFiber(workTagMap, workInProgress, currentDispatcherRef) {
					var HostComponent = workTagMap.HostComponent;
					var LazyComponent = workTagMap.LazyComponent;
					var SuspenseComponent = workTagMap.SuspenseComponent;
					var SuspenseListComponent = workTagMap.SuspenseListComponent;
					var FunctionComponent = workTagMap.FunctionComponent;
					var IndeterminateComponent = workTagMap.IndeterminateComponent;
					var SimpleMemoComponent = workTagMap.SimpleMemoComponent;
					var ForwardRef = workTagMap.ForwardRef;
					var ClassComponent = workTagMap.ClassComponent;
					switch (workInProgress.tag) {
						case HostComponent: return describeBuiltInComponentFrame(workInProgress.type);
						case LazyComponent: return describeBuiltInComponentFrame("Lazy");
						case SuspenseComponent: return describeBuiltInComponentFrame("Suspense");
						case SuspenseListComponent: return describeBuiltInComponentFrame("SuspenseList");
						case FunctionComponent:
						case IndeterminateComponent:
						case SimpleMemoComponent: return describeFunctionComponentFrame(workInProgress.type, currentDispatcherRef);
						case ForwardRef: return describeFunctionComponentFrame(workInProgress.type.render, currentDispatcherRef);
						case ClassComponent: return describeClassComponentFrame(workInProgress.type, currentDispatcherRef);
						default: return "";
					}
				}
				function getStackByFiberInDevAndProd(workTagMap, workInProgress, currentDispatcherRef) {
					try {
						var info = "";
						var node = workInProgress;
						do {
							info += describeFiber(workTagMap, node, currentDispatcherRef);
							var debugInfo = node._debugInfo;
							if (debugInfo) for (var i = debugInfo.length - 1; i >= 0; i--) {
								var entry = debugInfo[i];
								if (typeof entry.name === "string") info += describeDebugInfoFrame(entry.name, entry.env);
							}
							node = node.return;
						} while (node);
						return info;
					} catch (x) {
						return "\nError generating stack: " + x.message + "\n" + x.stack;
					}
				}
				function supportsNativeConsoleTasks(fiber) {
					return !!fiber._debugTask;
				}
				function profilingHooks_slicedToArray(arr, i) {
					return profilingHooks_arrayWithHoles(arr) || profilingHooks_iterableToArrayLimit(arr, i) || profilingHooks_unsupportedIterableToArray(arr, i) || profilingHooks_nonIterableRest();
				}
				function profilingHooks_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function profilingHooks_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return profilingHooks_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return profilingHooks_arrayLikeToArray(o, minLen);
				}
				function profilingHooks_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function profilingHooks_iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function profilingHooks_arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				function profilingHooks_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") profilingHooks_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else profilingHooks_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return profilingHooks_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var TIME_OFFSET = 10;
				var performanceTarget = null;
				var supportsUserTiming = typeof performance !== "undefined" && typeof performance.mark === "function" && typeof performance.clearMarks === "function";
				var supportsUserTimingV3 = false;
				if (supportsUserTiming) {
					var CHECK_V3_MARK = "__v3";
					var markOptions = {};
					Object.defineProperty(markOptions, "startTime", {
						get: function get() {
							supportsUserTimingV3 = true;
							return 0;
						},
						set: function set() {}
					});
					try {
						performance.mark(CHECK_V3_MARK, markOptions);
					} catch (error) {} finally {
						performance.clearMarks(CHECK_V3_MARK);
					}
				}
				if (supportsUserTimingV3) performanceTarget = performance;
				var profilingHooks_getCurrentTime = (typeof performance === "undefined" ? "undefined" : profilingHooks_typeof(performance)) === "object" && typeof performance.now === "function" ? function profilingHooks_getCurrentTime$1() {
					return performance.now();
				} : function() {
					return Date.now();
				};
				function setPerformanceMock_ONLY_FOR_TESTING(performanceMock) {
					performanceTarget = performanceMock;
					supportsUserTiming = performanceMock !== null;
					supportsUserTimingV3 = performanceMock !== null;
				}
				function createProfilingHooks(_ref) {
					var getDisplayNameForFiber = _ref.getDisplayNameForFiber;
					var getIsProfiling = _ref.getIsProfiling;
					var getLaneLabelMap = _ref.getLaneLabelMap;
					var workTagMap = _ref.workTagMap;
					var currentDispatcherRef = _ref.currentDispatcherRef;
					var reactVersion = _ref.reactVersion;
					var currentBatchUID = 0;
					var currentReactComponentMeasure = null;
					var currentReactMeasuresStack = [];
					var currentTimelineData = null;
					var currentFiberStacks = new Map();
					var isProfiling = false;
					var nextRenderShouldStartNewBatch = false;
					function getRelativeTime() {
						var currentTime = profilingHooks_getCurrentTime();
						if (currentTimelineData) {
							if (currentTimelineData.startTime === 0) currentTimelineData.startTime = currentTime - TIME_OFFSET;
							return currentTime - currentTimelineData.startTime;
						}
						return 0;
					}
					function getInternalModuleRanges() {
						if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges === "function") {
							var ranges = __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges();
							if (shared_isArray(ranges)) return ranges;
						}
						return null;
					}
					function getTimelineData() {
						return currentTimelineData;
					}
					function laneToLanesArray(lanes) {
						var lanesArray = [];
						var lane = 1;
						for (var index = 0; index < REACT_TOTAL_NUM_LANES; index++) {
							if (lane & lanes) lanesArray.push(lane);
							lane *= 2;
						}
						return lanesArray;
					}
					var laneToLabelMap = typeof getLaneLabelMap === "function" ? getLaneLabelMap() : null;
					function markMetadata() {
						markAndClear("--react-version-".concat(reactVersion));
						markAndClear("--profiler-version-".concat(SCHEDULING_PROFILER_VERSION));
						var ranges = getInternalModuleRanges();
						if (ranges) for (var i = 0; i < ranges.length; i++) {
							var range = ranges[i];
							if (shared_isArray(range) && range.length === 2) {
								var _ranges$i = profilingHooks_slicedToArray(ranges[i], 2);
								var startStackFrame = _ranges$i[0];
								var stopStackFrame = _ranges$i[1];
								markAndClear("--react-internal-module-start-".concat(startStackFrame));
								markAndClear("--react-internal-module-stop-".concat(stopStackFrame));
							}
						}
						if (laneToLabelMap != null) {
							var labels = Array.from(laneToLabelMap.values()).join(",");
							markAndClear("--react-lane-labels-".concat(labels));
						}
					}
					function markAndClear(markName) {
						performanceTarget.mark(markName);
						performanceTarget.clearMarks(markName);
					}
					function recordReactMeasureStarted(type, lanes) {
						var depth = 0;
						if (currentReactMeasuresStack.length > 0) {
							var top = currentReactMeasuresStack[currentReactMeasuresStack.length - 1];
							depth = top.type === "render-idle" ? top.depth : top.depth + 1;
						}
						var lanesArray = laneToLanesArray(lanes);
						var reactMeasure = {
							type,
							batchUID: currentBatchUID,
							depth,
							lanes: lanesArray,
							timestamp: getRelativeTime(),
							duration: 0
						};
						currentReactMeasuresStack.push(reactMeasure);
						if (currentTimelineData) {
							var _currentTimelineData = currentTimelineData;
							var batchUIDToMeasuresMap = _currentTimelineData.batchUIDToMeasuresMap;
							var laneToReactMeasureMap = _currentTimelineData.laneToReactMeasureMap;
							var reactMeasures = batchUIDToMeasuresMap.get(currentBatchUID);
							if (reactMeasures != null) reactMeasures.push(reactMeasure);
							else batchUIDToMeasuresMap.set(currentBatchUID, [reactMeasure]);
							lanesArray.forEach(function(lane) {
								reactMeasures = laneToReactMeasureMap.get(lane);
								if (reactMeasures) reactMeasures.push(reactMeasure);
							});
						}
					}
					function recordReactMeasureCompleted(type) {
						var currentTime = getRelativeTime();
						if (currentReactMeasuresStack.length === 0) {
							console.error("Unexpected type \"%s\" completed at %sms while currentReactMeasuresStack is empty.", type, currentTime);
							return;
						}
						var top = currentReactMeasuresStack.pop();
						if (top.type !== type) console.error("Unexpected type \"%s\" completed at %sms before \"%s\" completed.", type, currentTime, top.type);
						top.duration = currentTime - top.timestamp;
						if (currentTimelineData) currentTimelineData.duration = getRelativeTime() + TIME_OFFSET;
					}
					function markCommitStarted(lanes) {
						if (isProfiling) {
							recordReactMeasureStarted("commit", lanes);
							nextRenderShouldStartNewBatch = true;
						}
						if (supportsUserTimingV3) {
							markAndClear("--commit-start-".concat(lanes));
							markMetadata();
						}
					}
					function markCommitStopped() {
						if (isProfiling) {
							recordReactMeasureCompleted("commit");
							recordReactMeasureCompleted("render-idle");
						}
						if (supportsUserTimingV3) markAndClear("--commit-stop");
					}
					function markComponentRenderStarted(fiber) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (isProfiling) currentReactComponentMeasure = {
									componentName,
									duration: 0,
									timestamp: getRelativeTime(),
									type: "render",
									warning: null
								};
							}
							if (supportsUserTimingV3) markAndClear("--component-render-start-".concat(componentName));
						}
					}
					function markComponentRenderStopped() {
						if (isProfiling) {
							if (currentReactComponentMeasure) {
								if (currentTimelineData) currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
								currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp;
								currentReactComponentMeasure = null;
							}
						}
						if (supportsUserTimingV3) markAndClear("--component-render-stop");
					}
					function markComponentLayoutEffectMountStarted(fiber) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (isProfiling) currentReactComponentMeasure = {
									componentName,
									duration: 0,
									timestamp: getRelativeTime(),
									type: "layout-effect-mount",
									warning: null
								};
							}
							if (supportsUserTimingV3) markAndClear("--component-layout-effect-mount-start-".concat(componentName));
						}
					}
					function markComponentLayoutEffectMountStopped() {
						if (isProfiling) {
							if (currentReactComponentMeasure) {
								if (currentTimelineData) currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
								currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp;
								currentReactComponentMeasure = null;
							}
						}
						if (supportsUserTimingV3) markAndClear("--component-layout-effect-mount-stop");
					}
					function markComponentLayoutEffectUnmountStarted(fiber) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (isProfiling) currentReactComponentMeasure = {
									componentName,
									duration: 0,
									timestamp: getRelativeTime(),
									type: "layout-effect-unmount",
									warning: null
								};
							}
							if (supportsUserTimingV3) markAndClear("--component-layout-effect-unmount-start-".concat(componentName));
						}
					}
					function markComponentLayoutEffectUnmountStopped() {
						if (isProfiling) {
							if (currentReactComponentMeasure) {
								if (currentTimelineData) currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
								currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp;
								currentReactComponentMeasure = null;
							}
						}
						if (supportsUserTimingV3) markAndClear("--component-layout-effect-unmount-stop");
					}
					function markComponentPassiveEffectMountStarted(fiber) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (isProfiling) currentReactComponentMeasure = {
									componentName,
									duration: 0,
									timestamp: getRelativeTime(),
									type: "passive-effect-mount",
									warning: null
								};
							}
							if (supportsUserTimingV3) markAndClear("--component-passive-effect-mount-start-".concat(componentName));
						}
					}
					function markComponentPassiveEffectMountStopped() {
						if (isProfiling) {
							if (currentReactComponentMeasure) {
								if (currentTimelineData) currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
								currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp;
								currentReactComponentMeasure = null;
							}
						}
						if (supportsUserTimingV3) markAndClear("--component-passive-effect-mount-stop");
					}
					function markComponentPassiveEffectUnmountStarted(fiber) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (isProfiling) currentReactComponentMeasure = {
									componentName,
									duration: 0,
									timestamp: getRelativeTime(),
									type: "passive-effect-unmount",
									warning: null
								};
							}
							if (supportsUserTimingV3) markAndClear("--component-passive-effect-unmount-start-".concat(componentName));
						}
					}
					function markComponentPassiveEffectUnmountStopped() {
						if (isProfiling) {
							if (currentReactComponentMeasure) {
								if (currentTimelineData) currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
								currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp;
								currentReactComponentMeasure = null;
							}
						}
						if (supportsUserTimingV3) markAndClear("--component-passive-effect-unmount-stop");
					}
					function markComponentErrored(fiber, thrownValue, lanes) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							var phase = fiber.alternate === null ? "mount" : "update";
							var message = "";
							if (thrownValue !== null && profilingHooks_typeof(thrownValue) === "object" && typeof thrownValue.message === "string") message = thrownValue.message;
							else if (typeof thrownValue === "string") message = thrownValue;
							if (isProfiling) {
								if (currentTimelineData) currentTimelineData.thrownErrors.push({
									componentName,
									message,
									phase,
									timestamp: getRelativeTime(),
									type: "thrown-error"
								});
							}
							if (supportsUserTimingV3) markAndClear("--error-".concat(componentName, "-").concat(phase, "-").concat(message));
						}
					}
					var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
					var wakeableIDs = new PossiblyWeakMap$1();
					var wakeableID = 0;
					function getWakeableID(wakeable) {
						if (!wakeableIDs.has(wakeable)) wakeableIDs.set(wakeable, wakeableID++);
						return wakeableIDs.get(wakeable);
					}
					function markComponentSuspended(fiber, wakeable, lanes) {
						if (isProfiling || supportsUserTimingV3) {
							var eventType = wakeableIDs.has(wakeable) ? "resuspend" : "suspend";
							var id = getWakeableID(wakeable);
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							var phase = fiber.alternate === null ? "mount" : "update";
							var displayName = wakeable.displayName || "";
							var suspenseEvent = null;
							if (isProfiling) {
								suspenseEvent = {
									componentName,
									depth: 0,
									duration: 0,
									id: "".concat(id),
									phase,
									promiseName: displayName,
									resolution: "unresolved",
									timestamp: getRelativeTime(),
									type: "suspense",
									warning: null
								};
								if (currentTimelineData) currentTimelineData.suspenseEvents.push(suspenseEvent);
							}
							if (supportsUserTimingV3) markAndClear("--suspense-".concat(eventType, "-").concat(id, "-").concat(componentName, "-").concat(phase, "-").concat(lanes, "-").concat(displayName));
							wakeable.then(function() {
								if (suspenseEvent) {
									suspenseEvent.duration = getRelativeTime() - suspenseEvent.timestamp;
									suspenseEvent.resolution = "resolved";
								}
								if (supportsUserTimingV3) markAndClear("--suspense-resolved-".concat(id, "-").concat(componentName));
							}, function() {
								if (suspenseEvent) {
									suspenseEvent.duration = getRelativeTime() - suspenseEvent.timestamp;
									suspenseEvent.resolution = "rejected";
								}
								if (supportsUserTimingV3) markAndClear("--suspense-rejected-".concat(id, "-").concat(componentName));
							});
						}
					}
					function markLayoutEffectsStarted(lanes) {
						if (isProfiling) recordReactMeasureStarted("layout-effects", lanes);
						if (supportsUserTimingV3) markAndClear("--layout-effects-start-".concat(lanes));
					}
					function markLayoutEffectsStopped() {
						if (isProfiling) recordReactMeasureCompleted("layout-effects");
						if (supportsUserTimingV3) markAndClear("--layout-effects-stop");
					}
					function markPassiveEffectsStarted(lanes) {
						if (isProfiling) recordReactMeasureStarted("passive-effects", lanes);
						if (supportsUserTimingV3) markAndClear("--passive-effects-start-".concat(lanes));
					}
					function markPassiveEffectsStopped() {
						if (isProfiling) recordReactMeasureCompleted("passive-effects");
						if (supportsUserTimingV3) markAndClear("--passive-effects-stop");
					}
					function markRenderStarted(lanes) {
						if (isProfiling) {
							if (nextRenderShouldStartNewBatch) {
								nextRenderShouldStartNewBatch = false;
								currentBatchUID++;
							}
							if (currentReactMeasuresStack.length === 0 || currentReactMeasuresStack[currentReactMeasuresStack.length - 1].type !== "render-idle") recordReactMeasureStarted("render-idle", lanes);
							recordReactMeasureStarted("render", lanes);
						}
						if (supportsUserTimingV3) markAndClear("--render-start-".concat(lanes));
					}
					function markRenderYielded() {
						if (isProfiling) recordReactMeasureCompleted("render");
						if (supportsUserTimingV3) markAndClear("--render-yield");
					}
					function markRenderStopped() {
						if (isProfiling) recordReactMeasureCompleted("render");
						if (supportsUserTimingV3) markAndClear("--render-stop");
					}
					function markRenderScheduled(lane) {
						if (isProfiling) {
							if (currentTimelineData) currentTimelineData.schedulingEvents.push({
								lanes: laneToLanesArray(lane),
								timestamp: getRelativeTime(),
								type: "schedule-render",
								warning: null
							});
						}
						if (supportsUserTimingV3) markAndClear("--schedule-render-".concat(lane));
					}
					function markForceUpdateScheduled(fiber, lane) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (currentTimelineData) currentTimelineData.schedulingEvents.push({
									componentName,
									lanes: laneToLanesArray(lane),
									timestamp: getRelativeTime(),
									type: "schedule-force-update",
									warning: null
								});
							}
							if (supportsUserTimingV3) markAndClear("--schedule-forced-update-".concat(lane, "-").concat(componentName));
						}
					}
					function getParentFibers(fiber) {
						var parents = [];
						var parent = fiber;
						while (parent !== null) {
							parents.push(parent);
							parent = parent.return;
						}
						return parents;
					}
					function markStateUpdateScheduled(fiber, lane) {
						if (isProfiling || supportsUserTimingV3) {
							var componentName = getDisplayNameForFiber(fiber) || "Unknown";
							if (isProfiling) {
								if (currentTimelineData) {
									var event = {
										componentName,
										lanes: laneToLanesArray(lane),
										timestamp: getRelativeTime(),
										type: "schedule-state-update",
										warning: null
									};
									currentFiberStacks.set(event, getParentFibers(fiber));
									currentTimelineData.schedulingEvents.push(event);
								}
							}
							if (supportsUserTimingV3) markAndClear("--schedule-state-update-".concat(lane, "-").concat(componentName));
						}
					}
					function toggleProfilingStatus(value1) {
						if (isProfiling !== value1) {
							isProfiling = value1;
							if (isProfiling) {
								var internalModuleSourceToRanges = new Map();
								if (supportsUserTimingV3) {
									var ranges = getInternalModuleRanges();
									if (ranges) for (var i = 0; i < ranges.length; i++) {
										var range = ranges[i];
										if (shared_isArray(range) && range.length === 2) {
											var _ranges$i2 = profilingHooks_slicedToArray(ranges[i], 2);
											var startStackFrame = _ranges$i2[0];
											var stopStackFrame = _ranges$i2[1];
											markAndClear("--react-internal-module-start-".concat(startStackFrame));
											markAndClear("--react-internal-module-stop-".concat(stopStackFrame));
										}
									}
								}
								var laneToReactMeasureMap = new Map();
								var lane = 1;
								for (var index = 0; index < REACT_TOTAL_NUM_LANES; index++) {
									laneToReactMeasureMap.set(lane, []);
									lane *= 2;
								}
								currentBatchUID = 0;
								currentReactComponentMeasure = null;
								currentReactMeasuresStack = [];
								currentFiberStacks = new Map();
								currentTimelineData = {
									internalModuleSourceToRanges,
									laneToLabelMap: laneToLabelMap || new Map(),
									reactVersion,
									componentMeasures: [],
									schedulingEvents: [],
									suspenseEvents: [],
									thrownErrors: [],
									batchUIDToMeasuresMap: new Map(),
									duration: 0,
									laneToReactMeasureMap,
									startTime: 0,
									flamechart: [],
									nativeEvents: [],
									networkMeasures: [],
									otherUserTimingMarks: [],
									snapshots: [],
									snapshotHeight: 0
								};
								nextRenderShouldStartNewBatch = true;
							} else {
								if (currentTimelineData !== null) currentTimelineData.schedulingEvents.forEach(function(event) {
									if (event.type === "schedule-state-update") {
										var fiberStack = currentFiberStacks.get(event);
										if (fiberStack && currentDispatcherRef != null) event.componentStack = fiberStack.reduce(function(trace, fiber) {
											return trace + describeFiber(workTagMap, fiber, currentDispatcherRef);
										}, "");
									}
								});
								currentFiberStacks.clear();
							}
						}
					}
					return {
						getTimelineData,
						profilingHooks: {
							markCommitStarted,
							markCommitStopped,
							markComponentRenderStarted,
							markComponentRenderStopped,
							markComponentPassiveEffectMountStarted,
							markComponentPassiveEffectMountStopped,
							markComponentPassiveEffectUnmountStarted,
							markComponentPassiveEffectUnmountStopped,
							markComponentLayoutEffectMountStarted,
							markComponentLayoutEffectMountStopped,
							markComponentLayoutEffectUnmountStarted,
							markComponentLayoutEffectUnmountStopped,
							markComponentErrored,
							markComponentSuspended,
							markLayoutEffectsStarted,
							markLayoutEffectsStopped,
							markPassiveEffectsStarted,
							markPassiveEffectsStopped,
							markRenderStarted,
							markRenderYielded,
							markRenderStopped,
							markRenderScheduled,
							markForceUpdateScheduled,
							markStateUpdateScheduled
						},
						toggleProfilingStatus
					};
				}
				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key;
					var i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
							target[key] = source[key];
						}
					}
					return target;
				}
				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key;
					var i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}
				function renderer_ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function renderer_objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) renderer_ownKeys(Object(source), true).forEach(function(key) {
							renderer_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else renderer_ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function renderer_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				function renderer_slicedToArray(arr, i) {
					return renderer_arrayWithHoles(arr) || renderer_iterableToArrayLimit(arr, i) || renderer_unsupportedIterableToArray(arr, i) || renderer_nonIterableRest();
				}
				function renderer_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function renderer_iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function renderer_arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				function renderer_toConsumableArray(arr) {
					return renderer_arrayWithoutHoles(arr) || renderer_iterableToArray(arr) || renderer_unsupportedIterableToArray(arr) || renderer_nonIterableSpread();
				}
				function renderer_nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function renderer_iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function renderer_arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return renderer_arrayLikeToArray(arr);
				}
				function renderer_createForOfIteratorHelper(o, allowArrayLike) {
					var it;
					if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
						if (Array.isArray(o) || (it = renderer_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
							if (it) o = it;
							var i = 0;
							var F = function F$1() {};
							return {
								s: F,
								n: function n() {
									if (i >= o.length) return { done: true };
									return {
										done: false,
										value: o[i++]
									};
								},
								e: function e(_e2) {
									throw _e2;
								},
								f: F
							};
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					}
					var normalCompletion = true;
					var didErr = false;
					var err;
					return {
						s: function s() {
							it = o[Symbol.iterator]();
						},
						n: function n() {
							var step = it.next();
							normalCompletion = step.done;
							return step;
						},
						e: function e(_e3) {
							didErr = true;
							err = _e3;
						},
						f: function f() {
							try {
								if (!normalCompletion && it.return != null) it.return();
							} finally {
								if (didErr) throw err;
							}
						}
					};
				}
				function renderer_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return renderer_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return renderer_arrayLikeToArray(o, minLen);
				}
				function renderer_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function renderer_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") renderer_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else renderer_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return renderer_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function getDispatcherRef(renderer) {
					if (renderer.currentDispatcherRef === void 0) return void 0;
					var injectedRef = renderer.currentDispatcherRef;
					if (typeof injectedRef.H === "undefined" && typeof injectedRef.current !== "undefined") return {
						get H() {
							return injectedRef.current;
						},
						set H(value) {
							injectedRef.current = value;
						}
					};
					return injectedRef;
				}
				function getFiberFlags(fiber) {
					return fiber.flags !== void 0 ? fiber.flags : fiber.effectTag;
				}
				var renderer_getCurrentTime = (typeof performance === "undefined" ? "undefined" : renderer_typeof(performance)) === "object" && typeof performance.now === "function" ? function renderer_getCurrentTime$1() {
					return performance.now();
				} : function() {
					return Date.now();
				};
				function getInternalReactConstants(version) {
					var ReactPriorityLevels = {
						ImmediatePriority: 99,
						UserBlockingPriority: 98,
						NormalPriority: 97,
						LowPriority: 96,
						IdlePriority: 95,
						NoPriority: 90
					};
					if (gt(version, "17.0.2")) ReactPriorityLevels = {
						ImmediatePriority: 1,
						UserBlockingPriority: 2,
						NormalPriority: 3,
						LowPriority: 4,
						IdlePriority: 5,
						NoPriority: 0
					};
					var StrictModeBits = 0;
					if (gte(version, "18.0.0-alpha")) StrictModeBits = 24;
					else if (gte(version, "16.9.0")) StrictModeBits = 1;
					else if (gte(version, "16.3.0")) StrictModeBits = 2;
					var ReactTypeOfWork = null;
					if (gt(version, "17.0.1")) ReactTypeOfWork = {
						CacheComponent: 24,
						ClassComponent: 1,
						ContextConsumer: 9,
						ContextProvider: 10,
						CoroutineComponent: -1,
						CoroutineHandlerPhase: -1,
						DehydratedSuspenseComponent: 18,
						ForwardRef: 11,
						Fragment: 7,
						FunctionComponent: 0,
						HostComponent: 5,
						HostPortal: 4,
						HostRoot: 3,
						HostHoistable: 26,
						HostSingleton: 27,
						HostText: 6,
						IncompleteClassComponent: 17,
						IncompleteFunctionComponent: 28,
						IndeterminateComponent: 2,
						LazyComponent: 16,
						LegacyHiddenComponent: 23,
						MemoComponent: 14,
						Mode: 8,
						OffscreenComponent: 22,
						Profiler: 12,
						ScopeComponent: 21,
						SimpleMemoComponent: 15,
						SuspenseComponent: 13,
						SuspenseListComponent: 19,
						TracingMarkerComponent: 25,
						YieldComponent: -1,
						Throw: 29
					};
					else if (gte(version, "17.0.0-alpha")) ReactTypeOfWork = {
						CacheComponent: -1,
						ClassComponent: 1,
						ContextConsumer: 9,
						ContextProvider: 10,
						CoroutineComponent: -1,
						CoroutineHandlerPhase: -1,
						DehydratedSuspenseComponent: 18,
						ForwardRef: 11,
						Fragment: 7,
						FunctionComponent: 0,
						HostComponent: 5,
						HostPortal: 4,
						HostRoot: 3,
						HostHoistable: -1,
						HostSingleton: -1,
						HostText: 6,
						IncompleteClassComponent: 17,
						IncompleteFunctionComponent: -1,
						IndeterminateComponent: 2,
						LazyComponent: 16,
						LegacyHiddenComponent: 24,
						MemoComponent: 14,
						Mode: 8,
						OffscreenComponent: 23,
						Profiler: 12,
						ScopeComponent: 21,
						SimpleMemoComponent: 15,
						SuspenseComponent: 13,
						SuspenseListComponent: 19,
						TracingMarkerComponent: -1,
						YieldComponent: -1,
						Throw: -1
					};
					else if (gte(version, "16.6.0-beta.0")) ReactTypeOfWork = {
						CacheComponent: -1,
						ClassComponent: 1,
						ContextConsumer: 9,
						ContextProvider: 10,
						CoroutineComponent: -1,
						CoroutineHandlerPhase: -1,
						DehydratedSuspenseComponent: 18,
						ForwardRef: 11,
						Fragment: 7,
						FunctionComponent: 0,
						HostComponent: 5,
						HostPortal: 4,
						HostRoot: 3,
						HostHoistable: -1,
						HostSingleton: -1,
						HostText: 6,
						IncompleteClassComponent: 17,
						IncompleteFunctionComponent: -1,
						IndeterminateComponent: 2,
						LazyComponent: 16,
						LegacyHiddenComponent: -1,
						MemoComponent: 14,
						Mode: 8,
						OffscreenComponent: -1,
						Profiler: 12,
						ScopeComponent: -1,
						SimpleMemoComponent: 15,
						SuspenseComponent: 13,
						SuspenseListComponent: 19,
						TracingMarkerComponent: -1,
						YieldComponent: -1,
						Throw: -1
					};
					else if (gte(version, "16.4.3-alpha")) ReactTypeOfWork = {
						CacheComponent: -1,
						ClassComponent: 2,
						ContextConsumer: 11,
						ContextProvider: 12,
						CoroutineComponent: -1,
						CoroutineHandlerPhase: -1,
						DehydratedSuspenseComponent: -1,
						ForwardRef: 13,
						Fragment: 9,
						FunctionComponent: 0,
						HostComponent: 7,
						HostPortal: 6,
						HostRoot: 5,
						HostHoistable: -1,
						HostSingleton: -1,
						HostText: 8,
						IncompleteClassComponent: -1,
						IncompleteFunctionComponent: -1,
						IndeterminateComponent: 4,
						LazyComponent: -1,
						LegacyHiddenComponent: -1,
						MemoComponent: -1,
						Mode: 10,
						OffscreenComponent: -1,
						Profiler: 15,
						ScopeComponent: -1,
						SimpleMemoComponent: -1,
						SuspenseComponent: 16,
						SuspenseListComponent: -1,
						TracingMarkerComponent: -1,
						YieldComponent: -1,
						Throw: -1
					};
					else ReactTypeOfWork = {
						CacheComponent: -1,
						ClassComponent: 2,
						ContextConsumer: 12,
						ContextProvider: 13,
						CoroutineComponent: 7,
						CoroutineHandlerPhase: 8,
						DehydratedSuspenseComponent: -1,
						ForwardRef: 14,
						Fragment: 10,
						FunctionComponent: 1,
						HostComponent: 5,
						HostPortal: 4,
						HostRoot: 3,
						HostHoistable: -1,
						HostSingleton: -1,
						HostText: 6,
						IncompleteClassComponent: -1,
						IncompleteFunctionComponent: -1,
						IndeterminateComponent: 0,
						LazyComponent: -1,
						LegacyHiddenComponent: -1,
						MemoComponent: -1,
						Mode: 11,
						OffscreenComponent: -1,
						Profiler: 15,
						ScopeComponent: -1,
						SimpleMemoComponent: -1,
						SuspenseComponent: 16,
						SuspenseListComponent: -1,
						TracingMarkerComponent: -1,
						YieldComponent: 9,
						Throw: -1
					};
					function getTypeSymbol(type) {
						var symbolOrNumber = renderer_typeof(type) === "object" && type !== null ? type.$$typeof : type;
						return renderer_typeof(symbolOrNumber) === "symbol" ? symbolOrNumber.toString() : symbolOrNumber;
					}
					var _ReactTypeOfWork = ReactTypeOfWork;
					var CacheComponent = _ReactTypeOfWork.CacheComponent;
					var ClassComponent = _ReactTypeOfWork.ClassComponent;
					var IncompleteClassComponent = _ReactTypeOfWork.IncompleteClassComponent;
					var IncompleteFunctionComponent = _ReactTypeOfWork.IncompleteFunctionComponent;
					var FunctionComponent = _ReactTypeOfWork.FunctionComponent;
					var IndeterminateComponent = _ReactTypeOfWork.IndeterminateComponent;
					var ForwardRef = _ReactTypeOfWork.ForwardRef;
					var HostRoot = _ReactTypeOfWork.HostRoot;
					var HostHoistable = _ReactTypeOfWork.HostHoistable;
					var HostSingleton = _ReactTypeOfWork.HostSingleton;
					var HostComponent = _ReactTypeOfWork.HostComponent;
					var HostPortal = _ReactTypeOfWork.HostPortal;
					var HostText = _ReactTypeOfWork.HostText;
					var Fragment = _ReactTypeOfWork.Fragment;
					var LazyComponent = _ReactTypeOfWork.LazyComponent;
					var LegacyHiddenComponent = _ReactTypeOfWork.LegacyHiddenComponent;
					var MemoComponent = _ReactTypeOfWork.MemoComponent;
					var OffscreenComponent = _ReactTypeOfWork.OffscreenComponent;
					var Profiler = _ReactTypeOfWork.Profiler;
					var ScopeComponent = _ReactTypeOfWork.ScopeComponent;
					var SimpleMemoComponent = _ReactTypeOfWork.SimpleMemoComponent;
					var SuspenseComponent = _ReactTypeOfWork.SuspenseComponent;
					var SuspenseListComponent = _ReactTypeOfWork.SuspenseListComponent;
					var TracingMarkerComponent = _ReactTypeOfWork.TracingMarkerComponent;
					var Throw = _ReactTypeOfWork.Throw;
					function resolveFiberType(type) {
						var typeSymbol = getTypeSymbol(type);
						switch (typeSymbol) {
							case MEMO_NUMBER:
							case MEMO_SYMBOL_STRING: return resolveFiberType(type.type);
							case FORWARD_REF_NUMBER:
							case FORWARD_REF_SYMBOL_STRING: return type.render;
							default: return type;
						}
					}
					function getDisplayNameForFiber(fiber) {
						var _fiber$updateQueue;
						var _fiber$memoizedState;
						var _fiber$memoizedState$;
						var shouldSkipForgetCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
						var elementType = fiber.elementType;
						var type = fiber.type;
						var tag = fiber.tag;
						var resolvedType = type;
						if (renderer_typeof(type) === "object" && type !== null) resolvedType = resolveFiberType(type);
						var resolvedContext = null;
						if (!shouldSkipForgetCheck && (((_fiber$updateQueue = fiber.updateQueue) === null || _fiber$updateQueue === void 0 ? void 0 : _fiber$updateQueue.memoCache) != null || ((_fiber$memoizedState = fiber.memoizedState) === null || _fiber$memoizedState === void 0 ? void 0 : (_fiber$memoizedState$ = _fiber$memoizedState.memoizedState) === null || _fiber$memoizedState$ === void 0 ? void 0 : _fiber$memoizedState$[ReactSymbols_REACT_MEMO_CACHE_SENTINEL]))) {
							var displayNameWithoutForgetWrapper = getDisplayNameForFiber(fiber, true);
							if (displayNameWithoutForgetWrapper == null) return null;
							return "Forget(".concat(displayNameWithoutForgetWrapper, ")");
						}
						switch (tag) {
							case CacheComponent: return "Cache";
							case ClassComponent:
							case IncompleteClassComponent:
							case IncompleteFunctionComponent:
							case FunctionComponent:
							case IndeterminateComponent: return getDisplayName(resolvedType);
							case ForwardRef: return getWrappedDisplayName(elementType, resolvedType, "ForwardRef", "Anonymous");
							case HostRoot:
								var fiberRoot = fiber.stateNode;
								if (fiberRoot != null && fiberRoot._debugRootType !== null) return fiberRoot._debugRootType;
								return null;
							case HostComponent:
							case HostSingleton:
							case HostHoistable: return type;
							case HostPortal:
							case HostText: return null;
							case Fragment: return "Fragment";
							case LazyComponent: return "Lazy";
							case MemoComponent:
							case SimpleMemoComponent: return getWrappedDisplayName(elementType, resolvedType, "Memo", "Anonymous");
							case SuspenseComponent: return "Suspense";
							case LegacyHiddenComponent: return "LegacyHidden";
							case OffscreenComponent: return "Offscreen";
							case ScopeComponent: return "Scope";
							case SuspenseListComponent: return "SuspenseList";
							case Profiler: return "Profiler";
							case TracingMarkerComponent: return "TracingMarker";
							case Throw: return "Error";
							default:
								var typeSymbol = getTypeSymbol(type);
								switch (typeSymbol) {
									case CONCURRENT_MODE_NUMBER:
									case CONCURRENT_MODE_SYMBOL_STRING:
									case DEPRECATED_ASYNC_MODE_SYMBOL_STRING: return null;
									case PROVIDER_NUMBER:
									case PROVIDER_SYMBOL_STRING:
										resolvedContext = fiber.type._context || fiber.type.context;
										return "".concat(resolvedContext.displayName || "Context", ".Provider");
									case CONTEXT_NUMBER:
									case CONTEXT_SYMBOL_STRING:
									case SERVER_CONTEXT_SYMBOL_STRING:
										if (fiber.type._context === void 0 && fiber.type.Provider === fiber.type) {
											resolvedContext = fiber.type;
											return "".concat(resolvedContext.displayName || "Context", ".Provider");
										}
										resolvedContext = fiber.type._context || fiber.type;
										return "".concat(resolvedContext.displayName || "Context", ".Consumer");
									case CONSUMER_SYMBOL_STRING:
										resolvedContext = fiber.type._context;
										return "".concat(resolvedContext.displayName || "Context", ".Consumer");
									case STRICT_MODE_NUMBER:
									case STRICT_MODE_SYMBOL_STRING: return null;
									case PROFILER_NUMBER:
									case PROFILER_SYMBOL_STRING: return "Profiler(".concat(fiber.memoizedProps.id, ")");
									case SCOPE_NUMBER:
									case SCOPE_SYMBOL_STRING: return "Scope";
									default: return null;
								}
						}
					}
					return {
						getDisplayNameForFiber,
						getTypeSymbol,
						ReactPriorityLevels,
						ReactTypeOfWork,
						StrictModeBits
					};
				}
				var fiberToIDMap = new Map();
				var idToArbitraryFiberMap = new Map();
				var fiberToComponentStackMap = new WeakMap();
				function attach(hook$1, rendererID, renderer, global1) {
					var version = renderer.reconcilerVersion || renderer.version;
					var _getInternalReactCons = getInternalReactConstants(version);
					var getDisplayNameForFiber = _getInternalReactCons.getDisplayNameForFiber;
					var getTypeSymbol = _getInternalReactCons.getTypeSymbol;
					var ReactPriorityLevels = _getInternalReactCons.ReactPriorityLevels;
					var ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork;
					var StrictModeBits = _getInternalReactCons.StrictModeBits;
					var CacheComponent = ReactTypeOfWork.CacheComponent;
					var ClassComponent = ReactTypeOfWork.ClassComponent;
					var ContextConsumer = ReactTypeOfWork.ContextConsumer;
					var DehydratedSuspenseComponent = ReactTypeOfWork.DehydratedSuspenseComponent;
					var ForwardRef = ReactTypeOfWork.ForwardRef;
					var Fragment = ReactTypeOfWork.Fragment;
					var FunctionComponent = ReactTypeOfWork.FunctionComponent;
					var HostRoot = ReactTypeOfWork.HostRoot;
					var HostHoistable = ReactTypeOfWork.HostHoistable;
					var HostSingleton = ReactTypeOfWork.HostSingleton;
					var HostPortal = ReactTypeOfWork.HostPortal;
					var HostComponent = ReactTypeOfWork.HostComponent;
					var HostText = ReactTypeOfWork.HostText;
					var IncompleteClassComponent = ReactTypeOfWork.IncompleteClassComponent;
					var IncompleteFunctionComponent = ReactTypeOfWork.IncompleteFunctionComponent;
					var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
					var LegacyHiddenComponent = ReactTypeOfWork.LegacyHiddenComponent;
					var MemoComponent = ReactTypeOfWork.MemoComponent;
					var OffscreenComponent = ReactTypeOfWork.OffscreenComponent;
					var SimpleMemoComponent = ReactTypeOfWork.SimpleMemoComponent;
					var SuspenseComponent = ReactTypeOfWork.SuspenseComponent;
					var SuspenseListComponent = ReactTypeOfWork.SuspenseListComponent;
					var TracingMarkerComponent = ReactTypeOfWork.TracingMarkerComponent;
					var Throw = ReactTypeOfWork.Throw;
					var ImmediatePriority = ReactPriorityLevels.ImmediatePriority;
					var UserBlockingPriority = ReactPriorityLevels.UserBlockingPriority;
					var NormalPriority = ReactPriorityLevels.NormalPriority;
					var LowPriority = ReactPriorityLevels.LowPriority;
					var IdlePriority = ReactPriorityLevels.IdlePriority;
					var NoPriority = ReactPriorityLevels.NoPriority;
					var getLaneLabelMap = renderer.getLaneLabelMap;
					var injectProfilingHooks = renderer.injectProfilingHooks;
					var overrideHookState = renderer.overrideHookState;
					var overrideHookStateDeletePath = renderer.overrideHookStateDeletePath;
					var overrideHookStateRenamePath = renderer.overrideHookStateRenamePath;
					var overrideProps = renderer.overrideProps;
					var overridePropsDeletePath = renderer.overridePropsDeletePath;
					var overridePropsRenamePath = renderer.overridePropsRenamePath;
					var scheduleRefresh = renderer.scheduleRefresh;
					var setErrorHandler = renderer.setErrorHandler;
					var setSuspenseHandler = renderer.setSuspenseHandler;
					var scheduleUpdate = renderer.scheduleUpdate;
					var supportsTogglingError = typeof setErrorHandler === "function" && typeof scheduleUpdate === "function";
					var supportsTogglingSuspense = typeof setSuspenseHandler === "function" && typeof scheduleUpdate === "function";
					if (typeof scheduleRefresh === "function") renderer.scheduleRefresh = function() {
						try {
							hook$1.emit("fastRefreshScheduled");
						} finally {
							return scheduleRefresh.apply(void 0, arguments);
						}
					};
					var getTimelineData = null;
					var toggleProfilingStatus = null;
					if (typeof injectProfilingHooks === "function") {
						var response = createProfilingHooks({
							getDisplayNameForFiber,
							getIsProfiling: function getIsProfiling() {
								return isProfiling;
							},
							getLaneLabelMap,
							currentDispatcherRef: getDispatcherRef(renderer),
							workTagMap: ReactTypeOfWork,
							reactVersion: version
						});
						injectProfilingHooks(response.profilingHooks);
						getTimelineData = response.getTimelineData;
						toggleProfilingStatus = response.toggleProfilingStatus;
					}
					var fibersWithChangedErrorOrWarningCounts = new Set();
					var pendingFiberToErrorsMap = new Map();
					var pendingFiberToWarningsMap = new Map();
					var fiberIDToErrorsMap = new Map();
					var fiberIDToWarningsMap = new Map();
					function clearErrorsAndWarnings() {
						var _iterator = renderer_createForOfIteratorHelper(fiberIDToErrorsMap.keys());
						var _step;
						try {
							for (_iterator.s(); !(_step = _iterator.n()).done;) {
								var id = _step.value;
								var _fiber = idToArbitraryFiberMap.get(id);
								if (_fiber != null) {
									fibersWithChangedErrorOrWarningCounts.add(_fiber);
									updateMostRecentlyInspectedElementIfNecessary(id);
								}
							}
						} catch (err) {
							_iterator.e(err);
						} finally {
							_iterator.f();
						}
						var _iterator2 = renderer_createForOfIteratorHelper(fiberIDToWarningsMap.keys());
						var _step2;
						try {
							for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
								var _id = _step2.value;
								var _fiber2 = idToArbitraryFiberMap.get(_id);
								if (_fiber2 != null) {
									fibersWithChangedErrorOrWarningCounts.add(_fiber2);
									updateMostRecentlyInspectedElementIfNecessary(_id);
								}
							}
						} catch (err) {
							_iterator2.e(err);
						} finally {
							_iterator2.f();
						}
						fiberIDToErrorsMap.clear();
						fiberIDToWarningsMap.clear();
						flushPendingEvents();
					}
					function clearMessageCountHelper(fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
						var fiber = idToArbitraryFiberMap.get(fiberID);
						if (fiber != null) {
							pendingFiberToErrorsMap.delete(fiber);
							if (fiberIDToMessageCountMap.has(fiberID)) {
								fiberIDToMessageCountMap.delete(fiberID);
								fibersWithChangedErrorOrWarningCounts.add(fiber);
								flushPendingEvents();
								updateMostRecentlyInspectedElementIfNecessary(fiberID);
							} else fibersWithChangedErrorOrWarningCounts.delete(fiber);
						}
					}
					function clearErrorsForFiberID(fiberID) {
						clearMessageCountHelper(fiberID, pendingFiberToErrorsMap, fiberIDToErrorsMap);
					}
					function clearWarningsForFiberID(fiberID) {
						clearMessageCountHelper(fiberID, pendingFiberToWarningsMap, fiberIDToWarningsMap);
					}
					function updateMostRecentlyInspectedElementIfNecessary(fiberID) {
						if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === fiberID) hasElementUpdatedSinceLastInspected = true;
					}
					function onErrorOrWarning(fiber, type, args) {
						if (type === "error") {
							var maybeID = getFiberIDUnsafe(fiber);
							if (maybeID != null && forceErrorForFiberIDs.get(maybeID) === true) return;
						}
						var message = formatConsoleArgumentsToSingleString.apply(void 0, renderer_toConsumableArray(args));
						if (__DEBUG__) debug$1("onErrorOrWarning", fiber, null, "".concat(type, ": \"").concat(message, "\""));
						fibersWithChangedErrorOrWarningCounts.add(fiber);
						var fiberMap = type === "error" ? pendingFiberToErrorsMap : pendingFiberToWarningsMap;
						var messageMap = fiberMap.get(fiber);
						if (messageMap != null) {
							var count = messageMap.get(message) || 0;
							messageMap.set(message, count + 1);
						} else fiberMap.set(fiber, new Map([[message, 1]]));
						flushPendingErrorsAndWarningsAfterDelay();
					}
					registerRenderer(renderer, onErrorOrWarning);
					patchConsoleUsingWindowValues();
					var debug$1 = function debug$2(name, fiber, parentFiber) {
						var extraString = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
						if (__DEBUG__) {
							var displayName = fiber.tag + ":" + (getDisplayNameForFiber(fiber) || "null");
							var maybeID = getFiberIDUnsafe(fiber) || "<no id>";
							var parentDisplayName = parentFiber ? parentFiber.tag + ":" + (getDisplayNameForFiber(parentFiber) || "null") : "";
							var maybeParentID = parentFiber ? getFiberIDUnsafe(parentFiber) || "<no-id>" : "";
							console.groupCollapsed("[renderer] %c".concat(name, " %c").concat(displayName, " (").concat(maybeID, ") %c").concat(parentFiber ? "".concat(parentDisplayName, " (").concat(maybeParentID, ")") : "", " %c").concat(extraString), "color: red; font-weight: bold;", "color: blue;", "color: purple;", "color: black;");
							console.log(new Error().stack.split("\n").slice(1).join("\n"));
							console.groupEnd();
						}
					};
					__name(debug$1, "debug");
					var hideElementsWithDisplayNames = new Set();
					var hideElementsWithPaths = new Set();
					var hideElementsWithTypes = new Set();
					var traceUpdatesEnabled = false;
					var traceUpdatesForNodes = new Set();
					function applyComponentFilters(componentFilters) {
						hideElementsWithTypes.clear();
						hideElementsWithDisplayNames.clear();
						hideElementsWithPaths.clear();
						componentFilters.forEach(function(componentFilter) {
							if (!componentFilter.isEnabled) return;
							switch (componentFilter.type) {
								case ComponentFilterDisplayName:
									if (componentFilter.isValid && componentFilter.value !== "") hideElementsWithDisplayNames.add(new RegExp(componentFilter.value, "i"));
									break;
								case ComponentFilterElementType:
									hideElementsWithTypes.add(componentFilter.value);
									break;
								case ComponentFilterLocation:
									if (componentFilter.isValid && componentFilter.value !== "") hideElementsWithPaths.add(new RegExp(componentFilter.value, "i"));
									break;
								case ComponentFilterHOC:
									hideElementsWithDisplayNames.add(new RegExp("\\("));
									break;
								default:
									console.warn("Invalid component filter type \"".concat(componentFilter.type, "\""));
									break;
							}
						});
					}
					if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
						var componentFiltersWithoutLocationBasedOnes = filterOutLocationComponentFilters(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
						applyComponentFilters(componentFiltersWithoutLocationBasedOnes);
					} else applyComponentFilters(getDefaultComponentFilters());
					function updateComponentFilters(componentFilters) {
						if (isProfiling) throw Error("Cannot modify filter preferences while profiling");
						hook$1.getFiberRoots(rendererID).forEach(function(root) {
							currentRootID = getOrGenerateFiberID(root.current);
							pushOperation(TREE_OPERATION_REMOVE_ROOT);
							flushPendingEvents(root);
							currentRootID = -1;
						});
						applyComponentFilters(componentFilters);
						rootDisplayNameCounter.clear();
						hook$1.getFiberRoots(rendererID).forEach(function(root) {
							currentRootID = getOrGenerateFiberID(root.current);
							setRootPseudoKey(currentRootID, root.current);
							mountFiberRecursively(root.current, null, false, false);
							flushPendingEvents(root);
							currentRootID = -1;
						});
						reevaluateErrorsAndWarnings();
						flushPendingEvents();
					}
					function shouldFilterFiber(fiber) {
						var tag = fiber.tag;
						var type = fiber.type;
						var key = fiber.key;
						switch (tag) {
							case DehydratedSuspenseComponent: return true;
							case HostPortal:
							case HostText:
							case LegacyHiddenComponent:
							case OffscreenComponent:
							case Throw: return true;
							case HostRoot: return false;
							case Fragment: return key === null;
							default:
								var typeSymbol = getTypeSymbol(type);
								switch (typeSymbol) {
									case CONCURRENT_MODE_NUMBER:
									case CONCURRENT_MODE_SYMBOL_STRING:
									case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
									case STRICT_MODE_NUMBER:
									case STRICT_MODE_SYMBOL_STRING: return true;
									default: break;
								}
						}
						var elementType = getElementTypeForFiber(fiber);
						if (hideElementsWithTypes.has(elementType)) return true;
						if (hideElementsWithDisplayNames.size > 0) {
							var displayName = getDisplayNameForFiber(fiber);
							if (displayName != null) {
								var _iterator3 = renderer_createForOfIteratorHelper(hideElementsWithDisplayNames);
								var _step3;
								try {
									for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
										var displayNameRegExp = _step3.value;
										if (displayNameRegExp.test(displayName)) return true;
									}
								} catch (err) {
									_iterator3.e(err);
								} finally {
									_iterator3.f();
								}
							}
						}
						return false;
					}
					function getElementTypeForFiber(fiber) {
						var type = fiber.type;
						var tag = fiber.tag;
						switch (tag) {
							case ClassComponent:
							case IncompleteClassComponent: return types_ElementTypeClass;
							case IncompleteFunctionComponent:
							case FunctionComponent:
							case IndeterminateComponent: return types_ElementTypeFunction;
							case ForwardRef: return types_ElementTypeForwardRef;
							case HostRoot: return ElementTypeRoot;
							case HostComponent:
							case HostHoistable:
							case HostSingleton: return ElementTypeHostComponent;
							case HostPortal:
							case HostText:
							case Fragment: return ElementTypeOtherOrUnknown;
							case MemoComponent:
							case SimpleMemoComponent: return types_ElementTypeMemo;
							case SuspenseComponent: return ElementTypeSuspense;
							case SuspenseListComponent: return ElementTypeSuspenseList;
							case TracingMarkerComponent: return ElementTypeTracingMarker;
							default:
								var typeSymbol = getTypeSymbol(type);
								switch (typeSymbol) {
									case CONCURRENT_MODE_NUMBER:
									case CONCURRENT_MODE_SYMBOL_STRING:
									case DEPRECATED_ASYNC_MODE_SYMBOL_STRING: return ElementTypeOtherOrUnknown;
									case PROVIDER_NUMBER:
									case PROVIDER_SYMBOL_STRING: return ElementTypeContext;
									case CONTEXT_NUMBER:
									case CONTEXT_SYMBOL_STRING: return ElementTypeContext;
									case STRICT_MODE_NUMBER:
									case STRICT_MODE_SYMBOL_STRING: return ElementTypeOtherOrUnknown;
									case PROFILER_NUMBER:
									case PROFILER_SYMBOL_STRING: return ElementTypeProfiler;
									default: return ElementTypeOtherOrUnknown;
								}
						}
					}
					var idToTreeBaseDurationMap = new Map();
					var idToRootMap = new Map();
					var currentRootID = -1;
					function getOrGenerateFiberID(fiber) {
						var id = null;
						if (fiberToIDMap.has(fiber)) id = fiberToIDMap.get(fiber);
						else {
							var _alternate = fiber.alternate;
							if (_alternate !== null && fiberToIDMap.has(_alternate)) id = fiberToIDMap.get(_alternate);
						}
						var didGenerateID = false;
						if (id === null) {
							didGenerateID = true;
							id = getUID();
						}
						var refinedID = id;
						if (!fiberToIDMap.has(fiber)) {
							fiberToIDMap.set(fiber, refinedID);
							idToArbitraryFiberMap.set(refinedID, fiber);
						}
						var alternate = fiber.alternate;
						if (alternate !== null) {
							if (!fiberToIDMap.has(alternate)) fiberToIDMap.set(alternate, refinedID);
						}
						if (__DEBUG__) {
							if (didGenerateID) debug$1("getOrGenerateFiberID()", fiber, fiber.return, "Generated a new UID");
						}
						return refinedID;
					}
					function getFiberIDThrows(fiber) {
						var maybeID = getFiberIDUnsafe(fiber);
						if (maybeID !== null) return maybeID;
						throw Error("Could not find ID for Fiber \"".concat(getDisplayNameForFiber(fiber) || "", "\""));
					}
					function getFiberIDUnsafe(fiber) {
						if (fiberToIDMap.has(fiber)) return fiberToIDMap.get(fiber);
						else {
							var alternate = fiber.alternate;
							if (alternate !== null && fiberToIDMap.has(alternate)) return fiberToIDMap.get(alternate);
						}
						return null;
					}
					function untrackFiberID(fiber) {
						if (__DEBUG__) debug$1("untrackFiberID()", fiber, fiber.return, "schedule after delay");
						untrackFibersSet.add(fiber);
						var alternate = fiber.alternate;
						if (alternate !== null) untrackFibersSet.add(alternate);
						if (untrackFibersTimeoutID === null) untrackFibersTimeoutID = setTimeout(untrackFibers, 1e3);
					}
					var untrackFibersSet = new Set();
					var untrackFibersTimeoutID = null;
					function untrackFibers() {
						if (untrackFibersTimeoutID !== null) {
							clearTimeout(untrackFibersTimeoutID);
							untrackFibersTimeoutID = null;
						}
						untrackFibersSet.forEach(function(fiber) {
							var fiberID = getFiberIDUnsafe(fiber);
							if (fiberID !== null) {
								idToArbitraryFiberMap.delete(fiberID);
								clearErrorsForFiberID(fiberID);
								clearWarningsForFiberID(fiberID);
							}
							fiberToIDMap.delete(fiber);
							fiberToComponentStackMap.delete(fiber);
							var alternate = fiber.alternate;
							if (alternate !== null) {
								fiberToIDMap.delete(alternate);
								fiberToComponentStackMap.delete(alternate);
							}
							if (forceErrorForFiberIDs.has(fiberID)) {
								forceErrorForFiberIDs.delete(fiberID);
								if (forceErrorForFiberIDs.size === 0 && setErrorHandler != null) setErrorHandler(shouldErrorFiberAlwaysNull);
							}
						});
						untrackFibersSet.clear();
					}
					function getChangeDescription(prevFiber, nextFiber) {
						switch (getElementTypeForFiber(nextFiber)) {
							case types_ElementTypeClass:
							case types_ElementTypeFunction:
							case types_ElementTypeMemo:
							case types_ElementTypeForwardRef: if (prevFiber === null) return {
								context: null,
								didHooksChange: false,
								isFirstMount: true,
								props: null,
								state: null
							};
							else {
								var data = {
									context: getContextChangedKeys(nextFiber),
									didHooksChange: false,
									isFirstMount: false,
									props: getChangedKeys(prevFiber.memoizedProps, nextFiber.memoizedProps),
									state: getChangedKeys(prevFiber.memoizedState, nextFiber.memoizedState)
								};
								var indices = getChangedHooksIndices(prevFiber.memoizedState, nextFiber.memoizedState);
								data.hooks = indices;
								data.didHooksChange = indices !== null && indices.length > 0;
								return data;
							}
							default: return null;
						}
					}
					function updateContextsForFiber(fiber) {
						switch (getElementTypeForFiber(fiber)) {
							case types_ElementTypeClass:
							case types_ElementTypeForwardRef:
							case types_ElementTypeFunction:
							case types_ElementTypeMemo:
								if (idToContextsMap !== null) {
									var id = getFiberIDThrows(fiber);
									var contexts = getContextsForFiber(fiber);
									if (contexts !== null) idToContextsMap.set(id, contexts);
								}
								break;
							default: break;
						}
					}
					var NO_CONTEXT = {};
					function getContextsForFiber(fiber) {
						var legacyContext = NO_CONTEXT;
						var modernContext = NO_CONTEXT;
						switch (getElementTypeForFiber(fiber)) {
							case types_ElementTypeClass:
								var instance = fiber.stateNode;
								if (instance != null) if (instance.constructor && instance.constructor.contextType != null) modernContext = instance.context;
								else {
									legacyContext = instance.context;
									if (legacyContext && Object.keys(legacyContext).length === 0) legacyContext = NO_CONTEXT;
								}
								return [legacyContext, modernContext];
							case types_ElementTypeForwardRef:
							case types_ElementTypeFunction:
							case types_ElementTypeMemo:
								var dependencies = fiber.dependencies;
								if (dependencies && dependencies.firstContext) modernContext = dependencies.firstContext;
								return [legacyContext, modernContext];
							default: return null;
						}
					}
					function crawlToInitializeContextsMap(fiber) {
						var id = getFiberIDUnsafe(fiber);
						if (id !== null) {
							updateContextsForFiber(fiber);
							var current = fiber.child;
							while (current !== null) {
								crawlToInitializeContextsMap(current);
								current = current.sibling;
							}
						}
					}
					function getContextChangedKeys(fiber) {
						if (idToContextsMap !== null) {
							var id = getFiberIDThrows(fiber);
							var prevContexts = idToContextsMap.has(id) ? idToContextsMap.get(id) : null;
							var nextContexts = getContextsForFiber(fiber);
							if (prevContexts == null || nextContexts == null) return null;
							var _prevContexts = renderer_slicedToArray(prevContexts, 2);
							var prevLegacyContext = _prevContexts[0];
							var prevModernContext = _prevContexts[1];
							var _nextContexts = renderer_slicedToArray(nextContexts, 2);
							var nextLegacyContext = _nextContexts[0];
							var nextModernContext = _nextContexts[1];
							switch (getElementTypeForFiber(fiber)) {
								case types_ElementTypeClass:
									if (prevContexts && nextContexts) {
										if (nextLegacyContext !== NO_CONTEXT) return getChangedKeys(prevLegacyContext, nextLegacyContext);
										else if (nextModernContext !== NO_CONTEXT) return prevModernContext !== nextModernContext;
									}
									break;
								case types_ElementTypeForwardRef:
								case types_ElementTypeFunction:
								case types_ElementTypeMemo:
									if (nextModernContext !== NO_CONTEXT) {
										var prevContext = prevModernContext;
										var nextContext = nextModernContext;
										while (prevContext && nextContext) {
											if (!shared_objectIs(prevContext.memoizedValue, nextContext.memoizedValue)) return true;
											prevContext = prevContext.next;
											nextContext = nextContext.next;
										}
										return false;
									}
									break;
								default: break;
							}
						}
						return null;
					}
					function isHookThatCanScheduleUpdate(hookObject) {
						var queue = hookObject.queue;
						if (!queue) return false;
						var boundHasOwnProperty = shared_hasOwnProperty.bind(queue);
						if (boundHasOwnProperty("pending")) return true;
						return boundHasOwnProperty("value") && boundHasOwnProperty("getSnapshot") && typeof queue.getSnapshot === "function";
					}
					function didStatefulHookChange(prev, next) {
						var prevMemoizedState = prev.memoizedState;
						var nextMemoizedState = next.memoizedState;
						if (isHookThatCanScheduleUpdate(prev)) return prevMemoizedState !== nextMemoizedState;
						return false;
					}
					function getChangedHooksIndices(prev, next) {
						if (prev == null || next == null) return null;
						var indices = [];
						var index = 0;
						if (next.hasOwnProperty("baseState") && next.hasOwnProperty("memoizedState") && next.hasOwnProperty("next") && next.hasOwnProperty("queue")) while (next !== null) {
							if (didStatefulHookChange(prev, next)) indices.push(index);
							next = next.next;
							prev = prev.next;
							index++;
						}
						return indices;
					}
					function getChangedKeys(prev, next) {
						if (prev == null || next == null) return null;
						if (next.hasOwnProperty("baseState") && next.hasOwnProperty("memoizedState") && next.hasOwnProperty("next") && next.hasOwnProperty("queue")) return null;
						var keys = new Set([].concat(renderer_toConsumableArray(Object.keys(prev)), renderer_toConsumableArray(Object.keys(next))));
						var changedKeys = [];
						var _iterator4 = renderer_createForOfIteratorHelper(keys);
						var _step4;
						try {
							for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
								var key = _step4.value;
								if (prev[key] !== next[key]) changedKeys.push(key);
							}
						} catch (err) {
							_iterator4.e(err);
						} finally {
							_iterator4.f();
						}
						return changedKeys;
					}
					function didFiberRender(prevFiber, nextFiber) {
						switch (nextFiber.tag) {
							case ClassComponent:
							case FunctionComponent:
							case ContextConsumer:
							case MemoComponent:
							case SimpleMemoComponent:
							case ForwardRef:
								var PerformedWork = 1;
								return (getFiberFlags(nextFiber) & PerformedWork) === PerformedWork;
							default: return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
						}
					}
					var pendingOperations = [];
					var pendingRealUnmountedIDs = [];
					var pendingSimulatedUnmountedIDs = [];
					var pendingOperationsQueue = [];
					var pendingStringTable = new Map();
					var pendingStringTableLength = 0;
					var pendingUnmountedRootID = null;
					function pushOperation(op) {
						pendingOperations.push(op);
					}
					function shouldBailoutWithPendingOperations() {
						if (isProfiling) {
							if (currentCommitProfilingMetadata != null && currentCommitProfilingMetadata.durations.length > 0) return false;
						}
						return pendingOperations.length === 0 && pendingRealUnmountedIDs.length === 0 && pendingSimulatedUnmountedIDs.length === 0 && pendingUnmountedRootID === null;
					}
					function flushOrQueueOperations(operations) {
						if (shouldBailoutWithPendingOperations()) return;
						if (pendingOperationsQueue !== null) pendingOperationsQueue.push(operations);
						else hook$1.emit("operations", operations);
					}
					var flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;
					function clearPendingErrorsAndWarningsAfterDelay() {
						if (flushPendingErrorsAndWarningsAfterDelayTimeoutID !== null) {
							clearTimeout(flushPendingErrorsAndWarningsAfterDelayTimeoutID);
							flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;
						}
					}
					function flushPendingErrorsAndWarningsAfterDelay() {
						clearPendingErrorsAndWarningsAfterDelay();
						flushPendingErrorsAndWarningsAfterDelayTimeoutID = setTimeout(function() {
							flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;
							if (pendingOperations.length > 0) return;
							recordPendingErrorsAndWarnings();
							if (shouldBailoutWithPendingOperations()) return;
							var operations = new Array(3 + pendingOperations.length);
							operations[0] = rendererID;
							operations[1] = currentRootID;
							operations[2] = 0;
							for (var j = 0; j < pendingOperations.length; j++) operations[3 + j] = pendingOperations[j];
							flushOrQueueOperations(operations);
							pendingOperations.length = 0;
						}, 1e3);
					}
					function reevaluateErrorsAndWarnings() {
						fibersWithChangedErrorOrWarningCounts.clear();
						fiberIDToErrorsMap.forEach(function(countMap, fiberID) {
							var fiber = idToArbitraryFiberMap.get(fiberID);
							if (fiber != null) fibersWithChangedErrorOrWarningCounts.add(fiber);
						});
						fiberIDToWarningsMap.forEach(function(countMap, fiberID) {
							var fiber = idToArbitraryFiberMap.get(fiberID);
							if (fiber != null) fibersWithChangedErrorOrWarningCounts.add(fiber);
						});
						recordPendingErrorsAndWarnings();
					}
					function mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
						var newCount = 0;
						var messageCountMap = fiberIDToMessageCountMap.get(fiberID);
						var pendingMessageCountMap = pendingFiberToMessageCountMap.get(fiber);
						if (pendingMessageCountMap != null) if (messageCountMap == null) {
							messageCountMap = pendingMessageCountMap;
							fiberIDToMessageCountMap.set(fiberID, pendingMessageCountMap);
						} else {
							var refinedMessageCountMap = messageCountMap;
							pendingMessageCountMap.forEach(function(pendingCount, message) {
								var previousCount = refinedMessageCountMap.get(message) || 0;
								refinedMessageCountMap.set(message, previousCount + pendingCount);
							});
						}
						if (!shouldFilterFiber(fiber)) {
							if (messageCountMap != null) messageCountMap.forEach(function(count) {
								newCount += count;
							});
						}
						pendingFiberToMessageCountMap.delete(fiber);
						return newCount;
					}
					function recordPendingErrorsAndWarnings() {
						clearPendingErrorsAndWarningsAfterDelay();
						fibersWithChangedErrorOrWarningCounts.forEach(function(fiber) {
							var fiberID = getFiberIDUnsafe(fiber);
							if (fiberID === null) {} else {
								var errorCount = mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToErrorsMap, fiberIDToErrorsMap);
								var warningCount = mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToWarningsMap, fiberIDToWarningsMap);
								pushOperation(TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS);
								pushOperation(fiberID);
								pushOperation(errorCount);
								pushOperation(warningCount);
							}
							pendingFiberToErrorsMap.delete(fiber);
							pendingFiberToWarningsMap.delete(fiber);
						});
						fibersWithChangedErrorOrWarningCounts.clear();
					}
					function flushPendingEvents(root) {
						recordPendingErrorsAndWarnings();
						if (shouldBailoutWithPendingOperations()) return;
						var numUnmountIDs = pendingRealUnmountedIDs.length + pendingSimulatedUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
						var operations = new Array(3 + pendingStringTableLength + (numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + pendingOperations.length);
						var i = 0;
						operations[i++] = rendererID;
						operations[i++] = currentRootID;
						operations[i++] = pendingStringTableLength;
						pendingStringTable.forEach(function(entry, stringKey) {
							var encodedString = entry.encodedString;
							var length = encodedString.length;
							operations[i++] = length;
							for (var j$1 = 0; j$1 < length; j$1++) operations[i + j$1] = encodedString[j$1];
							i += length;
						});
						if (numUnmountIDs > 0) {
							operations[i++] = TREE_OPERATION_REMOVE;
							operations[i++] = numUnmountIDs;
							for (var j = pendingRealUnmountedIDs.length - 1; j >= 0; j--) operations[i++] = pendingRealUnmountedIDs[j];
							for (var _j = 0; _j < pendingSimulatedUnmountedIDs.length; _j++) operations[i + _j] = pendingSimulatedUnmountedIDs[_j];
							i += pendingSimulatedUnmountedIDs.length;
							if (pendingUnmountedRootID !== null) {
								operations[i] = pendingUnmountedRootID;
								i++;
							}
						}
						for (var _j2 = 0; _j2 < pendingOperations.length; _j2++) operations[i + _j2] = pendingOperations[_j2];
						i += pendingOperations.length;
						flushOrQueueOperations(operations);
						pendingOperations.length = 0;
						pendingRealUnmountedIDs.length = 0;
						pendingSimulatedUnmountedIDs.length = 0;
						pendingUnmountedRootID = null;
						pendingStringTable.clear();
						pendingStringTableLength = 0;
					}
					function getStringID(string) {
						if (string === null) return 0;
						var existingEntry = pendingStringTable.get(string);
						if (existingEntry !== void 0) return existingEntry.id;
						var id = pendingStringTable.size + 1;
						var encodedString = utfEncodeString(string);
						pendingStringTable.set(string, {
							encodedString,
							id
						});
						pendingStringTableLength += encodedString.length + 1;
						return id;
					}
					function recordMount(fiber, parentFiber) {
						var isRoot = fiber.tag === HostRoot;
						var id = getOrGenerateFiberID(fiber);
						if (__DEBUG__) debug$1("recordMount()", fiber, parentFiber);
						var hasOwnerMetadata = fiber.hasOwnProperty("_debugOwner");
						var isProfilingSupported = fiber.hasOwnProperty("treeBaseDuration");
						var profilingFlags = 0;
						if (isProfilingSupported) {
							profilingFlags = PROFILING_FLAG_BASIC_SUPPORT;
							if (typeof injectProfilingHooks === "function") profilingFlags |= PROFILING_FLAG_TIMELINE_SUPPORT;
						}
						if (isRoot) {
							var isProductionBuildOfRenderer = renderer.bundleType === 0;
							pushOperation(TREE_OPERATION_ADD);
							pushOperation(id);
							pushOperation(ElementTypeRoot);
							pushOperation((fiber.mode & StrictModeBits) !== 0 ? 1 : 0);
							pushOperation(profilingFlags);
							pushOperation(!isProductionBuildOfRenderer && StrictModeBits !== 0 ? 1 : 0);
							pushOperation(hasOwnerMetadata ? 1 : 0);
							if (isProfiling) {
								if (displayNamesByRootID !== null) displayNamesByRootID.set(id, getDisplayNameForRoot(fiber));
							}
						} else {
							var key = fiber.key;
							var displayName = getDisplayNameForFiber(fiber);
							var elementType = getElementTypeForFiber(fiber);
							var debugOwner = fiber._debugOwner;
							var ownerID;
							if (debugOwner != null) if (typeof debugOwner.tag === "number") ownerID = getOrGenerateFiberID(debugOwner);
							else ownerID = 0;
							else ownerID = 0;
							var parentID = parentFiber ? getFiberIDThrows(parentFiber) : 0;
							var displayNameStringID = getStringID(displayName);
							var keyString = key === null ? null : String(key);
							var keyStringID = getStringID(keyString);
							pushOperation(TREE_OPERATION_ADD);
							pushOperation(id);
							pushOperation(elementType);
							pushOperation(parentID);
							pushOperation(ownerID);
							pushOperation(displayNameStringID);
							pushOperation(keyStringID);
							if ((fiber.mode & StrictModeBits) !== 0 && (parentFiber.mode & StrictModeBits) === 0) {
								pushOperation(TREE_OPERATION_SET_SUBTREE_MODE);
								pushOperation(id);
								pushOperation(StrictMode);
							}
						}
						if (isProfilingSupported) {
							idToRootMap.set(id, currentRootID);
							recordProfilingDurations(fiber);
						}
					}
					function recordUnmount(fiber, isSimulated) {
						if (__DEBUG__) debug$1("recordUnmount()", fiber, null, isSimulated ? "unmount is simulated" : "");
						if (trackedPathMatchFiber !== null) {
							if (fiber === trackedPathMatchFiber || fiber === trackedPathMatchFiber.alternate) setTrackedPath(null);
						}
						var unsafeID = getFiberIDUnsafe(fiber);
						if (unsafeID === null) return;
						var id = unsafeID;
						var isRoot = fiber.tag === HostRoot;
						if (isRoot) pendingUnmountedRootID = id;
						else if (!shouldFilterFiber(fiber)) if (isSimulated) pendingSimulatedUnmountedIDs.push(id);
						else pendingRealUnmountedIDs.push(id);
						if (!fiber._debugNeedsRemount) {
							untrackFiberID(fiber);
							var isProfilingSupported = fiber.hasOwnProperty("treeBaseDuration");
							if (isProfilingSupported) {
								idToRootMap.delete(id);
								idToTreeBaseDurationMap.delete(id);
							}
						}
					}
					function mountFiberRecursively(firstChild, parentFiber, traverseSiblings, traceNearestHostComponentUpdate) {
						var fiber = firstChild;
						while (fiber !== null) {
							getOrGenerateFiberID(fiber);
							if (__DEBUG__) debug$1("mountFiberRecursively()", fiber, parentFiber);
							var mightSiblingsBeOnTrackedPath = updateTrackedPathStateBeforeMount(fiber);
							var shouldIncludeInTree = !shouldFilterFiber(fiber);
							if (shouldIncludeInTree) recordMount(fiber, parentFiber);
							if (traceUpdatesEnabled) {
								if (traceNearestHostComponentUpdate) {
									var elementType = getElementTypeForFiber(fiber);
									if (elementType === ElementTypeHostComponent) {
										traceUpdatesForNodes.add(fiber.stateNode);
										traceNearestHostComponentUpdate = false;
									}
								}
							}
							var isSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent;
							if (isSuspense) {
								var isTimedOut = fiber.memoizedState !== null;
								if (isTimedOut) {
									var primaryChildFragment = fiber.child;
									var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
									var fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;
									if (fallbackChild !== null) mountFiberRecursively(fallbackChild, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
								} else {
									var primaryChild = null;
									var areSuspenseChildrenConditionallyWrapped = OffscreenComponent === -1;
									if (areSuspenseChildrenConditionallyWrapped) primaryChild = fiber.child;
									else if (fiber.child !== null) primaryChild = fiber.child.child;
									if (primaryChild !== null) mountFiberRecursively(primaryChild, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
								}
							} else if (fiber.child !== null) mountFiberRecursively(fiber.child, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
							updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath);
							fiber = traverseSiblings ? fiber.sibling : null;
						}
					}
					function unmountFiberChildrenRecursively(fiber) {
						if (__DEBUG__) debug$1("unmountFiberChildrenRecursively()", fiber);
						var isTimedOutSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent && fiber.memoizedState !== null;
						var child = fiber.child;
						if (isTimedOutSuspense) {
							var primaryChildFragment = fiber.child;
							var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
							child = fallbackChildFragment ? fallbackChildFragment.child : null;
						}
						while (child !== null) {
							if (child.return !== null) {
								unmountFiberChildrenRecursively(child);
								recordUnmount(child, true);
							}
							child = child.sibling;
						}
					}
					function recordProfilingDurations(fiber) {
						var id = getFiberIDThrows(fiber);
						var actualDuration = fiber.actualDuration;
						var treeBaseDuration = fiber.treeBaseDuration;
						idToTreeBaseDurationMap.set(id, treeBaseDuration || 0);
						if (isProfiling) {
							var alternate = fiber.alternate;
							if (alternate == null || treeBaseDuration !== alternate.treeBaseDuration) {
								var convertedTreeBaseDuration = Math.floor((treeBaseDuration || 0) * 1e3);
								pushOperation(TREE_OPERATION_UPDATE_TREE_BASE_DURATION);
								pushOperation(id);
								pushOperation(convertedTreeBaseDuration);
							}
							if (alternate == null || didFiberRender(alternate, fiber)) {
								if (actualDuration != null) {
									var selfDuration = actualDuration;
									var child = fiber.child;
									while (child !== null) {
										selfDuration -= child.actualDuration || 0;
										child = child.sibling;
									}
									var metadata = currentCommitProfilingMetadata;
									metadata.durations.push(id, actualDuration, selfDuration);
									metadata.maxActualDuration = Math.max(metadata.maxActualDuration, actualDuration);
									if (recordChangeDescriptions) {
										var changeDescription = getChangeDescription(alternate, fiber);
										if (changeDescription !== null) {
											if (metadata.changeDescriptions !== null) metadata.changeDescriptions.set(id, changeDescription);
										}
										updateContextsForFiber(fiber);
									}
								}
							}
						}
					}
					function recordResetChildren(fiber, childSet) {
						if (__DEBUG__) debug$1("recordResetChildren()", childSet, fiber);
						var nextChildren = [];
						var child = childSet;
						while (child !== null) {
							findReorderedChildrenRecursively(child, nextChildren);
							child = child.sibling;
						}
						var numChildren = nextChildren.length;
						if (numChildren < 2) return;
						pushOperation(TREE_OPERATION_REORDER_CHILDREN);
						pushOperation(getFiberIDThrows(fiber));
						pushOperation(numChildren);
						for (var i = 0; i < nextChildren.length; i++) pushOperation(nextChildren[i]);
					}
					function findReorderedChildrenRecursively(fiber, nextChildren) {
						if (!shouldFilterFiber(fiber)) nextChildren.push(getFiberIDThrows(fiber));
						else {
							var child = fiber.child;
							var isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;
							if (isTimedOutSuspense) {
								var primaryChildFragment = fiber.child;
								var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
								var fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;
								if (fallbackChild !== null) child = fallbackChild;
							}
							while (child !== null) {
								findReorderedChildrenRecursively(child, nextChildren);
								child = child.sibling;
							}
						}
					}
					function updateFiberRecursively(nextFiber, prevFiber, parentFiber, traceNearestHostComponentUpdate) {
						var id = getOrGenerateFiberID(nextFiber);
						if (__DEBUG__) debug$1("updateFiberRecursively()", nextFiber, parentFiber);
						if (traceUpdatesEnabled) {
							var elementType = getElementTypeForFiber(nextFiber);
							if (traceNearestHostComponentUpdate) {
								if (elementType === ElementTypeHostComponent) {
									traceUpdatesForNodes.add(nextFiber.stateNode);
									traceNearestHostComponentUpdate = false;
								}
							} else if (elementType === types_ElementTypeFunction || elementType === types_ElementTypeClass || elementType === ElementTypeContext || elementType === types_ElementTypeMemo || elementType === types_ElementTypeForwardRef) traceNearestHostComponentUpdate = didFiberRender(prevFiber, nextFiber);
						}
						if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id && didFiberRender(prevFiber, nextFiber)) hasElementUpdatedSinceLastInspected = true;
						var shouldIncludeInTree = !shouldFilterFiber(nextFiber);
						var isSuspense = nextFiber.tag === SuspenseComponent;
						var shouldResetChildren = false;
						var prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
						var nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null;
						if (prevDidTimeout && nextDidTimeOut) {
							var nextFiberChild = nextFiber.child;
							var nextFallbackChildSet = nextFiberChild ? nextFiberChild.sibling : null;
							var prevFiberChild = prevFiber.child;
							var prevFallbackChildSet = prevFiberChild ? prevFiberChild.sibling : null;
							if (prevFallbackChildSet == null && nextFallbackChildSet != null) {
								mountFiberRecursively(nextFallbackChildSet, shouldIncludeInTree ? nextFiber : parentFiber, true, traceNearestHostComponentUpdate);
								shouldResetChildren = true;
							}
							if (nextFallbackChildSet != null && prevFallbackChildSet != null && updateFiberRecursively(nextFallbackChildSet, prevFallbackChildSet, nextFiber, traceNearestHostComponentUpdate)) shouldResetChildren = true;
						} else if (prevDidTimeout && !nextDidTimeOut) {
							var nextPrimaryChildSet = nextFiber.child;
							if (nextPrimaryChildSet !== null) mountFiberRecursively(nextPrimaryChildSet, shouldIncludeInTree ? nextFiber : parentFiber, true, traceNearestHostComponentUpdate);
							shouldResetChildren = true;
						} else if (!prevDidTimeout && nextDidTimeOut) {
							unmountFiberChildrenRecursively(prevFiber);
							var _nextFiberChild = nextFiber.child;
							var _nextFallbackChildSet = _nextFiberChild ? _nextFiberChild.sibling : null;
							if (_nextFallbackChildSet != null) {
								mountFiberRecursively(_nextFallbackChildSet, shouldIncludeInTree ? nextFiber : parentFiber, true, traceNearestHostComponentUpdate);
								shouldResetChildren = true;
							}
						} else if (nextFiber.child !== prevFiber.child) {
							var nextChild = nextFiber.child;
							var prevChildAtSameIndex = prevFiber.child;
							while (nextChild) {
								if (nextChild.alternate) {
									var prevChild = nextChild.alternate;
									if (updateFiberRecursively(nextChild, prevChild, shouldIncludeInTree ? nextFiber : parentFiber, traceNearestHostComponentUpdate)) shouldResetChildren = true;
									if (prevChild !== prevChildAtSameIndex) shouldResetChildren = true;
								} else {
									mountFiberRecursively(nextChild, shouldIncludeInTree ? nextFiber : parentFiber, false, traceNearestHostComponentUpdate);
									shouldResetChildren = true;
								}
								nextChild = nextChild.sibling;
								if (!shouldResetChildren && prevChildAtSameIndex !== null) prevChildAtSameIndex = prevChildAtSameIndex.sibling;
							}
							if (prevChildAtSameIndex !== null) shouldResetChildren = true;
						} else if (traceUpdatesEnabled) {
							if (traceNearestHostComponentUpdate) {
								var hostFibers = findAllCurrentHostFibers(getFiberIDThrows(nextFiber));
								hostFibers.forEach(function(hostFiber) {
									traceUpdatesForNodes.add(hostFiber.stateNode);
								});
							}
						}
						if (shouldIncludeInTree) {
							var isProfilingSupported = nextFiber.hasOwnProperty("treeBaseDuration");
							if (isProfilingSupported) recordProfilingDurations(nextFiber);
						}
						if (shouldResetChildren) if (shouldIncludeInTree) {
							var nextChildSet = nextFiber.child;
							if (nextDidTimeOut) {
								var _nextFiberChild2 = nextFiber.child;
								nextChildSet = _nextFiberChild2 ? _nextFiberChild2.sibling : null;
							}
							if (nextChildSet != null) recordResetChildren(nextFiber, nextChildSet);
							return false;
						} else return true;
						else return false;
					}
					function cleanup() {}
					function rootSupportsProfiling(root) {
						if (root.memoizedInteractions != null) return true;
						else if (root.current != null && root.current.hasOwnProperty("treeBaseDuration")) return true;
						else return false;
					}
					function flushInitialOperations() {
						var localPendingOperationsQueue = pendingOperationsQueue;
						pendingOperationsQueue = null;
						if (localPendingOperationsQueue !== null && localPendingOperationsQueue.length > 0) localPendingOperationsQueue.forEach(function(operations) {
							hook$1.emit("operations", operations);
						});
						else {
							if (trackedPath !== null) mightBeOnTrackedPath = true;
							hook$1.getFiberRoots(rendererID).forEach(function(root) {
								currentRootID = getOrGenerateFiberID(root.current);
								setRootPseudoKey(currentRootID, root.current);
								if (isProfiling && rootSupportsProfiling(root)) currentCommitProfilingMetadata = {
									changeDescriptions: recordChangeDescriptions ? new Map() : null,
									durations: [],
									commitTime: renderer_getCurrentTime() - profilingStartTime,
									maxActualDuration: 0,
									priorityLevel: null,
									updaters: getUpdatersList(root),
									effectDuration: null,
									passiveEffectDuration: null
								};
								mountFiberRecursively(root.current, null, false, false);
								flushPendingEvents(root);
								currentRootID = -1;
							});
						}
					}
					function getUpdatersList(root) {
						return root.memoizedUpdaters != null ? Array.from(root.memoizedUpdaters).filter(function(fiber) {
							return getFiberIDUnsafe(fiber) !== null;
						}).map(fiberToSerializedElement) : null;
					}
					function handleCommitFiberUnmount(fiber) {
						if (!untrackFibersSet.has(fiber)) recordUnmount(fiber, false);
					}
					function handlePostCommitFiberRoot(root) {
						if (isProfiling && rootSupportsProfiling(root)) {
							if (currentCommitProfilingMetadata !== null) {
								var _getEffectDurations = getEffectDurations(root);
								var effectDuration = _getEffectDurations.effectDuration;
								var passiveEffectDuration = _getEffectDurations.passiveEffectDuration;
								currentCommitProfilingMetadata.effectDuration = effectDuration;
								currentCommitProfilingMetadata.passiveEffectDuration = passiveEffectDuration;
							}
						}
					}
					function handleCommitFiberRoot(root, priorityLevel) {
						var current = root.current;
						var alternate = current.alternate;
						untrackFibers();
						currentRootID = getOrGenerateFiberID(current);
						if (trackedPath !== null) mightBeOnTrackedPath = true;
						if (traceUpdatesEnabled) traceUpdatesForNodes.clear();
						var isProfilingSupported = rootSupportsProfiling(root);
						if (isProfiling && isProfilingSupported) currentCommitProfilingMetadata = {
							changeDescriptions: recordChangeDescriptions ? new Map() : null,
							durations: [],
							commitTime: renderer_getCurrentTime() - profilingStartTime,
							maxActualDuration: 0,
							priorityLevel: priorityLevel == null ? null : formatPriorityLevel(priorityLevel),
							updaters: getUpdatersList(root),
							effectDuration: null,
							passiveEffectDuration: null
						};
						if (alternate) {
							var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && alternate.memoizedState.isDehydrated !== true;
							var isMounted = current.memoizedState != null && current.memoizedState.element != null && current.memoizedState.isDehydrated !== true;
							if (!wasMounted && isMounted) {
								setRootPseudoKey(currentRootID, current);
								mountFiberRecursively(current, null, false, false);
							} else if (wasMounted && isMounted) updateFiberRecursively(current, alternate, null, false);
							else if (wasMounted && !isMounted) {
								removeRootPseudoKey(currentRootID);
								recordUnmount(current, false);
							}
						} else {
							setRootPseudoKey(currentRootID, current);
							mountFiberRecursively(current, null, false, false);
						}
						if (isProfiling && isProfilingSupported) {
							if (!shouldBailoutWithPendingOperations()) {
								var commitProfilingMetadata = rootToCommitProfilingMetadataMap.get(currentRootID);
								if (commitProfilingMetadata != null) commitProfilingMetadata.push(currentCommitProfilingMetadata);
								else rootToCommitProfilingMetadataMap.set(currentRootID, [currentCommitProfilingMetadata]);
							}
						}
						flushPendingEvents(root);
						if (traceUpdatesEnabled) hook$1.emit("traceUpdates", traceUpdatesForNodes);
						currentRootID = -1;
					}
					function findAllCurrentHostFibers(id) {
						var fibers = [];
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (!fiber) return fibers;
						var node = fiber;
						while (true) {
							if (node.tag === HostComponent || node.tag === HostText) fibers.push(node);
							else if (node.child) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === fiber) return fibers;
							while (!node.sibling) {
								if (!node.return || node.return === fiber) return fibers;
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
						return fibers;
					}
					function findNativeNodesForFiberID(id) {
						try {
							var _fiber3 = findCurrentFiberUsingSlowPathById(id);
							if (_fiber3 === null) return null;
							var hostFibers = findAllCurrentHostFibers(id);
							return hostFibers.map(function(hostFiber) {
								return hostFiber.stateNode;
							}).filter(Boolean);
						} catch (err) {
							return null;
						}
					}
					function getDisplayNameForFiberID(id) {
						var fiber = idToArbitraryFiberMap.get(id);
						return fiber != null ? getDisplayNameForFiber(fiber) : null;
					}
					function getFiberForNative(hostInstance) {
						return renderer.findFiberByHostInstance(hostInstance);
					}
					function getFiberIDForNative(hostInstance) {
						var findNearestUnfilteredAncestor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
						var fiber = renderer.findFiberByHostInstance(hostInstance);
						if (fiber != null) {
							if (findNearestUnfilteredAncestor) while (fiber !== null && shouldFilterFiber(fiber)) fiber = fiber.return;
							return getFiberIDThrows(fiber);
						}
						return null;
					}
					function assertIsMounted(fiber) {
						if (getNearestMountedFiber(fiber) !== fiber) throw new Error("Unable to find node on an unmounted component.");
					}
					function getNearestMountedFiber(fiber) {
						var node = fiber;
						var nearestMounted = fiber;
						if (!fiber.alternate) {
							var nextNode = node;
							do {
								node = nextNode;
								var Placement = 2;
								var Hydrating = 4096;
								if ((node.flags & (Placement | Hydrating)) !== 0) nearestMounted = node.return;
								nextNode = node.return;
							} while (nextNode);
						} else while (node.return) node = node.return;
						if (node.tag === HostRoot) return nearestMounted;
						return null;
					}
					function findCurrentFiberUsingSlowPathById(id) {
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber == null) {
							console.warn("Could not find Fiber with id \"".concat(id, "\""));
							return null;
						}
						var alternate = fiber.alternate;
						if (!alternate) {
							var nearestMounted = getNearestMountedFiber(fiber);
							if (nearestMounted === null) throw new Error("Unable to find node on an unmounted component.");
							if (nearestMounted !== fiber) return null;
							return fiber;
						}
						var a = fiber;
						var b = alternate;
						while (true) {
							var parentA = a.return;
							if (parentA === null) break;
							var parentB = parentA.alternate;
							if (parentB === null) {
								var nextParent = parentA.return;
								if (nextParent !== null) {
									a = b = nextParent;
									continue;
								}
								break;
							}
							if (parentA.child === parentB.child) {
								var child = parentA.child;
								while (child) {
									if (child === a) {
										assertIsMounted(parentA);
										return fiber;
									}
									if (child === b) {
										assertIsMounted(parentA);
										return alternate;
									}
									child = child.sibling;
								}
								throw new Error("Unable to find node on an unmounted component.");
							}
							if (a.return !== b.return) {
								a = parentA;
								b = parentB;
							} else {
								var didFindChild = false;
								var _child = parentA.child;
								while (_child) {
									if (_child === a) {
										didFindChild = true;
										a = parentA;
										b = parentB;
										break;
									}
									if (_child === b) {
										didFindChild = true;
										b = parentA;
										a = parentB;
										break;
									}
									_child = _child.sibling;
								}
								if (!didFindChild) {
									_child = parentB.child;
									while (_child) {
										if (_child === a) {
											didFindChild = true;
											a = parentB;
											b = parentA;
											break;
										}
										if (_child === b) {
											didFindChild = true;
											b = parentB;
											a = parentA;
											break;
										}
										_child = _child.sibling;
									}
									if (!didFindChild) throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
								}
							}
							if (a.alternate !== b) throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
						}
						if (a.tag !== HostRoot) throw new Error("Unable to find node on an unmounted component.");
						if (a.stateNode.current === a) return fiber;
						return alternate;
					}
					function prepareViewAttributeSource(id, path) {
						if (isMostRecentlyInspectedElement(id)) window.$attribute = utils_getInObject(mostRecentlyInspectedElement, path);
					}
					function prepareViewElementSource(id) {
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber == null) {
							console.warn("Could not find Fiber with id \"".concat(id, "\""));
							return;
						}
						var elementType = fiber.elementType;
						var tag = fiber.tag;
						var type = fiber.type;
						switch (tag) {
							case ClassComponent:
							case IncompleteClassComponent:
							case IncompleteFunctionComponent:
							case IndeterminateComponent:
							case FunctionComponent:
								global1.$type = type;
								break;
							case ForwardRef:
								global1.$type = type.render;
								break;
							case MemoComponent:
							case SimpleMemoComponent:
								global1.$type = elementType != null && elementType.type != null ? elementType.type : type;
								break;
							default:
								global1.$type = null;
								break;
						}
					}
					function fiberToSerializedElement(fiber) {
						return {
							displayName: getDisplayNameForFiber(fiber) || "Anonymous",
							id: getFiberIDThrows(fiber),
							key: fiber.key,
							type: getElementTypeForFiber(fiber)
						};
					}
					function getOwnersList(id) {
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber == null) return null;
						var owners = [fiberToSerializedElement(fiber)];
						var owner = fiber._debugOwner;
						while (owner != null) if (typeof owner.tag === "number") {
							var ownerFiber = owner;
							owners.unshift(fiberToSerializedElement(ownerFiber));
							owner = ownerFiber._debugOwner;
						} else break;
						return owners;
					}
					function getInstanceAndStyle(id) {
						var instance = null;
						var style = null;
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber !== null) {
							instance = fiber.stateNode;
							if (fiber.memoizedProps !== null) style = fiber.memoizedProps.style;
						}
						return {
							instance,
							style
						};
					}
					function isErrorBoundary(fiber) {
						var tag = fiber.tag;
						var type = fiber.type;
						switch (tag) {
							case ClassComponent:
							case IncompleteClassComponent:
								var instance = fiber.stateNode;
								return typeof type.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function";
							default: return false;
						}
					}
					function getNearestErrorBoundaryID(fiber) {
						var parent = fiber.return;
						while (parent !== null) {
							if (isErrorBoundary(parent)) return getFiberIDUnsafe(parent);
							parent = parent.return;
						}
						return null;
					}
					function inspectElementRaw(id) {
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber == null) return null;
						var debugOwner = fiber._debugOwner;
						var stateNode = fiber.stateNode;
						var key = fiber.key;
						var memoizedProps = fiber.memoizedProps;
						var memoizedState = fiber.memoizedState;
						var dependencies = fiber.dependencies;
						var tag = fiber.tag;
						var type = fiber.type;
						var elementType = getElementTypeForFiber(fiber);
						var usesHooks = (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) && (!!memoizedState || !!dependencies);
						var showState = !usesHooks && tag !== CacheComponent;
						var typeSymbol = getTypeSymbol(type);
						var canViewSource = false;
						var context = null;
						if (tag === ClassComponent || tag === FunctionComponent || tag === IncompleteClassComponent || tag === IncompleteFunctionComponent || tag === IndeterminateComponent || tag === MemoComponent || tag === ForwardRef || tag === SimpleMemoComponent) {
							canViewSource = true;
							if (stateNode && stateNode.context != null) {
								var shouldHideContext = elementType === types_ElementTypeClass && !(type.contextTypes || type.contextType);
								if (!shouldHideContext) context = stateNode.context;
							}
						} else if ((typeSymbol === CONTEXT_NUMBER || typeSymbol === CONTEXT_SYMBOL_STRING) && !(type._context === void 0 && type.Provider === type)) {
							var consumerResolvedContext = type._context || type;
							context = consumerResolvedContext._currentValue || null;
							var _current = fiber.return;
							while (_current !== null) {
								var currentType = _current.type;
								var currentTypeSymbol = getTypeSymbol(currentType);
								if (currentTypeSymbol === PROVIDER_NUMBER || currentTypeSymbol === PROVIDER_SYMBOL_STRING) {
									var providerResolvedContext = currentType._context || currentType.context;
									if (providerResolvedContext === consumerResolvedContext) {
										context = _current.memoizedProps.value;
										break;
									}
								}
								_current = _current.return;
							}
						} else if (typeSymbol === CONSUMER_SYMBOL_STRING) {
							var _consumerResolvedContext = type._context;
							context = _consumerResolvedContext._currentValue || null;
							var _current2 = fiber.return;
							while (_current2 !== null) {
								var _currentType = _current2.type;
								var _currentTypeSymbol = getTypeSymbol(_currentType);
								if (_currentTypeSymbol === CONTEXT_SYMBOL_STRING) {
									var _providerResolvedContext = _currentType;
									if (_providerResolvedContext === _consumerResolvedContext) {
										context = _current2.memoizedProps.value;
										break;
									}
								}
								_current2 = _current2.return;
							}
						}
						var hasLegacyContext = false;
						if (context !== null) {
							hasLegacyContext = !!type.contextTypes;
							context = { value: context };
						}
						var owners = null;
						var owner = debugOwner;
						while (owner != null) if (typeof owner.tag === "number") {
							var ownerFiber = owner;
							if (owners === null) owners = [];
							owners.push(fiberToSerializedElement(ownerFiber));
							owner = ownerFiber._debugOwner;
						} else break;
						var isTimedOutSuspense = tag === SuspenseComponent && memoizedState !== null;
						var hooks = null;
						if (usesHooks) {
							var originalConsoleMethods = {};
							for (var method$1 in console) try {
								originalConsoleMethods[method$1] = console[method$1];
								console[method$1] = function() {};
							} catch (error) {}
							try {
								hooks = (0, react_debug_tools.inspectHooksOfFiber)(fiber, getDispatcherRef(renderer));
							} finally {
								for (var _method in originalConsoleMethods) try {
									console[_method] = originalConsoleMethods[_method];
								} catch (error) {}
							}
						}
						var rootType = null;
						var current = fiber;
						while (current.return !== null) current = current.return;
						var fiberRoot = current.stateNode;
						if (fiberRoot != null && fiberRoot._debugRootType !== null) rootType = fiberRoot._debugRootType;
						var errors = fiberIDToErrorsMap.get(id) || new Map();
						var warnings = fiberIDToWarningsMap.get(id) || new Map();
						var isErrored = false;
						var targetErrorBoundaryID;
						if (isErrorBoundary(fiber)) {
							var DidCapture = 128;
							isErrored = (fiber.flags & DidCapture) !== 0 || forceErrorForFiberIDs.get(id) === true;
							targetErrorBoundaryID = isErrored ? id : getNearestErrorBoundaryID(fiber);
						} else targetErrorBoundaryID = getNearestErrorBoundaryID(fiber);
						var plugins = { stylex: null };
						if (enableStyleXFeatures) {
							if (memoizedProps != null && memoizedProps.hasOwnProperty("xstyle")) plugins.stylex = getStyleXData(memoizedProps.xstyle);
						}
						var source = null;
						if (canViewSource) source = getSourceForFiber(fiber);
						return {
							id,
							canEditHooks: typeof overrideHookState === "function",
							canEditFunctionProps: typeof overrideProps === "function",
							canEditHooksAndDeletePaths: typeof overrideHookStateDeletePath === "function",
							canEditHooksAndRenamePaths: typeof overrideHookStateRenamePath === "function",
							canEditFunctionPropsDeletePaths: typeof overridePropsDeletePath === "function",
							canEditFunctionPropsRenamePaths: typeof overridePropsRenamePath === "function",
							canToggleError: supportsTogglingError && targetErrorBoundaryID != null,
							isErrored,
							targetErrorBoundaryID,
							canToggleSuspense: supportsTogglingSuspense && (!isTimedOutSuspense || forceFallbackForSuspenseIDs.has(id)),
							canViewSource,
							source,
							hasLegacyContext,
							key: key != null ? key : null,
							displayName: getDisplayNameForFiber(fiber),
							type: elementType,
							context,
							hooks,
							props: memoizedProps,
							state: showState ? memoizedState : null,
							errors: Array.from(errors.entries()),
							warnings: Array.from(warnings.entries()),
							owners,
							rootType,
							rendererPackageName: renderer.rendererPackageName,
							rendererVersion: renderer.version,
							plugins
						};
					}
					var mostRecentlyInspectedElement = null;
					var hasElementUpdatedSinceLastInspected = false;
					var currentlyInspectedPaths = {};
					function isMostRecentlyInspectedElement(id) {
						return mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id;
					}
					function isMostRecentlyInspectedElementCurrent(id) {
						return isMostRecentlyInspectedElement(id) && !hasElementUpdatedSinceLastInspected;
					}
					function mergeInspectedPaths(path) {
						var current = currentlyInspectedPaths;
						path.forEach(function(key) {
							if (!current[key]) current[key] = {};
							current = current[key];
						});
					}
					function createIsPathAllowed(key, secondaryCategory) {
						return function isPathAllowed(path) {
							switch (secondaryCategory) {
								case "hooks":
									if (path.length === 1) return true;
									if (path[path.length - 2] === "hookSource" && path[path.length - 1] === "fileName") return true;
									if (path[path.length - 1] === "subHooks" || path[path.length - 2] === "subHooks") return true;
									break;
								default: break;
							}
							var current = key === null ? currentlyInspectedPaths : currentlyInspectedPaths[key];
							if (!current) return false;
							for (var i = 0; i < path.length; i++) {
								current = current[path[i]];
								if (!current) return false;
							}
							return true;
						};
					}
					function updateSelectedElement(inspectedElement) {
						var hooks = inspectedElement.hooks;
						var id = inspectedElement.id;
						var props = inspectedElement.props;
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber == null) {
							console.warn("Could not find Fiber with id \"".concat(id, "\""));
							return;
						}
						var elementType = fiber.elementType;
						var stateNode = fiber.stateNode;
						var tag = fiber.tag;
						var type = fiber.type;
						switch (tag) {
							case ClassComponent:
							case IncompleteClassComponent:
							case IndeterminateComponent:
								global1.$r = stateNode;
								break;
							case IncompleteFunctionComponent:
							case FunctionComponent:
								global1.$r = {
									hooks,
									props,
									type
								};
								break;
							case ForwardRef:
								global1.$r = {
									hooks,
									props,
									type: type.render
								};
								break;
							case MemoComponent:
							case SimpleMemoComponent:
								global1.$r = {
									hooks,
									props,
									type: elementType != null && elementType.type != null ? elementType.type : type
								};
								break;
							default:
								global1.$r = null;
								break;
						}
					}
					function storeAsGlobal(id, path, count) {
						if (isMostRecentlyInspectedElement(id)) {
							var value1 = utils_getInObject(mostRecentlyInspectedElement, path);
							var key = "$reactTemp".concat(count);
							window[key] = value1;
							console.log(key);
							console.log(value1);
						}
					}
					function getSerializedElementValueByPath(id, path) {
						if (isMostRecentlyInspectedElement(id)) {
							var valueToCopy = utils_getInObject(mostRecentlyInspectedElement, path);
							return serializeToString(valueToCopy);
						}
					}
					function inspectElement(requestID, id, path, forceFullData) {
						if (path !== null) mergeInspectedPaths(path);
						if (isMostRecentlyInspectedElement(id) && !forceFullData) {
							if (!hasElementUpdatedSinceLastInspected) if (path !== null) {
								var secondaryCategory = null;
								if (path[0] === "hooks") secondaryCategory = "hooks";
								return {
									id,
									responseID: requestID,
									type: "hydrated-path",
									path,
									value: cleanForBridge(utils_getInObject(mostRecentlyInspectedElement, path), createIsPathAllowed(null, secondaryCategory), path)
								};
							} else return {
								id,
								responseID: requestID,
								type: "no-change"
							};
						} else currentlyInspectedPaths = {};
						hasElementUpdatedSinceLastInspected = false;
						try {
							mostRecentlyInspectedElement = inspectElementRaw(id);
						} catch (error) {
							if (error.name === "ReactDebugToolsRenderError") {
								var message = "Error rendering inspected element.";
								var stack;
								console.error(message + "\n\n", error);
								if (error.cause != null) {
									var _fiber4 = findCurrentFiberUsingSlowPathById(id);
									var componentName = _fiber4 != null ? getDisplayNameForFiber(_fiber4) : null;
									console.error("React DevTools encountered an error while trying to inspect hooks. This is most likely caused by an error in current inspected component" + (componentName != null ? ": \"".concat(componentName, "\".") : ".") + "\nThe error thrown in the component is: \n\n", error.cause);
									if (error.cause instanceof Error) {
										message = error.cause.message || message;
										stack = error.cause.stack;
									}
								}
								return {
									type: "error",
									errorType: "user",
									id,
									responseID: requestID,
									message,
									stack
								};
							}
							if (error.name === "ReactDebugToolsUnsupportedHookError") return {
								type: "error",
								errorType: "unknown-hook",
								id,
								responseID: requestID,
								message: "Unsupported hook in the react-debug-tools package: " + error.message
							};
							console.error("Error inspecting element.\n\n", error);
							return {
								type: "error",
								errorType: "uncaught",
								id,
								responseID: requestID,
								message: error.message,
								stack: error.stack
							};
						}
						if (mostRecentlyInspectedElement === null) return {
							id,
							responseID: requestID,
							type: "not-found"
						};
						updateSelectedElement(mostRecentlyInspectedElement);
						var cleanedInspectedElement = renderer_objectSpread({}, mostRecentlyInspectedElement);
						cleanedInspectedElement.context = cleanForBridge(cleanedInspectedElement.context, createIsPathAllowed("context", null));
						cleanedInspectedElement.hooks = cleanForBridge(cleanedInspectedElement.hooks, createIsPathAllowed("hooks", "hooks"));
						cleanedInspectedElement.props = cleanForBridge(cleanedInspectedElement.props, createIsPathAllowed("props", null));
						cleanedInspectedElement.state = cleanForBridge(cleanedInspectedElement.state, createIsPathAllowed("state", null));
						return {
							id,
							responseID: requestID,
							type: "full-data",
							value: cleanedInspectedElement
						};
					}
					function logElementToConsole(id) {
						var result = isMostRecentlyInspectedElementCurrent(id) ? mostRecentlyInspectedElement : inspectElementRaw(id);
						if (result === null) {
							console.warn("Could not find Fiber with id \"".concat(id, "\""));
							return;
						}
						var supportsGroup = typeof console.groupCollapsed === "function";
						if (supportsGroup) console.groupCollapsed("[Click to expand] %c<".concat(result.displayName || "Component", " />"), "color: var(--dom-tag-name-color); font-weight: normal;");
						if (result.props !== null) console.log("Props:", result.props);
						if (result.state !== null) console.log("State:", result.state);
						if (result.hooks !== null) console.log("Hooks:", result.hooks);
						var nativeNodes = findNativeNodesForFiberID(id);
						if (nativeNodes !== null) console.log("Nodes:", nativeNodes);
						if (window.chrome || /firefox/i.test(navigator.userAgent)) console.log("Right-click any value to save it as a global variable for further inspection.");
						if (supportsGroup) console.groupEnd();
					}
					function deletePath(type, id, hookID, path) {
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber !== null) {
							var instance = fiber.stateNode;
							switch (type) {
								case "context":
									path = path.slice(1);
									switch (fiber.tag) {
										case ClassComponent:
											if (path.length === 0) {} else deletePathInObject(instance.context, path);
											instance.forceUpdate();
											break;
										case FunctionComponent: break;
									}
									break;
								case "hooks":
									if (typeof overrideHookStateDeletePath === "function") overrideHookStateDeletePath(fiber, hookID, path);
									break;
								case "props":
									if (instance === null) {
										if (typeof overridePropsDeletePath === "function") overridePropsDeletePath(fiber, path);
									} else {
										fiber.pendingProps = copyWithDelete(instance.props, path);
										instance.forceUpdate();
									}
									break;
								case "state":
									deletePathInObject(instance.state, path);
									instance.forceUpdate();
									break;
							}
						}
					}
					function renamePath(type, id, hookID, oldPath, newPath) {
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber !== null) {
							var instance = fiber.stateNode;
							switch (type) {
								case "context":
									oldPath = oldPath.slice(1);
									newPath = newPath.slice(1);
									switch (fiber.tag) {
										case ClassComponent:
											if (oldPath.length === 0) {} else renamePathInObject(instance.context, oldPath, newPath);
											instance.forceUpdate();
											break;
										case FunctionComponent: break;
									}
									break;
								case "hooks":
									if (typeof overrideHookStateRenamePath === "function") overrideHookStateRenamePath(fiber, hookID, oldPath, newPath);
									break;
								case "props":
									if (instance === null) {
										if (typeof overridePropsRenamePath === "function") overridePropsRenamePath(fiber, oldPath, newPath);
									} else {
										fiber.pendingProps = copyWithRename(instance.props, oldPath, newPath);
										instance.forceUpdate();
									}
									break;
								case "state":
									renamePathInObject(instance.state, oldPath, newPath);
									instance.forceUpdate();
									break;
							}
						}
					}
					function overrideValueAtPath(type, id, hookID, path, value1) {
						var fiber = findCurrentFiberUsingSlowPathById(id);
						if (fiber !== null) {
							var instance = fiber.stateNode;
							switch (type) {
								case "context":
									path = path.slice(1);
									switch (fiber.tag) {
										case ClassComponent:
											if (path.length === 0) instance.context = value1;
											else utils_setInObject(instance.context, path, value1);
											instance.forceUpdate();
											break;
										case FunctionComponent: break;
									}
									break;
								case "hooks":
									if (typeof overrideHookState === "function") overrideHookState(fiber, hookID, path, value1);
									break;
								case "props":
									switch (fiber.tag) {
										case ClassComponent:
											fiber.pendingProps = copyWithSet(instance.props, path, value1);
											instance.forceUpdate();
											break;
										default:
											if (typeof overrideProps === "function") overrideProps(fiber, path, value1);
											break;
									}
									break;
								case "state":
									switch (fiber.tag) {
										case ClassComponent:
											utils_setInObject(instance.state, path, value1);
											instance.forceUpdate();
											break;
									}
									break;
							}
						}
					}
					var currentCommitProfilingMetadata = null;
					var displayNamesByRootID = null;
					var idToContextsMap = null;
					var initialTreeBaseDurationsMap = null;
					var initialIDToRootMap = null;
					var isProfiling = false;
					var profilingStartTime = 0;
					var recordChangeDescriptions = false;
					var rootToCommitProfilingMetadataMap = null;
					function getProfilingData() {
						var dataForRoots = [];
						if (rootToCommitProfilingMetadataMap === null) throw Error("getProfilingData() called before any profiling data was recorded");
						rootToCommitProfilingMetadataMap.forEach(function(commitProfilingMetadata, rootID) {
							var commitData = [];
							var initialTreeBaseDurations = [];
							var displayName = displayNamesByRootID !== null && displayNamesByRootID.get(rootID) || "Unknown";
							if (initialTreeBaseDurationsMap != null) initialTreeBaseDurationsMap.forEach(function(treeBaseDuration, id) {
								if (initialIDToRootMap != null && initialIDToRootMap.get(id) === rootID) initialTreeBaseDurations.push([id, treeBaseDuration]);
							});
							commitProfilingMetadata.forEach(function(commitProfilingData, commitIndex) {
								var changeDescriptions = commitProfilingData.changeDescriptions;
								var durations = commitProfilingData.durations;
								var effectDuration = commitProfilingData.effectDuration;
								var maxActualDuration = commitProfilingData.maxActualDuration;
								var passiveEffectDuration = commitProfilingData.passiveEffectDuration;
								var priorityLevel = commitProfilingData.priorityLevel;
								var commitTime = commitProfilingData.commitTime;
								var updaters = commitProfilingData.updaters;
								var fiberActualDurations = [];
								var fiberSelfDurations = [];
								for (var i = 0; i < durations.length; i += 3) {
									var fiberID = durations[i];
									fiberActualDurations.push([fiberID, durations[i + 1]]);
									fiberSelfDurations.push([fiberID, durations[i + 2]]);
								}
								commitData.push({
									changeDescriptions: changeDescriptions !== null ? Array.from(changeDescriptions.entries()) : null,
									duration: maxActualDuration,
									effectDuration,
									fiberActualDurations,
									fiberSelfDurations,
									passiveEffectDuration,
									priorityLevel,
									timestamp: commitTime,
									updaters
								});
							});
							dataForRoots.push({
								commitData,
								displayName,
								initialTreeBaseDurations,
								rootID
							});
						});
						var timelineData = null;
						if (typeof getTimelineData === "function") {
							var currentTimelineData = getTimelineData();
							if (currentTimelineData) {
								var batchUIDToMeasuresMap = currentTimelineData.batchUIDToMeasuresMap;
								var internalModuleSourceToRanges = currentTimelineData.internalModuleSourceToRanges;
								var laneToLabelMap = currentTimelineData.laneToLabelMap;
								var laneToReactMeasureMap = currentTimelineData.laneToReactMeasureMap;
								var rest = _objectWithoutProperties(currentTimelineData, [
									"batchUIDToMeasuresMap",
									"internalModuleSourceToRanges",
									"laneToLabelMap",
									"laneToReactMeasureMap"
								]);
								timelineData = renderer_objectSpread(renderer_objectSpread({}, rest), {}, {
									batchUIDToMeasuresKeyValueArray: Array.from(batchUIDToMeasuresMap.entries()),
									internalModuleSourceToRanges: Array.from(internalModuleSourceToRanges.entries()),
									laneToLabelKeyValueArray: Array.from(laneToLabelMap.entries()),
									laneToReactMeasureKeyValueArray: Array.from(laneToReactMeasureMap.entries())
								});
							}
						}
						return {
							dataForRoots,
							rendererID,
							timelineData
						};
					}
					function startProfiling(shouldRecordChangeDescriptions) {
						if (isProfiling) return;
						recordChangeDescriptions = shouldRecordChangeDescriptions;
						displayNamesByRootID = new Map();
						initialTreeBaseDurationsMap = new Map(idToTreeBaseDurationMap);
						initialIDToRootMap = new Map(idToRootMap);
						idToContextsMap = new Map();
						hook$1.getFiberRoots(rendererID).forEach(function(root) {
							var rootID = getFiberIDThrows(root.current);
							displayNamesByRootID.set(rootID, getDisplayNameForRoot(root.current));
							if (shouldRecordChangeDescriptions) crawlToInitializeContextsMap(root.current);
						});
						isProfiling = true;
						profilingStartTime = renderer_getCurrentTime();
						rootToCommitProfilingMetadataMap = new Map();
						if (toggleProfilingStatus !== null) toggleProfilingStatus(true);
					}
					function stopProfiling() {
						isProfiling = false;
						recordChangeDescriptions = false;
						if (toggleProfilingStatus !== null) toggleProfilingStatus(false);
					}
					if (sessionStorageGetItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY) === "true") startProfiling(sessionStorageGetItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY) === "true");
					function shouldErrorFiberAlwaysNull() {
						return null;
					}
					var forceErrorForFiberIDs = new Map();
					function shouldErrorFiberAccordingToMap(fiber) {
						if (typeof setErrorHandler !== "function") throw new Error("Expected overrideError() to not get called for earlier React versions.");
						var id = getFiberIDUnsafe(fiber);
						if (id === null) return null;
						var status = null;
						if (forceErrorForFiberIDs.has(id)) {
							status = forceErrorForFiberIDs.get(id);
							if (status === false) {
								forceErrorForFiberIDs.delete(id);
								if (forceErrorForFiberIDs.size === 0) setErrorHandler(shouldErrorFiberAlwaysNull);
							}
						}
						return status;
					}
					function overrideError(id, forceError) {
						if (typeof setErrorHandler !== "function" || typeof scheduleUpdate !== "function") throw new Error("Expected overrideError() to not get called for earlier React versions.");
						forceErrorForFiberIDs.set(id, forceError);
						if (forceErrorForFiberIDs.size === 1) setErrorHandler(shouldErrorFiberAccordingToMap);
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber != null) scheduleUpdate(fiber);
					}
					function shouldSuspendFiberAlwaysFalse() {
						return false;
					}
					var forceFallbackForSuspenseIDs = new Set();
					function shouldSuspendFiberAccordingToSet(fiber) {
						var maybeID = getFiberIDUnsafe(fiber);
						return maybeID !== null && forceFallbackForSuspenseIDs.has(maybeID);
					}
					function overrideSuspense(id, forceFallback) {
						if (typeof setSuspenseHandler !== "function" || typeof scheduleUpdate !== "function") throw new Error("Expected overrideSuspense() to not get called for earlier React versions.");
						if (forceFallback) {
							forceFallbackForSuspenseIDs.add(id);
							if (forceFallbackForSuspenseIDs.size === 1) setSuspenseHandler(shouldSuspendFiberAccordingToSet);
						} else {
							forceFallbackForSuspenseIDs.delete(id);
							if (forceFallbackForSuspenseIDs.size === 0) setSuspenseHandler(shouldSuspendFiberAlwaysFalse);
						}
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber != null) scheduleUpdate(fiber);
					}
					var trackedPath = null;
					var trackedPathMatchFiber = null;
					var trackedPathMatchDepth = -1;
					var mightBeOnTrackedPath = false;
					function setTrackedPath(path) {
						if (path === null) {
							trackedPathMatchFiber = null;
							trackedPathMatchDepth = -1;
							mightBeOnTrackedPath = false;
						}
						trackedPath = path;
					}
					function updateTrackedPathStateBeforeMount(fiber) {
						if (trackedPath === null || !mightBeOnTrackedPath) return false;
						var returnFiber = fiber.return;
						var returnAlternate = returnFiber !== null ? returnFiber.alternate : null;
						if (trackedPathMatchFiber === returnFiber || trackedPathMatchFiber === returnAlternate && returnAlternate !== null) {
							var actualFrame = getPathFrame(fiber);
							var expectedFrame = trackedPath[trackedPathMatchDepth + 1];
							if (expectedFrame === void 0) throw new Error("Expected to see a frame at the next depth.");
							if (actualFrame.index === expectedFrame.index && actualFrame.key === expectedFrame.key && actualFrame.displayName === expectedFrame.displayName) {
								trackedPathMatchFiber = fiber;
								trackedPathMatchDepth++;
								if (trackedPathMatchDepth === trackedPath.length - 1) mightBeOnTrackedPath = false;
								else mightBeOnTrackedPath = true;
								return false;
							}
						}
						mightBeOnTrackedPath = false;
						return true;
					}
					function updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath) {
						mightBeOnTrackedPath = mightSiblingsBeOnTrackedPath;
					}
					var rootPseudoKeys = new Map();
					var rootDisplayNameCounter = new Map();
					function setRootPseudoKey(id, fiber) {
						var name = getDisplayNameForRoot(fiber);
						var counter = rootDisplayNameCounter.get(name) || 0;
						rootDisplayNameCounter.set(name, counter + 1);
						var pseudoKey = "".concat(name, ":").concat(counter);
						rootPseudoKeys.set(id, pseudoKey);
					}
					function removeRootPseudoKey(id) {
						var pseudoKey = rootPseudoKeys.get(id);
						if (pseudoKey === void 0) throw new Error("Expected root pseudo key to be known.");
						var name = pseudoKey.slice(0, pseudoKey.lastIndexOf(":"));
						var counter = rootDisplayNameCounter.get(name);
						if (counter === void 0) throw new Error("Expected counter to be known.");
						if (counter > 1) rootDisplayNameCounter.set(name, counter - 1);
						else rootDisplayNameCounter.delete(name);
						rootPseudoKeys.delete(id);
					}
					function getDisplayNameForRoot(fiber) {
						var preferredDisplayName = null;
						var fallbackDisplayName = null;
						var child = fiber.child;
						for (var i = 0; i < 3; i++) {
							if (child === null) break;
							var displayName = getDisplayNameForFiber(child);
							if (displayName !== null) {
								if (typeof child.type === "function") preferredDisplayName = displayName;
								else if (fallbackDisplayName === null) fallbackDisplayName = displayName;
							}
							if (preferredDisplayName !== null) break;
							child = child.child;
						}
						return preferredDisplayName || fallbackDisplayName || "Anonymous";
					}
					function getPathFrame(fiber) {
						var key = fiber.key;
						var displayName = getDisplayNameForFiber(fiber);
						var index = fiber.index;
						switch (fiber.tag) {
							case HostRoot:
								var id = getFiberIDThrows(fiber);
								var pseudoKey = rootPseudoKeys.get(id);
								if (pseudoKey === void 0) throw new Error("Expected mounted root to have known pseudo key.");
								displayName = pseudoKey;
								break;
							case HostComponent:
								displayName = fiber.type;
								break;
							default: break;
						}
						return {
							displayName,
							key,
							index
						};
					}
					function getPathForElement(id) {
						var fiber = idToArbitraryFiberMap.get(id);
						if (fiber == null) return null;
						var keyPath = [];
						while (fiber !== null) {
							keyPath.push(getPathFrame(fiber));
							fiber = fiber.return;
						}
						keyPath.reverse();
						return keyPath;
					}
					function getBestMatchForTrackedPath() {
						if (trackedPath === null) return null;
						if (trackedPathMatchFiber === null) return null;
						var fiber = trackedPathMatchFiber;
						while (fiber !== null && shouldFilterFiber(fiber)) fiber = fiber.return;
						if (fiber === null) return null;
						return {
							id: getFiberIDThrows(fiber),
							isFullMatch: trackedPathMatchDepth === trackedPath.length - 1
						};
					}
					var formatPriorityLevel = function formatPriorityLevel$1(priorityLevel) {
						if (priorityLevel == null) return "Unknown";
						switch (priorityLevel) {
							case ImmediatePriority: return "Immediate";
							case UserBlockingPriority: return "User-Blocking";
							case NormalPriority: return "Normal";
							case LowPriority: return "Low";
							case IdlePriority: return "Idle";
							case NoPriority:
							default: return "Unknown";
						}
					};
					function setTraceUpdatesEnabled(isEnabled$1) {
						traceUpdatesEnabled = isEnabled$1;
					}
					function hasFiberWithId(id) {
						return idToArbitraryFiberMap.has(id);
					}
					function getComponentStackForFiber(fiber) {
						var componentStack = fiberToComponentStackMap.get(fiber);
						if (componentStack == null) {
							var dispatcherRef = getDispatcherRef(renderer);
							if (dispatcherRef == null) return null;
							componentStack = getStackByFiberInDevAndProd(ReactTypeOfWork, fiber, dispatcherRef);
							fiberToComponentStackMap.set(fiber, componentStack);
						}
						return componentStack;
					}
					function getSourceForFiber(fiber) {
						var componentStack = getComponentStackForFiber(fiber);
						if (componentStack == null) return null;
						return parseSourceFromComponentStack(componentStack);
					}
					return {
						cleanup,
						clearErrorsAndWarnings,
						clearErrorsForFiberID,
						clearWarningsForFiberID,
						getSerializedElementValueByPath,
						deletePath,
						findNativeNodesForFiberID,
						flushInitialOperations,
						getBestMatchForTrackedPath,
						getComponentStackForFiber,
						getSourceForFiber,
						getDisplayNameForFiberID,
						getFiberForNative,
						getFiberIDForNative,
						getInstanceAndStyle,
						getOwnersList,
						getPathForElement,
						getProfilingData,
						handleCommitFiberRoot,
						handleCommitFiberUnmount,
						handlePostCommitFiberRoot,
						hasFiberWithId,
						inspectElement,
						logElementToConsole,
						patchConsoleForStrictMode: patchForStrictMode,
						prepareViewAttributeSource,
						prepareViewElementSource,
						overrideError,
						overrideSuspense,
						overrideValueAtPath,
						renamePath,
						renderer,
						setTraceUpdatesEnabled,
						setTrackedPath,
						startProfiling,
						stopProfiling,
						storeAsGlobal,
						unpatchConsoleForStrictMode: unpatchForStrictMode,
						updateComponentFilters
					};
				}
				function console_toConsumableArray(arr) {
					return console_arrayWithoutHoles(arr) || console_iterableToArray(arr) || console_unsupportedIterableToArray(arr) || console_nonIterableSpread();
				}
				function console_nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function console_iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function console_arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return console_arrayLikeToArray(arr);
				}
				function console_createForOfIteratorHelper(o, allowArrayLike) {
					var it;
					if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
						if (Array.isArray(o) || (it = console_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
							if (it) o = it;
							var i = 0;
							var F = function F$1() {};
							return {
								s: F,
								n: function n() {
									if (i >= o.length) return { done: true };
									return {
										done: false,
										value: o[i++]
									};
								},
								e: function e(_e) {
									throw _e;
								},
								f: F
							};
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					}
					var normalCompletion = true;
					var didErr = false;
					var err;
					return {
						s: function s() {
							it = o[Symbol.iterator]();
						},
						n: function n() {
							var step = it.next();
							normalCompletion = step.done;
							return step;
						},
						e: function e(_e2) {
							didErr = true;
							err = _e2;
						},
						f: function f() {
							try {
								if (!normalCompletion && it.return != null) it.return();
							} finally {
								if (didErr) throw err;
							}
						}
					};
				}
				function console_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return console_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return console_arrayLikeToArray(o, minLen);
				}
				function console_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var OVERRIDE_CONSOLE_METHODS = [
					"error",
					"trace",
					"warn"
				];
				var PREFIX_REGEX = /\s{4}(in|at)\s{1}/;
				var ROW_COLUMN_NUMBER_REGEX = /:\d+:\d+(\n|$)/;
				function isStringComponentStack(text) {
					return PREFIX_REGEX.test(text) || ROW_COLUMN_NUMBER_REGEX.test(text);
				}
				var STYLE_DIRECTIVE_REGEX = /^%c/;
				function isStrictModeOverride(args) {
					return args.length >= 2 && args[0] === ANSI_STYLE_DIMMING_TEMPLATE;
				}
				function restorePotentiallyModifiedArgs(args) {
					if (!isStrictModeOverride(args)) return args.slice();
					return args.slice(1);
				}
				var injectedRenderers = new Map();
				var targetConsole = console;
				var targetConsoleMethods = {};
				for (var method in console) targetConsoleMethods[method] = console[method];
				var unpatchFn = null;
				function dangerous_setTargetConsoleForTesting(targetConsoleForTesting) {
					targetConsole = targetConsoleForTesting;
					targetConsoleMethods = {};
					for (var _method in targetConsole) targetConsoleMethods[_method] = console[_method];
				}
				function registerRenderer(renderer, onErrorOrWarning) {
					var currentDispatcherRef = renderer.currentDispatcherRef;
					var getCurrentFiber = renderer.getCurrentFiber;
					var findFiberByHostInstance = renderer.findFiberByHostInstance;
					var version = renderer.version;
					if (typeof findFiberByHostInstance !== "function") return;
					if (currentDispatcherRef != null && typeof getCurrentFiber === "function") {
						var _getInternalReactCons = getInternalReactConstants(version);
						var ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork;
						injectedRenderers.set(renderer, {
							currentDispatcherRef,
							getCurrentFiber,
							workTagMap: ReactTypeOfWork,
							onErrorOrWarning
						});
					}
				}
				var consoleSettingsRef = {
					appendComponentStack: false,
					breakOnConsoleErrors: false,
					showInlineWarningsAndErrors: false,
					hideConsoleLogsInStrictMode: false,
					browserTheme: "dark"
				};
				function patch(_ref) {
					var appendComponentStack = _ref.appendComponentStack;
					var breakOnConsoleErrors = _ref.breakOnConsoleErrors;
					var showInlineWarningsAndErrors = _ref.showInlineWarningsAndErrors;
					var hideConsoleLogsInStrictMode = _ref.hideConsoleLogsInStrictMode;
					var browserTheme = _ref.browserTheme;
					consoleSettingsRef.appendComponentStack = appendComponentStack;
					consoleSettingsRef.breakOnConsoleErrors = breakOnConsoleErrors;
					consoleSettingsRef.showInlineWarningsAndErrors = showInlineWarningsAndErrors;
					consoleSettingsRef.hideConsoleLogsInStrictMode = hideConsoleLogsInStrictMode;
					consoleSettingsRef.browserTheme = browserTheme;
					if (appendComponentStack || breakOnConsoleErrors || showInlineWarningsAndErrors) {
						if (unpatchFn !== null) return;
						var originalConsoleMethods = {};
						unpatchFn = function unpatchFn$1() {
							for (var _method2 in originalConsoleMethods) try {
								targetConsole[_method2] = originalConsoleMethods[_method2];
							} catch (error) {}
						};
						OVERRIDE_CONSOLE_METHODS.forEach(function(method$1) {
							try {
								var originalMethod = originalConsoleMethods[method$1] = targetConsole[method$1].__REACT_DEVTOOLS_ORIGINAL_METHOD__ ? targetConsole[method$1].__REACT_DEVTOOLS_ORIGINAL_METHOD__ : targetConsole[method$1];
								var overrideMethod = function overrideMethod$1() {
									var shouldAppendWarningStack = false;
									for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
									if (method$1 !== "log") {
										if (consoleSettingsRef.appendComponentStack) {
											var lastArg = args.length > 0 ? args[args.length - 1] : null;
											var alreadyHasComponentStack = typeof lastArg === "string" && isStringComponentStack(lastArg);
											shouldAppendWarningStack = !alreadyHasComponentStack;
										}
									}
									var shouldShowInlineWarningsAndErrors = consoleSettingsRef.showInlineWarningsAndErrors && (method$1 === "error" || method$1 === "warn");
									var _iterator = console_createForOfIteratorHelper(injectedRenderers.values());
									var _step;
									try {
										for (_iterator.s(); !(_step = _iterator.n()).done;) {
											var renderer = _step.value;
											var currentDispatcherRef = getDispatcherRef(renderer);
											var getCurrentFiber = renderer.getCurrentFiber;
											var onErrorOrWarning = renderer.onErrorOrWarning;
											var workTagMap = renderer.workTagMap;
											var current = getCurrentFiber();
											if (current != null) try {
												if (shouldShowInlineWarningsAndErrors) {
													if (typeof onErrorOrWarning === "function") onErrorOrWarning(current, method$1, restorePotentiallyModifiedArgs(args));
												}
												if (shouldAppendWarningStack && !supportsNativeConsoleTasks(current)) {
													var componentStack = getStackByFiberInDevAndProd(workTagMap, current, currentDispatcherRef);
													if (componentStack !== "") if (isStrictModeOverride(args)) {
														args[0] = ANSI_STYLE_DIMMING_TEMPLATE_WITH_COMPONENT_STACK;
														args.push(componentStack);
													} else args.push(componentStack);
												}
											} catch (error) {
												setTimeout(function() {
													throw error;
												}, 0);
											} finally {
												break;
											}
										}
									} catch (err) {
										_iterator.e(err);
									} finally {
										_iterator.f();
									}
									if (consoleSettingsRef.breakOnConsoleErrors) debugger;
									originalMethod.apply(void 0, args);
								};
								overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = originalMethod;
								originalMethod.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = overrideMethod;
								targetConsole[method$1] = overrideMethod;
							} catch (error) {}
						});
					} else unpatch();
				}
				function unpatch() {
					if (unpatchFn !== null) {
						unpatchFn();
						unpatchFn = null;
					}
				}
				var unpatchForStrictModeFn = null;
				function patchForStrictMode() {
					var overrideConsoleMethods = [
						"error",
						"group",
						"groupCollapsed",
						"info",
						"log",
						"trace",
						"warn"
					];
					if (unpatchForStrictModeFn !== null) return;
					var originalConsoleMethods = {};
					unpatchForStrictModeFn = function unpatchForStrictModeFn$1() {
						for (var _method3 in originalConsoleMethods) try {
							targetConsole[_method3] = originalConsoleMethods[_method3];
						} catch (error) {}
					};
					overrideConsoleMethods.forEach(function(method$1) {
						try {
							var originalMethod = originalConsoleMethods[method$1] = targetConsole[method$1].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ ? targetConsole[method$1].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ : targetConsole[method$1];
							var overrideMethod = function overrideMethod$1() {
								if (!consoleSettingsRef.hideConsoleLogsInStrictMode) {
									for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
									originalMethod.apply(void 0, [ANSI_STYLE_DIMMING_TEMPLATE].concat(console_toConsumableArray(formatConsoleArguments.apply(void 0, args))));
								}
							};
							overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = originalMethod;
							originalMethod.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = overrideMethod;
							targetConsole[method$1] = overrideMethod;
						} catch (error) {}
					});
				}
				function unpatchForStrictMode() {
					if (unpatchForStrictModeFn !== null) {
						unpatchForStrictModeFn();
						unpatchForStrictModeFn = null;
					}
				}
				function patchConsoleUsingWindowValues() {
					var _castBool;
					var _castBool2;
					var _castBool3;
					var _castBool4;
					var _castBrowserTheme;
					var appendComponentStack = (_castBool = castBool(window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__)) !== null && _castBool !== void 0 ? _castBool : true;
					var breakOnConsoleErrors = (_castBool2 = castBool(window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__)) !== null && _castBool2 !== void 0 ? _castBool2 : false;
					var showInlineWarningsAndErrors = (_castBool3 = castBool(window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__)) !== null && _castBool3 !== void 0 ? _castBool3 : true;
					var hideConsoleLogsInStrictMode = (_castBool4 = castBool(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__)) !== null && _castBool4 !== void 0 ? _castBool4 : false;
					var browserTheme = (_castBrowserTheme = castBrowserTheme(window.__REACT_DEVTOOLS_BROWSER_THEME__)) !== null && _castBrowserTheme !== void 0 ? _castBrowserTheme : "dark";
					patch({
						appendComponentStack,
						breakOnConsoleErrors,
						showInlineWarningsAndErrors,
						hideConsoleLogsInStrictMode,
						browserTheme
					});
				}
				function writeConsolePatchSettingsToWindow(settings) {
					window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = settings.appendComponentStack;
					window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ = settings.breakOnConsoleErrors;
					window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ = settings.showInlineWarningsAndErrors;
					window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ = settings.hideConsoleLogsInStrictMode;
					window.__REACT_DEVTOOLS_BROWSER_THEME__ = settings.browserTheme;
				}
				function installConsoleFunctionsToWindow() {
					window.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__ = {
						patchConsoleUsingWindowValues,
						registerRendererWithConsole: registerRenderer
					};
				}
				function bridge_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") bridge_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else bridge_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return bridge_typeof(obj);
				}
				function bridge_toConsumableArray(arr) {
					return bridge_arrayWithoutHoles(arr) || bridge_iterableToArray(arr) || bridge_unsupportedIterableToArray(arr) || bridge_nonIterableSpread();
				}
				function bridge_nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function bridge_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return bridge_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bridge_arrayLikeToArray(o, minLen);
				}
				function bridge_iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function bridge_arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return bridge_arrayLikeToArray(arr);
				}
				function bridge_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function bridge_classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
				}
				function bridge_defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				function bridge_createClass(Constructor, protoProps, staticProps) {
					if (protoProps) bridge_defineProperties(Constructor.prototype, protoProps);
					if (staticProps) bridge_defineProperties(Constructor, staticProps);
					return Constructor;
				}
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
					subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
						value: subClass,
						writable: true,
						configurable: true
					} });
					if (superClass) _setPrototypeOf(subClass, superClass);
				}
				function _setPrototypeOf(o, p) {
					_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf$1(o$1, p$1) {
						o$1.__proto__ = p$1;
						return o$1;
					};
					return _setPrototypeOf(o, p);
				}
				function _createSuper(Derived) {
					var hasNativeReflectConstruct = _isNativeReflectConstruct();
					return function _createSuperInternal() {
						var Super = _getPrototypeOf(Derived);
						var result;
						if (hasNativeReflectConstruct) {
							var NewTarget = _getPrototypeOf(this).constructor;
							result = Reflect.construct(Super, arguments, NewTarget);
						} else result = Super.apply(this, arguments);
						return _possibleConstructorReturn(this, result);
					};
				}
				function _possibleConstructorReturn(self1, call) {
					if (call && (bridge_typeof(call) === "object" || typeof call === "function")) return call;
					return _assertThisInitialized(self1);
				}
				function _assertThisInitialized(self1) {
					if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return self1;
				}
				function _isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct) return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;
					try {
						Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
						return true;
					} catch (e) {
						return false;
					}
				}
				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf$1(o$1) {
						return o$1.__proto__ || Object.getPrototypeOf(o$1);
					};
					return _getPrototypeOf(o);
				}
				function bridge_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var BATCH_DURATION = 100;
				var BRIDGE_PROTOCOL = [
					{
						version: 0,
						minNpmVersion: "\"<4.11.0\"",
						maxNpmVersion: "\"<4.11.0\""
					},
					{
						version: 1,
						minNpmVersion: "4.13.0",
						maxNpmVersion: "4.21.0"
					},
					{
						version: 2,
						minNpmVersion: "4.22.0",
						maxNpmVersion: null
					}
				];
				var currentBridgeProtocol = BRIDGE_PROTOCOL[BRIDGE_PROTOCOL.length - 1];
				var Bridge = /* @__PURE__ */ function(_EventEmitter) {
					_inherits(Bridge$1, _EventEmitter);
					var _super = _createSuper(Bridge$1);
					function Bridge$1(wall) {
						var _this;
						bridge_classCallCheck(this, Bridge$1);
						_this = _super.call(this);
						bridge_defineProperty(_assertThisInitialized(_this), "_isShutdown", false);
						bridge_defineProperty(_assertThisInitialized(_this), "_messageQueue", []);
						bridge_defineProperty(_assertThisInitialized(_this), "_timeoutID", null);
						bridge_defineProperty(_assertThisInitialized(_this), "_wallUnlisten", null);
						bridge_defineProperty(_assertThisInitialized(_this), "_flush", function() {
							if (_this._timeoutID !== null) {
								clearTimeout(_this._timeoutID);
								_this._timeoutID = null;
							}
							if (_this._messageQueue.length) {
								for (var i = 0; i < _this._messageQueue.length; i += 2) {
									var _this$_wall;
									(_this$_wall = _this._wall).send.apply(_this$_wall, [_this._messageQueue[i]].concat(bridge_toConsumableArray(_this._messageQueue[i + 1])));
								}
								_this._messageQueue.length = 0;
								_this._timeoutID = setTimeout(_this._flush, BATCH_DURATION);
							}
						});
						bridge_defineProperty(_assertThisInitialized(_this), "overrideValueAtPath", function(_ref) {
							var id = _ref.id;
							var path = _ref.path;
							var rendererID = _ref.rendererID;
							var type = _ref.type;
							var value1 = _ref.value;
							switch (type) {
								case "context":
									_this.send("overrideContext", {
										id,
										path,
										rendererID,
										wasForwarded: true,
										value: value1
									});
									break;
								case "hooks":
									_this.send("overrideHookState", {
										id,
										path,
										rendererID,
										wasForwarded: true,
										value: value1
									});
									break;
								case "props":
									_this.send("overrideProps", {
										id,
										path,
										rendererID,
										wasForwarded: true,
										value: value1
									});
									break;
								case "state":
									_this.send("overrideState", {
										id,
										path,
										rendererID,
										wasForwarded: true,
										value: value1
									});
									break;
							}
						});
						_this._wall = wall;
						_this._wallUnlisten = wall.listen(function(message) {
							if (message && message.event) _assertThisInitialized(_this).emit(message.event, message.payload);
						}) || null;
						_this.addListener("overrideValueAtPath", _this.overrideValueAtPath);
						return _this;
					}
					__name(Bridge$1, "Bridge");
					bridge_createClass(Bridge$1, [
						{
							key: "send",
							value: function send(event) {
								if (this._isShutdown) {
									console.warn("Cannot send message \"".concat(event, "\" through a Bridge that has been shutdown."));
									return;
								}
								for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) payload[_key - 1] = arguments[_key];
								this._messageQueue.push(event, payload);
								if (!this._timeoutID) this._timeoutID = setTimeout(this._flush, 0);
							}
						},
						{
							key: "shutdown",
							value: function shutdown() {
								if (this._isShutdown) {
									console.warn("Bridge was already shutdown.");
									return;
								}
								this.emit("shutdown");
								this.send("shutdown");
								this._isShutdown = true;
								this.addListener = function() {};
								this.emit = function() {};
								this.removeAllListeners();
								var wallUnlisten = this._wallUnlisten;
								if (wallUnlisten) wallUnlisten();
								do
									this._flush();
								while (this._messageQueue.length);
								if (this._timeoutID !== null) {
									clearTimeout(this._timeoutID);
									this._timeoutID = null;
								}
							}
						},
						{
							key: "wall",
							get: function get() {
								return this._wall;
							}
						}
					]);
					return Bridge$1;
				}(EventEmitter);
				var src_bridge = Bridge;
				function agent_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") agent_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else agent_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return agent_typeof(obj);
				}
				function agent_classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
				}
				function agent_defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				function agent_createClass(Constructor, protoProps, staticProps) {
					if (protoProps) agent_defineProperties(Constructor.prototype, protoProps);
					if (staticProps) agent_defineProperties(Constructor, staticProps);
					return Constructor;
				}
				function agent_inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
					subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
						value: subClass,
						writable: true,
						configurable: true
					} });
					if (superClass) agent_setPrototypeOf(subClass, superClass);
				}
				function agent_setPrototypeOf(o, p) {
					agent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf$1(o$1, p$1) {
						o$1.__proto__ = p$1;
						return o$1;
					};
					return agent_setPrototypeOf(o, p);
				}
				function agent_createSuper(Derived) {
					var hasNativeReflectConstruct = agent_isNativeReflectConstruct();
					return function _createSuperInternal() {
						var Super = agent_getPrototypeOf(Derived);
						var result;
						if (hasNativeReflectConstruct) {
							var NewTarget = agent_getPrototypeOf(this).constructor;
							result = Reflect.construct(Super, arguments, NewTarget);
						} else result = Super.apply(this, arguments);
						return agent_possibleConstructorReturn(this, result);
					};
				}
				function agent_possibleConstructorReturn(self1, call) {
					if (call && (agent_typeof(call) === "object" || typeof call === "function")) return call;
					return agent_assertThisInitialized(self1);
				}
				function agent_assertThisInitialized(self1) {
					if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return self1;
				}
				function agent_isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct) return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;
					try {
						Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
						return true;
					} catch (e) {
						return false;
					}
				}
				function agent_getPrototypeOf(o) {
					agent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf$1(o$1) {
						return o$1.__proto__ || Object.getPrototypeOf(o$1);
					};
					return agent_getPrototypeOf(o);
				}
				function agent_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ var debug = function debug$1(methodName) {
					if (__DEBUG__) {
						var _console;
						for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
						(_console = console).log.apply(_console, [
							"%cAgent %c".concat(methodName),
							"color: purple; font-weight: bold;",
							"font-weight: bold;"
						].concat(args));
					}
				};
				var Agent = /* @__PURE__ */ function(_EventEmitter) {
					agent_inherits(Agent$1, _EventEmitter);
					var _super = agent_createSuper(Agent$1);
					function Agent$1(bridge) {
						var _this;
						agent_classCallCheck(this, Agent$1);
						_this = _super.call(this);
						agent_defineProperty(agent_assertThisInitialized(_this), "_isProfiling", false);
						agent_defineProperty(agent_assertThisInitialized(_this), "_recordChangeDescriptions", false);
						agent_defineProperty(agent_assertThisInitialized(_this), "_rendererInterfaces", {});
						agent_defineProperty(agent_assertThisInitialized(_this), "_persistedSelection", null);
						agent_defineProperty(agent_assertThisInitialized(_this), "_persistedSelectionMatch", null);
						agent_defineProperty(agent_assertThisInitialized(_this), "_traceUpdatesEnabled", false);
						agent_defineProperty(agent_assertThisInitialized(_this), "clearErrorsAndWarnings", function(_ref) {
							var rendererID = _ref.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\""));
							else renderer.clearErrorsAndWarnings();
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "clearErrorsForFiberID", function(_ref2) {
							var id = _ref2.id;
							var rendererID = _ref2.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\""));
							else renderer.clearErrorsForFiberID(id);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "clearWarningsForFiberID", function(_ref3) {
							var id = _ref3.id;
							var rendererID = _ref3.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\""));
							else renderer.clearWarningsForFiberID(id);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "copyElementPath", function(_ref4) {
							var id = _ref4.id;
							var path = _ref4.path;
							var rendererID = _ref4.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else {
								var value1 = renderer.getSerializedElementValueByPath(id, path);
								if (value1 != null) _this._bridge.send("saveToClipboard", value1);
								else console.warn("Unable to obtain serialized value for element \"".concat(id, "\""));
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "deletePath", function(_ref5) {
							var hookID = _ref5.hookID;
							var id = _ref5.id;
							var path = _ref5.path;
							var rendererID = _ref5.rendererID;
							var type = _ref5.type;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.deletePath(type, id, hookID, path);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "getBackendVersion", function() {
							var version = "5.3.1-ccb20cb88b";
							if (version) _this._bridge.send("backendVersion", version);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "getBridgeProtocol", function() {
							_this._bridge.send("bridgeProtocol", currentBridgeProtocol);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "getProfilingData", function(_ref6) {
							var rendererID = _ref6.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\""));
							_this._bridge.send("profilingData", renderer.getProfilingData());
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "getProfilingStatus", function() {
							_this._bridge.send("profilingStatus", _this._isProfiling);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "getOwnersList", function(_ref7) {
							var id = _ref7.id;
							var rendererID = _ref7.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else {
								var owners = renderer.getOwnersList(id);
								_this._bridge.send("ownersList", {
									id,
									owners
								});
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "inspectElement", function(_ref8) {
							var forceFullData = _ref8.forceFullData;
							var id = _ref8.id;
							var path = _ref8.path;
							var rendererID = _ref8.rendererID;
							var requestID = _ref8.requestID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else {
								_this._bridge.send("inspectedElement", renderer.inspectElement(requestID, id, path, forceFullData));
								if (_this._persistedSelectionMatch === null || _this._persistedSelectionMatch.id !== id) {
									_this._persistedSelection = null;
									_this._persistedSelectionMatch = null;
									renderer.setTrackedPath(null);
									_this._throttledPersistSelection(rendererID, id);
								}
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "logElementToConsole", function(_ref9) {
							var id = _ref9.id;
							var rendererID = _ref9.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.logElementToConsole(id);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideError", function(_ref10) {
							var id = _ref10.id;
							var rendererID = _ref10.rendererID;
							var forceError = _ref10.forceError;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.overrideError(id, forceError);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideSuspense", function(_ref11) {
							var id = _ref11.id;
							var rendererID = _ref11.rendererID;
							var forceFallback = _ref11.forceFallback;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.overrideSuspense(id, forceFallback);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideValueAtPath", function(_ref12) {
							var hookID = _ref12.hookID;
							var id = _ref12.id;
							var path = _ref12.path;
							var rendererID = _ref12.rendererID;
							var type = _ref12.type;
							var value1 = _ref12.value;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.overrideValueAtPath(type, id, hookID, path, value1);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideContext", function(_ref13) {
							var id = _ref13.id;
							var path = _ref13.path;
							var rendererID = _ref13.rendererID;
							var wasForwarded = _ref13.wasForwarded;
							var value1 = _ref13.value;
							if (!wasForwarded) _this.overrideValueAtPath({
								id,
								path,
								rendererID,
								type: "context",
								value: value1
							});
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideHookState", function(_ref14) {
							var id = _ref14.id;
							var hookID = _ref14.hookID;
							var path = _ref14.path;
							var rendererID = _ref14.rendererID;
							var wasForwarded = _ref14.wasForwarded;
							var value1 = _ref14.value;
							if (!wasForwarded) _this.overrideValueAtPath({
								id,
								path,
								rendererID,
								type: "hooks",
								value: value1
							});
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideProps", function(_ref15) {
							var id = _ref15.id;
							var path = _ref15.path;
							var rendererID = _ref15.rendererID;
							var wasForwarded = _ref15.wasForwarded;
							var value1 = _ref15.value;
							if (!wasForwarded) _this.overrideValueAtPath({
								id,
								path,
								rendererID,
								type: "props",
								value: value1
							});
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "overrideState", function(_ref16) {
							var id = _ref16.id;
							var path = _ref16.path;
							var rendererID = _ref16.rendererID;
							var wasForwarded = _ref16.wasForwarded;
							var value1 = _ref16.value;
							if (!wasForwarded) _this.overrideValueAtPath({
								id,
								path,
								rendererID,
								type: "state",
								value: value1
							});
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "reloadAndProfile", function(recordChangeDescriptions) {
							sessionStorageSetItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY, "true");
							sessionStorageSetItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY, recordChangeDescriptions ? "true" : "false");
							_this._bridge.send("reloadAppForProfiling");
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "renamePath", function(_ref17) {
							var hookID = _ref17.hookID;
							var id = _ref17.id;
							var newPath = _ref17.newPath;
							var oldPath = _ref17.oldPath;
							var rendererID = _ref17.rendererID;
							var type = _ref17.type;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.renamePath(type, id, hookID, oldPath, newPath);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "setTraceUpdatesEnabled", function(traceUpdatesEnabled) {
							_this._traceUpdatesEnabled = traceUpdatesEnabled;
							toggleEnabled(traceUpdatesEnabled);
							for (var rendererID in _this._rendererInterfaces) {
								var renderer = _this._rendererInterfaces[rendererID];
								renderer.setTraceUpdatesEnabled(traceUpdatesEnabled);
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "syncSelectionFromNativeElementsPanel", function() {
							var target = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;
							if (target == null) return;
							_this.selectNode(target);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "shutdown", function() {
							_this.emit("shutdown");
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "startProfiling", function(recordChangeDescriptions) {
							_this._recordChangeDescriptions = recordChangeDescriptions;
							_this._isProfiling = true;
							for (var rendererID in _this._rendererInterfaces) {
								var renderer = _this._rendererInterfaces[rendererID];
								renderer.startProfiling(recordChangeDescriptions);
							}
							_this._bridge.send("profilingStatus", _this._isProfiling);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "stopProfiling", function() {
							_this._isProfiling = false;
							_this._recordChangeDescriptions = false;
							for (var rendererID in _this._rendererInterfaces) {
								var renderer = _this._rendererInterfaces[rendererID];
								renderer.stopProfiling();
							}
							_this._bridge.send("profilingStatus", _this._isProfiling);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "stopInspectingNative", function(selected) {
							_this._bridge.send("stopInspectingNative", selected);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "storeAsGlobal", function(_ref18) {
							var count = _ref18.count;
							var id = _ref18.id;
							var path = _ref18.path;
							var rendererID = _ref18.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.storeAsGlobal(id, path, count);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "updateConsolePatchSettings", function(_ref19) {
							var appendComponentStack = _ref19.appendComponentStack;
							var breakOnConsoleErrors = _ref19.breakOnConsoleErrors;
							var showInlineWarningsAndErrors = _ref19.showInlineWarningsAndErrors;
							var hideConsoleLogsInStrictMode = _ref19.hideConsoleLogsInStrictMode;
							var browserTheme = _ref19.browserTheme;
							patch({
								appendComponentStack,
								breakOnConsoleErrors,
								showInlineWarningsAndErrors,
								hideConsoleLogsInStrictMode,
								browserTheme
							});
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "updateComponentFilters", function(componentFilters) {
							for (var rendererID in _this._rendererInterfaces) {
								var renderer = _this._rendererInterfaces[rendererID];
								renderer.updateComponentFilters(componentFilters);
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "viewAttributeSource", function(_ref20) {
							var id = _ref20.id;
							var path = _ref20.path;
							var rendererID = _ref20.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.prepareViewAttributeSource(id, path);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "viewElementSource", function(_ref21) {
							var id = _ref21.id;
							var rendererID = _ref21.rendererID;
							var renderer = _this._rendererInterfaces[rendererID];
							if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\" for element \"").concat(id, "\""));
							else renderer.prepareViewElementSource(id);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "onTraceUpdates", function(nodes) {
							_this.emit("traceUpdates", nodes);
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "onFastRefreshScheduled", function() {
							if (__DEBUG__) debug("onFastRefreshScheduled");
							_this._bridge.send("fastRefreshScheduled");
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "onHookOperations", function(operations) {
							if (__DEBUG__) debug("onHookOperations", "(".concat(operations.length, ") [").concat(operations.join(", "), "]"));
							_this._bridge.send("operations", operations);
							if (_this._persistedSelection !== null) {
								var rendererID = operations[0];
								if (_this._persistedSelection.rendererID === rendererID) {
									var renderer = _this._rendererInterfaces[rendererID];
									if (renderer == null) console.warn("Invalid renderer id \"".concat(rendererID, "\""));
									else {
										var prevMatch = _this._persistedSelectionMatch;
										var nextMatch = renderer.getBestMatchForTrackedPath();
										_this._persistedSelectionMatch = nextMatch;
										var prevMatchID = prevMatch !== null ? prevMatch.id : null;
										var nextMatchID = nextMatch !== null ? nextMatch.id : null;
										if (prevMatchID !== nextMatchID) {
											if (nextMatchID !== null) _this._bridge.send("selectFiber", nextMatchID);
										}
										if (nextMatch !== null && nextMatch.isFullMatch) {
											_this._persistedSelection = null;
											_this._persistedSelectionMatch = null;
											renderer.setTrackedPath(null);
										}
									}
								}
							}
						});
						agent_defineProperty(agent_assertThisInitialized(_this), "_throttledPersistSelection", lodash_throttle_default()(function(rendererID, id) {
							var renderer = _this._rendererInterfaces[rendererID];
							var path = renderer != null ? renderer.getPathForElement(id) : null;
							if (path !== null) sessionStorageSetItem(SESSION_STORAGE_LAST_SELECTION_KEY, JSON.stringify({
								rendererID,
								path
							}));
							else sessionStorageRemoveItem(SESSION_STORAGE_LAST_SELECTION_KEY);
						}, 1e3));
						if (sessionStorageGetItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY) === "true") {
							_this._recordChangeDescriptions = sessionStorageGetItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY) === "true";
							_this._isProfiling = true;
							sessionStorageRemoveItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY);
							sessionStorageRemoveItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY);
						}
						var persistedSelectionString = sessionStorageGetItem(SESSION_STORAGE_LAST_SELECTION_KEY);
						if (persistedSelectionString != null) _this._persistedSelection = JSON.parse(persistedSelectionString);
						_this._bridge = bridge;
						bridge.addListener("clearErrorsAndWarnings", _this.clearErrorsAndWarnings);
						bridge.addListener("clearErrorsForFiberID", _this.clearErrorsForFiberID);
						bridge.addListener("clearWarningsForFiberID", _this.clearWarningsForFiberID);
						bridge.addListener("copyElementPath", _this.copyElementPath);
						bridge.addListener("deletePath", _this.deletePath);
						bridge.addListener("getBackendVersion", _this.getBackendVersion);
						bridge.addListener("getBridgeProtocol", _this.getBridgeProtocol);
						bridge.addListener("getProfilingData", _this.getProfilingData);
						bridge.addListener("getProfilingStatus", _this.getProfilingStatus);
						bridge.addListener("getOwnersList", _this.getOwnersList);
						bridge.addListener("inspectElement", _this.inspectElement);
						bridge.addListener("logElementToConsole", _this.logElementToConsole);
						bridge.addListener("overrideError", _this.overrideError);
						bridge.addListener("overrideSuspense", _this.overrideSuspense);
						bridge.addListener("overrideValueAtPath", _this.overrideValueAtPath);
						bridge.addListener("reloadAndProfile", _this.reloadAndProfile);
						bridge.addListener("renamePath", _this.renamePath);
						bridge.addListener("setTraceUpdatesEnabled", _this.setTraceUpdatesEnabled);
						bridge.addListener("startProfiling", _this.startProfiling);
						bridge.addListener("stopProfiling", _this.stopProfiling);
						bridge.addListener("storeAsGlobal", _this.storeAsGlobal);
						bridge.addListener("syncSelectionFromNativeElementsPanel", _this.syncSelectionFromNativeElementsPanel);
						bridge.addListener("shutdown", _this.shutdown);
						bridge.addListener("updateConsolePatchSettings", _this.updateConsolePatchSettings);
						bridge.addListener("updateComponentFilters", _this.updateComponentFilters);
						bridge.addListener("viewAttributeSource", _this.viewAttributeSource);
						bridge.addListener("viewElementSource", _this.viewElementSource);
						bridge.addListener("overrideContext", _this.overrideContext);
						bridge.addListener("overrideHookState", _this.overrideHookState);
						bridge.addListener("overrideProps", _this.overrideProps);
						bridge.addListener("overrideState", _this.overrideState);
						if (_this._isProfiling) bridge.send("profilingStatus", true);
						var _version = "5.3.1-ccb20cb88b";
						if (_version) _this._bridge.send("backendVersion", _version);
						_this._bridge.send("bridgeProtocol", currentBridgeProtocol);
						var isBackendStorageAPISupported = false;
						try {
							localStorage.getItem("test");
							isBackendStorageAPISupported = true;
						} catch (error) {}
						bridge.send("isBackendStorageAPISupported", isBackendStorageAPISupported);
						bridge.send("isSynchronousXHRSupported", isSynchronousXHRSupported());
						setupHighlighter(bridge, agent_assertThisInitialized(_this));
						TraceUpdates_initialize(agent_assertThisInitialized(_this));
						return _this;
					}
					__name(Agent$1, "Agent");
					agent_createClass(Agent$1, [
						{
							key: "getInstanceAndStyle",
							value: function getInstanceAndStyle(_ref22) {
								var id = _ref22.id;
								var rendererID = _ref22.rendererID;
								var renderer = this._rendererInterfaces[rendererID];
								if (renderer == null) {
									console.warn("Invalid renderer id \"".concat(rendererID, "\""));
									return null;
								}
								return renderer.getInstanceAndStyle(id);
							}
						},
						{
							key: "getBestMatchingRendererInterface",
							value: function getBestMatchingRendererInterface(node) {
								var bestMatch = null;
								for (var rendererID in this._rendererInterfaces) {
									var renderer = this._rendererInterfaces[rendererID];
									var fiber = renderer.getFiberForNative(node);
									if (fiber !== null) {
										if (fiber.stateNode === node) return renderer;
										else if (bestMatch === null) bestMatch = renderer;
									}
								}
								return bestMatch;
							}
						},
						{
							key: "getIDForNode",
							value: function getIDForNode(node) {
								var rendererInterface = this.getBestMatchingRendererInterface(node);
								if (rendererInterface != null) try {
									return rendererInterface.getFiberIDForNative(node, true);
								} catch (error) {}
								return null;
							}
						},
						{
							key: "selectNode",
							value: function selectNode(target) {
								var id = this.getIDForNode(target);
								if (id !== null) this._bridge.send("selectFiber", id);
							}
						},
						{
							key: "setRendererInterface",
							value: function setRendererInterface(rendererID, rendererInterface) {
								this._rendererInterfaces[rendererID] = rendererInterface;
								if (this._isProfiling) rendererInterface.startProfiling(this._recordChangeDescriptions);
								rendererInterface.setTraceUpdatesEnabled(this._traceUpdatesEnabled);
								var selection = this._persistedSelection;
								if (selection !== null && selection.rendererID === rendererID) rendererInterface.setTrackedPath(selection.path);
							}
						},
						{
							key: "onUnsupportedRenderer",
							value: function onUnsupportedRenderer(rendererID) {
								this._bridge.send("unsupportedRendererVersion", rendererID);
							}
						},
						{
							key: "rendererInterfaces",
							get: function get() {
								return this._rendererInterfaces;
							}
						}
					]);
					return Agent$1;
				}(EventEmitter);
				function hook_slicedToArray(arr, i) {
					return hook_arrayWithHoles(arr) || hook_iterableToArrayLimit(arr, i) || hook_unsupportedIterableToArray(arr, i) || hook_nonIterableRest();
				}
				function hook_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function hook_iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				function hook_arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				function hook_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") hook_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else hook_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return hook_typeof(obj);
				}
				function hook_toConsumableArray(arr) {
					return hook_arrayWithoutHoles(arr) || hook_iterableToArray(arr) || hook_unsupportedIterableToArray(arr) || hook_nonIterableSpread();
				}
				function hook_nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function hook_unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return hook_arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hook_arrayLikeToArray(o, minLen);
				}
				function hook_iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function hook_arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return hook_arrayLikeToArray(arr);
				}
				function hook_arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				/**
				* Install the hook on window, which is an event emitter.
				* Note: this global hook __REACT_DEVTOOLS_GLOBAL_HOOK__ is a de facto public API.
				* It's especially important to avoid creating direct dependency on the DevTools Backend.
				* That's why we still inline the whole event emitter implementation,
				* the string format implementation, and part of the console implementation here.
				*
				* 
				*/ function installHook(target) {
					if (target.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__")) return null;
					var targetConsole$1 = console;
					var targetConsoleMethods$1 = {};
					for (var method$1 in console) targetConsoleMethods$1[method$1] = console[method$1];
					function dangerous_setTargetConsoleForTesting$1(targetConsoleForTesting) {
						targetConsole$1 = targetConsoleForTesting;
						targetConsoleMethods$1 = {};
						for (var _method in targetConsole$1) targetConsoleMethods$1[_method] = console[_method];
					}
					__name(dangerous_setTargetConsoleForTesting$1, "dangerous_setTargetConsoleForTesting");
					function detectReactBuildType(renderer) {
						try {
							if (typeof renderer.version === "string") {
								if (renderer.bundleType > 0) return "development";
								return "production";
							}
							var _toString = Function.prototype.toString;
							if (renderer.Mount && renderer.Mount._renderNewRootComponent) {
								var renderRootCode = _toString.call(renderer.Mount._renderNewRootComponent);
								if (renderRootCode.indexOf("function") !== 0) return "production";
								if (renderRootCode.indexOf("storedMeasure") !== -1) return "development";
								if (renderRootCode.indexOf("should be a pure function") !== -1) {
									if (renderRootCode.indexOf("NODE_ENV") !== -1) return "development";
									if (renderRootCode.indexOf("development") !== -1) return "development";
									if (renderRootCode.indexOf("true") !== -1) return "development";
									if (renderRootCode.indexOf("nextElement") !== -1 || renderRootCode.indexOf("nextComponent") !== -1) return "unminified";
									else return "development";
								}
								if (renderRootCode.indexOf("nextElement") !== -1 || renderRootCode.indexOf("nextComponent") !== -1) return "unminified";
								return "outdated";
							}
						} catch (err) {}
						return "production";
					}
					function checkDCE(fn) {
						try {
							var _toString2 = Function.prototype.toString;
							var code = _toString2.call(fn);
							if (code.indexOf("^_^") > -1) {
								hasDetectedBadDCE = true;
								setTimeout(function() {
									throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://react.dev/link/perf-use-production-build");
								});
							}
						} catch (err) {}
					}
					function formatWithStyles$1(inputArgs, style) {
						if (inputArgs === void 0 || inputArgs === null || inputArgs.length === 0 || typeof inputArgs[0] === "string" && inputArgs[0].match(/([^%]|^)(%c)/g) || style === void 0) return inputArgs;
						var REGEXP = /([^%]|^)((%%)*)(%([oOdisf]))/g;
						if (typeof inputArgs[0] === "string" && inputArgs[0].match(REGEXP)) return ["%c".concat(inputArgs[0]), style].concat(hook_toConsumableArray(inputArgs.slice(1)));
						else {
							var firstArg = inputArgs.reduce(function(formatStr, elem, i) {
								if (i > 0) formatStr += " ";
								switch (hook_typeof(elem)) {
									case "string":
									case "boolean":
									case "symbol": return formatStr += "%s";
									case "number":
										var formatting = Number.isInteger(elem) ? "%i" : "%f";
										return formatStr += formatting;
									default: return formatStr += "%o";
								}
							}, "%c");
							return [firstArg, style].concat(hook_toConsumableArray(inputArgs));
						}
					}
					__name(formatWithStyles$1, "formatWithStyles");
					function formatConsoleArguments$1(maybeMessage) {
						for (var _len = arguments.length, inputArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) inputArgs[_key - 1] = arguments[_key];
						if (inputArgs.length === 0 || typeof maybeMessage !== "string") return [maybeMessage].concat(inputArgs);
						var args = inputArgs.slice();
						var template = "";
						var argumentsPointer = 0;
						for (var i = 0; i < maybeMessage.length; ++i) {
							var currentChar = maybeMessage[i];
							if (currentChar !== "%") {
								template += currentChar;
								continue;
							}
							var nextChar = maybeMessage[i + 1];
							++i;
							switch (nextChar) {
								case "c":
								case "O":
								case "o": {
									++argumentsPointer;
									template += "%".concat(nextChar);
									break;
								}
								case "d":
								case "i": {
									var _args$splice = args.splice(argumentsPointer, 1);
									var _args$splice2 = hook_slicedToArray(_args$splice, 1);
									var arg = _args$splice2[0];
									template += parseInt(arg, 10).toString();
									break;
								}
								case "f": {
									var _args$splice3 = args.splice(argumentsPointer, 1);
									var _args$splice4 = hook_slicedToArray(_args$splice3, 1);
									var _arg = _args$splice4[0];
									template += parseFloat(_arg).toString();
									break;
								}
								case "s": {
									var _args$splice5 = args.splice(argumentsPointer, 1);
									var _args$splice6 = hook_slicedToArray(_args$splice5, 1);
									var _arg2 = _args$splice6[0];
									template += _arg2.toString();
								}
							}
						}
						return [template].concat(hook_toConsumableArray(args));
					}
					__name(formatConsoleArguments$1, "formatConsoleArguments");
					var unpatchFn$1 = null;
					function patchConsoleForInitialCommitInStrictMode(hideConsoleLogsInStrictMode) {
						var overrideConsoleMethods = [
							"error",
							"group",
							"groupCollapsed",
							"info",
							"log",
							"trace",
							"warn"
						];
						if (unpatchFn$1 !== null) return;
						var originalConsoleMethods = {};
						unpatchFn$1 = function unpatchFn$2() {
							for (var _method2 in originalConsoleMethods) try {
								targetConsole$1[_method2] = originalConsoleMethods[_method2];
							} catch (error) {}
						};
						overrideConsoleMethods.forEach(function(method$2) {
							try {
								var originalMethod = originalConsoleMethods[method$2] = targetConsole$1[method$2].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ ? targetConsole$1[method$2].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ : targetConsole$1[method$2];
								var overrideMethod = function overrideMethod$1() {
									if (!hideConsoleLogsInStrictMode) {
										for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
										originalMethod.apply(void 0, [ANSI_STYLE_DIMMING_TEMPLATE].concat(hook_toConsumableArray(formatConsoleArguments$1.apply(void 0, args))));
									}
								};
								overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = originalMethod;
								originalMethod.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = overrideMethod;
								targetConsole$1[method$2] = overrideMethod;
							} catch (error) {}
						});
					}
					function unpatchConsoleForInitialCommitInStrictMode() {
						if (unpatchFn$1 !== null) {
							unpatchFn$1();
							unpatchFn$1 = null;
						}
					}
					var uidCounter$1 = 0;
					function inject(renderer) {
						var id = ++uidCounter$1;
						renderers.set(id, renderer);
						var reactBuildType = hasDetectedBadDCE ? "deadcode" : detectReactBuildType(renderer);
						if (target.hasOwnProperty("__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__")) {
							var _target$__REACT_DEVTO = target.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__;
							var registerRendererWithConsole = _target$__REACT_DEVTO.registerRendererWithConsole;
							var patchConsoleUsingWindowValues$1 = _target$__REACT_DEVTO.patchConsoleUsingWindowValues;
							if (typeof registerRendererWithConsole === "function" && typeof patchConsoleUsingWindowValues$1 === "function") {
								registerRendererWithConsole(renderer);
								patchConsoleUsingWindowValues$1();
							}
						}
						var attach$1 = target.__REACT_DEVTOOLS_ATTACH__;
						if (typeof attach$1 === "function") {
							var rendererInterface = attach$1(hook$1, id, renderer, target);
							hook$1.rendererInterfaces.set(id, rendererInterface);
						}
						hook$1.emit("renderer", {
							id,
							renderer,
							reactBuildType
						});
						return id;
					}
					var hasDetectedBadDCE = false;
					function sub(event, fn) {
						hook$1.on(event, fn);
						return function() {
							return hook$1.off(event, fn);
						};
					}
					function on(event, fn) {
						if (!listeners[event]) listeners[event] = [];
						listeners[event].push(fn);
					}
					function off(event, fn) {
						if (!listeners[event]) return;
						var index = listeners[event].indexOf(fn);
						if (index !== -1) listeners[event].splice(index, 1);
						if (!listeners[event].length) delete listeners[event];
					}
					function emit(event, data) {
						if (listeners[event]) listeners[event].map(function(fn) {
							return fn(data);
						});
					}
					function getFiberRoots(rendererID) {
						var roots = fiberRoots;
						if (!roots[rendererID]) roots[rendererID] = new Set();
						return roots[rendererID];
					}
					function onCommitFiberUnmount(rendererID, fiber) {
						var rendererInterface = rendererInterfaces.get(rendererID);
						if (rendererInterface != null) rendererInterface.handleCommitFiberUnmount(fiber);
					}
					function onCommitFiberRoot(rendererID, root, priorityLevel) {
						var mountedRoots = hook$1.getFiberRoots(rendererID);
						var current = root.current;
						var isKnownRoot = mountedRoots.has(root);
						var isUnmounting = current.memoizedState == null || current.memoizedState.element == null;
						if (!isKnownRoot && !isUnmounting) mountedRoots.add(root);
						else if (isKnownRoot && isUnmounting) mountedRoots.delete(root);
						var rendererInterface = rendererInterfaces.get(rendererID);
						if (rendererInterface != null) rendererInterface.handleCommitFiberRoot(root, priorityLevel);
					}
					function onPostCommitFiberRoot(rendererID, root) {
						var rendererInterface = rendererInterfaces.get(rendererID);
						if (rendererInterface != null) rendererInterface.handlePostCommitFiberRoot(root);
					}
					function setStrictMode(rendererID, isStrictMode) {
						var rendererInterface = rendererInterfaces.get(rendererID);
						if (rendererInterface != null) if (isStrictMode) rendererInterface.patchConsoleForStrictMode();
						else rendererInterface.unpatchConsoleForStrictMode();
						else if (isStrictMode) {
							var hideConsoleLogsInStrictMode = window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ === true;
							patchConsoleForInitialCommitInStrictMode(hideConsoleLogsInStrictMode);
						} else unpatchConsoleForInitialCommitInStrictMode();
					}
					var openModuleRangesStack = [];
					var moduleRanges = [];
					function getTopStackFrameString(error) {
						var frames = error.stack.split("\n");
						var frame = frames.length > 1 ? frames[1] : null;
						return frame;
					}
					function getInternalModuleRanges() {
						return moduleRanges;
					}
					function registerInternalModuleStart(error) {
						var startStackFrame = getTopStackFrameString(error);
						if (startStackFrame !== null) openModuleRangesStack.push(startStackFrame);
					}
					function registerInternalModuleStop(error) {
						if (openModuleRangesStack.length > 0) {
							var startStackFrame = openModuleRangesStack.pop();
							var stopStackFrame = getTopStackFrameString(error);
							if (stopStackFrame !== null) moduleRanges.push([startStackFrame, stopStackFrame]);
						}
					}
					var fiberRoots = {};
					var rendererInterfaces = new Map();
					var listeners = {};
					var renderers = new Map();
					var backends = new Map();
					var hook$1 = {
						rendererInterfaces,
						listeners,
						backends,
						renderers,
						emit,
						getFiberRoots,
						inject,
						on,
						off,
						sub,
						supportsFiber: true,
						checkDCE,
						onCommitFiberUnmount,
						onCommitFiberRoot,
						onPostCommitFiberRoot,
						setStrictMode,
						getInternalModuleRanges,
						registerInternalModuleStart,
						registerInternalModuleStop
					};
					Object.defineProperty(target, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
						configurable: false,
						enumerable: false,
						get: function get() {
							return hook$1;
						}
					});
					return hook$1;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function decorate(object, attr, fn) {
					var old = object[attr];
					object[attr] = function(instance) {
						return fn.call(this, old, arguments);
					};
					return old;
				}
				function decorateMany(source, fns) {
					var olds = {};
					for (var name in fns) olds[name] = decorate(source, name, fns[name]);
					return olds;
				}
				function restoreMany(source, olds) {
					for (var name in olds) source[name] = olds[name];
				}
				function forceUpdate(instance) {
					if (typeof instance.forceUpdate === "function") instance.forceUpdate();
					else if (instance.updater != null && typeof instance.updater.enqueueForceUpdate === "function") instance.updater.enqueueForceUpdate(this, function() {}, "forceUpdate");
				}
				function legacy_renderer_ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function legacy_renderer_objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) legacy_renderer_ownKeys(Object(source), true).forEach(function(key) {
							legacy_renderer_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else legacy_renderer_ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function legacy_renderer_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				function legacy_renderer_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") legacy_renderer_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else legacy_renderer_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return legacy_renderer_typeof(obj);
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function getData(internalInstance) {
					var displayName = null;
					var key = null;
					if (internalInstance._currentElement != null) {
						if (internalInstance._currentElement.key) key = String(internalInstance._currentElement.key);
						var elementType = internalInstance._currentElement.type;
						if (typeof elementType === "string") displayName = elementType;
						else if (typeof elementType === "function") displayName = getDisplayName(elementType);
					}
					return {
						displayName,
						key
					};
				}
				function getElementType(internalInstance) {
					if (internalInstance._currentElement != null) {
						var elementType = internalInstance._currentElement.type;
						if (typeof elementType === "function") {
							var publicInstance = internalInstance.getPublicInstance();
							if (publicInstance !== null) return types_ElementTypeClass;
							else return types_ElementTypeFunction;
						} else if (typeof elementType === "string") return ElementTypeHostComponent;
					}
					return ElementTypeOtherOrUnknown;
				}
				function getChildren(internalInstance) {
					var children = [];
					if (legacy_renderer_typeof(internalInstance) !== "object") {} else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {} else if (internalInstance._renderedComponent) {
						var child = internalInstance._renderedComponent;
						if (getElementType(child) !== ElementTypeOtherOrUnknown) children.push(child);
					} else if (internalInstance._renderedChildren) {
						var renderedChildren = internalInstance._renderedChildren;
						for (var name in renderedChildren) {
							var _child = renderedChildren[name];
							if (getElementType(_child) !== ElementTypeOtherOrUnknown) children.push(_child);
						}
					}
					return children;
				}
				function renderer_attach(hook$1, rendererID, renderer, global1) {
					var idToInternalInstanceMap = new Map();
					var internalInstanceToIDMap = new WeakMap();
					var internalInstanceToRootIDMap = new WeakMap();
					var getInternalIDForNative = null;
					var findNativeNodeForInternalID;
					var getFiberForNative = function getFiberForNative$1(node) {
						return null;
					};
					if (renderer.ComponentTree) {
						getInternalIDForNative = function getInternalIDForNative$1(node, findNearestUnfilteredAncestor) {
							var internalInstance = renderer.ComponentTree.getClosestInstanceFromNode(node);
							return internalInstanceToIDMap.get(internalInstance) || null;
						};
						findNativeNodeForInternalID = function findNativeNodeForInternalID$1(id) {
							var internalInstance = idToInternalInstanceMap.get(id);
							return renderer.ComponentTree.getNodeFromInstance(internalInstance);
						};
						getFiberForNative = function getFiberForNative$1(node) {
							return renderer.ComponentTree.getClosestInstanceFromNode(node);
						};
					} else if (renderer.Mount.getID && renderer.Mount.getNode) {
						getInternalIDForNative = function getInternalIDForNative$1(node, findNearestUnfilteredAncestor) {
							return null;
						};
						findNativeNodeForInternalID = function findNativeNodeForInternalID$1(id) {
							return null;
						};
					}
					function getDisplayNameForFiberID(id) {
						var internalInstance = idToInternalInstanceMap.get(id);
						return internalInstance ? getData(internalInstance).displayName : null;
					}
					function getID(internalInstance) {
						if (legacy_renderer_typeof(internalInstance) !== "object" || internalInstance === null) throw new Error("Invalid internal instance: " + internalInstance);
						if (!internalInstanceToIDMap.has(internalInstance)) {
							var _id = getUID();
							internalInstanceToIDMap.set(internalInstance, _id);
							idToInternalInstanceMap.set(_id, internalInstance);
						}
						return internalInstanceToIDMap.get(internalInstance);
					}
					function areEqualArrays(a, b) {
						if (a.length !== b.length) return false;
						for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
						return true;
					}
					var parentIDStack = [];
					var oldReconcilerMethods = null;
					if (renderer.Reconciler) oldReconcilerMethods = decorateMany(renderer.Reconciler, {
						mountComponent: function mountComponent(fn, args) {
							var internalInstance = args[0];
							var hostContainerInfo = args[3];
							if (getElementType(internalInstance) === ElementTypeOtherOrUnknown) return fn.apply(this, args);
							if (hostContainerInfo._topLevelWrapper === void 0) return fn.apply(this, args);
							var id = getID(internalInstance);
							var parentID = parentIDStack.length > 0 ? parentIDStack[parentIDStack.length - 1] : 0;
							recordMount(internalInstance, id, parentID);
							parentIDStack.push(id);
							internalInstanceToRootIDMap.set(internalInstance, getID(hostContainerInfo._topLevelWrapper));
							try {
								var result = fn.apply(this, args);
								parentIDStack.pop();
								return result;
							} catch (err) {
								parentIDStack = [];
								throw err;
							} finally {
								if (parentIDStack.length === 0) {
									var rootID = internalInstanceToRootIDMap.get(internalInstance);
									if (rootID === void 0) throw new Error("Expected to find root ID.");
									flushPendingEvents(rootID);
								}
							}
						},
						performUpdateIfNecessary: function performUpdateIfNecessary(fn, args) {
							var internalInstance = args[0];
							if (getElementType(internalInstance) === ElementTypeOtherOrUnknown) return fn.apply(this, args);
							var id = getID(internalInstance);
							parentIDStack.push(id);
							var prevChildren = getChildren(internalInstance);
							try {
								var result = fn.apply(this, args);
								var nextChildren = getChildren(internalInstance);
								if (!areEqualArrays(prevChildren, nextChildren)) recordReorder(internalInstance, id, nextChildren);
								parentIDStack.pop();
								return result;
							} catch (err) {
								parentIDStack = [];
								throw err;
							} finally {
								if (parentIDStack.length === 0) {
									var rootID = internalInstanceToRootIDMap.get(internalInstance);
									if (rootID === void 0) throw new Error("Expected to find root ID.");
									flushPendingEvents(rootID);
								}
							}
						},
						receiveComponent: function receiveComponent(fn, args) {
							var internalInstance = args[0];
							if (getElementType(internalInstance) === ElementTypeOtherOrUnknown) return fn.apply(this, args);
							var id = getID(internalInstance);
							parentIDStack.push(id);
							var prevChildren = getChildren(internalInstance);
							try {
								var result = fn.apply(this, args);
								var nextChildren = getChildren(internalInstance);
								if (!areEqualArrays(prevChildren, nextChildren)) recordReorder(internalInstance, id, nextChildren);
								parentIDStack.pop();
								return result;
							} catch (err) {
								parentIDStack = [];
								throw err;
							} finally {
								if (parentIDStack.length === 0) {
									var rootID = internalInstanceToRootIDMap.get(internalInstance);
									if (rootID === void 0) throw new Error("Expected to find root ID.");
									flushPendingEvents(rootID);
								}
							}
						},
						unmountComponent: function unmountComponent(fn, args) {
							var internalInstance = args[0];
							if (getElementType(internalInstance) === ElementTypeOtherOrUnknown) return fn.apply(this, args);
							var id = getID(internalInstance);
							parentIDStack.push(id);
							try {
								var result = fn.apply(this, args);
								parentIDStack.pop();
								recordUnmount(internalInstance, id);
								return result;
							} catch (err) {
								parentIDStack = [];
								throw err;
							} finally {
								if (parentIDStack.length === 0) {
									var rootID = internalInstanceToRootIDMap.get(internalInstance);
									if (rootID === void 0) throw new Error("Expected to find root ID.");
									flushPendingEvents(rootID);
								}
							}
						}
					});
					function cleanup() {
						if (oldReconcilerMethods !== null) if (renderer.Component) restoreMany(renderer.Component.Mixin, oldReconcilerMethods);
						else restoreMany(renderer.Reconciler, oldReconcilerMethods);
						oldReconcilerMethods = null;
					}
					function recordMount(internalInstance, id, parentID) {
						var isRoot = parentID === 0;
						if (__DEBUG__) console.log("%crecordMount()", "color: green; font-weight: bold;", id, getData(internalInstance).displayName);
						if (isRoot) {
							var hasOwnerMetadata = internalInstance._currentElement != null && internalInstance._currentElement._owner != null;
							pushOperation(TREE_OPERATION_ADD);
							pushOperation(id);
							pushOperation(ElementTypeRoot);
							pushOperation(0);
							pushOperation(0);
							pushOperation(0);
							pushOperation(hasOwnerMetadata ? 1 : 0);
						} else {
							var type = getElementType(internalInstance);
							var _getData = getData(internalInstance);
							var displayName = _getData.displayName;
							var key = _getData.key;
							var ownerID = internalInstance._currentElement != null && internalInstance._currentElement._owner != null ? getID(internalInstance._currentElement._owner) : 0;
							var displayNameStringID = getStringID(displayName);
							var keyStringID = getStringID(key);
							pushOperation(TREE_OPERATION_ADD);
							pushOperation(id);
							pushOperation(type);
							pushOperation(parentID);
							pushOperation(ownerID);
							pushOperation(displayNameStringID);
							pushOperation(keyStringID);
						}
					}
					function recordReorder(internalInstance, id, nextChildren) {
						pushOperation(TREE_OPERATION_REORDER_CHILDREN);
						pushOperation(id);
						var nextChildIDs = nextChildren.map(getID);
						pushOperation(nextChildIDs.length);
						for (var i = 0; i < nextChildIDs.length; i++) pushOperation(nextChildIDs[i]);
					}
					function recordUnmount(internalInstance, id) {
						pendingUnmountedIDs.push(id);
						idToInternalInstanceMap.delete(id);
					}
					function crawlAndRecordInitialMounts(id, parentID, rootID) {
						if (__DEBUG__) console.group("crawlAndRecordInitialMounts() id:", id);
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance != null) {
							internalInstanceToRootIDMap.set(internalInstance, rootID);
							recordMount(internalInstance, id, parentID);
							getChildren(internalInstance).forEach(function(child) {
								return crawlAndRecordInitialMounts(getID(child), id, rootID);
							});
						}
						if (__DEBUG__) console.groupEnd();
					}
					function flushInitialOperations() {
						var roots = renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID;
						for (var key in roots) {
							var internalInstance = roots[key];
							var _id2 = getID(internalInstance);
							crawlAndRecordInitialMounts(_id2, 0, _id2);
							flushPendingEvents(_id2);
						}
					}
					var pendingOperations = [];
					var pendingStringTable = new Map();
					var pendingUnmountedIDs = [];
					var pendingStringTableLength = 0;
					var pendingUnmountedRootID = null;
					function flushPendingEvents(rootID) {
						if (pendingOperations.length === 0 && pendingUnmountedIDs.length === 0 && pendingUnmountedRootID === null) return;
						var numUnmountIDs = pendingUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
						var operations = new Array(3 + pendingStringTableLength + (numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + pendingOperations.length);
						var i = 0;
						operations[i++] = rendererID;
						operations[i++] = rootID;
						operations[i++] = pendingStringTableLength;
						pendingStringTable.forEach(function(value1, key) {
							operations[i++] = key.length;
							var encodedKey = utfEncodeString(key);
							for (var j$1 = 0; j$1 < encodedKey.length; j$1++) operations[i + j$1] = encodedKey[j$1];
							i += key.length;
						});
						if (numUnmountIDs > 0) {
							operations[i++] = TREE_OPERATION_REMOVE;
							operations[i++] = numUnmountIDs;
							for (var j = 0; j < pendingUnmountedIDs.length; j++) operations[i++] = pendingUnmountedIDs[j];
							if (pendingUnmountedRootID !== null) {
								operations[i] = pendingUnmountedRootID;
								i++;
							}
						}
						for (var _j = 0; _j < pendingOperations.length; _j++) operations[i + _j] = pendingOperations[_j];
						i += pendingOperations.length;
						if (__DEBUG__) printOperationsArray(operations);
						hook$1.emit("operations", operations);
						pendingOperations.length = 0;
						pendingUnmountedIDs = [];
						pendingUnmountedRootID = null;
						pendingStringTable.clear();
						pendingStringTableLength = 0;
					}
					function pushOperation(op) {
						pendingOperations.push(op);
					}
					function getStringID(str) {
						if (str === null) return 0;
						var existingID = pendingStringTable.get(str);
						if (existingID !== void 0) return existingID;
						var stringID = pendingStringTable.size + 1;
						pendingStringTable.set(str, stringID);
						pendingStringTableLength += str.length + 1;
						return stringID;
					}
					var currentlyInspectedElementID = null;
					var currentlyInspectedPaths = {};
					function mergeInspectedPaths(path) {
						var current = currentlyInspectedPaths;
						path.forEach(function(key) {
							if (!current[key]) current[key] = {};
							current = current[key];
						});
					}
					function createIsPathAllowed(key) {
						return function isPathAllowed(path) {
							var current = currentlyInspectedPaths[key];
							if (!current) return false;
							for (var i = 0; i < path.length; i++) {
								current = current[path[i]];
								if (!current) return false;
							}
							return true;
						};
					}
					function getInstanceAndStyle(id) {
						var instance = null;
						var style = null;
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance != null) {
							instance = internalInstance._instance || null;
							var element = internalInstance._currentElement;
							if (element != null && element.props != null) style = element.props.style || null;
						}
						return {
							instance,
							style
						};
					}
					function updateSelectedElement(id) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance == null) {
							console.warn("Could not find instance with id \"".concat(id, "\""));
							return;
						}
						switch (getElementType(internalInstance)) {
							case types_ElementTypeClass:
								global1.$r = internalInstance._instance;
								break;
							case types_ElementTypeFunction:
								var element = internalInstance._currentElement;
								if (element == null) {
									console.warn("Could not find element with id \"".concat(id, "\""));
									return;
								}
								global1.$r = {
									props: element.props,
									type: element.type
								};
								break;
							default:
								global1.$r = null;
								break;
						}
					}
					function storeAsGlobal(id, path, count) {
						var inspectedElement = inspectElementRaw(id);
						if (inspectedElement !== null) {
							var value1 = utils_getInObject(inspectedElement, path);
							var key = "$reactTemp".concat(count);
							window[key] = value1;
							console.log(key);
							console.log(value1);
						}
					}
					function getSerializedElementValueByPath(id, path) {
						var inspectedElement = inspectElementRaw(id);
						if (inspectedElement !== null) {
							var valueToCopy = utils_getInObject(inspectedElement, path);
							return serializeToString(valueToCopy);
						}
					}
					function inspectElement(requestID, id, path, forceFullData) {
						if (forceFullData || currentlyInspectedElementID !== id) {
							currentlyInspectedElementID = id;
							currentlyInspectedPaths = {};
						}
						var inspectedElement = inspectElementRaw(id);
						if (inspectedElement === null) return {
							id,
							responseID: requestID,
							type: "not-found"
						};
						if (path !== null) mergeInspectedPaths(path);
						updateSelectedElement(id);
						inspectedElement.context = cleanForBridge(inspectedElement.context, createIsPathAllowed("context"));
						inspectedElement.props = cleanForBridge(inspectedElement.props, createIsPathAllowed("props"));
						inspectedElement.state = cleanForBridge(inspectedElement.state, createIsPathAllowed("state"));
						return {
							id,
							responseID: requestID,
							type: "full-data",
							value: inspectedElement
						};
					}
					function inspectElementRaw(id) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance == null) return null;
						var _getData2 = getData(internalInstance);
						var displayName = _getData2.displayName;
						var key = _getData2.key;
						var type = getElementType(internalInstance);
						var context = null;
						var owners = null;
						var props = null;
						var state = null;
						var element = internalInstance._currentElement;
						if (element !== null) {
							props = element.props;
							var owner = element._owner;
							if (owner) {
								owners = [];
								while (owner != null) {
									owners.push({
										displayName: getData(owner).displayName || "Unknown",
										id: getID(owner),
										key: element.key,
										type: getElementType(owner)
									});
									if (owner._currentElement) owner = owner._currentElement._owner;
								}
							}
						}
						var publicInstance = internalInstance._instance;
						if (publicInstance != null) {
							context = publicInstance.context || null;
							state = publicInstance.state || null;
						}
						var errors = [];
						var warnings = [];
						return {
							id,
							canEditHooks: false,
							canEditFunctionProps: false,
							canEditHooksAndDeletePaths: false,
							canEditHooksAndRenamePaths: false,
							canEditFunctionPropsDeletePaths: false,
							canEditFunctionPropsRenamePaths: false,
							canToggleError: false,
							isErrored: false,
							targetErrorBoundaryID: null,
							canToggleSuspense: false,
							canViewSource: type === types_ElementTypeClass || type === types_ElementTypeFunction,
							source: null,
							hasLegacyContext: true,
							displayName,
							type,
							key: key != null ? key : null,
							context,
							hooks: null,
							props,
							state,
							errors,
							warnings,
							owners,
							rootType: null,
							rendererPackageName: null,
							rendererVersion: null,
							plugins: { stylex: null }
						};
					}
					function logElementToConsole(id) {
						var result = inspectElementRaw(id);
						if (result === null) {
							console.warn("Could not find element with id \"".concat(id, "\""));
							return;
						}
						var supportsGroup = typeof console.groupCollapsed === "function";
						if (supportsGroup) console.groupCollapsed("[Click to expand] %c<".concat(result.displayName || "Component", " />"), "color: var(--dom-tag-name-color); font-weight: normal;");
						if (result.props !== null) console.log("Props:", result.props);
						if (result.state !== null) console.log("State:", result.state);
						if (result.context !== null) console.log("Context:", result.context);
						var nativeNode = findNativeNodeForInternalID(id);
						if (nativeNode !== null) console.log("Node:", nativeNode);
						if (window.chrome || /firefox/i.test(navigator.userAgent)) console.log("Right-click any value to save it as a global variable for further inspection.");
						if (supportsGroup) console.groupEnd();
					}
					function prepareViewAttributeSource(id, path) {
						var inspectedElement = inspectElementRaw(id);
						if (inspectedElement !== null) window.$attribute = utils_getInObject(inspectedElement, path);
					}
					function prepareViewElementSource(id) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance == null) {
							console.warn("Could not find instance with id \"".concat(id, "\""));
							return;
						}
						var element = internalInstance._currentElement;
						if (element == null) {
							console.warn("Could not find element with id \"".concat(id, "\""));
							return;
						}
						global1.$type = element.type;
					}
					function deletePath(type, id, hookID, path) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance != null) {
							var publicInstance = internalInstance._instance;
							if (publicInstance != null) switch (type) {
								case "context":
									deletePathInObject(publicInstance.context, path);
									forceUpdate(publicInstance);
									break;
								case "hooks": throw new Error("Hooks not supported by this renderer");
								case "props":
									var element = internalInstance._currentElement;
									internalInstance._currentElement = legacy_renderer_objectSpread(legacy_renderer_objectSpread({}, element), {}, { props: copyWithDelete(element.props, path) });
									forceUpdate(publicInstance);
									break;
								case "state":
									deletePathInObject(publicInstance.state, path);
									forceUpdate(publicInstance);
									break;
							}
						}
					}
					function renamePath(type, id, hookID, oldPath, newPath) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance != null) {
							var publicInstance = internalInstance._instance;
							if (publicInstance != null) switch (type) {
								case "context":
									renamePathInObject(publicInstance.context, oldPath, newPath);
									forceUpdate(publicInstance);
									break;
								case "hooks": throw new Error("Hooks not supported by this renderer");
								case "props":
									var element = internalInstance._currentElement;
									internalInstance._currentElement = legacy_renderer_objectSpread(legacy_renderer_objectSpread({}, element), {}, { props: copyWithRename(element.props, oldPath, newPath) });
									forceUpdate(publicInstance);
									break;
								case "state":
									renamePathInObject(publicInstance.state, oldPath, newPath);
									forceUpdate(publicInstance);
									break;
							}
						}
					}
					function overrideValueAtPath(type, id, hookID, path, value1) {
						var internalInstance = idToInternalInstanceMap.get(id);
						if (internalInstance != null) {
							var publicInstance = internalInstance._instance;
							if (publicInstance != null) switch (type) {
								case "context":
									utils_setInObject(publicInstance.context, path, value1);
									forceUpdate(publicInstance);
									break;
								case "hooks": throw new Error("Hooks not supported by this renderer");
								case "props":
									var element = internalInstance._currentElement;
									internalInstance._currentElement = legacy_renderer_objectSpread(legacy_renderer_objectSpread({}, element), {}, { props: copyWithSet(element.props, path, value1) });
									forceUpdate(publicInstance);
									break;
								case "state":
									utils_setInObject(publicInstance.state, path, value1);
									forceUpdate(publicInstance);
									break;
							}
						}
					}
					var getProfilingData = function getProfilingData$1() {
						throw new Error("getProfilingData not supported by this renderer");
					};
					var handleCommitFiberRoot = function handleCommitFiberRoot$1() {
						throw new Error("handleCommitFiberRoot not supported by this renderer");
					};
					var handleCommitFiberUnmount = function handleCommitFiberUnmount$1() {
						throw new Error("handleCommitFiberUnmount not supported by this renderer");
					};
					var handlePostCommitFiberRoot = function handlePostCommitFiberRoot$1() {
						throw new Error("handlePostCommitFiberRoot not supported by this renderer");
					};
					var overrideError = function overrideError$1() {
						throw new Error("overrideError not supported by this renderer");
					};
					var overrideSuspense = function overrideSuspense$1() {
						throw new Error("overrideSuspense not supported by this renderer");
					};
					var startProfiling = function startProfiling$1() {};
					var stopProfiling = function stopProfiling$1() {};
					function getBestMatchForTrackedPath() {
						return null;
					}
					function getPathForElement(id) {
						return null;
					}
					function updateComponentFilters(componentFilters) {}
					function setTraceUpdatesEnabled(enabled) {}
					function setTrackedPath(path) {}
					function getOwnersList(id) {
						return null;
					}
					function clearErrorsAndWarnings() {}
					function clearErrorsForFiberID(id) {}
					function clearWarningsForFiberID(id) {}
					function patchConsoleForStrictMode() {}
					function unpatchConsoleForStrictMode() {}
					function hasFiberWithId(id) {
						return idToInternalInstanceMap.has(id);
					}
					return {
						clearErrorsAndWarnings,
						clearErrorsForFiberID,
						clearWarningsForFiberID,
						cleanup,
						getSerializedElementValueByPath,
						deletePath,
						flushInitialOperations,
						getBestMatchForTrackedPath,
						getDisplayNameForFiberID,
						getFiberForNative,
						getFiberIDForNative: getInternalIDForNative,
						getInstanceAndStyle,
						findNativeNodesForFiberID: function findNativeNodesForFiberID(id) {
							var nativeNode = findNativeNodeForInternalID(id);
							return nativeNode == null ? null : [nativeNode];
						},
						getOwnersList,
						getPathForElement,
						getProfilingData,
						handleCommitFiberRoot,
						handleCommitFiberUnmount,
						handlePostCommitFiberRoot,
						hasFiberWithId,
						inspectElement,
						logElementToConsole,
						overrideError,
						overrideSuspense,
						overrideValueAtPath,
						renamePath,
						patchConsoleForStrictMode,
						prepareViewAttributeSource,
						prepareViewElementSource,
						renderer,
						setTraceUpdatesEnabled,
						setTrackedPath,
						startProfiling,
						stopProfiling,
						storeAsGlobal,
						unpatchConsoleForStrictMode,
						updateComponentFilters
					};
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function isMatchingRender(version) {
					return !hasAssignedBackend(version);
				}
				function initBackend(hook$1, agent$1, global1) {
					if (hook$1 == null) return function() {};
					var subs = [
						hook$1.sub("renderer-attached", function(_ref) {
							var id = _ref.id;
							var renderer = _ref.renderer;
							var rendererInterface = _ref.rendererInterface;
							agent$1.setRendererInterface(id, rendererInterface);
							rendererInterface.flushInitialOperations();
						}),
						hook$1.sub("unsupported-renderer-version", function(id) {
							agent$1.onUnsupportedRenderer(id);
						}),
						hook$1.sub("fastRefreshScheduled", agent$1.onFastRefreshScheduled),
						hook$1.sub("operations", agent$1.onHookOperations),
						hook$1.sub("traceUpdates", agent$1.onTraceUpdates)
					];
					var attachRenderer = function attachRenderer$1(id, renderer) {
						if (!isMatchingRender(renderer.reconcilerVersion || renderer.version)) return;
						var rendererInterface = hook$1.rendererInterfaces.get(id);
						if (rendererInterface == null) {
							if (typeof renderer.findFiberByHostInstance === "function") rendererInterface = attach(hook$1, id, renderer, global1);
							else if (renderer.ComponentTree) rendererInterface = renderer_attach(hook$1, id, renderer, global1);
							if (rendererInterface != null) hook$1.rendererInterfaces.set(id, rendererInterface);
						}
						if (rendererInterface != null) hook$1.emit("renderer-attached", {
							id,
							renderer,
							rendererInterface
						});
						else hook$1.emit("unsupported-renderer-version", id);
					};
					hook$1.renderers.forEach(function(renderer, id) {
						attachRenderer(id, renderer);
					});
					subs.push(hook$1.sub("renderer", function(_ref2) {
						var id = _ref2.id;
						var renderer = _ref2.renderer;
						attachRenderer(id, renderer);
					}));
					hook$1.emit("react-devtools", agent$1);
					hook$1.reactDevtoolsAgent = agent$1;
					var onAgentShutdown = function onAgentShutdown$1() {
						subs.forEach(function(fn) {
							return fn();
						});
						hook$1.rendererInterfaces.forEach(function(rendererInterface) {
							rendererInterface.cleanup();
						});
						hook$1.reactDevtoolsAgent = null;
					};
					agent$1.addListener("shutdown", onAgentShutdown);
					subs.push(function() {
						agent$1.removeListener("shutdown", onAgentShutdown);
					});
					return function() {
						subs.forEach(function(fn) {
							return fn();
						});
					};
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/
				/**
				* This mirrors react-native/Libraries/Inspector/resolveBoxStyle.js (but without RTL support).
				*
				* Resolve a style property into it's component parts, e.g.
				*
				* resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
				* -> {top: 5, left: 5, right: 5, bottom: 10}
				*/ function resolveBoxStyle(prefix$1, style) {
					var hasParts = false;
					var result = {
						bottom: 0,
						left: 0,
						right: 0,
						top: 0
					};
					var styleForAll = style[prefix$1];
					if (styleForAll != null) {
						for (var _i = 0, _Object$keys = Object.keys(result); _i < _Object$keys.length; _i++) {
							var key = _Object$keys[_i];
							result[key] = styleForAll;
						}
						hasParts = true;
					}
					var styleForHorizontal = style[prefix$1 + "Horizontal"];
					if (styleForHorizontal != null) {
						result.left = styleForHorizontal;
						result.right = styleForHorizontal;
						hasParts = true;
					} else {
						var styleForLeft = style[prefix$1 + "Left"];
						if (styleForLeft != null) {
							result.left = styleForLeft;
							hasParts = true;
						}
						var styleForRight = style[prefix$1 + "Right"];
						if (styleForRight != null) {
							result.right = styleForRight;
							hasParts = true;
						}
						var styleForEnd = style[prefix$1 + "End"];
						if (styleForEnd != null) {
							result.right = styleForEnd;
							hasParts = true;
						}
						var styleForStart = style[prefix$1 + "Start"];
						if (styleForStart != null) {
							result.left = styleForStart;
							hasParts = true;
						}
					}
					var styleForVertical = style[prefix$1 + "Vertical"];
					if (styleForVertical != null) {
						result.bottom = styleForVertical;
						result.top = styleForVertical;
						hasParts = true;
					} else {
						var styleForBottom = style[prefix$1 + "Bottom"];
						if (styleForBottom != null) {
							result.bottom = styleForBottom;
							hasParts = true;
						}
						var styleForTop = style[prefix$1 + "Top"];
						if (styleForTop != null) {
							result.top = styleForTop;
							hasParts = true;
						}
					}
					return hasParts ? result : null;
				}
				function setupNativeStyleEditor_typeof(obj) {
					"@babel/helpers - typeof";
					if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") setupNativeStyleEditor_typeof = function _typeof$1(obj$1) {
						return typeof obj$1;
					};
					else setupNativeStyleEditor_typeof = function _typeof$1(obj$1) {
						return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
					};
					return setupNativeStyleEditor_typeof(obj);
				}
				function setupNativeStyleEditor_defineProperty(obj, key, value1) {
					if (key in obj) Object.defineProperty(obj, key, {
						value: value1,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value1;
					return obj;
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function setupNativeStyleEditor(bridge, agent$1, resolveNativeStyle, validAttributes) {
					bridge.addListener("NativeStyleEditor_measure", function(_ref) {
						var id = _ref.id;
						var rendererID = _ref.rendererID;
						measureStyle(agent$1, bridge, resolveNativeStyle, id, rendererID);
					});
					bridge.addListener("NativeStyleEditor_renameAttribute", function(_ref2) {
						var id = _ref2.id;
						var rendererID = _ref2.rendererID;
						var oldName = _ref2.oldName;
						var newName = _ref2.newName;
						var value1 = _ref2.value;
						renameStyle(agent$1, id, rendererID, oldName, newName, value1);
						setTimeout(function() {
							return measureStyle(agent$1, bridge, resolveNativeStyle, id, rendererID);
						});
					});
					bridge.addListener("NativeStyleEditor_setValue", function(_ref3) {
						var id = _ref3.id;
						var rendererID = _ref3.rendererID;
						var name = _ref3.name;
						var value1 = _ref3.value;
						setStyle(agent$1, id, rendererID, name, value1);
						setTimeout(function() {
							return measureStyle(agent$1, bridge, resolveNativeStyle, id, rendererID);
						});
					});
					bridge.send("isNativeStyleEditorSupported", {
						isSupported: true,
						validAttributes
					});
				}
				var EMPTY_BOX_STYLE = {
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				};
				var componentIDToStyleOverrides = new Map();
				function measureStyle(agent$1, bridge, resolveNativeStyle, id, rendererID) {
					var data = agent$1.getInstanceAndStyle({
						id,
						rendererID
					});
					if (!data || !data.style) {
						bridge.send("NativeStyleEditor_styleAndLayout", {
							id,
							layout: null,
							style: null
						});
						return;
					}
					var instance = data.instance;
					var style = data.style;
					var resolvedStyle = resolveNativeStyle(style);
					var styleOverrides = componentIDToStyleOverrides.get(id);
					if (styleOverrides != null) resolvedStyle = Object.assign({}, resolvedStyle, styleOverrides);
					if (!instance || typeof instance.measure !== "function") {
						bridge.send("NativeStyleEditor_styleAndLayout", {
							id,
							layout: null,
							style: resolvedStyle || null
						});
						return;
					}
					instance.measure(function(x, y, width, height, left, top) {
						if (typeof x !== "number") {
							bridge.send("NativeStyleEditor_styleAndLayout", {
								id,
								layout: null,
								style: resolvedStyle || null
							});
							return;
						}
						var margin = resolvedStyle != null && resolveBoxStyle("margin", resolvedStyle) || EMPTY_BOX_STYLE;
						var padding = resolvedStyle != null && resolveBoxStyle("padding", resolvedStyle) || EMPTY_BOX_STYLE;
						bridge.send("NativeStyleEditor_styleAndLayout", {
							id,
							layout: {
								x,
								y,
								width,
								height,
								left,
								top,
								margin,
								padding
							},
							style: resolvedStyle || null
						});
					});
				}
				function shallowClone(object) {
					var cloned = {};
					for (var n in object) cloned[n] = object[n];
					return cloned;
				}
				function renameStyle(agent$1, id, rendererID, oldName, newName, value1) {
					var _ref4;
					var data = agent$1.getInstanceAndStyle({
						id,
						rendererID
					});
					if (!data || !data.style) return;
					var instance = data.instance;
					var style = data.style;
					var newStyle = newName ? (_ref4 = {}, setupNativeStyleEditor_defineProperty(_ref4, oldName, void 0), setupNativeStyleEditor_defineProperty(_ref4, newName, value1), _ref4) : setupNativeStyleEditor_defineProperty({}, oldName, void 0);
					var customStyle;
					if (instance !== null && typeof instance.setNativeProps === "function") {
						var styleOverrides = componentIDToStyleOverrides.get(id);
						if (!styleOverrides) componentIDToStyleOverrides.set(id, newStyle);
						else Object.assign(styleOverrides, newStyle);
						instance.setNativeProps({ style: newStyle });
					} else if (src_isArray(style)) {
						var lastIndex = style.length - 1;
						if (setupNativeStyleEditor_typeof(style[lastIndex]) === "object" && !src_isArray(style[lastIndex])) {
							customStyle = shallowClone(style[lastIndex]);
							delete customStyle[oldName];
							if (newName) customStyle[newName] = value1;
							else customStyle[oldName] = void 0;
							agent$1.overrideValueAtPath({
								type: "props",
								id,
								rendererID,
								path: ["style", lastIndex],
								value: customStyle
							});
						} else agent$1.overrideValueAtPath({
							type: "props",
							id,
							rendererID,
							path: ["style"],
							value: style.concat([newStyle])
						});
					} else if (setupNativeStyleEditor_typeof(style) === "object") {
						customStyle = shallowClone(style);
						delete customStyle[oldName];
						if (newName) customStyle[newName] = value1;
						else customStyle[oldName] = void 0;
						agent$1.overrideValueAtPath({
							type: "props",
							id,
							rendererID,
							path: ["style"],
							value: customStyle
						});
					} else agent$1.overrideValueAtPath({
						type: "props",
						id,
						rendererID,
						path: ["style"],
						value: [style, newStyle]
					});
					agent$1.emit("hideNativeHighlight");
				}
				function setStyle(agent$1, id, rendererID, name, value1) {
					var data = agent$1.getInstanceAndStyle({
						id,
						rendererID
					});
					if (!data || !data.style) return;
					var instance = data.instance;
					var style = data.style;
					var newStyle = setupNativeStyleEditor_defineProperty({}, name, value1);
					if (instance !== null && typeof instance.setNativeProps === "function") {
						var styleOverrides = componentIDToStyleOverrides.get(id);
						if (!styleOverrides) componentIDToStyleOverrides.set(id, newStyle);
						else Object.assign(styleOverrides, newStyle);
						instance.setNativeProps({ style: newStyle });
					} else if (src_isArray(style)) {
						var lastLength = style.length - 1;
						if (setupNativeStyleEditor_typeof(style[lastLength]) === "object" && !src_isArray(style[lastLength])) agent$1.overrideValueAtPath({
							type: "props",
							id,
							rendererID,
							path: [
								"style",
								lastLength,
								name
							],
							value: value1
						});
						else agent$1.overrideValueAtPath({
							type: "props",
							id,
							rendererID,
							path: ["style"],
							value: style.concat([newStyle])
						});
					} else agent$1.overrideValueAtPath({
						type: "props",
						id,
						rendererID,
						path: ["style"],
						value: [style, newStyle]
					});
					agent$1.emit("hideNativeHighlight");
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and its affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ function initializeUsingCachedSettings(devToolsSettingsManager) {
					initializeConsolePatchSettings(devToolsSettingsManager);
				}
				function initializeConsolePatchSettings(devToolsSettingsManager) {
					if (devToolsSettingsManager.getConsolePatchSettings == null) return;
					var consolePatchSettingsString = devToolsSettingsManager.getConsolePatchSettings();
					if (consolePatchSettingsString == null) return;
					var parsedConsolePatchSettings = parseConsolePatchSettings(consolePatchSettingsString);
					if (parsedConsolePatchSettings == null) return;
					writeConsolePatchSettingsToWindow(parsedConsolePatchSettings);
				}
				function parseConsolePatchSettings(consolePatchSettingsString) {
					var _castBool;
					var _castBool2;
					var _castBool3;
					var _castBool4;
					var _castBrowserTheme;
					var parsedValue = JSON.parse(consolePatchSettingsString !== null && consolePatchSettingsString !== void 0 ? consolePatchSettingsString : "{}");
					var appendComponentStack = parsedValue.appendComponentStack;
					var breakOnConsoleErrors = parsedValue.breakOnConsoleErrors;
					var showInlineWarningsAndErrors = parsedValue.showInlineWarningsAndErrors;
					var hideConsoleLogsInStrictMode = parsedValue.hideConsoleLogsInStrictMode;
					var browserTheme = parsedValue.browserTheme;
					return {
						appendComponentStack: (_castBool = castBool(appendComponentStack)) !== null && _castBool !== void 0 ? _castBool : true,
						breakOnConsoleErrors: (_castBool2 = castBool(breakOnConsoleErrors)) !== null && _castBool2 !== void 0 ? _castBool2 : false,
						showInlineWarningsAndErrors: (_castBool3 = castBool(showInlineWarningsAndErrors)) !== null && _castBool3 !== void 0 ? _castBool3 : true,
						hideConsoleLogsInStrictMode: (_castBool4 = castBool(hideConsoleLogsInStrictMode)) !== null && _castBool4 !== void 0 ? _castBool4 : false,
						browserTheme: (_castBrowserTheme = castBrowserTheme(browserTheme)) !== null && _castBrowserTheme !== void 0 ? _castBrowserTheme : "dark"
					};
				}
				function cacheConsolePatchSettings(devToolsSettingsManager, value1) {
					if (devToolsSettingsManager.setConsolePatchSettings == null) return;
					devToolsSettingsManager.setConsolePatchSettings(JSON.stringify(value1));
				}
				/**
				* Copyright (c) Meta Platforms, Inc. and affiliates.
				*
				* This source code is licensed under the MIT license found in the
				* LICENSE file in the root directory of this source tree.
				*
				* 
				*/ installConsoleFunctionsToWindow();
				installHook(window);
				var hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
				var savedComponentFilters = getDefaultComponentFilters();
				function backend_debug(methodName) {
					if (__DEBUG__) {
						var _console;
						for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
						(_console = console).log.apply(_console, [
							"%c[core/backend] %c".concat(methodName),
							"color: teal; font-weight: bold;",
							"font-weight: bold;"
						].concat(args));
					}
				}
				function connectToDevTools(options) {
					if (hook == null) return;
					var _ref = options || {};
					var _ref$host = _ref.host;
					var host = _ref$host === void 0 ? "localhost" : _ref$host;
					var nativeStyleEditorValidAttributes = _ref.nativeStyleEditorValidAttributes;
					var _ref$useHttps = _ref.useHttps;
					var useHttps = _ref$useHttps === void 0 ? false : _ref$useHttps;
					var _ref$port = _ref.port;
					var port = _ref$port === void 0 ? 8097 : _ref$port;
					var websocket = _ref.websocket;
					var _ref$resolveRNStyle = _ref.resolveRNStyle;
					var resolveRNStyle = _ref$resolveRNStyle === void 0 ? null : _ref$resolveRNStyle;
					var _ref$retryConnectionD = _ref.retryConnectionDelay;
					var retryConnectionDelay = _ref$retryConnectionD === void 0 ? 2e3 : _ref$retryConnectionD;
					var _ref$isAppActive = _ref.isAppActive;
					var isAppActive = _ref$isAppActive === void 0 ? function isAppActive$1() {
						return true;
					} : _ref$isAppActive;
					var devToolsSettingsManager = _ref.devToolsSettingsManager;
					var protocol = useHttps ? "wss" : "ws";
					var retryTimeoutID = null;
					function scheduleRetry() {
						if (retryTimeoutID === null) retryTimeoutID = setTimeout(function() {
							return connectToDevTools(options);
						}, retryConnectionDelay);
					}
					if (devToolsSettingsManager != null) try {
						initializeUsingCachedSettings(devToolsSettingsManager);
					} catch (e) {
						console.error(e);
					}
					if (!isAppActive()) {
						scheduleRetry();
						return;
					}
					var bridge = null;
					var messageListeners = [];
					var uri = protocol + "://" + host + ":" + port;
					var ws = websocket ? websocket : new window.WebSocket(uri);
					ws.onclose = handleClose;
					ws.onerror = handleFailed;
					ws.onmessage = handleMessage;
					ws.onopen = function() {
						bridge = new src_bridge({
							listen: function listen(fn) {
								messageListeners.push(fn);
								return function() {
									var index = messageListeners.indexOf(fn);
									if (index >= 0) messageListeners.splice(index, 1);
								};
							},
							send: function send(event, payload, transferable) {
								if (ws.readyState === ws.OPEN) {
									if (__DEBUG__) backend_debug("wall.send()", event, payload);
									ws.send(JSON.stringify({
										event,
										payload
									}));
								} else {
									if (__DEBUG__) backend_debug("wall.send()", "Shutting down bridge because of closed WebSocket connection");
									if (bridge !== null) bridge.shutdown();
									scheduleRetry();
								}
							}
						});
						bridge.addListener("updateComponentFilters", function(componentFilters) {
							savedComponentFilters = componentFilters;
						});
						if (devToolsSettingsManager != null && bridge != null) bridge.addListener("updateConsolePatchSettings", function(consolePatchSettings) {
							return cacheConsolePatchSettings(devToolsSettingsManager, consolePatchSettings);
						});
						if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null) bridge.send("overrideComponentFilters", savedComponentFilters);
						var agent$1 = new Agent(bridge);
						agent$1.addListener("shutdown", function() {
							hook.emit("shutdown");
						});
						initBackend(hook, agent$1, window);
						if (resolveRNStyle != null || hook.resolveRNStyle != null) setupNativeStyleEditor(bridge, agent$1, resolveRNStyle || hook.resolveRNStyle, nativeStyleEditorValidAttributes || hook.nativeStyleEditorValidAttributes || null);
						else {
							var lazyResolveRNStyle;
							var lazyNativeStyleEditorValidAttributes;
							var initAfterTick = function initAfterTick$1() {
								if (bridge !== null) setupNativeStyleEditor(bridge, agent$1, lazyResolveRNStyle, lazyNativeStyleEditorValidAttributes);
							};
							if (!hook.hasOwnProperty("resolveRNStyle")) Object.defineProperty(hook, "resolveRNStyle", {
								enumerable: false,
								get: function get() {
									return lazyResolveRNStyle;
								},
								set: function set(value1) {
									lazyResolveRNStyle = value1;
									initAfterTick();
								}
							});
							if (!hook.hasOwnProperty("nativeStyleEditorValidAttributes")) Object.defineProperty(hook, "nativeStyleEditorValidAttributes", {
								enumerable: false,
								get: function get() {
									return lazyNativeStyleEditorValidAttributes;
								},
								set: function set(value1) {
									lazyNativeStyleEditorValidAttributes = value1;
									initAfterTick();
								}
							});
						}
					};
					function handleClose() {
						if (__DEBUG__) backend_debug("WebSocket.onclose");
						if (bridge !== null) bridge.emit("shutdown");
						scheduleRetry();
					}
					function handleFailed() {
						if (__DEBUG__) backend_debug("WebSocket.onerror");
						scheduleRetry();
					}
					function handleMessage(event) {
						var data;
						try {
							if (typeof event.data === "string") {
								data = JSON.parse(event.data);
								if (__DEBUG__) backend_debug("WebSocket.onmessage", data);
							} else throw Error();
						} catch (e) {
							console.error("[React DevTools] Failed to parse JSON: " + event.data);
							return;
						}
						messageListeners.forEach(function(fn) {
							try {
								fn(data);
							} catch (error) {
								console.log("[React DevTools] Error calling listener", data);
								console.log("error:", error);
								throw error;
							}
						});
					}
				}
				function connectWithCustomMessagingProtocol(_ref2) {
					var onSubscribe = _ref2.onSubscribe;
					var onUnsubscribe = _ref2.onUnsubscribe;
					var onMessage = _ref2.onMessage;
					var settingsManager = _ref2.settingsManager;
					var nativeStyleEditorValidAttributes = _ref2.nativeStyleEditorValidAttributes;
					var resolveRNStyle = _ref2.resolveRNStyle;
					if (hook == null) return;
					if (settingsManager != null) try {
						initializeUsingCachedSettings(settingsManager);
					} catch (e) {
						console.error(e);
					}
					var wall = {
						listen: function listen(fn) {
							onSubscribe(fn);
							return function() {
								onUnsubscribe(fn);
							};
						},
						send: function send(event, payload) {
							onMessage(event, payload);
						}
					};
					var bridge = new src_bridge(wall);
					bridge.addListener("updateComponentFilters", function(componentFilters) {
						savedComponentFilters = componentFilters;
					});
					if (settingsManager != null) bridge.addListener("updateConsolePatchSettings", function(consolePatchSettings) {
						return cacheConsolePatchSettings(settingsManager, consolePatchSettings);
					});
					if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null) bridge.send("overrideComponentFilters", savedComponentFilters);
					var agent$1 = new Agent(bridge);
					agent$1.addListener("shutdown", function() {
						hook.emit("shutdown");
					});
					var unsubscribeBackend = initBackend(hook, agent$1, window);
					var nativeStyleResolver = resolveRNStyle || hook.resolveRNStyle;
					if (nativeStyleResolver != null) {
						var validAttributes = nativeStyleEditorValidAttributes || hook.nativeStyleEditorValidAttributes || null;
						setupNativeStyleEditor(bridge, agent$1, nativeStyleResolver, validAttributes);
					}
					return unsubscribeBackend;
				}
			})();
			return __webpack_exports__;
		})();
	});
} });
var import_backend = __toESM(require_backend(), 1);

//#endregion
//#region index.js
var init_react_devtools_core = __esm({ "index.js"() {
	globalThis.__REACT_DEVTOOLS__ = {
		version: 5.3,
		exports: import_backend
	};
} });

//#endregion
init_react_devtools_core();
})();
//# sourceURL=BlazeCordReactDevTools