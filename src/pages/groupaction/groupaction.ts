import { Component } from '@angular/core';

import { NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';

import { GroupCreateModalPage } from '../groupcreatemodal/groupcreatemodal';
import { TabsPage } from '../tabs/tabs';
import { NativeStorage } from 'ionic-native';

import axios from 'axios';

@Component({
  selector: 'page-groupaction',
  templateUrl: 'groupaction.html'
})

export class GroupActionPage {

    groupName;

    constructor(public navCtrl: NavController, private navParams: NavParams, public view: ViewController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    }

    joinExistingGroup() {

        var token;

        NativeStorage.getItem('authToken')
          .then(
            data => {
                var config = { 'headers': {'Token': data.authToken}};
                // Query backend with GET for group with this.groupName
                axios.get('http://get-ranso.me/groups' + this.groupName, config)
                .then(function (response) {
                    axios.post('http://get-ranso.me/join', {
                        group_id: response.data.group_id
                    }, config)
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
            });
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
