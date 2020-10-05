import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
var PageFourPage = /** @class */ (function () {
    function PageFourPage(dbm, router, activatedRoute, storage) {
        this.dbm = dbm;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.qz = new Array();
        this.edit = false;
    }
    PageFourPage.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
        });
<<<<<<< HEAD
        this.dbm.get_audit_data_p4().then(function (data) {
=======
        this.init_data();
    };
    PageFourPage.prototype.init_data = function () {
        var _this = this;
        this.dbm.get_audit_data_p4(this.data_from_route.visit_sheet_id).then(function (data) {
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            _this.pos_audit_data = data;
            var quizz;
            for (var i = 0; i < _this.pos_audit_data.length; i++) {
                var ans_id = _this.pos_audit_data[i].answer_id.split('|');
                var ans_name = _this.pos_audit_data[i].answer_name.split('|');
                var q = void 0;
                var k = new Array();
                k.push({ "value": "", "label": "" });
                for (var x = 0; x < ans_id.length; x++) {
                    q = { "value": ans_name[x], "label": ans_name[x] };
                    k.push(q);
                }
                _this.pos_audit_data[i].answer_name = k;
            }
            console.log("quizz ==>", _this.pos_audit_data);
        });
    };
    PageFourPage.prototype.page_three = function () {
        this.router.navigate(['page-three']);
    };
    PageFourPage.prototype.page_five = function () {
        var navigation_extra = {
            queryParams: {
                data: this.dt
            }
        };
        this.router.navigate(['page-five'], navigation_extra);
    };
    PageFourPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageFourPage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
<<<<<<< HEAD
=======
    PageFourPage.prototype.save = function () {
        this.dbm.update_response(this.data_from_route.visit_sheet_id, this.pos_audit_data);
        this.init_data();
        this.enable_edit();
    };
    PageFourPage.prototype.cancel = function () {
        alert('action canceled');
        this.init_data();
        this.enable_edit();
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageFourPage = tslib_1.__decorate([
        Component({
            selector: 'app-page-four',
            templateUrl: './page-four.page.html',
            styleUrls: ['./page-four.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Database_manager, Router, ActivatedRoute, Storage])
    ], PageFourPage);
    return PageFourPage;
}());
export { PageFourPage };
//# sourceMappingURL=page-four.page.js.map