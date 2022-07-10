import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-newsTemplate',
  templateUrl: './newsTemplate.component.html',
  styleUrls: ['./newsTemplate.component.scss'],
})
export class NewsTemplateComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() cardSubTitle: string = '';
  @Input() contentText: string = '';
  @Input() imageLocation: any = '';
  @Input() imageAltText: string = '';

  constructor() { }
  ngOnInit() { }

}
