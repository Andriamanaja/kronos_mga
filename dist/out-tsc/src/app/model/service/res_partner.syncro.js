import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url_for_sync, httpOptions } from 'src/environments/environment';
var ser_partner_sync = /** @class */ (function () {
    function ser_partner_sync(http) {
        this.http = http;
    }
    ser_partner_sync.prototype.get_res_patner_from_server = function () {
        return this.http.get(base_url_for_sync + '/get_all_res_partner', httpOptions);
    };
    ser_partner_sync.prototype.post_res_patner_for_server = function (list_res_patner) {
        return this.http.post(base_url_for_sync, list_res_patner, httpOptions);
    };
    ser_partner_sync = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ser_partner_sync);
    return ser_partner_sync;
}());
export { ser_partner_sync };
//# sourceMappingURL=res_partner.syncro.js.map