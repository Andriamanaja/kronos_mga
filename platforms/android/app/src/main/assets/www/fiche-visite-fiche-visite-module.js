(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fiche-visite-fiche-visite-module"],{

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

/***/ "./src/app/fiche-visite/fiche-visite.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fiche-visite/fiche-visite.module.ts ***!
  \*****************************************************/
/*! exports provided: FicheVisitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheVisitePageModule", function() { return FicheVisitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fiche-visite.page */ "./src/app/fiche-visite/fiche-visite.page.ts");
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
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _head_head_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../head/head.module */ "./src/app/head/head.module.ts");


























var routes = [
    {
        path: '',
        component: _fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__["FicheVisitePage"]
    }
];
var FicheVisitePageModule = /** @class */ (function () {
    function FicheVisitePageModule() {
    }
    FicheVisitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_24__["MenuModule"],
                _head_head_module__WEBPACK_IMPORTED_MODULE_25__["HeadModule"]
            ],
            declarations: [_fiche_visite_page__WEBPACK_IMPORTED_MODULE_6__["FicheVisitePage"]],
            providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], primeng_api__WEBPACK_IMPORTED_MODULE_21__["MessageService"]]
        })
    ], FicheVisitePageModule);
    return FicheVisitePageModule;
}());



/***/ }),

/***/ "./src/app/fiche-visite/fiche-visite.page.html":
/*!*****************************************************!*\
  !*** ./src/app/fiche-visite/fiche-visite.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class = \"container\">\r\n\r\n      <!-- HEAD -->\r\n    <div class = \"head\">\r\n      <div class=\"back_button\"  >\r\n         <span>\r\n            <img src = \"../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n          </span>\r\n      </div>\r\n\r\n      <div class = \"menu\">\r\n        <div class=\"list_icon\">\r\n          <i class=\"fas fa-at\" style=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-comments\" style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-ban on fa-camera\" style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n        </div> \r\n      </div>\r\n\r\n       <app-head></app-head>\r\n       \r\n    </div>\r\n    <!-- HEAD -->\r\n\r\n      <div class=\"body\">\r\n        <div class = \"title_body\">\r\n          <h3>Fiches de visite</h3>\r\n          <!--\r\n<div class = \"btn_nw_cr\">\r\n            <button pButton type=\"button\" label=\"CRÉER\"     class=\"bt ui-button-success\" (click)=\"open_nouveau_fiche_visite()\"></button>\r\n          </div>\r\n          -->\r\n        </div>\r\n    \r\n\r\n\r\n        <div class = \"table_fiche_visite\">\r\n\r\n            \r\n\r\n            <p-table #dt   [columns]=\"col_fv\" [value]=\"data_fv\" [paginator]=\"true\" [paginatorPosition]=\"'top'\" [rows]=\"25\" [(selection)]=\"selected\" dataKey=\"name\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\r\n                <ng-template pTemplate=\"caption\">\r\n                    <div style=\"text-align: right\">        \r\n                        <i class=\"fas fa-search\" style=\"margin: 4px 4px 0 0 ; color: gray; font-size: 20px;\"></i>\r\n                        <input type=\"text\" pInputText size=\"20\" placeholder=\"Filtrer\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" >\r\n                    </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr >\r\n                        <th *ngFor=\"let col of columns\"  [pSortableColumn]=\"col.field\" [ngStyle]=\"{'display': col.display}\">\r\n                            {{col.header}}\r\n                            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                        </th>\r\n                    </tr>\r\n                </ng-template>\r\n                \r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                    <tr [pSelectableRow]=\"rowData\">\r\n\r\n                        <td *ngFor=\"let col of columns\" (click) = \"onRowClicked(rowData)\" [ngStyle]=\"{'display': col.display}\">\r\n                                {{rowData[col.field]}}\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"spinner\" *ngIf = \"loadIndicator == true\">\r\n            <ion-spinner name=\"lines\" color=\"medium\"></ion-spinner>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"footer\">\r\n\r\n      </div>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fiche-visite/fiche-visite.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/fiche-visite/fiche-visite.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 6px;\n  margin-top: 0px;\n  padding-top: 10px; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  padding-top: 13px;\n  height: 48px;\n  padding-bottom: 13px;\n  display: contents; }\n\n.table {\n  margin-top: 2px;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9maWNoZS12aXNpdGUvZmljaGUtdmlzaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmljaGUtdmlzaXRlL2ZpY2hlLXZpc2l0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5fbndfY3J7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4uYnR7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDJweFxyXG59XHJcblxyXG4udGl0bGVfYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/fiche-visite/fiche-visite.page.ts":
/*!***************************************************!*\
  !*** ./src/app/fiche-visite/fiche-visite.page.ts ***!
  \***************************************************/
