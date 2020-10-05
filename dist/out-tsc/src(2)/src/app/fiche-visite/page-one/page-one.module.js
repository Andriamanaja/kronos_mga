import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageOnePage } from './page-one.page';
var routes = [
    {
        path: '',
        component: PageOnePage
    }
];
var PageOnePageModule = /** @class */ (function () {
    function PageOnePageModule() {
    }
    PageOnePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageOnePage]
        })
    ], PageOnePageModule);
    return PageOnePageModule;
}());
export { PageOnePageModule };
//# sourceMappingURL=page-one.module.js.map