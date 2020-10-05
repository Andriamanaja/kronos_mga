(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fiche-visite-page-two-page-two-module"],{

/***/ "./src/app/fiche-visite/page-two/page-two.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/fiche-visite/page-two/page-two.module.ts ***!
  \**********************************************************/
/*! exports provided: PageTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoPageModule", function() { return PageTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _page_two_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page-two.page */ "./src/app/fiche-visite/page-two/page-two.page.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var src_app_head_head_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/head/head.module */ "./src/app/head/head.module.ts");



























var routes = [
    {
        path: '',
        component: _page_two_page__WEBPACK_IMPORTED_MODULE_24__["PageTwoPage"]
    }
];
var PageTwoPageModule = /** @class */ (function () {
    function PageTwoPageModule() {
    }
    PageTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
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
                primeng_toast__WEBPACK_IMPORTED_MODULE_21__["ToastModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__["CheckboxModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_23__["TableModule"],
                primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_25__["MenuModule"],
                src_app_head_head_module__WEBPACK_IMPORTED_MODULE_26__["HeadModule"]
            ],
            declarations: [_page_two_page__WEBPACK_IMPORTED_MODULE_24__["PageTwoPage"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_20__["MessageService"]]
        })
    ], PageTwoPageModule);
    return PageTwoPageModule;
}());



/***/ }),

