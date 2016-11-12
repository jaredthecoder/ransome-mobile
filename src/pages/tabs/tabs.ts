import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GroupsPage } from '../groups/groups';
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = GroupsPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
