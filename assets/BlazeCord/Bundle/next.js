(function() {
	var e = Object.create;
	var t = Object.defineProperty;
	var __name = (e, n) => t(e, "name", {
		value: n,
		configurable: true
	});
	var n = Object.getOwnPropertyDescriptor;
	var r = Object.getOwnPropertyNames;
	var i = Object.getPrototypeOf;
	var a = Object.prototype.hasOwnProperty;
	var __esmMin = (e, t) => () => (e && (t = e(e = 0)), t);
	var __commonJSMin = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
	var __export = (e, n) => {
		for (var r in n) t(e, r, {
			get: n[r],
			enumerable: true
		});
	};
	var __copyProps = (e, i, o, s) => {
		if (i && typeof i === "object" || typeof i === "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) {
			d = c[l];
			if (!a.call(e, d) && d !== o) t(e, d, {
				get: ((e) => i[e]).bind(null, d),
				enumerable: !(s = n(i, d)) || s.enumerable
			});
		}
		return e;
	};
	var __toESM = (n, r, a) => (a = n != null ? e(i(n)) : {}, __copyProps(r || !n || !n.__esModule ? t(a, "default", {
		value: n,
		enumerable: true
	}) : a, n));
	var __toCommonJS = (e) => __copyProps(t({}, "__esModule", { value: true }), e);
	function _execReqSubs(e) {
		for (var t of o) t(e);
		if (s.has(e)) {
			for (var n of s.get(e)) n(e);
			s.delete(e);
		}
	}
	function _execInitSubs(e, t) {
		for (var n of c) n(e, t);
		if (l.has(e)) {
			for (var r of l.get(e)) r(e, t);
			l.delete(e);
		}
	}
	function _execPathSubs(e, t) {
		for (var n of u) n(e, t);
	}
	var o, s, c, l, u;
	var d = __esmMin(() => {
		o = /* @__PURE__ */ new Set();
		s = /* @__PURE__ */ new Map();
		c = /* @__PURE__ */ new Set();
		l = /* @__PURE__ */ new Map();
		u = /* @__PURE__ */ new Set();
	});
	function getErrorStack(e) {
		return e instanceof Error ? e.stack : String(e);
	}
	var f = __esmMin(() => {});
	/**
	* Returns whether the object is a proxy.
	*
	* @param obj The object to check
	*/ function isProxy(e) {
		return p.has(e);
	}
	/**
	* Returns whether the object is a proxified value.
	*
	* @param obj The object to check
	*/ function isProxified(e) {
		return te.has(e);
	}
	/**
	* Returns the target of the proxy.
	*
	* @param obj The proxy
	* @returns The target of the proxy
	*/ function getProxyTarget(e) {
		return p.get(e);
	}
	/**
	* Proxify a value.
	*
	* @param signal The signal to use to get the value.
	* @param options The options to use for the proxified value.
	* @returns A proxified value that will be updated when the signal is updated.
	*
	* @example Without cache
	* ```ts
	* const proxified = proxify(() => ({ value: Math.random() }), { hint: 'object' })
	* console.log(proxified) // { value: 0.123 }
	* console.log(proxified.value) // 0.456
	* console.log(proxified) // { value: 0.789 }
	* ```
	*
	* @example With cache
	* ```ts
	* const proxified = proxify(() => ({ value: Math.random() }), { hint: 'object', cache: true })
	* console.log(proxified) // { value: 0.123 }
	* console.log(proxified.value) // 0.123
	* console.log(proxified) // { value: 0.123 }
	* ```
	*/ function proxify(e, t) {
		var n;
		switch (t?.hint) {
			case void 0:
			case "function":
				n = function hint$1() {};
				break;
			case "object":
				n = {};
				break;
			default:
				n = t.hint;
				break;
		}
		te.set(n, [
			e,
			t?.bindMethods ?? false,
			t?.cache ?? false
		]);
		if (0) var r;
		return new Proxy(n, ne);
	}
	/**
	* Get the value of a proxified value at the current moment.
	*
	* @see {@link proxify} for more documentation.
	*
	* @param proxified The proxified value.
	* @returns The unproxified value.
	*
	* @throws {TypeError} If the value is not a proxified value.
	*
	* @example Without cache
	* ```ts
	* const proxified = proxify(() => ({ value: Math.random() }), { hint: 'object' })
	* const x = unproxify(proxified)
	* console.log(x) // { value: 0.123 }
	* console.log(x.value) // 0.123
	* console.log(proxified) // { value: 0.456 }
	* ```
	*
	* @example With cache
	* ```ts
	* const proxified = proxify(() => ({ value: Math.random() }), { hint: 'object', cache: true })
	* const x = unproxify(proxified)
	* console.log(x) // { value: 0.123 }
	* console.log(x.value) // 0.123
	* console.log(proxified) // { value: 0.123 }
	* ```
	*/ function unproxify(e) {
		var t = getProxyTarget(e);
		if (!t) throw new TypeError(`${typeof e} is not a proxified value`);
		return unproxifyFromHint(t);
	}
	function unproxifyFromHint(e) {
		var t = te.get(e);
		if (t[1]) return t[2] ?? (t[3] = t[0]());
		return t[0]();
	}
	/**
	* Destructure a proxified value.
	*
	* @param proxified The proxified value.
	* @param options The options to use for the destructured value.
	*
	* @see {@link proxify} for more documentation.
	*
	* @throws {TypeError} If the value is not a proxifiable value (primitives).
	*
	* @example
	* ```ts
	* // cache is not turned on, so each access will call the signal again
	* const { x, y } = destructure(
	*   proxify(() => ({ x: Math.random(), y: [Math.random()], z: null })),
	*   { hint: 'object' }
	* )
	*
	* // Non-nullish primitives are not proxifiable
	* x // TypeError: Cannot destructure and proxify a primitive (reading 'x')
	*
	* y // [0.123]
	* y // [0.456]
	*
	* z // TypeError: Cannot destructure and proxify null (reading 'z')
	* ```
	*/ function destructure(e, t) {
		return new Proxy({}, { get: (n, r) => proxify(() => {
			var t = unproxify(e)[r];
			if (t == null) throw new TypeError(`Cannot destructure and proxify ${t} (reading '${String(r)}')`);
			if (typeof t === "function" || typeof t === "object") return t;
			throw new TypeError(`Cannot destructure and proxify a primitive (reading '${String(r)}')`);
		}, t) });
	}
	var p, ee, te, ne;
	var m = __esmMin(() => {
		p = /* @__PURE__ */ new WeakMap();
		ee = globalThis.Proxy;
		globalThis.Proxy = new Proxy(ee, { construct(e, t) {
			var n = new ee(t[0], t[1]);
			p.set(n, t[0]);
			return n;
		} });
		te = /* @__PURE__ */ new WeakMap();
		ne = {
			...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((e) => [e, (t, ...n) => Reflect[e](unproxifyFromHint(t), ...n)])),
			get: (e, t, n) => {
				var r = unproxifyFromHint(e);
				var i = Reflect.get(r, t, n);
				if (te.get(e)[1] && typeof i === "function") return new Proxy(i, { apply: (e, t, i) => Reflect.apply(e, t === n ? r : t, i) });
				return i;
			},
			getOwnPropertyDescriptor: (e, t) => {
				var n = Reflect.getOwnPropertyDescriptor(unproxifyFromHint(e), t);
				if (n && !Reflect.getOwnPropertyDescriptor(e, t)) Object.defineProperty(e, t, n);
				return n;
			}
		};
	});
	var re = {};
	__export(re, {
		getInitializedModuleExports: () => getInitializedModuleExports,
		getModuleDependencies: () => getModuleDependencies,
		initializedModuleHasBadExports: () => initializedModuleHasBadExports,
		isModuleExportBad: () => isModuleExportBad,
		isModuleExportsBad: () => isModuleExportsBad,
		isModuleInitialized: () => isModuleInitialized,
		uninitializedModuleHasBadExports: () => uninitializedModuleHasBadExports
	});
	/**
	* Returns whether an uninitialized module has bad exports.
	*
	* @see {@link isModuleExportsBad} for more information on what is considered bad module exports.
	*
	* @param id The module ID.
	*/ function uninitializedModuleHasBadExports(e) {
		return !oe.has(e);
	}
	/**
	* Returns whether an initialized module has bad exports.
	*
	* @see {@link isModuleExportsBad} for more information on what is considered bad module exports.
	*
	* @param id The module ID.
	*/ function initializedModuleHasBadExports(e) {
		return !se.has(e);
	}
	/**
	* Returns the dependencies of a module.
	* @param id The module ID.
	*/ function getModuleDependencies(e) {
		return le.get(e)?.[0];
	}
	/**
	* Returns whether a module is initialized.
	* @param id The module ID.
	*/ function isModuleInitialized(e) {
		return le.get(e)?.[1];
	}
	/**
	* Returns the exports of an initialized module.
	* @param id The module ID.
	*/ function getInitializedModuleExports(e) {
		return le.get(e)?.[2]?.exports;
	}
	/**
	* Returns whether a particular module export is bad. This is used for filter functions to check whether an export is filterable.
	* @param exp The export to check.
	*/ function isModuleExportBad(e) {
		return e == null || isProxy(e);
	}
	/**
	* Returns whether the module has bad exports. If it does, it will be "blacklisted" to avoid filtering issues.
	*
	* **Which module exports are considered bad?** Anything not an object or function, or an empty object.
	*
	* @param exports The exports of the module.
	*/ function isModuleExportsBad(e) {
		return e == null || !(typeof e === "object" || typeof e === "function") || e.__proto__ === Object.prototype && !Reflect.ownKeys(e).length || e === nativeModuleProxy;
	}
	var ie = __esmMin(() => {
		m();
		ue();
	});
	function patchMetroDefine(e) {
		return (t, n, r) => {
			var i = [r, false];
			le.set(n, i);
			oe.add(n);
			e((e, r, a, o, s, c, l) => {
				i[2] = s;
				var u = ae;
				ae = n;
				_execReqSubs(n);
				try {
					t(e, r, a, o, s, c, l);
					i[1] = true;
					if (!isModuleExportsBad(s.exports)) se.add(n);
					_execInitSubs(n, s.exports);
				} catch {}
				ae = u;
				oe.delete(n);
			}, n, r);
		};
	}
	var ae, oe, se, ce, le;
	var ue = __esmMin(() => {
		d();
		ie();
		ae = null;
		oe = /* @__PURE__ */ new Set();
		se = /* @__PURE__ */ new Set();
		ce = /* @__PURE__ */ new Map();
		le = /* @__PURE__ */ new Map();
	});
	/**
	* Intercept a property when set on an object to modify its value. **Only one callback can be set for a property at a time.**
	*
	* @param prop The property to intercept.
	* @param callback The callback to call when the property is set, can return a non-null value to set the property to.
	* @returns The function to unintercept the property.
	*/ function interceptProperty(e, t) {
		if (h.has(e)) throw new Error(`Property ${String(e)} is already being intercepted`);
		var n = Object.prototype;
		h.set(e, Object.getOwnPropertyDescriptor(n, e));
		de(n, e, {
			configurable: true,
			set(r) {
				if (this === n) {
					h.set(e, {
						configurable: true,
						value: r
					});
					return;
				}
				de(this, e, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: t(this, r) ?? r
				});
			},
			get() {
				var t = h.get(e);
				return t && (t.value ?? t.get?.call(this));
			}
		});
		return () => {
			delete n[e];
			var t = h.get(e);
			if (t) de(n, e, t);
			return h.delete(e);
		};
	}
	/**
	* Simple check if to see if value is an object.
	*
	* @param val The value to check.
	*/ function isObject(e) {
		return e && typeof e === "object" && !Array.isArray(e);
	}
	/**
	* Deep merge two objects.
	*
	* @param target The object to merge into.
	* @param source The object to merge from.
	*
	* @returns The merged target.
	*/ function mergeDeep(e, t) {
		if (isObject(e) && isObject(t)) for (var n in t) if (isObject(t[n])) {
			if (!e[n]) Object.assign(e, { [n]: {} });
			mergeDeep(e[n], t[n]);
		} else Object.assign(e, { [n]: t[n] });
		return e;
	}
	/**
	* Define a lazy property on an object that will be loaded when accessed.
	*
	* @param target The target object to define the property on.
	* @param property The property key to define.
	* @param loader The function that will be called to load the property value when accessed.
	* @return The target object with the lazy property defined.
	*/ function defineLazyProperty(e, t, n) {
		return Object.defineProperty(e, t, lazyPropDesc(t, n));
	}
	/**
	* Define multiple lazy properties on an object that will be loaded when accessed.
	*
	* @param target The target object to define the properties on.
	* @param loaders An object where each key is a property name and the value is a function that returns the property value when accessed.
	* @returns The target object with the lazy properties defined.
	*/ function defineLazyProperties(e, t) {
		var n = {};
		for (var r in t) n[r] = lazyPropDesc(r, t[r]);
		return Object.defineProperties(e, n);
	}
	function lazyPropDesc(e, t) {
		return {
			configurable: true,
			get() {
				delete this[e];
				return this[e] = t();
			}
		};
	}
	var de, h;
	var fe = __esmMin(() => {
		de = Object.defineProperty;
		Object.freeze = (e) => e;
		Object.defineProperty = (e, t, n) => {
			if (e === Object.prototype && h.has(t)) {
				h.set(t, n);
				return e;
			}
			return de(e, t, n);
		};
		h = /* @__PURE__ */ new Map();
	});
	var pe = {};
	__export(pe, {
		onAnyModuleFirstRequired: () => onAnyModuleFirstRequired,
		onAnyModuleInitialized: () => onAnyModuleInitialized,
		onModuleFinishedImporting: () => onModuleFinishedImporting,
		onModuleFirstRequired: () => onModuleFirstRequired,
		onModuleInitialized: () => onModuleInitialized
	});
	/**
	* Registers a callback to be called when any module is initialized.
	*
	* This runs after the module factory has been executed, but before the module is considered initialized by Metro.
	* However, Revenge APIs will consider the module initialized at this point.
	*
	* @see {@link initializedModuleHasBadExports} to avoid bad module exports.
	*
	* @param callback The callback to be called.
	* @returns A function that unregisters the callback.
	*/ function onAnyModuleInitialized(e) {
		c.add(e);
		return () => c.delete(e);
	}
	/**
	* Registers a callback to be called when a specific module is initialized.
	*
	* This runs after the module factory has been executed, but before the module is considered initialized by Metro.
	* However, Revenge APIs will consider the module initialized at this point.
	*
	* @see {@link initializedModuleHasBadExports} to avoid bad module exports.
	*
	* @param id The ID of the module.
	* @param callback The callback to be called.
	* @returns A function that unregisters the callback.
	*/ function onModuleInitialized(e, t) {
		var n = l.get(e);
		if (!n) {
			n = /* @__PURE__ */ new Set();
			l.set(e, n);
		}
		n.add(t);
		return () => n.delete(t);
	}
	/**
	* Registers a callback to be called when a module with a specific import path is initialized.
	*
	* @see {@link initializedModuleHasBadExports} to avoid bad module exports.
	*
	* @param callback The callback to be called.
	* @returns A function that unregisters the callback.
	*/ function onModuleFinishedImporting(e) {
		u.add(e);
		return () => u.delete(e);
	}
	/**
	* Registers a callback to be called when any module is being initialized.
	*
	* This runs before the module factory is executed.
	*
	* @see {@link initializedModuleHasBadExports} to avoid bad module exports.
	*
	* @param callback The callback to be called.
	* @returns A function that unregisters the callback.
	*/ function onAnyModuleFirstRequired(e) {
		o.add(e);
		return () => o.delete(e);
	}
	/**
	* Registers a callback to be called when a specific module is being initialized.
	*
	* This runs before the module factory is executed.
	*
	* @see {@link initializedModuleHasBadExports} to avoid bad module exports.
	*
	* @param id The ID of the module.
	* @param callback The callback to be called.
	* @returns A function that unregisters the callback.
	*/ function onModuleFirstRequired(e, t) {
		var n = s.get(e);
		if (!n) {
			n = /* @__PURE__ */ new Set();
			s.set(e, n);
		}
		n.add(t);
		return () => n.delete(t);
	}
	var me = __esmMin(() => {
		d();
	});
	var he = {};
	__export(he, {
		byDependencies: () => v,
		byName: () => _,
		byProps: () => g,
		bySingleProp: () => _e,
		createFilterGenerator: () => createFilterGenerator,
		every: () => Se,
		moduleStateAware: () => we,
		preferExports: () => y,
		some: () => Ce,
		withoutProps: () => ge
	});
	function createFilterGenerator(e, t) {
		var generator = (...n) => {
			var filter = (t, r) => e(n, t, r);
			filter.key = t(n);
			return filter;
		};
		generator.keyFor = t;
		return generator;
	}
	/**
	* Make this set of comparable dependencies as loose.
	*
	* Making a dependency loose skips the exact length check, but the order of the set dependencies still matters.
	* If you mark an index as dynamic, the same index must also be present in the other map during comparison to pass.
	*
	* @param deps The dependency map to make loose. This permanently modifies the array.
	* @returns The modified dependency map.
	*/ function loose$6(e) {
		e.l = true;
		return e;
	}
	/**
	* Marks this dependency to compare relatively to the module ID being compared.
	*
	* @param id The dependency ID to mark as relative.
	* @param root Marks this dependency to compare relatively to the root (returning) module ID being compared. Useful for nested comparisons where you want to compare by the root module ID instead of the parent's module ID of the nested dependency.
	*/ function relative$10(e, t) {
		e = (e < 0 ? -e | ve : e) | ye;
		if (t) e |= be;
		return e;
	}
	function depCompare(e, t, n, r) {
		if (t.l ? e.length < t.length : e.length !== t.length) return false;
		for (var i = 0; i < t.length; i++) {
			var a = t[i];
			if (a === void 0) continue;
			var o = e[i];
			if (Array.isArray(a)) {
				if (a.r && !depShallowCompare(a.r, o, n, r)) return false;
				if (depCompare(getModuleDependencies(o), a, n, o)) continue;
			} else if (depShallowCompare(a, o, n, r)) continue;
			return false;
		}
		return true;
	}
	function depShallowCompare(e, t, n, r) {
		if (e & ye) e = (e & be ? n : r) + depGetRelMagnitude(e);
		return e === t;
	}
	function depGetRelMagnitude(e) {
		var t = e & ve;
		e = e & xe;
		if (t) e = -e;
		return e;
	}
	function depGenFilterKey(e) {
		var t = "";
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			if (r === void 0) t += ",";
			else if (Array.isArray(r)) {
				if (r.l) t += "#";
				t += `[${depGenFilterKey(r)}],`;
			} else if (r & ye) {
				var i = depGetRelMagnitude(r);
				var a = r & be ? "~" : "^";
				t += `${a}${i},`;
			} else t += `${r},`;
		}
		return t.substring(0, t.length - 1);
	}
	function filtersToKey(e) {
		var t = "";
		for (var n of e) t += `${n.key},`;
		return t.substring(0, t.length - 1);
	}
	var g, ge, _e, _, v, ve, ye, be, xe, Se, Ce, we, y;
	var b = __esmMin(() => {
		ue();
		ie();
		g = createFilterGenerator((e, t, n) => {
			if (typeof n === "object" || typeof n === "function") {
				for (var r of e) {
					if (r in n) continue;
					return false;
				}
				return true;
			}
			return false;
		}, (e) => `revenge.props(${e.join(",")})`);
		ge = createFilterGenerator((e, t, n) => {
			if (typeof n === "object" || typeof n === "function") {
				for (var r of e) if (r in n) return false;
			}
			return true;
		}, (e) => `revenge.withoutProps(${e.join(",")})`);
		_e = createFilterGenerator(([e], t, n) => typeof n === "object" && Object.keys(n).length === 1 && e in n, ([e]) => `revenge.singleProp(${e})`);
		_ = createFilterGenerator(([e], t, n) => n.name === e, ([e]) => `revenge.name(${e})`);
		v = createFilterGenerator(([e], t) => depCompare(getModuleDependencies(t), e, t, t), (e) => `revenge.deps(${depGenFilterKey(e)})`);
		v.loose = loose$6;
		v.relative = relative$10;
		__name(loose$6, "loose");
		ve = 1 << 30;
		ye = 1 << 29;
		be = 1 << 28;
		xe = ~(ve | ye | be);
		__name(relative$10, "relative");
		/**
		* Marks this dependency to compare relatively to the module ID being compared, with an additional dependencies check.
		*
		* @param deps The dependency map to add the relative dependency to. This permanently modifies the array.
		* @param id The dependency ID to mark as relative.
		* @param root Whether to use {@link relative.toRoot} instead of {@link relative}. Defaults to `false`.
		* @returns The modified dependency map.
		*
		* @see {@link byDependencies}
		* @see {@link relative}
		* @see {@link relative.toRoot}
		*
		* @example
		* ```ts
		* const { relative } = byDependencies
		*
		* // This filter will match modules having one dependency that is its module ID + 1
		* // And module ID + 1 would have exactly two dependencies: [Any, 2]
		* byDependencies(
		*   relative.withDependencies(
		*     [undefined, 2],
		*     1, // Always the next module to the one being compared
		*     true, // The module ID being compared matches the returning (root) module ID
		*   )
		* )
		* ```
		*/ relative$10.withDependencies = (e, t, n) => {
			e.r = relative$10(t, n);
			return e;
		};
		Se = createFilterGenerator((e, t, n) => {
			for (var r of e) {
				if (r(t, n)) continue;
				return false;
			}
			return true;
		}, (e) => `revenge.every(${filtersToKey(e)})`);
		Ce = createFilterGenerator((e, t, n) => {
			for (var r of e) if (r(t, n)) return true;
			return false;
		}, (e) => `revenge.some(${filtersToKey(e)})`);
		we = createFilterGenerator(([e, t, n], r, i) => {
			if (isModuleInitialized(r)) {
				if (initializedModuleHasBadExports(r)) return false;
				if (e(r, i)) return n ? t(r) : true;
				return false;
			}
			return t(r);
		}, ([e, t]) => `revenge.moduleStateAware(${e.key},${t.key})`);
		y = createFilterGenerator(([e, t, n], r, i) => {
			if (se.has(r)) {
				if (e(r, i)) return n ? t(r) : true;
				return false;
			}
			return t(r);
		}, ([e, t]) => `revenge.preferExports(${e.key},${t.key})`);
	});
	var Te = {};
	__export(Te, {
		BundleUpdaterManager: () => je,
		CacheModule: () => De,
		ClientInfoModule: () => ke,
		DeviceModule: () => Ae,
		FileModule: () => Oe,
		ThemeModule: () => Me
	});
	var Ee, De, Oe, ke, Ae, je, Me;
	var Ne = __esmMin(() => {
		Ee = nativeModuleProxy;
		De = Ee.NativeCacheModule;
		Oe = Ee.NativeFileModule;
		ke = Ee.NativeClientInfoModule;
		Ae = Ee.NativeDeviceModule;
		je = Ee.BundleUpdaterManager;
		Me = Ee.NativeThemeModule;
	});
	var Pe = {};
	__export(Pe, {
		React: () => Le,
		ReactJsxRuntime: () => ze,
		ReactJsxRuntimeModuleId: () => Ie,
		ReactModuleId: () => x,
		ReactNative: () => Re,
		ReactNativeModuleId: () => Fe
	});
	var x, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We;
	var S = __esmMin(() => {
		b();
		it();
		Be = 0;
		Ve = waitForModules(g("useState"), (e, t) => {
			if (Be++ === 2) return Ve();
			x = t;
			Le = e;
		});
		He = waitForModules(g("AppRegistry"), (e, t) => {
			He();
			Fe = t;
			Re = e;
		});
		Ue = 0;
		We = waitForModules(g("jsxs"), (e, t) => {
			if (Ue++ === 2) return We();
			Ie = t;
			ze = e;
		});
	});
	function findInTree(e, t, n) {
		var r = [[e, 0]];
		var i = n?.maxDepth ?? 100;
		while (r.length > 0) {
			var [a, o] = r.pop();
			if (o > i || !a) continue;
			if (t(a)) return a;
			var s = Array.isArray(a);
			var c = s ? a : Object.keys(a);
			for (var l of c) {
				var u = s ? l : a[l];
				if (typeof u !== "object" || u == null) continue;
				if (!s && n?.walkable?.size && !n.walkable?.has(l)) continue;
				if (!s && n?.ignore?.has(l)) continue;
				r.push([u, o + 1]);
			}
		}
	}
	var Ge = __esmMin(() => {});
	function useReRender() {
		var [, e] = Le.useReducer((e) => ~e, 0);
		return e;
	}
	var Ke = __esmMin(() => {
		S();
	});
	/**
	* Get a storage object for a given path and directory.
	*
	* @param path Path relative to the directory.
	* @param directory Directory to use. Can be either 'cache' or 'documents'.
	*/ function getStorage(e, t) {
		var { CacheDirPath: n, DocumentsDirPath: r } = Oe.getConstants();
		var i = t?.directory ?? "documents";
		var a = i === "cache" ? n : r;
		var o = `${a}/${e}`;
		var s = /* @__PURE__ */ new Set();
		var c = {
			loaded: false,
			cache: t?.default,
			use(e) {
				if (!this.cache) this.get();
				var t = useReRender();
				Le.useEffect(() => {
					var n = e ? (n) => {
						if (e(n)) t();
					} : t;
					s.add(n);
					return () => {
						s.delete(n);
					};
				}, []);
				return this.cache;
			},
			exists() {
				return Oe.fileExists(o);
			},
			delete() {
				return Oe.removeFile(i, e);
			},
			async get() {
				if (!await this.exists()) {
					this.cache = t?.default ?? {};
					await this.set({});
					this.loaded = true;
					return this.cache;
				}
				var n = await Oe.readFile(o, "utf8");
				if (n) {
					this.loaded = true;
					try {
						var r = this.cache = JSON.parse(n);
						for (var a of s) a(r);
						return r;
					} catch (t) {
						console.error("Failed to parse storage file (most likely corrupted)", i, e, t);
					}
				}
			},
			async set(t) {
				if (!this.cache) await this.get();
				mergeDeep(this.cache, t);
				try {
					var n = JSON.stringify(this.cache);
					await Oe.writeFile(i, e, n, "utf8");
					for (var r of s) r(t);
				} catch (t) {
					console.error("Failed to write storage file", i, e, t);
				}
			}
		};
		if (t?.load) c.get();
		return c;
	}
	var qe = __esmMin(() => {
		Ne();
		S();
		fe();
		Ke();
	});
	function debounce(e, t) {
		var n;
		return (...r) => new Promise((i) => {
			clearTimeout(n);
			n = setTimeout(() => {
				i(e(...r));
			}, t);
		});
	}
	var noopFalse, noop;
	var Je = __esmMin(() => {
		noopFalse = () => false;
		noop = () => {};
	});
	function cacheFilterResult(e, t, n) {
		var r = C[e] ??= {};
		r[t] = n;
		$e();
		return n;
	}
	var Ye, Xe, C, Ze, Qe, $e;
	var et = __esmMin(() => {
		Ne();
		qe();
		Je();
		Ye = 1;
		Xe = `${Ye}.${ke.Build}`;
		C = {};
		Ze = getStorage(`revenge/modules.${Xe}`, {
			default: C,
			directory: "cache"
		});
		Qe = Ze.get().then((e) => {
			var t = e !== C;
			if (t) {
				Object.assign(C, e);
				Ze.cache = C;
			}
			return t;
		});
		$e = debounce(() => {
			Ze.set({});
		}, 1e3);
	});
	function runFilter(e, t, n, r) {
		if (n === void 0) {
			if (e(t)) if (0) var i;
			else return runFilter(e, t, __r(t), r);
			return;
		}
		if (e(t, n)) return cacheFilterResult(e.key, t, tt.Namespace);
		var a = n.default;
		if (!r?.skipDefault && !isModuleExportBad(a) && e(t, a)) return cacheFilterResult(e.key, t, tt.Default);
	}
	function exportsFromFilterResultFlag(e, t, n) {
		if (e === tt.Default && !n?.returnNamespace) return t.default;
		return t;
	}
	var tt;
	var nt = __esmMin(() => {
		et();
		ie();
		tt = {
			Found: 1,
			Default: 2,
			Namespace: 3
		};
	});
	var rt = {};
	__export(rt, {
		waitForModuleByImportedPath: () => waitForModuleByImportedPath,
		waitForModules: () => waitForModules
	});
	function waitForModules(e, t, n) {
		return onAnyModuleInitialized(n?.includeAll ? (r, i) => {
			var a = runFilter(e, r, i, n);
			if (a) t(exportsFromFilterResultFlag(a, i, n), r);
		} : (r, i) => {
			if (initializedModuleHasBadExports(r)) return;
			var a = runFilter(e, r, i, n);
			if (a) t(exportsFromFilterResultFlag(a, i, n), r);
		});
	}
	/**
	* Wait for a module to initialize by its imported path. **Callback won't be called if the module is already initialized!**
	*
	* Once callback is called, the subscription will be removed automatically, because modules have unique imported paths.
	*
	* Think of it as if you are doing `import * as exports from path`, and you are also waiting for the app to initialize the module by itself.
	*
	* @param path The path to wait for.
	* @param callback The callback to call once the module is initialized.
	* @param options The options to use for the wait.
	* @returns A function to unsubscribe.
	*
	* @example
	* ```ts
	* waitForModuleByImportedPath(
	*   'utils/PlatformUtils.tsx',
	*   (exports, id) => {
	*      // Do something with the module...
	*   }
	* )
	* ```
	*/ function waitForModuleByImportedPath(e, t, n) {
		var r = onModuleFinishedImporting(n?.includeAll ? (n, i) => {
			if (e === i) {
				r();
				t(getInitializedModuleExports(n), n);
			}
		} : (n, i) => {
			if (e === i) {
				r();
				if (initializedModuleHasBadExports(n)) return;
				t(getInitializedModuleExports(n), n);
			}
		});
		return r;
	}
	var it = __esmMin(() => {
		me();
		ie();
		nt();
	});
	var at;
	var ot = __esmMin(() => {
		b();
		it();
		ue();
		d();
		at = waitForModules(g("fileFinishedImporting"), (e) => {
			at();
			var t = e.fileFinishedImporting;
			e.fileFinishedImporting = (e) => {
				t(e);
				var n = ae;
				ce.set(e, n);
				_execPathSubs(n, e);
			};
		});
	});
	var st = {};
	var ct = __esmMin(() => {
		ot();
	});
	/** @throws {TypeError} When `hookNode` is defined, its hook and that of all other hook nodes in its list must also be defined. */ function applyHooks(e, t) {
		while (e) {
			var { next: n, hook: r } = e;
			t = r(t);
			e = n;
		}
		return t;
	}
	function createPatchedFunctionProxy(e, t, n, r, i, a) {
		var o = function state$1() {};
		var s = new Proxy(o, lt);
		o.proxy = s;
		o.target = e;
		o.parent = t;
		o.key = n;
		o.before = r;
		o.instead = i;
		o.after = a;
		ut.set(s, o);
		t[n] = s;
		return o;
	}
	function unproxy$1(e) {
		var { parent: t, key: n, proxy: r } = e;
		if (t[n] === r) {
			t[n] = e.target;
			ut.delete(r);
		}
	}
	var lt, ut;
	var dt = __esmMin(() => {
		lt = {
			apply(e, t, n) {
				n = applyHooks(e.before, n);
				var { instead: r } = e;
				var i;
				if (r === void 0) i = Reflect.apply(e.target, t, n);
				else i = Reflect.apply(r.hook, t, [n, r.next === void 0 ? e.target : r.next.proxy]);
				i = applyHooks(e.after, i);
				return i;
			},
			construct(e, t, n) {
				t = applyHooks(e.before, t);
				var { instead: r } = e;
				var i;
				if (r === void 0) i = Reflect.construct(e.target, t, n);
				else i = Reflect.construct(r.hook, [t, r.next === void 0 ? e.target : r.next.proxy], n);
				i = applyHooks(e.after, i);
				return i;
			},
			defineProperty: (e, t, n) => Reflect.defineProperty(e.target, t, n),
			deleteProperty: (e, t) => Reflect.deleteProperty(e.target, t),
			get: (e, t, n) => Reflect.get(e.target, t, n),
			getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.target, t),
			getPrototypeOf: (e) => Reflect.getPrototypeOf(e.target),
			has: (e, t) => Reflect.has(e.target, t),
			isExtensible: (e) => Reflect.isExtensible(e.target),
			ownKeys: (e) => Reflect.ownKeys(e.target),
			preventExtensions: (e) => Reflect.preventExtensions(e.target),
			set: (e, t, n, r) => Reflect.set(e.target, t, n, r),
			setPrototypeOf: (e, t) => Reflect.setPrototypeOf(e.target, t)
		};
		ut = /* @__PURE__ */ new WeakMap();
		__name(unproxy$1, "unproxy");
	});
	function unpatchAfter(e, t) {
		if (t.unpatched) return;
		t.unpatched = true;
		t.hook = void 0;
		var { prev: n, next: r } = t;
		if (n === void 0) {
			e.after = r;
			if (r === void 0) {
				if (e.before === void 0 && e.instead === void 0) unproxy$1(e);
				return;
			}
		} else {
			n.next = r;
			t.prev = void 0;
			if (r === void 0) return;
		}
		r.prev = n;
		t.next = void 0;
	}
	function after(e, t, n) {
		var r = e[t];
		var i = ut.get(r);
		var a;
		if (i?.parent === e && i.key === t) {
			var o = i.after;
			a = {
				hook: n,
				next: o,
				prev: void 0,
				unpatched: false
			};
			if (o) o.prev = a;
			i.after = a;
		} else {
			a = {
				hook: n,
				next: void 0,
				prev: void 0,
				unpatched: false
			};
			i = createPatchedFunctionProxy(r, e, t, void 0, void 0, a);
		}
		return unpatchAfter.bind(void 0, i, a);
	}
	var ft = __esmMin(() => {
		dt();
	});
	function unpatchBefore(e, t) {
		if (t.unpatched) return;
		t.unpatched = true;
		t.hook = void 0;
		var { prev: n, next: r } = t;
		if (n === void 0) {
			e.before = r;
			if (r === void 0) {
				if (e.instead === void 0 && e.after === void 0) unproxy$1(e);
				return;
			}
		} else {
			n.next = r;
			t.prev = void 0;
			if (r === void 0) return;
		}
		r.prev = n;
		t.next = void 0;
	}
	function before(e, t, n) {
		var r = e[t];
		var i = ut.get(r);
		var a;
		if (i?.parent === e && i.key === t) {
			var o = i.before;
			a = {
				hook: n,
				next: o,
				prev: void 0,
				unpatched: false
			};
			if (o) o.prev = a;
			i.before = a;
		} else {
			a = {
				hook: n,
				next: void 0,
				prev: void 0,
				unpatched: false
			};
			i = createPatchedFunctionProxy(r, e, t, a, void 0, void 0);
		}
		return unpatchBefore.bind(void 0, i, a);
	}
	var pt = __esmMin(() => {
		dt();
	});
	function unpatchInstead(e, t) {
		if (t.unpatched) return;
		t.unpatched = true;
		t.hook = void 0;
		var { prev: n, next: r } = t;
		if (n === void 0) {
			e.instead = r;
			if (r === void 0) {
				if (e.before === void 0 && e.after === void 0) unproxy$1(e);
				return;
			}
		} else {
			n.next = r;
			t.prev = void 0;
			if (r === void 0) return;
		}
		r.prev = n;
		t.next = void 0;
	}
	function instead(e, t, n) {
		var r = e[t];
		var i = ut.get(r);
		var a = function hookNode$1() {};
		a.proxy = new Proxy(a, mt);
		a.target = r;
		a.unpatched = false;
		a.hook = n;
		a.prev = void 0;
		if (i?.parent === e && i.key === t) {
			var o = i.instead;
			a.next = o;
			if (o) o.prev = a;
			i.instead = a;
		} else {
			a.next = void 0;
			i = createPatchedFunctionProxy(r, e, t, void 0, a, void 0);
		}
		return unpatchInstead.bind(void 0, i, a);
	}
	var mt;
	var ht = __esmMin(() => {
		dt();
		mt = {
			...lt,
			apply(e, t, n) {
				var { next: r, hook: i } = e;
				return Reflect.apply(i, t, [n, r === void 0 ? e.target : r.proxy]);
			},
			construct(e, t, n) {
				var { next: r, hook: i } = e;
				return Reflect.construct(i, [t, r === void 0 ? e.target : r.proxy], n);
			}
		};
	});
	var gt = {};
	__export(gt, {
		after: () => after,
		before: () => before,
		instead: () => instead
	});
	var _t = __esmMin(() => {
		ft();
		pt();
		ht();
	});
	var vt, yt, bt;
	var xt = __esmMin(() => {
		b();
		it();
		_t();
		S();
		vt = /* @__PURE__ */ new Set();
		yt = /* @__PURE__ */ new Set();
		bt = waitForModules(g("AppRegistry"), () => {
			bt();
			before(Re.AppRegistry, "runApplication", (e) => {
				for (var t of vt) t();
				return e;
			});
			after(Re.AppRegistry, "runApplication", (e) => {
				for (var t of yt) t();
				return e;
			});
		});
	});
	var St = {};
	var Ct = __esmMin(() => {
		S();
		xt();
	});
	var wt, Tt;
	var Et = __esmMin(() => {
		wt = /* @__PURE__ */ new Set();
		Tt = /* @__PURE__ */ new WeakMap();
	});
	function cacheAsset(e, t) {
		mergeDeep(w, { [e.name]: { [e.type]: t } });
		jt();
	}
	var Dt, Ot, w, kt, At, jt;
	var Mt = __esmMin(() => {
		Ne();
		qe();
		Je();
		fe();
		Dt = 1;
		Ot = `${Dt}.${ke.Build}`;
		w = {};
		kt = getStorage(`revenge/assets.${Ot}`, {
			default: w,
			directory: "cache"
		});
		At = kt.get().then((e) => {
			var t = e !== w;
			if (t) {
				Object.assign(w, e);
				kt.cache = w;
			}
			return t;
		});
		jt = debounce(() => {
			kt.set({});
		}, 1e3);
	});
	var Nt = {};
	__export(Nt, {
		AssetsRegistry: () => Pt,
		AssetsRegistryModuleId: () => Ft
	});
	var Pt, Ft, It, Lt;
	var Rt = __esmMin(() => {
		ue();
		b();
		it();
		ie();
		Et();
		Mt();
		It = waitForModules(g("registerAsset"), (e, t) => {
			Ft = t;
			Pt = e;
			if (getModuleDependencies(t).length) {
				It();
				At.then((e) => {
					if (!e) {
						var n = t - 1;
						for (var r of oe) {
							if (r < n) continue;
							var i = getModuleDependencies(r);
							if (i.length === 1 && i[0] === t) __r(r);
						}
					}
				});
				return;
			}
			var n = e.registerAsset;
			e.registerAsset = (e) => {
				var t = n(e);
				if (e.__packager_asset) {
					e.moduleId = ae;
					cacheAsset(e, ae);
				}
				return e.id = t;
			};
		});
		Lt = waitForModules(_("resolveAssetSource"), (e) => {
			Lt();
			e.addCustomSourceTransformer(({ asset: e }) => {
				if (!e.__packager_asset) return e;
			});
			e.addCustomSourceTransformer(({ asset: e }) => Tt.get(e));
		});
	});
	var zt = {};
	__export(zt, {
		lookupModule: () => lookupModule,
		lookupModuleByImportedPath: () => lookupModuleByImportedPath,
		lookupModules: () => lookupModules
	});
	function* lookupModules(e, t) {
		var n = true;
		var r = C[e.key];
		if (r === null) return;
		var i = /* @__PURE__ */ new Set();
		if (r) for (var a in r) {
			var o = r[a];
			var s = Number(a);
			var c = void 0;
			if (!isModuleInitialized(s)) {
				if (!(t?.initializeCached ?? true)) continue;
				c = __r(s);
			}
			yield [exportsFromFilterResultFlag(o, c ??= getInitializedModuleExports(s), t), s];
		}
		if (t?.includeInitialized ?? true) for (var l of se) {
			if (i.has(l)) continue;
			var u = getInitializedModuleExports(l);
			var d = runFilter(e, l, u, t);
			if (d) {
				n = false;
				yield [exportsFromFilterResultFlag(d, u, t), l];
			}
		}
		if (t?.includeUninitialized) for (var f of oe) {
			if (i.has(f)) continue;
			var p = runFilter(e, f);
			if (p) {
				n = false;
				yield [exportsFromFilterResultFlag(p, getInitializedModuleExports(f), t), f];
			}
		}
		if (n) C[e.key] = null;
	}
	function lookupModule(e, t) {
		var n = C[e.key];
		if (n === null) return [];
		if (n) for (var r in n) {
			var i = n[r];
			var a = Number(r);
			var o = void 0;
			if (!isModuleInitialized(a)) {
				if (!(t?.initializeCached ?? true)) continue;
				o = __r(a);
			}
			return [exportsFromFilterResultFlag(i, o ??= getInitializedModuleExports(a), t), a];
		}
		if (t?.includeInitialized ?? true) for (var s of se) {
			var c = getInitializedModuleExports(s);
			var l = runFilter(e, s, c, t);
			if (l) return [exportsFromFilterResultFlag(l, c, t), s];
		}
		if (t?.includeUninitialized) for (var u of oe) {
			var d = runFilter(e, u);
			if (d) return [exportsFromFilterResultFlag(d, getInitializedModuleExports(u), t), u];
		}
		C[e.key] = null;
		return [];
	}
	/**
	* Lookup an initialized module by its imported path.
	*
	* Think of it as if you are doing a `import * as exports from path`, the app must have already initialized the module or this will return `undefined`.
	*
	* @param path The path to lookup the module by.
	* @returns The module exports if the module is initialized, or `undefined` if the module is not found or not initialized.
	*
	* @example
	* ```ts
	* const [{ default: Logger }] = lookupModuleByImportedPath<{ default: typeof DiscordModules.Logger }>('modules/debug/Logger.tsx')
	* ```
	*/ function lookupModuleByImportedPath(e) {
		var t = ce.get(e);
		if (t == null) return [];
		return [getInitializedModuleExports(t), t];
	}
	var T = __esmMin(() => {
		m();
		et();
		ue();
		ie();
		nt();
	});
	var Bt = {};
	__export(Bt, { TypedEventEmitter: () => Ut });
	var Vt, Ht, Ut;
	var Wt = __esmMin(() => {
		b();
		T();
		m();
		[, Vt] = lookupModule(_("_createClass"));
		[, Ht] = lookupModule(_("_classCallCheck"));
		Ut = proxify(() => {
			var [e] = lookupModule(y(_("TypedEventEmitter"), v([
				Ht,
				Vt,
				[],
				2
			])), { includeUninitialized: true });
			if (e) return Ut = e;
		});
	});
	function allSettled(e) {
		var t = e.map((e) => e instanceof Promise ? e.then((e) => ({
			status: "fulfilled",
			value: e
		})).catch((e) => ({
			status: "rejected",
			reason: e
		})) : {
			status: "fulfilled",
			value: e
		});
		return Promise.all(t);
	}
	function sleep(e) {
		return new Promise((t) => {
			setTimeout(t, e);
		});
	}
	function sleepReject(e, t) {
		return new Promise((n, r) => {
			setTimeout(() => {
				r(t);
			}, e);
		});
	}
	var Gt = __esmMin(() => {});
	var Kt = {};
	__export(Kt, {
		getModule: () => getModule,
		getModuleByImportedPath: () => getModuleByImportedPath
	});
	function getModule(e, t, n) {
		var r = n?.max ?? 1;
		if (r === 1) {
			var [i, a] = lookupModule(e, n);
			if (a != null) {
				t(i, a);
				return noopFalse;
			}
		} else for (var [o, s] of lookupModules(e, n)) {
			t(o, s);
			if (--r === 0) return noopFalse;
		}
		var c = waitForModules(e, (e, n) => {
			if (--r === 0) c();
			t(e, n);
		}, n);
		return c;
	}
	/**
	* Get a single module by its imported path.
	* Once a module is found, unsubscription happens automatically, since imported paths are unique.
	*
	* @param path The path to find the module by.
	* @param options The options to use for the find.
	* @returns A promise that resolves to the module's exports or rejects if the find is aborted before the module is found.
	*
	* @example
	* ```ts
	* getModuleByImportedPath('modules/main_tabs_v2/native/settings/SettingsConstants.tsx', SettingsConstants => {
	*   console.log('Settings page opened') // Logs once the module is initialized
	* })
	* ```
	*/ function getModuleByImportedPath(e, t) {
		var [n, r] = lookupModuleByImportedPath(e);
		if (r != null) {
			t(n, r);
			return noopFalse;
		}
		var i = waitForModuleByImportedPath(e, (e, n) => {
			i();
			t(e, n);
		});
		return i;
	}
	var qt = __esmMin(() => {
		Je();
		T();
		it();
	});
	var Jt = {};
	var Yt = __esmMin(() => {});
	var Xt;
	var Zt = __esmMin(() => {
		b();
		qt();
		T();
		it();
		me();
		ie();
		Yt();
		Xt = {
			finders: {
				...Kt,
				...zt,
				...rt,
				filters: he
			},
			metro: {
				...re,
				...pe
			},
			native: Jt
		};
	});
	var Qt = {};
	__export(Qt, {
		PluginFlags: () => E,
		PluginStatus: () => D,
		PluginsStorageDirectory: () => $t
	});
	var E, D, $t;
	var O = __esmMin(() => {
		E = {
			Enabled: 1,
			ReloadRequired: 2,
			Errored: 4,
			EnabledLate: 8
		};
		D = {
			PreIniting: 1,
			PreInited: 2,
			Initing: 4,
			Inited: 8,
			Starting: 16,
			Started: 32,
			Stopping: 64
		};
		$t = "revenge/plugins/storage";
	});
	var en;
	var tn = __esmMin(() => {
		O();
		en = { constants: Qt };
	});
	var nn;
	var rn = __esmMin(() => {
		_t();
		Zt();
		tn();
		nn = {
			modules: Xt,
			plugins: en,
			patcher: gt
		};
	});
	function registerPlugin(e, t, n, r) {
		if (on.has(e.id)) throw new Error(`Plugin with ID "${e.id}" already registered`);
		var i = {
			_c: [],
			errors: [],
			manifest: e,
			lifecycles: {
				preInit: t.preInit,
				init: t.init,
				start: t.start,
				stop: t.stop
			},
			SettingsComponent: t.SettingsComponent,
			status: 0,
			flags: n,
			disable: () => disablePlugin(i),
			stop: () => stopPlugin(i)
		};
		A.set(e.id, [
			void 0,
			[],
			r,
			M.None
		]);
		on.set(e.id, i);
		k.emit("register", i, t);
	}
	function handlePluginError(e, t) {
		t.errors.push(e);
		t.flags |= E.Errored;
		var [n, , r] = A.get(t.manifest.id);
		var i = n.logger ?? console;
		i.error("Plugin encountered an error", e);
		k.emit("error", t, e);
		if (!(r & j.Essential)) return t.disable();
	}
	function preparePluginPreInit(e) {
		var t = A.get(e.manifest.id);
		e.errors = [];
		e.status &= ~E.Errored;
		var n = t[0] = {
			cleanup: (...t) => {
				e._c.push(...t);
			},
			plugin: e,
			unscoped: an
		};
		k.emit("preInit", e, n);
		t[3] = M.PreInit;
	}
	function preparePluginInit(e) {
		var t = A.get(e.manifest.id);
		k.emit("init", e, t[0]);
		t[3] = M.Init;
	}
	function preparePluginStart(e) {
		var t = A.get(e.manifest.id);
		k.emit("start", e, t[0]);
		t[3] = M.Start;
	}
	async function disablePlugin(e) {
		if (!(e.flags & E.Enabled)) throw new Error(`Plugin "${e.manifest.id}" is not enabled`);
		var t = A.get(e.manifest.id)[2] ?? 0;
		if (t & j.Essential) throw new Error(`Plugin "${e.manifest.id}" is essential and cannot be disabled`);
		if (e.status && !(e.status & D.Stopping)) await stopPlugin(e);
		e.flags &= ~E.Enabled;
		k.emit("disabled", e);
	}
	function enablePlugin(e, t) {
		if (e.flags & E.Enabled) throw new Error(`Plugin "${e.manifest.id}" is already enabled`);
		e.flags |= E.Enabled;
		if (t) e.flags |= E.EnabledLate;
		k.emit("enabled", e);
	}
	async function preInitPlugin(e) {
		var { manifest: { id: t }, lifecycles: n } = e;
		try {
			if (!n.preInit) return;
			var r = A.get(t);
			var [, i] = r;
			if (!(e.flags & E.Enabled)) throw new Error(`Plugin "${t}" is not enabled`);
			if (e.status & (D.PreIniting | D.PreInited)) throw new Error(`Plugin preInit lifecycle for "${t}" is already running`);
			preparePluginPreInit(e);
			e.status |= D.PreIniting;
			try {
				var a = n.preInit(r[0]);
				i.push(a);
				await a;
				e.status |= D.PreInited;
				e.status &= ~D.PreIniting;
			} catch (t) {
				await handlePluginError(t, e);
			}
		} finally {
			k.emit("preInited", e);
		}
	}
	async function initPlugin(e) {
		var { manifest: { id: t }, lifecycles: n } = e;
		try {
			if (!n.init) return;
			var r = A.get(t);
			var [, i, , a] = r;
			if (!(e.flags & E.Enabled)) throw new Error(`Plugin "${t}" is not enabled`);
			if (e.status & (D.Initing | D.Inited)) throw new Error(`Plugin init lifecycle for "${t}" is already running`);
			if (a < M.PreInit) preparePluginPreInit(e);
			if (a < M.Init) preparePluginInit(e);
			e.status |= D.Initing;
			try {
				var o = n.init(r[0]);
				i.push(o);
				await o;
				e.status |= D.Inited;
				e.status &= ~D.Initing;
			} catch (t) {
				await handlePluginError(t, e);
			}
		} finally {
			k.emit("inited", e);
		}
	}
	async function startPlugin(e) {
		var { manifest: { id: t }, lifecycles: n } = e;
		try {
			if (!n.start) return;
			var r = A.get(t);
			var [, i, , a] = r;
			if (!(e.flags & E.Enabled)) throw new Error(`Plugin "${t}" is not enabled`);
			if (e.status & (D.Starting | D.Started)) throw new Error(`Plugin start lifecycle for "${t}" is already running`);
			if (a < M.PreInit) preparePluginPreInit(e);
			if (a < M.Init) preparePluginInit(e);
			if (a < M.Start) preparePluginStart(e);
			e.status |= D.Starting;
			try {
				var o = n.start(r[0]);
				i.push(o);
				await o;
				e.status |= D.Started;
				e.status &= ~D.Starting;
			} catch (t) {
				await handlePluginError(t, e);
			}
		} finally {
			k.emit("started", e);
		}
	}
	async function stopPlugin(e) {
		var { manifest: { id: t }, lifecycles: n } = e;
		var r = A.get(t);
		var [, i, a, o] = r;
		if (a & j.Essential) throw new Error(`Plugin "${t}" is essential and cannot be stopped`);
		if (!(e.flags & E.Enabled)) throw new Error(`Plugin "${t}" is not enabled`);
		if (e.status & D.Stopping) throw new Error(`Plugin "${t}" is stopping`);
		if (e.status & (D.PreIniting | D.Initing | D.Starting)) await Promise.race([Promise.all(i), sleepReject(sn, "Plugin lifecycles timed out, force stopping")]).then((t) => {
			if (!t) e.flags |= E.ReloadRequired;
		}).catch((t) => {
			handlePluginError(t, e);
		});
		else if (!(e.status & (D.PreInited | D.Inited | D.Started))) throw new Error(`Plugin "${t}" is not running`);
		if (o < M.PreInit) preparePluginPreInit(e);
		if (o < M.Init) preparePluginInit(e);
		if (o < M.Start) preparePluginStart(e);
		e.status |= D.Stopping;
		try {
			if (!n.stop) return;
			await Promise.race([n.stop(r[0]), sleepReject(sn, "Plugin stop lifecycle timed out, force stopping")]);
		} catch (t) {
			await handlePluginError(t, e);
		} finally {
			function handleStopError(t) {
				e.flags |= E.ReloadRequired;
				return handlePluginError(t, e);
			}
			try {
				var s = await allSettled(e._c.map((e) => e()));
				await Promise.all(s.map((e) => e.status === "rejected" && handleStopError(e.reason)));
			} catch (e) {
				await handleStopError(e);
			}
			r[0] = void 0;
			r[3] = M.None;
			r[1] = [];
			e._c = [];
			e.status = 0;
			k.emit("stopped", e);
		}
	}
	var an, k, on, A, sn, j, M;
	var N = __esmMin(() => {
		Wt();
		Gt();
		rn();
		O();
		an = nn;
		k = new Ut();
		on = /* @__PURE__ */ new Map();
		A = /* @__PURE__ */ new Map();
		sn = 5e3;
		j = {
			Internal: 1,
			Essential: 2
		};
		M = {
			None: 0,
			PreInit: 1,
			Init: 2,
			Start: 3
		};
	});
	var cn = {};
	var ln = __esmMin(() => {
		N();
		k.on("register", (e, t) => {
			e._s = t.storage;
		});
	});
	var un = {};
	__export(un, { AppStartPerformance: () => fn });
	var dn, fn;
	var pn = __esmMin(() => {
		b();
		T();
		({relative: dn} = v);
		[fn] = lookupModule(y(g("markAndLog"), v([
			dn(-1),
			void 0,
			void 0,
			2
		])), { includeUninitialized: true });
		fn.mark("👊", "Pre-init");
	});
	var mn, hn, gn;
	var _n = __esmMin(() => {
		pn();
		N();
		O();
		fn.mark("👊", "Plugins register");
		mn = performance.now();
		registerPlugin({
			id: "revenge.logging",
			name: "Logging",
			description: "Extra logging for Revenge's internal modules",
			author: "Revenge",
			icon: "PaperIcon"
		}, {
			preInit() {
				hn = performance.now();
				fn.mark("👊", "Plugins preInit", hn - mn);
			},
			init() {
				gn = performance.now();
				fn.mark("👊", "Plugins init", gn - hn);
			},
			start({ logger: e }) {
				fn.mark("👊", "Plugins start", performance.now() - gn);
				e.log(`👊 Revenge. Discord, your way. (0.1.0-8aece26-main (production))`);
			}
		}, E.Enabled, j.Internal);
	});
	var vn = __esmMin(() => {
		b();
		it();
		_t();
		N();
		O();
		Je();
		registerPlugin({
			id: "revenge.no-track",
			name: "No Track",
			description: "Disables Discord's analytics/tracking, and Sentry.",
			author: "Revenge",
			icon: "AnalyticsIcon"
		}, {
			preInit({ cleanup: e, plugin: t }) {
				if (t.flags & E.EnabledLate) t.flags |= E.ReloadRequired;
				var n = waitForModules(g("initSentry"), (e) => {
					n();
					console.log("Patching SentryInitUtils...");
					instead(e, "initSentry", noop);
				});
				e(n);
			},
			init({ cleanup: e, logger: t }) {
				var n = waitForModules(g("trackNetworkAction"), (e) => {
					n();
					t.info("Patching AnalyticsUtils...");
					instead(e.default, "track", noop);
					instead(e, "trackNetworkAction", noop);
					for (var r in e.default.AnalyticsActionHandlers) instead(e.default.AnalyticsActionHandlers, r, noop);
				});
				var r = waitForModules(g("trackImpression"), (e) => {
					r();
					t.info("Patching useTrackImpression...");
					instead(e, "trackImpression", noop);
					instead(e, "default", noop);
				});
				e(n, r);
			},
			stop({ plugin: e }) {
				e.flags |= E.ReloadRequired;
			}
		}, E.Enabled, j.Internal);
	});
	var yn = {};
	var bn = __esmMin(() => {
		_n();
		vn();
	});
	var xn = {};
	var Sn = __esmMin(() => {
		N();
		O();
		for (var e of on.values()) if (e.flags & E.Enabled) preInitPlugin(e);
	});
	var Cn = {};
	var wn = __esmMin(() => {
		N();
		O();
		fe();
		qe();
		k.on("init", ({ _s: e, manifest: { id: t } }, n) => defineLazyProperty(n, "storage", () => getStorage(`${$t}/${t}.json`, {
			...e,
			directory: "documents"
		})));
	});
	var Tn = {};
	__export(Tn, { nodeUtil: () => On });
	var En, Dn, On;
	var kn = __esmMin(() => {
		b();
		T();
		m();
		({loose: En, relative: Dn} = v);
		On = proxify(() => {
			var [e] = lookupModule(y(g("inspect"), v([
				En([Dn(2, true), Dn(4, true)]),
				[],
				[]
			])), { includeUninitialized: true });
			if (e) return On = e;
		}, { hint: "object" });
	});
	var An = {};
	__export(An, {
		Clipboard: () => Pn,
		useClipboard: () => Nn
	});
	var jn, Mn, Nn, Pn;
	var Fn = __esmMin(() => {
		b();
		T();
		S();
		m();
		({relative: jn} = v);
		Mn = proxify(() => {
			var [e] = lookupModule(y(g("useClipboard"), v([jn.withDependencies([x, jn(2, true)], 1), jn.withDependencies([Fe, jn(3, true)], 2)])), { includeUninitialized: true });
			if (e) return Mn = e;
		}, { hint: "object" });
		({useClipboard: Nn} = destructure(Mn, { hint: "function" }));
		({default: Pn} = destructure(Mn, { hint: "object" }));
	});
	var In = {};
	__export(In, {
		ReactNavigationNative: () => Vn,
		ReactNavigationStack: () => Hn
	});
	var Ln, Rn, zn, Bn, Vn, Hn;
	var Un = __esmMin(() => {
		b();
		T();
		S();
		m();
		({loose: Ln, relative: Rn} = v);
		[, zn] = lookupModule(_("_createClass"));
		[, Bn] = lookupModule(_("_classCallCheck"));
		Vn = proxify(() => {
			var [e] = lookupModule(y(g("useLinkTo"), v(Ln([[], Ln([[zn, Bn]])]))), { includeUninitialized: true });
			if (e) return Vn = e;
		}, { hint: "object" });
		Hn = proxify(() => {
			var [e] = lookupModule(y(g("StackView"), v(Ln([
				Rn.withDependencies(Ln([
					[[]],
					x,
					Ie
				]), 1),
				void 0,
				Rn(3)
			]))), { includeUninitialized: true });
			if (e) return Hn = e;
		}, { hint: "object" });
	});
	var Wn = {};
	__export(Wn, { FlashList: () => Gn });
	var Gn;
	var Kn = __esmMin(() => {
		b();
		T();
		S();
		m();
		Gn = proxify(() => {
			var [e] = lookupModule(y(g("FlashList"), v([
				x,
				Fe,
				Ie,
				void 0,
				void 0,
				void 0,
				2,
				void 0
			])), { includeUninitialized: true });
			if (e) return Gn = e;
		}, { hint: "object" });
	});
	var qn = {};
	var Jn = __esmMin(() => {
		N();
		fe();
		defineLazyProperties(an.externals = {}, {
			Browserify: () => {
				return kn(), __toCommonJS(Tn);
			},
			ReactNativeClipboard: () => {
				return Fn(), __toCommonJS(An);
			},
			ReactNavigation: () => {
				return Un(), __toCommonJS(In);
			},
			Shopify: () => {
				return Kn(), __toCommonJS(Wn);
			}
		});
	});
	var Yn = {};
	__export(Yn, {
		Dispatcher: () => Zn,
		DispatcherModuleId: () => Qn,
		Stores: () => er,
		byStoreName: () => tr,
		getStore: () => getStore
	});
	function getStore(e, t) {
		var n = er[e];
		if (n) {
			t(n);
			return noopFalse;
		}
		return waitForModules(tr(e), t);
	}
	var Xn, Zn, Qn, $n, er, tr;
	var nr = __esmMin(() => {
		b();
		T();
		it();
		Je();
		({relative: Xn} = v);
		[Zn, Qn] = lookupModule(y(g("_interceptors"), v([
			Xn(1),
			void 0,
			void 0,
			void 0,
			void 0,
			2
		])), { includeUninitialized: true });
		waitForModules(g("_dispatchToken"), (e) => {
			$n[e.getName()] = e;
		});
		$n = {};
		er = new Proxy($n, {
			ownKeys: () => Reflect.ownKeys($n),
			get: (e, t) => $n[t]
		});
		tr = createFilterGenerator(([e], t, n) => n.getName?.length === 0 && n.getName() === e, ([e]) => `revenge.discord.byStoreName(${e})`);
	});
	var rr = {};
	__export(rr, {
		AppStartPerformance: () => fn,
		Constants: () => ur,
		Logger: () => or,
		Tokens: () => sr,
		TokensModuleId: () => cr,
		flux: () => Yn,
		utils: () => Bt
	});
	var ir, ar, or, sr, cr, lr, ur;
	var dr = __esmMin(() => {
		b();
		T();
		m();
		pn();
		nr();
		Wt();
		({loose: ir, relative: ar} = v);
		[or] = lookupModule(_("Logger"));
		[sr, cr] = lookupModule(g("RawColor"));
		lr = [2];
		ur = proxify(() => {
			var [e] = lookupModule(y(g("ME"), v(ir([
				void 0,
				ar.withDependencies(lr, 1),
				ar.withDependencies(lr, 2),
				ar.withDependencies(lr, 3),
				ar.withDependencies(lr, 4)
			]))));
			if (e) return ur = e;
		}, { hint: "object" });
	});
	var fr = {};
	__export(fr, {
		ActionSheetActionCreators: () => mr,
		AlertActionCreators: () => hr,
		ToastActionCreators: () => gr
	});
	var pr, mr, hr, gr;
	var _r = __esmMin(() => {
		b();
		T();
		S();
		m();
		nr();
		({relative: pr} = v);
		mr = proxify(() => {
			var [e] = lookupModule(y(g("hideActionSheet", "openLazy"), v([
				void 0,
				x,
				Ie,
				Qn,
				pr(1),
				pr(2),
				2
			])), { includeUninitialized: true });
			if (e) return mr = e;
		}, { hint: "object" });
		hr = proxify(() => {
			var [e] = lookupModule(y(g("openAlert"), v([
				[[], pr(1)],
				[Fe, 2],
				2
			])), { includeUninitialized: true });
			if (e) return hr = e;
		}, { hint: "object" });
		gr = proxify(() => {
			var e = lookupModules(y(Se(g("open"), ge("init")), v([Qn, 2])), { includeUninitialized: true });
			for (var [t] of e) if (t.open.length === 1) return gr = t;
		});
	});
	var vr = {};
	__export(vr, {
		Design: () => F,
		FormSwitch: () => br
	});
	var yr, P, F, br;
	var I = __esmMin(() => {
		b();
		T();
		S();
		m();
		({loose: yr, relative: P} = v);
		F = proxify(() => {
			var [e] = lookupModule(y(g("TableRow", "Button"), v(yr([
				P(1),
				void 0,
				P(2),
				P(3),
				2
			]))), { includeUninitialized: true });
			if (e) return F = e;
		}, { hint: "object" });
		br = proxify(() => {
			var [e] = lookupModule(y(_e("FormSwitch"), v([
				[
					P(1),
					P(2),
					void 0,
					P(3)
				],
				x,
				Fe,
				Ie,
				void 0,
				void 0,
				void 0,
				void 0,
				void 0,
				void 0,
				void 0,
				P(1),
				P(2),
				2
			])), { includeUninitialized: true });
			if (e) return br = e.FormSwitch;
		});
	});
	var xr = {};
	__export(xr, { RootNavigationRef: () => wr });
	var Sr, Cr, wr;
	var Tr = __esmMin(() => {
		b();
		T();
		m();
		({loose: Sr, relative: Cr} = v);
		wr = proxify(() => {
			var [e] = lookupModule(y(g("getRootNavigationRef"), v([Sr([[], Sr([Cr(1), Cr(2)])]), 2])), { includeUninitialized: true });
			if (e) return wr = e;
		}, { hint: "object" });
	});
	var L, Er;
	var Dr = __esmMin(() => {
		L = [
			{},
			{},
			false
		];
		Er = /* @__PURE__ */ new Set();
	});
	var Or = {};
	__export(Or, {
		addSettingsItemToSection: () => addSettingsItemToSection,
		isSettingsModulesLoaded: () => isSettingsModulesLoaded,
		onSettingsModulesLoaded: () => onSettingsModulesLoaded,
		refreshSettingsOverviewScreen: () => refreshSettingsOverviewScreen,
		registerSettingsItem: () => registerSettingsItem,
		registerSettingsItems: () => registerSettingsItems,
		registerSettingsSection: () => registerSettingsSection
	});
	/**
	* Checks if the settings modules are loaded.
	*/ function isSettingsModulesLoaded() {
		return L[2];
	}
	/**
	* Subscribes to when settings modules are loaded.
	* Plugins should ideally register their settings in the given callback to ensure fast startup time.
	*
	* @param subcription The subscription function to call when the settings modules are loaded.
	* @returns A function to unsubscribe from the event.
	* @throws Throws an error if the settings modules are already loaded. Check with {@link isSettingsModulesLoaded} first.
	*/ function onSettingsModulesLoaded(e) {
		if (L[2]) throw new Error("Settings modules already loaded");
		Er.add(e);
		return () => Er.delete(e);
	}
	/**
	* Registers a settings section with a given key.
	*
	* @param key The key to register the settings section with.
	* @param section The settings section to register.
	* @returns A function to unregister the settings section.
	*/ function registerSettingsSection(e, t) {
		L[0][e] = t;
		return () => delete L[0][e];
	}
	/**
	* Registers a settings item with a given key.
	*
	* @param key The key to register the settings item with.
	* @param item The settings item to register.
	* @returns A function to unregister the settings item.
	*/ function registerSettingsItem(e, t) {
		L[1][e] = t;
		return () => delete L[1][e];
	}
	/**
	* Registers multiple settings items at once.
	*
	* @param record The settings items to register.
	* @returns A function to unregister the settings items.
	*/ function registerSettingsItems(e) {
		Object.assign(L[1], e);
		return () => {
			var t = true;
			for (var n in e) t &&= delete L[1][n];
			return t;
		};
	}
	/**
	* Adds a settings item to an existing section.
	*
	* @param key The section to add the settings item to.
	* @param item The settings item to add.
	* @returns A function to remove the settings item from the section.
	*/ function addSettingsItemToSection(e, t) {
		var n = L[0][e];
		if (!n) throw new Error(`Section "${e}" does not exist`);
		var r = n.settings.push(t);
		return () => delete n.settings[r - 1];
	}
	/**
	* Refreshes the SettingsOverviewScreen, applying any changes made to settings modules.
	*
	* @param renavigate Whether to renavigate instead of replacing the screen in the stack.
	* @returns Whether the SettingsOverviewScreen was refreshed.
	*/ async function refreshSettingsOverviewScreen(e) {
		var t = wr.getRootNavigationRef();
		if (!t.isReady()) return false;
		var n = t.getState();
		var r = findInTree(n, (e) => Array.isArray(e.routes) && e.routes[0]?.name === ur.UserSettingsSections.OVERVIEW);
		if (!r) return false;
		if (e) {
			var i = findInTree(n, (e) => Array.isArray(e.routes) && e.routes.length > 1);
			if (!i) return false;
			t.dispatch({
				...kr.goBack(),
				target: i.key
			});
			t.navigate(i.routes[i.index].name);
			for (var { name: a, params: o } of r.routes) t.dispatch(kr.navigate(a, o));
		} else {
			var { key: s, routes: [{ name: c, key: l }] } = r;
			t.dispatch({
				...Ar.replace(c),
				source: l,
				target: s
			});
		}
		return true;
	}
	var kr, Ar;
	var jr = __esmMin(() => {
		Un();
		Ge();
		dr();
		Tr();
		Dr();
		({CommonActions: kr, StackActions: Ar} = Vn);
	});
	var Mr = {};
	__export(Mr, { SettingListRenderer: () => Fr });
	var Nr, Pr, Fr;
	var Ir = __esmMin(() => {
		b();
		T();
		S();
		m();
		({loose: Nr, relative: Pr} = v);
		Fr = proxify(() => {
			var [e] = lookupModule(y(g("SettingsList"), v(Nr([
				x,
				Fe,
				Pr(1),
				Pr(2),
				void 0,
				Ie
			]))), { includeUninitialized: true });
			if (e) return Fr = e;
		}, { hint: "object" });
	});
	var Lr = {};
	var Rr = __esmMin(() => {
		N();
		fe();
		dr();
		defineLazyProperties(an.discord = {}, {
			actions: () => {
				return _r(), __toCommonJS(fr);
			},
			common: () => {
				return dr(), __toCommonJS(rr);
			},
			design: () => {
				return I(), __toCommonJS(vr);
			},
			native: () => {
				return Ne(), __toCommonJS(Te);
			},
			modules: () => defineLazyProperties({}, {
				mainTabsV2: () => {
					return Tr(), __toCommonJS(xr);
				},
				settings: () => ({
					...(jr(), __toCommonJS(Or)),
					renderer: (Ir(), __toCommonJS(Mr))
				})
			})
		});
		k.on("init", ({ manifest: { id: e } }, t) => defineLazyProperty(t, "logger", () => new or(`Revenge > Plugins (${e})`)));
	});
	var R = __commonJSMin((exports, t) => {
		S();
		m();
		var { jsx: n, jsxs: r, Fragment: i } = ze;
		var jsx = (e, ...t) => n(unproxy(e), ...t);
		var jsxs = (e, ...t) => r(unproxy(e), ...t);
		function unproxy(e) {
			return isProxified(e) ? unproxify(e) : e;
		}
		t.exports = {
			jsx,
			jsxs,
			Fragment: i
		};
	});
	var z = __commonJSMin((exports, t) => {
		S();
		t.exports = Re;
	});
	var zr, B, Br;
	var Vr = __esmMin(() => {
		zr = __toESM(z(), 1);
		B = zr.StyleSheet.create({
			disabled: { opacity: .5 },
			flex: { flex: 1 },
			grow: { flexGrow: 1 },
			pagePadding: {
				paddingHorizontal: 16,
				paddingTop: 12
			}
		});
		Br = 24;
	});
	/**
	* A switch component that is styled to match Discord's configuration
	*/ function FormSwitch(e) {
		return /* @__PURE__ */ (0, Hr.jsx)(Ur.View, {
			style: e.disabled && B.disabled,
			children: /* @__PURE__ */ (0, Hr.jsx)(br, { ...e })
		});
	}
	var Hr, Ur;
	var Wr = __esmMin(() => {
		Hr = __toESM(R());
		I();
		Ur = __toESM(z());
		Vr();
	});
	function Page(e) {
		return /* @__PURE__ */ (0, Gr.jsx)(F.Stack, {
			spacing: Br,
			style: [B.grow, B.pagePadding],
			...e,
			children: e.children
		});
	}
	var Gr;
	var Kr = __esmMin(() => {
		Gr = __toESM(R());
		I();
		Vr();
	});
	var qr = {};
	__export(qr, {
		AssetRegistry: () => Pt,
		AssetRegistryModuleId: () => Ft,
		addAssetOverride: () => addAssetOverride,
		getAssetByName: () => getAssetByName,
		getAssetIdByName: () => getAssetIdByName,
		getAssets: () => getAssets,
		getAssetsByName: () => getAssetsByName,
		getCustomAssets: () => getCustomAssets,
		getPackagerAssets: () => getPackagerAssets,
		registerAsset: () => registerAsset,
		removeAssetOverride: () => removeAssetOverride,
		setPreferredAssetType: () => setPreferredAssetType
	});
	/**
	* Set the preferred asset type. This is used to determine which asset to use when multiple types are available.
	*
	* @param type The preferred asset type.
	*/ function setPreferredAssetType(e) {
		Yr = e;
	}
	/**
	* Yields all assets, both packager and custom.
	*/ function* getAssets() {
		yield* getPackagerAssets();
		yield* getCustomAssets();
	}
	/**
	* Yields all registered custom assets.
	*/ function* getCustomAssets() {
		for (var e of wt) yield e;
	}
	/**
	* Yields all registered packager assets, including ones with same name but different types.
	*/ function* getPackagerAssets() {
		for (var e in w) {
			var t = w[e];
			for (var n in t) yield Pt.getAssetByID(__r(t[n]));
		}
	}
	/**
	* Get an asset by its name.
	* If more than one asset is registered with the same name, this will return the one with the preferred type, or the first registered one.
	*
	* @param name The asset name.
	* @param type The preferred asset type, defaults to the current preferred type.
	*/ function getAssetByName(e, t) {
		var n = getAssetIdByName(e, t);
		if (n !== void 0) return Pt.getAssetByID(n);
	}
	/**
	* Gets all assets matching the name.
	*
	* @param name The asset name.
	* @returns A record keyed by the type of the asset, with the value being the asset itself.
	*/ function getAssetsByName(e) {
		var t = w[e];
		if (!t) return;
		return Object.entries(t).reduce((e, [t, n]) => {
			e[t] = Pt.getAssetByID(__r(n));
			return e;
		}, {});
	}
	/**
	* Get an asset ID by its name.
	* If more than one asset is registered with the same name, this will return the one with the preferred type, or the first registered one.
	*
	* @param name The asset name.
	* @param type The preferred asset type, defaults to the current preferred type.
	*/ function getAssetIdByName(e, t) {
		var n = w[e];
		if (!n) return;
		if (t) {
			var r = n[t];
			if (r === void 0) return;
			return __r(r);
		}
		var i = n[Yr];
		if (i === void 0) for (var a in n) {
			i = n[a];
			break;
		}
		if (i === void 0) return;
		return __r(i);
	}
	/**
	* Register an asset with the given name.
	*
	* @param asset The asset to register.
	* @returns The asset ID.
	*/ function registerAsset(e) {
		if (w[e.name]?.[e.type] !== void 0) throw new Error(`Asset with name ${e.name} and type ${e.type} already exists!`);
		wt.add(e);
		return Pt.registerAsset(e);
	}
	/**
	* Override an asset with a custom asset.
	*
	* @param asset The asset to override.
	* @param override The custom asset to override with.
	*/ function addAssetOverride(e, t) {
		Tt.set(e, t);
	}
	/**
	* Remove an asset override.
	*
	* @param asset The asset to remove the override for.
	* @returns The asset that was removed.
	*/ function removeAssetOverride(e) {
		return Tt.delete(e);
	}
	var Jr, Yr;
	var Xr = __esmMin(() => {
		Jr = __toESM(z(), 1);
		Et();
		Mt();
		Rt();
		Yr = Jr.Platform.OS === "ios" ? "png" : "svg";
	});
	function lookupGeneratedIconComponent(e, ...t) {
		var n = lookupModule(g(e))[0]?.[e];
		if (n) return n;
		var r = Zr;
		if (t.length) {
			var i = [];
			for (var a of t) {
				var o = getAssetByName(a)?.moduleId;
				if (!o) return;
				i.push(o);
			}
			r = [
				...Qr,
				...i,
				2
			];
		} else {
			var s = getAssetByName(e)?.moduleId;
			if (!s) return;
			Zr[4] = s;
		}
		return lookupModule(v(r), {
			includeInitialized: false,
			includeUninitialized: true
		})[0]?.[e];
	}
	var Zr, Qr;
	var $r = __esmMin(() => {
		Xr();
		dr();
		b();
		T();
		S();
		Zr = [
			x,
			Ie,
			cr,
			void 0,
			void 0,
			2
		];
		Qr = [
			x,
			Fe,
			Ie,
			cr,
			void 0
		];
	});
	function SearchInput(e) {
		return /* @__PURE__ */ (0, ei.jsx)(F.TextInput, {
			leadingIcon: ti,
			placeholder: "Search",
			returnKeyType: "search",
			size: "md",
			...e
		});
	}
	var ei, ti;
	var ni = __esmMin(() => {
		ei = __toESM(R());
		I();
		$r();
		ti = lookupGeneratedIconComponent("MagnifyingGlassIcon");
	});
	function TableRowAssetIcon(e) {
		return /* @__PURE__ */ (0, ri.jsx)(F.TableRow.Icon, {
			source: e.name ? getAssetIdByName(e.name) : e.id,
			...e
		});
	}
	var ri;
	var V = __esmMin(() => {
		ri = __toESM(R());
		Xr();
		I();
	});
	var ii = {};
	__export(ii, {
		FormSwitch: () => FormSwitch,
		Page: () => Page,
		SearchInput: () => SearchInput,
		TableRowAssetIcon: () => TableRowAssetIcon
	});
	var ai = __esmMin(() => {
		Wr();
		Kr();
		ni();
		V();
	});
	var oi = {};
	var si;
	var ci = __esmMin(() => {
		N();
		fe();
		si = an;
		defineLazyProperty(si, "components", () => {
			return ai(), __toCommonJS(ii);
		});
	});
	var H, li;
	var U = __esmMin(() => {
		H = {
			RevengeDeveloper: "RevengeDeveloper",
			RDTVersion: "RDTVersion",
			RDTAutoConnect: "RDTAutoConnect",
			RDTConnect: "RDTConnect",
			RDTDisconnect: "RDTDisconnect",
			EvalJS: "EvalJS",
			AssetBrowser: "AssetBrowser"
		};
		li = {
			[H.RevengeDeveloper]: "Revenge Developer",
			[H.AssetBrowser]: "Asset Browser"
		};
	});
	var W = __commonJSMin((exports, t) => {
		S();
		t.exports = Le;
	});
	var ui = {};
	__export(ui, { default: () => AssetBrowserSettingScreen });
	function AssetBrowserSettingScreen() {
		var { width: e, height: t } = (0, fi.useWindowDimensions)();
		var [n, r] = (0, di.useState)("");
		var i = (0, di.useCallback)(debounce(r, 100), []);
		var a = (0, di.useMemo)(() => [...getAssets()], []);
		var o = (0, di.useMemo)(() => !n.length ? a : a.filter((e) => e.name.toLowerCase().includes(n.toLowerCase())), [a, n]);
		return /* @__PURE__ */ (0, G.jsxs)(Page, {
			spacing: 16,
			children: [/* @__PURE__ */ (0, G.jsx)(SearchInput, {
				onChange: (e) => {
					i(e);
				},
				size: "md"
			}), /* @__PURE__ */ (0, G.jsx)(Gn.FlashList, {
				data: o,
				contentContainerStyle: xi.listContainer,
				fadingEdgeLength: 32,
				estimatedListSize: {
					width: e - 32,
					height: t - 160
				},
				estimatedItemSize: 80,
				keyExtractor: (e) => e.id ? e.id.toString() : `${e.name}.${e.type}`,
				renderItem: ({ item: e, index: t }) => /* @__PURE__ */ (0, G.jsx)(AssetDisplay, {
					asset: e,
					end: t === o.length - 1,
					id: e.id,
					moduleId: e.moduleId,
					start: !t
				})
			})]
		});
	}
	function AssetDisplay({ id: e, moduleId: t, asset: n, start: r, end: i }) {
		var a = vi.has(n.type);
		var o = [["ID", e.toString()], ["Type", n.type]];
		o.push(t ? ["Module ID", t.toString()] : [
			"Custom asset",
			"This is a custom asset registered by a plugin.",
			true,
			true
		]);
		return /* @__PURE__ */ (0, G.jsx)(hi, {
			end: i,
			icon: a ? /* @__PURE__ */ (0, G.jsx)(fi.Image, {
				source: e,
				style: xi.smallPreview
			}) : /* @__PURE__ */ (0, G.jsx)(TableRowAssetIcon, {
				name: n.type in yi ? yi[n.type] : yi.default,
				variant: "danger"
			}),
			label: n.name,
			onPress: () => {
				openAssetDisplayAlert(n, e, o);
			},
			start: r,
			subLabel: o.filter(([, , , e]) => !e).map(([e, t]) => `${e}: ${t ?? "N/A"}`).join("  •  "),
			variant: a ? "default" : "danger"
		});
	}
	function openAssetDisplayAlert(e, t, n) {
		var r = vi.has(e.type);
		hr.openAlert("asset-display", /* @__PURE__ */ (0, G.jsx)(pi, {
			actions: /* @__PURE__ */ (0, G.jsx)(mi, {
				text: "Close",
				variant: "secondary"
			}),
			extraContent: /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
				r ? /* @__PURE__ */ (0, G.jsx)(fi.Image, {
					source: t,
					style: xi.preview
				}) : /* @__PURE__ */ (0, G.jsx)(PreviewUnavailable, { type: e.type }),
				/* @__PURE__ */ (0, G.jsx)(gi, { children: n.map(([e, n, r]) => /* @__PURE__ */ (0, G.jsx)(hi, {
					label: e,
					onPress: r ? void 0 : () => {
						Pn.setString(n);
						gr.open({
							key: "ASSET_BROWSER_COPIED",
							IconComponent: bi,
							content: `Copied ${e} to clipboard`
						});
					},
					subLabel: n
				}, t)) }),
				/* @__PURE__ */ (0, G.jsx)(_i, {
					color: "text-danger",
					variant: "text-xs/semibold",
					children: "Note: Asset IDs and module IDs are not consistent between app launches and app versions respectively and should only be used when absolutely needed."
				})
			] }),
			title: e.name
		}));
	}
	function PreviewUnavailable({ type: e }) {
		return /* @__PURE__ */ (0, G.jsxs)(_i, {
			color: "text-danger",
			style: xi.centeredText,
			variant: "text-sm/medium",
			children: [
				"Asset type ",
				e.toUpperCase(),
				" is not supported for preview."
			]
		});
	}
	var G, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi;
	var Si = __esmMin(() => {
		G = __toESM(R());
		Xr();
		Kr();
		ni();
		V();
		_r();
		I();
		Fn();
		Kn();
		Je();
		$r();
		di = __toESM(W());
		fi = __toESM(z());
		({AlertModal: pi, AlertActionButton: mi, TableRow: hi, TableRowGroup: gi, Text: _i} = F);
		vi = new Set([
			"png",
			"jpg",
			"svg",
			"webp"
		]);
		yi = {
			jsona: "ic_file_text",
			lottie: "ic_image",
			webm: "CirclePlayIcon-primary",
			ttf: "ic_add_text",
			default: "UnknownGameIcon"
		};
		bi = lookupGeneratedIconComponent("CopyIcon");
		xi = fi.StyleSheet.create({
			listContainer: { paddingBottom: 16 },
			smallPreview: {
				height: 32,
				width: 32
			},
			preview: {
				flex: 1,
				width: "auto",
				height: 192,
				resizeMode: "contain"
			},
			centeredText: {
				width: "100%",
				textAlign: "center"
			}
		});
	});
	var Ci, wi, Ti;
	var Ei = __esmMin(() => {
		Ci = __toESM(R());
		V();
		U();
		wi = {
			parent: H.RevengeDeveloper,
			type: "route",
			IconComponent: () => /* @__PURE__ */ (0, Ci.jsx)(TableRowAssetIcon, { name: "ImageIcon" }),
			title: () => "Asset Browser",
			screen: {
				route: li[H.AssetBrowser],
				getComponent: () => (Si(), __toCommonJS(ui)).default
			}
		};
		Ti = wi;
	});
	function EvalJSAlert() {
		var e = (0, Di.useRef)("");
		var [t, n] = (0, Di.useState)(true);
		var [r, i] = (0, Di.useState)(true);
		var [a, o] = (0, Di.useState)(3);
		var [s, c] = (0, Di.useState)(false);
		return /* @__PURE__ */ (0, K.jsx)(ji, {
			actions: /* @__PURE__ */ (0, K.jsxs)(Pi, { children: [/* @__PURE__ */ (0, K.jsx)(Mi, {
				loading: s,
				onPress: async function onPress() {
					c(true);
					var n = `_${Math.random().toString(36).substring(2, 15)}`;
					try {
						if (!J) {
							alert("Unable to provide plugin API. Running snippet in a second...");
							await sleep(1e3);
						} else globalThis[n] = J;
						var i = globalEvalWithSourceUrl(`api=${n},{unscoped:revenge}=api;${e.current}`, "Revenge:EvalJS");
						alert(On.inspect(t ? await i : i, {
							depth: a,
							showHidden: r
						}));
						delete globalThis[n];
					} catch (e) {
						alert(getErrorStack(e));
					}
					c(false);
					hr.dismissAlert(Oi);
				},
				text: "Evaluate",
				variant: "primary"
			}), /* @__PURE__ */ (0, K.jsx)(Ai, {
				text: "Cancel",
				variant: "secondary"
			})] }),
			extraContent: /* @__PURE__ */ (0, K.jsxs)(Pi, { children: [/* @__PURE__ */ (0, K.jsx)(zi, {
				autoFocus: true,
				label: "Code",
				onChange: (t) => {
					e.current = t;
				},
				placeholder: "ReactNative.NativeModules.BundleUpdaterManager.reload()",
				size: "md"
			}), /* @__PURE__ */ (0, K.jsxs)(Ii, { children: [
				/* @__PURE__ */ (0, K.jsx)(Li, {
					label: "Await result",
					onValueChange: n,
					subLabel: "Wait for the result of the code before displaying it.",
					value: t
				}),
				/* @__PURE__ */ (0, K.jsx)(Li, {
					label: "Show hidden",
					onValueChange: i,
					subLabel: "Show hidden properties of the object.",
					value: r
				}),
				/* @__PURE__ */ (0, K.jsx)(Fi, {
					label: "Inspect depth",
					subLabel: "The depth of the object to inspect.",
					trailing: /* @__PURE__ */ (0, K.jsx)(Ri, { children: a })
				}),
				/* @__PURE__ */ (0, K.jsx)(Ni, {
					endIcon: /* @__PURE__ */ (0, K.jsx)(Ri, { children: "10" }),
					maximumValue: 10,
					minimumValue: 1,
					onValueChange: o,
					startIcon: /* @__PURE__ */ (0, K.jsx)(Ri, { children: "1" }),
					step: 1,
					value: a
				})
			] })] }),
			title: "Evaluate JavaScript"
		});
	}
	var K, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi;
	var Vi = __esmMin(() => {
		K = __toESM(R());
		V();
		_r();
		I();
		kn();
		f();
		Gt();
		Di = __toESM(W());
		xa();
		U();
		Oi = "evaluate-javascript";
		ki = {
			parent: H.RevengeDeveloper,
			IconComponent: () => /* @__PURE__ */ (0, K.jsx)(TableRowAssetIcon, { name: "FileIcon" }),
			title: () => "Evaluate JavaScript",
			useDescription: () => "Runs a JavaScript code snippet.",
			onPress: () => {
				hr.openAlert(Oi, /* @__PURE__ */ (0, K.jsx)(EvalJSAlert, {}));
			},
			type: "pressable"
		};
		({AlertActionButton: Ai, AlertModal: ji, Button: Mi, Slider: Ni, Stack: Pi, TableRow: Fi, TableRowGroup: Ii, TableSwitchRow: Li, Text: Ri, TextArea: zi} = F);
		Bi = ki;
	});
	var Hi = {};
	__export(Hi, {
		RDTContext: () => q,
		connect: () => connect,
		disconnect: () => disconnect,
		useIsConnected: () => useIsConnected
	});
	function connect() {
		if (!q.active || q.ws) return;
		var e = q.ws = new WebSocket(`ws://${q.addr}`);
		e.addEventListener("open", () => {
			q.con = true;
			Wi.emit("connect");
		});
		e.addEventListener("close", () => {
			cleanup();
			Wi.emit("disconnect");
		});
		e.addEventListener("error", (e) => {
			cleanup();
			Wi.emit("error", e);
			var t = e.message ?? getErrorStack(e);
			J.logger.error("React DevTools error:", t);
			gr.open({
				key: "REACT_DEVTOOLS_ERROR",
				IconComponent: Gi,
				content: t
			});
		});
		__REACT_DEVTOOLS__.exports.connectToDevTools({ websocket: e });
	}
	function cleanup() {
		q.con = false;
		q.ws = void 0;
	}
	function disconnect() {
		if (q.ws) q.ws.close();
	}
	function useIsConnected() {
		var e = useReRender();
		(0, Ui.useEffect)(() => {
			Wi.on("connect", e);
			Wi.on("disconnect", e);
			return () => {
				Wi.off("connect", e);
				Wi.off("disconnect", e);
			};
		}, [e]);
		return q.con;
	}
	var Ui, q, Wi, Gi;
	var Ki = __esmMin(() => {
		_r();
		Wt();
		$r();
		f();
		Ke();
		Ui = __toESM(W(), 1);
		xa();
		q = {
			active: Boolean(globalThis.__REACT_DEVTOOLS__),
			ws: void 0,
			addr: "localhost:8097",
			con: false
		};
		Wi = new Ut();
		Gi = lookupGeneratedIconComponent("CircleXIcon", "CircleXIcon-secondary", "CircleXIcon-primary");
	});
	var qi, Ji, Yi;
	var Xi = __esmMin(() => {
		qi = __toESM(R());
		V();
		xa();
		U();
		Ki();
		Ji = {
			parent: H.RevengeDeveloper,
			IconComponent: () => /* @__PURE__ */ (0, qi.jsx)(TableRowAssetIcon, { name: "LinkIcon" }),
			title: () => "Auto-connect to React DevTools",
			useDescription: () => "Automatically connect to React DevTools during startup.",
			usePredicate: () => q.active,
			useValue: () => J.storage.use((e) => e.devtools?.autoConnect !== void 0).devtools.autoConnect,
			onValueChange: (e) => {
				J.storage.set({ devtools: { autoConnect: e } });
			},
			type: "toggle"
		};
		Yi = Ji;
	});
	var Zi, Qi, $i;
	var ea = __esmMin(() => {
		Zi = __toESM(R());
		V();
		U();
		Ki();
		Qi = {
			parent: H.RevengeDeveloper,
			IconComponent: () => /* @__PURE__ */ (0, Zi.jsx)(TableRowAssetIcon, { name: "LinkIcon" }),
			title: () => "Connect to React DevTools",
			usePredicate: () => !useIsConnected() && q.active,
			onPress: connect,
			type: "pressable"
		};
		$i = Qi;
	});
	var ta, na, ra;
	var ia = __esmMin(() => {
		ta = __toESM(R());
		V();
		U();
		Ki();
		na = {
			parent: H.RevengeDeveloper,
			IconComponent: () => /* @__PURE__ */ (0, ta.jsx)(TableRowAssetIcon, {
				name: "DenyIcon",
				variant: "danger"
			}),
			variant: "danger",
			title: () => "Disconnect from React DevTools",
			usePredicate: useIsConnected,
			onPress: disconnect,
			type: "pressable"
		};
		ra = na;
	});
	var aa, oa, sa;
	var ca = __esmMin(() => {
		aa = __toESM(R());
		V();
		U();
		Ki();
		oa = {
			parent: H.RevengeDeveloper,
			IconComponent: () => /* @__PURE__ */ (0, aa.jsx)(TableRowAssetIcon, { name: "ScienceIcon" }),
			title: () => "React DevTools",
			useDescription: () => __REACT_DEVTOOLS__.version,
			usePredicate: () => q.active,
			type: "static"
		};
		sa = oa;
	});
	var la = {};
	__export(la, {
		RDTAddrSetting: () => RDTAddrSetting,
		default: () => RevengeDeveloperSettingScreen
	});
	function RevengeDeveloperSettingScreen() {
		return /* @__PURE__ */ (0, ua.jsxs)(F.Stack, {
			spacing: 0,
			style: B.flex,
			children: [globalThis.__REACT_DEVTOOLS__ && /* @__PURE__ */ (0, ua.jsx)(RDTAddrSetting, {}), /* @__PURE__ */ (0, ua.jsx)(Fr.SettingsList, { sections: [
				{ settings: [] },
				{ settings: [
					H.RDTVersion,
					H.RDTAutoConnect,
					H.RDTConnect,
					H.RDTDisconnect
				] },
				{
					label: "Tools",
					settings: [H.EvalJS, H.AssetBrowser]
				}
			] })]
		});
	}
	function RDTAddrSetting() {
		var e = useIsConnected();
		var t = J.storage.use((e) => e.devtools?.address);
		return /* @__PURE__ */ (0, ua.jsx)(da.View, {
			style: {
				paddingHorizontal: 16,
				paddingTop: 16
			},
			children: /* @__PURE__ */ (0, ua.jsx)(F.TextInput, {
				defaultValue: t?.devtools.address ?? q.addr,
				editable: !e,
				isDisabled: e,
				label: "React DevTools",
				leadingText: "ws://",
				onBlur: () => J.storage.set({ devtools: { address: q.addr } }).then(() => gr.open({
					IconComponent: fa,
					key: "REACT_DEVTOOLS_ADDRESS_SAVED",
					content: "Address saved"
				})),
				onChange: (e) => {
					q.addr = e;
				},
				returnKeyType: "done"
			})
		});
	}
	var ua, da, fa;
	var pa = __esmMin(() => {
		ua = __toESM(R());
		Vr();
		_r();
		I();
		Ir();
		$r();
		da = __toESM(z());
		xa();
		U();
		Ki();
		fa = lookupGeneratedIconComponent("CircleCheckIcon", "CircleCheckIcon-secondary", "CircleCheckIcon-primary");
	});
	var ma, ha, ga;
	var _a = __esmMin(() => {
		ma = __toESM(R());
		V();
		U();
		ha = {
			parent: null,
			type: "route",
			IconComponent: () => /* @__PURE__ */ (0, ma.jsx)(TableRowAssetIcon, { name: "WrenchIcon" }),
			title: () => "Developer",
			screen: {
				route: li[H.RevengeDeveloper],
				getComponent: () => (pa(), __toCommonJS(la)).default
			}
		};
		ga = ha;
	});
	var va = {};
	__export(va, { register: () => register$1 });
	function register$1() {
		J.cleanup(registerSettingsItems({
			[H.RevengeDeveloper]: ga,
			[H.RDTVersion]: sa,
			[H.RDTAutoConnect]: Yi,
			[H.RDTConnect]: $i,
			[H.RDTDisconnect]: ra,
			[H.EvalJS]: Bi,
			[H.AssetBrowser]: Ti
		}), addSettingsItemToSection("REVENGE", H.RevengeDeveloper));
	}
	var ya = __esmMin(() => {
		jr();
		xa();
		U();
		Ei();
		Vi();
		Xi();
		ea();
		ia();
		ca();
		_a();
		__name(register$1, "register");
	});
	var ba, J;
	var xa = __esmMin(() => {
		jr();
		N();
		O();
		ba = { devtools: {
			address: "localhost:8097",
			autoConnect: false
		} };
		registerPlugin({
			id: "revenge.settings.developer",
			name: "Developer Settings",
			description: "Developer settings menus for Revenge",
			author: "Revenge",
			icon: "WrenchIcon"
		}, {
			storage: {
				load: true,
				default: ba
			},
			start(e) {
				J = e;
				if (isSettingsModulesLoaded()) (ya(), __toCommonJS(va)).register();
				else onSettingsModulesLoaded(() => {
					(ya(), __toCommonJS(va)).register();
				});
				if (e.plugin.flags & E.EnabledLate) refreshSettingsOverviewScreen();
				e.cleanup(refreshSettingsOverviewScreen);
				Promise.all([Promise.resolve().then(() => (Ki(), Hi)), J.storage.get()]).then(([e, t]) => {
					if (t.devtools.autoConnect) e.connect();
				});
			}
		}, E.Enabled, j.Internal);
	});
	var Y, Sa;
	var X = __esmMin(() => {
		Y = {
			Revenge: "Revenge",
			RevengePlugins: "RevengePlugins",
			RevengeThemes: "RevengeThemes",
			RevengeFonts: "RevengeFonts",
			RevengeCustomPage: "RevengeCustomPage",
			RevengeDiscord: "RevengeDiscord",
			RevengeGitHub: "RevengeGitHub",
			Reload: "Reload",
			RevengeVersion: "RevengeVersion",
			ReactVersion: "ReactVersion",
			ReactNativeVersion: "ReactNativeVersion",
			HermesVersion: "HermesVersion"
		};
		Sa = {
			[Y.Revenge]: "Revenge",
			[Y.RevengePlugins]: "Revenge Plugins",
			[Y.RevengeThemes]: "Revenge Themes",
			[Y.RevengeFonts]: "Revenge Fonts",
			[Y.RevengeCustomPage]: "Revenge Custom Page"
		};
	});
	var Ca, wa, Ta, Ea;
	var Da = __esmMin(() => {
		Ca = __toESM(R());
		V();
		X();
		wa = HermesInternal.getRuntimeProperties();
		Ta = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, Ca.jsx)(TableRowAssetIcon, { name: "TranscriptOutlineIcon" }),
			title: () => "Hermes",
			useDescription: () => `${wa["Bytecode Version"]} (${wa.Build})`,
			type: "static"
		};
		Ea = Ta;
	});
	var Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia;
	var La = __esmMin(() => {
		Oa = __toESM(R());
		V();
		ka = __toESM(z());
		X();
		({major: Aa, minor: ja, patch: Ma, prerelease: Na} = ka.Platform.constants.reactNativeVersion);
		Pa = `${Aa}.${ja}.${Ma}${Na ? `-${Na}` : ""}`;
		Fa = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, Oa.jsx)(TableRowAssetIcon, { name: "ScienceIcon" }),
			title: () => "React Native",
			useDescription: () => Pa,
			type: "static"
		};
		Ia = Fa;
	});
	var Ra, za, Ba, Va;
	var Ha = __esmMin(() => {
		Ra = __toESM(R());
		V();
		za = __toESM(W());
		X();
		Ba = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, Ra.jsx)(TableRowAssetIcon, { name: "ScienceIcon" }),
			title: () => "React",
			useDescription: () => za.version,
			type: "static"
		};
		Va = Ba;
	});
	var Ua, Wa, Ga;
	var Ka = __esmMin(() => {
		Ua = __toESM(R());
		V();
		Ne();
		X();
		Wa = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, Ua.jsx)(TableRowAssetIcon, { name: "RetryIcon" }),
			title: () => "Reload App",
			onPress: () => {
				je.reload();
			},
			type: "pressable"
		};
		Ga = Wa;
	});
	var qa = {};
	__export(qa, { default: () => RevengeCustomPageScreen });
	function RevengeCustomPageScreen({ route: e, navigation: t }) {
		var { render: n, options: r } = e.params;
		(0, Ya.useLayoutEffect)(() => {
			if (r) t.setOptions(r);
		}, []);
		return /* @__PURE__ */ (0, Ja.jsx)(n, {});
	}
	var Ja, Ya;
	var Xa = __esmMin(() => {
		Ja = __toESM(R());
		Ya = __toESM(W());
	});
	var Za, Qa;
	var $a = __esmMin(() => {
		X();
		Za = {
			parent: null,
			title: () => "Revenge Custom Page",
			type: "route",
			unsearchable: true,
			screen: {
				route: Sa[Y.RevengeCustomPage],
				getComponent: () => (Xa(), __toCommonJS(qa)).default
			}
		};
		Qa = Za;
	});
	var eo, to;
	var no = __esmMin(() => {
		eo = "https://github.com/revenge-mod";
		to = "https://discord.com/invite/ddcQf3s2Uq";
	});
	var ro, io, ao, oo;
	var so = __esmMin(() => {
		ro = __toESM(R());
		V();
		io = __toESM(z());
		no();
		X();
		ao = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, ro.jsx)(TableRowAssetIcon, { name: "Discord" }),
			title: () => "Discord Server",
			onPress: () => {
				io.Linking.openURL(to);
			},
			type: "pressable"
		};
		oo = ao;
	});
	var co, lo, uo, fo;
	var po = __esmMin(() => {
		co = __toESM(R());
		V();
		lo = __toESM(z());
		no();
		X();
		uo = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, co.jsx)(TableRowAssetIcon, { name: "img_account_sync_github_white" }),
			title: () => "GitHub",
			onPress: () => {
				lo.Linking.openURL(eo);
			},
			type: "pressable"
		};
		fo = uo;
	});
	var mo, ho, setIsTouch, onTouch, register, unregister;
	var go = __esmMin(() => {
		mo = [];
		setIsTouch = (e) => ho = e;
		onTouch = (e) => {
			if (!ho) return;
			var { pageX: t, pageY: n } = e.nativeEvent;
			mo.forEach((e) => {
				e.ref?.current?.measure((r, i, a, o, s, c) => {
					if (t < s || t > s + a || n < c || n > c + o) e.cb();
				});
			});
			ho = void 0;
		};
		register = (e, t) => {
			if (mo.find((t) => t.ref === e)) return;
			mo.push({
				ref: e,
				cb: t
			});
		};
		unregister = (e) => mo = mo.filter(({ ref: t }) => t !== e);
	});
	var _o, vo, useFocusEffect;
	var yo = __esmMin(() => {
		_o = __toESM(W());
		vo = __toESM(z());
		useFocusEffect = (e, t) => {
			var n = (0, _o.useRef)(vo.AppState.currentState);
			var r = (0, _o.useCallback)((r) => {
				if (n.current.match(/inactive|background/) && r === "active") e();
				if (n.current === "active" && r.match(/inactive|background/)) t();
				n.current = r;
			}, [e, t]);
			(0, _o.useEffect)(() => {
				var e = vo.AppState.addEventListener("change", r);
				return () => {
					e.remove();
				};
			}, [r]);
		};
	});
	var bo, useClickOutside;
	var xo = __esmMin(() => {
		bo = __toESM(W());
		go();
		yo();
		useClickOutside = (e, t) => {
			var n = bo.default.useRef(e);
			n.current = e;
			var callbackRegisterWrapper = () => n.current();
			var r = bo.default.useRef(null);
			useFocusEffect(() => {
				if (t?.triggerOnBlur === false) return;
				register(r, callbackRegisterWrapper);
			}, () => {
				if (t?.triggerOnBlur === false) return;
				callbackRegisterWrapper();
				unregister(r);
			});
			bo.default.useEffect(() => {
				register(r, callbackRegisterWrapper);
				return () => {
					unregister(r);
					if (t?.triggerOnUnmount === false) return;
					callbackRegisterWrapper();
				};
			}, [t?.triggerOnUnmount]);
			return r;
		};
	});
	var isInRange;
	var So = __esmMin(() => {
		isInRange = (e, t, n) => e < t + n && e > t - n;
	});
	var Co, wo, To, Eo, Do, ClickOutsideProvider, Oo;
	var ko = __esmMin(() => {
		Co = __toESM(R());
		wo = __toESM(W());
		To = __toESM(z());
		go();
		So();
		ClickOutsideProvider = ({ children: e, activateOnSwipe: t, swipeThreshold: n = 8 }) => /* @__PURE__ */ (0, Co.jsx)(To.View, {
			style: Oo.flex,
			onTouchEnd: (e) => {
				if (!Eo) Eo = e.nativeEvent.changedTouches[0]?.pageX;
				if (!Do) Do = e.nativeEvent.changedTouches[0]?.pageY;
				if (!e.nativeEvent.changedTouches[0] || !Eo || !Do) return;
				if (isInRange(e.nativeEvent.changedTouches[0]?.pageX, Eo, n) && isInRange(e.nativeEvent.changedTouches[0]?.pageY, Do, n)) setIsTouch(true);
				else if (t) setIsTouch(true);
				else setIsTouch(false);
				onTouch(e);
				Eo = void 0;
				Do = void 0;
			},
			onTouchStart: (e) => {
				Eo = e.nativeEvent.changedTouches[0]?.pageX;
				Do = e.nativeEvent.changedTouches[0]?.pageY;
				setIsTouch(true);
			},
			...To.Platform.OS === "web" && { onClick: (e) => {
				setIsTouch(true);
				onTouch(e);
			} },
			children: e
		});
		Oo = To.StyleSheet.create({ flex: { flex: 1 } });
	});
	var Ao = __esmMin(() => {
		xo();
		ko();
	});
	var jo;
	var Mo = __esmMin(() => {
		jo = "data:image/webp;base64,UklGRiACAABXRUJQVlA4TBQCAAAvX4AXED+goG0bJuWP+G04FLRtw4Q/475NQds2TPgz7tsUtW3ElD+83h7fw3EBoO0DDgj/fEj9r6UDXNt2XDVDetR6pDYu02ZoM3WGNkOL8/8bjaS5ruwqov8O3LaNJBmLzD1p6/X8wf0L6D7bZoE8ZjUiakU4GsTUwpHj0BuKBXlUcPu+0qh9gSNqX2BkWd6Lbd964saWN9Jbj32Upnbdmmmx7rOa/KOMx6FOvlryEVKV9siTpBSzHh+nToozIJHR80iViELIkax2THa9MoaE04hRBEIRuzoE442xjZALD4QkaSXwxgeUI/zwktkEyQhOi607nAKSCvch2ogNOGUomR+aUNLa/+5ct03u5EUx+kKeln1NZ/LlhprRtWWa15RU+PQ6k2LuoYbYY54Ttq68k1gzuh7Mjx5HSOVYM7ohyA9iTltGkjeE6lDL6YdGQbjEp6nmtN3okUdJzFHFSRW/K62xvPQh0xqjrGLckTbuijMEdaQZN6MlbYrvG4wuFsWYleg5yjjE6DT++p6LfbWu3/ucnqwLkqXGWvW3k/WN2QaaxL+UrHDy8CQuwJO1BE/WJpTs0yjwZHU5OA04B+wlrGDXHWuVNyEaY9yHxN/4vt9222m3U6tWg2xr0/f3bTczV7vKuOpPPLo+4HVhrEGgqztgK8seaGXZgK6uaavY3UwwTb2Gq6fkVwTA7aaCNpH7s8kB";
	});
	var No, Po;
	var Fo = __esmMin(() => {
		Xr();
		Mo();
		No = registerAsset({
			name: "RevengeIcon",
			type: "webp",
			uri: jo
		});
		Po = No;
	});
	function navigatePluginSettings(e) {
		var [t] = A.get(e.manifest.id);
		var n = wr.getRootNavigationRef();
		if (!n.isReady()) return;
		n.navigate(Sa[Y.RevengeCustomPage], {
			render: () => /* @__PURE__ */ (0, Lo.createElement)(e.SettingsComponent, { api: t }),
			options: e.manifest.icon ? { headerTitle: () => /* @__PURE__ */ (0, Io.jsx)(zo, {
				icon: /* @__PURE__ */ (0, Io.jsx)(Ro.Image, {
					style: {
						width: 24,
						height: 24,
						marginEnd: 8,
						tintColor: sr.default.internal.resolveSemanticColor(er.ThemeStore.theme, sr.default.colors.HEADER_PRIMARY)
					},
					source: getAssetIdByName(e.manifest.icon)
				}),
				title: e.manifest.name
			}) } : { title: e.manifest.name }
		});
	}
	var Io, Lo, Ro, zo;
	var Bo = __esmMin(() => {
		Io = __toESM(R());
		Xr();
		dr();
		nr();
		I();
		Tr();
		N();
		Lo = __toESM(W());
		Ro = __toESM(z());
		X();
		({NavigatorHeader: zo} = F);
	});
	function EnablePluginTooltipProvider({ children: e }) {
		var [t, n] = (0, Vo.useState)(false);
		(0, Vo.useEffect)(() => {
			Uo = n;
			return () => {
				Wo.current = null;
				Uo = void 0;
			};
		}, []);
		Ho(Wo, {
			label: "Plugin must be enabled first",
			position: "top",
			visible: t
		});
		return e;
	}
	function EssentialPluginTooltipProvider({ children: e }) {
		var [t, n] = (0, Vo.useState)(false);
		(0, Vo.useEffect)(() => {
			Go = n;
			return () => {
				Ko.current = null;
				Go = void 0;
			};
		}, []);
		Ho(Ko, {
			label: "Plugin needed for Revenge to function properly",
			position: "top",
			visible: t
		});
		return e;
	}
	function resetTooltips() {
		Uo?.(false);
		Go?.(false);
	}
	var Vo, Ho, Uo, Wo, Go, Ko;
	var qo = __esmMin(() => {
		I();
		Vo = __toESM(W());
		({useTooltip: Ho} = F);
		Wo = { current: null };
		Ko = { current: null };
	});
	function InstalledPluginCard({ plugin: e, iflags: t, rightGap: n }) {
		var { manifest: { id: r, name: i, description: a, author: o, icon: s }, flags: c } = e;
		var l = useReRender();
		(0, Jo.useEffect)(() => {
			var listener = (e) => r === e.manifest.id && l();
			k.on("disabled", listener);
			k.on("enabled", listener);
			return () => {
				k.off("disabled", listener);
				k.off("enabled", listener);
			};
		});
		var u = Boolean(t & j.Essential);
		var d = Boolean(c & E.Enabled);
		var f = rs();
		var p = useClickOutside(() => Wo.current === p.current && Uo?.(false));
		var ee = useClickOutside(() => Ko.current === ee.current && Go?.(false));
		return /* @__PURE__ */ (0, Z.jsxs)(Xo, {
			style: [
				f.card,
				B.grow,
				n && f.rightGap
			],
			children: [/* @__PURE__ */ (0, Z.jsxs)(Qo, {
				direction: "horizontal",
				style: [B.grow, f.topContainer],
				children: [
					/* @__PURE__ */ (0, Z.jsxs)(Qo, {
						direction: "horizontal",
						spacing: 8,
						style: [f.topContainer, B.flex],
						children: [/* @__PURE__ */ (0, Z.jsx)(Yo.Image, {
							source: s ? getAssetIdByName(s) : ts,
							style: f.icon
						}), /* @__PURE__ */ (0, Z.jsx)(Zo, {
							variant: "heading-lg/semibold",
							children: i
						})]
					}),
					e.SettingsComponent && /* @__PURE__ */ (0, Z.jsx)(Yo.Pressable, {
						onPress: (e) => {
							if (d) return;
							e.stopPropagation();
							resetTooltips();
							Wo.current = p.current;
							Uo?.(true);
						},
						children: /* @__PURE__ */ (0, Z.jsx)($o, {
							ref: p,
							size: "sm",
							variant: "secondary",
							icon: ns,
							onPress: () => {
								navigatePluginSettings(e);
							},
							disabled: !d
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(Yo.Pressable, {
						onPress: (e) => {
							if (u) {
								e.stopPropagation();
								resetTooltips();
								Ko.current = ee.current;
								Go?.(true);
							}
						},
						ref: ee,
						children: /* @__PURE__ */ (0, Z.jsx)(FormSwitch, {
							disabled: u,
							onValueChange: async function onValueChange(t) {
								if (t) {
									await enablePlugin(e, true);
									await preInitPlugin(e);
									await initPlugin(e);
									await startPlugin(e);
								} else await e.disable();
							},
							value: d
						})
					})
				]
			}), /* @__PURE__ */ (0, Z.jsxs)(Qo, {
				spacing: 4,
				style: [f.alignedContainer, B.grow],
				children: [/* @__PURE__ */ (0, Z.jsxs)(Zo, {
					color: "text-muted",
					style: B.grow,
					variant: "heading-md/medium",
					children: ["by ", o]
				}), /* @__PURE__ */ (0, Z.jsx)(Zo, {
					style: B.grow,
					variant: "text-md/medium",
					children: a
				})]
			})]
		});
	}
	var Z, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs;
	var os = __esmMin(() => {
		Z = __toESM(R());
		Xr();
		Vr();
		Wr();
		dr();
		I();
		N();
		O();
		Ke();
		Jo = __toESM(W());
		Yo = __toESM(z());
		Ao();
		Bo();
		qo();
		({Card: Xo, Text: Zo, Stack: Qo, IconButton: $o, createStyles: es} = F);
		ts = getAssetIdByName("PuzzlePieceIcon", "png");
		ns = getAssetIdByName("SettingsIcon", "png");
		rs = es({
			icon: {
				width: 20,
				height: 20,
				tintColor: sr.default.colors.TEXT_NORMAL
			},
			card: {
				marginBottom: 12,
				paddingVertical: 12,
				paddingHorizontal: 12,
				gap: 4
			},
			rightGap: { marginRight: 12 },
			topContainer: { alignItems: "center" },
			alignedContainer: { paddingLeft: 28 }
		});
	});
	var ss = {};
	__export(ss, { default: () => FilterAndSortActionSheet });
	function FilterAndSortActionSheet({ filters: e, filter: t, setFilter: n, matchAll: r, setMatchAll: i, sorts: a, sort: o, setSort: s, reverse: c, setReverse: l }) {
		var [u, d] = (0, cs.useState)(t);
		var [f, p] = (0, cs.useState)(o);
		var [ee, te] = (0, cs.useState)(c);
		var [ne, m] = (0, cs.useState)(r ?? false);
		return /* @__PURE__ */ (0, Q.jsxs)(ls, { children: [
			/* @__PURE__ */ (0, Q.jsx)(us, { title: "Filter & Sort" }),
			/* @__PURE__ */ (0, Q.jsx)(ms, {
				title: "Filter by",
				children: Object.entries(e).map(([e, [t]]) => {
					var r = u.includes(e);
					return /* @__PURE__ */ (0, Q.jsx)(ds, {
						icon: /* @__PURE__ */ (0, Q.jsx)(TableRowAssetIcon, { id: t }),
						label: e,
						value: e,
						checked: r,
						onPress: () => {
							var t = r ? u.filter((t) => t !== e) : [...u, e];
							n(t);
							d(t);
						}
					}, e);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(ms, { children: /* @__PURE__ */ (0, Q.jsx)(hs, {
				label: "Match all",
				subLabel: "Plugins must match all selected filters to show up.",
				value: ne,
				onValueChange: (e) => {
					i(e);
					m(e);
				}
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(fs, {
				title: "Sort by",
				defaultValue: f,
				onChange: (e) => {
					s(e);
					p(e);
				},
				children: Object.entries(a).map(([e, [t]]) => /* @__PURE__ */ (0, Q.jsx)(ps, {
					icon: /* @__PURE__ */ (0, Q.jsx)(TableRowAssetIcon, { id: t }),
					label: e,
					value: e
				}, e))
			}),
			/* @__PURE__ */ (0, Q.jsx)(ms, { children: /* @__PURE__ */ (0, Q.jsx)(hs, {
				label: "Reverse results",
				value: ee,
				onValueChange: (e) => {
					l(e);
					te(e);
				}
			}) })
		] });
	}
	var Q, cs, ls, us, ds, fs, ps, ms, hs;
	var gs = __esmMin(() => {
		Q = __toESM(R());
		V();
		I();
		cs = __toESM(W());
		({ActionSheet: ls, BottomSheetTitleHeader: us, TableCheckboxRow: ds, TableRadioGroup: fs, TableRadioRow: ps, TableRowGroup: ms, TableSwitchRow: hs} = F);
	});
	var _s = {};
	__export(_s, { default: () => RevengePluginsSettingScreen });
	function RevengePluginsSettingScreen() {
		return /* @__PURE__ */ (0, $.jsx)(Cs, { children: /* @__PURE__ */ (0, $.jsx)(ClickOutsideProvider, { children: /* @__PURE__ */ (0, $.jsx)(Page, {
			spacing: 16,
			children: /* @__PURE__ */ (0, $.jsx)(EssentialPluginTooltipProvider, { children: /* @__PURE__ */ (0, $.jsx)(EnablePluginTooltipProvider, { children: /* @__PURE__ */ (0, $.jsx)(Screen, {}) }) })
		}) }) });
	}
	function Screen() {
		useUpdateOnPluginStatesChange();
		var e = Vn.useNavigation();
		var t = Vn.useRoute();
		var [n, r] = (0, vs.useState)("");
		var i = (0, vs.useCallback)(debounce(r, Ts), []);
		var [a, o] = (0, vs.useState)(t.params?.filter ?? Ds);
		var [s, c] = (0, vs.useState)(t.params?.matchAll ?? false);
		var [l, u] = (0, vs.useState)(t.params?.reverse ?? false);
		var [d, f] = (0, vs.useState)(t.params?.sort ?? Os);
		var p = (0, vs.useMemo)(() => [...on.values()].map((e) => [e, A.get(e.manifest.id)[2]]), []);
		var ee = p.filter(([e, t]) => {
			if (a.length === 0) return true;
			if (s) return a.every((n) => Es[n][1](e, t));
			return a.some((n) => Es[n][1](e, t));
		}).filter(([e]) => {
			var { name: t, description: r, author: i } = e.manifest;
			var a = n.toLowerCase();
			return t.toLowerCase().includes(a) || r.toLowerCase().includes(a) || i.toLowerCase().includes(a);
		}).sort(([e], [t]) => {
			var n = ks[d][1](e, t);
			if (l) return -n;
			return n;
		});
		return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)(xs, {
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, $.jsx)(ys.View, {
				style: B.grow,
				children: /* @__PURE__ */ (0, $.jsx)(SearchInput, {
					onChange: (e) => {
						i(e);
					},
					size: "md"
				})
			}), /* @__PURE__ */ (0, $.jsx)(Ss, {
				icon: ws,
				variant: "tertiary",
				onPress: () => mr.openLazy(Promise.resolve().then(() => (gs(), ss)), "filter-and-sort-plugins", {
					filters: Es,
					filter: a,
					setFilter: (t) => {
						e.setParams({ filter: t });
						o(t);
					},
					matchAll: s,
					setMatchAll: (t) => {
						e.setParams({ matchAll: t });
						c(t);
					},
					reverse: l,
					setReverse: (t) => {
						e.setParams({ reverse: t });
						u(t);
					},
					sorts: ks,
					sort: d,
					setSort: (t) => {
						e.setParams({ sort: t });
						f(t);
					}
				})
			})]
		}), /* @__PURE__ */ (0, $.jsx)(PluginMasonryFlashList, { plugins: ee })] });
	}
	function PluginMasonryFlashList({ plugins: e }) {
		var { width: t, height: n } = (0, ys.useWindowDimensions)();
		var r = Math.floor((t - 16) / 448);
		return /* @__PURE__ */ (0, $.jsx)(Gn.MasonryFlashList, {
			data: e,
			onScrollBeginDrag: resetTooltips,
			fadingEdgeLength: 16,
			keyExtractor: ([e]) => e.manifest.id,
			estimatedListSize: {
				width: t - 32,
				height: n - 160
			},
			estimatedItemSize: 116,
			numColumns: r,
			ListEmptyComponent: NoPlugins,
			renderItem: ({ item: [e, t], columnIndex: n }) => /* @__PURE__ */ (0, $.jsx)(InstalledPluginCard, {
				iflags: t,
				plugin: e,
				rightGap: n + 1 < r
			}, e.manifest.id)
		});
	}
	function NoPlugins() {
		return /* @__PURE__ */ (0, $.jsx)(bs, {
			variant: "heading-md/medium",
			style: { textAlign: "center" },
			children: "No plugins found. Try changing your query or filters."
		});
	}
	var $, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks;
	var As = __esmMin(() => {
		$ = __toESM(R());
		Xr();
		Vr();
		Kr();
		ni();
		_r();
		I();
		Un();
		Kn();
		N();
		O();
		Je();
		vs = __toESM(W());
		ys = __toESM(z());
		Ao();
		Fo();
		os();
		qo();
		zs();
		({Text: bs, Stack: xs, IconButton: Ss, LayerScope: Cs} = F);
		ws = getAssetIdByName("FiltersHorizontalIcon", "png");
		Ts = 100;
		Es = {
			Enabled: [getAssetIdByName("CircleCheckIcon"), (e) => Boolean(e.flags & E.Enabled)],
			Disabled: [getAssetIdByName("CircleXIcon"), (e) => !(e.flags & E.Enabled)],
			Internal: [Po, (e) => Boolean(e.flags & j.Internal)],
			Essential: [getAssetIdByName("StarIcon"), (e, t) => Boolean(t & j.Essential)]
		};
		Ds = [];
		Os = "Name";
		ks = {
			Name: [getAssetIdByName("IdIcon"), (e, t) => e.manifest.name.localeCompare(t.manifest.name)],
			"Enabled first": [getAssetIdByName("CircleCheckIcon"), (e, t) => (t.flags & E.Enabled) - (e.flags & E.Enabled)]
		};
	});
	function useUpdateOnPluginStatesChange() {
		var e = useReRender();
		(0, Ms.useEffect)(() => {
			k.on("disabled", e);
			k.on("enabled", e);
			return () => {
				k.off("disabled", e);
				k.off("enabled", e);
			};
		}, [e]);
	}
	function showReloadRequiredAlertIfNeeded(e) {
		if (e.flags & E.ReloadRequired) hr.openAlert("plugin-reload-required", /* @__PURE__ */ (0, js.jsx)(Is, {
			title: "Reload required",
			content: /* @__PURE__ */ (0, js.jsxs)(Ls, {
				variant: "text-md/medium",
				color: "header-secondary",
				children: [
					"Plugin",
					" ",
					/* @__PURE__ */ (0, js.jsx)(Ls, {
						variant: "text-md/bold",
						color: "header-secondary",
						children: e.manifest.name
					}),
					" ",
					"requires a reload to apply changes."
				]
			}),
			actions: /* @__PURE__ */ (0, js.jsxs)(js.Fragment, { children: [/* @__PURE__ */ (0, js.jsx)(Fs, {
				variant: "destructive",
				text: "Reload",
				onPress: () => {
					je.reload();
				}
			}), /* @__PURE__ */ (0, js.jsx)(Fs, {
				variant: "secondary",
				text: "Not now"
			})] })
		}));
	}
	var js, Ms, Ns, Ps, Fs, Is, Ls, Rs;
	var zs = __esmMin(() => {
		js = __toESM(R());
		V();
		_r();
		I();
		Ne();
		N();
		O();
		Ke();
		Ms = __toESM(W());
		X();
		Ns = {
			parent: null,
			type: "route",
			IconComponent: () => /* @__PURE__ */ (0, js.jsx)(TableRowAssetIcon, { name: "PuzzlePieceIcon" }),
			title: () => "Plugins",
			useTrailing: () => {
				useUpdateOnPluginStatesChange();
				return `${Ps} enabled`;
			},
			screen: {
				route: Sa[Y.RevengePlugins],
				getComponent: () => (As(), __toCommonJS(_s)).default
			}
		};
		Ps = 0;
		for (var e of on.values()) if (e.flags & E.Enabled) Ps++;
		k.on("disabled", () => {
			Ps--;
		});
		k.on("enabled", () => {
			Ps++;
		});
		({AlertActionButton: Fs, AlertModal: Is, Text: Ls} = F);
		k.on("started", showReloadRequiredAlertIfNeeded);
		k.on("stopped", showReloadRequiredAlertIfNeeded);
		Rs = Ns;
	});
	var Bs = {};
	__export(Bs, { default: () => RevengeSettingScreen });
	function RevengeSettingScreen() {
		return /* @__PURE__ */ (0, Vs.jsx)(Fr.SettingsList, { sections: [
			{
				label: "Revenge",
				settings: [
					Y.RevengeVersion,
					Y.RevengeDiscord,
					Y.RevengeGitHub
				],
				subLabel: /* @__PURE__ */ (0, Vs.jsxs)(Vs.Fragment, { children: [/* @__PURE__ */ (0, Vs.jsx)(F.Text, {
					variant: "text-xs/medium",
					children: "You are using the next version of Revenge!"
				}), /* @__PURE__ */ (0, Vs.jsx)(F.Text, {
					color: "text-danger",
					variant: "text-xs/semibold",
					children: "This version is experimental and may be unstable."
				})] })
			},
			{
				label: "Versions",
				settings: [
					Y.ReactVersion,
					Y.ReactNativeVersion,
					Y.HermesVersion
				]
			},
			{
				label: "Actions",
				settings: [Y.Reload]
			}
		] });
	}
	var Vs;
	var Hs = __esmMin(() => {
		Vs = __toESM(R());
		I();
		Ir();
		X();
	});
	var Us, Ws, Gs;
	var Ks = __esmMin(() => {
		Us = __toESM(R());
		V();
		Fo();
		X();
		Ws = {
			parent: null,
			type: "route",
			IconComponent: () => /* @__PURE__ */ (0, Us.jsx)(TableRowAssetIcon, { id: Po }),
			title: () => "Revenge",
			useTrailing: () => `0.1.0-8aece26-main`,
			screen: {
				route: Sa[Y.Revenge],
				getComponent: () => (Hs(), __toCommonJS(Bs)).default
			}
		};
		Gs = Ws;
	});
	var qs, Js, Ys;
	var Xs = __esmMin(() => {
		qs = __toESM(R());
		V();
		Fo();
		X();
		Js = {
			parent: Y.Revenge,
			IconComponent: () => /* @__PURE__ */ (0, qs.jsx)(TableRowAssetIcon, { id: Po }),
			title: () => "Revenge",
			useDescription: () => `0.1.0-8aece26-main (production)`,
			type: "static"
		};
		Ys = Js;
	});
	var Zs = {};
	var Qs = __esmMin(() => {
		jr();
		X();
		Da();
		La();
		Ha();
		Ka();
		$a();
		so();
		po();
		zs();
		Ks();
		Xs();
		registerSettingsItems({
			[Y.Revenge]: Gs,
			[Y.RevengePlugins]: Rs,
			[Y.RevengeCustomPage]: Qa,
			[Y.RevengeGitHub]: fo,
			[Y.RevengeDiscord]: oo,
			[Y.Reload]: Ga,
			[Y.RevengeVersion]: Ys,
			[Y.ReactVersion]: Va,
			[Y.ReactNativeVersion]: Ia,
			[Y.HermesVersion]: Ea
		});
		registerSettingsSection("REVENGE", {
			label: "Revenge",
			settings: [Y.Revenge, Y.RevengePlugins]
		});
	});
	var $s = __esmMin(() => {
		Dr();
		jr();
		b();
		it();
		_t();
		N();
		O();
		onSettingsModulesLoaded(() => {
			Qs();
		});
		registerPlugin({
			id: "revenge.settings",
			name: "Settings",
			description: "Settings menus for Revenge",
			author: "Revenge",
			icon: "SettingsIcon"
		}, { start({ logger: e }) {
			var t = waitForModules(g("SETTING_RENDERER_CONFIG"), (n) => {
				t();
				e.info("Settings modules loaded, running subscriptions and patching...");
				for (var r of Er) try {
					r();
				} catch (t) {
					e.error("Failed to run settings modules subscription", t);
				}
				Er.clear();
				L[2] = true;
				var i = n.SETTING_RENDERER_CONFIG;
				Object.defineProperty(n, "SETTING_RENDERER_CONFIG", {
					get: () => ({
						...i,
						...L[1]
					}),
					set: (e) => i = e
				});
			});
			var n = waitForModules(_("SettingsOverviewScreen"), (e) => {
				n();
				var t = L[0];
				after(e, "default", (e) => {
					var { props: { sections: n } } = e;
					var r = t[Object.keys(t)[0]];
					if (!r) return e;
					var i = r.settings[0];
					if (n.findIndex((e) => e.settings.some((e) => e === i)) !== -1) return e;
					for (var a of Object.values(t)) if (!a.index) n.unshift(a);
					else n.splice(a.index, 0, a);
					return e;
				});
			}, { returnNamespace: true });
		} }, E.Enabled, j.Internal | j.Essential);
	});
	var ec = __esmMin(() => {
		nr();
		jr();
		b();
		qt();
		_t();
		N();
		O();
		registerPlugin({
			id: "revenge.staff-settings",
			name: "Staff Settings",
			description: "Allows accessing Discord's Staff Settings.",
			author: "Revenge",
			icon: "StaffBadgeIcon"
		}, { start({ cleanup: e, logger: t }) {
			function reset() {
				getStore("DeveloperExperimentStore", (e) => {
					t.log("Reinitializing DeveloperExperimentStore to apply changes...");
					var n = instead(Object, "defineProperties", (e) => e[0]);
					e.initialize();
					n();
					setTimeout(() => {
						refreshSettingsOverviewScreen(true);
					});
				});
			}
			e(getModule(g("isStaffEnv"), (n) => {
				t.log("Patching UserStoreUtils...");
				e(instead(n, "isStaffEnv", ([e]) => e === er.UserStore.getCurrentUser()), reset);
				reset();
			}));
		} }, E.Enabled, j.Internal);
	});
	var tc = {};
	var nc = __esmMin(() => {
		xa();
		$s();
		ec();
	});
	var rc = {};
	__export(rc, {
		onRunApplication: () => onRunApplication,
		onRunApplicationFinished: () => onRunApplicationFinished
	});
	/**
	* Registers a callback to be run when a call to {@link AppRegistry.runApplication} is made.
	*
	* @param callback The callback to be called.
	* @returns A function to unregister the callback.
	*/ function onRunApplication(e) {
		vt.add(e);
		return () => vt.delete(e);
	}
	/**
	* Registers a callback to be run when a call to {@link AppRegistry.runApplication} is finished.
	*
	* @param callback The callback to be called.
	* @returns A function to unregister the callback.
	*/ function onRunApplicationFinished(e) {
		yt.add(e);
		return () => yt.delete(e);
	}
	var ic = __esmMin(() => {
		xt();
	});
	var ac = {};
	var oc = __esmMin(() => {});
	var sc;
	var cc = __esmMin(() => {
		S();
		oc();
		ic();
		sc = {
			...Pe,
			jsxRuntime: ac,
			native: rc
		};
	});
	var lc = {};
	var uc, dc;
	var fc = __esmMin(() => {
		Xr();
		ic();
		N();
		rn();
		cc();
		O();
		uc = nn;
		uc.assets = qr;
		uc.react = sc;
		for (var e of on.values()) if (e.flags & E.Enabled) initPlugin(e);
		dc = onRunApplication(() => {
			dc();
			for (var e of on.values()) if (e.flags & E.Enabled) startPlugin(e);
		});
	});
	function runCatching(e) {
		try {
			e();
		} catch (e) {
			var { ClientInfoModule: t, DeviceModule: n } = (Ne(), __toCommonJS(Te));
			alert(`Failed to load Revenge (0.1.0-8aece26-main (production))\nDiscord: ${t.Version} (${t.Build})\nDevice: ${n.deviceManufacturer} ${n.deviceModel}\n\n` + getErrorStack(e));
		}
	}
	var pc, mc;
	var hc = __esmMin(() => {
		ue();
		fe();
		me();
		f();
		pc = interceptProperty("__d", (e, t) => {
			pc();
			return patchMetroDefine(t);
		});
		mc = 0;
		onModuleFirstRequired(mc, function onIndexRequired() {
			runCatching(() => {
				ct();
				Ct();
				Rt();
				ln();
				pn();
				bn();
				Sn();
				onModuleInitialized(mc, function onIndexInitialized() {
					runCatching(() => {
						wn();
						Jn();
						Rr();
						ci();
						nc();
						fc();
					});
				});
			});
		});
	});
	hc();
})();
//# sourceURL=Revenge