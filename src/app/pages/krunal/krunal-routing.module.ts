import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KrunalPage } from './krunal.page';

const routes: Routes = [
  {
    path: '',
    component: KrunalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrunalPageRoutingModule {}
