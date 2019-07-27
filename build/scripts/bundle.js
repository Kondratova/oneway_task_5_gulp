"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var o = {};

  function n(t) {
    if (o[t]) return o[t].exports;
    var l = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = e, n.c = o, n.d = function (e, o, t) {
    n.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: t
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, o) {
    if (1 & o && (e = n(e)), 8 & o) return e;
    if (4 & o && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (n.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var l in e) {
      n.d(t, l, function (o) {
        return e[o];
      }.bind(null, l));
    }
    return t;
  }, n.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(o, "a", o), o;
  }, n.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, n.p = "", n(n.s = 0);
}([function (e, o, n) {
  "use strict";

  function t() {
    $(".js_slider_1_for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      fade: !0,
      lazyLoad: "ondemand",
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
      lazyLoad: "ondemand",
      arrows: !1
    }), $(".js_slider_2").slick({
      dots: !0,
      infinite: !0,
      speed: 300,
      slidesToShow: 1,
      centerMode: !0,
      lazyLoad: "ondemand",
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

  function a() {
    $(".js_massage_valid_mail p").remove();
  }

  function i(e) {
    $(".button").prop("disabled", e);
  }

  function r() {
    $(".js_input_mail").on("change", function () {
      var e = $(".js_input_mail").val();
      !1 === /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) ? (a(), $(".js_massage_valid_mail").append("<p>Введите корректный e-mail</p>"), i(!0)) : (a(), $(".js_massage_valid_mail").append("<p>E-mail верный</p>"), i(!1));
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

  n.r(o), $(function () {
    l(), t(), $(".js_show_specification").magnificPopup({
      type: "inline",
      preloader: !1,
      showCloseBtn: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    }), c(), s();
  });
}]);