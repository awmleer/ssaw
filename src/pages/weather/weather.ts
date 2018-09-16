import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';
import {Geoposition} from '@ionic-native/geolocation';
import {Realtime} from '../../classes/realtime'
import {Forecast} from '../../classes/forecast'


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  get position(): Geoposition {
    return this.weatherSvc.position;
  }

  realtime: Realtime = null;
  forecast: Forecast = null;

  rainDrops = Array(50);

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
