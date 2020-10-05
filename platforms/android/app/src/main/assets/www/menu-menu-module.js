(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/components/common/api.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/components/common/api.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
exports.DomHandler = domhandler_1.DomHandler;
var treedragdropservice_1 = __webpack_require__(/*! ./treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
exports.TreeDragDropService = treedragdropservice_1.TreeDragDropService;
var confirmationservice_1 = __webpack_require__(/*! ./confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
exports.ConfirmationService = confirmationservice_1.ConfirmationService;
var messageservice_1 = __webpack_require__(/*! ./messageservice */ "./node_modules/primeng/components/common/messageservice.js");
exports.MessageService = messageservice_1.MessageService;
var dialogservice_1 = __webpack_require__(/*! ../dynamicdialog/dialogservice */ "./node_modules/primeng/components/dynamicdialog/dialogservice.js");
exports.DialogService = dialogservice_1.DialogService;
var dynamicdialog_config_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
exports.DynamicDialogConfig = dynamicdialog_config_1.DynamicDialogConfig;
var dynamicdialog_ref_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
exports.DynamicDialogRef = dynamicdialog_ref_1.DynamicDialogRef;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/confirmationservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/confirmationservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.requireConfirmationSource = new rxjs_1.Subject();
        this.acceptConfirmationSource = new rxjs_1.Subject();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    ConfirmationService.prototype.confirm = function (confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    };
    ConfirmationService.prototype.onAccept = function () {
        this.acceptConfirmationSource.next();
    };
    ConfirmationService = __decorate([
        core_1.Injectable()
    ], ConfirmationService);
    return ConfirmationService;
}());
exports.ConfirmationService = ConfirmationService;
//# sourceMappingURL=confirmationservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dialogservice.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dialogservice.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dynamicdialog_1 = __webpack_require__(/*! ./dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js");
var dynamicdialog_injector_1 = __webpack_require__(/*! ./dynamicdialog-injector */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js");
var dynamicdialog_config_1 = __webpack_require__(/*! ./dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
var dynamicdialog_ref_1 = __webpack_require__(/*! ./dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    DialogService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(dynamicdialog_config_1.DynamicDialogConfig, config);
        var dialogRef = new dynamicdialog_ref_1.DynamicDialogRef();
        map.set(dynamicdialog_ref_1.DynamicDialogRef, dialogRef);
        var sub = dialogRef.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicdialog_1.DynamicDialogComponent);
        var componentRef = componentFactory.create(new dynamicdialog_injector_1.DynamicDialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    };
    DialogService.prototype.removeDialogComponentFromBody = function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ApplicationRef, core_1.Injector])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=dialogservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicDialogInjector = /** @class */ (function () {
    function DynamicDialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    DynamicDialogInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicDialogInjector;
}());
exports.DynamicDialogInjector = DynamicDialogInjector;
//# sourceMappingURL=dynamicdialog-injector.js.map

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _head_head_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../head/head.module */ "./src/app/head/head.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_12__);













var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_9__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
                _head_head_module__WEBPACK_IMPORTED_MODULE_11__["HeadModule"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.html":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <!-- HEAD -->\r\n    <div class=\"head_2\">\r\n      <div class=\"back_button\">\r\n        <span>\r\n          <img src=\"../../assets/image/logo_itg.png\" (click)=\"navigate_back()\" />\r\n        </span>\r\n        <!--<i class=\"fas fa-chevron-left\" style=\" color: transparent; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" *ngIf=\"!root\"></i> -->\r\n      </div>\r\n\r\n      <div class=\"menu\">\r\n        <div class=\"list_icon\">\r\n          <i class=\"fas fa-at\"\r\n            style=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-comments\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-ban on fa-camera\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <!--ICONE-->\r\n\r\n      <div class=\"mnk\">\r\n        <p-menu (click)=\"Deconnexion()\" #menu [popup]=\"true\" [model]=\"itemes\"></p-menu>\r\n        <a (click)=\"menu.toggle($event)\"> <i class=\"fas fa-bars\" style=\" color: white; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i></a>\r\n      </div>\r\n\r\n      <!--ICONE-->\r\n\r\n\r\n    </div>\r\n    <!-- HEAD -->\r\n\r\n    <!-- SEARCH-BAR -->\r\n    <div class=\"search_bar\">\r\n      <div class=\"ui-inputgroup ZoneSearchAccueil\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fas fa-search\"></i></span>\r\n        <input class=\"search\" type=\"text\" [(ngModel)]=\"term\" pInputText placeholder=\"Recherche\">\r\n      </div>\r\n      <div *ngIf=\"loadIndicator\" class=\"spinner\">\r\n        <ion-spinner name=\"lines\" color=\"medium\"></ion-spinner>\r\n      </div>\r\n    </div>\r\n    <!-- SEARCH-BAR -->\r\n\r\n\r\n    <div class=\"body\">\r\n      <div class=\"message\">\r\n\r\n       <!--<p-messages *ngIf = \"msgs_data\" [(value)]=\"msgs_data\"></p-messages>-->\r\n       <p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n      </div>\r\n\r\n      <div class=\"ui-g\">\r\n        <div class=\"cmp ui-g-4\" *ngFor=\"let menu of menus | filter:term\" (click)=\"open_menu(menu.name)\">\r\n          <img class=\"mn_icn\" [src]=\"menu.icone\">\r\n          <span class=\"nom\">{{menu.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n      <img class=\"kronos_logo\" src=\"../../assets/image/icon.png\">\r\n      <div class=\"version\">\r\n        <p>MG version : 1.8.13</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-position: center;\n  background-image: url('background.png');\n  background-size: cover;\n  background-color: #797083;\n  background: -o-linear-gradient(135deg, #c59b9c, #797083);\n  width: 100%;\n  height: 100%; }\n\n/*.container{\r\n    background-position: center;\r\n    background-image: url(/web_enterprise/static/src/img/application-switcher-bg.jpg);\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    background-color: #797083;\r\n    background: -moz-linear-gradient(135deg, #797083, #c59b9c);\r\n    background: -o-linear-gradient(135deg, #c59b9c, #797083);\r\n    background: -webkit-gradient(linear, left top, right bottom, from(#D9DADB), to(#DAE0EA));\r\n    width: 100%;\r\n    height: 100%;\r\n}*/\n\n.head_2 {\n  background-color: transparent;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 16% 76% 8% 0%;\n  max-height: 40px; }\n\n.back_button {\n  text-align: -webkit-center;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  width: 25px;\n  margin-left: 9px; }\n\n.mnk {\n  text-align: center;\n  margin-top: 5px;\n  height: 40px;\n  max-height: 40px; }\n\n.body {\n  margin-top: 15px; }\n\n.list_icon {\n  text-align: end;\n  margin-right: 14px;\n  margin-top: 5px; }\n\n.search_bar {\n  width: 100%;\n  background-color: transparent;\n  margin-bottom: 10px; }\n\n.search {\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white; }\n\n::-webkit-input-placeholder {\n  color: #E0E2D4;\n  opacity: 1; }\n\n::-moz-placeholder {\n  color: #E0E2D4;\n  opacity: 1; }\n\n:-ms-input-placeholder {\n  color: #E0E2D4;\n  opacity: 1; }\n\n::-ms-input-placeholder {\n  color: #E0E2D4;\n  opacity: 1; }\n\n::placeholder {\n  color: #E0E2D4;\n  opacity: 1; }\n\n.footer {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n\n.nom {\n  display: block;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: initial;\n  margin-top: 4px;\n  color: white;\n  font-size: large; }\n\n.mn_icn {\n  width: 80%;\n  max-width: 70px;\n  border-radius: 6%;\n  transition: all 0.1s ease 0s;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);\n  -webkit-filter: grayscale(25%);\n  filter: grayscale(25%); }\n\n.cmp {\n  text-align: -webkit-center;\n  margin-top: 20px; }\n\n.ZoneSearchAccueil {\n  line-height: 35px; }\n\n.kronos_logo {\n  width: 100px;\n  height: 100px; }\n\n.version {\n  color: white; }\n\n.menu {\n  height: 40px;\n  max-height: 40px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLHVDQUEwRDtFQUkxRCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBRXpCLHdEQUF3RDtFQUN4RCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjs7Ozs7Ozs7Ozs7OztFQ1lFOztBREtGO0VBQ0ksNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNJLFdBQVc7RUFDWCwwQ0FBd0M7RUFDeEMsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUZkO0VBQ0ksY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFGZDtFQUNJLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRmQ7RUFDSSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUZkO0VBQ0ksY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFLYjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUlqQiw0QkFBNEI7RUFDNUIsMENBQTBDO0VBQzFDLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTcwODM7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3OTcwODMsICNjNTliOWMpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2M1OWI5YywgIzc5NzA4Myk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyouY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC93ZWJfZW50ZXJwcmlzZS9zdGF0aWMvc3JjL2ltZy9hcHBsaWNhdGlvbi1zd2l0Y2hlci1iZy5qcGcpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3MDgzO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzk3MDgzLCAjYzU5YjljKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjNTliOWMsICM3OTcwODMpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20oI0Q5REFEQiksIHRvKCNEQUUwRUEpKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Ki9cclxuXHJcblxyXG5cclxuLmhlYWRfMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2JSA3NiUgOCUgMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYmFja19idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5tbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmxpc3RfaWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAvLyBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgXHJcbiAgICBjb2xvcjogI0UwRTJENDtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gIH1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG59XHJcblxyXG5cclxuLm5vbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5tbl9pY24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlIDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAwcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDI1JSk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgyNSUpO1xyXG59XHJcblxyXG4uY21wIHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uWm9uZVNlYXJjaEFjY3VlaWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5rcm9ub3NfbG9nb3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi52ZXJzaW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxufSIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTcwODM7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5NzA4MywgI2M1OWI5Yyk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjNTliOWMsICM3OTcwODMpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi8qLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvd2ViX2VudGVycHJpc2Uvc3RhdGljL3NyYy9pbWcvYXBwbGljYXRpb24tc3dpdGNoZXItYmcuanBnKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NzA4MztcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5NzA4MywgI2M1OWI5Yyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzU5YjljLCAjNzk3MDgzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCNEOURBREIpLCB0bygjREFFMEVBKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSovXG4uaGVhZF8yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNiUgNzYlIDglIDAlO1xuICBtYXgtaGVpZ2h0OiA0MHB4OyB9XG5cbi5iYWNrX2J1dHRvbiB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7IH1cblxuLm1uayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7IH1cblxuLmJvZHkge1xuICBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbi5saXN0X2ljb24ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi5zZWFyY2hfYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNFMEUyRDQ7XG4gIG9wYWNpdHk6IDE7IH1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwOyB9XG5cbi5ub20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBsYXJnZTsgfVxuXG4ubW5faWNuIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA2JTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UgMHM7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgyNSUpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgyNSUpOyB9XG5cbi5jbXAge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4uWm9uZVNlYXJjaEFjY3VlaWwge1xuICBsaW5lLWhlaWdodDogMzVweDsgfVxuXG4ua3Jvbm9zX2xvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7IH1cblxuLnZlcnNpb24ge1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1lbnUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _services_odoo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/odoo.service */ "./src/app/services/odoo.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");









var MenuPage = /** @class */ (function () {
    function MenuPage(msg_srv, act, router, storage, dbm, service) {
        var _this = this;
        this.msg_srv = msg_srv;
        this.act = act;
        this.router = router;
        this.storage = storage;
        this.dbm = dbm;
        this.service = service;
        this.msgs = [];
        this.msgs_data = [{ severity: String, detail: String }];
        this.color_icon = null;
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.loadIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.loadIndicator = false;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbm.get_update().then(function (data) {
            console.log("52 => ", data);
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    console.log("53 => ", data[i].name);
                    switch (data[i].name) {
                        case "add_column_visit_sheet_offline_id":
                            {
                                _this.dbm.update_any_column();
                                _this.dbm.deny_update(data[i].id);
                                break;
                            }
                            ;
                        case "copy_visit_sheet_offline_id": {
                            _this.dbm.set_all_visit_offline_id();
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "update_active_partner_where_true": {
                            _this.dbm.update_active_res_partner_1();
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "update_active_partner_where_false": {
                            _this.dbm.update_active_res_partner_2();
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "update_x_offline_id_res_partner": {
                            _this.dbm.update_active_res_partner_3();
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "add_res_partner_res_users_rel": {
                            _this.dbm.insert_res_data(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["request_res_partner_res_users_rel"]);
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "update_permanent_posm_res_partner_rel": {
                            _this.dbm.insert_res_data(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["edit_permanent_posm_res_partner_rel"]);
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "repair_partner_x_odoo_id": {
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        case "repair_visit_sheet": {
                            _this.dbm.repair_visit_sheet();
                            _this.dbm.deny_update(data[i].id);
                            break;
                        }
                        /*case "remove_null_user" : {
                          this.dbm.remove_null_user() ;
                          this.dbm.deny_update(data[i].id) ;
                          break;
                        }*/
                    }
                }
                _this.msg_srv.add({ severity: 'info', summary: '', detail: 'Installation des mises à jours effectués.' });
            }
        }).catch(function (e) {
        });
    };
    MenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menus = [
            { name: "Sécurité", icone: "assets/image/secure.png" },
            { name: "Fichier clients", icone: "assets/image/client.png" },
            { name: "Tournées", icone: "assets/image/tournes.png" },
            { name: "Synchronisation", icone: "assets/image/parametrage.png" },
            { name: "Fiches de visite", icone: "assets/image/visite.png" },
        ];
        this.storage.get("last").then(function (last) {
            _this.root = last;
        });
        //{ name : "NEW SYNC", icone : "assets/image/database.png"}
        this.storage.get("msg_data").then(function (message) {
            if (message) {
                if (message[0].severity != "none") {
                    _this.msgs_data = message;
                }
            }
        }).catch(function (e) {
            console.log(e);
        });
        this.storage.get("message").then(function (message) {
            if (message) {
                _this.msgs = message;
            }
        }).catch(function (e) {
            console.log(e);
        });
        this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
        ];
        this.dbm.verify_data().then(function (data) {
            console.log("nande tato...", data);
            _this.msg_srv.clear();
            if (data.severity != 'none') {
                //this.msg_srv.add({severity:data.severity, detail:data.non_synced})
            }
        });
    };
    MenuPage.prototype.ionViewWillLeave = function () {
        console.log("tato 1...");
        this.msg_srv.clear();
    };
    MenuPage.prototype.ionViewDidLeave = function () {
        console.log("tato 2...");
        this.msg_srv.clear();
    };
    MenuPage.prototype.ngOnDestroy = function () {
        console.log("tato 3...");
        this.msg_srv.clear();
    };
    MenuPage.prototype.open_menu = function (menu) {
        switch (menu) {
            case "Sécurité": {
                this.open_securite();
                this.remove_message();
                break;
            }
            case "Fichier clients": {
                this.open_fiches_client();
                this.remove_message();
                break;
            }
            case "Tournées": {
                this.open_tournees();
                this.remove_message();
                break;
            }
            case "Synchronisation": {
                this.open_synchro();
                this.remove_message();
                break;
            }
            case "Fiches de visite": {
                this.open_fiches_visite();
                this.remove_message();
                break;
            }
            case "NEW SYNC": {
                this.open_bdd();
                this.remove_message();
                break;
            }
            default: break;
        }
    };
    MenuPage.prototype.remove_message = function () {
        this.storage.remove("message").then(function () {
            console.log("voafafa le msg");
        }).catch(function (e) {
            console.log("menu 113 => ", e);
        });
    };
    MenuPage.prototype.open_fiches_client = function () {
        //this.dbm.select_basic_data("i_t_region") ;
        this.router.navigate(['fiches-client'], this.navigationExtras);
    };
    MenuPage.prototype.open_securite = function () {
        this.router.navigate(['compte'], this.navigationExtras);
    };
    MenuPage.prototype.open_bdd = function () {
        this.router.navigate(['new-sync'], this.navigationExtras);
    };
    MenuPage.prototype.open_tournees = function () {
        this.router.navigate(['liste-tournee'], this.navigationExtras);
    };
    MenuPage.prototype.open_synchro = function () {
        // this.dbm.repair_data_for_sync() ;
        this.router.navigate(['synchro'], this.navigationExtras);
    };
    MenuPage.prototype.open_fiches_visite = function () {
        this.router.navigate(['fiche-visite'], this.navigationExtras);
    };
    MenuPage.prototype.navigate_back = function () {
        if (this.root) {
            this.router.navigate([this.root]);
        }
    };
    MenuPage.prototype.Deconnexion = function () {
        var _this = this;
        _model_helper_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    MenuPage.prototype.go_sync = function () {
        this.router.navigate(['synchro'], this.navigationExtras);
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_4__["Database_manager"], _services_odoo_service__WEBPACK_IMPORTED_MODULE_7__["OdooService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map