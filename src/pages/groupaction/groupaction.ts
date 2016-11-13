import { Component } from '@angular/core';

import { NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';

import { GroupCreateModalPage } from '../groupcreatemodal/groupcreatemodal';
import { TabsPage } from '../

@Component({
  selector: 'page-groupaction',
  templateUrl: 'groupaction.html'
})

export class GroupActionPage {

    groupName;

    constructor(public navCtrl: NavController, private navParams: NavParams, public view: ViewController, public modalCtrl: ModalController, public alertCtrl: AlertController ) {

    }

    joinExistingGroup() {


        // Query backend with GET for group with this.groupName
        axios.post('http://10.67.48.90:8000/join', {
            group_id: this.group_id);
        })
        .then(function (response) {
            console.log(response);
            console.log('Pushing new page on');
            this.navCtrl.push(TabsPage);
        }.bind(this))
        .catch(function (error) {
            console.log('Throwing error');
            console.log(error);
            let alertUser = this.alertCtrl.create({
              title: 'Uh-Oh!',
              subTitle: 'We messed up. Please try again later.',
              buttons: ['OK']
            });
            alertUser.present();
        }.bind(this));
    }

    createGroup() {
        let groupModal = this.modalCtrl.create(GroupCreateModalPage);
        groupModal.onDidDismiss(data => {
            console.log(data);
            // POST to API the group info
        });
        groupModal.present();
    }

}
