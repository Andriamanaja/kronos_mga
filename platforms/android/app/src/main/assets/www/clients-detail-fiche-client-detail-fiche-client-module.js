(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-detail-fiche-client-detail-fiche-client-module"],{

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

/***/ "./src/app/clients/detail-fiche-client/detail-fiche-client.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/clients/detail-fiche-client/detail-fiche-client.module.ts ***!
  \***************************************************************************/
/*! exports provided: DetailFicheClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFicheClientPageModule", function() { return DetailFicheClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_fiche_client_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-fiche-client.page */ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var src_app_head_head_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/head/head.module */ "./src/app/head/head.module.ts");






























var routes = [
    {
        path: '',
        component: _detail_fiche_client_page__WEBPACK_IMPORTED_MODULE_7__["DetailFicheClientPage"]
    }
];
var DetailFicheClientPageModule = /** @class */ (function () {
    function DetailFicheClientPageModule() {
    }
    DetailFicheClientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_8__["ChartModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_9__["FullCalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_15__["PasswordModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_20__["CardModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_22__["ToastModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_25__["DialogModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_26__["TagInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_27__["MenuModule"],
                src_app_head_head_module__WEBPACK_IMPORTED_MODULE_29__["HeadModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__["AutoCompleteModule"]
            ],
            declarations: [_detail_fiche_client_page__WEBPACK_IMPORTED_MODULE_7__["DetailFicheClientPage"]],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_21__["DialogService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_21__["MessageService"],
                _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__["PhotoViewer"]
            ]
        })
    ], DetailFicheClientPageModule);
    return DetailFicheClientPageModule;
}());



/***/ }),

