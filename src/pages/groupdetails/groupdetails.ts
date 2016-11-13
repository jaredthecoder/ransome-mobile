import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Groupdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-groupdetails',
  templateUrl: 'groupdetails.html'
})
export class GroupDetailsPage {

  public header: any;
  constructor(public navCtrl: NavController, public params: NavParams) 
  {
	this.header = params.get('header');
  }

  ionViewDidLoad() {
    console.log('Hello GroupDetailsPage Page');
  }

}
