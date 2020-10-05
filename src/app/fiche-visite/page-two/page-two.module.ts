import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { KeyFilterModule } from 'primeng/keyfilter';
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

import { PageTwoPage } from './page-two.page';
import {MenuModule} from 'primeng/menu';
import { HeaderPage } from 'src/app/header/header.page';
import { HeadModule } from 'src/app/head/head.module';

const routes: Routes = [
  {
    path: '',
    component: PageTwoPage
  }
];

@NgModule({
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
    KeyFilterModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeadModule
  ],
  declarations: [PageTwoPage ],
  providers : [MessageService]
})
export class PageTwoPageModule {}
