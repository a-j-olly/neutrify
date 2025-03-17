import { Article } from './../../../services/mock-neutrify-api.service';
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
  @ViewChild('slides') slides: IonSlides;
  @Input() public set article(input: Article) {
    this.articleData = input;
    this.imgUrl = this.article.image;
    this.setMetricArrays(input);
  }

  public get article() {
    return this.articleData;
  }

  @Input() layout: string;

  public datePublished: string;
  public timePublished: string;
  public showImage = false;
  public imgUrl: string;
  public buttonClicked = false;
  public imageFailed = false;
  public leftArrowDisabled = false;
  public rightArrowDisabled = false;
  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };
  public platformHeight: number;
  public keywordArray = new Array<string>();
  public topicArray = new Array<string>();

  private articleData: Article;
  private platformSource: string;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private ga: GoogleAnalyticsService,
    private inAppBrowser: InAppBrowser,
    private platform: Platform,
  ) {
    this.platform.ready().then(readySource => {
      this.platformSource = readySource;
      this.platformHeight = this.platform.height();
    });
  }

  public ngOnInit() {
    this.datePublished = format(new Date(this.article.datePublished), 'Pp', {locale: enGB});
    this.imgUrl = this.article.image;
  }

  public async ionViewWillEnter() {
    await this.slides.update();
  }

  public async viewImage() {
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

  public async openFilterPopover(event, optionType, value) {
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

  public goToArticle() {
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

  public handleImgError() {
    this.imgUrl = null;
  }

  public preventDrag(event) {
    event.preventDefault();
  }

  public async slideNext() {
    this.buttonClicked = true;
    await this.slides.slideNext();
    this.buttonClicked = false;
  }

  public async slidePrev() {
    this.buttonClicked = true;
    await this.slides.slidePrev();
    this.buttonClicked = false;
  }

  public async checkSlidesPos() {
    await this.slides.update();
    this.leftArrowDisabled = await this.slides.isBeginning();
    this.rightArrowDisabled = await this.slides.isEnd();
  }

  public async onSlideWillChange() {
    const currentSlideIndex = await this.slides.getActiveIndex();
    if (currentSlideIndex === 1) {
      this.showImage = true;
    }
  }

  private setMetricArrays(article: Article) {
    if (this.platformHeight < 720) {
      if (article.displayKeywords.length > 15) {
        for (let i = 0; i < 14; i++) {
          this.keywordArray.push(article.displayKeywords[i]);
        }
      } else {
        this.keywordArray = article.displayKeywords;
      }

      if (article.displayTopics.length > 5) {
        for (let i = 0; i < 4; i++) {
          this.topicArray.push(article.displayTopics[i]);
        }
      } else {
        this.topicArray = article.displayTopics;
      }

    } else {
      this.keywordArray = article.displayKeywords;
      this.topicArray = article.displayTopics;
    }
  }
}
