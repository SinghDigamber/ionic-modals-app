import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})

export class ModalPopupPage {
  @Input() name: string;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    console.log(navParams.get('name'));
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
