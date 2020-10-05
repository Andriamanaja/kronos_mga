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
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { DialogModule } from 'primeng/dialog';
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
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
                ReactiveFormsModule,
<<<<<<< HEAD
=======
                DialogModule,
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                FormlyModule.forRoot(),
                FormlyIonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PageSevenPage],
            providers: [MessageService]
        })
    ], PageSevenPageModule);
    return PageSevenPageModule;
}());
export { PageSevenPageModule };
//# sourceMappingURL=page-seven.module.js.map