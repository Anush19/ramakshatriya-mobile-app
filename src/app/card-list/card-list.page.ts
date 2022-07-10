import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListComponent implements OnInit {

  @Input() newsList: any;
  @Output() onClick = new EventEmitter<{}>();
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public navigate(newsId: string) {
    this.router.navigate(['/tabs/hometab/news/' + newsId]);
  }
  public editInfo(newsInfo: any) {
    const data = {
      news: newsInfo,
      event: 'edit',
    };
    this.onClick.emit(data);
  }
  public deleteInfo(newsInfo: any) {
    const data = {
      news: newsInfo,
      event: 'delete',
    };
    this.onClick.emit(data);
  }

}
