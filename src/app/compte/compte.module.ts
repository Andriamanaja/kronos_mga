import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComptePage } from './compte.page';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { HeaderPage } from '../header/header.page';
import { HeadModule } from '../head/head.module';

const routes: Routes = [
  {
    path: '',
    component: ComptePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    HeadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComptePage ] ,

})
export class ComptePageModule {}
