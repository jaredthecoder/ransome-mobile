import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import axios from 'axios';
import {Device} from 'ionic-native';
import {Platform} from 'ionic-angular';


/*
   Generated class for the Groupcreatemodal page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
selector: 'page-groupcreatemodal',
templateUrl: 'groupcreatemodal.html'
})
export class GroupCreateModalPage {

	groupName; goalValue; goalStart; goalEnd; ransom;

	constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

	ionViewDidLoad() {
		console.log('Hello GroupCreateModalPage Page');
	}

	dismiss() {

		var uuid;
		var token;
		let uuidRequest = {'name': this.groupName};

        NativeStorage.getItem('authToken')
          .then(
            data => {
                var config = { 'headers': {'Token': data.authToken}};
                let url = "http://get-ranso.me/group";

                axios.post(url, uuidRequest, config).then(function(response) {
                    let postData = { 'group_id': response.data.uuid,
                        'ransom': this.ransom,
                        'steps': this.goalValue,
                        'start': this.goalStart,
                        'end': this.goalEnd };

                    axios.post(url, postData, config);
                });
            },
            error => console.error(error)
        );
		this.viewCtrl.dismiss();
	}

}
