import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Database_manager } from './model/DAO/database_manager.model';
import { base_data } from './model/data/base_data.model';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { one_signal_app_id, edit_price_line } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage' ;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  msgs = [];
  constructor(private storage : Storage , private router : Router , private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private dbm : Database_manager, private loader : LoadingController, private onesignal : OneSignal ) {
    this.initializeApp();
  }

  async initializeApp() {
    const loading = await this.loader.create({
      spinner: null,
      duration: 6000,
      message: 'Veillez patienter...',
      translucent: true,
    }) ;
    loading.present().then(()=>{

    }) 
    
    if (this.platform.is('android')) {
      this.statusBar.backgroundColorByHexString("#33000000");
    }
    this.platform.ready().then( async () => {
        this.dbm.init_all_table();
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.splashScreen.hide();
        loading.dismiss() ;

        var notificationOpenedCallback = function(jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
    
        window["plugins"].OneSignal
          .startInit(one_signal_app_id, "")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();

     });
  }



  
  
}
