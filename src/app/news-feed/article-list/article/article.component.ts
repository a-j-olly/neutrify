import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { AddFilterPopoverComponent } from './add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, PopoverController, IonSlides } from '@ionic/angular';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  public datePublished: string;
  public timePublished: string;

  public imageFailed = false;
  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };

  @ViewChild('slides') slides: IonSlides;
  leftArrowDisabled = false;
  rightArrowDisabled = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private ga: GoogleAnalyticsService,
    private inAppBrowser: InAppBrowser
  ) {}

  ngOnInit() {
    this.datePublished = format(new Date(this.article.datePublished), 'Pp', {locale: enGB});
  }

  async viewImage() {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image: this.article.image
      },
      cssClass: 'auto-height'
    });
    this.ga.eventEmitter('select_content', 'engagement', 'Opened image');
    return await modal.present();
  }

  imageError() {
    this.imageFailed = true;
  }

  async openFilterPopover(event, optionType, value) {
    const popover = await this.popoverController.create({
      component: AddFilterPopoverComponent,
      componentProps: {
        optionType,
        value
      },
      event,
      showBackdrop: false,
      translucent: true,
      cssClass: 'filter-popover'
    });
    return await popover.present();
  }

  goToArticle() {
    this.inAppBrowser.create(encodeURI(this.article.url), '_system');
    this.ga.eventEmitter('select_content', 'engagement', 'Went to external website');
  }

  async slideNext() {
    await this.slides.slideNext();
  }

  async slidePrev() {
    await this.slides.slidePrev();
  }

  async checkSlidesPos() {
    this.leftArrowDisabled = await this.slides.isBeginning();
    this.rightArrowDisabled = await this.slides.isEnd();
  }
}
