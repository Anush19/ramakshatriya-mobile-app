import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CardListComponent } from '../card-list/card-list.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from '../slide/slide.component';
import { ArticleComponent } from './news/article/article.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
  ],
  declarations: [
    Tab1Page,
    NewsComponent,
    CardListComponent,
    HomeComponent,
    SlideComponent,
    ArticleComponent
  ]
})
export class Tab1PageModule {}
