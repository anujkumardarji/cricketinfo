import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManishPage } from './manish.page';

const routes: Routes = [
  {
    path: '',
    component: ManishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManishPageRoutingModule {}
