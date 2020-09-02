import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-unbiased-news',
  templateUrl: './unbiased-news.page.html',
  styleUrls: ['./unbiased-news.page.scss'],
})
export class UnbiasedNewsPage implements OnInit {

  constructor(
    private router: Router,
    private meta: MetaService
  ) {
    const pageDescription = 'Follow these 5 tips to become better informed, and less susceptable to media manipulation. Media Bias, Framing, Opinion Columns and More!';
    this.meta.updateMetaInfo(pageDescription);
  }

  ngOnInit() {
  }

  navTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
