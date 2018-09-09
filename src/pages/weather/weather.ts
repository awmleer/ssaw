import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';
import {Geoposition} from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  get position(): Geoposition {
    return this.weatherSvc.position;
  }

  realtime = null;
  forecast = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private weatherSvc: WeatherService,
  ) {}

  async ionViewDidLoad() {
    await this.weatherSvc.getPosition();
    this.realtime = await this.weatherSvc.getRealtime();
    this.forecast = await this.weatherSvc.getForecast();
  }

}
