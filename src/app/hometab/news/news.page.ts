import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsComponent implements OnInit {

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
