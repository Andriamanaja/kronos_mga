import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
var TourneesPage = /** @class */ (function () {
    function TourneesPage(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    TourneesPage.prototype.ngOnInit = function () {
    };
    TourneesPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    TourneesPage = tslib_1.__decorate([
        Component({
            selector: 'app-tournees',
            templateUrl: './tournees.page.html',
            styleUrls: ['./tournees.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, Storage])
    ], TourneesPage);
    return TourneesPage;
}());
export { TourneesPage };
//# sourceMappingURL=tournees.page.js.map