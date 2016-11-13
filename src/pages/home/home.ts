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
   @ViewChild('groupStatus') groupStatus: ElementRef;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.groupName.nativeElement.innerHTML = 'CS Peeps';
    this.groupStatus.nativeElement.innerHTML = '10' + '/' + '20';
    console.log('Testing!');
  }


  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
