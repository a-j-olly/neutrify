import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  public dateAge: string;
  public topics: Array<string> = new Array<string>();
  public keywords: Array<string> = new Array<string>();

  public hasRated = false;

  public isCardExpanded = false;
  public cardClickEvent = false;
  public closeClickEvent = false;

  constructor() {}

  ngOnInit() {
    console.log('incoming article', this.article);
    this.dateAge = this.getArticleAge(this.article.articleDatePub);
    this.topics = this.getWordList(this.article.topics.items, 'topic', 'topicLabel');
    this.keywords = this.getWordList(this.article.keywords.items, 'keyword', 'keywordLabel');

  }

  public onCardClick(eventLocation) {

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

  public goToArticle() {
    // go to article
  }

  private getArticleAge(date: string) {
    const age = Math.floor(Math.abs((new Date().valueOf() - new Date(date).valueOf()) / 36e5));

    if (age < 1) {
      return `Just Now`;
    } else if (age <= 23) {
      return `${age} Hours Ago`;
    } else if (age <= 47) {
      return `Yesterday`;
    } else {
      return new Date(date).toLocaleDateString();
    }
  }

  private getWordList(objArr: Array<any>, namespace: string, targetField: string): Array<string> {
    return objArr.map(el => el[namespace][targetField]);
  }
}
