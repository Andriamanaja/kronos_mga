(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tournees-detail-tournee-detail-tournee-module"],{

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

/***/ "./src/app/tournees/detail-tournee/detail-tournee.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/tournees/detail-tournee/detail-tournee.module.ts ***!
  \******************************************************************/
/*! exports provided: DetailTourneePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTourneePageModule", function() { return DetailTourneePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_tournee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-tournee.page */ "./src/app/tournees/detail-tournee/detail-tournee.page.ts");
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
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var src_app_head_head_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/head/head.module */ "./src/app/head/head.module.ts");




























var routes = [
    {
        path: '',
        component: _detail_tournee_page__WEBPACK_IMPORTED_MODULE_6__["DetailTourneePage"]
    }
];
var DetailTourneePageModule = /** @class */ (function () {
    function DetailTourneePageModule() {
    }
    DetailTourneePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                primeng_table__WEBPACK_IMPORTED_MODULE_23__["TableModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__["AutoCompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_26__["MenuModule"],
                src_app_head_head_module__WEBPACK_IMPORTED_MODULE_27__["HeadModule"]
            ],
            declarations: [_detail_tournee_page__WEBPACK_IMPORTED_MODULE_6__["DetailTourneePage"]],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_24__["DialogService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_24__["MessageService"],
                primeng_table__WEBPACK_IMPORTED_MODULE_23__["Table"],
            ]
        })
    ], DetailTourneePageModule);
    return DetailTourneePageModule;
}());



/***/ }),

