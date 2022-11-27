import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsInfo } from 'src/app/model/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsComponent implements OnInit {

  public newsList: any = [];
  url: any;

  constructor(
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getNews();
  }

  public  getNews() {
    let tempNewsList = [];
    if(this.newsService.imageDetailsList){
       this.newsService.imageDetailsList.snapshotChanges().subscribe((newsArticles) => {
         newsArticles.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          tempNewsList.push(a as NewsInfo);
        });
        this.newsList = new Set(tempNewsList);
        console.log(this.newsList);
      })
    }
  }

  addNews() {
    this.router.navigateByUrl('/tabs/hometab/upload-form');
  }
  onChange(change) {
    if (change.event === 'delete') {
      let list=[];
      list = [...this.newsList];
      this.newsService.deleteImageDetailsList(change.news.$key);
      this.newsList = list.filter((news) => news.$key !== change.news.$key);
      this.getNews();
    }
    if (change.event === 'edit') {

      this.newsService.updateNews(change.news)
    }
  }


}
