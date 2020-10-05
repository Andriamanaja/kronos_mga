import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageTwoPage } from './page-two.page';
var routes = [
    {
        path: '',
        component: PageTwoPage
    }
];
var PageTwoPageModule = /** @class */ (function () {
    function PageTwoPageModule() {
    }
    PageTwoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageTwoPage]
        })
    ], PageTwoPageModule);
    return PageTwoPageModule;
}());
export { PageTwoPageModule };
//# sourceMappingURL=page-two.module.js.map