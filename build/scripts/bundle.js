"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(o) {
    if (n[o]) return n[o].exports;
    var s = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var s in e) {
      t.d(o, s, function (n) {
        return e[n];
      }.bind(null, s));
    }
    return o;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  "use strict";

  function o() {
    $(".js_slider_main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      fade: !0
    }), $(".js_slider_product_for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      asNavFor: ".js_slider_product_nav",
      swipe: !1
    }), $(".js_slider_product_nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".js_slider_product_for",
      arrows: !1,
      focusOnSelect: !0,
      swipe: !1
    }), $(".js_slider_interesting").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: !0,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          swipeToSlide: !0
        }
      }]
    });
  }

  function s(e) {
    var n = window.API.onCatalogPage(e),
        t = [];
    n.forEach(function (e) {
      t.push("        \n            <div class=\"item\" id=\"".concat(e.id, "\">\n                <img src=\"").concat(e.src, "\" alt=\"\">\n                <p class=\"title\"><a href=\"\">").concat(e.title, "</a></p>\n                <p class=\"subcategory\">").concat(e.subcategory, "</p>\n                <p class=\"price\">").concat(e.price, "</p>\n            </div>\n        "));
    }), $(".catalog").html(t.join(" "));
  }

  function r() {
    s(1), $(".js_pages_numbers a").on("click", function (e) {
      e.preventDefault(), s(this.innerHTML), function (e) {
        $(".js_pages_numbers a").hasClass("js_active_page") && $(".js_pages_numbers a").removeClass("js_active_page"), $(e).hasClass("js_active_page") || $(e).addClass("js_active_page");
      }(this);
    });
  }

  function i() {
    $(".js_category_name h1").html("Обувь"), function () {
      var e = window.API.numberOfPages("Обувь"),
          n = ['<a href="" class="js_active_page">1</a>'];
      if (e > 1) for (var _t = 2; _t <= e; _t++) {
        n.push("<a href=\"\">".concat(_t, "</a>"));
      }
      $(".js_pages_numbers").html(n.join(" "));
    }(), r();
  }

  function l() {
    var e = window.API.onCardProduct(1);
    !function (e) {
      $(".js_title_h1").html("<p>".concat(e.title, "</p>"));
    }(e), function (e) {
      $(".js_subcategory").html("<p>".concat(e.subcategory, "</p>"));
    }(e), function (e) {
      var n = [];
      e.colors.forEach(function (e) {
        n.push("        \n            <input type=\"radio\" name=\"color\" id=\"".concat(e.colorId, "\" value=\"").concat(e.color, "\">\n            <label for=\"").concat(e.colorId, "\">").concat(e.color, "</label>\n        "));
      }), $(".js_wrapper_content_color").html(n.join(" "));
    }(e), function (e) {
      var n = [];
      e.sizes.forEach(function (e) {
        n.push("        \n            <input type=\"radio\" name=\"color\" id=\"".concat(e.sizeId, "\" value=\"").concat(e.size, "\">\n            <label for=\"").concat(e.sizeId, "\">").concat(e.size, "</label>\n        "));
      }), $(".js_wrapper_content_size").html(n.join(" "));
    }(e), function (e) {
      $(".js_price").html(e.price);
    }(e), function (e) {
      $(".js_wrapper_material").html("<p class=\"content\">".concat(e.material, "</p>"));
    }(e), function (e) {
      $(".js_wrapper_content_country").html("<p class=\"content\">".concat(e.country, "</p>"));
    }(e), function (e) {
      var n = [];
      e.description.forEach(function (e) {
        n.push("        \n            <p class=\"content\">".concat(e, "</p>\n        "));
      }), $(".js_wrapper_content_description").html(n.join(" "));
    }(e), function (e) {
      var n = [];
      e.details.forEach(function (e) {
        n.push("        \n            <p class=\"content\">".concat(e, "</p>\n        "));
      }), $(".js_wrapper_content_details").html(arrDescription.join(" "));
    }(e), console.log("связь со с карточкой продукта установлена");
  }

  t.r(n), $(function () {
    o(), i(), $(".js_link_table_size").magnificPopup({
      type: "inline",
      preloader: !1,
      showCloseBtn: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    }), $(document).on("click", ".close", function (e) {
      e.preventDefault(), $.magnificPopup.close();
    }), l();
  });
}]);