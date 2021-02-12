import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-article-wrapper',
  templateUrl: './article-wrapper.component.html',
  styleUrls: ['./article-wrapper.component.scss'],
})
export class ArticleWrapperComponent implements OnInit {
  @Input() article: any;
  @Input() layout: string;

  public articleAge;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.articleAge = this.getArticleAge(this.article.displayDateTime ? this.article.displayDateTime : this.article.datePublished);
  }

  public getArticleAge(date: string) {
    const diff = new Date().valueOf() - new Date(date).valueOf();
    const ageInMinutes = Math.floor(Math.abs(diff / 36e5) * 60);
    let age: string;
    if (ageInMinutes <= 15) {
      age = 'Just Now';
    } else {
      age = `${formatDistanceToNow(new Date(date))} ago`;
    }

    return age;
  }

  public dismiss() {
    this.modalController.dismiss();
  }
}
