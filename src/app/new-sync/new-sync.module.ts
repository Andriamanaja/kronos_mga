import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewSyncPage } from './new-sync.page';
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
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadModule } from '../head/head.module';

const routes: Routes = [
  {
    path: '',
    component: NewSyncPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
    MenuModule ,
    DynamicDialogModule,
    RadioButtonModule,
    HeadModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NewSyncPage]
})
export class NewSyncPageModule {}
