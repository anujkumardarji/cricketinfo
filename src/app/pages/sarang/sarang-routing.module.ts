import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarangPage } from './sarang.page';

const routes: Routes = [
  {
    path: '',
    component: SarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SarangPageRoutingModule {}
