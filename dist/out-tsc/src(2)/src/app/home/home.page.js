import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { Database_manager } from '../model/DAO/database_manager.model';
import { ToastController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(formbuilder, messageService, router, dbm, toast) {
        this.formbuilder = formbuilder;
        this.messageService = messageService;
        this.router = router;
        this.dbm = dbm;
        this.toast = toast;
        this.msgs = [];
        this.region = [];
        this.userFormGroup = this.formbuilder.group({
            "login": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbm.select_basic_data("i_t_region").then(function (data) {
            _this.region = data;
            if (_this.region.length == 0) {
                _this.dbm.init_table_data();
            }
        });
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then(function (result) {
            console.log(result);
            switch (result) {
                case 0: {
                    _this.makeToast("Mot de passe incorrect !");
                    break;
                }
                case 1: {
                    _this.router.navigate(['menu']);
                    break;
                }
                case -1: {
                    _this.makeToast("Login incorrect !");
                    break;
                }
            }
        });
    };
    HomePage.prototype.makeToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x;
            return tslib_1.__generator(this, function (_a) {
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
    HomePage.prototype.direct = function () {
        this.router.navigate(['detail-tournee']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            MessageService,
            Router,
            Database_manager,
            ToastController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map