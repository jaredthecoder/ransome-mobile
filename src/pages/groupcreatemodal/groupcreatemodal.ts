import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the Groupcreatemodal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-groupcreatemodal',
  templateUrl: 'groupcreatemodal.html'
})
export class GroupCreateModalPage {

    groupName;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello GroupCreateModalPage Page');
  }

  dismiss() {
    let data = { 'groupName': this.groupName };
    this.viewCtrl.dismiss(data);
  }

}
