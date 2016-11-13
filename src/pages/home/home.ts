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

    this.checkGoals();
    // If not in a group then say you're not in a group, take to join a group

    this.groupName.nativeElement.innerHTML = 'CS Peeps';
    this.groupStatus.nativeElement.innerHTML = '10' + '/' + '20';
    console.log('Testing!');
  }


  checkGoals() {
    // Get list of goals you have
   var successHandler = function (pedometerData) {
        console.log(pedometerData.numberOfSteps);
        console.log(pedometerData.distance);
    };
    var options = {
        "startDate": new Date("Fri May 01 2015 15:20:00"),
        "endDate": new Date("Fri May 01 2015 15:25:00")
    };
    //pedometer.queryData(successHandler, options); 

  }

  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
