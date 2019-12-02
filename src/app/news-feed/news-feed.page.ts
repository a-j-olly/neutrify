import { Subscription } from 'rxjs';
import { MenuController, Platform } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit, OnDestroy {

  public articles = [
    {
      id: '1',
      title: 'De Finibus Bonorum et Malorum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      + 'Ut enim ad minim veniam, '
      + 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
      + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      source: 'Latinium Front',
      pubDate: '2019-11-24T16:29:23.538Z',
      sentiment: '0.5',
      novelty: '1',
      rating: 3,
      author: 'Marcus Tullius Cicero',
      url: 'https://www.lipsum.com/',
      wordCount: 400,
      keywords: [
        'eiusmod', 'magna', 'consectetur', 'incididunt', 'dolor', 'voluptate',
        'exercitation', 'occaecat', 'cupidatat', 'proident', 'laboris', 'nostrud',
        'eiusmod', 'magna', 'consectetur', 'incididunt', 'dolor', 'voluptate',
        'exercitation', 'occaecat', 'cupidatat', 'proident', 'laboris', 'nostrud'
      ],
      topics: [
        'Ethics', 'Politics', 'Philosophy', 'Law', 'Sport', 'Entertainment',
        'Religion', 'Economics', 'War', 'Agriculture'
      ]
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      + 'Ut enim ad minim veniam, '
      + 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      source: 'The Milanese Post',
      pubDate: '2019-11-23T19:29:23.538Z',
      sentiment: '0.2',
      novelty: '0.1',
      rating: 1,
      url: 'https://www.lipsum.com/',
      wordCount: 200,
      keywords: ['eiusmod', 'magna', 'consectetur'],
      topics: ['Ethics', 'Politics', 'Philosophy'],
    },
    {
      id: '3',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      source: 'The Really Really Long Name',
      pubDate: '2019-11-24T18:22:23.538Z',
      sentiment: '-0.5',
      novelty: '0',
      rating: 0,
      author: 'Jorge Mario Bergoglio',
      url: 'https://www.lipsum.com/',
      wordCount: 100,
    }
  ];

  menuSubscription$: Subscription;
  menuStatus = false;

  platformResize$: Subscription;
  platformWidth: number;

  constructor(private menuService: MenuService, private menu: MenuController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.platformWidth = platform.width();
    });

    this.platformResize$ = platform.resize.subscribe(() => {
      this.platformWidth = platform.width();
    });

    this.menuSubscription$ = menuService.getMenuStatus().subscribe(async (status) => {
      this.menuStatus = status;
    });
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.articles.push({
        id: (this.articles.length + 1).toString(),
        title: `Article Title ${this.articles.length + 1}`,
        body: `Article Body ${this.articles.length + 1}`,
        source: `Source ${this.articles.length + 1}`,
        pubDate: new Date().toISOString(),
        sentiment: Math.random().toString(),
        novelty: Math.random().toString(),
        rating: 0,
        author: `Author ${this.articles.length + 1}`,
        url: 'https://www.lipsum.com/',
        wordCount: Math.random() * 1000,
        keywords: [],
        topics: []
      });
    }
  }

  ngOnDestroy() {
    this.menuSubscription$.unsubscribe();
    this.platformResize$.unsubscribe();
  }

  toggleMenu() {
    if (this.platformWidth <= 1084) {
      this.menuService.closeMenu();
      this.menu.toggle('filterMenu');
    } else {
      this.menuService.toggleMenu();
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      for (let i = 0; i < 25; i++) {
        this.articles.push({
          id: (this.articles.length + 1).toString(),
          title: `Article Title ${this.articles.length + 1}`,
          body: `Article Body ${this.articles.length + 1}`,
          source: `Source ${this.articles.length + 1}`,
          pubDate: new Date().toISOString(),
          sentiment: Math.random().toString(),
          novelty: Math.random().toString(),
          rating: 0,
          author: `Author ${this.articles.length + 1}`,
          url: 'https://www.lipsum.com/',
          wordCount: Math.random() * 1000,
          keywords: [],
          topics: []
        });
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.articles.length >= 50) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
