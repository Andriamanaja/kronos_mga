import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.test = function () {
        var params = {
            database: "it",
            username: "admin",
            password: "Admin123"
        };
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions).subscribe(function (data) {
            console.log(data);
        });
    };
    TestService.prototype.test_2 = function () {
        var params = {
            model: "itg.manufacturer",
            method: "create",
            args: [
                { "name": "test", "sequence": 10 }
            ]
        };
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions).subscribe(function (data) {
            console.log(data);
        });
    };
    TestService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TestService);
    return TestService;
}());
export { TestService };
//# sourceMappingURL=test.service.js.map