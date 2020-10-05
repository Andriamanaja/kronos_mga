import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageFourPage } from './page-four.page';
var routes = [
    {
        path: '',
        component: PageFourPage
    }
];
var PageFourPageModule = /** @class */ (function () {
    function PageFourPageModule() {
    }
    PageFourPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageFourPage]
        })
    ], PageFourPageModule);
    return PageFourPageModule;
}());
export { PageFourPageModule };
//# sourceMappingURL=page-four.module.js.map