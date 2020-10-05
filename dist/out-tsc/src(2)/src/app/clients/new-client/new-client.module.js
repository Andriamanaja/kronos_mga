import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { NewClientPage } from './new-client.page';
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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
var routes = [
    {
        path: '',
        component: NewClientPage
    }
];
var NewClientPageModule = /** @class */ (function () {
    function NewClientPageModule() {
    }
    NewClientPageModule = tslib_1.__decorate([
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
                ToastModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewClientPage],
            providers: [Camera, Geolocation, MessageService]
        })
    ], NewClientPageModule);
    return NewClientPageModule;
}());
export { NewClientPageModule };
//# sourceMappingURL=new-client.module.js.map