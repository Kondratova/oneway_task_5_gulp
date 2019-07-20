"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var o = {};

  function r(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }

  r.m = e, r.c = o, r.d = function (e, o, n) {
    r.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, o) {
    if (1 & o && (e = r(e)), 8 & o) return e;
    if (4 & o && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var t in e) {
      r.d(n, t, function (o) {
        return e[o];
      }.bind(null, t));
    }
    return n;
  }, r.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(o, "a", o), o;
  }, r.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, r.p = "", r(r.s = 0);
}([function (e, o, r) {
  "use strict";

  function n() {
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
    });
  }

  function t() {
    $(".js_form").on("submit", function (e) {
      e.preventDefault();
      var o = {
        formData: $(e.target).serializeArray()
      };
      window.API.onFormSubmit(o, function () {
        console.log("Успешно!"), $(".container_form").css("display", "none"), $(".js_calback_form").css("display", "block");
      }, function (e) {
        console.group("Ошибка!"), e.forEach(function (e) {
          console.log("".concat(e.filedName, ": ").concat(e.message));
        }), console.groupEnd();
      });
    });
  }

  r.r(o), $(document).ready(function () {
    t(), n(), $(".js_show_specification").magnificPopup({
      type: "inline",
      preloader: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    });
  });
}]);