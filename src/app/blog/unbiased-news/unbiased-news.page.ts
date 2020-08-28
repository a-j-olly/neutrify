import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unbiased-news',
  templateUrl: './unbiased-news.page.html',
  styleUrls: ['./unbiased-news.page.scss'],
})
export class UnbiasedNewsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
