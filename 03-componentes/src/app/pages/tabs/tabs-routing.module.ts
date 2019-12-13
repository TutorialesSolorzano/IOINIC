import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conatct'

  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../../pages/avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path: 'conatct',
        loadChildren: () => import('../../pages/list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
