import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
import { TableModule, Table, EditableRow } from 'primeng/table';
import { MessageService, DialogService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {MenuModule} from 'primeng/menu';
import { HeaderPage } from 'src/app/header/header.page';
import { HeadModule } from 'src/app/head/head.module';

const routes: Routes = [
  {
    path: '',
    component: DetailTourneePage
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
    DialogModule,
    TableModule,
    DynamicDialogModule,
    AutoCompleteModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeadModule
  ],
  declarations: [DetailTourneePage ] ,
  providers : [
    DialogService ,
    MessageService ,
    Table,
    
  ]
})
export class DetailTourneePageModule {}
