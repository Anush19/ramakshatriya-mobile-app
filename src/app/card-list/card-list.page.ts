import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListComponent implements OnInit {

  @Input() newsList: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public navigate(newsId: string) {
    this.router.navigate(['/tabs/hometab/news/' + newsId]);
  }

}
