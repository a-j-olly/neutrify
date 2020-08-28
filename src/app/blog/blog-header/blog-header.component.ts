import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent implements OnInit {
  public disableNavButtons: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  async navTo(path: string, replaceUrl: boolean) {
    if (!this.disableNavButtons) {
      this.disableNavButtons = true;
      await this.router.navigateByUrl(path, { replaceUrl });
    }
    this.disableNavButtons = false;
  }
}
