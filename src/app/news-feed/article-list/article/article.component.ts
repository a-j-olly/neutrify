import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  public dateAge: string;

  public hasRated = false;

  public isCardExpanded = false;
  public cardClickEvent = false;
  public closeClickEvent = false;

  constructor() {}

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

  goToArticle() {
    window.open(this.article.url, '_blank');
  }

  getArticleAge(date: string) {
    return moment(date).fromNow();
  }
}
