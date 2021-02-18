import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-header',
  templateUrl: './standard-header.component.html',
  styleUrls: ['./standard-header.component.scss'],
})
export class StandardHeaderComponent implements OnInit {
  @Input() index;
  @Input() openArticleIndex;
  @Input() layout;
  @Input() title;

  constructor() { }

  ngOnInit() {}

}
