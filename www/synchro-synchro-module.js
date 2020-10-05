(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["synchro-synchro-module"],{

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

/***/ "./src/app/synchro/synchro.module.ts":
/*!*******************************************!*\
  !*** ./src/app/synchro/synchro.module.ts ***!
  \*******************************************/
/*! exports provided: SynchroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynchroPageModule", function() { return SynchroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _synchro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./synchro.page */ "./src/app/synchro/synchro.page.ts");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_16__);
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
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _head_head_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../head/head.module */ "./src/app/head/head.module.ts");



























var routes = [
    {
        path: '',
        component: _synchro_page__WEBPACK_IMPORTED_MODULE_6__["SynchroPage"]
    }
];
var SynchroPageModule = /** @class */ (function () {
    function SynchroPageModule() {
    }
    SynchroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_15__["AccordionModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_16__["PasswordModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_8__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_18__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_19__["CardModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_21__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_24__["MenuModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_23__["DynamicDialogModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__["RadioButtonModule"],
                _head_head_module__WEBPACK_IMPORTED_MODULE_26__["HeadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_synchro_page__WEBPACK_IMPORTED_MODULE_6__["SynchroPage"]],
            providers: []
        })
    ], SynchroPageModule);
    return SynchroPageModule;
}());



/***/ }),

