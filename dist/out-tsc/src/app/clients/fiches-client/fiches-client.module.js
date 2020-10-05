import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FichesClientPage } from './fiches-client.page';
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { Database_manager } from '../../model/DAO/database_manager.model';
var routes = [
    {
        path: '',
        component: FichesClientPage
    }
];
var FichesClientPageModule = /** @class */ (function () {
    function FichesClientPageModule() {
    }
    FichesClientPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                ReactiveFormsModule,
                CommonModule,
                FormsModule,
                IonicModule,
                ChartModule,
                FullCalendarModule,
                ButtonModule,
                DropdownModule,
                SidebarModule,
                InputTextModule,
                AccordionModule,
                PasswordModule,
                MessagesModule,
                MessageModule,
                TableModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FichesClientPage],
            providers: [
                Database_manager,
            ]
        })
    ], FichesClientPageModule);
    return FichesClientPageModule;
}());
export { FichesClientPageModule };
//# sourceMappingURL=fiches-client.module.js.map