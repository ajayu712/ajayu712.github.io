function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 155,
      vars: 0,
      consts: [[1, "navbar"], [2, "padding-left", "20px", "font-size", "30px"], ["routerLink", "/home", 2, "color", "white", "text-decoration", "none"], [2, "color", "red"], [2, "padding-right", "4rem"], ["routerLink", "/contact", 2, "color", "white", "text-decoration", "none"], [1, "bk-div"], [1, "card-main"], ["fxLayout", "row", "fxLayoutAlign", "start"], ["fxFlex", "40%", 1, "card", "pic-card", "card-1", "card-2"], [1, "card-header", 2, "height", "74px"], [2, "font-family", "lato", "font-size", "25px"], [2, "font-family", "lato"], [1, "card-body", "pic-body"], ["src", "assets/images/img.JPG", "alt", "Card image", 1, "card-img-bottom", 2, "height", "101.3%"], ["fxFlex", "60%", 1, "card", "about-card", "card-1", "card-2"], [1, "card-title", 2, "font-family", "lato", "font-size", "25px"], [1, "card-subtitle", 2, "font-family", "lato"], [1, "card-body"], [1, "card-text", 2, "font-family", "lato", "text-align", "justify", "margin-right", "10px"], [1, "firstcharacter"], [1, "card-footer"], ["href", "assets/documents/LTI_Resume.pdf", "download", "Resume", 2, "color", "white", "text-decoration", "none"], [1, "btn", "btn-style"], [1, "fa", "fa-download"], ["fxFlex", "100%", 1, "card", "question-card", "card-1", "card-2"], ["fxFlex", "100%", 1, "card-body", "card-1", "card-2", 2, "margin-right", "1%", "text-align", "center", "font-size", "large"], [1, "table"], [1, "table-borderless"], [1, "zoom"], ["src", "assets/images/cpp1_logo.png", "alt", "cpp_logo", 2, "height", "50px", "width", "50px"], ["src", "assets/images/java_logo.png", "alt", "java_logo", 2, "height", "60px", "width", "65px"], ["src", "assets/images/python_logo.png", "alt", "python_logo", 2, "height", "50px", "width", "50px"], ["src", "assets/images/html_logo.png", "alt", "html_logo", 2, "height", "50px", "width", "50px"], ["src", "assets/images/css_logo.png", "alt", "css_logo", 2, "height", "50px", "width", "50px"], ["src", "assets/images/javascript_logo.png", "alt", "javascript_logo", 2, "height", "45px", "width", "45px"], ["src", "assets/images/bs_logo.png", "alt", "bs_logo", 2, "height", "45px", "width", "45px"], ["src", "assets/images/angular_logo.png", "alt", "angular_logo", 2, "height", "50px", "width", "50x"], ["src", "assets/images/node_logo.png", "alt", "node_logo", 2, "height", "45px", "width", "45x"], ["src", "assets/images/sql_logo.png", "alt", "sql_logo", 2, "height", "45px", "width", "45x"], ["src", "assets/images/oraclesql_logo.png", "alt", "sql_logo", 2, "height", "50px", "width", "50x"], ["fxFlex", "100%", 1, "card-body", "card-1", "card-2", 2, "margin-right", "1%", "font-size", "large", "text-align", "center"], [2, "font-family", "lato", "text-align", "center"], [1, "table-borderless", "zoom"], ["src", "assets/images/lti_logo.jpg", "alt", "lti_logo", 2, "height", "100px", "width", "100x", "border-radius", "50%"], [2, "font-size", "11.5px"], ["fxFlex", "100%", 1, "card-body", "card-1", "card-2", 2, "text-align", "center", "font-size", "large"], ["src", "assets/images/cosing_logo.png", "alt", "coding", 2, "height", "50px", "width", "50x"], [1, "zoom", 2, "padding-left", "28px"], ["src", "assets/images/webDesign_logo.png", "alt", "webdesign", 2, "height", "50px", "width", "50x"], ["src", "assets/images/embcoding_logo.png", "alt", "embedded", 2, "height", "60px", "width", "60x"], ["src", "assets/images/football_logo.png", "alt", "football", 2, "height", "50px", "width", "50x"], ["src", "assets/images/travelling_icon.png", "alt", "travel", 2, "height", "50px", "width", "50x"], ["src", "assets/images/movies_icon.png", "alt", "movies", 2, "height", "50px", "width", "50x"], ["src", "assets/images/volunteering_icon.png", "alt", "volunteering", 2, "height", "60px", "width", "60x"], ["src", "assets/images/social_ser_icon.png", "alt", "social_service", 2, "height", "50px", "width", "50x"], [1, "footer", 2, "padding-top", "18px"], [2, "font-family", "lato", "letter-spacing", "1px"], ["aria-hidden", "true", 1, "fa", "fa-heart", 2, "color", "red"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ajay Upadhyaya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-subtitle", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "#riseandgrind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-subtitle", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "#whoAmI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " am an undergraduate with a major in Electronics Engineering. Talking about my skills I have been working on several projects in Electronics domain focusing mainly on Automation and comprising of some aspects of Internet of Things (IoT).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Apart from this I have not restricted my knowledge only to Electronics, I have been learning and practicing various technologies related to Web and Database Development.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Also, I am a football player and enthusiast with Manchester United being my favourite club. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \xA0Download Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Frequently Asked Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-subtitle", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "#youAskiAnswer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "My Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Where do I work?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Larsen & Toubro Infotech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " is a global technology consulting and digital solutions company helping more than ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "420 clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " succeed in a converging world.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " With operations in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "32 countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ", they go the extra mile for their clients and accelerate their digital transformation with its Mosaic platform enabling their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "analytics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "IoT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " journeys. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Interest & Hobbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Designed by AU with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    background: radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);\r\n    color: #fff;\r\n    font-family: Lato;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    letter-spacing: 3px;\r\n    position: sticky;\r\n    position: -webkit-sticky; \r\n    top: 0; \r\n    z-index: 1000; \r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    padding-right:1rem;\r\n}\r\n.bk-div[_ngcontent-%COMP%]{\r\n    height:155%;\r\n    background-color: #e6e6e6;\r\n}\r\n.card-main[_ngcontent-%COMP%]{\r\n    margin:80px;\r\n    margin-top:0px;\r\n    margin-bottom:0px;\r\n    padding-top:50px;\r\n    height:105%;\r\n}\r\n.pic-card[_ngcontent-%COMP%]{\r\n    \r\n    height:57.5%;\r\n    margin-left:5%;\r\n    margin-bottom:0%;\r\n    margin-right:0px;\r\n}\r\n.about-card[_ngcontent-%COMP%]{\r\n    \r\n    height:57.5%;\r\n    margin:5%;\r\n    margin-top:0%;\r\n}\r\n.card-img-bottom[_ngcontent-%COMP%]{\r\n    \r\n    width:100%;\r\n}\r\n.pic-body[_ngcontent-%COMP%]{\r\n    padding:0%;\r\n}\r\n.firstcharacter[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-family: Georgia;\r\n    font-size: 45px;\r\n    line-height: 40px;\r\n    \r\n    padding-right: 4px;\r\n    \r\n  }\r\n.btn-style[_ngcontent-%COMP%]{\r\n    font-family: lato;\r\n    background:radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);\r\n    color:white;\r\n    align-content: center;\r\n    margin-left:57%;\r\n}\r\n.btn-style[_ngcontent-%COMP%]:hover {\r\n    color:#ff0000;\r\n}\r\n.card-1[_ngcontent-%COMP%] {\r\nbox-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\ntransition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n.card-1[_ngcontent-%COMP%]:hover {\r\nbox-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n.card-2[_ngcontent-%COMP%] {\r\nbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n.question-card[_ngcontent-%COMP%]{\r\n    margin-left:3%;\r\n    margin-right: 3%;\r\n}\r\n.zoom[_ngcontent-%COMP%]{\r\n    transition: transform .2s;\r\n}\r\n.zoom[_ngcontent-%COMP%]:hover {  \r\n    transform: scale(1.3); \r\n  }\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    background:radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);;\r\n    color: white;\r\n    text-align: center;\r\n    margin: 0px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QixFQUFFLHlCQUF5QjtJQUNuRCxNQUFNLEVBQUUseUNBQXlDO0lBQ2pELGFBQWEsRUFBRSwrREFBK0Q7QUFDbEY7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBOztJQUVJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekI7QUFDRjtJQUNJLGlCQUFpQjtJQUNqQixzRUFBc0U7SUFDdEUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7QUFDQSxrRUFBa0U7QUFDbEUsK0NBQStDO0FBQy9DO0FBRUE7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0EsY0FDK0IsU0FBUyxFQUNMLGVBQWU7SUFDOUMscUJBQXFCO0VBQ3ZCO0FBQ0Y7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osc0VBQXNFO0lBQ3RFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCMwOTBhMGYgMTAwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxufVxyXG5zcGFue1xyXG4gICAgcGFkZGluZy1yaWdodDoxcmVtO1xyXG59XHJcbi5iay1kaXZ7XHJcbiAgICBoZWlnaHQ6MTU1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5jYXJkLW1haW57XHJcbiAgICBtYXJnaW46ODBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgaGVpZ2h0OjEwNSU7XHJcbn1cclxuLnBpYy1jYXJke1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6NTcuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1ib3R0b206MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG59XHJcbi5hYm91dC1jYXJke1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6NTcuNSU7XHJcbiAgICBtYXJnaW46NSU7XHJcbiAgICBtYXJnaW4tdG9wOjAlO1xyXG59XHJcbi5jYXJkLWltZy1ib3R0b217XHJcbiAgICAvKiBoZWlnaHQ6MjAlOyAqL1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4ucGljLWJvZHl7XHJcbiAgICBwYWRkaW5nOjAlO1xyXG59XHJcbi5maXJzdGNoYXJhY3RlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogNHB4OyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAzcHg7ICovXHJcbiAgfVxyXG4uYnRuLXN0eWxle1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSAwJSwjMDkwYTBmIDEwMCUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDo1NyU7XHJcbn1cclxuLmJ0bi1zdHlsZTpob3ZlciB7XHJcbiAgICBjb2xvcjojZmYwMDAwO1xyXG59XHJcblxyXG4uY2FyZC0xIHtcclxuYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxufVxyXG5cclxuLmNhcmQtMTpob3ZlciB7XHJcbmJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbn1cclxuLmNhcmQtMiB7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4ucXVlc3Rpb24tY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG4uem9vbXtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbn1cclxuLnpvb206aG92ZXIge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTsgXHJcbiAgfVxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICMxYjI3MzUgMCUsIzA5MGEwZiAxMDAlKTs7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-details/contact-details.component */
    "./src/app/contact-details/contact-details.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'contact',
      component: _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./contact-details/contact-details.component */
    "./src/app/contact-details/contact-details.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__["ContactDetailsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-details/contact-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/contact-details/contact-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactDetailsComponent */

  /***/
  function srcAppContactDetailsContactDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function () {
      return ContactDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var ContactDetailsComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailsComponent() {
        _classCallCheck(this, ContactDetailsComponent);
      }

      _createClass(ContactDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactDetailsComponent;
    }();

    ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) {
      return new (t || ContactDetailsComponent)();
    };

    ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactDetailsComponent,
      selectors: [["app-contact-details"]],
      decls: 83,
      vars: 0,
      consts: [[1, "navbar"], [2, "padding-left", "20px", "font-size", "30px"], ["routerLink", "/home", 2, "color", "white", "text-decoration", "none"], [2, "color", "red"], ["routerLink", "/about", 2, "color", "white", "text-decoration", "none"], [2, "padding-right", "4rem"], [1, "bk-div"], [1, "card-main"], ["fxFlex", "50%", 2, "padding-right", "8%"], [1, "head"], [1, "head2"], [1, "text"], [1, "text2"], ["href", "http://www.linkedin.com/in/ajayu712", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin-square", "icon", "zoom"], ["href", "https://www.facebook.com/ajay.upadhyaya.12/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook-square", "icon", "zoom"], ["href", "https://www.instagram.com/ajayu_712/?hl=en", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-instagram", "icon", "zoom"], ["href", "https://twitter.com/ajayu712", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-twitter-square", "icon", "zoom"], ["href", "https://github.com/ajayu712", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-github", "icon", "zoom"], ["href", "https://stackoverflow.com/users/13210043/ajay-upadhyaya", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-stack-overflow", "icon", "zoom"], ["href", ""], [1, "fab", "fa-hackerrank", "icon", "zoom"], ["fxFlex", "50%", 2, "padding-top", "130px", "padding-right", "5%"], [1, "container"], [1, "form-group"], ["type", "text", "id", "pwd", "placeholder", "Name", "name", "name", 1, "form-control"], ["type", "email", "id", "email", "placeholder", "Email", "name", "email", 1, "form-control"], ["id", "txtarea", "placeholder", "Message", "rows", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-style"], [1, "footer", 2, "padding-top", "18px"], [2, "font-family", "lato", "letter-spacing", "1px"], ["aria-hidden", "true", 1, "fa", "fa-heart", 2, "color", "red"]],
      template: function ContactDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Don't Be a Stranger ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " just say Hello. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Feel free to get in touch with me. I am always open to discussing new projects, innovative & creative ideas and also be a part of your visions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Need to contact? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ajayu712@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Get in touch! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "textarea", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Send Over");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Designed by AU with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"]],
      styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    background: radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);;\r\n    color: #fff;\r\n    font-family: Lato;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    letter-spacing: 3px;\r\n    position: sticky;\r\n    position: -webkit-sticky; \r\n    top: 0; \r\n    z-index: 1000; \r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    padding-right:1rem;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    background:radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);;\r\n    color: white;\r\n    text-align: center;\r\n    margin: 0px;\r\n }\r\n.bk-div[_ngcontent-%COMP%]{\r\n    height:85%;\r\n    background-color: #e6e6e6;\r\n}\r\n.card-main[_ngcontent-%COMP%]{\r\n    margin:80px;\r\n    margin-top:0px;\r\n    margin-bottom:0px;\r\n    padding-top:50px;\r\n    height:100%;\r\n    padding-left:5%;\r\n}\r\n.head[_ngcontent-%COMP%]{\r\n    font-size: 42px;\r\n    font-family: lato;\r\n    letter-spacing: 3px;\r\n    color:#ff1a1a;\r\n    \r\n    \r\n}\r\n.head2[_ngcontent-%COMP%]{\r\n    font-size: 42px;\r\n    font-family: lato;\r\n    letter-spacing: 3px;\r\n    \r\n    \r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    \r\n    font-family: lato;\r\n    font-size: small;\r\n    letter-spacing: 1px;\r\n    color:#999999;\r\n}\r\n.text2[_ngcontent-%COMP%]{\r\n    font-family: lato;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    color:#1a1a1a;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color:#1a1a1a;\r\n}\r\n.icon[_ngcontent-%COMP%]:hover{\r\n    color:#ff1a1a;\r\n}\r\n.zoom[_ngcontent-%COMP%]{\r\n    transition: transform .2s;\r\n}\r\n.zoom[_ngcontent-%COMP%]:hover {  \r\n    transform: scale(1.3); \r\n  }\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    font-family: lato;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    color:#b3b3b3;\r\n}\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    font-family: lato;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    color:#b3b3b3;\r\n}\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    font-family: lato;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    color:#b3b3b3;\r\n}\r\n[_ngcontent-%COMP%]::placeholder {\r\n    font-family: lato;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    color:#b3b3b3;\r\n}\r\n.btn-style[_ngcontent-%COMP%]{\r\n    font-family: lato;\r\n    background:radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);\r\n    color:white;\r\n    align-content: center;\r\n}\r\n.btn-style[_ngcontent-%COMP%]:hover {\r\n    color:#ff1a1a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHVFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBd0IsRUFBRSx5QkFBeUI7SUFDbkQsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxhQUFhLEVBQUUsK0RBQStEO0FBQ2xGO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixzRUFBc0U7SUFDdEUsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7QUFDQTtJQUNHLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0EsY0FDK0IsU0FBUyxFQUNMLGVBQWU7SUFDOUMscUJBQXFCO0VBQ3ZCO0FBQ0Y7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBTEE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBTEE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBTEE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWRldGFpbHMvY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCMwOTBhMGYgMTAwJSk7O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cclxuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn1cclxuc3BhbntcclxuICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcclxufSAgIFxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICMxYjI3MzUgMCUsIzA5MGEwZiAxMDAlKTs7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuIH1cclxuIC5iay1kaXZ7XHJcbiAgICBoZWlnaHQ6ODUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG5cclxuLmNhcmQtbWFpbntcclxuICAgIG1hcmdpbjo4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDo1JTtcclxufVxyXG4uaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIGNvbG9yOiNmZjFhMWE7XHJcbiAgICAvKiBib3JkZXI6c29saWQgMXB4OyAqL1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OjUlOyAqL1xyXG59XHJcbi5oZWFkMntcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIC8qIGJvcmRlcjpzb2xpZCAxcHg7ICovXHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6NSU7ICovXHJcbn1cclxuLnRleHR7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6NSU7ICovXHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxufVxyXG4udGV4dDJ7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjojMWExYTFhO1xyXG59XHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IzFhMWExYTtcclxufVxyXG4uaWNvbjpob3ZlcntcclxuICAgIGNvbG9yOiNmZjFhMWE7XHJcbn1cclxuLnpvb217XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG59XHJcbi56b29tOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFIDkgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IFxyXG4gIH1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjojYjNiM2IzO1xyXG59XHJcbi5idG4tc3R5bGV7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCMwOTBhMGYgMTAwJSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnRuLXN0eWxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiNmZjFhMWE7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-details',
          templateUrl: './contact-details.component.html',
          styleUrls: ['./contact-details.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 41,
      vars: 0,
      consts: [[1, "wrapper", 2, "height", "100%", "width", "100%", "clip", "auto", "position", "absolute", "overflow", "hidden"], ["id", "stars"], ["id", "stars2"], ["id", "stars3"], [1, "navbar", "navbar-b", "navbar-trans", "navbar-expand-md", "fixed-top", "navigation"], [1, "container", 2, "margin-left", "30px", "padding-top", "10px"], ["routerLink", "/home", 1, "navbar-brand", 2, "font-size", "30px", "color", "white"], [2, "color", "red"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarDefault", "aria-controls", "navbarDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], ["id", "navbarDefault", 1, "navbar-collapse", "collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "active"], ["routerLink", "/about", 1, "nav-link", 2, "color", "white"], ["routerLink", "/contact", 1, "nav-link", 2, "color", "white"], ["id", "title"], [1, "typewriter-text", 2, "color", "red"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Hello, I'm ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ajay ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Welcome To My ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Portfolio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background: radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    right: 0;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: Lato;\r\n    font-weight: 300;\r\n    font-size: 50px;\r\n    letter-spacing: 10px;\r\n    margin-top: -60px;\r\n    padding-left: 10px;\r\n}\r\n.navigation[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    color: #fff;\r\n    font-family: Lato;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    letter-spacing: 3px;\r\n\r\n}\r\n\r\n.typewriter-text[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 18em;\r\n    border-right: 2px solid rgba(255, 255, 255, 0.75);\r\n    white-space: nowrap;\r\n    -webkit-animation:blinkTextCursor 400ms steps(5) infinite normal;\r\n            animation:blinkTextCursor 400ms steps(5) infinite normal;\r\n  }\r\n#stars[_ngcontent-%COMP%] {\r\n    width: 1px;\r\n    height: 1px;\r\n    background: transparent;\r\n    -webkit-animation: animStar 50s linear infinite;\r\n            animation: animStar 50s linear infinite;\r\n    box-shadow: 779px 1331px #fff, 324px 42px #fff, 303px 586px #fff,\r\n    1312px 276px #fff, 451px 625px #fff, 521px 1931px #fff, 1087px 1871px #fff,\r\n    36px 1546px #fff, 132px 934px #fff, 1698px 901px #fff, 1418px 664px #fff,\r\n    1448px 1157px #fff, 1084px 232px #fff, 347px 1776px #fff, 1722px 243px #fff,\r\n    1629px 835px #fff, 479px 969px #fff, 1231px 960px #fff, 586px 384px #fff,\r\n    164px 527px #fff, 8px 646px #fff, 1150px 1126px #fff, 665px 1357px #fff,\r\n    1556px 1982px #fff, 1260px 1961px #fff, 1675px 1741px #fff,\r\n    1843px 1514px #fff, 718px 1628px #fff, 242px 1343px #fff, 1497px 1880px #fff,\r\n    1364px 230px #fff, 1739px 1302px #fff, 636px 959px #fff, 304px 686px #fff,\r\n    614px 751px #fff, 1935px 816px #fff, 1428px 60px #fff, 355px 335px #fff,\r\n    1594px 158px #fff, 90px 60px #fff, 1553px 162px #fff, 1239px 1825px #fff,\r\n    1945px 587px #fff, 749px 1785px #fff, 1987px 1172px #fff, 1301px 1237px #fff,\r\n    1039px 342px #fff, 1585px 1481px #fff, 995px 1048px #fff, 524px 932px #fff,\r\n    214px 413px #fff, 1701px 1300px #fff, 1037px 1613px #fff, 1871px 996px #fff,\r\n    1360px 1635px #fff, 1110px 1313px #fff, 412px 1783px #fff, 1949px 177px #fff,\r\n    903px 1854px #fff, 700px 1936px #fff, 378px 125px #fff, 308px 834px #fff,\r\n    1118px 962px #fff, 1350px 1929px #fff, 781px 1811px #fff, 561px 137px #fff,\r\n    757px 1148px #fff, 1670px 1979px #fff, 343px 739px #fff, 945px 795px #fff,\r\n    576px 1903px #fff, 1078px 1436px #fff, 1583px 450px #fff, 1366px 474px #fff,\r\n    297px 1873px #fff, 192px 162px #fff, 1624px 1633px #fff, 59px 453px #fff,\r\n    82px 1872px #fff, 1933px 498px #fff, 1966px 1974px #fff, 1975px 1688px #fff,\r\n    779px 314px #fff, 1858px 1543px #fff, 73px 1507px #fff, 1693px 975px #fff,\r\n    1683px 108px #fff, 1768px 1654px #fff, 654px 14px #fff, 494px 171px #fff,\r\n    1689px 1895px #fff, 1660px 263px #fff, 1031px 903px #fff, 1203px 1393px #fff,\r\n    1333px 1421px #fff, 1113px 41px #fff, 1206px 1645px #fff, 1325px 1635px #fff,\r\n    142px 388px #fff, 572px 215px #fff, 1535px 296px #fff, 1419px 407px #fff,\r\n    1379px 1003px #fff, 329px 469px #fff, 1791px 1652px #fff, 935px 1802px #fff,\r\n    1330px 1820px #fff, 421px 1933px #fff, 828px 365px #fff, 275px 316px #fff,\r\n    707px 960px #fff, 1605px 1554px #fff, 625px 58px #fff, 717px 1697px #fff,\r\n    1669px 246px #fff, 1925px 322px #fff, 1154px 1803px #fff, 1929px 295px #fff,\r\n    1248px 240px #fff, 1045px 1755px #fff, 166px 942px #fff, 1888px 1773px #fff,\r\n    678px 1963px #fff, 1370px 569px #fff, 1974px 1400px #fff, 1786px 460px #fff,\r\n    51px 307px #fff, 784px 1400px #fff, 730px 1258px #fff, 1712px 393px #fff,\r\n    416px 170px #fff, 1797px 1932px #fff, 572px 219px #fff, 1557px 1856px #fff,\r\n    218px 8px #fff, 348px 1334px #fff, 469px 413px #fff, 385px 1738px #fff,\r\n    1357px 1818px #fff, 240px 942px #fff, 248px 1847px #fff, 1535px 806px #fff,\r\n    236px 1514px #fff, 1429px 1556px #fff, 73px 1633px #fff, 1398px 1121px #fff,\r\n    671px 1301px #fff, 1404px 1663px #fff, 740px 1018px #fff, 1600px 377px #fff,\r\n    785px 514px #fff, 112px 1084px #fff, 1915px 1887px #fff, 1463px 1848px #fff,\r\n    687px 1115px #fff, 1268px 1768px #fff, 1729px 1425px #fff,\r\n    1284px 1022px #fff, 801px 974px #fff, 1975px 1317px #fff, 1354px 834px #fff,\r\n    1446px 1484px #fff, 1283px 1786px #fff, 11px 523px #fff, 1842px 236px #fff,\r\n    1355px 654px #fff, 429px 7px #fff, 1033px 1128px #fff, 157px 297px #fff,\r\n    545px 635px #fff, 52px 1080px #fff, 827px 1520px #fff, 1121px 490px #fff,\r\n    9px 309px #fff, 1744px 1586px #fff, 1014px 417px #fff, 1534px 524px #fff,\r\n    958px 552px #fff, 1403px 1496px #fff, 387px 703px #fff, 1522px 548px #fff,\r\n    1355px 282px #fff, 1532px 601px #fff, 1838px 790px #fff, 290px 259px #fff,\r\n    295px 598px #fff, 1601px 539px #fff, 1561px 1272px #fff, 34px 1922px #fff,\r\n    1024px 543px #fff, 467px 369px #fff, 722px 333px #fff, 1976px 1255px #fff,\r\n    766px 983px #fff, 1582px 1285px #fff, 12px 512px #fff, 617px 1410px #fff,\r\n    682px 577px #fff, 1334px 1438px #fff, 439px 327px #fff, 1617px 1661px #fff,\r\n    673px 129px #fff, 794px 941px #fff, 1386px 1902px #fff, 37px 1353px #fff,\r\n    1467px 1353px #fff, 416px 18px #fff, 187px 344px #fff, 200px 1898px #fff,\r\n    1491px 1619px #fff, 811px 347px #fff, 924px 1827px #fff, 945px 217px #fff,\r\n    1735px 1228px #fff, 379px 1890px #fff, 79px 761px #fff, 825px 1837px #fff,\r\n    1980px 1558px #fff, 1308px 1573px #fff, 1488px 1726px #fff,\r\n    382px 1208px #fff, 522px 595px #fff, 1277px 1898px #fff, 354px 552px #fff,\r\n    161px 1784px #fff, 614px 251px #fff, 526px 1576px #fff, 17px 212px #fff,\r\n    179px 996px #fff, 467px 1208px #fff, 1944px 1838px #fff, 1140px 1093px #fff,\r\n    858px 1007px #fff, 200px 1064px #fff, 423px 1964px #fff, 1945px 439px #fff,\r\n    1377px 689px #fff, 1120px 1437px #fff, 1876px 668px #fff, 907px 1324px #fff,\r\n    343px 1976px #fff, 1816px 1501px #fff, 1849px 177px #fff, 647px 91px #fff,\r\n    1984px 1012px #fff, 1336px 1300px #fff, 128px 648px #fff, 305px 1060px #fff,\r\n    1324px 826px #fff, 1263px 1314px #fff, 1801px 629px #fff, 1614px 1555px #fff,\r\n    1634px 90px #fff, 1603px 452px #fff, 891px 1984px #fff, 1556px 1906px #fff,\r\n    121px 68px #fff, 1676px 1714px #fff, 516px 936px #fff, 1947px 1492px #fff,\r\n    1455px 1519px #fff, 45px 602px #fff, 205px 1039px #fff, 793px 172px #fff,\r\n    1562px 1739px #fff, 1056px 110px #fff, 1512px 379px #fff, 1795px 1621px #fff,\r\n    1848px 607px #fff, 262px 1719px #fff, 477px 991px #fff, 483px 883px #fff,\r\n    1239px 1197px #fff, 1496px 647px #fff, 1649px 25px #fff, 1491px 1946px #fff,\r\n    119px 996px #fff, 179px 1472px #fff, 1341px 808px #fff, 1565px 1700px #fff,\r\n    407px 1544px #fff, 1754px 357px #fff, 1288px 981px #fff, 902px 1997px #fff,\r\n    1755px 1668px #fff, 186px 877px #fff, 1202px 1882px #fff, 461px 1213px #fff,\r\n    1400px 748px #fff, 1969px 1899px #fff, 809px 522px #fff, 514px 1219px #fff,\r\n    374px 275px #fff, 938px 1973px #fff, 357px 552px #fff, 144px 1722px #fff,\r\n    1572px 912px #fff, 402px 1858px #fff, 1544px 1195px #fff, 667px 1257px #fff,\r\n    727px 1496px #fff, 993px 232px #fff, 1772px 313px #fff, 1040px 1590px #fff,\r\n    1204px 1973px #fff, 1268px 79px #fff, 1555px 1048px #fff, 986px 1707px #fff,\r\n    978px 1710px #fff, 713px 360px #fff, 407px 863px #fff, 461px 736px #fff,\r\n    284px 1608px #fff, 103px 430px #fff, 1283px 1319px #fff, 977px 1186px #fff,\r\n    1966px 1516px #fff, 1287px 1129px #fff, 70px 1098px #fff, 1189px 889px #fff,\r\n    1126px 1734px #fff, 309px 1292px #fff, 879px 764px #fff, 65px 473px #fff,\r\n    1003px 1959px #fff, 658px 791px #fff, 402px 1576px #fff, 35px 622px #fff,\r\n    529px 1589px #fff, 164px 666px #fff, 1876px 1290px #fff, 1541px 526px #fff,\r\n    270px 1297px #fff, 440px 865px #fff, 1500px 802px #fff, 182px 1754px #fff,\r\n    1264px 892px #fff, 272px 1249px #fff, 1289px 1535px #fff, 190px 1646px #fff,\r\n    955px 242px #fff, 1456px 1597px #fff, 1727px 1983px #fff, 635px 801px #fff,\r\n    226px 455px #fff, 1396px 1710px #fff, 849px 1863px #fff, 237px 1264px #fff,\r\n    839px 140px #fff, 1122px 735px #fff, 1280px 15px #fff, 1318px 242px #fff,\r\n    1819px 1148px #fff, 333px 1392px #fff, 1949px 553px #fff, 1878px 1332px #fff,\r\n    467px 548px #fff, 1812px 1082px #fff, 1067px 193px #fff, 243px 156px #fff,\r\n    483px 1616px #fff, 1714px 933px #fff, 759px 1800px #fff, 1822px 995px #fff,\r\n    1877px 572px #fff, 581px 1084px #fff, 107px 732px #fff, 642px 1837px #fff,\r\n    166px 1493px #fff, 1555px 198px #fff, 819px 307px #fff, 947px 345px #fff,\r\n    827px 224px #fff, 927px 1394px #fff, 540px 467px #fff, 1093px 405px #fff,\r\n    1140px 927px #fff, 130px 529px #fff, 33px 1980px #fff, 1147px 1663px #fff,\r\n    1616px 1436px #fff, 528px 710px #fff, 798px 1100px #fff, 505px 1480px #fff,\r\n    899px 641px #fff, 1909px 1949px #fff, 1311px 964px #fff, 979px 1301px #fff,\r\n    1393px 969px #fff, 1793px 1886px #fff, 292px 357px #fff, 1196px 1718px #fff,\r\n    1290px 1994px #fff, 537px 1973px #fff, 1181px 1674px #fff,\r\n    1740px 1566px #fff, 1307px 265px #fff, 922px 522px #fff, 1892px 472px #fff,\r\n    384px 1746px #fff, 392px 1098px #fff, 647px 548px #fff, 390px 1498px #fff,\r\n    1246px 138px #fff, 730px 876px #fff, 192px 1472px #fff, 1790px 1789px #fff,\r\n    928px 311px #fff, 1253px 1647px #fff, 747px 1921px #fff, 1561px 1025px #fff,\r\n    1533px 1292px #fff, 1985px 195px #fff, 728px 729px #fff, 1712px 1936px #fff,\r\n    512px 1717px #fff, 1528px 483px #fff, 313px 1642px #fff, 281px 1849px #fff,\r\n    1212px 799px #fff, 435px 1191px #fff, 1422px 611px #fff, 1718px 1964px #fff,\r\n    411px 944px #fff, 210px 636px #fff, 1502px 1295px #fff, 1434px 349px #fff,\r\n    769px 60px #fff, 747px 1053px #fff, 789px 504px #fff, 1436px 1264px #fff,\r\n    1893px 1225px #fff, 1394px 1788px #fff, 1108px 1317px #fff,\r\n    1673px 1395px #fff, 854px 1010px #fff, 1705px 80px #fff, 1858px 148px #fff,\r\n    1729px 344px #fff, 1388px 664px #fff, 895px 406px #fff, 1479px 157px #fff,\r\n    1441px 1157px #fff, 552px 1900px #fff, 516px 364px #fff, 1647px 189px #fff,\r\n    1427px 1071px #fff, 785px 729px #fff, 1080px 1710px #fff, 504px 204px #fff,\r\n    1177px 1622px #fff, 657px 34px #fff, 1296px 1099px #fff, 248px 180px #fff,\r\n    1212px 1568px #fff, 667px 1562px #fff, 695px 841px #fff, 1608px 1247px #fff,\r\n    751px 882px #fff, 87px 167px #fff, 607px 1368px #fff, 1363px 1203px #fff,\r\n    1836px 317px #fff, 1668px 1703px #fff, 830px 1154px #fff, 1721px 1398px #fff,\r\n    1601px 1280px #fff, 976px 874px #fff, 1743px 254px #fff, 1020px 1815px #fff,\r\n    1670px 1766px #fff, 1890px 735px #fff, 1379px 136px #fff, 1864px 695px #fff,\r\n    206px 965px #fff, 1404px 1932px #fff, 1923px 1360px #fff, 247px 682px #fff,\r\n    519px 1708px #fff, 645px 750px #fff, 1164px 1204px #fff, 834px 323px #fff,\r\n    172px 1350px #fff, 213px 972px #fff, 1837px 190px #fff, 285px 1806px #fff,\r\n    1047px 1299px #fff, 1548px 825px #fff, 1730px 324px #fff, 1346px 1909px #fff,\r\n    772px 270px #fff, 345px 1190px #fff, 478px 1433px #fff, 1479px 25px #fff,\r\n    1994px 1830px #fff, 1744px 732px #fff, 20px 1635px #fff, 690px 1795px #fff,\r\n    1594px 569px #fff, 579px 245px #fff, 1398px 733px #fff, 408px 1352px #fff,\r\n    1774px 120px #fff, 1152px 1370px #fff, 1698px 1810px #fff, 710px 1450px #fff,\r\n    665px 286px #fff, 493px 1720px #fff, 786px 5px #fff, 637px 1140px #fff,\r\n    764px 324px #fff, 927px 310px #fff, 938px 1424px #fff, 1884px 744px #fff,\r\n    913px 462px #fff, 1831px 1936px #fff, 1527px 249px #fff, 36px 1381px #fff,\r\n    1597px 581px #fff, 1530px 355px #fff, 949px 459px #fff, 799px 828px #fff,\r\n    242px 1471px #fff, 654px 797px #fff, 796px 594px #fff, 1365px 678px #fff,\r\n    752px 23px #fff, 1630px 541px #fff, 982px 72px #fff, 1733px 1831px #fff,\r\n    21px 412px #fff, 775px 998px #fff, 335px 1945px #fff, 264px 583px #fff,\r\n    158px 1311px #fff, 528px 164px #fff, 1978px 574px #fff, 717px 1203px #fff,\r\n    734px 1591px #fff, 1555px 820px #fff, 16px 1943px #fff, 1625px 1177px #fff,\r\n    1236px 690px #fff, 1585px 1590px #fff, 1737px 1728px #fff, 721px 698px #fff,\r\n    1804px 1186px #fff, 166px 980px #fff, 1850px 230px #fff, 330px 1712px #fff,\r\n    95px 797px #fff, 1948px 1078px #fff, 469px 939px #fff, 1269px 1899px #fff,\r\n    955px 1220px #fff, 1137px 1075px #fff, 312px 1293px #fff, 986px 1762px #fff,\r\n    1103px 1238px #fff, 428px 1993px #fff, 355px 570px #fff, 977px 1836px #fff,\r\n    1395px 1092px #fff, 276px 913px #fff, 1743px 656px #fff, 773px 502px #fff,\r\n    1686px 1322px #fff, 1516px 1945px #fff, 1334px 501px #fff, 266px 156px #fff,\r\n    455px 655px #fff, 798px 72px #fff, 1059px 1259px #fff, 1402px 1687px #fff,\r\n    236px 1329px #fff, 1455px 786px #fff, 146px 1228px #fff, 1851px 823px #fff,\r\n    1062px 100px #fff, 1220px 953px #fff, 20px 1826px #fff, 36px 1063px #fff,\r\n    1525px 338px #fff, 790px 1521px #fff, 741px 1099px #fff, 288px 1489px #fff,\r\n    700px 1060px #fff, 390px 1071px #fff, 411px 1036px #fff, 1853px 1072px #fff,\r\n    1446px 1085px #fff, 1164px 874px #fff, 924px 925px #fff, 291px 271px #fff,\r\n    1257px 1964px #fff, 1580px 1352px #fff, 1507px 1216px #fff, 211px 956px #fff,\r\n    985px 1195px #fff, 975px 1640px #fff, 518px 101px #fff, 663px 1395px #fff,\r\n    914px 532px #fff, 145px 1320px #fff, 69px 1397px #fff, 982px 523px #fff,\r\n    257px 725px #fff, 1599px 831px #fff, 1636px 1513px #fff, 1250px 1158px #fff,\r\n    1132px 604px #fff, 183px 102px #fff, 1057px 318px #fff, 1247px 1835px #fff,\r\n    1983px 1110px #fff, 1077px 1455px #fff, 921px 1770px #fff, 806px 1350px #fff,\r\n    1938px 1992px #fff, 855px 1260px #fff, 902px 1345px #fff, 658px 1908px #fff,\r\n    1845px 679px #fff, 712px 1482px #fff, 595px 950px #fff, 1784px 1992px #fff,\r\n    1847px 1785px #fff, 691px 1004px #fff, 175px 1179px #fff, 1666px 1911px #fff,\r\n    41px 61px #fff, 971px 1080px #fff, 1830px 1450px #fff, 1351px 1518px #fff,\r\n    1257px 99px #fff, 1395px 1498px #fff, 1117px 252px #fff, 1779px 597px #fff,\r\n    1346px 729px #fff, 1108px 1144px #fff, 402px 691px #fff, 72px 496px #fff,\r\n    1673px 1604px #fff, 1497px 974px #fff, 1865px 1664px #fff, 88px 806px #fff,\r\n    918px 77px #fff, 244px 1118px #fff, 256px 1820px #fff, 1851px 1840px #fff,\r\n    605px 1851px #fff, 634px 383px #fff, 865px 37px #fff, 943px 1024px #fff,\r\n    1951px 177px #fff, 1097px 523px #fff, 985px 1700px #fff, 1243px 122px #fff,\r\n    768px 1070px #fff, 468px 194px #fff, 320px 1867px #fff, 1850px 185px #fff,\r\n    380px 1616px #fff, 468px 1294px #fff, 1122px 1743px #fff, 884px 299px #fff,\r\n    1300px 1917px #fff, 1860px 396px #fff, 1270px 990px #fff, 529px 733px #fff,\r\n    1975px 1347px #fff, 1885px 685px #fff, 226px 506px #fff, 651px 878px #fff,\r\n    1323px 680px #fff, 1284px 680px #fff, 238px 1967px #fff, 911px 174px #fff,\r\n    1111px 521px #fff, 1150px 85px #fff, 794px 502px #fff, 484px 1856px #fff,\r\n    1809px 368px #fff, 112px 953px #fff, 590px 1009px #fff, 1655px 311px #fff,\r\n    100px 1026px #fff, 1803px 352px #fff, 865px 306px #fff, 1077px 1019px #fff,\r\n    1335px 872px #fff, 1647px 1298px #fff, 1233px 1387px #fff, 698px 1036px #fff,\r\n    659px 1860px #fff, 388px 1412px #fff, 1212px 458px #fff, 755px 1468px #fff,\r\n    696px 1654px #fff, 1144px 60px #fff;\r\n}\r\n#stars[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2000px;\r\n    width: 1px;\r\n    height: 1px;\r\n    background: transparent;\r\n    box-shadow: 779px 1331px #fff, 324px 42px #fff, 303px 586px #fff,\r\n    1312px 276px #fff, 451px 625px #fff, 521px 1931px #fff, 1087px 1871px #fff,\r\n    36px 1546px #fff, 132px 934px #fff, 1698px 901px #fff, 1418px 664px #fff,\r\n    1448px 1157px #fff, 1084px 232px #fff, 347px 1776px #fff, 1722px 243px #fff,\r\n    1629px 835px #fff, 479px 969px #fff, 1231px 960px #fff, 586px 384px #fff,\r\n    164px 527px #fff, 8px 646px #fff, 1150px 1126px #fff, 665px 1357px #fff,\r\n    1556px 1982px #fff, 1260px 1961px #fff, 1675px 1741px #fff,\r\n    1843px 1514px #fff, 718px 1628px #fff, 242px 1343px #fff, 1497px 1880px #fff,\r\n    1364px 230px #fff, 1739px 1302px #fff, 636px 959px #fff, 304px 686px #fff,\r\n    614px 751px #fff, 1935px 816px #fff, 1428px 60px #fff, 355px 335px #fff,\r\n    1594px 158px #fff, 90px 60px #fff, 1553px 162px #fff, 1239px 1825px #fff,\r\n    1945px 587px #fff, 749px 1785px #fff, 1987px 1172px #fff, 1301px 1237px #fff,\r\n    1039px 342px #fff, 1585px 1481px #fff, 995px 1048px #fff, 524px 932px #fff,\r\n    214px 413px #fff, 1701px 1300px #fff, 1037px 1613px #fff, 1871px 996px #fff,\r\n    1360px 1635px #fff, 1110px 1313px #fff, 412px 1783px #fff, 1949px 177px #fff,\r\n    903px 1854px #fff, 700px 1936px #fff, 378px 125px #fff, 308px 834px #fff,\r\n    1118px 962px #fff, 1350px 1929px #fff, 781px 1811px #fff, 561px 137px #fff,\r\n    757px 1148px #fff, 1670px 1979px #fff, 343px 739px #fff, 945px 795px #fff,\r\n    576px 1903px #fff, 1078px 1436px #fff, 1583px 450px #fff, 1366px 474px #fff,\r\n    297px 1873px #fff, 192px 162px #fff, 1624px 1633px #fff, 59px 453px #fff,\r\n    82px 1872px #fff, 1933px 498px #fff, 1966px 1974px #fff, 1975px 1688px #fff,\r\n    779px 314px #fff, 1858px 1543px #fff, 73px 1507px #fff, 1693px 975px #fff,\r\n    1683px 108px #fff, 1768px 1654px #fff, 654px 14px #fff, 494px 171px #fff,\r\n    1689px 1895px #fff, 1660px 263px #fff, 1031px 903px #fff, 1203px 1393px #fff,\r\n    1333px 1421px #fff, 1113px 41px #fff, 1206px 1645px #fff, 1325px 1635px #fff,\r\n    142px 388px #fff, 572px 215px #fff, 1535px 296px #fff, 1419px 407px #fff,\r\n    1379px 1003px #fff, 329px 469px #fff, 1791px 1652px #fff, 935px 1802px #fff,\r\n    1330px 1820px #fff, 421px 1933px #fff, 828px 365px #fff, 275px 316px #fff,\r\n    707px 960px #fff, 1605px 1554px #fff, 625px 58px #fff, 717px 1697px #fff,\r\n    1669px 246px #fff, 1925px 322px #fff, 1154px 1803px #fff, 1929px 295px #fff,\r\n    1248px 240px #fff, 1045px 1755px #fff, 166px 942px #fff, 1888px 1773px #fff,\r\n    678px 1963px #fff, 1370px 569px #fff, 1974px 1400px #fff, 1786px 460px #fff,\r\n    51px 307px #fff, 784px 1400px #fff, 730px 1258px #fff, 1712px 393px #fff,\r\n    416px 170px #fff, 1797px 1932px #fff, 572px 219px #fff, 1557px 1856px #fff,\r\n    218px 8px #fff, 348px 1334px #fff, 469px 413px #fff, 385px 1738px #fff,\r\n    1357px 1818px #fff, 240px 942px #fff, 248px 1847px #fff, 1535px 806px #fff,\r\n    236px 1514px #fff, 1429px 1556px #fff, 73px 1633px #fff, 1398px 1121px #fff,\r\n    671px 1301px #fff, 1404px 1663px #fff, 740px 1018px #fff, 1600px 377px #fff,\r\n    785px 514px #fff, 112px 1084px #fff, 1915px 1887px #fff, 1463px 1848px #fff,\r\n    687px 1115px #fff, 1268px 1768px #fff, 1729px 1425px #fff,\r\n    1284px 1022px #fff, 801px 974px #fff, 1975px 1317px #fff, 1354px 834px #fff,\r\n    1446px 1484px #fff, 1283px 1786px #fff, 11px 523px #fff, 1842px 236px #fff,\r\n    1355px 654px #fff, 429px 7px #fff, 1033px 1128px #fff, 157px 297px #fff,\r\n    545px 635px #fff, 52px 1080px #fff, 827px 1520px #fff, 1121px 490px #fff,\r\n    9px 309px #fff, 1744px 1586px #fff, 1014px 417px #fff, 1534px 524px #fff,\r\n    958px 552px #fff, 1403px 1496px #fff, 387px 703px #fff, 1522px 548px #fff,\r\n    1355px 282px #fff, 1532px 601px #fff, 1838px 790px #fff, 290px 259px #fff,\r\n    295px 598px #fff, 1601px 539px #fff, 1561px 1272px #fff, 34px 1922px #fff,\r\n    1024px 543px #fff, 467px 369px #fff, 722px 333px #fff, 1976px 1255px #fff,\r\n    766px 983px #fff, 1582px 1285px #fff, 12px 512px #fff, 617px 1410px #fff,\r\n    682px 577px #fff, 1334px 1438px #fff, 439px 327px #fff, 1617px 1661px #fff,\r\n    673px 129px #fff, 794px 941px #fff, 1386px 1902px #fff, 37px 1353px #fff,\r\n    1467px 1353px #fff, 416px 18px #fff, 187px 344px #fff, 200px 1898px #fff,\r\n    1491px 1619px #fff, 811px 347px #fff, 924px 1827px #fff, 945px 217px #fff,\r\n    1735px 1228px #fff, 379px 1890px #fff, 79px 761px #fff, 825px 1837px #fff,\r\n    1980px 1558px #fff, 1308px 1573px #fff, 1488px 1726px #fff,\r\n    382px 1208px #fff, 522px 595px #fff, 1277px 1898px #fff, 354px 552px #fff,\r\n    161px 1784px #fff, 614px 251px #fff, 526px 1576px #fff, 17px 212px #fff,\r\n    179px 996px #fff, 467px 1208px #fff, 1944px 1838px #fff, 1140px 1093px #fff,\r\n    858px 1007px #fff, 200px 1064px #fff, 423px 1964px #fff, 1945px 439px #fff,\r\n    1377px 689px #fff, 1120px 1437px #fff, 1876px 668px #fff, 907px 1324px #fff,\r\n    343px 1976px #fff, 1816px 1501px #fff, 1849px 177px #fff, 647px 91px #fff,\r\n    1984px 1012px #fff, 1336px 1300px #fff, 128px 648px #fff, 305px 1060px #fff,\r\n    1324px 826px #fff, 1263px 1314px #fff, 1801px 629px #fff, 1614px 1555px #fff,\r\n    1634px 90px #fff, 1603px 452px #fff, 891px 1984px #fff, 1556px 1906px #fff,\r\n    121px 68px #fff, 1676px 1714px #fff, 516px 936px #fff, 1947px 1492px #fff,\r\n    1455px 1519px #fff, 45px 602px #fff, 205px 1039px #fff, 793px 172px #fff,\r\n    1562px 1739px #fff, 1056px 110px #fff, 1512px 379px #fff, 1795px 1621px #fff,\r\n    1848px 607px #fff, 262px 1719px #fff, 477px 991px #fff, 483px 883px #fff,\r\n    1239px 1197px #fff, 1496px 647px #fff, 1649px 25px #fff, 1491px 1946px #fff,\r\n    119px 996px #fff, 179px 1472px #fff, 1341px 808px #fff, 1565px 1700px #fff,\r\n    407px 1544px #fff, 1754px 357px #fff, 1288px 981px #fff, 902px 1997px #fff,\r\n    1755px 1668px #fff, 186px 877px #fff, 1202px 1882px #fff, 461px 1213px #fff,\r\n    1400px 748px #fff, 1969px 1899px #fff, 809px 522px #fff, 514px 1219px #fff,\r\n    374px 275px #fff, 938px 1973px #fff, 357px 552px #fff, 144px 1722px #fff,\r\n    1572px 912px #fff, 402px 1858px #fff, 1544px 1195px #fff, 667px 1257px #fff,\r\n    727px 1496px #fff, 993px 232px #fff, 1772px 313px #fff, 1040px 1590px #fff,\r\n    1204px 1973px #fff, 1268px 79px #fff, 1555px 1048px #fff, 986px 1707px #fff,\r\n    978px 1710px #fff, 713px 360px #fff, 407px 863px #fff, 461px 736px #fff,\r\n    284px 1608px #fff, 103px 430px #fff, 1283px 1319px #fff, 977px 1186px #fff,\r\n    1966px 1516px #fff, 1287px 1129px #fff, 70px 1098px #fff, 1189px 889px #fff,\r\n    1126px 1734px #fff, 309px 1292px #fff, 879px 764px #fff, 65px 473px #fff,\r\n    1003px 1959px #fff, 658px 791px #fff, 402px 1576px #fff, 35px 622px #fff,\r\n    529px 1589px #fff, 164px 666px #fff, 1876px 1290px #fff, 1541px 526px #fff,\r\n    270px 1297px #fff, 440px 865px #fff, 1500px 802px #fff, 182px 1754px #fff,\r\n    1264px 892px #fff, 272px 1249px #fff, 1289px 1535px #fff, 190px 1646px #fff,\r\n    955px 242px #fff, 1456px 1597px #fff, 1727px 1983px #fff, 635px 801px #fff,\r\n    226px 455px #fff, 1396px 1710px #fff, 849px 1863px #fff, 237px 1264px #fff,\r\n    839px 140px #fff, 1122px 735px #fff, 1280px 15px #fff, 1318px 242px #fff,\r\n    1819px 1148px #fff, 333px 1392px #fff, 1949px 553px #fff, 1878px 1332px #fff,\r\n    467px 548px #fff, 1812px 1082px #fff, 1067px 193px #fff, 243px 156px #fff,\r\n    483px 1616px #fff, 1714px 933px #fff, 759px 1800px #fff, 1822px 995px #fff,\r\n    1877px 572px #fff, 581px 1084px #fff, 107px 732px #fff, 642px 1837px #fff,\r\n    166px 1493px #fff, 1555px 198px #fff, 819px 307px #fff, 947px 345px #fff,\r\n    827px 224px #fff, 927px 1394px #fff, 540px 467px #fff, 1093px 405px #fff,\r\n    1140px 927px #fff, 130px 529px #fff, 33px 1980px #fff, 1147px 1663px #fff,\r\n    1616px 1436px #fff, 528px 710px #fff, 798px 1100px #fff, 505px 1480px #fff,\r\n    899px 641px #fff, 1909px 1949px #fff, 1311px 964px #fff, 979px 1301px #fff,\r\n    1393px 969px #fff, 1793px 1886px #fff, 292px 357px #fff, 1196px 1718px #fff,\r\n    1290px 1994px #fff, 537px 1973px #fff, 1181px 1674px #fff,\r\n    1740px 1566px #fff, 1307px 265px #fff, 922px 522px #fff, 1892px 472px #fff,\r\n    384px 1746px #fff, 392px 1098px #fff, 647px 548px #fff, 390px 1498px #fff,\r\n    1246px 138px #fff, 730px 876px #fff, 192px 1472px #fff, 1790px 1789px #fff,\r\n    928px 311px #fff, 1253px 1647px #fff, 747px 1921px #fff, 1561px 1025px #fff,\r\n    1533px 1292px #fff, 1985px 195px #fff, 728px 729px #fff, 1712px 1936px #fff,\r\n    512px 1717px #fff, 1528px 483px #fff, 313px 1642px #fff, 281px 1849px #fff,\r\n    1212px 799px #fff, 435px 1191px #fff, 1422px 611px #fff, 1718px 1964px #fff,\r\n    411px 944px #fff, 210px 636px #fff, 1502px 1295px #fff, 1434px 349px #fff,\r\n    769px 60px #fff, 747px 1053px #fff, 789px 504px #fff, 1436px 1264px #fff,\r\n    1893px 1225px #fff, 1394px 1788px #fff, 1108px 1317px #fff,\r\n    1673px 1395px #fff, 854px 1010px #fff, 1705px 80px #fff, 1858px 148px #fff,\r\n    1729px 344px #fff, 1388px 664px #fff, 895px 406px #fff, 1479px 157px #fff,\r\n    1441px 1157px #fff, 552px 1900px #fff, 516px 364px #fff, 1647px 189px #fff,\r\n    1427px 1071px #fff, 785px 729px #fff, 1080px 1710px #fff, 504px 204px #fff,\r\n    1177px 1622px #fff, 657px 34px #fff, 1296px 1099px #fff, 248px 180px #fff,\r\n    1212px 1568px #fff, 667px 1562px #fff, 695px 841px #fff, 1608px 1247px #fff,\r\n    751px 882px #fff, 87px 167px #fff, 607px 1368px #fff, 1363px 1203px #fff,\r\n    1836px 317px #fff, 1668px 1703px #fff, 830px 1154px #fff, 1721px 1398px #fff,\r\n    1601px 1280px #fff, 976px 874px #fff, 1743px 254px #fff, 1020px 1815px #fff,\r\n    1670px 1766px #fff, 1890px 735px #fff, 1379px 136px #fff, 1864px 695px #fff,\r\n    206px 965px #fff, 1404px 1932px #fff, 1923px 1360px #fff, 247px 682px #fff,\r\n    519px 1708px #fff, 645px 750px #fff, 1164px 1204px #fff, 834px 323px #fff,\r\n    172px 1350px #fff, 213px 972px #fff, 1837px 190px #fff, 285px 1806px #fff,\r\n    1047px 1299px #fff, 1548px 825px #fff, 1730px 324px #fff, 1346px 1909px #fff,\r\n    772px 270px #fff, 345px 1190px #fff, 478px 1433px #fff, 1479px 25px #fff,\r\n    1994px 1830px #fff, 1744px 732px #fff, 20px 1635px #fff, 690px 1795px #fff,\r\n    1594px 569px #fff, 579px 245px #fff, 1398px 733px #fff, 408px 1352px #fff,\r\n    1774px 120px #fff, 1152px 1370px #fff, 1698px 1810px #fff, 710px 1450px #fff,\r\n    665px 286px #fff, 493px 1720px #fff, 786px 5px #fff, 637px 1140px #fff,\r\n    764px 324px #fff, 927px 310px #fff, 938px 1424px #fff, 1884px 744px #fff,\r\n    913px 462px #fff, 1831px 1936px #fff, 1527px 249px #fff, 36px 1381px #fff,\r\n    1597px 581px #fff, 1530px 355px #fff, 949px 459px #fff, 799px 828px #fff,\r\n    242px 1471px #fff, 654px 797px #fff, 796px 594px #fff, 1365px 678px #fff,\r\n    752px 23px #fff, 1630px 541px #fff, 982px 72px #fff, 1733px 1831px #fff,\r\n    21px 412px #fff, 775px 998px #fff, 335px 1945px #fff, 264px 583px #fff,\r\n    158px 1311px #fff, 528px 164px #fff, 1978px 574px #fff, 717px 1203px #fff,\r\n    734px 1591px #fff, 1555px 820px #fff, 16px 1943px #fff, 1625px 1177px #fff,\r\n    1236px 690px #fff, 1585px 1590px #fff, 1737px 1728px #fff, 721px 698px #fff,\r\n    1804px 1186px #fff, 166px 980px #fff, 1850px 230px #fff, 330px 1712px #fff,\r\n    95px 797px #fff, 1948px 1078px #fff, 469px 939px #fff, 1269px 1899px #fff,\r\n    955px 1220px #fff, 1137px 1075px #fff, 312px 1293px #fff, 986px 1762px #fff,\r\n    1103px 1238px #fff, 428px 1993px #fff, 355px 570px #fff, 977px 1836px #fff,\r\n    1395px 1092px #fff, 276px 913px #fff, 1743px 656px #fff, 773px 502px #fff,\r\n    1686px 1322px #fff, 1516px 1945px #fff, 1334px 501px #fff, 266px 156px #fff,\r\n    455px 655px #fff, 798px 72px #fff, 1059px 1259px #fff, 1402px 1687px #fff,\r\n    236px 1329px #fff, 1455px 786px #fff, 146px 1228px #fff, 1851px 823px #fff,\r\n    1062px 100px #fff, 1220px 953px #fff, 20px 1826px #fff, 36px 1063px #fff,\r\n    1525px 338px #fff, 790px 1521px #fff, 741px 1099px #fff, 288px 1489px #fff,\r\n    700px 1060px #fff, 390px 1071px #fff, 411px 1036px #fff, 1853px 1072px #fff,\r\n    1446px 1085px #fff, 1164px 874px #fff, 924px 925px #fff, 291px 271px #fff,\r\n    1257px 1964px #fff, 1580px 1352px #fff, 1507px 1216px #fff, 211px 956px #fff,\r\n    985px 1195px #fff, 975px 1640px #fff, 518px 101px #fff, 663px 1395px #fff,\r\n    914px 532px #fff, 145px 1320px #fff, 69px 1397px #fff, 982px 523px #fff,\r\n    257px 725px #fff, 1599px 831px #fff, 1636px 1513px #fff, 1250px 1158px #fff,\r\n    1132px 604px #fff, 183px 102px #fff, 1057px 318px #fff, 1247px 1835px #fff,\r\n    1983px 1110px #fff, 1077px 1455px #fff, 921px 1770px #fff, 806px 1350px #fff,\r\n    1938px 1992px #fff, 855px 1260px #fff, 902px 1345px #fff, 658px 1908px #fff,\r\n    1845px 679px #fff, 712px 1482px #fff, 595px 950px #fff, 1784px 1992px #fff,\r\n    1847px 1785px #fff, 691px 1004px #fff, 175px 1179px #fff, 1666px 1911px #fff,\r\n    41px 61px #fff, 971px 1080px #fff, 1830px 1450px #fff, 1351px 1518px #fff,\r\n    1257px 99px #fff, 1395px 1498px #fff, 1117px 252px #fff, 1779px 597px #fff,\r\n    1346px 729px #fff, 1108px 1144px #fff, 402px 691px #fff, 72px 496px #fff,\r\n    1673px 1604px #fff, 1497px 974px #fff, 1865px 1664px #fff, 88px 806px #fff,\r\n    918px 77px #fff, 244px 1118px #fff, 256px 1820px #fff, 1851px 1840px #fff,\r\n    605px 1851px #fff, 634px 383px #fff, 865px 37px #fff, 943px 1024px #fff,\r\n    1951px 177px #fff, 1097px 523px #fff, 985px 1700px #fff, 1243px 122px #fff,\r\n    768px 1070px #fff, 468px 194px #fff, 320px 1867px #fff, 1850px 185px #fff,\r\n    380px 1616px #fff, 468px 1294px #fff, 1122px 1743px #fff, 884px 299px #fff,\r\n    1300px 1917px #fff, 1860px 396px #fff, 1270px 990px #fff, 529px 733px #fff,\r\n    1975px 1347px #fff, 1885px 685px #fff, 226px 506px #fff, 651px 878px #fff,\r\n    1323px 680px #fff, 1284px 680px #fff, 238px 1967px #fff, 911px 174px #fff,\r\n    1111px 521px #fff, 1150px 85px #fff, 794px 502px #fff, 484px 1856px #fff,\r\n    1809px 368px #fff, 112px 953px #fff, 590px 1009px #fff, 1655px 311px #fff,\r\n    100px 1026px #fff, 1803px 352px #fff, 865px 306px #fff, 1077px 1019px #fff,\r\n    1335px 872px #fff, 1647px 1298px #fff, 1233px 1387px #fff, 698px 1036px #fff,\r\n    659px 1860px #fff, 388px 1412px #fff, 1212px 458px #fff, 755px 1468px #fff,\r\n    696px 1654px #fff, 1144px 60px #fff;\r\n}\r\n#stars2[_ngcontent-%COMP%] {\r\n    width: 2px;\r\n    height: 2px;\r\n    background: transparent;\r\n    -webkit-animation: animStar 100s linear infinite;\r\n            animation: animStar 100s linear infinite;\r\n    box-shadow: 1448px 320px #fff, 1775px 1663px #fff, 332px 1364px #fff,\r\n    878px 340px #fff, 569px 1832px #fff, 1422px 1684px #fff, 1946px 1907px #fff,\r\n    121px 979px #fff, 1044px 1069px #fff, 463px 381px #fff, 423px 112px #fff,\r\n    523px 1179px #fff, 779px 654px #fff, 1398px 694px #fff, 1085px 1464px #fff,\r\n    1599px 1869px #fff, 801px 1882px #fff, 779px 1231px #fff, 552px 932px #fff,\r\n    1057px 1196px #fff, 282px 1280px #fff, 496px 1986px #fff, 1833px 1120px #fff,\r\n    1802px 1293px #fff, 6px 1696px #fff, 412px 1902px #fff, 605px 438px #fff,\r\n    24px 1212px #fff, 234px 1320px #fff, 544px 344px #fff, 1107px 170px #fff,\r\n    1603px 196px #fff, 905px 648px #fff, 68px 1458px #fff, 649px 1969px #fff,\r\n    744px 675px #fff, 1127px 478px #fff, 714px 1814px #fff, 1486px 526px #fff,\r\n    270px 1636px #fff, 1931px 149px #fff, 1807px 378px #fff, 8px 390px #fff,\r\n    1415px 699px #fff, 1473px 1211px #fff, 1590px 141px #fff, 270px 1705px #fff,\r\n    69px 1423px #fff, 1108px 1053px #fff, 1946px 128px #fff, 371px 371px #fff,\r\n    1490px 220px #fff, 357px 1885px #fff, 363px 363px #fff, 1896px 1256px #fff,\r\n    1979px 1050px #fff, 947px 1342px #fff, 1754px 242px #fff, 514px 974px #fff,\r\n    65px 1477px #fff, 1840px 547px #fff, 950px 695px #fff, 459px 1150px #fff,\r\n    1124px 1502px #fff, 481px 940px #fff, 680px 839px #fff, 797px 1169px #fff,\r\n    1977px 1491px #fff, 734px 1724px #fff, 210px 298px #fff, 816px 628px #fff,\r\n    686px 770px #fff, 1721px 267px #fff, 1663px 511px #fff, 1481px 1141px #fff,\r\n    582px 248px #fff, 1308px 953px #fff, 628px 657px #fff, 897px 1535px #fff,\r\n    270px 931px #fff, 791px 467px #fff, 1336px 1732px #fff, 1013px 1653px #fff,\r\n    1911px 956px #fff, 587px 816px #fff, 83px 456px #fff, 930px 1478px #fff,\r\n    1587px 1694px #fff, 614px 1200px #fff, 302px 1782px #fff, 1711px 1432px #fff,\r\n    443px 904px #fff, 1666px 714px #fff, 1588px 1167px #fff, 273px 1075px #fff,\r\n    1679px 461px #fff, 721px 664px #fff, 1202px 10px #fff, 166px 1126px #fff,\r\n    331px 1628px #fff, 430px 1565px #fff, 1585px 509px #fff, 640px 38px #fff,\r\n    822px 837px #fff, 1760px 1664px #fff, 1122px 1458px #fff, 398px 131px #fff,\r\n    689px 285px #fff, 460px 652px #fff, 1627px 365px #fff, 348px 1648px #fff,\r\n    819px 1946px #fff, 981px 1917px #fff, 323px 76px #fff, 979px 684px #fff,\r\n    887px 536px #fff, 1348px 1596px #fff, 1055px 666px #fff, 1402px 1797px #fff,\r\n    1300px 1055px #fff, 937px 238px #fff, 1474px 1815px #fff, 1144px 1710px #fff,\r\n    1629px 1087px #fff, 911px 919px #fff, 771px 819px #fff, 403px 720px #fff,\r\n    163px 736px #fff, 1062px 238px #fff, 1774px 818px #fff, 1874px 1178px #fff,\r\n    1177px 699px #fff, 1244px 1244px #fff, 1371px 58px #fff, 564px 1515px #fff,\r\n    1824px 487px #fff, 929px 702px #fff, 394px 1348px #fff, 1161px 641px #fff,\r\n    219px 1841px #fff, 358px 941px #fff, 140px 1759px #fff, 1019px 1345px #fff,\r\n    274px 436px #fff, 1433px 1605px #fff, 1798px 1426px #fff, 294px 1848px #fff,\r\n    1681px 1877px #fff, 1344px 1824px #fff, 1439px 1632px #fff,\r\n    161px 1012px #fff, 1308px 588px #fff, 1789px 582px #fff, 721px 1910px #fff,\r\n    318px 218px #fff, 607px 319px #fff, 495px 535px #fff, 1552px 1575px #fff,\r\n    1562px 67px #fff, 403px 926px #fff, 1096px 1800px #fff, 1814px 1709px #fff,\r\n    1882px 1831px #fff, 533px 46px #fff, 823px 969px #fff, 530px 165px #fff,\r\n    1030px 352px #fff, 1681px 313px #fff, 338px 115px #fff, 1607px 211px #fff,\r\n    1718px 1184px #fff, 1589px 659px #fff, 278px 355px #fff, 464px 1464px #fff,\r\n    1165px 277px #fff, 950px 694px #fff, 1746px 293px #fff, 793px 911px #fff,\r\n    528px 773px #fff, 1883px 1694px #fff, 748px 182px #fff, 1924px 1531px #fff,\r\n    100px 636px #fff, 1473px 1445px #fff, 1264px 1244px #fff, 850px 1377px #fff,\r\n    987px 1976px #fff, 933px 1761px #fff, 922px 1270px #fff, 500px 396px #fff,\r\n    1324px 8px #fff, 1967px 1814px #fff, 1072px 1401px #fff, 961px 37px #fff,\r\n    156px 81px #fff, 1915px 502px #fff, 1076px 1846px #fff, 152px 1669px #fff,\r\n    986px 1529px #fff, 1667px 1137px #fff;\r\n}\r\n#stars2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2000px;\r\n    width: 2px;\r\n    height: 2px;\r\n    background: transparent;\r\n    box-shadow: 1448px 320px #fff, 1775px 1663px #fff, 332px 1364px #fff,\r\n    878px 340px #fff, 569px 1832px #fff, 1422px 1684px #fff, 1946px 1907px #fff,\r\n    121px 979px #fff, 1044px 1069px #fff, 463px 381px #fff, 423px 112px #fff,\r\n    523px 1179px #fff, 779px 654px #fff, 1398px 694px #fff, 1085px 1464px #fff,\r\n    1599px 1869px #fff, 801px 1882px #fff, 779px 1231px #fff, 552px 932px #fff,\r\n    1057px 1196px #fff, 282px 1280px #fff, 496px 1986px #fff, 1833px 1120px #fff,\r\n    1802px 1293px #fff, 6px 1696px #fff, 412px 1902px #fff, 605px 438px #fff,\r\n    24px 1212px #fff, 234px 1320px #fff, 544px 344px #fff, 1107px 170px #fff,\r\n    1603px 196px #fff, 905px 648px #fff, 68px 1458px #fff, 649px 1969px #fff,\r\n    744px 675px #fff, 1127px 478px #fff, 714px 1814px #fff, 1486px 526px #fff,\r\n    270px 1636px #fff, 1931px 149px #fff, 1807px 378px #fff, 8px 390px #fff,\r\n    1415px 699px #fff, 1473px 1211px #fff, 1590px 141px #fff, 270px 1705px #fff,\r\n    69px 1423px #fff, 1108px 1053px #fff, 1946px 128px #fff, 371px 371px #fff,\r\n    1490px 220px #fff, 357px 1885px #fff, 363px 363px #fff, 1896px 1256px #fff,\r\n    1979px 1050px #fff, 947px 1342px #fff, 1754px 242px #fff, 514px 974px #fff,\r\n    65px 1477px #fff, 1840px 547px #fff, 950px 695px #fff, 459px 1150px #fff,\r\n    1124px 1502px #fff, 481px 940px #fff, 680px 839px #fff, 797px 1169px #fff,\r\n    1977px 1491px #fff, 734px 1724px #fff, 210px 298px #fff, 816px 628px #fff,\r\n    686px 770px #fff, 1721px 267px #fff, 1663px 511px #fff, 1481px 1141px #fff,\r\n    582px 248px #fff, 1308px 953px #fff, 628px 657px #fff, 897px 1535px #fff,\r\n    270px 931px #fff, 791px 467px #fff, 1336px 1732px #fff, 1013px 1653px #fff,\r\n    1911px 956px #fff, 587px 816px #fff, 83px 456px #fff, 930px 1478px #fff,\r\n    1587px 1694px #fff, 614px 1200px #fff, 302px 1782px #fff, 1711px 1432px #fff,\r\n    443px 904px #fff, 1666px 714px #fff, 1588px 1167px #fff, 273px 1075px #fff,\r\n    1679px 461px #fff, 721px 664px #fff, 1202px 10px #fff, 166px 1126px #fff,\r\n    331px 1628px #fff, 430px 1565px #fff, 1585px 509px #fff, 640px 38px #fff,\r\n    822px 837px #fff, 1760px 1664px #fff, 1122px 1458px #fff, 398px 131px #fff,\r\n    689px 285px #fff, 460px 652px #fff, 1627px 365px #fff, 348px 1648px #fff,\r\n    819px 1946px #fff, 981px 1917px #fff, 323px 76px #fff, 979px 684px #fff,\r\n    887px 536px #fff, 1348px 1596px #fff, 1055px 666px #fff, 1402px 1797px #fff,\r\n    1300px 1055px #fff, 937px 238px #fff, 1474px 1815px #fff, 1144px 1710px #fff,\r\n    1629px 1087px #fff, 911px 919px #fff, 771px 819px #fff, 403px 720px #fff,\r\n    163px 736px #fff, 1062px 238px #fff, 1774px 818px #fff, 1874px 1178px #fff,\r\n    1177px 699px #fff, 1244px 1244px #fff, 1371px 58px #fff, 564px 1515px #fff,\r\n    1824px 487px #fff, 929px 702px #fff, 394px 1348px #fff, 1161px 641px #fff,\r\n    219px 1841px #fff, 358px 941px #fff, 140px 1759px #fff, 1019px 1345px #fff,\r\n    274px 436px #fff, 1433px 1605px #fff, 1798px 1426px #fff, 294px 1848px #fff,\r\n    1681px 1877px #fff, 1344px 1824px #fff, 1439px 1632px #fff,\r\n    161px 1012px #fff, 1308px 588px #fff, 1789px 582px #fff, 721px 1910px #fff,\r\n    318px 218px #fff, 607px 319px #fff, 495px 535px #fff, 1552px 1575px #fff,\r\n    1562px 67px #fff, 403px 926px #fff, 1096px 1800px #fff, 1814px 1709px #fff,\r\n    1882px 1831px #fff, 533px 46px #fff, 823px 969px #fff, 530px 165px #fff,\r\n    1030px 352px #fff, 1681px 313px #fff, 338px 115px #fff, 1607px 211px #fff,\r\n    1718px 1184px #fff, 1589px 659px #fff, 278px 355px #fff, 464px 1464px #fff,\r\n    1165px 277px #fff, 950px 694px #fff, 1746px 293px #fff, 793px 911px #fff,\r\n    528px 773px #fff, 1883px 1694px #fff, 748px 182px #fff, 1924px 1531px #fff,\r\n    100px 636px #fff, 1473px 1445px #fff, 1264px 1244px #fff, 850px 1377px #fff,\r\n    987px 1976px #fff, 933px 1761px #fff, 922px 1270px #fff, 500px 396px #fff,\r\n    1324px 8px #fff, 1967px 1814px #fff, 1072px 1401px #fff, 961px 37px #fff,\r\n    156px 81px #fff, 1915px 502px #fff, 1076px 1846px #fff, 152px 1669px #fff,\r\n    986px 1529px #fff, 1667px 1137px #fff;\r\n}\r\n#stars3[_ngcontent-%COMP%] {\r\n    width: 3px;\r\n    height: 3px;\r\n    background: transparent;\r\n    -webkit-animation: animStar 150s linear infinte;\r\n            animation: animStar 150s linear infinte;\r\n    box-shadow: 387px 1878px #fff, 760px 1564px #fff, 1487px 999px #fff,\r\n    948px 1828px #fff, 1977px 1001px #fff, 1284px 1963px #fff, 656px 284px #fff,\r\n    1268px 1635px #fff, 1820px 598px #fff, 642px 1900px #fff, 296px 57px #fff,\r\n    921px 1620px #fff, 476px 1858px #fff, 658px 613px #fff, 1171px 1363px #fff,\r\n    1419px 283px #fff, 1037px 731px #fff, 503px 663px #fff, 1562px 463px #fff,\r\n    383px 1197px #fff, 1171px 1233px #fff, 876px 1768px #fff, 856px 1615px #fff,\r\n    1375px 1924px #fff, 1725px 918px #fff, 952px 119px #fff, 768px 1212px #fff,\r\n    992px 1462px #fff, 1929px 717px #fff, 1947px 755px #fff, 1818px 1123px #fff,\r\n    1896px 1672px #fff, 460px 198px #fff, 256px 271px #fff, 752px 544px #fff,\r\n    1222px 1859px #fff, 1851px 443px #fff, 313px 1858px #fff, 709px 446px #fff,\r\n    1546px 697px #fff, 674px 1155px #fff, 1112px 130px #fff, 355px 1790px #fff,\r\n    1496px 974px #fff, 1696px 480px #fff, 1316px 1265px #fff, 1645px 1063px #fff,\r\n    1182px 237px #fff, 427px 1582px #fff, 859px 253px #fff, 458px 939px #fff,\r\n    1517px 1644px #fff, 1943px 60px #fff, 212px 1650px #fff, 966px 1786px #fff,\r\n    473px 712px #fff, 130px 76px #fff, 1417px 1186px #fff, 909px 1580px #fff,\r\n    1913px 762px #fff, 204px 1143px #fff, 1998px 1057px #fff, 1468px 1301px #fff,\r\n    144px 1676px #fff, 21px 1601px #fff, 382px 1362px #fff, 912px 753px #fff,\r\n    1488px 1405px #fff, 802px 156px #fff, 174px 550px #fff, 338px 1366px #fff,\r\n    1197px 774px #fff, 602px 486px #fff, 682px 1877px #fff, 348px 1503px #fff,\r\n    407px 1139px #fff, 950px 1400px #fff, 922px 1139px #fff, 1697px 293px #fff,\r\n    1238px 1281px #fff, 1038px 1197px #fff, 376px 1889px #fff,\r\n    1255px 1680px #fff, 1008px 1316px #fff, 1538px 1447px #fff,\r\n    1186px 874px #fff, 1967px 640px #fff, 1341px 19px #fff, 29px 1732px #fff,\r\n    16px 1650px #fff, 1021px 1075px #fff, 723px 424px #fff, 1175px 41px #fff,\r\n    494px 1957px #fff, 1296px 431px #fff, 175px 1507px #fff, 831px 121px #fff,\r\n    498px 1947px #fff, 617px 880px #fff, 240px 403px #fff;\r\n}\r\n#stars3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2000px;\r\n    width: 3px;\r\n    height: 3px;\r\n    background: transparent;\r\n    box-shadow: 387px 1878px #fff, 760px 1564px #fff, 1487px 999px #fff,\r\n    948px 1828px #fff, 1977px 1001px #fff, 1284px 1963px #fff, 656px 284px #fff,\r\n    1268px 1635px #fff, 1820px 598px #fff, 642px 1900px #fff, 296px 57px #fff,\r\n    921px 1620px #fff, 476px 1858px #fff, 658px 613px #fff, 1171px 1363px #fff,\r\n    1419px 283px #fff, 1037px 731px #fff, 503px 663px #fff, 1562px 463px #fff,\r\n    383px 1197px #fff, 1171px 1233px #fff, 876px 1768px #fff, 856px 1615px #fff,\r\n    1375px 1924px #fff, 1725px 918px #fff, 952px 119px #fff, 768px 1212px #fff,\r\n    992px 1462px #fff, 1929px 717px #fff, 1947px 755px #fff, 1818px 1123px #fff,\r\n    1896px 1672px #fff, 460px 198px #fff, 256px 271px #fff, 752px 544px #fff,\r\n    1222px 1859px #fff, 1851px 443px #fff, 313px 1858px #fff, 709px 446px #fff,\r\n    1546px 697px #fff, 674px 1155px #fff, 1112px 130px #fff, 355px 1790px #fff,\r\n    1496px 974px #fff, 1696px 480px #fff, 1316px 1265px #fff, 1645px 1063px #fff,\r\n    1182px 237px #fff, 427px 1582px #fff, 859px 253px #fff, 458px 939px #fff,\r\n    1517px 1644px #fff, 1943px 60px #fff, 212px 1650px #fff, 966px 1786px #fff,\r\n    473px 712px #fff, 130px 76px #fff, 1417px 1186px #fff, 909px 1580px #fff,\r\n    1913px 762px #fff, 204px 1143px #fff, 1998px 1057px #fff, 1468px 1301px #fff,\r\n    144px 1676px #fff, 21px 1601px #fff, 382px 1362px #fff, 912px 753px #fff,\r\n    1488px 1405px #fff, 802px 156px #fff, 174px 550px #fff, 338px 1366px #fff,\r\n    1197px 774px #fff, 602px 486px #fff, 682px 1877px #fff, 348px 1503px #fff,\r\n    407px 1139px #fff, 950px 1400px #fff, 922px 1139px #fff, 1697px 293px #fff,\r\n    1238px 1281px #fff, 1038px 1197px #fff, 376px 1889px #fff,\r\n    1255px 1680px #fff, 1008px 1316px #fff, 1538px 1447px #fff,\r\n    1186px 874px #fff, 1967px 640px #fff, 1341px 19px #fff, 29px 1732px #fff,\r\n    16px 1650px #fff, 1021px 1075px #fff, 723px 424px #fff, 1175px 41px #fff,\r\n    494px 1957px #fff, 1296px 431px #fff, 175px 1507px #fff, 831px 121px #fff,\r\n    498px 1947px #fff, 617px 880px #fff, 240px 403px #fff;\r\n}\r\n@-webkit-keyframes animStar {\r\n    from {\r\n        transform: translateY(0px);\r\n    }\r\n    to {\r\n        transform: translateY(-2000px);\r\n    }\r\n}\r\n@keyframes animStar {\r\n    from {\r\n        transform: translateY(0px);\r\n    }\r\n    to {\r\n        transform: translateY(-2000px);\r\n    }\r\n}\r\n@-webkit-keyframes blinkTextCursor {\r\n\r\nfrom {\r\n    border-right-color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\nto {\r\n    border-right-color: transparent;\r\n}\r\n\r\n}\r\n@keyframes blinkTextCursor {\r\n\r\nfrom {\r\n    border-right-color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\nto {\r\n    border-right-color: transparent;\r\n}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNIO0lBQ0ksdUVBQXVFO0FBQzNFO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCO0FBQ0E7Ozs7O0dBS0c7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlEQUFpRDtJQUNqRCxtQkFBbUI7SUFDbkIsZ0VBQXdEO1lBQXhELHdEQUF3RDtFQUMxRDtBQUVGO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBZ0xtQztBQUN2QztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQWdMbUM7QUFDdkM7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQWtEcUM7QUFDekM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FrRHFDO0FBQ3pDO0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QiwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQXlCcUQ7QUFDekQ7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQXlCcUQ7QUFDekQ7QUFHQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQVBBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBRUE7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7QUFWQTs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSAwJSwjMDkwYTBmIDEwMCUpO1xyXG59ICovXHJcbi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCMwOTBhMGYgMTAwJSk7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ubmF2aWdhdGlvbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG5cclxufVxyXG4vKiBcclxuI3RpdGxlIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsICMzODQ5NWEpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59ICovXHJcbi50eXBld3JpdGVyLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOGVtO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBhbmltYXRpb246YmxpbmtUZXh0Q3Vyc29yIDQwMG1zIHN0ZXBzKDUpIGluZmluaXRlIG5vcm1hbDtcclxuICB9XHJcblxyXG4jc3RhcnMge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IGFuaW1TdGFyIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBib3gtc2hhZG93OiA3NzlweCAxMzMxcHggI2ZmZiwgMzI0cHggNDJweCAjZmZmLCAzMDNweCA1ODZweCAjZmZmLFxyXG4gICAgMTMxMnB4IDI3NnB4ICNmZmYsIDQ1MXB4IDYyNXB4ICNmZmYsIDUyMXB4IDE5MzFweCAjZmZmLCAxMDg3cHggMTg3MXB4ICNmZmYsXHJcbiAgICAzNnB4IDE1NDZweCAjZmZmLCAxMzJweCA5MzRweCAjZmZmLCAxNjk4cHggOTAxcHggI2ZmZiwgMTQxOHB4IDY2NHB4ICNmZmYsXHJcbiAgICAxNDQ4cHggMTE1N3B4ICNmZmYsIDEwODRweCAyMzJweCAjZmZmLCAzNDdweCAxNzc2cHggI2ZmZiwgMTcyMnB4IDI0M3B4ICNmZmYsXHJcbiAgICAxNjI5cHggODM1cHggI2ZmZiwgNDc5cHggOTY5cHggI2ZmZiwgMTIzMXB4IDk2MHB4ICNmZmYsIDU4NnB4IDM4NHB4ICNmZmYsXHJcbiAgICAxNjRweCA1MjdweCAjZmZmLCA4cHggNjQ2cHggI2ZmZiwgMTE1MHB4IDExMjZweCAjZmZmLCA2NjVweCAxMzU3cHggI2ZmZixcclxuICAgIDE1NTZweCAxOTgycHggI2ZmZiwgMTI2MHB4IDE5NjFweCAjZmZmLCAxNjc1cHggMTc0MXB4ICNmZmYsXHJcbiAgICAxODQzcHggMTUxNHB4ICNmZmYsIDcxOHB4IDE2MjhweCAjZmZmLCAyNDJweCAxMzQzcHggI2ZmZiwgMTQ5N3B4IDE4ODBweCAjZmZmLFxyXG4gICAgMTM2NHB4IDIzMHB4ICNmZmYsIDE3MzlweCAxMzAycHggI2ZmZiwgNjM2cHggOTU5cHggI2ZmZiwgMzA0cHggNjg2cHggI2ZmZixcclxuICAgIDYxNHB4IDc1MXB4ICNmZmYsIDE5MzVweCA4MTZweCAjZmZmLCAxNDI4cHggNjBweCAjZmZmLCAzNTVweCAzMzVweCAjZmZmLFxyXG4gICAgMTU5NHB4IDE1OHB4ICNmZmYsIDkwcHggNjBweCAjZmZmLCAxNTUzcHggMTYycHggI2ZmZiwgMTIzOXB4IDE4MjVweCAjZmZmLFxyXG4gICAgMTk0NXB4IDU4N3B4ICNmZmYsIDc0OXB4IDE3ODVweCAjZmZmLCAxOTg3cHggMTE3MnB4ICNmZmYsIDEzMDFweCAxMjM3cHggI2ZmZixcclxuICAgIDEwMzlweCAzNDJweCAjZmZmLCAxNTg1cHggMTQ4MXB4ICNmZmYsIDk5NXB4IDEwNDhweCAjZmZmLCA1MjRweCA5MzJweCAjZmZmLFxyXG4gICAgMjE0cHggNDEzcHggI2ZmZiwgMTcwMXB4IDEzMDBweCAjZmZmLCAxMDM3cHggMTYxM3B4ICNmZmYsIDE4NzFweCA5OTZweCAjZmZmLFxyXG4gICAgMTM2MHB4IDE2MzVweCAjZmZmLCAxMTEwcHggMTMxM3B4ICNmZmYsIDQxMnB4IDE3ODNweCAjZmZmLCAxOTQ5cHggMTc3cHggI2ZmZixcclxuICAgIDkwM3B4IDE4NTRweCAjZmZmLCA3MDBweCAxOTM2cHggI2ZmZiwgMzc4cHggMTI1cHggI2ZmZiwgMzA4cHggODM0cHggI2ZmZixcclxuICAgIDExMThweCA5NjJweCAjZmZmLCAxMzUwcHggMTkyOXB4ICNmZmYsIDc4MXB4IDE4MTFweCAjZmZmLCA1NjFweCAxMzdweCAjZmZmLFxyXG4gICAgNzU3cHggMTE0OHB4ICNmZmYsIDE2NzBweCAxOTc5cHggI2ZmZiwgMzQzcHggNzM5cHggI2ZmZiwgOTQ1cHggNzk1cHggI2ZmZixcclxuICAgIDU3NnB4IDE5MDNweCAjZmZmLCAxMDc4cHggMTQzNnB4ICNmZmYsIDE1ODNweCA0NTBweCAjZmZmLCAxMzY2cHggNDc0cHggI2ZmZixcclxuICAgIDI5N3B4IDE4NzNweCAjZmZmLCAxOTJweCAxNjJweCAjZmZmLCAxNjI0cHggMTYzM3B4ICNmZmYsIDU5cHggNDUzcHggI2ZmZixcclxuICAgIDgycHggMTg3MnB4ICNmZmYsIDE5MzNweCA0OThweCAjZmZmLCAxOTY2cHggMTk3NHB4ICNmZmYsIDE5NzVweCAxNjg4cHggI2ZmZixcclxuICAgIDc3OXB4IDMxNHB4ICNmZmYsIDE4NThweCAxNTQzcHggI2ZmZiwgNzNweCAxNTA3cHggI2ZmZiwgMTY5M3B4IDk3NXB4ICNmZmYsXHJcbiAgICAxNjgzcHggMTA4cHggI2ZmZiwgMTc2OHB4IDE2NTRweCAjZmZmLCA2NTRweCAxNHB4ICNmZmYsIDQ5NHB4IDE3MXB4ICNmZmYsXHJcbiAgICAxNjg5cHggMTg5NXB4ICNmZmYsIDE2NjBweCAyNjNweCAjZmZmLCAxMDMxcHggOTAzcHggI2ZmZiwgMTIwM3B4IDEzOTNweCAjZmZmLFxyXG4gICAgMTMzM3B4IDE0MjFweCAjZmZmLCAxMTEzcHggNDFweCAjZmZmLCAxMjA2cHggMTY0NXB4ICNmZmYsIDEzMjVweCAxNjM1cHggI2ZmZixcclxuICAgIDE0MnB4IDM4OHB4ICNmZmYsIDU3MnB4IDIxNXB4ICNmZmYsIDE1MzVweCAyOTZweCAjZmZmLCAxNDE5cHggNDA3cHggI2ZmZixcclxuICAgIDEzNzlweCAxMDAzcHggI2ZmZiwgMzI5cHggNDY5cHggI2ZmZiwgMTc5MXB4IDE2NTJweCAjZmZmLCA5MzVweCAxODAycHggI2ZmZixcclxuICAgIDEzMzBweCAxODIwcHggI2ZmZiwgNDIxcHggMTkzM3B4ICNmZmYsIDgyOHB4IDM2NXB4ICNmZmYsIDI3NXB4IDMxNnB4ICNmZmYsXHJcbiAgICA3MDdweCA5NjBweCAjZmZmLCAxNjA1cHggMTU1NHB4ICNmZmYsIDYyNXB4IDU4cHggI2ZmZiwgNzE3cHggMTY5N3B4ICNmZmYsXHJcbiAgICAxNjY5cHggMjQ2cHggI2ZmZiwgMTkyNXB4IDMyMnB4ICNmZmYsIDExNTRweCAxODAzcHggI2ZmZiwgMTkyOXB4IDI5NXB4ICNmZmYsXHJcbiAgICAxMjQ4cHggMjQwcHggI2ZmZiwgMTA0NXB4IDE3NTVweCAjZmZmLCAxNjZweCA5NDJweCAjZmZmLCAxODg4cHggMTc3M3B4ICNmZmYsXHJcbiAgICA2NzhweCAxOTYzcHggI2ZmZiwgMTM3MHB4IDU2OXB4ICNmZmYsIDE5NzRweCAxNDAwcHggI2ZmZiwgMTc4NnB4IDQ2MHB4ICNmZmYsXHJcbiAgICA1MXB4IDMwN3B4ICNmZmYsIDc4NHB4IDE0MDBweCAjZmZmLCA3MzBweCAxMjU4cHggI2ZmZiwgMTcxMnB4IDM5M3B4ICNmZmYsXHJcbiAgICA0MTZweCAxNzBweCAjZmZmLCAxNzk3cHggMTkzMnB4ICNmZmYsIDU3MnB4IDIxOXB4ICNmZmYsIDE1NTdweCAxODU2cHggI2ZmZixcclxuICAgIDIxOHB4IDhweCAjZmZmLCAzNDhweCAxMzM0cHggI2ZmZiwgNDY5cHggNDEzcHggI2ZmZiwgMzg1cHggMTczOHB4ICNmZmYsXHJcbiAgICAxMzU3cHggMTgxOHB4ICNmZmYsIDI0MHB4IDk0MnB4ICNmZmYsIDI0OHB4IDE4NDdweCAjZmZmLCAxNTM1cHggODA2cHggI2ZmZixcclxuICAgIDIzNnB4IDE1MTRweCAjZmZmLCAxNDI5cHggMTU1NnB4ICNmZmYsIDczcHggMTYzM3B4ICNmZmYsIDEzOThweCAxMTIxcHggI2ZmZixcclxuICAgIDY3MXB4IDEzMDFweCAjZmZmLCAxNDA0cHggMTY2M3B4ICNmZmYsIDc0MHB4IDEwMThweCAjZmZmLCAxNjAwcHggMzc3cHggI2ZmZixcclxuICAgIDc4NXB4IDUxNHB4ICNmZmYsIDExMnB4IDEwODRweCAjZmZmLCAxOTE1cHggMTg4N3B4ICNmZmYsIDE0NjNweCAxODQ4cHggI2ZmZixcclxuICAgIDY4N3B4IDExMTVweCAjZmZmLCAxMjY4cHggMTc2OHB4ICNmZmYsIDE3MjlweCAxNDI1cHggI2ZmZixcclxuICAgIDEyODRweCAxMDIycHggI2ZmZiwgODAxcHggOTc0cHggI2ZmZiwgMTk3NXB4IDEzMTdweCAjZmZmLCAxMzU0cHggODM0cHggI2ZmZixcclxuICAgIDE0NDZweCAxNDg0cHggI2ZmZiwgMTI4M3B4IDE3ODZweCAjZmZmLCAxMXB4IDUyM3B4ICNmZmYsIDE4NDJweCAyMzZweCAjZmZmLFxyXG4gICAgMTM1NXB4IDY1NHB4ICNmZmYsIDQyOXB4IDdweCAjZmZmLCAxMDMzcHggMTEyOHB4ICNmZmYsIDE1N3B4IDI5N3B4ICNmZmYsXHJcbiAgICA1NDVweCA2MzVweCAjZmZmLCA1MnB4IDEwODBweCAjZmZmLCA4MjdweCAxNTIwcHggI2ZmZiwgMTEyMXB4IDQ5MHB4ICNmZmYsXHJcbiAgICA5cHggMzA5cHggI2ZmZiwgMTc0NHB4IDE1ODZweCAjZmZmLCAxMDE0cHggNDE3cHggI2ZmZiwgMTUzNHB4IDUyNHB4ICNmZmYsXHJcbiAgICA5NThweCA1NTJweCAjZmZmLCAxNDAzcHggMTQ5NnB4ICNmZmYsIDM4N3B4IDcwM3B4ICNmZmYsIDE1MjJweCA1NDhweCAjZmZmLFxyXG4gICAgMTM1NXB4IDI4MnB4ICNmZmYsIDE1MzJweCA2MDFweCAjZmZmLCAxODM4cHggNzkwcHggI2ZmZiwgMjkwcHggMjU5cHggI2ZmZixcclxuICAgIDI5NXB4IDU5OHB4ICNmZmYsIDE2MDFweCA1MzlweCAjZmZmLCAxNTYxcHggMTI3MnB4ICNmZmYsIDM0cHggMTkyMnB4ICNmZmYsXHJcbiAgICAxMDI0cHggNTQzcHggI2ZmZiwgNDY3cHggMzY5cHggI2ZmZiwgNzIycHggMzMzcHggI2ZmZiwgMTk3NnB4IDEyNTVweCAjZmZmLFxyXG4gICAgNzY2cHggOTgzcHggI2ZmZiwgMTU4MnB4IDEyODVweCAjZmZmLCAxMnB4IDUxMnB4ICNmZmYsIDYxN3B4IDE0MTBweCAjZmZmLFxyXG4gICAgNjgycHggNTc3cHggI2ZmZiwgMTMzNHB4IDE0MzhweCAjZmZmLCA0MzlweCAzMjdweCAjZmZmLCAxNjE3cHggMTY2MXB4ICNmZmYsXHJcbiAgICA2NzNweCAxMjlweCAjZmZmLCA3OTRweCA5NDFweCAjZmZmLCAxMzg2cHggMTkwMnB4ICNmZmYsIDM3cHggMTM1M3B4ICNmZmYsXHJcbiAgICAxNDY3cHggMTM1M3B4ICNmZmYsIDQxNnB4IDE4cHggI2ZmZiwgMTg3cHggMzQ0cHggI2ZmZiwgMjAwcHggMTg5OHB4ICNmZmYsXHJcbiAgICAxNDkxcHggMTYxOXB4ICNmZmYsIDgxMXB4IDM0N3B4ICNmZmYsIDkyNHB4IDE4MjdweCAjZmZmLCA5NDVweCAyMTdweCAjZmZmLFxyXG4gICAgMTczNXB4IDEyMjhweCAjZmZmLCAzNzlweCAxODkwcHggI2ZmZiwgNzlweCA3NjFweCAjZmZmLCA4MjVweCAxODM3cHggI2ZmZixcclxuICAgIDE5ODBweCAxNTU4cHggI2ZmZiwgMTMwOHB4IDE1NzNweCAjZmZmLCAxNDg4cHggMTcyNnB4ICNmZmYsXHJcbiAgICAzODJweCAxMjA4cHggI2ZmZiwgNTIycHggNTk1cHggI2ZmZiwgMTI3N3B4IDE4OThweCAjZmZmLCAzNTRweCA1NTJweCAjZmZmLFxyXG4gICAgMTYxcHggMTc4NHB4ICNmZmYsIDYxNHB4IDI1MXB4ICNmZmYsIDUyNnB4IDE1NzZweCAjZmZmLCAxN3B4IDIxMnB4ICNmZmYsXHJcbiAgICAxNzlweCA5OTZweCAjZmZmLCA0NjdweCAxMjA4cHggI2ZmZiwgMTk0NHB4IDE4MzhweCAjZmZmLCAxMTQwcHggMTA5M3B4ICNmZmYsXHJcbiAgICA4NThweCAxMDA3cHggI2ZmZiwgMjAwcHggMTA2NHB4ICNmZmYsIDQyM3B4IDE5NjRweCAjZmZmLCAxOTQ1cHggNDM5cHggI2ZmZixcclxuICAgIDEzNzdweCA2ODlweCAjZmZmLCAxMTIwcHggMTQzN3B4ICNmZmYsIDE4NzZweCA2NjhweCAjZmZmLCA5MDdweCAxMzI0cHggI2ZmZixcclxuICAgIDM0M3B4IDE5NzZweCAjZmZmLCAxODE2cHggMTUwMXB4ICNmZmYsIDE4NDlweCAxNzdweCAjZmZmLCA2NDdweCA5MXB4ICNmZmYsXHJcbiAgICAxOTg0cHggMTAxMnB4ICNmZmYsIDEzMzZweCAxMzAwcHggI2ZmZiwgMTI4cHggNjQ4cHggI2ZmZiwgMzA1cHggMTA2MHB4ICNmZmYsXHJcbiAgICAxMzI0cHggODI2cHggI2ZmZiwgMTI2M3B4IDEzMTRweCAjZmZmLCAxODAxcHggNjI5cHggI2ZmZiwgMTYxNHB4IDE1NTVweCAjZmZmLFxyXG4gICAgMTYzNHB4IDkwcHggI2ZmZiwgMTYwM3B4IDQ1MnB4ICNmZmYsIDg5MXB4IDE5ODRweCAjZmZmLCAxNTU2cHggMTkwNnB4ICNmZmYsXHJcbiAgICAxMjFweCA2OHB4ICNmZmYsIDE2NzZweCAxNzE0cHggI2ZmZiwgNTE2cHggOTM2cHggI2ZmZiwgMTk0N3B4IDE0OTJweCAjZmZmLFxyXG4gICAgMTQ1NXB4IDE1MTlweCAjZmZmLCA0NXB4IDYwMnB4ICNmZmYsIDIwNXB4IDEwMzlweCAjZmZmLCA3OTNweCAxNzJweCAjZmZmLFxyXG4gICAgMTU2MnB4IDE3MzlweCAjZmZmLCAxMDU2cHggMTEwcHggI2ZmZiwgMTUxMnB4IDM3OXB4ICNmZmYsIDE3OTVweCAxNjIxcHggI2ZmZixcclxuICAgIDE4NDhweCA2MDdweCAjZmZmLCAyNjJweCAxNzE5cHggI2ZmZiwgNDc3cHggOTkxcHggI2ZmZiwgNDgzcHggODgzcHggI2ZmZixcclxuICAgIDEyMzlweCAxMTk3cHggI2ZmZiwgMTQ5NnB4IDY0N3B4ICNmZmYsIDE2NDlweCAyNXB4ICNmZmYsIDE0OTFweCAxOTQ2cHggI2ZmZixcclxuICAgIDExOXB4IDk5NnB4ICNmZmYsIDE3OXB4IDE0NzJweCAjZmZmLCAxMzQxcHggODA4cHggI2ZmZiwgMTU2NXB4IDE3MDBweCAjZmZmLFxyXG4gICAgNDA3cHggMTU0NHB4ICNmZmYsIDE3NTRweCAzNTdweCAjZmZmLCAxMjg4cHggOTgxcHggI2ZmZiwgOTAycHggMTk5N3B4ICNmZmYsXHJcbiAgICAxNzU1cHggMTY2OHB4ICNmZmYsIDE4NnB4IDg3N3B4ICNmZmYsIDEyMDJweCAxODgycHggI2ZmZiwgNDYxcHggMTIxM3B4ICNmZmYsXHJcbiAgICAxNDAwcHggNzQ4cHggI2ZmZiwgMTk2OXB4IDE4OTlweCAjZmZmLCA4MDlweCA1MjJweCAjZmZmLCA1MTRweCAxMjE5cHggI2ZmZixcclxuICAgIDM3NHB4IDI3NXB4ICNmZmYsIDkzOHB4IDE5NzNweCAjZmZmLCAzNTdweCA1NTJweCAjZmZmLCAxNDRweCAxNzIycHggI2ZmZixcclxuICAgIDE1NzJweCA5MTJweCAjZmZmLCA0MDJweCAxODU4cHggI2ZmZiwgMTU0NHB4IDExOTVweCAjZmZmLCA2NjdweCAxMjU3cHggI2ZmZixcclxuICAgIDcyN3B4IDE0OTZweCAjZmZmLCA5OTNweCAyMzJweCAjZmZmLCAxNzcycHggMzEzcHggI2ZmZiwgMTA0MHB4IDE1OTBweCAjZmZmLFxyXG4gICAgMTIwNHB4IDE5NzNweCAjZmZmLCAxMjY4cHggNzlweCAjZmZmLCAxNTU1cHggMTA0OHB4ICNmZmYsIDk4NnB4IDE3MDdweCAjZmZmLFxyXG4gICAgOTc4cHggMTcxMHB4ICNmZmYsIDcxM3B4IDM2MHB4ICNmZmYsIDQwN3B4IDg2M3B4ICNmZmYsIDQ2MXB4IDczNnB4ICNmZmYsXHJcbiAgICAyODRweCAxNjA4cHggI2ZmZiwgMTAzcHggNDMwcHggI2ZmZiwgMTI4M3B4IDEzMTlweCAjZmZmLCA5NzdweCAxMTg2cHggI2ZmZixcclxuICAgIDE5NjZweCAxNTE2cHggI2ZmZiwgMTI4N3B4IDExMjlweCAjZmZmLCA3MHB4IDEwOThweCAjZmZmLCAxMTg5cHggODg5cHggI2ZmZixcclxuICAgIDExMjZweCAxNzM0cHggI2ZmZiwgMzA5cHggMTI5MnB4ICNmZmYsIDg3OXB4IDc2NHB4ICNmZmYsIDY1cHggNDczcHggI2ZmZixcclxuICAgIDEwMDNweCAxOTU5cHggI2ZmZiwgNjU4cHggNzkxcHggI2ZmZiwgNDAycHggMTU3NnB4ICNmZmYsIDM1cHggNjIycHggI2ZmZixcclxuICAgIDUyOXB4IDE1ODlweCAjZmZmLCAxNjRweCA2NjZweCAjZmZmLCAxODc2cHggMTI5MHB4ICNmZmYsIDE1NDFweCA1MjZweCAjZmZmLFxyXG4gICAgMjcwcHggMTI5N3B4ICNmZmYsIDQ0MHB4IDg2NXB4ICNmZmYsIDE1MDBweCA4MDJweCAjZmZmLCAxODJweCAxNzU0cHggI2ZmZixcclxuICAgIDEyNjRweCA4OTJweCAjZmZmLCAyNzJweCAxMjQ5cHggI2ZmZiwgMTI4OXB4IDE1MzVweCAjZmZmLCAxOTBweCAxNjQ2cHggI2ZmZixcclxuICAgIDk1NXB4IDI0MnB4ICNmZmYsIDE0NTZweCAxNTk3cHggI2ZmZiwgMTcyN3B4IDE5ODNweCAjZmZmLCA2MzVweCA4MDFweCAjZmZmLFxyXG4gICAgMjI2cHggNDU1cHggI2ZmZiwgMTM5NnB4IDE3MTBweCAjZmZmLCA4NDlweCAxODYzcHggI2ZmZiwgMjM3cHggMTI2NHB4ICNmZmYsXHJcbiAgICA4MzlweCAxNDBweCAjZmZmLCAxMTIycHggNzM1cHggI2ZmZiwgMTI4MHB4IDE1cHggI2ZmZiwgMTMxOHB4IDI0MnB4ICNmZmYsXHJcbiAgICAxODE5cHggMTE0OHB4ICNmZmYsIDMzM3B4IDEzOTJweCAjZmZmLCAxOTQ5cHggNTUzcHggI2ZmZiwgMTg3OHB4IDEzMzJweCAjZmZmLFxyXG4gICAgNDY3cHggNTQ4cHggI2ZmZiwgMTgxMnB4IDEwODJweCAjZmZmLCAxMDY3cHggMTkzcHggI2ZmZiwgMjQzcHggMTU2cHggI2ZmZixcclxuICAgIDQ4M3B4IDE2MTZweCAjZmZmLCAxNzE0cHggOTMzcHggI2ZmZiwgNzU5cHggMTgwMHB4ICNmZmYsIDE4MjJweCA5OTVweCAjZmZmLFxyXG4gICAgMTg3N3B4IDU3MnB4ICNmZmYsIDU4MXB4IDEwODRweCAjZmZmLCAxMDdweCA3MzJweCAjZmZmLCA2NDJweCAxODM3cHggI2ZmZixcclxuICAgIDE2NnB4IDE0OTNweCAjZmZmLCAxNTU1cHggMTk4cHggI2ZmZiwgODE5cHggMzA3cHggI2ZmZiwgOTQ3cHggMzQ1cHggI2ZmZixcclxuICAgIDgyN3B4IDIyNHB4ICNmZmYsIDkyN3B4IDEzOTRweCAjZmZmLCA1NDBweCA0NjdweCAjZmZmLCAxMDkzcHggNDA1cHggI2ZmZixcclxuICAgIDExNDBweCA5MjdweCAjZmZmLCAxMzBweCA1MjlweCAjZmZmLCAzM3B4IDE5ODBweCAjZmZmLCAxMTQ3cHggMTY2M3B4ICNmZmYsXHJcbiAgICAxNjE2cHggMTQzNnB4ICNmZmYsIDUyOHB4IDcxMHB4ICNmZmYsIDc5OHB4IDExMDBweCAjZmZmLCA1MDVweCAxNDgwcHggI2ZmZixcclxuICAgIDg5OXB4IDY0MXB4ICNmZmYsIDE5MDlweCAxOTQ5cHggI2ZmZiwgMTMxMXB4IDk2NHB4ICNmZmYsIDk3OXB4IDEzMDFweCAjZmZmLFxyXG4gICAgMTM5M3B4IDk2OXB4ICNmZmYsIDE3OTNweCAxODg2cHggI2ZmZiwgMjkycHggMzU3cHggI2ZmZiwgMTE5NnB4IDE3MThweCAjZmZmLFxyXG4gICAgMTI5MHB4IDE5OTRweCAjZmZmLCA1MzdweCAxOTczcHggI2ZmZiwgMTE4MXB4IDE2NzRweCAjZmZmLFxyXG4gICAgMTc0MHB4IDE1NjZweCAjZmZmLCAxMzA3cHggMjY1cHggI2ZmZiwgOTIycHggNTIycHggI2ZmZiwgMTg5MnB4IDQ3MnB4ICNmZmYsXHJcbiAgICAzODRweCAxNzQ2cHggI2ZmZiwgMzkycHggMTA5OHB4ICNmZmYsIDY0N3B4IDU0OHB4ICNmZmYsIDM5MHB4IDE0OThweCAjZmZmLFxyXG4gICAgMTI0NnB4IDEzOHB4ICNmZmYsIDczMHB4IDg3NnB4ICNmZmYsIDE5MnB4IDE0NzJweCAjZmZmLCAxNzkwcHggMTc4OXB4ICNmZmYsXHJcbiAgICA5MjhweCAzMTFweCAjZmZmLCAxMjUzcHggMTY0N3B4ICNmZmYsIDc0N3B4IDE5MjFweCAjZmZmLCAxNTYxcHggMTAyNXB4ICNmZmYsXHJcbiAgICAxNTMzcHggMTI5MnB4ICNmZmYsIDE5ODVweCAxOTVweCAjZmZmLCA3MjhweCA3MjlweCAjZmZmLCAxNzEycHggMTkzNnB4ICNmZmYsXHJcbiAgICA1MTJweCAxNzE3cHggI2ZmZiwgMTUyOHB4IDQ4M3B4ICNmZmYsIDMxM3B4IDE2NDJweCAjZmZmLCAyODFweCAxODQ5cHggI2ZmZixcclxuICAgIDEyMTJweCA3OTlweCAjZmZmLCA0MzVweCAxMTkxcHggI2ZmZiwgMTQyMnB4IDYxMXB4ICNmZmYsIDE3MThweCAxOTY0cHggI2ZmZixcclxuICAgIDQxMXB4IDk0NHB4ICNmZmYsIDIxMHB4IDYzNnB4ICNmZmYsIDE1MDJweCAxMjk1cHggI2ZmZiwgMTQzNHB4IDM0OXB4ICNmZmYsXHJcbiAgICA3NjlweCA2MHB4ICNmZmYsIDc0N3B4IDEwNTNweCAjZmZmLCA3ODlweCA1MDRweCAjZmZmLCAxNDM2cHggMTI2NHB4ICNmZmYsXHJcbiAgICAxODkzcHggMTIyNXB4ICNmZmYsIDEzOTRweCAxNzg4cHggI2ZmZiwgMTEwOHB4IDEzMTdweCAjZmZmLFxyXG4gICAgMTY3M3B4IDEzOTVweCAjZmZmLCA4NTRweCAxMDEwcHggI2ZmZiwgMTcwNXB4IDgwcHggI2ZmZiwgMTg1OHB4IDE0OHB4ICNmZmYsXHJcbiAgICAxNzI5cHggMzQ0cHggI2ZmZiwgMTM4OHB4IDY2NHB4ICNmZmYsIDg5NXB4IDQwNnB4ICNmZmYsIDE0NzlweCAxNTdweCAjZmZmLFxyXG4gICAgMTQ0MXB4IDExNTdweCAjZmZmLCA1NTJweCAxOTAwcHggI2ZmZiwgNTE2cHggMzY0cHggI2ZmZiwgMTY0N3B4IDE4OXB4ICNmZmYsXHJcbiAgICAxNDI3cHggMTA3MXB4ICNmZmYsIDc4NXB4IDcyOXB4ICNmZmYsIDEwODBweCAxNzEwcHggI2ZmZiwgNTA0cHggMjA0cHggI2ZmZixcclxuICAgIDExNzdweCAxNjIycHggI2ZmZiwgNjU3cHggMzRweCAjZmZmLCAxMjk2cHggMTA5OXB4ICNmZmYsIDI0OHB4IDE4MHB4ICNmZmYsXHJcbiAgICAxMjEycHggMTU2OHB4ICNmZmYsIDY2N3B4IDE1NjJweCAjZmZmLCA2OTVweCA4NDFweCAjZmZmLCAxNjA4cHggMTI0N3B4ICNmZmYsXHJcbiAgICA3NTFweCA4ODJweCAjZmZmLCA4N3B4IDE2N3B4ICNmZmYsIDYwN3B4IDEzNjhweCAjZmZmLCAxMzYzcHggMTIwM3B4ICNmZmYsXHJcbiAgICAxODM2cHggMzE3cHggI2ZmZiwgMTY2OHB4IDE3MDNweCAjZmZmLCA4MzBweCAxMTU0cHggI2ZmZiwgMTcyMXB4IDEzOThweCAjZmZmLFxyXG4gICAgMTYwMXB4IDEyODBweCAjZmZmLCA5NzZweCA4NzRweCAjZmZmLCAxNzQzcHggMjU0cHggI2ZmZiwgMTAyMHB4IDE4MTVweCAjZmZmLFxyXG4gICAgMTY3MHB4IDE3NjZweCAjZmZmLCAxODkwcHggNzM1cHggI2ZmZiwgMTM3OXB4IDEzNnB4ICNmZmYsIDE4NjRweCA2OTVweCAjZmZmLFxyXG4gICAgMjA2cHggOTY1cHggI2ZmZiwgMTQwNHB4IDE5MzJweCAjZmZmLCAxOTIzcHggMTM2MHB4ICNmZmYsIDI0N3B4IDY4MnB4ICNmZmYsXHJcbiAgICA1MTlweCAxNzA4cHggI2ZmZiwgNjQ1cHggNzUwcHggI2ZmZiwgMTE2NHB4IDEyMDRweCAjZmZmLCA4MzRweCAzMjNweCAjZmZmLFxyXG4gICAgMTcycHggMTM1MHB4ICNmZmYsIDIxM3B4IDk3MnB4ICNmZmYsIDE4MzdweCAxOTBweCAjZmZmLCAyODVweCAxODA2cHggI2ZmZixcclxuICAgIDEwNDdweCAxMjk5cHggI2ZmZiwgMTU0OHB4IDgyNXB4ICNmZmYsIDE3MzBweCAzMjRweCAjZmZmLCAxMzQ2cHggMTkwOXB4ICNmZmYsXHJcbiAgICA3NzJweCAyNzBweCAjZmZmLCAzNDVweCAxMTkwcHggI2ZmZiwgNDc4cHggMTQzM3B4ICNmZmYsIDE0NzlweCAyNXB4ICNmZmYsXHJcbiAgICAxOTk0cHggMTgzMHB4ICNmZmYsIDE3NDRweCA3MzJweCAjZmZmLCAyMHB4IDE2MzVweCAjZmZmLCA2OTBweCAxNzk1cHggI2ZmZixcclxuICAgIDE1OTRweCA1NjlweCAjZmZmLCA1NzlweCAyNDVweCAjZmZmLCAxMzk4cHggNzMzcHggI2ZmZiwgNDA4cHggMTM1MnB4ICNmZmYsXHJcbiAgICAxNzc0cHggMTIwcHggI2ZmZiwgMTE1MnB4IDEzNzBweCAjZmZmLCAxNjk4cHggMTgxMHB4ICNmZmYsIDcxMHB4IDE0NTBweCAjZmZmLFxyXG4gICAgNjY1cHggMjg2cHggI2ZmZiwgNDkzcHggMTcyMHB4ICNmZmYsIDc4NnB4IDVweCAjZmZmLCA2MzdweCAxMTQwcHggI2ZmZixcclxuICAgIDc2NHB4IDMyNHB4ICNmZmYsIDkyN3B4IDMxMHB4ICNmZmYsIDkzOHB4IDE0MjRweCAjZmZmLCAxODg0cHggNzQ0cHggI2ZmZixcclxuICAgIDkxM3B4IDQ2MnB4ICNmZmYsIDE4MzFweCAxOTM2cHggI2ZmZiwgMTUyN3B4IDI0OXB4ICNmZmYsIDM2cHggMTM4MXB4ICNmZmYsXHJcbiAgICAxNTk3cHggNTgxcHggI2ZmZiwgMTUzMHB4IDM1NXB4ICNmZmYsIDk0OXB4IDQ1OXB4ICNmZmYsIDc5OXB4IDgyOHB4ICNmZmYsXHJcbiAgICAyNDJweCAxNDcxcHggI2ZmZiwgNjU0cHggNzk3cHggI2ZmZiwgNzk2cHggNTk0cHggI2ZmZiwgMTM2NXB4IDY3OHB4ICNmZmYsXHJcbiAgICA3NTJweCAyM3B4ICNmZmYsIDE2MzBweCA1NDFweCAjZmZmLCA5ODJweCA3MnB4ICNmZmYsIDE3MzNweCAxODMxcHggI2ZmZixcclxuICAgIDIxcHggNDEycHggI2ZmZiwgNzc1cHggOTk4cHggI2ZmZiwgMzM1cHggMTk0NXB4ICNmZmYsIDI2NHB4IDU4M3B4ICNmZmYsXHJcbiAgICAxNThweCAxMzExcHggI2ZmZiwgNTI4cHggMTY0cHggI2ZmZiwgMTk3OHB4IDU3NHB4ICNmZmYsIDcxN3B4IDEyMDNweCAjZmZmLFxyXG4gICAgNzM0cHggMTU5MXB4ICNmZmYsIDE1NTVweCA4MjBweCAjZmZmLCAxNnB4IDE5NDNweCAjZmZmLCAxNjI1cHggMTE3N3B4ICNmZmYsXHJcbiAgICAxMjM2cHggNjkwcHggI2ZmZiwgMTU4NXB4IDE1OTBweCAjZmZmLCAxNzM3cHggMTcyOHB4ICNmZmYsIDcyMXB4IDY5OHB4ICNmZmYsXHJcbiAgICAxODA0cHggMTE4NnB4ICNmZmYsIDE2NnB4IDk4MHB4ICNmZmYsIDE4NTBweCAyMzBweCAjZmZmLCAzMzBweCAxNzEycHggI2ZmZixcclxuICAgIDk1cHggNzk3cHggI2ZmZiwgMTk0OHB4IDEwNzhweCAjZmZmLCA0NjlweCA5MzlweCAjZmZmLCAxMjY5cHggMTg5OXB4ICNmZmYsXHJcbiAgICA5NTVweCAxMjIwcHggI2ZmZiwgMTEzN3B4IDEwNzVweCAjZmZmLCAzMTJweCAxMjkzcHggI2ZmZiwgOTg2cHggMTc2MnB4ICNmZmYsXHJcbiAgICAxMTAzcHggMTIzOHB4ICNmZmYsIDQyOHB4IDE5OTNweCAjZmZmLCAzNTVweCA1NzBweCAjZmZmLCA5NzdweCAxODM2cHggI2ZmZixcclxuICAgIDEzOTVweCAxMDkycHggI2ZmZiwgMjc2cHggOTEzcHggI2ZmZiwgMTc0M3B4IDY1NnB4ICNmZmYsIDc3M3B4IDUwMnB4ICNmZmYsXHJcbiAgICAxNjg2cHggMTMyMnB4ICNmZmYsIDE1MTZweCAxOTQ1cHggI2ZmZiwgMTMzNHB4IDUwMXB4ICNmZmYsIDI2NnB4IDE1NnB4ICNmZmYsXHJcbiAgICA0NTVweCA2NTVweCAjZmZmLCA3OThweCA3MnB4ICNmZmYsIDEwNTlweCAxMjU5cHggI2ZmZiwgMTQwMnB4IDE2ODdweCAjZmZmLFxyXG4gICAgMjM2cHggMTMyOXB4ICNmZmYsIDE0NTVweCA3ODZweCAjZmZmLCAxNDZweCAxMjI4cHggI2ZmZiwgMTg1MXB4IDgyM3B4ICNmZmYsXHJcbiAgICAxMDYycHggMTAwcHggI2ZmZiwgMTIyMHB4IDk1M3B4ICNmZmYsIDIwcHggMTgyNnB4ICNmZmYsIDM2cHggMTA2M3B4ICNmZmYsXHJcbiAgICAxNTI1cHggMzM4cHggI2ZmZiwgNzkwcHggMTUyMXB4ICNmZmYsIDc0MXB4IDEwOTlweCAjZmZmLCAyODhweCAxNDg5cHggI2ZmZixcclxuICAgIDcwMHB4IDEwNjBweCAjZmZmLCAzOTBweCAxMDcxcHggI2ZmZiwgNDExcHggMTAzNnB4ICNmZmYsIDE4NTNweCAxMDcycHggI2ZmZixcclxuICAgIDE0NDZweCAxMDg1cHggI2ZmZiwgMTE2NHB4IDg3NHB4ICNmZmYsIDkyNHB4IDkyNXB4ICNmZmYsIDI5MXB4IDI3MXB4ICNmZmYsXHJcbiAgICAxMjU3cHggMTk2NHB4ICNmZmYsIDE1ODBweCAxMzUycHggI2ZmZiwgMTUwN3B4IDEyMTZweCAjZmZmLCAyMTFweCA5NTZweCAjZmZmLFxyXG4gICAgOTg1cHggMTE5NXB4ICNmZmYsIDk3NXB4IDE2NDBweCAjZmZmLCA1MThweCAxMDFweCAjZmZmLCA2NjNweCAxMzk1cHggI2ZmZixcclxuICAgIDkxNHB4IDUzMnB4ICNmZmYsIDE0NXB4IDEzMjBweCAjZmZmLCA2OXB4IDEzOTdweCAjZmZmLCA5ODJweCA1MjNweCAjZmZmLFxyXG4gICAgMjU3cHggNzI1cHggI2ZmZiwgMTU5OXB4IDgzMXB4ICNmZmYsIDE2MzZweCAxNTEzcHggI2ZmZiwgMTI1MHB4IDExNThweCAjZmZmLFxyXG4gICAgMTEzMnB4IDYwNHB4ICNmZmYsIDE4M3B4IDEwMnB4ICNmZmYsIDEwNTdweCAzMThweCAjZmZmLCAxMjQ3cHggMTgzNXB4ICNmZmYsXHJcbiAgICAxOTgzcHggMTExMHB4ICNmZmYsIDEwNzdweCAxNDU1cHggI2ZmZiwgOTIxcHggMTc3MHB4ICNmZmYsIDgwNnB4IDEzNTBweCAjZmZmLFxyXG4gICAgMTkzOHB4IDE5OTJweCAjZmZmLCA4NTVweCAxMjYwcHggI2ZmZiwgOTAycHggMTM0NXB4ICNmZmYsIDY1OHB4IDE5MDhweCAjZmZmLFxyXG4gICAgMTg0NXB4IDY3OXB4ICNmZmYsIDcxMnB4IDE0ODJweCAjZmZmLCA1OTVweCA5NTBweCAjZmZmLCAxNzg0cHggMTk5MnB4ICNmZmYsXHJcbiAgICAxODQ3cHggMTc4NXB4ICNmZmYsIDY5MXB4IDEwMDRweCAjZmZmLCAxNzVweCAxMTc5cHggI2ZmZiwgMTY2NnB4IDE5MTFweCAjZmZmLFxyXG4gICAgNDFweCA2MXB4ICNmZmYsIDk3MXB4IDEwODBweCAjZmZmLCAxODMwcHggMTQ1MHB4ICNmZmYsIDEzNTFweCAxNTE4cHggI2ZmZixcclxuICAgIDEyNTdweCA5OXB4ICNmZmYsIDEzOTVweCAxNDk4cHggI2ZmZiwgMTExN3B4IDI1MnB4ICNmZmYsIDE3NzlweCA1OTdweCAjZmZmLFxyXG4gICAgMTM0NnB4IDcyOXB4ICNmZmYsIDExMDhweCAxMTQ0cHggI2ZmZiwgNDAycHggNjkxcHggI2ZmZiwgNzJweCA0OTZweCAjZmZmLFxyXG4gICAgMTY3M3B4IDE2MDRweCAjZmZmLCAxNDk3cHggOTc0cHggI2ZmZiwgMTg2NXB4IDE2NjRweCAjZmZmLCA4OHB4IDgwNnB4ICNmZmYsXHJcbiAgICA5MThweCA3N3B4ICNmZmYsIDI0NHB4IDExMThweCAjZmZmLCAyNTZweCAxODIwcHggI2ZmZiwgMTg1MXB4IDE4NDBweCAjZmZmLFxyXG4gICAgNjA1cHggMTg1MXB4ICNmZmYsIDYzNHB4IDM4M3B4ICNmZmYsIDg2NXB4IDM3cHggI2ZmZiwgOTQzcHggMTAyNHB4ICNmZmYsXHJcbiAgICAxOTUxcHggMTc3cHggI2ZmZiwgMTA5N3B4IDUyM3B4ICNmZmYsIDk4NXB4IDE3MDBweCAjZmZmLCAxMjQzcHggMTIycHggI2ZmZixcclxuICAgIDc2OHB4IDEwNzBweCAjZmZmLCA0NjhweCAxOTRweCAjZmZmLCAzMjBweCAxODY3cHggI2ZmZiwgMTg1MHB4IDE4NXB4ICNmZmYsXHJcbiAgICAzODBweCAxNjE2cHggI2ZmZiwgNDY4cHggMTI5NHB4ICNmZmYsIDExMjJweCAxNzQzcHggI2ZmZiwgODg0cHggMjk5cHggI2ZmZixcclxuICAgIDEzMDBweCAxOTE3cHggI2ZmZiwgMTg2MHB4IDM5NnB4ICNmZmYsIDEyNzBweCA5OTBweCAjZmZmLCA1MjlweCA3MzNweCAjZmZmLFxyXG4gICAgMTk3NXB4IDEzNDdweCAjZmZmLCAxODg1cHggNjg1cHggI2ZmZiwgMjI2cHggNTA2cHggI2ZmZiwgNjUxcHggODc4cHggI2ZmZixcclxuICAgIDEzMjNweCA2ODBweCAjZmZmLCAxMjg0cHggNjgwcHggI2ZmZiwgMjM4cHggMTk2N3B4ICNmZmYsIDkxMXB4IDE3NHB4ICNmZmYsXHJcbiAgICAxMTExcHggNTIxcHggI2ZmZiwgMTE1MHB4IDg1cHggI2ZmZiwgNzk0cHggNTAycHggI2ZmZiwgNDg0cHggMTg1NnB4ICNmZmYsXHJcbiAgICAxODA5cHggMzY4cHggI2ZmZiwgMTEycHggOTUzcHggI2ZmZiwgNTkwcHggMTAwOXB4ICNmZmYsIDE2NTVweCAzMTFweCAjZmZmLFxyXG4gICAgMTAwcHggMTAyNnB4ICNmZmYsIDE4MDNweCAzNTJweCAjZmZmLCA4NjVweCAzMDZweCAjZmZmLCAxMDc3cHggMTAxOXB4ICNmZmYsXHJcbiAgICAxMzM1cHggODcycHggI2ZmZiwgMTY0N3B4IDEyOThweCAjZmZmLCAxMjMzcHggMTM4N3B4ICNmZmYsIDY5OHB4IDEwMzZweCAjZmZmLFxyXG4gICAgNjU5cHggMTg2MHB4ICNmZmYsIDM4OHB4IDE0MTJweCAjZmZmLCAxMjEycHggNDU4cHggI2ZmZiwgNzU1cHggMTQ2OHB4ICNmZmYsXHJcbiAgICA2OTZweCAxNjU0cHggI2ZmZiwgMTE0NHB4IDYwcHggI2ZmZjtcclxufVxyXG5cclxuI3N0YXJzOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDAwcHg7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDc3OXB4IDEzMzFweCAjZmZmLCAzMjRweCA0MnB4ICNmZmYsIDMwM3B4IDU4NnB4ICNmZmYsXHJcbiAgICAxMzEycHggMjc2cHggI2ZmZiwgNDUxcHggNjI1cHggI2ZmZiwgNTIxcHggMTkzMXB4ICNmZmYsIDEwODdweCAxODcxcHggI2ZmZixcclxuICAgIDM2cHggMTU0NnB4ICNmZmYsIDEzMnB4IDkzNHB4ICNmZmYsIDE2OThweCA5MDFweCAjZmZmLCAxNDE4cHggNjY0cHggI2ZmZixcclxuICAgIDE0NDhweCAxMTU3cHggI2ZmZiwgMTA4NHB4IDIzMnB4ICNmZmYsIDM0N3B4IDE3NzZweCAjZmZmLCAxNzIycHggMjQzcHggI2ZmZixcclxuICAgIDE2MjlweCA4MzVweCAjZmZmLCA0NzlweCA5NjlweCAjZmZmLCAxMjMxcHggOTYwcHggI2ZmZiwgNTg2cHggMzg0cHggI2ZmZixcclxuICAgIDE2NHB4IDUyN3B4ICNmZmYsIDhweCA2NDZweCAjZmZmLCAxMTUwcHggMTEyNnB4ICNmZmYsIDY2NXB4IDEzNTdweCAjZmZmLFxyXG4gICAgMTU1NnB4IDE5ODJweCAjZmZmLCAxMjYwcHggMTk2MXB4ICNmZmYsIDE2NzVweCAxNzQxcHggI2ZmZixcclxuICAgIDE4NDNweCAxNTE0cHggI2ZmZiwgNzE4cHggMTYyOHB4ICNmZmYsIDI0MnB4IDEzNDNweCAjZmZmLCAxNDk3cHggMTg4MHB4ICNmZmYsXHJcbiAgICAxMzY0cHggMjMwcHggI2ZmZiwgMTczOXB4IDEzMDJweCAjZmZmLCA2MzZweCA5NTlweCAjZmZmLCAzMDRweCA2ODZweCAjZmZmLFxyXG4gICAgNjE0cHggNzUxcHggI2ZmZiwgMTkzNXB4IDgxNnB4ICNmZmYsIDE0MjhweCA2MHB4ICNmZmYsIDM1NXB4IDMzNXB4ICNmZmYsXHJcbiAgICAxNTk0cHggMTU4cHggI2ZmZiwgOTBweCA2MHB4ICNmZmYsIDE1NTNweCAxNjJweCAjZmZmLCAxMjM5cHggMTgyNXB4ICNmZmYsXHJcbiAgICAxOTQ1cHggNTg3cHggI2ZmZiwgNzQ5cHggMTc4NXB4ICNmZmYsIDE5ODdweCAxMTcycHggI2ZmZiwgMTMwMXB4IDEyMzdweCAjZmZmLFxyXG4gICAgMTAzOXB4IDM0MnB4ICNmZmYsIDE1ODVweCAxNDgxcHggI2ZmZiwgOTk1cHggMTA0OHB4ICNmZmYsIDUyNHB4IDkzMnB4ICNmZmYsXHJcbiAgICAyMTRweCA0MTNweCAjZmZmLCAxNzAxcHggMTMwMHB4ICNmZmYsIDEwMzdweCAxNjEzcHggI2ZmZiwgMTg3MXB4IDk5NnB4ICNmZmYsXHJcbiAgICAxMzYwcHggMTYzNXB4ICNmZmYsIDExMTBweCAxMzEzcHggI2ZmZiwgNDEycHggMTc4M3B4ICNmZmYsIDE5NDlweCAxNzdweCAjZmZmLFxyXG4gICAgOTAzcHggMTg1NHB4ICNmZmYsIDcwMHB4IDE5MzZweCAjZmZmLCAzNzhweCAxMjVweCAjZmZmLCAzMDhweCA4MzRweCAjZmZmLFxyXG4gICAgMTExOHB4IDk2MnB4ICNmZmYsIDEzNTBweCAxOTI5cHggI2ZmZiwgNzgxcHggMTgxMXB4ICNmZmYsIDU2MXB4IDEzN3B4ICNmZmYsXHJcbiAgICA3NTdweCAxMTQ4cHggI2ZmZiwgMTY3MHB4IDE5NzlweCAjZmZmLCAzNDNweCA3MzlweCAjZmZmLCA5NDVweCA3OTVweCAjZmZmLFxyXG4gICAgNTc2cHggMTkwM3B4ICNmZmYsIDEwNzhweCAxNDM2cHggI2ZmZiwgMTU4M3B4IDQ1MHB4ICNmZmYsIDEzNjZweCA0NzRweCAjZmZmLFxyXG4gICAgMjk3cHggMTg3M3B4ICNmZmYsIDE5MnB4IDE2MnB4ICNmZmYsIDE2MjRweCAxNjMzcHggI2ZmZiwgNTlweCA0NTNweCAjZmZmLFxyXG4gICAgODJweCAxODcycHggI2ZmZiwgMTkzM3B4IDQ5OHB4ICNmZmYsIDE5NjZweCAxOTc0cHggI2ZmZiwgMTk3NXB4IDE2ODhweCAjZmZmLFxyXG4gICAgNzc5cHggMzE0cHggI2ZmZiwgMTg1OHB4IDE1NDNweCAjZmZmLCA3M3B4IDE1MDdweCAjZmZmLCAxNjkzcHggOTc1cHggI2ZmZixcclxuICAgIDE2ODNweCAxMDhweCAjZmZmLCAxNzY4cHggMTY1NHB4ICNmZmYsIDY1NHB4IDE0cHggI2ZmZiwgNDk0cHggMTcxcHggI2ZmZixcclxuICAgIDE2ODlweCAxODk1cHggI2ZmZiwgMTY2MHB4IDI2M3B4ICNmZmYsIDEwMzFweCA5MDNweCAjZmZmLCAxMjAzcHggMTM5M3B4ICNmZmYsXHJcbiAgICAxMzMzcHggMTQyMXB4ICNmZmYsIDExMTNweCA0MXB4ICNmZmYsIDEyMDZweCAxNjQ1cHggI2ZmZiwgMTMyNXB4IDE2MzVweCAjZmZmLFxyXG4gICAgMTQycHggMzg4cHggI2ZmZiwgNTcycHggMjE1cHggI2ZmZiwgMTUzNXB4IDI5NnB4ICNmZmYsIDE0MTlweCA0MDdweCAjZmZmLFxyXG4gICAgMTM3OXB4IDEwMDNweCAjZmZmLCAzMjlweCA0NjlweCAjZmZmLCAxNzkxcHggMTY1MnB4ICNmZmYsIDkzNXB4IDE4MDJweCAjZmZmLFxyXG4gICAgMTMzMHB4IDE4MjBweCAjZmZmLCA0MjFweCAxOTMzcHggI2ZmZiwgODI4cHggMzY1cHggI2ZmZiwgMjc1cHggMzE2cHggI2ZmZixcclxuICAgIDcwN3B4IDk2MHB4ICNmZmYsIDE2MDVweCAxNTU0cHggI2ZmZiwgNjI1cHggNThweCAjZmZmLCA3MTdweCAxNjk3cHggI2ZmZixcclxuICAgIDE2NjlweCAyNDZweCAjZmZmLCAxOTI1cHggMzIycHggI2ZmZiwgMTE1NHB4IDE4MDNweCAjZmZmLCAxOTI5cHggMjk1cHggI2ZmZixcclxuICAgIDEyNDhweCAyNDBweCAjZmZmLCAxMDQ1cHggMTc1NXB4ICNmZmYsIDE2NnB4IDk0MnB4ICNmZmYsIDE4ODhweCAxNzczcHggI2ZmZixcclxuICAgIDY3OHB4IDE5NjNweCAjZmZmLCAxMzcwcHggNTY5cHggI2ZmZiwgMTk3NHB4IDE0MDBweCAjZmZmLCAxNzg2cHggNDYwcHggI2ZmZixcclxuICAgIDUxcHggMzA3cHggI2ZmZiwgNzg0cHggMTQwMHB4ICNmZmYsIDczMHB4IDEyNThweCAjZmZmLCAxNzEycHggMzkzcHggI2ZmZixcclxuICAgIDQxNnB4IDE3MHB4ICNmZmYsIDE3OTdweCAxOTMycHggI2ZmZiwgNTcycHggMjE5cHggI2ZmZiwgMTU1N3B4IDE4NTZweCAjZmZmLFxyXG4gICAgMjE4cHggOHB4ICNmZmYsIDM0OHB4IDEzMzRweCAjZmZmLCA0NjlweCA0MTNweCAjZmZmLCAzODVweCAxNzM4cHggI2ZmZixcclxuICAgIDEzNTdweCAxODE4cHggI2ZmZiwgMjQwcHggOTQycHggI2ZmZiwgMjQ4cHggMTg0N3B4ICNmZmYsIDE1MzVweCA4MDZweCAjZmZmLFxyXG4gICAgMjM2cHggMTUxNHB4ICNmZmYsIDE0MjlweCAxNTU2cHggI2ZmZiwgNzNweCAxNjMzcHggI2ZmZiwgMTM5OHB4IDExMjFweCAjZmZmLFxyXG4gICAgNjcxcHggMTMwMXB4ICNmZmYsIDE0MDRweCAxNjYzcHggI2ZmZiwgNzQwcHggMTAxOHB4ICNmZmYsIDE2MDBweCAzNzdweCAjZmZmLFxyXG4gICAgNzg1cHggNTE0cHggI2ZmZiwgMTEycHggMTA4NHB4ICNmZmYsIDE5MTVweCAxODg3cHggI2ZmZiwgMTQ2M3B4IDE4NDhweCAjZmZmLFxyXG4gICAgNjg3cHggMTExNXB4ICNmZmYsIDEyNjhweCAxNzY4cHggI2ZmZiwgMTcyOXB4IDE0MjVweCAjZmZmLFxyXG4gICAgMTI4NHB4IDEwMjJweCAjZmZmLCA4MDFweCA5NzRweCAjZmZmLCAxOTc1cHggMTMxN3B4ICNmZmYsIDEzNTRweCA4MzRweCAjZmZmLFxyXG4gICAgMTQ0NnB4IDE0ODRweCAjZmZmLCAxMjgzcHggMTc4NnB4ICNmZmYsIDExcHggNTIzcHggI2ZmZiwgMTg0MnB4IDIzNnB4ICNmZmYsXHJcbiAgICAxMzU1cHggNjU0cHggI2ZmZiwgNDI5cHggN3B4ICNmZmYsIDEwMzNweCAxMTI4cHggI2ZmZiwgMTU3cHggMjk3cHggI2ZmZixcclxuICAgIDU0NXB4IDYzNXB4ICNmZmYsIDUycHggMTA4MHB4ICNmZmYsIDgyN3B4IDE1MjBweCAjZmZmLCAxMTIxcHggNDkwcHggI2ZmZixcclxuICAgIDlweCAzMDlweCAjZmZmLCAxNzQ0cHggMTU4NnB4ICNmZmYsIDEwMTRweCA0MTdweCAjZmZmLCAxNTM0cHggNTI0cHggI2ZmZixcclxuICAgIDk1OHB4IDU1MnB4ICNmZmYsIDE0MDNweCAxNDk2cHggI2ZmZiwgMzg3cHggNzAzcHggI2ZmZiwgMTUyMnB4IDU0OHB4ICNmZmYsXHJcbiAgICAxMzU1cHggMjgycHggI2ZmZiwgMTUzMnB4IDYwMXB4ICNmZmYsIDE4MzhweCA3OTBweCAjZmZmLCAyOTBweCAyNTlweCAjZmZmLFxyXG4gICAgMjk1cHggNTk4cHggI2ZmZiwgMTYwMXB4IDUzOXB4ICNmZmYsIDE1NjFweCAxMjcycHggI2ZmZiwgMzRweCAxOTIycHggI2ZmZixcclxuICAgIDEwMjRweCA1NDNweCAjZmZmLCA0NjdweCAzNjlweCAjZmZmLCA3MjJweCAzMzNweCAjZmZmLCAxOTc2cHggMTI1NXB4ICNmZmYsXHJcbiAgICA3NjZweCA5ODNweCAjZmZmLCAxNTgycHggMTI4NXB4ICNmZmYsIDEycHggNTEycHggI2ZmZiwgNjE3cHggMTQxMHB4ICNmZmYsXHJcbiAgICA2ODJweCA1NzdweCAjZmZmLCAxMzM0cHggMTQzOHB4ICNmZmYsIDQzOXB4IDMyN3B4ICNmZmYsIDE2MTdweCAxNjYxcHggI2ZmZixcclxuICAgIDY3M3B4IDEyOXB4ICNmZmYsIDc5NHB4IDk0MXB4ICNmZmYsIDEzODZweCAxOTAycHggI2ZmZiwgMzdweCAxMzUzcHggI2ZmZixcclxuICAgIDE0NjdweCAxMzUzcHggI2ZmZiwgNDE2cHggMThweCAjZmZmLCAxODdweCAzNDRweCAjZmZmLCAyMDBweCAxODk4cHggI2ZmZixcclxuICAgIDE0OTFweCAxNjE5cHggI2ZmZiwgODExcHggMzQ3cHggI2ZmZiwgOTI0cHggMTgyN3B4ICNmZmYsIDk0NXB4IDIxN3B4ICNmZmYsXHJcbiAgICAxNzM1cHggMTIyOHB4ICNmZmYsIDM3OXB4IDE4OTBweCAjZmZmLCA3OXB4IDc2MXB4ICNmZmYsIDgyNXB4IDE4MzdweCAjZmZmLFxyXG4gICAgMTk4MHB4IDE1NThweCAjZmZmLCAxMzA4cHggMTU3M3B4ICNmZmYsIDE0ODhweCAxNzI2cHggI2ZmZixcclxuICAgIDM4MnB4IDEyMDhweCAjZmZmLCA1MjJweCA1OTVweCAjZmZmLCAxMjc3cHggMTg5OHB4ICNmZmYsIDM1NHB4IDU1MnB4ICNmZmYsXHJcbiAgICAxNjFweCAxNzg0cHggI2ZmZiwgNjE0cHggMjUxcHggI2ZmZiwgNTI2cHggMTU3NnB4ICNmZmYsIDE3cHggMjEycHggI2ZmZixcclxuICAgIDE3OXB4IDk5NnB4ICNmZmYsIDQ2N3B4IDEyMDhweCAjZmZmLCAxOTQ0cHggMTgzOHB4ICNmZmYsIDExNDBweCAxMDkzcHggI2ZmZixcclxuICAgIDg1OHB4IDEwMDdweCAjZmZmLCAyMDBweCAxMDY0cHggI2ZmZiwgNDIzcHggMTk2NHB4ICNmZmYsIDE5NDVweCA0MzlweCAjZmZmLFxyXG4gICAgMTM3N3B4IDY4OXB4ICNmZmYsIDExMjBweCAxNDM3cHggI2ZmZiwgMTg3NnB4IDY2OHB4ICNmZmYsIDkwN3B4IDEzMjRweCAjZmZmLFxyXG4gICAgMzQzcHggMTk3NnB4ICNmZmYsIDE4MTZweCAxNTAxcHggI2ZmZiwgMTg0OXB4IDE3N3B4ICNmZmYsIDY0N3B4IDkxcHggI2ZmZixcclxuICAgIDE5ODRweCAxMDEycHggI2ZmZiwgMTMzNnB4IDEzMDBweCAjZmZmLCAxMjhweCA2NDhweCAjZmZmLCAzMDVweCAxMDYwcHggI2ZmZixcclxuICAgIDEzMjRweCA4MjZweCAjZmZmLCAxMjYzcHggMTMxNHB4ICNmZmYsIDE4MDFweCA2MjlweCAjZmZmLCAxNjE0cHggMTU1NXB4ICNmZmYsXHJcbiAgICAxNjM0cHggOTBweCAjZmZmLCAxNjAzcHggNDUycHggI2ZmZiwgODkxcHggMTk4NHB4ICNmZmYsIDE1NTZweCAxOTA2cHggI2ZmZixcclxuICAgIDEyMXB4IDY4cHggI2ZmZiwgMTY3NnB4IDE3MTRweCAjZmZmLCA1MTZweCA5MzZweCAjZmZmLCAxOTQ3cHggMTQ5MnB4ICNmZmYsXHJcbiAgICAxNDU1cHggMTUxOXB4ICNmZmYsIDQ1cHggNjAycHggI2ZmZiwgMjA1cHggMTAzOXB4ICNmZmYsIDc5M3B4IDE3MnB4ICNmZmYsXHJcbiAgICAxNTYycHggMTczOXB4ICNmZmYsIDEwNTZweCAxMTBweCAjZmZmLCAxNTEycHggMzc5cHggI2ZmZiwgMTc5NXB4IDE2MjFweCAjZmZmLFxyXG4gICAgMTg0OHB4IDYwN3B4ICNmZmYsIDI2MnB4IDE3MTlweCAjZmZmLCA0NzdweCA5OTFweCAjZmZmLCA0ODNweCA4ODNweCAjZmZmLFxyXG4gICAgMTIzOXB4IDExOTdweCAjZmZmLCAxNDk2cHggNjQ3cHggI2ZmZiwgMTY0OXB4IDI1cHggI2ZmZiwgMTQ5MXB4IDE5NDZweCAjZmZmLFxyXG4gICAgMTE5cHggOTk2cHggI2ZmZiwgMTc5cHggMTQ3MnB4ICNmZmYsIDEzNDFweCA4MDhweCAjZmZmLCAxNTY1cHggMTcwMHB4ICNmZmYsXHJcbiAgICA0MDdweCAxNTQ0cHggI2ZmZiwgMTc1NHB4IDM1N3B4ICNmZmYsIDEyODhweCA5ODFweCAjZmZmLCA5MDJweCAxOTk3cHggI2ZmZixcclxuICAgIDE3NTVweCAxNjY4cHggI2ZmZiwgMTg2cHggODc3cHggI2ZmZiwgMTIwMnB4IDE4ODJweCAjZmZmLCA0NjFweCAxMjEzcHggI2ZmZixcclxuICAgIDE0MDBweCA3NDhweCAjZmZmLCAxOTY5cHggMTg5OXB4ICNmZmYsIDgwOXB4IDUyMnB4ICNmZmYsIDUxNHB4IDEyMTlweCAjZmZmLFxyXG4gICAgMzc0cHggMjc1cHggI2ZmZiwgOTM4cHggMTk3M3B4ICNmZmYsIDM1N3B4IDU1MnB4ICNmZmYsIDE0NHB4IDE3MjJweCAjZmZmLFxyXG4gICAgMTU3MnB4IDkxMnB4ICNmZmYsIDQwMnB4IDE4NThweCAjZmZmLCAxNTQ0cHggMTE5NXB4ICNmZmYsIDY2N3B4IDEyNTdweCAjZmZmLFxyXG4gICAgNzI3cHggMTQ5NnB4ICNmZmYsIDk5M3B4IDIzMnB4ICNmZmYsIDE3NzJweCAzMTNweCAjZmZmLCAxMDQwcHggMTU5MHB4ICNmZmYsXHJcbiAgICAxMjA0cHggMTk3M3B4ICNmZmYsIDEyNjhweCA3OXB4ICNmZmYsIDE1NTVweCAxMDQ4cHggI2ZmZiwgOTg2cHggMTcwN3B4ICNmZmYsXHJcbiAgICA5NzhweCAxNzEwcHggI2ZmZiwgNzEzcHggMzYwcHggI2ZmZiwgNDA3cHggODYzcHggI2ZmZiwgNDYxcHggNzM2cHggI2ZmZixcclxuICAgIDI4NHB4IDE2MDhweCAjZmZmLCAxMDNweCA0MzBweCAjZmZmLCAxMjgzcHggMTMxOXB4ICNmZmYsIDk3N3B4IDExODZweCAjZmZmLFxyXG4gICAgMTk2NnB4IDE1MTZweCAjZmZmLCAxMjg3cHggMTEyOXB4ICNmZmYsIDcwcHggMTA5OHB4ICNmZmYsIDExODlweCA4ODlweCAjZmZmLFxyXG4gICAgMTEyNnB4IDE3MzRweCAjZmZmLCAzMDlweCAxMjkycHggI2ZmZiwgODc5cHggNzY0cHggI2ZmZiwgNjVweCA0NzNweCAjZmZmLFxyXG4gICAgMTAwM3B4IDE5NTlweCAjZmZmLCA2NThweCA3OTFweCAjZmZmLCA0MDJweCAxNTc2cHggI2ZmZiwgMzVweCA2MjJweCAjZmZmLFxyXG4gICAgNTI5cHggMTU4OXB4ICNmZmYsIDE2NHB4IDY2NnB4ICNmZmYsIDE4NzZweCAxMjkwcHggI2ZmZiwgMTU0MXB4IDUyNnB4ICNmZmYsXHJcbiAgICAyNzBweCAxMjk3cHggI2ZmZiwgNDQwcHggODY1cHggI2ZmZiwgMTUwMHB4IDgwMnB4ICNmZmYsIDE4MnB4IDE3NTRweCAjZmZmLFxyXG4gICAgMTI2NHB4IDg5MnB4ICNmZmYsIDI3MnB4IDEyNDlweCAjZmZmLCAxMjg5cHggMTUzNXB4ICNmZmYsIDE5MHB4IDE2NDZweCAjZmZmLFxyXG4gICAgOTU1cHggMjQycHggI2ZmZiwgMTQ1NnB4IDE1OTdweCAjZmZmLCAxNzI3cHggMTk4M3B4ICNmZmYsIDYzNXB4IDgwMXB4ICNmZmYsXHJcbiAgICAyMjZweCA0NTVweCAjZmZmLCAxMzk2cHggMTcxMHB4ICNmZmYsIDg0OXB4IDE4NjNweCAjZmZmLCAyMzdweCAxMjY0cHggI2ZmZixcclxuICAgIDgzOXB4IDE0MHB4ICNmZmYsIDExMjJweCA3MzVweCAjZmZmLCAxMjgwcHggMTVweCAjZmZmLCAxMzE4cHggMjQycHggI2ZmZixcclxuICAgIDE4MTlweCAxMTQ4cHggI2ZmZiwgMzMzcHggMTM5MnB4ICNmZmYsIDE5NDlweCA1NTNweCAjZmZmLCAxODc4cHggMTMzMnB4ICNmZmYsXHJcbiAgICA0NjdweCA1NDhweCAjZmZmLCAxODEycHggMTA4MnB4ICNmZmYsIDEwNjdweCAxOTNweCAjZmZmLCAyNDNweCAxNTZweCAjZmZmLFxyXG4gICAgNDgzcHggMTYxNnB4ICNmZmYsIDE3MTRweCA5MzNweCAjZmZmLCA3NTlweCAxODAwcHggI2ZmZiwgMTgyMnB4IDk5NXB4ICNmZmYsXHJcbiAgICAxODc3cHggNTcycHggI2ZmZiwgNTgxcHggMTA4NHB4ICNmZmYsIDEwN3B4IDczMnB4ICNmZmYsIDY0MnB4IDE4MzdweCAjZmZmLFxyXG4gICAgMTY2cHggMTQ5M3B4ICNmZmYsIDE1NTVweCAxOThweCAjZmZmLCA4MTlweCAzMDdweCAjZmZmLCA5NDdweCAzNDVweCAjZmZmLFxyXG4gICAgODI3cHggMjI0cHggI2ZmZiwgOTI3cHggMTM5NHB4ICNmZmYsIDU0MHB4IDQ2N3B4ICNmZmYsIDEwOTNweCA0MDVweCAjZmZmLFxyXG4gICAgMTE0MHB4IDkyN3B4ICNmZmYsIDEzMHB4IDUyOXB4ICNmZmYsIDMzcHggMTk4MHB4ICNmZmYsIDExNDdweCAxNjYzcHggI2ZmZixcclxuICAgIDE2MTZweCAxNDM2cHggI2ZmZiwgNTI4cHggNzEwcHggI2ZmZiwgNzk4cHggMTEwMHB4ICNmZmYsIDUwNXB4IDE0ODBweCAjZmZmLFxyXG4gICAgODk5cHggNjQxcHggI2ZmZiwgMTkwOXB4IDE5NDlweCAjZmZmLCAxMzExcHggOTY0cHggI2ZmZiwgOTc5cHggMTMwMXB4ICNmZmYsXHJcbiAgICAxMzkzcHggOTY5cHggI2ZmZiwgMTc5M3B4IDE4ODZweCAjZmZmLCAyOTJweCAzNTdweCAjZmZmLCAxMTk2cHggMTcxOHB4ICNmZmYsXHJcbiAgICAxMjkwcHggMTk5NHB4ICNmZmYsIDUzN3B4IDE5NzNweCAjZmZmLCAxMTgxcHggMTY3NHB4ICNmZmYsXHJcbiAgICAxNzQwcHggMTU2NnB4ICNmZmYsIDEzMDdweCAyNjVweCAjZmZmLCA5MjJweCA1MjJweCAjZmZmLCAxODkycHggNDcycHggI2ZmZixcclxuICAgIDM4NHB4IDE3NDZweCAjZmZmLCAzOTJweCAxMDk4cHggI2ZmZiwgNjQ3cHggNTQ4cHggI2ZmZiwgMzkwcHggMTQ5OHB4ICNmZmYsXHJcbiAgICAxMjQ2cHggMTM4cHggI2ZmZiwgNzMwcHggODc2cHggI2ZmZiwgMTkycHggMTQ3MnB4ICNmZmYsIDE3OTBweCAxNzg5cHggI2ZmZixcclxuICAgIDkyOHB4IDMxMXB4ICNmZmYsIDEyNTNweCAxNjQ3cHggI2ZmZiwgNzQ3cHggMTkyMXB4ICNmZmYsIDE1NjFweCAxMDI1cHggI2ZmZixcclxuICAgIDE1MzNweCAxMjkycHggI2ZmZiwgMTk4NXB4IDE5NXB4ICNmZmYsIDcyOHB4IDcyOXB4ICNmZmYsIDE3MTJweCAxOTM2cHggI2ZmZixcclxuICAgIDUxMnB4IDE3MTdweCAjZmZmLCAxNTI4cHggNDgzcHggI2ZmZiwgMzEzcHggMTY0MnB4ICNmZmYsIDI4MXB4IDE4NDlweCAjZmZmLFxyXG4gICAgMTIxMnB4IDc5OXB4ICNmZmYsIDQzNXB4IDExOTFweCAjZmZmLCAxNDIycHggNjExcHggI2ZmZiwgMTcxOHB4IDE5NjRweCAjZmZmLFxyXG4gICAgNDExcHggOTQ0cHggI2ZmZiwgMjEwcHggNjM2cHggI2ZmZiwgMTUwMnB4IDEyOTVweCAjZmZmLCAxNDM0cHggMzQ5cHggI2ZmZixcclxuICAgIDc2OXB4IDYwcHggI2ZmZiwgNzQ3cHggMTA1M3B4ICNmZmYsIDc4OXB4IDUwNHB4ICNmZmYsIDE0MzZweCAxMjY0cHggI2ZmZixcclxuICAgIDE4OTNweCAxMjI1cHggI2ZmZiwgMTM5NHB4IDE3ODhweCAjZmZmLCAxMTA4cHggMTMxN3B4ICNmZmYsXHJcbiAgICAxNjczcHggMTM5NXB4ICNmZmYsIDg1NHB4IDEwMTBweCAjZmZmLCAxNzA1cHggODBweCAjZmZmLCAxODU4cHggMTQ4cHggI2ZmZixcclxuICAgIDE3MjlweCAzNDRweCAjZmZmLCAxMzg4cHggNjY0cHggI2ZmZiwgODk1cHggNDA2cHggI2ZmZiwgMTQ3OXB4IDE1N3B4ICNmZmYsXHJcbiAgICAxNDQxcHggMTE1N3B4ICNmZmYsIDU1MnB4IDE5MDBweCAjZmZmLCA1MTZweCAzNjRweCAjZmZmLCAxNjQ3cHggMTg5cHggI2ZmZixcclxuICAgIDE0MjdweCAxMDcxcHggI2ZmZiwgNzg1cHggNzI5cHggI2ZmZiwgMTA4MHB4IDE3MTBweCAjZmZmLCA1MDRweCAyMDRweCAjZmZmLFxyXG4gICAgMTE3N3B4IDE2MjJweCAjZmZmLCA2NTdweCAzNHB4ICNmZmYsIDEyOTZweCAxMDk5cHggI2ZmZiwgMjQ4cHggMTgwcHggI2ZmZixcclxuICAgIDEyMTJweCAxNTY4cHggI2ZmZiwgNjY3cHggMTU2MnB4ICNmZmYsIDY5NXB4IDg0MXB4ICNmZmYsIDE2MDhweCAxMjQ3cHggI2ZmZixcclxuICAgIDc1MXB4IDg4MnB4ICNmZmYsIDg3cHggMTY3cHggI2ZmZiwgNjA3cHggMTM2OHB4ICNmZmYsIDEzNjNweCAxMjAzcHggI2ZmZixcclxuICAgIDE4MzZweCAzMTdweCAjZmZmLCAxNjY4cHggMTcwM3B4ICNmZmYsIDgzMHB4IDExNTRweCAjZmZmLCAxNzIxcHggMTM5OHB4ICNmZmYsXHJcbiAgICAxNjAxcHggMTI4MHB4ICNmZmYsIDk3NnB4IDg3NHB4ICNmZmYsIDE3NDNweCAyNTRweCAjZmZmLCAxMDIwcHggMTgxNXB4ICNmZmYsXHJcbiAgICAxNjcwcHggMTc2NnB4ICNmZmYsIDE4OTBweCA3MzVweCAjZmZmLCAxMzc5cHggMTM2cHggI2ZmZiwgMTg2NHB4IDY5NXB4ICNmZmYsXHJcbiAgICAyMDZweCA5NjVweCAjZmZmLCAxNDA0cHggMTkzMnB4ICNmZmYsIDE5MjNweCAxMzYwcHggI2ZmZiwgMjQ3cHggNjgycHggI2ZmZixcclxuICAgIDUxOXB4IDE3MDhweCAjZmZmLCA2NDVweCA3NTBweCAjZmZmLCAxMTY0cHggMTIwNHB4ICNmZmYsIDgzNHB4IDMyM3B4ICNmZmYsXHJcbiAgICAxNzJweCAxMzUwcHggI2ZmZiwgMjEzcHggOTcycHggI2ZmZiwgMTgzN3B4IDE5MHB4ICNmZmYsIDI4NXB4IDE4MDZweCAjZmZmLFxyXG4gICAgMTA0N3B4IDEyOTlweCAjZmZmLCAxNTQ4cHggODI1cHggI2ZmZiwgMTczMHB4IDMyNHB4ICNmZmYsIDEzNDZweCAxOTA5cHggI2ZmZixcclxuICAgIDc3MnB4IDI3MHB4ICNmZmYsIDM0NXB4IDExOTBweCAjZmZmLCA0NzhweCAxNDMzcHggI2ZmZiwgMTQ3OXB4IDI1cHggI2ZmZixcclxuICAgIDE5OTRweCAxODMwcHggI2ZmZiwgMTc0NHB4IDczMnB4ICNmZmYsIDIwcHggMTYzNXB4ICNmZmYsIDY5MHB4IDE3OTVweCAjZmZmLFxyXG4gICAgMTU5NHB4IDU2OXB4ICNmZmYsIDU3OXB4IDI0NXB4ICNmZmYsIDEzOThweCA3MzNweCAjZmZmLCA0MDhweCAxMzUycHggI2ZmZixcclxuICAgIDE3NzRweCAxMjBweCAjZmZmLCAxMTUycHggMTM3MHB4ICNmZmYsIDE2OThweCAxODEwcHggI2ZmZiwgNzEwcHggMTQ1MHB4ICNmZmYsXHJcbiAgICA2NjVweCAyODZweCAjZmZmLCA0OTNweCAxNzIwcHggI2ZmZiwgNzg2cHggNXB4ICNmZmYsIDYzN3B4IDExNDBweCAjZmZmLFxyXG4gICAgNzY0cHggMzI0cHggI2ZmZiwgOTI3cHggMzEwcHggI2ZmZiwgOTM4cHggMTQyNHB4ICNmZmYsIDE4ODRweCA3NDRweCAjZmZmLFxyXG4gICAgOTEzcHggNDYycHggI2ZmZiwgMTgzMXB4IDE5MzZweCAjZmZmLCAxNTI3cHggMjQ5cHggI2ZmZiwgMzZweCAxMzgxcHggI2ZmZixcclxuICAgIDE1OTdweCA1ODFweCAjZmZmLCAxNTMwcHggMzU1cHggI2ZmZiwgOTQ5cHggNDU5cHggI2ZmZiwgNzk5cHggODI4cHggI2ZmZixcclxuICAgIDI0MnB4IDE0NzFweCAjZmZmLCA2NTRweCA3OTdweCAjZmZmLCA3OTZweCA1OTRweCAjZmZmLCAxMzY1cHggNjc4cHggI2ZmZixcclxuICAgIDc1MnB4IDIzcHggI2ZmZiwgMTYzMHB4IDU0MXB4ICNmZmYsIDk4MnB4IDcycHggI2ZmZiwgMTczM3B4IDE4MzFweCAjZmZmLFxyXG4gICAgMjFweCA0MTJweCAjZmZmLCA3NzVweCA5OThweCAjZmZmLCAzMzVweCAxOTQ1cHggI2ZmZiwgMjY0cHggNTgzcHggI2ZmZixcclxuICAgIDE1OHB4IDEzMTFweCAjZmZmLCA1MjhweCAxNjRweCAjZmZmLCAxOTc4cHggNTc0cHggI2ZmZiwgNzE3cHggMTIwM3B4ICNmZmYsXHJcbiAgICA3MzRweCAxNTkxcHggI2ZmZiwgMTU1NXB4IDgyMHB4ICNmZmYsIDE2cHggMTk0M3B4ICNmZmYsIDE2MjVweCAxMTc3cHggI2ZmZixcclxuICAgIDEyMzZweCA2OTBweCAjZmZmLCAxNTg1cHggMTU5MHB4ICNmZmYsIDE3MzdweCAxNzI4cHggI2ZmZiwgNzIxcHggNjk4cHggI2ZmZixcclxuICAgIDE4MDRweCAxMTg2cHggI2ZmZiwgMTY2cHggOTgwcHggI2ZmZiwgMTg1MHB4IDIzMHB4ICNmZmYsIDMzMHB4IDE3MTJweCAjZmZmLFxyXG4gICAgOTVweCA3OTdweCAjZmZmLCAxOTQ4cHggMTA3OHB4ICNmZmYsIDQ2OXB4IDkzOXB4ICNmZmYsIDEyNjlweCAxODk5cHggI2ZmZixcclxuICAgIDk1NXB4IDEyMjBweCAjZmZmLCAxMTM3cHggMTA3NXB4ICNmZmYsIDMxMnB4IDEyOTNweCAjZmZmLCA5ODZweCAxNzYycHggI2ZmZixcclxuICAgIDExMDNweCAxMjM4cHggI2ZmZiwgNDI4cHggMTk5M3B4ICNmZmYsIDM1NXB4IDU3MHB4ICNmZmYsIDk3N3B4IDE4MzZweCAjZmZmLFxyXG4gICAgMTM5NXB4IDEwOTJweCAjZmZmLCAyNzZweCA5MTNweCAjZmZmLCAxNzQzcHggNjU2cHggI2ZmZiwgNzczcHggNTAycHggI2ZmZixcclxuICAgIDE2ODZweCAxMzIycHggI2ZmZiwgMTUxNnB4IDE5NDVweCAjZmZmLCAxMzM0cHggNTAxcHggI2ZmZiwgMjY2cHggMTU2cHggI2ZmZixcclxuICAgIDQ1NXB4IDY1NXB4ICNmZmYsIDc5OHB4IDcycHggI2ZmZiwgMTA1OXB4IDEyNTlweCAjZmZmLCAxNDAycHggMTY4N3B4ICNmZmYsXHJcbiAgICAyMzZweCAxMzI5cHggI2ZmZiwgMTQ1NXB4IDc4NnB4ICNmZmYsIDE0NnB4IDEyMjhweCAjZmZmLCAxODUxcHggODIzcHggI2ZmZixcclxuICAgIDEwNjJweCAxMDBweCAjZmZmLCAxMjIwcHggOTUzcHggI2ZmZiwgMjBweCAxODI2cHggI2ZmZiwgMzZweCAxMDYzcHggI2ZmZixcclxuICAgIDE1MjVweCAzMzhweCAjZmZmLCA3OTBweCAxNTIxcHggI2ZmZiwgNzQxcHggMTA5OXB4ICNmZmYsIDI4OHB4IDE0ODlweCAjZmZmLFxyXG4gICAgNzAwcHggMTA2MHB4ICNmZmYsIDM5MHB4IDEwNzFweCAjZmZmLCA0MTFweCAxMDM2cHggI2ZmZiwgMTg1M3B4IDEwNzJweCAjZmZmLFxyXG4gICAgMTQ0NnB4IDEwODVweCAjZmZmLCAxMTY0cHggODc0cHggI2ZmZiwgOTI0cHggOTI1cHggI2ZmZiwgMjkxcHggMjcxcHggI2ZmZixcclxuICAgIDEyNTdweCAxOTY0cHggI2ZmZiwgMTU4MHB4IDEzNTJweCAjZmZmLCAxNTA3cHggMTIxNnB4ICNmZmYsIDIxMXB4IDk1NnB4ICNmZmYsXHJcbiAgICA5ODVweCAxMTk1cHggI2ZmZiwgOTc1cHggMTY0MHB4ICNmZmYsIDUxOHB4IDEwMXB4ICNmZmYsIDY2M3B4IDEzOTVweCAjZmZmLFxyXG4gICAgOTE0cHggNTMycHggI2ZmZiwgMTQ1cHggMTMyMHB4ICNmZmYsIDY5cHggMTM5N3B4ICNmZmYsIDk4MnB4IDUyM3B4ICNmZmYsXHJcbiAgICAyNTdweCA3MjVweCAjZmZmLCAxNTk5cHggODMxcHggI2ZmZiwgMTYzNnB4IDE1MTNweCAjZmZmLCAxMjUwcHggMTE1OHB4ICNmZmYsXHJcbiAgICAxMTMycHggNjA0cHggI2ZmZiwgMTgzcHggMTAycHggI2ZmZiwgMTA1N3B4IDMxOHB4ICNmZmYsIDEyNDdweCAxODM1cHggI2ZmZixcclxuICAgIDE5ODNweCAxMTEwcHggI2ZmZiwgMTA3N3B4IDE0NTVweCAjZmZmLCA5MjFweCAxNzcwcHggI2ZmZiwgODA2cHggMTM1MHB4ICNmZmYsXHJcbiAgICAxOTM4cHggMTk5MnB4ICNmZmYsIDg1NXB4IDEyNjBweCAjZmZmLCA5MDJweCAxMzQ1cHggI2ZmZiwgNjU4cHggMTkwOHB4ICNmZmYsXHJcbiAgICAxODQ1cHggNjc5cHggI2ZmZiwgNzEycHggMTQ4MnB4ICNmZmYsIDU5NXB4IDk1MHB4ICNmZmYsIDE3ODRweCAxOTkycHggI2ZmZixcclxuICAgIDE4NDdweCAxNzg1cHggI2ZmZiwgNjkxcHggMTAwNHB4ICNmZmYsIDE3NXB4IDExNzlweCAjZmZmLCAxNjY2cHggMTkxMXB4ICNmZmYsXHJcbiAgICA0MXB4IDYxcHggI2ZmZiwgOTcxcHggMTA4MHB4ICNmZmYsIDE4MzBweCAxNDUwcHggI2ZmZiwgMTM1MXB4IDE1MThweCAjZmZmLFxyXG4gICAgMTI1N3B4IDk5cHggI2ZmZiwgMTM5NXB4IDE0OThweCAjZmZmLCAxMTE3cHggMjUycHggI2ZmZiwgMTc3OXB4IDU5N3B4ICNmZmYsXHJcbiAgICAxMzQ2cHggNzI5cHggI2ZmZiwgMTEwOHB4IDExNDRweCAjZmZmLCA0MDJweCA2OTFweCAjZmZmLCA3MnB4IDQ5NnB4ICNmZmYsXHJcbiAgICAxNjczcHggMTYwNHB4ICNmZmYsIDE0OTdweCA5NzRweCAjZmZmLCAxODY1cHggMTY2NHB4ICNmZmYsIDg4cHggODA2cHggI2ZmZixcclxuICAgIDkxOHB4IDc3cHggI2ZmZiwgMjQ0cHggMTExOHB4ICNmZmYsIDI1NnB4IDE4MjBweCAjZmZmLCAxODUxcHggMTg0MHB4ICNmZmYsXHJcbiAgICA2MDVweCAxODUxcHggI2ZmZiwgNjM0cHggMzgzcHggI2ZmZiwgODY1cHggMzdweCAjZmZmLCA5NDNweCAxMDI0cHggI2ZmZixcclxuICAgIDE5NTFweCAxNzdweCAjZmZmLCAxMDk3cHggNTIzcHggI2ZmZiwgOTg1cHggMTcwMHB4ICNmZmYsIDEyNDNweCAxMjJweCAjZmZmLFxyXG4gICAgNzY4cHggMTA3MHB4ICNmZmYsIDQ2OHB4IDE5NHB4ICNmZmYsIDMyMHB4IDE4NjdweCAjZmZmLCAxODUwcHggMTg1cHggI2ZmZixcclxuICAgIDM4MHB4IDE2MTZweCAjZmZmLCA0NjhweCAxMjk0cHggI2ZmZiwgMTEyMnB4IDE3NDNweCAjZmZmLCA4ODRweCAyOTlweCAjZmZmLFxyXG4gICAgMTMwMHB4IDE5MTdweCAjZmZmLCAxODYwcHggMzk2cHggI2ZmZiwgMTI3MHB4IDk5MHB4ICNmZmYsIDUyOXB4IDczM3B4ICNmZmYsXHJcbiAgICAxOTc1cHggMTM0N3B4ICNmZmYsIDE4ODVweCA2ODVweCAjZmZmLCAyMjZweCA1MDZweCAjZmZmLCA2NTFweCA4NzhweCAjZmZmLFxyXG4gICAgMTMyM3B4IDY4MHB4ICNmZmYsIDEyODRweCA2ODBweCAjZmZmLCAyMzhweCAxOTY3cHggI2ZmZiwgOTExcHggMTc0cHggI2ZmZixcclxuICAgIDExMTFweCA1MjFweCAjZmZmLCAxMTUwcHggODVweCAjZmZmLCA3OTRweCA1MDJweCAjZmZmLCA0ODRweCAxODU2cHggI2ZmZixcclxuICAgIDE4MDlweCAzNjhweCAjZmZmLCAxMTJweCA5NTNweCAjZmZmLCA1OTBweCAxMDA5cHggI2ZmZiwgMTY1NXB4IDMxMXB4ICNmZmYsXHJcbiAgICAxMDBweCAxMDI2cHggI2ZmZiwgMTgwM3B4IDM1MnB4ICNmZmYsIDg2NXB4IDMwNnB4ICNmZmYsIDEwNzdweCAxMDE5cHggI2ZmZixcclxuICAgIDEzMzVweCA4NzJweCAjZmZmLCAxNjQ3cHggMTI5OHB4ICNmZmYsIDEyMzNweCAxMzg3cHggI2ZmZiwgNjk4cHggMTAzNnB4ICNmZmYsXHJcbiAgICA2NTlweCAxODYwcHggI2ZmZiwgMzg4cHggMTQxMnB4ICNmZmYsIDEyMTJweCA0NThweCAjZmZmLCA3NTVweCAxNDY4cHggI2ZmZixcclxuICAgIDY5NnB4IDE2NTRweCAjZmZmLCAxMTQ0cHggNjBweCAjZmZmO1xyXG59XHJcblxyXG4jc3RhcnMyIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltU3RhciAxMDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJveC1zaGFkb3c6IDE0NDhweCAzMjBweCAjZmZmLCAxNzc1cHggMTY2M3B4ICNmZmYsIDMzMnB4IDEzNjRweCAjZmZmLFxyXG4gICAgODc4cHggMzQwcHggI2ZmZiwgNTY5cHggMTgzMnB4ICNmZmYsIDE0MjJweCAxNjg0cHggI2ZmZiwgMTk0NnB4IDE5MDdweCAjZmZmLFxyXG4gICAgMTIxcHggOTc5cHggI2ZmZiwgMTA0NHB4IDEwNjlweCAjZmZmLCA0NjNweCAzODFweCAjZmZmLCA0MjNweCAxMTJweCAjZmZmLFxyXG4gICAgNTIzcHggMTE3OXB4ICNmZmYsIDc3OXB4IDY1NHB4ICNmZmYsIDEzOThweCA2OTRweCAjZmZmLCAxMDg1cHggMTQ2NHB4ICNmZmYsXHJcbiAgICAxNTk5cHggMTg2OXB4ICNmZmYsIDgwMXB4IDE4ODJweCAjZmZmLCA3NzlweCAxMjMxcHggI2ZmZiwgNTUycHggOTMycHggI2ZmZixcclxuICAgIDEwNTdweCAxMTk2cHggI2ZmZiwgMjgycHggMTI4MHB4ICNmZmYsIDQ5NnB4IDE5ODZweCAjZmZmLCAxODMzcHggMTEyMHB4ICNmZmYsXHJcbiAgICAxODAycHggMTI5M3B4ICNmZmYsIDZweCAxNjk2cHggI2ZmZiwgNDEycHggMTkwMnB4ICNmZmYsIDYwNXB4IDQzOHB4ICNmZmYsXHJcbiAgICAyNHB4IDEyMTJweCAjZmZmLCAyMzRweCAxMzIwcHggI2ZmZiwgNTQ0cHggMzQ0cHggI2ZmZiwgMTEwN3B4IDE3MHB4ICNmZmYsXHJcbiAgICAxNjAzcHggMTk2cHggI2ZmZiwgOTA1cHggNjQ4cHggI2ZmZiwgNjhweCAxNDU4cHggI2ZmZiwgNjQ5cHggMTk2OXB4ICNmZmYsXHJcbiAgICA3NDRweCA2NzVweCAjZmZmLCAxMTI3cHggNDc4cHggI2ZmZiwgNzE0cHggMTgxNHB4ICNmZmYsIDE0ODZweCA1MjZweCAjZmZmLFxyXG4gICAgMjcwcHggMTYzNnB4ICNmZmYsIDE5MzFweCAxNDlweCAjZmZmLCAxODA3cHggMzc4cHggI2ZmZiwgOHB4IDM5MHB4ICNmZmYsXHJcbiAgICAxNDE1cHggNjk5cHggI2ZmZiwgMTQ3M3B4IDEyMTFweCAjZmZmLCAxNTkwcHggMTQxcHggI2ZmZiwgMjcwcHggMTcwNXB4ICNmZmYsXHJcbiAgICA2OXB4IDE0MjNweCAjZmZmLCAxMTA4cHggMTA1M3B4ICNmZmYsIDE5NDZweCAxMjhweCAjZmZmLCAzNzFweCAzNzFweCAjZmZmLFxyXG4gICAgMTQ5MHB4IDIyMHB4ICNmZmYsIDM1N3B4IDE4ODVweCAjZmZmLCAzNjNweCAzNjNweCAjZmZmLCAxODk2cHggMTI1NnB4ICNmZmYsXHJcbiAgICAxOTc5cHggMTA1MHB4ICNmZmYsIDk0N3B4IDEzNDJweCAjZmZmLCAxNzU0cHggMjQycHggI2ZmZiwgNTE0cHggOTc0cHggI2ZmZixcclxuICAgIDY1cHggMTQ3N3B4ICNmZmYsIDE4NDBweCA1NDdweCAjZmZmLCA5NTBweCA2OTVweCAjZmZmLCA0NTlweCAxMTUwcHggI2ZmZixcclxuICAgIDExMjRweCAxNTAycHggI2ZmZiwgNDgxcHggOTQwcHggI2ZmZiwgNjgwcHggODM5cHggI2ZmZiwgNzk3cHggMTE2OXB4ICNmZmYsXHJcbiAgICAxOTc3cHggMTQ5MXB4ICNmZmYsIDczNHB4IDE3MjRweCAjZmZmLCAyMTBweCAyOThweCAjZmZmLCA4MTZweCA2MjhweCAjZmZmLFxyXG4gICAgNjg2cHggNzcwcHggI2ZmZiwgMTcyMXB4IDI2N3B4ICNmZmYsIDE2NjNweCA1MTFweCAjZmZmLCAxNDgxcHggMTE0MXB4ICNmZmYsXHJcbiAgICA1ODJweCAyNDhweCAjZmZmLCAxMzA4cHggOTUzcHggI2ZmZiwgNjI4cHggNjU3cHggI2ZmZiwgODk3cHggMTUzNXB4ICNmZmYsXHJcbiAgICAyNzBweCA5MzFweCAjZmZmLCA3OTFweCA0NjdweCAjZmZmLCAxMzM2cHggMTczMnB4ICNmZmYsIDEwMTNweCAxNjUzcHggI2ZmZixcclxuICAgIDE5MTFweCA5NTZweCAjZmZmLCA1ODdweCA4MTZweCAjZmZmLCA4M3B4IDQ1NnB4ICNmZmYsIDkzMHB4IDE0NzhweCAjZmZmLFxyXG4gICAgMTU4N3B4IDE2OTRweCAjZmZmLCA2MTRweCAxMjAwcHggI2ZmZiwgMzAycHggMTc4MnB4ICNmZmYsIDE3MTFweCAxNDMycHggI2ZmZixcclxuICAgIDQ0M3B4IDkwNHB4ICNmZmYsIDE2NjZweCA3MTRweCAjZmZmLCAxNTg4cHggMTE2N3B4ICNmZmYsIDI3M3B4IDEwNzVweCAjZmZmLFxyXG4gICAgMTY3OXB4IDQ2MXB4ICNmZmYsIDcyMXB4IDY2NHB4ICNmZmYsIDEyMDJweCAxMHB4ICNmZmYsIDE2NnB4IDExMjZweCAjZmZmLFxyXG4gICAgMzMxcHggMTYyOHB4ICNmZmYsIDQzMHB4IDE1NjVweCAjZmZmLCAxNTg1cHggNTA5cHggI2ZmZiwgNjQwcHggMzhweCAjZmZmLFxyXG4gICAgODIycHggODM3cHggI2ZmZiwgMTc2MHB4IDE2NjRweCAjZmZmLCAxMTIycHggMTQ1OHB4ICNmZmYsIDM5OHB4IDEzMXB4ICNmZmYsXHJcbiAgICA2ODlweCAyODVweCAjZmZmLCA0NjBweCA2NTJweCAjZmZmLCAxNjI3cHggMzY1cHggI2ZmZiwgMzQ4cHggMTY0OHB4ICNmZmYsXHJcbiAgICA4MTlweCAxOTQ2cHggI2ZmZiwgOTgxcHggMTkxN3B4ICNmZmYsIDMyM3B4IDc2cHggI2ZmZiwgOTc5cHggNjg0cHggI2ZmZixcclxuICAgIDg4N3B4IDUzNnB4ICNmZmYsIDEzNDhweCAxNTk2cHggI2ZmZiwgMTA1NXB4IDY2NnB4ICNmZmYsIDE0MDJweCAxNzk3cHggI2ZmZixcclxuICAgIDEzMDBweCAxMDU1cHggI2ZmZiwgOTM3cHggMjM4cHggI2ZmZiwgMTQ3NHB4IDE4MTVweCAjZmZmLCAxMTQ0cHggMTcxMHB4ICNmZmYsXHJcbiAgICAxNjI5cHggMTA4N3B4ICNmZmYsIDkxMXB4IDkxOXB4ICNmZmYsIDc3MXB4IDgxOXB4ICNmZmYsIDQwM3B4IDcyMHB4ICNmZmYsXHJcbiAgICAxNjNweCA3MzZweCAjZmZmLCAxMDYycHggMjM4cHggI2ZmZiwgMTc3NHB4IDgxOHB4ICNmZmYsIDE4NzRweCAxMTc4cHggI2ZmZixcclxuICAgIDExNzdweCA2OTlweCAjZmZmLCAxMjQ0cHggMTI0NHB4ICNmZmYsIDEzNzFweCA1OHB4ICNmZmYsIDU2NHB4IDE1MTVweCAjZmZmLFxyXG4gICAgMTgyNHB4IDQ4N3B4ICNmZmYsIDkyOXB4IDcwMnB4ICNmZmYsIDM5NHB4IDEzNDhweCAjZmZmLCAxMTYxcHggNjQxcHggI2ZmZixcclxuICAgIDIxOXB4IDE4NDFweCAjZmZmLCAzNThweCA5NDFweCAjZmZmLCAxNDBweCAxNzU5cHggI2ZmZiwgMTAxOXB4IDEzNDVweCAjZmZmLFxyXG4gICAgMjc0cHggNDM2cHggI2ZmZiwgMTQzM3B4IDE2MDVweCAjZmZmLCAxNzk4cHggMTQyNnB4ICNmZmYsIDI5NHB4IDE4NDhweCAjZmZmLFxyXG4gICAgMTY4MXB4IDE4NzdweCAjZmZmLCAxMzQ0cHggMTgyNHB4ICNmZmYsIDE0MzlweCAxNjMycHggI2ZmZixcclxuICAgIDE2MXB4IDEwMTJweCAjZmZmLCAxMzA4cHggNTg4cHggI2ZmZiwgMTc4OXB4IDU4MnB4ICNmZmYsIDcyMXB4IDE5MTBweCAjZmZmLFxyXG4gICAgMzE4cHggMjE4cHggI2ZmZiwgNjA3cHggMzE5cHggI2ZmZiwgNDk1cHggNTM1cHggI2ZmZiwgMTU1MnB4IDE1NzVweCAjZmZmLFxyXG4gICAgMTU2MnB4IDY3cHggI2ZmZiwgNDAzcHggOTI2cHggI2ZmZiwgMTA5NnB4IDE4MDBweCAjZmZmLCAxODE0cHggMTcwOXB4ICNmZmYsXHJcbiAgICAxODgycHggMTgzMXB4ICNmZmYsIDUzM3B4IDQ2cHggI2ZmZiwgODIzcHggOTY5cHggI2ZmZiwgNTMwcHggMTY1cHggI2ZmZixcclxuICAgIDEwMzBweCAzNTJweCAjZmZmLCAxNjgxcHggMzEzcHggI2ZmZiwgMzM4cHggMTE1cHggI2ZmZiwgMTYwN3B4IDIxMXB4ICNmZmYsXHJcbiAgICAxNzE4cHggMTE4NHB4ICNmZmYsIDE1ODlweCA2NTlweCAjZmZmLCAyNzhweCAzNTVweCAjZmZmLCA0NjRweCAxNDY0cHggI2ZmZixcclxuICAgIDExNjVweCAyNzdweCAjZmZmLCA5NTBweCA2OTRweCAjZmZmLCAxNzQ2cHggMjkzcHggI2ZmZiwgNzkzcHggOTExcHggI2ZmZixcclxuICAgIDUyOHB4IDc3M3B4ICNmZmYsIDE4ODNweCAxNjk0cHggI2ZmZiwgNzQ4cHggMTgycHggI2ZmZiwgMTkyNHB4IDE1MzFweCAjZmZmLFxyXG4gICAgMTAwcHggNjM2cHggI2ZmZiwgMTQ3M3B4IDE0NDVweCAjZmZmLCAxMjY0cHggMTI0NHB4ICNmZmYsIDg1MHB4IDEzNzdweCAjZmZmLFxyXG4gICAgOTg3cHggMTk3NnB4ICNmZmYsIDkzM3B4IDE3NjFweCAjZmZmLCA5MjJweCAxMjcwcHggI2ZmZiwgNTAwcHggMzk2cHggI2ZmZixcclxuICAgIDEzMjRweCA4cHggI2ZmZiwgMTk2N3B4IDE4MTRweCAjZmZmLCAxMDcycHggMTQwMXB4ICNmZmYsIDk2MXB4IDM3cHggI2ZmZixcclxuICAgIDE1NnB4IDgxcHggI2ZmZiwgMTkxNXB4IDUwMnB4ICNmZmYsIDEwNzZweCAxODQ2cHggI2ZmZiwgMTUycHggMTY2OXB4ICNmZmYsXHJcbiAgICA5ODZweCAxNTI5cHggI2ZmZiwgMTY2N3B4IDExMzdweCAjZmZmO1xyXG59XHJcblxyXG4jc3RhcnMyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDAwcHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDE0NDhweCAzMjBweCAjZmZmLCAxNzc1cHggMTY2M3B4ICNmZmYsIDMzMnB4IDEzNjRweCAjZmZmLFxyXG4gICAgODc4cHggMzQwcHggI2ZmZiwgNTY5cHggMTgzMnB4ICNmZmYsIDE0MjJweCAxNjg0cHggI2ZmZiwgMTk0NnB4IDE5MDdweCAjZmZmLFxyXG4gICAgMTIxcHggOTc5cHggI2ZmZiwgMTA0NHB4IDEwNjlweCAjZmZmLCA0NjNweCAzODFweCAjZmZmLCA0MjNweCAxMTJweCAjZmZmLFxyXG4gICAgNTIzcHggMTE3OXB4ICNmZmYsIDc3OXB4IDY1NHB4ICNmZmYsIDEzOThweCA2OTRweCAjZmZmLCAxMDg1cHggMTQ2NHB4ICNmZmYsXHJcbiAgICAxNTk5cHggMTg2OXB4ICNmZmYsIDgwMXB4IDE4ODJweCAjZmZmLCA3NzlweCAxMjMxcHggI2ZmZiwgNTUycHggOTMycHggI2ZmZixcclxuICAgIDEwNTdweCAxMTk2cHggI2ZmZiwgMjgycHggMTI4MHB4ICNmZmYsIDQ5NnB4IDE5ODZweCAjZmZmLCAxODMzcHggMTEyMHB4ICNmZmYsXHJcbiAgICAxODAycHggMTI5M3B4ICNmZmYsIDZweCAxNjk2cHggI2ZmZiwgNDEycHggMTkwMnB4ICNmZmYsIDYwNXB4IDQzOHB4ICNmZmYsXHJcbiAgICAyNHB4IDEyMTJweCAjZmZmLCAyMzRweCAxMzIwcHggI2ZmZiwgNTQ0cHggMzQ0cHggI2ZmZiwgMTEwN3B4IDE3MHB4ICNmZmYsXHJcbiAgICAxNjAzcHggMTk2cHggI2ZmZiwgOTA1cHggNjQ4cHggI2ZmZiwgNjhweCAxNDU4cHggI2ZmZiwgNjQ5cHggMTk2OXB4ICNmZmYsXHJcbiAgICA3NDRweCA2NzVweCAjZmZmLCAxMTI3cHggNDc4cHggI2ZmZiwgNzE0cHggMTgxNHB4ICNmZmYsIDE0ODZweCA1MjZweCAjZmZmLFxyXG4gICAgMjcwcHggMTYzNnB4ICNmZmYsIDE5MzFweCAxNDlweCAjZmZmLCAxODA3cHggMzc4cHggI2ZmZiwgOHB4IDM5MHB4ICNmZmYsXHJcbiAgICAxNDE1cHggNjk5cHggI2ZmZiwgMTQ3M3B4IDEyMTFweCAjZmZmLCAxNTkwcHggMTQxcHggI2ZmZiwgMjcwcHggMTcwNXB4ICNmZmYsXHJcbiAgICA2OXB4IDE0MjNweCAjZmZmLCAxMTA4cHggMTA1M3B4ICNmZmYsIDE5NDZweCAxMjhweCAjZmZmLCAzNzFweCAzNzFweCAjZmZmLFxyXG4gICAgMTQ5MHB4IDIyMHB4ICNmZmYsIDM1N3B4IDE4ODVweCAjZmZmLCAzNjNweCAzNjNweCAjZmZmLCAxODk2cHggMTI1NnB4ICNmZmYsXHJcbiAgICAxOTc5cHggMTA1MHB4ICNmZmYsIDk0N3B4IDEzNDJweCAjZmZmLCAxNzU0cHggMjQycHggI2ZmZiwgNTE0cHggOTc0cHggI2ZmZixcclxuICAgIDY1cHggMTQ3N3B4ICNmZmYsIDE4NDBweCA1NDdweCAjZmZmLCA5NTBweCA2OTVweCAjZmZmLCA0NTlweCAxMTUwcHggI2ZmZixcclxuICAgIDExMjRweCAxNTAycHggI2ZmZiwgNDgxcHggOTQwcHggI2ZmZiwgNjgwcHggODM5cHggI2ZmZiwgNzk3cHggMTE2OXB4ICNmZmYsXHJcbiAgICAxOTc3cHggMTQ5MXB4ICNmZmYsIDczNHB4IDE3MjRweCAjZmZmLCAyMTBweCAyOThweCAjZmZmLCA4MTZweCA2MjhweCAjZmZmLFxyXG4gICAgNjg2cHggNzcwcHggI2ZmZiwgMTcyMXB4IDI2N3B4ICNmZmYsIDE2NjNweCA1MTFweCAjZmZmLCAxNDgxcHggMTE0MXB4ICNmZmYsXHJcbiAgICA1ODJweCAyNDhweCAjZmZmLCAxMzA4cHggOTUzcHggI2ZmZiwgNjI4cHggNjU3cHggI2ZmZiwgODk3cHggMTUzNXB4ICNmZmYsXHJcbiAgICAyNzBweCA5MzFweCAjZmZmLCA3OTFweCA0NjdweCAjZmZmLCAxMzM2cHggMTczMnB4ICNmZmYsIDEwMTNweCAxNjUzcHggI2ZmZixcclxuICAgIDE5MTFweCA5NTZweCAjZmZmLCA1ODdweCA4MTZweCAjZmZmLCA4M3B4IDQ1NnB4ICNmZmYsIDkzMHB4IDE0NzhweCAjZmZmLFxyXG4gICAgMTU4N3B4IDE2OTRweCAjZmZmLCA2MTRweCAxMjAwcHggI2ZmZiwgMzAycHggMTc4MnB4ICNmZmYsIDE3MTFweCAxNDMycHggI2ZmZixcclxuICAgIDQ0M3B4IDkwNHB4ICNmZmYsIDE2NjZweCA3MTRweCAjZmZmLCAxNTg4cHggMTE2N3B4ICNmZmYsIDI3M3B4IDEwNzVweCAjZmZmLFxyXG4gICAgMTY3OXB4IDQ2MXB4ICNmZmYsIDcyMXB4IDY2NHB4ICNmZmYsIDEyMDJweCAxMHB4ICNmZmYsIDE2NnB4IDExMjZweCAjZmZmLFxyXG4gICAgMzMxcHggMTYyOHB4ICNmZmYsIDQzMHB4IDE1NjVweCAjZmZmLCAxNTg1cHggNTA5cHggI2ZmZiwgNjQwcHggMzhweCAjZmZmLFxyXG4gICAgODIycHggODM3cHggI2ZmZiwgMTc2MHB4IDE2NjRweCAjZmZmLCAxMTIycHggMTQ1OHB4ICNmZmYsIDM5OHB4IDEzMXB4ICNmZmYsXHJcbiAgICA2ODlweCAyODVweCAjZmZmLCA0NjBweCA2NTJweCAjZmZmLCAxNjI3cHggMzY1cHggI2ZmZiwgMzQ4cHggMTY0OHB4ICNmZmYsXHJcbiAgICA4MTlweCAxOTQ2cHggI2ZmZiwgOTgxcHggMTkxN3B4ICNmZmYsIDMyM3B4IDc2cHggI2ZmZiwgOTc5cHggNjg0cHggI2ZmZixcclxuICAgIDg4N3B4IDUzNnB4ICNmZmYsIDEzNDhweCAxNTk2cHggI2ZmZiwgMTA1NXB4IDY2NnB4ICNmZmYsIDE0MDJweCAxNzk3cHggI2ZmZixcclxuICAgIDEzMDBweCAxMDU1cHggI2ZmZiwgOTM3cHggMjM4cHggI2ZmZiwgMTQ3NHB4IDE4MTVweCAjZmZmLCAxMTQ0cHggMTcxMHB4ICNmZmYsXHJcbiAgICAxNjI5cHggMTA4N3B4ICNmZmYsIDkxMXB4IDkxOXB4ICNmZmYsIDc3MXB4IDgxOXB4ICNmZmYsIDQwM3B4IDcyMHB4ICNmZmYsXHJcbiAgICAxNjNweCA3MzZweCAjZmZmLCAxMDYycHggMjM4cHggI2ZmZiwgMTc3NHB4IDgxOHB4ICNmZmYsIDE4NzRweCAxMTc4cHggI2ZmZixcclxuICAgIDExNzdweCA2OTlweCAjZmZmLCAxMjQ0cHggMTI0NHB4ICNmZmYsIDEzNzFweCA1OHB4ICNmZmYsIDU2NHB4IDE1MTVweCAjZmZmLFxyXG4gICAgMTgyNHB4IDQ4N3B4ICNmZmYsIDkyOXB4IDcwMnB4ICNmZmYsIDM5NHB4IDEzNDhweCAjZmZmLCAxMTYxcHggNjQxcHggI2ZmZixcclxuICAgIDIxOXB4IDE4NDFweCAjZmZmLCAzNThweCA5NDFweCAjZmZmLCAxNDBweCAxNzU5cHggI2ZmZiwgMTAxOXB4IDEzNDVweCAjZmZmLFxyXG4gICAgMjc0cHggNDM2cHggI2ZmZiwgMTQzM3B4IDE2MDVweCAjZmZmLCAxNzk4cHggMTQyNnB4ICNmZmYsIDI5NHB4IDE4NDhweCAjZmZmLFxyXG4gICAgMTY4MXB4IDE4NzdweCAjZmZmLCAxMzQ0cHggMTgyNHB4ICNmZmYsIDE0MzlweCAxNjMycHggI2ZmZixcclxuICAgIDE2MXB4IDEwMTJweCAjZmZmLCAxMzA4cHggNTg4cHggI2ZmZiwgMTc4OXB4IDU4MnB4ICNmZmYsIDcyMXB4IDE5MTBweCAjZmZmLFxyXG4gICAgMzE4cHggMjE4cHggI2ZmZiwgNjA3cHggMzE5cHggI2ZmZiwgNDk1cHggNTM1cHggI2ZmZiwgMTU1MnB4IDE1NzVweCAjZmZmLFxyXG4gICAgMTU2MnB4IDY3cHggI2ZmZiwgNDAzcHggOTI2cHggI2ZmZiwgMTA5NnB4IDE4MDBweCAjZmZmLCAxODE0cHggMTcwOXB4ICNmZmYsXHJcbiAgICAxODgycHggMTgzMXB4ICNmZmYsIDUzM3B4IDQ2cHggI2ZmZiwgODIzcHggOTY5cHggI2ZmZiwgNTMwcHggMTY1cHggI2ZmZixcclxuICAgIDEwMzBweCAzNTJweCAjZmZmLCAxNjgxcHggMzEzcHggI2ZmZiwgMzM4cHggMTE1cHggI2ZmZiwgMTYwN3B4IDIxMXB4ICNmZmYsXHJcbiAgICAxNzE4cHggMTE4NHB4ICNmZmYsIDE1ODlweCA2NTlweCAjZmZmLCAyNzhweCAzNTVweCAjZmZmLCA0NjRweCAxNDY0cHggI2ZmZixcclxuICAgIDExNjVweCAyNzdweCAjZmZmLCA5NTBweCA2OTRweCAjZmZmLCAxNzQ2cHggMjkzcHggI2ZmZiwgNzkzcHggOTExcHggI2ZmZixcclxuICAgIDUyOHB4IDc3M3B4ICNmZmYsIDE4ODNweCAxNjk0cHggI2ZmZiwgNzQ4cHggMTgycHggI2ZmZiwgMTkyNHB4IDE1MzFweCAjZmZmLFxyXG4gICAgMTAwcHggNjM2cHggI2ZmZiwgMTQ3M3B4IDE0NDVweCAjZmZmLCAxMjY0cHggMTI0NHB4ICNmZmYsIDg1MHB4IDEzNzdweCAjZmZmLFxyXG4gICAgOTg3cHggMTk3NnB4ICNmZmYsIDkzM3B4IDE3NjFweCAjZmZmLCA5MjJweCAxMjcwcHggI2ZmZiwgNTAwcHggMzk2cHggI2ZmZixcclxuICAgIDEzMjRweCA4cHggI2ZmZiwgMTk2N3B4IDE4MTRweCAjZmZmLCAxMDcycHggMTQwMXB4ICNmZmYsIDk2MXB4IDM3cHggI2ZmZixcclxuICAgIDE1NnB4IDgxcHggI2ZmZiwgMTkxNXB4IDUwMnB4ICNmZmYsIDEwNzZweCAxODQ2cHggI2ZmZiwgMTUycHggMTY2OXB4ICNmZmYsXHJcbiAgICA5ODZweCAxNTI5cHggI2ZmZiwgMTY2N3B4IDExMzdweCAjZmZmO1xyXG59XHJcblxyXG4jc3RhcnMzIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltU3RhciAxNTBzIGxpbmVhciBpbmZpbnRlO1xyXG4gICAgYm94LXNoYWRvdzogMzg3cHggMTg3OHB4ICNmZmYsIDc2MHB4IDE1NjRweCAjZmZmLCAxNDg3cHggOTk5cHggI2ZmZixcclxuICAgIDk0OHB4IDE4MjhweCAjZmZmLCAxOTc3cHggMTAwMXB4ICNmZmYsIDEyODRweCAxOTYzcHggI2ZmZiwgNjU2cHggMjg0cHggI2ZmZixcclxuICAgIDEyNjhweCAxNjM1cHggI2ZmZiwgMTgyMHB4IDU5OHB4ICNmZmYsIDY0MnB4IDE5MDBweCAjZmZmLCAyOTZweCA1N3B4ICNmZmYsXHJcbiAgICA5MjFweCAxNjIwcHggI2ZmZiwgNDc2cHggMTg1OHB4ICNmZmYsIDY1OHB4IDYxM3B4ICNmZmYsIDExNzFweCAxMzYzcHggI2ZmZixcclxuICAgIDE0MTlweCAyODNweCAjZmZmLCAxMDM3cHggNzMxcHggI2ZmZiwgNTAzcHggNjYzcHggI2ZmZiwgMTU2MnB4IDQ2M3B4ICNmZmYsXHJcbiAgICAzODNweCAxMTk3cHggI2ZmZiwgMTE3MXB4IDEyMzNweCAjZmZmLCA4NzZweCAxNzY4cHggI2ZmZiwgODU2cHggMTYxNXB4ICNmZmYsXHJcbiAgICAxMzc1cHggMTkyNHB4ICNmZmYsIDE3MjVweCA5MThweCAjZmZmLCA5NTJweCAxMTlweCAjZmZmLCA3NjhweCAxMjEycHggI2ZmZixcclxuICAgIDk5MnB4IDE0NjJweCAjZmZmLCAxOTI5cHggNzE3cHggI2ZmZiwgMTk0N3B4IDc1NXB4ICNmZmYsIDE4MThweCAxMTIzcHggI2ZmZixcclxuICAgIDE4OTZweCAxNjcycHggI2ZmZiwgNDYwcHggMTk4cHggI2ZmZiwgMjU2cHggMjcxcHggI2ZmZiwgNzUycHggNTQ0cHggI2ZmZixcclxuICAgIDEyMjJweCAxODU5cHggI2ZmZiwgMTg1MXB4IDQ0M3B4ICNmZmYsIDMxM3B4IDE4NThweCAjZmZmLCA3MDlweCA0NDZweCAjZmZmLFxyXG4gICAgMTU0NnB4IDY5N3B4ICNmZmYsIDY3NHB4IDExNTVweCAjZmZmLCAxMTEycHggMTMwcHggI2ZmZiwgMzU1cHggMTc5MHB4ICNmZmYsXHJcbiAgICAxNDk2cHggOTc0cHggI2ZmZiwgMTY5NnB4IDQ4MHB4ICNmZmYsIDEzMTZweCAxMjY1cHggI2ZmZiwgMTY0NXB4IDEwNjNweCAjZmZmLFxyXG4gICAgMTE4MnB4IDIzN3B4ICNmZmYsIDQyN3B4IDE1ODJweCAjZmZmLCA4NTlweCAyNTNweCAjZmZmLCA0NThweCA5MzlweCAjZmZmLFxyXG4gICAgMTUxN3B4IDE2NDRweCAjZmZmLCAxOTQzcHggNjBweCAjZmZmLCAyMTJweCAxNjUwcHggI2ZmZiwgOTY2cHggMTc4NnB4ICNmZmYsXHJcbiAgICA0NzNweCA3MTJweCAjZmZmLCAxMzBweCA3NnB4ICNmZmYsIDE0MTdweCAxMTg2cHggI2ZmZiwgOTA5cHggMTU4MHB4ICNmZmYsXHJcbiAgICAxOTEzcHggNzYycHggI2ZmZiwgMjA0cHggMTE0M3B4ICNmZmYsIDE5OThweCAxMDU3cHggI2ZmZiwgMTQ2OHB4IDEzMDFweCAjZmZmLFxyXG4gICAgMTQ0cHggMTY3NnB4ICNmZmYsIDIxcHggMTYwMXB4ICNmZmYsIDM4MnB4IDEzNjJweCAjZmZmLCA5MTJweCA3NTNweCAjZmZmLFxyXG4gICAgMTQ4OHB4IDE0MDVweCAjZmZmLCA4MDJweCAxNTZweCAjZmZmLCAxNzRweCA1NTBweCAjZmZmLCAzMzhweCAxMzY2cHggI2ZmZixcclxuICAgIDExOTdweCA3NzRweCAjZmZmLCA2MDJweCA0ODZweCAjZmZmLCA2ODJweCAxODc3cHggI2ZmZiwgMzQ4cHggMTUwM3B4ICNmZmYsXHJcbiAgICA0MDdweCAxMTM5cHggI2ZmZiwgOTUwcHggMTQwMHB4ICNmZmYsIDkyMnB4IDExMzlweCAjZmZmLCAxNjk3cHggMjkzcHggI2ZmZixcclxuICAgIDEyMzhweCAxMjgxcHggI2ZmZiwgMTAzOHB4IDExOTdweCAjZmZmLCAzNzZweCAxODg5cHggI2ZmZixcclxuICAgIDEyNTVweCAxNjgwcHggI2ZmZiwgMTAwOHB4IDEzMTZweCAjZmZmLCAxNTM4cHggMTQ0N3B4ICNmZmYsXHJcbiAgICAxMTg2cHggODc0cHggI2ZmZiwgMTk2N3B4IDY0MHB4ICNmZmYsIDEzNDFweCAxOXB4ICNmZmYsIDI5cHggMTczMnB4ICNmZmYsXHJcbiAgICAxNnB4IDE2NTBweCAjZmZmLCAxMDIxcHggMTA3NXB4ICNmZmYsIDcyM3B4IDQyNHB4ICNmZmYsIDExNzVweCA0MXB4ICNmZmYsXHJcbiAgICA0OTRweCAxOTU3cHggI2ZmZiwgMTI5NnB4IDQzMXB4ICNmZmYsIDE3NXB4IDE1MDdweCAjZmZmLCA4MzFweCAxMjFweCAjZmZmLFxyXG4gICAgNDk4cHggMTk0N3B4ICNmZmYsIDYxN3B4IDg4MHB4ICNmZmYsIDI0MHB4IDQwM3B4ICNmZmY7XHJcbn1cclxuXHJcbiNzdGFyczM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMDBweDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMzg3cHggMTg3OHB4ICNmZmYsIDc2MHB4IDE1NjRweCAjZmZmLCAxNDg3cHggOTk5cHggI2ZmZixcclxuICAgIDk0OHB4IDE4MjhweCAjZmZmLCAxOTc3cHggMTAwMXB4ICNmZmYsIDEyODRweCAxOTYzcHggI2ZmZiwgNjU2cHggMjg0cHggI2ZmZixcclxuICAgIDEyNjhweCAxNjM1cHggI2ZmZiwgMTgyMHB4IDU5OHB4ICNmZmYsIDY0MnB4IDE5MDBweCAjZmZmLCAyOTZweCA1N3B4ICNmZmYsXHJcbiAgICA5MjFweCAxNjIwcHggI2ZmZiwgNDc2cHggMTg1OHB4ICNmZmYsIDY1OHB4IDYxM3B4ICNmZmYsIDExNzFweCAxMzYzcHggI2ZmZixcclxuICAgIDE0MTlweCAyODNweCAjZmZmLCAxMDM3cHggNzMxcHggI2ZmZiwgNTAzcHggNjYzcHggI2ZmZiwgMTU2MnB4IDQ2M3B4ICNmZmYsXHJcbiAgICAzODNweCAxMTk3cHggI2ZmZiwgMTE3MXB4IDEyMzNweCAjZmZmLCA4NzZweCAxNzY4cHggI2ZmZiwgODU2cHggMTYxNXB4ICNmZmYsXHJcbiAgICAxMzc1cHggMTkyNHB4ICNmZmYsIDE3MjVweCA5MThweCAjZmZmLCA5NTJweCAxMTlweCAjZmZmLCA3NjhweCAxMjEycHggI2ZmZixcclxuICAgIDk5MnB4IDE0NjJweCAjZmZmLCAxOTI5cHggNzE3cHggI2ZmZiwgMTk0N3B4IDc1NXB4ICNmZmYsIDE4MThweCAxMTIzcHggI2ZmZixcclxuICAgIDE4OTZweCAxNjcycHggI2ZmZiwgNDYwcHggMTk4cHggI2ZmZiwgMjU2cHggMjcxcHggI2ZmZiwgNzUycHggNTQ0cHggI2ZmZixcclxuICAgIDEyMjJweCAxODU5cHggI2ZmZiwgMTg1MXB4IDQ0M3B4ICNmZmYsIDMxM3B4IDE4NThweCAjZmZmLCA3MDlweCA0NDZweCAjZmZmLFxyXG4gICAgMTU0NnB4IDY5N3B4ICNmZmYsIDY3NHB4IDExNTVweCAjZmZmLCAxMTEycHggMTMwcHggI2ZmZiwgMzU1cHggMTc5MHB4ICNmZmYsXHJcbiAgICAxNDk2cHggOTc0cHggI2ZmZiwgMTY5NnB4IDQ4MHB4ICNmZmYsIDEzMTZweCAxMjY1cHggI2ZmZiwgMTY0NXB4IDEwNjNweCAjZmZmLFxyXG4gICAgMTE4MnB4IDIzN3B4ICNmZmYsIDQyN3B4IDE1ODJweCAjZmZmLCA4NTlweCAyNTNweCAjZmZmLCA0NThweCA5MzlweCAjZmZmLFxyXG4gICAgMTUxN3B4IDE2NDRweCAjZmZmLCAxOTQzcHggNjBweCAjZmZmLCAyMTJweCAxNjUwcHggI2ZmZiwgOTY2cHggMTc4NnB4ICNmZmYsXHJcbiAgICA0NzNweCA3MTJweCAjZmZmLCAxMzBweCA3NnB4ICNmZmYsIDE0MTdweCAxMTg2cHggI2ZmZiwgOTA5cHggMTU4MHB4ICNmZmYsXHJcbiAgICAxOTEzcHggNzYycHggI2ZmZiwgMjA0cHggMTE0M3B4ICNmZmYsIDE5OThweCAxMDU3cHggI2ZmZiwgMTQ2OHB4IDEzMDFweCAjZmZmLFxyXG4gICAgMTQ0cHggMTY3NnB4ICNmZmYsIDIxcHggMTYwMXB4ICNmZmYsIDM4MnB4IDEzNjJweCAjZmZmLCA5MTJweCA3NTNweCAjZmZmLFxyXG4gICAgMTQ4OHB4IDE0MDVweCAjZmZmLCA4MDJweCAxNTZweCAjZmZmLCAxNzRweCA1NTBweCAjZmZmLCAzMzhweCAxMzY2cHggI2ZmZixcclxuICAgIDExOTdweCA3NzRweCAjZmZmLCA2MDJweCA0ODZweCAjZmZmLCA2ODJweCAxODc3cHggI2ZmZiwgMzQ4cHggMTUwM3B4ICNmZmYsXHJcbiAgICA0MDdweCAxMTM5cHggI2ZmZiwgOTUwcHggMTQwMHB4ICNmZmYsIDkyMnB4IDExMzlweCAjZmZmLCAxNjk3cHggMjkzcHggI2ZmZixcclxuICAgIDEyMzhweCAxMjgxcHggI2ZmZiwgMTAzOHB4IDExOTdweCAjZmZmLCAzNzZweCAxODg5cHggI2ZmZixcclxuICAgIDEyNTVweCAxNjgwcHggI2ZmZiwgMTAwOHB4IDEzMTZweCAjZmZmLCAxNTM4cHggMTQ0N3B4ICNmZmYsXHJcbiAgICAxMTg2cHggODc0cHggI2ZmZiwgMTk2N3B4IDY0MHB4ICNmZmYsIDEzNDFweCAxOXB4ICNmZmYsIDI5cHggMTczMnB4ICNmZmYsXHJcbiAgICAxNnB4IDE2NTBweCAjZmZmLCAxMDIxcHggMTA3NXB4ICNmZmYsIDcyM3B4IDQyNHB4ICNmZmYsIDExNzVweCA0MXB4ICNmZmYsXHJcbiAgICA0OTRweCAxOTU3cHggI2ZmZiwgMTI5NnB4IDQzMXB4ICNmZmYsIDE3NXB4IDE1MDdweCAjZmZmLCA4MzFweCAxMjFweCAjZmZmLFxyXG4gICAgNDk4cHggMTk0N3B4ICNmZmYsIDYxN3B4IDg4MHB4ICNmZmYsIDI0MHB4IDQwM3B4ICNmZmY7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1TdGFyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgIH1cclxufVxyXG4gIFxyXG5Aa2V5ZnJhbWVzIGJsaW5rVGV4dEN1cnNvciB7XHJcblxyXG5mcm9tIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxudG8ge1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\Desktop\Portfolio_ajayu712\portfolio_main\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map