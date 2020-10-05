import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailTourneePage } from './detail-tournee.page';
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
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { MessageService, DialogService } from 'primeng/api';
var routes = [
    {
        path: '',
        component: DetailTourneePage
    }
];
var DetailTourneePageModule = /** @class */ (function () {
    function DetailTourneePageModule() {
    }
    DetailTourneePageModule = tslib_1.__decorate([
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
                BreadcrumbModule,
                TabViewModule,
                CardModule,
                ToastModule,
                DialogModule,
                TableModule,
                DynamicDialogModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetailTourneePage],
            providers: [
                DialogService,
                MessageService,
            ]
        })
    ], DetailTourneePageModule);
    return DetailTourneePageModule;
}());
export { DetailTourneePageModule };
//# sourceMappingURL=detail-tournee.module.js.map