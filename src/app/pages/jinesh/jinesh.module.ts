import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JineshPageRoutingModule } from './jinesh-routing.module';

import { JineshPage } from './jinesh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JineshPageRoutingModule
  ],
  declarations: [JineshPage]
})
export class JineshPageModule {}
