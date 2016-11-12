import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoalsPage } from '../pages/goals/goals';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { GroupActionPage } from '../pages/groupaction/groupaction';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    GoalsPage,
    ProfilePage,
    GroupActionPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalsPage,
    ProfilePage,
    HomePage,
    GroupActionPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
