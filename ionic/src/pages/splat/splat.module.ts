import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'
import { Splat } from './splat';

@NgModule({
  declarations: [
    Splat,
  ],
  imports: [
    IonicPageModule.forChild(Splat),
  ],
  providers: [
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class SplatModule {}
