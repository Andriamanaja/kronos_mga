(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tournees-liste-tournee-liste-tournee-module"],{

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



/***/ }),

/***/ "./src/app/tournees/liste-tournee/liste-tournee.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tournees/liste-tournee/liste-tournee.module.ts ***!
  \****************************************************************/
/*! exports provided: ListeTourneePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeTourneePageModule", function() { return ListeTourneePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _liste_tournee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liste-tournee.page */ "./src/app/tournees/liste-tournee/liste-tournee.page.ts");
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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_head_head_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/head/head.module */ "./src/app/head/head.module.ts");




















var routes = [
    {
        path: '',
        component: _liste_tournee_page__WEBPACK_IMPORTED_MODULE_6__["ListeTourneePage"]
    }
];
var ListeTourneePageModule = /** @class */ (function () {
    function ListeTourneePageModule() {
    }
    ListeTourneePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                primeng_table__WEBPACK_IMPORTED_MODULE_17__["TableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_18__["MenuModule"],
                src_app_head_head_module__WEBPACK_IMPORTED_MODULE_19__["HeadModule"]
                //HeaderPageModule
            ],
            declarations: [_liste_tournee_page__WEBPACK_IMPORTED_MODULE_6__["ListeTourneePage"]],
            providers: []
        })
    ], ListeTourneePageModule);
    return ListeTourneePageModule;
}());



/***/ }),

/***/ "./src/app/tournees/liste-tournee/liste-tournee.page.html":
/*!****************************************************************!*\
  !*** ./src/app/tournees/liste-tournee/liste-tournee.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <!-- HEAD -->\r\n    <div class=\"head\">\r\n      <div class=\"back_button\">\r\n        <span>\r\n          <img src=\"../../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"menu\">\r\n        <div class=\"list_icon\">\r\n          <i class=\"fas fa-at\"\r\n            style=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-comments\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-ban on fa-camera\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n        </div>\r\n      </div>\r\n\r\n       <app-head></app-head>\r\n      \r\n    </div>\r\n    <!-- HEAD -->\r\n\r\n    <div class=\"body\">\r\n      <div class=\"title_body\">\r\n        <h3>Tournées</h3>\r\n      </div>\r\n      <div class=\"list_tournee\">\r\n        <p-table #dt  [columns]=\"cols\" [value]=\"data\" [paginator]=\"true\" [paginatorPosition]=\"'top'\" [rows]=\"20\"\r\n          [(selection)]=\"selected\" dataKey=\"name\" (onRowSelect)=\"onRowSelect($event)\"\r\n          (onRowUnselect)=\"onRowUnselect($event)\" class=\"tableau\">\r\n\r\n          <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n              <i class=\"fas fa-search\" style=\"margin: 4px 4px 0 0 ; color: gray; font-size: 20px;\"></i>\r\n              <input type=\"text\" pInputText size=\"20\" placeholder=\"Filtrer\"\r\n                (input)=\"dt.filterGlobal($event.target.value, 'contains')\">\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngStyle]=\"{'display': col.display}\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n              <td *ngFor=\"let col of columns\" (click)=\"onRowClicked(rowData)\" [ngStyle]=\"{'display': col.display}\">\r\n                {{rowData[col.field]}}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tournees/liste-tournee/liste-tournee.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/tournees/liste-tournee/liste-tournee.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 6px;\n  margin-top: 0px;\n  padding-top: 10px; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  padding-top: 13px;\n  height: 48px;\n  padding-bottom: 13px;\n  display: contents; }\n\n.table {\n  margin-top: 2px;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.tableau th {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC90b3VybmVlcy9saXN0ZS10b3VybmVlL2xpc3RlLXRvdXJuZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b3VybmVlcy9saXN0ZS10b3VybmVlL2xpc3RlLXRvdXJuZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4IDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuX253X2Nye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmJ0e1xyXG4gICAgbWFyZ2luLWxlZnQgOiAycHhcclxufVxyXG5cclxuLnRpdGxlX2JvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi50YWJsZWF1IHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgO1xyXG59XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/tournees/liste-tournee/liste-tournee.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/tournees/liste-tournee/liste-tournee.page.ts ***!
  \**************************************************************/
/*! exports provided: ListeTourneePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeTourneePage", function() { return ListeTourneePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/helper/auth */ "./src/app/model/helper/auth.ts");






var ListeTourneePage = /** @class */ (function () {
    function ListeTourneePage(activeroute, dbm, router, storage) {
        this.activeroute = activeroute;
        this.dbm = dbm;
        this.router = router;
        this.storage = storage;
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
    }
    ListeTourneePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (data) {
            _this.color_icon = data["color"];
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data['unsynced'] },
            ];
        });
        this.cols = [
            { field: 'id', header: 'id', display: 'none' },
            { field: 'x_odoo_id', header: 'x_odoo_id', display: 'none' },
            { field: 'commercial', header: 'commercial', display: 'none' },
            { field: 'name', header: 'Nom', display: 'table-cell' },
            { field: 'date', header: 'Date prévue', display: 'table-cell' },
            { field: 'state', header: 'Etat', display: 'table-cell' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'end_date', display: 'none' },
        ];
    };
    ListeTourneePage.prototype.go_sync = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
            _this.router.navigate(["synchro"], _this.navigationExtras);
        });
    };
    ListeTourneePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.get_active_user().then(function (data) {
            _this.user_id = data.id;
            _this.dbm.get_all_tournees_by_user(_this.user_id)
                .then(function (data) {
                if (data) {
                    _this.data = data;
                    for (var i = 0; i < _this.data.length; i++) {
                        if (_this.data[i].state == "nouveau") {
                            _this.data[i].state = "Nouvelle";
                        }
                        if (_this.data[i].state == "cloture") {
                            _this.data[i].state = "Clôturée";
                        }
                        if (_this.data[i].state == "demarre") {
                            _this.data[i].state = "Démarrée";
                        }
                    }
                }
            })
                .catch(function (e) { return alert(e.message); });
        });
        this.dbm.verify_data().then(function (data) {
            _this.x = data;
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
    };
    ListeTourneePage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu'], this.navigationExtras);
    };
    ListeTourneePage.prototype.open_nouveau_client = function () {
        this.router.navigate(['new-client'], this.navigationExtras);
    };
    ListeTourneePage.prototype.onRowSelect = function (event) {
    };
    ListeTourneePage.prototype.onRowUnselect = function (event) {
    };
    ListeTourneePage.prototype.onRowClicked = function (rowData) {
        var navigationExtras = {
            queryParams: {
                "id": rowData.id,
                "x_odoo_id": rowData.x_odoo_id,
                "commercial": rowData.commercial,
                "name": rowData.name,
                "status": rowData.state,
                "date_prevue": rowData.date,
                "date_debut": rowData.start_date,
                "date_fin": rowData.end_date,
                "color": this.x.color,
                "unsynced": this.x.non_synced
            }
        };
        //this.data_router.storage = rowData.id ;
        this.router.navigate(['detail-tournee'], navigationExtras);
    };
    ListeTourneePage.prototype.Deconnexion = function () {
        var _this = this;
        src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    ListeTourneePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liste-tournee',
            template: __webpack_require__(/*! ./liste-tournee.page.html */ "./src/app/tournees/liste-tournee/liste-tournee.page.html"),
            styles: ["\n        \n    ", __webpack_require__(/*! ./liste-tournee.page.scss */ "./src/app/tournees/liste-tournee/liste-tournee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ListeTourneePage);
    return ListeTourneePage;
}());



/***/ })

}]);
//# sourceMappingURL=tournees-liste-tournee-liste-tournee-module.js.map