import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var PageOnePage = /** @class */ (function () {
    function PageOnePage() {
    }
    PageOnePage.prototype.ngOnInit = function () {
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
    };
    PageOnePage = tslib_1.__decorate([
        Component({
            selector: 'app-page-one',
            templateUrl: './page-one.page.html',
            styleUrls: ['./page-one.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PageOnePage);
    return PageOnePage;
}());
export { PageOnePage };
//# sourceMappingURL=page-one.page.js.map