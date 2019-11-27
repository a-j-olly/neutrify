import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() rating: number;
  @Input() hasRated: boolean;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  @Output() hasRatedChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  hoverIndex: number;
  // function used to change the value of our rating
  // triggered when user, clicks a star to change the rating
  rate(index: number) {
    if (!this.hasRated) {
      this.rating = index;
      this.ratingChange.emit(this.rating);
      this.hasRated = true;
      this.hasRatedChange.emit(this.hasRated);
    }
  }

 /* function to return the color of a star based on what
      index it is. All stars greater than the index are assigned
      a grey color , while those equal or less than the rating are
      assigned a color depending on the rating. Using the following criteria:
  */
  getColor(index: number) {
    if (this.isAboveRating(index)) {
      if (this.hoverIndex && this.hoverIndex >= index && !this.hasRated) {
        return '#ffb400'; // Yellow
      } else {
        return '#d3d3d3'; // Grey
      }
    } else {
      if (this.hoverIndex && this.hoverIndex < index && !this.hasRated) {
        return '#d3d3d3'; // Grey
      } else {
        if (this.hasRated) {
          return '#875e00';
        } else {
          return '#ffb400'; // Yellow
        }
      }
    }
  }

  // returns whether or not the selected index is above ,the current rating
  // function is called from the getColor function.
  isAboveRating(index: number): boolean {
    return index > this.rating;
  }

}
