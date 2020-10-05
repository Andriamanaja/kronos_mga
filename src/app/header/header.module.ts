import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeaderPage } from './header.page';
import { MenuModule } from 'primeng/menu';

const routes: Routes = [
  {
    path: '',
    component: HeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderPage],
  exports : [HeaderPage]
})
export class HeaderPageModule {}
