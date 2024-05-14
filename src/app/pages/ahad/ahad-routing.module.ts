import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhadPage } from './ahad.page';

const routes: Routes = [
  {
    path: '',
    component: AhadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhadPageRoutingModule {}
