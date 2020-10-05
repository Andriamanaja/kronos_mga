import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPage } from './map.page';
var routes = [
    {
        path: '',
        component: MapPage
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                LeafletModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MapPage]
        })
    ], MapPageModule);
    return MapPageModule;
}());
export { MapPageModule };
//# sourceMappingURL=map.module.js.map