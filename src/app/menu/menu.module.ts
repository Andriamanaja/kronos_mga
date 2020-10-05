import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';
import {MenuModule} from 'primeng/menu';
import { MenuPage } from './menu.page';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HeadModule } from '../head/head.module';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MessagesModule,
    MessageModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeadModule
  ],
  declarations: [MenuPage],
  providers : [ MessageService ]
})
export class MenuPageModule {}
