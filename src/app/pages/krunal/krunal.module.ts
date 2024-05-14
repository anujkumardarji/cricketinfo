import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KrunalPageRoutingModule } from './krunal-routing.module';

import { KrunalPage } from './krunal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KrunalPageRoutingModule
  ],
  declarations: [KrunalPage]
})
export class KrunalPageModule {}
