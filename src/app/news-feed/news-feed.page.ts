import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
  public articles = [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
      rating: 3
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      + 'Ut enim ad minim veniam, '
      + 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      source: 'Milanese Post',
      pubDate: '2019-11-23T19:29:23.538Z',
      sentiment: '0.2',
      novelty: '0.1',
      rating: 1
    },
    {
      id: '3',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      source: 'Deus\' News',
      pubDate: '2019-11-24T18:22:23.538Z',
      sentiment: '-0.5',
      novelty: '0',
      rating: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
