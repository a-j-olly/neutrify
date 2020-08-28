import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public author: string;
  public body: string;
  public date: string;
  public img: string

  @Input()
  set article(input: any) {
    this.title = input.title;
    this.subTitle = input.subTitle;
    this.author = input.author;
    this.body = input.body;
    this.date = input.date;
    this.img = input.img;
  }

  constructor() { }

  ngOnInit() {

  }
}
