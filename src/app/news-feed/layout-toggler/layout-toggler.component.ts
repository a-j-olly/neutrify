import { PopoverController } from '@ionic/angular';
import { NewsFeedService } from 'src/app/services/news-feed.service';
import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-layout-toggler',
  templateUrl: './layout-toggler.component.html',
  styleUrls: ['./layout-toggler.component.scss'],
})
export class LayoutTogglerComponent implements OnInit {
  @Input() layout: string;

  constructor(
    private newsFeedService: NewsFeedService,
    private storage: Storage,
    private popoverController: PopoverController
  ) { }

  public ngOnInit() {}

  public onSegmentChange(event: any) {
    this.newsFeedService.setLayout(event.detail.value);
    this.storage.set('neutrify_layout_preference', event.detail.value);
    setTimeout(() => this.popoverController.dismiss(), 200);
  }
}
