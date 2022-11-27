import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListComponent {

  @Input() newsList: any;
  @Output() onClick = new EventEmitter<{}>();

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
