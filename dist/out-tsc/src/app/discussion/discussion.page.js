import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
var DiscussionPage = /** @class */ (function () {
    function DiscussionPage(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    DiscussionPage.prototype.ngOnInit = function () {
    };
    DiscussionPage.prototype.open_menu = function () {
        this.storage.set("last", "discussion");
        this.router.navigate(['menu']);
    };
    DiscussionPage = tslib_1.__decorate([
        Component({
            selector: 'app-discussion',
            templateUrl: './discussion.page.html',
            styleUrls: ['./discussion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, Storage])
    ], DiscussionPage);
    return DiscussionPage;
}());
export { DiscussionPage };
//# sourceMappingURL=discussion.page.js.map