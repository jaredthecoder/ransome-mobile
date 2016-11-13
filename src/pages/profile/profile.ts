import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }

  getBalance() {
    // Fetch balance from server
  }

  ngOnInit() {
    this.getBalance();
  }


}
