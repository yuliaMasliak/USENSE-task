import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule)
  },

  // {
  //   path: 'dashboard',
  //   component: ProfileComponent,
  //   children: [
  //     {
  //       path: 'start',
  //       component: StartPageComponent
  //     },
  //     {
  //       path: 'account',
  //       component: AccountComponent
  //     },
  //     {
  //       path: 'board',
  //       component: BoardCreatePageComponent
  //     }
  //   ]
  // },

  {
    path: '**',
    redirectTo: '/main/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CoreModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
