import { Component } from '@angular/core';
import { GroupActionPage } from '../groupaction/groupaction';
import { NavController } from 'ionic-angular';
// import { ProgressBar } from 'progressbar.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  directives: []
})

export class HomePage {

  progressValue;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {

    this.progressValue = 20;
    console.log('Testing!');
  }

  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
