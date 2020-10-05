import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
    { path: 'fiches-client', loadChildren: './clients/fiches-client/fiches-client.module#FichesClientPageModule' },
    { path: 'new-client', loadChildren: './clients/new-client/new-client.module#NewClientPageModule' },
    { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
    { path: 'detail-fiche-client', loadChildren: './clients/detail-fiche-client/detail-fiche-client.module#DetailFicheClientPageModule' },
    { path: 'liste-tournee', loadChildren: './tournees/liste-tournee/liste-tournee.module#ListeTourneePageModule' },
    { path: 'detail-tournee', loadChildren: './tournees/detail-tournee/detail-tournee.module#DetailTourneePageModule' },
    { path: 'fiche-visite', loadChildren: './fiche-visite/fiche-visite.module#FicheVisitePageModule' },
    { path: 'page-one', loadChildren: './fiche-visite/page-one/page-one.module#PageOnePageModule' },
    { path: 'page-two', loadChildren: './fiche-visite/page-two/page-two.module#PageTwoPageModule' },
    { path: 'page-three', loadChildren: './fiche-visite/page-three/page-three.module#PageThreePageModule' },
    { path: 'page-four', loadChildren: './fiche-visite/page-four/page-four.module#PageFourPageModule' },
    { path: 'page-five', loadChildren: './fiche-visite/page-five/page-five.module#PageFivePageModule' },
    { path: 'page-six', loadChildren: './fiche-visite/page-six/page-six.module#PageSixPageModule' },
    { path: 'page-seven', loadChildren: './fiche-visite/page-seven/page-seven.module#PageSevenPageModule' },
    { path: 'new-fiche-visite', loadChildren: './fiche-visite/new-fiche-visite/new-fiche-visite.module#NewFicheVisitePageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map