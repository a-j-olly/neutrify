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
      categories: [
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
      categories: ['Ethics', 'Politics', 'Philosophy'],
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

  constructor() { }

  ngOnInit() {
  }
}
