(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-sync-new-sync-module"],{

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

/***/ "./src/app/new-sync/new-sync.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-sync/new-sync.module.ts ***!
  \*********************************************/
/*! exports provided: NewSyncPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSyncPageModule", function() { return NewSyncPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_sync_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-sync.page */ "./src/app/new-sync/new-sync.page.ts");
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
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _head_head_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../head/head.module */ "./src/app/head/head.module.ts");



























var routes = [
    {
        path: '',
        component: _new_sync_page__WEBPACK_IMPORTED_MODULE_6__["NewSyncPage"]
    }
];
var NewSyncPageModule = /** @class */ (function () {
    function NewSyncPageModule() {
    }
    NewSyncPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
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
                primeng_menu__WEBPACK_IMPORTED_MODULE_23__["MenuModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__["RadioButtonModule"],
                _head_head_module__WEBPACK_IMPORTED_MODULE_26__["HeadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_new_sync_page__WEBPACK_IMPORTED_MODULE_6__["NewSyncPage"]]
        })
    ], NewSyncPageModule);
    return NewSyncPageModule;
}());



/***/ }),

/***/ "./src/app/new-sync/new-sync.page.html":
/*!*********************************************!*\
  !*** ./src/app/new-sync/new-sync.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"container\">\n\n\t\t<!-- HEAD -->\n\t\t<div class=\"head\">\n\t\t\t<div class=\"back_button\">\n\t\t\t\t<span>\n\t\t\t\t\t<img src=\"../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\n\t\t\t\t</span>\n\t\t\t</div>\n\n\t\t\t<div class=\"menu\">\n\t\t\t\t<div class=\"list_icon\">\n\t\t\t\t\t<i class=\"fas fa-at\"\n\t\t\t\t\t\tstyle=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\n\t\t\t\t\t<i class=\"fas fa-comments\"\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\n\t\t\t\t\t<i class=\"fas fa-ban on fa-camera\"\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t  <app-head></app-head>\n\t\t\t \n\t\t</div>\n\t\t<!-- HEAD -->\n\n\n\t\t<div class=\"body\">\n\t\t\t<div class=\"bg-blanc\">\n\n\t\t\t\t<div class=\"title_body\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<a (click)=\"home_page()\">\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\">\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\tSynchronisation\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"real-content-page\">\n\t\t\t\t\t<form class=\"connexion\" [formGroup]=\"sync\" (ngSubmit)=\"synchroniser()\">\n\n\t\t\t\t\t\t<div *ngIf=\"loadIndicator\" class=\"spinner field\">\n\t\t\t\t\t\t\t<ion-spinner name=\"dots\"></ion-spinner>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t<p class=\"first\">URL</p>\n\t\t\t\t\t\t\t<input formControlName=\"url\" [(ngModel)]=\"url\" type=\"text\" size=\"30\" pInputText required>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t<p class=\"first\">Base de données</p>\n\t\t\t\t\t\t\t<input formControlName=\"database\" [(ngModel)]=\"database\" type=\"text\" size=\"30\" pInputText\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t<p class=\"first\">Utilisateur</p>\n\t\t\t\t\t\t\t<input formControlName=\"username\" [(ngModel)]=\"username\" type=\"text\" size=\"30\" pInputText\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t<p class=\"first\">Mot de passe</p>\n\t\t\t\t\t\t\t<input formControlName=\"password\" [(ngModel)]=\"password\" type=\"password\" pInputText\n\t\t\t\t\t\t\t\tsize=\"30\" required />\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"bouton\">\n\t\t\t\t\t\t\t<button pButton type=\"submit\" label=\"SYNCHRONISER\" class=\"bt2 ui-button-success\"\n\t\t\t\t\t\t\t\t[disabled]=\"disable\"></button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t\t<!--<div class = \"footer\">\n\t\t\t\t\t<div class=\"bouton_visite\">\n\t\t\t\t\t\t<div class=\"ui-g\">\n\t\t\t\t\t\t\t<div class=\"ui-g-10\">\n\t\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t<div class=\"ui-g-2\">\n\t\t\t\t\t\t\t\t<button pButton (click)=\"repair()\" type=\"button\" icon=\"fas fa-hammer\" class=\"ui-button-rounded ui-button-secondary\"></button>\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<div class=\"bouton_visite\">\n\t\t\t\t\t\t<div class=\"ui-g\">\n\t\t\t\t\t\t\t<div class=\"ui-g-10\">\n\t\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t<div class=\"ui-g-2\">\n\t\t\t\t\t\t\t\t<button pButton (click)=\"display = true\" type=\"button\" icon=\"fas fa-undo\" class=\"ui-button-rounded ui-button-secondary\"></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<p-dialog header=\"Ré-initialisation de données\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\"\n\t\t\tstyleClass=\"mydialog\" appendTo=\"body\">\n\t\t\t<p>\n\t\t\t\tCet bouton ré-initialisera vos données à synchroniser puis l'action suivante pourra prendre plusieurs\n\t\t\t\tminutes.\n\t\t\t\tÊtes-vous sûr de vouloir continuer ?\n\t\t\t</p>\n\t\t\t<p-footer>\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"displayPosition=false\" label=\"Non\"\n\t\t\t\t\tclass=\"ui-button-secondary\"></button>\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"showPositionDialog()\" label=\"Oui\"></button>\n\t\t\t</p-footer>\n\t\t</p-dialog>\n\n\t</div>\n\t<ion-spinner *ngIf=\"show\"></ion-spinner>\n</ion-content>"

/***/ }),

