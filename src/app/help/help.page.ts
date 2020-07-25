import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  @ViewChild('page') page: IonContent;
  private platformSource: string;

  constructor(
    private router: Router,
    private platform: Platform,
    private themeDetection: ThemeDetection
  ) {
    this.platform.ready().then((readySource) => this.platformSource = readySource);

    if (this.platformSource !== 'dom') {
      this.platform.resume.subscribe(() => {
        this.themeDetection.isAvailable().then((res: ThemeDetectionResponse) => {
          if (res.value) {
            this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
              document.body.classList.toggle('dark', res.value);
            }).catch((error: any) => console.error(error));
          }
        }).catch((error: any) => console.error(error));
      });
    }
  }

  ngOnInit() {
  }

  onSlideChange(event) {
    this.page.scrollToTop();
  }

  backToApp() {
    this.router.navigateByUrl('/app', { replaceUrl: true });
  }
}
