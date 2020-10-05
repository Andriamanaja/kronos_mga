import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailFicheClientPage } from './detail-fiche-client.page';
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
<<<<<<< HEAD
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonicImageViewerModule } from 'ionic-img-viewer';
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
var routes = [
    {
        path: '',
        component: DetailFicheClientPage
    }
];
var DetailFicheClientPageModule = /** @class */ (function () {
    function DetailFicheClientPageModule() {
    }
    DetailFicheClientPageModule = tslib_1.__decorate([
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
<<<<<<< HEAD
                IonicImageViewerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetailFicheClientPage],
            providers: [
                MessageService,
                PhotoViewer
            ]
=======
                RouterModule.forChild(routes)
            ],
            declarations: [DetailFicheClientPage],
            providers: [MessageService]
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        })
    ], DetailFicheClientPageModule);
    return DetailFicheClientPageModule;
}());
export { DetailFicheClientPageModule };
//# sourceMappingURL=detail-fiche-client.module.js.map