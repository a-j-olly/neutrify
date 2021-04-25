import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { IonContent, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-media-bias',
  templateUrl: './media-bias.page.html',
  styleUrls: ['./media-bias.page.scss'],
})
export class MediaBiasPage {
  @ViewChild('content') content: IonContent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: MetaService,
    private platform: Platform,
    private inAppBrowser: InAppBrowser
  ) {
    const pageDescription = 'Discover 10 ways media bias misleads you and become less susceptible to media manipulation. '
    + 'Sensationalism, Gatekeeping, Statement Bias and More!';
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
