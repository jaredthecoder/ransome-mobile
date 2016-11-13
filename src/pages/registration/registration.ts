import {Http} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

   let url = "10.67.48.90:8000";

   console.log("Should be posting a request\n");

   console.log(this.http.post(url, this.data).map(res => res.json()));
   console.log(this.http.get("http://10.67.48.90:8000/").map(res => res.json()));
   console.log("After post\n");
  }

}
