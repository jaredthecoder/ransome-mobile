import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LandingPage } from '../pages/landing/landing';

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {
    rootPage = LandingPage;
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          // Splashscreen.hide();
        });
    }
}
