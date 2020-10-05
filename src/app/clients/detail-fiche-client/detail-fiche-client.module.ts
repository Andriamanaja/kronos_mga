import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {MatChipsModule} from '@angular/material/chips';

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
import { MessageService, DialogService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { TagInputModule } from 'ngx-chips';
import {MenuModule} from 'primeng/menu';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HeaderPage } from 'src/app/header/header.page';
import { HeadModule } from 'src/app/head/head.module';

const routes: Routes = [
  {
    path: '',
    component: DetailFicheClientPage
  }
];

@NgModule({
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
    DynamicDialogModule,
    DialogModule,
    TagInputModule,
    MatChipsModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeadModule,
    AutoCompleteModule
  ],
  declarations: [DetailFicheClientPage ] ,
  providers : [
    DialogService ,
    MessageService,
    PhotoViewer
  ]
})
export class DetailFicheClientPageModule {}
