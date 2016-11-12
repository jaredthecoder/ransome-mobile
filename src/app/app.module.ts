import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoalsPage } from '../pages/goals/goals';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { GroupActionPage } from '../pages/groupaction/groupaction';
import { GroupCreateModalPage } from '../pages/groupcreatemodal/groupcreatemodal';
import { TabsPage } from '../pages/tabs/tabs';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';

@NgModule({
  declarations: [
    MyApp,
    GoalsPage,
    ProfilePage,
    GroupActionPage,
    HomePage,
    TabsPage,
    RegistrationPage,
    LoginPage,
    LandingPage,
    GroupCreateModalPage
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
    RegistrationPage,
    LoginPage,
    LandingPage,
    GroupActionPage,
    GroupCreateModalPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
