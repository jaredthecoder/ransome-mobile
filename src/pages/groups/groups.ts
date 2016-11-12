import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})

export class GroupsPage {

    constructor(public navCtrl: NavController, private navParams: NavParams) {
        this.initializeItems();
    }

    searchQuery: string = '';
    items: string[];

      initializeItems() {
        this.items = [
            'CS Peeps',
            'Design Peeps',
            'Math Peeps'
        ];
      }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

       // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      }

}
