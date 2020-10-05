import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { Database_manager } from './model/DAO/database_manager.model';
import { Data } from './model/data/data.model';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            entryComponents: [],
            imports: [
                BrowserModule,
                Ng2SearchPipeModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                BrowserAnimationsModule,
                HttpClientModule,
                LeafletModule.forRoot(),
                IonicStorageModule.forRoot({
                    name: 'imp_tob',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                FormlyModule.forRoot(),
                FormlyIonicModule,
            ],
            providers: [
                Database_manager,
                StatusBar,
                SplashScreen,
                SQLite,
                Data,
                Camera,
                Geolocation,
                FullScreenImage,
                Ng6OdooRPCService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map