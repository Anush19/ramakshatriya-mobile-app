import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardListComponent } from '../card-list/card-list.page';
import { NewsComponent } from './news/news.page';
import { SlideComponent } from '../slide/slide.component';
import { ArticleComponent } from './news/article/article.component';
import { HomeComponent } from './home/home.page';
import { DemiseComponent } from './demise/demise.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardPage,
    NewsComponent,
    CardListComponent,
    HomeComponent,
    SlideComponent,
    ArticleComponent,
    DemiseComponent
  ]
})
export class DashboardModule { }
