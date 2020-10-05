import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageSixPage } from './page-six.page';
var routes = [
    {
        path: '',
        component: PageSixPage
    }
];
var PageSixPageModule = /** @class */ (function () {
    function PageSixPageModule() {
    }
    PageSixPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageSixPage]
        })
    ], PageSixPageModule);
    return PageSixPageModule;
}());
export { PageSixPageModule };
//# sourceMappingURL=page-six.module.js.map