import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.page';
import { NewsComponent } from './news/news.page';
import { DemiseComponent } from './demise/demise.component';
import { NewsArticlesPage } from './news-articles/news-articles.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'demise',
    component: DemiseComponent,
  },
  {
    path: 'news-articles',
    component: NewsArticlesPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
