import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImgtestPage } from './imgtest.page';

import { FormlyIonicModule } from '@ngx-formly/ionic' ;
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {
    path: '',
    component: ImgtestPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    //FormlyPrimeNGModule,
    //FormlyIonicModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  providers : [
  ],
  declarations: [ImgtestPage]
})
export class ImgtestPageModule {}
