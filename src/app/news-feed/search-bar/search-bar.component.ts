import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { IonSearchbar, PopoverController } from '@ionic/angular';
import { NewsFeedService } from 'src/app/services/news-feed.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchBarCtrl') searchBarCtrl: IonSearchbar;

  @Input() searchTerm;
  @Input() useFilters = false;

  searchBarForm: FormGroup;

  constructor(
    public newsFeedService: NewsFeedService,
    private popoverController: PopoverController,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.searchBarForm = this.formBuilder.group({
      searchTerm: [this.searchTerm, [Validators.required]],
      useFilters: [this.useFilters]
    });
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchBarCtrl.setFocus();
    }, 100);
  }

  get f() { return this.searchBarForm.controls; }

  public async search() {

    if (this.f.searchTerm.value) {
      this.searchTerm = this.f.searchTerm.value.trim();
      this.newsFeedService.setSearchFilter({searchTerm: this.searchTerm, useFilters: this.useFilters});
      await this.newsFeedService.handleInitDataLoad();
    } else if (!this.f.searchTerm.value && !this.searchTerm) {
      this.searchTerm = '';
      this.newsFeedService.setSearchFilter({searchTerm: null, useFilters: this.useFilters});
    } else {
      this.searchTerm = '';
      this.newsFeedService.setSearchFilter({searchTerm: null, useFilters: this.useFilters});
      await this.newsFeedService.handleInitDataLoad();
    }
    this.dismiss();
  }

  public onEnter() {
    if (this.f.searchTerm.value) {
      setTimeout(() => {
        this.search();
      }, 150);
    }
  }

  public onClear() {
    this.f.searchTerm.setValue('');
    this.searchTerm = '';
    this.newsFeedService.setSearchFilter({searchTerm: null, useFilters: this.useFilters});
    this.newsFeedService.handleInitDataLoad();
    this.dismiss();
  }

  public onCheckboxChange(event) {
    this.useFilters = event.detail.checked;
  }

  public dismiss() {
    this.popoverController.dismiss();
  }
}
