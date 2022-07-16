(function () {
  "use strict";
  var t = {
      1735: function (t, r, n) {
        var o = n(144),
          e = n(998),
          a = n(5716),
          i = n(4291),
          s = n(1998),
          u = n(4886),
          c = n(251),
          l = n(4324),
          f = n(3059),
          v = n(1088),
          p = n(8718),
          d = n(1783),
          h = n(7953),
          y = function () {
            var t = this,
              r = t._self._c;
            return r(
              e.Z,
              [
                r(
                  a.Z,
                  { attrs: { app: "", color: "primary", dark: "" } },
                  [
                    r(h.qW, [t._v("网页版sans启动器")]),
                    r(p.Z),
                    r(
                      i.Z,
                      {
                        attrs: {
                          href: "https://github.com/SUNWUYUAN/opensans",
                          target: "_blank",
                          text: "",
                        },
                      },
                      [
                        r("span", { staticClass: "mr-2" }, [
                          t._v("在GitHub上贡献"),
                        ]),
                        r(l.Z, [t._v("mdi-open-in-new")]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                r(
                  f.Z,
                  [
                    [
                      r(
                        v.Z,
                        { attrs: { justify: "center" } },
                        [
                          r(
                            c.Z,
                            {
                              attrs: { persistent: "", "max-width": "600" },
                              scopedSlots: t._u([
                                {
                                  key: "activator",
                                  fn: function ({ on: n, attrs: o }) {
                                    return [
                                      r("div", { staticClass: "fatherdiv" }, [
                                        r(
                                          "div",
                                          { staticClass: "sondiv" },
                                          [
                                            r(
                                              i.Z,
                                              t._g(
                                                t._b(
                                                  {
                                                    attrs: {
                                                      color: "primary",
                                                      dark: "",
                                                    },
                                                  },
                                                  "v-btn",
                                                  o,
                                                  !1
                                                ),
                                                n
                                              ),
                                              [t._v(" 启动网页版sans模拟器 ")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                              model: {
                                value: t.dialog,
                                callback: function (r) {
                                  t.dialog = r;
                                },
                                expression: "dialog",
                              },
                            },
                            [
                              r(
                                s.Z,
                                [
                                  r(
                                    d.Z,
                                    { attrs: { color: "primary", dark: "" } },
                                    [t._v("启动网页版sans")]
                                  ),
                                  r("div", [
                                    r(
                                      "div",
                                      {
                                        staticStyle: {
                                          height: "300px",
                                          overflow: "auto",
                                        },
                                      },
                                      [
                                        r(
                                          i.Z,
                                          {
                                            staticClass: "ma-2",
                                            attrs: {
                                              color: "primary",
                                              href: "url1  ",
                                            },
                                          },
                                          [t._v(" sans1 ")]
                                        ),
                                        r(
                                          i.Z,
                                          {
                                            staticClass: "ma-2",
                                            attrs: {
                                              color: "primary",
                                              href: "url2  ",
                                            },
                                          },
                                          [t._v(" sans2 ")]
                                        ),
                                        r(
                                          i.Z,
                                          {
                                            staticClass: "ma-2",
                                            attrs: {
                                              color: "primary",
                                              href: "url3  ",
                                            },
                                          },
                                          [t._v(" sans3 ")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                  r(
                                    u.h7,
                                    { staticClass: "justify-end" },
                                    [
                                      r(
                                        i.Z,
                                        {
                                          attrs: { color: "primary", text: "" },
                                          on: {
                                            click: function (r) {
                                              t.dialog = !1;
                                            },
                                          },
                                        },
                                        [t._v(" 取消 ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                  ],
                  2
                ),
              ],
              1
            );
          },
          b = [],
          m = {
            data() {
              return { dialog: !1 };
            },
          },
          g = m,
          Z = n(1001),
          _ = (0, Z.Z)(g, y, b, !1, null, null, null),
          w = _.exports,
          O = n(8864);
        o.ZP.use(O.Z);
        var k = new O.Z({});
        (o.ZP.config.productionTip = !1),
          new o.ZP({ vuetify: k, render: (t) => t(w) }).$mount("#app");
      },
    },
    r = {};
  function n(o) {
    var e = r[o];
    if (void 0 !== e) return e.exports;
    var a = (r[o] = { exports: {} });
    return t[o](a, a.exports, n), a.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (r, o, e, a) {
        if (!o) {
          var i = 1 / 0;
          for (l = 0; l < t.length; l++) {
            (o = t[l][0]), (e = t[l][1]), (a = t[l][2]);
            for (var s = !0, u = 0; u < o.length; u++)
              (!1 & a || i >= a) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](o[u]);
              })
                ? o.splice(u--, 1)
                : ((s = !1), a < i && (i = a));
            if (s) {
              t.splice(l--, 1);
              var c = e();
              void 0 !== c && (r = c);
            }
          }
          return r;
        }
        a = a || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > a; l--) t[l] = t[l - 1];
        t[l] = [o, e, a];
      };
    })(),
    (function () {
      n.n = function (t) {
        var r =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return n.d(r, { a: r }), r;
      };
    })(),
    (function () {
      n.d = function (t, r) {
        for (var o in r)
          n.o(r, o) &&
            !n.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: r[o] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      };
    })(),
    (function () {
      n.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var t = { 143: 0 };
      n.O.j = function (r) {
        return 0 === t[r];
      };
      var r = function (r, o) {
          var e,
            a,
            i = o[0],
            s = o[1],
            u = o[2],
            c = 0;
          if (
            i.some(function (r) {
              return 0 !== t[r];
            })
          ) {
            for (e in s) n.o(s, e) && (n.m[e] = s[e]);
            if (u) var l = u(n);
          }
          for (r && r(o); c < i.length; c++)
            (a = i[c]), n.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return n.O(l);
        },
        o = (self["webpackChunkopensans"] = self["webpackChunkopensans"] || []);
      o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [998], function () {
    return n(1735);
  });
  o = n.O(o);
})();
//# sourceMappingURL=app.7cf8d4c6.js.map
