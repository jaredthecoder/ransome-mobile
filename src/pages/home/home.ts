import { Component } from '@angular/core';

import { GroupActionPage } from '../groupaction/groupaction';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
