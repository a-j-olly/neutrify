import { GoogleAnalyticsService } from './../../../services/google-analytics.service';
import { AddFilterPopoverComponent } from './add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, PopoverController, IonSlides, Platform } from '@ionic/angular';
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
  public showImage: boolean = false;
  public buttonClicked = false;
  private platformSource: string;

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
    private inAppBrowser: InAppBrowser,
    private platform: Platform
  ) {
    this.platform.ready().then(readySource => this.platformSource = readySource);
  }

  ngOnInit() {
    this.datePublished = format(new Date(this.article.datePublished), 'Pp', {locale: enGB});
    console.log('article keywords: ', this.article.keywords);
  }

  async viewImage() {
    if (!this.buttonClicked) {
      this.buttonClicked = true;
      const modal = await this.modalController.create({
        component: ImageModalComponent,
        componentProps: {
          image: this.article.image
        },
        cssClass: 'auto-height'
      });
      this.ga.eventEmitter('select_content', 'engagement', 'Opened image');
      this.buttonClicked = false;
      return await modal.present();
    }
  }

  async openFilterPopover(event, optionType, value) {
    if (!this.buttonClicked) {
      this.buttonClicked = true;
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

      this.buttonClicked = false;
      return await popover.present();
    }
  }

  goToArticle() {
    if (!this.buttonClicked) {
      this.buttonClicked = true;

      if (this.platformSource === 'dom') {
        window.open(encodeURI(this.article.url), '_blank');
      } else {
        this.inAppBrowser.create(encodeURI(this.article.url), '_system');
      }

      this.ga.eventEmitter('select_content', 'engagement', 'Went to external website');
    }
    
    this.buttonClicked = false;
  }

  async slideNext() {
    this.buttonClicked = true;
    await this.slides.slideNext();
    this.buttonClicked = false;
  }

  async slidePrev() {
    this.buttonClicked = true;
    await this.slides.slidePrev();
    this.buttonClicked = false;
  }

  async checkSlidesPos() {
    this.leftArrowDisabled = await this.slides.isBeginning();
    this.rightArrowDisabled = await this.slides.isEnd();
  }

  async onSlideWillChange() {
    const currentSlideIndex = await this.slides.getActiveIndex();
    if (currentSlideIndex === 1) {
      this.showImage = true;
    } 
  }
}
