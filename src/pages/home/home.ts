import { Component, ViewChild, ElementRef } from '@angular/core';
import { GroupActionPage } from '../groupaction/groupaction';
import { Platform, NavController } from 'ionic-angular';
import axios from 'axios';
// import { ProgressBar } from 'progressbar.js';



declare var Pedometer:any
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  directives: []
})

export class HomePage {

   @ViewChild('groupName') groupName: ElementRef;
   @ViewChild('groupStatus') groupStatus: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform) {
      setTimeout(() => {
        this.checkGoals();
      }, 10000);
  }

  ngOnInit() {

    this.checkGoals();
    // If not in a group then say you're not in a group, take to join a group

    this.groupName.nativeElement.innerHTML = 'CS Peeps';
    this.groupStatus.nativeElement.innerHTML = '0' + '/' + '20';
    
    var successHandler = function (pedometerData) {
	this.groupStatus.nativeElement.innerHTML = pedometerData + '/' + '20';
    }
    pedometer.startPedometerUpdates(successHandler, onError);
    
    console.log('Testing!');
  }


  checkGoals() {
    // Get list of goals you have
	this.platform.ready().then(() => {
		console.log('Check goals');

               var successHandler = function (pedometerData) {
                    console.log(pedometerData.numberOfSteps);
                    console.log(pedometerData.distance);
                };
                var options = {
                    "startDate": new Date("Fri Nov 11 2016 15:20:00"),
                    "endDate": new Date("Sat Nov 12 2016 15:25:00")
                };
                Pedometer.queryData(successHandler, options); 
                console.log('after querying pedometer');
        });
  }

  openGroupActionPage() {
    this.navCtrl.push(GroupActionPage);
  }
}
