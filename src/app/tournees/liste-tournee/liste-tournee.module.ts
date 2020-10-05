import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeTourneePage } from './liste-tournee.page';
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
import { MenuModule } from 'primeng/menu';
import { HeaderPage } from 'src/app/header/header.page';
import { HeaderPageModule } from 'src/app/header/header.module';
import { HeadModule } from 'src/app/head/head.module';

const routes: Routes = [
  {
    path: '',
    component: ListeTourneePage
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
    TableModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeadModule
    //HeaderPageModule
  ],
  declarations: [ListeTourneePage],
  providers : []
})
export class ListeTourneePageModule {}
