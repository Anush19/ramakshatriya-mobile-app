import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsComponent implements OnInit {

  public newsList: any = [];

  constructor(
    private newsService: NewsService,
    private alertCntrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews() {
    this.newsService.getNews().subscribe((newsList) => {
      console.log('news list is :: ', newsList);
      this.newsList = newsList;
    }
    );
  }

  /**This block is just to demo check the add operations .. to be reordered later */
  addNews() {
     this.router.navigate(['/tabs/hometab/news-articles']);
    // const alert = await this.alertCntrl.create(
    //   {
    //     header: 'Add news',
    //     inputs: [{
    //       name: 'title',
    //       placeholder: 'title',
    //       type: 'text'
    //     }, {
    //       name: 'subtitle',
    //       placeholder: 'subtitle',
    //       type: 'text'
    //     }, {
    //       name: 'info',
    //       placeholder: 'info',
    //       type: 'textarea'
    //     }, {
    //       name: 'thumbnail',
    //       placeholder: 'thumbnail',
    //       type: 'text'
    //     }, {
    //       name: 'altText',
    //       placeholder: 'altText',
    //       type: 'text'
    //     }],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel'
    //       },
    //       {
    //         text: 'Add',
    //         handler: (res) => {
    //           this.newsService.addNews({
    //             title: res.title,

    //             subtitle: res.subtitle,
    //             altText: res.altText,
    //             info: res.info,
    //             thumbnail: res.thumbnail
    //           })
    //         }
    //       }
    //     ]
    //   }


    // );
    // await alert.present();
  }
  onChange(change) {
    console.log(change)
    if (change.event === 'delete') {

      this.newsService.deleteNews(change.news)
    }
    if (change.event === 'edit') {

      this.newsService.updateNews(change.news)
    }
  }
}