/***/ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/clients/detail-fiche-client/detail-fiche-client.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\t<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-right\" key=\"invalid\"></p-toast>\r\n\t<div *ngIf=\"edit == false\" class=\"container\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- HEAD -->\r\n\t\t\t<div class=\"head\">\r\n\t\t\t\t<div class=\"back_button\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<img (click)=\"open_menu()\" src=\"../../assets/image/logo_itg.png\" />\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu\">\r\n\t\t\t\t\t<div class=\"list_icon\">\r\n\t\t\t\t\t\t<i class=\"fas fa-at\"\r\n\t\t\t\t\t\t\tstyle=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t\t<i class=\"fas fa-comments\"\r\n\t\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t\t<i class=\"fas fa-ban on fa-camera\"\r\n\t\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t  <app-head></app-head>\r\n\t\t\t\t \r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"body\">\r\n\t\t\t\t<div class=\"title_body\">\r\n\t\t\t\t\t<div class=\"ui-g\">\r\n\t\t\t\t\t\t<div (click)=\"open_fiche_client()\" class=\"ui-g-1\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\"> </i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-11\">\r\n\t\t\t\t\t\t\t<h3> {{data_cli.name}} </h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn_nw_cr\">\r\n\t\t\t\t\t<button *ngIf=\"client_detail.state_id != 'VALIDÉE PAR ADMINISTRATEUR' \" pButton type=\"button\" label=\"MODIFIER\" class=\"bt ui-button-success\"\r\n\t\t\t\t\t\t(click)=\"edit_fiche_client()\"></button>\r\n\t\t\t\t\t<button pButton type=\"button\" label=\"CRÉER\" class=\"bt ui-button-secondary\"\r\n\t\t\t\t\t\t(click)=\"create_fiche_client()\"></button>\r\n\t\t\t\t\t<div *ngIf=\"loadIndicator\" class=\"loadIndicator\">\r\n\t\t\t\t\t\t<ion-spinner name=\"dots\"></ion-spinner>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"breacumb2 ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-4 dropdownworkflow\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-8 dropdownworkflow noCLick\">\r\n\t\t\t\t\t\t\t<p class=\"etat3\">{{client_detail.state_id}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div *ngIf=\"condition\" class=\"archive  ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-7\"></div>\r\n\t\t\t\t\t<div  class=\"div_btn ui-g-5\">\r\n\t\t\t\t\t\t<!-- <button pButton type=\"button\" icon=\"pi pi-folder\" iconPos=\"left\" label=\"ARCHIVER\"  class=\"bt ui-button-danger\"></button> -->\r\n\t\t\t\t\t\t<!-- \t<ul class=\"CustomArchive\">\r\n\t\t\t\t\t  <li (click)=\"ConvertStatut(etat)\">\r\n\t\t\t\t\t\t<i class=\"pi pi-folder\"></i>\r\n\t\t\t\t\t\t\t{{etat}}\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"photo  ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-9\">\r\n\t\t\t\t\t\t<div *ngIf=\"!client_detail.photo_uri\"> <i class=\"pi pi-camera\"\r\n\t\t\t\t\t\t\t\tstyle=\"font-size: 100px ; color: gray\"></i> <br /></div>\r\n\t\t\t\t\t\t<div *ngIf=\"client_detail.photo_uri\" [style.background]=\"'url('+ client_detail.photo_uri +')'\"\r\n\t\t\t\t\t\t\tclass=\"contentAvatar\" (click)=\"open_full_screen()\"></div>\r\n\t\t\t\t\t\t<h2 class=\"DataCLI\">{{data_cli.name}}</h2>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"client_detail.active == 1\" class=\"box ui-g-3\">\r\n\t\t\t\t\t\t<div class=\"ribbon ribbon-top-right\"><span class=\"ribbon_green\">ACTIF</span></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"client_detail.active == 0\" class=\"box ui-g-3\">\r\n\t\t\t\t\t\t<div class=\"ribbon ribbon-top-right\"><span class=\"ribbon_red\">INACTIF</span></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t<div class=\"form_inside\">\r\n\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t<!--Organisation Commerciale-->\r\n\t\t\t\t\t\t\t<h3>Organisation Commerciale</h3>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Région</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.region}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Agence</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.agence}}</p>\r\n\t\t\t\t\t\t\t<!--<ion-label position=\"floating\">Zone</ion-label>\r\n\t\t\t\t\t  <p> {{client_detail.zone}}</p> -->\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Secteur</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.secteur}}</p>\r\n\t\t\t\t\t\t\t<!--Organisation Commerciale-->\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t<!--Coordonnées du point de vente-->\r\n\t\t\t\t\t\t\t<h3>Coordonnées du point de vente</h3>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Nom du PDV</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.nom_pos}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Nom du Gérant</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.nom_gerant}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Adresse</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.adresse}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Repère</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.repere}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Quartier</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.quartier}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Ville</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.ville}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 1</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.numero_telephone1}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 2</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.numero_telephone2}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 3</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.numero_telephone3}}</p>\r\n\t\t\t\t\t\t\t<!--Coordonnées du point de vente-->\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t<!--Coordonnées complémentaires du Point de Vente-->\r\n\t\t\t\t\t\t\t<h3>Coordonnées complémentaires du Point de Vente</h3>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Emplacement</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.emplacement}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Proximité</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.proximite}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Type Quartier</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.type_quartier}}</p>\r\n\t\t\t\t\t\t\t<!--<div class=\"gps\">\r\n\t\t\t\t\t\t\t\t<p>Coordonnées GPS Latitude : {{client_detail.provider_latitude}}</p>\r\n\t\t\t\t\t\t\t\t<p>Coordonnées GPS Longitude : {{client_detail.provider_longitude}} </p>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<!--Coordonnées complémentaires du Poin de Vente-->\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t<!--Typologie de Point de Vente-->\r\n\t\t\t\t\t\t\t<h3>Typologie de Point de Vente</h3>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Type Client</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.type_client}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Activité PDV</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.activite_pos}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Canal</ion-label>\r\n\t\t\t\t\t\t\t<p>{{client_detail.canal_id}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Enseigne d'appartenance</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.enseigne_appartenance}}</p>\r\n\r\n\t\t\t\t\t\t\t<div class=\"ui-g\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Classification 1</ion-label>\r\n\t\t\t\t\t\t\t\t\t<p> {{client_detail.classification1}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Classification 2</ion-label>\r\n\t\t\t\t\t\t\t\t\t<p> {{client_detail.classification2}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<!--Typologie de Point de Vente-->\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t<!--Couverture commerciale-->\r\n\t\t\t\t\t\t\t<h3>Couverture commerciale</h3>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Couverture commerciale</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.couverture_commerciale}}</p>\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Fréquence de visite</ion-label>\r\n\t\t\t\t\t\t\t<p> {{client_detail.frequence_visite}}</p>\r\n\t\t\t\t\t\t\t<!--Couverture commerciale-->\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<!--ZAVATRA MITSIVALANA-->\r\n\t\t\t\t\t\t<p-tabView>\r\n\t\t\t\t\t\t\t<p-tabPanel header=\"AGENTS COMMERCIAUX\">\r\n\t\t\t\t\t\t\t\t<ion-chip *ngFor=\"let login of client_detail.cnc_login\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>{{login.display}}</ion-label>\r\n\t\t\t\t\t\t\t\t</ion-chip>\r\n\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t<p-tabPanel header=\"PERMANENT POSM\">\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Cible installation présentoirs</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.cible_installation_presentoirs}}</p>\r\n\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Permanent POSM 1/5</ion-label> <br />\r\n\r\n\t\t\t\t\t\t\t\t<ion-chip *ngFor=\"let posm of client_detail.cnc_posm\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>{{posm.display}}</ion-label>\r\n\t\t\t\t\t\t\t\t</ion-chip>\r\n\r\n\r\n\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t<p-tabPanel header=\"CONTRAT\">\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Contrat</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.contrat}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Date debut contrat</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.date_debut_contrat}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Date fin contrat</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.date_debut_contrat}}</p>\r\n\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t<p-tabPanel header=\"ACTIVATION\">\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Coopération ITG</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.cooperation_itg}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Cible Activation</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.cible_activation}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Activation autorisée</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.activation_autorisee}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Préférence animateur</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.preference_animateur}}</p>\r\n\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t<p-tabPanel header=\"APPROVISIONNEMENT\">\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fréquence d'approvisionnement</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.frequence_approvisionnement}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Source d'approvisionnement</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.new_source_approvisionnement}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fournisseur principal</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.new_fournisseur_principal}}</p>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fournisseur secondaire</ion-label>\r\n\t\t\t\t\t\t\t\t<p class=\"TxtBoldtabPanel\"> {{client_detail.new_fournisseur_secondaire}}</p>\r\n\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t</p-tabView>\r\n\r\n\t\t\t\t\t\t<!--ZAVATRA MITSIVALANA-->\r\n\t\t\t\t\t\t<!--Commentaire-->\r\n\t\t\t\t\t\t<ion-label position=\"floating\">Commentaires</ion-label>\r\n\t\t\t\t\t\t<p> {{client_detail.commentaire}}</p>\r\n\t\t\t\t\t\t<!--Commentaire-->\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"footer\"></div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!--EDIT-->\r\n\t<div *ngIf=\"edit == true\" class=\"container\">\r\n\t\t<div class=\"container\">\r\n\r\n\t\t\t<!-- HEAD -->\r\n\t\t\t<div class=\"head\">\r\n\t\t\t\t<div class=\"back_button\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<img (click)=\"open_menu()\" src=\"../../assets/image/logo_itg.png\" />\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu\">\r\n\t\t\t\t\t<div class=\"list_icon\">\r\n\t\t\t\t\t\t<i class=\"pi pi-envelope\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n\t\t\t\t\t\t<i class=\"pi pi-comments\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n\t\t\t\t\t\t<i class=\"pi pi-user\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"menu_icon\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t  <p-menu (click)=\"go_sync()\" #menu_2 [popup]=\"true\" [model]=\"items_sync\"></p-menu>\r\n\t\t\t\t\t   <a (click)=\"menu_2.toggle($event)\" *ngIf = \"color_icon\"> <i *ngIf = \"color_icon == '#21b799' \" class=\"fas fa-sync\" style=\"color : #21b799 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\r\n\t\t\t\t\t  <i *ngIf = \"color_icon == '#e6db10' \" class=\"fas fa-sync\" style=\"color : #e6db10 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\r\n\t\t\t\t\t  <i *ngIf = \"color_icon == '#b72121' \" class=\"fas fa-sync\" style=\"color : #b72121 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\r\n\t\t\t\t\t  <i *ngIf = \"color_icon == 'transparent' \" class=\"fas fa-sync\" style=\"color : transparent ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t  <p-menu (click)=\"Deconnexion()\" #menu [popup]=\"true\" [model]=\"itemes\"></p-menu>\r\n\t\t\t\t\t  <a (click)=\"menu.toggle($event)\"> <i class=\"fas fa-bars\" style=\" color: white; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t\t<!-- HEAD -->\r\n\r\n\t\t\t<div class=\"body\">\r\n\r\n\t\t\t\t<div class=\"title_body\">\r\n\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t<i (click)=\"open_fiche_client()\" class=\"fas fa-arrow-left\"\r\n\t\t\t\t\t\t\tstyle=\"font-size: 18px ; color: #21B799\"></i> {{data_cli.name}}\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn_nw_cr\">\r\n\t\t\t\t\t<button pButton type=\"submit\" label=\"SAUVEGARDER\" (click)=\"save_edit()\"\r\n\t\t\t\t\t\tclass=\"bt ui-button-success\"></button>\r\n\t\t\t\t\t<button pButton type=\"button\" label=\"Annuler\"  class=\"bt ui-button-secondary\"\r\n\t\t\t\t\t\t(click)=\"abort_edit_client()\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"breacumb2 ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-4 dropdownworkflow\">\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"ui-g-8 dropdownworkflow noCLick\">\r\n\t\t\t\t\t\t\t<p class=\"etat3\">{{client_detail.state_id}}</p>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div *ngIf=\"condition\" class=\"archive  ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-7\"></div>\r\n\t\t\t\t\t<div  class=\"div_btn ui-g-5\">\r\n\t\t\t\t\t\t<!-- <button pButton type=\"button\" icon=\"pi pi-folder\" iconPos=\"left\" label=\"ARCHIVER\"  class=\"bt ui-button-danger\"></button> -->\r\n\t\t\t\t\t\t<!--   <ul class=\"CustomArchive\">\r\n\t\t\t\t\t<li (click)=\"ConvertStatut(etat)\">\r\n\t\t\t\t\t  <i class=\"pi pi-folder\"></i>\r\n\t\t\t\t\t\t  {{etat}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t  </ul>-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"photo  ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-9\">\r\n\t\t\t\t\t\t<div class=\"cam\" *ngIf=\"!client_detail.photo_uri\"> <i class=\"pi pi-camera\"\r\n\t\t\t\t\t\t\tstyle=\"font-size: 100px ; color: gray\"></i> <br />\r\n\t\t\t\t\t\t\t<div class=\"del_mod\">\r\n\t\t\t\t\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"center\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"ui-button-success\" (click)=\"showImageFromCamera()\"></button>\r\n\t\t\t\t\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"center\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"ui-button-danger\" (click)=\"removeImage()\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"cam\" *ngIf=\"client_detail.photo_uri\" [style.background]=\"'url('+ client_detail.photo_uri +')'\"\r\n\t\t\t\t\t\t\tclass=\"contentAvatar\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"del_mod\">\r\n\t\t\t\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"center\" \r\n\t\t\t\t\t\t\t\t\tclass=\"ui-button-success\" (click)=\"showImageFromCamera()\"></button>\r\n\t\t\t\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"center\" \r\n\t\t\t\t\t\t\t\t\tclass=\"ui-button-danger\" (click)=\"removeImage()\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h2 class=\"DataCLI\">{{data_cli.name}}</h2>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div *ngIf=\"client_detail.active == 1\" class=\"box ui-g-3\">\r\n\t\t\t\t\t\t<div class=\"ribbon ribbon-top-right\"><span class=\"ribbon_green\">ACTIF</span></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"client_detail.active == 0\" class=\"box ui-g-3\">\r\n\t\t\t\t\t\t<div class=\"ribbon ribbon-top-right\"><span class=\"ribbon_red\">INACTIF</span></div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t<form [formGroup]=\"fiche_client\" (ngSubmit)=\"save_edit()\">\r\n\t\t\t\t\t\t<div class=\"form_inside\">\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t\t<!--Organisation Commerciale-->\r\n\t\t\t\t\t\t\t\t<h3>Organisation Commerciale</h3>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Région</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.region_id\" [value]=\"data_cli.region_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"region_id\" (ionCancel)=\"cancel('region_id')\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"regionChange($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let region of i_t_region\" [value]=\"region.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{region.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Agence</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.agence_id\" [value]=\"data_cli.agence_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"agence_id\" (ionCancel)=\"cancel('agence_id')\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"agenceChange($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let agence of i_t_agence_filtered\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"agence.id\"> {{agence.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<!--<ion-item>\r\n\t\t\t\t\t<ion-label position=\"floating\">Zone</ion-label>\r\n\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)] = \"data_cli.zone_id\" [value]=\"data_cli.zone_id\" formControlName= \"zone_id\" (ionCancel) = \"cancel('zone_id')\" (ionChange)=\"zoneChange($event.detail.value)\">\r\n\t\t\t\t\t  <ion-select-option *ngFor = \"let zone of i_t_zone_filtered\" [value] = \"zone.id\" > {{zone.name}}</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t  </ion-item> -->\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Secteur</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.secteur_id\" [value]=\"data_cli.secteur_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"secteur_id\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let secteur of i_t_secteur_filtered\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"secteur.id\"> {{secteur.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<!--Organisation Commerciale-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t\t<!--Coordonnées du point de vente-->\r\n\t\t\t\t\t\t\t\t<h3>Coordonnées du point de vente</h3>\r\n\r\n\t\t\t\t\t\t\t\t<input type=\"hidden\" [(ngModel)]=\"data_cli.photo\" [value]=\"data_cli.photo\"\r\n\t\t\t\t\t\t\t\tformControlName=\"photo\" >\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Nom du PDV</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.nom_pos\" [value]=\"data_cli.nom_pos\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"nom_pos\" type=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Nom du Gérant</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.nom_gerant\" [value]=\"data_cli.nom_gerant\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"nom_gerant\" type=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Adresse</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.adresse\" [value]=\"data_cli.adresse\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"adresse\" type=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Repère</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.repere\" [value]=\"data_cli.repere\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"repere\" type=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Quartier</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.quartier\" [value]=\"data_cli.quartier\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"quartier\" type=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Ville</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.ville_id\" [value]=\"data_cli.ville_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"ville_id\" (ionCancel)=\"cancel('ville_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let ville of i_t_ville\" [value]=\"ville.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ville.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 1</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.numero_telephone1\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.numero_telephone1\" formControlName=\"numero_telephone1\"\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 2</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.numero_telephone2\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.numero_telephone2\" formControlName=\"numero_telephone2\"\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">N° de téléphone 3</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"data_cli.numero_telephone3\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.numero_telephone3\" formControlName=\"numero_telephone3\"\r\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"> </ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<!--Coordonnées du point de vente-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t\t<!--Coordonnées complémentaires du Point de Vente-->\r\n\t\t\t\t\t\t\t\t<h3>Coordonnées complémentaires du Point de Vente</h3>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Emplacement</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.emplacement_id\" [value]=\"data_cli.emplacement_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"emplacement_id\" (ionCancel)=\"cancel('emplacement_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let emplacement of i_t_emplacement\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"emplacement.id\"> {{emplacement.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Proximité</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.proximite_id\" [value]=\"data_cli.proximite_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"proximite_id\" (ionCancel)=\"cancel('proximite_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let proximite of i_t_proximite\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"proximite.id\"> {{proximite.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Type Quartier</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.type_quartier_id\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.type_quartier_id\" formControlName=\"type_quartier_id\"\r\n\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('type_quartier_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let type_qurtier of i_t_type_quartier\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"type_qurtier.id\"> {{type_qurtier.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"gps\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"getMyLocation()\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 5px 10px;margin-top: 10px;\"><i class=\"fas fa-map-marker-alt\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 18px ; color: red;margin-right: 10px;\"></i>Récuperer ma\r\n\t\t\t\t\t\t\t\t\t\tposition</button>\r\n\t\t\t\t\t\t\t\t\t<p>Coordonnées GPS Latitude : <ion-input [(ngModel)]=\"data_cli.provider_latitude\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.provider_latitude\" formControlName=\"provider_latitude\"\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" disabled> </ion-input>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>Coordonnées GPS Longitude : <ion-input [(ngModel)]=\"data_cli.provider_longitude\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.provider_longitude\" formControlName=\"provider_longitude\"\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" disabled> </ion-input>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<!--Coordonnées complémentaires du Poin de Vente-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t\t<!--Typologie de Point de Vente-->\r\n\t\t\t\t\t\t\t\t<h3>Typologie de Point de Vente</h3>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Type Client</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.type_client_id\" [value]=\"data_cli.type_client_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"type_client_id\" (ionCancel)=\"cancel('type_client_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let type_client of i_t_type_client\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"type_client.id\"> {{type_client.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Activité PDV</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName=\"activite_pos_id\" [(ngModel)]=\"data_cli.activite_pos_id\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"activite_pos_Change($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let activite_pos of i_t_activite_pos\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"activite_pos.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{activite_pos.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"canal_result\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"canal_result.id\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Canal</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-input disabled [value]=\"canal_result.name\"></ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<!-- \r\n\t\t\t\t\t\t<ion-item *ngIf = \"canal\">\r\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Canal</ion-label>\r\n\t\t\t\t\t\t\t<ion-input [(ngModel)] = \"canal.name\" [value]=\"canal.id\" formControlName= \"canal_id\" type=\"text\"></ion-input>\r\n\t\t\t\t\t\t</ion-item> \r\n\t\t\t\t\t-->\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Enseigne d'appartenance</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.enseigne_appartenance_id\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.enseigne_appartenance_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"enseigne_appartenance_id\"\r\n\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('enseigne_appartenance_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let enseigne_appartenance of i_t_enseigne_appartenance\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"enseigne_appartenance.id\"> {{enseigne_appartenance.name}}\r\n\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"ui-g\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Classification 1</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.classification1_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.classification1_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"classification1_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('classification1_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let classification1 of i_t_classification1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"classification1.id\"> {{classification1.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Classification 2</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.classification2_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.classification2_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"classification2_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('classification2_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let classification2 of i_t_classification2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"classification2.id\"> {{classification2.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<!--Typologie de Point de Vente-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form_item\">\r\n\t\t\t\t\t\t\t\t<!--Couverture commerciale-->\r\n\t\t\t\t\t\t\t\t<h3>Couverture commerciale</h3>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Couverture commerciale</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.couverture_commerciale_id\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.couverture_commerciale_id\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"couverture_commerciale_id\"\r\n\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('couverture_commerciale_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let couverture_commerciale of i_t_couverture_commerciale\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"couverture_commerciale.id\"> {{couverture_commerciale.name}}\r\n\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fréquence de visite</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.frequence_visite_id\"\r\n\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.frequence_visite_id\" formControlName=\"frequence_visite_id\"\r\n\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('frequence_visite_id')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let frequence_visite of i_t_frequence_visite\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"frequence_visite.id\"> {{frequence_visite.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t<!--Couverture commerciale-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t<!--ZAVATRA MITSIVALANA-->\r\n\t\t\t\t\t\t\t<p-tabView>\r\n\r\n\t\t\t\t\t\t\t\t<p-tabPanel header=\"AGENTS COMMERCIAUX\">\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<tag-input [ngModel]=\"client_detail.cnc_login\" formControlName=\"user_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[onlyFromAutocomplete]=\"true\" placeholder=\"Agents commerciaux\"\r\n\t\t\t\t\t\t\t\t\t\t\tdisable=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tag-input-dropdown [autocompleteItems]=\"res_user\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[showDropdownIfEmpty]=\"true\"></tag-input-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</tag-input>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t\t<p-tabPanel header=\"PERMANENT POSM\">\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Cible installation présentoirs</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.cible_installation_presentoirs_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.cible_installation_presentoirs_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"cible_installation_presentoirs_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('cible_installation_presentoirs_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let cible_installation_presentoirs of i_t_cible_installation_presentoirs\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"cible_installation_presentoirs.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{cible_installation_presentoirs.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<tag-input [ngModel]=\"client_detail.cnc_posm\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"permanent_POSM_id\" [onlyFromAutocomplete]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Permanent POSM\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tag-input-dropdown [autocompleteItems]=\"i_t_permanent_posm\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[showDropdownIfEmpty]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t</tag-input-dropdown>\r\n\t\t\t\t\t\t\t\t\t\t</tag-input>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\r\n\t\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t\t<p-tabPanel header=\"CONTRAT\">\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Contrat</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.contrat_id\" [value]=\"data_cli.contrat_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"contrat_id\" (ionCancel)=\"cancel('contrat_id')\"\r\n\t\t\t\t\t\t\t\t\t\t\t> <!--(ionChange)=\"Contrat_date($event)\"-->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let contrat of i_t_contrat\" [value]=\"contrat.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{contrat.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Date debut contrat</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"client_detail.date_debut_contrat\"\r\n\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"client_detail.date_debut_contrat\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"date_debut_contrat\" display-format=\"YYYY-MM-DD\"\r\n\t\t\t\t\t\t\t\t\t\t\tpicker-format=\"YYYY-MM-DD\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Date debut contrat</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"client_detail.date_fin_contrat\"\r\n\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"client_detail.date_fin_contrat\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"date_fin_contrat\" display-format=\"YYYY-MM-DD\"\r\n\t\t\t\t\t\t\t\t\t\t\tpicker-format=\"YYYY-MM-DD\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t\t<p-tabPanel header=\"ACTIVATION\">\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Coopération ITG</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.cooperation_itg_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.cooperation_itg_id\" formControlName=\"cooperation_itg_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('cooperation_itg_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let cooperation_itg of i_t_cooperation_itg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"cooperation_itg.id\"> {{cooperation_itg.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Cible Activation</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.cible_activation_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.cible_activation_id\" formControlName=\"cible_activation_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('cible_activation_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let cible_activation of i_t_cible_activation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"cible_activation.id\"> {{cible_activation.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Activation autorisée</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.activation_autorisee_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.activation_autorisee_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"activation_autorisee_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('activation_autorisee_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let activation_autorisee of i_t_activation_autorisee\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"activation_autorisee.id\"> {{activation_autorisee.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Préférence animateur</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.preference_animateur_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.preference_animateur_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"preference_animateur_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('preference_animateur_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let preference_animateur of i_t_preference_animateur\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"preference_animateur.id\"> {{preference_animateur.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t\t<p-tabPanel header=\"APPROVISIONNEMENT\">\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fréquence d'approvisionnement</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.frequence_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.frequence_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"frequence_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('frequence_approvisionnement_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let frequence_appro of i_t_frequence_approvisionnement\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"frequence_appro.id\"> {{frequence_appro.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<h6>Source d'approvisionnement</h6>\r\n\t\t\t\t\t\t\t\t\t\t<p-autoComplete [placeholder]=\"client_detail.new_source_approvisionnement\" class = \"atc\" formControlName=\"new_source_approvisionnement_id\" [suggestions]=\"filteredSourceAppro\"\r\n\t\t\t\t\t\t\t\t\t\t  (completeMethod)=\"filterSourceAppro($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n\t\t\t\t\t\t\t\t\t\t</p-autoComplete>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t  <div>\r\n\t\t\t\t\t\t\t\t\t\t<h6>Fournisseur principal</h6>\r\n\t\t\t\t\t\t\t\t\t\t<p-autoComplete [placeholder]=\"client_detail.new_fournisseur_principal\" class = \"atc\" formControlName=\"new_fournisseur_principal_id\" [suggestions]=\"filteredfournisseur_principal\"\r\n\t\t\t\t\t\t\t\t\t\t  (completeMethod)=\"filterfournisseur_principal($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n\t\t\t\t\t\t\t\t\t\t</p-autoComplete>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t  <div>\r\n\t\t\t\t\t\t\t\t\t\t<h6>Fournisseur secondaire</h6>\r\n\t\t\t\t\t\t\t\t\t\t<p-autoComplete [placeholder]=\"client_detail.new_fournisseur_secondaire\" class = \"atc\" formControlName=\"new_fournisseur_secondaire_id\" [suggestions]=\"filteredfournisseur_secondaire\"\r\n\t\t\t\t\t\t\t\t\t\t  (completeMethod)=\"filterfournisseur_secondaire($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n\t\t\t\t\t\t\t\t\t\t</p-autoComplete>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t<!--<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Source d'approvisionnement</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.new_source_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.new_source_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"new_source_approvisionnement_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('source_approvisionnement_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let source_appro of i_t_source_approvisionnement\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"source_appro.id\"> {{source_appro.name}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fournisseur principal</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.new_fournisseur_principal_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.new_fournisseur_principal_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"new_fournisseur_principal_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('fournisseur_principal_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let fornisseur_principale of i_t_fournisseur_principale\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"fornisseur_principale.id\"> {{fornisseur_principale.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Fournisseur secondaire</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"data_cli.new_fournisseur_secondaire_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"data_cli.new_fournisseur_secondaire_id\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"new_fournisseur_secondaire_id\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionCancel)=\"cancel('fournisseur_secondaire_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let fournisseur_secondaire of i_t_fournisseur_secondaire\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"fournisseur_secondaire.id\"> {{fournisseur_secondaire.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item> -->\r\n\r\n\t\t\t\t\t\t\t\t</p-tabPanel>\r\n\r\n\t\t\t\t\t\t\t</p-tabView>\r\n\r\n\t\t\t\t\t\t\t<!--ZAVATRA MITSIVALANA-->\r\n\r\n\r\n\t\t\t\t\t\t\t<!--Commentaire-->\r\n\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Commentaires</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-textarea [(ngModel)]=\"data_cli.commentaire\" [value]=\"data_cli.commentaire\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"commentaire\"></ion-textarea>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t<!--Commentaire-->\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"footer\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\" appendTo=\"body\">\r\n\t\t<ion-img [src]=\"client_detail.photo_uri\"></ion-img>\r\n\t</p-dialog>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n<!--EDIT-->"

/***/ }),

/***/ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/clients/detail-fiche-client/detail-fiche-client.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh2 {\n  padding-left: 10px; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  padding-top: 0;\n  text-align: left; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  height: 48px;\n  padding-bottom: 13px; }\n\n.archive {\n  height: 48px;\n  background-color: #E2E2E0;\n  display: none; }\n\n.div_btn {\n  text-align: -webkit-right; }\n\n.form {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\n.cam {\n  text-align: -webkit-center;\n  border: 1px solid gray;\n  display: block;\n  width: 35%; }\n\n.photo {\n  width: 98%;\n  margin-top: 8px; }\n\n.form_item {\n  margin: 15px; }\n\n.form_inside {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%; }\n\n.gps {\n  margin-top: 2px;\n  margin-left: 0px; }\n\n.form_item p {\n  font-weight: bold;\n  margin-top: 5px; }\n\nbody .ui-widget-content p {\n  font-weight: bold !important;\n  margin-bottom: 10px !important; }\n\n.canal {\n  font-weight: bold;\n  color: #21B799; }\n\n:host ::ng-deep .ui-autocomplete .ui-autocomplete-input {\n  border-radius: 0px !important;\n  border-top: 0px !important;\n  border-left: 0px !important;\n  border-right: 0px !important; }\n\n.box {\n  position: relative; }\n\n/* common */\n\n.ribbon {\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  position: absolute; }\n\n.ribbon::before,\n.ribbon::after {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  display: block;\n  border: 5px solid #2980b9; }\n\n.ribbon span {\n  position: absolute;\n  display: block;\n  width: 225px;\n  padding: 15px 0;\n  /*background-color: transparent;*/\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  color: white;\n  font: 700 18px/1 'Lato', sans-serif;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  text-transform: uppercase;\n  text-align: center;\n  /*border: 1px solid gray;*/ }\n\n.ribbon_green {\n  background-color: #00A04A; }\n\n.ribbon_red {\n  background-color: #DC6965; }\n\n/* top left*/\n\n.ribbon-top-left {\n  top: -10px;\n  left: -10px; }\n\n.ribbon-top-left::before,\n.ribbon-top-left::after {\n  border-top-color: transparent;\n  border-left-color: transparent; }\n\n.ribbon-top-left::before {\n  top: 0;\n  right: 0; }\n\n.ribbon-top-left::after {\n  bottom: 0;\n  left: 0; }\n\n.ribbon-top-left span {\n  right: -25px;\n  top: 30px;\n  transform: rotate(-45deg); }\n\n/* top right*/\n\n.ribbon-top-right {\n  top: -10px;\n  right: -10px; }\n\n.ribbon-top-right::before,\n.ribbon-top-right::after {\n  border-top-color: transparent;\n  border-right-color: transparent; }\n\n.ribbon-top-right::before {\n  top: 0;\n  left: 0; }\n\n.ribbon-top-right::after {\n  bottom: 0;\n  right: 0; }\n\n.ribbon-top-right span {\n  left: -25px;\n  top: 30px;\n  transform: rotate(45deg); }\n\n/* bottom left*/\n\n.ribbon-bottom-left {\n  bottom: -10px;\n  left: -10px; }\n\n.ribbon-bottom-left::before,\n.ribbon-bottom-left::after {\n  border-bottom-color: transparent;\n  border-left-color: transparent; }\n\n.ribbon-bottom-left::before {\n  bottom: 0;\n  right: 0; }\n\n.ribbon-bottom-left::after {\n  top: 0;\n  left: 0; }\n\n.ribbon-bottom-left span {\n  right: -25px;\n  bottom: 30px;\n  transform: rotate(225deg); }\n\n/* bottom right*/\n\n.ribbon-bottom-right {\n  bottom: -10px;\n  right: -10px; }\n\n.ribbon-bottom-right::before,\n.ribbon-bottom-right::after {\n  border-bottom-color: transparent;\n  border-right-color: transparent; }\n\n.ribbon-bottom-right::before {\n  bottom: 0;\n  left: 0; }\n\n.ribbon-bottom-right::after {\n  top: 0;\n  right: 0; }\n\n.ribbon-bottom-right span {\n  left: -25px;\n  bottom: 30px;\n  transform: rotate(-225deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9jbGllbnRzL2RldGFpbC1maWNoZS1jbGllbnQvZGV0YWlsLWZpY2hlLWNsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxlQUFlO0VBRWYsWUFBWTtFQUNaLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFDSixFQUFBOztBQUNBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDRCQUE0QjtFQUM1Qiw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkJBQTRCO0VBQzVCLDRCQUE2QixFQUFBOztBQUdqQztFQUNJLGtCQUFrQixFQUFBOztBQUdwQixXQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUNBQUE7RUFDQSx5Q0FBcUM7RUFDckMsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyx5Q0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQkFBQSxFQUEyQjs7QUFHN0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFLM0IsWUFBQTs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWI7O0VBRUUsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLE1BQU07RUFDTixRQUFRLEVBQUE7O0FBRVY7RUFDRSxTQUFTO0VBQ1QsT0FBTyxFQUFBOztBQUVUO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCx5QkFBeUIsRUFBQTs7QUFHM0IsYUFBQTs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7O0VBRUUsNkJBQTZCO0VBQzdCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBRVQ7RUFDRSxTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUVWO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCx3QkFBd0IsRUFBQTs7QUFHMUIsZUFBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWI7O0VBRUUsZ0NBQWdDO0VBQ2hDLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBRVY7RUFDRSxNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUVUO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0IsZ0JBQUE7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUVkOztFQUVFLGdDQUFnQztFQUNoQywrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxTQUFTO0VBQ1QsT0FBTyxFQUFBOztBQUVUO0VBQ0UsTUFBTTtFQUNOLFFBQVEsRUFBQTs7QUFFVjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2RldGFpbC1maWNoZS1jbGllbnQvZGV0YWlsLWZpY2hlLWNsaWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuaDIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnRuX253X2Nye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG4uYnR7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDJweFxyXG59XHJcbi50aXRsZV9ib2R5e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxufVxyXG4uYXJjaGl2ZXtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTA7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuLmRpdl9idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1yaWdodDtcclxufVxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYW0ge1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbi5waG90byB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5mb3JtX2l0ZW0ge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi5mb3JtX2luc2lkZSB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4uZ3BzIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmZvcm1faXRlbSBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmJvZHkgLnVpLXdpZGdldC1jb250ZW50IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FuYWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIxQjc5OTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS1hdXRvY29tcGxldGUgLnVpLWF1dG9jb21wbGV0ZS1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQgOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodCA6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAvKiBjb21tb24gKi9cclxuICAucmliYm9uIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAucmliYm9uOjpiZWZvcmUsXHJcbiAgLnJpYmJvbjo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzI5ODBiOTtcclxuICB9XHJcblxyXG4gIC5yaWJib24gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250OiA3MDAgMThweC8xICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCBncmF5OyovXHJcbiAgfVxyXG5cclxuICAucmliYm9uX2dyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTA0QTtcclxuICB9XHJcblxyXG4gIC5yaWJib25fcmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDNjk2NTtcclxuICB9XHJcblxyXG4gIC8vI0RDNjk2NVxyXG4gIFxyXG4gIC8qIHRvcCBsZWZ0Ki9cclxuICAucmliYm9uLXRvcC1sZWZ0IHtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICB9XHJcbiAgLnJpYmJvbi10b3AtbGVmdDo6YmVmb3JlLFxyXG4gIC5yaWJib24tdG9wLWxlZnQ6OmFmdGVyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAucmliYm9uLXRvcC1sZWZ0OjpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tdG9wLWxlZnQ6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tdG9wLWxlZnQgc3BhbiB7XHJcbiAgICByaWdodDogLTI1cHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICAvKiB0b3AgcmlnaHQqL1xyXG4gIC5yaWJib24tdG9wLXJpZ2h0IHtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgfVxyXG4gIC5yaWJib24tdG9wLXJpZ2h0OjpiZWZvcmUsXHJcbiAgLnJpYmJvbi10b3AtcmlnaHQ6OmFmdGVyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnJpYmJvbi10b3AtcmlnaHQ6OmJlZm9yZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAucmliYm9uLXRvcC1yaWdodDo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tdG9wLXJpZ2h0IHNwYW4ge1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGJvdHRvbSBsZWZ0Ki9cclxuICAucmliYm9uLWJvdHRvbS1sZWZ0IHtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICB9XHJcbiAgLnJpYmJvbi1ib3R0b20tbGVmdDo6YmVmb3JlLFxyXG4gIC5yaWJib24tYm90dG9tLWxlZnQ6OmFmdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAucmliYm9uLWJvdHRvbS1sZWZ0OjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tYm90dG9tLWxlZnQ6OmFmdGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tYm90dG9tLWxlZnQgc3BhbiB7XHJcbiAgICByaWdodDogLTI1cHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIH1cclxuICBcclxuICAvKiBib3R0b20gcmlnaHQqL1xyXG4gIC5yaWJib24tYm90dG9tLXJpZ2h0IHtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgfVxyXG4gIC5yaWJib24tYm90dG9tLXJpZ2h0OjpiZWZvcmUsXHJcbiAgLnJpYmJvbi1ib3R0b20tcmlnaHQ6OmFmdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnJpYmJvbi1ib3R0b20tcmlnaHQ6OmJlZm9yZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAucmliYm9uLWJvdHRvbS1yaWdodDo6YWZ0ZXIge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5yaWJib24tYm90dG9tLXJpZ2h0IHNwYW4ge1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcclxuICB9XHJcblxyXG4gIC5kZWxfbW9ke1xyXG4gICAgICAvL3dpZHRoOiAzNSU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/clients/detail-fiche-client/detail-fiche-client.page.ts ***!
  \*************************************************************************/
/*! exports provided: DetailFicheClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFicheClientPage", function() { return DetailFicheClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_model_data_data_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/data/data.model */ "./src/app/model/data/data.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_full_screen_image_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/full-screen-image/ngx */ "./node_modules/@ionic-native/full-screen-image/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");















var DetailFicheClientPage = /** @class */ (function () {
    //test: string = "";
    function DetailFicheClientPage(androidPermissions, b64tg, b64, fullScreenImage, camera, messageService, toast, load, alertController, data_router, geolocation, storage, dbm, form_builder, router, activatedRoute) {
        var _this = this;
        this.androidPermissions = androidPermissions;
        this.b64tg = b64tg;
        this.b64 = b64;
        this.fullScreenImage = fullScreenImage;
        this.camera = camera;
        this.messageService = messageService;
        this.toast = toast;
        this.load = load;
        this.alertController = alertController;
        this.data_router = data_router;
        this.geolocation = geolocation;
        this.storage = storage;
        this.dbm = dbm;
        this.form_builder = form_builder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.edit = false;
        this.client_detail = {};
        this.i_t_activation_autorisee = [];
        this.i_t_cible_activation = [];
        this.i_t_cible_installation_presentoirs = [];
        this.i_t_activite_pos = [];
        this.i_t_agence = [];
        this.i_t_classification1 = [];
        this.i_t_classification2 = [];
        this.i_t_contrat = [];
        this.i_t_cooperation_itg = [];
        this.i_t_couverture_commerciale = [];
        this.i_t_emplacement = [];
        this.i_t_enseigne_appartenance = [];
        this.i_t_frequence_approvisionnement = [];
        this.i_t_frequence_visite = [];
        this.i_t_permanent_posm = [];
        this.i_t_preference_animateur = [];
        this.i_t_proximite = [];
        this.i_t_secteur = [];
        this.i_t_type_client = [];
        this.i_t_type_quartier = [];
        this.i_t_ville = [];
        this.i_t_zone = [];
        this.i_t_fournisseur_secondaire = [];
        this.i_t_fournisseur_principale = [];
        this.i_t_region = [];
        this.data_cli = {};
        this.i_t_agence_filtered = [];
        this.i_t_zone_filtered = [];
        this.i_t_secteur_filtered = [];
        this.i_t_canal = [];
        this.i_t_canal_filtered = [];
        this.filePath = "";
        this.window = window;
        this.display = false;
        this.loadIndicator = false;
        this.hasWriteAccess = false;
        this.enable = true;
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                console.log("manomboka");
                _this.loadIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                console.log("mifarana");
                _this.loadIndicator = false;
            }
        });
        //this.test = "test";
    }
    DetailFicheClientPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.color_icon = data["color"];
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data['unsynced'] },
            ];
        });
    };
    DetailFicheClientPage.prototype.checkPermissions = function () {
        var _this = this;
        this.androidPermissions
            .checkPermission(this.androidPermissions
            .PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then(function (result) {
            console.log('Has permission?', result.hasPermission);
            _this.hasWriteAccess = result.hasPermission;
        }, function (err) {
            _this.androidPermissions
                .requestPermission(_this.androidPermissions
                .PERMISSION.WRITE_EXTERNAL_STORAGE);
        });
        if (!this.hasWriteAccess) {
            this.androidPermissions
                .requestPermissions([this.androidPermissions
                    .PERMISSION.WRITE_EXTERNAL_STORAGE]);
        }
    };
    DetailFicheClientPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.color_icon = data.color;
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data.non_synced },
            ];
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
        });
        // this.test = "test";
        this.checkPermissions();
        this.items = [
            { label: 'PROSPECT', value: { name: 'PROSPECT' } },
            { label: 'VALIDÉE PAR SUPERVISEUR', value: { name: 'VALIDÉE PAR SUPERVISEUR' } },
            { label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } },
        ];
        this.activatedRoute.queryParams.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("state =>", params['state']);
                this.partner_id = params['id'];
                this.state = params['state'];
                this.init_be(this.partner_id);
                return [2 /*return*/];
            });
        }); });
    };
    DetailFicheClientPage.prototype.init_be = function (partner_id) {
        var _this = this;
        this.dbm.get_if_exist_gps(partner_id).then(function (data) {
            if (data.enable == 0) {
                _this.enable = false;
            }
            else {
                _this.enable = true;
            }
        });
        this.dbm.get_res_partner_data(partner_id).then(function (data) {
            var md = { value: Number, display: String };
            var md2 = { value: Number, display: String };
            var md_data2 = new Array();
            var md_data = new Array();
            if (data.cnc_posm) {
                if (data.cnc_posm.includes('|') == true) {
                    var cnc_posm = data.cnc_posm.split('|');
                    var cnc_posm_id = data.cnc_posm_id.split('|');
                    for (var i = 0; i < cnc_posm_id.length; i++) {
                        try {
                            md = { value: cnc_posm_id[i], display: cnc_posm[i] };
                            console.log(md);
                            md_data.push(md);
                        }
                        catch (e) {
                            console.log("data.cnc_posm ==> ", e);
                        }
                    }
                    data.cnc_posm = md_data;
                }
                else {
                    try {
                        md = { value: data.cnc_posm_id, display: data.cnc_posm };
                        md_data.push(md);
                    }
                    catch (e) {
                        console.log("else n°1 data.cnc_posm ==> ", e);
                    }
                }
            }
            else {
                try {
                    md = { value: null, display: null };
                    md_data.push(md);
                }
                catch (e) {
                    console.log("else n°2 data.cnc_posm ==> ", e);
                }
            }
            if (data.cnc_login) {
                if (data.cnc_login.includes('|') == true) {
                    var cnc_login = data.cnc_login.split('|');
                    var cnc_usr_id = data.cnc_usr_id.split('|');
                    for (var i = 0; i < cnc_usr_id.length; i++) {
                        try {
                            md2 = { value: cnc_usr_id[i], display: cnc_login[i] };
                            md_data2.push(md2);
                        }
                        catch (e) {
                            console.log("data.cnc_login ==> ", e);
                        }
                    }
                }
                else {
                    try {
                        md2 = { value: data.cnc_usr_id, display: data.cnc_login };
                        md_data2.push(md2);
                    }
                    catch (e) {
                        console.log("else n°1 data.cnc_login ==> ", e);
                    }
                }
                data.cnc_login = md_data2;
                console.log("login" + data.cnc_login);
            }
            else {
                try {
                    md2 = { value: null, display: null };
                    md_data2.push(md2);
                }
                catch (e) {
                    console.log("else n°2 data.cnc_login ==> ", e);
                }
            }
            data.cnc_login = md_data2;
            data.cnc_posm = md_data;
            console.log("245", data);
            _this.client_detail = data;
            console.log("248", _this.client_detail);
            _this.condition = (_this.client_detail.state_id != null || _this.client_detail.state_id != false || _this.client_detail.state_id != "") ? true : false;
            if (_this.client_detail.state_id == "brouillon") {
                _this.client_detail.state_id = "PROSPECT";
                _this.etat = "Inactif";
            }
            if (_this.client_detail.state_id == "superviseur") {
                _this.client_detail.state_id = "VALIDÉE PAR SUPERVISEUR";
                _this.etat = "Inactif";
            }
            if (_this.client_detail.state_id == "administrateur") {
                _this.client_detail.state_id = "VALIDÉE PAR ADMINISTRATEUR";
                _this.etat = "Actif";
            }
        });
        this.charge_data();
        this.dbm.select_basic_data_with_id("res_partner", partner_id).then(function (data_res_partner) {
            _this.data_cli = data_res_partner;
        });
        this.dbm.get_active_user().then(function (data) {
            _this.res_user_active = data;
        });
        /*this.dbm.get_name_id_data("itg_partner_wholesaler").then(data => {
         
        }); */
        this.fiche_client = this.form_builder.group({
            region_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            agence_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            //zone_id: [''],
            secteur_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nom_pos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nom_gerant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            repere: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quartier: [''],
            ville_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numero_telephone1: [''],
            numero_telephone2: [''],
            numero_telephone3: [''],
            emplacement_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            proximite_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type_quartier_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            provider_latitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            provider_longitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type_client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            activite_pos_id: [this.data_cli.active_pos_id],
            enseigne_appartenance_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classification1_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classification2_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            couverture_commerciale_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            frequence_visite_id: [''],
            user_id: [''],
            canal_id: [''],
            photo_uri: [''],
            photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cible_installation_presentoirs_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            permanent_POSM_id: [''],
            contrat_id: [''],
            date_debut_contrat: [''],
            date_fin_contrat: [''],
            cooperation_itg_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cible_activation_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            activation_autorisee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            preference_animateur_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            frequence_approvisionnement_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            new_source_approvisionnement_id: [''],
            new_fournisseur_principal_id: [''],
            new_fournisseur_secondaire_id: [''],
            visite: [''],
            commentaire: [''],
        });
        console.log(this.fiche_client.controls['date_debut_contrat'].patchValue(this.client_detail.date_debut_contrat));
        this.fiche_client.controls['date_fin_contrat'].patchValue(this.client_detail.date_fin_contrat);
        this.fiche_client.controls['agence_id'].disable();
        this.fiche_client.controls['region_id'].disable();
        this.fiche_client.controls['secteur_id'].disable();
        this.fiche_client.controls['nom_pos'].disable();
        this.fiche_client.controls['adresse'].disable();
        //this.fiche_client.controls['repere'].disable();
        this.fiche_client.controls['quartier'].disable();
        this.fiche_client.controls['ville_id'].disable();
        this.fiche_client.controls['type_quartier_id'].disable();
        this.fiche_client.controls['type_client_id'].disable();
        this.fiche_client.controls['enseigne_appartenance_id'].disable();
        this.fiche_client.controls['classification1_id'].disable();
        this.fiche_client.controls['classification2_id'].disable();
        this.fiche_client.controls['couverture_commerciale_id'].disable();
        this.fiche_client.controls['cible_installation_presentoirs_id'].disable();
        this.fiche_client.controls['contrat_id'].disable();
        this.fiche_client.controls['date_debut_contrat'].disable();
        this.fiche_client.controls['date_fin_contrat'].disable();
        this.fiche_client.controls['cible_activation_id'].disable();
        // this.fiche_client.controls['new_source_approvisionnement_id'].setValue("test_1")
    };
    DetailFicheClientPage.prototype.charge_data = function () {
        var _this = this;
        this.dbm.select_basic_data_2("i_t_type_client").then(function (data) {
            _this.i_t_type_client = data;
        });
        this.dbm.select_basic_data_2("i_t_region")
            .then(function (regions) {
            _this.i_t_region = regions;
        });
        this.dbm.select_basic_data_2("i_t_agence")
            .then(function (regions) {
            _this.i_t_agence = regions;
        });
        this.dbm.select_basic_data_2("i_t_secteur")
            .then(function (regions) {
            _this.i_t_secteur = regions;
        });
        this.dbm.select_basic_data_2("i_t_cible_activation")
            .then(function (regions) {
            _this.i_t_cible_activation = regions;
        });
        this.dbm.get_mes_villes()
            .then(function (villes) {
            _this.i_t_ville = villes;
        });
        this.dbm.select_basic_data_2("i_t_emplacement").then(function (data) {
            _this.i_t_emplacement = data;
        });
        this.dbm.select_basic_data_2("i_t_proximite").then(function (data) {
            _this.i_t_proximite = data;
        });
        this.dbm.select_basic_data_2("i_t_type_quartier").then(function (data) {
            _this.i_t_type_quartier = data;
        });
        this.dbm.select_i_t_type_client().then(function (data) {
            _this.i_t_source_approvisionnement = data;
        });
        this.dbm.select_basic_data("i_t_activite_pos").then(function (data) {
            _this.i_t_activite_pos = data;
        });
        this.dbm.select_basic_data_2("i_t_enseigne_appartenance").then(function (data) {
            _this.i_t_enseigne_appartenance = data;
        });
        this.dbm.select_basic_data_2("i_t_classification1").then(function (data) {
            _this.i_t_classification1 = data;
        });
        this.dbm.select_basic_data_2("i_t_classification2").then(function (data) {
            _this.i_t_classification2 = data;
        });
        this.dbm.select_basic_data_2("i_t_couverture_commerciale").then(function (data) {
            _this.i_t_couverture_commerciale = data;
        });
        this.dbm.select_basic_data_2("i_t_frequence_visite").then(function (data) {
            _this.i_t_frequence_visite = data;
        });
        this.dbm.select_basic_data_2("i_t_canal").then(function (data) {
            _this.i_t_canal = data;
        });
        this.dbm.select_basic_data_2("i_t_cible_installation_presentoirs").then(function (data) {
            _this.i_t_cible_installation_presentoirs = data;
        });
        this.dbm.select_data_with_table_name("i_t_permanent_posm").then(function (data) {
            _this.i_t_permanent_posm = data;
        });
        this.dbm.select_basic_data_2("i_t_cooperation_itg").then(function (data) {
            _this.i_t_cooperation_itg = data;
        });
        this.dbm.select_basic_data_2("i_t_activation_autorisee").then(function (data) {
            _this.i_t_activation_autorisee = data;
        });
        this.dbm.select_basic_data_2("i_t_preference_animateur").then(function (data) {
            _this.i_t_preference_animateur = data;
        });
        this.dbm.select_basic_data_2("i_t_frequence_approvisionnement").then(function (data) {
            _this.i_t_frequence_approvisionnement = data;
        });
        this.dbm.get_name_id_fournisseur(null).then(function (data) {
            _this.i_t_fournisseur_principale = data;
            _this.i_t_fournisseur_secondaire = data;
            //this.i_t_source_approvisionnement = data;
        });
    };
    DetailFicheClientPage.prototype.edit_fiche_client = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load.create({
                            message: 'Chargement...',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.regionChange(this.data_cli.region_id);
                        this.agenceChange(this.data_cli.agence_id);
                        //this.zoneChange(this.data_cli.zone_id) ;
                        console.log("453 => ", this.data_cli.activite_pos_id);
                        if (this.data_cli.activite_pos_id) {
                            this.activite_pos_Change(this.data_cli.activite_pos_id);
                        }
                        this.edit = true;
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.create_fiche_client = function () {
        this.router.navigate(['new-client'], this.navigationExtras);
    };
    DetailFicheClientPage.prototype.go_sync = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
            _this.router.navigate(["synchro"], _this.navigationExtras);
        });
    };
    DetailFicheClientPage.prototype.save_edit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.fiche_client.invalid) {
                var invalid = '';
                for (var name_1 in _this.fiche_client.controls) {
                    if (_this.fiche_client.controls[name_1].invalid) {
                        if (name_1 == "provider_latitude" || name_1 == "provider_longitude" || name_1 == "photo") {
                            if (name_1 == "provider_latitude") {
                                invalid = '\n' + invalid + "Coordonnées GPS latitude" + '\n';
                            }
                            if (name_1 == "provider_longitude") {
                                invalid = '\n' + invalid + " - Coordonnées GPS longitude" + '\n';
                            }
                            if (name_1 == "photo") {
                                invalid = '\n' + invalid + " - Photo" + '\n';
                            }
                        }
                        else {
                            var named = name_1.charAt(0).toUpperCase() + name_1.slice(1);
                            named = named.replace(/_|(id)/gi, function (a) { return ' '; });
                            invalid = '\n' + invalid + ' - ' + named + '\n';
                        }
                    }
                }
                _this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
            }
            else {
                /*if (this.filePath != "") {
                  this.fiche_client.controls['photo_uri'].setValue(this.filePath);
                  this.fiche_client.controls['photo'].setValue(this.photo);
                }
                if (this.filePath == "" && this.client_detail.photo_uri != "") {
                  this.fiche_client.controls['photo_uri'].setValue(this.client_detail.photo_uri);
                  this.fiche_client.controls['photo'].setValue(this.client_detail.photo);
                }
                if (this.filePath == "" && this.client_detail.photo_uri == "") {
                  this.fiche_client.controls['photo_uri'].setValue("");
                  this.fiche_client.controls['photo'].setValue("");
                }
                if (this.resp != undefined || this.resp != null) {
                  this.fiche_client.controls['provider_latitude'].setValue(this.resp.latitude);
                  this.fiche_client.controls['provider_longitude'].setValue(this.resp.longitude);
                }*/
                console.log("526 => ", _this.data_cli.new_source_approvisionnement_id, " ", _this.fiche_client.get('new_source_approvisionnement_id').value.id);
                if (_this.data_cli.new_source_approvisionnement_id != _this.fiche_client.get('new_source_approvisionnement_id').value.id) {
                    if (_this.fiche_client.get('new_source_approvisionnement_id').value.id) {
                        _this.fiche_client.controls['new_source_approvisionnement_id'].setValue(_this.fiche_client.get('new_source_approvisionnement_id').value.id);
                    }
                    else {
                        _this.fiche_client.controls['new_source_approvisionnement_id'].setValue(_this.data_cli.new_source_approvisionnement_id);
                    }
                }
                console.log("536 => ", _this.data_cli.new_fournisseur_principal_id, " ", _this.fiche_client.get('new_fournisseur_principal_id').value.id);
                if (_this.data_cli.new_fournisseur_principal_id != _this.fiche_client.get('new_fournisseur_principal_id').value.id) {
                    if (_this.fiche_client.get('new_fournisseur_principal_id').value.id) {
                        _this.fiche_client.controls['new_fournisseur_principal_id'].setValue(_this.fiche_client.get('new_fournisseur_principal_id').value.id);
                    }
                    else {
                        _this.fiche_client.controls['new_fournisseur_principal_id'].setValue(_this.data_cli.new_fournisseur_principal_id);
                    }
                }
                console.log("546 => ", _this.data_cli.new_fournisseur_secondaire_id, " ", _this.fiche_client.get('new_fournisseur_secondaire_id').value.id);
                if (_this.data_cli.new_fournisseur_secondaire_id != _this.fiche_client.get('new_fournisseur_secondaire_id').value.id) {
                    if (_this.fiche_client.get('new_fournisseur_secondaire_id').value.id) {
                        _this.fiche_client.controls['new_fournisseur_secondaire_id'].setValue(_this.fiche_client.get('new_fournisseur_secondaire_id').value.id);
                    }
                    else {
                        _this.fiche_client.controls['new_fournisseur_secondaire_id'].setValue(_this.data_cli.new_fournisseur_secondaire_id);
                    }
                }
                //this.fiche_client.controls['canal_id'].setValue(this.data_cli.canal_id);
                console.log("501 => ", _this.fiche_client.value);
                //this.fiche_client.controls['canal_id'].setValue(this.canal.id)
                var q1 = "update res_partner set cooperation_itg_id = " + _this.fiche_client.get('cooperation_itg_id').value + ", canal_id = " + _this.fiche_client.get('canal_id').value + " , ";
                var q2 = "";
                var q3 = "";
                var keys = Object.keys(_this.fiche_client.value);
                var values = Object.values(_this.fiche_client.value);
                for (var i = 0; i < keys.length - 1; i++) {
                    if (values[i] == "" || values[i] == null || values[i] == undefined) {
                        values[i] = "NULL";
                    }
                    if (keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat" || keys[i].trim() == "user_id" || keys[i].trim() == "permanent_POSM_id") {
                        i++;
                    }
                    else {
                        q2 += keys[i] + " = ";
                        if (typeof (values[i]) == "string") {
                            q2 += "\"" + _this.remove_special_charachter(values[i]) + "\" ,";
                        }
                        else {
                            q2 += "'" + values[i] + "' ,";
                        }
                    }
                }
                var query = q1 + q2 + keys[keys.length - 1] + " = \" " + _this.remove_special_charachter(values[values.length - 1]) + " \" where id = " + _this.partner_id;
                var query2_1 = "update i_t_contrat set date_debut_contrat = '" + _this.fiche_client.get('date_debut_contrat').value + "' , date_fin_contrat = '" + _this.fiche_client.get('date_debut_contrat').value + "' where id = " + _this.data_cli.contrat_id;
                var query5 = "delete from res_partner_res_users_rel where partner_id = " + _this.partner_id;
                var query6 = "delete from i_t_permanent_posm_res_partner_rel where partner_id = " + _this.partner_id;
                _this.dbm.insert_res_data(query5).then(function () {
                    console.log("delete success i_t_permanent_posm_res_partner_rel");
                }).catch(function (e) {
                    console.log("error delete i_t_permanent_posm_res_partner_rel" + e);
                });
                _this.dbm.insert_res_data(query6).then(function () {
                    console.log("delete success i_t_permanent_posm_res_partner_rel");
                }).catch(function (e) {
                    console.log("error delete i_t_permanent_posm_res_partner_rel" + e);
                });
                var size = 0;
                if (_this.fiche_client.get('user_id').value) {
                    size = _this.fiche_client.get('user_id').value.length;
                    for (var i = 0; i < size; i++) {
                        // insert into res_users_res_partner_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('date_debut_contrat').value[i] +"' )
                        var query3 = "insert into res_partner_res_users_rel (partner_id, res_users_id) values ( " + _this.partner_id + " , '" + _this.fiche_client.get('user_id').value[i].value + "' )";
                        _this.dbm.insert_res_data(query3).then(function () {
                            console.log("success res_users_res_partner_rel");
                        }).catch(function (e) {
                            console.log("error res_users_res_partner_rel" + e);
                        });
                    }
                }
                if (_this.fiche_client.get('permanent_POSM_id').value) {
                    size = _this.fiche_client.get('permanent_POSM_id').value.length;
                    for (var i = 0; i < size; i++) {
                        if (_this.fiche_client.get('permanent_POSM_id').value[i].value != null) {
                            var query4 = "insert into i_t_permanent_posm_res_partner_rel (partner_id, permanent_posm_id) values ( " + _this.partner_id + " , '" + _this.fiche_client.get('permanent_POSM_id').value[i].value + "' )";
                            _this.dbm.insert_res_data(query4).then(function () {
                            }).catch(function (e) {
                                console.log("error res_users_res_partner_rel" + e);
                            });
                        }
                    }
                }
                _this.dbm.update_res_data(query).then(function () {
                    _this.dbm.update_res_data(query2_1).then(function () {
                        _this.dbm.insert_data_for_sync("res.partner", _this.partner_id, 0).then(function () {
                            _this.make_toast("Mise à jour avec succès...");
                            _this.edit = false;
                            _this.init_be(_this.partner_id);
                        }).catch(function (e) {
                            alert('Erreur 1 : ' + e.message);
                            _this.messageService.add({ severity: 'error', summary: 'Erreur 1 : ', detail: e.message, key: 'invalid' });
                        });
                    }).catch(function (e) {
                        alert('Erreur 2 : ' + e.message);
                        _this.messageService.add({ severity: 'error', summary: 'Erreur 2 : ', detail: e.message, key: 'invalid' });
                    });
                }).catch(function (e) {
                    alert('Erreur 3 : ' + e.message);
                    _this.messageService.add({ severity: 'error', summary: 'Erreur 3 : ', detail: e.message, key: 'invalid' });
                });
            }
        });
    };
    DetailFicheClientPage.prototype.open_fiche_client = function () {
        this.router.navigate(['fiches-client'], this.navigationExtras);
    };
    DetailFicheClientPage.prototype.getMyLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            enableHighAccuracy: true,
                            timeout: 60000,
                            maximumAge: 0
                        };
                        return [4 /*yield*/, this.load.create({
                                duration: 6000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options).then(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert_1;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.resp = resp.coords;
                                            if (!(resp.coords.longitude && resp.coords.longitude)) return [3 /*break*/, 1];
                                            this.fiche_client.controls['provider_longitude'].setValue(resp.coords.longitude);
                                            this.fiche_client.controls['provider_latitude'].setValue(resp.coords.latitude);
                                            return [3 /*break*/, 4];
                                        case 1: return [4 /*yield*/, this.alertController.create({
                                                message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
                                                buttons: ['OK']
                                            })];
                                        case 2:
                                            alert_1 = _a.sent();
                                            return [4 /*yield*/, alert_1.present()];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            loading.dismiss();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertController.create({
                                                message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
                                                buttons: ['OK']
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.abort_edit_client = function () {
        this.edit = false;
    };
    DetailFicheClientPage.prototype.ConvertStatut = function (status) {
        var _this = this;
        console.log(status);
        if (status == "") {
            this.activatedRoute.queryParams.subscribe(function (params) {
                _this.dbm.update_status_res_partner(_this.partner_id, null).then(function () {
                    _this.etat = "";
                });
            });
        }
        if (status == "Actif") {
            this.activatedRoute.queryParams.subscribe(function (params) {
                _this.dbm.update_status_res_partner(_this.partner_id, 1).then(function () {
                    _this.etat = "Inactif";
                    if (status == "Actif") {
                        _this.make_toast("Client inactivé...");
                    }
                    else {
                        _this.make_toast("Client activé...");
                    }
                });
            });
        }
        else
            this.activatedRoute.queryParams.subscribe(function (params) {
                _this.dbm.update_status_res_partner(_this.partner_id, 0).then(function () {
                    _this.etat = "Actif";
                    if (status == "Inactif") {
                        _this.make_toast("Client activé...");
                    }
                    else {
                        _this.make_toast("Client inactivé...");
                    }
                });
            });
    };
    DetailFicheClientPage.prototype.make_toast = function (message) {
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
    DetailFicheClientPage.prototype.cancel = function (champ) {
        this.fiche_client.controls[champ].setValue(null);
        //console.log(this.fiche_client.get('champ').value) ;
    };
    DetailFicheClientPage.prototype.regionChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.i_t_agence.filter(function (agence_filtered) {
                                return agence_filtered.region_id == event;
                            })];
                    case 1:
                        _a.i_t_agence_filtered = _b.sent();
                        console.log('regionChange : ' + JSON.stringify(this.i_t_agence_filtered));
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.agenceChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /*this.i_t_zone_filtered = this.i_t_zone.filter(function(zone_filtered) {
              return zone_filtered.agence_id == event;
            });*/
                this.dbm.get_secteur_fitered(event).then(function (data) {
                    _this.i_t_secteur_filtered = data;
                });
                return [2 /*return*/];
            });
        });
    };
    DetailFicheClientPage.prototype.zoneChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.i_t_secteur.filter(function (secteur_filtered) {
                                return secteur_filtered.agence_id == event;
                            })];
                    case 1:
                        _a.i_t_secteur_filtered = _b.sent();
                        console.log('zoneChange : ' + JSON.stringify(this.i_t_secteur_filtered));
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.activite_pos_Change = function (event) {
        console.log(event);
        if (event) {
            var activite_1 = this.i_t_activite_pos.find(function (pos) {
                return pos.id == event;
            });
            if (activite_1.canal_id != null) {
                this.canal_result = this.i_t_canal.find(function (can) {
                    return activite_1.canal_id == can.id;
                });
                this.fiche_client.controls['canal_id'].setValue(this.canal_result.id);
            }
            else {
                this.canal_result = {
                    id: null,
                    name: null
                };
                this.fiche_client.controls['canal_id'].setValue(null);
            }
        }
    };
    DetailFicheClientPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, imagePath;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetHeight: 1024,
                            targetWidth: 1024,
                            cameraDirection: 1,
                            correctOrientation: true,
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        imagePath = _a.sent();
                        this.fiche_client.controls['photo_uri'].setValue(this.window.Ionic.WebView.convertFileSrc(imagePath));
                        if (this.window.Ionic.WebView.convertFileSrc(imagePath).includes("http://localhost/_app_file_/") == true) {
                            this.b64.encodeFile(this.window.Ionic.WebView.convertFileSrc(imagePath).replace("http://localhost/_app_file_/", "file:///")).then(function (result) {
                                console.log(imagePath);
                                console.log("result" + result);
                                result = result.split(',')[1];
                                _this.photo = result;
                                _this.fiche_client.controls['photo'].setValue(result);
                            });
                        }
                        console.log(this.fiche_client.get('photo').value); //this.win.Ionic.WebView.convertFileSrc(imageSrc);
                        return [2 /*return*/, this.window.Ionic.WebView.convertFileSrc(imagePath)];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.showImageFromCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.takePicture()];
                    case 1:
                        _a.filePath = _b.sent();
                        this.client_detail.photo_uri = this.filePath;
                        this.fiche_client.controls['photo_uri'].setValue(this.filePath);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.removeImage = function () {
        this.client_detail.photo_uri = "";
        this.fiche_client.controls['photo_uri'].setValue("");
    };
    DetailFicheClientPage.prototype.itemsActionsChange = function (event) {
        if (event.value.name == "PROSPECT") {
            this.itemsActions = [{ label: 'VALIDÉE PAR SUPERVISEUR', value: { name: 'VALIDÉE PAR SUPERVISEUR' } }];
            this.etat = "Inactif";
        }
        if (event.value.name == "VALIDÉE PAR SUPERVISEUR") {
            this.itemsActions = [{ label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } }];
            this.etat = "Inactif";
        }
        if (event.value.name == "VALIDÉE PAR ADMINISTRATEUR") {
            this.itemsActions = [{ label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } }];
            this.etat = "Actif";
        }
    };
    DetailFicheClientPage.prototype.open_full_screen = function () {
        this.display = true;
    };
    DetailFicheClientPage.prototype.Deconnexion = function () {
        var _this = this;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    DetailFicheClientPage.prototype.Contrat_date = function (event) {
        var _this = this;
        this.dbm.get_res_partner_contrat(event.detail.value).then(function (data) {
            _this.date_contrat = data;
            _this.client_detail.date_debut_contrat = _this.date_contrat["datedebut"];
            _this.client_detail.date_fin_contrat = _this.date_contrat['datefin'];
        });
    };
    DetailFicheClientPage.prototype.open_menu = function () {
        this.router.navigate(['menu'], this.navigationExtras);
    };
    DetailFicheClientPage.prototype.filterSourceAppro = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredSourceAppro = data;
        });
    };
    DetailFicheClientPage.prototype.filterfournisseur_principal = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredfournisseur_principal = data;
        });
    };
    DetailFicheClientPage.prototype.filterfournisseur_secondaire = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredfournisseur_secondaire = data;
        });
    };
    DetailFicheClientPage.prototype.remove_special_charachter = function (soratra) {
        if (soratra == null) {
            return "";
        }
        else {
            return soratra.replace(/['"<>]/g, ' ');
        }
    };
    DetailFicheClientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-fiche-client',
            template: __webpack_require__(/*! ./detail-fiche-client.page.html */ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.html"),
            styles: [__webpack_require__(/*! ./detail-fiche-client.page.scss */ "./src/app/clients/detail-fiche-client/detail-fiche-client.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"], _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_13__["Base64ToGallery"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"], _ionic_native_full_screen_image_ngx__WEBPACK_IMPORTED_MODULE_11__["FullScreenImage"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], src_app_model_data_data_model__WEBPACK_IMPORTED_MODULE_7__["Data"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailFicheClientPage);
    return DetailFicheClientPage;
}());



/***/ })

}]);
//# sourceMappingURL=clients-detail-fiche-client-detail-fiche-client-module.js.map