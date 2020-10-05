import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageSevenPage } from './page-seven.page';
var routes = [
    {
        path: '',
        component: PageSevenPage
    }
];
var PageSevenPageModule = /** @class */ (function () {
    function PageSevenPageModule() {
    }
    PageSevenPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageSevenPage]
        })
    ], PageSevenPageModule);
    return PageSevenPageModule;
}());
export { PageSevenPageModule };
//# sourceMappingURL=page-seven.module.js.map