import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnujPageRoutingModule } from './anuj-routing.module';

import { AnujPage } from './anuj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnujPageRoutingModule
  ],
  declarations: [AnujPage]
})
export class AnujPageModule {}
