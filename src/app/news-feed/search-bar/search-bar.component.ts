import { Component, Input, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { ModelStringFilterInput } from 'src/app/services/neutrify-api.service';
import { NewsFeedService } from 'src/app/services/news-feed.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() searchTerm;
  @ViewChild('searchBarCtrl') searchBarCtrl: IonSearchbar;

  constructor(
    public newsFeedService: NewsFeedService
  ) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchBarCtrl.setFocus();
    }, 200);
  }

  public async search(event) {
    if (event.detail.value && event.detail.value !== this.searchTerm) {
      this.searchTerm = event.detail.value;
      const searchFilter: ModelStringFilterInput = {
        contains: event.detail.value.toLowerCase()
      };

      this.newsFeedService.setSearchFilter({searchTerms: searchFilter});
      this.newsFeedService.handleInitDataLoad();
    } else if (!event.detail.value && !this.searchTerm) {
      this.searchTerm = '';
      this.newsFeedService.setSearchFilter(null);
    } else {
      this.searchTerm = '';
      this.newsFeedService.setSearchFilter(null);
      this.newsFeedService.handleInitDataLoad();
    }
  }
}
