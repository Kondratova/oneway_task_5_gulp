"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var o = {};

  function t(n) {
    if (o[n]) return o[n].exports;
    var l = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(l.exports, l, l.exports, t), l.l = !0, l.exports;
  }

  t.m = e, t.c = o, t.d = function (e, o, n) {
    t.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
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
    var n = Object.create(null);
    if (t.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var l in e) {
      t.d(n, l, function (o) {
        return e[o];
      }.bind(null, l));
    }
    return n;
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

  function n() {
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

  function l() {
    $(".js_form").on("submit", function (e) {
      e.preventDefault();
      var o = {
        formData: $(e.target).serializeArray()
      };
      window.API.onFormSubmit(o, function () {
        console.log("Успешно!"), $(".container_form").css("display", "none"), $(".js_massage_valid_mail p").remove(), $(".js_calback_form").css("display", "block"), function () {
          var e = $(".js_input_mail").val();

          if (null === localStorage.getItem("mail")) {
            var _o = JSON.stringify([e]);

            localStorage.setItem("mail", _o);
          } else {
            var _o2 = JSON.parse(localStorage.getItem("mail"));

            _o2.some(function (o) {
              return o === e;
            }) || (_o2.push("mailVal"), localStorage.setItem("mail", JSON.stringify(_o2)));
          }
        }();
      }, function (e) {
        console.group("Ошибка!"), e.forEach(function (e) {
          console.log("".concat(e.filedName, ": ").concat(e.message));
        }), console.groupEnd();
      });
    });
  }

  function i() {
    $(".js_massage_valid_mail p").remove();
  }

  function a(e) {
    $(".button").prop("disabled", e);
  }

  function r() {
    $(".js_input_mail").on("change", function () {
      var e = $(".js_input_mail").val();
      !1 === /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) ? (i(), $(".js_massage_valid_mail").append("<p>Введите корректный e-mail</p>"), a(!0)) : (i(), $(".js_massage_valid_mail").append("<p>E-mail верный</p>"), a(!1));
    });
  }

  function s() {
    null !== localStorage.getItem("mail") && JSON.parse(localStorage.getItem("mail")).forEach(function (e) {
      $("#js_mail_list").append(" <option value=\"".concat(e, "\" /> "));
    }), r();
  }

  function c() {
    $(document).on("click", ".js_close", function (e) {
      e.preventDefault(), $.magnificPopup.close();
    });
  }

  t.r(o), $(function () {
    l(), n(), $(".js_show_specification").magnificPopup({
      type: "inline",
      preloader: !1,
      showCloseBtn: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    }), c(), s();
  });
}]);