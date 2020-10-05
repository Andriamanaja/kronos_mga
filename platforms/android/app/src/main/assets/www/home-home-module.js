(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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

/***/ "./node_modules/primeng/components/progressbar/progressbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/progressbar/progressbar.js ***!
  \********************************************************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "showValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "unit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "mode", void 0);
    ProgressBar = __decorate([
        core_1.Component({
            selector: 'p-progressBar',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    "
        })
    ], ProgressBar);
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressBar],
            declarations: [ProgressBar]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/primeng/progressbar.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js"));

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _model_service_test_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../model/service/test.service */ "./src/app/model/service/test.service.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__);




















var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_7__["FullCalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_14__["MessagesModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_16__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_16__["HomePage"]],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_17__["MessageService"],
                _model_service_test_service__WEBPACK_IMPORTED_MODULE_18__["TestService"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class = \"head\">\r\n        <img src = \"../../assets/image/icon.png\">\r\n    </div>\r\n\r\n    <div class = \"body\">\r\n        <div class = \"form\">\r\n            <form class = \"connexion\" [formGroup]=\"userFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"field\">\r\n                    <p class=\"first\">Login</p>\r\n                    <input formControlName=\"login\" type=\"text\" size=\"30\" pInputText required> \r\n                </div>\r\n\r\n                <div class=\"field\">\r\n                    <p class=\"first\">Password</p>\r\n                    <input formControlName=\"password\" type=\"password\" pInputText size=\"30\" required/> \r\n                </div>\r\n               \r\n                \r\n                    <p-messages [(value)]=\"msgs\"></p-messages>\r\n    \r\n                <div class = \"bouton\">\r\n                    <button type=\"submit\" pButton label=\"Connexion\" [disabled]=\"!userFormGroup.valid\"></button>\r\n                </div>\r\n\r\n                <!-- <div class = \"bouton\">\r\n                    <button type=\"button\" pButton label=\"Update SEQ\" (click) = \"move_seq()\"> </button>\r\n                </div>\r\n\r\n                <div class = \"bouton\">\r\n                    <button type=\"button\" pButton label=\"Remove DB\" (click) = \"remove_db()\"> </button>\r\n                </div> -->\r\n\r\n            </form>\r\n            \r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  width: 150px;\n  height: 100px;\n  display: table;\n  text-align: center;\n  margin: auto;\n  margin-top: 50px;\n  background-color: transparent; }\n\n.first {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\n.connexion {\n  display: block;\n  margin-top: 0em;\n  width: 90%;\n  height: 100%;\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.bouton {\n  margin-top: 1em; }\n\n.link {\n  width: 90%;\n  text-align: center;\n  margin-top: 10px;\n  margin-left: 3%; }\n\n.field {\n  display: grid; }\n\n.err {\n  margin-top: 2px; }\n\nbutton.ui-button {\n  width: 150px;\n  display: block;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQ0osRUFBQTs7QUFDQTtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZmlyc3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29ubmV4aW9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4uYm91dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ubGlua3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4uZmllbGR7XHJcbiAgICBkaXNwbGF5OiBncmlkXHJcbn1cclxuLmVyciB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuYnV0dG9uLnVpLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: test, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular6_odoo_jsonrpc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular6-odoo-jsonrpc */ "./node_modules/angular6-odoo-jsonrpc/fesm5/angular6-odoo-jsonrpc.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_service_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/service/test.service */ "./src/app/model/service/test.service.ts");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ "./node_modules/@ionic-native/sqlite-porter/ngx/index.js");
/* harmony import */ var _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/data/maj.model */ "./src/app/model/data/maj.model.ts");














var test = /** @class */ (function () {
    function test() {
    }
    return test;
}());

