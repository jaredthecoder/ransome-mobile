import {Injectable}     from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx';

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

  constructor(public navCtrl: NavController, public http: Http) {}

  ionViewDidLoad() {
    console.log('Hello RegistrationPage Page');
  }

  register()
  {
    let params: URLSearchParams = new URLSearchParams();
        params.set('first_name', this.first_name);
        params.set('last_name', this.last_name);
        params.set('email', this.email); 
        params.set('address', this.address); 
        params.set('city', this.city); 
        params.set('state', this.state); 
        params.set('zipcode', this.zipcode); 
        params.set('password', this.password); 

   let url = "http://10.67.48.90:8000/";

   return this.http.post(url, { search: params })
            .map(res => res.json())
  }

}
