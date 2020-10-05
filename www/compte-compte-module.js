(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compte-compte-module"],{

/***/ "./node_modules/primeng/button.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/button/button */ "./node_modules/primeng/components/button/button.js"));

/***/ }),

/***/ "./node_modules/primeng/components/button/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/components/button/button.js ***!
  \**********************************************************/
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
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    ButtonDirective.prototype.ngAfterViewInit = function () {
        domhandler_1.DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    ButtonDirective.prototype.getStyleClass = function () {
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.initialized) {
                domhandler_1.DomHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                if (!this.icon) {
                    if (this._label) {
                        domhandler_1.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                    else {
                        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                        domhandler_1.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            if (this.initialized) {
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                domhandler_1.DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
                    iconPosClass + ' ui-clickable ' + this.icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.ngOnDestroy = function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "iconPos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "cornerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "label", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "icon", null);
    ButtonDirective = __decorate([
        core_1.Directive({
            selector: '[pButton]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;
var Button = /** @class */ (function () {
    function Button() {
        this.iconPos = 'left';
        this.onClick = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "iconPos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Button.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onBlur", void 0);
    Button = __decorate([
        core_1.Component({
            selector: 'p-button',
            template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
        })
    ], Button);
    return Button;
}());
exports.Button = Button;
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ButtonDirective, Button],
            declarations: [ButtonDirective, Button]
        })
    ], ButtonModule);
    return ButtonModule;
}());
exports.ButtonModule = ButtonModule;
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./src/app/compte/compte.module.ts":
/*!*****************************************!*\
  !*** ./src/app/compte/compte.module.ts ***!
  \*****************************************/
/*! exports provided: ComptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptePageModule", function() { return ComptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _compte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compte.page */ "./src/app/compte/compte.page.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _head_head_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../head/head.module */ "./src/app/head/head.module.ts");











var routes = [
    {
        path: '',
        component: _compte_page__WEBPACK_IMPORTED_MODULE_6__["ComptePage"]
    }
];
var ComptePageModule = /** @class */ (function () {
    function ComptePageModule() {
    }
    ComptePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
                _head_head_module__WEBPACK_IMPORTED_MODULE_10__["HeadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_compte_page__WEBPACK_IMPORTED_MODULE_6__["ComptePage"]],
        })
    ], ComptePageModule);
    return ComptePageModule;
}());



/***/ }),