/***/ "./src/app/fiche-visite/page-two/page-two.page.html":
/*!**********************************************************!*\
  !*** ./src/app/fiche-visite/page-two/page-two.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n\t<div class=\"container\">\r\n\r\n\t\t<!-- HEAD -->\r\n\t\t<div class=\"head\">\r\n\t\t\t<div class=\"back_button\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"../../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"menu\">\r\n\t\t\t\t<div class=\"list_icon\">\r\n\t\t\t\t\t<i class=\"fas fa-at\"\r\n\t\t\t\t\t\tstyle=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-comments\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-ban on fa-camera\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t <app-head></app-head>\r\n\t\t</div>\r\n\t\t<!-- HEAD -->\r\n\r\n\r\n\t\t<div class=\"body\">\r\n\t\t\t<div class=\"bg-blanc\">\r\n\t\t\t\t<div class=\"title_body\">\r\n\t\t\t\t\t<h3 *ngIf = \"data_from_route.partner_id\">\r\n\t\t\t\t\t\t<a (click)=\"page_one()\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t{{data_from_route.partner_id}}\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--<div *ngIf=\" etat != 'Clôturée' \">\r\n\t\t\t\t\t<div class=\"btn-action-general\">\r\n\t\t\t\t\t\t<button *ngIf=\"edit == false\" pButton type=\"button\" label=\"MODIFIER\" class=\"bt bt-vert\"\r\n\t\t\t\t\t\t\t(click)=\"enable_edit()\"></button>\r\n\t\t\t\t\t\t<button *ngIf=\"edit == true\" pButton type=\"button\" label=\"SAUVEGARDER\" class=\"bt bt-vert\"\r\n\t\t\t\t\t\t\t(click)=\"sauvegarder()\"></button>\r\n\t\t\t\t\t\t<button *ngIf=\"edit == true\" pButton type=\"button\" label=\"ANNULER\"\r\n\t\t\t\t\t\t\tclass=\"bt ui-button-secondary\" (click)=\"annuler()\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t<div class=\"breacumb ui-g\">\r\n\t\t\t\t\t<div class=\"ui-g-4 dropdownworkflow\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-8 dropdownworkflow noCLick\">\r\n\t\t\t\t\t\t\t<p class=\"etat\">{{etat}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h3 *ngIf = \"data_from_route.partner_id\">{{data_from_route.partner_id}}</h3>\r\n\r\n\t\t\t\t\t<h5>Relevé de stocks et Placement</h5>\r\n\t\t\t\t\t<div class = \"table_page_two\" *ngIf=\" etat != 'Clôturée' && data_from_route.tour_status != 'cloture' \" id=\"pageTwoId\">\r\n\t\t\t\t\t\t<!--<p-table [columns]=\"cols\" [frozenColumns]=\"frozenCols\" [value]=\"data_from_db\" [scrollable]=\"true\" scrollHeight=\"600px\" frozenWidth=\"200px\" >\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"colgroup\" let-columns>\r\n\t\t\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t\t\t<col *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background' : col.bg , 'width' : col.width}\" >\r\n\t\t\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"header\" let-columns>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th *ngFor=\"let col of columns\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background' : col.bg , 'width' : col.width}\" >\r\n\t\t\t\t\t\t\t\t\t\t{{col.header}}\r\n\t\t\t\t\t\t\t\t\t\t<p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"fz\" *ngFor=\"let col of columns\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\" {'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background' : col.bg , 'width' : col.width} \"\r\n\t\t\t\t\t\t\t\t\t\tpEditableColumn>\r\n\t\t\t\t\t\t\t\t\t\t<p-cellEditor>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"input\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"rowData[col.field]\" style=\"text-align: right\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"output\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</p-cellEditor>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-table> -->\r\n\r\n\r\n\t\t\t\t\t\t<p-table class=\"table_p2\" #table [columns]=\"cols\" [frozenColumns]=\"frozenCols\" [value]=\"data_from_db\" [scrollable]=\"true\" scrollHeight=\"700px\" frozenWidth=\"220px\" >\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"frozencolgroup\" let-columns>\r\n\t\t\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:70px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:250px\">\r\n\t\t\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"colgroup\" let-columns>\r\n\t\t\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:275px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:200px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:200px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:100px\">\r\n\t\t\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"header\" let-columns>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th *ngFor=\"let col of columns\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background' : col.bg }\" >\r\n\t\t\t\t\t\t\t\t\t\t{{col.header}}\r\n\t\t\t\t\t\t\t\t\t\t<p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td *ngFor=\"let col of columns\" \r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\" {'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background' : col.bg} \"\r\n\t\t\t\t\t\t\t\t\t\tpEditableColumn >\r\n\t\t\t\t\t\t\t\t\t\t<p-cellEditor>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"rowData[col.field]\" [style.pointerEvents] = \"get_pointer(rowData, col.field)\" [style.background] = \"get_bg_color(rowData, col.field)\" style=\"text-align: right\" [disabled]=\"get_state(rowData, col.field)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"output\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</p-cellEditor>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-table>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"table_page_two\" *ngIf=\" etat == 'Clôturée' || data_from_route.tour_status == 'cloture'\" id=\"pageTwoId\">\r\n\t\t\t\t\t\t<p-table class=\"table_p2\" #table [columns]=\"cols\" [frozenColumns]=\"frozenCols\" [value]=\"data_from_db\" [scrollable]=\"true\" scrollHeight=\"700px\" frozenWidth=\"290px\" >\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"frozencolgroup\" let-columns>\r\n\t\t\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:140px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:250px\">\r\n\t\t\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"colgroup\" let-columns>\r\n\t\t\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px ; background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px ; background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px ; background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px ; background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t<col style=\"width:150px ; background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"header\" let-columns>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'display': col.display}\" style=\"background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t\t{{col.header}}\r\n\t\t\t\t\t\t\t\t\t\t<p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t<ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"fz\" *ngFor=\"let col of columns\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'display': col.display, 'text-align' : col.text_align, 'pointer-events' : col.pointer_events, 'background-color' : col.bg , 'width' : col.width} \" style=\"background-color: #D3D3D3 !important\">\r\n\t\t\t\t\t\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-table>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn-action-etapes\">\r\n\t\t\t\t\t<button pButton type=\"button\" label=\"RETOUR\" class=\"bt btn-retour\" (click)=\"page_one()\"></button>\r\n\t\t\t\t\t<span style=\"margin-left: 5px;margin-right: 5px;\">ou</span>\r\n\t\t\t\t\t<button pButton type=\"button\" label=\"SUIVANT\" class=\"bt\" (click)=\"page_three()\"></button>\r\n\t\t\t\t\t<p>page 2/7</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"footer\"></div>\r\n\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/fiche-visite/page-two/page-two.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/fiche-visite/page-two/page-two.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-action-general {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 10px;\n  /*.ui-button-secondary {\r\n\t\tpadding: 7px 15px;\r\n\t    text-transform: uppercase;\r\n\t    font-size: 14px;\r\n\t    color: #21B799;\r\n\t}*/ }\n  .btn-action-general .ui-button-success {\n    padding: 7px 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    background: #21B799;\n    color: #ffffff; }\n  .myheader {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0; }\n  .bg-blanc {\n  background: #ffffff;\n  padding-top: 5px;\n  min-height: 94vh; }\n  .breacumb.ui-g {\n  margin-top: 0; }\n  .real-content-page {\n  position: relative;\n  padding: 15px; }\n  .real-content-page h3 {\n    margin-top: 40px;\n    margin-bottom: 40px; }\n  .real-content-page .sho-data label {\n    color: #5b5b5b;\n    font-size: 12px; }\n  .real-content-page .sho-data p {\n    margin: 5px 0 15px;\n    font-size: 14px; }\n  .real-content-page .sho-data p-checkbox.ng-pristine {\n    margin-left: 20px; }\n  .btn-action-etapes {\n  position: relative;\n  bottom: 9px;\n  right: 9px;\n  text-align: right;\n  margin-right: 14px;\n  margin-top: 50px; }\n  .btn-action-etapes .btn-retour {\n    background-color: #eeeeee !important;\n    border: 1px solid #eeeeee !important;\n    color: #5B5B5B; }\n  .ui-button {\n  background-color: #21b799;\n  border: 1px solid #21b799;\n  margin-left: 10px; }\n  .fz {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n  ::ng-deep .test {\n  background-color: red !important;\n  color: greenyellow; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9maWNoZS12aXNpdGUvcGFnZS10d28vcGFnZS10d28ucGFnZS5zY3NzIiwic3JjL2FwcC9maWNoZS12aXNpdGUvcGFnZS10d28vcGFnZS10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQVV2Qjs7Ozs7R0NKRSxFRFNDO0VBakJKO0lBSUUsaUJBQWlCO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFVbkI7RUFDQyxnQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLE1BQVEsRUFBQTtFQUtUO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGFBQWEsRUFBQTtFQUVqQjtFQUNDLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFGZDtJQUlLLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQUx4QjtJQVNHLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUFWbEI7SUFhTSxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBZHJCO0lBaUJNLGlCQUFpQixFQUFBO0VBSXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQU1yQixnQkFBZ0IsRUFBQTtFQVhqQjtJQU9LLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsY0FBYyxFQUFBO0VBSW5CO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtFQUdyQjtFQUNDLG1CQUFtQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7RUFHbkI7RUFDQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9maWNoZS12aXNpdGUvcGFnZS10d28vcGFnZS10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hY3Rpb24tZ2VuZXJhbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdC51aS1idXR0b24tc3VjY2VzcyB7XHJcblx0XHRwYWRkaW5nOiA3cHggMTVweDtcclxuXHQgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdCAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdCAgICBiYWNrZ3JvdW5kOiAjMjFCNzk5O1xyXG5cdCAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0LyoudWktYnV0dG9uLXNlY29uZGFyeSB7XHJcblx0XHRwYWRkaW5nOiA3cHggMTVweDtcclxuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdCAgICBjb2xvcjogIzIxQjc5OTtcclxuXHR9Ki9cclxufVxyXG5cclxuLm15aGVhZGVye1xyXG5cdHBvc2l0aW9uOiBzdGlja3kgO1xyXG5cdHBvc2l0aW9uOi13ZWJraXQtc3RpY2t5OyBcclxuXHR0b3AgOiAwIDtcclxufVxyXG5cclxuXHJcblxyXG4uYmctYmxhbmMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA5NHZoO1xyXG59XHJcbi5icmVhY3VtYi51aS1nIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLnJlYWwtY29udGVudC1wYWdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRoMyB7XHJcblx0ICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0fVxyXG5cdC5zaG8tZGF0YSB7XHJcblx0XHRsYWJlbCB7XHJcblx0XHRcdGNvbG9yOiAjNWI1YjViO1xyXG5cdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR9XHJcblx0XHRwIHtcclxuXHRcdCAgICBtYXJnaW46IDVweCAwIDE1cHg7XHJcblx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0fVxyXG5cdFx0cC1jaGVja2JveC5uZy1wcmlzdGluZSB7XHJcblx0XHQgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5idG4tYWN0aW9uLWV0YXBlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDlweDtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuXHQuYnRuLXJldG91ciB7XHJcblx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcclxuXHQgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZSAhaW1wb3J0YW50O1xyXG5cdCAgICBjb2xvcjogIzVCNUI1QjtcclxuXHR9XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWI3OTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjFiNzk5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5meiB7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50ZXN0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuXHRjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn0iLCIuYnRuLWFjdGlvbi1nZW5lcmFsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAvKi51aS1idXR0b24tc2Vjb25kYXJ5IHtcclxuXHRcdHBhZGRpbmc6IDdweCAxNXB4O1xyXG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0ICAgIGNvbG9yOiAjMjFCNzk5O1xyXG5cdH0qLyB9XG4gIC5idG4tYWN0aW9uLWdlbmVyYWwgLnVpLWJ1dHRvbi1zdWNjZXNzIHtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogIzIxQjc5OTtcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxuXG4ubXloZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogMDsgfVxuXG4uYmctYmxhbmMge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtaW4taGVpZ2h0OiA5NHZoOyB9XG5cbi5icmVhY3VtYi51aS1nIHtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4ucmVhbC1jb250ZW50LXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHg7IH1cbiAgLnJlYWwtY29udGVudC1wYWdlIGgzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgLnJlYWwtY29udGVudC1wYWdlIC5zaG8tZGF0YSBsYWJlbCB7XG4gICAgY29sb3I6ICM1YjViNWI7XG4gICAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5yZWFsLWNvbnRlbnQtcGFnZSAuc2hvLWRhdGEgcCB7XG4gICAgbWFyZ2luOiA1cHggMCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAucmVhbC1jb250ZW50LXBhZ2UgLnNoby1kYXRhIHAtY2hlY2tib3gubmctcHJpc3RpbmUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG5cbi5idG4tYWN0aW9uLWV0YXBlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA5cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cbiAgLmJ0bi1hY3Rpb24tZXRhcGVzIC5idG4tcmV0b3VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNUI1QjVCOyB9XG5cbi51aS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiNzk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjFiNzk5O1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuXG4uZnoge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG46Om5nLWRlZXAgLnRlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyZWVueWVsbG93OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/fiche-visite/page-two/page-two.page.ts":
/*!********************************************************!*\
  !*** ./src/app/fiche-visite/page-two/page-two.page.ts ***!
  \********************************************************/
/*! exports provided: PageTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoPage", function() { return PageTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/helper/auth */ "./src/app/model/helper/auth.ts");







