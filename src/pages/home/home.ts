import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController) {

  }

  // align text input

}
