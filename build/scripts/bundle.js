"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var o = {};

  function t(r) {
    if (o[r]) return o[r].exports;
    var n = o[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
  }

  t.m = e, t.c = o, t.d = function (e, o, r) {
    t.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: r
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, o) {
    if (1 & o && (e = t(e)), 8 & o) return e;
    if (4 & o && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var n in e) {
      t.d(r, n, function (o) {
        return e[o];
      }.bind(null, n));
    }
    return r;
  }, t.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(o, "a", o), o;
  }, t.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, t.p = "", t(t.s = 0);
}([function (e, o, t) {
  "use strict";

  function r() {
    $(".js_slider_1_for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
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

  function n() {
    $(".js_form").on("submit", function (e) {
      e.preventDefault();
      var o = {
        formData: $(e.target).serializeArray()
      };
      window.API.onFormSubmit(o, function () {
        console.log("Успешно!"), $(".container_form").css("display", "none"), $(".js_calback_form").css("display", "block"), function () {
          var e = $(".js_input_mail").val();

          if (null === localStorage.getItem("mail")) {
            var _o = JSON.stringify([e]);

            localStorage.setItem("mail", _o);
          } else {
            var _o2 = JSON.parse(localStorage.getItem("mail"));

            _o2.push("".concat(e)), localStorage.setItem("mail", JSON.stringify(_o2));
          }
        }();
      }, function (e) {
        console.group("Ошибка!"), e.forEach(function (e) {
          console.log("".concat(e.filedName, ": ").concat(e.message));
        }), console.groupEnd();
      });
    });
  }

  function l() {
    $(document).on("click", ".close", function (e) {
      e.preventDefault(), $.magnificPopup.close();
    });
  }

  t.r(o), $(document).ready(function () {
    n(), r(), $(".js_show_specification").magnificPopup({
      type: "inline",
      preloader: !1,
      showCloseBtn: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    }), l(), null === localStorage.getItem("mail") && JSON.parse(localStorage.getItem("mail"));
  });
}]);