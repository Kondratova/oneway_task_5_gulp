"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var r = {};

  function t(o) {
    if (r[o]) return r[o].exports;
    var n = r[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
  }

  t.m = e, t.c = r, t.d = function (e, r, o) {
    t.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, r) {
    if (1 & r && (e = t(e)), 8 & r) return e;
    if (4 & r && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      t.d(o, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return o;
  }, t.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(r, "a", r), r;
  }, t.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, t.p = "", t(t.s = 0);
}([function (e, r) {
  $(".js_slider_1_for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".js_slider_1_nav"
  }), $(".js_slider_1_nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".js_slider_1_for",
    accessibility: !1,
    centerMode: !0,
    focusOnSelect: !0,
    vertical: !0,
    verticalSwiping: !0,
    arrows: !1
  }), $(".sl_2").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 1,
    centerMode: !0,
    variableWidth: !0
  });
}]);