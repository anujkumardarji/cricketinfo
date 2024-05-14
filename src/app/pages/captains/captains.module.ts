import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptainsPageRoutingModule } from './captains-routing.module';

import { CaptainsPage } from './captains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptainsPageRoutingModule
  ],
  declarations: [CaptainsPage]
})
export class CaptainsPageModule {}
