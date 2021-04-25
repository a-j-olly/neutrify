import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-feed',
  templateUrl: './skeleton-feed.component.html',
  styleUrls: ['./skeleton-feed.component.scss'],
})
export class SkeletonFeedComponent implements OnInit {
  @Input() layout: string;
  @Input() platformWidth;

  public numberOfCards = new Array<any>(5);

  constructor() { }

  ngOnInit() {}
}
