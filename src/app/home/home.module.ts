import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {ChartModule} from 'primeng/chart';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { HomePage } from './home.page';
import { MessageService } from 'primeng/api';
import { TestService } from '../model/service/test.service';


import {ProgressBarModule} from 'primeng/progressbar';


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
    ProgressBarModule ,
    MessageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers : [
    MessageService,
    TestService
  ]
})
export class HomePageModule {}