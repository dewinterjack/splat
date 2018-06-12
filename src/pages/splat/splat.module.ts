import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Splat } from './splat';

@NgModule({
  declarations: [
    Splat,
  ],
  imports: [
    IonicPageModule.forChild(Splat),
  ],
})
export class SplatModule {}
