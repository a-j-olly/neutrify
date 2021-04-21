import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-footer',
  templateUrl: './standard-footer.component.html',
  styleUrls: ['./standard-footer.component.scss'],
})
export class StandardFooterComponent implements OnInit {
  @Input() sourceTitle: string;
  @Input() time;
  @Input() layout;

  constructor() { }

  ngOnInit() {}

}
