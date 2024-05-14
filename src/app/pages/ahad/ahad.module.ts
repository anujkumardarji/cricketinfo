import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhadPageRoutingModule } from './ahad-routing.module';

import { AhadPage } from './ahad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhadPageRoutingModule
  ],
  declarations: [AhadPage]
})
export class AhadPageModule {}
