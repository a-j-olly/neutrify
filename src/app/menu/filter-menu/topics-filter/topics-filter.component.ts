import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  Arts,
  Games,
  News,
  Regional,
  Society,
  Business,
  Health,
  Recreation,
  Science,
  Sports,
  Computers,
  Home,
  Shopping
} from '../../../model/topic-options';

@Component({
  selector: 'app-topics-filter',
  templateUrl: './topics-filter.component.html',
  styleUrls: ['./topics-filter.component.scss'],
})
export class TopicsFilterComponent implements OnInit {
  private option: any;
  public topicList: any = {};
  public segmentValue = 'include';
  public showFilter = false;
  public selectOptions: any = {};

  public disableArts = false;
  public disableGames = false;
  public disableNews = false;
  public disableRegional = false;
  public disableSociety = false;
  public disableBusiness = false;
  public disableHealth = false;
  public disableRecreation = false;
  public disableScience = false;
  public disableSports = false;
  public disableComputers = false;
  public disableHome = false;
  public disableShopping = false;

  @Input()
  set userOption(val: any) {
    this.option = val;
    this.initTopicView();
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectOptions.arts = Arts;
    this.selectOptions.games = Games;
    this.selectOptions.news = News;
    this.selectOptions.regional = Regional;
    this.selectOptions.society = Society;
    this.selectOptions.business = Business;
    this.selectOptions.health = Health;
    this.selectOptions.recreation = Recreation;
    this.selectOptions.science = Science;
    this.selectOptions.sports = Sports;
    this.selectOptions.computers = Computers;
    this.selectOptions.home = Home;
    this.selectOptions.shopping = Shopping;
  }

  initTopicView() {
    this.topicList = Object.assign(this.option);

    if (this.option[this.segmentValue].arts.length > 1) {
      this.disableArts = false;
    } else if (this.option[this.segmentValue].arts.length === 1) {

      if (this.option[this.segmentValue].arts[0] === 'arts') {
        this.disableArts = true;
      } else {
        this.disableArts = false;
      }
    } else {
      this.disableArts = false;
    }

    if (this.option[this.segmentValue].games.length > 1) {
      this.disableGames = false;
    } else if (this.option[this.segmentValue].games.length === 1) {

      if (this.option[this.segmentValue].games[0] === 'games') {
        this.disableGames = true;
      } else {
        this.disableGames = false;
      }
    } else {
      this.disableGames = false;
    }

    if (this.option[this.segmentValue].news.length > 1) {
      this.disableNews = false;
    } else if (this.option[this.segmentValue].news.length === 1) {

      if (this.option[this.segmentValue].news[0] === 'news') {
        this.disableNews = true;
      } else {
        this.disableNews = false;
      }
    } else {
      this.disableNews = false;
    }

    if (this.option[this.segmentValue].regional.length > 1) {
      this.disableRegional = false;
    } else if (this.option[this.segmentValue].regional.length === 1) {

      if (this.option[this.segmentValue].regional[0] === 'regional') {
        this.disableRegional = true;
      } else {
        this.disableRegional = false;
      }
    } else {
      this.disableRegional = false;
    }

    if (this.option[this.segmentValue].society.length > 1) {
      this.disableSociety = false;
    } else if (this.option[this.segmentValue].society.length === 1) {

      if (this.option[this.segmentValue].society[0] === 'society') {
        this.disableSociety = true;
      } else {
        this.disableSociety = false;
      }
    } else {
      this.disableSociety = false;
    }

    if (this.option[this.segmentValue].business.length > 1) {
      this.disableBusiness = false;
    } else if (this.option[this.segmentValue].business.length === 1) {

      if (this.option[this.segmentValue].business[0] === 'business') {
        this.disableBusiness = true;
      } else {
        this.disableBusiness = false;
      }
    } else {
      this.disableBusiness = false;
    }

    if (this.option[this.segmentValue].health.length > 1) {
      this.disableHealth = false;
    } else if (this.option[this.segmentValue].health.length === 1) {

      if (this.option[this.segmentValue].health[0] === 'health') {
        this.disableHealth = true;
      } else {
        this.disableHealth = false;
      }
    } else {
      this.disableHealth = false;
    }

    if (this.option[this.segmentValue].recreation.length > 1) {
      this.disableRecreation = false;
    } else if (this.option[this.segmentValue].recreation.length === 1) {

      if (this.option[this.segmentValue].recreation[0] === 'recreation') {
        this.disableRecreation = true;
      } else {
        this.disableRecreation = false;
      }
    } else {
      this.disableRecreation = false;
    }

    if (this.option[this.segmentValue].science.length > 1) {
      this.disableScience = false;
    } else if (this.option[this.segmentValue].science.length === 1) {

      if (this.option[this.segmentValue].science[0] === 'science') {
        this.disableScience = true;
      } else {
        this.disableScience = false;
      }
    } else {
      this.disableScience = false;
    }

    if (this.option[this.segmentValue].sports.length > 1) {
      this.disableSports = false;
    } else if (this.option[this.segmentValue].sports.length === 1) {

      if (this.option[this.segmentValue].sports[0] === 'sports') {
        this.disableSports = true;
      } else {
        this.disableSports = false;
      }
    } else {
      this.disableSports = false;
    }

    if (this.option[this.segmentValue].computers.length > 1) {
      this.disableComputers = false;
    } else if (this.option[this.segmentValue].computers.length === 1) {

      if (this.option[this.segmentValue].computers[0] === 'computers') {
        this.disableComputers = true;
      } else {
        this.disableComputers = false;
      }
    } else {
      this.disableComputers = false;
    }

    if (this.option[this.segmentValue].home.length > 1) {
      this.disableHome = false;
    } else if (this.option[this.segmentValue].home.length === 1) {

      if (this.option[this.segmentValue].home[0] === 'home') {
        this.disableHome = true;
      } else {
        this.disableHome = false;
      }
    } else {
      this.disableHome = false;
    }

    if (this.option[this.segmentValue].shopping.length > 1) {
      this.disableShopping = false;
    } else if (this.option[this.segmentValue].shopping.length === 1) {

      if (this.option[this.segmentValue].shopping[0] === 'shopping') {
        this.disableShopping = true;
      } else {
        this.disableShopping = false;
      }
    } else {
      this.disableShopping = false;
    }
  }

