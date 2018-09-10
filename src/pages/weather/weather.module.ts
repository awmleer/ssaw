import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import {PipesModule} from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    WeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherPage),
    PipesModule,
  ],
})
export class WeatherPageModule {}
