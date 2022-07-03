import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'hometab',
        loadChildren: () => import('../hometab/home.module').then(m => m.DashboardModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../hometab/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'news',
        redirectTo: '/tabs/hometab/news',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/hometab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/hometab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
