"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      n.d(r, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  function r() {
    $(".js_slider_main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      fade: !0
    });
  }

  function a(e) {
    var t = window.API.onCatalogPage(e),
        n = [];
    t.forEach(function (e) {
      n.push("        \n            <div class=\"item\">\n                <img src=\"".concat(e.src, "\" alt=\"\">\n                <p class=\"title\"><a href=\"\">").concat(e.title, "</a></p>\n                <p class=\"subcategory\">").concat(e.subcategory, "</p>\n                <p class=\"price\">").concat(e.price, "</p>\n            </div>\n        "));
    }), $(".catalog").html(n.join(" "));
  }

  function s() {
    a(1), $(".js_pages_numbers a").on("click", function (e) {
      e.preventDefault(), a(this.innerHTML), function (e) {
        $(".js_pages_numbers a").hasClass("js_active_page") && $(".js_pages_numbers a").removeClass("js_active_page"), $(e).hasClass("js_active_page") || $(e).addClass("js_active_page");
      }(this);
    });
  }

  function o() {
    $(".js_category_name h1").html("Обувь"), function () {
      var e = window.API.numberOfPages("Обувь"),
          t = ['<a href="" class="js_active_page">1</a>'];
      if (e > 1) for (var _n = 2; _n <= e; _n++) {
        t.push("<a href=\"\">".concat(_n, "</a>"));
      }
      $(".js_pages_numbers").html(t.join(" "));
    }(), s();
  }

  n.r(t), $(function () {
    r(), o();
  });
}]);