import { ImageModalComponent } from './image-modal/image-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  public dateAge: string;

  // public hasRated = false;

  public isCardExpanded = false;
  public cardClickEvent = false;
  public closeClickEvent = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.dateAge = this.getArticleAge(this.article.datePublished);
  }

  onCardClick(eventLocation) {

    if (eventLocation === 'close') {
      this.closeClickEvent = true;
      this.isCardExpanded = false;
    }

    if (eventLocation === 'card') {
      this.cardClickEvent = true;
      if (this.cardClickEvent && !this.closeClickEvent) {
        this.isCardExpanded = true;
      } else if (!this.isCardExpanded) {
        this.closeClickEvent = false;
      }
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

  goToArticle() {
    window.open(this.article.url, '_blank');
  }

  getArticleAge(date: string) {
    return moment(date).fromNow();
  }
}