  onSegmentChange() {
    this.initTopicView();
  }

  checkboxClicked() {
    if (this.disableArts) {
      this.topicList[this.segmentValue].arts = new Array();
      this.topicList[this.segmentValue].arts.push('arts');
    } else {
      const topicIndex = this.topicList[this.segmentValue].arts.findIndex(topic => topic === 'arts');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].arts.splice(topicIndex, 1);
      }
    }

    if (this.disableGames) {
      this.topicList[this.segmentValue].games = new Array();
      this.topicList[this.segmentValue].games.push('games');
    } else {
      const topicIndex = this.topicList[this.segmentValue].games.findIndex(topic => topic === 'games');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].games.splice(topicIndex, 1);
      }
    }

    if (this.disableNews) {
      this.topicList[this.segmentValue].news = new Array();
      this.topicList[this.segmentValue].news.push('news');
    } else {
      const topicIndex = this.topicList[this.segmentValue].news.findIndex(topic => topic === 'news');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].news.splice(topicIndex, 1);
      }
    }

    if (this.disableRegional) {
      this.topicList[this.segmentValue].regional = new Array();
      this.topicList[this.segmentValue].regional.push('regional');
    } else {
      const topicIndex = this.topicList[this.segmentValue].regional.findIndex(topic => topic === 'regional');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].regional.splice(topicIndex, 1);
      }
    }

    if (this.disableSociety) {
      this.topicList[this.segmentValue].society = new Array();
      this.topicList[this.segmentValue].society.push('society');
    } else {
      const topicIndex = this.topicList[this.segmentValue].society.findIndex(topic => topic === 'society');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].society.splice(topicIndex, 1);
      }
    }

    if (this.disableBusiness) {
      this.topicList[this.segmentValue].business = new Array();
      this.topicList[this.segmentValue].business.push('business');
    } else {
      const topicIndex = this.topicList[this.segmentValue].business.findIndex(topic => topic === 'business');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].business.splice(topicIndex, 1);
      }
    }

    if (this.disableHealth) {
      this.topicList[this.segmentValue].health = new Array();
      this.topicList[this.segmentValue].health.push('health');
    } else {
      const topicIndex = this.topicList[this.segmentValue].health.findIndex(topic => topic === 'health');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].health.splice(topicIndex, 1);
      }
    }

    if (this.disableRecreation) {
      this.topicList[this.segmentValue].recreation = new Array();
      this.topicList[this.segmentValue].recreation.push('recreation');
    } else {
      const topicIndex = this.topicList[this.segmentValue].recreation.findIndex(topic => topic === 'recreation');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].recreation.splice(topicIndex, 1);
      }
    }

    if (this.disableScience) {
      this.topicList[this.segmentValue].science = new Array();
      this.topicList[this.segmentValue].science.push('science');
    } else {
      const topicIndex = this.topicList[this.segmentValue].science.findIndex(topic => topic === 'science');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].science.splice(topicIndex, 1);
      }
    }

    if (this.disableSports) {
      this.topicList[this.segmentValue].sports = new Array();
      this.topicList[this.segmentValue].sports.push('sport');
    } else {
      const topicIndex = this.topicList[this.segmentValue].sports.findIndex(topic => topic === 'sports');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].sports.splice(topicIndex, 1);
      }
    }

    if (this.disableComputers) {
      this.topicList[this.segmentValue].computers = new Array();
      this.topicList[this.segmentValue].computers.push('computers');
    } else {
      const topicIndex = this.topicList[this.segmentValue].computers.findIndex(topic => topic === 'computers');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].computers.splice(topicIndex, 1);
      }
    }

    if (this.disableHome) {
      this.topicList[this.segmentValue].home = new Array();
      this.topicList[this.segmentValue].home.push('home');
    } else {
      const topicIndex = this.topicList[this.segmentValue].home.findIndex(topic => topic === 'home');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].home.splice(topicIndex, 1);
      }
    }

    if (this.disableShopping) {
      this.topicList[this.segmentValue].shopping = new Array();
      this.topicList[this.segmentValue].shopping.push('shopping');
    } else {
      const topicIndex = this.topicList[this.segmentValue].shopping.findIndex(topic => topic === 'shopping');

      if (topicIndex !== -1) {
        this.topicList[this.segmentValue].shopping.splice(topicIndex, 1);
      }
    }

    this.selectChanged();
  }

  selectChanged() {
    this.option[this.segmentValue] = this.topicList[this.segmentValue];
    this.option.name = 'Topics';
    this.userOptionChanged.emit(this.option);
  }
}
