import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import axios from 'axios';

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
                var config = { 'headers': {'Token': token}};
                let url = "http://10.67.48.90:8000/group";


                axios.post(url, uuidRequest, config).then(function(response)
                        {uuid = response.data.uuid}.bind(this));

                let postData = { 'group_id': uuid,
                    'ransom': this.ransom,
                    'steps': this.goalValue,
                    'start': this.goalStart,
                    'end': this.goalEnd };

                axios.post(url, postData, config);
            },
            error => console.error(error)
          );
		this.viewCtrl.dismiss();
	}

}
