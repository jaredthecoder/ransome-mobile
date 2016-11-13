import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { NativeStorage } from 'ionic-native';

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
  errorMessage;
  alertUser;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

    login() {
        console.log(this.email);
        console.log(this.password);

        axios.post('http://10.67.48.90:8000/login', {
            email: this.email,
            password: this.password
        })
        .then(function (response) {
            NativeStorage.setItem('authToken', {authToken: response.data.token})
              .then(
                () => console.log('Stored token!'),
                error => console.error('Error storing item', error)
              );
            NativeStorage.setItem('userUUID', {authToken: response.data.uuid})
              .then(
                () => console.log('Stored user uuid!'),
                error => console.error('Error storing item', error)
              );
            console.log('Pushing new page on');
            this.navCtrl.push(TabsPage);
        }.bind(this));
    }
}
