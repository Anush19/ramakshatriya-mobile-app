import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };

  public newsList: any = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews() {
    this.newsService.getNews().subscribe( (newsList) => {
      console.log(newsList);
      this.newsList = newsList;
    }
    );
  }

}
