import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JineshPage } from './jinesh.page';

const routes: Routes = [
  {
    path: '',
    component: JineshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JineshPageRoutingModule {}
