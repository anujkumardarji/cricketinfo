import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NayanPage } from './nayan.page';

const routes: Routes = [
  {
    path: '',
    component: NayanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NayanPageRoutingModule {}
