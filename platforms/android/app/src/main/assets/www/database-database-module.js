(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["database-database-module"],{

/***/ "./src/app/database/database.module.ts":
/*!*********************************************!*\
  !*** ./src/app/database/database.module.ts ***!
  \*********************************************/
/*! exports provided: DatabasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasePageModule", function() { return DatabasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database.page */ "./src/app/database/database.page.ts");







var routes = [
    {
        path: '',
        component: _database_page__WEBPACK_IMPORTED_MODULE_6__["DatabasePage"]
    }
];
var DatabasePageModule = /** @class */ (function () {
    function DatabasePageModule() {
    }
    DatabasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_database_page__WEBPACK_IMPORTED_MODULE_6__["DatabasePage"]]
        })
    ], DatabasePageModule);
    return DatabasePageModule;
}());



/***/ }),

/***/ "./src/app/database/database.page.html":
/*!*********************************************!*\
  !*** ./src/app/database/database.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>database</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/database/database.page.scss":
/*!*********************************************!*\
  !*** ./src/app/database/database.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlL2RhdGFiYXNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/database/database.page.ts":
/*!*******************************************!*\
  !*** ./src/app/database/database.page.ts ***!
  \*******************************************/
/*! exports provided: DatabasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasePage", function() { return DatabasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatabasePage = /** @class */ (function () {
    function DatabasePage() {
    }
    DatabasePage.prototype.ngOnInit = function () {
    };
    DatabasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.page.html */ "./src/app/database/database.page.html"),
            styles: [__webpack_require__(/*! ./database.page.scss */ "./src/app/database/database.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatabasePage);
    return DatabasePage;
}());



/***/ })

}]);
//# sourceMappingURL=database-database-module.js.map