/***/ "./src/app/new-sync/new-sync.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-sync/new-sync.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-action-general {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 10px; }\n  .btn-action-general .ui-button-success {\n    padding: 7px 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    background: #21B799;\n    color: #ffffff; }\n  .btn-action-general .ui-button-secondary {\n    padding: 7px 15px;\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #21B799; }\n  .bg-blanc {\n  background: #ffffff;\n  padding-top: 5px;\n  min-height: 94vh; }\n  .breacumb.ui-g {\n  margin-top: 0; }\n  .btn-action-etapes {\n  text-align: right; }\n  .btn-action-etapes button.bt.ui-button-success {\n    padding: 10px 15px; }\n  .ui-button {\n  background-color: #21b799;\n  border: 1px solid #21b799;\n  margin-left: 10px; }\n  .bt2 {\n  height: 50px;\n  width: 80%; }\n  .bouton_visite {\n  text-align: center;\n  margin-top: 5px; }\n  .bouton {\n  margin-top: 25px;\n  width: 50%; }\n  .real-content-page {\n  padding: 15px;\n  text-align: -webkit-center; }\n  .footer {\n  margin-top: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9uZXctc3luYy9uZXctc3luYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7RUFGeEI7SUFJRSxpQkFBaUI7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQVZuQjtJQWFFLGlCQUFpQjtJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBR25CO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGFBQWEsRUFBQTtFQUdqQjtFQUNJLGlCQUFpQixFQUFBO0VBRHJCO0lBR0ssa0JBQWtCLEVBQUE7RUFHdkI7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0MsWUFBWTtFQUNULFVBQVUsRUFBQTtFQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFFZDtFQUNJLGFBQWE7RUFDYiwwQkFBMEIsRUFBQTtFQUc5QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3LXN5bmMvbmV3LXN5bmMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hY3Rpb24tZ2VuZXJhbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cdC51aS1idXR0b24tc3VjY2VzcyB7XG5cdFx0cGFkZGluZzogN3B4IDE1cHg7XG5cdCAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdCAgICBtYXJnaW4tbGVmdDogMTBweDtcblx0ICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdCAgICBiYWNrZ3JvdW5kOiAjMjFCNzk5O1xuXHQgICAgY29sb3I6ICNmZmZmZmY7XG5cdH1cblx0LnVpLWJ1dHRvbi1zZWNvbmRhcnkge1xuXHRcdHBhZGRpbmc6IDdweCAxNXB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0ICAgIGNvbG9yOiAjMjFCNzk5O1xuXHR9XG59XG4uYmctYmxhbmMge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBtaW4taGVpZ2h0OiA5NHZoO1xufVxuLmJyZWFjdW1iLnVpLWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5idG4tYWN0aW9uLWV0YXBlcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYnV0dG9uLmJ0LnVpLWJ1dHRvbi1zdWNjZXNzIHtcblx0ICAgIHBhZGRpbmc6IDEwcHggMTVweDtcblx0fVxufVxuLnVpLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYjc5OTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjFiNzk5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnQyIHtcblx0aGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5ib3V0b25fdmlzaXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYm91dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucmVhbC1jb250ZW50LXBhZ2V7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/new-sync/new-sync.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-sync/new-sync.page.ts ***!
  \*******************************************/
/*! exports provided: NewSyncPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSyncPage", function() { return NewSyncPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/helper/counter */ "./src/app/model/helper/counter.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_odoo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/odoo.service */ "./src/app/services/odoo.service.ts");











var NewSyncPage = /** @class */ (function () {
    function NewSyncPage(service, router, toastController, storage, loader, http, dbm, fb) {
        this.service = service;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.loader = loader;
        this.http = http;
        this.dbm = dbm;
        this.fb = fb;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    NewSyncPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.create()];
                    case 1:
                        loading = _a.sent();
                        this.dbm.get_visit_sheet_for_sync().then(function (data) {
                            _this.for_sync_3 = data;
                        });
                        this.dbm.get_tournee_for_sync().then(function (data) {
                            _this.for_sync_1 = data;
                        });
                        this.dbm.get_partner_for_sync().then(function (data) {
                            _this.for_sync_4 = data;
                        });
                        this.dbm.get_table().then(function (data) {
                            _this.for_sync_5 = data;
                        });
                        return [4 /*yield*/, this.dbm.get_active_user().then(function (active_user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.sync = this.fb.group({
                                        "url": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                        "database": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                        "username": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                        "password": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                                    });
                                    this.url = "";
                                    this.database = "";
                                    this.username = active_user.login;
                                    this.password = active_user.password;
                                    this.user_id = {
                                        url: "",
                                        database: "",
                                        username: active_user.login,
                                        password: active_user.password
                                    };
                                    //const loading = await this.loader.create();
                                    this.http.post(this.url + "/sync/mysql_check_me", JSON.stringify(this.user_id), this.httpOptions)
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                                        if (!res) {
                                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                        }
                                        return res;
                                    })).subscribe(
                                    //next
                                    function (data) {
                                        console.log("70 => ", JSON.stringify(data));
                                        switch (data.status) {
                                            case 200: {
                                                _this.http.post(_this.url + "/sync/mysql_check_my_backup", JSON.stringify(_this.user_id), _this.httpOptions)
                                                    .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var i;
                                                    var _this = this;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                        console.log("75 => ", JSON.stringify(data));
                                                        for (i = 0; i < data.from_offline.length; i++) {
                                                            this.dbm.update_x_odoo_id(data.from_offline[i]);
                                                            this.dbm.update_data_for_sync_2(data.from_offline[i].table, data.from_offline[i].id);
                                                        }
                                                        this.dbm.get_active_user()
                                                            .then(function (user) {
                                                            for (var i = 0; i < data.to_offline.length; i++) {
                                                                //insert 
                                                                _this.dbm.insert_kronos_back_data(data.to_offline[i].table, data.to_offline[i].id, user.id)
                                                                    .catch(function (e) { return console.log(" insert back data odoo service exception : " + e.message); });
                                                                _this.dbm.get_columns(data.to_offline[i], 1).catch(function (e) { return console.log("get column error : " + e.message); }).then(function () {
                                                                });
                                                            }
                                                            _this.dbm.get_kronos_back_data()
                                                                .then(function (data) {
                                                                if (!data) {
                                                                    data = [];
                                                                }
                                                                var to_send = {
                                                                    vals: data,
                                                                    user_id: _this.user_id
                                                                };
                                                                _this.http.post("" + "/sync/return", to_send, _this.httpOptions).subscribe(
                                                                //next
                                                                function (_) {
                                                                    _this.http.post("" + "/sync/mysql_unset_my_backup", to_send, _this.httpOptions).subscribe(function (final_result) {
                                                                        if (final_result.status == 200) {
                                                                            _this.dbm.delete('kronos_back_data').then(function () {
                                                                                _this.set_message("success", "Mise à jour de la base de données avec succès.");
                                                                                _this.dbm.remove_survey_partner_rel();
                                                                                _this.createToast("Mise à jour de la base de données avec succès.");
                                                                                loading.dismiss();
                                                                                console.log("data service : data deleted");
                                                                            }).catch(function (e) { return console.log("odoo service deleted"); });
                                                                        }
                                                                        else {
                                                                        }
                                                                    }, (function (err) {
                                                                        console.log("110 =>" + err);
                                                                        loading.dismiss().then(function () {
                                                                            _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                                            _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                                            loading.dismiss();
                                                                            _this.router.navigate(["menu"]);
                                                                        });
                                                                    }));
                                                                }, function (err) {
                                                                    loading.dismiss().then(function () {
                                                                        _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                                        _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                                        loading.dismiss();
                                                                        //+++
                                                                        _this.router.navigate(["menu"]);
                                                                    });
                                                                });
                                                            });
                                                        }).catch(function (err) {
                                                            console.log("128 =>" + err);
                                                            loading.dismiss().then(function () {
                                                                _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                                _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                                loading.dismiss();
                                                                //+++
                                                                _this.router.navigate(["menu"]);
                                                            });
                                                        });
                                                        return [2 /*return*/];
                                                    });
                                                }); });
                                                break;
                                            }
                                            case 201: {
                                                loading.dismiss().then(function () {
                                                    _this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                                                    _this.createToast("Un autre processus est en cours sur le serveur");
                                                    _this.router.navigate(["menu"]);
                                                });
                                                break;
                                            }
                                            case 202: {
                                                loading.dismiss().then(function () {
                                                    _this.set_message("warn", "Votre email a été enregistré sur le serveur. Merci de relancer la synchronisation");
                                                    _this.createToast("Votre email a été enregistré sur le serveur. Merci de relancer la synchronisation");
                                                    _this.router.navigate(["menu"]);
                                                });
                                                break;
                                            }
                                            case 500: {
                                                loading.dismiss().then(function () {
                                                    _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                    _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                    loading.dismiss();
                                                    //+++
                                                    _this.router.navigate(["menu"]);
                                                });
                                                break;
                                            }
                                        }
                                    });
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewSyncPage.prototype.synchroniser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, i, i, user_data_1, httpOptions_1, to_send_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < this.for_sync_1.length; i++) {
                            this.for_sync_5.push(this.for_sync_1[i]);
                        }
                        for (i = 0; i < this.for_sync_3.length; i++) {
                            this.for_sync_5.push(this.for_sync_3[i]);
                        }
                        for (i = 0; i < this.for_sync_4.length; i++) {
                            this.for_sync_5.push(this.for_sync_4[i]);
                        }
                        if (!(this.username == "admin")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.synchronise_as_admin("", this.sync.get(['username']).value, "", this.sync.get(['password']).value)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].presentLoading();
                        user_data_1 = {
                            url: this.sync.get(['url']).value,
                            username: this.sync.get(['username']).value,
                            password: this.sync.get(['password']).value,
                            database: this.sync.get(['database']).value
                        };
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                        httpOptions_1 = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                            })
                        };
                        to_send_1 = {
                            vals: this.for_sync_5,
                            user_id: user_data_1
                        };
                        console.log(JSON.stringify(to_send_1));
                        return [4 /*yield*/, this.http.post("" + "/sync/mysql_pass_data_to_odoo", JSON.stringify(to_send_1), httpOptions_1)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                                console.log("res == > ", res);
                                if (!res) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                }
                                return res;
                            })).subscribe(
                            //next
                            function (data) {
                                if (data.status == 500) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                        _this.set_message("error", "Erreur serveur Odoo.");
                                        _this.createToast("Erreur serveur Odoo");
                                        _this.router.navigate(["menu"]).then(function () { return console.log("nav 1"); });
                                    });
                                }
                                else if (data.status == 202) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                        _this.createToast("Un autre processus est en cours sur le serveur");
                                        _this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                                        _this.router.navigate(["menu"]).then(function () { return console.log("nav 2"); });
                                        ;
                                    });
                                }
                                else {
                                    _this.dbm.get_active_user()
                                        .then(function (user) {
                                        console.log("318 => ", JSON.stringify(data.response));
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].data_length = data.response.to_offline.length;
                                        for (var i = 0; i < data.response.to_offline.length; i++) {
                                            //insert 
                                            _this.dbm.insert_kronos_back_data(data.response.to_offline[i].table, data.response.to_offline[i].id, user.id)
                                                .catch(function (e) { return console.log(" insert back data odoo service exception : " + e.message); });
                                            _this.dbm.get_columns(data.response.to_offline[i], 0).catch(function (e) { return console.log("get column error : " + e.message); }).then(function () {
                                            });
                                        }
                                        for (var i = 0; i < data.response.from_offline.length; i++) {
                                            _this.dbm.update_x_odoo_id(data.response.from_offline[i]);
                                            _this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id);
                                        }
                                        _this.dbm.get_kronos_back_data()
                                            .then(function (data) {
                                            if (!data) {
                                                data = [];
                                            }
                                            var to_send = {
                                                vals: data,
                                                user_id: user_data_1
                                            };
                                            _this.http.post("" + "/sync/return", to_send, httpOptions_1).subscribe(function (_) {
                                                _this.dbm.delete('kronos_back_data').then(function () {
                                                    console.log("data service : data deleted");
                                                    _this.http.post("" + "/sync/mysql_remove_me", to_send, httpOptions_1).subscribe(function (final_result) {
                                                        _this.router.navigate(["menu"]).then(function () {
                                                            //Counter.disableLoading().then(() => console.log("4"))
                                                        });
                                                        _this.createToast("Synchronisation effectuée avec succès!").then(function () {
                                                            //Counter.disableLoading().then(() => console.log("6"))
                                                        });
                                                        _this.set_message("success", "Synchronisation effectuée avec succès!");
                                                        //Counter.disableLoading().then(() => console.log("1"))
                                                    });
                                                    //Counter.disableLoading().then(() => console.log("2"))
                                                }).catch(function (e) { return console.log("odoo service deleted"); });
                                                //Counter.disableLoading().then(() => console.log("3"))
                                            }, function (err) {
                                                _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                                    _this.createToast("Une erreur est survenue ... ");
                                                    _this.set_message("error", "Une erreur est survenue.");
                                                    _this.router.navigate(["menu"]).then(function () { return console.log("nav 4"); });
                                                    ;
                                                });
                                                console.log("erreur an amle post return ", err.message);
                                            });
                                            //Counter.disableLoading().then(() => console.log("5"))
                                        }).catch(function (err) {
                                            console.log("142 =>" + err);
                                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                                _this.set_message("error", "Impossible de se connecter au serveur.");
                                                _this.createToast("Impossible de se connecter au serveur.");
                                                _this.router.navigate(["menu"]).then(function () { return console.log("nav 5"); });
                                                ;
                                            });
                                        });
                                    }).catch(function (err) {
                                        console.log("159 =>" + err);
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                            _this.set_message("error", "Une erreur s'est produite lors de la synchronisation");
                                            _this.createToast("Une erreur s'est produite lors de la synchronisation");
                                            _this.router.navigate(["menu"]).then(function () { return console.log("nav 6"); });
                                            ;
                                        });
                                    });
                                }
                            }, function (error) {
                                console.log("179 ", error);
                                _this.createToast("Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.").then(function () {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                    _this.set_message("error", "Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.");
                                    _this.router.navigate(["menu"]).then(function () { return console.log("nav 7"); });
                                    ;
                                });
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NewSyncPage.prototype.createToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewSyncPage.prototype.set_message = function (type, message) {
        var mensaje = [{
                severity: type,
                detail: message
            }];
        this.storage.set("message", mensaje).then(function () {
            console.log("tafa le set message");
        });
    };
    NewSyncPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-sync',
            template: __webpack_require__(/*! ./new-sync.page.html */ "./src/app/new-sync/new-sync.page.html"),
            styles: [__webpack_require__(/*! ./new-sync.page.scss */ "./src/app/new-sync/new-sync.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_odoo_service__WEBPACK_IMPORTED_MODULE_10__["OdooService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewSyncPage);
    return NewSyncPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-sync-new-sync-module.js.map