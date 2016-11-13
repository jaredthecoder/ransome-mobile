import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

	groupName; groupValue; groupStart; groupEnd; ransom;

	constructor(public navCtrl: NavController, public viewCtrl: ViewController, public storage: Storage) 
	{
	}

	ionViewDidLoad() {
		console.log('Hello GroupCreateModalPage Page');
	}

	dismiss() {

		var uuid;
		var token;

		console.log(device.uuid);
		this.storage.get('authToken').then((value) => {
				console.log('Value from storage: ' + value);
				token = value;});

		var config = { 'headers': {'Token': token}};
		let url = "http://10.67.48.90:8000/group";
		let uuidRequest = {'name': this.groupName};

		axios.post(url, uuidRequest, config).then(function(response)
				{uuid = response.data.uuid}.bind(this));

		let data = { 'group_id': uuid,
			'ransom': this.ransom,
			'steps': this.groupValue,
			'start': this.groupStart,
			'end': this.groupEnd };

		axios.post(url, data, config);

		this.viewCtrl.dismiss();
	}

}
