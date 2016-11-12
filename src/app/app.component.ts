import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LandingPage } from '../pages/landing/landing';


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {
<<<<<<< HEAD
  rootPage = LandingPage;
=======
    @ViewChild(Nav) nav: Nav;

    rootPage = TabsPage;
>>>>>>> 335f007db57f5b646f527f3ab577b50ab300aea8

    constructor(platform: Platform) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          Splashscreen.hide();
        });
    }
}
