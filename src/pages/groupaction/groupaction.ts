import { Component } from '@angular/core';

import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { GroupCreateModalPage } from '../groupcreatemodal/groupcreatemodal';

@Component({
  selector: 'page-groupaction',
  templateUrl: 'groupaction.html'
})

export class GroupActionPage {

    groupName;

    constructor(public navCtrl: NavController, private navParams: NavParams, public view: ViewController, public modalCtrl: ModalController) {

    }

    joinExistingGroup() {
        // Query backend with GET for group with this.groupName
        // POST to API saying we added them to this group.
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
