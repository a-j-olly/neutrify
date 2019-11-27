import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  public isCardExpanded = false;
  public dateAge: string;
  public hasRated = false;

  constructor() { }

  ngOnInit() {
    this.dateAge = this.getArticleAge(this.article.pubDate);
  }

  private getArticleAge(date: string) {
    const age = Math.floor(Math.abs((new Date().valueOf() - new Date(date).valueOf()) / 36e5));

    if (age === 1) {
      return `Just Now`;
    } else if (age <= 23) {
      return `${age} Hours Ago`;
    } else if (age <= 47) {
      return `Yesterday`;
    } else {
      return new Date(date).toLocaleDateString();
    }
  }
}
