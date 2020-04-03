import { AddFilterPopoverComponent } from './add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import * as moment from 'moment';
import { ModalController, PopoverController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate(200)
      ]),
  ])
  ],
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() id!: string;
  @Input() article: any;
  public dateAge: string;

  @Output() articleExpanded: EventEmitter<boolean> = new EventEmitter();

  public isCardExpanded = false;
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
  ) {}

  ngOnInit() {
    this.dateAge = this.getArticleAge(this.article.datePublished);
  }

  onCardClick() {
    this.isCardExpanded = !this.isCardExpanded;

    if (this.isCardExpanded) {
      this.articleExpanded.emit(true);
    } else {
      this.articleExpanded.emit(false);
    }
  }

  async viewImage() {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image: this.article.image
      },
      cssClass: 'auto-height'
    });

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
    window.open(this.article.url, '_blank');
  }

  getArticleAge(date: string) {
    return moment(date).fromNow();
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
