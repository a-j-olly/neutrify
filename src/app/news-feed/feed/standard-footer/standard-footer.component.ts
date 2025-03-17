import { Component, Input, OnInit } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Component({
	selector: 'app-standard-footer',
	templateUrl: './standard-footer.component.html',
	styleUrls: ['./standard-footer.component.scss'],
})
export class StandardFooterComponent implements OnInit {
	@Input() sourceTitle: string;
	@Input() time;
	@Input() layout;

	constructor() {}

	ngOnInit() {
    this.time = this.getArticleAge(this.time);
  }

	public getArticleAge(date: string) {
		const diff = new Date().valueOf() - new Date(date).valueOf();
		const ageInMinutes = Math.floor(Math.abs(diff / 36e5) * 60);
		let age: string;
		if (ageInMinutes <= 15) {
			age = 'Just Now';
		} else {
			age = `${formatDistanceToNow(new Date(date))} ago`;
		}

		return age;
	}
}
