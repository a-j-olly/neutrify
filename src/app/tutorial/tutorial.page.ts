import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  public showSkip = true;
  @ViewChild('page') page: IonContent;

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    console.log(this.getLang());
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        // this.router.navigateByUrl('/app', { replaceUrl: true });
      }
    });
  }

  onSlideChangeStart(event) {
    this.pageScroller();
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  startApp() {
    this.router
      .navigateByUrl('/app', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  public pageScroller() {
    this.page.scrollToTop();
  }

  getLang() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  }
}
