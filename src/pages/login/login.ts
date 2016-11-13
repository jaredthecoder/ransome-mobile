import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import axios from 'axios';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email;
  password;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

    login() {
        axios.post('http://10.67.48.90:8000', {
            email: this.email,
            password: this.password
        })
        .then(function (response) {
            console.log(response);
            window.localStorage.setItem( 'authToken', response.token);
            window.localStorage.setItem( 'userUUID', response.uuid);
        })
        this.navCtrl.push(TabsPage);
    }

}
