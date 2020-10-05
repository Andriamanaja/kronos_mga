(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discussion-discussion-module"],{

/***/ "./src/app/discussion/discussion.module.ts":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.module.ts ***!
  \*************************************************/
/*! exports provided: DiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/app/discussion/discussion.page.ts");
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
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_19__);




















var routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]
    }
];
var DiscussionPageModule = /** @class */ (function () {
    function DiscussionPageModule() {
    }
    DiscussionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_19__["MenuModule"]
            ],
            declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]]
        })
    ], DiscussionPageModule);
    return DiscussionPageModule;
}());



/***/ }),

/***/ "./src/app/discussion/discussion.page.html":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class = \"container\">\r\n\r\n        <!-- HEAD -->\r\n        <div class = \"head\">\r\n          <div class=\"back_button\" >\r\n            <i class=\"pi pi-th-large\" style=\"font-size: 24px ; color: white\"></i>\r\n          </div>\r\n  \r\n          <div class = \"menu\">\r\n            <div class=\"list_icon\">\r\n              <i class=\"pi pi-envelope\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n              <i class=\"pi pi-comments\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n              <i class=\"pi pi-user\" style=\"font-size: 24px ; color: white ; margin-right: 6px\"></i>\r\n            </div> \r\n          </div>\r\n\r\n           <app-head></app-head>\r\n          \r\n        </div>\r\n        <!-- HEAD -->\r\n\r\n        <div class=\"body\">\r\n          <div class = \"title_body\">\r\n            <h3>#Boîte de réception</h3>\r\n            <div class = \"btn_nw_cr\">\r\n              <button pButton type=\"button\" label=\"CRÉER\"     class=\"bt ui-button-success\"></button>\r\n              <button pButton type=\"button\" label=\"IMPORTER\"  class=\"bt ui-button-secondary\"></button>\r\n            </div>\r\n          </div>\r\n          <div class = \"table\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"footer\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/discussion/discussion.page.scss":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-position: center;\n  background-image: url(/web_enterprise/static/src/img/application-switcher-bg.jpg);\n  background-size: cover;\n  background-color: #797083;\n  background: -o-linear-gradient(135deg, #c59b9c, #797083);\n  background: -webkit-gradient(linear, left top, right bottom, from(#c59b9c), to(#797083));\n  width: 100%;\n  height: 100%; }\n\n.head {\n  background-color: #875A7B;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 10% 80% 10%; }\n\n.back_button i {\n  vertical-align: -webkit-baseline-middle;\n  margin-top: 8px; }\n\n.menu_icon i {\n  vertical-align: -webkit-baseline-middle;\n  margin-top: 8px; }\n\n.menu_icon {\n  text-align: -webkit-center; }\n\n.back_button {\n  text-align: -webkit-center; }\n\n.list_icon {\n  text-align: end;\n  margin-right: 14px; }\n\n.list_icon i {\n  vertical-align: -webkit-baseline-middle;\n  margin-top: 8px;\n  margin-bottom: 8px; }\n\n.body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 6px;\n  margin-top: 0px; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  padding-top: 13px;\n  height: 48px;\n  padding-bottom: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9kaXNjdXNzaW9uL2Rpc2N1c3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLGlGQUFpRjtFQUlqRixzQkFBc0I7RUFDdEIseUJBQXlCO0VBRXpCLHdEQUF3RDtFQUN4RCx3RkFBd0Y7RUFDekYsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHVDQUF1QztFQUN2QyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3dlYl9lbnRlcnByaXNlL3N0YXRpYy9zcmMvaW1nL2FwcGxpY2F0aW9uLXN3aXRjaGVyLWJnLmpwZyk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTcwODM7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3OTcwODMsICNjNTliOWMpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2M1OWI5YywgIzc5NzA4Myk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjYzU5YjljKSwgdG8oIzc5NzA4MykpO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAuaGVhZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg3NUE3QjtcclxuICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA4MCUgMTAlO1xyXG4gfVxyXG4gXHJcbiAuYmFja19idXR0b24gaSB7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xyXG4gICAgIG1hcmdpbi10b3A6IDhweDtcclxuIH1cclxuIFxyXG4gLm1lbnVfaWNvbiBpIHtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XHJcbiAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gfVxyXG4gXHJcbiAubWVudV9pY29uICB7XHJcbiAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5iYWNrX2J1dHRvbiB7XHJcbiAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5saXN0X2ljb24ge1xyXG4gICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiB9XHJcbiBcclxuIC5saXN0X2ljb24gaXtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XHJcbiAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuIH1cclxuLmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4IDtcclxufVxyXG5cclxuLmJ0bl9ud19jcntcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idHtcclxuICAgIG1hcmdpbi1sZWZ0IDogMnB4XHJcbn1cclxuXHJcbi50aXRsZV9ib2R5e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/discussion/discussion.page.ts":
/*!***********************************************!*\
  !*** ./src/app/discussion/discussion.page.ts ***!
  \***********************************************/
/*! exports provided: DiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPage", function() { return DiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");






var DiscussionPage = /** @class */ (function () {
    function DiscussionPage(router, storage, dbm) {
        this.router = router;
        this.storage = storage;
        this.dbm = dbm;
    }
    DiscussionPage.prototype.ngOnInit = function () {
        this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
        ];
    };
    DiscussionPage.prototype.open_menu = function () {
        this.storage.set("last", "discussion");
        this.router.navigate(['menu']);
    };
    DiscussionPage.prototype.Deconnexion = function () {
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
    DiscussionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion',
            template: __webpack_require__(/*! ./discussion.page.html */ "./src/app/discussion/discussion.page.html"),
            styles: [__webpack_require__(/*! ./discussion.page.scss */ "./src/app/discussion/discussion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], src_app_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"]])
    ], DiscussionPage);
    return DiscussionPage;
}());



/***/ })

}]);
//# sourceMappingURL=discussion-discussion-module.js.map