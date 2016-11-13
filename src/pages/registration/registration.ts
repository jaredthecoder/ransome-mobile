import {Http} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import axios from 'axios';

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

   first_name;
   last_name;
   email;
   address;
   city;
   state;
   zipcode;
   password;
   data;

  constructor(public navCtrl: NavController, public http: Http) {}

  ionViewDidLoad() {
    console.log('Hello RegistrationPage Page');
  }

  register()
  {
        this.data = {'first_name': this.first_name,
        	'last_name': this.last_name,
        	'email': this.email,
        	'address': this.address, 
        	'city': this.city,
        	'state': this.state, 
        	'zipcode': this.zipcode, 
        	'password': this.password}; 

   let url = "http://10.67.48.90:8000/user";
   axios.post(url, this.data).then((res) => {console.log(res)});

   this.navCtrl.push(LoginPage);
  }

}