/***/ "./src/app/tournees/detail-tournee/detail-tournee.page.html":
/*!******************************************************************!*\
  !*** ./src/app/tournees/detail-tournee/detail-tournee.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n    <!-- HEAD -->\r\n    <div class=\"head\">\r\n      <div class=\"back_button\">\r\n        <span>\r\n          <img src=\"../../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"menu\">\r\n        <div class=\"list_icon\">\r\n          <i class=\"fas fa-at\"\r\n            style=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-comments\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-ban on fa-camera\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n        </div>\r\n      </div>\r\n\r\n       <app-head></app-head>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"body\">\r\n      <div class=\"title_body ui-g\">\r\n        <div (click)=\"go_back()\" class=\"ui-g-1\">\r\n          <i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\"> </i>\r\n        </div>\r\n        <div class=\"ui-g-11\">\r\n          <h3> {{name}} </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"btn_nw_cr\" *ngIf=\"status != 'Clôturée' \">\r\n        <button pButton type=\"button\" label=\"MODIFIER\" *ngIf=\"edit==false\" class=\"bt ui-button-success\"\r\n          (click)=\"edit_tournee()\"></button>\r\n        <button pButton type=\"button\" label=\"SAUVEGARDER\" *ngIf=\"edit==true\" class=\"bt ui-button-success\"\r\n          (click)=\"save_tournee()\"></button>\r\n\r\n        <button pButton type=\"button\" label=\"ANNULER\" class=\"bt ui-button-secondary\" (click)=\"abort_tournee()\"></button>\r\n      </div>\r\n\r\n      <div class=\"breacumb ui-g\">\r\n        <div class=\"ui-g-4 dropdownworkflow\">\r\n          <!-- <button pButton type=\"button\" label=\"VALIDÉE PAR SUPERVISEUR\"  class=\"bt ui-button-secondary\"></button> -->\r\n          <p-dropdown [options]=\"itemsActions\" [(ngModel)]=\"selectedAction\" placeholder=\"ACTION\" optionLabel=\"label\"\r\n            [showClear]=\"true\" (onChange)=\"itemsActionsChange($event.value)\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-8 dropdownworkflow noCLick\">\r\n          <p class=\"etat2\">{{status}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ban-gris ui-g\">\r\n        <div class=\"ui-g-7\">\r\n\r\n        </div>\r\n        <div class=\"fiche-visite ui-g-5\" *ngIf=\"buttonShow\" (click)=\"go_fiche_visite()\">\r\n          <div class=\"icone ui-g-2\">\r\n            <i style=\"font-size: x-large; color : #666666\" class=\"fa fa-edit\"></i>\r\n          </div>\r\n          <div class=\"soratra ui-g-10\">\r\n            <p class=\"ps\" style=\"color: #666666\">Accéder aux fiches de visite</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"photo ui-g show-detail-tourne\">\r\n        <div class=\"ui-g-6\">\r\n          <p class=\"label_nom\">Nom</p>\r\n          <p class=\"label_nom\">Date prévue</p>\r\n          <p class=\"label_nom\">Commercial</p>\r\n        </div>\r\n\r\n        <div class=\"ui-g-6\" *ngIf=\"data_pv\">\r\n          <p class=\"nom_tournee\" *ngIf=\"data_pv\"><span class=\"txt-blue\">{{name}}</span></p>\r\n          <p class=\"nom_tournee\"> {{date_prevue}}</p>\r\n          <p class=\"nom_tournee\"> {{commercial}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"photo ui-g show-detail-tourne\" *ngIf=\"start_date\">\r\n        <p class=\"label_nom\">Date de démarrage</p>\r\n        <p class=\"nom_tournee\">{{from_liste.start_date}}</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"form\">\r\n        <div class=\"form_inside\">\r\n          <div class=\"table\">\r\n            <p class=\"first\">POINTS DE VENTE INITIAUX</p>\r\n            <p-table #dt [columns]=\"cols_pv\" [value]=\"data_pv\" [paginator]=\"true\" [paginatorPosition]=\"'top'\"\r\n              [rows]=\"15\" [(selection)]=\"selected\" class=\"tableau\">\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"\r\n                    [ngStyle]=\"{'display': col.display , 'width' : col.width}\">{{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                  </th>\r\n\r\n                  <th *ngIf=\"edit==true\"></th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\" [ngClass]=\"rowData.state == 'oui' ? 'non' : null\">\r\n                  <td class=\"fz\" *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display}\">\r\n                    {{rowData[col.field]}}\r\n                  </td>\r\n\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form_inside\">\r\n          <div class=\"table\">\r\n            <p class=\"first\">POINTS DE VENTE SUPPLÉMENTAIRES</p>\r\n            <p-table #dt [columns]=\"cols_pvs\" [value]=\"data_pvs\" [paginator]=\"true\" [paginatorPosition]=\"'top'\"\r\n              [rows]=\"15\" dataKey=\"name\" class=\"tableau\" *ngIf=\"add == false\">\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"\r\n                    [ngStyle]=\"{'display': col.display, 'width': col.width}\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                  </th>\r\n                  <th style=\"width:4em\"></th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\" [ngClass]=\"rowData.state == 'oui' ? 'non' : null\">\r\n                  <td class=\"fz\" *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display, 'width': col.width}\">\r\n                    {{rowData[col.field]}}\r\n                  </td>\r\n                  <td style=\"text-align:center\">\r\n                    <button pButton *ngIf=\"rowData.pos_additional_line_id != '-1' \" type=\"button\" icon=\"pi pi-trash\"\r\n                      class=\"bt ui-button-secondary\" [disabled]=\"true\"></button>\r\n                    <button pButton *ngIf=\"rowData.pos_additional_line_id == '-1' \" type=\"button\" icon=\"pi pi-trash\"\r\n                      class=\"bt ui-button-secondary\" (click)=\"onRowClicked(rowData)\"></button>\r\n                  </td>\r\n\r\n                </tr>\r\n              </ng-template>\r\n\r\n            </p-table>\r\n\r\n            <!--\r\n              ETO\r\n            -->\r\n\r\n            <p-table #dt [paginator]=\"true\" [paginatorPosition]=\"'top'\" [rows]=\"15\" [columns]=\"cols_pvs\"\r\n              [value]=\"data_pvs\" dataKey=\"name\" class=\"tableau\" *ngIf=\"add == true\">\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"\r\n                    [ngStyle]=\"{'display': col.display, 'width': col.width}\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                  </th>\r\n\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                  <td class=\"fz\" *ngFor=\"let col of columns\"\r\n                    [ngStyle]=\"{'display': col.display, 'pointer-events' : col.pointer_events, 'background' : col.bg, 'width': col.width}\">\r\n                    {{rowData[col.field]}}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n\r\n            <!---->\r\n            <div *ngIf=\"add == true\" class=\"xc\">\r\n              <div style=\"width: 17%\"></div>\r\n              <div style=\"width: 38%\">\r\n                <p-autoComplete [(ngModel)]=\"added_pos\" [suggestions]=\"filtered_added_pos\"\r\n                  (completeMethod)=\"filter_single_pos($event)\" field=\"nom_pos\" [size]=\"10\" [dropdown]=\"true\"\r\n                  (onBlur)=\"add_pos_additional_on_blur()\" [minLength]=\"1\"></p-autoComplete>\r\n              </div>\r\n\r\n              <div style=\"width: 32%\"></div>\r\n              <div style=\"width: 13%\">\r\n                <p>non</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cx\" *ngIf=\"edit == true\">\r\n              <span>\r\n                <a (click)=\"add_line()\" style=\"color: #21B799\">Ajouter un élément</a>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <p-dialog [(header)]=\"name\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\"\r\n        appendTo=\"body\">\r\n        <div>\r\n          <p class=\"label_nom\">Sequence</p>\r\n          <p class=\"nom_tournee\">{{name}}</p>\r\n        </div>\r\n\r\n        <div>\r\n          <p class=\"label_nom\">Nom</p>\r\n          <p class=\"nom_tournee\">{{screen.res_partner_name}}</p>\r\n        </div>\r\n\r\n        <div>\r\n          <p class=\"label_nom\">Visité</p>\r\n          <p class=\"nom_tournee\">{{screen.visit}}</p>\r\n        </div>\r\n\r\n        <p-footer>\r\n          <button type=\"button\" pButton (click)=\"display=false\" label=\"Fermer\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n      <p-dialog [(header)]=\"name\" [(visible)]=\"display4\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\"\r\n        appendTo=\"body\">\r\n        <div class=\"form\">\r\n          <form [formGroup]=\"tournees_fg\">\r\n            <div class=\"form_inside\">\r\n\r\n              <div class=\"form_item\">\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Séquence</ion-label>\r\n                  <ion-input formControlName=\"sequence\" [(ngModel)]=\"screen.sequence\" type=\"text\"> </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"InputObligatoire\">\r\n                  <ion-label position=\"floating\">Nom</ion-label>\r\n                  <ion-input formControlName=\"name\" [(ngModel)]=\"screen.name\" type=\"text\"> </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"InputObligatoire\">\r\n                  <ion-label position=\"floating\">Visité</ion-label>\r\n                  <ion-select [(ngModel)]=\"screen.visit\" formControlName=\"visite\" (ionChange)=\"visite_change($event)\">\r\n                    <ion-select-option *ngFor=\"let visite of visites\" [value]=\"visite.code\"> {{visite.name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!--\r\n                            <p-dropdown [(ngModel)] = \"screen.visite\" [options]=\"visites\" formControlName=\"visite\"></p-dropdown>\r\n                          -->\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <p-footer>\r\n          <button type=\"button\" pButton (click)=\"display4=false\" label=\"SAUVEGARDER\"\r\n            class=\"ui-button-secondary\"></button>\r\n          <button type=\"button\" pButton (click)=\"display4=false\" label=\"ANNULER\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n\r\n      </p-dialog>\r\n\r\n      <p-dialog header=\"Tournées\" [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\" \r\n        appendTo=\"body\">\r\n\r\n        <div class=\"message\">\r\n          Voici la liste des points de vente non visités lors de la tournée de la veille.\r\n        </div>\r\n\r\n        <div class=\"form_inside\">\r\n          <div class=\"table\">\r\n            <p class=\"first\">POINTS DE VENTE</p>\r\n            <p-table #dt [paginator]=\"true\" [paginatorPosition]=\"'top'\" [rows]=\"15\" [value]=\"data_pup\" class=\"tableau\" [(selection)]=\"selected\"\r\n              (onRowSelect)=\"test_close_shit($event)\" (onRowUnselect)=\"test_close_shit($event)\">\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th style=\"width: 3em\"> \r\n                   \r\n                  </th>\r\n                  <th style=\"display: none\">id</th>\r\n                  <th style=\"width: 20%\">Code client</th>\r\n                  <th style=\"width: 30%\">Nom du PDV</th>\r\n                  <th style=\"width: 31%\">Quartier</th>\r\n                  <th style=\"width: 19%\">Visité</th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-r i=\"rowIndex\">\r\n                <tr>\r\n                  <td>\r\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                  </td>\r\n                  <td class=\"fz\" style=\"display: none\">{{rowData.id}}</td>\r\n                  <td class=\"fz\" style=\"width: 17%\">{{rowData.res_partner_name}}</td>\r\n                  <td class=\"fz\" style=\"width: 38%\">{{rowData.nom_pos}}</td>\r\n                  <td class=\"fz\" style=\"width: 32%\">{{rowData.quartier}}</td>\r\n                  <td class=\"fz\" style=\"width: 13%\">{{rowData.visite}}</td>\r\n                  <!--<td class=\"fz\" style=\"width: 13%\" pEditableColumn>\r\n                    <p-cellEditor>\r\n                      <ng-template pTemplate=\"input\">\r\n                        <p-dropdown [options]=\"visites\" [(ngModel)]=\"rowData.visite\" [style]=\"{'width':'100%'}\"\r\n                          (onChange)=\"test(rowData, ri)\">\r\n                        </p-dropdown>\r\n                      </ng-template>\r\n                      <ng-template pTemplate=\"output\">\r\n                        {{rowData.visite}}\r\n                      </ng-template>\r\n                    </p-cellEditor>\r\n                  </td>-->\r\n\r\n                </tr>\r\n              </ng-template>\r\n\r\n              \r\n\r\n            </p-table>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <p-footer>\r\n          <button type=\"button\" pButton (click)=\"valider_tournee()\" label=\"VALIDER ET DÉMARRER LA TOURNÉE\"\r\n            class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton (click)=\"display2=false\" label=\"ANNULER\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n\r\n      </p-dialog>\r\n\r\n\r\n\r\n\r\n      <p-dialog header=\"Tournées\" [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\"\r\n        appendTo=\"body\">\r\n\r\n        <div class=\"message\">\r\n          Liste des PDV non visités de cette tournée:\r\n        </div>\r\n\r\n        <div class=\"form_inside\">\r\n          <div class=\"table\">\r\n            <p class=\"first\">POINTS DE VENTE</p>\r\n            <p-table #dt [columns]=\"cols_pn\" [value]=\"data_pn\" class=\"tableau\" [paginator]=\"true\"\r\n              [paginatorPosition]=\"'top'\" [rows]=\"15\">\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"\r\n                    [ngStyle]=\"{'display': col.display , 'width' : col.width}\">{{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                  <td class=\"fz\" *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display}\">\r\n                    {{rowData[col.field]}}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n\r\n            </p-table>\r\n          </div>\r\n        </div>\r\n\r\n        <p-footer>\r\n          <button type=\"button\" pButton (click)=\"cloturer_tournee()\" label=\"FERMER ET CLÔTURER LA TOURNÉE\"\r\n            class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton (click)=\"display3=false;\" label=\"ANNULER\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n\r\n      </p-dialog>\r\n\r\n      <div class=\"footer\">\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tournees/detail-tournee/detail-tournee.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/tournees/detail-tournee/detail-tournee.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh2 {\n  padding-left: 10px; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  padding-top: 0;\n  text-align: left; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  height: 48px;\n  padding-bottom: 13px;\n  padding-top: 10px; }\n\n.archive {\n  height: 48px;\n  background-color: #E2E2E0; }\n\n.div_btn {\n  text-align: -webkit-right; }\n\n.form {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\n.cam {\n  text-align: -webkit-center;\n  border: 1px solid gray;\n  display: block; }\n\n.photo {\n  width: 98%;\n  margin-top: 8px; }\n\n.form_item {\n  margin: 15px; }\n\n.form_inside {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%; }\n\n.gps {\n  margin-top: 2px;\n  margin-left: 0px; }\n\n.form_item p {\n  font-weight: bold;\n  margin-top: 5px; }\n\nbody .ui-widget-content p {\n  font-weight: bold !important;\n  margin-bottom: 10px !important; }\n\n.canal {\n  font-weight: bold;\n  color: #21B799; }\n\n.label_nom {\n  color: #8f8f8f;\n  font-size: 12px;\n  text-align: left; }\n\n.nom_tournee {\n  color: #666666;\n  font-size: 13px;\n  text-align: right; }\n\n.message {\n  background-color: #D9EDF7;\n  color: #31708F;\n  border-color: #bce8f1;\n  font-size: 13px;\n  width: 98%;\n  margin-left: 1%;\n  padding: 18px;\n  margin-top: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n  vertical-align: middle; }\n\n.first {\n  color: #875A7B;\n  text-decoration: underline;\n  margin-bottom: 0px;\n  font-size: 13px;\n  padding: 0px 0px 0px 8px;\n  margin-top: 10px; }\n\n.ban-gris {\n  margin-top: -9px;\n  height: 48px;\n  background-color: #E2E2E0;\n  border-top: 1px solid #8f8f8f;\n  border-bottom: 1px solid #666666; }\n\n.fiche-visite {\n  height: 46px;\n  max-height: 48px;\n  border-left: 1px solid #666666;\n  padding: 10px; }\n\n.ps {\n  position: absolute;\n  color: #666666;\n  margin: 0px 0px 0px 5px; }\n\n.soratra {\n  padding: 0px; }\n\n.xc {\n  display: -webkit-box;\n  background-color: #D3D3D3; }\n\n.icone {\n  padding: 0px; }\n\n.etat2 {\n  width: 150px;\n  background-color: #21b799;\n  height: 25px;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  margin-top: 0px;\n  margin-left: 45%;\n  padding: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC90b3VybmVlcy9kZXRhaWwtdG91cm5lZS9kZXRhaWwtdG91cm5lZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1oseUJBQ0osRUFBQTs7QUFDQTtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSw0QkFBNEI7RUFDNUIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFnQjtFQUNoQixlQUFnQjtFQUNoQixnQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBb0I7RUFDcEIseUJBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvdXJuZWVzL2RldGFpbC10b3VybmVlL2RldGFpbC10b3VybmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5oMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5idG5fbndfY3J7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbi5idHtcclxuICAgIG1hcmdpbi1sZWZ0IDogMnB4XHJcbn1cclxuLnRpdGxlX2JvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uYXJjaGl2ZXtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTBcclxufVxyXG4uZGl2X2J0biB7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0O1xyXG59XHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhbSB7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucGhvdG8ge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uZm9ybV9pdGVtIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4uZm9ybV9pbnNpZGUge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuLmdwcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbi5mb3JtX2l0ZW0gcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5ib2R5IC51aS13aWRnZXQtY29udGVudCBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbmFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyMUI3OTk7XHJcbn1cclxuXHJcbi5sYWJlbF9ub20ge1xyXG4gICAgY29sb3IgOiAjOGY4ZjhmIDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IDtcclxufVxyXG4ubm9tX3RvdXJuZWUge1xyXG4gICAgY29sb3IgOiAjNjY2NjY2IDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0IDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RURGNztcclxuICAgIGNvbG9yOiAjMzE3MDhGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgO1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gICAgY29sb3I6ICM4NzVBN0I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmJhbi1ncmlzIHtcclxuICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ZjhmOGY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjY2NjtcclxufVxyXG4uZmljaGUtdmlzaXRlIHtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIG1heC1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnNvcmF0cmEge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ueGMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzXHJcbn1cclxuXHJcbi5pY29uZSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ldGF0MiB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiNzk5O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tournees/detail-tournee/detail-tournee.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/tournees/detail-tournee/detail-tournee.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailTourneePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTourneePage", function() { return DetailTourneePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var DetailTourneePage = /** @class */ (function () {
    //selected:any ;
    function DetailTourneePage(loading, alert, fb, geolocation, activated_route, storage, dbm, route) {
        this.loading = loading;
        this.alert = alert;
        this.fb = fb;
        this.geolocation = geolocation;
        this.activated_route = activated_route;
        this.storage = storage;
        this.dbm = dbm;
        this.route = route;
        this.data_pv = [];
        this.data_pvs = [];
        this.data_pvs2 = [];
        this.data_p = [];
        this.data_pn = [];
        this.name = "";
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.selected = [];
        this.screen = {};
        this.edit = false;
        this.display4 = false;
        this.add = false;
        this.data_verification = [];
        this.buttonShow = false;
        this.data_pup = [];
        this.data_pvs_temp = [];
        this.color_icon = "red";
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
    }
    DetailTourneePage.prototype.filter_single_pos = function (event) {
        var query = event.query;
        this.filtered_added_pos = this.filter_pos(query, this.res_partner);
    };
    DetailTourneePage.prototype.filter_pos = function (query, pos) {
        var filtered = [];
        for (var i = 0; i < pos.length; i++) {
            var pos_temp = pos[i];
            if (pos_temp.nom_pos.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(pos_temp);
            }
        }
        return filtered;
    };
    DetailTourneePage.prototype.add_pos_additional_on_blur = function () {
        this.added_pos.pos_additional_line_id = '-1';
        this.added_pos.visite = "non";
        if (!this.data_pvs) {
            this.data_pvs = [];
        }
        this.data_pvs.push(this.added_pos);
        this.data_pvs_temp.push(this.added_pos);
        this.added_pos = null;
        this.add = false;
    };
    DetailTourneePage.prototype.ngOnInit = function () {
        this.color_icon = 'red';
        this.items = [
            { id: 1, label: '' },
        ];
        this.visites = [
            { label: "non", value: "non" },
            { label: "oui", value: "oui" },
        ];
        this.cols_pup = [
            { field: 'id', header: 'id', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
            { field: 'visite', header: 'Visité', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
        ];
        this.cols_pv = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
            { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
            { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'name', header: 'name', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
        ];
        this.cols_pvs = [
            { field: 'pos_additional_line_id', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '2%' },
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
            { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
            { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'name', header: 'name', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'sequence', header: 'sequence', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
        ];
        this.cols_p = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
            { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
            { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'name', header: 'name', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
        ];
        this.cols_pn = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
            { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
            { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
            { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
            { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'name', header: 'name', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
            { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
        ];
        this.tournees_fg = this.fb.group({
            sequence: [''],
            name: [''],
            visite: ['']
        });
        this.dbm.get_name_id_data("res_partner");
    };
    DetailTourneePage.prototype.go_back = function () {
        this.route.navigate(['liste-tournee'], this.navigationExtras);
    };
    DetailTourneePage.prototype.checkstatus = function (status, k) {
        switch (status) {
            case "Nouvelle": {
                this.items = [
                    { id: 1, label: 'NOUVELLE' },
                ];
                this.itemsActions = [
                    { id: 1, label: 'DÉMARRER LA TOURNÉE' },
                ];
                break;
            }
            case "Démarrée": {
                this.items = [
                    { id: 2, label: 'DÉMARRÉE' }
                ];
                this.buttonShow = true;
                this.itemsActions = [
                    { id: 1, label: 'CLÔTURER LA TOURNÉE' },
                ];
                if (k != 0) {
                    this.display2 = true;
                }
                break;
            }
            case "démarrer": {
                this.items = [
                    { id: 2, label: 'DÉMARRÉE' }
                ];
                this.buttonShow = true;
                this.itemsActions = [
                    { id: 1, label: 'CLÔTURER LA TOURNÉE' },
                ];
                if (k != 0) {
                    this.display2 = true;
                }
                break;
            }
            case "clôturer": {
                this.buttonShow = true;
                this.itemsActions = [
                    { id: 0, label: 'CLOTURÉE' },
                ];
                this.items = [
                    { id: 1, label: 'CLOTURÉE' },
                ];
                if (k != 0) {
                    var temp = [];
                    temp = this.data_pvs.concat(this.data_pv);
                    this.data_pn = temp.filter(function (item) {
                        return item.visite == "non";
                    });
                    this.display3 = true;
                }
                break;
            }
            case "Clôturée": {
                this.buttonShow = true;
                this.itemsActions = [
                    { id: 0, label: 'CLOTURÉE' },
                ];
                this.items = [
                    { id: 1, label: 'CLOTURÉE' },
                ];
                if (k != 0) {
                    var temp = [];
                    temp = this.data_pvs.concat(this.data_pv);
                    this.data_pn = temp.filter(function (item) {
                        return item.visite == "non";
                    });
                    this.display3 = true;
                }
                break;
            }
            default: {
            }
        }
    };
    DetailTourneePage.prototype.init_data = function (iter) {
        var _this = this;
        this.color_icon = 'red';
        this.storage.get("temp").then(function (temp) {
            var data_temp = [];
            data_temp = JSON.parse(temp);
            if (temp.length > 0) {
                _this.data_pvs_temp = data_temp;
            }
        });
        this.data_pvs_temp = [];
        this.activated_route.queryParams.subscribe(function (params) {
            _this.checkstatus(params['status'], 0);
            _this.from_liste = params;
            _this.status = params["status"];
            _this.name = params["name"];
            _this.commercial = params["commercial"];
            _this.date_prevue = params["date_prevue"];
            _this.date_debut = params["date_debut"];
            _this.date_fin = params["date_fin"];
            _this.id_tournee = params['x_odoo_id'];
            _this.dbm.get_tournee_by_user("i_t_pos_additional", _this.id_tournee).then(function (data_i_t_pos_additional) {
                _this.data_pvs = data_i_t_pos_additional;
                _this.dbm.get_tournee_by_user("i_t_pos_initial", _this.id_tournee).then(function (data_i_t_pos_initial) {
                    _this.data_pv = data_i_t_pos_initial;
                    _this.dbm.verification_visit_sheet(_this.id_tournee).then(function (data_verif) {
                        _this.data_verification = data_verif;
                    });
                    _this.dbm.get_unvisited_partner(_this.id_tournee, data_i_t_pos_initial).then(function (data) {
                        _this.data_pup = data;
                    });
                    _this.dbm.get_active_user().then(function (data) {
                        _this.id = data.id;
                        _this.dbm.select_additionnal_pos(_this.id_tournee, "").then(function (data) {
                            _this.res_partner = data;
                        });
                    });
                });
            });
        });
    };
    DetailTourneePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loading.create()];
                    case 1:
                        _a.load = _b.sent();
                        this.init_data(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailTourneePage.prototype.onRowClicked = function (rowData) {
        var _this = this;
        var index = null;
        var index_2 = null;
        for (var i = 0; i < this.data_pvs.length; i++) {
            if (this.data_pvs[i].res_partner_name == rowData.res_partner_name) {
                index = i;
            }
        }
        for (var i = 0; i < this.data_pvs_temp.length; i++) {
            if (this.data_pvs_temp[i].res_partner_name == rowData.res_partner_name) {
                index_2 = i;
            }
        }
        if (index != null) {
            this.data_pvs.splice(index, 1);
        }
        if (index_2 != null) {
            this.data_pvs_temp.splice(index_2, 1);
        }
        else {
            this.dbm.remove_pos_additional(rowData.i_t_pos_additional_id, this.id_tournee).then(function (data) {
                _this.init_data(1);
            });
        }
    };
    DetailTourneePage.prototype.itemsActionsChange = function (event) {
        var named = event.label.split(' ');
        named = named[0].charAt(0).toLowerCase() + named[0].slice(1).toLowerCase();
        switch (named) {
            case "Clôturée":
                named = "clôturer";
                break;
            case "Démarrée":
                named = "démarrer";
            default:
                break;
        }
        this.checkstatus(named, 1);
    };
    DetailTourneePage.prototype.test = function (rowData, ri) {
        this.data_pup[ri] = rowData;
    };
    DetailTourneePage.prototype.go_sync = function () {
        this.route.navigate(["synchro"], this.navigationExtras);
    };
    DetailTourneePage.prototype.valider_tournee = function () {
        var _this = this;
        // alert("385 => " +  JSON.stringify(this.selected));
        this.dbm.update_date_tournee("start_date", this.id_tournee);
        if (this.data_pup.length > 0) {
            for (var i = 0; i < this.data_pup.length; i++) {
                if (this.data_pup[i].visite == "oui") {
                    this.dbm.insert_pos_additionnal(this.data_pup[i], this.id_tournee, 1).then(function () {
                    });
                }
            }
        }
        this.display2 = false;
        this.dbm.update_tournee_by_id(this.id_tournee, "demarre").then(function () {
            _this.status = "Démarrée";
            _this.dbm.get_tournee_by_user("i_t_pos_additional", _this.id_tournee).then(function (data_i_t_pos_additional) {
                if (_this.data_pvs.length > 0) {
                    if (data_i_t_pos_additional) {
                        if (data_i_t_pos_additional.length > 0) {
                            for (var i = 0; i < data_i_t_pos_additional.length; i++) {
                                _this.data_pvs.push(data_i_t_pos_additional[i]);
                            }
                        }
                    }
                }
                else {
                    _this.data_pvs = data_i_t_pos_additional;
                }
                _this.dbm.get_tournee_by_user("i_t_pos_initial", _this.id_tournee).then(function (data_i_t_pos_initial) {
                    _this.data_pv = data_i_t_pos_initial;
                    _this.dbm.get_active_user().then(function (data) {
                        _this.id = data.id;
                        var q = "select res_partner.id as value, res_partner.name as label from res_partner where user_id = " + data.id;
                    });
                });
            });
        });
    };
    DetailTourneePage.prototype.cloturer_tournee = function () {
        var _this = this;
        this.dbm.update_date_tournee("end_date", this.id_tournee);
        this.display3 = false;
        this.dbm.update_tournee_by_id(this.id_tournee, "cloture")
            .then(function () {
            _this.itemsActions = [
                { id: 0, label: 'CLOTURÉE' },
            ];
            _this.items = [
                { id: 1, label: 'CLOTURÉE' },
            ];
            _this.route.navigate(['liste-tournee']);
            _this.dbm.get_tournee_by_user("i_t_pos_additional", _this.id_tournee).then(function (data_i_t_pos_additional) {
                if (_this.data_pvs.length > 0) {
                    for (var i = 0; i < data_i_t_pos_additional.length; i++) {
                        _this.data_pvs.push(data_i_t_pos_additional[i]);
                    }
                }
                else {
                    _this.data_pvs = data_i_t_pos_additional;
                }
                _this.dbm.get_tournee_by_user("i_t_pos_initial", _this.id_tournee).then(function (data_i_t_pos_initial) {
                    _this.data_pv = data_i_t_pos_initial;
                    _this.dbm.get_active_user().then(function (data) {
                        _this.id = data.id;
                        var q = "select res_partner.id as value, res_partner.name as label from res_partner where user_id = " + data.id;
                        _this.dbm.select_additionnal_pos(_this.id_tournee, "").then(function (data) {
                            _this.res_partner = data;
                        });
                    });
                });
            });
        });
    };
    DetailTourneePage.prototype.abort_tournee = function () {
        this.remove_i_t_pos_additional();
        if (this.edit == false) {
            this.route.navigate(['detail-tournee'], this.navigationExtras);
        }
        else {
            this.edit = false;
        }
        this.data_pvs_temp = [];
        this.init_data(0);
        this.buttonShow = true;
    };
    DetailTourneePage.prototype.getMyLocation = function () {
        var options = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
        }).catch(function (error) {
        });
    };
    DetailTourneePage.prototype.edit_tournee = function () {
        this.buttonShow = false;
        this.edit = true;
    };
    DetailTourneePage.prototype.remove_i_t_pos_additional = function () {
        for (var i = 0; i < this.data_pvs.length; i++) {
            if (this.data_pvs[i].pos_additional_line_id == -1 || this.data_pvs[i].pos_additional_line_id == null) {
                this.dbm.remove_pos_additional(this.data_pvs[i].i_t_pos_additional_id, this.id_tournee);
            }
        }
    };
    DetailTourneePage.prototype.save_tournee = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.data_pvs_temp.length > 0)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.data_pvs_temp.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dbm.insert_pos_additionnal(this.data_pvs_temp[i], this.id_tournee, 0)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.init_data(1);
                        _a.label = 5;
                    case 5:
                        this.edit = false;
                        this.buttonShow = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailTourneePage.prototype.visite_change = function (visite) {
        for (var i = 0; i < this.data_p.length; i++) {
            if (this.data_p[i].res_partner_name == this.screen.res_partner_name) {
                this.data_p[i].visite = visite;
                break;
            }
        }
    };
    DetailTourneePage.prototype.go_fiche_visite = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var x, temp, navigation_extra, i, diff, i, m;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = this.data_pvs.filter(function (additional) {
                            return additional.pos_additional_line_id == -1;
                        });
                        temp = JSON.stringify(this.data_pvs_temp);
                        this.storage.set("temp", temp);
                        navigation_extra = {
                            queryParams: {
                                id_tournee: this.id_tournee,
                                commercial_id: this.data_pv[0].id,
                                tour_status: this.status,
                            }
                        };
                        if (this.data_pv == null) {
                        }
                        else {
                            if (this.data_verification == undefined) {
                                for (i = 0; i < this.data_pv.length; i++) {
                                    this.dbm.insert_Visit_sheet(this.data_pv[i].res_partner_id, this.id_tournee, "true", this.data_pv[i].i_t_pos_initial_id, null).then(function () {
                                    });
                                }
                            }
                            else {
                                diff = this.data_pv.filter(this.comparer(this.data_verification));
                                for (i = 0; i < diff.length; i++) {
                                    this.dbm.insert_Visit_sheet(diff[i].res_partner_id, this.id_tournee, "true", diff[i].i_t_pos_initial_id, null).then(function () {
                                    });
                                }
                            }
                        }
                        if (x.length > 0) {
                            this.save_additional();
                        }
                        return [4 /*yield*/, this.loading.create({
                                message: 'Veuillez patienter...',
                                duration: 3000
                            })];
                    case 1:
                        m = _a.sent();
                        return [4 /*yield*/, m.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, m.onDidDismiss().then(function () {
                                _this.route.navigate(["fiche-visite"], navigation_extra);
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailTourneePage.prototype.comparer = function (verif) {
        return function (from_db) {
            return verif.filter(function (verif_filterd) {
                return verif_filterd.partner_id == from_db.res_partner_id && verif_filterd.pos_initial == from_db.i_t_pos_initial_id;
            }).length == 0;
        };
    };
    DetailTourneePage.prototype.save_additional = function () {
        if (this.data_pvs_temp == null) {
        }
        else {
            console.log("632 => ", this.data_pvs);
            for (var i = 0; i < this.data_pvs.length; i++) {
                console.log("it => ", i);
                if (this.data_pvs[i].pos_additional_line_id == -1 || this.data_pvs[i].pos_additional_line_id == null) {
                    this.dbm.insert_Visit_sheet(this.data_pvs[i].res_partner_id, this.id_tournee, "false", null, this.data_pvs[i].i_t_pos_additional_id).then(function () {
                    });
                }
            }
            this.data_pvs_temp = [];
        }
    };
    DetailTourneePage.prototype.open_menu = function () {
        this.route.navigate(['menu'], this.navigationExtras);
    };
    DetailTourneePage.prototype.Deconnexion = function () {
        var _this = this;
        src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_7__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.route.navigate(['home'], this.navigationExtras);
    };
    DetailTourneePage.prototype.add_line = function () {
        var _this = this;
        this.add = true;
        var tohiny = "";
        var tohiny_2 = "";
        if (this.data_pvs_temp && this.data_pvs_temp.length > 0) {
            tohiny = " and res_partner.id not in (";
            for (var i = 0; i < this.data_pvs_temp.length - 1; i++) {
                tohiny_2 = tohiny_2 + this.data_pvs_temp[i].id + ', ';
            }
            tohiny_2 = tohiny_2 + this.data_pvs_temp[this.data_pvs_temp.length - 1].id + ")";
            tohiny = tohiny + tohiny_2;
        }
        this.dbm.select_additionnal_pos(this.id_tournee, tohiny).then(function (data) {
            _this.res_partner = data;
        });
    };
    DetailTourneePage.prototype.test_close_shit = function (rowData) {
        for (var i = 0; i < this.data_pup.length; i++) {
            if (this.data_pup[i].res_partner_name == rowData.data.res_partner_name) {
                if (this.data_pup[i].visite == "non") {
                    this.data_pup[i].visite = "oui";
                }
                else {
                    this.data_pup[i].visite = "non";
                }
            }
        }
    };
    DetailTourneePage.prototype.check_all = function (is_checked) {
        if (is_checked == true) {
            for (var i = 0; i < this.data_pup.length; i++) {
                this.data_pup[i].visite = "oui";
            }
        }
        else {
            this.data_pup[i].visite = "non";
        }
    };
    DetailTourneePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-tournee',
            template: __webpack_require__(/*! ./detail-tournee.page.html */ "./src/app/tournees/detail-tournee/detail-tournee.page.html"),
            styles: ["\n  .non {\n            \n    color: green !important;\n}\n.oui {\n    \n    color: red !important;\n}\n  ", __webpack_require__(/*! ./detail-tournee.page.scss */ "./src/app/tournees/detail-tournee/detail-tournee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_2__["Database_manager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailTourneePage);
    return DetailTourneePage;
}());



/***/ })

}]);
//# sourceMappingURL=tournees-detail-tournee-detail-tournee-module.js.map