/***/ "./src/app/compte/compte.page.html":
/*!*****************************************!*\
  !*** ./src/app/compte/compte.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\t<div class=\"container\">\r\n\r\n\t\t<!-- HEAD -->\r\n\t\t<div class=\"head\">\r\n\t\t\t<div class=\"back_button\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<img src=\"../../assets/image/logo_itg.png\" (click)=\"open_menu()\" />\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"menu\">\r\n\t\t\t\t<div class=\"list_icon\">\r\n\t\t\t\t\t<i class=\"fas fa-at\"\r\n\t\t\t\t\t\tstyle=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-comments\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t\t<i class=\"fas fa-ban on fa-camera\"\r\n\t\t\t\t\t\tstyle=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t <app-head></app-head>\r\n\t\t</div>\r\n\t\t<!-- HEAD -->\r\n\r\n\r\n\t\t<div class=\"body\">\r\n\t\t\t<div class=\"bg-blanc\">\r\n\r\n\t\t\t\t<div class=\"title_body\">\r\n\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t<a (click)=\"home_page()\">\r\n\t\t\t\t\t\t\t<i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\">\r\n\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\tModifier mot de passe\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"real-content-page\">\r\n\t\t\t\t\t<form class=\"connexion ui-g ui-fluid\" [formGroup]=\"password\" (ngSubmit)=\"changePassword()\">\r\n\r\n\t\t\t\t\t\t<div class=\"ui-g-12 ui-md-3\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Ancien mot de passe</p>\r\n\t\t\t\t\t\t\t<div class=\"ui-inputgroup\">\r\n\t\t\t\t\t\t\t\t<input [type]=\"hide_a ? 'password' : 'text'\" size=\"30\" pInputText\r\n\t\t\t\t\t\t\t\t\tformControlName=\"oldpassword\" required>\r\n\t\t\t\t\t\t\t\t<button (click)=\"hide_psw_a()\" pButton type=\"button\" icon=\"pi pi-eye\"\r\n\t\t\t\t\t\t\t\t\tclass=\"ui-button-warn\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"ui-g-12 ui-md-3\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Nouveau mot de passe</p>\r\n\t\t\t\t\t\t\t<div class=\"ui-inputgroup\">\r\n\t\t\t\t\t\t\t\t<input [type]=\"hide_b ? 'password' : 'text'\" size=\"30\" pInputText\r\n\t\t\t\t\t\t\t\t\tformControlName=\"newpassword\" required>\r\n\t\t\t\t\t\t\t\t<button (click)=\"hide_psw_b()\" pButton type=\"button\" icon=\"pi pi-eye\"\r\n\t\t\t\t\t\t\t\t\tclass=\"ui-button-warn\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"ui-g-12 ui-md-3\">\r\n\t\t\t\t\t\t\t<p class=\"first\">Confirmer mot de passe</p>\r\n\t\t\t\t\t\t\t<div class=\"ui-inputgroup\">\r\n\t\t\t\t\t\t\t\t<input [type]=\"hide_c ? 'password' : 'text'\" size=\"30\" pInputText\r\n\t\t\t\t\t\t\t\t\tformControlName=\"confirmpassword\" required>\r\n\t\t\t\t\t\t\t\t<button (click)=\"hide_psw_c()\" pButton type=\"button\" icon=\"pi pi-eye\"\r\n\t\t\t\t\t\t\t\t\tclass=\"ui-button-warn\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"bouton\">\r\n\t\t\t\t\t\t\t<button pButton type=\"submit\" label=\"CONFIRMER\" class=\"bt2 ui-button-success\"></button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"bouton_visite\">\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-g footer\">\r\n\t\t\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/compte/compte.page.scss":
/*!*****************************************!*\
  !*** ./src/app/compte/compte.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-action-general {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 10px; }\n  .btn-action-general .ui-button-success {\n    padding: 7px 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    background: #21B799;\n    color: #ffffff; }\n  .btn-action-general .ui-button-secondary {\n    padding: 7px 15px;\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #21B799; }\n  .bg-blanc {\n  background: #ffffff;\n  padding-top: 5px;\n  min-height: 94vh; }\n  .breacumb.ui-g {\n  margin-top: 0; }\n  .btn-action-etapes {\n  text-align: right; }\n  .btn-action-etapes button.bt.ui-button-success {\n    padding: 10px 15px; }\n  .ui-button {\n  background-color: #21b799;\n  border: 1px solid #21b799;\n  margin-left: 10px; }\n  .bt2 {\n  height: 50px;\n  width: 80%; }\n  .bouton_visite {\n  text-align: center;\n  margin-top: 5px; }\n  .bouton {\n  margin-top: 25px;\n  width: 50%; }\n  .connexion {\n  width: 70%;\n  margin-left: 15%;\n  text-align: center; }\n  .bouton {\n  margin-top: 20px;\n  width: 50%;\n  margin-left: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9jb21wdGUvY29tcHRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQztFQUNoQyxvQkFBb0IsRUFBQTtFQUZ4QjtJQUlFLGlCQUFpQjtJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYyxFQUFBO0VBVm5CO0lBYUUsaUJBQWlCO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFHbkI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFHSyxrQkFBa0IsRUFBQTtFQUd2QjtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7RUFHckI7RUFDQyxZQUFZO0VBQ1QsVUFBVSxFQUFBO0VBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQU1kO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wdGUvY29tcHRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWN0aW9uLWdlbmVyYWwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHQudWktYnV0dG9uLXN1Y2Nlc3Mge1xyXG5cdFx0cGFkZGluZzogN3B4IDE1cHg7XHJcblx0ICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHQgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0ICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHQgICAgYmFja2dyb3VuZDogIzIxQjc5OTtcclxuXHQgICAgY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cdC51aS1idXR0b24tc2Vjb25kYXJ5IHtcclxuXHRcdHBhZGRpbmc6IDdweCAxNXB4O1xyXG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0ICAgIGNvbG9yOiAjMjFCNzk5O1xyXG5cdH1cclxufVxyXG4uYmctYmxhbmMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA5NHZoO1xyXG59XHJcbi5icmVhY3VtYi51aS1nIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWV0YXBlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJ1dHRvbi5idC51aS1idXR0b24tc3VjY2VzcyB7XHJcblx0ICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHR9XHJcbn1cclxuLnVpLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiNzk5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxYjc5OTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYnQyIHtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uYm91dG9uX3Zpc2l0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5ib3V0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnJlYWwtY29udGVudC1wYWdlIHtcclxuXHJcbn1cclxuXHJcbi5jb25uZXhpb24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3V0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/compte/compte.page.ts":
/*!***************************************!*\
  !*** ./src/app/compte/compte.page.ts ***!
  \***************************************/
