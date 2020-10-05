import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageThreePage } from './page-three.page';
var routes = [
    {
        path: '',
        component: PageThreePage
    }
];
var PageThreePageModule = /** @class */ (function () {
    function PageThreePageModule() {
    }
    PageThreePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageThreePage]
        })
    ], PageThreePageModule);
    return PageThreePageModule;
}());
export { PageThreePageModule };
//# sourceMappingURL=page-three.module.js.map