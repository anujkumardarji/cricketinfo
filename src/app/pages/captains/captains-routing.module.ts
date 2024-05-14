import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptainsPage } from './captains.page';

const routes: Routes = [
  {
    path: '',
    component: CaptainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptainsPageRoutingModule {}
