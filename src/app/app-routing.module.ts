import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'anuj',
    loadChildren: () => import('./pages/anuj/anuj.module').then( m => m.AnujPageModule)
  },
  {
    path: 'nayan',
    loadChildren: () => import('./pages/nayan/nayan.module').then( m => m.NayanPageModule)
  },
  {
    path: 'kapil',
    loadChildren: () => import('./pages/kapil/kapil.module').then( m => m.KapilPageModule)
  },
  {
    path: 'sarang',
    loadChildren: () => import('./pages/sarang/sarang.module').then( m => m.SarangPageModule)
  },
  {
    path: 'bhaumik',
    loadChildren: () => import('./pages/bhaumik/bhaumik.module').then( m => m.BhaumikPageModule)
  },
  {
    path: 'manish',
    loadChildren: () => import('./pages/manish/manish.module').then( m => m.ManishPageModule)
  },
  {
    path: 'jinesh',
    loadChildren: () => import('./pages/jinesh/jinesh.module').then( m => m.JineshPageModule)
  },
  {
    path: 'ahad',
    loadChildren: () => import('./pages/ahad/ahad.module').then( m => m.AhadPageModule)
  },
  {
    path: 'krunal',
    loadChildren: () => import('./pages/krunal/krunal.module').then( m => m.KrunalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
