import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageFivePage } from './page-five.page';
var routes = [
    {
        path: '',
        component: PageFivePage
    }
];
var PageFivePageModule = /** @class */ (function () {
    function PageFivePageModule() {
    }
    PageFivePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageFivePage]
        })
    ], PageFivePageModule);
    return PageFivePageModule;
}());
export { PageFivePageModule };
//# sourceMappingURL=page-five.module.js.map