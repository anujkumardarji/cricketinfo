import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KapilPage } from './kapil.page';

const routes: Routes = [
  {
    path: '',
    component: KapilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KapilPageRoutingModule {}
