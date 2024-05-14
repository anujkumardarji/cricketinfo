import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManishPageRoutingModule } from './manish-routing.module';

import { ManishPage } from './manish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManishPageRoutingModule
  ],
  declarations: [ManishPage]
})
export class ManishPageModule {}