/***/ "./src/app/synchro/synchro.page.html":
/*!*******************************************!*\
  !*** ./src/app/synchro/synchro.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\t<div class=\"container\">\r\n\r\n\t\t<!-- HEAD -->\r\n\t\t<div class=\"head\">\r\n\t\t\t<div class=\"back_button\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"menu\">\r\n\t\t\t\t<div class=\"list_icon\">\r\n\t\t\t\t\t<i class=\"fas fa-at\"\r\n\t\t\t\t\t\tstyle=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-comments\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-ban on fa-camera\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t  <app-head></app-head>\r\n\t\t\t \r\n\t\t</div>\r\n\t\t<!-- HEAD -->\r\n\r\n\r\n\t\t<div class=\"body\">\r\n\t\t\t<div class=\"bg-blanc\">\r\n\r\n\t\t\t\t<div class=\"title_body\">\r\n\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t<a (click)=\"home_page()\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\">\r\n\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\tSynchronisation\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"real-content-page\">\r\n\t\t\t\t\t<form class=\"connexion\" [formGroup]=\"sync\" (ngSubmit)=\"synchroniser()\">\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"loadIndicator\" class=\"spinner field\">\r\n\t\t\t\t\t\t\t<ion-spinner name=\"dots\"></ion-spinner>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t\t<p class=\"first\">URL</p>\r\n\t\t\t\t\t\t\t<input formControlName=\"url\" [(ngModel)]=\"url\" type=\"text\" size=\"30\" pInputText required>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Base de données</p>\r\n\t\t\t\t\t\t\t<input formControlName=\"database\" [(ngModel)]=\"database\" type=\"text\" size=\"30\" pInputText\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Utilisateur</p>\r\n\t\t\t\t\t\t\t<input formControlName=\"username\" [(ngModel)]=\"username\" type=\"text\" size=\"30\" pInputText\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Mot de passe</p>\r\n\t\t\t\t\t\t\t<input formControlName=\"password\" [(ngModel)]=\"password\" type=\"password\" pInputText\r\n\t\t\t\t\t\t\t\tsize=\"30\" required />\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"bouton\">\r\n\t\t\t\t\t\t\t<button pButton type=\"submit\" label=\"SYNCHRONISER\" class=\"bt2 ui-button-success\"\r\n\t\t\t\t\t\t\t\t[disabled]=\"disable\"></button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!--<div class=\"bouton\">\r\n\t\t\t\t\t\t<button pButton type=\"button\" label=\"send_partner\" class=\"bt2 ui-button-success\" (click) = \"send_partner()\"></button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"bouton\" *ngIf=\"reset == true\">\r\n\t\t\t\t\t\t\t<button pButton type=\"button\" label=\"RÉINITIALISER LES DONNÉES\"\r\n\t\t\t\t\t\t\t\tclass=\"bt2 ui-button-warning\" (click)=\"sync_all()\"></button>\r\n\t\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--<div class = \"footer\">\r\n\t\t\t\t\t<div class=\"bouton_visite\">\r\n\t\t\t\t\t\t<div class=\"ui-g\">\r\n\t\t\t\t\t\t\t<div class=\"ui-g-10\">\r\n\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t\t<button pButton (click)=\"repair()\" type=\"button\" icon=\"fas fa-hammer\" class=\"ui-button-rounded ui-button-secondary\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t<div class=\"bouton_visite\">\r\n\t\t\t\t\t\t<div class=\"ui-g\">\r\n\t\t\t\t\t\t\t<div class=\"ui-g-10\">\r\n\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t\t<button pButton (click)=\"display = true\" type=\"button\" icon=\"fas fa-undo\" class=\"ui-button-rounded ui-button-secondary\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<p-dialog header=\"Ré-initialisation de données\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\"\r\n\t\t\tstyleClass=\"mydialog\" appendTo=\"body\">\r\n\t\t\t<p>\r\n\t\t\t\tCet bouton ré-initialisera vos données à synchroniser puis l'action suivante pourra prendre plusieurs\r\n\t\t\t\tminutes.\r\n\t\t\t\tÊtes-vous sûr de vouloir continuer ?\r\n\t\t\t</p>\r\n\t\t\t<p-footer>\r\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"displayPosition=false\" label=\"Non\"\r\n\t\t\t\t\tclass=\"ui-button-secondary\"></button>\r\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"showPositionDialog()\" label=\"Oui\"></button>\r\n\t\t\t</p-footer>\r\n\t\t</p-dialog>\r\n\r\n\t\t<!--<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\" appendTo=\"body\">\r\n\t\t\t<div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<p-radioButton name=\"group2\" value=\"1\" label=\"Re-syncroniser toutes les données.\" [(ngModel)]=\"val2\"\r\n\t\t\t\t\t\tinputId=\"preopt1\"></p-radioButton>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<p-radioButton name=\"group2\" value=\"2\" label=\"Ne plus afficher ce bouton\" [(ngModel)]=\"val2\"\r\n\t\t\t\t\t\tinputId=\"preopt2\"></p-radioButton>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p-footer>\r\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"valider()\" label=\"OK\"></button>\r\n\t\t\t</p-footer>\r\n\r\n\t\t</p-dialog> -->\r\n\r\n\t</div>\r\n\t<ion-spinner *ngIf=\"show\"></ion-spinner>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/synchro/synchro.page.scss":
/*!*******************************************!*\
  !*** ./src/app/synchro/synchro.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-action-general {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 10px; }\n  .btn-action-general .ui-button-success {\n    padding: 7px 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    background: #21B799;\n    color: #ffffff; }\n  .btn-action-general .ui-button-secondary {\n    padding: 7px 15px;\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #21B799; }\n  .bg-blanc {\n  background: #ffffff;\n  padding-top: 5px;\n  min-height: 94vh; }\n  .breacumb.ui-g {\n  margin-top: 0; }\n  .btn-action-etapes {\n  text-align: right; }\n  .btn-action-etapes button.bt.ui-button-success {\n    padding: 10px 15px; }\n  .ui-button {\n  background-color: #21b799;\n  border: 1px solid #21b799;\n  margin-left: 10px; }\n  .bt2 {\n  height: 50px;\n  width: 80%; }\n  .bouton_visite {\n  text-align: center;\n  margin-top: 5px; }\n  .bouton {\n  margin-top: 25px;\n  width: 50%; }\n  .real-content-page {\n  padding: 15px;\n  text-align: -webkit-center; }\n  .footer {\n  margin-top: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9zeW5jaHJvL3N5bmNocm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLG9CQUFvQixFQUFBO0VBRnhCO0lBSUUsaUJBQWlCO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFWbkI7SUFhRSxpQkFBaUI7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQUduQjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdLLGtCQUFrQixFQUFBO0VBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtFQUdyQjtFQUNDLFlBQVk7RUFDVCxVQUFVLEVBQUE7RUFHZDtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0VBRWQ7RUFDSSxhQUFhO0VBQ2IsMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N5bmNocm8vc3luY2hyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFjdGlvbi1nZW5lcmFsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0LnVpLWJ1dHRvbi1zdWNjZXNzIHtcclxuXHRcdHBhZGRpbmc6IDdweCAxNXB4O1xyXG5cdCAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0ICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0ICAgIGJhY2tncm91bmQ6ICMyMUI3OTk7XHJcblx0ICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHQudWktYnV0dG9uLXNlY29uZGFyeSB7XHJcblx0XHRwYWRkaW5nOiA3cHggMTVweDtcclxuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdCAgICBjb2xvcjogIzIxQjc5OTtcclxuXHR9XHJcbn1cclxuLmJnLWJsYW5jIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWluLWhlaWdodDogOTR2aDtcclxufVxyXG4uYnJlYWN1bWIudWktZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1ldGFwZXMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBidXR0b24uYnQudWktYnV0dG9uLXN1Y2Nlc3Mge1xyXG5cdCAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0fVxyXG59XHJcbi51aS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYjc5OTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMWI3OTk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmJ0MiB7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJvdXRvbl92aXNpdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYm91dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5yZWFsLWNvbnRlbnQtcGFnZXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/synchro/synchro.page.ts":
/*!*****************************************!*\
  !*** ./src/app/synchro/synchro.page.ts ***!
  \*****************************************/
