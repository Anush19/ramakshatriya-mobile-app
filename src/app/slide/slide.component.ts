import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsInfo } from '../model/news';
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
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getImageDetailsList();
    this.getNews();
  }

  public getNews() {
    const tempNewsList = [];
    if (this.newsService.imageDetailsList) {
      this.newsService.imageDetailsList.snapshotChanges().subscribe((newsArticles) => {
        newsArticles.forEach(item => {
          const a = item.payload.toJSON();
          a['$key'] = item.key;
          tempNewsList.push(a as NewsInfo);
        });
        this.newsList = new Set(tempNewsList);
        console.log(this.newsList);
      });
    }

  }
  // onImageClick(event: any) {
  //   console.log(event);
  //   //this.router.navigate(['/tabs/hometab/home']);
  // }
 
}
