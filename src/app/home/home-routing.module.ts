import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'homepage',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/homepage/homepage.module').then(m => m.HomepagePageModule)
          },
        ]
      },
      {
        path: 'captains',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/captains/captains.module').then(m => m.CaptainsPageModule)
          },
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/history/history.module').then(m => m.HistoryPageModule)
          },
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/homepage',
    pathMatch: 'full'
  },
  {
    path: 'anuj',
    redirectTo: 'anuj',
  },
  {
    path: 'nayan',
    redirectTo: 'nayan',
  },
  {
    path: 'kapil',
    redirectTo: 'kapil',
  },
  {
    path: 'manish',
    redirectTo: 'manish',
  },
  {
    path: 'sarang',
    redirectTo: 'sarang',
  },
  {
    path: 'bhaumik',
    redirectTo: 'bhaumik',
  },
  {
    path: 'jinesh',
    redirectTo: 'jinesh',
  },
  {
    path: 'krunal',
    redirectTo: 'krunal',
  },
  {
    path: 'ahad',
    redirectTo: 'ahad',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