/*! exports provided: SynchroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynchroPage", function() { return SynchroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_odoo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/odoo.service */ "./src/app/services/odoo.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/helper/counter */ "./src/app/model/helper/counter.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













var SynchroPage = /** @class */ (function () {
    //enable_partner : boolean = false ;
    function SynchroPage(http, toastController, loading, actRoute, router, dbm, storage, fb, service) {
        var _this = this;
        this.http = http;
        this.toastController = toastController;
        this.loading = loading;
        this.actRoute = actRoute;
        this.router = router;
        this.dbm = dbm;
        this.storage = storage;
        this.fb = fb;
        this.service = service;
        this.edit = false;
        //mada13
        //mada13
        this.url = "http://192.168.200.44:3002";
        this.database = "mada13";
        this.username = "";
        this.password = "";
        this.filtered_visit_sheet = [];
        this.for_sync = [];
        this.for_sync_1 = [];
        this.for_sync_2 = [];
        this.for_sync_3 = [];
        this.for_sync_4 = [];
        this.for_sync_5 = [];
        this.disable = false;
        this.reset = false;
        this.val2 = "2";
        this.display = false;
        this.position = "";
        this.displayPosition = false;
        this.max_info = [];
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                _this.loadIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                _this.loadIndicator = false;
            }
        });
        this.sync = this.fb.group({
            "url": ["http://192.168.200.44:3002", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "database": ["mada13", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "username": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "password": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    SynchroPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.color_icon = data.color;
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data.non_synced },
            ];
        });
        this.storage.get("reset").then(function (reset) {
            if (reset == true) {
                _this.reset = reset;
            }
        });
        this.disable = false;
        this.dbm.get_active_user().then(function (user_config) {
            _this.storage.get("server_config").then(function (server_config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(user_config.username != "admin")) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.service.get_all_backup_data("http://192.168.200.44:3002", user_config.login, "mada13", user_config.password).then(function () { })
                                    .finally(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                                        this.max_info = this.dbm.get_max_off_all_table();
                                        return [2 /*return*/];
                                    });
                                }); })];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.log(user_config.username);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }).catch(function (e) {
                console.log("97 => ", e);
            });
        }).catch(function (e) {
            console.log("100 => ", e);
        });
        var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(_model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].show);
        obs.subscribe(function (data) {
            console.log("show  : " + data);
            _this.show = data;
        });
        this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
        ];
        this.storage.get("server_config").then(function (server_config) {
            _this.storage.get("user_config").then(function (user_config) {
                _this.url = "http://192.168.200.44:3002";
                _this.database = "mada13";
                _this.username = user_config.username;
                _this.password = user_config.password;
            });
        });
    };
    SynchroPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (data) {
            _this.color_icon = data["color"];
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data['unsynced'] },
            ];
        });
    };
    SynchroPage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    SynchroPage.prototype.sauvegarder = function () {
        var _this = this;
        var server_config = {
            url: "http://192.168.200.44:3002",
            database: "mada13"
        };
        var user_config = {
            username: this.username,
            password: this.password,
        };
        this.storage.set("server_config", server_config).then(function () {
            // this.edit = false;
            _this.sync.controls["url"].enable();
            _this.sync.controls["database"].enable();
        });
        this.storage.set("user_config", user_config).then(function () {
            // this.edit = false;
            _this.sync.controls["username"].enable();
            _this.sync.controls["password"].enable();
        });
    };
    SynchroPage.prototype.synchroniser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, i, i, user_data_1, httpOptions_1, vals, to_send_1;
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
                        this.sauvegarder();
                        if (!(this.username == "admin")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.synchronise_as_admin("http://192.168.200.44:3002", "admin", "mada13", "tsiory")];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].presentLoading();
                        user_data_1 = {
                            url: this.sync.get(['url']).value,
                            username: this.sync.get(['username']).value,
                            password: this.sync.get(['password']).value,
                            database: this.sync.get(['database']).value
                        };
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading();
                        httpOptions_1 = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                            })
                        };
                        vals = { vals: this.for_sync_5, table_info: this.max_info };
                        to_send_1 = {
                            vals: vals,
                            user_id: user_data_1
                        };
                        console.log(JSON.stringify(to_send_1));
                        return [4 /*yield*/, this.http.post("http://192.168.200.44:3002" + "/sync/data", JSON.stringify(to_send_1), httpOptions_1)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(function (res) {
                                console.log("241 ", JSON.stringify(res));
                                var to_send = {
                                    vals: [],
                                    user_id: user_data_1
                                };
                                _this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions_1).subscribe(function () {
                                    console.log("Avy namafa....");
                                });
                                _this.resp = res;
                                if (!res) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading();
                                }
                                return res;
                            })).subscribe(
                            //next
                            function (data) {
                                if (data.status == 500) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () {
                                        _this.set_message("error", "Erreur serveur Odoo.");
                                        _this.createToast("Erreur serveur Odoo");
                                        _this.router.navigate(["menu"]).then(function () { return console.log("nav 1"); });
                                    });
                                }
                                else if (data.status == 202) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () {
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
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].data_length = data.response.to_offline.length;
                                        for (var i = 0; i < data.response.to_offline.length; i++) {
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
                                            _this.http.post("http://192.168.200.44:3002" + "/sync/return", to_send, httpOptions_1).subscribe(function (_) {
                                                _this.dbm.delete('kronos_back_data').then(function () {
                                                    console.log("data service : data deleted");
                                                    _this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions_1).subscribe(function (final_result) {
                                                        _this.router.navigate(["menu"]).then(function () {
                                                            //Counter.disableLoading().then(() => console.log("4"))
                                                        });
                                                        for (var i = 0; i < _this.resp.response.to_offline.length; i++) {
                                                            //insert 
                                                            if (_this.resp.response.to_offline.table != "res_partner") {
                                                                _this.dbm.unset_id(_this.resp.response.to_offline[i], "1").catch(function (e) { return console.log("unset id error : " + e.message); }).then(function () {
                                                                });
                                                            }
                                                        }
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
                                                _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () {
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
                                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () {
                                                _this.set_message("error", "Impossible de se connecter au serveur.");
                                                _this.createToast("Impossible de se connecter au serveur.");
                                                _this.router.navigate(["menu"]).then(function () { return console.log("nav 5"); });
                                                ;
                                            });
                                        });
                                    }).catch(function (err) {
                                        console.log("159 =>" + err);
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () {
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
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading();
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
    SynchroPage.prototype.set_message = function (type, message) {
        var mensaje = [{
                severity: type,
                detail: message
            }];
        this.storage.set("message", mensaje).then(function () {
            console.log("tafa le set message");
        });
        _model_helper_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"].disableLoading().then(function () { return console.log("5"); });
    };
    SynchroPage.prototype.createToast = function (message) {
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
    SynchroPage.prototype.home_page = function () {
        this.router.navigate(['menu']);
    };
    SynchroPage.prototype.Deconnexion = function () {
        var _this = this;
        _model_helper_auth__WEBPACK_IMPORTED_MODULE_7__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home']);
    };
    SynchroPage.prototype.sync_all = function () {
        this.display = true;
    };
    SynchroPage.prototype.valider = function () {
        if (this.val2 == 1) {
            this.dbm.sync_all();
            this.reset = false;
            this.storage.set("reset", false);
            this.display = false;
        }
        this.reset = false;
        this.storage.set("reset", false);
        this.display = false;
    };
    SynchroPage.prototype.showPositionDialog = function () {
        var _this = this;
        this.dbm.sync_all().then(function () {
            _this.displayPosition = false;
            _this.router.navigate(['menu']);
        });
    };
    SynchroPage.prototype.repair = function () {
        this.dbm.repair_data_for_sync();
        this.router.navigate(['menu']);
    };
    SynchroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-synchro',
            template: __webpack_require__(/*! ./synchro.page.html */ "./src/app/synchro/synchro.page.html"),
            styles: [__webpack_require__(/*! ./synchro.page.scss */ "./src/app/synchro/synchro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_5__["Database_manager"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_odoo_service__WEBPACK_IMPORTED_MODULE_3__["OdooService"]])
    ], SynchroPage);
    return SynchroPage;
}());



/***/ })

}]);
//# sourceMappingURL=synchro-synchro-module.js.map