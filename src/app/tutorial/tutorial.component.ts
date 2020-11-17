import { IonSlides, ModalController } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent {
  public buttonClicked = false;
  @ViewChild('slides') slides: IonSlides;
  public backButtonDisabled = false;
  public nextButtonDisabled = false;
  public currentSlideIndex: number;

  constructor(private modalController: ModalController) { }

  async ionViewWillEnter() {
    this.slides.update();
    this.currentSlideIndex = await this.slides.getActiveIndex();
  }

  public async slideNext() {
    this.buttonClicked = true;
    await this.slides.slideNext();
    this.buttonClicked = false;
  }

  public async slidePrev() {
    this.buttonClicked = true;
    await this.slides.slidePrev();
    this.buttonClicked = false;
  }

  public async checkSlidesPos() {
    this.currentSlideIndex = await this.slides.getActiveIndex();
    this.backButtonDisabled = await this.slides.isBeginning();
    this.nextButtonDisabled = await this.slides.isEnd();
  }

  public async dismiss() {
    await this.modalController.dismiss();
  }
}
