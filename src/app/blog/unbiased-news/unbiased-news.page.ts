import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { IonContent, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-unbiased-news',
  templateUrl: './unbiased-news.page.html',
  styleUrls: ['./unbiased-news.page.scss'],
})
export class UnbiasedNewsPage {
  @ViewChild('content') content: IonContent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: MetaService,
    private platform: Platform,
    private inAppBrowser: InAppBrowser
  ) {
    const pageDescription = 'Follow these 5 tips to become better informed, and less susceptible to media manipulation. '
    + 'Media Bias, Framing, Opinion Columns and More!';
    this.meta.updateMetaInfo(pageDescription);
  }

  public ionViewDidEnter() {
    this.route.fragment.subscribe(async (fragment: string) => {
      if (fragment) {
        await this.scrollTo(fragment);
      }
    });
  }

  public async openPage(url: string) {
    this.inAppBrowser.create(encodeURI(url), '_system');
  }

  public async navTo(path: string) {
    await this.router.navigateByUrl(path);
  }

  private async scrollTo(id: string) {
    let yOffset = document.getElementById(id).offsetTop;

    if (!this.platform.is('ios')) {
      yOffset = yOffset + 120;
    } else {
      yOffset = yOffset + 100;
    }

    await this.content.scrollToPoint(0, yOffset, 0);
  }
}
