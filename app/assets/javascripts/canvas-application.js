function toggleDiv(t) {
    $("#" + t).toggle()
}
function updateStatus() {
    var t = new Date,
        e = t.getHours(),
        i = t.getMinutes(),
        n = t.getSeconds(),
        s = "AM";
    e > 11 && (s = "PM"),
    e > 12 && (e -= 12),
    0 == e && (e = 12),
    10 > i && (i = "0" + i),
    $("#status").html("Saved automatically at " + e + ":" + i + ":" + n + " " + s)
}!
function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length,
            i = se.type(t);
        return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function n(t, e, i) {
        if (se.isFunction(e)) return se.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return se.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (de.test(e)) return se.filter(e, t, i);
            e = se.filter(e, t)
        }
        return se.grep(t, function (t) {
            return se.inArray(t, e) >= 0 !== i
        })
    }
    function s(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = _e[t] = {};
        return se.each(t.match(ye) || [], function (t, i) {
            e[i] = !0
        }),
        e
    }
    function r() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), se.ready())
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ke.test(i) ? se.parseJSON(i) : i
                } catch (s) {}
                se.data(t, e, i)
            } else i = void 0
        }
        return i
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }
    function c(t, e, i, n) {
        if (se.acceptData(t)) {
            var s, o, r = se.expando,
                a = t.nodeType,
                l = a ? se.cache : t,
                h = a ? t[r] : t[r] && r;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[r] = V.pop() || se.guid++ : r),
            l[h] || (l[h] = a ? {} : {
                    toJSON: se.noop
                }),
            ("object" == typeof e || "function" == typeof e) && (n ? l[h] = se.extend(l[h], e) : l[h].data = se.extend(l[h].data, e)),
            o = l[h],
            n || (o.data || (o.data = {}), o = o.data),
            void 0 !== i && (o[se.camelCase(e)] = i),
            "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o,
            s
        }
    }
    function u(t, e, i) {
        if (se.acceptData(t)) {
            var n, s, o = t.nodeType,
                r = o ? se.cache : t,
                a = o ? t[se.expando] : se.expando;
            if (r[a]) {
                    if (e && (n = i ? r[a] : r[a].data)) {
                        se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")),
                        s = e.length;
                        for (; s--;) delete n[e[s]];
                        if (i ? !h(n) : !se.isEmptyObject(n)) return
                    }(i || (delete r[a].data, h(r[a]))) && (o ? se.cleanData([t], !0) : ie.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
        }
    }
    function d() {
        return !0
    }
    function p() {
        return !1
    }
    function f() {
        try {
            return fe.activeElement
        } catch (t) {}
    }
    function g(t) {
        var e = Oe.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement) for (; e.length;) i.createElement(e.pop());
        return i
    }
    function m(t, e) {
        var i, n, s = 0,
            o = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || se.nodeName(n, e) ? o.push(n) : se.merge(o, m(n, e));
        return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
    }
    function v(t) {
        Pe.test(t.type) && (t.defaultChecked = t.checked)
    }
    function b(t, e) {
        return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function _(t) {
        var e = Ue.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
    }
    function x(t, e) {
        if (1 === e.nodeType && se.hasData(t)) {
            var i, n, s, o = se._data(t),
                r = se._data(e, o),
                a = o.events;
            if (a) {
                    delete r.handle,
                    r.events = {};
                    for (i in a) for (n = 0, s = a[i].length; s > n; n++) se.event.add(e, i, a[i][n])
                }
            r.data && (r.data = se.extend({}, r.data))
        }
    }
    function C(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                s = se._data(e);
                for (n in s.events) se.removeEvent(e, n, s.handle);
                e.removeAttribute(se.expando)
            }
            "script" === i && e.text !== t.text ? (y(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Pe.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }
    function k(e, i) {
        var n, s = se(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
        return s.detach(),
        o
    }
    function T(t) {
        var e = fe,
            i = Ze[t];
        return i || (i = k(t, e), "none" !== i && i || (Ge = (Ge || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ge[0].contentWindow || Ge[0].contentDocument).document, e.write(), e.close(), i = k(t, e), Ge.detach()), Ze[t] = i),
        i
    }
    function D(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function S(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = di.length; s--;) if (e = di[s] + i, e in t) return e;
        return n
    }
    function E(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r],
        n.style && (o[r] = se._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (o[r] = se._data(n, "olddisplay", T(n.nodeName)))) : (s = Ee(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r],
        n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }
    function I(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function P(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2)"margin" === i && (r += se.css(t, i + Se[o], !0, s)),
        n ? ("content" === i && (r -= se.css(t, "padding" + Se[o], !0, s)), "margin" !== i && (r -= se.css(t, "border" + Se[o] + "Width", !0, s))) : (r += se.css(t, "padding" + Se[o], !0, s), "padding" !== i && (r += se.css(t, "border" + Se[o] + "Width", !0, s)));
        return r
    }
    function N(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = ti(t),
            r = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
                if (s = ei(t, e, o), (0 > s || null == s) && (s = t.style[e]), ni.test(s)) return s;
                n = r && (ie.boxSizingReliable() || s === t.style[e]),
                s = parseFloat(s) || 0
            }
        return s + P(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }
    function A(t, e, i, n, s) {
        return new A.prototype.init(t, e, i, n, s)
    }
    function H() {
        return setTimeout(function () {
            pi = void 0
        }),
        pi = se.now()
    }
    function M(t, e) {
        var i, n = {
            height: t
        },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Se[s],
        n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function $(t, e, i) {
        for (var n, s = (yi[e] || []).concat(yi["*"]), o = 0, r = s.length; r > o; o++) if (n = s[o].call(i, e, t)) return n
    }
    function O(t, e, i) {
        var n, s, o, r, a, l, h, c, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Ee(t),
            g = se._data(t, "fxshow");
        i.queue || (a = se._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, u.always(function () {
                u.always(function () {
                    a.unqueued--,
                    se.queue(t, "fx").length || a.empty.fire()
                })
            })),
        1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = se.css(t, "display"), c = "none" === h ? se._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function () {
                p.overflow = i.overflow[0],
                p.overflowX = i.overflow[1],
                p.overflowY = i.overflow[2]
            }));
        for (n in e) if (s = e[n], gi.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || se.style(t, n)
            } else h = void 0;
        if (se.isEmptyObject(d))"inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h);
        else {
                g ? "hidden" in g && (f = g.hidden) : g = se._data(t, "fxshow", {}),
                o && (g.hidden = !f),
                f ? se(t).show() : u.done(function () {
                    se(t).hide()
                }),
                u.done(function () {
                    var e;
                    se._removeData(t, "fxshow");
                    for (e in d) se.style(t, e, d[e])
                });
                for (n in d) r = $(f ? g[n] : 0, n, u),
                n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
    }
    function j(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = se.camelCase(i), s = e[n], o = t[i], se.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = se.cssHooks[n], r && "expand" in r) {
            o = r.expand(o),
            delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s)
        } else e[n] = s
    }
    function z(t, e, i) {
        var n, s, o = 0,
            r = bi.length,
            a = se.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = pi || H(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, r = 0, l = h.tweens.length; l > r; r++) h.tweens[r].run(o);
                return a.notifyWith(t, [h, o, i]),
                1 > o && l ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: se.extend({}, e),
                opts: se.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pi || H(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = se.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n),
                    n
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]),
                    this
                }
            }),
            c = h.props;
        for (j(c, h.opts.specialEasing); r > o; o++) if (n = bi[o].call(h, t, c, h.opts)) return n;
        return se.map(c, $, h),
        se.isFunction(h.opts.start) && h.opts.start.call(t, h),
        se.fx.timer(se.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function W(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(ye) || [];
            if (se.isFunction(i)) for (; n = o[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function L(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0,
            se.each(t[a] || [], function (t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }),
            l
        }
        var o = {},
            r = t === Ri;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }
    function F(t, e) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && se.extend(!0, t, i),
        t
    }
    function B(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (r in a) if (a[r] && a[r].test(s)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }
    function R(t, e, i, n) {
        var s, o, r, a, l, h = {},
            c = t.dataTypes.slice();
        if (c[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
                if (r = h[l + " " + o] || h["* " + o], !r) for (s in h) if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                    r === !0 ? r = h[s] : h[s] !== !0 && (o = a[0], c.unshift(a[1]));
                    break
                }
                if (r !== !0) if (r && t["throws"]) e = r(e);
                else try {
                    e = r(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + o
                    }
                }
            }
        return {
                state: "success",
                data: e
            }
    }
    function q(t, e, i, n) {
        var s;
        if (se.isArray(e)) se.each(e, function (e, s) {
            i || Ui.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== se.type(e)) n(t, e);
        else for (s in e) q(t + "[" + s + "]", e[s], i, n)
    }
    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function Q() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function U(t) {
        return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var V = [],
        X = V.slice,
        K = V.concat,
        J = V.push,
        G = V.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ie = {},
        ne = "1.11.1",
        se = function (t, e) {
            return new se.fn.init(t, e)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        re = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function (t, e) {
            return e.toUpperCase()
        };
    se.fn = se.prototype = {
            jquery: ne,
            constructor: se,
            selector: "",
            length: 0,
            toArray: function () {
                return X.call(this)
            },
            get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
            },
            pushStack: function (t) {
                var e = se.merge(this.constructor(), t);
                return e.prevObject = this,
                e.context = this.context,
                e
            },
            each: function (t, e) {
                return se.each(this, t, e)
            },
            map: function (t) {
                return this.pushStack(se.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function () {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: V.sort,
            splice: V.splice
        },
    se.extend = se.fn.extend = function () {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || se.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++) if (null != (s = arguments[a])) for (n in s) t = r[n],
            i = s[n],
            r !== i && (h && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, o = t && se.isArray(t) ? t : []) : o = t && se.isPlainObject(t) ? t : {}, r[n] = se.extend(h, o, i)) : void 0 !== i && (r[n] = i));
            return r
        },
    se.extend({
            expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === se.type(t)
            },
            isArray: Array.isArray ||
            function (t) {
                return "array" === se.type(t)
            },
            isWindow: function (t) {
                return null != t && t == t.window
            },
            isNumeric: function (t) {
                return !se.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (ie.ownLast) for (e in t) return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
            },
            globalEval: function (e) {
                e && se.trim(e) && (t.execScript ||
                function (e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function (t) {
                return t.replace(re, "ms-").replace(ae, le)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t);
                if (n) {
                        if (a) for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                        else for (o in t) if (s = e.apply(t[o], n), s === !1) break
                    } else if (a) for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else for (o in t) if (s = e.call(t[o], o, t[o]), s === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(oe, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)),
                n
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (G) return G.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                if (i !== i) for (; void 0 !== e[n];) t[s++] = e[n++];
                return t.length = s,
                t
            },
            grep: function (t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o),
                n !== a && s.push(t[o]);
                return s
            },
            map: function (t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t),
                    l = [];
                if (a) for (; r > o; o++) s = e(t[o], o, n),
                null != s && l.push(s);
                else for (o in t) s = e(t[o], o, n),
                null != s && l.push(s);
                return K.apply([], l)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, s;
                return "string" == typeof e && (s = t[e], e = t, t = s),
                se.isFunction(t) ? (i = X.call(arguments, 2), n = function () {
                    return t.apply(e || this, i.concat(X.call(arguments)))
                }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
            },
            now: function () {
                return +new Date
            },
            support: ie
        }),
    se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
    var he = function (t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, h, u, p, f, g;
                if ((e ? e.ownerDocument || e : L) !== A && N(e), e = e || A, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (M && !n) {
                    if (s = be.exec(t)) if (r = s[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(r), !o || !o.parentNode) return i;
                            if (o.id === r) return i.push(o),
                            i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && z(e, o) && o.id === r) return i.push(o),
                        i
                    } else {
                        if (s[2]) return Z.apply(i, e.getElementsByTagName(t)),
                        i;
                        if ((r = s[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)),
                        i
                    }
                    if (w.qsa && (!$ || !$.test(t))) {
                        if (p = u = W, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = T(t), (u = e.getAttribute("id")) ? p = u.replace(_e, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                            f = ye.test(t) && c(e.parentNode) || e,
                            g = h.join(",")
                        }
                        if (g) try {
                            return Z.apply(i, f.querySelectorAll(g)),
                            i
                        } catch (m) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, i, n)
            }
            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()],
                    t[i + " "] = n
                }
                var e = [];
                return t
            }
            function n(t) {
                return t[W] = !0,
                t
            }
            function s(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }
            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (n) return n;
                if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }
            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function h(t) {
                return n(function (e) {
                    return e = +e,
                    n(function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }
            function c(t) {
                return t && typeof t.getElementsByTagName !== U && t
            }
            function u() {}
            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }
            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = B++;
                return e.first ?
                function (e, i, o) {
                        for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, o)
                    } : function (e, i, r) {
                        var a, l, h = [F, o];
                        if (r) {
                            for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                        } else for (; e = e[n];) if (1 === e.nodeType || s) {
                            if (l = e[W] || (e[W] = {}), (a = l[n]) && a[0] === F && a[1] === o) return h[2] = a[2];
                            if (l[n] = h, h[2] = t(e, i, r)) return !0
                        }
                    }
            }
            function f(t) {
                return t.length > 1 ?
                function (e, i, n) {
                    for (var s = t.length; s--;) if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }
            function g(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }
            function m(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), h && e.push(a));
                return r
            }
            function v(t, e, i, s, o, r) {
                return s && !s[W] && (s = v(s)),
                o && !o[W] && (o = v(o, r)),
                n(function (n, r, a, l) {
                    var h, c, u, d = [],
                        p = [],
                        f = r.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        b = !t || !n && e ? v : m(v, d, t, a, l),
                        y = i ? o || (n ? t : f || s) ? [] : r : b;
                    if (i && i(b, y, a, l), s) for (h = m(y, p), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (y[p[c]] = !(b[p[c]] = u));
                    if (n) {
                            if (o || t) {
                                if (o) {
                                    for (h = [], c = y.length; c--;)(u = y[c]) && h.push(b[c] = u);
                                    o(null, y = [], h, l)
                                }
                                for (c = y.length; c--;)(u = y[c]) && (h = o ? ee.call(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u))
                            }
                        } else y = m(y === r ? y.splice(f, y.length) : y),
                    o ? o(null, r, y, l) : Z.apply(r, y)
                })
            }
            function b(t) {
                for (var e, i, n, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                    return t === e
                }, r, !0), h = p(function (t) {
                    return ee.call(e, t) > -1
                }, r, !0), c = [function (t, i, n) {
                    return !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
                }]; s > a; a++) if (i = x.relative[t[a].type]) c = [p(f(c), i)];
                else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[W]) {
                        for (n = ++a; s > n && !x.relative[t[n].type]; n++);
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && b(t.slice(a, n)), s > n && b(t = t.slice(n)), s > n && d(t))
                    }
                    c.push(i)
                }
                return f(c)
            }
            function y(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    r = function (n, r, a, l, h) {
                        var c, u, d, p = 0,
                            f = "0",
                            g = n && [],
                            v = [],
                            b = E,
                            y = n || o && x.find.TAG("*", h),
                            _ = F += null == b ? 1 : Math.random() || .1,
                            w = y.length;
                        for (h && (E = r !== A && r); f !== w && null != (c = y[f]); f++) {
                                if (o && c) {
                                    for (u = 0; d = t[u++];) if (d(c, r, a)) {
                                        l.push(c);
                                        break
                                    }
                                    h && (F = _)
                                }
                                s && ((c = !d && c) && p--, n && g.push(c))
                            }
                        if (p += f, s && f !== p) {
                                for (u = 0; d = i[u++];) d(g, v, r, a);
                                if (n) {
                                    if (p > 0) for (; f--;) g[f] || v[f] || (v[f] = J.call(l));
                                    v = m(v)
                                }
                                Z.apply(l, v),
                                h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                            }
                        return h && (F = _, E = b),
                        g
                    };
                return s ? n(r) : r
            }
            var _, w, x, C, k, T, D, S, E, I, P, N, A, H, M, $, O, j, z, W = "sizzle" + -new Date,
                L = t.document,
                F = 0,
                B = 0,
                R = i(),
                q = i(),
                Y = i(),
                Q = function (t, e) {
                    return t === e && (P = !0),
                    0
                },
                U = "undefined",
                V = 1 << 31,
                X = {}.hasOwnProperty,
                K = [],
                J = K.pop,
                G = K.push,
                Z = K.push,
                te = K.slice,
                ee = K.indexOf ||
            function (t) {
                    for (var e = 0, i = this.length; i > e; e++) if (this[e] === t) return e;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = se.replace("w", "w#"),
                re = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                he = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(ae),
                pe = new RegExp("^" + oe + "$"),
                fe = {
                    ID: new RegExp("^#(" + se + ")"),
                    CLASS: new RegExp("^\\.(" + se + ")"),
                    TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                _e = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                    Z.apply(K = te.call(L.childNodes), L.childNodes),
                    K[L.childNodes.length].nodeType
                } catch (Ce) {
                    Z = {
                        apply: K.length ?
                        function (t, e) {
                            G.apply(t, te.call(e))
                        } : function (t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }
            w = e.support = {},
            k = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                },
            N = e.setDocument = function (t) {
                    var e, i = t ? t.ownerDocument || t : L,
                        n = i.defaultView;
                    return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, H = i.documentElement, M = !k(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                            N()
                        }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                            N()
                        })), w.attributes = s(function (t) {
                            return t.className = "i",
                            !t.getAttribute("className")
                        }), w.getElementsByTagName = s(function (t) {
                            return t.appendChild(i.createComment("")),
                            !t.getElementsByTagName("*").length
                        }), w.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function (t) {
                            return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                            t.firstChild.className = "i",
                            2 === t.getElementsByClassName("i").length
                        }), w.getById = s(function (t) {
                            return H.appendChild(t).id = W,
                            !i.getElementsByName || !i.getElementsByName(W).length
                        }), w.getById ? (x.find.ID = function (t, e) {
                            if (typeof e.getElementById !== U && M) {
                                var i = e.getElementById(t);
                                return i && i.parentNode ? [i] : []
                            }
                        }, x.filter.ID = function (t) {
                            var e = t.replace(we, xe);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete x.find.ID, x.filter.ID = function (t) {
                            var e = t.replace(we, xe);
                            return function (t) {
                                var i = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                                return i && i.value === e
                            }
                        }), x.find.TAG = w.getElementsByTagName ?
                        function (t, e) {
                            return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
                        } : function (t, e) {
                            var i, n = [],
                                s = 0,
                                o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                                    return n
                                }
                            return o
                        }, x.find.CLASS = w.getElementsByClassName &&
                        function (t, e) {
                            return typeof e.getElementsByClassName !== U && M ? e.getElementsByClassName(t) : void 0
                        }, O = [], $ = [], (w.qsa = ve.test(i.querySelectorAll)) && (s(function (t) {
                            t.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                            t.querySelectorAll("[msallowclip^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + ie + ")"),
                            t.querySelectorAll(":checked").length || $.push(":checked")
                        }), s(function (t) {
                            var e = i.createElement("input");
                            e.setAttribute("type", "hidden"),
                            t.appendChild(e).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="),
                            t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"),
                            t.querySelectorAll("*,:x"),
                            $.push(",.*:")
                        })), (w.matchesSelector = ve.test(j = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && s(function (t) {
                            w.disconnectedMatch = j.call(t, "div"),
                            j.call(t, "[s!='']:x"),
                            O.push("!=", ae)
                        }), $ = $.length && new RegExp($.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(H.compareDocumentPosition), z = e || ve.test(H.contains) ?
                        function (t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t,
                                n = e && e.parentNode;
                            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                        } : function (t, e) {
                            if (e) for (; e = e.parentNode;) if (e === t) return !0;
                            return !1
                        }, Q = e ?
                        function (t, e) {
                            if (t === e) return P = !0,
                            0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === L && z(L, t) ? -1 : e === i || e.ownerDocument === L && z(L, e) ? 1 : I ? ee.call(I, t) - ee.call(I, e) : 0 : 4 & n ? -1 : 1)
                        } : function (t, e) {
                            if (t === e) return P = !0,
                            0;
                            var n, s = 0,
                                o = t.parentNode,
                                a = e.parentNode,
                                l = [t],
                                h = [e];
                            if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : I ? ee.call(I, t) - ee.call(I, e) : 0;
                            if (o === a) return r(t, e);
                            for (n = t; n = n.parentNode;) l.unshift(n);
                            for (n = e; n = n.parentNode;) h.unshift(n);
                            for (; l[s] === h[s];) s++;
                            return s ? r(l[s], h[s]) : l[s] === L ? -1 : h[s] === L ? 1 : 0
                        }, i) : A
                },
            e.matches = function (t, i) {
                    return e(t, null, null, i)
                },
            e.matchesSelector = function (t, i) {
                    if ((t.ownerDocument || t) !== A && N(t), i = i.replace(ue, "='$1']"), !(!w.matchesSelector || !M || O && O.test(i) || $ && $.test(i))) try {
                        var n = j.call(t, i);
                        if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (s) {}
                    return e(i, A, null, [t]).length > 0
                },
            e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== A && N(t),
                    z(t, e)
                },
            e.attr = function (t, e) {
                    (t.ownerDocument || t) !== A && N(t);
                    var i = x.attrHandle[e.toLowerCase()],
                        n = i && X.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
                    return void 0 !== n ? n : w.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                },
            e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                },
            e.uniqueSort = function (t) {
                    var e, i = [],
                        n = 0,
                        s = 0;
                    if (P = !w.detectDuplicates, I = !w.sortStable && t.slice(0), t.sort(Q), P) {
                            for (; e = t[s++];) e === t[s] && (n = i.push(s));
                            for (; n--;) t.splice(i[n], 1)
                        }
                    return I = null,
                    t
                },
            C = e.getText = function (t) {
                    var e, i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
                            } else if (3 === s || 4 === s) return t.nodeValue
                        } else for (; e = t[n++];) i += C(e);
                    return i
                },
            x = e.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(we, xe),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                        },
                        PSEUDO: function (t) {
                            var e, i = !t[6] && t[2];
                            return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(we, xe).toLowerCase();
                            return "*" === t ?
                            function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = R[t + " "];
                            return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && R(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (t, i, n) {
                            return function (s) {
                                var o = e.attr(s, t);
                                return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function (t, e, i, n, s) {
                            var o = "nth" !== t.slice(0, 3),
                                r = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === s ?
                            function (t) {
                                    return !!t.parentNode
                                } : function (e, i, l) {
                                    var h, c, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                        m = e.parentNode,
                                        v = a && e.nodeName.toLowerCase(),
                                        b = !l && !a;
                                    if (m) {
                                            if (o) {
                                                for (; g;) {
                                                    for (u = e; u = u[g];) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                                    f = g = "only" === t && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [r ? m.firstChild : m.lastChild], r && b) {
                                                for (c = m[W] || (m[W] = {}), h = c[t] || [], p = h[0] === F && h[1], d = h[0] === F && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();) if (1 === u.nodeType && ++d && u === e) {
                                                    c[t] = [F, p, d];
                                                    break
                                                }
                                            } else if (b && (h = (e[W] || (e[W] = {}))[t]) && h[0] === F) d = h[1];
                                            else for (;
                                            (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (b && ((u[W] || (u[W] = {}))[t] = [F, d]), u !== e)););
                                            return d -= s,
                                            d === n || d % n === 0 && d / n >= 0
                                        }
                                }
                        },
                        PSEUDO: function (t, i) {
                            var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[W] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                                for (var n, s = o(t, i), r = s.length; r--;) n = ee.call(t, s[r]),
                                t[n] = !(e[n] = s[r])
                            }) : function (t) {
                                return o(t, 0, s)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: n(function (t) {
                            var e = [],
                                i = [],
                                s = D(t.replace(le, "$1"));
                            return s[W] ? n(function (t, e, i, n) {
                                    for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                                }) : function (t, n, o) {
                                    return e[0] = t,
                                    s(e, null, o, i),
                                    !i.pop()
                                }
                        }),
                        has: n(function (t) {
                            return function (i) {
                                return e(t, i).length > 0
                            }
                        }),
                        contains: n(function (t) {
                            return function (e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                        }),
                        lang: n(function (t) {
                            return pe.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(we, xe).toLowerCase(),


                            function (e) {
                                var i;
                                do
                                if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(),
                                i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }),
                        target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function (t) {
                            return t === H
                        },
                        focus: function (t) {
                            return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function (t) {
                            return t.disabled === !1
                        },
                        disabled: function (t) {
                            return t.disabled === !0
                        },
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !! t.checked || "option" === e && !! t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            t.selected === !0
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function (t) {
                            return me.test(t.nodeName)
                        },
                        input: function (t) {
                            return ge.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: h(function () {
                            return [0]
                        }),
                        last: h(function (t, e) {
                            return [e - 1]
                        }),
                        eq: h(function (t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: h(function (t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: h(function (t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: h(function (t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: h(function (t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                },
            x.pseudos.nth = x.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[_] = a(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[_] = l(_);
            return u.prototype = x.filters = x.pseudos,
            x.setFilters = new u,
            T = e.tokenize = function (t, i) {
                    var n, s, o, r, a, l, h, c = q[t + " "];
                    if (c) return i ? 0 : c.slice(0);
                    for (a = t, l = [], h = x.preFilter; a;) {
                        (!n || (s = he.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])),
                        n = !1,
                        (s = ce.exec(a)) && (n = s.shift(), o.push({
                            value: n,
                            type: s[0].replace(le, " ")
                        }), a = a.slice(n.length));
                        for (r in x.filter)!(s = fe[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({
                            value: n,
                            type: r,
                            matches: s
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
                },
            D = e.compile = function (t, e) {
                    var i, n = [],
                        s = [],
                        o = Y[t + " "];
                    if (!o) {
                            for (e || (e = T(t)), i = e.length; i--;) o = b(e[i]),
                            o[W] ? n.push(o) : s.push(o);
                            o = Y(t, y(s, n)),
                            o.selector = t
                        }
                    return o
                },
            S = e.select = function (t, e, i, n) {
                    var s, o, r, a, l, h = "function" == typeof t && t,
                        u = !n && T(t = h.selector || t);
                    if (i = i || [], 1 === u.length) {
                            if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && M && x.relative[o[1].type]) {
                                if (e = (x.find.ID(r.matches[0].replace(we, xe), e) || [])[0], !e) return i;
                                h && (e = e.parentNode),
                                t = t.slice(o.shift().value.length)
                            }
                            for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);) if ((l = x.find[a]) && (n = l(r.matches[0].replace(we, xe), ye.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(s, 1), t = n.length && d(o), !t) return Z.apply(i, n),
                                i;
                                break
                            }
                        }
                    return (h || D(t, u))(n, e, !M, i, ye.test(t) && c(e.parentNode) || e),
                    i
                },
            w.sortStable = W.split("").sort(Q).join("") === W,
            w.detectDuplicates = !! P,
            N(),
            w.sortDetached = s(function (t) {
                    return 1 & t.compareDocumentPosition(A.createElement("div"))
                }),
            s(function (t) {
                    return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, i) {
                    return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }),
            w.attributes && s(function (t) {
                    return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }),
            s(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(ie, function (t, e, i) {
                    var n;
                    return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }),
            e
        }(t);
    se.find = he,
    se.expr = he.selectors,
    se.expr[":"] = se.expr.pseudos,
    se.unique = he.uniqueSort,
    se.text = he.getText,
    se.isXMLDoc = he.isXML,
    se.contains = he.contains;
    var ce = se.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    se.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        },
    se.fn.extend({
            find: function (t) {
                var e, i = [],
                    n = this,
                    s = n.length;
                if ("string" != typeof t) return this.pushStack(se(t).filter(function () {
                        for (e = 0; s > e; e++) if (se.contains(n[e], this)) return !0
                    }));
                for (e = 0; s > e; e++) se.find(t, n[e], i);
                return i = this.pushStack(s > 1 ? se.unique(i) : i),
                i.selector = this.selector ? this.selector + " " + t : t,
                i
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
            }
        });
    var pe, fe = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = se.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(i[1]) && se.isPlainObject(e)) for (i in e) se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(t);
                    this.length = 1,
                    this[0] = n
                }
                return this.context = fe,
                this.selector = t,
                this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
        };
    me.prototype = se.fn,
    pe = se(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    se.extend({
            dir: function (t, e, i) {
                for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) 1 === s.nodeType && n.push(s),
                s = s[e];
                return n
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }),
    se.fn.extend({
            has: function (t) {
                var e, i = se(t, this),
                    n = i.length;
                return this.filter(function () {
                        for (e = 0; n > e; e++) if (se.contains(this, i[e])) return !0
                    })
            },
            closest: function (t, e) {
                for (var i, n = 0, s = this.length, o = [], r = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                    o.push(i);
                    break
                }
                return this.pushStack(o.length > 1 ? se.unique(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
    se.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return se.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return se.dir(t, "parentNode", i)
            },
            next: function (t) {
                return s(t, "nextSibling")
            },
            prev: function (t) {
                return s(t, "previousSibling")
            },
            nextAll: function (t) {
                return se.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return se.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return se.dir(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return se.dir(t, "previousSibling", i)
            },
            siblings: function (t) {
                return se.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return se.sibling(t.firstChild)
            },
            contents: function (t) {
                return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
            }
        }, function (t, e) {
            se.fn[t] = function (i, n) {
                var s = se.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (s = se.filter(n, s)),
                this.length > 1 && (be[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())),
                this.pushStack(s)
            }
        });
    var ye = /\S+/g,
        _e = {};
    se.Callbacks = function (t) {
            t = "string" == typeof t ? _e[t] || o(t) : se.extend({}, t);
            var e, i, n, s, r, a, l = [],
                h = !t.once && [],
                c = function (o) {
                    for (i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++) if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                    e = !1,
                    l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
                },
                u = {
                    add: function () {
                        if (l) {
                            var n = l.length;
                            !
                            function o(e) {
                                se.each(e, function (e, i) {
                                    var n = se.type(i);
                                    "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments),
                            e ? s = l.length : i && (a = n, c(i))
                        }
                        return this
                    },
                    remove: function () {
                        return l && se.each(arguments, function (t, i) {
                            for (var n;
                            (n = se.inArray(i, l, n)) > -1;) l.splice(n, 1),
                            e && (s >= n && s--, r >= n && r--)
                        }),
                        this
                    },
                    has: function (t) {
                        return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [],
                        s = 0,
                        this
                    },
                    disable: function () {
                        return l = h = i = void 0,
                        this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return h = void 0,
                        i || u.disable(),
                        this
                    },
                    locked: function () {
                        return !h
                    },
                    fireWith: function (t, i) {
                        return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)),
                        this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments),
                        this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return u
        },
    se.extend({
            Deferred: function (t) {
                var e = [
                    ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", se.Callbacks("memory")]
                ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments),
                            this
                        },
                        then: function () {
                            var t = arguments;
                            return se.Deferred(function (i) {
                                se.each(e, function (e, o) {
                                    var r = se.isFunction(t[e]) && t[e];
                                    s[o[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }),
                                t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? se.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then,
                se.each(e, function (t, o) {
                        var r = o[2],
                            a = o[3];
                        n[o[1]] = r.add,
                        a && r.add(function () {
                                i = a
                            }, e[1 ^ t][2].disable, e[2][2].lock),
                        s[o[0]] = function () {
                                return s[o[0] + "With"](this === s ? n : this, arguments),
                                this
                            },
                        s[o[0] + "With"] = r.fireWith
                    }),
                n.promise(s),
                t && t.call(s, s),
                s
            },
            when: function (t) {
                var e, i, n, s = 0,
                    o = X.call(arguments),
                    r = o.length,
                    a = 1 !== r || t && se.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : se.Deferred(),
                    h = function (t, i, n) {
                        return function (s) {
                            i[t] = this,
                            n[t] = arguments.length > 1 ? X.call(arguments) : s,
                            n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1) for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --a;
                return a || l.resolveWith(n, o),
                l.promise()
            }
        });
    var we;
    se.fn.ready = function (t) {
            return se.ready.promise().done(t),
            this
        },
    se.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? se.readyWait++ : se.ready(!0)
            },
            ready: function (t) {
                if (t === !0 ? !--se.readyWait : !se.isReady) {
                    if (!fe.body) return setTimeout(se.ready);
                    se.isReady = !0,
                    t !== !0 && --se.readyWait > 0 || (we.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
                }
            }
        }),
    se.ready.promise = function (e) {
            if (!we) if (we = se.Deferred(), "complete" === fe.readyState) setTimeout(se.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1),
            t.addEventListener("load", a, !1);
            else {
                fe.attachEvent("onreadystatechange", a),
                t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && fe.documentElement
                } catch (n) {}
                i && i.doScroll && !
                function s() {
                    if (!se.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        r(),
                        se.ready()
                    }
                }()
            }
            return we.promise(e)
        };
    var xe, Ce = "undefined";
    for (xe in se(ie)) break;
    ie.ownLast = "0" !== xe,
    ie.inlineBlockNeedsLayout = !1,
    se(function () {
            var t, e, i, n;
            i = fe.getElementsByTagName("body")[0],
            i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),


    function () {
            var t = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(),
    se.acceptData = function (t) {
            var e = se.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    se.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando],
                !! t && !h(t)
            },
            data: function (t, e, i) {
                return c(t, e, i)
            },
            removeData: function (t, e) {
                return u(t, e)
            },
            _data: function (t, e, i) {
                return c(t, e, i, !0)
            },
            _removeData: function (t, e) {
                return u(t, e, !0)
            }
        }),
    se.fn.extend({
            data: function (t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                        if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                            for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(o, n, s[n])));
                            se._data(o, "parsedAttrs", !0)
                        }
                        return s
                    }
                return "object" == typeof t ? this.each(function () {
                        se.data(this, t)
                    }) : arguments.length > 1 ? this.each(function () {
                        se.data(this, t, e)
                    }) : o ? l(o, t, se.data(o, t)) : void 0
            },
            removeData: function (t) {
                return this.each(function () {
                    se.removeData(this, t)
                })
            }
        }),
    se.extend({
            queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = se.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = se._queueHooks(t, e),
                    r = function () {
                        se.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--),
                s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)),
                !n && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return se._data(t, i) || se._data(t, i, {
                    empty: se.Callbacks("once memory").add(function () {
                        se._removeData(t, e + "queue"),
                        se._removeData(t, i)
                    })
                })
            }
        }),
    se.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--),
                arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = se.queue(this, t, e);
                    se._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    se.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    s = se.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = se._data(o[r], t + "queueHooks"),
                i && i.empty && (n++, i.empty.add(a));
                return a(),
                s.promise(e)
            }
        });
    var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ee = function (t, e) {
            return t = e || t,
            "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
        },
        Ie = se.access = function (t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === se.type(i)) {
                    s = !0;
                    for (a in i) se.access(t, e, a, i[a], !0, o, r)
                } else if (void 0 !== n && (s = !0, se.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                    return h.call(se(t), i)
                })), e)) for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        },
        Pe = /^(?:checkbox|radio)$/i;
    !
    function () {
            var t = fe.createElement("input"),
                e = fe.createElement("div"),
                i = fe.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !! e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    ie.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (n) {
                        ie.deleteExpando = !1
                    }
                }
        }(),


    function () {
            var e, i, n = fe.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e,
            (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
    var Ne = /^(?:input|select|textarea)$/i,
        Ae = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        $e = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
            global: {},
            add: function (t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = se._data(t);
                if (m) {
                    for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                        return typeof se === Ce || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(ye) || [""], a = e.length; a--;) o = $e.exec(e[a]) || [],
                    p = g = o[1],
                    f = (o[2] || "").split(".").sort(),
                    p && (h = se.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = se.event.special[p] || {}, u = se.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && se.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), se.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = se.hasData(t) && se._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(ye) || [""], h = e.length; h--;) if (a = $e.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = se.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o],
                        !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                        l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || se.removeEvent(t, p, m.handle), delete c[p])
                    } else for (p in c) se.event.remove(t, p + e[h], i, n, !0);
                    se.isEmptyObject(c) && (delete m.handle, se._removeData(t, "events"))
                }
            },
            trigger: function (e, i, n, s) {
                var o, r, a, l, h, c, u, d = [n || fe],
                    p = ee.call(e, "type") ? e.type : e,
                    f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Me.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), h = se.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                        if (!s && !h.noBubble && !se.isWindow(n)) {
                            for (l = h.delegateType || p, Me.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                            c = a;
                            c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                        }
                        for (u = 0;
                        (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : h.bindType || p,
                        o = (se._data(a, "events") || {})[e.type] && se._data(a, "handle"),
                        o && o.apply(a, i),
                        o = r && a[r],
                        o && o.apply && se.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                        if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && se.acceptData(n) && r && n[p] && !se.isWindow(n)) {
                            c = n[r],
                            c && (n[r] = null),
                            se.event.triggered = p;
                            try {
                                n[p]()
                            } catch (g) {}
                            se.event.triggered = void 0,
                            c && (n[r] = c)
                        }
                        return e.result
                    }
            },
            dispatch: function (t) {
                t = se.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = X.call(arguments),
                    l = (se._data(this, "events") || {})[t.type] || [],
                    h = se.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                        for (r = se.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, o = 0;
                        (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return h.postDispatch && h.postDispatch.call(this, t),
                        t.result
                    }
            },
            handlers: function (t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; a > o; o++) n = e[o],
                        i = n.selector + " ",
                        void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length),
                        s[i] && s.push(n);
                        s.length && r.push({
                            elem: l,
                            handlers: s
                        })
                    }
                return a < e.length && r.push({
                        elem: this,
                        handlers: e.slice(a)
                    }),
                r
            },
            fix: function (t) {
                if (t[se.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = He.test(s) ? this.mouseHooks : Ae.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new se.Event(o), e = n.length; e--;) i = n[e],
                t[i] = o[i];
                return t.target || (t.target = o.srcElement || fe),
                3 === t.target.nodeType && (t.target = t.target.parentNode),
                t.metaKey = !! t.metaKey,
                r.filter ? r.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                    t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, s, o = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                    !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r),
                    t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== f() && this.focus) try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (t) {
                        return se.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var s = se.extend(new se.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s),
                s.isDefaultPrevented() && i.preventDefault()
            }
        },
    se.removeEvent = fe.removeEventListener ?
    function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function (t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === Ce && (t[n] = null), t.detachEvent(n, i))
        },
    se.Event = function (t, e) {
            return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
        },
    se.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = d,
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = d,
                t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d,
                t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
    se.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            se.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !se.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e),
                    i
                }
            }
        }),
    ie.submitBubbles || (se.event.special.submit = {
            setup: function () {
                return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target,
                        i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                    i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function (t) {
                            t._submit_bubble = !0
                        }), se._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function () {
                return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
            }
        }),
    ie.changeBubbles || (se.event.special.change = {
            setup: function () {
                return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), se.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1),
                    se.event.simulate("change", this, t, !0)
                })), !1) : void se.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Ne.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                    }), se._data(e, "changeBubbles", !0))
                })
            },
            handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return se.event.remove(this, "._change"),
                !Ne.test(this.nodeName)
            }
        }),
    ie.focusinBubbles || se.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                se.event.simulate(e, t.target, se.event.fix(t), !0)
            };
            se.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        s = se._data(n, e);
                    s || n.addEventListener(t, i, !0),
                    se._data(n, e, (s || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        s = se._data(n, e) - 1;
                    s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
                }
            }
        }),
    se.fn.extend({
            on: function (t, e, i, n, s) {
                var o, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
                else if (!n) return this;
                return 1 === s && (r = n, n = function (t) {
                    return se().off(t),
                    r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = se.guid++)),
                this.each(function () {
                    se.event.add(this, t, n, i, e)
                })
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
                se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0),
                i === !1 && (i = p),
                this.each(function () {
                    se.event.remove(this, t, i, e)
                })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    se.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                return i ? se.event.trigger(t, e, i, !0) : void 0
            }
        });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        je = / jQuery\d+="(?:null|\d+)"/g,
        ze = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"),
        We = /^\s+/,
        Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fe = /<([\w:]+)/,
        Be = /<tbody/i,
        Re = /<|&#?\w+;/,
        qe = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = g(fe),
        Je = Ke.appendChild(fe.createElement("div"));
    Xe.optgroup = Xe.option,
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
    Xe.th = Xe.td,
    se.extend({
            clone: function (t, e, i) {
                var n, s, o, r, a, l = se.contains(t.ownerDocument, t);
                if (ie.html5Clone || se.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(o = Je.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t))) for (n = m(o), a = m(t), r = 0; null != (s = a[r]); ++r) n[r] && C(s, n[r]);
                if (e) if (i) for (a = a || m(t), n = n || m(o), r = 0; null != (s = a[r]); r++) x(s, n[r]);
                else x(t, o);
                return n = m(o, "script"),
                n.length > 0 && w(n, !l && m(t, "script")),
                n = a = s = null,
                o
            },
            buildFragment: function (t, e, i, n) {
                for (var s, o, r, a, l, h, c, u = t.length, d = g(e), p = [], f = 0; u > f; f++) if (o = t[f], o || 0 === o) if ("object" === se.type(o)) se.merge(p, o.nodeType ? [o] : o);
                else if (Re.test(o)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Fe.exec(o) || ["", ""])[1].toLowerCase(), c = Xe[l] || Xe._default, a.innerHTML = c[1] + o.replace(Le, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                    if (!ie.leadingWhitespace && We.test(o) && p.push(e.createTextNode(We.exec(o)[0])), !ie.tbody) for (o = "table" !== l || Be.test(o) ? "<table>" !== c[1] || Be.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) se.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                    for (se.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = d.lastChild
                } else p.push(e.createTextNode(o));
                for (a && d.removeChild(a), ie.appendChecked || se.grep(m(p, "input"), v), f = 0; o = p[f++];) if ((!n || -1 === se.inArray(o, n)) && (r = se.contains(o.ownerDocument, o), a = m(d.appendChild(o), "script"), r && w(a), i)) for (s = 0; o = a[s++];) Qe.test(o.type || "") && i.push(o);
                return a = null,
                d
            },
            cleanData: function (t, e) {
                for (var i, n, s, o, r = 0, a = se.expando, l = se.cache, h = ie.deleteExpando, c = se.event.special; null != (i = t[r]); r++) if ((e || se.acceptData(i)) && (s = i[a], o = s && l[s])) {
                    if (o.events) for (n in o.events) c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== Ce ? i.removeAttribute(a) : i[a] = null, V.push(s))
                }
            }
        }),
    se.fn.extend({
            text: function (t) {
                return Ie(this, function (t) {
                    return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || se.cleanData(m(i)),
                i.parentNode && (e && se.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && se.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && se.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function (t, e) {
                return t = null == t ? !1 : t,
                e = null == e ? t : e,
                this.map(function () {
                    return se.clone(this, t, e)
                })
            },
            html: function (t) {
                return Ie(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(je, "") : void 0;
                    if (!("string" != typeof t || qe.test(t) || !ie.htmlSerialize && ze.test(t) || !ie.leadingWhitespace && We.test(t) || Xe[(Fe.exec(t) || ["", ""])[1].toLowerCase()])) {
                            t = t.replace(Le, "<$1></$2>");
                            try {
                                for (; n > i; i++) e = this[i] || {},
                                1 === e.nodeType && (se.cleanData(m(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (s) {}
                        }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode,
                    se.cleanData(m(this)),
                    t && t.replaceChild(e, this)
                }),
                t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (t, e) {
                t = K.apply([], t);
                var i, n, s, o, r, a, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    d = t[0],
                    p = se.isFunction(d);
                if (p || h > 1 && "string" == typeof d && !ie.checkClone && Ye.test(d)) return this.each(function (i) {
                        var n = c.eq(i);
                        p && (t[0] = d.call(this, i, n.html())),
                        n.domManip(t, e)
                    });
                if (h && (a = se.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                        for (o = se.map(m(a, "script"), y), s = o.length; h > l; l++) n = a,
                        l !== u && (n = se.clone(n, !0, !0), s && se.merge(o, m(n, "script"))),
                        e.call(this[l], n, l);
                        if (s) for (r = o[o.length - 1].ownerDocument, se.map(o, _), l = 0; s > l; l++) n = o[l],
                        Qe.test(n.type || "") && !se._data(n, "globalEval") && se.contains(r, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ve, "")));
                        a = i = null
                    }
                return this
            }
        }),
    se.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            se.fn[t] = function (t) {
                for (var i, n = 0, s = [], o = se(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0),
                se(o[n])[e](i),
                J.apply(s, i.get());
                return this.pushStack(s)
            }
        });
    var Ge, Ze = {};
    !
    function () {
            var t;
            ie.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = fe.getElementsByTagName("body")[0],
                i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
    var ti, ei, ii = /^margin/,
        ni = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
        si = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ei = function (t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || ti(t),
            r = i ? i.getPropertyValue(e) || i[e] : void 0,
            i && ("" !== r || se.contains(t.ownerDocument, t) || (r = se.style(t, e)), ni.test(r) && ii.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)),
            void 0 === r ? r : r + ""
        }) : fe.documentElement.currentStyle && (ti = function (t) {
            return t.currentStyle
        }, ei = function (t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || ti(t),
            r = i ? i[e] : void 0,
            null == r && a && a[e] && (r = a[e]),
            ni.test(r) && !si.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)),
            void 0 === r ? r : r + "" || "auto"
        }),


    function () {
            function e() {
                var e, i, n, s;
                i = fe.getElementsByTagName("body")[0],
                i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, o, r, a, l;
            i = fe.createElement("div"),
            i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            s = i.getElementsByTagName("a")[0],
            n = s && s.style,
            n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !! n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
                reliableHiddenOffsets: function () {
                    return null == a && e(),
                    a
                },
                boxSizingReliable: function () {
                    return null == r && e(),
                    r
                },
                pixelPosition: function () {
                    return null == o && e(),
                    o
                },
                reliableMarginRight: function () {
                    return null == l && e(),
                    l
                }
            }))
        }(),
    se.swap = function (t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o],
            t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        };
    var oi = /alpha\([^)]*\)/i,
        ri = /opacity\s*=\s*([^)]*)/,
        ai = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + De + ")(.*)$", "i"),
        hi = new RegExp("^([+-])=(" + De + ")", "i"),
        ci = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ui = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        di = ["Webkit", "O", "Moz", "ms"];
    se.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = ei(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = se.camelCase(e),
                        l = t.style;
                    if (e = se.cssProps[a] || (se.cssProps[a] = S(l, a)), r = se.cssHooks[e] || se.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e];
                    if (o = typeof i, "string" === o && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || se.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                            l[e] = i
                        } catch (h) {}
                }
            },
            css: function (t, e, i, n) {
                var s, o, r, a = se.camelCase(e);
                return e = se.cssProps[a] || (se.cssProps[a] = S(t.style, a)),
                r = se.cssHooks[e] || se.cssHooks[a],
                r && "get" in r && (o = r.get(t, !0, i)),
                void 0 === o && (o = ei(t, e, n)),
                "normal" === o && e in ui && (o = ui[e]),
                "" === i || i ? (s = parseFloat(o), i === !0 || se.isNumeric(s) ? s || 0 : o) : o
            }
        }),
    se.each(["height", "width"], function (t, e) {
            se.cssHooks[e] = {
                get: function (t, i, n) {
                    return i ? ai.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci, function () {
                        return N(t, e, n)
                    }) : N(t, e, n) : void 0
                },
                set: function (t, i, n) {
                    var s = n && ti(t);
                    return I(t, i, n ? P(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }),
    ie.opacity || (se.cssHooks.opacity = {
            get: function (t, e) {
                return ri.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1,
                (e >= 1 || "" === e) && "" === se.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
            }
        }),
    se.cssHooks.marginRight = D(ie.reliableMarginRight, function (t, e) {
            return e ? se.swap(t, {
                display: "inline-block"
            }, ei, [t, "marginRight"]) : void 0
        }),
    se.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            se.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Se[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            },
            ii.test(t) || (se.cssHooks[t + e].set = I)
        }),
    se.fn.extend({
            css: function (t, e) {
                return Ie(this, function (t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (se.isArray(e)) {
                            for (n = ti(t), s = e.length; s > r; r++) o[e[r]] = se.css(t, e[r], !1, n);
                            return o
                        }
                    return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return E(this, !0)
            },
            hide: function () {
                return E(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Ee(this) ? se(this).show() : se(this).hide()
                })
            }
        }),
    se.Tween = A,
    A.prototype = {
            constructor: A,
            init: function (t, e, i, n, s, o) {
                this.elem = t,
                this.prop = i,
                this.easing = s || "swing",
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = n,
                this.unit = o || (se.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = A.propHooks[this.prop];
                return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : A.propHooks._default.set(this),
                this
            }
        },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function (t) {
                    se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
    se.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return.5 - Math.cos(t * Math.PI) / 2
            }
        },
    se.fx = A.prototype.init,
    se.fx.step = {};
    var pi, fi, gi = /^(?:toggle|show|hide)$/,
        mi = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        bi = [O],
        yi = {
            "*": [function (t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = mi.exec(e),
                    o = s && s[3] || (se.cssNumber[t] ? "" : "px"),
                    r = (se.cssNumber[t] || "px" !== o && +n) && mi.exec(se.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== o) {
                        o = o || r[3],
                        s = s || [],
                        r = +n || 1;
                        do a = a || ".5",
                        r /= a,
                        se.style(i.elem, t, r + o);
                        while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]),
                i
            }]
        };
    se.Animation = se.extend(z, {
            tweener: function (t, e) {
                se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n],
                yi[i] = yi[i] || [],
                yi[i].unshift(e)
            },
            prefilter: function (t, e) {
                e ? bi.unshift(t) : bi.push(t)
            }
        }),
    se.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? se.extend({}, t) : {
                complete: i || !i && e || se.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !se.isFunction(e) && e
            };
            return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default,
            (null == n.queue || n.queue === !0) && (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function () {
                se.isFunction(n.old) && n.old.call(this),
                n.queue && se.dequeue(this, n.queue)
            },
            n
        },
    se.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (t, e, i, n) {
                var s = se.isEmptyObject(t),
                    o = se.speed(e, i, n),
                    r = function () {
                        var e = z(this, se.extend({}, t), o);
                        (s || se._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r,
                s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop,
                    e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0),
                e && t !== !1 && this.queue(t || "fx", []),
                this.each(function () {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = se.timers,
                        r = se._data(this);
                    if (s) r[s] && r[s].stop && n(r[s]);
                    else for (s in r) r[s] && r[s].stop && vi.test(s) && n(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && se.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"),
                this.each(function () {
                    var e, i = se._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = se.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }),
    se.each(["toggle", "show", "hide"], function (t, e) {
            var i = se.fn[e];
            se.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(M(e, !0), t, n, s)
            }
        }),
    se.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            se.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }),
    se.timers = [],
    se.fx.tick = function () {
            var t, e = se.timers,
                i = 0;
            for (pi = se.now(); i < e.length; i++) t = e[i],
            t() || e[i] !== t || e.splice(i--, 1);
            e.length || se.fx.stop(),
            pi = void 0
        },
    se.fx.timer = function (t) {
            se.timers.push(t),
            t() ? se.fx.start() : se.timers.pop()
        },
    se.fx.interval = 13,
    se.fx.start = function () {
            fi || (fi = setInterval(se.fx.tick, se.fx.interval))
        },
    se.fx.stop = function () {
            clearInterval(fi),
            fi = null
        },
    se.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
    se.fn.delay = function (t, e) {
            return t = se.fx ? se.fx.speeds[t] || t : t,
            e = e || "fx",
            this.queue(e, function (e, i) {
                var n = setTimeout(e, t);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },


    function () {
            var t, e, i, n, s;
            e = fe.createElement("div"),
            e.setAttribute("className", "t"),
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            n = e.getElementsByTagName("a")[0],
            i = fe.createElement("select"),
            s = i.appendChild(fe.createElement("option")),
            t = e.getElementsByTagName("input")[0],
            n.style.cssText = "top:1px",
            ie.getSetAttribute = "t" !== e.className,
            ie.style = /top/.test(n.getAttribute("style")),
            ie.hrefNormalized = "/a" === n.getAttribute("href"),
            ie.checkOn = !! t.value,
            ie.optSelected = s.selected,
            ie.enctype = !! fe.createElement("form").enctype,
            i.disabled = !0,
            ie.optDisabled = !s.disabled,
            t = fe.createElement("input"),
            t.setAttribute("value", ""),
            ie.input = "" === t.getAttribute("value"),
            t.value = "t",
            t.setAttribute("type", "radio"),
            ie.radioValue = "t" === t.value
        }();
    var _i = /\r/g;
    se.fn.extend({
            val: function (t) {
                var e, i, n, s = this[0]; {
                    if (arguments.length) return n = se.isFunction(t),
                    this.each(function (i) {
                        var s;
                        1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function (t) {
                            return null == t ? "" : t + ""
                        })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()],
                    e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
                }
            }
        }),
    se.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = se.find.attr(t, "value");
                        return null != e ? e : se.trim(se.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++) if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                            if (e = se(i).val(), o) return e;
                            r.push(e)
                        }
                        return r
                    },
                    set: function (t, e) {
                        for (var i, n, s = t.options, o = se.makeArray(e), r = s.length; r--;) if (n = s[r], se.inArray(se.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                        return i || (t.selectedIndex = -1),
                        s
                    }
                }
            }
        }),
    se.each(["radio", "checkbox"], function () {
            se.valHooks[this] = {
                set: function (t, e) {
                    return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
                }
            },
            ie.checkOn || (se.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
    var wi, xi, Ci = se.expr.attrHandle,
        ki = /^(?:checked|selected)$/i,
        Ti = ie.getSetAttribute,
        Di = ie.input;
    se.fn.extend({
            attr: function (t, e) {
                return Ie(this, se.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    se.removeAttr(this, t)
                })
            }
        }),
    se.extend({
            attr: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ce ? se.prop(t, e, i) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? xi : wi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
            },
            removeAttr: function (t, e) {
                var i, n, s = 0,
                    o = e && e.match(ye);
                if (o && 1 === t.nodeType) for (; i = o[s++];) n = se.propFix[i] || i,
                se.expr.match.bool.test(i) ? Di && Ti || !ki.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""),
                t.removeAttribute(Ti ? i : n)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                            e
                        }
                    }
                }
            }
        }),
    xi = {
            set: function (t, e, i) {
                return e === !1 ? se.removeAttr(t, i) : Di && Ti || !ki.test(i) ? t.setAttribute(!Ti && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0,
                i
            }
        },
    se.each(se.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Ci[e] || se.find.attr;
            Ci[e] = Di && Ti || !ki.test(e) ?
            function (t, e, n) {
                var s, o;
                return n || (o = Ci[e], Ci[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ci[e] = o),
                s
            } : function (t, e, i) {
                return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }),
    Di && Ti || (se.attrHooks.value = {
            set: function (t, e, i) {
                return se.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
            }
        }),
    Ti || (wi = {
            set: function (t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
                n.value = e += "",
                "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, Ci.id = Ci.name = Ci.coords = function (t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, se.valHooks.button = {
            get: function (t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: wi.set
        }, se.attrHooks.contenteditable = {
            set: function (t, e, i) {
                wi.set(t, "" === e ? !1 : e, i)
            }
        }, se.each(["width", "height"], function (t, e) {
            se.attrHooks[e] = {
                set: function (t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })),
    ie.style || (se.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
    var Si = /^(?:input|select|textarea|button|object)$/i,
        Ei = /^(?:a|area)$/i;
    se.fn.extend({
            prop: function (t, e) {
                return Ie(this, se.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return t = se.propFix[t] || t,
                this.each(function () {
                    try {
                        this[t] = void 0,
                        delete this[t]
                    } catch (e) {}
                })
            }
        }),
    se.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (t, e, i) {
                var n, s, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !se.isXMLDoc(t),
                o && (e = se.propFix[e] || e, s = se.propHooks[e]),
                void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = se.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }),
    ie.hrefNormalized || se.each(["href", "src"], function (t, e) {
            se.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }),
    ie.optSelected || (se.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
                null
            }
        }),
    se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            se.propFix[this.toLowerCase()] = this
        }),
    ie.enctype || (se.propFix.enctype = "encoding");
    var Ii = /[\t\r\n\f]/g;
    se.fn.extend({
            addClass: function (t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    h = "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function (e) {
                        se(this).addClass(t.call(this, e, this.className))
                    });
                if (h) for (e = (t || "").match(ye) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ii, " ") : " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r = se.trim(n),
                        i.className !== r && (i.className = r)
                    }
                return this
            },
            removeClass: function (t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    h = 0 === arguments.length || "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function (e) {
                        se(this).removeClass(t.call(this, e, this.className))
                    });
                if (h) for (e = (t || "").match(ye) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ii, " ") : "")) {
                        for (o = 0; s = e[o++];) for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        r = t ? se.trim(n) : "",
                        i.className !== r && (i.className = r)
                    }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ?
                function (i) {
                    se(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function () {
                    if ("string" === i) for (var e, n = 0, s = se(this), o = t.match(ye) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === Ce || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ii, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }),
    se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            se.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }),
    se.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
    var Pi = se.now(),
        Ni = /\?/,
        Ai = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                s = se.trim(e + "");
            return s && !se.trim(s.replace(Ai, function (t, e, s, o) {
                    return i && e && (n = 0),
                    0 === n ? t : (i = s || e, n += !o - !s, "")
                })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
        },
    se.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (s) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e),
            i
        };
    var Hi, Mi, $i = /#.*$/,
        Oi = /([?&])_=[^&]*/,
        ji = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wi = /^(?:GET|HEAD)$/,
        Li = /^\/\//,
        Fi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bi = {},
        Ri = {},
        qi = "*/".concat("*");
    try {
            Mi = location.href
        } catch (Yi) {
            Mi = fe.createElement("a"),
            Mi.href = "",
            Mi = Mi.href
        }
    Hi = Fi.exec(Mi.toLowerCase()) || [],
    se.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Mi,
                type: "GET",
                isLocal: zi.test(Hi[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qi,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": se.parseJSON,
                    "text xml": se.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? F(F(t, se.ajaxSettings), e) : F(se.ajaxSettings, t)
            },
            ajaxPrefilter: W(Bi),
            ajaxTransport: W(Ri),
            ajax: function (t, e) {
                function i(t, e, i, n) {
                    var s, c, v, b, _, x = e;
                    2 !== y && (y = 2, a && clearTimeout(a), h = void 0, r = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = B(u, w, i)), b = R(u, b, w, s), s ? (u.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (se.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (se.etag[o] = _)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, c = b.data, v = b.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, u, s ? c : v]), g.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, u]), --se.active || se.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0),
                e = e || {};
                var n, s, o, r, a, l, h, c, u = se.ajaxSetup({}, e),
                    d = u.context || u,
                    p = u.context && (d.nodeType || d.jquery) ? se(d) : se.event,
                    f = se.Deferred(),
                    g = se.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    b = {},
                    y = 0,
                    _ = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === y) {
                                if (!c) for (c = {}; e = ji.exec(r);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === y ? r : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return y || (t = b[i] = b[i] || t, v[t] = e),
                            this
                        },
                        overrideMimeType: function (t) {
                            return y || (u.mimeType = t),
                            this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t) if (2 > y) for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || _;
                            return h && h.abort(e),
                            i(0, e),
                            this
                        }
                    };
                if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || Mi) + "").replace($i, "").replace(Li, Hi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(ye) || [""], null == u.crossDomain && (n = Fi.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Hi[1] && n[2] === Hi[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Hi[3] || ("http:" === Hi[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), L(Bi, u, e, w), 2 === y) return w;
                l = u.global,
                l && 0 === se.active++ && se.event.trigger("ajaxStart"),
                u.type = u.type.toUpperCase(),
                u.hasContent = !Wi.test(u.type),
                o = u.url,
                u.hasContent || (u.data && (o = u.url += (Ni.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Oi.test(o) ? o.replace(Oi, "$1_=" + Pi++) : o + (Ni.test(o) ? "&" : "?") + "_=" + Pi++)),
                u.ifModified && (se.lastModified[o] && w.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && w.setRequestHeader("If-None-Match", se.etag[o])),
                (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType),
                w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + qi + "; q=0.01" : "") : u.accepts["*"]);
                for (s in u.headers) w.setRequestHeader(s, u.headers[s]);
                if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === y)) return w.abort();
                _ = "abort";
                for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[s](u[s]);
                if (h = L(Ri, u, e, w)) {
                        w.readyState = 1,
                        l && p.trigger("ajaxSend", [w, u]),
                        u.async && u.timeout > 0 && (a = setTimeout(function () {
                            w.abort("timeout")
                        }, u.timeout));
                        try {
                            y = 1,
                            h.send(v, i)
                        } catch (x) {
                            if (!(2 > y)) throw x;
                            i(-1, x)
                        }
                    } else i(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, i) {
                return se.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return se.get(t, void 0, e, "script")
            }
        }),
    se.each(["get", "post"], function (t, e) {
            se[e] = function (t, i, n, s) {
                return se.isFunction(i) && (s = s || n, n = i, i = void 0),
                se.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                })
            }
        }),
    se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            se.fn[e] = function (t) {
                return this.on(e, t)
            }
        }),
    se._evalUrl = function (t) {
            return se.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        },
    se.fn.extend({
            wrapAll: function (t) {
                if (se.isFunction(t)) return this.each(function (e) {
                    se(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                return this.each(se.isFunction(t) ?
                function (e) {
                    se(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = se(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = se.isFunction(t);
                return this.each(function (i) {
                    se(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
    se.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
        },
    se.expr.filters.visible = function (t) {
            return !se.expr.filters.hidden(t)
        };
    var Qi = /%20/g,
        Ui = /\[\]$/,
        Vi = /\r?\n/g,
        Xi = /^(?:submit|button|image|reset|file)$/i,
        Ki = /^(?:input|select|textarea|keygen)/i;
    se.param = function (t, e) {
            var i, n = [],
                s = function (t, e) {
                    e = se.isFunction(e) ? e() : null == e ? "" : e,
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function () {
                    s(this.name, this.value)
                });
            else for (i in t) q(i, t[i], e, s);
            return n.join("&").replace(Qi, "+")
        },
    se.fn.extend({
            serialize: function () {
                return se.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = se.prop(this, "elements");
                    return t ? se.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !se(this).is(":disabled") && Ki.test(this.nodeName) && !Xi.test(t) && (this.checked || !Pe.test(t))
                }).map(function (t, e) {
                    var i = se(this).val();
                    return null == i ? null : se.isArray(i) ? se.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Vi, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Vi, "\r\n")
                    }
                }).get()
            }
        }),
    se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || Q()
        } : Y;
    var Ji = 0,
        Gi = {},
        Zi = se.ajaxSettings.xhr();
    t.ActiveXObject && se(t).on("unload", function () {
            for (var t in Gi) Gi[t](void 0, !0)
        }),
    ie.cors = !! Zi && "withCredentials" in Zi,
    Zi = ie.ajax = !! Zi,
    Zi && se.ajaxTransport(function (t) {
            if (!t.crossDomain || ie.cors) {
                var e;
                return {
                    send: function (i, n) {
                        var s, o = t.xhr(),
                            r = ++Ji;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                        t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                        o.send(t.hasContent && t.data || null),
                        e = function (i, s) {
                                var a, l, h;
                                if (e && (s || 4 === o.readyState)) if (delete Gi[r], e = void 0, o.onreadystatechange = se.noop, s) 4 !== o.readyState && o.abort();
                                else {
                                    h = {},
                                    a = o.status,
                                    "string" == typeof o.responseText && (h.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                }
                                h && n(a, l, h, o.getAllResponseHeaders())
                            },
                        t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Gi[r] = e : e()
                    },
                    abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }),
    se.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return se.globalEval(t),
                    t
                }
            }
        }),
    se.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET", t.global = !1)
        }),
    se.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i = fe.head || se("head")[0] || fe.documentElement;
                return {
                    send: function (n, s) {
                        e = fe.createElement("script"),
                        e.async = !0,
                        t.scriptCharset && (e.charset = t.scriptCharset),
                        e.src = t.url,
                        e.onload = e.onreadystatechange = function (t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                        },
                        i.insertBefore(e, i.firstChild)
                    },
                    abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = tn.pop() || se.expando + "_" + Pi++;
                return this[t] = !0,
                t
            }
        }),
    se.ajaxPrefilter("json jsonp", function (e, i, n) {
            var s, o, r, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Ni.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return r || se.error(s + " was not called"),
                r[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
                r = arguments
            }, n.always(function () {
                t[s] = o,
                e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)),
                r && se.isFunction(o) && o(r[0]),
                r = o = void 0
            }), "script") : void 0
        }),
    se.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1),
            e = e || fe;
            var n = ue.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
        };
    var nn = se.fn.load;
    se.fn.load = function (t, e, i) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = se.trim(t.slice(a, t.length)), t = t.slice(0, a)),
            se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
            r.length > 0 && se.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    s = arguments,
                    r.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
                }).complete(i &&
                function (t, e) {
                    r.each(i, s || [t.responseText, e, t])
                }),
            this
        },
    se.expr.filters.animated = function (t) {
            return se.grep(se.timers, function (e) {
                return t === e.elem
            }).length
        };
    var sn = t.document.documentElement;
    se.offset = {
            setOffset: function (t, e, i) {
                var n, s, o, r, a, l, h, c = se.css(t, "position"),
                    u = se(t),
                    d = {};
                "static" === c && (t.style.position = "relative"),
                a = u.offset(),
                o = se.css(t, "top"),
                l = se.css(t, "left"),
                h = ("absolute" === c || "fixed" === c) && se.inArray("auto", [o, l]) > -1,
                h ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0),
                se.isFunction(e) && (e = e.call(t, i, a)),
                null != e.top && (d.top = e.top - a.top + r),
                null != e.left && (d.left = e.left - a.left + s),
                "using" in e ? e.using.call(t, d) : u.css(d)
            }
        },
    se.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    se.offset.setOffset(this, t, e)
                });
                var e, i, n = {
                    top: 0,
                    left: 0
                },
                    s = this[0],
                    o = s && s.ownerDocument;
                if (o) return e = o.documentElement,
                se.contains(e, s) ? (typeof s.getBoundingClientRect !== Ce && (n = s.getBoundingClientRect()), i = U(o), {
                        top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : n
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = {
                        top: 0,
                        left: 0
                    },
                        n = this[0];
                    return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)),
                    {
                            top: e.top - i.top - se.css(n, "marginTop", !0),
                            left: e.left - i.left - se.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                    return t || sn
                })
            }
        }),
    se.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var i = /Y/.test(e);
            se.fn[t] = function (n) {
                return Ie(this, function (t, n, s) {
                    var o = U(t);
                    return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? se(o).scrollLeft() : s, i ? s : se(o).scrollTop()) : t[n] = s)
                }, t, n, arguments.length, null)
            }
        }),
    se.each(["top", "left"], function (t, e) {
            se.cssHooks[e] = D(ie.pixelPosition, function (t, i) {
                return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
            })
        }),
    se.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            se.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                se.fn[n] = function (n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border");
                    return Ie(this, function (e, i, n) {
                            var s;
                            return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, r) : se.style(e, i, n, r)
                        }, e, o ? n : void 0, o, null)
                }
            })
        }),
    se.fn.size = function () {
            return this.length
        },
    se.fn.andSelf = se.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function () {
            return se
        });
    var on = t.jQuery,
        rn = t.$;
    return se.noConflict = function (e) {
            return t.$ === se && (t.$ = rn),
            e && t.jQuery === se && (t.jQuery = on),
            se
        },
    typeof e === Ce && (t.jQuery = t.$ = se),
    se
}),


function (t, e, i) {
    function n(i) {
        var n = e.console;
        o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
    }
    function s(e, i, s, o) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(e, i, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return n(o),
                    s
                },
                set: function (t) {
                    n(o),
                    s = t
                }
            })
        } catch (r) {}
        t._definePropertyBroken = !0,
        e[i] = s
    }
    var o = {};
    t.migrateWarnings = [],
    !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"),
    t.migrateTrace === i && (t.migrateTrace = !0),
    t.migrateReset = function () {
        o = {},
        t.migrateWarnings.length = 0
    },
    "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
    var r = t("<input/>", {
        size: 1
    }).attr("size") && t.attrFn,
        a = t.attr,
        l = t.attrHooks.value && t.attrHooks.value.get ||
    function () {
            return null
        },
        h = t.attrHooks.value && t.attrHooks.value.set ||
    function () {
            return i
        },
        c = /^(?:input|button)$/i,
        u = /^[238]$/,
        d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        p = /^(?:checked|selected)$/i;
    s(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"),
    t.attr = function (e, s, o, l) {
            var h = s.toLowerCase(),
                f = e && e.nodeType;
            return l && (a.length < 4 && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(f) && (r ? s in r : t.isFunction(t.fn[s]))) ? t(e)[s](o) : ("type" === s && o !== i && c.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[h] && d.test(h) && (t.attrHooks[h] = {
                    get: function (e, n) {
                        var s, o = t.prop(e, n);
                        return o === !0 || "boolean" != typeof o && (s = e.getAttributeNode(n)) && s.nodeValue !== !1 ? n.toLowerCase() : i
                    },
                    set: function (e, i, n) {
                        var s;
                        return i === !1 ? t.removeAttr(e, n) : (s = t.propFix[n] || n, s in e && (e[s] = !0), e.setAttribute(n, n.toLowerCase())),
                        n
                    }
                }, p.test(h) && n("jQuery.fn.attr('" + h + "') may use property instead of attribute")), a.call(t, e, s, o))
        },
    t.attrHooks.value = {
            get: function (t, e) {
                var i = (t.nodeName || "").toLowerCase();
                return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
            },
            set: function (t, e) {
                var i = (t.nodeName || "").toLowerCase();
                return "button" === i ? h.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value', val) no longer sets properties"), void(t.value = e))
            }
        };
    var f, g, m = t.fn.init,
        v = t.parseJSON,
        b = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    t.fn.init = function (e, i, s) {
            var o;
            return e && "string" == typeof e && !t.isPlainObject(i) && (o = b.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? m.call(this, t.parseHTML(o[2], i, !0), i, s) : m.apply(this, arguments)
        },
    t.fn.init.prototype = t.fn,
    t.parseJSON = function (t) {
            return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
        },
    t.uaMatch = function (t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        },
    t.browser || (f = t.uaMatch(navigator.userAgent), g = {}, f.browser && (g[f.browser] = !0, g.version = f.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), t.browser = g),
    s(t, "browser", t.browser, "jQuery.browser is deprecated"),
    t.sub = function () {
            function e(t, i) {
                return new e.fn.init(t, i)
            }
            t.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function (n, s) {
                return s && s instanceof t && !(s instanceof e) && (s = e(s)),
                t.fn.init.call(this, n, s, i)
            },
            e.fn.init.prototype = e.fn;
            var i = e(document);
            return n("jQuery.sub() is deprecated"),
            e
        },
    t.ajaxSetup({
            converters: {
                "text json": t.parseJSON
            }
        });
    var y = t.fn.data;
    t.fn.data = function (e) {
            var s, o, r = this[0];
            return !r || "events" !== e || 1 !== arguments.length || (s = t.data(r, e), o = t._data(r, e), s !== i && s !== o || o === i) ? y.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), o)
        };
    var _ = /\/(java|ecma)script/i,
        w = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function () {
            return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
            w.apply(this, arguments)
        },
    t.clean || (t.clean = function (e, i, s, o) {
            i = i || document,
            i = !i.nodeType && i[0] || i,
            i = i.ownerDocument || i,
            n("jQuery.clean() is deprecated");
            var r, a, l, h, c = [];
            if (t.merge(c, t.buildFragment(e, i).childNodes), s) for (l = function (t) {
                return !t.type || _.test(t.type) ? o ? o.push(t.parentNode ? t.parentNode.removeChild(t) : t) : s.appendChild(t) : void 0
            }, r = 0; null != (a = c[r]); r++) t.nodeName(a, "script") && l(a) || (s.appendChild(a), "undefined" != typeof a.getElementsByTagName && (h = t.grep(t.merge([], a.getElementsByTagName("script")), l), c.splice.apply(c, [r + 1, 0].concat(h)), r += h.length));
            return c
        });
    var x = t.event.add,
        C = t.event.remove,
        k = t.event.trigger,
        T = t.fn.toggle,
        D = t.fn.live,
        S = t.fn.die,
        E = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        I = new RegExp("\\b(?:" + E + ")\\b"),
        P = /(?:^|\s)hover(\.\S+|)\b/,
        N = function (e) {
            return "string" != typeof e || t.event.special.hover ? e : (P.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(P, "mouseenter$1 mouseleave$1"))
        };
    t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    t.event.dispatch && s(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    t.event.add = function (t, e, i, s, o) {
            t !== document && I.test(e) && n("AJAX events should be attached to document: " + e),
            x.call(this, t, N(e || ""), i, s, o)
        },
    t.event.remove = function (t, e, i, n, s) {
            C.call(this, t, N(e) || "", i, n, s)
        },
    t.fn.error = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return n("jQuery.fn.error() is deprecated"),
            t.splice(0, 0, "error"),
            arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
        },
    t.fn.toggle = function (e, i) {
            if (!t.isFunction(e) || !t.isFunction(i)) return T.apply(this, arguments);
            n("jQuery.fn.toggle(handler, handler...) is deprecated");
            var s = arguments,
                o = e.guid || t.guid++,
                r = 0,
                a = function (i) {
                    var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
                    return t._data(this, "lastToggle" + e.guid, n + 1),
                    i.preventDefault(),
                    s[n].apply(this, arguments) || !1
                };
            for (a.guid = o; r < s.length;) s[r++].guid = o;
            return this.click(a)
        },
    t.fn.live = function (e, i, s) {
            return n("jQuery.fn.live() is deprecated"),
            D ? D.apply(this, arguments) : (t(this.context).on(e, this.selector, i, s), this)
        },
    t.fn.die = function (e, i) {
            return n("jQuery.fn.die() is deprecated"),
            S ? S.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
        },
    t.event.trigger = function (t, e, i, s) {
            return i || I.test(t) || n("Global events are undocumented and deprecated"),
            k.call(this, t, e, i || document, s)
        },
    t.each(E.split("|"), function (e, i) {
            t.event.special[i] = {
                setup: function () {
                    var e = this;
                    return e !== document && (t.event.add(document, i + "." + t.guid, function () {
                        t.event.trigger(i, null, e, !0)
                    }), t._data(this, i, t.guid++)),
                    !1
                },
                teardown: function () {
                    return this !== document && t.event.remove(document, i + "." + t._data(this, i)),
                    !1
                }
            }
        })
}(jQuery, window),


function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote], button[data-confirm]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function (e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n),
            s.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (n) {
            var s, o, r, a, l, h, c, u;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, h = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"),
                    o = n.attr("action"),
                    r = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (r.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), r = n.data("params") || null);
                return u = {
                    type: s || "GET",
                    data: r,
                    dataType: c,
                    beforeSend: function (t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script),
                        i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                },
                h && (u.xhrFields = {
                    withCredentials: h
                }),
                o && (u.url = o),
                i.ajax(u)
            }
            return !1
        },
        handleMethod: function (n) {
            var s = i.href(n),
                o = n.data("method"),
                r = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                h = t('<form method="post" action="' + s + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            r && h.attr("target", r),
            h.hide().append(c).appendTo("body"),
            h.submit()
        },
        formElements: function (e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function (e) {
            i.formElements(e, i.disableSelector).each(function () {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var i, n;
            i = t.is("button") ? "html" : "val",
            n = t.data("disable-with"),
            t.data("ujs:enable-with", t[i]()),
            n !== e && t[i](n),
            t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            i.formElements(e, i.enableSelector).each(function () {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")),
            t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"),
                s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function (e, i, n) {
            var s, o, r = t(),
                a = i || "input,textarea",
                l = e.find(a);
            return l.each(function () {
                    if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !n) {
                        if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        r = r.add(s)
                    }
                }),
            r.length ? r : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function (t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()),
            n !== e && t.html(n),
            t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable")
        }
    },
    i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = t(this),
            o = s.data("method"),
            r = s.data("params"),
            a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (!a && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
                if (a && (!o || "GET" === o) && !r) return !0;
                var l = i.handleRemote(s);
                return l === !1 ? i.enableElement(s) : l.error(function () {
                    i.enableElement(s)
                }),
                !1
            }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.error(function () {
            i.enableFormElement(n)
        }),
        !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s, o, r = t(this),
            a = r.data("remote") !== e;
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.attr("novalidate") == e && (s = i.blankInputs(r, i.requiredInputSelector), s && i.fire(r, "ajax:aborted:required", [s]))) return i.stopEverything(n);
        if (a) {
                if (o = i.nonBlankInputs(r, i.fileInputSelector)) {
                    setTimeout(function () {
                        i.disableFormElements(r)
                    }, 13);
                    var l = i.fire(r, "ajax:aborted:file", [o]);
                    return l || setTimeout(function () {
                        i.enableFormElements(r)
                    }, 13),
                    l
                }
                return i.handleRemote(r),
                !1
            }
        setTimeout(function () {
                i.disableFormElements(r)
            }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
            o = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", o)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery),


function (t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !! r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }
    function n(e) {
        return !t(e).parents().andSelf().filter(function () {
            return "hidden" === t.css(this, "visibility") || t.expr.filters.hidden(this)
        }).length
    }
    var s = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {},
    t.ui.version || (t.extend(t.ui, {
            version: "1.9.0",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            _focus: t.fn.focus,
            focus: function (e, i) {
                return "number" == typeof e ? this.each(function () {
                    var n = this;
                    setTimeout(function () {
                        t(n).focus(),
                        i && i.call(n)
                    }, e)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function () {
                var e;
                return e = t.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0),
                /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function (i) {
                if (i !== e) return this.css("zIndex", i);
                if (this.length) for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    o = o.parent()
                }
                return 0
            },
            uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++s)
                })
            },
            removeUniqueId: function () {
                return this.each(function () {
                    o.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, n) {
            function s(e, i, n, s) {
                return t.each(o, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0,
                    n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                    s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }),
                i
            }
            var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                r = n.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + n] = function (i) {
                    return i === e ? a["inner" + n].call(this) : this.each(function () {
                        t(this).css(r, s(this, i) + "px")
                    })
                },
            t.fn["outer" + n] = function (e, i) {
                    return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                        t(this).css(r, s(this, e, !0, i) + "px")
                    })
                }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function (e) {
                return i(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function (e) {
                var n = t.attr(e, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && i(e, !s)
            }
        }), t(function () {
            var e = document.body,
                i = e.appendChild(i = document.createElement("div"));
            i.offsetHeight,
            t.extend(i.style, {
                    minHeight: "100px",
                    height: "auto",
                    padding: 0,
                    borderWidth: 0
                }),
            t.support.minHeight = 100 === i.offsetHeight,
            t.support.selectstart = "onselectstart" in i,
            e.removeChild(i).style.display = "none"
        }), t.fn.extend({
            disableSelection: function () {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function (e, i, n) {
                    var s, o = t.ui[e].prototype;
                    for (s in n) o.plugins[s] = o.plugins[s] || [],
                    o.plugins[s].push([i, n[s]])
                },
                call: function (t, e, i) {
                    var n, s = t.plugins[e];
                    if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
                }
            },
            contains: t.contains,
            hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            isOverAxis: function (t, e, i) {
                return t > e && e + i > t
            },
            isOver: function (e, i, n, s, o, r) {
                return t.ui.isOverAxis(e, n, o) && t.ui.isOverAxis(i, s, r)
            }
        }))
}(jQuery),


function (t, e) {
    var i = 0,
        n = Array.prototype.slice,
        s = t.cleanData;
    t.cleanData = function (e) {
            for (var i, n = 0; null != (i = e[n]); n++) try {
                t(i).triggerHandler("remove")
            } catch (o) {}
            s(e)
        },
    t.widget = function (e, i, n) {
            var s, o, r, a, l = e.split(".")[0];
            e = e.split(".")[1],
            s = l + "-" + e,
            n || (n = i, i = t.Widget),
            t.expr[":"][s.toLowerCase()] = function (e) {
                return !!t.data(e, s)
            },
            t[l] = t[l] || {},
            o = t[l][e],
            r = t[l][e] = function (t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
            },
            t.extend(r, o, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }),
            a = new i,
            a.options = t.widget.extend({}, a.options),
            t.each(n, function (e, s) {
                t.isFunction(s) && (n[e] = function () {
                    var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    },
                        n = function (t) {
                            return i.prototype[e].apply(this, t)
                        };
                    return function () {
                            var e, i = this._super,
                                o = this._superApply;
                            return this._super = t,
                            this._superApply = n,
                            e = s.apply(this, arguments),
                            this._super = i,
                            this._superApply = o,
                            e
                        }
                }())
            }),
            r.prototype = t.widget.extend(a, {
                widgetEventPrefix: e
            }, n, {
                constructor: r,
                namespace: l,
                widgetName: e,
                widgetBaseClass: s,
                widgetFullName: s
            }),
            o ? (t.each(o._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, r, i._proto)
            }), delete o._childConstructors) : i._childConstructors.push(r),
            t.widget.bridge(e, r)
        },
    t.widget.extend = function (i) {
            for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (s in r[a]) o = r[a][s],
            r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.widget.extend({}, i[s], o) : o);
            return i
        },
    t.widget.bridge = function (i, s) {
            var o = s.prototype.widgetFullName;
            t.fn[i] = function (r) {
                var a = "string" == typeof r,
                    l = n.call(arguments, 1),
                    h = this;
                return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r,
                this.each(a ?
                    function () {
                        var n, s = t.data(this, o);
                        return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (h = n && n.jquery ? h.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
                    } : function () {
                        var e = t.data(this, o);
                        e ? e.option(r || {})._init() : new s(r, this)
                    }),
                h
            }
        },
    t.Widget = function () {},
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (e, n) {
                n = t(n || this.defaultElement || this)[0],
                this.element = t(n),
                this.uuid = i++,
                this.eventNamespace = "." + this.widgetName + this.uuid,
                this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
                this.bindings = t(),
                this.hoverable = t(),
                this.focusable = t(),
                n !== this && (t.data(n, this.widgetName, this), t.data(n, this.widgetFullName, this), this._on({
                    remove: "destroy"
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                this._create(),
                this._trigger("create", null, this._getCreateEventData()),
                this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(),
                this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                this.bindings.unbind(this.eventNamespace),
                this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (i, n) {
                var s, o, r, a = i;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof i) if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                    for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; r < s.length - 1; r++) o[s[r]] = o[s[r]] || {},
                    o = o[s[r]];
                    if (i = s.pop(), n === e) return o[i] === e ? null : o[i];
                    o[i] = n
                } else {
                    if (n === e) return this.options[i] === e ? null : this.options[i];
                    a[i] = n
                }
                return this._setOptions(a),
                this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return this.options[t] = e,
                "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
                this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (e, i) {
                i ? (e = t(e), this.bindings = this.bindings.add(e)) : (i = e, e = this.element);
                var n = this;
                t.each(i, function (i, s) {
                    function o() {
                        return n.options.disabled === !0 || t(this).hasClass("ui-state-disabled") ? void 0 : ("string" == typeof s ? n[s] : s).apply(n, arguments)
                    }
                    "string" != typeof s && (o.guid = s.guid = s.guid || o.guid || t.guid++);
                    var r = i.match(/^(\w+)\s*(.*)$/),
                        a = r[1] + n.eventNamespace,
                        l = r[2];
                    l ? n.widget().delegate(l, a, o) : e.bind(a, o)
                })
            },
            _off: function (t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                t.unbind(e).undelegate(e)
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e),
                this._on(e, {
                    mouseenter: function (e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e),
                this._on(e, {
                    focusin: function (e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent, o) for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n),
                !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        },
    t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {},
                "number" == typeof s && (s = {
                    duration: s
                }),
                r = !t.isEmptyObject(s),
                s.complete = o,
                s.delay && n.delay(s.delay),
                r && t.effects && (t.effects.effect[a] || t.uiBackCompat !== !1 && t.effects[a]) ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
                    t(this)[e](),
                    o && o.call(n[0]),
                    i()
                })
            }
        }),
    t.uiBackCompat !== !1 && (t.Widget.prototype._getCreateOptions = function () {
            return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
        })
}(jQuery),


function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }),
    t.widget("ui.mouse", {
        version: "1.9.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var n = this,
                    s = 1 === i.which,
                    o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return !t.browser.msie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),


function (t, e) {
    function i(t, e, i) {
        return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
    }
    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    t.ui = t.ui || {};
    var s, o = Math.max,
        r = Math.abs,
        a = Math.round,
        l = /left|center|right/,
        h = /top|center|bottom/,
        c = /[\+\-]\d+%?/,
        u = /^\w+/,
        d = /%$/,
        p = t.fn.position;
    t.position = {
            scrollbarWidth: function () {
                if (s !== e) return s;
                var i, n, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    r = o.children()[0];
                return t("body").append(o),
                i = r.offsetWidth,
                o.css("overflow", "scroll"),
                n = r.offsetWidth,
                i === n && (n = o[0].clientWidth),
                o.remove(),
                s = i - n
            },
            getScrollInfo: function (e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    n = e.isWindow ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                return {
                        width: s ? t.position.scrollbarWidth() : 0,
                        height: o ? t.position.scrollbarWidth() : 0
                    }
            },
            getWithinInfo: function (e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]);
                return {
                        element: i,
                        isWindow: n,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n ? i.width() : i.outerWidth(),
                        height: n ? i.height() : i.outerHeight()
                    }
            }
        },
    t.fn.position = function (e) {
            if (!e || !e.of) return p.apply(this, arguments);
            e = t.extend({}, e);
            var s, d, f, g, m, v = t(e.of),
                b = t.position.getWithinInfo(e.within),
                y = t.position.getScrollInfo(b),
                _ = v[0],
                w = (e.collision || "flip").split(" "),
                x = {};
            return 9 === _.nodeType ? (d = v.width(), f = v.height(), g = {
                    top: 0,
                    left: 0
                }) : t.isWindow(_) ? (d = v.width(), f = v.height(), g = {
                    top: v.scrollTop(),
                    left: v.scrollLeft()
                }) : _.preventDefault ? (e.at = "left top", d = f = 0, g = {
                    top: _.pageY,
                    left: _.pageX
                }) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()),
            m = t.extend({}, g),
            t.each(["my", "at"], function () {
                    var t, i, n = (e[this] || "").split(" ");
                    1 === n.length && (n = l.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
                    n[0] = l.test(n[0]) ? n[0] : "center",
                    n[1] = h.test(n[1]) ? n[1] : "center",
                    t = c.exec(n[0]),
                    i = c.exec(n[1]),
                    x[this] = [t ? t[0] : 0, i ? i[0] : 0],
                    e[this] = [u.exec(n[0])[0], u.exec(n[1])[0]]
                }),
            1 === w.length && (w[1] = w[0]),
            "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2),
            "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2),
            s = i(x.at, d, f),
            m.left += s[0],
            m.top += s[1],
            this.each(function () {
                    var l, h, c = t(this),
                        u = c.outerWidth(),
                        p = c.outerHeight(),
                        _ = n(this, "marginLeft"),
                        C = n(this, "marginTop"),
                        k = u + _ + n(this, "marginRight") + y.width,
                        T = p + C + n(this, "marginBottom") + y.height,
                        D = t.extend({}, m),
                        S = i(x.my, c.outerWidth(), c.outerHeight());
                    "right" === e.my[0] ? D.left -= u : "center" === e.my[0] && (D.left -= u / 2),
                    "bottom" === e.my[1] ? D.top -= p : "center" === e.my[1] && (D.top -= p / 2),
                    D.left += S[0],
                    D.top += S[1],
                    t.support.offsetFractions || (D.left = a(D.left), D.top = a(D.top)),
                    l = {
                            marginLeft: _,
                            marginTop: C
                        },
                    t.each(["left", "top"], function (i, n) {
                            t.ui.position[w[i]] && t.ui.position[w[i]][n](D, {
                                targetWidth: d,
                                targetHeight: f,
                                elemWidth: u,
                                elemHeight: p,
                                collisionPosition: l,
                                collisionWidth: k,
                                collisionHeight: T,
                                offset: [s[0] + S[0], s[1] + S[1]],
                                my: e.my,
                                at: e.at,
                                within: b,
                                elem: c
                            })
                        }),
                    t.fn.bgiframe && c.bgiframe(),
                    e.using && (h = function (t) {
                            var i = g.left - D.left,
                                n = i + d - u,
                                s = g.top - D.top,
                                a = s + f - p,
                                l = {
                                    target: {
                                        element: v,
                                        left: g.left,
                                        top: g.top,
                                        width: d,
                                        height: f
                                    },
                                    element: {
                                        element: c,
                                        left: D.left,
                                        top: D.top,
                                        width: u,
                                        height: p
                                    },
                                    horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                };
                            u > d && r(i + n) < d && (l.horizontal = "center"),
                            p > f && r(s + a) < f && (l.vertical = "middle"),
                            l.important = o(r(i), r(n)) > o(r(s), r(a)) ? "horizontal" : "vertical",
                            e.using.call(this, t, l)
                        }),
                    c.offset(t.extend(D, {
                            using: h
                        }))
                })
        },
    t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        r = n.width,
                        a = t.left - e.collisionPosition.marginLeft,
                        l = s - a,
                        h = a + e.collisionWidth - r - s;
                    e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                },
                top: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollTop : n.offset.top,
                        r = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = s - a,
                        h = a + e.collisionHeight - r - s;
                    e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                }
            },
            flip: {
                left: function (t, e) {
                    var i, n, s = e.within,
                        o = s.offset.left + s.scrollLeft,
                        a = s.width,
                        l = s.isWindow ? s.scrollLeft : s.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - a - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || i < r(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < u) && (t.left += d + p + f))
                },
                top: function (t, e) {
                    var i, n, s = e.within,
                        o = s.offset.top + s.scrollTop,
                        a = s.height,
                        l = s.isWindow ? s.scrollTop : s.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - a - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (n = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (0 > n || n < r(c)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || r(i) < u) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },


    function () {
            var e, i, n, s, o, r = document.getElementsByTagName("body")[0],
                a = document.createElement("div");
            e = document.createElement(r ? "div" : "body"),
            n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                },
            r && t.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            for (o in n) e.style[o] = n[o];
            e.appendChild(a),
            i = r || document.documentElement,
            i.insertBefore(e, i.firstChild),
            a.style.cssText = "position: absolute; left: 10.7432222px;",
            s = t(a).offset().left,
            t.support.offsetFractions = s > 10 && 11 > s,
            e.innerHTML = "",
            i.removeChild(e)
        }(),
    t.uiBackCompat !== !1 &&
    function (t) {
            var i = t.fn.position;
            t.fn.position = function (n) {
                if (!n || !n.offset) return i.call(this, n);
                var s = n.offset.split(" "),
                    o = n.at.split(" ");
                return 1 === s.length && (s[1] = s[0]),
                /^\d/.test(s[0]) && (s[0] = "+" + s[0]),
                /^\d/.test(s[1]) && (s[1] = "+" + s[1]),
                1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], o[0] = "center")),
                i.call(this, t.extend(n, {
                        at: o[0] + s[0] + " " + o[1] + s[1],
                        offset: e
                    }))
            }
        }(jQuery)
}(jQuery),


function (t) {
    var e = 0,
        i = {},
        n = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
    n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show",
    t.widget("ui.accordion", {
            version: "1.9.0",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function () {
                var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e),
                    n = this.options;
                this.prevShow = this.prevHide = t(),
                this.element.addClass("ui-accordion ui-widget ui-helper-reset"),
                this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
                this._hoverable(this.headers),
                this._focusable(this.headers),
                this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                !n.collapsible && n.active === !1 && (n.active = 0),
                n.active < 0 && (n.active += this.headers.length),
                this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),
                this.active.next().addClass("ui-accordion-content-active").show(),
                this._createIcons(),
                this.originalHeight = this.element[0].style.height,
                this.refresh(),
                this.element.attr("role", "tablist"),
                this.headers.attr("role", "tab").each(function (e) {
                        var n = t(this),
                            s = n.attr("id"),
                            o = n.next(),
                            r = o.attr("id");
                        s || (s = i + "-header-" + e, n.attr("id", s)),
                        r || (r = i + "-panel-" + e, o.attr("id", r)),
                        n.attr("aria-controls", r),
                        o.attr("aria-labelledby", s)
                    }).next().attr("role", "tabpanel"),
                this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }).hide(),
                this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0),
                this._on(this.headers, {
                        keydown: "_keydown"
                    }),
                this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    }),
                this._setupEvents(n.event)
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    content: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function () {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }),
                this._destroyIcons(),
                t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }),
                "content" !== this.options.heightStyle && (this.element.css("height", this.originalHeight), t.css("height", ""))
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" === t && !e && this.options.active === !1 && this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! e), void 0)
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                        }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function () {
                var e, i, n = this.options.heightStyle,
                    s = this.element.parent();
                this.element.css("height", this.originalHeight),
                "fill" === n ? (t.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), e = s.height(), this.element.siblings(":visible").each(function () {
                        var i = t(this),
                            n = i.css("position");
                        "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                    }), i && s.css("overflow", i), this.headers.each(function () {
                        e -= t(this).outerHeight(!0)
                    }), this.headers.next().each(function () {
                        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
                        e = Math.max(e, t(this).height("").height())
                    }).height(e)),
                "content" !== n && this.element.height(this.element.height())
            },
            _activate: function (e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var i = {};
                e && (t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._on(this.headers, i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s[0] === n[0],
                    r = o && i.collapsible,
                    a = r ? t() : s.next(),
                    l = n.next(),
                    h = {
                        oldHeader: n,
                        oldPanel: l,
                        newHeader: r ? t() : s,
                        newPanel: a
                    };
                e.preventDefault(),
                o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0),
                this.prevShow = i,
                this.prevHide = n,
                this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)),
                n.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }),
                n.prev().attr("aria-selected", "false"),
                i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                        return 0 === t(this).attr("tabIndex")
                    }).attr("tabIndex", -1),
                i.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }).prev().attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    })
            },
            _animate: function (t, e, s) {
                var o, r, a, l = this,
                    h = 0,
                    c = t.length && (!e.length || t.index() < e.index()),
                    u = this.options.animate || {},
                    d = c && u.down || u,
                    p = function () {
                        l._toggleComplete(s)
                    };
                return "number" == typeof d && (a = d),
                "string" == typeof d && (r = d),
                r = r || d.easing || u.easing,
                a = a || d.duration || u.duration,
                e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
                        duration: a,
                        easing: r,
                        step: function (t, e) {
                            e.now = Math.round(t)
                        }
                    }), t.hide().animate(n, {
                        duration: a,
                        easing: r,
                        complete: p,
                        step: function (t, i) {
                            i.now = Math.round(t),
                            "height" !== i.prop ? h += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - h), h = 0)
                        }
                    }), void 0) : e.animate(i, a, r, p) : t.animate(n, a, r, p)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
                e.length && (e.parent()[0].className = e.parent()[0].className),
                this._trigger("activate", null, t)
            }
        }),
    t.uiBackCompat !== !1 && (function (t, e) {
            t.extend(e.options, {
                navigation: !1,
                navigationFilter: function () {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            });
            var i = e._create;
            e._create = function () {
                if (this.options.navigation) {
                    var e = this,
                        n = this.element.find(this.options.header),
                        s = n.next(),
                        o = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                    o && n.add(s).each(function (i) {
                            return t.contains(this, o) ? (e.options.active = Math.floor(i / 2), !1) : void 0
                        })
                }
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options, {
                heightStyle: null,
                autoHeight: !0,
                clearStyle: !1,
                fillSpace: !1
            });
            var i = e._create,
                n = e._setOption;
            t.extend(e, {
                    _create: function () {
                        this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(),
                        i.call(this)
                    },
                    _setOption: function (t) {
                        ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()),
                        n.apply(this, arguments)
                    },
                    _mergeHeightStyle: function () {
                        var t = this.options;
                        return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : void 0
                    }
                })
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options.icons, {
                activeHeader: null,
                headerSelected: "ui-icon-triangle-1-s"
            });
            var i = e._createIcons;
            e._createIcons = function () {
                this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected),
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            e.activate = e._activate;
            var i = e._findActive;
            e._findActive = function (t) {
                return -1 === t && (t = !1),
                t && "number" != typeof t && (t = this.headers.index(this.headers.filter(t)), -1 === t && (t = !1)),
                i.call(this, t)
            }
        }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (t, e) {
            t.extend(e.options, {
                change: null,
                changestart: null
            });
            var i = e._trigger;
            e._trigger = function (t, e, n) {
                var s = i.apply(this, arguments);
                return s ? ("beforeActivate" === t ? s = i.call(this, "changestart", e, {
                    oldHeader: n.oldHeader,
                    oldContent: n.oldPanel,
                    newHeader: n.newHeader,
                    newContent: n.newPanel
                }) : "activate" === t && (s = i.call(this, "change", e, {
                    oldHeader: n.oldHeader,
                    oldContent: n.oldPanel,
                    newHeader: n.newHeader,
                    newContent: n.newPanel
                })), s) : !1
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options, {
                animate: null,
                animated: "slide"
            });
            var i = e._create;
            e._create = function () {
                var t = this.options;
                null === t.animate && (t.animate = t.animated ? "slide" === t.animated ? 300 : "bounceslide" === t.animated ? {
                    duration: 200,
                    down: {
                        easing: "easeOutBounce",
                        duration: 1e3
                    }
                } : t.animated : !1),
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype))
}(jQuery),


function (t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.9.0",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var e, i, n;
            this.isMultiLine = this._isMultiLine(),
            this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on({
                keydown: function (s) {
                    if (this.element.prop("readOnly")) return e = !0,
                    n = !0,
                    i = !0,
                    void 0;
                    e = !1,
                    n = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", s);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", s);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", s);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", s);
                        break;
                    case o.ENTER:
                    case o.NUMPAD_ENTER:
                        this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(s);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(s)
                    }
                },
                keypress: function (n) {
                    if (e) return e = !1,
                    void n.preventDefault();
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                        case s.PAGE_UP:
                            this._move("previousPage", n);
                            break;
                        case s.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;
                        case s.UP:
                            this._keyEvent("previous", n);
                            break;
                        case s.DOWN:
                            this._keyEvent("next", n)
                        }
                    }
                },
                input: function (t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function () {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: t(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"),
            this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (n) {
                            n.target !== e.element[0] && n.target !== i && !t.contains(i, n.target) && e.close()
                        })
                    })
                },
                menufocus: function (e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(),
                    void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                },
                menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                            this.previous = n,
                            this.selectedItem = i
                        })),
                    !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(t),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            t.fn.bgiframe && this.menu.element.bgiframe(),
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function () {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function () {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                n.xhr && n.xhr.abort(),
                n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                        s(t)
                    },
                    error: function () {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching),
            this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function () {
            var t = this,
                i = ++e;
            return function (n) {
                    i === e && t.__response(n),
                    t.pending--,
                    t.pending || t.element.removeClass("ui-autocomplete-loading")
                }
        },
        __response: function (t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, e),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var n = this;
            t.each(i, function (t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return n.test(t.label || t.value || t)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (t) {
            var e;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery),


function (t) {
    var e, i, n, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function () {
            var e = t(this).find(":ui-button");
            setTimeout(function () {
                e.button("refresh")
            }, 1)
        },
        h = function (e) {
            var i = e.name,
                n = e.form,
                s = t([]);
            return i && (s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                    return !this.form
                })),
            s
        };
    t.widget("ui.button", {
            version: "1.9.0",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function () {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l),
                "boolean" != typeof this.options.disabled ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
                this._determineButtonType(),
                this.hasTitle = !! this.buttonElement.attr("title");
                var r = this,
                    a = this.options,
                    c = "checkbox" === this.type || "radio" === this.type,
                    u = "ui-state-hover" + (c ? "" : " ui-state-active"),
                    d = "ui-state-focus";
                null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
                this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                        a.disabled || (t(this).addClass("ui-state-hover"), this === e && t(this).addClass("ui-state-active"))
                    }).bind("mouseleave" + this.eventNamespace, function () {
                        a.disabled || t(this).removeClass(u)
                    }).bind("click" + this.eventNamespace, function (t) {
                        a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                    }),
                this.element.bind("focus" + this.eventNamespace, function () {
                        r.buttonElement.addClass(d)
                    }).bind("blur" + this.eventNamespace, function () {
                        r.buttonElement.removeClass(d)
                    }),
                c && (this.element.bind("change" + this.eventNamespace, function () {
                        s || r.refresh()
                    }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
                        a.disabled || (s = !1, i = t.pageX, n = t.pageY)
                    }).bind("mouseup" + this.eventNamespace, function (t) {
                        a.disabled || (i !== t.pageX || n !== t.pageY) && (s = !0)
                    })),
                "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                        return a.disabled || s ? !1 : (t(this).toggleClass("ui-state-active"), void r.buttonElement.attr("aria-pressed", r.element[0].checked))
                    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                        if (a.disabled || s) return !1;
                        t(this).addClass("ui-state-active"),
                        r.buttonElement.attr("aria-pressed", "true");
                        var e = r.element[0];
                        h(e).not(e).map(function () {
                            return t(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                        return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, r.document.one("mouseup", function () {
                            e = null
                        }), void 0)
                    }).bind("mouseup" + this.eventNamespace, function () {
                        return a.disabled ? !1 : void t(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function (e) {
                        return a.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                    }).bind("keyup" + this.eventNamespace, function () {
                        t(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                        e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                    })),
                this._setOption("disabled", a.disabled),
                this._resetButton()
            },
            _determineButtonType: function () {
                var t, e, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
                "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function () {
                return this.buttonElement
            },
            _destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible"),
                this.buttonElement.removeClass(o + " " + r + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function (t, e) {
                return this._super(t, e),
                "disabled" === t ? void(e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
            },
            refresh: function () {
                var e = this.element.is(":disabled");
                e !== this.options.disabled && this._setOption("disabled", e),
                "radio" === this.type ? h(this.element[0]).each(function () {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function () {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var e = this.buttonElement.removeClass(a),
                    i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    n = this.options.icons,
                    s = n.primary && n.secondary,
                    o = [];
                n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"),
                e.addClass(o.join(" "))
            }
        }),
    t.widget("ui.buttonset", {
            version: "1.9.0",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
            },
            _create: function () {
                this.element.addClass("ui-buttonset")
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (t, e) {
                "disabled" === t && this.buttons.button("option", t, e),
                this._super(t, e)
            },
            refresh: function () {
                var e = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset"),
                this.buttons.map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
}(jQuery),


function ($, undefined) {
    function Datepicker() {
        this.debug = !1,
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        $.extend(this._defaults, this.regional[""]),
        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function bindHover(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(e, "mouseout", function () {
            $(this).removeClass("ui-state-hover"),
            -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"),
            -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(e, "mouseover", function () {
            $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function extendRemove(t, e) {
        $.extend(t, e);
        for (var i in e)(null == e[i] || e[i] == undefined) && (t[i] = e[i]);
        return t
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.9.0"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function () {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return extendRemove(this._defaults, t || {}),
                this
            },
            _attachDatepicker: function (target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}),
                "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function (t, e) {
                var i = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: i,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, e) {
                var i = $(t);
                e.append = $([]),
                e.trigger = $([]),
                i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.datepicker", function (t, i) {
                    return this._get(e, i)
                }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, e) {
                var i = this._get(e, "appendText"),
                    n = this._get(e, "isRTL");
                e.append && e.append.remove(),
                i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[n ? "before" : "after"](e.append)),
                t.unbind("focus", this._showDatepicker),
                e.trigger && e.trigger.remove();
                var s = this._get(e, "showOn");
                if (("focus" == s || "both" == s) && t.focus(this._showDatepicker), "button" == s || "both" == s) {
                        var o = this._get(e, "buttonText"),
                            r = this._get(e, "buttonImage");
                        e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                                src: r,
                                alt: o,
                                title: o
                            }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? o : $("<img/>").attr({
                                src: r,
                                alt: o,
                                title: o
                            }))),
                        t[n ? "before" : "after"](e.trigger),
                        e.trigger.click(function () {
                                return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]),
                                !1
                            })
                    }
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e = new Date(2009, 11, 20),
                        i = this._get(t, "dateFormat");
                    if (i.match(/[DM]/)) {
                            var n = function (t) {
                                for (var e = 0, i = 0, n = 0; n < t.length; n++) t[n].length > e && (e = t[n].length, i = n);
                                return i
                            };
                            e.setMonth(n(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                            e.setDate(n(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                        }
                    t.input.attr("size", this._formatDate(t, e).length)
                }
            },
            _inlineDatepicker: function (t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.datepicker", function (t, i) {
                    return this._get(e, i)
                }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, e, i, n, s) {
                var o = this._dialogInst;
                if (!o) {
                    this.uuid += 1;
                    var r = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px;"/>'),
                    this._dialogInput.keydown(this._doKeyDown),
                    $("body").append(this._dialogInput),
                    o = this._dialogInst = this._newInst(this._dialogInput, !1),
                    o.settings = {},
                    $.data(this._dialogInput[0], PROP_NAME, o)
                }
                if (extendRemove(o.settings, n || {}), e = e && e.constructor == Date ? this._formatDate(o, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
                    var a = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        h = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [a / 2 - 100 + h, l / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                o.settings.onSelect = i,
                this._inDialog = !0,
                this.dpDiv.addClass(this._dialogClass),
                this._showDatepicker(this._dialogInput[0]),
                $.blockUI && $.blockUI(this.dpDiv),
                $.data(this._dialogInput[0], PROP_NAME, o),
                this
            },
            _destroyDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        $.removeData(t, PROP_NAME),
                        "input" == n ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && e.removeClass(this.markerClassName).empty()
                    }
            },
            _enableDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        if ("input" == n) t.disabled = !1,
                        i.trigger.filter("button").each(function () {
                            this.disabled = !1
                        }).end().filter("img").css({
                            opacity: "1.0",
                            cursor: ""
                        });
                        else if ("div" == n || "span" == n) {
                            var s = e.children("." + this._inlineClass);
                            s.children().removeClass("ui-state-disabled"),
                            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                        }
                        this._disabledInputs = $.map(this._disabledInputs, function (e) {
                            return e == t ? null : e
                        })
                    }
            },
            _disableDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        if ("input" == n) t.disabled = !0,
                        i.trigger.filter("button").each(function () {
                            this.disabled = !0
                        }).end().filter("img").css({
                            opacity: "0.5",
                            cursor: "default"
                        });
                        else if ("div" == n || "span" == n) {
                            var s = e.children("." + this._inlineClass);
                            s.children().addClass("ui-state-disabled"),
                            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                        }
                        this._disabledInputs = $.map(this._disabledInputs, function (e) {
                            return e == t ? null : e
                        }),
                        this._disabledInputs[this._disabledInputs.length] = t
                    }
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] == t) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (t, e, i) {
                var n = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : n ? "all" == e ? $.extend({}, n.settings) : this._get(n, e) : null;
                var s = e || {};
                if ("string" == typeof e && (s = {}, s[e] = i), n) {
                    this._curInst == n && this._hideDatepicker();
                    var o = this._getDateDatepicker(t, !0),
                        r = this._getMinMaxDate(n, "min"),
                        a = this._getMinMaxDate(n, "max");
                    extendRemove(n.settings, s),
                    null !== r && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, r)),
                    null !== a && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, a)),
                    this._attachments($(t), n),
                    this._autoSize(n),
                    this._setDate(n, o),
                    this._updateAlternate(n),
                    this._updateDatepicker(n)
                }
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e),
                i ? this._getDate(i) : null
            },
            _doKeyDown: function (t) {
                var e = $.datepicker._getInst(t.target),
                    i = !0,
                    n = e.dpDiv.is(".ui-datepicker-rtl");
                if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(),
                        i = !1;
                        break;
                    case 13:
                        var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                        s[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, s[0]);
                        var o = $.datepicker._get(e, "onSelect");
                        if (o) {
                            var r = $.datepicker._formatDate(e);
                            o.apply(e.input ? e.input[0] : null, [r, e])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target),
                        i = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target),
                        i = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? 1 : -1, "D"),
                        i = t.ctrlKey || t.metaKey,
                        t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"),
                        i = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? -1 : 1, "D"),
                        i = t.ctrlKey || t.metaKey,
                        t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"),
                        i = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        i = !1
                    } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                i && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var e = $.datepicker._getInst(t.target);
                if ($.datepicker._get(e, "constrainInput")) {
                    var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                        n = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                    return t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1
                }
            },
            _doKeyUp: function (t) {
                var e = $.datepicker._getInst(t.target);
                if (e.input.val() != e.lastVal) try {
                    var i = $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e));
                    i && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                } catch (n) {
                    $.datepicker.log(n)
                }
                return !0
            },
            _showDatepicker: function (t) {
                if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                    var e = $.datepicker._getInst(t);
                    $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var i = $.datepicker._get(e, "beforeShow"),
                        n = i ? i.apply(t, [t, e]) : {};
                    if (n !== !1) {
                            extendRemove(e.settings, n),
                            e.lastVal = null,
                            $.datepicker._lastInput = t,
                            $.datepicker._setDateFromField(e),
                            $.datepicker._inDialog && (t.value = ""),
                            $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                            var s = !1;
                            $(t).parents().each(function () {
                                return s |= "fixed" == $(this).css("position"),
                                !s
                            });
                            var o = {
                                left: $.datepicker._pos[0],
                                top: $.datepicker._pos[1]
                            };
                            if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(e), o = $.datepicker._checkOffset(e, o, s), e.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                                display: "none",
                                left: o.left + "px",
                                top: o.top + "px"
                            }), !e.inline) {
                                var r = $.datepicker._get(e, "showAnim"),
                                    a = $.datepicker._get(e, "duration"),
                                    l = function () {
                                        var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                        if (t.length) {
                                            var i = $.datepicker._getBorders(e.dpDiv);
                                            t.css({
                                                left: -i[0],
                                                top: -i[1],
                                                width: e.dpDiv.outerWidth(),
                                                height: e.dpDiv.outerHeight()
                                            })
                                        }
                                    };
                                e.dpDiv.zIndex($(t).zIndex() + 1),
                                $.datepicker._datepickerShowing = !0,
                                $.effects && ($.effects.effect[r] || $.effects[r]) ? e.dpDiv.show(r, $.datepicker._get(e, "showOptions"), a, l) : e.dpDiv[r || "show"](r ? a : null, l),
                                (!r || !a) && l(),
                                e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(),
                                $.datepicker._curInst = e
                            }
                        }
                }
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4;
                var e = $.datepicker._getBorders(t.dpDiv);
                instActive = t,
                t.dpDiv.empty().append(this._generateHTML(t)),
                this._attachHandlers(t);
                var i = t.dpDiv.find("iframe.ui-datepicker-cover");
                !i.length || i.css({
                    left: -e[0],
                    top: -e[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                }),
                t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n = this._getNumberOfMonths(t),
                    s = n[1],
                    o = 17;
                if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                        var r = t.yearshtml;
                        setTimeout(function () {
                            r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                            r = t.yearshtml = null
                        }, 0)
                    }
            },
            _getBorders: function (t) {
                var e = function (t) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function (t, e, i) {
                var n = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? n - o : 0,
                e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0,
                e.top -= i && e.top == t.input.offset().top + r ? $(document).scrollTop() : 0,
                e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0),
                e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + r) : 0),
                e
            },
            _findPos: function (t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
                var n = $(t).offset();
                return [n.left, n.top]
            },
            _hideDatepicker: function (t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                    var i = this._get(e, "showAnim"),
                        n = this._get(e, "duration"),
                        s = function () {
                            $.datepicker._tidyDialog(e)
                        };
                    $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), n, s) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s),
                    i || s(),
                    this._datepickerShowing = !1;
                    var o = this._get(e, "onClose");
                    o && o.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]),
                    this._lastInput = null,
                    this._inDialog && (this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))),
                    this._inDialog = !1
                }
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                        (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
            },
            _gotoToday: function (t) {
                var e = $(t),
                    i = this._getInst(e[0]);
                if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay,
                i.drawMonth = i.selectedMonth = i.currentMonth,
                i.drawYear = i.selectedYear = i.currentYear;
                else {
                        var n = new Date;
                        i.selectedDay = n.getDate(),
                        i.drawMonth = i.selectedMonth = n.getMonth(),
                        i.drawYear = i.selectedYear = n.getFullYear()
                    }
                this._notifyChange(i),
                this._adjustDate(e)
            },
            _selectMonthYear: function (t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10),
                this._notifyChange(s),
                this._adjustDate(n)
            },
            _selectDay: function (t, e, i, n) {
                var s = $(t);
                if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                    var o = this._getInst(s[0]);
                    o.selectedDay = o.currentDay = $("a", n).html(),
                    o.selectedMonth = o.currentMonth = e,
                    o.selectedYear = o.currentYear = i,
                    this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
                }
            },
            _clearDate: function (t) {
                {
                    var e = $(t);
                    this._getInst(e[0])
                }
                this._selectDate(e, "")
            },
            _selectDate: function (t, e) {
                var i = $(t),
                    n = this._getInst(i[0]);
                e = null != e ? e : this._formatDate(n),
                n.input && n.input.val(e),
                this._updateAlternate(n);
                var s = this._get(n, "onSelect");
                s ? s.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"),
                n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var e = this._get(t, "altField");
                if (e) {
                    var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        n = this._getDate(t),
                        s = this.formatDate(i, n, this._getFormatConfig(t));
                    $(e).each(function () {
                            $(this).val(s)
                        })
                }
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function (t) {
                var e = new Date(t.getTime());
                e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var i = e.getTime();
                return e.setMonth(0),
                e.setDate(1),
                Math.floor(Math.round((i - e) / 864e5) / 7) + 1
            },
            parseDate: function (t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if (e = "object" == typeof e ? e.toString() : e + "", "" == e) return null;
                var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, h = -1, c = -1, u = -1, d = !1, p = function (e) {
                    var i = b + 1 < t.length && t.charAt(b + 1) == e;
                    return i && b++,
                    i
                }, f = function (t) {
                    var i = p(t),
                        n = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                        s = new RegExp("^\\d{1," + n + "}"),
                        o = e.substring(v).match(s);
                    if (!o) throw "Missing number at position " + v;
                    return v += o[0].length,
                    parseInt(o[0], 10)
                }, g = function (t, i, n) {
                    var s = $.map(p(t) ? n : i, function (t, e) {
                        return [[e, t]]
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length)
                    }),
                        o = -1;
                    if ($.each(s, function (t, i) {
                            var n = i[1];
                            return e.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (o = i[0], v += n.length, !1) : void 0
                        }), -1 != o) return o + 1;
                    throw "Unknown name at position " + v
                }, m = function () {
                    if (e.charAt(v) != t.charAt(b)) throw "Unexpected literal at position " + v;
                    v++
                }, v = 0, b = 0; b < t.length; b++) if (d)"'" != t.charAt(b) || p("'") ? m() : d = !1;
                else switch (t.charAt(b)) {
                case "d":
                    c = f("d");
                    break;
                case "D":
                    g("D", s, o);
                    break;
                case "o":
                    u = f("o");
                    break;
                case "m":
                    h = f("m");
                    break;
                case "M":
                    h = g("M", r, a);
                    break;
                case "y":
                    l = f("y");
                    break;
                case "@":
                    var y = new Date(f("@"));
                    l = y.getFullYear(),
                    h = y.getMonth() + 1,
                    c = y.getDate();
                    break;
                case "!":
                    var y = new Date((f("!") - this._ticksTo1970) / 1e4);
                    l = y.getFullYear(),
                    h = y.getMonth() + 1,
                    c = y.getDate();
                    break;
                case "'":
                    p("'") ? m() : d = !0;
                    break;
                default:
                    m()
                }
                if (v < e.length) {
                    var _ = e.substr(v);
                    if (!/^\s+/.test(_)) throw "Extra/unparsed characters found in date: " + _
                }
                if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), u > -1) for (h = 1, c = u;;) {
                    var w = this._getDaysInMonth(l, h - 1);
                    if (w >= c) break;
                    h++,
                    c -= w
                }
                var y = this._daylightSavingAdjust(new Date(l, h - 1, c));
                if (y.getFullYear() != l || y.getMonth() + 1 != h || y.getDate() != c) throw "Invalid date";
                return y
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    a = function (e) {
                        var i = d + 1 < t.length && t.charAt(d + 1) == e;
                        return i && d++,
                        i
                    },
                    l = function (t, e, i) {
                        var n = "" + e;
                        if (a(t)) for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    h = function (t, e, i, n) {
                        return a(t) ? n[e] : i[e]
                    },
                    c = "",
                    u = !1;
                if (e) for (var d = 0; d < t.length; d++) if (u)"'" != t.charAt(d) || a("'") ? c += t.charAt(d) : u = !1;
                else switch (t.charAt(d)) {
                    case "d":
                        c += l("d", e.getDate(), 2);
                        break;
                    case "D":
                        c += h("D", e.getDay(), n, s);
                        break;
                    case "o":
                        c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        c += l("m", e.getMonth() + 1, 2);
                        break;
                    case "M":
                        c += h("M", e.getMonth(), o, r);
                        break;
                    case "y":
                        c += a("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                        break;
                    case "@":
                        c += e.getTime();
                        break;
                    case "!":
                        c += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        a("'") ? c += "'" : u = !0;
                        break;
                    default:
                        c += t.charAt(d)
                    }
                return c
            },
            _possibleChars: function (t) {
                for (var e = "", i = !1, n = function (e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) == e;
                    return i && s++,
                    i
                }, s = 0; s < t.length; s++) if (i)"'" != t.charAt(s) || n("'") ? e += t.charAt(s) : i = !1;
                else switch (t.charAt(s)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    e += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    n("'") ? e += "'" : i = !0;
                    break;
                default:
                    e += t.charAt(s)
                }
                return e
            },
            _get: function (t, e) {
                return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() != t.lastVal) {
                    var i, n, s = this._get(t, "dateFormat"),
                        o = t.lastVal = t.input ? t.input.val() : null;
                    i = n = this._getDefaultDate(t);
                    var r = this._getFormatConfig(t);
                    try {
                            i = this.parseDate(s, o, r) || n
                        } catch (a) {
                            this.log(a),
                            o = e ? "" : o
                        }
                    t.selectedDay = i.getDate(),
                    t.drawMonth = t.selectedMonth = i.getMonth(),
                    t.drawYear = t.selectedYear = i.getFullYear(),
                    t.currentDay = o ? i.getDate() : 0,
                    t.currentMonth = o ? i.getMonth() : 0,
                    t.currentYear = o ? i.getFullYear() : 0,
                    this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (t, e, i) {
                var n = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t),
                    e
                },
                    s = function (e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var n = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                            switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10),
                                r = Math.min(r, $.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10),
                                r = Math.min(r, $.datepicker._getDaysInMonth(s, o))
                            }
                            l = a.exec(e)
                        }
                        return new Date(s, o, r)
                    },
                    o = null == e || "" === e ? i : "string" == typeof e ? s(e) : "number" == typeof e ? isNaN(e) ? i : n(e) : new Date(e.getTime());
                return o = o && "Invalid Date" == o.toString() ? i : o,
                o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)),
                this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(),
                t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(),
                t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(),
                (s != t.selectedMonth || o != t.selectedYear) && !i && this._notifyChange(t),
                this._adjustInstDate(t),
                t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                var e = !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function (t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                        var t = {
                            prev: function () {
                                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                            },
                            next: function () {
                                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                            },
                            hide: function () {
                                window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                            },
                            today: function () {
                                window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                            },
                            selectDay: function () {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                !1
                            },
                            selectMonth: function () {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"),
                                !1
                            },
                            selectYear: function () {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"),
                                !1
                            }
                        };
                        $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
            },
            _generateHTML: function (t) {
                var e = new Date;
                e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                var i = this._get(t, "isRTL"),
                    n = this._get(t, "showButtonPanel"),
                    s = this._get(t, "hideIfNoPrevNext"),
                    o = this._get(t, "navigationAsDateFormat"),
                    r = this._getNumberOfMonths(t),
                    a = this._get(t, "showCurrentAtPos"),
                    l = this._get(t, "stepMonths"),
                    h = 1 != r[0] || 1 != r[1],
                    c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    u = this._getMinMaxDate(t, "min"),
                    d = this._getMinMaxDate(t, "max"),
                    p = t.drawMonth - a,
                    f = t.drawYear;
                if (0 > p && (p += 12, f--), d) {
                        var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - r[0] * r[1] + 1, d.getDate()));
                        for (g = u && u > g ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) p--,
                        0 > p && (p = 11, f--)
                    }
                t.drawMonth = p,
                t.drawYear = f;
                var m = this._get(t, "prevText");
                m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
                var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                    b = this._get(t, "nextText");
                b = o ? this.formatDate(b, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : b;
                var y = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>",
                    _ = this._get(t, "currentText"),
                    w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                _ = o ? this.formatDate(_, w, this._getFormatConfig(t)) : _;
                var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                    C = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + _ + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                    k = parseInt(this._get(t, "firstDay"), 10);
                k = isNaN(k) ? 0 : k;
                for (var T = this._get(t, "showWeek"), D = this._get(t, "dayNames"), S = (this._get(t, "dayNamesShort"), this._get(t, "dayNamesMin")), E = this._get(t, "monthNames"), I = this._get(t, "monthNamesShort"), P = this._get(t, "beforeShowDay"), N = this._get(t, "showOtherMonths"), A = this._get(t, "selectOtherMonths"), H = (this._get(t, "calculateWeek") || this.iso8601Week, this._getDefaultDate(t)), M = "", O = 0; O < r[0]; O++) {
                        var j = "";
                        this.maxRows = 4;
                        for (var z = 0; z < r[1]; z++) {
                            var W = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                                L = " ui-corner-all",
                                F = "";
                            if (h) {
                                    if (F += '<div class="ui-datepicker-group', r[1] > 1) switch (z) {
                                    case 0:
                                        F += " ui-datepicker-group-first",
                                        L = " ui-corner-" + (i ? "right" : "left");
                                        break;
                                    case r[1] - 1:
                                        F += " ui-datepicker-group-last",
                                        L = " ui-corner-" + (i ? "left" : "right");
                                        break;
                                    default:
                                        F += " ui-datepicker-group-middle",
                                        L = ""
                                    }
                                    F += '">'
                                }
                            F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + L + '">' + (/all|left/.test(L) && 0 == O ? i ? y : v : "") + (/all|right/.test(L) && 0 == O ? i ? v : y : "") + this._generateMonthYearHeader(t, p, f, u, d, O > 0 || z > 0, E, I) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                            for (var B = T ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", R = 0; 7 > R; R++) {
                                    var q = (R + k) % 7;
                                    B += "<th" + ((R + k + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + D[q] + '">' + S[q] + "</span></th>"
                                }
                            F += B + "</tr></thead><tbody>";
                            var Y = this._getDaysInMonth(f, p);
                            f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, Y));
                            var Q = (this._getFirstDayOfMonth(f, p) - k + 7) % 7,
                                U = Math.ceil((Q + Y) / 7),
                                V = h && this.maxRows > U ? this.maxRows : U;
                            this.maxRows = V;
                            for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - Q)), K = 0; V > K; K++) {
                                    F += "<tr>";
                                    for (var J = T ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(X) + "</td>" : "", R = 0; 7 > R; R++) {
                                        var G = P ? P.apply(t.input ? t.input[0] : null, [X]) : [!0, ""],
                                            Z = X.getMonth() != p,
                                            te = Z && !A || !G[0] || u && u > X || d && X > d;
                                        J += '<td class="' + ((R + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == W.getTime() && p == t.selectedMonth && t._keyEvent || H.getTime() == X.getTime() && H.getTime() == W.getTime() ? " " + this._dayOverClass : "") + (te ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !N ? "" : " " + G[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !N || !G[2] ? "" : ' title="' + G[2] + '"') + (te ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !N ? "&#xa0;" : te ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == e.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>",
                                        X.setDate(X.getDate() + 1),
                                        X = this._daylightSavingAdjust(X)
                                    }
                                    F += J + "</tr>"
                                }
                            p++,
                            p > 11 && (p = 0, f++),
                            F += "</tbody></table>" + (h ? "</div>" + (r[0] > 0 && z == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""),
                            j += F
                        }
                        M += j
                    }
                return M += C + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""),
                t._keyEvent = !1,
                M
            },
            _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
                var l = this._get(t, "changeMonth"),
                    h = this._get(t, "changeYear"),
                    c = this._get(t, "showMonthAfterYear"),
                    u = '<div class="ui-datepicker-title">',
                    d = "";
                if (o || !l) d += '<span class="ui-datepicker-month">' + r[e] + "</span>";
                else {
                        var p = n && n.getFullYear() == i,
                            f = s && s.getFullYear() == i;
                        d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                        for (var g = 0; 12 > g; g++)(!p || g >= n.getMonth()) && (!f || g <= s.getMonth()) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                        d += "</select>"
                    }
                if (c || (u += d + (!o && l && h ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !h) u += '<span class="ui-datepicker-year">' + i + "</span>";
                else {
                        var m = this._get(t, "yearRange").split(":"),
                            v = (new Date).getFullYear(),
                            b = function (t) {
                                var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? v : e
                            },
                            y = b(m[0]),
                            _ = Math.max(y, b(m[1] || ""));
                        for (y = n ? Math.max(y, n.getFullYear()) : y, _ = s ? Math.min(_, s.getFullYear()) : _, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; _ >= y; y++) t.yearshtml += '<option value="' + y + '"' + (y == i ? ' selected="selected"' : "") + ">" + y + "</option>";
                        t.yearshtml += "</select>",
                        u += t.yearshtml,
                        t.yearshtml = null
                    }
                return u += this._get(t, "yearSuffix"),
                c && (u += (!o && l && h ? "" : "&#xa0;") + d),
                u += "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.drawYear + ("Y" == i ? e : 0),
                    s = t.drawMonth + ("M" == i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(),
                t.drawMonth = t.selectedMonth = r.getMonth(),
                t.drawYear = t.selectedYear = r.getFullYear(),
                ("M" == i || "Y" == i) && this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return s = n && s > n ? n : s
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
                this._isInRange(t, o)
            },
            _isInRange: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max");
                return (!i || e.getTime() >= i.getTime()) && (!n || e.getTime() <= n.getTime())
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }),
    $.fn.datepicker = function (t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function () {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        },
    $.datepicker = new Datepicker,
    $.datepicker.initialized = !1,
    $.datepicker.uuid = (new Date).getTime(),
    $.datepicker.version = "1.9.0",
    window["DP_jQuery_" + dpuuid] = $
}(jQuery),


function (t, e) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        n = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        s = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
            version: "1.9.0",
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function (e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function () {
                this.originalTitle = this.element.attr("title"),
                "string" != typeof this.originalTitle && (this.originalTitle = ""),
                this.oldPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                },
                this.options.title = this.options.title || this.originalTitle; {
                    var e = this,
                        n = this.options,
                        s = n.title || "&#160;",
                        o = (this.uiDialog = t("<div>")).addClass(i + n.dialogClass).css({
                            display: "none",
                            outline: 0,
                            zIndex: n.zIndex
                        }).attr("tabIndex", -1).keydown(function (i) {
                            n.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
                        }).mousedown(function (t) {
                            e.moveToTop(!1, t)
                        }).appendTo("body"),
                        r = (this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(o), (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").prependTo(o)),
                        a = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (t) {
                            t.preventDefault(),
                            e.close(t)
                        }).appendTo(r),
                        l = ((this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(a), t("<span>").uniqueId().addClass("ui-dialog-title").html(s).prependTo(r)),
                        h = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                        (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(h)
                }
                o.attr({
                    role: "dialog",
                    "aria-labelledby": l.attr("id")
                }),
                r.find("*").add(r).disableSelection(),
                this._hoverable(a),
                this._focusable(a),
                n.draggable && t.fn.draggable && this._makeDraggable(),
                n.resizable && t.fn.resizable && this._makeResizable(),
                this._createButtons(n.buttons),
                this._isOpen = !1,
                t.fn.bgiframe && o.bgiframe(),
                this._on(o, {
                    keydown: function (e) {
                        if (n.modal && e.keyCode === t.ui.keyCode.TAB) {
                            var i = t(":tabbable", o),
                                s = i.filter(":first"),
                                r = i.filter(":last");
                            return e.target !== r[0] || e.shiftKey ? e.target === s[0] && e.shiftKey ? (r.focus(1), !1) : void 0 : (s.focus(1), !1)
                        }
                    }
                })
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _destroy: function () {
                var t, e = this.oldPosition;
                this.overlay && this.overlay.destroy(),
                this.uiDialog.hide(),
                this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
                this.uiDialog.remove(),
                this.originalTitle && this.element.attr("title", this.originalTitle),
                t = e.parent.children().eq(e.index),
                t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            close: function (e) {
                var i, n, s = this;
                if (this._isOpen && !1 !== this._trigger("beforeClose", e)) return this._isOpen = !1,
                this.overlay && this.overlay.destroy(),
                this.options.hide ? this.uiDialog.hide(this.options.hide, function () {
                    s._trigger("close", e)
                }) : (this.uiDialog.hide(), this._trigger("close", e)),
                t.ui.dialog.overlay.resize(),
                this.options.modal && (i = 0, t(".ui-dialog").each(function () {
                    this !== s.uiDialog[0] && (n = t(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
                }), t.ui.dialog.maxZ = i),
                this
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function (e, i) {
                var n, s = this.options;
                return s.modal && !e || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = s.zIndex), this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), n = {
                    scrollTop: this.element.scrollTop(),
                    scrollLeft: this.element.scrollLeft()
                }, t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(n), this._trigger("focus", i), this)
            },
            open: function () {
                if (!this._isOpen) {
                    var e, i = this.options,
                        n = this.uiDialog;
                    return this._size(),
                    this._position(i.position),
                    n.show(i.show),
                    this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null,
                    this.moveToTop(!0),
                    e = this.element.find(":tabbable"),
                    e.length || (e = this.uiDialogButtonPane.find(":tabbable"), e.length || (e = n)),
                    e.eq(0).focus(),
                    this._isOpen = !0,
                    this._trigger("open"),
                    this
                }
            },
            _createButtons: function (e) {
                var i = this,
                    n = !1;
                this.uiDialogButtonPane.remove(),
                this.uiButtonSet.empty(),
                "object" == typeof e && null !== e && t.each(e, function () {
                        return !(n = !0)
                    }),
                n ? (t.each(e, function (e, n) {
                        n = t.isFunction(n) ? {
                            click: n,
                            text: e
                        } : n;
                        var s = t("<button type='button'>").attr(n, !0).unbind("click").click(function () {
                            n.click.apply(i.element[0], arguments)
                        }).appendTo(i.uiButtonSet);
                        t.fn.button && s.button()
                    }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
            },
            _makeDraggable: function () {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function (n, s) {
                            t(this).addClass("ui-dialog-dragging"),
                            i._trigger("dragStart", n, e(s))
                        },
                        drag: function (t, n) {
                            i._trigger("drag", t, e(n))
                        },
                        stop: function (s, o) {
                            n.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()],
                            t(this).removeClass("ui-dialog-dragging"),
                            i._trigger("dragStop", s, e(o)),
                            t.ui.dialog.overlay.resize()
                        }
                    })
            },
            _makeResizable: function (i) {
                function n(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                i = i === e ? this.options.resizable : i;
                var s = this,
                    o = this.options,
                    r = this.uiDialog.css("position"),
                    a = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: o.maxWidth,
                        maxHeight: o.maxHeight,
                        minWidth: o.minWidth,
                        minHeight: this._minHeight(),
                        handles: a,
                        start: function (e, i) {
                            t(this).addClass("ui-dialog-resizing"),
                            s._trigger("resizeStart", e, n(i))
                        },
                        resize: function (t, e) {
                            s._trigger("resize", t, n(e))
                        },
                        stop: function (e, i) {
                            t(this).removeClass("ui-dialog-resizing"),
                            o.height = t(this).height(),
                            o.width = t(this).width(),
                            s._trigger("resizeStop", e, n(i)),
                            t.ui.dialog.overlay.resize()
                        }
                    }).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function (e) {
                var i, n = [],
                    s = [0, 0];
                e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (n = e.split ? e.split(" ") : [e[0], e[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function (t, e) {
                        +n[t] === n[t] && (s[t] = n[t], n[t] = e)
                    }), e = {
                        my: n.join(" "),
                        at: n.join(" "),
                        offset: s.join(" ")
                    }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position,
                i = this.uiDialog.is(":visible"),
                i || this.uiDialog.show(),
                this.uiDialog.position(e),
                i || this.uiDialog.hide()
            },
            _setOptions: function (e) {
                var i = this,
                    o = {},
                    r = !1;
                t.each(e, function (t, e) {
                        i._setOption(t, e),
                        t in n && (r = !0),
                        t in s && (o[t] = e)
                    }),
                r && this._size(),
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
            },
            _setOption: function (e, n) {
                var s, o, r = this.uiDialog;
                switch (e) {
                case "buttons":
                    this._createButtons(n);
                    break;
                case "closeText":
                    this.uiDialogTitlebarCloseText.text("" + n);
                    break;
                case "dialogClass":
                    r.removeClass(this.options.dialogClass).addClass(i + n);
                    break;
                case "disabled":
                    n ? r.addClass("ui-dialog-disabled") : r.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    s = r.is(":data(draggable)"),
                    s && !n && r.draggable("destroy"),
                    !s && n && this._makeDraggable();
                    break;
                case "position":
                    this._position(n);
                    break;
                case "resizable":
                    o = r.is(":data(resizable)"),
                    o && !n && r.resizable("destroy"),
                    o && "string" == typeof n && r.resizable("option", "handles", n),
                    !o && n !== !1 && this._makeResizable(n);
                    break;
                case "title":
                    t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"))
                }
                this._super(e, n)
            },
            _size: function () {
                var e, i, n, s = this.options,
                    o = this.uiDialog.is(":visible");
                this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        height: 0
                    }),
                s.minWidth > s.width && (s.width = s.minWidth),
                e = this.uiDialog.css({
                        height: "auto",
                        width: s.width
                    }).outerHeight(),
                i = Math.max(0, s.minHeight - e),
                "auto" === s.height ? t.support.minHeight ? this.element.css({
                        minHeight: i,
                        height: "auto"
                    }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), o || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - e, 0)),
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }),
    t.extend(t.ui.dialog, {
            uuid: 0,
            maxZ: 0,
            getTitleId: function (t) {
                var e = t.attr("id");
                return e || (this.uuid += 1, e = this.uuid),
                "ui-dialog-title-" + e
            },
            overlay: function (e) {
                this.$el = t.ui.dialog.overlay.create(e)
            }
        }),
    t.extend(t.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (t) {
                return t + ".dialog-overlay"
            }).join(" "),
            create: function (e) {
                0 === this.instances.length && (setTimeout(function () {
                    t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function (e) {
                        return t(e.target).zIndex() < t.ui.dialog.overlay.maxZ ? !1 : void 0
                    })
                }, 1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
                var i = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
                return t(document).bind("keydown.dialog-overlay", function (n) {
                    var s = t.ui.dialog.overlay.instances;
                    0 !== s.length && s[s.length - 1] === i && e.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === t.ui.keyCode.ESCAPE && (e.close(n), n.preventDefault())
                }),
                i.appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                }),
                t.fn.bgiframe && i.bgiframe(),
                this.instances.push(i),
                i
            },
            destroy: function (e) {
                var i = t.inArray(e, this.instances),
                    n = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]),
                0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"),
                e.height(0).width(0).remove(),
                t.each(this.instances, function () {
                        n = Math.max(n, this.css("z-index"))
                    }),
                this.maxZ = n
            },
            height: function () {
                var e, i;
                return t.browser.msie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px"
            },
            width: function () {
                var e, i;
                return t.browser.msie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px"
            },
            resize: function () {
                var e = t([]);
                t.each(t.ui.dialog.overlay.instances, function () {
                    e = e.add(this)
                }),
                e.css({
                    width: 0,
                    height: 0
                }).css({
                    width: t.ui.dialog.overlay.width(),
                    height: t.ui.dialog.overlay.height()
                })
            }
        }),
    t.extend(t.ui.dialog.overlay.prototype, {
            destroy: function () {
                t.ui.dialog.overlay.destroy(this.$el)
            }
        })
}(jQuery),


function (t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            "original" == this.options.helper && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function (e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}),
                !1;
                this.position = n.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function (e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)),
            this.dropped && (i = this.dropped, this.dropped = !1);
            for (var n = this.element[0], s = !1; n && (n = n.parentNode);) n == document && (s = !0);
            if (!s && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var o = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    o._trigger("stop", e) !== !1 && o._clear()
                })
            } else this._trigger("stop", e) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (e) {
            return t("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function (e) {
            var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
            return t(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == e.target && (i = !0)
            }),
            i
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo),
            n[0] != this.element[0] && !/(fixed|absolute)/.test(n.css("position")) && n.css("position", "absolute"),
            n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
            else {
                var i = t(e.containment),
                    n = i[0];
                if (!n) return;
                var s = (i.offset(), "hidden" != t(n).css("overflow"));
                this.containment = [(parseInt(t(n).css("borderLeftWidth"), 10) || 0) + (parseInt(t(n).css("paddingLeft"), 10) || 0), (parseInt(t(n).css("borderTopWidth"), 10) || 0) + (parseInt(t(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(t(n).css("borderLeftWidth"), 10) || 0) - (parseInt(t(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(t(n).css("borderTopWidth"), 10) || 0) - (parseInt(t(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = i
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" == e ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
        },
        _generatePosition: function (e) {
            var i = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName),
                o = e.pageX,
                r = e.pageY;
            if (this.originalPosition) {
                    var a;
                    if (this.containment) {
                        if (this.relative_container) {
                            var l = this.relative_container.offset();
                            a = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                        } else a = this.containment;
                        e.pageX - this.offset.click.left < a[0] && (o = a[0] + this.offset.click.left),
                        e.pageY - this.offset.click.top < a[1] && (r = a[1] + this.offset.click.top),
                        e.pageX - this.offset.click.left > a[2] && (o = a[2] + this.offset.click.left),
                        e.pageY - this.offset.click.top > a[3] && (r = a[3] + this.offset.click.top)
                    }
                    if (i.grid) {
                        var h = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                        r = a && (h - this.offset.click.top < a[1] || h - this.offset.click.top > a[3]) ? h - this.offset.click.top < a[1] ? h + i.grid[1] : h - i.grid[1] : h;
                        var c = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                        o = a && (c - this.offset.click.left < a[0] || c - this.offset.click.left > a[2]) ? c - this.offset.click.left < a[0] ? c + i.grid[0] : c - i.grid[0] : c
                    }
                }
            return {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function (e, i, n) {
            return n = n || this._uiHash(),
            t.ui.plugin.call(this, e, [i, n]),
            "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")),
            t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i) {
            var n = t(this).data("draggable"),
                s = n.options,
                o = t.extend({}, i, {
                    item: n.element
                });
            n.sortables = [],
            t(s.connectToSortable).each(function () {
                    var i = t.data(this, "sortable");
                    i && !i.options.disabled && (n.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", e, o))
                })
        },
        stop: function (e, i) {
            var n = t(this).data("draggable"),
                s = t.extend({}, i, {
                    item: n.element
                });
            t.each(n.sortables, function () {
                    this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
                })
        },
        drag: function (e, i) {
            var n = t(this).data("draggable"),
                s = this;
            t.each(n.sortables, function () {
                    this.instance.positionAbs = n.positionAbs,
                    this.instance.helperProportions = n.helperProportions,
                    this.instance.offset.click = n.offset.click,
                    this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                        return i.helper[0]
                    }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
                })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var e = t("body"),
                i = t(this).data("draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")),
            e.css("cursor", i.cursor)
        },
        stop: function () {
            var e = t(this).data("draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i) {
            var n = t(i.helper),
                s = t(this).data("draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")),
            n.css("opacity", s.opacity)
        },
        stop: function (e, i) {
            var n = t(this).data("draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var e = t(this).data("draggable");
            e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function (e) {
            var i = t(this).data("draggable"),
                n = i.options,
                s = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))),
            s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function () {
            var e = t(this).data("draggable"),
                i = e.options;
            e.snapElements = [],
            t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                    var i = t(this),
                        n = i.offset();
                    this != e.element[0] && e.snapElements.push({
                            item: this,
                            width: i.outerWidth(),
                            height: i.outerHeight(),
                            top: n.top,
                            left: n.left
                        })
                })
        },
        drag: function (e, i) {
            for (var n = t(this).data("draggable"), s = n.options, o = s.snapTolerance, r = i.offset.left, a = r + n.helperProportions.width, l = i.offset.top, h = l + n.helperProportions.height, c = n.snapElements.length - 1; c >= 0; c--) {
                var u = n.snapElements[c].left,
                    d = u + n.snapElements[c].width,
                    p = n.snapElements[c].top,
                    f = p + n.snapElements[c].height;
                if (r > u - o && d + o > r && l > p - o && f + o > l || r > u - o && d + o > r && h > p - o && f + o > h || a > u - o && d + o > a && l > p - o && f + o > l || a > u - o && d + o > a && h > p - o && f + o > h) {
                        if ("inner" != s.snapMode) {
                            var g = Math.abs(p - h) <= o,
                                m = Math.abs(f - l) <= o,
                                v = Math.abs(u - a) <= o,
                                b = Math.abs(d - r) <= o;
                            g && (i.position.top = n._convertPositionTo("relative", {
                                    top: p - n.helperProportions.height,
                                    left: 0
                                }).top - n.margins.top),
                            m && (i.position.top = n._convertPositionTo("relative", {
                                    top: f,
                                    left: 0
                                }).top - n.margins.top),
                            v && (i.position.left = n._convertPositionTo("relative", {
                                    top: 0,
                                    left: u - n.helperProportions.width
                                }).left - n.margins.left),
                            b && (i.position.left = n._convertPositionTo("relative", {
                                    top: 0,
                                    left: d
                                }).left - n.margins.left)
                        }
                        var y = g || m || v || b;
                        if ("outer" != s.snapMode) {
                            var g = Math.abs(p - l) <= o,
                                m = Math.abs(f - h) <= o,
                                v = Math.abs(u - r) <= o,
                                b = Math.abs(d - a) <= o;
                            g && (i.position.top = n._convertPositionTo("relative", {
                                    top: p,
                                    left: 0
                                }).top - n.margins.top),
                            m && (i.position.top = n._convertPositionTo("relative", {
                                    top: f - n.helperProportions.height,
                                    left: 0
                                }).top - n.margins.top),
                            v && (i.position.left = n._convertPositionTo("relative", {
                                    top: 0,
                                    left: u
                                }).left - n.margins.left),
                            b && (i.position.left = n._convertPositionTo("relative", {
                                    top: 0,
                                    left: d - n.helperProportions.width
                                }).left - n.margins.left)
                        }!n.snapElements[c].snapping && (g || m || v || b || y) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                            snapItem: n.snapElements[c].item
                        })),
                        n.snapElements[c].snapping = g || m || v || b || y
                    } else n.snapElements[c].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[c].item
                    })),
                n.snapElements[c].snapping = !1
            }
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function () {
            var e = t(this).data("draggable").options,
                i = t.makeArray(t(e.stack)).sort(function (e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            if (i.length) {
                    var n = parseInt(i[0].style.zIndex) || 0;
                    t(i).each(function (t) {
                        this.style.zIndex = n + t
                    }),
                    this[0].style.zIndex = n + i.length
                }
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i) {
            var n = t(i.helper),
                s = t(this).data("draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")),
            n.css("zIndex", s.zIndex)
        },
        stop: function (e, i) {
            var n = t(this).data("draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    })
}(jQuery),


function (t) {
    t.widget("ui.droppable", {
        version: "1.9.0",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var e = this.options,
                i = e.accept;
            this.isover = 0,
            this.isout = 1,
            this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                },
            this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                },
            t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [],
            t.ui.ddmanager.droppables[e.scope].push(this),
            e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }),
            t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var n = i || t.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
            var s = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var e = t.data(this, "droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope == n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (s = !0, !1) : void 0
            }),
            s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }),
    t.ui.intersect = function (e, i, n) {
        if (!i.offset) return !1;
        var s = (e.positionAbs || e.position.absolute).left,
            o = s + e.helperProportions.width,
            r = (e.positionAbs || e.position.absolute).top,
            a = r + e.helperProportions.height,
            l = i.offset.left,
            h = l + i.proportions.width,
            c = i.offset.top,
            u = c + i.proportions.height;
        switch (n) {
            case "fit":
                return s >= l && h >= o && r >= c && u >= a;
            case "intersect":
                return l < s + e.helperProportions.width / 2 && o - e.helperProportions.width / 2 < h && c < r + e.helperProportions.height / 2 && a - e.helperProportions.height / 2 < u;
            case "pointer":
                var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                    p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
                    f = t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);
                return f;
            case "touch":
                return (r >= c && u >= r || a >= c && u >= a || c > r && a > u) && (s >= l && h >= s || o >= l && h >= o || l > s && o > h);
            default:
                return !1
            }
    },
    t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (e, i) {
            var n = t.ui.ddmanager.droppables[e.options.scope] || [],
                s = i ? i.type : null,
                o = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            t: for (var r = 0; r < n.length; r++) if (!(n[r].options.disabled || e && !n[r].accept.call(n[r].element[0], e.currentItem || e.element))) {
                    for (var a = 0; a < o.length; a++) if (o[a] == n[r].element[0]) {
                        n[r].proportions.height = 0;
                        continue t
                    }
                    n[r].visible = "none" != n[r].element.css("display"),
                    n[r].visible && ("mousedown" == s && n[r]._activate.call(n[r], i), n[r].offset = n[r].element.offset(), n[r].proportions = {
                        width: n[r].element[0].offsetWidth,
                        height: n[r].element[0].offsetHeight
                    })
                }
        },
        drop: function (e, i) {
            var n = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }),
            n
        },
        dragStart: function (e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n = t.ui.intersect(e, this, this.options.tolerance),
                        s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                    if (s) {
                            var o;
                            if (this.options.greedy) {
                                var r = this.options.scope,
                                    a = this.element.parents(":data(droppable)").filter(function () {
                                        return t.data(this, "droppable").options.scope === r
                                    });
                                a.length && (o = t.data(a[0], "droppable"), o.greedyChild = "isover" == s ? 1 : 0)
                            }
                            o && "isover" == s && (o.isover = 0, o.isout = 1, o._out.call(o, i)),
                            this[s] = 1,
                            this["isout" == s ? "isover" : "isout"] = 0,
                            this["isover" == s ? "_over" : "_out"].call(this, i),
                            o && "isout" == s && (o.isout = 0, o.isover = 1, o._over.call(o, i))
                        }
                }
            })
        },
        dragStop: function (e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
jQuery.effects ||
function (t, e) {
    var i = t.uiBackCompat !== !1,
        n = "ui-effects-";
    t.effects = {
            effect: {}
        },


    function (e, i) {
            function n(t, e, i) {
                var n = d[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }
            function s(t) {
                var i = c(),
                    n = i._rgba = [];
                return t = t.toLowerCase(),
                g(h, function (e, s) {
                        var o, r = s.re.exec(t),
                            a = r && s.parse(r),
                            l = s.space || "rgba";
                        return a ? (o = i[l](a), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }),
                n.length ? ("0,0,0,0" === n.join() && e.extend(n, r.transparent), i) : r[t]
            }
            function o(t, e, i) {
                return i = (i + 1) % 1,
                1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var r, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                l = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                },
                {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                },
                {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                },
                {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                },
                {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                c = e.Color = function (t, i, n, s) {
                    return new e.Color.fn.parse(t, i, n, s)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                p = c.support = {},
                f = e("<p>")[0],
                g = e.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)",
            p.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
            g(u, function (t, e) {
                    e.cache = "_" + t,
                    e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }),
            c.fn = e.extend(c.prototype, {
                    parse: function (o, a, l, h) {
                        if (o === i) return this._rgba = [null, null, null, null],
                        this;
                        (o.jquery || o.nodeType) && (o = e(o).css(a), a = i);
                        var d = this,
                            p = e.type(o),
                            f = this._rgba = [];
                        return a !== i && (o = [o, a, l, h], p = "array"),
                        "string" === p ? this.parse(s(o) || r._default) : "array" === p ? (g(u.rgba.props, function (t, e) {
                                f[e.idx] = n(o[e.idx], e)
                            }), this) : "object" === p ? (o instanceof c ? g(u, function (t, e) {
                                o[e.cache] && (d[e.cache] = o[e.cache].slice())
                            }) : g(u, function (e, i) {
                                var s = i.cache;
                                g(i.props, function (t, e) {
                                    if (!d[s] && i.to) {
                                        if ("alpha" === t || null == o[t]) return;
                                        d[s] = i.to(d._rgba)
                                    }
                                    d[s][e.idx] = n(o[t], e, !0)
                                }),
                                d[s] && t.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])))
                            }), this) : void 0
                    },
                    is: function (t) {
                        var e = c(t),
                            i = !0,
                            n = this;
                        return g(u, function (t, s) {
                                var o, r = e[s.cache];
                                return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], g(s.props, function (t, e) {
                                    return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                                })),
                                i
                            }),
                        i
                    },
                    _space: function () {
                        var t = [],
                            e = this;
                        return g(u, function (i, n) {
                                e[n.cache] && t.push(i)
                            }),
                        t.pop()
                    },
                    transition: function (t, e) {
                        var i = c(t),
                            s = i._space(),
                            o = u[s],
                            r = 0 === this.alpha() ? c("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            l = a.slice();
                        return i = i[o.cache],
                        g(o.props, function (t, s) {
                                var o = s.idx,
                                    r = a[o],
                                    h = i[o],
                                    c = d[s.type] || {};
                                null !== h && (null === r ? l[o] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), l[o] = n((h - r) * e + r, s)))
                            }),
                        this[s](l)
                    },
                    blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = c(t)._rgba;
                        return c(e.map(i, function (t, e) {
                                return (1 - n) * s[e] + n * t
                            }))
                    },
                    toRgbaString: function () {
                        var t = "rgba(",
                            i = e.map(this._rgba, function (t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), t = "rgb("),
                        t + i.join() + ")"
                    },
                    toHslaString: function () {
                        var t = "hsla(",
                            i = e.map(this.hsla(), function (t, e) {
                                return null == t && (t = e > 2 ? 1 : 0),
                                e && 3 > e && (t = Math.round(100 * t) + "%"),
                                t
                            });
                        return 1 === i[3] && (i.pop(), t = "hsl("),
                        t + i.join() + ")"
                    },
                    toHexString: function (t) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return t && i.push(~~ (255 * n)),
                        "#" + e.map(i, function (t) {
                                return t = (t || 0).toString(16),
                                1 === t.length ? "0" + t : t
                            }).join("")
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }),
            c.fn.parse.prototype = c.fn,
            u.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = a - l,
                        c = a + l,
                        u = .5 * c;
                    return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240,
                    i = 0 === u || 1 === u ? u : .5 >= u ? h / c : h / (2 - c),
                    [Math.round(e) % 360, i, u, null == r ? 1 : r]
                },
            u.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        s = t[3],
                        r = .5 >= n ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * o(a, r, e + 1 / 3)), Math.round(255 * o(a, r, e)), Math.round(255 * o(a, r, e - 1 / 3)), s]
                },
            g(u, function (t, s) {
                    var o = s.props,
                        r = s.cache,
                        a = s.to,
                        h = s.from;
                    c.fn[t] = function (t) {
                            if (a && !this[r] && (this[r] = a(this._rgba)), t === i) return this[r].slice();
                            var s, l = e.type(t),
                                u = "array" === l || "object" === l ? t : arguments,
                                d = this[r].slice();
                            return g(o, function (t, e) {
                                    var i = u["object" === l ? t : e.idx];
                                    null == i && (i = d[e.idx]),
                                    d[e.idx] = n(i, e)
                                }),
                            h ? (s = c(h(d)), s[r] = d, s) : c(d)
                        },
                    g(o, function (i, n) {
                            c.fn[i] || (c.fn[i] = function (s) {
                                var o, r = e.type(s),
                                    a = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                                    h = this[a](),
                                    c = h[n.idx];
                                return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = e.type(s)), null == s && n.empty ? this : ("string" === r && (o = l.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[n.idx] = s, this[a](h)))
                            })
                        })
                }),
            g(a, function (t, i) {
                    e.cssHooks[i] = {
                        set: function (t, n) {
                            var o, r, a = "";
                            if ("string" !== e.type(n) || (o = s(n))) {
                                if (n = c(o || n), !p.rgba && 1 !== n._rgba[3]) {
                                    for (r = "backgroundColor" === i ? t.parentNode : t;
                                    ("" === a || "transparent" === a) && r && r.style;) try {
                                        a = e.css(r, "backgroundColor"),
                                        r = r.parentNode
                                    } catch (l) {}
                                    n = n.blend(a && "transparent" !== a ? a : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (n) {}
                        }
                    },
                    e.fx.step[i] = function (t) {
                        t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0),
                        e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                }),
            e.cssHooks.borderColor = {
                    expand: function (t) {
                        var e = {};
                        return g(["Top", "Right", "Bottom", "Left"], function (i, n) {
                            e["border" + n + "Color"] = t
                        }),
                        e
                    }
                },
            r = e.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
        }(jQuery),


    function () {
            function i() {
                var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                    s = {};
                if (n && n.length && n[0] && n[n[0]]) for (i = n.length; i--;) e = n[i],
                "string" == typeof n[e] && (s[t.camelCase(e)] = n[e]);
                else for (e in n)"string" == typeof n[e] && (s[e] = n[e]);
                return s
            }
            function n(e, i) {
                var n, s, r = {};
                for (n in i) s = i[n],
                e[n] !== s && !o[n] && (t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s);
                return r
            }
            var s = ["add", "remove", "toggle"],
                o = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                    t.fx.step[i] = function (t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }),
            t.effects.animateClass = function (e, o, r, a) {
                    var l = t.speed(o, r, a);
                    return this.queue(function () {
                        var o, r = t(this),
                            a = r.attr("class") || "",
                            h = l.children ? r.find("*").andSelf() : r;
                        h = h.map(function () {
                                var e = t(this);
                                return {
                                    el: e,
                                    start: i.call(this)
                                }
                            }),
                        o = function () {
                                t.each(s, function (t, i) {
                                    e[i] && r[i + "Class"](e[i])
                                })
                            },
                        o(),
                        h = h.map(function () {
                                return this.end = i.call(this.el[0]),
                                this.diff = n(this.start, this.end),
                                this
                            }),
                        r.attr("class", a),
                        h = h.map(function () {
                                var e = this,
                                    i = t.Deferred(),
                                    n = jQuery.extend({}, l, {
                                        queue: !1,
                                        complete: function () {
                                            i.resolve(e)
                                        }
                                    });
                                return this.el.animate(this.diff, n),
                                i.promise()
                            }),
                        t.when.apply(t, h.get()).done(function () {
                                o(),
                                t.each(arguments, function () {
                                    var e = this.el;
                                    t.each(this.diff, function (t) {
                                        e.css(t, "")
                                    })
                                }),
                                l.complete.call(r[0])
                            })
                    })
                },
            t.fn.extend({
                    _addClass: t.fn.addClass,
                    addClass: function (e, i, n, s) {
                        return i ? t.effects.animateClass.call(this, {
                            add: e
                        }, i, n, s) : this._addClass(e)
                    },
                    _removeClass: t.fn.removeClass,
                    removeClass: function (e, i, n, s) {
                        return i ? t.effects.animateClass.call(this, {
                            remove: e
                        }, i, n, s) : this._removeClass(e)
                    },
                    _toggleClass: t.fn.toggleClass,
                    toggleClass: function (i, n, s, o, r) {
                        return "boolean" == typeof n || n === e ? s ? t.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, o, r) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, o)
                    },
                    switchClass: function (e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
        }(),


    function () {
            function s(i, n, s, o) {
                return t.isPlainObject(i) && (n = i, i = i.effect),
                i = {
                    effect: i
                },
                n === e && (n = {}),
                t.isFunction(n) && (o = n, s = null, n = {}),
                ("number" == typeof n || t.fx.speeds[n]) && (o = s, s = n, n = {}),
                t.isFunction(s) && (o = s, s = null),
                n && t.extend(i, n),
                s = s || n.duration,
                i.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
                i.complete = o || n.complete,
                i
            }
            function o(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
            }
            t.extend(t.effects, {
                version: "1.9.0",
                save: function (t, e) {
                    for (var i = 0; i < e.length; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                },
                restore: function (t, i) {
                    var s, o;
                    for (o = 0; o < i.length; o++) null !== i[o] && (s = t.data(n + i[o]), s === e && (s = ""), t.css(i[o], s))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                    e
                },
                getBaseline: function (t, e) {
                    var i, n;
                    switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                    }
                    switch (t[1]) {
                    case "left":
                        n = 0;
                        break;
                    case "center":
                        n = .5;
                        break;
                    case "right":
                        n = 1;
                        break;
                    default:
                        n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        "float": e.css("float")
                    },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                            o.id
                        } catch (r) {
                            o = document.body
                        }
                    return e.wrap(n),
                    (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
                    n = e.parent(),
                    "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                            i[n] = e.css(n),
                            isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })),
                    e.css(s),
                    n.css(i).show()
                },
                removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                    e
                },
                setTransition: function (e, i, n, s) {
                    return s = s || {},
                    t.each(i, function (t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }),
                    s
                }
            }),
            t.fn.extend({
                effect: function () {
                    function e(e) {
                        function i() {
                            t.isFunction(o) && o.call(s[0]),
                            t.isFunction(e) && e()
                        }
                        var s = t(this),
                            o = n.complete,
                            r = n.mode;
                            (s.is(":hidden") ? "hide" === r : "show" === r) ? i() : a.call(s[0], n, i)
                    }
                    var n = s.apply(this, arguments),
                        o = n.mode,
                        r = n.queue,
                        a = t.effects.effect[n.effect],
                        l = !a && i && t.effects[n.effect];
                    return t.fx.off || !a && !l ? o ? this[o](n.duration, n.complete) : this.each(function () {
                            n.complete && n.complete.call(this)
                        }) : a ? r === !1 ? this.each(e) : this.queue(r || "fx", e) : l.call(this, {
                            options: n,
                            duration: n.duration,
                            callback: n.complete,
                            mode: n.mode
                        })
                },
                _show: t.fn.show,
                show: function (t) {
                    if (o(t)) return this._show.apply(this, arguments);
                    var e = s.apply(this, arguments);
                    return e.mode = "show",
                    this.effect.call(this, e)
                },
                _hide: t.fn.hide,
                hide: function (t) {
                    if (o(t)) return this._hide.apply(this, arguments);
                    var e = s.apply(this, arguments);
                    return e.mode = "hide",
                    this.effect.call(this, e)
                },
                __toggle: t.fn.toggle,
                toggle: function (e) {
                    if (o(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle",
                    this.effect.call(this, i)
                },
                cssUnit: function (e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }),
                    n
                }
            })
        }(),


    function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }),
            t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }),
            t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i,
                t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                },
                t.easing["easeInOut" + e] = function (t) {
                    return.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
}(jQuery),


function (t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (n, s) {
            var o, r, a, l = t(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(l, n.mode || "hide"),
                u = n.direction || "up",
                d = e.test(u),
                p = d ? "height" : "width",
                f = d ? "top" : "left",
                g = i.test(u),
                m = {},
                v = "show" === c;
            l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h),
            l.show(),
            o = t.effects.createWrapper(l).css({
                    overflow: "hidden"
                }),
            r = o[p](),
            a = parseFloat(o.css(f)) || 0,
            m[p] = v ? r : 0,
            g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                    position: "absolute"
                }), m[f] = v ? a : r + a),
            v && (o.css(p, 0), g || o.css(f, a + r)),
            o.animate(m, {
                    duration: n.duration,
                    easing: n.easing,
                    queue: !1,
                    complete: function () {
                        "hide" === c && l.hide(),
                        t.effects.restore(l, h),
                        t.effects.removeWrapper(l),
                        s()
                    }
                })
        }
}(jQuery),


function (t) {
    t.effects.effect.bounce = function (e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "effect"),
            h = "hide" === l,
            c = "show" === l,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || h ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            b = "up" === u || "left" === u,
            y = r.queue(),
            _ = y.length;
        for ((c || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
                opacity: 1
            }, o[v] = 0, r.css("opacity", 0).css(v, b ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; p > n; n++) s = {},
        s[v] = (b ? "-=" : "+=") + d,
        r.animate(s, g, m).animate(o, g, m),
        d = h ? 2 * d : d / 2;
        h && (s = {
                opacity: 0
            }, s[v] = (b ? "-=" : "+=") + d, r.animate(s, g, m)),
        r.queue(function () {
                h && r.hide(),
                t.effects.restore(r, a),
                t.effects.removeWrapper(r),
                i()
            }),
        _ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, f + 1))),
        r.dequeue()
    }
}(jQuery),


function (t) {
    t.effects.effect.clip = function (e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "hide"),
            h = "show" === l,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(r, a),
        r.show(),
        n = t.effects.createWrapper(r).css({
                overflow: "hidden"
            }),
        s = "IMG" === r[0].tagName ? n : r,
        o = s[d](),
        h && (s.css(d, 0), s.css(p, o / 2)),
        f[d] = h ? o : 0,
        f[p] = h ? 0 : o / 2,
        s.animate(f, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    h || r.hide(),
                    t.effects.restore(r, a),
                    t.effects.removeWrapper(r),
                    i()
                }
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.drop = function (e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            r = t.effects.setMode(s, e.mode || "hide"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: a ? 1 : 0
            };
        t.effects.save(s, o),
        s.show(),
        t.effects.createWrapper(s),
        n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
        a && s.css("opacity", 0).css(h, "pos" === c ? -n : n),
        u[h] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n,
        s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === r && s.hide(),
                    t.effects.restore(s, o),
                    t.effects.removeWrapper(s),
                    i()
                }
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.explode = function (e, i) {
        function n() {
            y.push(this),
            y.length === u * d && s()
        }
        function s() {
            p.css({
                visibility: "visible"
            }),
            t(y).remove(),
            g || p.hide(),
            i()
        }
        var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            b = Math.ceil(p.outerHeight() / u),
            y = [];
        for (o = 0; u > o; o++) for (l = m.top + o * b, c = o - (u - 1) / 2, r = 0; d > r; r++) a = m.left + r * v,
        h = r - (d - 1) / 2,
        p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -o * b
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: a + (g ? h * v : 0),
                top: l + (g ? c * b : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: a + (g ? 0 : h * v),
                top: l + (g ? 0 : c * b),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, n)
    }
}(jQuery),


function (t) {
    t.effects.effect.fade = function (e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
                opacity: s
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.fold = function (e, i) {
        var n, s, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(o, e.mode || "hide"),
            l = "show" === a,
            h = "hide" === a,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !! e.horizFirst,
            p = l !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(o, r),
        o.show(),
        n = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }),
        s = p ? [n.width(), n.height()] : [n.height(), n.width()],
        u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]),
        l && n.css(d ? {
                height: 0,
                width: c
            } : {
                height: c,
                width: 0
            }),
        m[f[0]] = l ? s[0] : c,
        v[f[1]] = l ? s[1] : 0,
        n.animate(m, g, e.easing).animate(v, g, e.easing, function () {
                h && o.hide(),
                t.effects.restore(o, r),
                t.effects.removeWrapper(o),
                i()
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.highlight = function (e, i) {
        var n = t(this),
            s = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = {
                backgroundColor: n.css("backgroundColor")
            };
        "hide" === o && (r.opacity = 0),
        t.effects.save(n, s),
        n.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === o && n.hide(),
                    t.effects.restore(n, s),
                    i()
                }
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var n, s = t(this),
            o = t.effects.setMode(s, e.mode || "show"),
            r = "show" === o,
            a = "hide" === o,
            l = r || "hide" === o,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            c = e.duration / h,
            u = 0,
            d = s.queue(),
            p = d.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; h > n; n++) s.animate({
                opacity: u
            }, c, e.easing),
        u = 1 - u;
        s.animate({
                opacity: u
            }, c, e.easing),
        s.queue(function () {
                a && s.hide(),
                i()
            }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))),
        s.dequeue()
    }
}(jQuery),


function (t) {
    t.effects.effect.puff = function (e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "hide"),
            o = "hide" === s,
            r = parseInt(e.percent, 10) || 150,
            a = r / 100,
            l = {
                height: n.height(),
                width: n.width()
            };
        t.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: s,
                complete: i,
                percent: o ? r : 100,
                from: o ? l : {
                    height: l.height * a,
                    width: l.width * a
                }
            }),
        n.effect(e)
    },
    t.effects.effect.scale = function (e, i) {
        var n = t(this),
            s = t.extend(!0, {}, e),
            o = t.effects.setMode(n, e.mode || "effect"),
            r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            a = e.direction || "both",
            l = e.origin,
            h = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth()
            },
            c = {
                y: "horizontal" !== a ? r / 100 : 1,
                x: "vertical" !== a ? r / 100 : 1
            };
        s.effect = "size",
        s.queue = !1,
        s.complete = i,
        "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0),
        s.from = e.from || ("show" === o ? {
                height: 0,
                width: 0
            } : h),
        s.to = {
                height: h.height * c.y,
                width: h.width * c.x,
                outerHeight: h.outerHeight * c.y,
                outerWidth: h.outerWidth * c.x
            },
        s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)),
        n.effect(s)
    },
    t.effects.effect.size = function (e, i) {
        var n, s, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(r, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = r.css("position");
        "show" === p && r.show(),
        n = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            },
        r.from = e.from || n,
        r.to = e.to || n,
        o = {
                from: {
                    y: r.from.height / n.height,
                    x: r.from.width / n.width
                },
                to: {
                    y: r.to.height / n.height,
                    x: r.to.width / n.width
                }
            },
        ("box" === g || "both" === g) && (o.from.y !== o.to.y && (a = a.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (a = a.concat(d), r.from = t.effects.setTransition(r, d, o.from.x, r.from), r.to = t.effects.setTransition(r, d, o.to.x, r.to))),
        ("content" === g || "both" === g) && o.from.y !== o.to.y && (a = a.concat(c), r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)),
        t.effects.save(r, f ? a : l),
        r.show(),
        t.effects.createWrapper(r),
        r.css("overflow", "hidden").css(r.from),
        m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x),
        r.css(r.from),
        ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = a.concat(u).concat(d), r.find("*[width]").each(function () {
                var i = t(this),
                    n = {
                        height: i.height(),
                        width: i.width()
                    };
                f && t.effects.save(i, h),
                i.from = {
                        height: n.height * o.from.y,
                        width: n.width * o.from.x
                    },
                i.to = {
                        height: n.height * o.to.y,
                        width: n.width * o.to.x
                    },
                o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)),
                o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)),
                i.css(i.from),
                i.animate(i.to, e.duration, e.easing, function () {
                        f && t.effects.restore(i, h)
                    })
            })),
        r.animate(r.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    0 === r.to.opacity && r.css("opacity", r.from.opacity),
                    "hide" === p && r.hide(),
                    t.effects.restore(r, f ? a : l),
                    f || ("static" === v ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left
                    }) : t.each(["top", "left"], function (t, e) {
                        r.css(e, function (e, i) {
                            var n = parseInt(i, 10),
                                s = t ? r.to.left : r.to.top;
                            return "auto" === i ? s + "px" : n + s + "px"
                        })
                    })),
                    t.effects.removeWrapper(r),
                    i()
                }
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.shake = function (e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(s, e.mode || "effect"),
            a = e.direction || "left",
            l = e.distance || 20,
            h = e.times || 3,
            c = 2 * h + 1,
            u = Math.round(e.duration / c),
            d = "up" === a || "down" === a ? "top" : "left",
            p = "up" === a || "left" === a,
            f = {},
            g = {},
            m = {},
            v = s.queue(),
            b = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, e.easing), n = 1; h > n; n++) s.animate(g, u, e.easing).animate(m, u, e.easing);
        s.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
                "hide" === r && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i()
            }),
        b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, c + 1))),
        s.dequeue()
    }
}(jQuery),


function (t) {
    t.effects.effect.slide = function (e, i) {
        var n, s = t(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height"],
            r = t.effects.setMode(s, e.mode || "show"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = {};
        t.effects.save(s, o),
        s.show(),
        n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0),
        t.effects.createWrapper(s).css({
                overflow: "hidden"
            }),
        a && s.css(h, c ? isNaN(n) ? "-" + n : -n : n),
        u[h] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + n,
        s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === r && s.hide(),
                    t.effects.restore(s, o),
                    t.effects.removeWrapper(s),
                    i()
                }
            })
    }
}(jQuery),


function (t) {
    t.effects.effect.transfer = function (e, i) {
        var n = t(this),
            s = t(e.to),
            o = "fixed" === s.css("position"),
            r = t("body"),
            a = o ? r.scrollTop() : 0,
            l = o ? r.scrollLeft() : 0,
            h = s.offset(),
            c = {
                top: h.top - a,
                left: h.left - l,
                height: s.innerHeight(),
                width: s.innerWidth()
            },
            u = n.offset(),
            d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                top: u.top - a,
                left: u.left - l,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function () {
                d.remove(),
                i()
            })
    }
}(jQuery),


function (t) {
    var e = !1;
    t.widget("ui.menu", {
        version: "1.9.0",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (i) {
                    var n = t(i.target).closest(".ui-menu-item");
                    !e && n.not(".ui-state-disabled").length && (e = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function (i) {
                    t(i.target).closest(".ui-menu").length || this.collapseAll(i),
                    e = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, s, o, r, a, l = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                l = !1,
                s = this.previousFilter || "",
                o = String.fromCharCode(e.keyCode),
                r = !1,
                clearTimeout(this.filterTimer),
                o === s ? r = !0 : o = s + o,
                a = new RegExp("^" + i(o), "i"),
                n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return a.test(t(this).children("a").text())
                }),
                n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n,
                n.length || (o = String.fromCharCode(e.keyCode), a = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return a.test(t(this).children("a").text())
                })),
                n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu,
                n = this.element.find(this.options.menus + ":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                });
            e = n.add(this.element),
            e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }),
            e.children(":not(.ui-menu-item)").each(function () {
                    var e = t(this);
                    /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                }),
            e.children(".ui-state-disabled").attr("aria-disabled", "true"),
            n.each(function () {
                    var e = t(this),
                        n = e.prev("a"),
                        s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                    n.attr("aria-haspopup", "true").prepend(s),
                    e.attr("aria-labelledby", n.attr("id"))
                }),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function (t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            n = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay),
            i = e.children(".ui-menu"),
            i.length && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function (e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer),
            this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function () {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                this.activeMenu = n
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()),
            this.focus(i, n)
        },
        nextPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this),
                i.offset().top - n - s < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this),
                i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        }
    })
}(jQuery),


function (t, e) {
    t.widget("ui.progressbar", {
        version: "1.9.0",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }),
            this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this.oldValue = this._value(),
            this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function (t) {
            return t === e ? this._value() : (this._setOption("value", t), this)
        },
        _setOption: function (t, e) {
            "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")),
            this._super(t, e)
        },
        _value: function () {
            var t = this.options.value;
            return "number" != typeof t && (t = 0),
            Math.min(this.options.max, Math.max(this.min, t))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var t = this.value(),
                e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")),
            this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"),
            this.element.attr("aria-valuenow", t)
        }
    })
}(jQuery),


function (t) {
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var e = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !! i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                    "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    var n = this.handles.split(",");
                    this.handles = {};
                    for (var s = 0; s < n.length; s++) {
                        var o = t.trim(n[s]),
                            r = "ui-resizable-" + o,
                            a = t('<div class="ui-resizable-handle ' + r + '"></div>');
                        a.css({
                                zIndex: i.zIndex
                            }),
                        "se" == o && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                        this.handles[o] = ".ui-resizable-" + o,
                        this.element.append(a)
                    }
                }
            this._renderAxis = function (e) {
                    e = e || this.element;
                    for (var i in this.handles) {
                        if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                            var n = t(this.handles[i], this.element),
                                s = 0;
                            s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                            var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                            e.css(o, s),
                            this._proportionallyResize()
                        }
                        t(this.handles[i]).length
                    }
                },
            this._renderAxis(this.element),
            this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function () {
                    if (!e.resizing) {
                        if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                        e.axis = t && t[1] ? t[1] : "se"
                    }
                }),
            i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
                }).mouseleave(function () {
                    i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
                })),
            this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                i.after(this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle),
            e(this.originalElement),
            this
        },
        _mouseCapture: function (e) {
            var i = !1;
            for (var n in this.handles) t(this.handles[n])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function (i) {
            var n = this.options,
                s = this.element.position(),
                o = this.element;
            this.resizing = !0,
            this.documentScroll = {
                    top: t(document).scrollTop(),
                    left: t(document).scrollLeft()
                },
            (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                }),
            this._renderProxy();
            var r = e(this.helper.css("left")),
                a = e(this.helper.css("top"));
            n.containment && (r += t(n.containment).scrollLeft() || 0, a += t(n.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                    left: r,
                    top: a
                },
            this.size = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                },
            this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                },
            this.originalPosition = {
                    left: r,
                    top: a
                },
            this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                },
            this.originalMousePosition = {
                    left: i.pageX,
                    top: i.pageY
                },
            this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l),
            o.addClass("ui-resizable-resizing"),
            this._propagate("start", i),
            !0
        },
        _mouseDrag: function (t) {
            var e = this.helper,
                i = (this.options, this.originalMousePosition),
                n = this.axis,
                s = t.pageX - i.left || 0,
                o = t.pageY - i.top || 0,
                r = this._change[n];
            if (!r) return !1;
            var a = r.apply(this, [t, s, o]);
            return this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (a = this._updateRatio(a, t)),
            a = this._respectSize(a, t),
            this._propagate("resize", t),
            e.css({
                    top: this.position.top + "px",
                    left: this.position.left + "px",
                    width: this.size.width + "px",
                    height: this.size.height + "px"
                }),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            this._updateCache(a),
            this._trigger("resize", t, this.ui()),
            !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i = this.options,
                n = this;
            if (this._helper) {
                    var s = this._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName),
                        r = o && t.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
                        a = o ? 0 : n.sizeDiff.width,
                        l = {
                            width: n.helper.width() - a,
                            height: n.helper.height() - r
                        },
                        h = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                        c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                    i.animate || this.element.css(t.extend(l, {
                            top: c,
                            left: h
                        })),
                    n.helper.height(n.size.height),
                    n.helper.width(n.size.width),
                    this._helper && !i.animate && this._proportionallyResize()
                }
            return t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function (t) {
            var e, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth : 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight : 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
            },
            (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), s > r.minHeight && (r.minHeight = s), n < r.maxWidth && (r.maxWidth = n), o < r.maxHeight && (r.maxHeight = o)),
            this._vBoundaries = r
        },
        _updateCache: function (t) {
            this.options;
            this.offset = this.helper.offset(),
            i(t.left) && (this.position.left = t.left),
            i(t.top) && (this.position.top = t.top),
            i(t.height) && (this.size.height = t.height),
            i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = (this.options, this.position),
                n = this.size,
                s = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" == s && (t.left = e.left + (n.width - t.width), t.top = null),
            "nw" == s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)),
            t
        },
        _respectSize: function (t, e) {
            var n = (this.helper, this._vBoundaries),
                s = (this._aspectRatio || e.shiftKey, this.axis),
                o = i(t.width) && n.maxWidth && n.maxWidth < t.width,
                r = i(t.height) && n.maxHeight && n.maxHeight < t.height,
                a = i(t.width) && n.minWidth && n.minWidth > t.width,
                l = i(t.height) && n.minHeight && n.minHeight > t.height;
            a && (t.width = n.minWidth),
            l && (t.height = n.minHeight),
            o && (t.width = n.maxWidth),
            r && (t.height = n.maxHeight);
            var h = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                u = /sw|nw|w/.test(s),
                d = /nw|ne|n/.test(s);
            a && u && (t.left = h - n.minWidth),
            o && u && (t.left = h - n.maxWidth),
            l && d && (t.top = c - n.minHeight),
            r && d && (t.top = c - n.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null),
            t
        },
        _proportionallyResize: function () {
            this.options;
            if (this._proportionallyResizeElements.length) for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                var n = this._proportionallyResizeElements[i];
                if (!this.borderDif) {
                    var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        o = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                    this.borderDif = t.map(s, function (t, e) {
                            var i = parseInt(t, 10) || 0,
                                n = parseInt(o[e], 10) || 0;
                            return i + n
                        })
                }
                n.css({
                    height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var e = this.element,
                i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                    this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                    var n = t.browser.msie && t.browser.version < 7,
                        s = n ? 1 : 0,
                        o = n ? 2 : -1;
                    this.helper.addClass(this._helper).css({
                            width: this.element.outerWidth() + o,
                            height: this.element.outerHeight() + o,
                            position: "absolute",
                            left: this.elementOffset.left - s + "px",
                            top: this.elementOffset.top - s + "px",
                            zIndex: ++i.zIndex
                        }),
                    this.helper.appendTo("body").disableSelection()
                } else this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                var i = (this.options, this.originalSize),
                    n = this.originalPosition;
                return {
                        left: n.left + e,
                        width: i.width - e
                    }
            },
            n: function (t, e, i) {
                var n = (this.options, this.originalSize),
                    s = this.originalPosition;
                return {
                        top: s.top + i,
                        height: n.height - i
                    }
            },
            s: function (t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                n = function (e) {
                    t(e).each(function () {
                        var e = t(this);
                        e.data("resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                    n(t)
                })
        },
        resize: function (e, i) {
            var n = t(this).data("resizable"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                },
                l = function (e, n) {
                    t(e).each(function () {
                        var e = t(this),
                            s = t(this).data("resizable-alsoresize"),
                            o = {},
                            r = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(r, function (t, e) {
                                var i = (s[e] || 0) + (a[e] || 0);
                                i && i >= 0 && (o[e] = i || null)
                            }),
                        e.css(o)
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function (t, e) {
                    l(t, e)
                })
        },
        stop: function () {
            t(this).removeData("resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).data("resizable"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function () {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }),
                        i._updateCache(n),
                        i._propagate("resize", e)
                    }
                })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i = t(this).data("resizable"),
                n = i.options,
                s = i.element,
                o = n.containment,
                r = o instanceof t ? o.get(0) : /parent/.test(o) ? s.parent().get(0) : o;
            if (r) if (i.containerElement = t(r), /document/.test(o) || o == document) i.containerOffset = {
                    left: 0,
                    top: 0
                },
            i.containerPosition = {
                    left: 0,
                    top: 0
                },
            i.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                };
            else {
                    var a = t(r),
                        l = [];
                    t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
                            l[t] = e(a.css("padding" + i))
                        }),
                    i.containerOffset = a.offset(),
                    i.containerPosition = a.position(),
                    i.containerSize = {
                            height: a.innerHeight() - l[3],
                            width: a.innerWidth() - l[1]
                        };
                    var h = i.containerOffset,
                        c = i.containerSize.height,
                        u = i.containerSize.width,
                        d = t.ui.hasScroll(r, "left") ? r.scrollWidth : u,
                        p = t.ui.hasScroll(r) ? r.scrollHeight : c;
                    i.parentData = {
                            element: r,
                            left: h.left,
                            top: h.top,
                            width: d,
                            height: p
                        }
                }
        },
        resize: function (e) {
            var i = t(this).data("resizable"),
                n = i.options,
                s = (i.containerSize, i.containerOffset),
                o = (i.size, i.position),
                r = i._aspectRatio || e.shiftKey,
                a = {
                    top: 0,
                    left: 0
                },
                l = i.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (a = s),
            o.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - a.left), r && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0),
            o.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), r && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0),
            i.offset.left = i.parentData.left + i.position.left,
            i.offset.top = i.parentData.top + i.position.top;
            var h = Math.abs((i._helper ? i.offset.left - a.left : i.offset.left - a.left) + i.sizeDiff.width),
                c = Math.abs((i._helper ? i.offset.top - a.top : i.offset.top - s.top) + i.sizeDiff.height),
                u = i.containerElement.get(0) == i.element.parent().get(0),
                d = /relative|absolute/.test(i.containerElement.css("position"));
            u && d && (h -= i.parentData.left),
            h + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - h, r && (i.size.height = i.size.width / i.aspectRatio)),
            c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, r && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                n = (e.position, e.containerOffset),
                s = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                })
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).data("resizable"),
                i = e.options,
                n = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper)
        },
        resize: function () {
            {
                var e = t(this).data("resizable");
                e.options
            }
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            {
                var e = t(this).data("resizable");
                e.options
            }
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function (e) {
            {
                var i = t(this).data("resizable"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    r = i.originalPosition,
                    a = i.axis;
                n._aspectRatio || e.shiftKey
            }
            n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
            var l = Math.round((s.width - o.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                h = Math.round((s.height - o.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + h) : /^(ne)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + h, i.position.top = r.top - h) : /^(sw)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + h, i.position.left = r.left - l) : (i.size.width = o.width + l, i.size.height = o.height + h, i.position.top = r.top - h, i.position.left = r.left - l)
        }
    });
    var e = function (t) {
        return parseInt(t, 10) || 0
    },
        i = function (t) {
            return !isNaN(parseInt(t, 10))
        }
}(jQuery),


function (t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.9.0",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var e = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1;
            var i;
            this.refresh = function () {
                i = t(e.options.filter, e.element[0]),
                i.addClass("ui-selectee"),
                i.each(function () {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                            element: this,
                            $element: e,
                            left: i.left,
                            top: i.top,
                            right: i.left + e.outerWidth(),
                            bottom: i.top + e.outerHeight(),
                            startselected: !1,
                            selected: e.hasClass("ui-selected"),
                            selecting: e.hasClass("ui-selecting"),
                            unselecting: e.hasClass("ui-unselecting")
                        })
                })
            },
            this.refresh(),
            this.selectees = i.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var n = this.options;
                this.selectees = t(n.filter, this.element[0]),
                this._trigger("start", e),
                t(n.appendTo).append(this.helper),
                this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }),
                n.autoRefresh && this.refresh(),
                this.selectees.filter(".ui-selected").each(function () {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0,
                    !e.metaKey && !e.ctrlKey && (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }),
                t(e.target).parents().andSelf().each(function () {
                    var n = t.data(this, "selectable-item");
                    if (n) {
                        var s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected");
                        return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"),
                        n.unselecting = !s,
                        n.selecting = s,
                        n.selected = s,
                        s ? i._trigger("selecting", e, {
                            selecting: n.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: n.element
                        }),
                        !1
                    }
                })
            }
        },
        _mouseDrag: function (e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var n = this.options,
                    s = this.opos[0],
                    o = this.opos[1],
                    r = e.pageX,
                    a = e.pageY;
                if (s > r) {
                        var l = r;
                        r = s,
                        s = l
                    }
                if (o > a) {
                        var l = a;
                        a = o,
                        o = l
                    }
                return this.helper.css({
                        left: s,
                        top: o,
                        width: r - s,
                        height: a - o
                    }),
                this.selectees.each(function () {
                        var l = t.data(this, "selectable-item");
                        if (l && l.element != i.element[0]) {
                            var h = !1;
                            "touch" == n.tolerance ? h = !(l.left > r || l.right < s || l.top > a || l.bottom < o) : "fit" == n.tolerance && (h = l.left > s && l.right < r && l.top > o && l.bottom < a),
                            h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                                selecting: l.element
                            }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                                unselecting: l.element
                            }))), l.selected && !e.metaKey && !e.ctrlKey && !l.startselected && (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                                unselecting: l.element
                            })))
                        }
                    }),
                !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            this.dragged = !1;
            this.options;
            return t(".ui-unselecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"),
                n.unselecting = !1,
                n.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: n.element
                })
            }),
            t(".ui-selecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                n.selecting = !1,
                n.selected = !0,
                n.startselected = !0,
                i._trigger("selected", e, {
                    selected: n.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    })
}(jQuery),


function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var i, n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                r = n.values && n.values.length || 1,
                a = [];
            for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && 2 !== n.values.length && (n.values = [n.values[0], n.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : ""))), i = s.length; r > i; i++) a.push(o);
            this.handles = s.add(t(a.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.add(this.range).filter("a").click(function (t) {
                    t.preventDefault()
                }).mouseenter(function () {
                    n.disabled || t(this).addClass("ui-state-hover")
                }).mouseleave(function () {
                    t(this).removeClass("ui-state-hover")
                }).focus(function () {
                    n.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
                }).blur(function () {
                    t(this).removeClass("ui-state-focus")
                }),
            this.handles.each(function (e) {
                    t(this).data("ui-slider-handle-index", e)
                }),
            this._on(this.handles, {
                    keydown: function (i) {
                        var n, s, o, r, a = t(i.target).data("ui-slider-handle-index");
                        switch (i.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1)) return
                        }
                        switch (r = this.options.step, s = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                        case t.ui.keyCode.HOME:
                            o = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            o = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            o = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            o = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            o = this._trimAlignValue(s + r);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            o = this._trimAlignValue(s - r)
                        }
                        this._slide(i, a, o)
                    },
                    keyup: function (e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                    }
                }),
            this._refreshValue(),
            this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, n, s, o, r, a, l, h, c = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                    var i = Math.abs(n - c.values(e));
                    s > i && (s = i, o = t(this), r = e)
                }), u.range === !0 && this.values(1) === u.min && (r += 1, o = t(this.handles[r])), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = h ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - o.width() / 2,
                    top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            n = i / e,
            n > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            s = this._valueMax() - this._valueMin(),
            o = this._valueMin() + n * s,
            this._trimAlignValue(o)
        },
        _start: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
                this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i),
            this._refreshValue(),
            this._change(null, e),
            void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]),
            this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var n, s = 0;
            switch (t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t],
            e = this._trimAlignValue(e);
            for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
            return i
        },
        _trimAlignValue: function (t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, n, s, o, r = this.options.range,
                a = this.options,
                l = this,
                h = this._animateOff ? !1 : a.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function (n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                    c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                    t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate),
                    l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))),
                    e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
        }
    })
}(jQuery),


function (t) {
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !! i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            var n = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e); {
                var s = null;
                t(e.target).parents().each(function () {
                    return t.data(this, n.widgetName + "-item") == n ? (s = t(this), !1) : void 0
                })
            }
            if (t.data(e.target, n.widgetName + "-item") == n && (s = t(e.target)), !s) return !1;
            if (this.options.handle && !i) {
                var o = !1;
                if (t(this.options.handle, s).find("*").andSelf().each(function () {
                    this == e.target && (o = !0)
                }), !o) return !1
            }
            return this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0
        },
        _mouseStart: function (e, i, n) {
            var s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function (e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    n = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))),
                n !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var s = this.items.length - 1; s >= 0; s--) {
                var o = this.items[s],
                    r = o.item[0],
                    a = this._intersectsWithPointer(o);
                if (a && o.instance === this.currentContainer && r != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !t.contains(this.element[0], r) : !0)) {
                        if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                        this._rearrange(e, o),
                        this._trigger("change", e, this._uiHash());
                        break
                    }
            }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset();
                    this.reverting = !0,
                    t(this.helper).animate({
                            left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(e)
                        })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {},
            t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {},
            i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }),
            n
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = n + h > a && l > n + h && e + c > o && r > e + c;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                n = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                s = i && n,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && n || "left" == o && !n : s && ("down" == s && i || "up" == s && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i = [],
                n = [],
                s = this._connectWith();
            if (s && e) for (var o = s.length - 1; o >= 0; o--) for (var r = t(s[o]), a = r.length - 1; a >= 0; a--) {
                    var l = t.data(r[a], this.widgetName);
                    l && l != this && !l.options.disabled && n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                }
            n.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = n.length - 1; o >= 0; o--) n[o][0].each(function () {
                    i.push(this)
                });
            return t(i)
        },
        _removeCurrentsFromItems: function () {
            for (var t = this.currentItem.find(":data(" + this.widgetName + "-item)"), e = 0; e < this.items.length; e++) for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function (e) {
            this.items = [],
            this.containers = [this];
            var i = this.items,
                n = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
            ],
                s = this._connectWith();
            if (s && this.ready) for (var o = s.length - 1; o >= 0; o--) for (var r = t(s[o]), a = r.length - 1; a >= 0; a--) {
                    var l = t.data(r[a], this.widgetName);
                    l && l != this && !l.options.disabled && (n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                        item: this.currentItem
                    }) : t(l.options.items, l.element), l]), this.containers.push(l))
                }
            for (var o = n.length - 1; o >= 0; o--) for (var h = n[o][1], c = n[o][0], a = 0, u = c.length; u > a; a++) {
                    var d = t(c[a]);
                    d.data(this.widgetName + "-item", h),
                    i.push({
                        item: d,
                        instance: h,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var n = this.items[i];
                if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                    var s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item;
                    e || (n.width = s.outerWidth(), n.height = s.outerHeight());
                    var o = s.offset();
                    n.left = o.left,
                    n.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var i = this.containers.length - 1; i >= 0; i--) {
                var o = this.containers[i].element.offset();
                this.containers[i].containerCache.left = o.left,
                this.containers[i].containerCache.top = o.top,
                this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i = e.options;
            if (!i.placeholder || i.placeholder.constructor == String) {
                var n = i.placeholder;
                i.placeholder = {
                    element: function () {
                        var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (i.style.visibility = "hidden"),
                        i
                    },
                    update: function (t, s) {
                        (!n || i.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            i.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (e) {
            for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--) if (!t.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (i && t.contains(this.containers[s].element[0], i.element[0])) continue;
                i = this.containers[s],
                n = s
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[n]._trigger("over", e, this._uiHash(this)),
            this.containers[n].containerCache.over = 1;
            else if (this.currentContainer != this.containers[n]) {
                for (var o = 1e4, r = null, a = this.positionAbs[this.containers[n].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--) if (t.contains(this.containers[n].element[0], this.items[l].item[0])) {
                    var h = this.containers[n].floating ? this.items[l].item.offset().left : this.items[l].item.offset().top;
                    Math.abs(h - a) < o && (o = Math.abs(h - a), r = this.items[l], this.direction = h - a > 0 ? "down" : "up")
                }
                if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[n],
                r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[n].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[n]._trigger("change", e, this._uiHash(this)),
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[n]._trigger("over", e, this._uiHash(this)),
                this.containers[n].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
            n[0] == this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }),
            ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
            ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
            n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0],
                    n = t(e.containment).offset(),
                    s = "hidden" != t(i).css("overflow");
                this.containment = [n.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" == e ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
        },
        _generatePosition: function (e) {
            var i = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName);
            "relative" == this.cssPosition && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX,
                r = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
                    var a = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                    r = this.containment && (a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3]) ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a;
                    var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                    o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
                }
            return {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function () {
                s == this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function (e, i) {
            this.reverting = !1;
            var n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !i && n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && n.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (i || (n.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), n.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[s])),
            this.containers[s].containerCache.over && (n.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var s = 0; s < n.length; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var s = 0; s < n.length; s++) n[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),


function (t) {
    function e(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments),
            this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.9.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function (t, n) {
                    var s = i.attr(n);
                    void 0 !== s && s.length && (e[n] = s)
                }),
            e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.uiSpinner.addClass("ui-state-active"),
                this.previous = this.element.val()
            },
            blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), this.uiSpinner.removeClass("ui-state-active"), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            },
            mousewheel: function (t, e) {
                return e ? this.spinning || this._start(t) ? (this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                    this.spinning && this._stop(t)
                }, 100), t.preventDefault(), void 0) : !1 : void 0
            },
            "mousedown .ui-spinner-button": function (e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = n, this._delay(function () {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                e.preventDefault(),
                i.call(this),
                this.cancelBlur = !0,
                this._delay(function () {
                    delete this.cancelBlur,
                    i.call(this)
                }),
                this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this._hoverable(t),
            this.element.attr("role", "spinbutton"),
            this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function (e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e),
                    !0;
                case n.DOWN:
                    return this._repeat(null, -1, e),
                    !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e),
                    !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e),
                    !0
                }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-state-default ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t),
            this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function (t) {
            var e = t.toString(),
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0,
            i = t - e,
            i = Math.round(i / n.step) * n.step,
            t = e + i,
            t = parseFloat(t.toFixed(this._precision())),
            null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e,
                void this.element.val(this._format(i))
            }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
            this._super(t, e),
            "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function (t) {
            this._super(t),
            this._value(this.element.val())
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._spin((t || 1) * this.options.step)
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._spin((t || 1) * -this.options.step)
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
}(jQuery),


function (t, e) {
    function i() {
        return ++s
    }
    function n(t) {
        return t = t.cloneNode(!1),
        t.hash.length > 1 && t.href.replace(o, "") === location.href.replace(o, "")
    }
    var s = 0,
        o = /#.*$/;
    t.widget("ui.tabs", {
            version: "1.9.0",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var e = this,
                    i = this.options,
                    n = i.active;
                this.running = !1,
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                        t(this).is(".ui-state-disabled") && e.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                        t(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }),
                this._processTabs(),
                null === n && (location.hash && this.anchors.each(function (t, e) {
                        return e.hash === location.hash ? (n = t, !1) : void 0
                    }), null === n && (n = this.tabs.filter(".ui-tabs-active").index()), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)),
                n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = i.collapsible ? !1 : 0)),
                i.active = n,
                !i.collapsible && i.active === !1 && this.anchors.length && (i.active = 0),
                t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                        return e.tabs.index(t)
                    }))).sort()),
                this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : t(),
                this._refresh(),
                this.active.length && this.load(i.active)
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function (e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                        switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1,
                            n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(),
                            clearTimeout(this.activating),
                            this._activate(n),
                            void 0;
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(),
                            clearTimeout(this.activating),
                            this._activate(n === this.options.active ? !1 : n),
                            void 0;
                        default:
                            return
                        }
                        e.preventDefault(),
                        clearTimeout(this.activating),
                        n = this._focusNextTab(n, s),
                        e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                            this.option("active", n)
                        }, this.delay))
                    }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, i) {
                function n() {
                    return e > s && (e = 0),
                    0 > e && (e = s),
                    e
                }
                for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e),
                this.tabs.eq(t).focus(),
                t
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), !e && this.options.active === !1 && this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
            },
            _tabId: function (t) {
                return t.attr("aria-controls") || "ui-tabs-" + i()
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                        return i.index(t)
                    }),
                this._processTabs(),
                e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()),
                this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled),
                this._setupEvents(this.options.event),
                this._setupHeightStyle(this.options.heightStyle),
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }),
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }),
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }),
                this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }),
                this.panels = t(),
                this.anchors.each(function (i, s) {
                    var o, r, a, l = t(s).uniqueId().attr("id"),
                        h = t(s).closest("li"),
                        c = h.attr("aria-controls");
                    n(s) ? (o = s.hash, r = e.element.find(e._sanitizeSelector(o))) : (a = e._tabId(h), o = "#" + a, r = e.element.find(o), r.length || (r = e._createPanel(a), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")),
                    r.length && (e.panels = e.panels.add(r)),
                    c && h.data("ui-tabs-aria-controls", c),
                    h.attr({
                            "aria-controls": o.substring(1),
                            "aria-labelledby": l
                        }),
                    r.attr("aria-labelledby", l)
                }),
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function () {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function (e) {
                var i = {
                    click: function (t) {
                        t.preventDefault()
                    }
                };
                e && t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }),
                this._off(this.anchors.add(this.tabs).add(this.panels)),
                this._on(this.anchors, i),
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }),
                this._on(this.panels, {
                    keydown: "_panelKeydown"
                }),
                this._focusable(this.tabs),
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var i, n, s = this.element.parent();
                "fill" === e ? (t.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), i = s.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function () {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    r = o[0] === n[0],
                    a = r && i.collapsible,
                    l = a ? t() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    c = {
                        oldTab: n,
                        oldPanel: h,
                        newTab: a ? t() : o,
                        newPanel: l
                    };
                e.preventDefault(),
                o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), !h.length && !l.length && t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
            },
            _toggle: function (e, i) {
                function n() {
                    o.running = !1,
                    o._trigger("activate", e, i)
                }
                function s() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                    r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
                }
                var o = this,
                    r = i.newPanel,
                    a = i.oldPanel;
                this.running = !0,
                a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                        s()
                    }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()),
                a.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }),
                i.oldTab.attr("aria-selected", "false"),
                r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
                        return 0 === t(this).attr("tabIndex")
                    }).attr("tabIndex", -1),
                r.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }),
                i.newTab.attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    })
            },
            _activate: function (e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function (t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
                t
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(),
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),
                this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }),
                this.tabs.each(function () {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
                }),
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (i) {
                var n = this.options.disabled;
                n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function (t) {
                    return t !== i ? t : null
                }) : t.map(this.tabs, function (t, e) {
                    return e !== i ? e : null
                })), this._setupDisabled(n))
            },
            disable: function (i) {
                var n = this.options.disabled;
                if (n !== !0) {
                    if (i === e) n = !0;
                    else {
                        if (i = this._getIndex(i), -1 !== t.inArray(i, n)) return;
                        n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                    }
                    this._setupDisabled(n)
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var s = this,
                    o = this.tabs.eq(e),
                    r = o.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(o),
                    l = {
                        tab: o,
                        panel: a
                    };
                n(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function (t) {
                        setTimeout(function () {
                            a.html(t),
                            s._trigger("load", i, l)
                        }, 1)
                    }).complete(function (t, e) {
                        setTimeout(function () {
                            "abort" === e && s.panels.stop(!1, !0),
                            o.removeClass("ui-tabs-loading"),
                            a.removeAttr("aria-busy"),
                            t === s.xhr && delete s.xhr
                        }, 1)
                    })))
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function (e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }),
    t.uiBackCompat !== !1 && (t.ui.tabs.prototype._ui = function (t, e) {
            return {
                tab: t,
                panel: e,
                index: this.anchors.index(t)
            }
        }, t.widget("ui.tabs", t.ui.tabs, {
            url: function (t, e) {
                this.anchors.eq(t).attr("href", e)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                ajaxOptions: null,
                cache: !1
            },
            _create: function () {
                this._super();
                var e = this;
                this._on({
                    tabsbeforeload: function (i, n) {
                        return t.data(n.tab[0], "cache.tabs") ? void i.preventDefault() : void n.jqXHR.success(function () {
                            e.options.cache && t.data(n.tab[0], "cache.tabs", !0)
                        })
                    }
                })
            },
            _ajaxSettings: function (e, i, n) {
                var s = this.options.ajaxOptions;
                return t.extend({}, s, {
                    error: function (t, e) {
                        try {
                            s.error(t, e, n.tab.closest("li").index(), n.tab[0])
                        } catch (i) {}
                    }
                }, this._superApply(arguments))
            },
            _setOption: function (t, e) {
                "cache" === t && e === !1 && this.anchors.removeData("cache.tabs"),
                this._super(t, e)
            },
            _destroy: function () {
                this.anchors.removeData("cache.tabs"),
                this._super()
            },
            url: function (t) {
                this.anchors.eq(t).removeData("cache.tabs"),
                this._superApply(arguments)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            abort: function () {
                this.xhr && this.xhr.abort()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                spinner: "<em>Loading&#8230;</em>"
            },
            _create: function () {
                this._super(),
                this._on({
                    tabsbeforeload: function (t, e) {
                        if (t.target === this.element[0] && this.options.spinner) {
                            var i = e.tab.find("span"),
                                n = i.html();
                            i.html(this.options.spinner),
                            e.jqXHR.complete(function () {
                                    i.html(n)
                                })
                        }
                    }
                })
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                enable: null,
                disable: null
            },
            enable: function (e) {
                var i, n = this.options;
                (e && n.disabled === !0 || t.isArray(n.disabled) && -1 !== t.inArray(e, n.disabled)) && (i = !0),
                this._superApply(arguments),
                i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
            },
            disable: function (e) {
                var i, n = this.options;
                (e && n.disabled === !1 || t.isArray(n.disabled) && -1 === t.inArray(e, n.disabled)) && (i = !0),
                this._superApply(arguments),
                i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                add: null,
                remove: null,
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            add: function (i, n, s) {
                s === e && (s = this.anchors.length);
                var o, r, a = this.options,
                    l = t(a.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)),
                    h = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
                return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0),
                l.attr("aria-controls", h),
                o = s >= this.tabs.length,
                r = this.element.find("#" + h),
                r.length || (r = this._createPanel(h), o ? s > 0 ? r.insertAfter(this.panels.eq(-1)) : r.appendTo(this.element) : r.insertBefore(this.panels[s])),
                r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),
                o ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]),
                a.disabled = t.map(a.disabled, function (t) {
                        return t >= s ? ++t : t
                    }),
                this.refresh(),
                1 === this.tabs.length && a.active === !1 && this.option("active", 0),
                this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])),
                this
            },
            remove: function (e) {
                e = this._getIndex(e);
                var i = this.options,
                    n = this.tabs.eq(e).remove(),
                    s = this._getPanelForTab(n).remove();
                return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (e + 1 < this.anchors.length ? 1 : -1)),
                i.disabled = t.map(t.grep(i.disabled, function (t) {
                        return t !== e
                    }), function (t) {
                        return t >= e ? --t : t
                    }),
                this.refresh(),
                this._trigger("remove", null, this._ui(n.find("a")[0], s[0])),
                this
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            length: function () {
                return this.anchors.length
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                idPrefix: "ui-tabs-"
            },
            _tabId: function (e) {
                var n = e.is("li") ? e.find("a[href]") : e;
                return n = n[0],
                t(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                panelTemplate: "<div></div>"
            },
            _createPanel: function (e) {
                return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            _create: function () {
                var t = this.options;
                null === t.active && t.selected !== e && (t.active = -1 === t.selected ? !1 : t.selected),
                this._super(),
                t.selected = t.active,
                t.selected === !1 && (t.selected = -1)
            },
            _setOption: function (t, e) {
                if ("selected" !== t) return this._super(t, e);
                var i = this.options;
                this._super("active", -1 === e ? !1 : e),
                i.selected = i.active,
                i.selected === !1 && (i.selected = -1)
            },
            _eventHandler: function () {
                this._superApply(arguments),
                this.options.selected = this.options.active,
                this.options.selected === !1 && (this.options.selected = -1)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                show: null,
                select: null
            },
            _create: function () {
                this._super(),
                this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
            },
            _trigger: function (t, e, i) {
                var n = this._superApply(arguments);
                return n ? ("beforeActivate" === t && i.newTab.length ? n = this._super("select", e, {
                    tab: i.newTab.find(".ui-tabs-anchor")[0],
                    panel: i.newPanel[0],
                    index: i.newTab.closest("li").index()
                }) : "activate" === t && i.newTab.length && (n = this._super("show", e, {
                    tab: i.newTab.find(".ui-tabs-anchor")[0],
                    panel: i.newPanel[0],
                    index: i.newTab.closest("li").index()
                })), n) : !1
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            select: function (t) {
                if (t = this._getIndex(t), -1 === t) {
                    if (!this.options.collapsible || -1 === this.options.selected) return;
                    t = this.options.selected
                }
                this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
            }
        }), function () {
            var e = 0;
            t.widget("ui.tabs", t.ui.tabs, {
                options: {
                    cookie: null
                },
                _create: function () {
                    var t, e = this.options;
                    null == e.active && e.cookie && (t = parseInt(this._cookie(), 10), -1 === t && (t = !1), e.active = t),
                    this._super()
                },
                _cookie: function (i) {
                    var n = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
                    return arguments.length && (n.push(i === !1 ? -1 : i), n.push(this.options.cookie)),
                    t.cookie.apply(null, n)
                },
                _refresh: function () {
                    this._super(),
                    this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                },
                _eventHandler: function () {
                    this._superApply(arguments),
                    this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                },
                _destroy: function () {
                    this._super(),
                    this.options.cookie && this._cookie(null, this.options.cookie)
                }
            })
        }(), t.widget("ui.tabs", t.ui.tabs, {
            _trigger: function (e, i, n) {
                var s = t.extend({}, n);
                return "load" === e && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]),
                this._super(e, i, s)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                fx: null
            },
            _getFx: function () {
                var e, i, n = this.options.fx;
                return n && (t.isArray(n) ? (e = n[0], i = n[1]) : e = i = n),
                n ? {
                    show: i,
                    hide: e
                } : null
            },
            _toggle: function (t, e) {
                function i() {
                    s.running = !1,
                    s._trigger("activate", t, e)
                }
                function n() {
                    e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                    o.length && a.show ? o.animate(a.show, a.show.duration, function () {
                        i()
                    }) : (o.show(), i())
                }
                var s = this,
                    o = e.newPanel,
                    r = e.oldPanel,
                    a = this._getFx();
                return a ? (s.running = !0, void(r.length && a.hide ? r.animate(a.hide, a.hide.duration, function () {
                        e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                        n()
                    }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()))) : this._super(t, e)
            }
        }))
}(jQuery),


function (t) {
    function e(e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i),
        e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
    }
    function i(e) {
        var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n); - 1 !== s && n.splice(s, 1),
        e.removeData("ui-tooltip-id"),
        n = t.trim(n.join(" ")),
        n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
    }
    var n = 0;
    t.widget("ui.tooltip", {
        version: "1.9.0",
        options: {
            content: function () {
                return t(this).attr("title")
            },
            hide: !0,
            items: "[title]",
            position: {
                my: "left+15 center",
                at: "right center",
                collision: "flipfit flipfit"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {}
        },
        _setOption: function (e, i) {
            var n = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function (t, e) {
                n._updateContent(e)
            })))
        },
        _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0],
                e.close(s, !0)
            }),
            this.element.find(this.options.items).andSelf().each(function () {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).andSelf().each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function (e) {
            var i = t(e ? e.target : this.element).closest(this.options.items);
            if (i.length) return this.options.track && i.data("ui-tooltip-id") ? (this._find(i).position(t.extend({
                of: i
            }, this.options.position)), void this._off(this.document, "mousemove")) : (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("tooltip-open", !0), this._updateContent(i, e), void 0)
        },
        _updateContent: function (t, e) {
            var i, n = this.options.content,
                s = this;
            return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function (i) {
                    t.data("tooltip-open") && s._delay(function () {
                        this._open(e, t, i)
                    })
                }), void(i && this._open(e, t, i)))
        },
        _open: function (i, n, s) {
            function o(t) {
                a.of = t,
                r.position(a)
            }
            var r, a;
            if (s) return r = this._find(n),
            r.length ? void r.find(".ui-tooltip-content").html(s) : (n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), r = this._tooltip(n), e(n, r.attr("id")), r.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.originalEvent.type) ? (a = t.extend({}, this.options.position), this._on(this.document, {
                mousemove: o
            }), o(i)) : r.position(t.extend({
                of: n
            }, this.options.position)), r.hide(), this._show(r, this.options.show), this._trigger("open", i, {
                tooltip: r
            }), this._on(n, {
                mouseleave: "close",
                focusout: "close",
                keyup: function (e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var i = t.Event(e);
                        i.currentTarget = n[0],
                        this.close(i, !0)
                    }
                }
            }), void 0)
        },
        close: function (e, n) {
            var s = this,
                o = t(e ? e.currentTarget : this.element),
                r = this._find(o);
            this.closing || (n || !e || "focusout" === e.type || this.document[0].activeElement !== o[0]) && (o.data("ui-tooltip-title") && o.attr("title", o.data("ui-tooltip-title")), i(o), r.stop(!0), this._hide(r, this.options.hide, function () {
                    t(this).remove(),
                    delete s.tooltips[this.id]
                }), o.removeData("tooltip-open"), this._off(o, "mouseleave focusout keyup"), this._off(this.document, "mousemove"), this.closing = !0, this._trigger("close", e, {
                    tooltip: r
                }), this.closing = !1)
        },
        _tooltip: function (e) {
            var i = "ui-tooltip-" + n++,
                s = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(s),
            s.appendTo(this.document[0].body),
            t.fn.bgiframe && s.bgiframe(),
            this.tooltips[i] = e,
            s
        },
        _find: function (e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n[0],
                e.close(s, !0),
                t("#" + i).remove(),
                n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery),


function (t) {
    t.extend(String.prototype, {
        times: function (t) {
            for (var e = "", i = 0; t > i; ++i) e += this;
            return e
        }
    })
}(jQuery),


function (t) {
    function e(t) {
        return "object" == typeof t ? t : {
            top: t,
            left: t
        }
    }
    var i = t.scrollTo = function (e, i, n) {
        t(window).scrollTo(e, i, n)
    };
    i.defaults = {
        axis: "xy",
        duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1
    },
    i.window = function () {
        return t(window)._scrollable()
    },
    t.fn._scrollable = function () {
        return this.map(function () {
            var e = this,
                i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
            if (!i) return e;
            var n = (e.contentWindow || e).document || e.ownerDocument || e;
            return t.browser.safari || "BackCompat" == n.compatMode ? n.body : n.documentElement
        })
    },
    t.fn.scrollTo = function (n, s, o) {
        return "object" == typeof s && (o = s, s = 0),
        "function" == typeof o && (o = {
            onAfter: o
        }),
        "max" == n && (n = 9e9),
        o = t.extend({}, i.defaults, o),
        s = s || o.speed || o.duration,
        o.queue = o.queue && o.axis.length > 1,
        o.queue && (s /= 2),
        o.offset = e(o.offset),
        o.over = e(o.over),
        this._scrollable().each(function () {
            function r(t) {
                h.animate(u, s, o.easing, t &&
                function () {
                    t.call(this, n, o)
                })
            }
            var a, l = this,
                h = t(l),
                c = n,
                u = {},
                d = h.is("html,body");
            switch (typeof c) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(c)) {
                        c = e(c);
                        break
                    }
                    c = t(c, this);
                case "object":
                    (c.is || c.style) && (a = (c = t(c)).offset())
                }
            t.each(o.axis.split(""), function (t, e) {
                    var n = "x" == e ? "Left" : "Top",
                        s = n.toLowerCase(),
                        p = "scroll" + n,
                        f = l[p],
                        g = i.max(l, e);
                    if (a) u[p] = a[s] + (d ? 0 : f - h.offset()[s]),
                    o.margin && (u[p] -= parseInt(c.css("margin" + n)) || 0, u[p] -= parseInt(c.css("border" + n + "Width")) || 0),
                    u[p] += o.offset[s] || 0,
                    o.over[s] && (u[p] += c["x" == e ? "width" : "height"]() * o.over[s]);
                    else {
                            var m = c[s];
                            u[p] = m.slice && "%" == m.slice(-1) ? parseFloat(m) / 100 * g : m
                        }
                    /^\d+$/.test(u[p]) && (u[p] = u[p] <= 0 ? 0 : Math.min(u[p], g)),
                    !t && o.queue && (f != u[p] && r(o.onAfterFirst), delete u[p])
                }),
            r(o.onAfter)
        }).end()
    },
    i.max = function (e, i) {
        var n = "x" == i ? "Width" : "Height",
            s = "scroll" + n;
        if (!t(e).is("html,body")) return e[s] - t(e)[n.toLowerCase()]();
        var o = "client" + n,
            r = e.ownerDocument.documentElement,
            a = e.ownerDocument.body;
        return Math.max(r[s], a[s]) - Math.min(r[o], a[o])
    }
}(jQuery),
$(document).ready(function () {
    function t(t) {
        $(t + " form.edit input").keydown(function (e) {
            27 == e.which && ($(this).closest("form.edit").hide(), $(t + " h1").show(), e.preventDefault()),
            (9 == e.which || 13 == e.which) && ($(this).closest("form.edit").submit(), $(t + " h1 a").html($(this).attr("value")), $(this).closest("form.edit").hide(), $(t + " h1").show(), e.preventDefault())
        })
    }
    $("#select_canvas").click(function () {
        return $("ul.the_product_menu").hide(),
        $("ul.the_canvas_menu").slideToggle("medium"),
        !1
    }),
    $("#select_product").click(function () {
        return $("ul.the_canvas_menu").hide(),
        $("ul.the_product_menu").slideToggle("medium"),
        !1
    }),
    $(".edit_title").click(function (e) {
        var i = $(this).attr("data-title"),
            n = $(this).attr("data-form"),
            s = $(this).attr("data-menu");
        $("." + s).hide(),
        $("#" + i).hide(),
        $("#" + n).css("display", "block"),
        $("#" + n).find("input").focus(),
        $("#" + n).find("input").select(),
        $("#" + n).closest("form.edit").submit(function (t) {
                $("#" + n).hide(),
                $("#" + i).show(),
                t.preventDefault()
            }),
        t("#canvas_title_container"),
        t("#product_menu_container"),
        e.stopPropagation()
    })
}),
$(document).ready(function () {
    var t = $("meta[name='csrf-token']").attr("content");
    $.ajaxSetup({
        headers: {
            "X-CSRF-Token": t
        }
    }),
    $("#select_notif").click(function () {
        $("#notifications").slideDown(2e3, function () {}),
        $.post("/mark_notifications_as_seen", {}, function () {
            $("#select_notif").text("0")
        })
    }),
    $("#notifications").hover(function () {}, function () {
        $("#notifications").fadeOut("slow", function () {})
    });
    var e = $("#oe_menu"),
        i = e.children("li"),
        n = $("#oe_overlay");
    i.bind("click", function () {
            var t = $(this);
            t.addClass("slided selected"),
            t.children("div").css("z-index", "9999").stop(!0, !0).slideDown(200, function () {
                i.not(".slided").children("div").hide(),
                t.removeClass("slided")
            })
        }).bind("mouseleave", function () {
            var t = $(this);
            t.removeClass("selected").children("div").css("z-index", "1")
        }),
    e.bind("mouseenter", function () {
            var t = $(this);
            n.stop(!0, !0).fadeTo(200, .6),
            t.addClass("hovered")
        }).bind("mouseleave", function () {
            var t = $(this);
            t.removeClass("hovered"),
            n.stop(!0, !0).fadeTo(200, 0),
            i.children("div").hide()
        })
}),


function () {
    $(function () {
        return $("#trial_code_trial_source_id").change(function () {
            var t;
            return t = $(this).attr("value"),
            jQuery.get("/admin/trial_sources/" + t + ".json", function (t) {
                return $("#trial_code_trial_length").val(t.default_length),
                $("#trial_code_max_quantity").val(t.default_quantity)
            })
        })
    })
}.call(this);
var formData = new
function () {
    var t = location.search ? -1 != location.search.indexOf("#") ? location.search.substring(1, location.search.indexOf("#")) : location.search.substring(1) : "",
        e = [];
    if (t) {
            var n = t.split("&");
            for (i in n) if ("string" == typeof n[i]) {
                var s = n[i].split("="),
                    o = unescape(s[0]);
                o = "c" == o.charAt(0) ? o.replace(/\s/g, "_") : o,
                e[o] = unescape(s[1])
            }
        }
    this.display = function (t) {
            document.write(e[t] ? e[t] : "<!--If desired, replace everything between these quotes with a default in case there is no data in the query string.-->")
        },
    this.getElement = function (t) {
            return e[t]
        }
};
jQuery(function (t) {
    var e = t("meta[name=csrf-token]").attr("content"),
        i = t("meta[name=csrf-param]").attr("content");
    t.fn.extend({
            triggerAndReturn: function (e, i) {
                var n = new t.Event(e);
                return this.trigger(n, i),
                n.result !== !1
            },
            callRemote: function () {
                var e = this,
                    i = e.attr("method") || e.attr("data-method") || "GET",
                    n = e.attr("action") || e.attr("href"),
                    s = e.attr("data-type") || "script";
                if (void 0 === n) throw "No URL specified for remote call (action or href must be present).";
                if (e.triggerAndReturn("ajax:before")) {
                        var o = e.is("form") ? e.serializeArray() : [];
                        t.ajax({
                            url: n,
                            data: o,
                            dataType: s,
                            type: i.toUpperCase(),
                            beforeSend: function (t) {
                                e.trigger("ajax:loading", t)
                            },
                            success: function (t, i, n) {
                                e.trigger("ajax:success", [t, i, n])
                            },
                            complete: function (t) {
                                e.trigger("ajax:complete", t)
                            },
                            error: function (t, i, n) {
                                e.trigger("ajax:failure", [t, i, n])
                            }
                        })
                    }
                e.trigger("ajax:after")
            }
        }),
    t(document).on("a[data-confirm],input[data-confirm]", "click", function () {
            var e = t(this);
            return e.triggerAndReturn("confirm") && !confirm(e.attr("data-confirm")) ? !1 : void 0
        }),
    t(document).on("form[data-remote]", "submit", function (e) {
            t(this).callRemote(),
            e.preventDefault()
        }),
    t(document).on("a[data-remote],input[data-remote]", "click", function (e) {
            t(this).callRemote(),
            e.preventDefault()
        }),
    t(document).on("a[data-method]:not([data-remote])", "click", function (n) {
            var s = t(this),
                o = s.attr("href"),
                r = s.attr("data-method"),
                a = t('<form method="post" action="' + o + '"></form>'),
                l = '<input name="_method" value="' + r + '" type="hidden" />';
            null != i && null != e && (l += '<input name="' + i + '" value="' + e + '" type="hidden" />'),
            a.hide().append(l).appendTo("body"),
            n.preventDefault(),
            a.submit()
        });
    var n = "input[data-disable-with]",
        s = "form[data-remote]:has(" + n + ")",
        o = "form:not([data-remote]):has(" + n + ")",
        r = function () {
            t(this).find(n).each(function () {
                var e = t(this);
                e.data("enable-with", e.val()).attr("value", e.attr("data-disable-with")).attr("disabled", "disabled")
            })
        };
    t(document).on(s, "ajax:before", r),
    t(document).on(o, "submit", r),
    t(document).on(s, "ajax:complete", function () {
            t(this).find(n).each(function () {
                var e = t(this);
                e.removeAttr("disabled").val(e.data("enable-with"))
            })
        })
}),


function () {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        s = Object.prototype,
        o = Function.prototype,
        r = n.push,
        a = n.slice,
        l = n.concat,
        h = s.toString,
        c = s.hasOwnProperty,
        u = n.forEach,
        d = n.map,
        p = n.reduce,
        f = n.reduceRight,
        g = n.filter,
        m = n.every,
        v = n.some,
        b = n.indexOf,
        y = n.lastIndexOf,
        _ = Array.isArray,
        w = Object.keys,
        x = o.bind,
        C = function (t) {
            return t instanceof C ? t : this instanceof C ? void(this._wrapped = t) : new C(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : t._ = C,
    C.VERSION = "1.4.4";
    var k = C.each = C.forEach = function (t, e, n) {
            if (null != t) if (u && t.forEach === u) t.forEach(e, n);
            else if (t.length === +t.length) {
                for (var s = 0, o = t.length; o > s; s++) if (e.call(n, t[s], s, t) === i) return
            } else for (var r in t) if (C.has(t, r) && e.call(n, t[r], r, t) === i) return
        };
    C.map = C.collect = function (t, e, i) {
            var n = [];
            return null == t ? n : d && t.map === d ? t.map(e, i) : (k(t, function (t, s, o) {
                n[n.length] = e.call(i, t, s, o)
            }), n)
        };
    var T = "Reduce of empty array with no initial value";
    C.reduce = C.foldl = C.inject = function (t, e, i, n) {
            var s = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return n && (e = C.bind(e, n)),
            s ? t.reduce(e, i) : t.reduce(e);
            if (k(t, function (t, o, r) {
                s ? i = e.call(n, i, t, o, r) : (i = t, s = !0)
            }), !s) throw new TypeError(T);
            return i
        },
    C.reduceRight = C.foldr = function (t, e, i, n) {
            var s = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return n && (e = C.bind(e, n)),
            s ? t.reduceRight(e, i) : t.reduceRight(e);
            var o = t.length;
            if (o !== +o) {
                var r = C.keys(t);
                o = r.length
            }
            if (k(t, function (a, l, h) {
                l = r ? r[--o] : --o,
                s ? i = e.call(n, i, t[l], l, h) : (i = t[l], s = !0)
            }), !s) throw new TypeError(T);
            return i
        },
    C.find = C.detect = function (t, e, i) {
            var n;
            return D(t, function (t, s, o) {
                return e.call(i, t, s, o) ? (n = t, !0) : void 0
            }),
            n
        },
    C.filter = C.select = function (t, e, i) {
            var n = [];
            return null == t ? n : g && t.filter === g ? t.filter(e, i) : (k(t, function (t, s, o) {
                e.call(i, t, s, o) && (n[n.length] = t)
            }), n)
        },
    C.reject = function (t, e, i) {
            return C.filter(t, function (t, n, s) {
                return !e.call(i, t, n, s)
            }, i)
        },
    C.every = C.all = function (t, e, n) {
            e || (e = C.identity);
            var s = !0;
            return null == t ? s : m && t.every === m ? t.every(e, n) : (k(t, function (t, o, r) {
                return (s = s && e.call(n, t, o, r)) ? void 0 : i
            }), !! s)
        };
    var D = C.some = C.any = function (t, e, n) {
            e || (e = C.identity);
            var s = !1;
            return null == t ? s : v && t.some === v ? t.some(e, n) : (k(t, function (t, o, r) {
                return s || (s = e.call(n, t, o, r)) ? i : void 0
            }), !! s)
        };
    C.contains = C.include = function (t, e) {
            return null == t ? !1 : b && t.indexOf === b ? -1 != t.indexOf(e) : D(t, function (t) {
                return t === e
            })
        },
    C.invoke = function (t, e) {
            var i = a.call(arguments, 2),
                n = C.isFunction(e);
            return C.map(t, function (t) {
                    return (n ? e : t[e]).apply(t, i)
                })
        },
    C.pluck = function (t, e) {
            return C.map(t, function (t) {
                return t[e]
            })
        },
    C.where = function (t, e, i) {
            return C.isEmpty(e) ? i ? null : [] : C[i ? "find" : "filter"](t, function (t) {
                for (var i in e) if (e[i] !== t[i]) return !1;
                return !0
            })
        },
    C.findWhere = function (t, e) {
            return C.where(t, e, !0)
        },
    C.max = function (t, e, i) {
            if (!e && C.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.max.apply(Math, t);
            if (!e && C.isEmpty(t)) return -1 / 0;
            var n = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return k(t, function (t, s, o) {
                var r = e ? e.call(i, t, s, o) : t;
                r >= n.computed && (n = {
                    value: t,
                    computed: r
                })
            }),
            n.value
        },
    C.min = function (t, e, i) {
            if (!e && C.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.min.apply(Math, t);
            if (!e && C.isEmpty(t)) return 1 / 0;
            var n = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return k(t, function (t, s, o) {
                var r = e ? e.call(i, t, s, o) : t;
                n.computed > r && (n = {
                    value: t,
                    computed: r
                })
            }),
            n.value
        },
    C.shuffle = function (t) {
            var e, i = 0,
                n = [];
            return k(t, function (t) {
                    e = C.random(i++),
                    n[i - 1] = n[e],
                    n[e] = t
                }),
            n
        };
    var S = function (t) {
            return C.isFunction(t) ? t : function (e) {
                return e[t]
            }
        };
    C.sortBy = function (t, e, i) {
            var n = S(e);
            return C.pluck(C.map(t, function (t, e, s) {
                return {
                    value: t,
                    index: e,
                    criteria: n.call(i, t, e, s)
                }
            }).sort(function (t, e) {
                var i = t.criteria,
                    n = e.criteria;
                if (i !== n) {
                        if (i > n || void 0 === i) return 1;
                        if (n > i || void 0 === n) return -1
                    }
                return t.index < e.index ? -1 : 1
            }), "value")
        };
    var E = function (t, e, i, n) {
            var s = {},
                o = S(e || C.identity);
            return k(t, function (e, r) {
                    var a = o.call(i, e, r, t);
                    n(s, a, e)
                }),
            s
        };
    C.groupBy = function (t, e, i) {
            return E(t, e, i, function (t, e, i) {
                (C.has(t, e) ? t[e] : t[e] = []).push(i)
            })
        },
    C.countBy = function (t, e, i) {
            return E(t, e, i, function (t, e) {
                C.has(t, e) || (t[e] = 0),
                t[e]++
            })
        },
    C.sortedIndex = function (t, e, i, n) {
            i = null == i ? C.identity : S(i);
            for (var s = i.call(n, e), o = 0, r = t.length; r > o;) {
                var a = o + r >>> 1;
                s > i.call(n, t[a]) ? o = a + 1 : r = a
            }
            return o
        },
    C.toArray = function (t) {
            return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : []
        },
    C.size = function (t) {
            return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length
        },
    C.first = C.head = C.take = function (t, e, i) {
            return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
        },
    C.initial = function (t, e, i) {
            return a.call(t, 0, t.length - (null == e || i ? 1 : e))
        },
    C.last = function (t, e, i) {
            return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        },
    C.rest = C.tail = C.drop = function (t, e, i) {
            return a.call(t, null == e || i ? 1 : e)
        },
    C.compact = function (t) {
            return C.filter(t, C.identity)
        };
    var I = function (t, e, i) {
            return k(t, function (t) {
                C.isArray(t) ? e ? r.apply(i, t) : I(t, e, i) : i.push(t)
            }),
            i
        };
    C.flatten = function (t, e) {
            return I(t, e, [])
        },
    C.without = function (t) {
            return C.difference(t, a.call(arguments, 1))
        },
    C.uniq = C.unique = function (t, e, i, n) {
            C.isFunction(e) && (n = i, i = e, e = !1);
            var s = i ? C.map(t, i, n) : t,
                o = [],
                r = [];
            return k(s, function (i, n) {
                    (e ? n && r[r.length - 1] === i : C.contains(r, i)) || (r.push(i), o.push(t[n]))
                }),
            o
        },
    C.union = function () {
            return C.uniq(l.apply(n, arguments))
        },
    C.intersection = function (t) {
            var e = a.call(arguments, 1);
            return C.filter(C.uniq(t), function (t) {
                return C.every(e, function (e) {
                    return C.indexOf(e, t) >= 0
                })
            })
        },
    C.difference = function (t) {
            var e = l.apply(n, a.call(arguments, 1));
            return C.filter(t, function (t) {
                return !C.contains(e, t)
            })
        },
    C.zip = function () {
            for (var t = a.call(arguments), e = C.max(C.pluck(t, "length")), i = Array(e), n = 0; e > n; n++) i[n] = C.pluck(t, "" + n);
            return i
        },
    C.object = function (t, e) {
            if (null == t) return {};
            for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
            return i
        },
    C.indexOf = function (t, e, i) {
            if (null == t) return -1;
            var n = 0,
                s = t.length;
            if (i) {
                    if ("number" != typeof i) return n = C.sortedIndex(t, e),
                    t[n] === e ? n : -1;
                    n = 0 > i ? Math.max(0, s + i) : i
                }
            if (b && t.indexOf === b) return t.indexOf(e, i);
            for (; s > n; n++) if (t[n] === e) return n;
            return -1
        },
    C.lastIndexOf = function (t, e, i) {
            if (null == t) return -1;
            var n = null != i;
            if (y && t.lastIndexOf === y) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
            for (var s = n ? i : t.length; s--;) if (t[s] === e) return s;
            return -1
        },
    C.range = function (t, e, i) {
            1 >= arguments.length && (e = t || 0, t = 0),
            i = arguments[2] || 1;
            for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, o = Array(n); n > s;) o[s++] = t,
            t += i;
            return o
        },
    C.bind = function (t, e) {
            if (t.bind === x && x) return x.apply(t, a.call(arguments, 1));
            var i = a.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(a.call(arguments)))
            }
        },
    C.partial = function (t) {
            var e = a.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        },
    C.bindAll = function (t) {
            var e = a.call(arguments, 1);
            return 0 === e.length && (e = C.functions(t)),
            k(e, function (e) {
                t[e] = C.bind(t[e], t)
            }),
            t
        },
    C.memoize = function (t, e) {
            var i = {};
            return e || (e = C.identity),


            function () {
                var n = e.apply(this, arguments);
                return C.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
        },
    C.delay = function (t, e) {
            var i = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, i)
            }, e)
        },
    C.defer = function (t) {
            return C.delay.apply(C, [t, 1].concat(a.call(arguments, 1)))
        },
    C.throttle = function (t, e) {
            var i, n, s, o, r = 0,
                a = function () {
                    r = new Date,
                    s = null,
                    o = t.apply(i, n)
                };
            return function () {
                    var l = new Date,
                        h = e - (l - r);
                    return i = this,
                    n = arguments,
                    0 >= h ? (clearTimeout(s), s = null, r = l, o = t.apply(i, n)) : s || (s = setTimeout(a, h)),
                    o
                }
        },
    C.debounce = function (t, e, i) {
            var n, s;
            return function () {
                var o = this,
                    r = arguments,
                    a = function () {
                        n = null,
                        i || (s = t.apply(o, r))
                    },
                    l = i && !n;
                return clearTimeout(n),
                n = setTimeout(a, e),
                l && (s = t.apply(o, r)),
                s
            }
        },
    C.once = function (t) {
            var e, i = !1;
            return function () {
                return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
            }
        },
    C.wrap = function (t, e) {
            return function () {
                var i = [t];
                return r.apply(i, arguments),
                e.apply(this, i)
            }
        },
    C.compose = function () {
            var t = arguments;
            return function () {
                for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
                return e[0]
            }
        },
    C.after = function (t, e) {
            return 0 >= t ? e() : function () {
                return 1 > --t ? e.apply(this, arguments) : void 0
            }
        },
    C.keys = w ||
    function (t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var i in t) C.has(t, i) && (e[e.length] = i);
            return e
        },
    C.values = function (t) {
            var e = [];
            for (var i in t) C.has(t, i) && e.push(t[i]);
            return e
        },
    C.pairs = function (t) {
            var e = [];
            for (var i in t) C.has(t, i) && e.push([i, t[i]]);
            return e
        },
    C.invert = function (t) {
            var e = {};
            for (var i in t) C.has(t, i) && (e[t[i]] = i);
            return e
        },
    C.functions = C.methods = function (t) {
            var e = [];
            for (var i in t) C.isFunction(t[i]) && e.push(i);
            return e.sort()
        },
    C.extend = function (t) {
            return k(a.call(arguments, 1), function (e) {
                if (e) for (var i in e) t[i] = e[i]
            }),
            t
        },
    C.pick = function (t) {
            var e = {},
                i = l.apply(n, a.call(arguments, 1));
            return k(i, function (i) {
                    i in t && (e[i] = t[i])
                }),
            e
        },
    C.omit = function (t) {
            var e = {},
                i = l.apply(n, a.call(arguments, 1));
            for (var s in t) C.contains(i, s) || (e[s] = t[s]);
            return e
        },
    C.defaults = function (t) {
            return k(a.call(arguments, 1), function (e) {
                if (e) for (var i in e) null == t[i] && (t[i] = e[i])
            }),
            t
        },
    C.clone = function (t) {
            return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
        },
    C.tap = function (t, e) {
            return e(t),
            t
        };
    var P = function (t, e, i, n) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof C && (t = t._wrapped),
            e instanceof C && (e = e._wrapped);
            var s = h.call(t);
            if (s != h.call(e)) return !1;
            switch (s) {
            case "[object String]":
                return t == e + "";
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var o = i.length; o--;) if (i[o] == t) return n[o] == e;
            i.push(t),
            n.push(e);
            var r = 0,
                a = !0;
            if ("[object Array]" == s) {
                    if (r = t.length, a = r == e.length) for (; r-- && (a = P(t[r], e[r], i, n)););
                } else {
                    var l = t.constructor,
                        c = e.constructor;
                    if (l !== c && !(C.isFunction(l) && l instanceof l && C.isFunction(c) && c instanceof c)) return !1;
                    for (var u in t) if (C.has(t, u) && (r++, !(a = C.has(e, u) && P(t[u], e[u], i, n)))) break;
                    if (a) {
                            for (u in e) if (C.has(e, u) && !r--) break;
                            a = !r
                        }
                }
            return i.pop(),
            n.pop(),
            a
        };
    C.isEqual = function (t, e) {
            return P(t, e, [], [])
        },
    C.isEmpty = function (t) {
            if (null == t) return !0;
            if (C.isArray(t) || C.isString(t)) return 0 === t.length;
            for (var e in t) if (C.has(t, e)) return !1;
            return !0
        },
    C.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        },
    C.isArray = _ ||
    function (t) {
            return "[object Array]" == h.call(t)
        },
    C.isObject = function (t) {
            return t === Object(t)
        },
    k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
            C["is" + t] = function (e) {
                return h.call(e) == "[object " + t + "]"
            }
        }),
    C.isArguments(arguments) || (C.isArguments = function (t) {
            return !(!t || !C.has(t, "callee"))
        }),
    "function" != typeof / . / && (C.isFunction = function (t) {
            return "function" == typeof t
        }),
    C.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        },
    C.isNaN = function (t) {
            return C.isNumber(t) && t != +t
        },
    C.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" == h.call(t)
        },
    C.isNull = function (t) {
            return null === t
        },
    C.isUndefined = function (t) {
            return void 0 === t
        },
    C.has = function (t, e) {
            return c.call(t, e)
        },
    C.noConflict = function () {
            return t._ = e,
            this
        },
    C.identity = function (t) {
            return t
        },
    C.times = function (t, e, i) {
            for (var n = Array(t), s = 0; t > s; s++) n[s] = e.call(i, s);
            return n
        },
    C.random = function (t, e) {
            return null == e && (e = t, t = 0),
            t + Math.floor(Math.random() * (e - t + 1))
        };
    var N = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
    N.unescape = C.invert(N.escape);
    var A = {
            escape: RegExp("[" + C.keys(N.escape).join("") + "]", "g"),
            unescape: RegExp("(" + C.keys(N.unescape).join("|") + ")", "g")
        };
    C.each(["escape", "unescape"], function (t) {
            C[t] = function (e) {
                return null == e ? "" : ("" + e).replace(A[t], function (e) {
                    return N[t][e]
                })
            }
        }),
    C.result = function (t, e) {
            if (null == t) return null;
            var i = t[e];
            return C.isFunction(i) ? i.call(t) : i
        },
    C.mixin = function (t) {
            k(C.functions(t), function (e) {
                var i = C[e] = t[e];
                C.prototype[e] = function () {
                    var t = [this._wrapped];
                    return r.apply(t, arguments),
                    j.call(this, i.apply(C, t))
                }
            })
        };
    var H = 0;
    C.uniqueId = function (t) {
            var e = ++H + "";
            return t ? t + e : e
        },
    C.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
    var M = /(.)^/,
        $ = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    C.template = function (t, e, i) {
            var n;
            i = C.defaults({}, i, C.templateSettings);
            var s = RegExp([(i.escape || M).source, (i.interpolate || M).source, (i.evaluate || M).source].join("|") + "|$", "g"),
                o = 0,
                r = "__p+='";
            t.replace(s, function (e, i, n, s, a) {
                    return r += t.slice(o, a).replace(O, function (t) {
                        return "\\" + $[t]
                    }),
                    i && (r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"),
                    n && (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"),
                    s && (r += "';\n" + s + "\n__p+='"),
                    o = a + e.length,
                    e
                }),
            r += "';\n",
            i.variable || (r = "with(obj||{}){\n" + r + "}\n"),
            r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                    n = Function(i.variable || "obj", "_", r)
                } catch (a) {
                    throw a.source = r,
                    a
                }
            if (e) return n(e, C);
            var l = function (t) {
                    return n.call(this, t, C)
                };
            return l.source = "function(" + (i.variable || "obj") + "){\n" + r + "}",
            l
        },
    C.chain = function (t) {
            return C(t).chain()
        };
    var j = function (t) {
            return this._chain ? C(t).chain() : t
        };
    C.mixin(C),
    k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = n[t];
            C.prototype[t] = function () {
                var i = this._wrapped;
                return e.apply(i, arguments),
                "shift" != t && "splice" != t || 0 !== i.length || delete i[0],
                j.call(this, i)
            }
        }),
    k(["concat", "join", "slice"], function (t) {
            var e = n[t];
            C.prototype[t] = function () {
                return j.call(this, e.apply(this._wrapped, arguments))
            }
        }),
    C.extend(C.prototype, {
            chain: function () {
                return this._chain = !0,
                this
            },
            value: function () {
                return this._wrapped
            }
        })
}.call(this);
var JSON;
if (JSON || (JSON = {}), function () {
    "use strict";

    function f(t) {
        return 10 > t ? "0" + t : t
    }
    function quote(t) {
        return escapable.lastIndex = 0,
        escapable.test(t) ? '"' + t.replace(escapable, function (t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var i, n, s, o, r, a = gap,
            l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
            case "string":
                return quote(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) return "null";
                if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                    for (o = l.length, i = 0; o > i; i += 1) r[i] = str(i, l) || "null";
                    return s = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + a + "]" : "[" + r.join(",") + "]",
                    gap = a,
                    s
                }
                if (rep && "object" == typeof rep) for (o = rep.length, i = 0; o > i; i += 1)"string" == typeof rep[i] && (n = rep[i], s = str(n, l), s && r.push(quote(n) + (gap ? ": " : ":") + s));
                else for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (s = str(n, l), s && r.push(quote(n) + (gap ? ": " : ":") + s));
                return s = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + a + "}" : "{" + r.join(",") + "}",
                gap = a,
                s
            }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, i) {
            var n;
            if (gap = "", indent = "", "number" == typeof i) for (n = 0; i > n; n += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }),
    "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            function walk(t, e) {
                var i, n, s = t[e];
                if (s && "object" == typeof s) for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (n = walk(s, i), void 0 !== n ? s[i] = n : delete s[i]);
                return reviver.call(t, e, s)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
}(), function () {
    var t, e = this,
        i = e.Backbone,
        n = [],
        s = n.push,
        o = n.slice,
        r = n.splice;
    t = "undefined" != typeof exports ? exports : e.Backbone = {},
    t.VERSION = "1.0.0";
    var a = e._;
    a || "undefined" == typeof require || (a = require("underscore")),
    t.$ = e.jQuery || e.Zepto || e.ender || e.$,
    t.noConflict = function () {
            return e.Backbone = i,
            this
        },
    t.emulateHTTP = !1,
    t.emulateJSON = !1;
    var l = t.Events = {
            on: function (t, e, i) {
                if (!c(this, "on", t, [e, i]) || !e) return this;
                this._events || (this._events = {});
                var n = this._events[t] || (this._events[t] = []);
                return n.push({
                    callback: e,
                    context: i,
                    ctx: i || this
                }),
                this
            },
            once: function (t, e, i) {
                if (!c(this, "once", t, [e, i]) || !e) return this;
                var n = this,
                    s = a.once(function () {
                        n.off(t, s),
                        e.apply(this, arguments)
                    });
                return s._callback = e,
                this.on(t, s, i)
            },
            off: function (t, e, i) {
                var n, s, o, r, l, h, u, d;
                if (!this._events || !c(this, "off", t, [e, i])) return this;
                if (!t && !e && !i) return this._events = {},
                this;
                for (r = t ? [t] : a.keys(this._events), l = 0, h = r.length; h > l; l++) if (t = r[l], o = this._events[t]) {
                    if (this._events[t] = n = [], e || i) for (u = 0, d = o.length; d > u; u++) s = o[u],
                    (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && n.push(s);
                    n.length || delete this._events[t]
                }
                return this
            },
            trigger: function (t) {
                if (!this._events) return this;
                var e = o.call(arguments, 1);
                if (!c(this, "trigger", t, e)) return this;
                var i = this._events[t],
                    n = this._events.all;
                return i && u(i, e),
                n && u(n, arguments),
                this
            },
            stopListening: function (t, e, i) {
                var n = this._listeners;
                if (!n) return this;
                var s = !e && !i;
                "object" == typeof e && (i = this),
                t && ((n = {})[t._listenerId] = t);
                for (var o in n) n[o].off(e, i, this),
                s && delete this._listeners[o];
                return this
            }
        },
        h = /\s+/,
        c = function (t, e, i, n) {
            if (!i) return !0;
            if ("object" == typeof i) {
                for (var s in i) t[e].apply(t, [s, i[s]].concat(n));
                return !1
            }
            if (h.test(i)) {
                for (var o = i.split(h), r = 0, a = o.length; a > r; r++) t[e].apply(t, [o[r]].concat(n));
                return !1
            }
            return !0
        },
        u = function (t, e) {
            var i, n = -1,
                s = t.length,
                o = e[0],
                r = e[1],
                a = e[2];
            switch (e.length) {
                case 0:
                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o);
                    return;
                case 2:
                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o, r);
                    return;
                case 3:
                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, o, r, a);
                    return;
                default:
                    for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e)
                }
        },
        d = {
            listenTo: "on",
            listenToOnce: "once"
        };
    a.each(d, function (t, e) {
            l[e] = function (e, i, n) {
                var s = this._listeners || (this._listeners = {}),
                    o = e._listenerId || (e._listenerId = a.uniqueId("l"));
                return s[o] = e,
                "object" == typeof i && (n = this),
                e[t](i, n, this),
                this
            }
        }),
    l.bind = l.on,
    l.unbind = l.off,
    a.extend(t, l);
    var p = t.Model = function (t, e) {
            var i, n = t || {};
            e || (e = {}),
            this.cid = a.uniqueId("c"),
            this.attributes = {},
            a.extend(this, a.pick(e, f)),
            e.parse && (n = this.parse(n, e) || {}),
            (i = a.result(this, "defaults")) && (n = a.defaults({}, n, i)),
            this.set(n, e),
            this.changed = {},
            this.initialize.apply(this, arguments)
        },
        f = ["url", "urlRoot", "collection"];
    a.extend(p.prototype, l, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function () {
                return a.clone(this.attributes)
            },
            sync: function () {
                return t.sync.apply(this, arguments)
            },
            get: function (t) {
                return this.attributes[t]
            },
            escape: function (t) {
                return a.escape(this.get(t))
            },
            has: function (t) {
                return null != this.get(t)
            },
            set: function (t, e, i) {
                var n, s, o, r, l, h, c, u;
                if (null == t) return this;
                if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i)) return !1;
                o = i.unset,
                l = i.silent,
                r = [],
                h = this._changing,
                this._changing = !0,
                h || (this._previousAttributes = a.clone(this.attributes), this.changed = {}),
                u = this.attributes,
                c = this._previousAttributes,
                this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (n in s) e = s[n],
                a.isEqual(u[n], e) || r.push(n),
                a.isEqual(c[n], e) ? delete this.changed[n] : this.changed[n] = e,
                o ? delete u[n] : u[n] = e;
                if (!l) {
                    r.length && (this._pending = !0);
                    for (var d = 0, p = r.length; p > d; d++) this.trigger("change:" + r[d], this, u[r[d]], i)
                }
                if (h) return this;
                if (!l) for (; this._pending;) this._pending = !1,
                this.trigger("change", this, i);
                return this._pending = !1,
                this._changing = !1,
                this
            },
            unset: function (t, e) {
                return this.set(t, void 0, a.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function (t) {
                var e = {};
                for (var i in this.attributes) e[i] = void 0;
                return this.set(e, a.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function (t) {
                return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t)
            },
            changedAttributes: function (t) {
                if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
                var e, i = !1,
                    n = this._changing ? this._previousAttributes : this.attributes;
                for (var s in t) a.isEqual(n[s], e = t[s]) || ((i || (i = {}))[s] = e);
                return i
            },
            previous: function (t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function () {
                return a.clone(this._previousAttributes)
            },
            fetch: function (t) {
                t = t ? a.clone(t) : {},
                void 0 === t.parse && (t.parse = !0);
                var e = this,
                    i = t.success;
                return t.success = function (n) {
                        return e.set(e.parse(n, t), t) ? (i && i(e, n, t), void e.trigger("sync", e, n, t)) : !1
                    },
                j(this, t),
                this.sync("read", this, t)
            },
            save: function (t, e, i) {
                var n, s, o, r = this.attributes;
                if (null == t || "object" == typeof t ? (n = t, i = e) : (n = {})[t] = e, !(!n || i && i.wait || this.set(n, i))) return !1;
                if (i = a.extend({
                    validate: !0
                }, i), !this._validate(n, i)) return !1;
                n && i.wait && (this.attributes = a.extend({}, r, n)),
                void 0 === i.parse && (i.parse = !0);
                var l = this,
                    h = i.success;
                return i.success = function (t) {
                        l.attributes = r;
                        var e = l.parse(t, i);
                        return i.wait && (e = a.extend(n || {}, e)),
                        a.isObject(e) && !l.set(e, i) ? !1 : (h && h(l, t, i), void l.trigger("sync", l, t, i))
                    },
                j(this, i),
                s = this.isNew() ? "create" : i.patch ? "patch" : "update",
                "patch" === s && (i.attrs = n),
                o = this.sync(s, this, i),
                n && i.wait && (this.attributes = r),
                o
            },
            destroy: function (t) {
                t = t ? a.clone(t) : {};
                var e = this,
                    i = t.success,
                    n = function () {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function (s) {
                        (t.wait || e.isNew()) && n(),
                        i && i(e, s, t),
                        e.isNew() || e.trigger("sync", e, s, t)
                    }, this.isNew()) return t.success(),
                !1;
                j(this, t);
                var s = this.sync("delete", this, t);
                return t.wait || n(),
                s
            },
            url: function () {
                var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || O();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function (t) {
                return t
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return null == this.id
            },
            isValid: function (t) {
                return this._validate({}, a.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function (t, e) {
                if (!e.validate || !this.validate) return !0;
                t = a.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return i ? (this.trigger("invalid", this, i, a.extend(e || {}, {
                    validationError: i
                })), !1) : !0
            }
        });
    var g = ["keys", "values", "pairs", "invert", "pick", "omit"];
    a.each(g, function (t) {
            p.prototype[t] = function () {
                var e = o.call(arguments);
                return e.unshift(this.attributes),
                a[t].apply(a, e)
            }
        });
    var m = t.Collection = function (t, e) {
            e || (e = {}),
            e.url && (this.url = e.url),
            e.model && (this.model = e.model),
            void 0 !== e.comparator && (this.comparator = e.comparator),
            this._reset(),
            this.initialize.apply(this, arguments),
            t && this.reset(t, a.extend({
                silent: !0
            }, e))
        },
        v = {
            add: !0,
            remove: !0,
            merge: !0
        },
        b = {
            add: !0,
            merge: !1,
            remove: !1
        };
    a.extend(m.prototype, l, {
            model: p,
            initialize: function () {},
            toJSON: function (t) {
                return this.map(function (e) {
                    return e.toJSON(t)
                })
            },
            sync: function () {
                return t.sync.apply(this, arguments)
            },
            add: function (t, e) {
                return this.set(t, a.defaults(e || {}, b))
            },
            remove: function (t, e) {
                t = a.isArray(t) ? t.slice() : [t],
                e || (e = {});
                var i, n, s, o;
                for (i = 0, n = t.length; n > i; i++) o = this.get(t[i]),
                o && (delete this._byId[o.id], delete this._byId[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, o.trigger("remove", o, this, e)), this._removeReference(o));
                return this
            },
            set: function (t, e) {
                e = a.defaults(e || {}, v),
                e.parse && (t = this.parse(t, e)),
                a.isArray(t) || (t = t ? [t] : []);
                var i, n, o, l, h, c = e.at,
                    u = this.comparator && null == c && e.sort !== !1,
                    d = a.isString(this.comparator) ? this.comparator : null,
                    p = [],
                    f = [],
                    g = {};
                for (i = 0, n = t.length; n > i; i++)(o = this._prepareModel(t[i], e)) && ((l = this.get(o)) ? (e.remove && (g[l.cid] = !0), e.merge && (l.set(o.attributes, e), u && !h && l.hasChanged(d) && (h = !0))) : e.add && (p.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)));
                if (e.remove) {
                        for (i = 0, n = this.length; n > i; ++i) g[(o = this.models[i]).cid] || f.push(o);
                        f.length && this.remove(f, e)
                    }
                if (p.length && (u && (h = !0), this.length += p.length, null != c ? r.apply(this.models, [c, 0].concat(p)) : s.apply(this.models, p)), h && this.sort({
                        silent: !0
                    }), e.silent) return this;
                for (i = 0, n = p.length; n > i; i++)(o = p[i]).trigger("add", o, this, e);
                return h && this.trigger("sort", this, e),
                this
            },
            reset: function (t, e) {
                e || (e = {});
                for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
                return e.previousModels = this.models,
                this._reset(),
                this.add(t, a.extend({
                    silent: !0
                }, e)),
                e.silent || this.trigger("reset", this, e),
                this
            },
            push: function (t, e) {
                return t = this._prepareModel(t, e),
                this.add(t, a.extend({
                    at: this.length
                }, e)),
                t
            },
            pop: function (t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t),
                e
            },
            unshift: function (t, e) {
                return t = this._prepareModel(t, e),
                this.add(t, a.extend({
                    at: 0
                }, e)),
                t
            },
            shift: function (t) {
                var e = this.at(0);
                return this.remove(e, t),
                e
            },
            slice: function (t, e) {
                return this.models.slice(t, e)
            },
            get: function (t) {
                return null == t ? void 0 : this._byId[null != t.id ? t.id : t.cid || t]
            },
            at: function (t) {
                return this.models[t]
            },
            where: function (t, e) {
                return a.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function (e) {
                    for (var i in t) if (t[i] !== e.get(i)) return !1;
                    return !0
                })
            },
            findWhere: function (t) {
                return this.where(t, !0)
            },
            sort: function (t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}),
                a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)),
                t.silent || this.trigger("sort", this, t),
                this
            },
            sortedIndex: function (t, e, i) {
                e || (e = this.comparator);
                var n = a.isFunction(e) ? e : function (t) {
                    return t.get(e)
                };
                return a.sortedIndex(this.models, t, n, i)
            },
            pluck: function (t) {
                return a.invoke(this.models, "get", t)
            },
            fetch: function (t) {
                t = t ? a.clone(t) : {},
                void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    i = this;
                return t.success = function (n) {
                        var s = t.reset ? "reset" : "set";
                        i[s](n, t),
                        e && e(i, n, t),
                        i.trigger("sync", i, n, t)
                    },
                j(this, t),
                this.sync("read", this, t)
            },
            create: function (t, e) {
                if (e = e ? a.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var i = this,
                    n = e.success;
                return e.success = function (s) {
                        e.wait && i.add(t, e),
                        n && n(t, s, e)
                    },
                t.save(null, e),
                t
            },
            parse: function (t) {
                return t
            },
            clone: function () {
                return new this.constructor(this.models)
            },
            _reset: function () {
                this.length = 0,
                this.models = [],
                this._byId = {}
            },
            _prepareModel: function (t, e) {
                if (t instanceof p) return t.collection || (t.collection = this),
                t;
                e || (e = {}),
                e.collection = this;
                var i = new this.model(t, e);
                return i._validate(t, e) ? i : (this.trigger("invalid", this, t, e), !1)
            },
            _removeReference: function (t) {
                this === t.collection && delete t.collection,
                t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (t, e, i, n) {
                ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
    var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    a.each(y, function (t) {
            m.prototype[t] = function () {
                var e = o.call(arguments);
                return e.unshift(this.models),
                a[t].apply(a, e)
            }
        });
    var _ = ["groupBy", "countBy", "sortBy"];
    a.each(_, function (t) {
            m.prototype[t] = function (e, i) {
                var n = a.isFunction(e) ? e : function (t) {
                    return t.get(e)
                };
                return a[t](this.models, n, i)
            }
        });
    var w = t.View = function (t) {
            this.cid = a.uniqueId("view"),
            this._configure(t || {}),
            this._ensureElement(),
            this.initialize.apply(this, arguments),
            this.delegateEvents()
        },
        x = /^(\S+)\s*(.*)$/,
        C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    a.extend(w.prototype, l, {
            tagName: "div",
            $: function (t) {
                return this.$el.find(t)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this.$el.remove(),
                this.stopListening(),
                this
            },
            setElement: function (e, i) {
                return this.$el && this.undelegateEvents(),
                this.$el = e instanceof t.$ ? e : t.$(e),
                this.el = this.$el[0],
                i !== !1 && this.delegateEvents(),
                this
            },
            delegateEvents: function (t) {
                if (!t && !(t = a.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (a.isFunction(i) || (i = this[t[e]]), i) {
                        var n = e.match(x),
                            s = n[1],
                            o = n[2];
                        i = a.bind(i, this),
                        s += ".delegateEvents" + this.cid,
                        "" === o ? this.$el.on(s, i) : this.$el.on(s, o, i)
                    }
                }
                return this
            },
            undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid),
                this
            },
            _configure: function (t) {
                this.options && (t = a.extend({}, a.result(this, "options"), t)),
                a.extend(this, a.pick(t, C)),
                this.options = t
            },
            _ensureElement: function () {
                if (this.el) this.setElement(a.result(this, "el"), !1);
                else {
                    var e = a.extend({}, a.result(this, "attributes"));
                    this.id && (e.id = a.result(this, "id")),
                    this.className && (e["class"] = a.result(this, "className"));
                    var i = t.$("<" + a.result(this, "tagName") + ">").attr(e);
                    this.setElement(i, !1)
                }
            }
        }),
    t.sync = function (e, i, n) {
            var s = k[e];
            a.defaults(n || (n = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            if (n.url || (o.url = a.result(i, "url") || O()), null != n.data || !i || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json", o.data = JSON.stringify(n.attrs || i.toJSON(n))), n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {}), n.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                o.type = "POST",
                n.emulateJSON && (o.data._method = s);
                var r = n.beforeSend;
                n.beforeSend = function (t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", s),
                    r ? r.apply(this, arguments) : void 0
                }
            }
            "GET" === o.type || n.emulateJSON || (o.processData = !1),
            "PATCH" !== o.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (o.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = n.xhr = t.ajax(a.extend(o, n));
            return i.trigger("request", i, l, n),
            l
        };
    var k = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    t.ajax = function () {
            return t.$.ajax.apply(t.$, arguments)
        };
    var T = t.Router = function (t) {
            t || (t = {}),
            t.routes && (this.routes = t.routes),
            this._bindRoutes(),
            this.initialize.apply(this, arguments)
        },
        D = /\((.*?)\)/g,
        S = /(\(\?)?:\w+/g,
        E = /\*\w+/g,
        I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    a.extend(T.prototype, l, {
            initialize: function () {},
            route: function (e, i, n) {
                a.isRegExp(e) || (e = this._routeToRegExp(e)),
                a.isFunction(i) && (n = i, i = ""),
                n || (n = this[i]);
                var s = this;
                return t.history.route(e, function (o) {
                    var r = s._extractParameters(e, o);
                    n && n.apply(s, r),
                    s.trigger.apply(s, ["route:" + i].concat(r)),
                    s.trigger("route", i, r),
                    t.history.trigger("route", s, i, r)
                }),
                this
            },
            navigate: function (e, i) {
                return t.history.navigate(e, i),
                this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = a.result(this, "routes");
                    for (var t, e = a.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function (t) {
                return t = t.replace(I, "\\$&").replace(D, "(?:$1)?").replace(S, function (t, e) {
                    return e ? t : "([^/]+)"
                }).replace(E, "(.*?)"),
                new RegExp("^" + t + "$")
            },
            _extractParameters: function (t, e) {
                var i = t.exec(e).slice(1);
                return a.map(i, function (t) {
                    return t ? decodeURIComponent(t) : null
                })
            }
        });
    var P = t.History = function () {
            this.handlers = [],
            a.bindAll(this, "checkUrl"),
            "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        N = /^[#\/]|\s+$/g,
        A = /^\/+|\/+$/g,
        H = /msie [\w.]+/,
        M = /\/$/;
    P.started = !1,
    a.extend(P.prototype, l, {
            interval: 50,
            getHash: function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function (t, e) {
                if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                    t = this.location.pathname;
                    var i = this.root.replace(M, "");
                    t.indexOf(i) || (t = t.substr(i.length))
                } else t = this.getHash();
                return t.replace(N, "")
            },
            start: function (e) {
                if (P.started) throw new Error("Backbone.history has already been started");
                P.started = !0,
                this.options = a.extend({}, {
                    root: "/"
                }, this.options, e),
                this.root = this.options.root,
                this._wantsHashChange = this.options.hashChange !== !1,
                this._wantsPushState = !! this.options.pushState,
                this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    n = document.documentMode,
                    s = H.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
                this.root = ("/" + this.root + "/").replace(A, "/"),
                s && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(i)),
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                this.fragment = i;
                var o = this.location,
                    r = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !r ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && r && o.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function () {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                clearInterval(this._checkUrlInterval),
                P.started = !1
            },
            route: function (t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function () {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
                t === this.fragment ? !1 : (this.iframe && this.navigate(t), void(this.loadUrl() || this.loadUrl(this.getHash())))
            },
            loadUrl: function (t) {
                var e = this.fragment = this.getFragment(t),
                    i = a.any(this.handlers, function (t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    });
                return i
            },
            navigate: function (t, e) {
                if (!P.started) return !1;
                if (e && e !== !0 || (e = {
                    trigger: e
                }), t = this.getFragment(t || ""), this.fragment !== t) {
                    this.fragment = t;
                    var i = this.root + t;
                    if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        this._updateHash(this.location, t, e.replace),
                        this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    e.trigger && this.loadUrl(t)
                }
            },
            _updateHash: function (t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else t.hash = "#" + e
            }
        }),
    t.history = new P;
    var $ = function (t, e) {
            var i, n = this;
            i = t && a.has(t, "constructor") ? t.constructor : function () {
                return n.apply(this, arguments)
            },
            a.extend(i, n, e);
            var s = function () {
                this.constructor = i
            };
            return s.prototype = n.prototype,
            i.prototype = new s,
            t && a.extend(i.prototype, t),
            i.__super__ = n.prototype,
            i
        };
    p.extend = m.extend = T.extend = w.extend = P.extend = $;
    var O = function () {
            throw new Error('A "url" property or function must be specified')
        },
        j = function (t, e) {
            var i = e.error;
            e.error = function (n) {
                i && i(t, n, e),
                t.trigger("error", t, n, e)
            }
        }
}.call(this), function () {
    "use strict";
    Backbone.LiveCollection = Backbone.Collection.extend({
        live: function (t) {
            var e = this;
            return this.opts = t,
            (t.pusher || t.pusherChannel) && (this.liveType = "pusher", this.pusher = t.pusher, this.channelName = t.channelName, this.eventType = t.eventType, this.user_id = t.user_id, this.channelType = "", ("private" === t.channelType || "presence" === t.channelType) && (this.channelType = t.channelType + "-"), this.log = t.log || !1, this.log && (Pusher.log = function (t) {
                window.console && window.console.log && window.console.log(t)
            })),
            "pusher" === this.liveType ? (t.pusherChannel ? this.pusherChannel = t.pusherChannel : (this.pusherChannel = this.pusher.subscribe(this.channelType + this.channelName), t.pusherChannel = this.pusherChannel), this.pusherChannel.bind("add_" + this.eventType, function (t) {
                var i = JSON.parse(t.canvas_item),
                    n = t.creator_id;
                e.user_id != n && e.add(i),
                updateStatus()
            }), this.pusherChannel.bind("remove_" + this.eventType, function (t) {
                var i = JSON.parse(t.canvas_item),
                    n = t.creator_id;
                e.user_id != n && e.remove(i),
                updateStatus()
            }), this.pusherChannel.bind("update_" + this.eventType, function (t) {
                var i = JSON.parse(t.canvas_item),
                    n = t.creator_id;
                e.user_id != n && (i.thirdPartyEditing = t.thirdPartyEditing, i.thirdPartyEditor = t.creator_name, e.get(i.id) && e.get(i.id).set(i)),
                updateStatus()
            }), this.pusherChannel.bind("reset_" + this.eventType, function (t) {
                var i = JSON.parse(t.canvas_items),
                    n = t.creator_id;
                e.user_id != n && e.reset(i)
            }), this.isLive = !0, this.pusherChannel) : void 0
        },
        die: function () {
            return this.isLive = !1,
            "pusher" === this.liveType ? (this.pusherChannel && (this.pusherChannel.unbind("add_" + this.eventType), this.pusherChannel.unbind("remove_" + this.eventType), this.pusherChannel.unbind("update_" + this.eventType)), this.pusherChannel) : void 0
        },
        killAll: function () {
            "pusher" === this.liveType && this.pusher.unsubscribe(this.channelType + this.channel)
        },
        isLive: function () {
            return this.isLive
        }
    }),
    Backbone.LiveModel = Backbone.Model.extend({
        live: function (t) {
            var e = this;
            return this.opts = t,
            (t.pusher || t.pusherChannel) && (this.liveType = "pusher", this.pusher = t.pusher, this.channelName = t.channelName, this.eventType = t.eventType, this.user_id = t.user_id, this.channelType = "", ("private" === t.channelType || "presence" === t.channelType) && (this.channelType = t.channelType + "-"), this.log = t.log || !1, this.log && (Pusher.log = function (t) {
                window.console && window.console.log && window.console.log(t)
            })),
            "pusher" === this.liveType ? (t.pusherChannel ? this.pusherChannel = t.pusherChannel : (this.pusherChannel = this.pusher.subscribe(this.channelType + this.channelName), t.pusherChannel = this.pusherChannel), this.pusherChannel.bind("update_" + this.eventType, function (t) {
                var i = t.canvas_item,
                    n = t.creator_id;
                e.user_id != n && e.get("id") === i.id && e.set(i)
            }), this.pusherChannel) : void 0
        },
        die: function () {
            return this.isLive = !1,
            "pusher" === this.liveType ? (this.pusherChannel && (this.pusherChannel.unbind("update_" + this.eventType), this.pusher.unsubscribe(this.channelType + this.channel)), this.pusherChannel) : void 0
        },
        isLive: function () {
            return this.isLive
        }
    })
}(), function (t) {
    t.widget("ui.sortable", t.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData("sortable-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e); {
                var n = null,
                    s = this;
                t(e.target).parents().each(function () {
                        return t.data(this, "sortable-item") == s ? (n = t(this), !1) : void 0
                    })
            }
            if (t.data(e.target, "sortable-item") == s && (n = t(e.target)), !n) return !1;
            if (this.options.handle && !i) {
                var o = !1;
                if (t(this.options.handle, n).find("*").andSelf().each(function () {
                    this == e.target && (o = !0)
                }), !o) return !1
            }
            return this.currentItem = n,
            this._removeCurrentsFromItems(),
            !0
        },
        _mouseStart: function (e, i, n) {
            var s = this.options,
                o = this;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (var r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, o._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function (e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    n = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))),
                n !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var s = this.items.length - 1; s >= 0; s--) {
                var o = this.items[s],
                    r = o.item[0],
                    a = this._intersectsWithPointer(o);
                if (a && r != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != r && !t.ui.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !t.ui.contains(this.element[0], r) : !0)) {
                        if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                        this._rearrange(e, o),
                        this._trigger("change", e, this._uiHash());
                        break
                    }
            }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = n.placeholder.offset();
                    n.reverting = !0,
                    t(this.helper).animate({
                            left: s.left - this.offset.parent.left - n.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: s.top - this.offset.parent.top - n.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(e)
                        })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            var e = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("deactivate", null, e._uiHash(this)),
                this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, e._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {},
            t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {},
            i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }),
            n
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = n + h > a && l > n + h && e + c > o && r > e + c;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                s = i && n,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && n || "left" == o && !n : s && ("down" == s && i || "up" == s && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i = [],
                n = [],
                s = this._connectWith();
            if (s && e) for (var o = s.length - 1; o >= 0; o--) for (var r = t(s[o]), a = r.length - 1; a >= 0; a--) {
                    var l = t.data(r[a], "sortable");
                    l && l != this && !l.options.disabled && n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                }
            n.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = n.length - 1; o >= 0; o--) n[o][0].each(function () {
                    i.push(this)
                });
            return t(i)
        },
        _removeCurrentsFromItems: function () {
            for (var t = this.currentItem.find(":data(sortable-item)"), e = 0; e < this.items.length; e++) for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function (e) {
            this.items = [],
            this.containers = [this];
            var i = this.items,
                n = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
            ],
                s = this._connectWith();
            if (s) for (var o = s.length - 1; o >= 0; o--) for (var r = t(s[o]), a = r.length - 1; a >= 0; a--) {
                    var l = t.data(r[a], "sortable");
                    l && l != this && !l.options.disabled && (n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                        item: this.currentItem
                    }) : t(l.options.items, l.element), l]), this.containers.push(l))
                }
            for (var o = n.length - 1; o >= 0; o--) for (var h = n[o][1], c = n[o][0], a = 0, u = c.length; u > a; a++) {
                    var d = t(c[a]);
                    d.data("sortable-item", h),
                    i.push({
                        item: d,
                        instance: h,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var n = this.items[i];
                if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                    var s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item;
                    e || (n.width = s.outerWidth(), n.height = s.outerHeight());
                    var o = s.offset();
                    n.left = o.left,
                    n.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var i = this.containers.length - 1; i >= 0; i--) {
                var o = this.containers[i].element.offset();
                this.containers[i].containerCache.left = o.left,
                this.containers[i].containerCache.top = o.top,
                this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (e) {
            var i = e || this,
                n = i.options;
            if (!n.placeholder || n.placeholder.constructor == String) {
                    var s = n.placeholder;
                    n.placeholder = {
                        element: function () {
                            var e = t(document.createElement(i.currentItem[0].nodeName)).addClass(s || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            return s || (e.style.visibility = "hidden"),
                            e
                        },
                        update: function (t, e) {
                            (!s || n.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }
                }
            i.placeholder = t(n.placeholder.element.call(i.element, i.currentItem)),
            i.currentItem.after(i.placeholder),
            n.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function (e) {
            for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--) if (!t.ui.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (i && t.ui.contains(this.containers[s].element[0], i.element[0])) continue;
                i = this.containers[s],
                n = s
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[n]._trigger("over", e, this._uiHash(this)),
            this.containers[n].containerCache.over = 1;
            else if (this.currentContainer != this.containers[n]) {
                for (var o = 1e4, r = null, a = this.positionAbs[this.containers[n].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--) if (t.ui.contains(this.containers[n].element[0], this.items[l].item[0])) {
                    var h = this.items[l][this.containers[n].floating ? "left" : "top"];
                    Math.abs(h - a) < o && (o = Math.abs(h - a), r = this.items[l])
                }
                if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[n],
                r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[n].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[n]._trigger("change", e, this._uiHash(this)),
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[n]._trigger("over", e, this._uiHash(this)),
                this.containers[n].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
            n[0] == this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }),
            ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
            ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
            n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0],
                    n = t(e.containment).offset(),
                    s = "hidden" != t(i).css("overflow");
                this.containment = [n.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" == e ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n),
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n)
                }
        },
        _generatePosition: function (e) {
            var i = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX,
                r = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
                    var a = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                    r = this.containment && (a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3]) ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a;
                    var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                    o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
                }
            return {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var s = this,
                o = this.counter;
            window.setTimeout(function () {
                    o == s.counter && s.refreshPositions(!n)
                }, 0)
        },
        _clear: function (e, i) {
            this.reverting = !1;
            var n = [];
            if (!this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !i && n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), !t.ui.contains(this.element[0], this.currentItem[0])) {
                i || n.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                });
                for (var s = this.containers.length - 1; s >= 0; s--) t.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !i && (n.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), n.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.containers[s])))
            }
            for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[s])),
            this.containers[s].containerCache.over && (n.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var s = 0; s < n.length; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var s = 0; s < n.length; s++) n[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }),
    t.extend(t.ui.sortable, {
        version: "1.8.12"
    })
}(jQuery), eval(function (t, e, i, n, s, o) {
    if (s = function (t) {
        return (e > t ? "" : s(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
    }, !"".replace(/^/, String)) {
        for (; i--;) o[s(i)] = n[i] || s(i);
        n = [function (t) {
            return o[t]
        }],
        s = function () {
            return "\\w+"
        },
        i = 1
    }
    for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
    return t
}('(5($){5 L(a){a.3x.1F[a.3r]=3o(a.3n,10)+a.3l}6 j=5(a){3k({3i:"1E.1d.3d 3c 3b",38:a})};6 k=5(){7(/*@2S!@*/19&&(2Q 2N.1w.1F.2K==="2F"))};6 l={2C:[0,4,4],2B:[1u,4,4],2y:[1s,1s,2v],2u:[0,0,0],2t:[0,0,4],2s:[1q,1p,1p],2o:[0,4,4],2n:[0,0,B],2m:[0,B,B],2l:[1b,1b,1b],2j:[0,1c,0],2i:[2h,2g,1o],2e:[B,0,B],2d:[2c,1o,2b],2a:[4,1n,0],27:[24,21,20],1Z:[B,0,0],1Y:[1R,1P,1O],1N:[3s,0,Y],2f:[4,0,4],1Q:[4,2z,0],2E:[0,t,0],22:[26,0,28],29:[1u,1z,1n],2p:[2r,2w,1z],2x:[1h,4,4],2A:[1i,2G,1i],2L:[Y,Y,Y],2M:[4,2O,2W],33:[4,4,1h],34:[0,4,0],35:[4,0,4],36:[t,0,0],39:[0,0,t],3e:[t,t,0],3j:[4,1q,0],3m:[4,W,3t],1H:[t,0,t],1I:[t,0,t],1J:[4,0,0],1K:[W,W,W],1L:[4,4,4],1M:[4,4,0],9:[4,4,4]};6 m=5(a){U(a&&a.1j("#")==-1&&a.1j("(")==-1){7"1S("+l[a].1T()+")"}1U{7 a}};$.1V($.1W.1X,{w:L,x:L,u:L,v:L});$.1k.23=5(){7 V.1l(5(){6 a=$(V);a.1d(a.F(\'1m\'))})};$.1k.1d=5(i){7 V.1l(5(){6 c=$(V),3,$8,C,11,1f,1e=k();U(c.F(\'S\')){7 19}6 e={R:(5(a){2k(a){X"T":7"Z";X"Z":7"T";X"15":7"14";X"14":7"15";2q:7"Z"}})(i.R),y:m(i.A)||"#H",A:m(i.y)||c.z("12-A"),1r:c.N(),D:i.D||1t,Q:i.Q||5(){},K:i.K||5(){},P:i.P||5(){}};c.F(\'1m\',e).F(\'S\',1).F(\'2D\',e);3={s:c.s(),p:c.p(),y:m(i.y)||c.z("12-A"),1v:c.z("2H-2I")||"2J",R:i.R||"T",E:m(i.A)||"#H",D:i.D||1t,o:c.1x().o,n:c.1x().n,1y:i.1r||2P,9:"9",18:i.18||19,Q:i.Q||5(){},K:i.K||5(){},P:i.P||5(){}};1e&&(3.9="#2R");$8=c.z("16","2T").8(2U).F(\'S\',1).2V("1w").N("").z({16:"1g",2X:"2Y",n:3.n,o:3.o,2Z:0,30:31,"-32-1A-1B":"G G G #1C","-37-1A-1B":"G G G #1C"});6 f=5(){7{1D:3.9,1v:0,3a:0,w:0,u:0,v:0,x:0,M:3.9,O:3.9,I:3.9,J:3.9,12:"3f",3g:\'3h\',p:0,s:0}};6 g=5(){6 a=(3.p/1c)*25;6 b=f();b.s=3.s;7{"q":b,"1a":{w:0,u:a,v:a,x:0,M:\'#H\',O:\'#H\',o:(3.o+(3.p/2)),n:(3.n-a)},"r":{x:0,w:0,u:0,v:0,M:3.9,O:3.9,o:3.o,n:3.n}}};6 h=5(){6 a=(3.p/1c)*25;6 b=f();b.p=3.p;7{"q":b,"1a":{w:a,u:0,v:0,x:a,I:\'#H\',J:\'#H\',o:3.o-a,n:3.n+(3.s/2)},"r":{w:0,u:0,v:0,x:0,I:3.9,J:3.9,o:3.o,n:3.n}}};11={"T":5(){6 d=g();d.q.w=3.p;d.q.M=3.y;d.r.x=3.p;d.r.O=3.E;7 d},"Z":5(){6 d=g();d.q.x=3.p;d.q.O=3.y;d.r.w=3.p;d.r.M=3.E;7 d},"15":5(){6 d=h();d.q.u=3.s;d.q.I=3.y;d.r.v=3.s;d.r.J=3.E;7 d},"14":5(){6 d=h();d.q.v=3.s;d.q.J=3.y;d.r.u=3.s;d.r.I=3.E;7 d}};C=11[3.R]();1e&&(C.q.3p="3q(A="+3.9+")");1f=5(){6 a=3.1y;7 a&&a.1E?a.N():a};$8.17(5(){3.Q($8,c);$8.N(\'\').z(C.q);$8.13()});$8.1G(C.1a,3.D);$8.17(5(){3.P($8,c);$8.13()});$8.1G(C.r,3.D);$8.17(5(){U(!3.18){c.z({1D:3.E})}c.z({16:"1g"});6 a=1f();U(a){c.N(a)}$8.3u();3.K($8,c);c.3v(\'S\');$8.13()})})}})(3w);', 62, 220, "|||flipObj|255|function|var|return|clone|transparent||||||||||||||left|top|height|start|second|width|128|borderLeftWidth|borderRightWidth|borderTopWidth|borderBottomWidth|bgColor|css|color|139|dirOption|speed|toColor|data|0px|999|borderLeftColor|borderRightColor|onEnd|int_prop|borderTopColor|html|borderBottomColor|onAnimation|onBefore|direction|flipLock|tb|if|this|192|case|211|bt||dirOptions|background|dequeue|rl|lr|visibility|queue|dontChangeColor|false|first|169|100|flip|ie6|newContent|visible|224|144|indexOf|fn|each|flipRevertedSettings|140|107|42|165|content|245|500|240|fontSize|body|offset|target|230|box|shadow|000|backgroundColor|jquery|style|animate|purple|violet|red|silver|white|yellow|darkviolet|122|150|gold|233|rgb|toString|else|extend|fx|step|darksalmon|darkred|204|50|indigo|revertFlip|153||75|darkorchid|130|khaki|darkorange|47|85|darkolivegreen|darkmagenta|fuchsia|183|189|darkkhaki|darkgreen|switch|darkgrey|darkcyan|darkblue|cyan|lightblue|default|173|brown|blue|black|220|216|lightcyan|beige|215|lightgreen|azure|aqua|flipSettings|green|undefined|238|font|size|12px|maxHeight|lightgrey|lightpink|document|182|null|typeof|123456|cc_on|hidden|true|appendTo|193|position|absolute|margin|zIndex|9999|webkit|lightyellow|lime|magenta|maroon|moz|message|navy|lineHeight|error|plugin|js|olive|none|borderStyle|solid|name|orange|throw|unit|pink|now|parseInt|filter|chroma|prop|148|203|remove|removeData|jQuery|elem".split("|"), 0, {})), function (t) {
    function e(e, i) {
        var n = (t(window).width() - e) / 2 + t(window).scrollLeft(),
            s = (t(window).height() - i) / 2 + t(window).scrollTop();
        return n = 0 > n ? 0 : n,
        s = 0 > s ? 0 : s,
        {
                left: n,
                top: s
            }
    }
    function n(i) {
        l || (l = t("<div></div>").css({
            width: 50,
            height: 50,
            position: "absolute",
            background: "transparent",
            opacity: .8,
            color: "#FFF",
            padding: "5px",
            "font-size": "10px"
        })),
        l.css(e(50, 50)).html('<img src="' + i.imgDir + 'blank.gif" />').click(function () {
            s()
        }).appendTo("body").show(),
        c = setTimeout(function () {
            r(i)
        }, 400)
    }
    function s() {
        h = !0,
        o()
    }
    function o() {
        l.hide().remove(),
        c && (clearTimeout(c), c = null)
    }
    function r(i) {
        if (l && !l.is(":visible")) return void(c = null);
        var n = t("img", l);
        !n.attr("src") || /blank\.gif/.test(n.attr("src")) ? strImgSrc = i.imgDir + "zoom-spin-1.png" : (tab = n.attr("src").split(/[- .]+/), iImg = parseInt(tab[2]), iImg = 12 > iImg ? iImg + 1 : 1, strImgSrc = tab[0] + "-" + tab[1] + "-" + iImg + "." + tab[3]);
        var s = new Image;
        s.src = strImgSrc;
        var o = function () {
            l && l.css(e(50, 50)),
            n.attr("src", strImgSrc),
            c = setTimeout(r, 100)
        };
        s.complete ? o() : s.onload = o
    }
    function a(t) {
        if (!t) return !1;
        var e = t.split("/");
        return e.length < 1 ? t : e[e.length - 1]
    }
    t.fn.fancyzoom = function (r) {
        function c(i, n) {
            n.showoverlay && (d.appendTo("body").click(function () {
                u(n)
            }), t.browser.msie && t.browser.version < 7 && d.css({
                position: "absolute",
                height: t(document).height(),
                width: t(document).width()
            }));
            var s = n.oImgZoomBox;
            pos = i.offset(),
            n = t.extend(n, {
                imgSrc: i,
                dimOri: {
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    left: pos.left,
                    top: pos.top,
                    opacity: 1
                }
            }),
            i.is("img") || (n.dimOri = t.extend(n.dimOri, {
                width: 0,
                height: 0
            })),
            s.css({
                "text-align": "center",
                border: "0px solid red"
            }).appendTo("body");
            var o = s.outerWidth(),
                r = s.outerHeight();
            dimBoxTarget = t.extend({}, {
                    width: o,
                    height: r,
                    opacity: 1
                }, e(o, r + 30)),
            n.oImgClose.css({
                    left: dimBoxTarget.left + dimBoxTarget.width - 15,
                    top: dimBoxTarget.top - 15
                });
            var a = function () {
                    t.fn.shadow && n.shadow && !t.browser.msie && t("img:first", s).shadow(n.shadowOpts),
                    n.Speed > 0 && !t.browser.msie ? (n.oImgClose.fadeIn("slow"), t("div", s).fadeIn("slow")) : (n.oImgClose.show(), t("div", s).show())
                };
            t("div", s).hide(),
            n.imgSrc.is("img") && n.imgSrc.css({
                    opacity: 0
                });
            t("img:first", s).css({
                    width: "100%",
                    height: "auto"
                });
            n.Speed > 0 ? s.css(n.dimOri).animate(dimBoxTarget, n.Speed, a) : (s.css(dimBoxTarget), a())
        }
        function u(e) {
            var i = e.oImgZoomBox;
            e.oImgClose.remove(),
            t("div", i).remove();
            var n = function () {
                i.empty().remove(),
                e.imgSrc.css("opacity", 1)
            };
            if (e.Speed > 0) {
                var s = i.offset(),
                    o = .15,
                    r = {
                        width: i.width() * (1 + o),
                        height: i.height() * (1 + o),
                        left: s.left - i.width() * (o / 2),
                        top: s.top - i.height() * (o / 2)
                    };
                i.animate(r, .2 * e.Speed, function () {
                        i.animate(e.dimOri, e.Speed, function () {
                            n()
                        }),
                        e.showoverlay && d.animate({
                            opacity: 0
                        }, e.Speed, function () {
                            t(this).remove()
                        })
                    })
            } else n(),
            e.showoverlay && d.remove()
        }
        var d = t("<div>").css({
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: 100,
            left: 0,
            top: 0,
            cursor: "wait"
        });
        return this.each(function () {
            var e = t(this),
                p = e.is("img") ? e : 0 == t("img:first", e).length ? e : t("img:first", e),
                f = null;
            e.attr("href") && (f = e.attr("href"));
            var g = t('<img class="jqfancyzoomclosebox">').css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    cursor: "pointer"
                }),
                m = t.extend({}, t.fn.fancyzoom.defaultsOptions, r || {}, {
                    dimOri: {},
                    oImgZoomBoxProp: {
                        position: "absolute",
                        left: 0,
                        top: 0
                    },
                    oImgClose: g
                });
            if (p.is("img")) {
                    var v = t("<img src='" + m.imgDir + "zoom.png'>").css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    });
                    p.hover(function () {
                        if (0 != p.css("opacity")) {
                            v.appendTo(p.parent()).hide();
                            var e = p.position(),
                                i = parseInt(p.css("margin-left").replace(/px/, "")),
                                n = parseInt(p.css("margin-top").replace(/px/, ""));
                            n = n ? n : 0,
                            i = i ? i : 0,
                            v.css({
                                    left: e.left + i - 12,
                                    top: e.top + n - 12
                                }).show(),
                            t.fn.ifixpng && v.ifixpng(m.imgDir + "blank.gif")
                        }
                    }, function () {
                        v.remove()
                    })
                }
            return e.is("img") && (f = e.css("cursor", "pointer").attr("src"), m.imgResizeScript && f.match(new RegExp("^" + m.imgResizeScript, "g")) && (f = f.replace(/.*img=([^&]*).*/gi, "$1"))),
            d.css({
                    opacity: m.overlay,
                    background: m.overlayColor
                }),
            /\.jpg|\.jpeg|\.png|\.gif/i.test(f) ? void e.click(function () {
                    var e = t("div.jqfancyzoombox");
                    if (e.length > 0) {
                        if (t("img:first", e).attr("src") == f) return !1;
                        l && l.is(":visible") && s()
                    }
                    var v = t.extend({}, m, r),
                        b = t("img.jqfancyzoomclosebox");
                    if (b.length > 0) {
                            var y = t("img:first", e);
                            if (f == y.attr("src")) return pos = p.offset(),
                            v = t.extend(v, {
                                dimOri: {
                                    width: p.outerWidth(),
                                    height: p.outerHeight(),
                                    left: pos.left,
                                    top: pos.top,
                                    opacity: 0
                                }
                            }),
                            u(v),
                            !1;
                            b.trigger("click")
                        }
                    v.showoverlay && d && d.empty().remove().css({
                            opacity: v.overlay
                        }),
                    g.attr("src", v.imgDir + "closebox.png").appendTo("body").hide(),
                    t.fn.ifixpng && (t.ifixpng(v.imgDir + "blank.gif"), g.ifixpng(v.imgDir + "blank.gif")),
                    g.unbind("click").click(function () {
                            u(v)
                        });
                    var _ = t('<div class="jqfancyzoombox"></div>').css(v.oImgZoomBoxProp);
                    v = t.extend(v, {
                            oImgZoomBox: _
                        });
                    var w = p.attr("alt");
                    if (w) {
                            var x = t('<div><center><table height=0 border="0" cellspacing=0 cellpadding=0><tr><td></td><td class="fancyTitle">' + w + "</td><td></td></table></center></div>").css({
                                marginTop: 10,
                                marginRight: 15
                            }),
                                C = x.find("td:first").css({
                                    background: "url(" + v.imgDir + "zoom-caption-l.png)",
                                    width: "13px",
                                    height: "26px"
                                }),
                                k = x.find("td:last").css({
                                    background: "url(" + v.imgDir + "zoom-caption-r.png)",
                                    width: "13px",
                                    height: "26px"
                                }),
                                T = t(".fancyTitle", x).css({
                                    background: "url(" + v.imgDir + "zoom-caption-fill.png)",
                                    padding: "0px 20px",
                                    color: "#FFF",
                                    "font-size": "14px"
                                });
                            t.fn.ifixpng && (C.ifixpng(v.imgDir + "blank.gif"), k.ifixpng(v.imgDir + "blank.gif"), T.ifixpng(v.imgDir + "blank.gif")),
                            x.appendTo(_)
                        }
                    var D = t("<img />").attr("src", f).click(function () {
                            u(v)
                        }).prependTo(_),
                        S = m.imagezindex;
                    d.css("zIndex", S - 1),
                    _.css("zIndex", S),
                    g.css("zIndex", S + 10);
                    var E = new Image;
                    E.src = f;
                    var I = function () {
                            h ? h = !1 : a(E.src) == a(t("img:first", _).attr("src")) && (P(v.autoresize), c(p, v), o())
                        },
                        P = function (e) {
                            if (e) {
                                var n = t("<div></div>").css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    opacity: 0,
                                    border: "0px solid red"
                                }),
                                    s = !1;
                                if (D.appendTo(n), n.appendTo("body"), imWidth = D.width(), imHeight = D.height(), maxWidth = .9 * t(window).width(), maxHeight = t(window).height() - 100, imHeight > maxHeight ? (s = !0, D.height(maxHeight), imWidth = imWidth * maxHeight / imHeight, D.width(imWidth), imWidth > maxWidth && (D.width(maxWidth), D.height(imHeight * maxWidth / imWidth))) : imWidth > maxWidth && (s = !0, D.width(maxWidth), D.height(imHeight * maxWidth / imWidth)), s && v.imgResizeScript) {
                                        var o = D.width(),
                                            r = D.height(),
                                            a = o,
                                            l = new Array(1440, 1280, 1024, 800, 640, 480, 360);
                                        for (i = 0; i < l.length; i++) if (o > l[i]) {
                                                a = l[i];
                                                break
                                            }
                                        D.width(a),
                                        D.height(parseInt(r * a / o));
                                        var h = "img=" + encodeURI(D.attr("src"));
                                        h += "&width=" + D.width(),
                                        h += "&height=" + D.height(),
                                        D.attr("src", v.imgResizeScript + "?" + h)
                                    }
                                n.remove()
                            }
                            D.prependTo(_)
                        };
                    return E.complete ? (P(v.autoresize), c(p, v)) : (n(v), E.onload = function () {
                            I()
                        }),
                    !1
                }) : !0
        })
    },
    t.fn.fancyzoom.defaultsOptions = {
        overlayColor: "#000",
        overlay: .6,
        imagezindex: 100,
        showoverlay: !0,
        Speed: 400,
        shadow: !0,
        shadowOpts: {
            color: "#000",
            offset: 4,
            opacity: .2
        },
        imgDir: "ressources/",
        imgResizeScript: null,
        autoresize: !0
    };
    var l = null,
        h = !1,
        c = null
}(jQuery), !jQuery.browser) {
    var uaMatch = function (t) {
        t = t.toLowerCase();
        var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
        return {
            browser: e[1] || "",
            version: e[2] || "0"
        }
    };
    matched = uaMatch(navigator.userAgent),
    browser = {},
    matched.browser && (browser[matched.browser] = !0, browser.version = matched.version),
    browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0),
    jQuery.browser = browser
}!
function (t) {
    var e, i, n, s, o, r, a, l, h, c, u, d, p, f = 0,
        g = {},
        m = [],
        v = 0,
        b = {},
        y = [],
        _ = null,
        w = new Image,
        x = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        C = /[^\.]\.(swf)\s*$/i,
        k = 1,
        T = 0,
        D = "",
        S = !1,
        E = t.extend(t("<div/>")[0], {
            prop: 0
        }),
        I = t.browser.msie && t.browser.version < 7 && !window.XMLHttpRequest,
        P = function () {
            i.hide(),
            w.onerror = w.onload = null,
            _ && _.abort(),
            e.empty()
        },
        N = function () {
            return !1 === g.onError(m, f, g) ? (i.hide(), void(S = !1)) : (g.titleShow = !1, g.width = "auto", g.height = "auto", e.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), void H())
        },
        A = function () {
            var n, s, o, a, l, h, c = m[f];
            if (P(), g = t.extend({}, t.fn.fancybox.defaults, "undefined" == typeof t(c).data("fancybox") ? g : t(c).data("fancybox")), h = g.onStart(m, f, g), h === !1) return void(S = !1);
            if ("object" == typeof h && (g = t.extend(g, h)), o = g.title || (c.nodeName ? t(c).attr("title") : c.title) || "", c.nodeName && !g.orig && (g.orig = t(c).children("img:first").length ? t(c).children("img:first") : t(c)), "" === o && g.orig && g.titleFromAlt && (o = g.orig.attr("alt")), n = g.href || (c.nodeName ? t(c).attr("href") : c.href) || null, (/^(?:javascript)/i.test(n) || "#" == n) && (n = null), g.type ? (s = g.type, n || (n = g.content)) : g.content ? s = "html" : n && (s = n.match(x) ? "image" : n.match(C) ? "swf" : t(c).hasClass("iframe") ? "iframe" : 0 === n.indexOf("#") ? "inline" : "ajax"), !s) return void N();
            switch ("inline" == s && (c = n.substr(n.indexOf("#")), s = t(c).length > 0 ? "inline" : "ajax"), g.type = s, g.href = n, g.title = o, g.autoDimensions && ("html" == g.type || "inline" == g.type || "ajax" == g.type ? (g.width = "auto", g.height = "auto") : g.autoDimensions = !1), g.modal && (g.overlayShow = !0, g.hideOnOverlayClick = !1, g.hideOnContentClick = !1, g.enableEscapeButton = !1, g.showCloseButton = !1), g.padding = parseInt(g.padding, 10), g.margin = parseInt(g.margin, 10), e.css("padding", g.padding + g.margin), t(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
                t(this).replaceWith(r.children())
            }), s) {
            case "html":
                e.html(g.content),
                H();
                break;
            case "inline":
                if (t(c).parent().is("#fancybox-content") === !0) return void(S = !1);
                t('<div class="fancybox-inline-tmp" />').hide().insertBefore(t(c)).bind("fancybox-cleanup", function () {
                    t(this).replaceWith(r.children())
                }).bind("fancybox-cancel", function () {
                    t(this).replaceWith(e.children())
                }),
                t(c).appendTo(e),
                H();
                break;
            case "image":
                S = !1,
                t.fancybox.showActivity(),
                w = new Image,
                w.onerror = function () {
                    N()
                },
                w.onload = function () {
                    S = !0,
                    w.onerror = w.onload = null,
                    M()
                },
                w.src = n;
                break;
            case "swf":
                g.scrolling = "no",
                a = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + g.width + '" height="' + g.height + '"><param name="movie" value="' + n + '"></param>',
                l = "",
                t.each(g.swf, function (t, e) {
                    a += '<param name="' + t + '" value="' + e + '"></param>',
                    l += " " + t + '="' + e + '"'
                }),
                a += '<embed src="' + n + '" type="application/x-shockwave-flash" width="' + g.width + '" height="' + g.height + '"' + l + "></embed></object>",
                e.html(a),
                H();
                break;
            case "ajax":
                S = !1,
                t.fancybox.showActivity(),
                g.ajax.win = g.ajax.success,
                _ = t.ajax(t.extend({}, g.ajax, {
                    url: n,
                    data: g.ajax.data || {},
                    error: function (t) {
                        t.status > 0 && N()
                    },
                    success: function (t, s, o) {
                        var r = "object" == typeof o ? o : _;
                        if (200 == r.status) {
                            if ("function" == typeof g.ajax.win) {
                                if (h = g.ajax.win(n, t, s, o), h === !1) return void i.hide();
                                ("string" == typeof h || "object" == typeof h) && (t = h)
                            }
                            e.html(t),
                            H()
                        }
                    }
                }));
                break;
            case "iframe":
                $()
            }
        },
        H = function () {
            var i = g.width,
                n = g.height;
            i = i.toString().indexOf("%") > -1 ? parseInt((t(window).width() - 2 * g.margin) * parseFloat(i) / 100, 10) + "px" : "auto" == i ? "auto" : i + "px",
            n = n.toString().indexOf("%") > -1 ? parseInt((t(window).height() - 2 * g.margin) * parseFloat(n) / 100, 10) + "px" : "auto" == n ? "auto" : n + "px",
            e.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == g.scrolling ? "auto" : "yes" == g.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'),
            g.width = e.width(),
            g.height = e.height(),
            $()
        },
        M = function () {
            g.width = w.width,
            g.height = w.height,
            t("<img />").attr({
                id: "fancybox-img",
                src: w.src,
                alt: g.title
            }).appendTo(e),
            $()
        },
        $ = function () {
            var o, u;
            return i.hide(),
            s.is(":visible") && !1 === b.onCleanup(y, v, b) ? (t.event.trigger("fancybox-cancel"), void(S = !1)) : (S = !0, t(r.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), s.is(":visible") && "outside" !== b.titlePosition && s.css("height", s.height()), y = m, v = f, b = g, b.overlayShow ? (n.css({
                "background-color": b.overlayColor,
                opacity: b.overlayOpacity,
                cursor: b.hideOnOverlayClick ? "pointer" : "auto",
                height: t(document).height()
            }), n.is(":visible") || (I && t("select:not(#fancybox-tmp select)").filter(function () {
                return "hidden" !== this.style.visibility
            }).css({
                visibility: "hidden"
            }).one("fancybox-cleanup", function () {
                this.style.visibility = "inherit"
            }), n.show())) : n.hide(), p = R(), j(), s.is(":visible") ? (t(a.add(h).add(c)).hide(), o = s.position(), d = {
                top: o.top,
                left: o.left,
                width: s.width(),
                height: s.height()
            }, u = d.width == p.width && d.height == p.height, void r.fadeTo(b.changeFade, .3, function () {
                var i = function () {
                    r.html(e.contents()).fadeTo(b.changeFade, 1, W)
                };
                t.event.trigger("fancybox-change"),
                r.empty().removeAttr("filter").css({
                    "border-width": b.padding,
                    width: p.width - 2 * b.padding,
                    height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding
                }),
                u ? i() : (E.prop = 0, t(E).animate({
                    prop: 1
                }, {
                    duration: b.changeSpeed,
                    easing: b.easingChange,
                    step: F,
                    complete: i
                }))
            })) : (s.removeAttr("style"), r.css("border-width", b.padding), "elastic" == b.transitionIn ? (d = Y(), r.html(e.contents()), s.show(), b.opacity && (p.opacity = 0), E.prop = 0, void t(E).animate({
                prop: 1
            }, {
                duration: b.speedIn,
                easing: b.easingIn,
                step: F,
                complete: W
            })) : ("inside" == b.titlePosition && T > 0 && l.show(), r.css({
                width: p.width - 2 * b.padding,
                height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding
            }).html(e.contents()), void s.css(p).fadeIn("none" == b.transitionIn ? 0 : b.speedIn, W))))
        },
        O = function (t) {
            return t && t.length ? "float" == b.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + t + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + b.titlePosition + '">' + t + "</div>" : !1
        },
        j = function () {
            if (D = b.title || "", T = 0, l.empty().removeAttr("style").removeClass(), b.titleShow === !1) return void l.hide();
            if (D = t.isFunction(b.titleFormat) ? b.titleFormat(D, y, v, b) : O(D), !D || "" === D) return void l.hide();
            switch (l.addClass("fancybox-title-" + b.titlePosition).html(D).appendTo("body").show(), b.titlePosition) {
            case "inside":
                l.css({
                    width: p.width - 2 * b.padding,
                    marginLeft: b.padding,
                    marginRight: b.padding
                }),
                T = l.outerHeight(!0),
                l.appendTo(o),
                p.height += T;
                break;
            case "over":
                l.css({
                    marginLeft: b.padding,
                    width: p.width - 2 * b.padding,
                    bottom: b.padding
                }).appendTo(o);
                break;
            case "float":
                l.css("left", -1 * parseInt((l.width() - p.width - 40) / 2, 10)).appendTo(s);
                break;
            default:
                l.css({
                    width: p.width - 2 * b.padding,
                    paddingLeft: b.padding,
                    paddingRight: b.padding
                }).appendTo(s)
            }
            l.hide()
        },
        z = function () {
            return (b.enableEscapeButton || b.enableKeyboardNav) && t(document).bind("keydown.fb", function (e) {
                27 == e.keyCode && b.enableEscapeButton ? (e.preventDefault(), t.fancybox.close()) : 37 != e.keyCode && 39 != e.keyCode || !b.enableKeyboardNav || "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || "SELECT" === e.target.tagName || (e.preventDefault(), t.fancybox[37 == e.keyCode ? "prev" : "next"]())
            }),
            b.showNavArrows ? ((b.cyclic && y.length > 1 || 0 !== v) && h.show(), void((b.cyclic && y.length > 1 || v != y.length - 1) && c.show())) : (h.hide(), void c.hide())
        },
        W = function () {
            t.support.opacity || (r.get(0).style.removeAttribute("filter"), s.get(0).style.removeAttribute("filter")),
            g.autoDimensions && r.css("height", "auto"),
            s.css("height", "auto"),
            D && D.length && l.show(),
            b.showCloseButton && a.show(),
            z(),
            b.hideOnContentClick && r.bind("click", t.fancybox.close),
            b.hideOnOverlayClick && n.bind("click", t.fancybox.close),
            t(window).bind("resize.fb", t.fancybox.resize),
            b.centerOnScroll && t(window).bind("scroll.fb", t.fancybox.center),
            "iframe" == b.type && t('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (t.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + g.scrolling + '" src="' + b.href + '"></iframe>').appendTo(r),
            s.show(),
            S = !1,
            t.fancybox.center(),
            b.onComplete(y, v, b),
            L()
        },
        L = function () {
            var t, e;
            y.length - 1 > v && (t = y[v + 1].href, "undefined" != typeof t && t.match(x) && (e = new Image, e.src = t)),
            v > 0 && (t = y[v - 1].href, "undefined" != typeof t && t.match(x) && (e = new Image, e.src = t))
        },
        F = function (t) {
            var e = {
                width: parseInt(d.width + (p.width - d.width) * t, 10),
                height: parseInt(d.height + (p.height - d.height) * t, 10),
                top: parseInt(d.top + (p.top - d.top) * t, 10),
                left: parseInt(d.left + (p.left - d.left) * t, 10)
            };
            "undefined" != typeof p.opacity && (e.opacity = .5 > t ? .5 : t),
            s.css(e),
            r.css({
                width: e.width - 2 * b.padding,
                height: e.height - T * t - 2 * b.padding
            })
        },
        B = function () {
            return [t(window).width() - 2 * b.margin, t(window).height() - 2 * b.margin, t(document).scrollLeft() + b.margin, t(document).scrollTop() + b.margin]
        },
        R = function () {
            var t, e = B(),
                i = {},
                n = b.autoScale,
                s = 2 * b.padding;
            return i.width = b.width.toString().indexOf("%") > -1 ? parseInt(e[0] * parseFloat(b.width) / 100, 10) : b.width + s,
            i.height = b.height.toString().indexOf("%") > -1 ? parseInt(e[1] * parseFloat(b.height) / 100, 10) : b.height + s,
            n && (i.width > e[0] || i.height > e[1]) && ("image" == g.type || "swf" == g.type ? (t = b.width / b.height, i.width > e[0] && (i.width = e[0], i.height = parseInt((i.width - s) / t + s, 10)), i.height > e[1] && (i.height = e[1], i.width = parseInt((i.height - s) * t + s, 10))) : (i.width = Math.min(i.width, e[0]), i.height = Math.min(i.height, e[1]))),
            i.top = parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - i.height - 40)), 10),
            i.left = parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - i.width - 40)), 10),
            i
        },
        q = function (t) {
            var e = t.offset();
            return e.top += parseInt(t.css("paddingTop"), 10) || 0,
            e.left += parseInt(t.css("paddingLeft"), 10) || 0,
            e.top += parseInt(t.css("border-top-width"), 10) || 0,
            e.left += parseInt(t.css("border-left-width"), 10) || 0,
            e.width = t.width(),
            e.height = t.height(),
            e
        },
        Y = function () {
            var e, i, n = g.orig ? t(g.orig) : !1,
                s = {};
            return n && n.length ? (e = q(n), s = {
                    width: e.width + 2 * b.padding,
                    height: e.height + 2 * b.padding,
                    top: e.top - b.padding - 20,
                    left: e.left - b.padding - 20
                }) : (i = B(), s = {
                    width: 2 * b.padding,
                    height: 2 * b.padding,
                    top: parseInt(i[3] + .5 * i[1], 10),
                    left: parseInt(i[2] + .5 * i[0], 10)
                }),
            s
        },
        Q = function () {
            return i.is(":visible") ? (t("div", i).css("top", -40 * k + "px"), void(k = (k + 1) % 12)) : void clearInterval(u)
        };
    t.fn.fancybox = function (e) {
            return t(this).length ? (t(this).data("fancybox", t.extend({}, e, t.metadata ? t(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (e) {
                if (e.preventDefault(), !S) {
                    S = !0,
                    t(this).blur(),
                    m = [],
                    f = 0;
                    var i = t(this).attr("rel") || "";
                    i && "" != i && "nofollow" !== i ? (m = t("a[rel=" + i + "], area[rel=" + i + "]"), f = m.index(this)) : m.push(this),
                    A()
                }
            }), this) : this
        },
    t.fancybox = function (e) {
            var i;
            if (!S) {
                if (S = !0, i = "undefined" != typeof arguments[1] ? arguments[1] : {}, m = [], f = parseInt(i.index, 10) || 0, t.isArray(e)) {
                    for (var n = 0, s = e.length; s > n; n++)"object" == typeof e[n] ? t(e[n]).data("fancybox", t.extend({}, i, e[n])) : e[n] = t({}).data("fancybox", t.extend({
                        content: e[n]
                    }, i));
                    m = jQuery.merge(m, e)
                } else "object" == typeof e ? t(e).data("fancybox", t.extend({}, i, e)) : e = t({}).data("fancybox", t.extend({
                    content: e
                }, i)),
                m.push(e);
                (f > m.length || 0 > f) && (f = 0),
                A()
            }
        },
    t.fancybox.showActivity = function () {
            clearInterval(u),
            i.show(),
            u = setInterval(Q, 66)
        },
    t.fancybox.hideActivity = function () {
            i.hide()
        },
    t.fancybox.next = function () {
            return t.fancybox.pos(v + 1)
        },
    t.fancybox.prev = function () {
            return t.fancybox.pos(v - 1)
        },
    t.fancybox.pos = function (t) {
            S || (t = parseInt(t), m = y, t > -1 && t < y.length ? (f = t, A()) : b.cyclic && y.length > 1 && (f = t >= y.length ? 0 : y.length - 1, A()))
        },
    t.fancybox.cancel = function () {
            S || (S = !0, t.event.trigger("fancybox-cancel"), P(), g.onCancel(m, f, g), S = !1)
        },
    t.fancybox.close = function () {
            function e() {
                n.fadeOut("fast"),
                l.empty().hide(),
                s.hide(),
                t.event.trigger("fancybox-cleanup"),
                r.empty(),
                b.onClosed(y, v, b),
                y = g = [],
                v = f = 0,
                b = g = {},
                S = !1
            }
            if (!S && !s.is(":hidden")) {
                if (S = !0, b && !1 === b.onCleanup(y, v, b)) return void(S = !1);
                if (P(), t(a.add(h).add(c)).hide(), t(r.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), r.find("iframe").attr("src", I && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), "inside" !== b.titlePosition && l.empty(), s.stop(), "elastic" == b.transitionOut) {
                    d = Y();
                    var i = s.position();
                    p = {
                        top: i.top,
                        left: i.left,
                        width: s.width(),
                        height: s.height()
                    },
                    b.opacity && (p.opacity = 1),
                    l.empty().hide(),
                    E.prop = 1,
                    t(E).animate({
                        prop: 0
                    }, {
                        duration: b.speedOut,
                        easing: b.easingOut,
                        step: F,
                        complete: e
                    })
                } else s.fadeOut("none" == b.transitionOut ? 0 : b.speedOut, e)
            }
        },
    t.fancybox.resize = function () {
            n.is(":visible") && n.css("height", t(document).height()),
            t.fancybox.center(!0)
        },
    t.fancybox.center = function () {
            var t, e;
            S || (e = arguments[0] === !0 ? 1 : 0, t = B(), (e || !(s.width() > t[0] || s.height() > t[1])) && s.stop().animate({
                top: parseInt(Math.max(t[3] - 20, t[3] + .5 * (t[1] - r.height() - 40) - b.padding)),
                left: parseInt(Math.max(t[2] - 20, t[2] + .5 * (t[0] - r.width() - 40) - b.padding))
            }, "number" == typeof arguments[0] ? arguments[0] : 200))
        },
    t.fancybox.init = function () {
            t("#fancybox-wrap").length || (t("body").append(e = t('<div id="fancybox-tmp"></div>'), i = t('<div id="fancybox-loading"><div></div></div>'), n = t('<div id="fancybox-overlay"></div>'), s = t('<div id="fancybox-wrap"></div>')), o = t('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(s), o.append(r = t('<div id="fancybox-content"></div>'), a = t('<a id="fancybox-close"></a>'), l = t('<div id="fancybox-title"></div>'), h = t('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), c = t('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), a.click(t.fancybox.close), i.click(t.fancybox.cancel), h.click(function (e) {
                e.preventDefault(),
                t.fancybox.prev()
            }), c.click(function (e) {
                e.preventDefault(),
                t.fancybox.next()
            }), t.fn.mousewheel && s.bind("mousewheel.fb", function (e, i) {
                S ? e.preventDefault() : (0 == t(e.target).get(0).clientHeight || t(e.target).get(0).scrollHeight === t(e.target).get(0).clientHeight) && (e.preventDefault(), t.fancybox[i > 0 ? "prev" : "next"]())
            }), t.support.opacity || s.addClass("fancybox-ie"), I && (i.addClass("fancybox-ie6"), s.addClass("fancybox-ie6"), t('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o)))
        },
    t.fn.fancybox.defaults = {
            padding: 10,
            margin: 40,
            opacity: !1,
            modal: !1,
            cyclic: !1,
            scrolling: "auto",
            width: 560,
            height: 340,
            autoScale: !0,
            autoDimensions: !0,
            centerOnScroll: !1,
            ajax: {},
            swf: {
                wmode: "transparent"
            },
            hideOnOverlayClick: !0,
            hideOnContentClick: !1,
            overlayShow: !0,
            overlayOpacity: .7,
            overlayColor: "#777",
            titleShow: !0,
            titlePosition: "float",
            titleFormat: null,
            titleFromAlt: !1,
            transitionIn: "fade",
            transitionOut: "fade",
            speedIn: 300,
            speedOut: 300,
            changeSpeed: 300,
            changeFade: "fast",
            easingIn: "swing",
            easingOut: "swing",
            showCloseButton: !0,
            showNavArrows: !0,
            enableEscapeButton: !0,
            enableKeyboardNav: !0,
            onStart: function () {},
            onCancel: function () {},
            onComplete: function () {},
            onCleanup: function () {},
            onClosed: function () {},
            onError: function () {}
        },
    t(document).ready(function () {
            t.fancybox.init()
        })
}(jQuery),


function (t) {
    t.fn.addRemoveClassesLike = function (e, i) {
        var n = this;
        if (-1 === i.indexOf("*")) return n.removeClass(i),
        e ? n.addClass(e) : n;
        var s = new RegExp("\\s" + i.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
        return n.each(function (e, i) {
            for (var n = " " + i.className + " "; s.test(n);) n = n.replace(s, " ");
            i.className = t.trim(n)
        }),
        e ? n.addClass(e) : n
    }
}(jQuery);
var CanvasItem = Backbone.Model.extend({
    defaults: {
        editing: !1,
        thirdPartyEditing: !1,
        thirdPartyEditor: "",
        content: "",
        v2: !0
    },
    urlRoot: function () {
        return "/canvases/" + this.get("canvas_id") + "/items"
    },
    initialize: function () {},
    startEditing: function () {
        var t = !1;
        this.get("editing") || this.isNew() || (t = !0),
        this.set("editing", !0),
        this.set("saveOnBlur", !0),
        t && this.save("thirdPartyEditing", !0)
    },
    stopEditing: function () {
        this.get("editing") && !this.isNew() && this.save("thirdPartyEditing", !1),
        this.set("editing", !1),
        this.set("saveOnBlur", !1)
    },
    setContent: function (t) {
        "" != t && this.save("content", t)
    },
    setOrder: function (t) {
        this.save("order", t, {
            silent: !0
        })
    }
}),
    HashtagModel = Backbone.Model.extend({
        defaults: {
            canvasHashtags: {}
        },
        initialize: function () {},
        getTopHashtags: function () {
            var t = this,
                e = _.keys(this.get("canvasHashtags")),
                i = _.filter(e, function (e) {
                    return t.get("canvasHashtags")[e] > 0
                }),
                n = _.sortBy(i, function (e) {
                    return -1 * t.get("canvasHashtags")[e]
                });
            return _.first(n, 10)
        },
        incrementHashCount: function (t) {
            this.get("canvasHashtags")[t] || (this.get("canvasHashtags")[t] = 0),
            this.get("canvasHashtags")[t]++
        },
        decrementHashCount: function (t) {
            if (this.get("canvasHashtags")[t]) {
                var e = this.get("canvasHashtags")[t];
                this.get("canvasHashtags")[t] = Math.max(0, e - 1)
            }
        }
    }),
    CanvasItemList = Backbone.LiveCollection.extend({
        model: CanvasItem,
        initialize: function (t, e) {
            this.canvas_id = e.canvas_id,
            this.area = e.area
        },
        url: function () {
            return "/canvases/" + this.canvas_id + "/items?area=" + this.area
        },
        comparator: function (t) {
            return t.get("order")
        },
        stopEditingAll: function () {
            this.each(function (t) {
                t.stopEditing()
            })
        },
        stopEditingAllExcept: function (t) {
            this.each(function (e) {
                t.get("id") !== e.get("id") && e.stopEditing(),
                e.isNew() && e.get("area") !== t.get("area") && e.stopEditing()
            })
        },
        removeAllEmpty: function () {
            var t = this;
            this.each(function (e) {
                e.isNew() && !e.get("content") && t.remove(e)
            })
        }
    }),
    CanvasView = Backbone.View.extend({
        initialize: function (t) {
            var e = this;
            this.pusher = t.pusher,
            this.privateChannel = t.privateChannel,
            this.canvas_id = t.canvas_id,
            this.user_id = t.user_id,
            this.permissions = t.permissions,
            $("#slideshow").click(function () {
                var t = "width=" + screen.width + ",height=" + screen.height + ",top=0,left=0,fullscreen=yes",
                    i = window.open("/canvases/" + e.canvas_id + "/slideshow", "slideshow-window", t);
                return window.focus && i.focus(),
                !1
            }),
            $("#video").click(function () {
                var t = "width= 500, height= 400 ,top=40,left=40,fullscreen=no",
                    i = window.open("/canvases/" + e.canvas_id + "/videos", "video-window", t);
                return window.focus && i.focus(),
                !1
            }),
            $("#navigation a").each(function () {
                $(this).stop().animate({
                    marginTop: "6px"
                }, 600)
            }),
            $("#navigation > li").hover(function () {
                $("a", $(this)).stop().animate({
                    marginTop: "2px"
                }, 300)
            }, function () {
                $("a", $(this)).stop().animate({
                    marginTop: "6px"
                }, 300)
            }),
            $("#tabs a").stop().animate({
                marginLeft: "-24px"
            }, 1e3),
            $("#tabs > li").hover(function () {
                $("a", $(this)).stop().animate({
                    marginLeft: "-4px"
                }, 200)
            }, function () {
                $("a", $(this)).stop().animate({
                    marginLeft: "-24px"
                }, 200)
            }),
            $("#nav_tabs a#comments").fancybox({
                titlePosition: "inside",
                transitionIn: "none",
                transitionOut: "none",
                width: "560",
                scrolling: "no"
            }),
            this.privateChannel.bind("product_updated", function (t) {
                var e = t.product.name;
                $("#select_product").find("a").html(e)
            }),
            this.privateChannel.bind("canvas_updated", function (t) {
                var e = t.canvas.name;
                $("#select_canvas").find("a").html(e)
            }),
            $("a.hashtag_button").live("click", function () {
                $(this).toggleClass("down");
                var t = $(this).closest("div").attr("class");
                $("span." + t).toggle()
            }),
            $(".tag-label").live("click", function () {
                $(this).prev().click()
            });
            var i = pusher.subscribe("presence-canvas_" + this.canvas_id);
            i.bind("pusher:subscription_succeeded", function () {
                i.members.each(function (t) {
                    e.online(t)
                })
            }),
            i.bind("pusher:member_added", function (t) {
                e.online(t)
            }),
            i.bind("pusher:member_removed", function (t) {
                e.offline(t)
            })
        },
        online: function (t) {
            $("#collaborator_" + t.info.id + " span.status").attr("class", "status online"),
            $("#collaborator_" + t.info.id + " img").attr("title", t.info.name + " is currently online")
        },
        offline: function (t) {
            $("#collaborator_" + t.info.id + " span.status").attr("class", "status offline"),
            $("#collaborator_" + t.info.id + " img").attr("title", t.info.name + " is currently offline")
        },
        logout: function () {
            this.pusher.unsubscribe("presence-canvas_" + this.canvas_id)
        },
        bindKeyboardToTextfield: function (t) {
            $(t + " form.edit input").keydown(function (e) {
                27 == e.which && ($(this).closest("form.edit").hide(), $(t + " h1").show(), e.preventDefault()),
                (9 == e.which || 13 == e.which) && ($(this).closest("form.edit").submit(), $(t + " h1 a").html($(this).attr("value")), $(this).closest("form.edit").hide(), $(t + " h1").show(), e.preventDefault())
            })
        }
    }),
    CanvasAreaView = Backbone.View.extend({
        tagName: "table",
        className: "cell-container",
        initialize: function (t) {
            var e = this;
            this.template = _.template("<tbody><tr><td class='canvas-cell canvas-cell-main'><h3 class='main'><div class='area-title'><%=data.title%></div><div class='help'><a class='helpIcon' href='/canvases/<%=data.canvas_id%>/help?area=<%=data.area%>'><img height='24' src='/images/help.png' alt='Help'></a></div></h3><div class='add-new-item' style='border:dashed 1px #000000;margin-top:6px;display:none;'><i>Click to add new</i></div><div class='short_help' style='display:block;'><span class='content'><%=data.short_help%></span></div><div class='order' style='display:block;'><span class='content'><%=data.order%></span></div></td></tr><% if (data.subsection_title) { %><tr><td class='canvas-cell canvas-cell-subsection' style='height:33%;'><h3 class='subsection'><div class='area-title'><%=data.subsection_title%></div></h3><div class='add-new-subsection-item' style='border:dashed 1px #000000;margin-top:6px;display:none;'><i>Click to add new</i></div><div class='short_help'><span class='content'><%=data.subsection_short_help%></span></div></td></tr><% } %><tr><td class='bottom'><span class='bottom without-experiments-comments' style='display:none;'><span class='comments_section'><a href='/canvases/<%=data.canvas_id%>/comments?area=<%=data.area%>' class='add black addComment'><span class='add_comment_text'>Add Comment</span><span class='comments icon'><img alt='Comments-icon' src='/images/comments-icon.png'><span class='comment-count'></span></span></a></span><!-- | <span><a href='/canvases/<%=data.canvas_id%>/experiments/new?area=<%=data.area%>' class='add black addExperiment'>Add Experiment</a></span>--></span></td></tr></tbody>"),
            this.data = t.data,
            this.subsectionCollection = t.subsectionCollection,
            this.collection && (this.mainView = new CanvasSectionView({
                collection: this.collection,
                canvas_id: this.data.canvas_id,
                area: this.data.area
            }), this.collection.on("reset", this.render, this), this.collection.on("add", this.renderMainHelp, this), this.collection.on("remove", this.renderMainHelp, this), this.collection.on("is_editing", function (t) {
                e.trigger("is_editing", t)
            }), this.collection.on("change:editing", function () {
                e.renderMainHelp()
            }), this.mainView.on("hashtagEvent", function () {
                e.trigger("hashtagEvent")
            })),
            t.subsectionCollection && (this.subsectionView = new CanvasSectionView({
                collection: t.subsectionCollection,
                canvas_id: this.data.canvas_id,
                area: this.data.subsection
            }), this.subsectionCollection.on("add", this.renderSubsectionHelp, this), this.subsectionCollection.on("remove", this.renderSubsectionHelp, this), this.subsectionCollection.on("is_editing", function (t) {
                e.trigger("is_editing", t)
            }), this.subsectionCollection.on("change:editing", function () {
                e.renderSubsectionHelp()
            }), this.subsectionView.on("hashtagEvent", function () {
                e.trigger("hashtagEvent")
            })),
            this.$el.hover(function () {
                e.$el.find(".empty-bottom").show()
            }, function () {
                e.$el.find(".empty-bottom").hide()
            }),
            this.collection.pusherChannel.bind("comment:deleted", function (t) {
                var i = t.area;
                i == e.data.area && e.renderCommentIconText()
            }),
            this.collection.pusherChannel.bind("comment:added", function (t) {
                var i = t.area;
                i == e.data.area && e.renderCommentIconText()
            })
        },
        events: {
            "click .canvas-cell-main": "addNewItem",
            "click .canvas-cell-subsection": "addNewSubsectionItem"
        },
        addNewItem: function () {
            this.$el.find(".order").hide(),
            this.$el.find(".short_help").eq(0).hide(),
            this.mainView && this.mainView.clickToAdd()
        },
        addNewSubsectionItem: function () {
            this.$el.find(".short_help").eq(1).hide(),
            this.subsectionView && this.subsectionView.clickToAdd()
        },
        render: function () {
            return this.$el.empty(),
            this.$el.append(this.template({
                data: this.data
            })),
            this.renderMain(),
            this.renderMainHelp(),
            this.renderSubsection(),
            this.renderSubsectionHelp(),
            this.renderComments(),
            this.renderCommentIconText(),
            this.renderExperiments(),
            $(this.el).show(1, function () {}),
            this
        },
        renderHelp: function () {
            var t = this.data.area;
            return _uc.push(["action", "viewed_help", {
                content_area: t
            }]),
            $("#content_area").flip({
                direction: "lr",
                speed: 10,
                color: "#c9c9c9",
                content: $("#" + t + "_page")
            }),
            !1
        },
        renderComments: function () {
            var t = this;
            this.$el.find(".addComment").fancybox({
                titlePosition: "inside",
                transitionIn: "none",
                transitionOut: "none",
                width: "560",
                scrolling: "no",
                onClosed: function () {
                    t.renderCommentIconText()
                }
            })
        },
        renderCommentIconText: function () {
            var t = this;
            $.get("/canvases/" + t.data.canvas_id + "/comments_icon?area=" + t.data.area, function (e) {
                0 == new Number(e) ? (t.$el.find(".add_comment_text").show(), t.$el.find(".icon").hide(), t.$el.find(".comment-count").text(""), t.$el.find("span.bottom").hasClass("empty-bottom") || (t.$el.find("span.bottom").addClass("empty-bottom"), t.$el.find(".empty-bottom").hide())) : (t.$el.find(".add_comment_text").hide(), t.$el.find(".icon").show(), t.$el.find(".comment-count").text(e), t.$el.find("span.bottom").removeClass("empty-bottom").show())
            })
        },
        renderExperiments: function () {
            this.$el.find(".addExperiment").fancybox({
                titlePosition: "inside",
                transitionIn: "none",
                transitionOut: "none",
                width: "560",
                scrolling: "no"
            })
        },
        renderMain: function () {
            this.mainView && this.$el.find("h3.main").after(this.mainView.render().el)
        },
        renderMainHelp: function () {
            this.mainView && (0 == this.collection.length ? (this.$el.find(".short_help").eq(0).show(), this.$el.find(".order").show()) : (this.$el.find(".short_help").eq(0).hide(), this.$el.find(".order").hide()))
        },
        renderSubsection: function () {
            this.subsectionView && this.$el.find("h3.subsection").after(this.subsectionView.render().el)
        },
        renderSubsectionHelp: function () {
            this.subsectionView && (0 == this.subsectionCollection.length ? this.$el.find(".short_help").eq(1).show() : this.$el.find(".short_help").eq(1).hide())
        }
    }),
    CanvasSectionView = Backbone.View.extend({
        tagName: "ol",
        className: "sortable",
        initialize: function (t) {
            var e = this;
            this.canvas_id = t.canvas_id,
            this.area = t.area,
            this.editable = $("body").hasClass("updateable-canvas"),
            this.collection.on("add", this.addItemToCanvas, this),
            this.collection.on("reset", this.render, this),
            $(window).resize(function () {
                e.adjustSize()
            }),
            this.collection.pusherChannel.bind("client-sort:" + this.canvas_id + ":" + this.area, function () {
                e.collection.sort()
            })
        },
        render: function () {
            var t = this;
            return this.$el.empty(),
            this.collection && this.collection.each(function (e) {
                t.addItemToCanvas(e)
            }),
            this
        },
        clickToAdd: function () {
            var t = new CanvasItem;
            t.set("canvas_id", this.canvas_id),
            t.set("area", this.area),
            t.startEditing(),
            this.collection.stopEditingAll(),
            this.collection.add(t),
            this.collection.trigger("is_editing", t)
        },
        addItemToCanvas: function (t) {
            var e = new CanvasItemView({
                model: t,
                editable: this.editable
            });
            this.bindItemToEvents(e),
            this.$el.append(e.render().el),
            t.isNew() && e.$el.find("textarea").focus(),
            this.makeAreaSortable(),
            this.adjustSize()
        },
        bindItemToEvents: function (t) {
            var e = this;
            t.on("adjust_size", this.adjustSize),
            t.on("is_editing", function (t) {
                e.collection.stopEditingAllExcept(t),
                e.collection.removeAllEmpty(),
                e.collection.trigger("is_editing", t)
            }),
            t.on("remove_empty", function (t) {
                e.collection.remove(t)
            }),
            t.on("remove_view", function (t) {
                e.unbindViewFromEvents(t)
            }),
            t.on("submit", function (t) {
                e.autoSelectNext(t)
            }),
            t.on("hashtagEvent", function (t, i) {
                i = i || !1,
                e.trigger("hashtagEvent"),
                i && e.collection.pusherChannel.trigger("client-hashDelete:" + e.canvas_id, {
                    deletedHash: t
                })
            })
        },
        unbindViewFromEvents: function (t) {
            t.off("adjust_size"),
            t.off("is_editing"),
            t.off("remove_empty"),
            t.off("remove_view"),
            t.off("submit"),
            t.off("hashtagEvent")
        },
        autoSelectNext: function (t) {
            var e = 0,
                i = 0;
            this.collection.each(function (n) {
                    i++,
                    t.get("id") == n.get("id") && (e = i)
                }),
            e < this.collection.length ? this.collection.at(e).startEditing() : this.clickToAdd()
        },
        makeAreaSortable: function () {
            var t = this;
            this.$el.sortable({
                stop: function () {
                    t.updateOrder()
                }
            })
        },
        updateOrder: function () {
            var t = this;
            this.$el.find("li").each(function (e) {
                var i = $(this).attr("id"),
                    n = t.collection.get(i);
                n && n.setOrder(e + 1)
            }),
            this.collection.sort({
                silent: !0
            }),
            _.delay(function () {
                t.collection.pusherChannel.trigger("client-sort:" + t.canvas_id + ":" + t.area, {})
            }, 5e3)
        },
        adjustSize: function () {
            var t = $("#slideshow").offset(),
                e = ($("#slideshow").width(), $(".new_feature"));
            e.length > 0 && e.css({
                    left: t.left + 30 + "px",
                    top: t.top - 60 + "px"
                });
            $("table.canvas"),
            $(window).height()
        }
    }),
    CanvasItemView = Backbone.View.extend({
        tagName: "li",
        initialize: function (t) {
            this.template = _.template("<% if (!editing) { %> <div class='show'><span class='content' title='Click to edit'><%-content%></span></div><div class='actions'><!--<a class='move' href=''></a>--><a class='delete' rel='nofollow' data-remote='true' data-method='delete'></a></div> <% } else { %> <div class='textarea-container'><textarea id='canvas_item_content' rows='20' cols='40' autocomplete='off' style='height:20px;width:90%;'><%=content%></textarea></div><input id='canvas_item_submit' class='submit' type='button' value='Save'><small class='or'>or</small><a class='cancel' href='#'>cancel</a>  <% } %><div class='thirdPartyEditor' style='display:none;'></div>"),
            this.model.on("remove", this.removeItem, this),
            this.model.on("change:content", this.render, this),
            this.model.on("change:editing", this.render, this),
            this.model.on("change:editing", this.doneEditing, this),
            this.model.on("change:editing", this.focus, this),
            this.model.on("change:thirdPartyEditing", this.renderThirdPartyEditing, this),
            this.model.on("change:id", this.attachID, this),
            this.editable = t.editable
        },
        events: {
            "click .show": "enable",
            "click .submit": "submit",
            "click .cancel": "cancel",
            "click .delete": "deleteItem",
            "keydown textarea": "keydown",
            "keyup textarea": "keyup",
            "click textarea": "consume",
            "click .move": "consume",
            "blur textarea": "blur"
        },
        render: function () {
            var t = this.template(this.model.toJSON());
            return this.$el.html(t),
            this.$el.attr("id", this.model.get("id")),
            this.handleHashtags(),
            this
        },
        renderThirdPartyEditing: function () {
            this.model.get("thirdPartyEditing") && !this.model.get("editing") ? (this.$el.find(".thirdPartyEditor").show().text(this.model.get("thirdPartyEditor") + " is editing"), this.$el.find(".thirdPartyEditor").data("thirdPartyEditor", this.model.get("thirdPartyEditor")), this.$el.addClass("thirdPartyEditing")) : (this.$el.removeClass("thirdPartyEditing"), this.$el.find(".thirdPartyEditor").hide().text(""), this.$el.find(".thirdPartyEditor").data("thirdPartyEditor", ""))
        },
        attachID: function () {
            this.$el.attr("id", this.model.get("id"))
        },
        submit: function () {
            this.model.set("saveOnBlur", !1),
            $("#status").html("Saving...  ");
            var t = this.$el.find("textarea").val();
            "" == t ? (this.deleteHashTag(), this.removeItem(), this.model.destroy()) : (this.model.setContent(t), this.model.stopEditing(), this.handleHashtags(), this.trigger("submit", this.model))
        },
        cancel: function (t) {
            this.model.set("saveOnBlur", !1),
            this.model.stopEditing(),
            t.preventDefault()
        },
        deleteItem: function (t) {
            $("#status").html("Saving...  "),
            this.deleteHashTag(),
            this.removeItem(),
            this.model.destroy(),
            t.stopPropagation()
        },
        keydown: function (t) {
            27 == t.which && (this.cancel(), t.preventDefault(), t.stopPropagation()),
            (9 == t.which || 13 == t.which) && (this.submit(), t.preventDefault(), t.stopPropagation())
        },
        keyup: function () {
            this.resizeTextarea()
        },
        consume: function (t) {
            t.stopPropagation()
        },
        blur: function (t) {
            this.model.get("saveOnBlur") && (this.submit(), t.preventDefault(), t.stopPropagation())
        },
        handleHashtags: function () {
            var t = this.model.get("content");
            if (t.indexOf("#") > -1) {
                var e, i = t.indexOf("#") + 1,
                    n = t.indexOf(" ", i);
                if (e = n > -1 ? t.substring(i, n) : t.substring(i), this.$el.find(".content").data("hashtag") == e);
                else {
                        var s = this.model.get("hashtag");
                        hashTagModel.decrementHashCount(s),
                        this.$el.find(".content").addClass("hasHashtag"),
                        this.$el.find(".content").data("hashtag", e),
                        this.model.set("hashtag", e, {
                            silent: !0
                        }),
                        hashTagModel.incrementHashCount(e),
                        this.trigger("hashtagEvent")
                    }
            } else if (this.$el.find(".content").hasClass("hasHashtag")) {
                var s = this.model.get("hashtag");
                hashTagModel.decrementHashCount(s),
                this.$el.find(".content").removeClass("hasHashtag"),
                this.$el.find(".content").removeData("hashtag"),
                this.trigger("hashtagEvent")
            }
        },
        deleteHashTag: function () {
            var t = this.model.get("hashtag");
            hashTagModel.decrementHashCount(t),
            this.trigger("hashtagEvent", t, !0)
        },
        removeItem: function () {
            this.remove(),
            this.trigger("adjust_size"),
            this.trigger("remove_view", this)
        },
        enable: function (t) {
            this.editable && (this.model.startEditing(), this.model.get("content") ? this.$el.find("textarea").val(this.model.get("content")).focus() : this.$el.find("textarea").val("").focus(), this.resizeTextarea(), this.trigger("is_editing", this.model)),
            this.consume(t)
        },
        doneEditing: function () {
            this.model.isNew() && (this.model.get("content") || (this.trigger("remove_empty", this.model), this.removeItem()))
        },
        focus: function () {
            this.model.get("editing") && this.$el.find("textarea").focus()
        },
        resizeTextarea: function () {
            var t = this.$el.find("textarea"),
                e = this.getHeightForTextarea(t);
            e = 20 * Math.ceil(e / 20),
            20 > e && (e = 20),
            e !== t.css("height") && t.css("height", e)
        },
        getHeightForTextarea: function (t) {
            this.$shadowTextarea || this.initShadow(),
            this.$shadowTextarea.width(t.width() - 5),
            this.$shadowTextarea.css("font-size", t.css("font-size")),
            this.$shadowTextarea.css("font-family", t.css("font-family")),
            this.$shadowTextarea.css("line-height", t.css("line-height")),
            this.$shadowTextarea.css("letter-spacing", t.css("letter-spacing"));
            var e = t.val().replace(/^\s*/g, function (t) {
                return t.replace(/ /g, "&nbsp;")
            });
            return this.$shadowTextarea.html(e),
            this.$shadowTextarea.height()
        },
        initShadow: function () {
            this.$shadowTextarea = $("<div>"),
            this.$shadowTextarea.attr("id", "shadow_textarea"),
            $("body").append(this.$shadowTextarea)
        }
    }),
    CommentsView = Backbone.View.extend({
        initialize: function () {},
        newComment: function () {
            this.closeAllForms(),
            $("#new_comment")[0].reset(),
            $("form.new_comment").addClass("hidden")
        },
        finishCreate: function (t) {
            $(".comments-container").removeClass("new-comment"),
            $(".comments-container form.new_comment textarea").val(""),
            $(".comments-container .comments").prepend(t)
        },
        removeComment: function (t) {
            $("#comment_" + t).remove()
        },
        reply: function (t) {
            this.closeAllForms(),
            $("#reply" + t)[0].reset(),
            $("form#reply" + t).toggleClass("hidden"),
            $("form#reply" + t).addClass("replying")
        },
        finishReplyCreate: function (t, e) {
            $("form#reply" + t).remove(),
            $("#comment_" + t).removeClass("replying"),
            $("#comment_" + t + " .children").prepend(e)
        },
        closeAllForms: function () {
            $(".comments-container .comment .replying").toggleClass("hidden"),
            $(".comments-container .comment .replying").removeClass("replying")
        }
    }),
    SlideshowView = Backbone.View.extend({
        initialize: function () {
            var t = this;
            this.cursor = 0,
            this.order = ["#customer_segments", "#problem", "#value_proposition", "#solution", "#channels", "#revenue_streams", "#cost_structure", "#key_activity", "#unfair_advantage"],
            this.limit = this.order.length;
            var e = $("table.canvas"),
                i = e.find("td");
            i.find("ol").hide(),
            e.find("td.bottom").hide(),
            this.adjustSize(),
            this.bindEventHandlers(),
            $("#slider").show().delay(2e3).fadeOut(1200),
            $(".content-container").mousemove(function () {
                    $("#slider").show()
                }),
            $("#close").click(function () {
                    window.close()
                }),
            $("#next").on("click", function () {
                    t.next()
                }),
            $("#previous").on("click", function () {
                    t.prev()
                }),
            $(window).resize(function () {
                    t.adjustSize()
                }),
            this.displayArrows()
        },
        bindEventHandlers: function () {
            var t = this;
            $("html").bind("keydown", function (e) {
                37 == e.which && (t.prev(), e.preventDefault()),
                39 == e.which && (t.next(), e.preventDefault()),
                27 == e.which && (e.preventDefault(), window.close())
            })
        },
        adjustSize: function () {
            var t = $("table.canvas"),
                e = $("#slider"),
                i = $(window).height(),
                n = $(window).width();
            t.css("height", $(window).height() - 70),
            t.css("font-size", i / 37 + "px"),
            e.css("left", n / 2 - 100 + "px")
        },
        start: function () {},
        stop: function () {},
        prev: function () {
            this.cursor = this.cursor - 1,
            this.renderAreas()
        },
        next: function () {
            this.cursor = this.cursor + 1,
            this.renderAreas()
        },
        renderAreas: function () {
            for (var t = this.cursor - 1; t < this.limit; t++) this.hideArea(this.order[t]);
            this.showArea(this.order[this.cursor - 1]),
            this.displayArrows()
        },
        showArea: function (t) {
            $(t).css("background-color", "#ecf0fa").find("ol").show()
        },
        hideArea: function (t) {
            $(t).css("background-color", "#ffffff").find("ol").hide()
        },
        displayArrows: function () {
            this.cursor > 0 ? $("#previous").show() : $("#previous").hide(),
            this.cursor < this.limit ? $("#next").show() : $("#next").hide()
        }
    });
!
function (t, e) {
        var i, n, s, o, r, a, l, h, c, u, d = window.Sizzle || null,
            p = t[e],
            f = "undefined",
            g = !1,
            m = typeof window.jQuery !== f,
            v = !1,
            b = window.document;
        try {
                v = typeof window.sessionStorage !== f
            } catch (y) {}
        u = {
                smoothScroll: !0,
                scrollDuration: 1e3,
                scrollTopMargin: 200,
                showCloseButton: !0,
                showPrevButton: !1,
                showNextButton: !0,
                bubbleWidth: 280,
                bubblePadding: 15,
                arrowWidth: 20,
                skipIfNoElement: !0,
                cookieName: "hopscotch.tour.state"
            },
        p || (Array.isArray || (Array.isArray = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }), c = function () {
                g && p.startTour()
            }, a = {
                addClass: function (t, e) {
                    var i, n, s, o;
                    if (t.className) {
                        for (n = e.split(/\s+/), i = " " + t.className + " ", s = 0, o = n.length; o > s; ++s) i.indexOf(" " + n[s] + " ") < 0 && (i += n[s] + " ");
                        t.className = i.replace(/^\s+|\s+$/g, "")
                    } else t.className = e
                },
                removeClass: function (t, e) {
                    var i, n, s, o;
                    for (n = e.split(/\s+/), i = " " + t.className + " ", s = 0, o = n.length; o > s; ++s) i = i.replace(" " + n[s] + " ", " ");
                    t.className = i.replace(/^\s+|\s+$/g, "")
                },
                getPixelValue: function (t) {
                    var e = typeof t;
                    return "number" === e ? t : "string" === e ? parseInt(t, 10) : 0
                },
                valOrDefault: function (t, e) {
                    return typeof t !== f ? t : e
                },
                invokeCallbackArrayHelper: function (t) {
                    var e;
                    return Array.isArray(t) && (e = h[t[0]], "function" == typeof e) ? e.apply(this, t.slice(1)) : void 0
                },
                invokeCallbackArray: function (t) {
                    var e, i;
                    if (Array.isArray(t)) {
                        if ("string" == typeof t[0]) return a.invokeCallbackArrayHelper(t);
                        for (e = 0, i = t.length; i > e; ++e) a.invokeCallback(t[e])
                    }
                },
                invokeCallback: function (t) {
                    return "function" == typeof t ? t() : "string" == typeof t && h[t] ? h[t]() : a.invokeCallbackArray(t)
                },
                invokeEventCallbacks: function (t, e) {
                    var i, n, s = l[t];
                    if (e) return this.invokeCallback(e);
                    for (i = 0, n = s.length; n > i; ++i) this.invokeCallback(s[i].cb)
                },
                getScrollTop: function () {
                    var t;
                    return t = typeof window.pageYOffset !== f ? window.pageYOffset : b.documentElement.scrollTop
                },
                getScrollLeft: function () {
                    var t;
                    return t = typeof window.pageXOffset !== f ? window.pageXOffset : b.documentElement.scrollLeft
                },
                getWindowHeight: function () {
                    return window.innerHeight || b.documentElement.clientHeight
                },
                getWindowWidth: function () {
                    return window.innerWidth || b.documentElement.clientWidth
                },
                addEvtListener: function (t, e, i) {
                    return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
                },
                removeEvtListener: function (t, e, i) {
                    return t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent("on" + e, i)
                },
                documentIsReady: function () {
                    return "complete" === b.readyState || "interactive" === b.readyState
                },
                evtPreventDefault: function (t) {
                    t.preventDefault ? t.preventDefault() : event && (event.returnValue = !1)
                },
                extend: function (t, e) {
                    var i;
                    for (i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                },
                getStepTargetHelper: function (t) {
                    var e;
                    return /^[#\.]/.test(t) ? b.querySelector ? b.querySelector(t) : m ? (e = jQuery(t), e.length ? e[0] : null) : d ? (e = new d(t), e.length ? e[0] : null) : /^#[a-zA-Z][\w-_:.]*$/.test(t) ? b.getElementById(t.substring(1)) : null : b.getElementById(t)
                },
                getStepTarget: function (t) {
                    var e;
                    if (!t || !t.target) return null;
                    if ("string" == typeof t.target) return t.target = a.getStepTargetHelper(t.target),
                    t.target;
                    if (Array.isArray(t.target)) {
                        var i, n;
                        for (i = 0, n = t.target.length; n > i; i++) if ("string" == typeof t.target[i] && (e = a.getStepTargetHelper(t.target[i]))) return t.target = e,
                        e;
                        return null
                    }
                    return t.target
                },
                getI18NString: function (t) {
                    return r[t] || o[t]
                },
                setState: function (t, e, i) {
                    var n, s = "";
                    v ? sessionStorage.setItem(t, e) : (i && (n = new Date, n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), s = "; expires=" + n.toGMTString()), b.cookie = t + "=" + e + s + "; path=/")
                },
                getState: function (t) {
                    var e, i, n, s = t + "=",
                        o = b.cookie.split(";");
                    if (v) n = sessionStorage.getItem(t);
                    else for (e = 0; e < o.length; e++) {
                            for (i = o[e];
                            " " === i.charAt(0);) i = i.substring(1, i.length);
                            if (0 === i.indexOf(s)) {
                                n = i.substring(s.length, i.length);
                                break
                            }
                        }
                    return n
                },
                clearState: function (t) {
                    v ? sessionStorage.removeItem(t) : this.setState(t, "", -1)
                }
            }, a.addEvtListener(window, "load", c), l = {
                next: [],
                prev: [],
                start: [],
                end: [],
                show: [],
                error: [],
                close: []
            }, h = {}, o = {
                stepNums: null,
                nextBtn: "Next",
                prevBtn: "Back",
                doneBtn: "Done",
                skipBtn: "Skip",
                closeTooltip: "Close"
            }, r = {}, n = function (t) {
                this.init(t)
            }, n.prototype = {
                isShowing: !1,
                currStep: void 0,
                _createButton: function (t, e) {
                    var i = b.createElement("button"),
                        n = "hopscotch-nav-button";
                    return i.id = t,
                    e && (i.innerHTML = e),
                    n += t.indexOf("prev") >= 0 ? " prev" : " next",
                    a.addClass(i, n),
                    i
                },
                setPosition: function (t) {
                    var e, i, n, s, o, r, l, h = 6,
                        c = a.getStepTarget(t),
                        u = this.element,
                        d = this.arrowEl;
                    e = a.getPixelValue(t.width) || this.opt.bubbleWidth,
                    n = a.valOrDefault(t.padding, this.opt.bubblePadding),
                    a.removeClass(u, "fade-in-down fade-in-up fade-in-left fade-in-right"),
                    !t.placement && t.orientation && (t.placement = t.orientation),
                    s = c.getBoundingClientRect(),
                    "top" === t.placement ? (i = u.offsetHeight, o = s.top - i - this.opt.arrowWidth, r = s.left) : "bottom" === t.placement ? (o = s.bottom + this.opt.arrowWidth, r = s.left) : "left" === t.placement ? (o = s.top, r = s.left - e - 2 * n - 2 * h - this.opt.arrowWidth) : "right" === t.placement && (o = s.top, r = s.right + this.opt.arrowWidth),
                    l = "center" !== t.arrowOffset ? a.getPixelValue(t.arrowOffset) : t.arrowOffset,
                    l ? "top" === t.placement || "bottom" === t.placement ? (d.style.top = "", d.style.left = "center" === l ? e / 2 + n - d.offsetWidth / 2 + "px" : l + "px") : ("left" === t.placement || "right" === t.placement) && (d.style.left = "", "center" === l ? (i = i || u.offsetHeight, d.style.top = i / 2 + n - d.offsetHeight / 2 + "px") : d.style.top = l + "px") : (d.style.top = "", d.style.left = ""),
                    "center" === t.xOffset ? r = s.left + c.offsetWidth / 2 - e / 2 - n : r += a.getPixelValue(t.xOffset),
                    "center" === t.yOffset ? (i = i || u.offsetHeight, o = s.top + c.offsetHeight / 2 - i / 2 - n) : o += a.getPixelValue(t.yOffset),
                    t.fixedElement || (o += a.getScrollTop(), r += a.getScrollLeft()),
                    u.style.position = t.fixedElement ? "fixed" : "absolute",
                    u.style.top = o + "px",
                    u.style.left = r + "px"
                },
                _initNavButtons: function () {
                    var t = b.createElement("div");
                    return this.prevBtnEl = this._createButton("hopscotch-prev", a.getI18NString("prevBtn")),
                    this.nextBtnEl = this._createButton("hopscotch-next", a.getI18NString("nextBtn")),
                    this.doneBtnEl = this._createButton("hopscotch-done", a.getI18NString("doneBtn")),
                    this.ctaBtnEl = this._createButton("hopscotch-cta"),
                    a.addClass(this.doneBtnEl, "hide"),
                    t.appendChild(this.prevBtnEl),
                    t.appendChild(this.ctaBtnEl),
                    t.appendChild(this.nextBtnEl),
                    t.appendChild(this.doneBtnEl),
                    a.addEvtListener(this.prevBtnEl, "click", function () {
                        p.prevStep(!0)
                    }),
                    a.addEvtListener(this.nextBtnEl, "click", function () {
                        p.nextStep(!0)
                    }),
                    a.addEvtListener(this.doneBtnEl, "click", function () {
                        p.endTour()
                    }),
                    t.className = "hopscotch-actions",
                    this.buttonsEl = t,
                    this.containerEl.appendChild(t),
                    this
                },
                _getCloseFn: function () {
                    var t = this;
                    return this.closeFn || (this.closeFn = function (e) {
                        t.opt.onClose && a.invokeCallback(t.opt.onClose),
                        t.opt.id && !t.opt.isTourBubble ? p.getCalloutManager().removeCallout(t.opt.id) : t.destroy(),
                        a.evtPreventDefault(e)
                    }),
                    this.closeFn
                },
                initCloseButton: function () {
                    var t = b.createElement("a");
                    return t.className = "hopscotch-bubble-close",
                    t.href = "#",
                    t.title = a.getI18NString("closeTooltip"),
                    t.innerHTML = a.getI18NString("closeTooltip"),
                    this.opt.isTourBubble ? a.addEvtListener(t, "click", function (t) {
                        var e = p.getCurrStepNum(),
                            i = p.getCurrTour(),
                            n = e === i.steps.length - 1;
                        a.invokeEventCallbacks("close"),
                        p.endTour(!0, n),
                        t.preventDefault ? t.preventDefault() : event && (event.returnValue = !1)
                    }) : a.addEvtListener(t, "click", this._getCloseFn()),
                    a.valOrDefault(this.opt.showCloseButton, !0) || a.addClass(t, "hide"),
                    this.closeBtnEl = t,
                    this.containerEl.appendChild(t),
                    this
                },
                _initArrow: function () {
                    var t, e;
                    return this.arrowEl = b.createElement("div"),
                    this.arrowEl.className = "hopscotch-bubble-arrow-container",
                    e = b.createElement("div"),
                    e.className = "hopscotch-bubble-arrow-border",
                    t = b.createElement("div"),
                    t.className = "hopscotch-bubble-arrow",
                    this.arrowEl.appendChild(e),
                    this.arrowEl.appendChild(t),
                    this.element.appendChild(this.arrowEl),
                    this
                },
                _setupCTAButton: function (t) {
                    var e = this;
                    this._showButton(this.ctaBtnEl, !! t.showCTAButton),
                    t.showCTAButton && t.ctaLabel && (this.ctaBtnEl.innerHTML = t.ctaLabel, this._ctaFn = function () {
                        e.opt.isTourBubble || p.getCalloutManager().removeCallout(t.id),
                        t.onCTA && "function" == typeof t.onCTA && t.onCTA()
                    }, a.addEvtListener(this.ctaBtnEl, "click", this._ctaFn))
                },
                _removeCTACallback: function () {
                    this.ctaBtnEl && this._ctaFn && (a.removeEvtListener(this.ctaBtnEl, "click", this._ctaFn), this._ctaFn = null)
                },
                render: function (t, e, i, n) {
                    var s, o, r, l, h = this.element;
                    return t ? this.currStep = t : this.currStep && (t = this.currStep),
                    !t.placement && t.orientation && (t.placement = t.orientation),
                    s = a.valOrDefault(t.showNextButton, this.opt.showNextButton),
                    o = a.valOrDefault(t.showPrevButton, this.opt.showPrevButton),
                    this.setTitle(t.title || ""),
                    this.setContent(t.content || ""),
                    this.opt.isTourBubble && this.setNum(e),
                    this.placement = t.placement,
                    this.showPrevButton(this.prevBtnEl && o && e > 0),
                    this.showNextButton(this.nextBtnEl && s && !i),
                    this.nextBtnEl.innerHTML = a.getI18NString(t.showSkip ? "skipBtn" : "nextBtn"),
                    i ? a.removeClass(this.doneBtnEl, "hide") : a.addClass(this.doneBtnEl, "hide"),
                    this._setupCTAButton(t),
                    this._setArrow(t.placement),
                    r = a.getPixelValue(t.width) || this.opt.bubbleWidth,
                    l = a.valOrDefault(t.padding, this.opt.bubblePadding),
                    this.containerEl.style.width = r + "px",
                    this.containerEl.style.padding = l + "px",
                    h.style.zIndex = t.zindex || "",
                    "top" === t.placement ? (h.style.top = "-9999px", h.style.left = "-9999px", a.removeClass(h, "hide"), this.setPosition(t), a.addClass(h, "hide")) : this.setPosition(t),
                    n && n(!t.fixedElement),
                    this
                },
                setTitle: function (t) {
                    return t ? (this.titleEl.innerHTML = t, a.removeClass(this.titleEl, "hide")) : a.addClass(this.titleEl, "hide"),
                    this
                },
                setContent: function (t) {
                    return t ? (this.contentEl.innerHTML = t, a.removeClass(this.contentEl, "hide")) : a.addClass(this.contentEl, "hide"),
                    this
                },
                setNum: function (t) {
                    var e = a.getI18NString("stepNums");
                    e && t < e.length ? t = e[t] : t += 1,
                    this.numberEl.innerHTML = t
                },
                _setArrow: function (t) {
                    a.removeClass(this.arrowEl, "down up right left"),
                    "top" === t ? a.addClass(this.arrowEl, "down") : "bottom" === t ? a.addClass(this.arrowEl, "up") : "left" === t ? a.addClass(this.arrowEl, "right") : "right" === t && a.addClass(this.arrowEl, "left")
                },
                _getArrowDirection: function () {
                    return "top" === this.placement ? "down" : "bottom" === this.placement ? "up" : "left" === this.placement ? "right" : "right" === this.placement ? "left" : void 0
                },
                show: function () {
                    var t = this,
                        e = "fade-in-" + this._getArrowDirection(),
                        i = 1e3;
                    return a.removeClass(this.element, "hide"),
                    a.addClass(this.element, e),
                    setTimeout(function () {
                            a.removeClass(t.element, "invisible")
                        }, 50),
                    setTimeout(function () {
                            a.removeClass(t.element, e)
                        }, i),
                    this.isShowing = !0,
                    this
                },
                hide: function (t) {
                    var e = this.element;
                    return t = a.valOrDefault(t, !0),
                    e.style.top = "",
                    e.style.left = "",
                    t ? (a.addClass(e, "hide"), a.removeClass(e, "invisible")) : (a.removeClass(e, "hide"), a.addClass(e, "invisible")),
                    a.removeClass(e, "animate fade-in-up fade-in-down fade-in-right fade-in-left"),
                    this.isShowing = !1,
                    this
                },
                _showButton: function (t, e, i) {
                    var n = "hide";
                    i && (n = "hide-all"),
                    typeof e === f && (e = !0),
                    e ? a.removeClass(t, n) : a.addClass(t, n)
                },
                showPrevButton: function (t) {
                    this._showButton(this.prevBtnEl, t)
                },
                showNextButton: function (t) {
                    this._showButton(this.nextBtnEl, t)
                },
                showCloseButton: function (t) {
                    this._showButton(this.closeBtnEl, t)
                },
                destroy: function () {
                    var t = this.element;
                    t && t.parentNode.removeChild(t),
                    this.closeBtnEl && a.removeEvtListener(this.closeBtnEl, "click", this._getCloseFn()),
                    this.ctaBtnEl && this.onCTA && this._removeCTACallback()
                },
                updateButtons: function () {
                    this.showPrevButton(this.opt.showPrevButton),
                    this.showNextButton(this.opt.showNextButton),
                    this.showCloseButton(this.opt.showCloseButton),
                    this.prevBtnEl.innerHTML = a.getI18NString("prevBtn"),
                    this.nextBtnEl.innerHTML = a.getI18NString("nextBtn"),
                    this.doneBtnEl.innerHTML = a.getI18NString("doneBtn")
                },
                init: function (t) {
                    var e, i, n, s = b.createElement("div"),
                        o = b.createElement("div"),
                        r = b.createElement("div"),
                        l = this,
                        h = !1;
                    this.element = s,
                    this.containerEl = o,
                    this.titleEl = b.createElement("h3"),
                    this.contentEl = b.createElement("div"),
                    a.addClass(this.titleEl, "hopscotch-title"),
                    a.addClass(this.contentEl, "hopscotch-content"),
                    n = {
                            showPrevButton: u.showPrevButton,
                            showNextButton: u.showNextButton,
                            bubbleWidth: u.bubbleWidth,
                            bubblePadding: u.bubblePadding,
                            arrowWidth: u.arrowWidth,
                            showNumber: !0,
                            isTourBubble: !0
                        },
                    t = typeof t === f ? {} : t,
                    a.extend(n, t),
                    this.opt = n,
                    s.className = "hopscotch-bubble animated",
                    o.className = "hopscotch-bubble-container",
                    n.isTourBubble || (s.className += " hopscotch-callout"),
                    n.isTourBubble ? (this.numberEl = b.createElement("span"), this.numberEl.className = "hopscotch-bubble-number", o.appendChild(this.numberEl)) : a.addClass(s, "no-number"),
                    r.appendChild(this.titleEl),
                    r.appendChild(this.contentEl),
                    r.className = "hopscotch-bubble-content",
                    o.appendChild(r),
                    s.appendChild(o),
                    this._initNavButtons(),
                    this.initCloseButton(),
                    this._initArrow(),
                    e = function () {
                            !h && l.isShowing && (h = !0, setTimeout(function () {
                                l.setPosition(l.currStep),
                                h = !1
                            }, 100))
                        },
                    a.addEvtListener(window, "resize", e),
                    this.hide(),
                    a.documentIsReady() ? b.body.appendChild(s) : (b.addEventListener ? (i = function () {
                            b.removeEventListener("DOMContentLoaded", i),
                            window.removeEventListener("load", i),
                            b.body.appendChild(s)
                        }, b.addEventListener("DOMContentLoaded", i, !1)) : (i = function () {
                            "complete" === b.readyState && (b.detachEvent("onreadystatechange", i), window.detachEvent("onload", i), b.body.appendChild(s))
                        }, b.attachEvent("onreadystatechange", i)), a.addEvtListener(window, "load", i))
                }
            }, s = function () {
                var t = {};
                this.createCallout = function (e) {
                    var i;
                    if (!e.id) throw "Must specify a callout id.";
                    if (t[e.id]) throw "Callout by that id already exists. Please choose a unique id.";
                    return e.showNextButton = e.showPrevButton = !1,
                    e.isTourBubble = !1,
                    i = new n(e),
                    t[e.id] = i,
                    e.target && i.render(e, null, null, function () {
                        i.show()
                    }),
                    i
                },
                this.getCallout = function (e) {
                    return t[e]
                },
                this.removeAllCallouts = function () {
                    var e;
                    for (e in t) t.hasOwnProperty(e) && this.removeCallout(e)
                },
                this.removeCallout = function (e) {
                    var i = t[e];
                    t[e] = null,
                    i && i.destroy()
                }
            }, i = function (t) {
                var e, i, o, c, d, p, v, y, _ = this,
                    w = function (t) {
                        return e || (e = new n(o)),
                        t && (a.extend(e.opt, {
                            bubblePadding: x("bubblePadding"),
                            bubbleWidth: x("bubbleWidth"),
                            showNextButton: x("showNextButton"),
                            showPrevButton: x("showPrevButton"),
                            showCloseButton: x("showCloseButton"),
                            arrowWidth: x("arrowWidth")
                        }), e.updateButtons()),
                        e
                    },
                    x = function (t) {
                        return "undefined" == typeof o ? u[t] : a.valOrDefault(o[t], u[t])
                    },
                    C = function () {
                        var t;
                        return t = 0 > d || d >= c.steps.length ? null : c.steps[d]
                    },
                    k = function () {
                        _.nextStep()
                    },
                    T = function (t) {
                        var e, i, n, s, o, r, l = w(),
                            h = l.element,
                            c = a.getPixelValue(h.style.top),
                            u = c + a.getPixelValue(h.offsetHeight),
                            d = a.getStepTarget(C()),
                            p = d.getBoundingClientRect(),
                            g = p.top + a.getScrollTop(),
                            v = p.bottom + a.getScrollTop(),
                            y = g > c ? c : g,
                            _ = u > v ? u : v,
                            k = a.getScrollTop(),
                            T = k + a.getWindowHeight(),
                            D = y - x("scrollTopMargin");
                        y >= k && (y <= k + x("scrollTopMargin") || T >= _) ? t && t() : x("smoothScroll") ? typeof YAHOO !== f && typeof YAHOO.env !== f && typeof YAHOO.env.ua !== f && typeof YAHOO.util !== f && typeof YAHOO.util.Scroll !== f ? (e = YAHOO.env.ua.webkit ? b.body : b.documentElement, n = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : void 0, i = new YAHOO.util.Scroll(e, {
                                scroll: {
                                    to: [0, D]
                                }
                            }, x("scrollDuration") / 1e3, n), i.onComplete.subscribe(t), i.animate()) : m ? jQuery("body, html").animate({
                                scrollTop: D
                            }, x("scrollDuration"), t) : (0 > D && (D = 0), s = k > y ? -1 : 1, o = Math.abs(k - D) / (x("scrollDuration") / 10), (r = function () {
                                var e = a.getScrollTop(),
                                    i = e + s * o;
                                return s > 0 && i >= D || 0 > s && D >= i ? (i = D, t && t(), void window.scrollTo(0, i)) : (window.scrollTo(0, i), a.getScrollTop() === e ? void(t && t()) : void setTimeout(r, 10))
                            })()) : (window.scrollTo(0, D), t && t())
                    },
                    D = function (t, e) {
                        var i, n, s;
                        d + t >= 0 && d + t < c.steps.length ? (d += t, n = C(), s = function () {
                            i = a.getStepTarget(n),
                            i ? e(d) : (a.invokeEventCallbacks("error"), D(t, e))
                        }, n.delay ? setTimeout(s, n.delay) : s()) : e(-1)
                    },
                    S = function (t, e) {
                        var i, n, s, o, r = w(),
                            l = this;
                        if (r.hide()._removeCTACallback(), t = a.valOrDefault(t, !0), i = C(), n = i, s = e > 0 ? n.multipage : d > 0 && c.steps[d - 1].multipage, o = function (i) {
                                var o;
                                return -1 === i ? this.endTour(!0) : (t && (o = e > 0 ? a.invokeEventCallbacks("next", n.onNext) : a.invokeEventCallbacks("prev", n.onPrev)), s ? void a.setState(x("cookieName"), c.id + ":" + d, 1) : (o = a.valOrDefault(o, !0), void(o ? this.showStep(i) : this.endTour(!1))))
                            }, !s && x("skipIfNoElement")) D(e, function (t) {
                                o.call(l, t)
                            });
                        else if (d + e >= 0 && d + e < c.steps.length) {
                                if (d += e, i = C(), !a.getStepTarget(i) && !s) return a.invokeEventCallbacks("error"),
                                this.endTour(!0, !1);
                                o.call(this, d)
                            }
                        return this
                    },
                    E = function (t) {
                        var e, i, n, s = {};
                        for (e in t) t.hasOwnProperty(e) && "id" !== e && "steps" !== e && (s[e] = t[e]);
                        return y.call(this, s, !0),
                        i = a.getState(x("cookieName")),
                        i && (n = i.split(":"), p = n[0], v = n[1], v = parseInt(v, 10)),
                        this
                    },
                    I = function (t, e) {
                        var i, n;
                        if (d = t || 0, i = C(), n = a.getStepTarget(i)) return void e(d);
                        if (!n) {
                            if (a.invokeEventCallbacks("error"), x("skipIfNoElement")) return void D(1, e);
                            d = -1,
                            e(d)
                        }
                    },
                    P = function (t) {
                        var e, i, n = c.steps[t],
                            s = c.steps,
                            o = s.length,
                            r = c.id + ":" + t,
                            l = w(),
                            h = a.getStepTarget(n);
                        i = function () {
                                l.show(),
                                a.invokeEventCallbacks("show", n.onShow)
                            },
                        d = t,
                        l.hide(!1),
                        e = t === o - 1,
                        l.render(n, t, e, function (t) {
                                t ? T(i) : i(),
                                n.nextOnTargetClick && a.addEvtListener(h, "click", k)
                            }),
                        a.setState(x("cookieName"), r, 1)
                    },
                    N = function (t) {
                        t && this.configure(t)
                    };
                this.getCalloutManager = function () {
                        return typeof i === f && (i = new s),
                        i
                    },
                this.startTour = function (t, e) {
                        var i, n = this;
                        if (c || (c = t, E.call(this, t)), typeof e !== f) {
                            if (e >= c.steps.length) throw "Specified step number out of bounds.";
                            d = e
                        }
                        return a.documentIsReady() ? (d || c.id !== p || typeof v === f ? d || (d = 0) : d = v, I(d, function (t) {
                            var e = -1 !== t && a.getStepTarget(c.steps[t]);
                            return e ? (a.invokeEventCallbacks("start"), i = w(), i.hide(!1), n.isActive = !0, void(a.getStepTarget(C()) ? n.showStep(t) : (a.invokeEventCallbacks("error"), x("skipIfNoElement") && n.nextStep(!1)))) : void n.endTour(!1, !1)
                        }), this) : (g = !0, this)
                    },
                this.showStep = function (t) {
                        var e = c.steps[t];
                        return e.delay ? setTimeout(function () {
                            P(t)
                        }, e.delay) : P(t),
                        this
                    },
                this.prevStep = function (t) {
                        return S.call(this, t, -1),
                        this
                    },
                this.nextStep = function (t) {
                        var e = C(),
                            i = a.getStepTarget(e);
                        return e.nextOnTargetClick && a.removeEvtListener(i, "click", k),
                        S.call(this, t, 1),
                        this
                    },
                this.endTour = function (t, e) {
                        var i = w();
                        return t = a.valOrDefault(t, !0),
                        e = a.valOrDefault(e, !0),
                        d = 0,
                        v = void 0,
                        i.hide(),
                        t && a.clearState(x("cookieName")),
                        this.isActive && (this.isActive = !1, c && e && a.invokeEventCallbacks("end")),
                        this.removeCallbacks(null, !0),
                        this.resetDefaultOptions(),
                        c = null,
                        this
                    },
                this.getCurrTour = function () {
                        return c
                    },
                this.getCurrTarget = function () {
                        return a.getStepTarget(C())
                    },
                this.getCurrStepNum = function () {
                        return d
                    },
                this.listen = function (t, e, i) {
                        return t && l[t].push({
                            cb: e,
                            fromTour: i
                        }),
                        this
                    },
                this.unlisten = function (t, e) {
                        var i, n, s = l[t];
                        for (i = 0, n = s.length; n > i; ++i) s[i] === e && s.splice(i, 1);
                        return this
                    },
                this.removeCallbacks = function (t, e) {
                        var i, n, s, o;
                        for (o in l) if (!t || t === o) if (e) for (i = l[o], n = 0, s = i.length; s > n; ++n) i[n].fromTour && (i.splice(n--, 1), --s);
                        else l[o] = [];
                        return this
                    },
                this.registerHelper = function (t, e) {
                        "string" == typeof t && "function" == typeof e && (h[t] = e)
                    },
                this.unregisterHelper = function (t) {
                        h[t] = null
                    },
                this.invokeHelper = function (t) {
                        var e, i, n = [];
                        for (e = 1, i = arguments.length; i > e; ++e) n.push(arguments[e]);
                        h[t] && h[t].call(null, n)
                    },
                this.setCookieName = function (t) {
                        return o.cookieName = t,
                        this
                    },
                this.resetDefaultOptions = function () {
                        return o = {},
                        this
                    },
                this.resetDefaultI18N = function () {
                        return r = {},
                        this
                    },
                this.getState = function () {
                        return a.getState(x("cookieName"))
                    },
                y = function (t, e) {
                        var i, n, s, l, h = ["next", "prev", "start", "end", "show", "error", "close"];
                        for (o || this.resetDefaultOptions(), a.extend(o, t), t && a.extend(r, t.i18n), s = 0, l = h.length; l > s; ++s) n = "on" + h[s].charAt(0).toUpperCase() + h[s].substring(1),
                        t[n] && this.listen(h[s], t[n], e);
                        return i = w(!0),
                        this
                    },
                this.configure = function (t) {
                        return y.call(this, t, !1)
                    },
                N.call(this, t)
            }, p = new i, t[e] = p)
    }(window, "hopscotch");
var tour_roadmap = {
        id: "hello-hopscotch",
        steps: [{
            title: "Welcome!",
            content: "Lean Stack is a framework to define, communicate, & build your ideas into successful products.",
            width: "400px",
            target: "#tr__logo",
            placement: "right"
        },
        {
            title: "Roadmap",
            content: "The roadmap below will guide through the activites you should accomplish. Comeback to it at anytime by clicking on this icon.",
            width: "400px",
            target: "#tr__roadmap",
            placement: "left"
        },
        {
            title: "Three Foundational Principles",
            content: "Whether working on a new idea or an existing product, there are three principles we recommend every product goes through: <ol><li>Document your Plan A</li><li>Identify the riskiest parts</li><li>Systematically test</li></ol> This is the same process we use in our workshops, bootcamp, & outline in the book Running Lean to help entrepreneurs, teams, & enterprises iterate towards a plan that works.",
            width: "540px",
            target: "#testing1",
            placement: "bottom"
        },
        {
            title: "Activites to complete",
            content: 'Each section has a list of recommended activites. Clicking on an activity will reveal more information & sometimes video lessons or examples. Test it by clicking on <strong>"Sketch Lean Canvas #1"</strong>',
            width: "540px",
            target: "#tr__taskTitle",
            placement: "top"
        },
        {
            title: "Browse Around",
            content: "Read through the sections & click around to get an overview of the process. Then get started with the first activity.",
            width: "540px",
            target: "#tr__taskTitleFirst",
            placement: "top"
        }],
        showPrevButton: !0,
        onEnd: function () {
            $.post("/roadmap/watched", {
                step: "intro"
            })
        },
        onClose: function () {
            $.post("/roadmap/watched", {
                step: "intro"
            })
        }
    };
    (function () {
        $(function () {
            return $("input[name='search']").on("keyup", function () {
                var t;
                return t = $(this).val(),
                "" !== t ? $(".products-list ul li").each(function (e, i) {
                    var n, s;
                    return s = $(i).find("h3").text(),
                    n = $(i).find("strong").text(),
                    s ? -1 === s.toLowerCase().indexOf(t.toLowerCase()) && -1 === n.toLowerCase().indexOf(t.toLowerCase()) ? $(i).hide() : $(i).show() : void 0
                }) : $(".products-list ul li").show()
            }),
            $("#product_details").on("click", function () {
                return $("#product-details").toggle(),
                !1
            })
        })
    }).call(this),


function () {
        $(function () {
            return $(document).on("click", ".closeComment", function () {
                return commentsView.closeAllForms()
            }),
            $(document).on("click", ".replyComment", function () {
                return console.log($(this).data()),
                commentsView.reply($(this).data().commentId)
            })
        })
    }.call(this);