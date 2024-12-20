/*! For license information please see neonpay.js.LICENSE.txt */
!function () {
  var t = {
    4744: function (t) {
      'use strict';
      var e = function (t) {
        return function (t) {
          return !!t &&
          'object' == typeof t
        }(t) &&
        !function (t) {
          var e = Object.prototype.toString.call(t);
          return '[object RegExp]' === e ||
          '[object Date]' === e ||
          function (t) {
            return t.$$typeof === n
          }(t)
        }(t)
      };
      var n = 'function' == typeof Symbol &&
      Symbol.for ? Symbol.for('react.element') : 60103;
      function r(t, e) {
        return !1 !== e.clone &&
        e.isMergeableObject(t) ? s((n = t, Array.isArray(n) ? [] : {
        }), t, e) : t;
        var n
      }
      function o(t, e, n) {
        return t.concat(e).map((function (t) {
          return r(t, n)
        }))
      }
      function i(t) {
        return Object.keys(t).concat(
          function (t) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function (e) {
              return Object.propertyIsEnumerable.call(t, e)
            })) : []
          }(t)
        )
      }
      function a(t, e) {
        try {
          return e in t
        } catch (t) {
          return !1
        }
      }
      function c(t, e, n) {
        var o = {};
        return n.isMergeableObject(t) &&
        i(t).forEach((function (e) {
          o[e] = r(t[e], n)
        })),
        i(e).forEach(
          (
            function (i) {
              (
                function (t, e) {
                  return a(t, e) &&
                  !(
                    Object.hasOwnProperty.call(t, e) &&
                    Object.propertyIsEnumerable.call(t, e)
                  )
                }
              ) (t, i) ||
              (
                a(t, i) &&
                n.isMergeableObject(e[i]) ? o[i] = function (t, e) {
                  if (!e.customMerge) return s;
                  var n = e.customMerge(t);
                  return 'function' == typeof n ? n : s
                }(i, n) (t[i], e[i], n) : o[i] = r(e[i], n)
              )
            }
          )
        ),
        o
      }
      function s(t, n, i) {
        (i = i || {
        }).arrayMerge = i.arrayMerge ||
        o,
        i.isMergeableObject = i.isMergeableObject ||
        e,
        i.cloneUnlessOtherwiseSpecified = r;
        var a = Array.isArray(n);
        return a === Array.isArray(t) ? a ? i.arrayMerge(t, n, i) : c(t, n, i) : r(n, i)
      }
      s.all = function (t, e) {
        if (!Array.isArray(t)) throw new Error('first argument should be an array');
        return t.reduce((function (t, n) {
          return s(t, n, e)
        }), {
        })
      };
      var u = s;
      t.exports = u
    },
    1873: function (t, e, n) {
      var r = n(9325).Symbol;
      t.exports = r
    },
    2552: function (t, e, n) {
      var r = n(1873),
      o = n(659),
      i = n(9350),
      a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t ? void 0 === t ? '[object Undefined]' : '[object Null]' : a &&
        a in Object(t) ? o(t) : i(t)
      }
    },
    4840: function (t, e, n) {
      var r = 'object' == typeof n.g &&
      n.g &&
      n.g.Object === Object &&
      n.g;
      t.exports = r
    },
    8879: function (t, e, n) {
      var r = n(4335) (Object.getPrototypeOf, Object);
      t.exports = r
    },
    659: function (t, e, n) {
      var r = n(1873),
      o = Object.prototype,
      i = o.hasOwnProperty,
      a = o.toString,
      c = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, c),
        n = t[c];
        try {
          t[c] = void 0;
          var r = !0
        } catch (t) {
        }
        var o = a.call(t);
        return r &&
        (e ? t[c] = n : delete t[c]),
        o
      }
    },
    9350: function (t) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t)
      }
    },
    4335: function (t) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n))
        }
      }
    },
    9325: function (t, e, n) {
      var r = n(4840),
      o = 'object' == typeof self &&
      self &&
      self.Object === Object &&
      self,
      i = r ||
      o ||
      Function('return this') ();
      t.exports = i
    },
    1900: function (t, e, n) {
      var r = n(346),
      o = n(1331);
      t.exports = function (t) {
        return r(t) &&
        1 === t.nodeType &&
        !o(t)
      }
    },
    346: function (t) {
      t.exports = function (t) {
        return null != t &&
        'object' == typeof t
      }
    },
    1331: function (t, e, n) {
      var r = n(2552),
      o = n(8879),
      i = n(346),
      a = Function.prototype,
      c = Object.prototype,
      s = a.toString,
      u = c.hasOwnProperty,
      p = s.call(Object);
      t.exports = function (t) {
        if (!i(t) || '[object Object]' != r(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var n = u.call(e, 'constructor') &&
        e.constructor;
        return 'function' == typeof n &&
        n instanceof n &&
        s.call(n) == p
      }
    },
    9306: function (t, e, n) {
      'use strict';
      var r = n(4901),
      o = n(6823),
      i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new i(o(t) + ' is not a function')
      }
    },
    5548: function (t, e, n) {
      'use strict';
      var r = n(3517),
      o = n(6823),
      i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new i(o(t) + ' is not a constructor')
      }
    },
    3506: function (t, e, n) {
      'use strict';
      var r = n(3925),
      o = String,
      i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new i('Can\'t set ' + o(t) + ' as a prototype')
      }
    },
    6469: function (t, e, n) {
      'use strict';
      var r = n(8227),
      o = n(2360),
      i = n(4913).f,
      a = r('unscopables'),
      c = Array.prototype;
      void 0 === c[a] &&
      i(c, a, {
        configurable: !0,
        value: o(null)
      }),
      t.exports = function (t) {
        c[a][t] = !0
      }
    },
    7829: function (t, e, n) {
      'use strict';
      var r = n(8183).charAt;
      t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1)
      }
    },
    679: function (t, e, n) {
      'use strict';
      var r = n(1625),
      o = TypeError;
      t.exports = function (t, e) {
        if (r(e, t)) return t;
        throw new o('Incorrect invocation')
      }
    },
    8551: function (t, e, n) {
      'use strict';
      var r = n(34),
      o = String,
      i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new i(o(t) + ' is not an object')
      }
    },
    235: function (t, e, n) {
      'use strict';
      var r = n(9213).forEach,
      o = n(4598) ('forEach');
      t.exports = o ? [].forEach : function (t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    },
    7916: function (t, e, n) {
      'use strict';
      var r = n(6080),
      o = n(9565),
      i = n(8981),
      a = n(6319),
      c = n(4209),
      s = n(3517),
      u = n(6198),
      p = n(4659),
      f = n(81),
      l = n(851),
      d = Array;
      t.exports = function (t) {
        var e = i(t),
        n = s(this),
        h = arguments.length,
        y = h > 1 ? arguments[1] : void 0,
        v = void 0 !== y;
        v &&
        (y = r(y, h > 2 ? arguments[2] : void 0));
        var m,
        g,
        b,
        w,
        _,
        x,
        S = l(e),
        E = 0;
        if (!S || this === d && c(S)) for (m = u(e), g = n ? new this(m) : d(m); m > E; E++) x = v ? y(e[E], E) : e[E],
        p(g, E, x);
         else for (g = n ? new this : [], _ = (w = f(e, S)).next; !(b = o(_, w)).done; E++) x = v ? a(w, y, [
          b.value,
          E
        ], !0) : b.value,
        p(g, E, x);
        return g.length = E,
        g
      }
    },
    9617: function (t, e, n) {
      'use strict';
      var r = n(5397),
      o = n(5610),
      i = n(6198),
      a = function (t) {
        return function (e, n, a) {
          var c = r(e),
          s = i(c);
          if (0 === s) return !t &&
          - 1;
          var u,
          p = o(a, s);
          if (t && n != n) {
            for (; s > p; ) if ((u = c[p++]) != u) return !0
          } else for (; s > p; p++) if ((t || p in c) && c[p] === n) return t ||
          p ||
          0;
          return !t &&
          - 1
        }
      };
      t.exports = {
        includes: a(!0),
        indexOf: a(!1)
      }
    },
    9213: function (t, e, n) {
      'use strict';
      var r = n(6080),
      o = n(9504),
      i = n(7055),
      a = n(8981),
      c = n(6198),
      s = n(1469),
      u = o([].push),
      p = function (t) {
        var e = 1 === t,
        n = 2 === t,
        o = 3 === t,
        p = 4 === t,
        f = 6 === t,
        l = 7 === t,
        d = 5 === t ||
        f;
        return function (h, y, v, m) {
          for (
            var g,
            b,
            w = a(h),
            _ = i(w),
            x = c(_),
            S = r(y, v),
            E = 0,
            O = m ||
            s,
            k = e ? O(h, x) : n ||
            l ? O(h, 0) : void 0;
            x > E;
            E++
          ) if ((d || E in _) && (b = S(g = _[E], E, w), t)) if (e) k[E] = b;
           else if (b) switch (t) {
            case 3:
              return !0;
            case 5:
              return g;
            case 6:
              return E;
            case 2:
              u(k, g)
          } else switch (t) {
            case 4:
              return !1;
            case 7:
              u(k, g)
          }
          return f ? - 1 : o ||
          p ? p : k
        }
      };
      t.exports = {
        forEach: p(0),
        map: p(1),
        filter: p(2),
        some: p(3),
        every: p(4),
        find: p(5),
        findIndex: p(6),
        filterReject: p(7)
      }
    },
    597: function (t, e, n) {
      'use strict';
      var r = n(9039),
      o = n(8227),
      i = n(9519),
      a = o('species');
      t.exports = function (t) {
        return i >= 51 ||
        !r(
          (
            function () {
              var e = [];
              return (e.constructor = {}) [a] = function () {
                return {
                  foo: 1
                }
              },
              1 !== e[t](Boolean).foo
            }
          )
        )
      }
    },
    4598: function (t, e, n) {
      'use strict';
      var r = n(9039);
      t.exports = function (t, e) {
        var n = [][t];
        return !!n &&
        r((function () {
          n.call(null, e || function () {
            return 1
          }, 1)
        }))
      }
    },
    7680: function (t, e, n) {
      'use strict';
      var r = n(9504);
      t.exports = r([].slice)
    },
    7433: function (t, e, n) {
      'use strict';
      var r = n(4376),
      o = n(3517),
      i = n(34),
      a = n(8227) ('species'),
      c = Array;
      t.exports = function (t) {
        var e;
        return r(t) &&
        (
          e = t.constructor,
          (o(e) && (e === c || r(e.prototype)) || i(e) && null === (e = e[a])) &&
          (e = void 0)
        ),
        void 0 === e ? c : e
      }
    },
    1469: function (t, e, n) {
      'use strict';
      var r = n(7433);
      t.exports = function (t, e) {
        return new (r(t)) (0 === e ? 0 : e)
      }
    },
    6319: function (t, e, n) {
      'use strict';
      var r = n(8551),
      o = n(9539);
      t.exports = function (t, e, n, i) {
        try {
          return i ? e(r(n) [0], n[1]) : e(n)
        } catch (e) {
          o(t, 'throw', e)
        }
      }
    },
    4428: function (t, e, n) {
      'use strict';
      var r = n(8227) ('iterator'),
      o = !1;
      try {
        var i = 0,
        a = {
          next: function () {
            return {
              done: !!i++
            }
          },
          return : function () {
            o = !0
          }
        };
        a[r] = function () {
          return this
        },
        Array.from(a, (function () {
          throw 2
        }))
      } catch (t) {
      }
      t.exports = function (t, e) {
        try {
          if (!e && !o) return !1
        } catch (t) {
          return !1
        }
        var n = !1;
        try {
          var i = {};
          i[r] = function () {
            return {
              next: function () {
                return {
                  done: n = !0
                }
              }
            }
          },
          t(i)
        } catch (t) {
        }
        return n
      }
    },
    2195: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = r({
      }.toString),
      i = r(''.slice);
      t.exports = function (t) {
        return i(o(t), 8, - 1)
      }
    },
    6955: function (t, e, n) {
      'use strict';
      var r = n(2140),
      o = n(4901),
      i = n(2195),
      a = n(8227) ('toStringTag'),
      c = Object,
      s = 'Arguments' === i(function () {
        return arguments
      }());
      t.exports = r ? i : function (t) {
        var e,
        n,
        r;
        return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = function (t, e) {
          try {
            return t[e]
          } catch (t) {
          }
        }(e = c(t), a)) ? n : s ? i(e) : 'Object' === (r = i(e)) &&
        o(e.callee) ? 'Arguments' : r
      }
    },
    7740: function (t, e, n) {
      'use strict';
      var r = n(9297),
      o = n(5031),
      i = n(7347),
      a = n(4913);
      t.exports = function (t, e, n) {
        for (var c = o(e), s = a.f, u = i.f, p = 0; p < c.length; p++) {
          var f = c[p];
          r(t, f) ||
          n &&
          r(n, f) ||
          s(t, f, u(e, f))
        }
      }
    },
    1436: function (t, e, n) {
      'use strict';
      var r = n(8227) ('match');
      t.exports = function (t) {
        var e = /./;
        try {
          '/./'[t](e)
        } catch (n) {
          try {
            return e[r] = !1,
            '/./'[t](e)
          } catch (t) {
          }
        }
        return !1
      }
    },
    2211: function (t, e, n) {
      'use strict';
      var r = n(9039);
      t.exports = !r(
        (
          function () {
            function t() {
            }
            return t.prototype.constructor = null,
            Object.getPrototypeOf(new t) !== t.prototype
          }
        )
      )
    },
    2529: function (t) {
      'use strict';
      t.exports = function (t, e) {
        return {
          value: t,
          done: e
        }
      }
    },
    6699: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(4913),
      i = n(6980);
      t.exports = r ? function (t, e, n) {
        return o.f(t, e, i(1, n))
      }
       : function (t, e, n) {
        return t[e] = n,
        t
      }
    },
    6980: function (t) {
      'use strict';
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    4659: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(4913),
      i = n(6980);
      t.exports = function (t, e, n) {
        r ? o.f(t, e, i(0, n)) : t[e] = n
      }
    },
    3640: function (t, e, n) {
      'use strict';
      var r = n(8551),
      o = n(4270),
      i = TypeError;
      t.exports = function (t) {
        if (r(this), 'string' === t || 'default' === t) t = 'string';
         else if ('number' !== t) throw new i('Incorrect hint');
        return o(this, t)
      }
    },
    2106: function (t, e, n) {
      'use strict';
      var r = n(283),
      o = n(4913);
      t.exports = function (t, e, n) {
        return n.get &&
        r(n.get, e, {
          getter: !0
        }),
        n.set &&
        r(n.set, e, {
          setter: !0
        }),
        o.f(t, e, n)
      }
    },
    6840: function (t, e, n) {
      'use strict';
      var r = n(4901),
      o = n(4913),
      i = n(283),
      a = n(9433);
      t.exports = function (t, e, n, c) {
        c ||
        (c = {});
        var s = c.enumerable,
        u = void 0 !== c.name ? c.name : e;
        if (r(n) && i(n, u, c), c.global) s ? t[e] = n : a(e, n);
         else {
          try {
            c.unsafe ? t[e] &&
            (s = !0) : delete t[e]
          } catch (t) {
          }
          s ? t[e] = n : o.f(
            t,
            e,
            {
              value: n,
              enumerable: !1,
              configurable: !c.nonConfigurable,
              writable: !c.nonWritable
            }
          )
        }
        return t
      }
    },
    9433: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          o(r, t, {
            value: e,
            configurable: !0,
            writable: !0
          })
        } catch (n) {
          r[t] = e
        }
        return e
      }
    },
    3724: function (t, e, n) {
      'use strict';
      var r = n(9039);
      t.exports = !r(
        (
          function () {
            return 7 !== Object.defineProperty({
            }, 1, {
              get: function () {
                return 7
              }
            }) [1]
          }
        )
      )
    },
    4055: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(34),
      i = r.document,
      a = o(i) &&
      o(i.createElement);
      t.exports = function (t) {
        return a ? i.createElement(t) : {
        }
      }
    },
    6837: function (t) {
      'use strict';
      var e = TypeError;
      t.exports = function (t) {
        if (t > 9007199254740991) throw e('Maximum allowed index exceeded');
        return t
      }
    },
    7400: function (t) {
      'use strict';
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      }
    },
    9296: function (t, e, n) {
      'use strict';
      var r = n(4055) ('span').classList,
      o = r &&
      r.constructor &&
      r.constructor.prototype;
      t.exports = o === Object.prototype ? void 0 : o
    },
    8727: function (t) {
      'use strict';
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
    },
    4265: function (t, e, n) {
      'use strict';
      var r = n(2839);
      t.exports = /ipad|iphone|ipod/i.test(r) &&
      'undefined' != typeof Pebble
    },
    9544: function (t, e, n) {
      'use strict';
      var r = n(2839);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
    },
    6193: function (t, e, n) {
      'use strict';
      var r = n(4215);
      t.exports = 'NODE' === r
    },
    7860: function (t, e, n) {
      'use strict';
      var r = n(2839);
      t.exports = /web0s(?!.*chrome)/i.test(r)
    },
    2839: function (t, e, n) {
      'use strict';
      var r = n(4576).navigator,
      o = r &&
      r.userAgent;
      t.exports = o ? String(o) : ''
    },
    9519: function (t, e, n) {
      'use strict';
      var r,
      o,
      i = n(4576),
      a = n(2839),
      c = i.process,
      s = i.Deno,
      u = c &&
      c.versions ||
      s &&
      s.version,
      p = u &&
      u.v8;
      p &&
      (o = (r = p.split('.')) [0] > 0 && r[0] < 4 ? 1 : + (r[0] + r[1])),
      !o &&
      a &&
      (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
      (r = a.match(/Chrome\/(\d+)/)) &&
      (o = + r[1]),
      t.exports = o
    },
    4215: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(2839),
      i = n(2195),
      a = function (t) {
        return o.slice(0, t.length) === t
      };
      t.exports = a('Bun/') ? 'BUN' : a('Cloudflare-Workers') ? 'CLOUDFLARE' : a('Deno/') ? 'DENO' : a('Node.js/') ? 'NODE' : r.Bun &&
      'string' == typeof Bun.version ? 'BUN' : r.Deno &&
      'object' == typeof Deno.version ? 'DENO' : 'process' === i(r.process) ? 'NODE' : r.window &&
      r.document ? 'BROWSER' : 'REST'
    },
    6518: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(7347).f,
      i = n(6699),
      a = n(6840),
      c = n(9433),
      s = n(7740),
      u = n(2796);
      t.exports = function (t, e) {
        var n,
        p,
        f,
        l,
        d,
        h = t.target,
        y = t.global,
        v = t.stat;
        if (n = y ? r : v ? r[h] ||
        c(h, {
        }) : r[h] && r[h].prototype) for (p in e) {
          if (
            l = e[p],
            f = t.dontCallGetSet ? (d = o(n, p)) &&
            d.value : n[p],
            !u(y ? p : h + (v ? '.' : '#') + p, t.forced) &&
            void 0 !== f
          ) {
            if (typeof l == typeof f) continue;
            s(l, f)
          }(t.sham || f && f.sham) &&
          i(l, 'sham', !0),
          a(n, p, l, t)
        }
      }
    },
    9039: function (t) {
      'use strict';
      t.exports = function (t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    9228: function (t, e, n) {
      'use strict';
      n(7495);
      var r = n(9565),
      o = n(6840),
      i = n(7323),
      a = n(9039),
      c = n(8227),
      s = n(6699),
      u = c('species'),
      p = RegExp.prototype;
      t.exports = function (t, e, n, f) {
        var l = c(t),
        d = !a(
          (
            function () {
              var e = {};
              return e[l] = function () {
                return 7
              },
              7 !== ''[t](e)
            }
          )
        ),
        h = d &&
        !a(
          (
            function () {
              var e = !1,
              n = /a/;
              return 'split' === t &&
              (
                (n = {}).constructor = {},
                n.constructor[u] = function () {
                  return n
                },
                n.flags = '',
                n[l] = /./[l]
              ),
              n.exec = function () {
                return e = !0,
                null
              },
              n[l](''),
              !e
            }
          )
        );
        if (!d || !h || n) {
          var y = /./[l],
          v = e(
            l,
            ''[t],
            (
              function (t, e, n, o, a) {
                var c = e.exec;
                return c === i ||
                c === p.exec ? d &&
                !a ? {
                  done: !0,
                  value: r(y, e, n, o)
                }
                 : {
                  done: !0,
                  value: r(t, n, e, o)
                }
                 : {
                  done: !1
                }
              }
            )
          );
          o(String.prototype, t, v[0]),
          o(p, l, v[1])
        }
        f &&
        s(p[l], 'sham', !0)
      }
    },
    8745: function (t, e, n) {
      'use strict';
      var r = n(616),
      o = Function.prototype,
      i = o.apply,
      a = o.call;
      t.exports = 'object' == typeof Reflect &&
      Reflect.apply ||
      (r ? a.bind(i) : function () {
        return a.apply(i, arguments)
      })
    },
    6080: function (t, e, n) {
      'use strict';
      var r = n(7476),
      o = n(9306),
      i = n(616),
      a = r(r.bind);
      t.exports = function (t, e) {
        return o(t),
        void 0 === e ? t : i ? a(t, e) : function () {
          return t.apply(e, arguments)
        }
      }
    },
    616: function (t, e, n) {
      'use strict';
      var r = n(9039);
      t.exports = !r(
        (
          function () {
            var t = function () {
            }.bind();
            return 'function' != typeof t ||
            t.hasOwnProperty('prototype')
          }
        )
      )
    },
    9565: function (t, e, n) {
      'use strict';
      var r = n(616),
      o = Function.prototype.call;
      t.exports = r ? o.bind(o) : function () {
        return o.apply(o, arguments)
      }
    },
    350: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(9297),
      i = Function.prototype,
      a = r &&
      Object.getOwnPropertyDescriptor,
      c = o(i, 'name'),
      s = c &&
      'something' === function () {
      }.name,
      u = c &&
      (!r || r && a(i, 'name').configurable);
      t.exports = {
        EXISTS: c,
        PROPER: s,
        CONFIGURABLE: u
      }
    },
    6706: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(9306);
      t.exports = function (t, e, n) {
        try {
          return r(o(Object.getOwnPropertyDescriptor(t, e) [n]))
        } catch (t) {
        }
      }
    },
    7476: function (t, e, n) {
      'use strict';
      var r = n(2195),
      o = n(9504);
      t.exports = function (t) {
        if ('Function' === r(t)) return o(t)
      }
    },
    9504: function (t, e, n) {
      'use strict';
      var r = n(616),
      o = Function.prototype,
      i = o.call,
      a = r &&
      o.bind.bind(i, i);
      t.exports = r ? a : function (t) {
        return function () {
          return i.apply(t, arguments)
        }
      }
    },
    7751: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(4901);
      t.exports = function (t, e) {
        return arguments.length < 2 ? (n = r[t], o(n) ? n : void 0) : r[t] &&
        r[t][e];
        var n
      }
    },
    851: function (t, e, n) {
      'use strict';
      var r = n(6955),
      o = n(5966),
      i = n(4117),
      a = n(6269),
      c = n(8227) ('iterator');
      t.exports = function (t) {
        if (!i(t)) return o(t, c) ||
        o(t, '@@iterator') ||
        a[r(t)]
      }
    },
    81: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(9306),
      i = n(8551),
      a = n(6823),
      c = n(851),
      s = TypeError;
      t.exports = function (t, e) {
        var n = arguments.length < 2 ? c(t) : e;
        if (o(n)) return i(r(n, t));
        throw new s(a(t) + ' is not iterable')
      }
    },
    6933: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(4376),
      i = n(4901),
      a = n(2195),
      c = n(655),
      s = r([].push);
      t.exports = function (t) {
        if (i(t)) return t;
        if (o(t)) {
          for (var e = t.length, n = [], r = 0; r < e; r++) {
            var u = t[r];
            'string' == typeof u ? s(n, u) : 'number' != typeof u &&
            'Number' !== a(u) &&
            'String' !== a(u) ||
            s(n, c(u))
          }
          var p = n.length,
          f = !0;
          return function (t, e) {
            if (f) return f = !1,
            e;
            if (o(this)) return e;
            for (var r = 0; r < p; r++) if (n[r] === t) return e
          }
        }
      }
    },
    5966: function (t, e, n) {
      'use strict';
      var r = n(9306),
      o = n(4117);
      t.exports = function (t, e) {
        var n = t[e];
        return o(n) ? void 0 : r(n)
      }
    },
    2478: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(8981),
      i = Math.floor,
      a = r(''.charAt),
      c = r(''.replace),
      s = r(''.slice),
      u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      p = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, e, n, r, f, l) {
        var d = n + t.length,
        h = r.length,
        y = p;
        return void 0 !== f &&
        (f = o(f), y = u),
        c(
          l,
          y,
          (
            function (o, c) {
              var u;
              switch (a(c, 0)) {
                case '$':
                  return '$';
                case '&':
                  return t;
                case '`':
                  return s(e, 0, n);
                case '\'':
                  return s(e, d);
                case '<':
                  u = f[s(c, 1, - 1)];
                  break;
                default:
                  var p = + c;
                  if (0 === p) return o;
                  if (p > h) {
                    var l = i(p / 10);
                    return 0 === l ? o : l <= h ? void 0 === r[l - 1] ? a(c, 1) : r[l - 1] + a(c, 1) : o
                  }
                  u = r[p - 1]
              }
              return void 0 === u ? '' : u
            }
          )
        )
      }
    },
    4576: function (t, e, n) {
      'use strict';
      var r = function (t) {
        return t &&
        t.Math === Math &&
        t
      };
      t.exports = r('object' == typeof globalThis && globalThis) ||
      r('object' == typeof window && window) ||
      r('object' == typeof self && self) ||
      r('object' == typeof n.g && n.g) ||
      r('object' == typeof this && this) ||
      function () {
        return this
      }() ||
      Function('return this') ()
    },
    9297: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(8981),
      i = r({
      }.hasOwnProperty);
      t.exports = Object.hasOwn ||
      function (t, e) {
        return i(o(t), e)
      }
    },
    421: function (t) {
      'use strict';
      t.exports = {}
    },
    3138: function (t) {
      'use strict';
      t.exports = function (t, e) {
        try {
          1 === arguments.length ? console.error(t) : console.error(t, e)
        } catch (t) {
        }
      }
    },
    397: function (t, e, n) {
      'use strict';
      var r = n(7751);
      t.exports = r('document', 'documentElement')
    },
    5917: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(9039),
      i = n(4055);
      t.exports = !r &&
      !o(
        (
          function () {
            return 7 !== Object.defineProperty(i('div'), 'a', {
              get: function () {
                return 7
              }
            }).a
          }
        )
      )
    },
    7055: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(9039),
      i = n(2195),
      a = Object,
      c = r(''.split);
      t.exports = o((function () {
        return !a('z').propertyIsEnumerable(0)
      })) ? function (t) {
        return 'String' === i(t) ? c(t, '') : a(t)
      }
       : a
    },
    3167: function (t, e, n) {
      'use strict';
      var r = n(4901),
      o = n(34),
      i = n(2967);
      t.exports = function (t, e, n) {
        var a,
        c;
        return i &&
        r(a = e.constructor) &&
        a !== n &&
        o(c = a.prototype) &&
        c !== n.prototype &&
        i(t, c),
        t
      }
    },
    3706: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(4901),
      i = n(7629),
      a = r(Function.toString);
      o(i.inspectSource) ||
      (i.inspectSource = function (t) {
        return a(t)
      }),
      t.exports = i.inspectSource
    },
    1181: function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      a = n(8622),
      c = n(4576),
      s = n(34),
      u = n(6699),
      p = n(9297),
      f = n(7629),
      l = n(6119),
      d = n(421),
      h = 'Object already initialized',
      y = c.TypeError,
      v = c.WeakMap;
      if (a || f.state) {
        var m = f.state ||
        (f.state = new v);
        m.get = m.get,
        m.has = m.has,
        m.set = m.set,
        r = function (t, e) {
          if (m.has(t)) throw new y(h);
          return e.facade = t,
          m.set(t, e),
          e
        },
        o = function (t) {
          return m.get(t) ||
          {
          }
        },
        i = function (t) {
          return m.has(t)
        }
      } else {
        var g = l('state');
        d[g] = !0,
        r = function (t, e) {
          if (p(t, g)) throw new y(h);
          return e.facade = t,
          u(t, g, e),
          e
        },
        o = function (t) {
          return p(t, g) ? t[g] : {
          }
        },
        i = function (t) {
          return p(t, g)
        }
      }
      t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : r(t, {
          })
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!s(e) || (n = o(e)).type !== t) throw new y('Incompatible receiver, ' + t + ' required');
            return n
          }
        }
      }
    },
    4209: function (t, e, n) {
      'use strict';
      var r = n(8227),
      o = n(6269),
      i = r('iterator'),
      a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t &&
        (o.Array === t || a[i] === t)
      }
    },
    4376: function (t, e, n) {
      'use strict';
      var r = n(2195);
      t.exports = Array.isArray ||
      function (t) {
        return 'Array' === r(t)
      }
    },
    4901: function (t) {
      'use strict';
      var e = 'object' == typeof document &&
      document.all;
      t.exports = void 0 === e &&
      void 0 !== e ? function (t) {
        return 'function' == typeof t ||
        t === e
      }
       : function (t) {
        return 'function' == typeof t
      }
    },
    3517: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(9039),
      i = n(4901),
      a = n(6955),
      c = n(7751),
      s = n(3706),
      u = function () {
      },
      p = c('Reflect', 'construct'),
      f = /^\s*(?:class|function)\b/,
      l = r(f.exec),
      d = !f.test(u),
      h = function (t) {
        if (!i(t)) return !1;
        try {
          return p(u, [], t),
          !0
        } catch (t) {
          return !1
        }
      },
      y = function (t) {
        if (!i(t)) return !1;
        switch (a(t)) {
          case 'AsyncFunction':
          case 'GeneratorFunction':
          case 'AsyncGeneratorFunction':
            return !1
        }
        try {
          return d ||
          !!l(f, s(t))
        } catch (t) {
          return !0
        }
      };
      y.sham = !0,
      t.exports = !p ||
      o(
        (
          function () {
            var t;
            return h(h.call) ||
            !h(Object) ||
            !h((function () {
              t = !0
            })) ||
            t
          }
        )
      ) ? y : h
    },
    2796: function (t, e, n) {
      'use strict';
      var r = n(9039),
      o = n(4901),
      i = /#|\.prototype\./,
      a = function (t, e) {
        var n = s[c(t)];
        return n === p ||
        n !== u &&
        (o(e) ? r(e) : !!e)
      },
      c = a.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase()
      },
      s = a.data = {},
      u = a.NATIVE = 'N',
      p = a.POLYFILL = 'P';
      t.exports = a
    },
    4117: function (t) {
      'use strict';
      t.exports = function (t) {
        return null == t
      }
    },
    34: function (t, e, n) {
      'use strict';
      var r = n(4901);
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : r(t)
      }
    },
    3925: function (t, e, n) {
      'use strict';
      var r = n(34);
      t.exports = function (t) {
        return r(t) ||
        null === t
      }
    },
    6395: function (t) {
      'use strict';
      t.exports = !1
    },
    788: function (t, e, n) {
      'use strict';
      var r = n(34),
      o = n(2195),
      i = n(8227) ('match');
      t.exports = function (t) {
        var e;
        return r(t) &&
        (void 0 !== (e = t[i]) ? !!e : 'RegExp' === o(t))
      }
    },
    757: function (t, e, n) {
      'use strict';
      var r = n(7751),
      o = n(4901),
      i = n(1625),
      a = n(7040),
      c = Object;
      t.exports = a ? function (t) {
        return 'symbol' == typeof t
      }
       : function (t) {
        var e = r('Symbol');
        return o(e) &&
        i(e.prototype, c(t))
      }
    },
    2652: function (t, e, n) {
      'use strict';
      var r = n(6080),
      o = n(9565),
      i = n(8551),
      a = n(6823),
      c = n(4209),
      s = n(6198),
      u = n(1625),
      p = n(81),
      f = n(851),
      l = n(9539),
      d = TypeError,
      h = function (t, e) {
        this.stopped = t,
        this.result = e
      },
      y = h.prototype;
      t.exports = function (t, e, n) {
        var v,
        m,
        g,
        b,
        w,
        _,
        x,
        S = n &&
        n.that,
        E = !(!n || !n.AS_ENTRIES),
        O = !(!n || !n.IS_RECORD),
        k = !(!n || !n.IS_ITERATOR),
        A = !(!n || !n.INTERRUPTED),
        P = r(e, S),
        N = function (t) {
          return v &&
          l(v, 'normal', t),
          new h(!0, t)
        },
        T = function (t) {
          return E ? (i(t), A ? P(t[0], t[1], N) : P(t[0], t[1])) : A ? P(t, N) : P(t)
        };
        if (O) v = t.iterator;
         else if (k) v = t;
         else {
          if (!(m = f(t))) throw new d(a(t) + ' is not iterable');
          if (c(m)) {
            for (g = 0, b = s(t); b > g; g++) if ((w = T(t[g])) && u(y, w)) return w;
            return new h(!1)
          }
          v = p(t, m)
        }
        for (_ = O ? t.next : v.next; !(x = o(_, v)).done; ) {
          try {
            w = T(x.value)
          } catch (t) {
            l(v, 'throw', t)
          }
          if ('object' == typeof w && w && u(y, w)) return w
        }
        return new h(!1)
      }
    },
    9539: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(8551),
      i = n(5966);
      t.exports = function (t, e, n) {
        var a,
        c;
        o(t);
        try {
          if (!(a = i(t, 'return'))) {
            if ('throw' === e) throw n;
            return n
          }
          a = r(a, t)
        } catch (t) {
          c = !0,
          a = t
        }
        if ('throw' === e) throw n;
        if (c) throw a;
        return o(a),
        n
      }
    },
    3994: function (t, e, n) {
      'use strict';
      var r = n(7657).IteratorPrototype,
      o = n(2360),
      i = n(6980),
      a = n(687),
      c = n(6269),
      s = function () {
        return this
      };
      t.exports = function (t, e, n, u) {
        var p = e + ' Iterator';
        return t.prototype = o(r, {
          next: i( + !u, n)
        }),
        a(t, p, !1, !0),
        c[p] = s,
        t
      }
    },
    1088: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9565),
      i = n(6395),
      a = n(350),
      c = n(4901),
      s = n(3994),
      u = n(2787),
      p = n(2967),
      f = n(687),
      l = n(6699),
      d = n(6840),
      h = n(8227),
      y = n(6269),
      v = n(7657),
      m = a.PROPER,
      g = a.CONFIGURABLE,
      b = v.IteratorPrototype,
      w = v.BUGGY_SAFARI_ITERATORS,
      _ = h('iterator'),
      x = 'keys',
      S = 'values',
      E = 'entries',
      O = function () {
        return this
      };
      t.exports = function (t, e, n, a, h, v, k) {
        s(n, e, a);
        var A,
        P,
        N,
        T = function (t) {
          if (t === h && L) return L;
          if (!w && t && t in C) return C[t];
          switch (t) {
            case x:
            case S:
            case E:
              return function () {
                return new n(this, t)
              }
          }
          return function () {
            return new n(this)
          }
        },
        I = e + ' Iterator',
        j = !1,
        C = t.prototype,
        M = C[_] ||
        C['@@iterator'] ||
        h &&
        C[h],
        L = !w &&
        M ||
        T(h),
        D = 'Array' === e &&
        C.entries ||
        M;
        if (
          D &&
          (A = u(D.call(new t))) !== Object.prototype &&
          A.next &&
          (
            i ||
            u(A) === b ||
            (p ? p(A, b) : c(A[_]) || d(A, _, O)),
            f(A, I, !0, !0),
            i &&
            (y[I] = O)
          ),
          m &&
          h === S &&
          M &&
          M.name !== S &&
          (!i && g ? l(C, 'name', S) : (j = !0, L = function () {
            return o(M, this)
          })),
          h
        ) if (P = {
          values: T(S),
          keys: v ? L : T(x),
          entries: T(E)
        }, k) for (N in P) (w || j || !(N in C)) &&
        d(C, N, P[N]);
         else r({
          target: e,
          proto: !0,
          forced: w ||
          j
        }, P);
        return i &&
        !k ||
        C[_] === L ||
        d(C, _, L, {
          name: h
        }),
        y[e] = L,
        P
      }
    },
    7657: function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      a = n(9039),
      c = n(4901),
      s = n(34),
      u = n(2360),
      p = n(2787),
      f = n(6840),
      l = n(8227),
      d = n(6395),
      h = l('iterator'),
      y = !1;
      [].keys &&
      (
        'next' in (i = [].keys()) ? (o = p(p(i))) !== Object.prototype &&
        (r = o) : y = !0
      ),
      !s(r) ||
      a((function () {
        var t = {};
        return r[h].call(t) !== t
      })) ? r = {}
       : d &&
      (r = u(r)),
      c(r[h]) ||
      f(r, h, (function () {
        return this
      })),
      t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: y
      }
    },
    6269: function (t) {
      'use strict';
      t.exports = {}
    },
    6198: function (t, e, n) {
      'use strict';
      var r = n(8014);
      t.exports = function (t) {
        return r(t.length)
      }
    },
    283: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(9039),
      i = n(4901),
      a = n(9297),
      c = n(3724),
      s = n(350).CONFIGURABLE,
      u = n(3706),
      p = n(1181),
      f = p.enforce,
      l = p.get,
      d = String,
      h = Object.defineProperty,
      y = r(''.slice),
      v = r(''.replace),
      m = r([].join),
      g = c &&
      !o(
        (
          function () {
            return 8 !== h((function () {
            }), 'length', {
              value: 8
            }).length
          }
        )
      ),
      b = String(String).split('String'),
      w = t.exports = function (t, e, n) {
        'Symbol(' === y(d(e), 0, 7) &&
        (e = '[' + v(d(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
        n &&
        n.getter &&
        (e = 'get ' + e),
        n &&
        n.setter &&
        (e = 'set ' + e),
        (!a(t, 'name') || s && t.name !== e) &&
        (c ? h(t, 'name', {
          value: e,
          configurable: !0
        }) : t.name = e),
        g &&
        n &&
        a(n, 'arity') &&
        t.length !== n.arity &&
        h(t, 'length', {
          value: n.arity
        });
        try {
          n &&
          a(n, 'constructor') &&
          n.constructor ? c &&
          h(t, 'prototype', {
            writable: !1
          }) : t.prototype &&
          (t.prototype = void 0)
        } catch (t) {
        }
        var r = f(t);
        return a(r, 'source') ||
        (r.source = m(b, 'string' == typeof e ? e : '')),
        t
      };
      Function.prototype.toString = w(
        (function () {
          return i(this) &&
          l(this).source ||
          u(this)
        }),
        'toString'
      )
    },
    741: function (t) {
      'use strict';
      var e = Math.ceil,
      n = Math.floor;
      t.exports = Math.trunc ||
      function (t) {
        var r = + t;
        return (r > 0 ? n : e) (r)
      }
    },
    1955: function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      a,
      c,
      s = n(4576),
      u = n(3389),
      p = n(6080),
      f = n(9225).set,
      l = n(8265),
      d = n(9544),
      h = n(4265),
      y = n(7860),
      v = n(6193),
      m = s.MutationObserver ||
      s.WebKitMutationObserver,
      g = s.document,
      b = s.process,
      w = s.Promise,
      _ = u('queueMicrotask');
      if (!_) {
        var x = new l,
        S = function () {
          var t,
          e;
          for (v && (t = b.domain) && t.exit(); e = x.get(); ) try {
            e()
          } catch (t) {
            throw x.head &&
            r(),
            t
          }
          t &&
          t.enter()
        };
        d ||
        v ||
        y ||
        !m ||
        !g ? !h &&
        w &&
        w.resolve ? (
          (a = w.resolve(void 0)).constructor = w,
          c = p(a.then, a),
          r = function () {
            c(S)
          }
        ) : v ? r = function () {
          b.nextTick(S)
        }
         : (f = p(f, s), r = function () {
          f(S)
        }) : (
          o = !0,
          i = g.createTextNode(''),
          new m(S).observe(i, {
            characterData: !0
          }),
          r = function () {
            i.data = o = !o
          }
        ),
        _ = function (t) {
          x.head ||
          r(),
          x.add(t)
        }
      }
      t.exports = _
    },
    6043: function (t, e, n) {
      'use strict';
      var r = n(9306),
      o = TypeError,
      i = function (t) {
        var e,
        n;
        this.promise = new t(
          (
            function (t, r) {
              if (void 0 !== e || void 0 !== n) throw new o('Bad Promise constructor');
              e = t,
              n = r
            }
          )
        ),
        this.resolve = r(e),
        this.reject = r(n)
      };
      t.exports.f = function (t) {
        return new i(t)
      }
    },
    5749: function (t, e, n) {
      'use strict';
      var r = n(788),
      o = TypeError;
      t.exports = function (t) {
        if (r(t)) throw new o('The method doesn\'t accept regular expressions');
        return t
      }
    },
    2360: function (t, e, n) {
      'use strict';
      var r,
      o = n(8551),
      i = n(6801),
      a = n(8727),
      c = n(421),
      s = n(397),
      u = n(4055),
      p = n(6119),
      f = 'prototype',
      l = 'script',
      d = p('IE_PROTO'),
      h = function () {
      },
      y = function (t) {
        return '<' + l + '>' + t + '</' + l + '>'
      },
      v = function (t) {
        t.write(y('')),
        t.close();
        var e = t.parentWindow.Object;
        return t = null,
        e
      },
      m = function () {
        try {
          r = new ActiveXObject('htmlfile')
        } catch (t) {
        }
        var t,
        e,
        n;
        m = 'undefined' != typeof document ? document.domain &&
        r ? v(r) : (
          e = u('iframe'),
          n = 'java' + l + ':',
          e.style.display = 'none',
          s.appendChild(e),
          e.src = String(n),
          (t = e.contentWindow.document).open(),
          t.write(y('document.F=Object')),
          t.close(),
          t.F
        ) : v(r);
        for (var o = a.length; o--; ) delete m[f][a[o]];
        return m()
      };
      c[d] = !0,
      t.exports = Object.create ||
      function (t, e) {
        var n;
        return null !== t ? (h[f] = o(t), n = new h, h[f] = null, n[d] = t) : n = m(),
        void 0 === e ? n : i.f(n, e)
      }
    },
    6801: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(8686),
      i = n(4913),
      a = n(8551),
      c = n(5397),
      s = n(1072);
      e.f = r &&
      !o ? Object.defineProperties : function (t, e) {
        a(t);
        for (var n, r = c(e), o = s(e), u = o.length, p = 0; u > p; ) i.f(t, n = o[p++], r[n]);
        return t
      }
    },
    4913: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(5917),
      i = n(8686),
      a = n(8551),
      c = n(6969),
      s = TypeError,
      u = Object.defineProperty,
      p = Object.getOwnPropertyDescriptor,
      f = 'enumerable',
      l = 'configurable',
      d = 'writable';
      e.f = r ? i ? function (t, e, n) {
        if (
          a(t),
          e = c(e),
          a(n),
          'function' == typeof t &&
          'prototype' === e &&
          'value' in n &&
          d in n &&
          !n[d]
        ) {
          var r = p(t, e);
          r &&
          r[d] &&
          (
            t[e] = n.value,
            n = {
              configurable: l in n ? n[l] : r[l],
              enumerable: f in n ? n[f] : r[f],
              writable: !1
            }
          )
        }
        return u(t, e, n)
      }
       : u : function (t, e, n) {
        if (a(t), e = c(e), a(n), o) try {
          return u(t, e, n)
        } catch (t) {
        }
        if ('get' in n || 'set' in n) throw new s('Accessors not supported');
        return 'value' in n &&
        (t[e] = n.value),
        t
      }
    },
    7347: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(9565),
      i = n(8773),
      a = n(6980),
      c = n(5397),
      s = n(6969),
      u = n(9297),
      p = n(5917),
      f = Object.getOwnPropertyDescriptor;
      e.f = r ? f : function (t, e) {
        if (t = c(t), e = s(e), p) try {
          return f(t, e)
        } catch (t) {
        }
        if (u(t, e)) return a(!o(i.f, t, e), t[e])
      }
    },
    298: function (t, e, n) {
      'use strict';
      var r = n(2195),
      o = n(5397),
      i = n(8480).f,
      a = n(7680),
      c = 'object' == typeof window &&
      window &&
      Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function (t) {
        return c &&
        'Window' === r(t) ? function (t) {
          try {
            return i(t)
          } catch (t) {
            return a(c)
          }
        }(t) : i(o(t))
      }
    },
    8480: function (t, e, n) {
      'use strict';
      var r = n(1828),
      o = n(8727).concat('length', 'prototype');
      e.f = Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o)
      }
    },
    3717: function (t, e) {
      'use strict';
      e.f = Object.getOwnPropertySymbols
    },
    2787: function (t, e, n) {
      'use strict';
      var r = n(9297),
      o = n(4901),
      i = n(8981),
      a = n(6119),
      c = n(2211),
      s = a('IE_PROTO'),
      u = Object,
      p = u.prototype;
      t.exports = c ? u.getPrototypeOf : function (t) {
        var e = i(t);
        if (r(e, s)) return e[s];
        var n = e.constructor;
        return o(n) &&
        e instanceof n ? n.prototype : e instanceof u ? p : null
      }
    },
    1625: function (t, e, n) {
      'use strict';
      var r = n(9504);
      t.exports = r({
      }.isPrototypeOf)
    },
    1828: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(9297),
      i = n(5397),
      a = n(9617).indexOf,
      c = n(421),
      s = r([].push);
      t.exports = function (t, e) {
        var n,
        r = i(t),
        u = 0,
        p = [];
        for (n in r) !o(c, n) &&
        o(r, n) &&
        s(p, n);
        for (; e.length > u; ) o(r, n = e[u++]) &&
        (~a(p, n) || s(p, n));
        return p
      }
    },
    1072: function (t, e, n) {
      'use strict';
      var r = n(1828),
      o = n(8727);
      t.exports = Object.keys ||
      function (t) {
        return r(t, o)
      }
    },
    8773: function (t, e) {
      'use strict';
      var n = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor,
      o = r &&
      !n.call({
        1: 2
      }, 1);
      e.f = o ? function (t) {
        var e = r(this, t);
        return !!e &&
        e.enumerable
      }
       : n
    },
    2967: function (t, e, n) {
      'use strict';
      var r = n(6706),
      o = n(34),
      i = n(7750),
      a = n(3506);
      t.exports = Object.setPrototypeOf ||
      (
        '__proto__' in {}
        ? function () {
          var t,
          e = !1,
          n = {};
          try {
            (t = r(Object.prototype, '__proto__', 'set')) (n, []),
            e = n instanceof Array
          } catch (t) {
          }
          return function (n, r) {
            return i(n),
            a(r),
            o(n) ? (e ? t(n, r) : n.__proto__ = r, n) : n
          }
        }() : void 0
      )
    },
    2357: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(9039),
      i = n(9504),
      a = n(2787),
      c = n(1072),
      s = n(5397),
      u = i(n(8773).f),
      p = i([].push),
      f = r &&
      o((function () {
        var t = Object.create(null);
        return t[2] = 2,
        !u(t, 2)
      })),
      l = function (t) {
        return function (e) {
          for (var n, o = s(e), i = c(o), l = f && null === a(o), d = i.length, h = 0, y = []; d > h; ) n = i[h++],
          r &&
          !(l ? n in o : u(o, n)) ||
          p(y, t ? [
            n,
            o[n]
          ] : o[n]);
          return y
        }
      };
      t.exports = {
        entries: l(!0),
        values: l(!1)
      }
    },
    3179: function (t, e, n) {
      'use strict';
      var r = n(2140),
      o = n(6955);
      t.exports = r ? {
      }.toString : function () {
        return '[object ' + o(this) + ']'
      }
    },
    4270: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(4901),
      i = n(34),
      a = TypeError;
      t.exports = function (t, e) {
        var n,
        c;
        if ('string' === e && o(n = t.toString) && !i(c = r(n, t))) return c;
        if (o(n = t.valueOf) && !i(c = r(n, t))) return c;
        if ('string' !== e && o(n = t.toString) && !i(c = r(n, t))) return c;
        throw new a('Can\'t convert object to primitive value')
      }
    },
    5031: function (t, e, n) {
      'use strict';
      var r = n(7751),
      o = n(9504),
      i = n(8480),
      a = n(3717),
      c = n(8551),
      s = o([].concat);
      t.exports = r('Reflect', 'ownKeys') ||
      function (t) {
        var e = i.f(c(t)),
        n = a.f;
        return n ? s(e, n(t)) : e
      }
    },
    9167: function (t, e, n) {
      'use strict';
      var r = n(4576);
      t.exports = r
    },
    1103: function (t) {
      'use strict';
      t.exports = function (t) {
        try {
          return {
            error: !1,
            value: t()
          }
        } catch (t) {
          return {
            error: !0,
            value: t
          }
        }
      }
    },
    916: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(550),
      i = n(4901),
      a = n(2796),
      c = n(3706),
      s = n(8227),
      u = n(4215),
      p = n(6395),
      f = n(9519),
      l = o &&
      o.prototype,
      d = s('species'),
      h = !1,
      y = i(r.PromiseRejectionEvent),
      v = a(
        'Promise',
        (
          function () {
            var t = c(o),
            e = t !== String(o);
            if (!e && 66 === f) return !0;
            if (p && (!l.catch || !l.finally)) return !0;
            if (!f || f < 51 || !/native code/.test(t)) {
              var n = new o((function (t) {
                t(1)
              })),
              r = function (t) {
                t((function () {
                }), (function () {
                }))
              };
              if (
                (n.constructor = {}) [d] = r,
                !(h = n.then((function () {
                })) instanceof r)
              ) return !0
            }
            return !(e || 'BROWSER' !== u && 'DENO' !== u || y)
          }
        )
      );
      t.exports = {
        CONSTRUCTOR: v,
        REJECTION_EVENT: y,
        SUBCLASSING: h
      }
    },
    550: function (t, e, n) {
      'use strict';
      var r = n(4576);
      t.exports = r.Promise
    },
    3438: function (t, e, n) {
      'use strict';
      var r = n(8551),
      o = n(34),
      i = n(6043);
      t.exports = function (t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve) (e),
        n.promise
      }
    },
    537: function (t, e, n) {
      'use strict';
      var r = n(550),
      o = n(4428),
      i = n(916).CONSTRUCTOR;
      t.exports = i ||
      !o((function (t) {
        r.all(t).then(void 0, (function () {
        }))
      }))
    },
    8265: function (t) {
      'use strict';
      var e = function () {
        this.head = null,
        this.tail = null
      };
      e.prototype = {
        add: function (t) {
          var e = {
            item: t,
            next: null
          },
          n = this.tail;
          n ? n.next = e : this.head = e,
          this.tail = e
        },
        get: function () {
          var t = this.head;
          if (t) return null === (this.head = t.next) &&
          (this.tail = null),
          t.item
        }
      },
      t.exports = e
    },
    6682: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(8551),
      i = n(4901),
      a = n(2195),
      c = n(7323),
      s = TypeError;
      t.exports = function (t, e) {
        var n = t.exec;
        if (i(n)) {
          var u = r(n, t, e);
          return null !== u &&
          o(u),
          u
        }
        if ('RegExp' === a(t)) return r(c, t, e);
        throw new s('RegExp#exec called on incompatible receiver')
      }
    },
    7323: function (t, e, n) {
      'use strict';
      var r,
      o,
      i = n(9565),
      a = n(9504),
      c = n(655),
      s = n(7979),
      u = n(8429),
      p = n(5745),
      f = n(2360),
      l = n(1181).get,
      d = n(3635),
      h = n(8814),
      y = p('native-string-replace', String.prototype.replace),
      v = RegExp.prototype.exec,
      m = v,
      g = a(''.charAt),
      b = a(''.indexOf),
      w = a(''.replace),
      _ = a(''.slice),
      x = (
        o = /b*/g,
        i(v, r = /a/, 'a'),
        i(v, o, 'a'),
        0 !== r.lastIndex ||
        0 !== o.lastIndex
      ),
      S = u.BROKEN_CARET,
      E = void 0 !== /()??/.exec('') [1];
      (x || E || S || d || h) &&
      (
        m = function (t) {
          var e,
          n,
          r,
          o,
          a,
          u,
          p,
          d = this,
          h = l(d),
          O = c(t),
          k = h.raw;
          if (k) return k.lastIndex = d.lastIndex,
          e = i(m, k, O),
          d.lastIndex = k.lastIndex,
          e;
          var A = h.groups,
          P = S &&
          d.sticky,
          N = i(s, d),
          T = d.source,
          I = 0,
          j = O;
          if (
            P &&
            (
              N = w(N, 'y', ''),
              - 1 === b(N, 'g') &&
              (N += 'g'),
              j = _(O, d.lastIndex),
              d.lastIndex > 0 &&
              (!d.multiline || d.multiline && '\n' !== g(O, d.lastIndex - 1)) &&
              (T = '(?: ' + T + ')', j = ' ' + j, I++),
              n = new RegExp('^(?:' + T + ')', N)
            ),
            E &&
            (n = new RegExp('^' + T + '$(?!\\s)', N)),
            x &&
            (r = d.lastIndex),
            o = i(v, P ? n : d, j),
            P ? o ? (
              o.input = _(o.input, I),
              o[0] = _(o[0], I),
              o.index = d.lastIndex,
              d.lastIndex += o[0].length
            ) : d.lastIndex = 0 : x &&
            o &&
            (d.lastIndex = d.global ? o.index + o[0].length : r),
            E &&
            o &&
            o.length > 1 &&
            i(
              y,
              o[0],
              n,
              (
                function () {
                  for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] &&
                  (o[a] = void 0)
                }
              )
            ),
            o &&
            A
          ) for (o.groups = u = f(null), a = 0; a < A.length; a++) u[(p = A[a]) [0]] = o[p[1]];
          return o
        }
      ),
      t.exports = m
    },
    7979: function (t, e, n) {
      'use strict';
      var r = n(8551);
      t.exports = function () {
        var t = r(this),
        e = '';
        return t.hasIndices &&
        (e += 'd'),
        t.global &&
        (e += 'g'),
        t.ignoreCase &&
        (e += 'i'),
        t.multiline &&
        (e += 'm'),
        t.dotAll &&
        (e += 's'),
        t.unicode &&
        (e += 'u'),
        t.unicodeSets &&
        (e += 'v'),
        t.sticky &&
        (e += 'y'),
        e
      }
    },
    1034: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(9297),
      i = n(1625),
      a = n(7979),
      c = RegExp.prototype;
      t.exports = function (t) {
        var e = t.flags;
        return void 0 !== e ||
        'flags' in c ||
        o(t, 'flags') ||
        !i(c, t) ? e : r(a, t)
      }
    },
    8429: function (t, e, n) {
      'use strict';
      var r = n(9039),
      o = n(4576).RegExp,
      i = r(
        (
          function () {
            var t = o('a', 'y');
            return t.lastIndex = 2,
            null !== t.exec('abcd')
          }
        )
      ),
      a = i ||
      r((function () {
        return !o('a', 'y').sticky
      })),
      c = i ||
      r(
        (
          function () {
            var t = o('^r', 'gy');
            return t.lastIndex = 2,
            null !== t.exec('str')
          }
        )
      );
      t.exports = {
        BROKEN_CARET: c,
        MISSED_STICKY: a,
        UNSUPPORTED_Y: i
      }
    },
    3635: function (t, e, n) {
      'use strict';
      var r = n(9039),
      o = n(4576).RegExp;
      t.exports = r(
        (
          function () {
            var t = o('.', 's');
            return !(t.dotAll && t.test('\n') && 's' === t.flags)
          }
        )
      )
    },
    8814: function (t, e, n) {
      'use strict';
      var r = n(9039),
      o = n(4576).RegExp;
      t.exports = r(
        (
          function () {
            var t = o('(?<a>b)', 'g');
            return 'b' !== t.exec('b').groups.a ||
            'bc' !== 'b'.replace(t, '$<a>c')
          }
        )
      )
    },
    7750: function (t, e, n) {
      'use strict';
      var r = n(4117),
      o = TypeError;
      t.exports = function (t) {
        if (r(t)) throw new o('Can\'t call method on ' + t);
        return t
      }
    },
    3389: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(3724),
      i = Object.getOwnPropertyDescriptor;
      t.exports = function (t) {
        if (!o) return r[t];
        var e = i(r, t);
        return e &&
        e.value
      }
    },
    7633: function (t, e, n) {
      'use strict';
      var r = n(7751),
      o = n(2106),
      i = n(8227),
      a = n(3724),
      c = i('species');
      t.exports = function (t) {
        var e = r(t);
        a &&
        e &&
        !e[c] &&
        o(e, c, {
          configurable: !0,
          get: function () {
            return this
          }
        })
      }
    },
    687: function (t, e, n) {
      'use strict';
      var r = n(4913).f,
      o = n(9297),
      i = n(8227) ('toStringTag');
      t.exports = function (t, e, n) {
        t &&
        !n &&
        (t = t.prototype),
        t &&
        !o(t, i) &&
        r(t, i, {
          configurable: !0,
          value: e
        })
      }
    },
    6119: function (t, e, n) {
      'use strict';
      var r = n(5745),
      o = n(3392),
      i = r('keys');
      t.exports = function (t) {
        return i[t] ||
        (i[t] = o(t))
      }
    },
    7629: function (t, e, n) {
      'use strict';
      var r = n(6395),
      o = n(4576),
      i = n(9433),
      a = '__core-js_shared__',
      c = t.exports = o[a] ||
      i(a, {
      });
      (c.versions || (c.versions = [])).push({
        version: '3.38.1',
        mode: r ? 'pure' : 'global',
        copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
        source: 'https://github.com/zloirock/core-js'
      })
    },
    5745: function (t, e, n) {
      'use strict';
      var r = n(7629);
      t.exports = function (t, e) {
        return r[t] ||
        (r[t] = e || {
        })
      }
    },
    2293: function (t, e, n) {
      'use strict';
      var r = n(8551),
      o = n(5548),
      i = n(4117),
      a = n(8227) ('species');
      t.exports = function (t, e) {
        var n,
        c = r(t).constructor;
        return void 0 === c ||
        i(n = r(c) [a]) ? e : o(n)
      }
    },
    8183: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(1291),
      i = n(655),
      a = n(7750),
      c = r(''.charAt),
      s = r(''.charCodeAt),
      u = r(''.slice),
      p = function (t) {
        return function (e, n) {
          var r,
          p,
          f = i(a(e)),
          l = o(n),
          d = f.length;
          return l < 0 ||
          l >= d ? t ? '' : void 0 : (r = s(f, l)) < 55296 ||
          r > 56319 ||
          l + 1 === d ||
          (p = s(f, l + 1)) < 56320 ||
          p > 57343 ? t ? c(f, l) : r : t ? u(f, l, l + 2) : p - 56320 + (r - 55296 << 10) + 65536
        }
      };
      t.exports = {
        codeAt: p(!1),
        charAt: p(!0)
      }
    },
    3802: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = n(7750),
      i = n(655),
      a = n(7452),
      c = r(''.replace),
      s = RegExp('^[' + a + ']+'),
      u = RegExp('(^|[^' + a + '])[' + a + ']+$'),
      p = function (t) {
        return function (e) {
          var n = i(o(e));
          return 1 & t &&
          (n = c(n, s, '')),
          2 & t &&
          (n = c(n, u, '$1')),
          n
        }
      };
      t.exports = {
        start: p(1),
        end: p(2),
        trim: p(3)
      }
    },
    4495: function (t, e, n) {
      'use strict';
      var r = n(9519),
      o = n(9039),
      i = n(4576).String;
      t.exports = !!Object.getOwnPropertySymbols &&
      !o(
        (
          function () {
            var t = Symbol('symbol detection');
            return !i(t) ||
            !(Object(t) instanceof Symbol) ||
            !Symbol.sham &&
            r &&
            r < 41
          }
        )
      )
    },
    8242: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(7751),
      i = n(8227),
      a = n(6840);
      t.exports = function () {
        var t = o('Symbol'),
        e = t &&
        t.prototype,
        n = e &&
        e.valueOf,
        c = i('toPrimitive');
        e &&
        !e[c] &&
        a(e, c, (function (t) {
          return r(n, this)
        }), {
          arity: 1
        })
      }
    },
    1296: function (t, e, n) {
      'use strict';
      var r = n(4495);
      t.exports = r &&
      !!Symbol.for &&
      !!Symbol.keyFor
    },
    9225: function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      a,
      c = n(4576),
      s = n(8745),
      u = n(6080),
      p = n(4901),
      f = n(9297),
      l = n(9039),
      d = n(397),
      h = n(7680),
      y = n(4055),
      v = n(2812),
      m = n(9544),
      g = n(6193),
      b = c.setImmediate,
      w = c.clearImmediate,
      _ = c.process,
      x = c.Dispatch,
      S = c.Function,
      E = c.MessageChannel,
      O = c.String,
      k = 0,
      A = {},
      P = 'onreadystatechange';
      l((function () {
        r = c.location
      }));
      var N = function (t) {
        if (f(A, t)) {
          var e = A[t];
          delete A[t],
          e()
        }
      },
      T = function (t) {
        return function () {
          N(t)
        }
      },
      I = function (t) {
        N(t.data)
      },
      j = function (t) {
        c.postMessage(O(t), r.protocol + '//' + r.host)
      };
      b &&
      w ||
      (
        b = function (t) {
          v(arguments.length, 1);
          var e = p(t) ? t : S(t),
          n = h(arguments, 1);
          return A[++k] = function () {
            s(e, void 0, n)
          },
          o(k),
          k
        },
        w = function (t) {
          delete A[t]
        },
        g ? o = function (t) {
          _.nextTick(T(t))
        }
         : x &&
        x.now ? o = function (t) {
          x.now(T(t))
        }
         : E &&
        !m ? (a = (i = new E).port2, i.port1.onmessage = I, o = u(a.postMessage, a)) : c.addEventListener &&
        p(c.postMessage) &&
        !c.importScripts &&
        r &&
        'file:' !== r.protocol &&
        !l(j) ? (o = j, c.addEventListener('message', I, !1)) : o = P in y('script') ? function (t) {
          d.appendChild(y('script')) [P] = function () {
            d.removeChild(this),
            N(t)
          }
        }
         : function (t) {
          setTimeout(T(t), 0)
        }
      ),
      t.exports = {
        set: b,
        clear: w
      }
    },
    1240: function (t, e, n) {
      'use strict';
      var r = n(9504);
      t.exports = r(1 .valueOf)
    },
    5610: function (t, e, n) {
      'use strict';
      var r = n(1291),
      o = Math.max,
      i = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e)
      }
    },
    5397: function (t, e, n) {
      'use strict';
      var r = n(7055),
      o = n(7750);
      t.exports = function (t) {
        return r(o(t))
      }
    },
    1291: function (t, e, n) {
      'use strict';
      var r = n(741);
      t.exports = function (t) {
        var e = + t;
        return e != e ||
        0 === e ? 0 : r(e)
      }
    },
    8014: function (t, e, n) {
      'use strict';
      var r = n(1291),
      o = Math.min;
      t.exports = function (t) {
        var e = r(t);
        return e > 0 ? o(e, 9007199254740991) : 0
      }
    },
    8981: function (t, e, n) {
      'use strict';
      var r = n(7750),
      o = Object;
      t.exports = function (t) {
        return o(r(t))
      }
    },
    2777: function (t, e, n) {
      'use strict';
      var r = n(9565),
      o = n(34),
      i = n(757),
      a = n(5966),
      c = n(4270),
      s = n(8227),
      u = TypeError,
      p = s('toPrimitive');
      t.exports = function (t, e) {
        if (!o(t) || i(t)) return t;
        var n,
        s = a(t, p);
        if (s) {
          if (void 0 === e && (e = 'default'), n = r(s, t, e), !o(n) || i(n)) return n;
          throw new u('Can\'t convert object to primitive value')
        }
        return void 0 === e &&
        (e = 'number'),
        c(t, e)
      }
    },
    6969: function (t, e, n) {
      'use strict';
      var r = n(2777),
      o = n(757);
      t.exports = function (t) {
        var e = r(t, 'string');
        return o(e) ? e : e + ''
      }
    },
    2140: function (t, e, n) {
      'use strict';
      var r = {};
      r[n(8227) ('toStringTag')] = 'z',
      t.exports = '[object z]' === String(r)
    },
    655: function (t, e, n) {
      'use strict';
      var r = n(6955),
      o = String;
      t.exports = function (t) {
        if ('Symbol' === r(t)) throw new TypeError('Cannot convert a Symbol value to a string');
        return o(t)
      }
    },
    6823: function (t) {
      'use strict';
      var e = String;
      t.exports = function (t) {
        try {
          return e(t)
        } catch (t) {
          return 'Object'
        }
      }
    },
    3392: function (t, e, n) {
      'use strict';
      var r = n(9504),
      o = 0,
      i = Math.random(),
      a = r(1 .toString);
      t.exports = function (t) {
        return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++o + i, 36)
      }
    },
    7040: function (t, e, n) {
      'use strict';
      var r = n(4495);
      t.exports = r &&
      !Symbol.sham &&
      'symbol' == typeof Symbol.iterator
    },
    8686: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(9039);
      t.exports = r &&
      o(
        (
          function () {
            return 42 !== Object.defineProperty((function () {
            }), 'prototype', {
              value: 42,
              writable: !1
            }).prototype
          }
        )
      )
    },
    2812: function (t) {
      'use strict';
      var e = TypeError;
      t.exports = function (t, n) {
        if (t < n) throw new e('Not enough arguments');
        return t
      }
    },
    8622: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(4901),
      i = r.WeakMap;
      t.exports = o(i) &&
      /native code/.test(String(i))
    },
    511: function (t, e, n) {
      'use strict';
      var r = n(9167),
      o = n(9297),
      i = n(1951),
      a = n(4913).f;
      t.exports = function (t) {
        var e = r.Symbol ||
        (r.Symbol = {});
        o(e, t) ||
        a(e, t, {
          value: i.f(t)
        })
      }
    },
    1951: function (t, e, n) {
      'use strict';
      var r = n(8227);
      e.f = r
    },
    8227: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(5745),
      i = n(9297),
      a = n(3392),
      c = n(4495),
      s = n(7040),
      u = r.Symbol,
      p = o('wks'),
      f = s ? u.for ||
      u : u &&
      u.withoutSetter ||
      a;
      t.exports = function (t) {
        return i(p, t) ||
        (p[t] = c && i(u, t) ? u[t] : f('Symbol.' + t)),
        p[t]
      }
    },
    7452: function (t) {
      'use strict';
      t.exports = '\t\n\v\f\r                　\u2028\u2029﻿'
    },
    8706: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9039),
      i = n(4376),
      a = n(34),
      c = n(8981),
      s = n(6198),
      u = n(6837),
      p = n(4659),
      f = n(1469),
      l = n(597),
      d = n(8227),
      h = n(9519),
      y = d('isConcatSpreadable'),
      v = h >= 51 ||
      !o((function () {
        var t = [];
        return t[y] = !1,
        t.concat() [0] !== t
      })),
      m = function (t) {
        if (!a(t)) return !1;
        var e = t[y];
        return void 0 !== e ? !!e : i(t)
      };
      r({
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: !v ||
        !l('concat')
      }, {
        concat: function (t) {
          var e,
          n,
          r,
          o,
          i,
          a = c(this),
          l = f(a, 0),
          d = 0;
          for (e = - 1, r = arguments.length; e < r; e++) if (m(i = - 1 === e ? a : arguments[e])) for (o = s(i), u(d + o), n = 0; n < o; n++, d++) n in i &&
          p(l, d, i[n]);
           else u(d + 1),
          p(l, d++, i);
          return l.length = d,
          l
        }
      })
    },
    2008: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9213).filter;
      r({
        target: 'Array',
        proto: !0,
        forced: !n(597) ('filter')
      }, {
        filter: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    3418: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(7916);
      r({
        target: 'Array',
        stat: !0,
        forced: !n(4428) ((function (t) {
          Array.from(t)
        }))
      }, {
        from: o
      })
    },
    4423: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9617).includes,
      i = n(9039),
      a = n(6469);
      r({
        target: 'Array',
        proto: !0,
        forced: i((function () {
          return !Array(1).includes()
        }))
      }, {
        includes: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      }),
      a('includes')
    },
    3792: function (t, e, n) {
      'use strict';
      var r = n(5397),
      o = n(6469),
      i = n(6269),
      a = n(1181),
      c = n(4913).f,
      s = n(1088),
      u = n(2529),
      p = n(6395),
      f = n(3724),
      l = 'Array Iterator',
      d = a.set,
      h = a.getterFor(l);
      t.exports = s(
        Array,
        'Array',
        (function (t, e) {
          d(this, {
            type: l,
            target: r(t),
            index: 0,
            kind: e
          })
        }),
        (
          function () {
            var t = h(this),
            e = t.target,
            n = t.index++;
            if (!e || n >= e.length) return t.target = null,
            u(void 0, !0);
            switch (t.kind) {
              case 'keys':
                return u(n, !1);
              case 'values':
                return u(e[n], !1)
            }
            return u([n,
            e[n]], !1)
          }
        ),
        'values'
      );
      var y = i.Arguments = i.Array;
      if (o('keys'), o('values'), o('entries'), !p && f && 'values' !== y.name) try {
        c(y, 'name', {
          value: 'values'
        })
      } catch (t) {
      }
    },
    8598: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9504),
      i = n(7055),
      a = n(5397),
      c = n(4598),
      s = o([].join);
      r({
        target: 'Array',
        proto: !0,
        forced: i !== Object ||
        !c('join', ',')
      }, {
        join: function (t) {
          return s(a(this), void 0 === t ? ',' : t)
        }
      })
    },
    2062: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9213).map;
      r({
        target: 'Array',
        proto: !0,
        forced: !n(597) ('map')
      }, {
        map: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    4782: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(4376),
      i = n(3517),
      a = n(34),
      c = n(5610),
      s = n(6198),
      u = n(5397),
      p = n(4659),
      f = n(8227),
      l = n(597),
      d = n(7680),
      h = l('slice'),
      y = f('species'),
      v = Array,
      m = Math.max;
      r({
        target: 'Array',
        proto: !0,
        forced: !h
      }, {
        slice: function (t, e) {
          var n,
          r,
          f,
          l = u(this),
          h = s(l),
          g = c(t, h),
          b = c(void 0 === e ? h : e, h);
          if (
            o(l) &&
            (
              n = l.constructor,
              (i(n) && (n === v || o(n.prototype)) || a(n) && null === (n = n[y])) &&
              (n = void 0),
              n === v ||
              void 0 === n
            )
          ) return d(l, g, b);
          for (r = new (void 0 === n ? v : n) (m(b - g, 0)), f = 0; g < b; g++, f++) g in l &&
          p(r, f, l[g]);
          return r.length = f,
          r
        }
      })
    },
    9572: function (t, e, n) {
      'use strict';
      var r = n(9297),
      o = n(6840),
      i = n(3640),
      a = n(8227) ('toPrimitive'),
      c = Date.prototype;
      r(c, a) ||
      o(c, a, i)
    },
    2010: function (t, e, n) {
      'use strict';
      var r = n(3724),
      o = n(350).EXISTS,
      i = n(9504),
      a = n(2106),
      c = Function.prototype,
      s = i(c.toString),
      u = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
      p = i(u.exec);
      r &&
      !o &&
      a(
        c,
        'name',
        {
          configurable: !0,
          get: function () {
            try {
              return p(u, s(this)) [1]
            } catch (t) {
              return ''
            }
          }
        }
      )
    },
    3110: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(7751),
      i = n(8745),
      a = n(9565),
      c = n(9504),
      s = n(9039),
      u = n(4901),
      p = n(757),
      f = n(7680),
      l = n(6933),
      d = n(4495),
      h = String,
      y = o('JSON', 'stringify'),
      v = c(/./.exec),
      m = c(''.charAt),
      g = c(''.charCodeAt),
      b = c(''.replace),
      w = c(1 .toString),
      _ = /[\uD800-\uDFFF]/g,
      x = /^[\uD800-\uDBFF]$/,
      S = /^[\uDC00-\uDFFF]$/,
      E = !d ||
      s(
        (
          function () {
            var t = o('Symbol') ('stringify detection');
            return '[null]' !== y([t]) ||
            '{}' !== y({
              a: t
            }) ||
            '{}' !== y(Object(t))
          }
        )
      ),
      O = s(
        (
          function () {
            return '"\\udf06\\ud834"' !== y('��') ||
            '"\\udead"' !== y('�')
          }
        )
      ),
      k = function (t, e) {
        var n = f(arguments),
        r = l(e);
        if (u(r) || void 0 !== t && !p(t)) return n[1] = function (t, e) {
          if (u(r) && (e = a(r, this, h(t), e)), !p(e)) return e
        },
        i(y, null, n)
      },
      A = function (t, e, n) {
        var r = m(n, e - 1),
        o = m(n, e + 1);
        return v(x, t) &&
        !v(S, o) ||
        v(S, t) &&
        !v(x, r) ? '\\u' + w(g(t, 0), 16) : t
      };
      y &&
      r({
        target: 'JSON',
        stat: !0,
        arity: 3,
        forced: E ||
        O
      }, {
        stringify: function (t, e, n) {
          var r = f(arguments),
          o = i(E ? k : y, null, r);
          return O &&
          'string' == typeof o ? b(o, _, A) : o
        }
      })
    },
    4731: function (t, e, n) {
      'use strict';
      var r = n(4576);
      n(687) (r.JSON, 'JSON', !0)
    },
    479: function (t, e, n) {
      'use strict';
      n(687) (Math, 'Math', !0)
    },
    2892: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(6395),
      i = n(3724),
      a = n(4576),
      c = n(9167),
      s = n(9504),
      u = n(2796),
      p = n(9297),
      f = n(3167),
      l = n(1625),
      d = n(757),
      h = n(2777),
      y = n(9039),
      v = n(8480).f,
      m = n(7347).f,
      g = n(4913).f,
      b = n(1240),
      w = n(3802).trim,
      _ = 'Number',
      x = a[_],
      S = c[_],
      E = x.prototype,
      O = a.TypeError,
      k = s(''.slice),
      A = s(''.charCodeAt),
      P = function (t) {
        var e,
        n,
        r,
        o,
        i,
        a,
        c,
        s,
        u = h(t, 'number');
        if (d(u)) throw new O('Cannot convert a Symbol value to a number');
        if ('string' == typeof u && u.length > 2) if (u = w(u), 43 === (e = A(u, 0)) || 45 === e) {
          if (88 === (n = A(u, 2)) || 120 === n) return NaN
        } else if (48 === e) {
          switch (A(u, 1)) {
            case 66:
            case 98:
              r = 2,
              o = 49;
              break;
            case 79:
            case 111:
              r = 8,
              o = 55;
              break;
            default:
              return + u
          }
          for (a = (i = k(u, 2)).length, c = 0; c < a; c++) if ((s = A(i, c)) < 48 || s > o) return NaN;
          return parseInt(i, r)
        }
        return + u
      },
      N = u(_, !x(' 0o1') || !x('0b1') || x('+0x1')),
      T = function (t) {
        var e,
        n = arguments.length < 1 ? 0 : x(
          function (t) {
            var e = h(t, 'number');
            return 'bigint' == typeof e ? e : P(e)
          }(t)
        );
        return l(E, e = this) &&
        y((function () {
          b(e)
        })) ? f(Object(n), this, T) : n
      };
      T.prototype = E,
      N &&
      !o &&
      (E.constructor = T),
      r({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: N
      }, {
        Number: T
      });
      var I = function (t, e) {
        for (
          var n,
          r = i ? v(e) : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'.split(','),
          o = 0;
          r.length > o;
          o++
        ) p(e, n = r[o]) &&
        !p(t, n) &&
        g(t, n, m(e, n))
      };
      o &&
      S &&
      I(c[_], S),
      (N || o) &&
      I(c[_], x)
    },
    5506: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(2357).entries;
      r({
        target: 'Object',
        stat: !0
      }, {
        entries: function (t) {
          return o(t)
        }
      })
    },
    3851: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9039),
      i = n(5397),
      a = n(7347).f,
      c = n(3724);
      r({
        target: 'Object',
        stat: !0,
        forced: !c ||
        o((function () {
          a(1)
        })),
        sham: !c
      }, {
        getOwnPropertyDescriptor: function (t, e) {
          return a(i(t), e)
        }
      })
    },
    1278: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(3724),
      i = n(5031),
      a = n(5397),
      c = n(7347),
      s = n(4659);
      r({
        target: 'Object',
        stat: !0,
        sham: !o
      }, {
        getOwnPropertyDescriptors: function (t) {
          for (var e, n, r = a(t), o = c.f, u = i(r), p = {}, f = 0; u.length > f; ) void 0 !== (n = o(r, e = u[f++])) &&
          s(p, e, n);
          return p
        }
      })
    },
    9773: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(4495),
      i = n(9039),
      a = n(3717),
      c = n(8981);
      r({
        target: 'Object',
        stat: !0,
        forced: !o ||
        i((function () {
          a.f(1)
        }))
      }, {
        getOwnPropertySymbols: function (t) {
          var e = a.f;
          return e ? e(c(t)) : []
        }
      })
    },
    875: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9039),
      i = n(8981),
      a = n(2787),
      c = n(2211);
      r({
        target: 'Object',
        stat: !0,
        forced: o((function () {
          a(1)
        })),
        sham: !c
      }, {
        getPrototypeOf: function (t) {
          return a(i(t))
        }
      })
    },
    9432: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(8981),
      i = n(1072);
      r({
        target: 'Object',
        stat: !0,
        forced: n(9039) ((function () {
          i(1)
        }))
      }, {
        keys: function (t) {
          return i(o(t))
        }
      })
    },
    287: function (t, e, n) {
      'use strict';
      n(6518) ({
        target: 'Object',
        stat: !0
      }, {
        setPrototypeOf: n(2967)
      })
    },
    6099: function (t, e, n) {
      'use strict';
      var r = n(2140),
      o = n(6840),
      i = n(3179);
      r ||
      o(Object.prototype, 'toString', i, {
        unsafe: !0
      })
    },
    6499: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9565),
      i = n(9306),
      a = n(6043),
      c = n(1103),
      s = n(2652);
      r({
        target: 'Promise',
        stat: !0,
        forced: n(537)
      }, {
        all: function (t) {
          var e = this,
          n = a.f(e),
          r = n.resolve,
          u = n.reject,
          p = c(
            (
              function () {
                var n = i(e.resolve),
                a = [],
                c = 0,
                p = 1;
                s(
                  t,
                  (
                    function (t) {
                      var i = c++,
                      s = !1;
                      p++,
                      o(n, e, t).then((function (t) {
                        s ||
                        (s = !0, a[i] = t, --p || r(a))
                      }), u)
                    }
                  )
                ),
                --p ||
                r(a)
              }
            )
          );
          return p.error &&
          u(p.value),
          n.promise
        }
      })
    },
    2003: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(6395),
      i = n(916).CONSTRUCTOR,
      a = n(550),
      c = n(7751),
      s = n(4901),
      u = n(6840),
      p = a &&
      a.prototype;
      if (
        r({
          target: 'Promise',
          proto: !0,
          forced: i,
          real: !0
        }, {
          catch : function (t) {
            return this.then(void 0, t)
          }
        }),
        !o &&
        s(a)
      ) {
        var f = c('Promise').prototype.catch;
        p.catch !== f &&
        u(p, 'catch', f, {
          unsafe: !0
        })
      }
    },
    436: function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      a = n(6518),
      c = n(6395),
      s = n(6193),
      u = n(4576),
      p = n(9565),
      f = n(6840),
      l = n(2967),
      d = n(687),
      h = n(7633),
      y = n(9306),
      v = n(4901),
      m = n(34),
      g = n(679),
      b = n(2293),
      w = n(9225).set,
      _ = n(1955),
      x = n(3138),
      S = n(1103),
      E = n(8265),
      O = n(1181),
      k = n(550),
      A = n(916),
      P = n(6043),
      N = 'Promise',
      T = A.CONSTRUCTOR,
      I = A.REJECTION_EVENT,
      j = A.SUBCLASSING,
      C = O.getterFor(N),
      M = O.set,
      L = k &&
      k.prototype,
      D = k,
      R = L,
      q = u.TypeError,
      F = u.document,
      z = u.process,
      B = P.f,
      H = B,
      G = !!(F && F.createEvent && u.dispatchEvent),
      U = 'unhandledrejection',
      W = function (t) {
        var e;
        return !(!m(t) || !v(e = t.then)) &&
        e
      },
      Y = function (t, e) {
        var n,
        r,
        o,
        i = e.value,
        a = 1 === e.state,
        c = a ? t.ok : t.fail,
        s = t.resolve,
        u = t.reject,
        f = t.domain;
        try {
          c ? (
            a ||
            (2 === e.rejection && X(e), e.rejection = 1),
            !0 === c ? n = i : (f && f.enter(), n = c(i), f && (f.exit(), o = !0)),
            n === t.promise ? u(new q('Promise-chain cycle')) : (r = W(n)) ? p(r, n, s, u) : s(n)
          ) : u(i)
        } catch (t) {
          f &&
          !o &&
          f.exit(),
          u(t)
        }
      },
      $ = function (t, e) {
        t.notified ||
        (
          t.notified = !0,
          _(
            (
              function () {
                for (var n, r = t.reactions; n = r.get(); ) Y(n, t);
                t.notified = !1,
                e &&
                !t.rejection &&
                V(t)
              }
            )
          )
        )
      },
      J = function (t, e, n) {
        var r,
        o;
        G ? (
          (r = F.createEvent('Event')).promise = e,
          r.reason = n,
          r.initEvent(t, !1, !0),
          u.dispatchEvent(r)
        ) : r = {
          promise: e,
          reason: n
        },
        !I &&
        (o = u['on' + t]) ? o(r) : t === U &&
        x('Unhandled promise rejection', n)
      },
      V = function (t) {
        p(
          w,
          u,
          (
            function () {
              var e,
              n = t.facade,
              r = t.value;
              if (
                K(t) &&
                (
                  e = S((function () {
                    s ? z.emit('unhandledRejection', r, n) : J(U, n, r)
                  })),
                  t.rejection = s ||
                  K(t) ? 2 : 1,
                  e.error
                )
              ) throw e.value
            }
          )
        )
      },
      K = function (t) {
        return 1 !== t.rejection &&
        !t.parent
      },
      X = function (t) {
        p(
          w,
          u,
          (
            function () {
              var e = t.facade;
              s ? z.emit('rejectionHandled', e) : J('rejectionhandled', e, t.value)
            }
          )
        )
      },
      Q = function (t, e, n) {
        return function (r) {
          t(e, r, n)
        }
      },
      Z = function (t, e, n) {
        t.done ||
        (t.done = !0, n && (t = n), t.value = e, t.state = 2, $(t, !0))
      },
      tt = function (t, e, n) {
        if (!t.done) {
          t.done = !0,
          n &&
          (t = n);
          try {
            if (t.facade === e) throw new q('Promise can\'t be resolved itself');
            var r = W(e);
            r ? _(
              (
                function () {
                  var n = {
                    done: !1
                  };
                  try {
                    p(r, e, Q(tt, n, t), Q(Z, n, t))
                  } catch (e) {
                    Z(n, e, t)
                  }
                }
              )
            ) : (t.value = e, t.state = 1, $(t, !1))
          } catch (e) {
            Z({
              done: !1
            }, e, t)
          }
        }
      };
      if (
        T &&
        (
          R = (
            D = function (t) {
              g(this, R),
              y(t),
              p(r, this);
              var e = C(this);
              try {
                t(Q(tt, e), Q(Z, e))
              } catch (t) {
                Z(e, t)
              }
            }
          ).prototype,
          (
            r = function (t) {
              M(
                this,
                {
                  type: N,
                  done: !1,
                  notified: !1,
                  parent: !1,
                  reactions: new E,
                  rejection: !1,
                  state: 0,
                  value: null
                }
              )
            }
          ).prototype = f(
            R,
            'then',
            (
              function (t, e) {
                var n = C(this),
                r = B(b(this, D));
                return n.parent = !0,
                r.ok = !v(t) ||
                t,
                r.fail = v(e) &&
                e,
                r.domain = s ? z.domain : void 0,
                0 === n.state ? n.reactions.add(r) : _((function () {
                  Y(r, n)
                })),
                r.promise
              }
            )
          ),
          o = function () {
            var t = new r,
            e = C(t);
            this.promise = t,
            this.resolve = Q(tt, e),
            this.reject = Q(Z, e)
          },
          P.f = B = function (t) {
            return t === D ||
            undefined === t ? new o(t) : H(t)
          },
          !c &&
          v(k) &&
          L !== Object.prototype
        )
      ) {
        i = L.then,
        j ||
        f(
          L,
          'then',
          (
            function (t, e) {
              var n = this;
              return new D((function (t, e) {
                p(i, n, t, e)
              })).then(t, e)
            }
          ),
          {
            unsafe: !0
          }
        );
        try {
          delete L.constructor
        } catch (t) {
        }
        l &&
        l(L, R)
      }
      a({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: T
      }, {
        Promise: D
      }),
      d(D, N, !1, !0),
      h(N)
    },
    3362: function (t, e, n) {
      'use strict';
      n(436),
      n(6499),
      n(2003),
      n(7743),
      n(1481),
      n(280)
    },
    7743: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9565),
      i = n(9306),
      a = n(6043),
      c = n(1103),
      s = n(2652);
      r({
        target: 'Promise',
        stat: !0,
        forced: n(537)
      }, {
        race: function (t) {
          var e = this,
          n = a.f(e),
          r = n.reject,
          u = c(
            (
              function () {
                var a = i(e.resolve);
                s(t, (function (t) {
                  o(a, e, t).then(n.resolve, r)
                }))
              }
            )
          );
          return u.error &&
          r(u.value),
          n.promise
        }
      })
    },
    1481: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(6043);
      r({
        target: 'Promise',
        stat: !0,
        forced: n(916).CONSTRUCTOR
      }, {
        reject: function (t) {
          var e = o.f(this);
          return (0, e.reject) (t),
          e.promise
        }
      })
    },
    280: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(7751),
      i = n(6395),
      a = n(550),
      c = n(916).CONSTRUCTOR,
      s = n(3438),
      u = o('Promise'),
      p = i &&
      !c;
      r({
        target: 'Promise',
        stat: !0,
        forced: i ||
        c
      }, {
        resolve: function (t) {
          return s(p && this === u ? a : this, t)
        }
      })
    },
    7495: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(7323);
      r({
        target: 'RegExp',
        proto: !0,
        forced: /./.exec !== o
      }, {
        exec: o
      })
    },
    8781: function (t, e, n) {
      'use strict';
      var r = n(350).PROPER,
      o = n(6840),
      i = n(8551),
      a = n(655),
      c = n(9039),
      s = n(1034),
      u = 'toString',
      p = RegExp.prototype,
      f = p[u],
      l = c((function () {
        return '/a/b' !== f.call({
          source: 'a',
          flags: 'b'
        })
      })),
      d = r &&
      f.name !== u;
      (l || d) &&
      o(
        p,
        u,
        (function () {
          var t = i(this);
          return '/' + a(t.source) + '/' + a(s(t))
        }),
        {
          unsafe: !0
        }
      )
    },
    1699: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9504),
      i = n(5749),
      a = n(7750),
      c = n(655),
      s = n(1436),
      u = o(''.indexOf);
      r({
        target: 'String',
        proto: !0,
        forced: !s('includes')
      }, {
        includes: function (t) {
          return !!~u(c(a(this)), c(i(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    7764: function (t, e, n) {
      'use strict';
      var r = n(8183).charAt,
      o = n(655),
      i = n(1181),
      a = n(1088),
      c = n(2529),
      s = 'String Iterator',
      u = i.set,
      p = i.getterFor(s);
      a(
        String,
        'String',
        (function (t) {
          u(this, {
            type: s,
            string: o(t),
            index: 0
          })
        }),
        (
          function () {
            var t,
            e = p(this),
            n = e.string,
            o = e.index;
            return o >= n.length ? c(void 0, !0) : (t = r(n, o), e.index += t.length, c(t, !1))
          }
        )
      )
    },
    5440: function (t, e, n) {
      'use strict';
      var r = n(8745),
      o = n(9565),
      i = n(9504),
      a = n(9228),
      c = n(9039),
      s = n(8551),
      u = n(4901),
      p = n(4117),
      f = n(1291),
      l = n(8014),
      d = n(655),
      h = n(7750),
      y = n(7829),
      v = n(5966),
      m = n(2478),
      g = n(6682),
      b = n(8227) ('replace'),
      w = Math.max,
      _ = Math.min,
      x = i([].concat),
      S = i([].push),
      E = i(''.indexOf),
      O = i(''.slice),
      k = '$0' === 'a'.replace(/./, '$0'),
      A = !!/./[b] &&
      '' === /./[b]('a', '$0');
      a(
        'replace',
        (
          function (t, e, n) {
            var i = A ? '$' : '$0';
            return [function (t, n) {
              var r = h(this),
              i = p(t) ? void 0 : v(t, b);
              return i ? o(i, t, r, n) : o(e, d(r), t, n)
            },
            function (t, o) {
              var a = s(this),
              c = d(t);
              if ('string' == typeof o && - 1 === E(o, i) && - 1 === E(o, '$<')) {
                var p = n(e, a, c, o);
                if (p.done) return p.value
              }
              var h = u(o);
              h ||
              (o = d(o));
              var v,
              b = a.global;
              b &&
              (v = a.unicode, a.lastIndex = 0);
              for (var k, A = []; null !== (k = g(a, c)) && (S(A, k), b); ) {
                '' === d(k[0]) &&
                (a.lastIndex = y(c, l(a.lastIndex), v))
              }
              for (var P, N = '', T = 0, I = 0; I < A.length; I++) {
                for (
                  var j,
                  C = d((k = A[I]) [0]),
                  M = w(_(f(k.index), c.length), 0),
                  L = [],
                  D = 1;
                  D < k.length;
                  D++
                ) S(L, void 0 === (P = k[D]) ? P : String(P));
                var R = k.groups;
                if (h) {
                  var q = x([C], L, M, c);
                  void 0 !== R &&
                  S(q, R),
                  j = d(r(o, void 0, q))
                } else j = m(C, c, M, L, R, o);
                M >= T &&
                (N += O(c, T, M) + j, T = M + C.length)
              }
              return N + O(c, T)
            }
            ]
          }
        ),
        !!c(
          (
            function () {
              var t = /./;
              return t.exec = function () {
                var t = [];
                return t.groups = {
                  a: '7'
                },
                t
              },
              '7' !== ''.replace(t, '$<a>')
            }
          )
        ) ||
        !k ||
        A
      )
    },
    6412: function (t, e, n) {
      'use strict';
      n(511) ('asyncIterator')
    },
    6761: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(4576),
      i = n(9565),
      a = n(9504),
      c = n(6395),
      s = n(3724),
      u = n(4495),
      p = n(9039),
      f = n(9297),
      l = n(1625),
      d = n(8551),
      h = n(5397),
      y = n(6969),
      v = n(655),
      m = n(6980),
      g = n(2360),
      b = n(1072),
      w = n(8480),
      _ = n(298),
      x = n(3717),
      S = n(7347),
      E = n(4913),
      O = n(6801),
      k = n(8773),
      A = n(6840),
      P = n(2106),
      N = n(5745),
      T = n(6119),
      I = n(421),
      j = n(3392),
      C = n(8227),
      M = n(1951),
      L = n(511),
      D = n(8242),
      R = n(687),
      q = n(1181),
      F = n(9213).forEach,
      z = T('hidden'),
      B = 'Symbol',
      H = 'prototype',
      G = q.set,
      U = q.getterFor(B),
      W = Object[H],
      Y = o.Symbol,
      $ = Y &&
      Y[H],
      J = o.RangeError,
      V = o.TypeError,
      K = o.QObject,
      X = S.f,
      Q = E.f,
      Z = _.f,
      tt = k.f,
      et = a([].push),
      nt = N('symbols'),
      rt = N('op-symbols'),
      ot = N('wks'),
      it = !K ||
      !K[H] ||
      !K[H].findChild,
      at = function (t, e, n) {
        var r = X(W, e);
        r &&
        delete W[e],
        Q(t, e, n),
        r &&
        t !== W &&
        Q(W, e, r)
      },
      ct = s &&
      p(
        (
          function () {
            return 7 !== g(Q({
            }, 'a', {
              get: function () {
                return Q(this, 'a', {
                  value: 7
                }).a
              }
            })).a
          }
        )
      ) ? at : Q,
      st = function (t, e) {
        var n = nt[t] = g($);
        return G(n, {
          type: B,
          tag: t,
          description: e
        }),
        s ||
        (n.description = e),
        n
      },
      ut = function (t, e, n) {
        t === W &&
        ut(rt, e, n),
        d(t);
        var r = y(e);
        return d(n),
        f(nt, r) ? (
          n.enumerable ? (f(t, z) && t[z][r] && (t[z][r] = !1), n = g(n, {
            enumerable: m(0, !1)
          })) : (f(t, z) || Q(t, z, m(1, g(null))), t[z][r] = !0),
          ct(t, r, n)
        ) : Q(t, r, n)
      },
      pt = function (t, e) {
        d(t);
        var n = h(e),
        r = b(n).concat(ht(n));
        return F(r, (function (e) {
          s &&
          !i(ft, n, e) ||
          ut(t, e, n[e])
        })),
        t
      },
      ft = function (t) {
        var e = y(t),
        n = i(tt, this, e);
        return !(this === W && f(nt, e) && !f(rt, e)) &&
        (!(n || !f(this, e) || !f(nt, e) || f(this, z) && this[z][e]) || n)
      },
      lt = function (t, e) {
        var n = h(t),
        r = y(e);
        if (n !== W || !f(nt, r) || f(rt, r)) {
          var o = X(n, r);
          return !o ||
          !f(nt, r) ||
          f(n, z) &&
          n[z][r] ||
          (o.enumerable = !0),
          o
        }
      },
      dt = function (t) {
        var e = Z(h(t)),
        n = [];
        return F(e, (function (t) {
          f(nt, t) ||
          f(I, t) ||
          et(n, t)
        })),
        n
      },
      ht = function (t) {
        var e = t === W,
        n = Z(e ? rt : h(t)),
        r = [];
        return F(n, (function (t) {
          !f(nt, t) ||
          e &&
          !f(W, t) ||
          et(r, nt[t])
        })),
        r
      };
      u ||
      (
        Y = function () {
          if (l($, this)) throw new V('Symbol is not a constructor');
          var t = arguments.length &&
          void 0 !== arguments[0] ? v(arguments[0]) : void 0,
          e = j(t),
          n = function (t) {
            var r = void 0 === this ? o : this;
            r === W &&
            i(n, rt, t),
            f(r, z) &&
            f(r[z], e) &&
            (r[z][e] = !1);
            var a = m(1, t);
            try {
              ct(r, e, a)
            } catch (t) {
              if (!(t instanceof J)) throw t;
              at(r, e, a)
            }
          };
          return s &&
          it &&
          ct(W, e, {
            configurable: !0,
            set: n
          }),
          st(e, t)
        },
        A($ = Y[H], 'toString', (function () {
          return U(this).tag
        })),
        A(Y, 'withoutSetter', (function (t) {
          return st(j(t), t)
        })),
        k.f = ft,
        E.f = ut,
        O.f = pt,
        S.f = lt,
        w.f = _.f = dt,
        x.f = ht,
        M.f = function (t) {
          return st(C(t), t)
        },
        s &&
        (
          P(
            $,
            'description',
            {
              configurable: !0,
              get: function () {
                return U(this).description
              }
            }
          ),
          c ||
          A(W, 'propertyIsEnumerable', ft, {
            unsafe: !0
          })
        )
      ),
      r({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: !u,
        sham: !u
      }, {
        Symbol: Y
      }),
      F(b(ot), (function (t) {
        L(t)
      })),
      r({
        target: B,
        stat: !0,
        forced: !u
      }, {
        useSetter: function () {
          it = !0
        },
        useSimple: function () {
          it = !1
        }
      }),
      r({
        target: 'Object',
        stat: !0,
        forced: !u,
        sham: !s
      }, {
        create: function (t, e) {
          return void 0 === e ? g(t) : pt(g(t), e)
        },
        defineProperty: ut,
        defineProperties: pt,
        getOwnPropertyDescriptor: lt
      }),
      r({
        target: 'Object',
        stat: !0,
        forced: !u
      }, {
        getOwnPropertyNames: dt
      }),
      D(),
      R(Y, B),
      I[z] = !0
    },
    9463: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(3724),
      i = n(4576),
      a = n(9504),
      c = n(9297),
      s = n(4901),
      u = n(1625),
      p = n(655),
      f = n(2106),
      l = n(7740),
      d = i.Symbol,
      h = d &&
      d.prototype;
      if (o && s(d) && (!('description' in h) || void 0 !== d().description)) {
        var y = {},
        v = function () {
          var t = arguments.length < 1 ||
          void 0 === arguments[0] ? void 0 : p(arguments[0]),
          e = u(h, this) ? new d(t) : void 0 === t ? d() : d(t);
          return '' === t &&
          (y[e] = !0),
          e
        };
        l(v, d),
        v.prototype = h,
        h.constructor = v;
        var m = 'Symbol(description detection)' === String(d('description detection')),
        g = a(h.valueOf),
        b = a(h.toString),
        w = /^Symbol\((.*)\)[^)]+$/,
        _ = a(''.replace),
        x = a(''.slice);
        f(
          h,
          'description',
          {
            configurable: !0,
            get: function () {
              var t = g(this);
              if (c(y, t)) return '';
              var e = b(t),
              n = m ? x(e, 7, - 1) : _(e, w, '$1');
              return '' === n ? void 0 : n
            }
          }
        ),
        r({
          global: !0,
          constructor: !0,
          forced: !0
        }, {
          Symbol: v
        })
      }
    },
    1510: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(7751),
      i = n(9297),
      a = n(655),
      c = n(5745),
      s = n(1296),
      u = c('string-to-symbol-registry'),
      p = c('symbol-to-string-registry');
      r({
        target: 'Symbol',
        stat: !0,
        forced: !s
      }, {
        for : function (t) {
          var e = a(t);
          if (i(u, e)) return u[e];
          var n = o('Symbol') (e);
          return u[e] = n,
          p[n] = e,
          n
        }
      })
    },
    2259: function (t, e, n) {
      'use strict';
      n(511) ('iterator')
    },
    2675: function (t, e, n) {
      'use strict';
      n(6761),
      n(1510),
      n(7812),
      n(3110),
      n(9773)
    },
    7812: function (t, e, n) {
      'use strict';
      var r = n(6518),
      o = n(9297),
      i = n(757),
      a = n(6823),
      c = n(5745),
      s = n(1296),
      u = c('symbol-to-string-registry');
      r({
        target: 'Symbol',
        stat: !0,
        forced: !s
      }, {
        keyFor: function (t) {
          if (!i(t)) throw new TypeError(a(t) + ' is not a symbol');
          if (o(u, t)) return u[t]
        }
      })
    },
    5700: function (t, e, n) {
      'use strict';
      var r = n(511),
      o = n(8242);
      r('toPrimitive'),
      o()
    },
    8125: function (t, e, n) {
      'use strict';
      var r = n(7751),
      o = n(511),
      i = n(687);
      o('toStringTag'),
      i(r('Symbol'), 'Symbol')
    },
    3500: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(7400),
      i = n(9296),
      a = n(235),
      c = n(6699),
      s = function (t) {
        if (t && t.forEach !== a) try {
          c(t, 'forEach', a)
        } catch (e) {
          t.forEach = a
        }
      };
      for (var u in o) o[u] &&
      s(r[u] && r[u].prototype);
      s(i)
    },
    2953: function (t, e, n) {
      'use strict';
      var r = n(4576),
      o = n(7400),
      i = n(9296),
      a = n(3792),
      c = n(6699),
      s = n(687),
      u = n(8227) ('iterator'),
      p = a.values,
      f = function (t, e) {
        if (t) {
          if (t[u] !== p) try {
            c(t, u, p)
          } catch (e) {
            t[u] = p
          }
          if (s(t, e, !0), o[e]) for (var n in a) if (t[n] !== a[n]) try {
            c(t, n, a[n])
          } catch (e) {
            t[n] = a[n]
          }
        }
      };
      for (var l in o) f(r[l] && r[l].prototype, l);
      f(i, 'DOMTokenList')
    }
  },
  e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {
      exports: {
      }
    };
    return t[r].call(i.exports, i, i.exports, n),
    i.exports
  }
  n.g = function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this ||
      new Function('return this') ()
    } catch (t) {
      if ('object' == typeof window) return window
    }
  }(),
  function () {
    'use strict';
    n(2675),
    n(9463),
    n(6412),
    n(2259),
    n(5700),
    n(8125),
    n(8706),
    n(2008),
    n(3418),
    n(4423),
    n(3792),
    n(4782),
    n(9572),
    n(2010),
    n(4731),
    n(479),
    n(2892),
    n(3851),
    n(1278),
    n(875),
    n(9432),
    n(287),
    n(6099),
    n(3362),
    n(7495),
    n(8781),
    n(1699),
    n(7764),
    n(3500),
    n(2953);
    var t = function () {
      if ('undefined' != typeof Map) return Map;
      function t(t, e) {
        var n = - 1;
        return t.some((function (t, r) {
          return t[0] === e &&
          (n = r, !0)
        })),
        n
      }
      return function () {
        function e() {
          this.__entries__ = []
        }
        return Object.defineProperty(
          e.prototype,
          'size',
          {
            get: function () {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }
        ),
        e.prototype.get = function (e) {
          var n = t(this.__entries__, e),
          r = this.__entries__[n];
          return r &&
          r[1]
        },
        e.prototype.set = function (e, n) {
          var r = t(this.__entries__, e);
          ~r ? this.__entries__[r][1] = n : this.__entries__.push([e,
          n])
        },
        e.prototype.delete = function (e) {
          var n = this.__entries__,
          r = t(n, e);
          ~r &&
          n.splice(r, 1)
        },
        e.prototype.has = function (e) {
          return !!~t(this.__entries__, e)
        },
        e.prototype.clear = function () {
          this.__entries__.splice(0)
        },
        e.prototype.forEach = function (t, e) {
          void 0 === e &&
          (e = null);
          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var o = r[n];
            t.call(e, o[1], o[0])
          }
        },
        e
      }()
    }(),
    e = 'undefined' != typeof window &&
    'undefined' != typeof document &&
    window.document === document,
    r = void 0 !== n.g &&
    n.g.Math === Math ? n.g : 'undefined' != typeof self &&
    self.Math === Math ? self : 'undefined' != typeof window &&
    window.Math === Math ? window : Function('return this') (),
    o = 'function' == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function (t) {
      return setTimeout((function () {
        return t(Date.now())
      }), 1000 / 60)
    };
    var i = [
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'size',
      'weight'
    ],
    a = 'undefined' != typeof MutationObserver,
    c = function () {
      function t() {
        this.connected_ = !1,
        this.mutationEventsAdded_ = !1,
        this.mutationsObserver_ = null,
        this.observers_ = [],
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
        this.refresh = function (t, e) {
          var n = !1,
          r = !1,
          i = 0;
          function a() {
            n &&
            (n = !1, t()),
            r &&
            s()
          }
          function c() {
            o(a)
          }
          function s() {
            var t = Date.now();
            if (n) {
              if (t - i < 2) return;
              r = !0
            } else n = !0,
            r = !1,
            setTimeout(c, e);
            i = t
          }
          return s
        }(this.refresh.bind(this), 20)
      }
      return t.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) ||
        this.observers_.push(t),
        this.connected_ ||
        this.connect_()
      },
      t.prototype.removeObserver = function (t) {
        var e = this.observers_,
        n = e.indexOf(t);
        ~n &&
        e.splice(n, 1),
        !e.length &&
        this.connected_ &&
        this.disconnect_()
      },
      t.prototype.refresh = function () {
        this.updateObservers_() &&
        this.refresh()
      },
      t.prototype.updateObservers_ = function () {
        var t = this.observers_.filter((function (t) {
          return t.gatherActive(),
          t.hasActive()
        }));
        return t.forEach((function (t) {
          return t.broadcastActive()
        })),
        t.length > 0
      },
      t.prototype.connect_ = function () {
        e &&
        !this.connected_ &&
        (
          document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          a ? (
            this.mutationsObserver_ = new MutationObserver(this.refresh),
            this.mutationsObserver_.observe(
              document,
              {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              }
            )
          ) : (
            document.addEventListener('DOMSubtreeModified', this.refresh),
            this.mutationEventsAdded_ = !0
          ),
          this.connected_ = !0
        )
      },
      t.prototype.disconnect_ = function () {
        e &&
        this.connected_ &&
        (
          document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ &&
          this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
          document.removeEventListener('DOMSubtreeModified', this.refresh),
          this.mutationsObserver_ = null,
          this.mutationEventsAdded_ = !1,
          this.connected_ = !1
        )
      },
      t.prototype.onTransitionEnd_ = function (t) {
        var e = t.propertyName,
        n = void 0 === e ? '' : e;
        i.some((function (t) {
          return !!~n.indexOf(t)
        })) &&
        this.refresh()
      },
      t.getInstance = function () {
        return this.instance_ ||
        (this.instance_ = new t),
        this.instance_
      },
      t.instance_ = null,
      t
    }(),
    s = function (t, e) {
      for (var n = 0, r = Object.keys(e); n < r.length; n++) {
        var o = r[n];
        Object.defineProperty(t, o, {
          value: e[o],
          enumerable: !1,
          writable: !1,
          configurable: !0
        })
      }
      return t
    },
    u = function (t) {
      return t &&
      t.ownerDocument &&
      t.ownerDocument.defaultView ||
      r
    },
    p = v(0, 0, 0, 0);
    function f(t) {
      return parseFloat(t) ||
      0
    }
    function l(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      return e.reduce((function (e, n) {
        return e + f(t['border-' + n + '-width'])
      }), 0)
    }
    function d(t) {
      var e = t.clientWidth,
      n = t.clientHeight;
      if (!e && !n) return p;
      var r = u(t).getComputedStyle(t),
      o = function (t) {
        for (var e = {}, n = 0, r = [
          'top',
          'right',
          'bottom',
          'left'
        ]; n < r.length; n++) {
          var o = r[n],
          i = t['padding-' + o];
          e[o] = f(i)
        }
        return e
      }(r),
      i = o.left + o.right,
      a = o.top + o.bottom,
      c = f(r.width),
      s = f(r.height);
      if (
        'border-box' === r.boxSizing &&
        (
          Math.round(c + i) !== e &&
          (c -= l(r, 'left', 'right') + i),
          Math.round(s + a) !== n &&
          (s -= l(r, 'top', 'bottom') + a)
        ),
        !function (t) {
          return t === u(t).document.documentElement
        }(t)
      ) {
        var d = Math.round(c + i) - e,
        h = Math.round(s + a) - n;
        1 !== Math.abs(d) &&
        (c -= d),
        1 !== Math.abs(h) &&
        (s -= h)
      }
      return v(o.left, o.top, c, s)
    }
    var h = 'undefined' != typeof SVGGraphicsElement ? function (t) {
      return t instanceof u(t).SVGGraphicsElement
    }
     : function (t) {
      return t instanceof u(t).SVGElement &&
      'function' == typeof t.getBBox
    };
    function y(t) {
      return e ? h(t) ? function (t) {
        var e = t.getBBox();
        return v(0, 0, e.width, e.height)
      }(t) : d(t) : p
    }
    function v(t, e, n, r) {
      return {
        x: t,
        y: e,
        width: n,
        height: r
      }
    }
    var m = function () {
      function t(t) {
        this.broadcastWidth = 0,
        this.broadcastHeight = 0,
        this.contentRect_ = v(0, 0, 0, 0),
        this.target = t
      }
      return t.prototype.isActive = function () {
        var t = y(this.target);
        return this.contentRect_ = t,
        t.width !== this.broadcastWidth ||
        t.height !== this.broadcastHeight
      },
      t.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return this.broadcastWidth = t.width,
        this.broadcastHeight = t.height,
        t
      },
      t
    }(),
    g = function (t, e) {
      var n,
      r,
      o,
      i,
      a,
      c,
      u,
      p = (
        r = (n = e).x,
        o = n.y,
        i = n.width,
        a = n.height,
        c = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
        u = Object.create(c.prototype),
        s(
          u,
          {
            x: r,
            y: o,
            width: i,
            height: a,
            top: o,
            right: r + i,
            bottom: a + o,
            left: r
          }
        ),
        u
      );
      s(this, {
        target: t,
        contentRect: p
      })
    },
    b = function () {
      function e(e, n, r) {
        if (
          this.activeObservations_ = [],
          this.observations_ = new t,
          'function' != typeof e
        ) throw new TypeError('The callback provided as parameter 1 is not a function.');
        this.callback_ = e,
        this.controller_ = n,
        this.callbackCtx_ = r
      }
      return e.prototype.observe = function (t) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
          var e = this.observations_;
          e.has(t) ||
          (
            e.set(t, new m(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh()
          )
        }
      },
      e.prototype.unobserve = function (t) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
          var e = this.observations_;
          e.has(t) &&
          (e.delete(t), e.size || this.controller_.removeObserver(this))
        }
      },
      e.prototype.disconnect = function () {
        this.clearActive(),
        this.observations_.clear(),
        this.controller_.removeObserver(this)
      },
      e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
        this.observations_.forEach((function (e) {
          e.isActive() &&
          t.activeObservations_.push(e)
        }))
      },
      e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
          e = this.activeObservations_.map((function (t) {
            return new g(t.target, t.broadcastRect())
          }));
          this.callback_.call(t, e, t),
          this.clearActive()
        }
      },
      e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      },
      e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      },
      e
    }(),
    w = 'undefined' != typeof WeakMap ? new WeakMap : new t,
    _ = function t(e) {
      if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      var n = c.getInstance(),
      r = new b(e, n, this);
      w.set(this, r)
    };
    [
      'observe',
      'unobserve',
      'disconnect'
    ].forEach(
      (
        function (t) {
          _.prototype[t] = function () {
            var e;
            return (e = w.get(this)) [t].apply(e, arguments)
          }
        }
      )
    );
    var x = void 0 !== r.ResizeObserver ? r.ResizeObserver : _;
    n(8598),
    n(2062),
    n(5506),
    n(5440);
    function S(t) {
      return S = 'function' == typeof Symbol &&
      'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t
      }
       : function (t) {
        return t &&
        'function' == typeof Symbol &&
        t.constructor === Symbol &&
        t !== Symbol.prototype ? 'symbol' : typeof t
      },
      S(t)
    }
    function E(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t
      }(t) ||
      function (t, e) {
        var n = null == t ? null : 'undefined' != typeof Symbol &&
        t[Symbol.iterator] ||
        t['@@iterator'];
        if (null != n) {
          var r,
          o,
          i,
          a,
          c = [],
          s = !0,
          u = !1;
          try {
            if (i = (n = n.call(t)).next, 0 === e) {
              if (Object(n) !== n) return;
              s = !1
            } else for (
              ;
              !(s = (r = i.call(n)).done) &&
              (c.push(r.value), c.length !== e);
              s = !0
            );
          } catch (t) {
            u = !0,
            o = t
          } finally {
            try {
              if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (u) throw o
            }
          }
          return c
        }
      }(t, e) ||
      function (t, e) {
        if (t) {
          if ('string' == typeof t) return O(t, e);
          var n = {}.toString.call(t).slice(8, - 1);
          return 'Object' === n &&
          t.constructor &&
          (n = t.constructor.name),
          'Map' === n ||
          'Set' === n ? Array.from(t) : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(t, e) : void 0
        }
      }(t, e) ||
      function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }()
    }
    function O(t, e) {
      (null == e || e > t.length) &&
      (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r
    }
    function k(t) {
      var e = arguments.length > 1 &&
      void 0 !== arguments[1] ? arguments[1] : {
      },
      n = [
        'color',
        'fontFamily',
        'fontSize',
        'fontSmoothing',
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'letterSpacing',
        'textAlign',
        'textDecoration',
        'textShadow',
        'textTransform'
      ],
      r = [
        ':hover',
        ':focus',
        '::placeholder',
        ':disabled'
      ],
      o = Object.entries(e),
      i = o.filter((function (t) {
        var e = E(t, 2);
        e[0];
        return 'string' == typeof e[1]
      })),
      a = o.filter((function (t) {
        var e = E(t, 2);
        e[0];
        return 'object' == S(e[1])
      }));
      return ['.'.concat(t, '{').concat(
        i.map(
          (
            function (t) {
              var e = E(t, 2),
              r = e[0],
              o = e[1];
              if ( - 1 != n.indexOf(r)) {
                var i = r.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
                return ''.concat(i, ':').concat(o, ';')
              }
            }
          )
        ).join(''),
        '}'
      ),
      a.map(
        (
          function (e) {
            var n = E(e, 2),
            o = n[0],
            i = n[1];
            if ( - 1 != r.indexOf(o)) return k(t + o, i)
          }
        )
      ).join('')].join('')
    }
    function A(t) {
      var e = arguments.length > 1 &&
      void 0 !== arguments[1] ? arguments[1] : 'neonpay__container',
      n = arguments.length > 2 &&
      void 0 !== arguments[2] ? arguments[2] : 'neonpay__input';
      if (t) {
        var r = document.createElement('style');
        return r.type = 'text/css',
        r.textContent = k(e, t.base),
        t.invalid &&
        (r.textContent += k(''.concat(n, '--invalid'), t.invalid)),
        t.empty &&
        (r.textContent += k(''.concat(n, '--empty'), t.empty)),
        t.complete &&
        (r.textContent += k(''.concat(n, '--complete'), t.complete)),
        document.head.appendChild(r),
        !0
      }
      return !1
    }
    function P(t, e) {
      (e || document).querySelectorAll('[class*="-'.concat(t, '"].NeonPay__field')).forEach(
        (
          function (t) {
            t.classList.remove('--error'),
            t.querySelector('.neonpay__bank-error') &&
            (t.querySelector('.neonpay__bank-error').innerHTML = '')
          }
        )
      )
    }
    // function N(t) {
    //   return (t = (t + '').replace(/[^\d.-]/g, '')) &&
    //   t.includes('.') &&
    //   (t = t.substring(0, t.indexOf('.') + 3)),
    //   parseFloat(t) ? Math.round(100 * parseFloat(t)) : 0
    // }

    function N(t) {
        let sanitizedInput = sanitizeInput(t);
      
        if (!containsDecimalPoint(sanitizedInput)) {
          return 0;
        }
      
        let trimmedInput = trimToTwoDecimalPlaces(sanitizedInput);
      
        let parsedValue = parseFloat(trimmedInput);
    
        var condition = parseFloat(trimmedInput);
        console.log(condition);
        var toReturn = condition ? Math.round(100 * parsedValue) : 0;
        console.log(toReturn);
        return toReturn;
      }
      
      function sanitizeInput(t) {
        var a = (t + '').replace(/[^\d.-]/g, '');
        console.log('sanitizeInput', a);
        return a;
      }

      function containsDecimalPoint(t) {
        var a = t.includes('.');
        console.log('containsDecimalPoint', a);
        return a;
      }
      
      function trimToTwoDecimalPlaces(t) {
        var a = t.substring(0, t.indexOf('.') + 3);
        console.log(trimToTwoDecimalPlaces, a);)
        return a;
      }


    var T = 'https://js.stripe.com/v3',
    I = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    j = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    C = null,
    M = function (t) {
      return null !== C ||
      (
        C = new Promise(
          (
            function (e, n) {
              if ('undefined' != typeof window && 'undefined' != typeof document) if (window.Stripe && t && console.warn(j), window.Stripe) e(window.Stripe);
               else try {
                var r = function () {
                  for (
                    var t = document.querySelectorAll('script[src^="'.concat(T, '"]')),
                    e = 0;
                    e < t.length;
                    e++
                  ) {
                    var n = t[e];
                    if (I.test(n.src)) return n
                  }
                  return null
                }();
                r &&
                t ? console.warn(j) : r ||
                (
                  r = function (t) {
                    var e = t &&
                    !t.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                    n = document.createElement('script');
                    n.src = ''.concat(T).concat(e);
                    var r = document.head ||
                    document.body;
                    if (!r) throw new Error(
                      'Expected document.body not to be null. Stripe.js requires a <body> element.'
                    );
                    return r.appendChild(n),
                    n
                  }(t)
                ),
                r.addEventListener(
                  'load',
                  (
                    function () {
                      window.Stripe ? e(window.Stripe) : n(new Error('Stripe.js not available'))
                    }
                  )
                ),
                r.addEventListener(
                  'error',
                  (function () {
                    n(new Error('Failed to load Stripe.js'))
                  })
                )
              } catch (t) {
                return void n(t)
              } else e(null)
            }
          )
        )
      ),
      C
    },
    L = Promise.resolve().then((function () {
      return M(null)
    })),
    D = !1;
    L.catch((function (t) {
      D ||
      console.warn(t)
    }));
    var R = function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      D = !0;
      var r = Date.now();
      return L.then(
        (
          function (t) {
            return function (t, e, n) {
              if (null === t) return null;
              var r = t.apply(void 0, e);
              return function (t, e) {
                t &&
                t._registerWrapper &&
                t._registerWrapper({
                  name: 'stripe-js',
                  version: '1.54.2',
                  startTime: e
                })
              }(r, n),
              r
            }(t, e, r)
          }
        )
      )
    };
    function q(t) {
      return q = 'function' == typeof Symbol &&
      'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t
      }
       : function (t) {
        return t &&
        'function' == typeof Symbol &&
        t.constructor === Symbol &&
        t !== Symbol.prototype ? 'symbol' : typeof t
      },
      q(t)
    }
    function F(t) {
      return function (t) {
        if (Array.isArray(t)) return J(t)
      }(t) ||
      function (t) {
        if (
          'undefined' != typeof Symbol &&
          null != t[Symbol.iterator] ||
          null != t['@@iterator']
        ) return Array.from(t)
      }(t) ||
      $(t) ||
      function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }()
    }
    function z(t) {
      throw new TypeError('"' + t + '" is read-only')
    }
    function B() {
      B = function () {
        return e
      };
      var t,
      e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = Object.defineProperty ||
      function (t, e, n) {
        t[e] = n.value
      },
      i = 'function' == typeof Symbol ? Symbol : {
      },
      a = i.iterator ||
      '@@iterator',
      c = i.asyncIterator ||
      '@@asyncIterator',
      s = i.toStringTag ||
      '@@toStringTag';
      function u(t, e, n) {
        return Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        t[e]
      }
      try {
        u({
        }, '')
      } catch (t) {
        u = function (t, e, n) {
          return t[e] = n
        }
      }
      function p(t, e, n, r) {
        var i = e &&
        e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new T(r || []);
        return o(a, '_invoke', {
          value: k(t, n, c)
        }),
        a
      }
      function f(t, e, n) {
        try {
          return {
            type: 'normal',
            arg: t.call(e, n)
          }
        } catch (t) {
          return {
            type: 'throw',
            arg: t
          }
        }
      }
      e.wrap = p;
      var l = 'suspendedStart',
      d = 'suspendedYield',
      h = 'executing',
      y = 'completed',
      v = {};
      function m() {
      }
      function g() {
      }
      function b() {
      }
      var w = {};
      u(w, a, (function () {
        return this
      }));
      var _ = Object.getPrototypeOf,
      x = _ &&
      _(_(I([])));
      x &&
      x !== n &&
      r.call(x, a) &&
      (w = x);
      var S = b.prototype = m.prototype = Object.create(w);
      function E(t) {
        [
          'next',
          'throw',
          'return'
        ].forEach((function (e) {
          u(t, e, (function (t) {
            return this._invoke(e, t)
          }))
        }))
      }
      function O(t, e) {
        function n(o, i, a, c) {
          var s = f(t[o], t, i);
          if ('throw' !== s.type) {
            var u = s.arg,
            p = u.value;
            return p &&
            'object' == q(p) &&
            r.call(p, '__await') ? e.resolve(p.__await).then(
              (function (t) {
                n('next', t, a, c)
              }),
              (function (t) {
                n('throw', t, a, c)
              })
            ) : e.resolve(p).then(
              (function (t) {
                u.value = t,
                a(u)
              }),
              (function (t) {
                return n('throw', t, a, c)
              })
            )
          }
          c(s.arg)
        }
        var i;
        o(
          this,
          '_invoke',
          {
            value: function (t, r) {
              function o() {
                return new e((function (e, o) {
                  n(t, r, e, o)
                }))
              }
              return i = i ? i.then(o, o) : o()
            }
          }
        )
      }
      function k(e, n, r) {
        var o = l;
        return function (i, a) {
          if (o === h) throw Error('Generator is already running');
          if (o === y) {
            if ('throw' === i) throw a;
            return {
              value: t,
              done: !0
            }
          }
          for (r.method = i, r.arg = a; ; ) {
            var c = r.delegate;
            if (c) {
              var s = A(c, r);
              if (s) {
                if (s === v) continue;
                return s
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg;
             else if ('throw' === r.method) {
              if (o === l) throw o = y,
              r.arg;
              r.dispatchException(r.arg)
            } else 'return' === r.method &&
            r.abrupt('return', r.arg);
            o = h;
            var u = f(e, n, r);
            if ('normal' === u.type) {
              if (o = r.done ? y : d, u.arg === v) continue;
              return {
                value: u.arg,
                done: r.done
              }
            }
            'throw' === u.type &&
            (o = y, r.method = 'throw', r.arg = u.arg)
          }
        }
      }
      function A(e, n) {
        var r = n.method,
        o = e.iterator[r];
        if (o === t) return n.delegate = null,
        'throw' === r &&
        e.iterator.return &&
        (n.method = 'return', n.arg = t, A(e, n), 'throw' === n.method) ||
        'return' !== r &&
        (
          n.method = 'throw',
          n.arg = new TypeError('The iterator does not provide a \'' + r + '\' method')
        ),
        v;
        var i = f(o, e.iterator, n.arg);
        if ('throw' === i.type) return n.method = 'throw',
        n.arg = i.arg,
        n.delegate = null,
        v;
        var a = i.arg;
        return a ? a.done ? (
          n[e.resultName] = a.value,
          n.next = e.nextLoc,
          'return' !== n.method &&
          (n.method = 'next', n.arg = t),
          n.delegate = null,
          v
        ) : a : (
          n.method = 'throw',
          n.arg = new TypeError('iterator result is not an object'),
          n.delegate = null,
          v
        )
      }
      function P(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t &&
        (e.catchLoc = t[1]),
        2 in t &&
        (e.finallyLoc = t[2], e.afterLoc = t[3]),
        this.tryEntries.push(e)
      }
      function N(t) {
        var e = t.completion ||
        {
        };
        e.type = 'normal',
        delete e.arg,
        t.completion = e
      }
      function T(t) {
        this.tryEntries = [
          {
            tryLoc: 'root'
          }
        ],
        t.forEach(P, this),
        this.reset(!0)
      }
      function I(e) {
        if (e || '' === e) {
          var n = e[a];
          if (n) return n.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = - 1,
            i = function n() {
              for (; ++o < e.length; ) if (r.call(e, o)) return n.value = e[o],
              n.done = !1,
              n;
              return n.value = t,
              n.done = !0,
              n
            };
            return i.next = i
          }
        }
        throw new TypeError(q(e) + ' is not iterable')
      }
      return g.prototype = b,
      o(S, 'constructor', {
        value: b,
        configurable: !0
      }),
      o(b, 'constructor', {
        value: g,
        configurable: !0
      }),
      g.displayName = u(b, s, 'GeneratorFunction'),
      e.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t &&
        t.constructor;
        return !!e &&
        (e === g || 'GeneratorFunction' === (e.displayName || e.name))
      },
      e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, u(t, s, 'GeneratorFunction')),
        t.prototype = Object.create(S),
        t
      },
      e.awrap = function (t) {
        return {
          __await: t
        }
      },
      E(O.prototype),
      u(O.prototype, c, (function () {
        return this
      })),
      e.AsyncIterator = O,
      e.async = function (t, n, r, o, i) {
        void 0 === i &&
        (i = Promise);
        var a = new O(p(t, n, r, o), i);
        return e.isGeneratorFunction(n) ? a : a.next().then((function (t) {
          return t.done ? t.value : a.next()
        }))
      },
      E(S),
      u(S, s, 'Generator'),
      u(S, a, (function () {
        return this
      })),
      u(S, 'toString', (function () {
        return '[object Generator]'
      })),
      e.keys = function (t) {
        var e = Object(t),
        n = [];
        for (var r in e) n.push(r);
        return n.reverse(),
        function t() {
          for (; n.length; ) {
            var r = n.pop();
            if (r in e) return t.value = r,
            t.done = !1,
            t
          }
          return t.done = !0,
          t
        }
      },
      e.values = I,
      T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            this.prev = 0,
            this.next = 0,
            this.sent = this._sent = t,
            this.done = !1,
            this.delegate = null,
            this.method = 'next',
            this.arg = t,
            this.tryEntries.forEach(N),
            !e
          ) for (var n in this) 't' === n.charAt(0) &&
          r.call(this, n) &&
          !isNaN( + n.slice(1)) &&
          (this[n] = t)
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return c.type = 'throw',
            c.arg = e,
            n.next = r,
            o &&
            (n.method = 'next', n.arg = t),
            !!o
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
            c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var s = r.call(a, 'catchLoc'),
              u = r.call(a, 'finallyLoc');
              if (s && u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              } else if (s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
              } else {
                if (!u) throw Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, 'finallyLoc') &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break
            }
          }
          i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
          var a = i ? i.completion : {
          };
          return a.type = t,
          a.arg = e,
          i ? (this.method = 'next', this.next = i.finallyLoc, v) : this.complete(a)
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return 'break' === t.type ||
          'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (
            this.rval = this.arg = t.arg,
            this.method = 'return',
            this.next = 'end'
          ) : 'normal' === t.type &&
          e &&
          (this.next = e),
          v
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
            N(n),
            v
          }
        },
        catch : function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                N(n)
              }
              return o
            }
          }
          throw Error('illegal catch attempt')
        },
        delegateYield: function (e, n, r) {
          return this.delegate = {
            iterator: I(e),
            resultName: n,
            nextLoc: r
          },
          'next' === this.method &&
          (this.arg = t),
          v
        }
      },
      e
    }
    function H(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
        s = c.value
      } catch (t) {
        return void n(t)
      }
      c.done ? e(s) : Promise.resolve(s).then(r, o)
    }
    function G(t) {
      return function () {
        var e = this,
        n = arguments;
        return new Promise(
          (
            function (r, o) {
              var i = t.apply(e, n);
              function a(t) {
                H(i, r, o, a, c, 'next', t)
              }
              function c(t) {
                H(i, r, o, a, c, 'throw', t)
              }
              a(void 0)
            }
          )
        )
      }
    }
    function U(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
        (
          r = r.filter(
            (
              function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }
            )
          )
        ),
        n.push.apply(n, r)
      }
      return n
    }
    function W(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {
        };
        e % 2 ? U(Object(n), !0).forEach((function (e) {
          Y(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(
          (
            function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
          )
        )
      }
      return t
    }
    function Y(t, e, n) {
      return (e = Q(e)) in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n,
      t
    }
    function $(t, e) {
      if (t) {
        if ('string' == typeof t) return J(t, e);
        var n = {}.toString.call(t).slice(8, - 1);
        return 'Object' === n &&
        t.constructor &&
        (n = t.constructor.name),
        'Map' === n ||
        'Set' === n ? Array.from(t) : 'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(t, e) : void 0
      }
    }
    function J(t, e) {
      (null == e || e > t.length) &&
      (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r
    }
    function V(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function K(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable ||
        !1,
        r.configurable = !0,
        'value' in r &&
        (r.writable = !0),
        Object.defineProperty(t, Q(r.key), r)
      }
    }
    function X(t, e, n) {
      return e &&
      K(t.prototype, e),
      n &&
      K(t, n),
      Object.defineProperty(t, 'prototype', {
        writable: !1
      }),
      t
    }
    function Q(t) {
      var e = function (t, e) {
        if ('object' != q(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || 'default');
          if ('object' != q(r)) return r;
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === e ? String : Number) (t)
      }(t, 'string');
      return 'symbol' == q(e) ? e : e + ''
    }
    var Z,
    tt,
    et,
    nt,
    rt,
    ot = n(4744),
    it = n(1900),
    at = '3.2',
    ct = {
      key: '',
      version: ''
    },
    st = {
      merchantCapabilities: [
        'supports3DS'
      ],
      supportedNetworks: [
        'visa',
        'masterCard',
        'amex',
        'discover',
        'jcb'
      ]
    },
    ut = {
      requiredBillingContactFields: [
        'postalAddress',
        'name'
      ],
      requiredShippingContactFields: [
        'email'
      ],
      countryCode: 'US',
      currencyCode: 'USD',
      total: {
      }
    },
    pt = {
      event: null
    };
    function ft() {
      return ot(st, (ut.total.type = 'final', ut))
    }
    function lt(t, e) {
      var n = ft(),
      r = new ApplePaySession(3, n);
      dt(),
      r.onvalidatemerchant = function (n) {
        var o = function (t, e) {
          return new Promise(
            (
              function (n, r) {
                var o = new XMLHttpRequest,
                i = window.location.origin,
                a = rt ? ''.concat(
                  'https://api.sbx.neononepay.com',
                  '/token/apple/session?public_app_key='
                ).concat(t, '&merchant_id=').concat(e, '&applepay_merchant_origin=').concat(i, '&applepay_store_name=').concat(rt) : ''.concat(
                  'https://api.sbx.neononepay.com',
                  '/token/apple/session?public_app_key='
                ).concat(t, '&merchant_id=').concat(e, '&applepay_merchant_origin=').concat(i);
                o.onload = function () {
                  var t = JSON.parse(this.responseText);
                  if ('400' === t.statusCode || '422' === t.statusCode) {
                    var e = t.errors;
                    if (e) for (var o in e) {
                      var i = ((e[o] || {
                      }).messages || []) [0] ||
                      '';
                      console.warn('NEON PAY: Unable to initiate Apple Pay session '.concat(i))
                    }
                    r(t)
                  }
                  n(t)
                },
                o.onerror = r,
                o.open('GET', a),
                o.send()
              }
            )
          )
        }(t, e);
        o.then((function (t) {
          r.completeMerchantValidation(t)
        })).catch(
          (
            function (t) {
              console.warn(
                'NEONPAY: Was unable to validate this merchant for Apple Pay.'
              )
            }
          )
        )
      },
      r.onpaymentauthorized = function (t) {
        nt = t.payment.token,
        pt.event = t;
        var e = {
          status: ApplePaySession.STATUS_SUCCESS
        };
        r.completePayment(e),
        yt()
      },
      r.oncancel = function (t) {
        ht(),
        console.warn('Apple Pay payment attempt was canceled.')
      },
      r.begin()
    }
    function dt() {
      var t = new CustomEvent(
        'applepayButtonClick',
        {
          detail: {
            eventType: 'applepayButtonClick',
            type: 'applepay'
          }
        }
      );
      return window.dispatchEvent(t)
    }
    function ht() {
      var t = new CustomEvent(
        'applepayCanceled',
        {
          detail: {
            eventType: 'applepayCanceled',
            type: 'applepay'
          }
        }
      );
      return window.dispatchEvent(t)
    }
    function yt() {
      var t = new CustomEvent(
        'applepayAuthorized',
        {
          detail: {
            eventType: 'applepayAuthorized',
            type: 'applepay'
          }
        }
      );
      return window.dispatchEvent(t)
    }
    function vt() {
      var t = new CustomEvent(
        'achAuthorized',
        {
          detail: {
            eventType: 'achAuthorized',
            type: 'bankaccount'
          }
        }
      );
      return window.dispatchEvent(t)
    }
    function mt() {
      var t = new CustomEvent(
        'acssAuthorized',
        {
          detail: {
            eventType: 'acssAuthorized',
            type: 'acssDebit'
          }
        }
      );
      return window.dispatchEvent(t)
    }
    function gt(t, e) {
      var n = new CustomEvent(
        'change',
        {
          detail: {
            eventType: 'change',
            type: t,
            content: {
              error: e
            }
          }
        }
      );
      return window.dispatchEvent(n)
    }
    var bt = [
      {
        name: 'account_holder_first_name',
        label: 'Bank Account Holder\'s First Name *',
        type: 'text',
        maxLength: 70,
        autocomplete: 'given-name',
        processor: [
          'stripe',
          'payrix'
        ],
        paymentMethod: [
          'bankaccount',
          'acssDebit'
        ]
      },
      {
        name: 'account_holder_last_name',
        label: 'Bank Account Holder\'s Last Name *',
        type: 'text',
        maxLength: 70,
        autocomplete: 'family-name',
        processor: [
          'stripe',
          'payrix'
        ],
        paymentMethod: [
          'bankaccount',
          'acssDebit'
        ]
      },
      {
        name: 'email',
        label: 'Bank Account Holder\'s Email *',
        type: 'text',
        maxLength: 255,
        autocomplete: 'email',
        processor: [
          'stripe',
          'payrix'
        ],
        paymentMethod: [
          'bankaccount',
          'acssDebit'
        ]
      },
      {
        name: 'account_type',
        label: 'Bank Account Type *',
        type: 'select',
        processor: [
          'payrix'
        ],
        paymentMethod: [
          'bankaccount'
        ]
      },
      {
        name: 'account_number',
        label: 'Bank Account Number *',
        type: 'tel',
        maxLength: 20,
        inputMode: 'numeric',
        processor: [
          'payrix'
        ],
        paymentMethod: [
          'bankaccount'
        ]
      },
      {
        name: 'routing_number',
        label: 'Bank Routing Number *',
        type: 'tel',
        maxLength: 10,
        inputMode: 'numeric',
        processor: [
          'payrix'
        ],
        paymentMethod: [
          'bankaccount'
        ]
      }
    ],
    wt = 'neonpay__bank-field',
    _t = function () {
      return X(
        (
          function t(e) {
            var n = arguments.length > 1 &&
            void 0 !== arguments[1] ? arguments[1] : {
            },
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0,
            a = arguments.length > 5 ? arguments[5] : void 0;
            V(this, t),
            r ||
            console.warn(
              'NEONPAY: Session was not properly set up for payment. Please try again.'
            ),
            this._setProcessor = function (t) {
              this.processor = t
            },
            this._getProcessor = function () {
              return this.processor
            },
            this._setCurrency = function (t) {
              this.currency = t
            },
            this._getCurrency = function () {
              return this.currency
            },
            this._setCountry = function (t) {
              this.country = t
            },
            this._getCountry = function () {
              return this.country
            },
            this._setDafConnectId = function (t) {
              this.option.dafConnectId = t
            },
            this._catchHeightAdjustment = function (t) {
              if (t) {
                var e = this.type,
                n = this.sessionId;
                window.addEventListener(
                  'message',
                  (
                    function (r) {
                      if ('https://sandbox.neononepay.com' === r.origin) {
                        var o = '';
                        if (
                          'string' == typeof r.data &&
                          (o = JSON.parse(r.data)),
                          'adjust_height' === o.eventType &&
                          o.content &&
                          o.content.renderedHeight &&
                          o.type === e
                        ) {
                          var i = 'googlepay' === e ? s : c;
                          t.querySelector('#payframe-'.concat(e, '-').concat(n)).setAttribute(
                            'style',
                            ''.concat(i, ' height: ').concat(o.content.renderedHeight, 'px')
                          ),
                          t.querySelector('#payframe-'.concat(e, '-').concat(n)).style.height = ''.concat(o.content.renderedHeight, 'px')
                        }
                      }
                    }
                  )
                )
              }
            },
            this._handleFrameResize = function (t) {
              var e = this,
              n = new x(
                (
                  function (n, r) {
                    var o,
                    i = function (t, e) {
                      var n = 'undefined' != typeof Symbol &&
                      t[Symbol.iterator] ||
                      t['@@iterator'];
                      if (!n) {
                        if (Array.isArray(t) || (n = $(t)) || e && t && 'number' == typeof t.length) {
                          n &&
                          (t = n);
                          var r = 0,
                          o = function () {
                          };
                          return {
                            s: o,
                            n: function () {
                              return r >= t.length ? {
                                done: !0
                              }
                               : {
                                done: !1,
                                value: t[r++]
                              }
                            },
                            e: function (t) {
                              throw t
                            },
                            f: o
                          }
                        }
                        throw new TypeError(
                          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                      }
                      var i,
                      a = !0,
                      c = !1;
                      return {
                        s: function () {
                          n = n.call(t)
                        },
                        n: function () {
                          var t = n.next();
                          return a = t.done,
                          t
                        },
                        e: function (t) {
                          c = !0,
                          i = t
                        },
                        f: function () {
                          try {
                            a ||
                            null == n.return ||
                            n.return()
                          } finally {
                            if (c) throw i
                          }
                        }
                      }
                    }(n);
                    try {
                      for (i.s(); !(o = i.n()).done; ) {
                        var a = o.value.contentRect,
                        c = (
                          a.left,
                          a.top,
                          {
                            action: 'window_resize',
                            content: {
                              parentWidth: a.width,
                              parentHeight: a.height
                            }
                          }
                        ),
                        s = JSON.stringify(c);
                        t.querySelector('#payframe-'.concat(e.type, '-').concat(e.sessionId)) &&
                        t.querySelector('#payframe-'.concat(e.type, '-').concat(e.sessionId)).contentWindow &&
                        t.querySelector('#payframe-'.concat(e.type, '-').concat(e.sessionId)).contentWindow.postMessage(s, e.target)
                      }
                    } catch (t) {
                      i.e(t)
                    } finally {
                      i.f()
                    }
                  }
                )
              );
              t ? n.observe(t) : n.observe(
                t.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId))
              )
            },
            this._handleWindowResize = function (t) {
              var e = this.sessionId;
              window.addEventListener(
                'resize',
                (
                  function (n) {
                    var r = {
                      action: 'window_resize',
                      content: {
                        parentWidth: t.querySelector('#payframe-card-'.concat(e)).offsetWidth
                      }
                    },
                    o = JSON.stringify(r);
                    t.querySelector('#payframe-card-'.concat(e)) &&
                    t.querySelector('#payframe-card-'.concat(e)).contentWindow.postMessage(o, t)
                  }
                )
              )
            },
            this._appendFieldIframe = function (t) {
              var e = this,
              n = {
                action: 'setup_field',
                type: this.type,
                origin: this.origin,
                target: this.target,
                sessionId: this.sessionId,
                option: W(
                  W({
                  }, this.option),
                  {
                  },
                  {
                    country: this.country,
                    currency: this.currency
                  }
                )
              },
              r = t;
              if (r) {
                var o = document.createElement('iframe');
                o.setAttribute('frameborder', '0'),
                o.setAttribute('allowTransparency', 'true'),
                o.setAttribute(
                  'sandbox',
                  'allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation'
                ),
                o.setAttribute('allow', 'payment'),
                o.setAttribute('name', 'payframe-'.concat(n.type, '-').concat(n.sessionId)),
                o.setAttribute('id', 'payframe-'.concat(n.type, '-').concat(n.sessionId)),
                'googlepay' === n.type ? o.setAttribute('style', ''.concat(s, ' height: 40px;')) : o.setAttribute('style', ''.concat(c, ' height: 38px !important;')),
                o.src = ''.concat(n.target, '/token?v=').concat(at);
                var i = document.createElement('div');
                i.className = 'NeonPay__field',
                'googlepay' === n.type ? (
                  n.option.parentHeight = r.offsetHeight,
                  i.setAttribute(
                    'style',
                    'margin: 0px !important; padding: 0px !important; border: none !important; display: block !important; background: transparent !important; position: relative !important; opacity: 1 !important; min-height: 40px; height: inherit;'
                  )
                ) : i.setAttribute(
                  'style',
                  'margin: 0px !important; padding: 0px !important; border: none !important; display: block !important; background: transparent !important; position: relative !important; opacity: 1 !important;'
                ),
                i.appendChild(o),
                r.appendChild(i);
                var a = r.querySelector('#payframe-'.concat(n.type, '-').concat(n.sessionId)) ? r.querySelector('#payframe-'.concat(n.type, '-').concat(n.sessionId)) : document.querySelector('#payframe-'.concat(n.type, '-').concat(n.sessionId));
                a.addEventListener(
                  'load',
                  (
                    function (t) {
                      n.option.parentWidth = r.querySelector('#payframe-'.concat(n.type, '-').concat(n.sessionId)).offsetWidth;
                      var o = JSON.stringify(n);
                      a.contentWindow.postMessage(o, n.target),
                      'card' === n.type &&
                      (e._handleWindowResize(r), e._handleFrameResize(r)),
                      'googlepay' === n.type &&
                      e._handleFrameResize(r),
                      e._relayMessages()
                    }
                  )
                )
              }
            },
            this._relayMessages = function () {
              var t = this;
              window.addEventListener(
                'message',
                (
                  function (e) {
                    if ('https://sandbox.neononepay.com' === e.origin) {
                      var n = '';
                      if (
                        'string' == typeof e.data &&
                        (n = JSON.parse(e.data)),
                        n.relayTo &&
                        n.field === t.type
                      ) (t.domElement || document).querySelector(n.relayTo).contentWindow.postMessage(e.data, t.target)
                    }
                  }
                )
              )
            },
            this._payrixApplePay = function (t, e, n) {
              var r = this;
              if (this.option.cardNetworks) {
                var o = function (t, e) {
                  if (!e) return !1;
                  var n = [
                    'AMEX',
                    'DISCOVER',
                    'JCB',
                    'MASTERCARD',
                    'VISA'
                  ],
                  r = t.filter(
                    (
                      function (t) {
                        if ('string' == typeof t && - 1 !== n.indexOf(t.toUpperCase())) return t
                      }
                    )
                  );
                  return r.map(
                    (
                      function (t) {
                        var n = t.toUpperCase();
                        return 'applepay' === e ? 'MASTERCARD' === n ? 'masterCard' : n.toLowerCase() : 'googlepay' === e ? n.toUpperCase() : void 0
                      }
                    )
                  )
                }(this.option.cardNetworks, 'applepay');
                st.supportedNetworks = o
              }
              var i = this.option &&
              this.option.buttonType ? this.option.buttonType : 'plain';
              t.innerHTML = '<style>@supports (-webkit-appearance: -apple-pay-button) { \n        apple-pay-button {\n            -apple-pay-button-style: black;\n            -apple-pay-button-type: '.concat(
                i,
                '; /* Use any supported button type. */\n            -webkit-appearance: -apple-pay-button;\n            box-sizing: border-box; \n            display: inline-block;\n            height: '
              ).concat(e, ';\n            width: ').concat(
                n,
                '\n        }\n    }\n    \n    @supports not (-webkit-appearance: -apple-pay-button) {\n        apple-pay-button {\n            display: inline-block;\n            background-size: 100% 60%;\n            background-repeat: no-repeat;\n            background-position: 50% 50%;\n            border-radius: 5px;\n            padding: 0px;\n            box-sizing: border-box;\n            min-width: '
              ).concat(n, ';\n            min-height: ').concat(e, ';\n            max-height: ').concat(
                e,
                ';\n            background-image: -webkit-named-image(apple-pay-logo-white);\n            background-color: black;\n        }\n    }</style>\n    \n    <apple-pay-button type="'
              ).concat(i, '" locale="en"></apple-pay-button>'),
              t.querySelector('apple-pay-button').addEventListener(
                'click',
                (function (t) {
                  lt(r.option.publicApiKey, r.option.merchant)
                })
              );
              var a = new CustomEvent('ready', {
                detail: {
                  eventType: 'ready',
                  type: 'applepay'
                }
              });
              window.dispatchEvent(a)
            },
            this._stripeApplePay = function () {
              var t = G(
                B().mark(
                  (
                    function t(e, n) {
                      var r,
                      o,
                      i,
                      a = this;
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2,
                                R(ct.key, {
                                  apiVersion: ct.version
                                });
                              case 2:
                                return Z = t.sent,
                                tt = Z.paymentRequest({
                                  country: this.country,
                                  currency: this.currency,
                                  total: {
                                    label: this.option.label,
                                    amount: N(this.option.price)
                                  },
                                  requestPayerName: !0,
                                  requestPayerEmail: !0,
                                  disableWallets: [
                                    'link'
                                  ]
                                }),
                                r = Z.elements(),
                                o = r.create(
                                  'paymentRequestButton',
                                  {
                                    paymentRequest: tt,
                                    style: {
                                      paymentRequestButton: {
                                        height: n
                                      }
                                    }
                                  }
                                ),
                                t.next = 8,
                                tt.canMakePayment();
                              case 8:
                                (i = t.sent) &&
                                i.applePay &&
                                (
                                  o.on(
                                    'ready',
                                    (
                                      function (t) {
                                        var e = new CustomEvent('ready', {
                                          detail: {
                                            eventType: 'ready',
                                            type: 'applepay'
                                          }
                                        });
                                        window.dispatchEvent(e)
                                      }
                                    )
                                  ),
                                  o.on(
                                    'click',
                                    (
                                      function (t) {
                                        tt.update({
                                          total: {
                                            label: a.option.label,
                                            amount: N(a.option.price)
                                          }
                                        }),
                                        dt()
                                      }
                                    )
                                  ),
                                  o.mount(e),
                                  tt.on(
                                    'cancel',
                                    (function (t) {
                                      t &&
                                      t.complete &&
                                      t.complete('fail'),
                                      ht()
                                    })
                                  ),
                                  tt.on(
                                    'paymentmethod',
                                    (
                                      function (t) {
                                        var e,
                                        n;
                                        t &&
                                        null !== (e = t.paymentMethod) &&
                                        void 0 !== e &&
                                        e.id &&
                                        (
                                          nt = null === (n = t.paymentMethod) ||
                                          void 0 === n ? void 0 : n.id,
                                          pt.event = t.paymentMethod,
                                          t.complete('success'),
                                          yt()
                                        )
                                      }
                                    )
                                  )
                                );
                              case 10:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t,
                        this
                      )
                    }
                  )
                )
              );
              return function (e, n) {
                return t.apply(this, arguments)
              }
            }(),
            this._getStripeAchPaymentSession = function () {
              var t = G(
                B().mark(
                  (
                    function t(e, n) {
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  new Promise(
                                    (
                                      function (t, r) {
                                        var o = new XMLHttpRequest,
                                        i = ''.concat(
                                          'https://api.sbx.neononepay.com',
                                          '/token/ach/verification_session?public_app_key='
                                        ).concat(e, '&merchant_id=').concat(n);
                                        o.onload = function () {
                                          var e = JSON.parse(this.responseText);
                                          if ('400' === e.statusCode || '422' === e.statusCode) {
                                            var n = e.errors;
                                            if (n) for (var o in n) {
                                              var i = ((n[o] || {
                                              }).messages || []) [0] ||
                                              '';
                                              console.warn(
                                                'NEON PAY: Unable to initiate Stripe session for ACH transactions '.concat(i)
                                              )
                                            }
                                            r(e)
                                          }
                                          t(e)
                                        },
                                        o.onerror = r,
                                        o.open('GET', i),
                                        o.send()
                                      }
                                    )
                                  )
                                );
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t
                      )
                    }
                  )
                )
              );
              return function (e, n) {
                return t.apply(this, arguments)
              }
            }(),
            this._getStripeAcssPaymentSession = function () {
              var t = G(
                B().mark(
                  (
                    function t(e, n) {
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  new Promise(
                                    (
                                      function (t, r) {
                                        var o = new XMLHttpRequest,
                                        i = ''.concat(
                                          'https://api.sbx.neononepay.com',
                                          '/token/acss_debit/verification_session?public_app_key='
                                        ).concat(e, '&merchant_id=').concat(n);
                                        o.onload = function () {
                                          var e = JSON.parse(this.responseText);
                                          if ('400' === e.statusCode || '422' === e.statusCode) {
                                            var n = e.errors;
                                            if (n) for (var o in n) {
                                              var i = ((n[o] || {
                                              }).messages || []) [0] ||
                                              '';
                                              console.warn(
                                                'NEON PAY: Unable to initiate Stripe session for ACSS transactions '.concat(i)
                                              )
                                            }
                                            r(e)
                                          }
                                          t(e)
                                        },
                                        o.onerror = r,
                                        o.open('GET', i),
                                        o.send()
                                      }
                                    )
                                  )
                                );
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t
                      )
                    }
                  )
                )
              );
              return function (e, n) {
                return t.apply(this, arguments)
              }
            }(),
            this._appendBankFields = function (t) {
              var e,
              n = this,
              r = [],
              o = 'neonpay__bank-label',
              i = 'neonpay__bank-error';
              bt.forEach(
                (
                  function (t) {
                    if (
                      - 1 !== t.processor.indexOf(n.processor) &&
                      - 1 !== t.paymentMethod.indexOf(n.type)
                    ) {
                      var e,
                      a = document.createElement('div');
                      a.className = 'NeonPay__field '.concat(t.name, '-').concat(n.sessionId);
                      var c = (n.option.customizeFields || {
                      }) [t.name];
                      if ('account_type' === t.name) {
                        e = document.createElement('select');
                        if (c && c.placeholder && 'string' == typeof c.placeholder) {
                          var s = document.createElement('option');
                          s.value = '',
                          s.text = c.placeholder,
                          s.disabled = !0,
                          e.appendChild(s)
                        }
                        [
                          {
                            label: 'Checking',
                            value: 'checking'
                          },
                          {
                            label: 'Savings',
                            value: 'savings'
                          },
                          {
                            label: 'Corporate Checking',
                            value: 'corporate-checking'
                          },
                          {
                            label: 'Corporate Savings',
                            value: 'corporate-savings'
                          }
                        ].forEach(
                          (
                            function (t) {
                              var n = document.createElement('option');
                              n.value = t.value,
                              n.text = t.label,
                              e.appendChild(n)
                            }
                          )
                        )
                      } else (e = document.createElement('input')).setAttribute('type', t.type),
                      e.setAttribute('maxLength', t.maxLength),
                      t.inputMode &&
                      e.setAttribute('inputMode', t.inputMode),
                      t.autocomplete &&
                      e.setAttribute('autocomplete', t.autocomplete),
                      e.setAttribute(
                        'placeholder',
                        c &&
                        c.placeholder &&
                        'string' == typeof c.placeholder ? c.placeholder : ''
                      );
                      e.className = wt;
                      var u = 'payframe-'.concat(t.name, '-').concat(n.sessionId);
                      e.setAttribute('id', u);
                      var p = document.createElement('label');
                      p.className = o,
                      p.setAttribute('for', u),
                      p.innerHTML = c &&
                      c.label &&
                      'string' == typeof c.label ? c.label : t.label;
                      var f = document.createElement('div');
                      f.className = i,
                      p.appendChild(e),
                      a.appendChild(p),
                      a.appendChild(f),
                      r.push(a)
                    }
                  }
                )
              );
              var a = document.createElement('style');
              a.type = 'text/css',
              a.textContent = '.NeonPay__field {\n        font-size: 14px;\n        line-height: 1.2em;\n        margin-bottom: 8px;\n      }\n      \n      .NeonPay__field button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        background-color: #0074d9;\n        border: 0;\n        border-radius: 0.25rem;\n        color: #ffffff;\n        cursor: pointer;\n        height: 2rem;\n        outline: none;\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n      }\n      \n      .NeonPay__field button:disabled, .NeonPay__field button[disabled] {\n        background-color: #98a5bb;\n        cursor: not-allowed;\n      }\n      \n      .'.concat(o, ' {\n        display: block;\n      }\n\n      .').concat(
                wt,
                ' {\n        background-color: #fff;\n        border: 1px solid #A8B7C7;\n        border-radius: 4px;\n        margin-top: 5px;\n        padding: 8px 16px;\n        display: block;\n        width: 100%;\n      }\n      \n      .'
              ).concat(
                i,
                ' {\n        color: #dc143c;\n        font-size: 0.75rem;\n        min-height: 0.75rem;\n      }\n      \n      div[class*="ach_mandate"].NeonPay__field {\n        border: 1px solid #002d41;\n        border-radius: 4px;\n        padding: 0.75rem;\n      }'
              ),
              document.head.appendChild(a),
              null !== (e = this.option) &&
              void 0 !== e &&
              e.style &&
              A(this.option.style, wt, wt),
              r.forEach((function (e) {
                t.appendChild(e)
              }))
            },
            this._appendDafButton = function () {
              var t = G(
                B().mark(
                  (
                    function t(e) {
                      var n,
                      r,
                      o = this;
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                if (this.option.dafConnectId) {
                                  t.next = 3;
                                  break
                                }
                                return console.warn(
                                  'NEONPAY: Could not set up DAF Donation button. Please confirm that the merchant is enrolled in DAFPay and has the feature enabled.'
                                ),
                                t.abrupt('return', !1);
                              case 3:
                                e.innerHTML = '<chariot-connect id="chariot" cid="'.concat(this.option.dafConnectId, '"></chariot-connect>'),
                                (n = document.createElement('script')).type = 'text/javascript',
                                n.async = !0,
                                n.src = 'https://cdn.givechariot.com/chariot-connect.umd.js',
                                document.querySelector('head').append(n),
                                (r = document.getElementById('chariot')).addEventListener(
                                  'CHARIOT_INIT',
                                  (
                                    function (t) {
                                      t.detail;
                                      var n = e.offsetHeight ? ''.concat(e.offsetHeight, 'px') : '48px';
                                      e.offsetHeight < 36 &&
                                      z('btnHeight'),
                                      e.offsetHeight > 48 &&
                                      z('btnHeight'),
                                      r.style.height = n;
                                      var i = new CustomEvent('ready', {
                                        detail: {
                                          eventType: 'ready',
                                          type: 'daf'
                                        }
                                      });
                                      window.dispatchEvent(i);
                                      var a = o.option.customerDetail ||
                                      {
                                      };
                                      o.option.customerDetail.amount &&
                                      (
                                        a = ot(
                                          o.option.customerDetail,
                                          {
                                            amount: N(o.option.customerDetail.amount)
                                          }
                                        )
                                      ),
                                      r.onDonationRequest(
                                        G(
                                          B().mark(
                                            (
                                              function t() {
                                                return B().wrap(
                                                  (
                                                    function (t) {
                                                      for (; ; ) switch (t.prev = t.next) {
                                                        case 0:
                                                          return t.abrupt('return', a);
                                                        case 1:
                                                        case 'end':
                                                          return t.stop()
                                                      }
                                                    }
                                                  ),
                                                  t
                                                )
                                              }
                                            )
                                          )
                                        )
                                      ),
                                      r.addEventListener(
                                        'CHARIOT_SUCCESS',
                                        (
                                          function (t) {
                                            var e = t.detail,
                                            n = new CustomEvent(
                                              'dafAuthorized',
                                              {
                                                detail: {
                                                  eventType: 'dafAuthorized',
                                                  type: 'daf',
                                                  content: {
                                                    workflowSessionId: e.workflowSessionId,
                                                    amount: e.grantIntent.amount,
                                                    user: e.user,
                                                    fundId: e.grantIntent.fundId,
                                                    trackingId: e.grantIntent.trackingId
                                                  }
                                                }
                                              }
                                            );
                                            window.dispatchEvent(n)
                                          }
                                        )
                                      ),
                                      r.addEventListener(
                                        'CHARIOT_EXIT',
                                        (
                                          function (t) {
                                            var e = t.detail;
                                            if (e.unintegratedGrant) {
                                              var n = new CustomEvent(
                                                'dafAuthorized',
                                                {
                                                  detail: {
                                                    eventType: 'dafAuthorized',
                                                    type: 'daf',
                                                    content: {
                                                      grantId: e.unintegratedGrant.id,
                                                      amount: e.unintegratedGrant.amount,
                                                      fundId: e.unintegratedGrant.fundId,
                                                      fundName: e.unintegratedGrant.fund ? e.unintegratedGrant.fund.name : '',
                                                      fundRedirectUrl: e.unintegratedGrant.fund ? e.unintegratedGrant.fund.redirectUrl : '',
                                                      trackingId: e.unintegratedGrant.trackingId,
                                                      user: {
                                                        firstName: e.unintegratedGrant.firstName,
                                                        lastName: e.unintegratedGrant.lastName,
                                                        email: e.unintegratedGrant.email,
                                                        note: e.unintegratedGrant.note
                                                      }
                                                    }
                                                  }
                                                }
                                              );
                                              window.dispatchEvent(n)
                                            } else {
                                              var r = new CustomEvent(
                                                'dafCanceled',
                                                {
                                                  detail: {
                                                    eventType: 'dafCanceled',
                                                    type: 'daf',
                                                    content: e.description ||
                                                    ''
                                                  }
                                                }
                                              );
                                              window.dispatchEvent(r)
                                            }
                                          }
                                        )
                                      )
                                    }
                                  )
                                );
                              case 11:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t,
                        this
                      )
                    }
                  )
                )
              );
              return function (e) {
                return t.apply(this, arguments)
              }
            }();
            var c = 'border: none !important; margin: 0 !important; width: 1px; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important;',
            s = 'border: none !important; margin: 0 !important; width: 1px; overflow: hidden !important; display: block !important; user-select: none !important; min-width: 240px !important; width: 100%; min-height: 40px !important;';
            return this.type = e,
            this.option = n,
            this.sessionId = r,
            this.processor = o,
            this.currency = i ||
            'usd',
            this.country = a ||
            'US',
            this.origin = window.location.origin,
            this.target = 'https://sandbox.neononepay.com',
            this.domElement,
            this.eventCallbacks = {},
            this
          }
        ),
        [
          {
            key: 'updateField',
            value: function () {
              var t = arguments.length > 0 &&
              void 0 !== arguments[0] ? arguments[0] : {
              },
              e = ot(this.option, t);
              this.option = e;
              var n = this.domElement ||
              document;
              if ('bankaccount' === this.type) A(this.option.style, wt, wt);
               else if (
                n.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId))
              ) {
                e.parentWidth = n.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId)).offsetWidth;
                var r = JSON.stringify({
                  action: 'update',
                  field: this.type,
                  content: e
                });
                n.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId)).contentWindow.postMessage(r, this.target)
              } else console.warn('NEONPAY: Could not update the field')
            }
          },
          {
            key: 'mount',
            value: (
              t = G(
                B().mark(
                  (
                    function t(e) {
                      var n,
                      r,
                      o,
                      i,
                      a,
                      c,
                      s,
                      u,
                      p,
                      f,
                      l,
                      d,
                      h,
                      y,
                      v = this;
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                if (
                                  it(e) ? (n = e, this.domElement = e) : 'string' == typeof e ? n = document.querySelector(e) : console.warn(
                                    'NEONPAY: Please pass either the string for a DOM selector or the DOM element itself.'
                                  ),
                                  n ||
                                  console.warn(
                                    'NEONPAY: The DOM selector '.concat(e, ' does not exist. Cannot mount the ').concat(this.type, ' field as a result.')
                                  ),
                                  this._catchHeightAdjustment(n),
                                  'daf' !== this.type
                                ) {
                                  t.next = 6;
                                  break
                                }
                                return this._appendDafButton(n),
                                t.abrupt('return');
                              case 6:
                                if ('bankaccount' !== this.type && 'acssDebit' !== this.type) {
                                  t.next = 35;
                                  break
                                }
                                if ('acssDebit' !== this.type || 'CA' === this.country) {
                                  t.next = 10;
                                  break
                                }
                                return console.warn(
                                  'NEONPAY: Unable to mount payment fields. ACSS debits are only available for Canadian merchants.'
                                ),
                                t.abrupt('return');
                              case 10:
                                if (this._appendBankFields(n), 'stripe' !== this.processor) {
                                  t.next = 32;
                                  break
                                }
                                return r = document.createElement('div'),
                                'bankaccount' === this.type ? r.className = 'NeonPay__field external_ach_token-'.concat(this.sessionId) : 'acssDebit' === this.type &&
                                (
                                  r.className = 'NeonPay__field external_acss_token-'.concat(this.sessionId)
                                ),
                                (o = document.createElement('button')).type = 'button',
                                o.innerHTML = 'Enter Bank Account Details',
                                (i = document.createElement('div')).className = 'neonpay__bank-error',
                                a = document.createElement('div'),
                                c = 'neonpay__bank-details',
                                a.className = c,
                                r.appendChild(a),
                                r.appendChild(o),
                                r.appendChild(i),
                                n.appendChild(r),
                                t.next = 29,
                                R(ct.key, {
                                  apiVersion: ct.version
                                });
                              case 29:
                                s = t.sent,
                                'bankaccount' === this.type &&
                                (
                                  (u = document.createElement('div')).className = 'NeonPay__field ach_mandate-'.concat(this.sessionId),
                                  u.style.display = 'none',
                                  u.innerHTML = '<p>By accepting, you authorize Neon Pay to debit the bank account specified above for any amount owed for charges arising from your use of Neon Pay\'s services and/or purchase of products from Neon Pay, pursuant to Neon Pay\'s website and terms, until this authorization is revoked. You may amend or cancel this authorization at any time by providing notice to Neon Pay with 30 (thirty) days notice.</p><p>If you use Neon Pay\'s services or purchase additional products periodically pursuant to Neon Pay\'s terms, you authorize Neon Pay to debit your bank account periodically. Payments that fall outside of the regular debits authorized above will only be debited after your authorization is obtained.</p>',
                                  (p = document.createElement('button')).type = 'button',
                                  p.innerHTML = 'I Accept',
                                  u.appendChild(p),
                                  n.appendChild(u),
                                  o.addEventListener(
                                    'click',
                                    function () {
                                      var t = G(
                                        B().mark(
                                          (
                                            function t(e) {
                                              var r,
                                              o,
                                              i,
                                              a,
                                              u,
                                              p,
                                              f,
                                              l;
                                              return B().wrap(
                                                (
                                                  function (t) {
                                                    for (; ; ) switch (t.prev = t.next) {
                                                      case 0:
                                                        return P(v.sessionId, n),
                                                        t.next = 3,
                                                        v._getStripeAchPaymentSession(v.option.publicApiKey, v.option.merchant);
                                                      case 3:
                                                        a = t.sent,
                                                        et = a,
                                                        u = n.querySelector('.ach_mandate-'.concat(v.sessionId)),
                                                        p = (
                                                          null === (
                                                            r = n.querySelector('#payframe-account_holder_first_name-'.concat(v.sessionId))
                                                          ) ||
                                                          void 0 === r ? void 0 : r.value
                                                        ) + ' ' + (
                                                          null === (
                                                            o = n.querySelector('#payframe-account_holder_last_name-'.concat(v.sessionId))
                                                          ) ||
                                                          void 0 === o ? void 0 : o.value
                                                        ),
                                                        f = null === (i = n.querySelector('#payframe-email-'.concat(v.sessionId))) ||
                                                        void 0 === i ? void 0 : i.value,
                                                        (
                                                          l = n.querySelector(
                                                            '.NeonPay__field.external_ach_token-'.concat(v.sessionId, ' .').concat(c)
                                                          )
                                                        ).innerHTML = '',
                                                        u.style.display = 'none',
                                                        s.collectBankAccountForSetup({
                                                          clientSecret: et.client_secret,
                                                          params: {
                                                            payment_method_type: 'us_bank_account',
                                                            payment_method_data: {
                                                              billing_details: {
                                                                name: p ||
                                                                '',
                                                                email: f ||
                                                                ''
                                                              }
                                                            }
                                                          },
                                                          expand: [
                                                            'payment_method'
                                                          ]
                                                        }).then(
                                                          (
                                                            function (t) {
                                                              var e,
                                                              r = t.setupIntent,
                                                              o = t.error;
                                                              null !== (e = r.payment_method) &&
                                                              void 0 !== e &&
                                                              e.us_bank_account &&
                                                              (
                                                                l.innerHTML = '<p>Your Account: '.concat(r.payment_method.us_bank_account.bank_name, ' ****').concat(r.payment_method.us_bank_account.last4, '</p>')
                                                              ),
                                                              r.payment_method ? n.querySelector(
                                                                '.NeonPay__field.external_ach_token-'.concat(v.sessionId, ' button')
                                                              ).innerHTML = 'Choose Another Account' : n.querySelector(
                                                                '.NeonPay__field.external_ach_token-'.concat(v.sessionId, ' button')
                                                              ).innerHTML = 'Enter Bank Account Details',
                                                              o ? (
                                                                console.error(o.message),
                                                                gt('bankaccount', {
                                                                  message: o.message
                                                                })
                                                              ) : 'requires_payment_method' === r.status ? gt('bankaccount', {
                                                                message: 'No payment method selected'
                                                              }) : 'requires_confirmation' === r.status ? u.style.display = 'block' : 'succeeded' === r.status &&
                                                              vt(),
                                                              et = r
                                                            }
                                                          )
                                                        );
                                                      case 12:
                                                      case 'end':
                                                        return t.stop()
                                                    }
                                                  }
                                                ),
                                                t
                                              )
                                            }
                                          )
                                        )
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments)
                                      }
                                    }()
                                  ),
                                  p.addEventListener(
                                    'click',
                                    (
                                      function (t) {
                                        t.preventDefault(),
                                        P(v.sessionId, n),
                                        s.confirmUsBankAccountSetup(et.client_secret).then(
                                          (
                                            function (t) {
                                              var e = t.setupIntent,
                                              n = t.error;
                                              n ? (
                                                console.error(n.message),
                                                gt('bankaccount', {
                                                  message: n.message
                                                })
                                              ) : 'requires_payment_method' === e.status ? gt('bankaccount', {
                                                message: 'No payment method selected'
                                              }) : 'succeeded' === e.status &&
                                              vt(),
                                              u.style.display = 'none',
                                              et = e
                                            }
                                          )
                                        )
                                      }
                                    )
                                  )
                                ),
                                'acssDebit' === this.type &&
                                o.addEventListener(
                                  'click',
                                  function () {
                                    var t = G(
                                      B().mark(
                                        (
                                          function t(e) {
                                            var r,
                                            o,
                                            i,
                                            a,
                                            u,
                                            p,
                                            f,
                                            l,
                                            d,
                                            h,
                                            y,
                                            m,
                                            g,
                                            b,
                                            w,
                                            _,
                                            x;
                                            return B().wrap(
                                              (
                                                function (t) {
                                                  for (; ; ) switch (t.prev = t.next) {
                                                    case 0:
                                                      if (
                                                        P(v.sessionId, n),
                                                        l = n.querySelector(
                                                          '.NeonPay__field.account_holder_first_name-'.concat(v.sessionId)
                                                        ),
                                                        d = n.querySelector(
                                                          '.NeonPay__field.account_holder_last_name-'.concat(v.sessionId)
                                                        ),
                                                        h = n.querySelector('.NeonPay__field.email-'.concat(v.sessionId)),
                                                        y = (
                                                          null == l ||
                                                          null === (r = l.querySelector('.neonpay__bank-field')) ||
                                                          void 0 === r ? void 0 : r.value
                                                        ) + ' ' + (
                                                          null == d ||
                                                          null === (o = d.querySelector('.neonpay__bank-field')) ||
                                                          void 0 === o ? void 0 : o.value
                                                        ),
                                                        m = null == h ||
                                                        null === (i = h.querySelector('.neonpay__bank-field')) ||
                                                        void 0 === i ? void 0 : i.value,
                                                        null != l &&
                                                        null !== (a = l.querySelector('.neonpay__bank-field')) &&
                                                        void 0 !== a &&
                                                        a.value ||
                                                        (
                                                          l.querySelector('.neonpay__bank-error').innerHTML = 'First name is required'
                                                        ),
                                                        null != d &&
                                                        null !== (u = d.querySelector('.neonpay__bank-field')) &&
                                                        void 0 !== u &&
                                                        u.value ||
                                                        (
                                                          d.querySelector('.neonpay__bank-error').innerHTML = 'Last name is required'
                                                        ),
                                                        m ||
                                                        (
                                                          h.querySelector('.neonpay__bank-error').innerHTML = 'Email is required'
                                                        ),
                                                        null != l &&
                                                        null !== (p = l.querySelector('.neonpay__bank-field')) &&
                                                        void 0 !== p &&
                                                        p.value &&
                                                        null != d &&
                                                        null !== (f = d.querySelector('.neonpay__bank-field')) &&
                                                        void 0 !== f &&
                                                        f.value &&
                                                        m
                                                      ) {
                                                        t.next = 11;
                                                        break
                                                      }
                                                      return t.abrupt('return');
                                                    case 11:
                                                      return t.next = 13,
                                                      v._getStripeAcssPaymentSession(v.option.publicApiKey, v.option.merchant);
                                                    case 13:
                                                      return g = t.sent,
                                                      et = g,
                                                      (
                                                        b = n.querySelector(
                                                          '.NeonPay__field.external_acss_token-'.concat(v.sessionId, ' .').concat(c)
                                                        )
                                                      ).innerHTML = '',
                                                      n.querySelector(
                                                        '.NeonPay__field.external_acss_token-'.concat(v.sessionId, ' button')
                                                      ).disabled = !0,
                                                      t.next = 20,
                                                      s.confirmAcssDebitSetup(
                                                        et.client_secret,
                                                        {
                                                          payment_method: {
                                                            billing_details: {
                                                              name: y ||
                                                              '',
                                                              email: m ||
                                                              ''
                                                            }
                                                          }
                                                        }
                                                      );
                                                    case 20:
                                                      w = t.sent,
                                                      _ = w.setupIntent,
                                                      x = w.error,
                                                      n.querySelector(
                                                        '.NeonPay__field.external_acss_token-'.concat(v.sessionId, ' button')
                                                      ).disabled = !1,
                                                      null != _ &&
                                                      _.payment_method &&
                                                      (b.innerHTML = '<p>Your account has been verified.</p>'),
                                                      null != _ &&
                                                      _.payment_method ? n.querySelector(
                                                        '.NeonPay__field.external_acss_token-'.concat(v.sessionId, ' button')
                                                      ).innerHTML = 'Choose Another Account' : n.querySelector(
                                                        '.NeonPay__field.external_acss_token-'.concat(v.sessionId, ' button')
                                                      ).innerHTML = 'Enter Bank Account Details',
                                                      x ? (
                                                        console.error(x.message),
                                                        gt('acssDebit', {
                                                          message: x.message
                                                        }),
                                                        'billing_details[name]' === x.param &&
                                                        (l.querySelector('.neonpay__bank-error').innerHTML = x.message),
                                                        'billing_details[email]' === x.param &&
                                                        (h.querySelector('.neonpay__bank-error').innerHTML = x.message)
                                                      ) : 'succeeded' === _.status &&
                                                      mt(),
                                                      et = _;
                                                    case 28:
                                                    case 'end':
                                                      return t.stop()
                                                  }
                                                }
                                              ),
                                              t
                                            )
                                          }
                                        )
                                      )
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments)
                                    }
                                  }()
                                );
                              case 32:
                                return f = new CustomEvent('ready', {
                                  detail: {
                                    eventType: 'ready',
                                    type: this.type
                                  }
                                }),
                                window.dispatchEvent(f),
                                t.abrupt('return');
                              case 35:
                                if ('applepay' !== this.type) {
                                  t.next = 57;
                                  break
                                }
                                if (window.ApplePaySession && 'https:' === window.location.protocol) {
                                  t.next = 41;
                                  break
                                }
                                return l = new CustomEvent(
                                  'applepayIncompatible',
                                  {
                                    detail: {
                                      eventType: 'applepayIncompatible',
                                      type: 'applepay',
                                      message: 'Apple Pay is not available on the current browser/device.'
                                    }
                                  }
                                ),
                                window.dispatchEvent(l),
                                console.error('Apple Pay is not available on the current browser/device.'),
                                t.abrupt('return');
                              case 41:
                                if (!this.option || !this.option.price) {
                                  t.next = 45;
                                  break
                                }
                                this.setPrice(this.option.price),
                                t.next = 47;
                                break;
                              case 45:
                                return console.error(
                                  'NEONPAY: You must provide a price total to initialize the Apple Pay button'
                                ),
                                t.abrupt('return');
                              case 47:
                                if (!this.option || !this.option.label) {
                                  t.next = 51;
                                  break
                                }
                                ut.total.label = this.option.label,
                                t.next = 53;
                                break;
                              case 51:
                                return console.error(
                                  'NEONPAY: You must provide a item label to initialize the Apple Pay button'
                                ),
                                t.abrupt('return');
                              case 53:
                                return this.option &&
                                this.option.storeName &&
                                (rt = this.option.storeName),
                                'fill' === this.option.buttonSizeMode ? (
                                  d = '100%',
                                  h = n.offsetHeight ? ''.concat(n.offsetHeight, 'px') : '40px',
                                  n.offsetHeight > 64 &&
                                  (h = '64px')
                                ) : (d = '240px', h = '40px'),
                                window.ApplePaySession.canMakePayments() ? 'stripe' === this.processor ? this._stripeApplePay(n, h) : this._payrixApplePay(n, h, d) : (
                                  y = new CustomEvent(
                                    'applepayIncompatible',
                                    {
                                      detail: {
                                        eventType: 'applepayIncompatible',
                                        type: 'applepay',
                                        message: ApplePaySession.canMakePayments()
                                      }
                                    }
                                  ),
                                  window.dispatchEvent(y),
                                  console.error('Apple Pay is not available on the current browser/device.')
                                ),
                                t.abrupt('return');
                              case 57:
                                'complete' === document.readyState ||
                                'loading' !== document.readyState &&
                                !document.documentElement.doScroll ? this._appendFieldIframe(n) : document.addEventListener('DOMContentLoaded', this._appendFieldIframe(n));
                              case 58:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t,
                        this
                      )
                    }
                  )
                )
              ),
              function (e) {
                return t.apply(this, arguments)
              }
            )
          },
          {
            key: 'unmountField',
            value: function (t) {
              var e;
              return !(
                !(e = it(t) ? t : document.querySelector(t)) ||
                !e.querySelector('.NeonPay__field')
              ) &&
              (e.removeChild(e.querySelector('.NeonPay__field')), !0)
            }
          },
          {
            key: 'on',
            value: function (t, e) {
              var n = this.eventCallbacks;
              if (
                - 1 != ['ready',
                'applepayButtonClick',
                'applepayAuthorized',
                'applepayCanceled',
                'applepayIncompatible'].indexOf(t) &&
                'applepay' === this.type
              ) return n[t] = e,
              window.addEventListener(t, (function (e) {
                return n[t](e.content)
              })),
              !0;
              if (
                - 1 != ['blur',
                'change',
                'focus',
                'ready',
                'cardbrand',
                'googlepayReady',
                'googlepayButtonReady',
                'googlepayButtonClick',
                'googlepayAuthorized',
                'googlepayIncompatible',
                'achAuthorized',
                'acssAuthorized',
                'dafAuthorized',
                'dafCanceled'].indexOf(t)
              ) {
                this.eventCallbacks[t] = e;
                var r = this.type;
                return 'bankaccount' === r ||
                'acssDebit' === r ||
                'daf' === r ? (
                  window.addEventListener(
                    t,
                    (
                      function (e) {
                        var o,
                        i = null == e ? void 0 : e.detail,
                        a = null == e ? void 0 : e.srcElement;
                        if (
                          i &&
                          n.hasOwnProperty(i.eventType) &&
                          i.eventType === t &&
                          i.type === r ||
                          null !== (o = a.className) &&
                          void 0 !== o &&
                          o.includes(wt)
                        ) return n[t]((null == i ? void 0 : i.content) || e)
                      }
                    )
                  ),
                  !0
                ) : (
                  window.addEventListener(
                    'message',
                    (
                      function (e) {
                        if ('https://sandbox.neononepay.com' === e.origin) {
                          var o = '';
                          return 'string' == typeof e.data &&
                          (o = JSON.parse(e.data)),
                          n.hasOwnProperty(o.eventType) &&
                          o.eventType === t &&
                          o.type === r ? n[o.eventType](o.content) : void 0
                        }
                      }
                    )
                  ),
                  !0
                )
              }
              return !1
            }
          },
          {
            key: 'setPrice',
            value: function (t) {
              var e = this;
              if (!t) return console.warn('NEON PAY: You must specify a price to set it'),
              !1;
              if (this.option.price = t, 'daf' === this.type) {
                var n = document.getElementById('chariot');
                console.log('daf price', this.option.price);
                return this.option.customerDetail = ot(this.option.customerDetail, {
                  amount: N(this.option.price)
                }),
                n &&
                n.onDonationRequest &&
                n.onDonationRequest(
                  G(
                    B().mark(
                      (
                        function t() {
                          return B().wrap(
                            (
                              function (t) {
                                for (; ; ) switch (t.prev = t.next) {
                                  case 0:
                                    return t.abrupt('return', e.option.customerDetail);
                                  case 1:
                                  case 'end':
                                    return t.stop()
                                }
                              }
                            ),
                            t
                          )
                        }
                      )
                    )
                  )
                ),
                this.option.customerDetail
              }
              if ('applepay' === this.type) return 'payrix' === this.processor ? (ut.total.type = 'final', ut.total.amount = t, ut) : void 0;
              var r = this.domElement ||
              document;
              if (
                r.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId))
              ) {
                var o = JSON.stringify({
                  action: 'setprice',
                  field: this.type,
                  content: {
                    price: t
                  }
                });
                r.querySelector('#payframe-'.concat(this.type, '-').concat(this.sessionId)).contentWindow.postMessage(o, this.target)
              } else console.warn('NEONPAY: Could not update the price')
            }
          }
        ]
      );
      var t
    }(),
    xt = function () {
      return X(
        (
          function t(e, n) {
            var r = arguments.length > 2 &&
            void 0 !== arguments[2] ? arguments[2] : {
            };
            V(this, t),
            this._catchWarnings = function () {
              window.addEventListener(
                'message',
                (
                  function (t) {
                    if ('https://sandbox.neononepay.com' === t.origin) {
                      var e = '';
                      'string' == typeof t.data &&
                      (e = JSON.parse(t.data)),
                      'warning' === e.eventType &&
                      (e.content || {
                      }).message &&
                      console.warn('NEONPAY: '.concat(e.content.message))
                    }
                  }
                )
              )
            },
            this._relayMessages = function () {
              var t = this;
              window.addEventListener(
                'message',
                (
                  function (e) {
                    if ('https://sandbox.neononepay.com' === e.origin) {
                      var n = '';
                      'string' == typeof e.data &&
                      (n = JSON.parse(e.data)),
                      n.relayTo &&
                      'session' === n.field &&
                      document.querySelector(n.relayTo).contentWindow.postMessage(e.data, t.target)
                    }
                  }
                )
              )
            },
            this._catchToken = function (t) {
              var e = this;
              return new Promise(
                (
                  function (n, r) {
                    window.addEventListener(
                      'message',
                      (
                        function (o) {
                          if ('https://sandbox.neononepay.com' === o.origin) {
                            var i = '',
                            a = t ||
                            document;
                            if (
                              'string' == typeof o.data &&
                              (i = JSON.parse(o.data)),
                              'token' === i.eventType
                            ) n(i.content);
                             else if (
                              'token_error' === i.eventType &&
                              (
                                r((i.content || {
                                }).error),
                                'ach' === (i.content || {
                                }).tokenType ||
                                'acss_debit' === (i.content || {
                                }).tokenType
                              )
                            ) for (var c in i.content.error) {
                              var s = a.querySelector('.NeonPay__field.'.concat(c, '-').concat(e.uid));
                              s &&
                              (
                                s.classList.add('--error'),
                                s.querySelector('.neonpay__bank-error').innerHTML = i.content.error[c].message
                              )
                            }
                          }
                        }
                      )
                    )
                  }
                )
              )
            },
            this._setupSession = function () {
              var t = this,
              e = JSON.stringify({
                action: 'setup_session',
                types: F(this.types),
                origin: this.origin,
                sessionId: this.uid,
                merchantId: this.merchant
              }),
              n = document.createElement('iframe');
              n.setAttribute('frameborder', '0'),
              n.setAttribute('allowTransparency', 'true'),
              n.setAttribute('name', this.sessionId),
              n.setAttribute('id', this.sessionId),
              n.setAttribute('sandbox', 'allow-same-origin allow-scripts'),
              n.setAttribute(
                'style',
                'border: none !important; width: 1px !important; height: 1px !important; overflow: hidden !important;'
              ),
              n.src = ''.concat(this.target, '/token?v=').concat(at);
              var r = document.createElement('div');
              r.className = 'NeonPay__session',
              r.setAttribute('style', 'width: 1px !important; height: 1px !important;'),
              r.appendChild(n),
              document.querySelector('body').appendChild(r),
              document.querySelector('#'.concat(this.sessionId)).addEventListener(
                'load',
                (
                  function (n) {
                    document.getElementById(t.sessionId).contentWindow.postMessage(e, t.target)
                  }
                )
              )
            },
            this._catchSessionReady = function () {
              var t = this;
              window.addEventListener(
                'message',
                (
                  function (e) {
                    if ('https://sandbox.neononepay.com' === e.origin) {
                      var n = '';
                      'string' == typeof e.data &&
                      (n = JSON.parse(e.data)),
                      'session-ready' === n.eventType &&
                      (t.sessionReady = !0)
                    }
                  }
                )
              )
            },
            this._sendCardTrackData = function (t, e) {
              var n = this;
              if (t && e) {
                var r = JSON.stringify({
                  action: 'card_swipe',
                  content: {
                    cardTrackData: t
                  }
                });
                return e.forEach(
                  (
                    function (t) {
                      document.getElementById('payframe-'.concat(t, '-').concat(n.uid)).contentWindow.postMessage(r, '*')
                    }
                  )
                ),
                document.getElementById(''.concat(this.sessionId)).contentWindow.postMessage(r, '*'),
                !0
              }
              return !1
            },
            this._setupSwiper = function () {
              var t = this,
              e = document.querySelector('#swipe'),
              n = this.target,
              r = this.origin,
              o = this.uid;
              if (e && this.opts.swipe) {
                var i = document.createElement('iframe');
                i.setAttribute('frameborder', '0'),
                i.setAttribute('allowTransparency', 'true'),
                i.setAttribute('name', 'payframe-swiper-'.concat(o)),
                i.setAttribute('id', 'payframe-swiper-'.concat(o)),
                i.setAttribute('sandbox', 'allow-same-origin allow-scripts'),
                i.setAttribute(
                  'style',
                  'background: rgba(0, 0, 0, 0.004); position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; display: none; margin: 0px; padding: 0px; z-index: 10000;'
                ),
                i.src = ''.concat(n, '/swiper?v=').concat(at);
                var a = document.createElement('div');
                a.className = 'NeonPay__swiper',
                a.appendChild(i),
                document.querySelector('body').appendChild(a),
                e.addEventListener(
                  'click',
                  (
                    function (t) {
                      var e = document.querySelector('#payframe-swiper-'.concat(o));
                      if (
                        e &&
                        e.setAttribute(
                          'style',
                          'background: rgba(0, 0, 0, 0.004); position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; display: block; margin: 0px; padding: 0px; z-index: 10000;'
                        ),
                        document.getElementById('payframe-swiper-'.concat(o))
                      ) {
                        var i = JSON.stringify({
                          action: 'swiper_on',
                          origin: r
                        });
                        document.getElementById('payframe-swiper-'.concat(o)).contentWindow.postMessage(i, n)
                      }
                    }
                  )
                ),
                window.addEventListener(
                  'message',
                  (
                    function (e) {
                      if ('https://sandbox.neononepay.com' === e.origin) {
                        var i,
                        a = '';
                        if (
                          'string' == typeof e.data &&
                          (a = JSON.parse(e.data)),
                          'swiper_close' === a.eventType
                        ) {
                          var c = document.querySelector('#payframe-swiper-'.concat(o));
                          c &&
                          c.setAttribute(
                            'style',
                            'background: rgba(0, 0, 0, 0.004); position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; display: none; margin: 0px; padding: 0px; z-index: 10000;'
                          );
                          var s = JSON.stringify({
                            action: 'swiper_off',
                            origin: r
                          });
                          document.getElementById('payframe-swiper-'.concat(o)).contentWindow.postMessage(s, n)
                        }
                        'swiper_success' === a.eventType &&
                        (i = a.content.cardTrackData, t._sendCardTrackData(i, t.types))
                      }
                    }
                  )
                )
              }
            },
            this._getMerchantProcessor = function (t, e) {
              return new Promise(
                (
                  function (n, r) {
                    var o = new XMLHttpRequest,
                    i = ''.concat('https://api.sbx.neononepay.com', '/merchants/').concat(e, '/processor?public_app_key=').concat(t);
                    o.onload = function () {
                      var t = JSON.parse(this.responseText);
                      if ('400' === t.statusCode || '422' === t.statusCode) {
                        var e = t.errors;
                        if (e) for (var o in e) {
                          var i = ((e[o] || {
                          }).messages || []) [0] ||
                          '';
                          console.error(
                            'NEON PAY: Unable to retrieve information about merchant '.concat(i)
                          )
                        }
                        r(t)
                      }
                      n(t)
                    },
                    o.onerror = r,
                    o.open('GET', i),
                    o.send()
                  }
                )
              )
            },
            e ||
            console.warn('NEONPAY: You must provide your public key'),
            n ||
            console.warn('NEONPAY: You must provide a merchant reference'),
            this.uid = Date.now().toString(36) + Math.random().toString(36).substr(2),
            this.sessionId = 'payframe-session-'.concat(this.uid),
            this.sessionReady = !1,
            this.publicApiKey = e,
            this.processor = null,
            this.currency = 'usd',
            this.country = 'US',
            this.merchant = n,
            this.dafConnectId = null,
            this.opts = r,
            this.origin = window.location.origin,
            this.target = 'https://sandbox.neononepay.com',
            this.fields = [],
            this.types = [],
            this._catchSessionReady(),
            this._catchWarnings(),
            this._relayMessages(),
            this._setupSession(),
            this._setupSwiper()
          }
        ),
        [
          {
            key: 'canMakePayments',
            value: (
              t = G(
                B().mark(
                  (
                    function t() {
                      var e,
                      n,
                      r,
                      o = this;
                      return B().wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0,
                                t.next = 3,
                                this._getMerchantProcessor(this.publicApiKey, this.merchant);
                              case 3:
                                return e = t.sent,
                                this.processor = e.processor,
                                this.currency = e.currency,
                                this.country = e.country,
                                this.dafConnectId = e.dafConnectId,
                                'stripe' === e.processor &&
                                e.configuration &&
                                (
                                  ct.key = null === (n = e.configuration) ||
                                  void 0 === n ? void 0 : n.stripe_public_key,
                                  ct.version = null === (r = e.configuration) ||
                                  void 0 === r ? void 0 : r.version
                                ),
                                this.fields.length > 0 &&
                                this.fields.forEach(
                                  (
                                    function (t) {
                                      t._setProcessor(o.processor),
                                      t._setCurrency(o.currency),
                                      t._setCountry(o.country),
                                      t._setDafConnectId(o.dafConnectId)
                                    }
                                  )
                                ),
                                t.abrupt('return', e);
                              case 13:
                                return t.prev = 13,
                                t.t0 = t.catch(0),
                                console.error(
                                  'NEON PAY: Unable to make payments. Please check to ensure you have the correct key and merchant ID.'
                                ),
                                t.abrupt('return', t.t0);
                              case 17:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t,
                        this,
                        [
                          [0,
                          13]
                        ]
                      )
                    }
                  )
                )
              ),
              function () {
                return t.apply(this, arguments)
              }
            )
          },
          {
            key: 'createField',
            value: function (t, e) {
              var n = ot(
                e,
                {
                  merchant: this.merchant,
                  publicApiKey: this.publicApiKey,
                  dafConnectId: this.dafConnectId
                }
              ),
              r = new _t(t, n, this.uid, this.processor, this.currency, this.country);
              return this.fields.push(r),
              this.types.push(t),
              r
            }
          },
          {
            key: 'createToken',
            value: function (t, e) {
              var n = this,
              r = this.sessionId;
              return new Promise(
                (
                  function (o, i) {
                    if (!n.sessionReady) return console.warn(
                      'NEONPAY: Cannot request a payment token because the session is not set up.'
                    ),
                    i({
                      eventType: 'session_error',
                      type: t,
                      error: {
                        type: t,
                        message: 'Cannot request a payment token because the session is not set up.'
                      }
                    }),
                    !1;
                    if ('daf' !== t) {
                      var a = {
                        action: 'tokenize',
                        type: function (t) {
                          switch (t) {
                            case 'acssDebit':
                              return 'acss_debit';
                            case 'bankaccount':
                              return 'bank_account';
                            default:
                              return 'credit_card'
                          }
                        }(t.type),
                        tokenData: {
                        }
                      },
                      c = t.domElement ||
                      document;
                      if (
                        a.tokenData.public_app_key = n.publicApiKey,
                        a.tokenData.merchant_id = n.merchant,
                        'bankaccount' === t.type ||
                        'acssDebit' === t.type
                      ) {
                        var s,
                        u,
                        p;
                        if (
                          e &&
                          (a.tokenData.country = e.country || ''),
                          bt.forEach(
                            (
                              function (t) {
                                if (P(n.uid, c), - 1 !== t.processor.indexOf(n.processor)) {
                                  var e,
                                  r = '#payframe-'.concat(t.name, '-').concat(n.uid),
                                  o = null === (e = c.querySelector(r)) ||
                                  void 0 === e ? void 0 : e.value;
                                  a.tokenData[t.name] = o ||
                                  ''
                                }
                              }
                            )
                          ),
                          'stripe' === n.processor &&
                          'succeeded' === (null === (s = et) || void 0 === s ? void 0 : s.status) &&
                          'bankaccount' === t.type
                        ) a.tokenData.external_ach_token = null === (u = et) ||
                        void 0 === u ? void 0 : u.payment_method;
                        if ('acssDebit' === t.type) a.tokenData.external_acss_token = null === (p = et) ||
                        void 0 === p ? void 0 : p.id
                      } else {
                        if (
                          - 1 == n.fields.indexOf(t) &&
                          'googlepay' !== t.type &&
                          'applepay' !== t.type
                        ) return console.warn(
                          'NEONPAY: Cannot request a payment token. Please make sure your fields are all set up'
                        ),
                        void i({
                          eventType: 'session_error',
                          type: t,
                          error: {
                            type: t,
                            message: 'Cannot request a payment token. Please make sure your fields are all set up.'
                          }
                        });
                        if (
                          a.fields = F(n.types),
                          e &&
                          (
                            a.tokenData.first_name = e.first_name ||
                            '',
                            a.tokenData.middle_name = e.middle_name ||
                            '',
                            a.tokenData.last_name = e.last_name ||
                            '',
                            a.tokenData.address_line_1 = e.address_line_1 ||
                            '',
                            a.tokenData.address_line_2 = e.address_line_2 ||
                            '',
                            a.tokenData.address_city = e.address_city ||
                            '',
                            a.tokenData.address_state = e.address_state ||
                            '',
                            a.tokenData.address_zip = e.address_zip ||
                            '',
                            a.tokenData.address_country = e.address_country ||
                            '',
                            a.tokenData.email = e.email ||
                            '',
                            a.tokenData.phone = e.phone ||
                            ''
                          ),
                          'googlepay' === t.type &&
                          (a.type = 'googlepay'),
                          'applepay' === t.type
                        ) {
                          var f;
                          if (a.type = 'applepay', a.tokenData.is_applepay = !0, !nt && pt.event) if ('stripe' === n.processor) nt = pt.event.id;
                           else nt = null === (f = pt.event.payment) ||
                          void 0 === f ? void 0 : f.token;
                          if (
                            a.tokenData.applepay_token = nt,
                            (((pt || {
                            }).event || {
                            }).payment || {
                            }).billingContact
                          ) {
                            var l = pt.event.payment.billingContact,
                            d = pt.event.payment.shippingContact;
                            a.tokenData.first_name = l.givenName,
                            a.tokenData.last_name = l.familyName,
                            a.tokenData.address_line_1 = l.addressLines[0] ||
                            '',
                            a.tokenData.address_line_2 = l.addressLines[1] ||
                            '',
                            a.tokenData.address_city = l.locality,
                            a.tokenData.address_state = l.administrativeArea,
                            a.tokenData.address_zip = l.postalCode,
                            a.tokenData.address_country = l.countryCode,
                            a.tokenData.email = d.emailAddress
                          }
                        }
                      }
                      document.getElementById(r) &&
                      document.getElementById(r).contentWindow.postMessage(JSON.stringify(a), n.target),
                      n._catchToken(c).then((function (t) {
                        o(t)
                      })).catch((function (t) {
                        i(t)
                      }))
                    } else console.log(
                      'NEONPAY: To capture information to make a DAF donation, listen for the dafAuthorized event instead.'
                    )
                  }
                )
              )
            }
          }
        ]
      );
      var t
    }();
    window.NeonPay = xt
  }()
}();
