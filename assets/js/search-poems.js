! function() {
  "use strict";
  var o = {
    compile: function M(r) {
      return i.template.replace(i.pattern, function(t, e) {
        var n = i.middleware(e, r[e], i.template);
        return void 0 !== n ? n : r[e] || t
      })
    },
    setOptions: function T(t) {
      i.pattern = t.pattern || i.pattern, i.template = t.template || i.template, "function" == typeof t.middleware && (i.middleware = t.middleware)
    }
  }, i = {};
  i.pattern = /\{(.*?)\}/g, i.template = "", i.middleware = function() {};
  var n = function x(t, e) {
    var n = e.length,
      r = t.length;
    if (n < r) return !1;
    if (r === n) return t === e;
    t: for (var i = 0, o = 0; i < r; i++) {
      for (var u = t.charCodeAt(i); o < n;) if (e.charCodeAt(o++) === u) continue t;
      return !1
    }
    return !0
  }, e = new function J() {
      this.matches = function(t, e) {
        return n(e.toLowerCase(), t.toLowerCase())
      }
    };
  var r = new function R() {
      this.matches = function(e, t) {
        return !!e && (e = e.trim()
          .toLowerCase(), (t = t.trim()
          .toLowerCase())
          .split(" ")
          .filter(function(t) {
          return 0 <= e.indexOf(t)
        })
          .length === t.split(" ")
          .length)
      }
    };
  var u = {
    put: function b(t) {
      if (l(t)) return p(t);
      if (function e(t) {
        return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t)
      }(t)) return function i(t) {
        var e = [];
        f();
        for (var n = 0, r = t.length; n < r; n++) l(t[n]) && e.push(p(t[n]));
        return e
      }(t);
      return undefined
    },
    clear: f,
    search: function N(t) {
      return t ? function a(t, e, n, r) {
        for (var i = [], o = 0; o < t.length && i.length < r.limit; o++) {
          var u = d(t[o], e, n, r);
          u && i.push(u)
        }
        return i
      }(c, t, s.searchStrategy, s)
        .sort(s.sort) : []
    },
    setOptions: function E(t) {
      (s = t || {})
        .fuzzy = t.fuzzy || !1, s.limit = t.limit || 10, s.searchStrategy = t.fuzzy ? e : r, s.sort = t.sort || a
    }
  };

  function a() {
    return 0
  }
  var c = [],
    s = {};

  function f() {
    return c.length = 0, c
  }
  function l(t) {
    return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t)
  }
  function p(t) {
    return c.push(t), c
  }
  function d(t, e, n, r) {
    for (var i in t) if (!h(t[i], r.exclude) && n.matches(t[i], e)) return t
  }
  function h(t, e) {
    for (var n = !1, r = 0, i = (e = e || [])
      .length; r < i; r++) {
      var o = e[r];
      !n && new RegExp(t)
        .test(o) && (n = !0)
    }
    return n
  }
  s.fuzzy = !1, s.limit = 10, s.searchStrategy = s.fuzzy ? e : r, s.sort = a;
  var m = {
    load: function A(t, e) {
      var n = function r() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
      }();
      n.open("GET", t, !0), n.onreadystatechange = function i(e, n) {
        return function() {
          if (4 === e.readyState && 200 === e.status) try {
            n(null, JSON.parse(e.responseText))
          } catch (t) {
            n(t, null)
          }
        }
      }(n, e), n.send()
    }
  };
  var t = function H(t) {
    if (! function e(t) {
      return t && ("undefined" != typeof t.required && t.required instanceof Array)
    }(t)) throw new Error("-- OptionsValidator: required options missing");
    if (!(this instanceof H)) return new H(t);
    var r = t.required;
    this.getRequiredOptions = function() {
      return r
    }, this.validate = function(e) {
      var n = [];
      return r.forEach(function(t) {
        "undefined" == typeof e[t] && n.push(t)
      }), n
    }
  }, v = {
    merge: function X(t, e) {
      var n = {};
      for (var r in t) n[r] = t[r], "undefined" != typeof e[r] && (n[r] = e[r]);
      return n
    },
    isJSON: function k(t) {
      try {
        return t instanceof Object && JSON.parse(JSON.stringify(t)) ? !0 : !1
      } catch (e) {
        return !1
      }
    }
  };
  var w, y, g, O, z;

  function S(t) {
    u.put(t),
    function e() {
      y.searchInput.addEventListener("keyup", function(t) {
        ! function e(t) {
          return -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t)
        }(t.which) || (j(), C(t.target.value))
      })
    }()
  }
  function j() {
    y.resultsContainer.innerHTML = ""
  }
  function q(t) {
    y.resultsContainer.innerHTML += t
  }
  function C(t) {
    ! function e(t) {
      return t && 0 < t.length
    }(t) || (j(), function i(t, e) {
      var n = t.length;
      if (0 === n) return q(y.noResultsText);
      for (var r = 0; r < n; r++) t[r].query = e, q(o.compile(t[r]))
    }(u.search(t), t))
  }
  function L(t) {
    throw new Error("SearchPoems --- " + t)
  }
  w = window, y = {
    searchInput: null,
    resultsContainer: null,
    json: [],
    success: Function.prototype,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    templateMiddleware: Function.prototype,
    sortMiddleware: function() {
      return 0
    },
    noResultsText: "No results found",
    limit: 10,
    fuzzy: !1,
    exclude: [_posts]
  }, O = t({
    required: g = ["searchInput", "resultsContainer", "json"]
  }), z = function(t) {
    return 0 < O.validate(t)
      .length && L("You must specify the following required options: " + g), y = v.merge(y, t), o.setOptions({
      template: y.searchResultTemplate,
      middleware: y.templateMiddleware
    }), u.setOptions({
      fuzzy: y.fuzzy,
      limit: y.limit,
      sort: y.sortMiddleware
    }), (v.isJSON(y.json) ? S : function e(n) {
      m.load(n, function(t, e) {
        t && L("failed to get JSON (" + n + ")"), S(e)
      })
    })(y.json), {
      search: C
    }
  }, w.SearchPoems = function(t) {
    var e = z(t);
  }
}();