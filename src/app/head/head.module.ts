import { HeadComponent } from "./head.component"
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports : [
        MenuModule,  
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations : [HeadComponent] ,
    exports : [HeadComponent] ,
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeadModule {}