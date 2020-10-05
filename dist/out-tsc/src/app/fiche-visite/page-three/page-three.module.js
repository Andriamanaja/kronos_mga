import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
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
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
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
                CheckboxModule,
                TableModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageThreePage],
            providers: [MessageService]
        })
    ], PageThreePageModule);
    return PageThreePageModule;
}());
export { PageThreePageModule };
//# sourceMappingURL=page-three.module.js.map