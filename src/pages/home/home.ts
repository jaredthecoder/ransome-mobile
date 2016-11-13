import { Component, ViewChild, ElementRef } from '@angular/core';
import { GroupActionPage } from '../groupaction/groupaction';
import { NavController } from 'ionic-angular';
// import { ProgressBar } from 'progressbar.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  directives: []
})

export class HomePage {

   @ViewChild('groupName') groupName: ElementRef;
   @ViewChild('currentProgress') currentProgress: ElementRef;
   @ViewChild('totalGoal') totalGoal: ElementRef;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.groupName.nativeElement.innerHTML = 'CS Peeps';
    this.currentProgress.nativeElement.innerHTML = '20';
    this.totalGoal.nativeElement.innerHTML = '100';
    console.log('Testing!');
  }


  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
