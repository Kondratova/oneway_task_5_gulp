"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

    function s(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
      l: !1,
      exports: {}
    };
        return e[r].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
  }

    s.m = e, s.c = t, s.d = function (e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
            get: r
    });
    }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
        }), 2 & t && "string" != typeof e) for (var o in e) {
            s.d(r, o, function (t) {
        return e[t];
            }.bind(null, o));
    }
        return r;
    }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
        return s.d(t, "a", t), t;
    }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 0);
}([function (e, t, s) {
  "use strict";

    function r(e) {
        var t = window.API.onCatalogPage(e);
        $(".catalog").html(t.map(function (e) {
            return "<div class=\"item\" id=\"".concat(e.id, "\">\n                <img src=\"").concat(e.src, "\" alt=\"\">\n                <p class=\"title\"><a href=\"\">").concat(e.title, "</a></p>\n                <p class=\"subcategory\">").concat(e.subcategory, "</p>\n                <p class=\"price\">").concat(e.price, "</p>\n            </div>");
        }));
    }

  function o() {
      r(1), $(".js_pages_numbers a").on("click", function (e) {
          e.preventDefault(), r(this.innerHTML), function (e) {
              $(".js_pages_numbers a").hasClass("js_active_page") && $(".js_pages_numbers a").removeClass("js_active_page"), $(e).hasClass("js_active_page") || $(e).addClass("js_active_page");
          }(this);
      });
  }

    function l() {
        $(".js_category_name h1").html("Обувь"), function () {
            var e = window.API.numberOfPages("Обувь"),
                t = ['<a href="" class="js_active_page">1</a>'];
            if (e > 1) for (var _s = 2; _s <= e; _s++) {
                t.push("<a href=\"\">".concat(_s, "</a>"));
            }
            $(".js_pages_numbers").html(t.join(" "));
        }(), o();
    }

    function i(e, t) {
        $(".js_slider_product_for").html(e.map(function (e) {
            return "<div class=\"slide\"><img src=\"".concat(e, "\" alt=\"\"></div>");
        })), $(".js_slider_product_nav").html(t.map(function (e) {
            return "<div class=\"slide\"><img src=\"".concat(e, "\" alt=\"\"></div>");
        })), $(".js_slider_product_for").slick({
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
    });
  }

    function n() {
    var e = window.API.onCardProduct(1);
        var t, s, r, o, l, n, c, a, p, d;
        return t = e.id, document.body.id = t, s = e.title, $(".js_title_h1").html("<p>".concat(s, "</p>")), r = e.subcategory, $(".js_subcategory").html("<p>".concat(r, "</p>")), o = e.colors, $(".js_wrapper_content_color").html(o.map(function (e) {
            return "<input type=\"radio\" name=\"color\" id=\"".concat(e.colorId, "\" value=\"").concat(e.color, "\">\n         <label for=\"").concat(e.colorId, "\">").concat(e.color, "</label>");
        })), l = e.sizes, $(".js_wrapper_content_size").html(l.map(function (e) {
            return "<input type=\"radio\" name=\"size\" id=\"".concat(e.sizeId, "\" value=\"").concat(e.size, "\">\n            <label for=\"").concat(e.sizeId, "\">").concat(e.size, "</label>");
        })), n = e.price, $(".js_price").html(n), c = e.material, $(".js_wrapper_content_material").html("<p class=\"content\">".concat(c, "</p>")), a = e.country, $(".js_wrapper_content_country").html("<p class=\"content\">".concat(a, "</p>")), p = e.description, $(".js_wrapper_content_description").html(p.map(function (e) {
            return "<p class=\"content\">".concat(e, "</p>");
        })), d = e.details, $(".js_wrapper_content_details").html(d.map(function (e) {
            return "<p class=\"content\">".concat(e, "</p>");
        })), i(e.srcBig, e.srcSmall), e;
  }

  function c() {
    var e = JSON.parse(localStorage.getItem("purchasedProducts"));
      null !== e && e.length && $(".js_link_basket").attr("data-before", "".concat(e.length));
  }

    function a(e) {
        $(".js_btn_buy_product").on("click", function (t) {
            t.preventDefault(), function (e) {
        if (null === localStorage.getItem("purchasedProducts")) {
          var _t = JSON.stringify([e]);

          localStorage.setItem("purchasedProducts", _t);
        } else {
          var _t2 = JSON.parse(localStorage.getItem("purchasedProducts"));

          _t2.push(e), localStorage.setItem("purchasedProducts", JSON.stringify(_t2));
        }
      }({
                id: e.id,
                title: e.title,
                subcategory: e.subcategory,
                price: e.price,
                src: e.srcSmall[0],
                color: $('input[name="color"]:checked').val(),
                size: $('input[name="size"]:checked').val()
            }), c();
    });
  }

    function p() {
        var e = JSON.parse(localStorage.getItem("purchasedProducts"));
        !function (e) {
            $(".selected_products").html(e.map(function (e) {
                return "<div class=\"item\" id=\"".concat(e.id, "\">\n                <img src=\"").concat(e.src, "\" alt=\"\">\n                <div class=\"info_item\">\n                    <p class=\"title\"><a href=\"\">").concat(e.title, "</a></p>\n                    <p class=\"subcategory\">").concat(e.subcategory, "</p>\n                    <p class=\"price\">").concat(e.price, "</p>\n                </div>\n            </div>");
            }));
        }(e), function (e) {
            $(".js_price").html(e.reduce(function (e, t) {
                return e + +t.price;
            }, 0) + " ");
        }(e);
    }

    s.r(t), $(function () {
        if (c(), $(".js_home_page").length && $(".js_slider_main").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !0
        }), $(".js_catalog").length && l(), $(".js_card_product").length) {
            var _e = n();

            $(".js_link_table_size").magnificPopup({
                type: "inline",
                preloader: !1,
                showCloseBtn: !1,
                callbacks: {
                    beforeOpen: function beforeOpen() {
                    }
                }
            }), $(document).on("click", ".close", function (e) {
                e.preventDefault(), $.magnificPopup.close();
            }), a(_e), $(".js_slider_interesting_card_product").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                swipeToSlide: !0,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        swipeToSlide: !0,
                        arrows: !1
                    }
                }]
            });
        }

        $(".js_checkout").length && (p(), $(".js_slider_interesting_checkout").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: !0,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: !0,
                    arrows: !1
                }
            }]
        }));
  });
}]);