var PageTwoPage = /** @class */ (function () {
    function PageTwoPage(alertController, router, activatedRoute, dbm, storage) {
        this.alertController = alertController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dbm = dbm;
        this.storage = storage;
        this.edit = false;
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
    }
    ;
    PageTwoPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    PageTwoPage.prototype.go_sync = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
            _this.router.navigate(["synchro"], _this.navigationExtras);
        });
    };
    PageTwoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("state_visit").then(function (etat) {
            _this.etat = etat;
        });
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get("data_nav")) {
                var data_nav = JSON.parse(params.get("data_nav"));
                _this.data_from_route = data_nav;
                _this.dt = params.get("data_nav");
                _this.dbm.get_stock_visit_sheet_by_id_p2(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id)
                    .then(function (data) {
                    if (data) {
                        _this.data_from_db = data;
                    }
                    else {
                        _this.dbm.get_standard_p2().then(function (data) {
                            _this.data_from_db = data;
                        });
                    }
                    _this.storage.set('data_p2', JSON.stringify(data)).catch(function (e) { return alert("set storage p2 " + e.message); })
                        .then(function () {
                        _this.storage.get('data_p2')
                            .then(function (data) {
                            _this.data_cmp = JSON.parse(data);
                        });
                    }).finally(function () {
                        _this.dbm.get_last_visit_stock(_this.data_from_route.res_partner_id, _this.data_from_route.visit_sheet_id).then(function (stock) {
                            if (stock) {
                                for (var i = 0; i < stock.length; i++) {
                                    _this.data_from_db[i].last_visit_stock_avg = stock[i].last_visit_stock_avg;
                                }
                            }
                            _this.dbm.get_last_palcement_and_last_available_stock(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id).then(function (last) {
                                if (last) {
                                    for (var i = 0; i < last.length; i++) {
                                        _this.data_from_db[i].last_visit_stock = last[i].last_visit_stock;
                                        _this.data_from_db[i].last_placement = last[i].last_placement;
                                    }
                                }
                            });
                        });
                    });
                }).catch(function (e) { return console.log(e.message); });
            }
            else {
                _this.data_from_route = JSON.parse(params.get("data"));
                _this.dt = params.get("data");
                _this.dbm.get_stock_visit_sheet_by_id_p2(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id)
                    .then(function (data) {
                    if (data) {
                        _this.data_from_db = data;
                    }
                    else {
                        _this.dbm.get_standard_p2().then(function (data) {
                            _this.data_from_db = data;
                        });
                    }
                    _this.storage.set('data_p2', JSON.stringify(data)).catch(function (e) { return console.log("set storage p2 " + e.message); })
                        .then(function () {
                        _this.storage.get('data_p2')
                            .then(function (data) {
                            _this.data_cmp = JSON.parse(data);
                        });
                    });
                }).finally(function () {
                    _this.dbm.get_last_visit_stock(_this.data_from_route.res_partner_id, _this.data_from_route.visit_sheet_id).then(function (stock) {
                        if (stock) {
                            for (var i = 0; i < stock.length; i++) {
                                _this.data_from_db[i].last_visit_stock_avg = stock[i].last_visit_stock_avg;
                            }
                        }
                        _this.dbm.get_last_palcement_and_last_available_stock(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id).then(function (last) {
                            if (last) {
                                for (var i = 0; i < last.length; i++) {
                                    _this.data_from_db[i].last_visit_stock = last[i].last_visit_stock;
                                    _this.data_from_db[i].last_placement = last[i].last_placement;
                                }
                            }
                        });
                    });
                }).catch(function (e) { return console.log(e.message); });
            }
            _this.edit = true;
            console.log("p2 95", _this.data_from_route);
            _this.color_icon = _this.data_from_route.color;
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                {
                    label: _this.data_from_route.unsynced
                }
            ];
            if (_this.data_from_route.state == 'Clôturée') {
                _this.edit = false;
            }
            console.log("page 2 parametres " + JSON.stringify(_this.data_from_route));
        });
        this.items = [
            { id: 1, label: this.data_from_route.state }
        ];
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get("data_nav")) {
                var data_nav = JSON.parse(params.get("data_nav"));
                console.log("149 => ", data_nav);
                _this.data_from_route = data_nav;
            }
        });
        this.cols = [
            { field: 'product_id', header: 'product_id', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'last_visit_stock_avg', header: 'Stock moyen des 4 dernières visites', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'available_stock', header: 'Relevé stock initial', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
            { field: 'last_visit_stock', header: 'Stock initial dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'last_placement', header: 'Placement dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'placement', header: 'Placement', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' }
        ];
        this.frozenCols = [
            { field: 'manufacturer_name', header: 'Fabricant', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'product_name', header: 'Produit', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
        ];
    };
    PageTwoPage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
    PageTwoPage.prototype.sauvegarder = function () {
        for (var i = 0; i < this.data_from_db.length; i++) {
            this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
        }
        this.enable_edit();
    };
    PageTwoPage.prototype.annuler = function () {
        var _this = this;
        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(function (data) {
            if (data) {
                _this.data_from_db = data;
            }
            else {
                _this.dbm.get_standard_p2().then(function (data) {
                    _this.data_from_db = data;
                });
            }
        });
        this.enable_edit();
    };
    PageTwoPage.prototype.cancel = function () {
        this.enable_edit();
    };
    PageTwoPage.prototype.save = function () {
        this.enable_edit();
    };
    PageTwoPage.prototype.modify = function () {
        this.enable_edit();
    };
    PageTwoPage.prototype.page_one = function () {
        var data_nav = {
            data: this.dt
        };
        this.router.navigate(['page-one', data_nav]);
    };
    PageTwoPage.prototype.page_three = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data_for_nav, i, data_rtrn;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data_for_nav = {
                    data: this.dt,
                };
                // if(this.etat != "Clôturée") {
                if (this.data_from_db) {
                    for (i = 0; i < this.data_from_db.length; i++) {
                        this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
                    }
                }
                data_rtrn = [];
                if (this.data_from_db) {
                    this.data_from_db.forEach(function (data) {
                        if (!data.placement)
                            data.placement = 0;
                        if (!data.available_stock)
                            data.available_stock = 0;
                        if (data.available_stock + data.placement > 0) {
                            data_rtrn.push(data.product_id);
                            data.placement = null;
                            data.available_stock = null;
                        }
                    });
                }
                this.storage.set("data_p3", data_rtrn)
                    .then(function () {
                    data_rtrn = null;
                    _this.storage.get("data_p3")
                        .then(function (data) {
                        console.log("data_p3" + data);
                    });
                });
                this.storage.get('data_p2').then(function (data_p2) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert_1;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(data_p2 == JSON.stringify(this.data_from_db))) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        message: 'Êtes vous sûre de vouloir continuer sans rien modifier ?',
                                        buttons: [
                                            {
                                                text: 'Non',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: function (blah) {
                                                }
                                            }, {
                                                text: 'Oui',
                                                handler: function () {
                                                    console.log("188 => ", data_for_nav);
                                                    _this.router.navigate(['page-three', data_for_nav]);
                                                }
                                            }
                                        ]
                                    })];
                            case 1:
                                alert_1 = _a.sent();
                                return [4 /*yield*/, alert_1.present()];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log("196 => ", data_for_nav);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (e) { return console.log(e.message); });
                this.router.navigate(['page-three', data_for_nav]);
                return [2 /*return*/];
            });
        });
    };
    PageTwoPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageTwoPage.prototype.Deconnexion = function () {
        var _this = this;
        src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data2_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data2_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home']);
    };
    PageTwoPage.prototype.show_rowdata = function (rowdata) {
        console.log("p2 310=> ", rowdata);
    };
    PageTwoPage.prototype.get_state = function (rowdata, current_field) {
        var ret = true;
        if (rowdata.manufacturer_name !== "ITG" && current_field == "placement") {
            ret = true;
        }
        else {
            ret = false;
        }
        console.log(ret);
        return ret;
    };
    PageTwoPage.prototype.get_bg_color = function (rowdata, current_field) {
        var ret = "none";
        if (rowdata.manufacturer_name !== "ITG" && current_field == "placement") {
            ret = "#d3d3d3";
        }
        else {
            ret = "none";
        }
        console.log(ret);
        return ret;
    };
    PageTwoPage.prototype.get_pointer = function (rowData, current_field) {
        var ret = "none";
        if (rowData.manufacturer_name !== "ITG" && current_field == "placement") {
            ret = "none";
        }
        else {
            ret = "auto";
        }
        console.log(ret);
        return ret;
    };
    PageTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-two',
            template: __webpack_require__(/*! ./page-two.page.html */ "./src/app/fiche-visite/page-two/page-two.page.html"),
            styles: [__webpack_require__(/*! ./page-two.page.scss */ "./src/app/fiche-visite/page-two/page-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], PageTwoPage);
    return PageTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=fiche-visite-page-two-page-two-module.js.map