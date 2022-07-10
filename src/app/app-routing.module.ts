import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./hometab/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./hometab/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'tabs/hometab/news',
    loadChildren: () => import('./hometab/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news-articles',
    loadChildren: () => import('./hometab/news-articles/news-articles.module').then( m => m.NewsArticlesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