/*! exports provided: FicheVisitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheVisitePage", function() { return FicheVisitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");






var FicheVisitePage = /** @class */ (function () {
    function FicheVisitePage(storage, activated_route, dbm, router) {
        this.storage = storage;
        this.activated_route = activated_route;
        this.dbm = dbm;
        this.router = router;
        this.data_fv = [];
    }
    FicheVisitePage.prototype.ionViewWillEnter = function () {
        this.init_data();
    };
    FicheVisitePage.prototype.go_sync = function () {
        this.router.navigate(["synchro"]);
    };
    FicheVisitePage.prototype.init_data = function () {
        var _this = this;
        this.dbm.verify_additional();
        this.activated_route.queryParams.subscribe(function (data) {
            _this.loadIndicator = true;
            _this.data_fv = [];
            if (data['id_tournee'] == undefined) {
                _this.dbm.get_all_fiche_visite().then(function (data) {
                    _this.data_fv = data;
                    _this.loadIndicator = false;
                });
            }
            else {
                _this.dbm.get_all_fiche_visite_by_id_tournee(data.id_tournee)
                    .then(function (data) {
                    _this.data_fv = data;
                    _this.loadIndicator = false;
                })
                    .catch(function (e) { return console.log(e.message); });
            }
        });
    };
    FicheVisitePage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    FicheVisitePage.prototype.ngOnInit = function () {
        this.col_fv = [
            { field: 'visit_sheet_id', header: 'id', display: 'none' },
            { field: 'user_id', header: 'Commercial', display: 'none' },
            { field: 'partner_id', header: 'Point de vente', display: 'table-cell' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell' },
            { field: 'nom_gerant', header: 'Nom du gérant', display: 'table-cell' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell' },
            { field: 'adresse', header: 'Adresse', display: 'table-cell' },
            { field: 'numero_telephone_1', header: 'Téléphone', display: 'table-cell' },
            { field: 'visit_sheet_begin_date_time', header: 'Debut de visite', display: 'table-cell' },
            { field: 'visit_sheet_end_date_time', header: 'Fin de visite', display: 'table-cell' },
            { field: 'provider_longitude', header: 'Longitude', display: 'none' },
            { field: 'provider_latitude', header: 'Latitude', display: 'none' },
            { field: 'state', header: 'Statut', display: 'table-cell' },
            { field: 'tour_status', header: 'tour_status', display: 'none' },
            { field: 'ville', header: 'ville', display: 'none' },
            { field: 'repere', header: 'repere', display: 'none' },
        ];
    };
    FicheVisitePage.prototype.open_nouveau_fiche_visite = function () {
        this.router.navigate(['new-fiche-visite']);
    };
    FicheVisitePage.prototype.onRowClicked = function (rowData) {
        var data_nav = {
            data: JSON.stringify(rowData),
            commercial_id: this.data_fv.commercial_id,
        };
        this.storage.set("state_visit", rowData.state);
        this.router.navigate(['page-one', data_nav]);
    };
    FicheVisitePage.prototype.Deconnexion = function () {
        var _this = this;
        _model_helper_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home']);
    };
    FicheVisitePage.prototype.onRowSelect = function (event) {
    };
    FicheVisitePage.prototype.onRowUnselect = function (event) {
    };
    FicheVisitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fiche-visite',
            template: __webpack_require__(/*! ./fiche-visite.page.html */ "./src/app/fiche-visite/fiche-visite.page.html"),
            styles: [__webpack_require__(/*! ./fiche-visite.page.scss */ "./src/app/fiche-visite/fiche-visite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_2__["Database_manager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FicheVisitePage);
    return FicheVisitePage;
}());



/***/ }),

/***/ "./src/app/head/head.component.html":
/*!******************************************!*\
  !*** ./src/app/head/head.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu_icon\">\n <div  *ngIf = \"color_icon\">\n    <p-menu (click)=\"go_sync()\" #menu_2 [popup]=\"true\" [model]=\"items_sync\"></p-menu>\n    <a (click)=\"menu_2.toggle($event)\"> \n        <i *ngIf = \"color_icon == '#21b799' \" class=\"fas fa-sync\" style=\"color : #21b799 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == '#e6db10' \" class=\"fas fa-sync\" style=\"color : #e6db10 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == '#b72121' \" class=\"fas fa-sync\" style=\"color : #b72121 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == 'transparent' \" class=\"fas fa-sync\" style=\"color : transparent ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n    </a>\n  </div>\n\n  <div>\n    <p-menu (click)=\"Deconnexion()\" #menu [popup]=\"true\" [model]=\"itemes\"></p-menu>\n    <a (click)=\"menu.toggle($event)\"> <i class=\"fas fa-bars\" style=\" color: white; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/head/head.component.scss":
/*!******************************************!*\
  !*** ./src/app/head/head.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWQvaGVhZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var HeadComponent = /** @class */ (function () {
    function HeadComponent(dbm, storage, router) {
        this.dbm = dbm;
        this.storage = storage;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.msgs = [];
        this.color_icon = null;
    }
    HeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(15000);
        //source.subscribe(val => {
        this.dbm.verify_data().then(function (data) {
            if (_this.color_icon == null) {
                _this.color_icon = data.color;
                _this.itemes = [
                    { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
                ];
                _this.items_sync = [
                    { label: data.non_synced },
                ];
                var x = { severity: data.severity, detail: data.non_synced };
                _this.msgs.push(x);
                _this.storage.set("msg_data", _this.msgs);
            }
        });
        //});
    };
    HeadComponent.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu'], null);
    };
    HeadComponent.prototype.Deconnexion = function () {
        var _this = this;
        _model_helper_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    HeadComponent.prototype.go_sync = function () {
        this.router.navigate(['synchro'], this.navigationExtras);
    };
    HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.scss */ "./src/app/head/head.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/head/head.module.ts":
/*!*************************************!*\
  !*** ./src/app/head/head.module.ts ***!
  \*************************************/
/*! exports provided: HeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadModule", function() { return HeadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var HeadModule = /** @class */ (function () {
    function HeadModule() {
    }
    HeadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                primeng_menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
            ],
            declarations: [_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"]],
            exports: [_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HeadModule);
    return HeadModule;
}());



/***/ })

}]);
//# sourceMappingURL=fiche-visite-fiche-visite-module.js.map