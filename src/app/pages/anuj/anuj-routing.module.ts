import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnujPage } from './anuj.page';

const routes: Routes = [
  {
    path: '',
    component: AnujPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnujPageRoutingModule {}
