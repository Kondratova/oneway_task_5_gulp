"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var s = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
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
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      n.d(o, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return o;
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
    var t = window.API.onCatalogPage(e),
        n = [];
    t.forEach(function (e) {
      n.push("        \n            <div class=\"item\" id=\"".concat(e.id, "\">\n                <img src=\"").concat(e.src, "\" alt=\"\">\n                <p class=\"title\"><a href=\"\">").concat(e.title, "</a></p>\n                <p class=\"subcategory\">").concat(e.subcategory, "</p>\n                <p class=\"price\">").concat(e.price, "</p>\n            </div>\n        "));
    }), $(".catalog").html(n.join(" "));
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
          t = ['<a href="" class="js_active_page">1</a>'];
      if (e > 1) for (var _n = 2; _n <= e; _n++) {
        t.push("<a href=\"\">".concat(_n, "</a>"));
      }
      $(".js_pages_numbers").html(t.join(" "));
    }(), r();
  }

  function l() {
    var e = window.API.onCardProduct(1);
    !function (e) {
      $(".js_title_h1").html("<p>".concat(e.title, "</p>"));
    }(e), function (e) {
      $(".js_subcategory").html("<p>".concat(e.subcategory, "</p>"));
    }(e), function (e) {
      var t = [];
      e.colors.forEach(function (e) {
        t.push("        \n            <input type=\"radio\" name=\"color\" id=\"".concat(e.colorId, "\" value=\"").concat(e.color, "\">\n            <label for=\"").concat(e.colorId, "\">").concat(e.color, "</label>\n        "));
      }), $(".js_wrapper_content_color").html(t.join(" "));
    }(e), function (e) {
      var t = [];
      e.sizes.forEach(function (e) {
        t.push("        \n            <input type=\"radio\" name=\"size\" id=\"".concat(e.sizeId, "\" value=\"").concat(e.size, "\">\n            <label for=\"").concat(e.sizeId, "\">").concat(e.size, "</label>\n        "));
      }), $(".js_wrapper_content_size").html(t.join(" "));
    }(e), function (e) {
      $(".js_price").html(e.price);
    }(e), function (e) {
      $(".js_wrapper_content_material").html("<p class=\"content\">".concat(e.material, "</p>"));
    }(e), function (e) {
      $(".js_wrapper_content_country").html("<p class=\"content\">".concat(e.country, "</p>"));
    }(e), function (e) {
      var t = [];
      e.description.forEach(function (e) {
        t.push("        \n            <p class=\"content\">".concat(e, "</p>\n        "));
      }), $(".js_wrapper_content_description").html(t.join(" "));
    }(e), function (e) {
      var t = [];
      e.details.forEach(function (e) {
        t.push("        \n            <p class=\"content\">".concat(e, "</p>\n        "));
      }), $(".js_wrapper_content_details").html(t.join(" "));
    }(e);
  }

  function c() {
    var e = JSON.parse(localStorage.getItem("purchasedProducts"));
    $(".js_link_basket").attr("data-before", "".concat(e.length - 1));
  }

  function a() {
    c(), $(".js_btn_buy_product").on("click", function (e) {
      e.preventDefault(), function (e) {
        if (null === localStorage.getItem("purchasedProducts")) {
          var _t = JSON.stringify([e]);

          localStorage.setItem("purchasedProducts", _t);
        } else {
          var _t2 = JSON.parse(localStorage.getItem("purchasedProducts"));

          _t2.push(e), localStorage.setItem("purchasedProducts", JSON.stringify(_t2));
        }
      }({
        colorProduct: $('input[name="color"]:checked').val(),
        sizeProduct: $('input[name="size"]:checked').val()
      }), c(), console.log("покупка работает");
    });
  }

  n.r(t), $(function () {
    o(), i(), $(".js_link_table_size").magnificPopup({
      type: "inline",
      preloader: !1,
      showCloseBtn: !1,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    }), $(document).on("click", ".close", function (e) {
      e.preventDefault(), $.magnificPopup.close();
    }), l(), a();
  });
}]);