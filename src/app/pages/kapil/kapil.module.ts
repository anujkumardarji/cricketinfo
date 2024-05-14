import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KapilPageRoutingModule } from './kapil-routing.module';

import { KapilPage } from './kapil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KapilPageRoutingModule
  ],
  declarations: [KapilPage]
})
export class KapilPageModule {}
