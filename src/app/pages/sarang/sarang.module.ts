import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SarangPageRoutingModule } from './sarang-routing.module';

import { SarangPage } from './sarang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SarangPageRoutingModule
  ],
  declarations: [SarangPage]
})
export class SarangPageModule {}
