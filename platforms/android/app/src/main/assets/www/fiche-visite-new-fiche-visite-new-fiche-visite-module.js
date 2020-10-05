(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fiche-visite-new-fiche-visite-new-fiche-visite-module"],{

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

/***/ "./node_modules/primeng/card.js":
/*!**************************************!*\
  !*** ./node_modules/primeng/card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/card/card */ "./node_modules/primeng/components/card/card.js"));

/***/ }),

/***/ "./node_modules/primeng/components/card/card.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/components/card/card.js ***!
  \******************************************************/
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
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var Card = /** @class */ (function () {
    function Card(el) {
        this.el = el;
    }
    Card.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "subheader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Card.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Card.prototype, "styleClass", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Header),
        __metadata("design:type", Object)
    ], Card.prototype, "headerFacet", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Footer),
        __metadata("design:type", Object)
    ], Card.prototype, "footerFacet", void 0);
    Card = __decorate([
        core_1.Component({
            selector: 'p-card',
            template: "\n        <div [ngClass]=\"'ui-card ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-card-header\" *ngIf=\"headerFacet\">\n               <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-card-body\">\n                <div class=\"ui-card-title\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-card-subtitle\" *ngIf=\"subheader\">{{subheader}}</div>\n                <div class=\"ui-card-content\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"ui-card-footer\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Card);
    return Card;
}());
exports.Card = Card;
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Card, shared_1.SharedModule],
            declarations: [Card]
        })
    ], CardModule);
    return CardModule;
}());
exports.CardModule = CardModule;
//# sourceMappingURL=card.js.map

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

/***/ "./node_modules/primeng/dynamicdialog.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/dynamicdialog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dynamicdialog/dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js"));

/***/ }),

/***/ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewFicheVisitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFicheVisitePageModule", function() { return NewFicheVisitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-fiche-visite.page */ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_26__);



























var routes = [
    {
        path: '',
        component: _new_fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__["NewFicheVisitePage"]
    }
];
var NewFicheVisitePageModule = /** @class */ (function () {
    function NewFicheVisitePageModule() {
    }
    NewFicheVisitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_7__["ChartModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_8__["FullCalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_14__["PasswordModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_15__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_16__["MessageModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_18__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_21__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_26__["MenuModule"]
            ],
            declarations: [_new_fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__["NewFicheVisitePage"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_25__["MessageService"]]
        })
    ], NewFicheVisitePageModule);
    return NewFicheVisitePageModule;
}());



/***/ }),

/***/ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh2 {\n  padding-left: 10px; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  padding-top: 0;\n  text-align: left; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.off {\n  display: block;\n  margin-left: 2%; }\n\n.bt2 {\n  margin-left: 1%;\n  margin-right: 1%;\n  width: 98%; }\n\n.title_body {\n  margin-top: 0px;\n  height: 48px;\n  padding-bottom: 13px;\n  padding-top: 10px; }\n\n.archive {\n  height: 48px;\n  background-color: #E2E2E0; }\n\n.div_btn {\n  text-align: -webkit-right; }\n\n.form {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\n.cam {\n  text-align: -webkit-center;\n  border: 1px solid gray;\n  display: block; }\n\n.photo {\n  width: 98%;\n  margin-top: 8px; }\n\n.form_item {\n  margin: 15px; }\n\n.form_inside {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n  margin-top: 5%; }\n\n.gps {\n  margin-top: 2px;\n  margin-left: 0px; }\n\n.form_item p {\n  font-weight: bold;\n  margin-top: 5px; }\n\nbody .ui-widget-content p {\n  font-weight: bold !important;\n  margin-bottom: 10px !important; }\n\n.canal {\n  font-weight: bold;\n  color: #21B799; }\n\n.label_nom {\n  color: #8f8f8f;\n  font-size: 12px;\n  text-align: left; }\n\n.nom_tournee {\n  color: #666666;\n  font-size: 13px;\n  text-align: right; }\n\n.message {\n  background-color: #D9EDF7;\n  color: #31708F;\n  border-color: #bce8f1;\n  font-size: 13px;\n  width: 98%;\n  margin-left: 1%;\n  padding: 18px;\n  margin-top: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n  vertical-align: middle; }\n\n.first {\n  color: #875A7B;\n  text-decoration: underline;\n  margin-bottom: 0px;\n  font-size: 13px;\n  padding: 0px 0px 0px 8px;\n  margin-top: 10px; }\n\n.tableau th {\n  text-align: left; }\n\n.align {\n  text-align: right;\n  margin-top: 6px; }\n\n.check-position {\n  position: relative;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9maWNoZS12aXNpdGUvbmV3LWZpY2hlLXZpc2l0ZS9uZXctZmljaGUtdmlzaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1oseUJBQ0osRUFBQTs7QUFDQTtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FDSixFQUFBOztBQUNBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBZ0I7RUFDaEIsZUFBZ0I7RUFDaEIsZ0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpY2hlLXZpc2l0ZS9uZXctZmljaGUtdmlzaXRlL25ldy1maWNoZS12aXNpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmgyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJ0bl9ud19jcntcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idHtcclxuICAgIG1hcmdpbi1sZWZ0IDogMnB4XHJcbn1cclxuXHJcbi5vZmYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5idDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLnRpdGxlX2JvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uYXJjaGl2ZXtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTBcclxufVxyXG4uZGl2X2J0biB7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0O1xyXG59XHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhbSB7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucGhvdG8ge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uZm9ybV9pdGVtIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4uZm9ybV9pbnNpZGUge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JVxyXG59XHJcbi5ncHMge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uZm9ybV9pdGVtIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuYm9keSAudWktd2lkZ2V0LWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYW5hbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjFCNzk5O1xyXG59XHJcblxyXG4ubGFiZWxfbm9tIHtcclxuICAgIGNvbG9yIDogIzhmOGY4ZiA7XHJcbiAgICBmb250LXNpemU6IDEycHggO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCA7XHJcbn1cclxuLm5vbV90b3VybmVlIHtcclxuICAgIGNvbG9yIDogIzY2NjY2NiA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCA7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUVERjc7XHJcbiAgICBjb2xvcjogIzMxNzA4RjtcclxuICAgIGJvcmRlci1jb2xvcjogI2JjZThmMTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIDtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICAgIGNvbG9yOiAjODc1QTdCO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGVhdSB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IDtcclxufVxyXG5cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5jaGVjay1wb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.ts ***!
  \************************************************************************/
/*! exports provided: NewFicheVisitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFicheVisitePage", function() { return NewFicheVisitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/helper/auth */ "./src/app/model/helper/auth.ts");









var NewFicheVisitePage = /** @class */ (function () {
    function NewFicheVisitePage(messageService, storage, geolocation, router, fb, dbm) {
        this.messageService = messageService;
        this.storage = storage;
        this.geolocation = geolocation;
        this.router = router;
        this.fb = fb;
        this.dbm = dbm;
        this.partner_id = [];
    }
    NewFicheVisitePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.get_res_partner_data_for_visite().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.partner_id = data;
                return [2 /*return*/];
            });
        }); });
        this.dbm.get_active_user().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.login = data.login;
                this.id = data.id;
                return [2 /*return*/];
            });
        }); });
    };
    NewFicheVisitePage.prototype.ngOnInit = function () {
        this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
        ];
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        this.itemsActions = [
            { id: 1, label: '' },
        ];
        this.fg = this.fb.group({
            partner_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pos_initial: 0,
            provider_latitude: 0,
            provider_longitude: 0,
            region_id: "",
            secteur_id: "",
            agence_id: "",
            zone_id: ""
        });
    };
    NewFicheVisitePage.prototype.demarrer_visite = function () {
        if (this.fg.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: "Point de vente", key: 'invalid' });
        }
        else {
            this.getMyLocation();
            console.log('value\n' + JSON.stringify(this.fg.value));
        }
    };
    NewFicheVisitePage.prototype.abort_nouveau_fiche_visite = function () {
        this.router.navigate(['fiche-visite']);
    };
    NewFicheVisitePage.prototype.save_nouveau_fiche_visite = function () {
    };
    NewFicheVisitePage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    NewFicheVisitePage.prototype.getMyLocation = function () {
        var options = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    NewFicheVisitePage.prototype.Deconnexion = function () {
        var _this = this;
        src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home']);
    };
    NewFicheVisitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-fiche-visite',
            template: __webpack_require__(/*! ./new-fiche-visite.page.html */ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.html"),
            styles: [__webpack_require__(/*! ./new-fiche-visite.page.scss */ "./src/app/fiche-visite/new-fiche-visite/new-fiche-visite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"]])
    ], NewFicheVisitePage);
    return NewFicheVisitePage;
}());



/***/ })

}]);
//# sourceMappingURL=fiche-visite-new-fiche-visite-new-fiche-visite-module.js.map