"use strict";

(function ($) {
  var App = {
    SetBackground: function SetBackground() {
      $("[setBackground]").each(function () {
        var background = $(this).attr("setBackground");
        $(this).css({
          "background-image": "url(" + background + ")",
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "background-position": "center center"
        });
      });
      $("[setBackgroundRepeat]").each(function () {
        var background = $(this).attr("setBackgroundRepeat");
        $(this).css({
          "background-image": "url(" + background + ")",
          "background-repeat": "repeat"
        });
      });
    },
    EqualHeightElement: function EqualHeightElement(el) {
      var height = 0;
      var thisHeight = 0;
      $(el).each(function () {
        thisHeight = $(this).height();
        if (thisHeight > height) {
          height = thisHeight;
        }
      });
      $(el).height(height);
    },
    ScrollTo: function ScrollTo(y) {
      $("html, body").animate({
        scrollTop: y
      }, 1000);
    },
    Init: function Init() {
      App.ScrollTo();
      App.SetBackground();
    }
  };
  function InitSlider() {
    var heroSlide = new Swiper(".hero-banner .swiper-container", {
      speed: 1500,
      slidesPerView: 1,
      loopedSlides: 3,
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      observer: true,
      observeParents: true,
      navigation: {
        clickable: !0,
        nextEl: ".hero-banner .next",
        prevEl: ".hero-banner .prev"
      },
      scrollbar: {
        el: ".hero-banner .swiper-scrollbar"
      },
      pagination: {
        el: ".hero-banner .custom-pagination",
        type: "custom",
        renderCustom: function renderCustom(swiper, current, total) {
          return "<span>" + ("0" + current).slice(-2) + "</span>" + ("0" + total).slice(-2);
        }
      },
      on: {
        init: function init() {
          var activeIndex = this.activeIndex;
          var realIndex = this.slides.eq(activeIndex).attr("data-swiper-slide-index");
          console.log(this.slides.eq(activeIndex));
          $(".hero-banner .swiper-slide").removeClass("slide-prev slide-next");
          $('.hero-banner .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().addClass("slide-prev");
          $('.hero-banner .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().addClass("slide-next");
          var slideActive = ("0" + (parseInt(realIndex) + 1)).slice(-2);
          var nextTitle = $(".hero-banner .slide-next").find(".title").html();
          var nextImageUrl = $(".hero-banner .slide-next").attr("setbackground");
          console.log(nextImageUrl);
          var prevTitle = $(".hero-banner .slide-prev").find(".title").html();
          var prevImageUrl = $(".hero-banner .slide-prev").attr("setbackground");
          $(".hero-banner .swiper-btn .btn-prev").html("\n            <div class=\"image\">\n              <img src=\"".concat(prevImageUrl, "\" alt=\"\">\n            </div>\n            <div class=\"right\">\n              <p class=\"text\">prev</p>\n              <div class=\"title\">").concat(prevTitle, "</div>\n            </div>\n          "));
          $(".hero-banner .swiper-btn .real-index .number").html("".concat(slideActive));
          $(".hero-banner .swiper-btn .btn-next").html("\n          <div class=\"image\"><img src=\"".concat(nextImageUrl, "\" alt=\"\"></div>\n          <div class=\"right\">\n            <p class=\"text\">Next project</p>\n            <div class=\"title\">").concat(nextTitle, "</div>\n          </div>\n        "));
        },
        slideChange: function slideChange() {
          var activeIndex = this.activeIndex;
          var realIndex = this.slides.eq(activeIndex).attr("data-swiper-slide-index");
          $(".hero-banner .swiper-slide").removeClass("slide-prev slide-next");
          $('.hero-banner .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().addClass("slide-prev");
          $('.hero-banner .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().addClass("slide-next");
          var slideActive = ("0" + (parseInt(realIndex) + 1)).slice(-2);
          var nextTitle = $(".hero-banner .slide-next").find(".title").html();
          var nextImageUrl = $(".hero-banner .slide-next").attr("setbackground");
           console.log(nextImageUrl)
          var prevTitle = $(".hero-banner .slide-prev").find(".title").html();
          var prevImageUrl = $(".hero-banner .slide-prev").attr("setbackground");
          $(".hero-banner .swiper-btn .btn-prev").html("\n            <div class=\"image\">\n              <img src=\"".concat(prevImageUrl, "\" alt=\"\">\n            </div>\n            <div class=\"right\">\n              <p class=\"text\">prev</p>\n              <div class=\"title\">").concat(prevTitle, "</div>\n            </div>\n          "));
          $(".hero-banner .swiper-btn .real-index .number").html("".concat(slideActive));
          $(".hero-banner .swiper-btn .btn-next").html("\n          <div class=\"image\"><img src=\"".concat(nextImageUrl, "\" alt=\"\"></div>\n          <div class=\"right\">\n            <p class=\"text\">Next project</p>\n            <div class=\"title\">").concat(nextTitle, "</div>\n          </div>\n        "));
          $(".hero-banner .swiper-btn .real-index .number").removeClass("active");
          setTimeout(function () {
            $(".hero-banner .swiper-btn .real-index .number").addClass("active");
          }, 800);
        }
      }
    });
    $(".projects-slider .swiper-container").each(function (index, element) {
      var $this = $(this);
      $this.addClass("tri-instance-" + index);
      $this.parent().find(".swiper-prev").addClass("btn-prev-" + index);
      $this.parent().find(".swiper-next").addClass("btn-next-" + index);
      $this.parent().find(".custom-pagination").addClass("custom-pagination-" + index);
      $this.parent().find(".swiper-scrollbar").addClass("swiper-scrollbar-" + index);
      var swiper = new Swiper(".tri-instance-" + index, {
        speed: 1500,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 4,
        simulateTouch: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".btn-next-" + index,
          prevEl: ".btn-prev-" + index
        },
        scrollbar: {
          el: ".swiper-scrollbar-" + index
        },
        pagination: {
          el: ".custom-pagination-" + index,
          type: "custom",
          renderCustom: function renderCustom(swiper, current, total) {
            return "<span>" + ("0" + current).slice(-2) + "</span>" + ("0" + total).slice(-2);
          }
        },
        breakpoints: {
          992: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 1
          }
        }
      });
    });
    var ourMediaSlide = new Swiper(".home-our-media .swiper-container", {
      speed: 1500,
      slidesPerView: 3,
      spaceBetween: 0,
      autoplay: {
        delay: 7000
      },
      breakpoints: {
        992: {
          spaceBetween: 0,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        }
      },
      pagination: {
        el: ".home-our-media .swiper-pagination",
        clickable: !0,
        type: "bullets"
      }
    });
  }
  function Headers() {
    $(document).on("click", ".toggle-btn", function () {
      $(this).toggleClass("active");
      $(".mobile-nav-inner").toggleClass("active");
      $(".header .overlay").toggleClass("active");
      $(".header .close-nav-inner").toggleClass("active");
      $("body").toggleClass("overflow-hidden");
    });
    $(document).on("click", ".header .overlay", function () {
      $(this).removeClass("active");
      $(".mobile-nav-inner").removeClass("active");
      $(".toggle-btn").removeClass("active");
      $(".close-nav-inner").removeClass("active");
      $("body").removeClass("overflow-hidden");
    });
    $(document).on("click", ".header .close-nav-inner", function () {
      $(this).removeClass("active");
      $(".mobile-nav-inner").removeClass("active");
      $(".toggle-btn").removeClass("active");
      $(".overlay").removeClass("active");
      $("body").removeClass("overflow-hidden");
    });
  }
  //mapping
  function mappings() {
    if ($(".header").length) {
      var moveNav = new MappingListener({
        selector: ".header .menu",
        mobileWrapper: ".mobile-nav-inner",
        mobileMethod: "appendTo",
        desktopWrapper: ".header .logo",
        desktopMethod: "insertAfter",
        breakpoint: 1200
      }).watch();
    }
  }
  function accordion() {
    if ($(".accordions").length) {
      $(".accordion-item.active").find(".accordion-content").show();
      $(".accordion-item:first").addClass("active").find(".accordion-content").show();
      $(".accordion-heading").on("click", function () {
        if (!$(this).parent().is(".active")) {
          $(this).parent().toggleClass("active").children(".accordion-content").slideToggle(500).parent().siblings(".active").removeClass("active").children(".accordion-content").slideToggle(500);
          $(this).find(".arrow .txt").text("Show less");
        } else {
          $(this).parent().toggleClass("active");
          $(this).next().slideToggle(500);
          $(this).find(".arrow .txt").text("Show more");
        }
      });
    }
  }
  function myTabs() {
    $(".my-tabs").each(function () {
      var $this = $(this);
      var visibleElements = $(".tab-content:visible");
      var visibleTab = visibleElements.attr("class");
      console.log(visibleTab);
      // var activeTabIndex = $(".tab-content." + visibleTab).index();

      $this.find(".tabs-nav li:first").addClass("active");
      $this.find(".tab-container").find(".tab-content:first").show();
      $this.find(".tabs-nav li").click(function () {
        var corresponding = $(this).data("tab");
        $this.find(".tab-content").hide();
        $this.find(".tab-content." + corresponding).show();
        $this.find(".tabs-nav li").removeClass("active");
        $(this).addClass("active");
        $(".slick-container").slick("setPosition", 0);
      });
    });
  }
  function checkWidth() {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize >= 1200) {
      $(".sidebar-inner").removeAttr("style");
    }
    if (windowsize >= 1200) {
      $(".header .overlay").removeClass("active");
      $("body").removeClass("overflow-hidden");
    }
    if ($(".banner-subpage").length) {
      $(".header").addClass("header-1");
    }
  }
  function fixedNav() {
    var nav = $(".header");
    if (nav.length) {
      var offsetTop = nav.offset().top,
        TH = $(".header").height(),
        headerHeight = nav.height(),
        injectSpace = $("<div />", {
          height: headerHeight
        }).insertAfter(".header");
      injectSpace.hide();
      $(window).on("load scroll resize", function () {
        if ($(window).scrollTop() > 0) {
          nav.addClass("fixed");
          injectSpace.show();
        } else {
          nav.removeClass("fixed");
          injectSpace.hide();
        }
      });
    }
  }
  function adjustProductAmount() {
    $(document).on("click", ".plus", function () {
      $(this).parents(".choose-number").find(".input").val(+$(this).parents(".choose-number").find(".input").val() + 1);
      $(".woocommerce-cart-form .update-cart.btn").removeAttr("disabled");
    });
    $(document).on("click", ".minus", function () {
      if ($(this).parents(".choose-number").find(".input").val() > 1) {
        if ($(this).parents(".choose-number").find(".input").val() > 1) $(this).parents(".choose-number").find(".input").val(+$(this).parents(".choose-number").find(".input").val() - 1);
      }
    });
  }
  function scrollToTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    });
    $("#back-to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }
  function countUp() {
    if ($(".statistics").length) {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      };
      var counts = [];
      var options2 = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      };
      var counts2 = [];
      $(".counter-1").each(function () {
        var num = $(this).attr("data-count"); //end count
        var nuen = $(this).text();
        if (nuen === "") {
          nuen = 0;
        }
        counts.push(new CountUp(this, nuen, num, 0, 3, options));
      });
      if ($(".statistics-1").length) {
        var waypoint1 = new Waypoint({
          element: document.getElementsByClassName("statistics-1"),
          handler: function handler(direction) {
            if (direction == "up") {
              for (var i = 0; i < counts.length; i++) {
                counts[i].reset();
              }
            } else {
              for (var i = 0; i < counts.length; i++) {
                counts[i].start();
              }
            }
          },
          offset: "80%"
        });
      }
    }
  }
  function uploadPhoto() {
    $("input:file").on("change", function () {
      var target = $(this);
      var relatedTarget = target.parents(".upload-group").find(".file-name");
      var fileName = target[0].files[0].name;
      relatedTarget.val(fileName);
    });
    $(".upload-btn").on("click", function () {
      $(this).siblings("input:file").click();
    });
  }
  $(window).resize(checkWidth).trigger("resize");
  $(document).ready(function () {
    if ($("#loader-container").length) {
      $("#loader-container").fadeOut(1000);
    } else if ($("body.opacity-0").length) {
      $("body").removeClass("opacity-0");
      $("body").addClass("opacity-1");
    }
    App.Init();
    InitSlider();
    Headers();
    mappings();
    fixedNav();
    accordion();
    uploadPhoto();
    scrollToTop();
    adjustProductAmount();
    myTabs();
    checkWidth();
    $("[data-fancybox]").fancybox({
      closeExisting: true,
      loop: true,
      touch: false
    });
  });
})(jQuery);