var HomePage = /** @class */ (function () {
    function HomePage(sqlite_porter, storage, formbuilder, messageService, router, dbm, toast, odooRPC, service, http) {
        this.sqlite_porter = sqlite_porter;
        this.storage = storage;
        this.formbuilder = formbuilder;
        this.messageService = messageService;
        this.router = router;
        this.dbm = dbm;
        this.toast = toast;
        this.odooRPC = odooRPC;
        this.service = service;
        this.http = http;
        this.msgs = [];
        this.region = [];
        this.progress = 0;
        this.non_synced = "";
        this.resp = [];
        this.userFormGroup = this.formbuilder.group({
            "login": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "password": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        try {
            if (this.userFormGroup.get('login').value == "admin" && this.userFormGroup.get('password').value == "Admin123") {
                _model_helper_auth__WEBPACK_IMPORTED_MODULE_10__["Auth"].access = false;
                this.router.navigate(['menu']);
            }
            else {
                this.dbm.clear_database();
                /*let is_updated = false;
                this.dbm.update_any_table().then(data => {
                    for (var i = 0; i < data.length; i++) {
                        if (data.name == "rod_current_price") {
                            is_updated = true;
                            break;
                        }
                    }

                    this.dbm.update_any_column() ;

                    

                    if (is_updated == false) {
                        this.dbm.insert_res_data(edit_price_line).then(() => {
                            console.log("Vita ny update");
                        }).catch(e => {
                            console.log("363 dbm=> ", e)
                        });
                    }
                    else {
                        console.log("Efa nisy tao k.");
                    }
                })*/
                this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then(function (result) {
                    switch (result) {
                        case 0: {
                            _this.makeToast("Mot de passe incorrect !");
                            break;
                        }
                        case 1: {
                            var maj_1 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](1, "add_column_visit_sheet_offline_id", 0);
                            var maj_2 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](2, "copy_visit_sheet_offline_id", 0);
                            var maj_3 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](3, "update_active_partner_where_true", 0);
                            var maj_4 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](4, "update_active_partner_where_false", 0);
                            var maj_5 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](5, "update_x_offline_id_res_partner", 0);
                            var maj_6 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](6, "add_res_partner_res_users_rel", 0);
                            var maj_7 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](7, "update_permanent_posm_res_partner_rel", 0);
                            var maj_8 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](8, "repair_partner_x_odoo_id", 0);
                            var maj_9 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](9, "repair_visit_sheet", 0);
                            var maj_10 = new _model_data_maj_model__WEBPACK_IMPORTED_MODULE_13__["maj"](10, "remove_null_user", 0);
                            //let maj_6 = new maj(6, "repair_all_visit", 0) ;
                            _this.dbm.insert_update(maj_1);
                            _this.dbm.insert_update(maj_2);
                            _this.dbm.insert_update(maj_3);
                            _this.dbm.insert_update(maj_4);
                            _this.dbm.insert_update(maj_5);
                            _this.dbm.insert_update(maj_6);
                            _this.dbm.insert_update(maj_7);
                            _this.dbm.insert_update(maj_8);
                            _this.dbm.insert_update(maj_9);
                            _this.dbm.insert_update(maj_10);
                            _model_helper_auth__WEBPACK_IMPORTED_MODULE_10__["Auth"].access = false;
                            //this.dbm.update_active_res_partner_1() ;
                            //this.dbm.update_active_res_partner_2() ;
                            //this.dbm.update_active_res_partner_3() ;
                            //this.dbm.repair_data() ;
                            //this.dbm.remove_appro();
                            _this.dbm.storage_Login(_this.userFormGroup.get('login').value, _this.userFormGroup.get('password').value)
                                .then(function (data) {
                                console.log(JSON.stringify(data));
                                _this.storage.set('data_p2', JSON.stringify(data))
                                    .catch(function (e) { return console.log("set storage p2 " + e.message); });
                            }).catch(function (e) { return console.log('storage login homepage exception : ' + e.message); })
                                .then(function () {
                                var user_config = {
                                    username: _this.userFormGroup.get('login').value,
                                    password: _this.userFormGroup.get('password').value
                                };
                                _this.storage.set("color", "red");
                                _this.storage.set("user_config", user_config);
                                _this.storage.get("reset").then(function (reset) {
                                    if (reset || reset == true) {
                                        _this.storage.set("reset", true);
                                    }
                                    else {
                                        _this.storage.set("reset", false);
                                    }
                                });
                                _this.router.navigate(['menu']);
                            });
                            break;
                        }
                        case -1: {
                            _this.makeToast("Login incorrect !");
                            break;
                        }
                    }
                });
            }
        }
        catch (error) {
            console.log(error.stack);
            console.log(error.message);
        }
    };
    HomePage.prototype.makeToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.move_seq = function () {
        this.resp = this.dbm.get_max_off_all_table();
        console.log("139 => ", this.resp);
    };
    HomePage.prototype.remove_db = function () {
        this.resp = this.dbm.get_max_off_all_table();
        console.log("144 => ", this.resp);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_12__["SQLitePorter"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_5__["Database_manager"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], angular6_odoo_jsonrpc__WEBPACK_IMPORTED_MODULE_7__["Ng6OdooRPCService"], _model_service_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/model/data/maj.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/data/maj.model.ts ***!
  \*****************************************/
/*! exports provided: maj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maj", function() { return maj; });
var maj = /** @class */ (function () {
    function maj(id, name, is_executed) {
        this.setId(id);
        this.setName(name);
        this.setIsExecuted(is_executed);
    }
    maj.prototype.setId = function (id) {
        this.id = id;
    };
    maj.prototype.setName = function (name) {
        this.name = name;
    };
    maj.prototype.setIsExecuted = function (is_executed) {
        this.is_executed = is_executed;
    };
    maj.prototype.getId = function () {
        return this.id;
    };
    maj.prototype.getName = function () {
        return this.name;
    };
    maj.prototype.getIsExecuted = function () {
        return this.is_executed;
    };
    return maj;
}());



/***/ }),

/***/ "./src/app/model/service/test.service.ts":
/*!***********************************************!*\
  !*** ./src/app/model/service/test.service.ts ***!
  \***********************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.test = function () {
        var params = {
            db: "it",
            login: "admin",
            password: "Admin123"
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions).subscribe(function (data) {
            console.log(data);
        });
    };
    TestService.prototype.test_2 = function () {
        var params = {
            model: "itg.manufacturer",
            method: "create",
            args: [
                { "name": "test", "sequence": 10 }
            ]
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions).subscribe(function (data) {
            console.log(data);
        });
    };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map