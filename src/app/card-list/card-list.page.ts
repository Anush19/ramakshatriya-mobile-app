import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListComponent implements OnInit {

  @Input() newsList: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  public navigate(newsId: string) {
    debugger;
    this.router.navigate(['/tabs/tab1/news/' + newsId]);
  }

}