/*! exports provided: ComptePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptePage", function() { return ComptePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");








var ComptePage = /** @class */ (function () {
    function ComptePage(act, storage, router, formBuilder, dbm, alertCtrl) {
        this.act = act;
        this.storage = storage;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dbm = dbm;
        this.alertCtrl = alertCtrl;
        this.hide_a = true;
        this.hide_b = true;
        this.hide_c = true;
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
    }
    ;
    ComptePage.prototype.ngOnInit = function () {
        var _this = this;
        this.act.queryParams.subscribe(function (data) {
            _this.color_icon = data["color"];
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data['unsynced'] },
            ];
        });
        this.password = this.formBuilder.group({
            "oldpassword": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "newpassword": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "confirmpassword": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ComptePage.prototype.ionViewWillEnter = function () {
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
    };
    ComptePage.prototype.go_sync = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
            _this.router.navigate(["synchro"], _this.navigationExtras);
        });
    };
    ComptePage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: message,
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
        });
    };
    ComptePage.prototype.changePassword = function () {
        var _this = this;
        var old = this.password.get(['oldpassword']).value;
        var newpassword = this.password.get(['newpassword']).value;
        var confirmpassword = this.password.get(['confirmpassword']).value;
        //le new comparer-na amle confirm
        this.dbm.get_active_user()
            .then(function (user) {
            _this.dbm.check_password(user.id, old)
                .then(function (data) {
                if (data) {
                    if (newpassword == confirmpassword) {
                        _this.dbm.set_new_password(user.id, newpassword);
                        _this.presentAlert('Modification effectuée avec succès');
                    }
                    else {
                        //toast controller
                        _this.presentAlert('Les nouveaux mot de passe ne correspondent pas');
                    }
                }
                else {
                    _this.presentAlert('Votre ancien mot de passe est incorrecte');
                }
            });
        }).catch(function (e) { return console.log("res_user_active_exception : " + e.message); });
    };
    ComptePage.prototype.home_page = function () {
        this.router.navigate(['menu']);
    };
    ComptePage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    ComptePage.prototype.Deconnexion = function () {
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
    ComptePage.prototype.hide_psw_a = function () {
        if (this.hide_a == true) {
            this.hide_a = false;
        }
        else {
            this.hide_a = true;
        }
    };
    ComptePage.prototype.hide_psw_b = function () {
        if (this.hide_b == true) {
            this.hide_b = false;
        }
        else {
            this.hide_b = true;
        }
    };
    ComptePage.prototype.hide_psw_c = function () {
        if (this.hide_c == true) {
            this.hide_c = false;
        }
        else {
            this.hide_c = true;
        }
    };
    ComptePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compte',
            template: __webpack_require__(/*! ./compte.page.html */ "./src/app/compte/compte.page.html"),
            styles: [__webpack_require__(/*! ./compte.page.scss */ "./src/app/compte/compte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], ComptePage);
    return ComptePage;
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
//# sourceMappingURL=compte-compte-module.js.map