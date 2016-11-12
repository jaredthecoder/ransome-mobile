import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';

/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandingPage Page');
  }

  openRegisterPage(){
  	this.navCtrl.push(RegistrationPage);
  	
  }

  openLoginPage(){
  	this.navCtrl.push(LoginPage);
  	
  }

}
