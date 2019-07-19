"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var r = {};

  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  o.m = e, o.c = r, o.d = function (e, r, t) {
    o.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, r) {
    if (1 & r && (e = o(e)), 8 & r) return e;
    if (4 & r && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (o.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      o.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, o.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return o.d(r, "a", r), r;
  }, o.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, o.p = "", o(o.s = 0);
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
  }), $(".js_slider_2").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 1,
    centerMode: !0,
    variableWidth: !0
  }), $(".js_show_specification").magnificPopup({
    type: "inline",
    preloader: !1,
    callbacks: {
      beforeOpen: function beforeOpen() {}
    }
  });
}]);