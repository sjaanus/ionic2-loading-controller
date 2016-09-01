import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController, private loadingController : LoadingController) {
  
  }
  
   public ionViewLoaded() {
        console.log("ionViewLoaded");
        this.startLoading();
    }
	
	 public startLoading() {
        let loading = this.loadingController.create({
            content: 'Please wait...'
        });
        console.log("creating loader");
        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 5000);
    }
}
