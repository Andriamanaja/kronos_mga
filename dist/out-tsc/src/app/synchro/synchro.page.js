import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD
var SynchroPage = /** @class */ (function () {
    function SynchroPage(fb) {
        this.fb = fb;
=======
import { OdooService } from '../services/odoo.service';
var SynchroPage = /** @class */ (function () {
    function SynchroPage(fb, service) {
        this.fb = fb;
        this.service = service;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    }
    SynchroPage.prototype.ngOnInit = function () {
        this.sync = this.fb.group({
            "database": ["", Validators.required],
<<<<<<< HEAD
            "user": ["", Validators.required],
=======
            "username": ["", Validators.required],
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            "password": ["", Validators.required]
        });
    };
    SynchroPage.prototype.synchroniser = function () {
<<<<<<< HEAD
=======
        this.service.synchronise(this.sync.value);
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    };
    SynchroPage = tslib_1.__decorate([
        Component({
            selector: 'app-synchro',
            templateUrl: './synchro.page.html',
            styleUrls: ['./synchro.page.scss'],
        }),
<<<<<<< HEAD
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
=======
        tslib_1.__metadata("design:paramtypes", [FormBuilder, OdooService])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], SynchroPage);
    return SynchroPage;
}());
export { SynchroPage };
//# sourceMappingURL=synchro.page.js.map