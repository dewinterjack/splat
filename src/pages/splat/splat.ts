import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-splat',
  templateUrl: 'splat.html'
})
export class Splat {

  constructor(public navCtrl: NavController) {

  }

  buildURL(user:string="jackdewinter") {
    console.log(`Beginning Authorisation for ${user}`)
  }

}
