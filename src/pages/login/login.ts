import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {

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
            console.log(response);
            this.storage.set('authToken', response.data.token);
            this.storage.set('userUUID', response.data.uuid);
            this.storage.get('authToken').then((value) => {
                console.log('Value from storage: ' + value);
            });
            console.log('Pushing new page on');
            this.navCtrl.push(TabsPage);
        }.bind(this))
        .catch(function (error) {
            console.log('Throwing error');
            console.log(error);
            let alertUser = this.alertCtrl.create({
              title: 'Wrong Password or Email!',
              subTitle: 'Try again with a valid password or email address.',
              buttons: ['Try Again']
            });
            alertUser.present();
        }.bind(this));
    }
}
